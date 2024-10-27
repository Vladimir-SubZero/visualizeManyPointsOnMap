import { Vector as VectorSource } from 'ol/source';
import Geometry from 'ol/geom/Geometry';
import { getRouteFeature } from '@/pages/ol/ol/features/getRouteFeatures.ts';

export const getRouteSource = () => {
  const source = new VectorSource<Geometry>({ wrapX: false });
  source.addFeature(getRouteFeature());
  return source;
};
