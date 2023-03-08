import GuideComponent from '@/views/GuideComponent.vue';
import HomePage from '@/views/HomePage.vue';
import APage from '@/views/APage.vue';
import BPage from '@/views/BPage.vue';
import CPage from '@/views/CPage.vue';
import TestPage from '@/views/TestPage.vue';

const routes = [
  {
    path: '/guide-component',
    name: '/guide-component',
    component: GuideComponent,
  },
  {
    path: '/',
    name: '/',
    component: HomePage,
  },
  {
    path: '/home',
    name: '/home',
    component: HomePage,
  },
  {
    path: '/a',
    name: '/a',
    component: APage,
  },
  {
    path: '/b',
    name: '/b',
    component: BPage,
  },
  {
    path: '/c',
    name: '/c',
    component: CPage,
  },
  {
    path: '/test',
    name: '/test',
    component: TestPage,
    meta: { layout: 'TestLayout' },
  },
];

export default routes;
