import {
  getDataFailedKey,
  getDataLoadedKey,
  getDataLoadingKey,
  getDataNotAskedKey
} from '@/6_shared/utils/data-state/data-state-utils.ts'
import cloneDeep from 'lodash/cloneDeep'
import { defineStore } from 'pinia'
import { Nullable } from '@/6_shared/types/frontend-utility-types.ts'
import { requestOrders } from '@/6_shared/backend-api-utils/orders-api'
import { getRequestAbortController } from '@/6_shared/request-abort-controller'
import { handleRequestError } from '@/6_shared/utils/error/handle-request-error.ts'
import { BackendApiError } from '@/6_shared/types/frontend-data-types.ts'
import { OrdersStore } from '@/6_shared/services/pinia-stores/ordersStore/types.ts'
import { loadOrdersOnGisMap } from '@/3_widgets/map_1/actions/ordersActions.ts'

const abortControllers: Record<'loadOrders', Nullable<AbortController>> = {
  loadOrders: null,
};

type Store = OrdersStore;
type State = Store['state'];

export type OrdersStoreThis = ReturnType<typeof useOrdersStore>;

export const initialState: State = {
  ordersApi: {
    convertedServerData: {
      convertedOrders: null,
    },
    serverData: null,
    loadingState: getDataNotAskedKey(),
    backendApiError: null,
  },
  countersPerformance: {
    durationRequest: 0,
    durationScripts: 0,
  }
};

export const useOrdersStore = defineStore<'ordersStore', State, Store['getters'], Store['actions']>({
  id: 'ordersStore',
  state: () => ({ ...cloneDeep(initialState) }),
  getters: {
    getOrders(state) {
      return state.ordersApi.convertedServerData.convertedOrders ?? [];
    },
    getDurationRequest(state) {
      return state.countersPerformance.durationRequest;
    },
    getDurationScripts(state) {
      return state.countersPerformance.durationScripts;
    },

  },
  actions: {

    async loadOrders(countOrders = 100) {
      const startDurationRequest = window.performance.now();

      const ordersStore = useOrdersStore()
      const ordersApi = ordersStore.ordersApi
      try {
        ordersApi.loadingState = getDataLoadingKey();
        abortControllers.loadOrders = getRequestAbortController()
        const { data } = await requestOrders({countOrders}, abortControllers.loadOrders.signal);
        if (data) {
          ordersApi.backendApiError = null;
          ordersApi.serverData = data;
          ordersApi.convertedServerData.convertedOrders = data.orders

          const endDurationRequest = window.performance.now();
          const timeRequest = endDurationRequest - startDurationRequest
          this.setDurationRequest(timeRequest);

          loadOrdersOnGisMap(data.orders);
        }
        ordersApi.loadingState = getDataLoadedKey();
      } catch (error) {
        ordersApi.loadingState = getDataFailedKey();

        handleRequestError(error, (backendApiError: BackendApiError) => {
          console.log('scene load() -> FAIL', backendApiError);

          ordersApi.backendApiError = backendApiError;
        });
      }



    },

    setDurationRequest(time) {
      this.$state.countersPerformance.durationRequest = time
    },
    setDurationScripts(time) {
      this.$state.countersPerformance.durationScripts = time
    },
  },
});
