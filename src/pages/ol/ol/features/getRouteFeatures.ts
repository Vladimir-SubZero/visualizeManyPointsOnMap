import { Feature } from 'ol';
import Stroke from 'ol/style/Stroke';
import Style from 'ol/style/Style';
import Polyline from 'ol/format/Polyline';
import { route } from '@/common/data/index.ts'

export const getRouteFeature = () => {
  const lineStyle = new Style({
    stroke: new Stroke({
      color: '#2d0ecc',
      width: 4,
    }),
  });

  const routeFeature = new Feature({
    geometry: new Polyline()
      .readGeometry(route, {
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:900913',
      })
      .simplify(50),
    title: 'routeFeature',
  });
  routeFeature.setStyle(lineStyle);
  return routeFeature;
};
