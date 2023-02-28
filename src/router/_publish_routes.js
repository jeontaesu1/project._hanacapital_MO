import HomePage from '@/views/HomePage.vue';
import APage from '@/views/APage.vue';
import BPage from '@/views/BPage.vue';
import CPage from '@/views/CPage.vue';
import TestPage from '@/views/TestPage.vue';

const routes = [
  {
    path: '/',
    name: '/',
    component: HomePage,
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/home',
    name: '/home',
    component: HomePage,
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/a',
    name: '/a',
    component: APage,
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/b',
    name: '/b',
    component: BPage,
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/c',
    name: '/c',
    component: CPage,
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/test',
    name: '/test',
    component: TestPage,
    meta: { layout: 'DefaultLayout' },
  },
];

export default routes;
