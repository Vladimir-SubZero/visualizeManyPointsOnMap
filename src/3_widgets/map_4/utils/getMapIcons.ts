import Feature from 'ol/Feature';
import { Icon, Style } from 'ol/style'
import { Point } from 'ol/geom';
import { getCanvasOrderIcon } from '@/3_widgets/map_4/utils/textures.ts'
// import { Nullable } from '@/6_shared/types/frontend-utility-types.ts'
import { $Values } from 'utility-types'
import { TYPES_ICONS } from '@/3_widgets/map_4/utils/constants.ts'

type ConfigStyleIcons = {
  typeIcon: TypeIcons;
  color: string;
}
type TypeIcons = $Values<typeof TYPES_ICONS>;
// type CacheStyles = {
//   [type in TypeIcons]: StyleByColor
// }
// type StyleByColor = {
//   [color: string]: Style | null;
// };

export const orderIconsModule = (function() {
  // const cacheIcons: CacheStyles = {
  //   SQUARE: {},
  //   PIN: {}
  // }
  // const getStyleByCache = (config: ConfigStyleIcons): Nullable<Style> => {
  //   const {typeIcon, color} = config
  //   return cacheIcons[typeIcon][color]
  // }
  // const setStyleToCache = (config: ConfigStyleIcons, style: Style): void => {
  //   const {typeIcon, color} = config
  //   cacheIcons[typeIcon][color] = style
  // }
  const createOrderStyleIcon = (config: {typeIcon: string, color: string}): Style => {
    const canvas = getCanvasOrderIcon(config.color);
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
  return {
    getOrderIcon: (feature: Feature<Point>): Style[] => {
      const color = feature.get('color');
      const config: ConfigStyleIcons = {typeIcon: 'SQUARE', color: color}
      // const cacheStyle = getStyleByCache(config)
      // if (!cacheStyle) {
      const style = createOrderStyleIcon(config)
      // setStyleToCache(config, style)
      return [style]
      // }
      // return [cacheStyle]
    }
  }
})()

