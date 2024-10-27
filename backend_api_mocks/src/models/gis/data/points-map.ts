import {
  Order, ResponseBodyOrders
} from '../../../common/dto-types'
import { getOrders } from '../utils/generator-points'

// const order1: Order = {
//   orderId: 1,
//   name: 'RPK99413140735',
//   status: 'NEW',
//   location: {
//     id: 56788,
//     address: 'г Раменское, Молодежная ул, д 20',
//     latitude: 45612345,
//     longitude: 52314447,
//   },
//   isDrop: true,
//   clientName: 'Тестовая ООО',
//   isValid: true,
//   duration: 1669350481 * 1000,
//   volume: 12.56,
//   weight: 51.518,
//   isKGT: true,
//   schedulingZoneId: 87,
//   schedulingZoneName: 'Южная',
//   contactNumber: '+791828288222',
//   contactPerson: 'Mister Big',
//   clientBarcode: 'unscheduled-client-barcode',
// };


// const allOrders = [
//   { ...order1 },
//
// ];

// export const bodyOrders: ResponseBodyOrders = {
//   orders: allOrders,
//   total: allOrders.length,
//   success: true,
//   errors: [],
//   warnings: [],
//   infos: [],
// };

//Количество заказов не должно быть меньше количества зон
export const bodyOrders: ResponseBodyOrders =
  getOrders(15);
