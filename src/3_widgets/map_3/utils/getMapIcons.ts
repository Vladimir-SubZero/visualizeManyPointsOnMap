import Feature from 'ol/Feature';
import { Icon, Style } from 'ol/style'

import { Point } from 'ol/geom';

import { getCanvasOrderIcon } from '@/3_widgets/map_1/utils/textures.ts'



export const getOrderIcon = (feature: Feature<Point>, isCluster = false) => {
  console.log(isCluster)
  const getIconStyle = (): Style[] => {
    // if (isCluster) {
      return getPointStyle(feature);
    // }
    // else {
    //   return getClusterPointStyle(dataForStyle);
    // }
  };

  return getIconStyle();
};


const getPointStyle = (feature: Feature<Point>): Style[] => {
  const color = feature.get('color')
  const config = {typeIcon: 'pin', color: color}
  return [createOrderStyleIcon(config)]
};

// const getClusterPointStyle = (commonStyleParams: CommonStyleParams): Style[] => {

  // const style = createClusterStyle();
  //
  // const text = new Text({
  //   text: commonStyleParams.countStops.toString(),
  //   font: 'bold 15px Lato,sans-serif',
  //   fill: new Fill({
  //     color: commonStyleParams.selected ? '#354052' : '#fff',
  //   }),
  //   textAlign: 'center',
  //   offsetY: -7,
  // });
  // const styleText = new Style();
  // styleText.setText(text);
  // styleText.setZIndex(commonStyleParams.zIndexCluster + 1);
  // style.setZIndex(commonStyleParams.zIndexCluster);
  // return [style, styleText];
// };


const createOrderStyleIcon = (config: {typeIcon: string, color: string}): Style => {

  const canvas = getCanvasOrderIcon(config.color);
  return  _createStyleIcon(canvas);
};
// const createClusterStyle = (config: {typeIcon: string}): Style => {
//
//   const canvas = getSingleOrGroupStopIcon(selected, typeIconKey, iconColors);
//   const style = _createStyleIcon(canvas);
//
//   style.setZIndex(zIndex);
//   style.getImage().setOpacity(styleStateModule.getOpacity(state));
//   return style;
// };

const _createStyleIcon = (icon: HTMLCanvasElement): Style => {
  return new Style({
    image: new Icon({
      // anchor: [0.5, 0.8],
      crossOrigin: 'anonymous',
      img: icon,
      size: [icon.width, icon.height],
    }),
  });
};



