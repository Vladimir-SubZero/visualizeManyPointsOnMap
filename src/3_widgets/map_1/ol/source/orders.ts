import { Vector as VectorSource } from 'ol/source';
import Point from 'ol/geom/Point'
import { Feature } from 'ol'

export const ordersSource = new VectorSource<Feature<Point>>({
  overlaps: false
});

