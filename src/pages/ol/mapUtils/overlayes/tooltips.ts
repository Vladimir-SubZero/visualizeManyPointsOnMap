import { h, render } from 'vue';
import OrderTooltip from '../../components/OrderTooltip.vue';


function createVNode(component: any) {
  return h('div', [h(component)]);
} 
export const addOverlaysComponentsToHTML = (): void => {
  
  const oldRootOrdersTooltip = document.getElementById('rootOrdersTooltip');

  const rootOrdersTooltip = document.createElement('div');

  const rootOrdersTooltipId = 'rootOrdersTooltip';

  rootOrdersTooltip.setAttribute('id', rootOrdersTooltipId);


  if (oldRootOrdersTooltip) {
    document.body.removeChild(oldRootOrdersTooltip);
  }

  document.body.appendChild(rootOrdersTooltip);

  const vNodeOrdersTooltip = createVNode(OrderTooltip);

  render(vNodeOrdersTooltip, rootOrdersTooltip);

}