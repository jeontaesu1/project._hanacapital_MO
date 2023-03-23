const routes = [
  // uiGuide
  {
    path: '/',
    name: '/',
    component: () => import('@/views/uiGuide/GuideIndex.vue'),
    meta: { layout: 'NoneLayout' },
  },
  {
    path: '/guide-index',
    name: '/guide-index',
    component: () => import('@/views/uiGuide/GuideIndex.vue'),
    meta: { layout: 'NoneLayout' },
  },
  {
    path: '/guide/component',
    name: '/guide/component',
    component: () => import('@/views/uiGuide/GuideComponent.vue'),
    meta: { layout: 'NoneLayout' },
  },
  {
    path: '/guide/layout-001',
    name: '/guide/layout-001',
    component: () => import('@/views/uiGuide/GuideLayout001.vue'),
  },
  {
    path: '/guide/layout-002',
    name: '/guide/layout-002',
    component: () => import('@/views/uiGuide/GuideLayout002.vue'),
  },
  {
    path: '/guide/layout-003',
    name: '/guide/layout-003',
    component: () => import('@/views/uiGuide/GuideLayout003.vue'),
  },
  {
    path: '/guide/identification',
    name: '/guide/identification',
    component: () => import('@/views/uiGuide/GuideIdentification.vue'),
  },

  // test
  {
    path: '/home',
    name: '/home',
    component: () => import('@/views/testPages/HomePage.vue'),
  },
  {
    path: '/a',
    name: '/a',
    component: () => import('@/views/testPages/APage.vue'),
  },
  {
    path: '/b',
    name: '/b',
    component: () => import('@/views/testPages/BPage.vue'),
  },
  {
    path: '/c',
    name: '/c',
    component: () => import('@/views/testPages/CPage.vue'),
  },
  {
    path: '/test',
    name: '/test',
    component: () => import('@/views/testPages/TestPage.vue'),
    meta: { layout: 'TestLayout' },
  },
];

export default routes;
