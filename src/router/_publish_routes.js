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
    path: '/guide/identification-001',
    name: '/guide/identification-001',
    component: () => import('@/views/uiGuide/GuideIdentification001.vue'),
  },
  {
    path: '/guide/identification-002',
    name: '/guide/identification-002',
    component: () => import('@/views/uiGuide/GuideIdentification002.vue'),
  },
  {
    path: '/guide/personal-loan-e-hana-001',
    name: '/guide/personal-loan-e-hana-001',
    component: () => import('@/views/uiGuide/GuidePersonalLoanEHana001.vue'),
  },
  {
    path: '/guide/personal-loan-happiness-apartment-001',
    name: '/guide/personal-loan-happiness-apartment-001',
    component: () =>
      import('@/views/uiGuide/GuidePersonalLoanHappinessApartment001.vue'),
  },
  {
    path: '/guide/personal-loan-one-q-auto-001',
    name: '/guide/personal-loan-one-q-auto-001',
    component: () => import('@/views/uiGuide/GuidePersonalLoanOneQAuto001.vue'),
  },
  {
    path: '/guide/personal-loan-best-customer-001',
    name: '/guide/personal-loan-best-customer-001',
    component: () =>
      import('@/views/uiGuide/GuidePersonalLoanBestCustomer001.vue'),
  },
  {
    path: '/guide/personal-loan-stock-001',
    name: '/guide/personal-loan-stock-001',
    component: () => import('@/views/uiGuide/GuidePersonalLoanStock001.vue'),
  },
  {
    path: '/guide/personal-loan-business-house-001',
    name: '/guide/personal-loan-business-house-001',
    component: () =>
      import('@/views/uiGuide/GuidePersonalLoanBusinessHouse001.vue'),
  },
  {
    path: '/guide/personal-loan-etc-001',
    name: '/guide/personal-loan-etc-001',
    component: () => import('@/views/uiGuide/GuidePersonalLoanETC001.vue'),
  },
  {
    path: '/guide/sign-in-001',
    name: '/guide/sign-in-001',
    component: () => import('@/views/uiGuide/GuideSignIn001.vue'),
  },
  {
    path: '/guide/sign-in-certificate-001',
    name: '/guide/sign-in-certificate-001',
    component: () => import('@/views/uiGuide/GuideSignInCertificate001.vue'),
  },
  {
    path: '/guide/sign-find-id-001',
    name: '/guide/sign-find-id-001',
    component: () => import('@/views/uiGuide/GuideSignFindId001.vue'),
  },
  {
    path: '/guide/sign-reset-password-001',
    name: '/guide/sign-reset-password-001',
    component: () => import('@/views/uiGuide/GuideSignResetPassword001.vue'),
  },
  {
    path: '/guide/sign-up-001',
    name: '/guide/sign-up-001',
    component: () => import('@/views/uiGuide/GuideSignUp001.vue'),
  },
  {
    path: '/guide/sign-up-app-001',
    name: '/guide/sign-up-app-001',
    component: () => import('@/views/uiGuide/GuideSignUpApp001.vue'),
  },
  {
    path: '/guide/sign-load-pin-001',
    name: '/guide/sign-load-pin-001',
    component: () => import('@/views/uiGuide/GuideSignLoadPin001.vue'),
  },
  {
    path: '/guide/sign-in-pin-001',
    name: '/guide/sign-in-pin-001',
    component: () => import('@/views/uiGuide/GuideSignInPin001.vue'),
  },
  {
    path: '/guide/sign-reset-pin-001',
    name: '/guide/sign-reset-pin-001',
    component: () => import('@/views/uiGuide/GuideSignResetPin001.vue'),
  },
  {
    path: '/guide/sign-in-biometrics-001',
    name: '/guide/sign-in-biometrics-001',
    component: () => import('@/views/uiGuide/GuideSignInBiometrics001.vue'),
  },

  // home
  {
    path: '/home',
    name: '/home',
    component: () => import('@/views/home/HomePage.vue'),
  },

  // sign
  {
    path: '/sign/signup-app',
    name: '/sign/signup-app',
    component: () => import('@/views/sign/SignUpApp.vue'),
  },
  {
    path: '/sign/load-pin',
    name: '/sign/load-pin',
    component: () => import('@/views/sign/SignLoadPin.vue'),
  },
  {
    // test
    path: '/sign/signin',
    name: '/sign/signin',
    component: () => import('@/views/sign/SignIn.vue'),
  },

  // menu
  {
    path: '/menu',
    name: '/menu',
    component: () => import('@/views/menu/GlobalNav.vue'),
  },

  // personal loan
  {
    path: '/personal-loan/e-hana',
    name: '/personal-loan/e-hana',
    component: () => import('@/views/personalLoan/PersonalLoanEHana.vue'),
  },
  {
    path: '/personal-loan/happiness-apartment',
    name: '/personal-loan/happiness-apartment',
    component: () =>
      import('@/views/personalLoan/PersonalLoanHappinessApartment.vue'),
  },
  {
    path: '/personal-loan/apartment',
    name: '/personal-loan/apartment',
    component: () => import('@/views/personalLoan/PersonalLoanApartment.vue'),
  },
  {
    path: '/personal-loan/one-q-auto',
    name: '/personal-loan/one-q-auto',
    component: () => import('@/views/personalLoan/PersonalLoanOneQAuto.vue'),
  },
  {
    path: '/personal-loan/best-customer',
    name: '/personal-loan/best-customer',
    component: () =>
      import('@/views/personalLoan/PersonalLoanBestCustomer.vue'),
  },
  {
    path: '/personal-loan/e-rental-house',
    name: '/personal-loan/e-rental-house',
    component: () =>
      import('@/views/personalLoan/PersonalLoanERentalHouse.vue'),
  },
  {
    path: '/personal-loan/stock',
    name: '/personal-loan/stock',
    component: () => import('@/views/personalLoan/PersonalLoanStock.vue'),
  },
  {
    path: '/personal-loan/medical-appliances',
    name: '/personal-loan/medical-appliances',
    component: () =>
      import('@/views/personalLoan/PersonalLoanMedicalAppliances.vue'),
  },
  {
    path: '/personal-loan/business-house',
    name: '/personal-loan/business-house',
    component: () =>
      import('@/views/personalLoan/PersonalLoanBusinessHouse.vue'),
  },
  {
    path: '/personal-loan/consumer-durables',
    name: '/personal-loan/consumer-durables',
    component: () =>
      import('@/views/personalLoan/PersonalLoanConsumerDurables.vue'),
  },

  // customer
  {
    path: '/customer/regist-counseling-complete',
    name: '/customer/regist-counseling-complete',
    component: () =>
      import('@/views/customer/CustomerRegistCounselingComplete.vue'),
  },
  {
    path: '/customer/notice-list',
    name: '/customer/notice-list',
    component: () => import('@/views/customer/CustomerNoticeList.vue'),
  },
  {
    path: '/customer/notice-detail',
    name: '/customer/notice-detail',
    component: () => import('@/views/customer/CustomerNoticeDetail.vue'),
  },
  {
    path: '/customer/branch-list',
    name: '/customer/branch-list',
    component: () => import('@/views/customer/CustomerBranchList.vue'),
  },
  {
    path: '/customer/ars',
    name: '/customer/ars',
    component: () => import('@/views/customer/CustomerARS.vue'),
  },
  {
    path: '/customer/reservation-counseling-complete',
    name: '/customer/reservation-counseling-complete',
    component: () =>
      import('@/views/customer/CustomerReservationCounselingComplete.vue'),
  },
];

export default routes;
