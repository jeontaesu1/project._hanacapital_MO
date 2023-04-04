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
    path: '/guide/loan-calculator-001',
    name: '/guide/loan-calculator-001',
    component: () => import('@/views/uiGuide/GuideLoanCalculator001.vue'),
  },
  {
    path: '/guide/clause-detail-001',
    name: '/guide/clause-detail-001',
    component: () => import('@/views/uiGuide/GuideClauseDetail001.vue'),
  },
  {
    path: '/guide/guide-001',
    name: '/guide/guide-001',
    component: () => import('@/views/uiGuide/GuideGuide001.vue'),
  },
  {
    path: '/guide/error-001',
    name: '/guide/error-001',
    component: () => import('@/views/uiGuide/GuideError001.vue'),
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
  {
    path: '/guide/inventory-finance-early',
    name: '/guide/inventory-finance-early',
    component: () =>
      import('@/views/uiGuide/GuideInventoryFinanceEarly001.vue'),
  },
  {
    path: '/guide/setting-reset-pin',
    name: '/guide/setting-reset-pin',
    component: () => import('@/views/uiGuide/GuideSettingResetPin.vue'),
  },
  {
    path: '/guide/setting-reset-face',
    name: '/guide/setting-reset-face',
    component: () => import('@/views/uiGuide/GuideSettingResetFace.vue'),
  },
  {
    path: '/guide/setting-reset-fingerprint',
    name: '/guide/setting-reset-fingerprint',
    component: () => import('@/views/uiGuide/GuideSettingResetFingerprint.vue'),
  },
  {
    path: '/guide/setting-reset-face-id',
    name: '/guide/setting-reset-face-id',
    component: () => import('@/views/uiGuide/GuideSettingResetFaceId.vue'),
  },
  {
    path: '/guide/lm-blog-loan-counseling',
    name: '/guide/lm-blog-loan-counseling',
    component: () => import('@/views/uiGuide/GuideLMBlogLoanCounseling.vue'),
  },

  // home
  {
    path: '/home',
    name: '/home',
    component: () => import('@/views/home/HomePage.vue'),
  },

  // sign
  {
    path: '/sign/signin',
    name: '/sign/signin',
    component: () => import('@/views/sign/SignIn.vue'),
  },
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

  // menu
  {
    path: '/menu',
    name: '/menu',
    component: () => import('@/views/menu/GlobalNav.vue'),
  },

  // redirect
  {
    path: '/redirect/app',
    name: '/redirect/app',
    component: () => import('@/views/redirect/RedirectApp.vue'),
  },
  {
    path: '/redirect/app-free',
    name: '/redirect/app-free',
    component: () => import('@/views/redirect/RedirectAppFree.vue'),
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
    path: '/customer/faq',
    name: '/customer/faq',
    component: () => import('@/views/customer/CustomerFAQList.vue'),
  },
  {
    path: '/customer/counseling-info',
    name: '/customer/counseling-info',
    component: () => import('@/views/customer/CustomerCounselingInfo.vue'),
  },
  {
    path: '/customer/counseling-regist',
    name: '/customer/counseling-regist',
    component: () => import('@/views/customer/CustomerCounselingRegist.vue'),
  },
  {
    path: '/customer/counseling-regist-complete',
    name: '/customer/counseling-regist-complete',
    component: () =>
      import('@/views/customer/CustomerCounselingRegistComplete.vue'),
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
    path: '/customer/reservation-counseling',
    name: '/customer/reservation-counseling',
    component: () =>
      import('@/views/customer/CustomerReservationCounseling.vue'),
  },
  {
    path: '/customer/reservation-counseling-complete',
    name: '/customer/reservation-counseling-complete',
    component: () =>
      import('@/views/customer/CustomerReservationCounselingComplete.vue'),
  },

  // inventory-financing
  {
    path: '/inventory-finance/early-list',
    name: '/inventory-finance/early-list',
    component: () =>
      import('@/views/inventory-finance/InventoryFinanceEarlyList.vue'),
  },
  {
    path: '/inventory-finance/early-form',
    name: '/inventory-finance/early-form',
    component: () =>
      import('@/views/inventory-finance/InventoryFinanceEarlyForm.vue'),
  },
  {
    path: '/inventory-finance/early-simulation',
    name: '/inventory-finance/early-simulation',
    component: () =>
      import('@/views/inventory-finance/InventoryFinanceEarlySimulation.vue'),
  },
  {
    path: '/inventory-finance/early-confirm',
    name: '/inventory-finance/early-confirm',
    component: () =>
      import('@/views/inventory-finance/InventoryFinanceEarlyConfirm.vue'),
  },
  {
    path: '/inventory-finance/early-complete',
    name: '/inventory-finance/early-complete',
    component: () =>
      import('@/views/inventory-finance/InventoryFinanceEarlyComplete.vue'),
  },
  {
    path: '/inventory-finance/early-fail',
    name: '/inventory-finance/early-fail',
    component: () =>
      import('@/views/inventory-finance/InventoryFinanceEarlyFail.vue'),
  },
  {
    path: '/inventory-finance/extension-list',
    name: '/inventory-finance/extension-list',
    component: () =>
      import('@/views/inventory-finance/InventoryFinanceExtensionList.vue'),
  },
  {
    path: '/inventory-finance/extension-view',
    name: '/inventory-finance/extension-view',
    component: () =>
      import('@/views/inventory-finance/InventoryFinanceExtensionView.vue'),
  },
  {
    path: '/inventory-finance/extension-form',
    name: '/inventory-finance/extension-form',
    component: () =>
      import('@/views/inventory-finance/InventoryFinanceExtensionForm.vue'),
  },
  {
    path: '/inventory-finance/extension-confirm',
    name: '/inventory-finance/extension-confirm',
    component: () =>
      import('@/views/inventory-finance/InventoryFinanceExtensionConfirm.vue'),
  },
  {
    path: '/inventory-finance/extension-complete',
    name: '/inventory-finance/extension-complete',
    component: () =>
      import('@/views/inventory-finance/InventoryFinanceExtensionComplete.vue'),
  },
  {
    path: '/inventory-finance/extension-fail',
    name: '/inventory-finance/extension-fail',
    component: () =>
      import('@/views/inventory-finance/InventoryFinanceExtensionFail.vue'),
  },
  {
    path: '/inventory-finance/add-documents',
    name: '/inventory-finance/add-documents',
    component: () =>
      import('@/views/inventory-finance/InventoryFinanceAddDocuments.vue'),
  },
  {
    path: '/inventory-finance/termination-bonds',
    name: '/inventory-finance/termination-bonds',
    component: () =>
      import('@/views/inventory-finance/InventoryFinanceTerminationBonds.vue'),
  },

  // setting
  {
    path: '/setting/home',
    name: '/setting/home',
    component: () => import('@/views/setting/SettingHome.vue'),
  },
  {
    path: '/setting/push',
    name: '/setting/push',
    component: () => import('@/views/setting/SettingPush.vue'),
  },
  {
    path: '/setting/certificate-import',
    name: '/setting/certificate-import',
    component: () => import('@/views/setting/SettingCertificateImport.vue'),
  },
  {
    path: '/setting/certificate-export',
    name: '/setting/certificate-export',
    component: () => import('@/views/setting/SettingCertificateExport.vue'),
  },

  // lm-blog
  {
    path: '/lm-blog/loan-counseling',
    name: '/lm-blog/loan-counseling',
    component: () => import('@/views/lm-blog/LMBlogLoanCounseling.vue'),
  },
  {
    path: '/lm-blog/loan-counseling-form',
    name: '/lm-blog/loan-counseling-form',
    component: () => import('@/views/lm-blog/LMBlogLoanCounselingForm.vue'),
  },
  {
    path: '/lm-blog/quick-counseling',
    name: '/lm-blog/quick-counseling',
    component: () => import('@/views/lm-blog/LMBlogQuickCounseling.vue'),
  },
  {
    path: '/lm-blog/sms-counseling',
    name: '/lm-blog/sms-counseling',
    component: () => import('@/views/lm-blog/LMBlogSMSCounseling.vue'),
  },
  {
    path: '/lm-blog/sms-counseling-detail',
    name: '/lm-blog/sms-counseling-detail',
    component: () => import('@/views/lm-blog/LMBlogSMSCounselingDetail.vue'),
  },
  {
    path: '/lm-blog/access-statistics',
    name: '/lm-blog/access-statistics',
    component: () => import('@/views/lm-blog/LMBlogAccessStatistics.vue'),
  },
  {
    path: '/lm-blog/status-inquiry',
    name: '/lm-blog/status-inquiry',
    component: () => import('@/views/lm-blog/LMBlogStatusInquiry.vue'),
  },

  // lm-blog-personal
  {
    path: '/lm-blog-personal/home',
    name: '/lm-blog-personal/home',
    component: () => import('@/views/lm-blog-personal/LMBlogPersonalHome.vue'),
  },
  {
    path: '/lm-blog-personal/menu',
    name: '/lm-blog-personal/menu',
    component: () => import('@/views/lm-blog-personal/LMBlogPersonalMenu.vue'),
  },
  {
    path: '/lm-blog-personal/quick-counseling',
    name: '/lm-blog-personal/quick-counseling',
    component: () =>
      import('@/views/lm-blog-personal/LMBlogPersonalQuickCounseling.vue'),
  },
  {
    path: '/lm-blog-personal/sms-counseling',
    name: '/lm-blog-personal/sms-counseling',
    component: () =>
      import('@/views/lm-blog-personal/LMBlogPersonalSMSCounseling.vue'),
  },
  {
    path: '/lm-blog-personal/map',
    name: '/lm-blog-personal/map',
    component: () => import('@/views/lm-blog-personal/LMBlogPersonalMap.vue'),
  },
];

export default routes;
