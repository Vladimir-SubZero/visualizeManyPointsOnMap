import Point from 'ol/geom/Point'
import { Feature } from 'ol'
import { Options } from 'ol/source/Cluster'
import { Cluster } from 'ol/source'
import { createEmpty, createOrUpdateFromCoordinate, getCenter } from 'ol/extent';
import { getUid } from 'ol';
import { add as addCoordinate, scale as scaleCoordinate } from 'ol/coordinate';
import Geometry from 'ol/geom/Geometry'


export class OrdersCluster extends Cluster {
  private _createCustomCluster: ((arg0: Point, arg1: Feature<any>[]) => Feature<any>) | undefined;
  constructor(options: Options) {
    super(options);
    this._createCustomCluster = options.createCluster;
  }
  cluster() {
    function buffer(extent: number[], value: number, dest: number[]) {
      if (dest) {
        dest[0] = extent[0] - value;
        dest[1] = extent[1] - value;
        dest[2] = extent[2] + value;
        dest[3] = extent[3] + value;
        return dest;
      }
      return [extent[0] - value, extent[1] - value, extent[2] + value, extent[3] + value];
    }
    if (this.resolution === undefined || !this.source) {
      return;
    }

    const extent = createEmpty();
    const mapDistance = this.distance * this.resolution;
    const features = this.source.getFeatures();
    const clustered: Record<string, true> = {};
    const numberOfStyles = 4;
    let counterZIndex = 1;

    for (let i = 0, ii = features.length; i < ii; i++) {
      const feature = features[i];

      if (!(getUid(feature) in clustered)) {
        const geometry = this.geometryFunction(feature);
        if (geometry) {
          const coordinates = geometry.getCoordinates();
          createOrUpdateFromCoordinate(coordinates, extent);
          buffer(extent, mapDistance, extent);
          const neighbors = this.source.getFeaturesInExtent(extent).filter(function (neighbor: Feature<Geometry>) {
            const uid = getUid(neighbor);
            if (uid in clustered) {
              return false;
            }
            clustered[uid] = true;
            return true;
          });
          if (!neighbors.length) {
            neighbors.push(feature);
          }
          const clusterFeature = this.createCluster(neighbors, extent);
          clusterFeature.setProperties(
            {
              zIndex: counterZIndex,
              isCluster: true,
            },
            true,
          );
          counterZIndex = counterZIndex + numberOfStyles;
          this.features.push(clusterFeature);
        }
      }
    }
  }

  createCluster(features: Feature<any>[], extent: number[]) {
    const centroid = [0, 0];
    for (let i = features.length - 1; i >= 0; --i) {
      const geometry = this.geometryFunction(features[i]);
      if (geometry) {
        addCoordinate(centroid, geometry.getCoordinates());
      } else {
        features.splice(i, 1);
      }
    }
    scaleCoordinate(centroid, 1 / features.length);
    const searchCenter = getCenter(extent);
    const ratio = this.interpolationRatio;
    const geometry = new Point([
      centroid[0] * (1 - ratio) + searchCenter[0] * ratio,
      centroid[1] * (1 - ratio) + searchCenter[1] * ratio,
    ]);
    if (this._createCustomCluster) {
      return this._createCustomCluster(geometry, features);
    }
    return new Feature({
      geometry,
      features,
    });
  }
}
