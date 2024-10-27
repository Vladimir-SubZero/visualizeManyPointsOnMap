import VectorImageLayer from 'ol/layer/VectorImage';
import { getRouteSource } from '@/pages/ol/ol/source/routeSorce.ts';

export const polylineRouteLayer = () => {
  const polylineRouteLayer = new VectorImageLayer({
    source: getRouteSource(),
  });
  polylineRouteLayer.setProperties({ title: 'polylineRouteLayer' }, true);
  return polylineRouteLayer;
};
