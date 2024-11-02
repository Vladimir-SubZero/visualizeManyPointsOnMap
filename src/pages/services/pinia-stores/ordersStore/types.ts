import { Order, ResponseBodyOrders } from '@/common/types/dto-types'
import { Nullable } from '@/common/types/frontend-utility-types'
import { BackendApiError, DataStateKey } from '@/common/types/frontend-data-types'

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

};

type Getters = {
  getOrders: (state: State) => Order[];

};

type Actions = {
  loadOrders: (countOrders?: number) => Promise<void>;

};
