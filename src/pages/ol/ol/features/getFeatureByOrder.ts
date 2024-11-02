import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj';
import { Order } from '@/common/types/dto-types.ts'
import { getRandomColor } from '@/pages/ol/utils/getRundomColor.ts'

export const getFeatureByOrder = (order: Order): Feature<Point> => {
    const coordsPoint = fromLonLat([Number(order.location.longitude), Number(order.location.latitude)]);
    return  new Feature({
      geometry: new Point(coordsPoint),
      zIndex: order.orderId,
      color: getRandomColor(true),
      title: 'stopFeature',
    });
};
