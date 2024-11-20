import { Order, ResponseBodyOrders } from '@/6_shared/types/dto-types.ts'
import { Nullable } from '@/6_shared/types/frontend-utility-types.ts'
import { BackendApiError, DataStateKey } from '@/6_shared/types/frontend-data-types.ts'

export type OrdersStore = {
  state: State;
  getters: Getters;
  actions: Actions;
};

type State = {
  ordersApi: {
    serverData: Nullable<ResponseBodyOrders>;
    convertedServerData: {
      convertedOrders: Nullable<Order[]>;
    };
    loadingState: DataStateKey;
    backendApiError: Nullable<BackendApiError>;
  };
  countersPerformance: {
    durationRequest: number;
    durationScripts: number;
  };
  activeCountOrders: number;

};

type Getters = {
  getOrders: (state: State) => Order[];
  getDurationRequest: (state: State) => number;
  getDurationScripts: (state: State) => number;
};

type Actions = {
  loadOrders: (countOrders?: number) => Promise<void>;
  setDurationRequest: (time: number) => void
  setDurationScripts: (time: number) => void
  setActiveCountOrders: (countOrders: number) => void
};
