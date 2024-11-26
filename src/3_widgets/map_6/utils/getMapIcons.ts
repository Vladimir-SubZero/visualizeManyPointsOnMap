import Feature from 'ol/Feature';
import { Fill, Icon, Style, Text } from 'ol/style'
import { Point } from 'ol/geom';
import { getCanvasOrderIcon, getCanvasOrdersClusterIcon } from '@/3_widgets/map_6/utils/textures.ts'
import { $Values } from 'utility-types'
import { TYPES_ICONS } from '@/3_widgets/map_6/utils/constants.ts'

type ConfigStyleIcons = {
  typeIcon: TypeIcons;
  color: string;
  isClustered: boolean;
}
type TypeIcons = $Values<typeof TYPES_ICONS>;


export const orderIconsModule = (function() {

  const createOrderStyleIcon = (config: ConfigStyleIcons): Style => {
    const canvas = config.isClustered ? getCanvasOrdersClusterIcon() : getCanvasOrderIcon(config.color);
    return  createStyleIcon(canvas);
  };
  const createStyleIcon = (icon: HTMLCanvasElement): Style => {
    return new Style({
      image: new Icon({
        crossOrigin: 'anonymous',
        img: icon,
        size: [icon.width, icon.height],
      }),
    });
  };
  const createTextStyleClusterIcon = (countFeatures: number, zIndex: number): Style => {
    const text = new Text({
      text: countFeatures.toString(),
      font: '14px Lato,sans-serif',
      fill: new Fill({
        color: '#fff',
      }),
      textAlign: 'center',
      offsetY: 0,
      offsetX: 0,
    });
    const styleText = new Style();
    styleText.setText(text);
    styleText.setZIndex(zIndex + 1);
    return styleText;
  }

  return {
    getOrderIcon: (feature: Feature<Point>): Style[] => {

      const features = feature.get('features') as Feature<Point>[];

      if(!features) return [];

      const color = features[0].get('color');
      const isClustered = features.length > 1

      const config: ConfigStyleIcons = {typeIcon: 'SQUARE', color: color, isClustered}

      const style = createOrderStyleIcon(config)

      if (isClustered) {
        const zIndex = feature.get('zIndex');
        const styleText = createTextStyleClusterIcon(features.length, zIndex)
        return [style, styleText];
      }

      return [style]
    }
  }
})()

