import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router';
import Orders from '@/pages/ol/components/Orders.vue';
export const appRouter = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/visualizeManyPointsOnMap',
      name: 'Orders',
      component: Orders,
    },
  ],
});

appRouter.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  console.log('Router check. from ->', from);
  console.log('Router check. to ->', to);
});
