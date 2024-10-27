import {
  getDataFailedKey,
  getDataLoadedKey,
  getDataLoadingKey,
  getDataNotAskedKey
} from '@/common/utils/data-state/data-state-utils'
import cloneDeep from 'lodash/cloneDeep'
import { defineStore } from 'pinia'
import { Nullable } from '@/common/types/frontend-utility-types'
import { requestOrders } from '@/common/backend-api-utils/orders-api'
import { getRequestAbortController } from '@/common/request-abort-controller'
import { handleRequestError } from '@/common/utils/error/handle-request-error'
import { BackendApiError } from '@/common/types/frontend-data-types'
import { OrdersStore } from '@/pages/services/pinia-stores/ordersStore/types'

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
} as State;

export const useOrdersStore = defineStore<'ordersStore', State, Store['getters'], Store['actions']>({
  id: 'ordersStore',
  state: () => ({ ...cloneDeep(initialState) }),
  getters: {
    getOrders(state) {
      return state.ordersApi.serverData;
    },
  },
  actions: {


    async loadOrders() {
      const ordersStore = useOrdersStore()
      const ordersApi = ordersStore.ordersApi
      try {
        ordersApi.loadingState = getDataLoadingKey();
        abortControllers.loadOrders = getRequestAbortController()
        const { data } = await requestOrders({countOrders: 100}, abortControllers.loadOrders.signal);

        ordersApi.backendApiError = null;
        ordersApi.serverData = data;


        ordersApi.loadingState = getDataLoadedKey();
      } catch (error) {
        ordersApi.loadingState = getDataFailedKey();

        handleRequestError(error, (backendApiError: BackendApiError) => {
          console.log('scene load() -> FAIL', backendApiError);

          ordersApi.backendApiError = backendApiError;
        });
      }
    },
  },
});
