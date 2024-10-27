import {describe, expect, it } from 'vitest'
// import { shallowMount } from '@vue/test-utils'
// import OrderTooltip from '../../components/OrderTooltip.vue'

// describe('OrderTooltip.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(OrderTooltip, {
//       props: { message: msg },
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

describe('Calculate', () => {
  it('calculate 1 + 2', () => {
    const result = 3;
    expect(1 + 2).toBe(result);
  });
});
