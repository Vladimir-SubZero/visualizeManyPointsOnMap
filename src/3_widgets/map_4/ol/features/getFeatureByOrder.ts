import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj';
import { Order } from '@/6_shared/types/dto-types.ts'
import { getRandomColor } from '@/3_widgets/map_4/utils/getRundomColor.ts'
import { orderIconsModule } from '@/3_widgets/map_4/utils/getMapIcons.ts'

export const getFeatureByOrder = (order: Order): Feature<Point> => {
  const coordsPoint = fromLonLat([
    Number(order.location.longitude),
    Number(order.location.latitude)
  ]);
  const feature = new Feature({
    geometry: new Point(coordsPoint),
    zIndex: order.orderId,
    color: getRandomColor(true),
    title: 'stopFeature',
  });

  feature.setStyle(orderIconsModule.getOrderIcon(feature as Feature<Point>))

  return  feature
};
