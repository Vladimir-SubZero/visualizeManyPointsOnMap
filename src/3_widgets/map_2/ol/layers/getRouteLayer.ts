import VectorImageLayer from 'ol/layer/VectorImage';
import { getRouteSource } from '@/3_widgets/map_2/ol/source/routeSorce.ts';

export const polylineRouteLayer = () => {
  const polylineRouteLayer = new VectorImageLayer({
    source: getRouteSource(),
  });
  polylineRouteLayer.setProperties({ title: 'polylineRouteLayer' }, true);
  return polylineRouteLayer;
};
