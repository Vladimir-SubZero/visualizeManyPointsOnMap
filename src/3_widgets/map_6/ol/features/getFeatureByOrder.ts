import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj';
import { Order } from '@/6_shared/types/dto-types.ts'
import { getRandomColor, getRandomColorArr } from '@/3_widgets/map_6/utils/getRundomColor.ts'
import { orderIconsModule } from '@/3_widgets/map_6/utils/getMapIcons.ts'

export const getFeatureByOrder = (order: Order): Feature<Point> => {
  const coordsPoint = fromLonLat([
    Number(order.location.longitude),
    Number(order.location.latitude)
  ]);
  const color = getRandomColorArr(true)
  const feature = new Feature({
    geometry: new Point(coordsPoint),
    zIndex: order.orderId,
    color: getRandomColor(true),
    sequence: order.orderId,
    row_cnt: 2,
    col_cnt: 6,
    tex_type: 1,
    size: 32,
    tex_sel: 0,
    tex_color_r: color[0],
    tex_color_g: color[1],
    tex_color_b: color[2],
    title: 'stopFeature',
  });

  feature.setStyle(orderIconsModule.getOrderIcon(feature as Feature<Point>))

  return  feature
};
