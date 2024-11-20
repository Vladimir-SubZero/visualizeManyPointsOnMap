import { createRouter, createWebHistory, RouteLocationNormalized } from 'vue-router';
import Map1 from '@/2_pages/map_1/ui/Map1.vue';
import Map2 from '@/2_pages/map_2/ui/Map2.vue';
import Map3 from '@/2_pages/map_3/ui/Map3.vue';

export const appRouter = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/visualizeManyPointsOnMap',
      name: 'Map1',
      component: Map1,
    },{
      path: '/map_2',
      name: 'Map2',
      component: Map2,
    },{
      path: '/map_3',
      name: 'Map3',
      component: Map3,
    },
  ],
});

appRouter.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  console.log('Router check. from ->', from);
  console.log('Router check. to ->', to);
});
