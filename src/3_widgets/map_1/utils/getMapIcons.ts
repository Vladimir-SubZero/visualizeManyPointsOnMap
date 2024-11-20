import Feature from 'ol/Feature';
import { Icon, Style } from 'ol/style'

import { Point } from 'ol/geom';

import { getCanvasOrderIcon } from '@/3_widgets/map_1/utils/textures.ts'



export const getOrderIcon = (feature: Feature<Point>) => {
  const getIconStyle = (): Style[] => {
      return getPointStyle(feature);
  };
  return getIconStyle();
};


const getPointStyle = (feature: Feature<Point>): Style[] => {
  const color = feature.get('color')
  const config = {typeIcon: 'pin', color: color}
  return [createOrderStyleIcon(config)]
};


const createOrderStyleIcon = (config: {typeIcon: string, color: string}): Style => {
  const canvas = getCanvasOrderIcon(config.color);
  return  _createStyleIcon(canvas);
};

const _createStyleIcon = (icon: HTMLCanvasElement): Style => {
  return new Style({
    image: new Icon({
      crossOrigin: 'anonymous',
      img: icon,
      size: [icon.width, icon.height],
    }),
  });
};



