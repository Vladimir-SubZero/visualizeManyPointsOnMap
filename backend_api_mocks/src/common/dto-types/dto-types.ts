
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
  },
  isDrop: boolean;
  clientName?: string;
  isValid: boolean;
  duration: number;
  volume: number;
  weight: number;
  isKGT: boolean;
  schedulingZoneId?: number;
  schedulingZoneName?: string;
  contactNumber?: string;
  contactPerson?: string;
  clientBarcode?: string;
};

export type Territory = {
  id: number;
  name: string;
  area: string;
  color: string;
}
