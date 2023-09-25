import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router';
import Cities from '@/pages/ol/components/Cities.vue'
export const appRouter = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/ol',
      name: 'Cities',
      component: Cities,
    },
  ],
});

appRouter.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  console.log('Router check. from ->', from);
  console.log('Router check. to ->', to);
});