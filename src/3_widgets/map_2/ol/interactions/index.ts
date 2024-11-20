import { Draw } from 'ol/interaction'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'


const source = new VectorSource({wrapX: false})
export const drawVectorLayer = new VectorLayer({
  source: source
});

export const draw = () => {
  return new Draw({
    source: source,
    type: 'Polygon',
  });
}

