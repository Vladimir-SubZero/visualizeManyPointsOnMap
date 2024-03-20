//Утилиты для особенной фильтрациии массивов

const allOrders = [
  { id: 1, bag: 'KE01' },
  { id: 2, bag: 'KE01' },
  { id: 3, bag: 'KE02' },
  { id: 4, bag: 'KE02' },
  { id: 5, bag: 'KE03' },
  { id: 6, bag: 'KE03' },
  { id: 7, bag: 'KE04' },
  { id: 8, bag: 'KE04' },
  { id: 9, bag: 'KE05' },
  { id: 10, bag: 'KE05' },
];
const ordersForPlanning = [
  { id: 10, bag: 'KE05' },
  { id: 12, bag: 'KE01' },
  { id: 13, bag: 'KE03' },
];

//Утилита получает на вход два массива объектов и  возвращает все одинаковые заказы по признаку bag,
// но разные по id. Если в объектах одинаковые id то они игнорируются
// Данную утилиту можно приспособить под конкретные условия.
// Сейчас эта утилита применяется в ui-1 Angular части приложения
export const getIdAllOrdersFromBags = (allOrders: any[], ordersForPlanning: any[]) => {
  let plannedOrdersInBag: any = [];
  ordersForPlanning.forEach((orderForPlanning) => {
    const filteredOrders = allOrders.filter((order) => {
      if (order.id !== orderForPlanning.id) {
        if (order.bag && order.bag === orderForPlanning.bag) {
          return true;
        }
      }
      return false;
    });
    plannedOrdersInBag = [...plannedOrdersInBag, ...filteredOrders];
  });

  return [...plannedOrdersInBag, ...ordersForPlanning];
};
