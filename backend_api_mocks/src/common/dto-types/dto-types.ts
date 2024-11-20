export type RequestParams = {
  countOrders: number;
};
export type ResponseBodyOrders = {
  orders: Order[];
  total: number;
  success: boolean;
  errors: string[];
  warnings: string[];
  infos: string[];
};

export type Order = {
  orderId: number;
  name: string;
  status: string;
  location: {
    id: number;
    address: string;
    latitude: number;
    longitude: number;
  };
  isDelivery: boolean;
  clientName?: string;
  isValid: boolean;
  duration: number;
  volume: number;
  weight: number;
  isKGT: boolean;
  territoryId?: number;
  territoryName?: string;
  contactNumber?: string;
  clientInfo?: string;
};

export type Territory = {
  id: number;
  name: string;
  area: string;
  color: string;
};
