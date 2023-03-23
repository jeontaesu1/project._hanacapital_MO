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
    path: '/guide/identification001',
    name: '/guide/identification001',
    component: () => import('@/views/uiGuide/GuideIdentification001.vue'),
  },
  {
    path: '/guide/identification002',
    name: '/guide/identification002',
    component: () => import('@/views/uiGuide/GuideIdentification002.vue'),
  },

  // test
  {
    path: '/test/home',
    name: '/test/home',
    component: () => import('@/views/testPages/HomePage.vue'),
  },
  {
    path: '/test/a',
    name: '/test/a',
    component: () => import('@/views/testPages/APage.vue'),
  },
  {
    path: '/test/b',
    name: '/test/b',
    component: () => import('@/views/testPages/BPage.vue'),
  },
  {
    path: '/test/c',
    name: '/test/c',
    component: () => import('@/views/testPages/CPage.vue'),
  },
  {
    path: '/test/test',
    name: '/test/test',
    component: () => import('@/views/testPages/TestPage.vue'),
    meta: { layout: 'TestLayout' },
  },
];

export default routes;
