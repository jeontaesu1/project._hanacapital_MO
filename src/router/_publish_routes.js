// uiGuide
import GuideIndex from '@/views/uiGuide/GuideIndex.vue';
import GuideComponent from '@/views/uiGuide/GuideComponent.vue';
import GuideLayout001 from '@/views/uiGuide/GuideLayout001.vue';
import GuideLayout002 from '@/views/uiGuide/GuideLayout002.vue';
import GuideLayout003 from '@/views/uiGuide/GuideLayout003.vue';

// test
import HomePage from '@/views/HomePage.vue';
import APage from '@/views/APage.vue';
import BPage from '@/views/BPage.vue';
import CPage from '@/views/CPage.vue';
import TestPage from '@/views/TestPage.vue';

const routes = [
  // uiGuide
  {
    path: '/guide-index',
    name: '/guide-index',
    component: GuideIndex,
    meta: { layout: 'NoneLayout' },
  },
  {
    path: '/guide-component',
    name: '/guide-component',
    component: GuideComponent,
    meta: { layout: 'NoneLayout' },
  },
  {
    path: '/guide-layout-001',
    name: '/guide-layout-001',
    component: GuideLayout001,
  },
  {
    path: '/guide-layout-002',
    name: '/guide-layout-002',
    component: GuideLayout002,
  },
  {
    path: '/guide-layout-003',
    name: '/guide-layout-003',
    component: GuideLayout003,
  },

  // test
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
