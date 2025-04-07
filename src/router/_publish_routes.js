const routes = [
  // ui-guide
  {
    path: '/',
    name: '/',
    component: () => import('@/views/uiGuide/GuideIndex.vue'),
    meta: { layout: 'NoneLayout' },
  },
  {
    path: '/ui-guide-index',
    name: '/ui-guide-index',
    component: () => import('@/views/uiGuide/GuideIndex.vue'),
    meta: { layout: 'NoneLayout' },
  },
  {
    path: '/ui-guide/component',
    name: '/ui-guide/component',
    component: () => import('@/views/uiGuide/GuideComponent.vue'),
    meta: { layout: 'NoneLayout' },
  },
  {
    path: '/ui-guide/layout-001',
    name: '/ui-guide/layout-001',
    component: () => import('@/views/uiGuide/GuideLayout001.vue'),
  },
  {
    path: '/ui-guide/layout-002',
    name: '/ui-guide/layout-002',
    component: () => import('@/views/uiGuide/GuideLayout002.vue'),
  },
  {
    path: '/ui-guide/layout-003',
    name: '/ui-guide/layout-003',
    component: () => import('@/views/uiGuide/GuideLayout003.vue'),
  },
  {
    path: '/ui-guide/identification-001',
    name: '/ui-guide/identification-001',
    component: () => import('@/views/uiGuide/GuideIdentification001.vue'),
  },
  {
    path: '/ui-guide/identification-002',
    name: '/ui-guide/identification-002',
    component: () => import('@/views/uiGuide/GuideIdentification002.vue'),
  },
  {
    path: '/ui-guide/loan-calculator-001',
    name: '/ui-guide/loan-calculator-001',
    component: () => import('@/views/uiGuide/GuideLoanCalculator001.vue'),
  },
  {
    path: '/ui-guide/clause-detail-001',
    name: '/ui-guide/clause-detail-001',
    component: () => import('@/views/uiGuide/GuideClauseDetail001.vue'),
  },
  {
    path: '/ui-guide/guide-001',
    name: '/ui-guide/guide-001',
    component: () => import('@/views/uiGuide/GuideGuide001.vue'),
  },
  {
    path: '/ui-guide/error-001',
    name: '/ui-guide/error-001',
    component: () => import('@/views/uiGuide/GuideError001.vue'),
  },
  {
    path: '/errorContents/Common_M00_p011',
    name: '/errorContents/Common_M00_p011',
    component: () => import('@/views/errorContents/Common_M00_p011.vue'),
  },
  {
    path: '/ui-guide/personal-loan-001',
    name: '/ui-guide/personal-loan-001',
    component: () => import('@/views/uiGuide/GuidePersonalLoan001.vue'),
  },
  {
    path: '/ui-guide/personal-loan-e-hana-001',
    name: '/ui-guide/personal-loan-e-hana-001',
    component: () => import('@/views/uiGuide/GuidePersonalLoanEHana001.vue'),
  },
  {
    path: '/ui-guide/personal-loan-happiness-apartment-001',
    name: '/ui-guide/personal-loan-happiness-apartment-001',
    component: () =>
      import('@/views/uiGuide/GuidePersonalLoanHappinessApartment001.vue'),
  },
  {
    path: '/ui-guide/personal-loan-one-q-auto-001',
    name: '/ui-guide/personal-loan-one-q-auto-001',
    component: () => import('@/views/uiGuide/GuidePersonalLoanOneQAuto001.vue'),
  },
  {
    path: '/ui-guide/personal-loan-best-customer-001',
    name: '/ui-guide/personal-loan-best-customer-001',
    component: () =>
      import('@/views/uiGuide/GuidePersonalLoanBestCustomer001.vue'),
  },
  {
    path: '/ui-guide/personal-loan-stock-001',
    name: '/ui-guide/personal-loan-stock-001',
    component: () => import('@/views/uiGuide/GuidePersonalLoanStock001.vue'),
  },
  {
    path: '/ui-guide/personal-loan-business-house-001',
    name: '/ui-guide/personal-loan-business-house-001',
    component: () =>
      import('@/views/uiGuide/GuidePersonalLoanBusinessHouse001.vue'),
  },
  {
    path: '/ui-guide/personal-loan-etc-001',
    name: '/ui-guide/personal-loan-etc-001',
    component: () => import('@/views/uiGuide/GuidePersonalLoanETC001.vue'),
  },
  {
    path: '/ui-guide/sign-in-001',
    name: '/ui-guide/sign-in-001',
    component: () => import('@/views/uiGuide/GuideSignIn001.vue'),
  },
  {
    path: '/ui-guide/sign-in-certificate-001',
    name: '/ui-guide/sign-in-certificate-001',
    component: () => import('@/views/uiGuide/GuideSignInCertificate001.vue'),
  },
  {
    path: '/ui-guide/sign-find-id-001',
    name: '/ui-guide/sign-find-id-001',
    component: () => import('@/views/uiGuide/GuideSignFindId001.vue'),
  },
  {
    path: '/ui-guide/sign-reset-password-001',
    name: '/ui-guide/sign-reset-password-001',
    component: () => import('@/views/uiGuide/GuideSignResetPassword001.vue'),
  },
  {
    path: '/ui-guide/sign-up-001',
    name: '/ui-guide/sign-up-001',
    component: () => import('@/views/uiGuide/GuideSignUp001.vue'),
  },
  {
    path: '/ui-guide/sign-up-app-001',
    name: '/ui-guide/sign-up-app-001',
    component: () => import('@/views/uiGuide/GuideSignUpApp001.vue'),
  },
  {
    path: '/ui-guide/sign-load-pin-001',
    name: '/ui-guide/sign-load-pin-001',
    component: () => import('@/views/uiGuide/GuideSignLoadPin001.vue'),
  },
  {
    path: '/ui-guide/sign-in-pin-001',
    name: '/ui-guide/sign-in-pin-001',
    component: () => import('@/views/uiGuide/GuideSignInPin001.vue'),
  },
  {
    path: '/ui-guide/sign-reset-pin-001',
    name: '/ui-guide/sign-reset-pin-001',
    component: () => import('@/views/uiGuide/GuideSignResetPin001.vue'),
  },
  {
    path: '/ui-guide/sign-in-biometrics-001',
    name: '/ui-guide/sign-in-biometrics-001',
    component: () => import('@/views/uiGuide/GuideSignInBiometrics001.vue'),
  },
  {
    path: '/ui-guide/inventory-finance-early-001',
    name: '/ui-guide/inventory-finance-early-001',
    component: () =>
      import('@/views/uiGuide/GuideInventoryFinanceEarly001.vue'),
  },
  {
    path: '/ui-guide/inventory-finance-loan-agreement-001',
    name: '/ui-guide/inventory-finance-loan-agreement-001',
    component: () =>
      import('@/views/uiGuide/GuideInventoryFinanceLoanAgreement001.vue'),
  },
  {
    path: '/ui-guide/inventory-finance-url-state-001',
    name: '/ui-guide/inventory-finance-url-state-001',
    component: () =>
      import('@/views/uiGuide/GuideInventoryFinanceURLState001.vue'),
  },
  {
    path: '/ui-guide/setting-reset-pin-001',
    name: '/ui-guide/setting-reset-pin-001',
    component: () => import('@/views/uiGuide/GuideSettingResetPin001.vue'),
  },
  {
    path: '/ui-guide/setting-reset-face-001',
    name: '/ui-guide/setting-reset-face-001',
    component: () => import('@/views/uiGuide/GuideSettingResetFace001.vue'),
  },
  {
    path: '/ui-guide/setting-reset-fingerprint-001',
    name: '/ui-guide/setting-reset-fingerprint-001',
    component: () =>
      import('@/views/uiGuide/GuideSettingResetFingerprint001.vue'),
  },
  {
    path: '/ui-guide/setting-reset-face-id-001',
    name: '/ui-guide/setting-reset-face-id-001',
    component: () => import('@/views/uiGuide/GuideSettingResetFaceId001.vue'),
  },
  {
    path: '/ui-guide/lm-blog-loan-counseling-001',
    name: '/ui-guide/lm-blog-loan-counseling-001',
    component: () => import('@/views/uiGuide/GuideLMBlogLoanCounseling001.vue'),
  },
  {
    path: '/ui-guide/id-shoot-001',
    name: '/ui-guide/id-shoot-001',
    component: () => import('@/views/uiGuide/GuideIdShoot001.vue'),
  },
  {
    path: '/ui-guide/id-shoot-002',
    name: '/ui-guide/id-shoot-002',
    component: () => import('@/views/uiGuide/GuideIdShoot002.vue'),
  },
  {
    path: '/ui-guide/auto-estimate-001',
    name: '/ui-guide/auto-estimate-001',
    component: () => import('@/views/uiGuide/GuideAutoEstimate001.vue'),
  },
  {
    path: '/ui-guide/auto-long-rental-001',
    name: '/ui-guide/auto-long-rental-001',
    component: () => import('@/views/uiGuide/GuideAutoLongRental001.vue'),
  },
  {
    path: '/ui-guide/auto-lease-001',
    name: '/ui-guide/auto-lease-001',
    component: () => import('@/views/uiGuide/GuideAutoLease001.vue'),
  },
  {
    path: '/ui-guide/auto-one-q-loan-001',
    name: '/ui-guide/auto-one-q-loan-001',
    component: () => import('@/views/uiGuide/GuideAutoOneQLoan001.vue'),
  },
  {
    path: '/ui-guide/auto-used-loan-001',
    name: '/ui-guide/auto-used-loan-001',
    component: () => import('@/views/uiGuide/GuideAutoUsedLoan001.vue'),
  },
  {
    path: '/ui-guide/auto-succession-001',
    name: '/ui-guide/auto-succession-001',
    component: () => import('@/views/uiGuide/GuideAutoSuccession001.vue'),
  },
  {
    path: '/ui-guide/auto-car-cart-001',
    name: '/ui-guide/auto-car-cart-001',
    component: () => import('@/views/uiGuide/GuideAutoCarCart001.vue'),
  },
  {
    path: '/ui-guide/my-loan-home-001',
    name: '/ui-guide/my-loan-home-001',
    component: () => import('@/views/uiGuide/GuideMyLoanHome001.vue'),
  },
  {
    path: '/ui-guide/my-loan-detail-payment-001',
    name: '/ui-guide/my-loan-detail-payment-001',
    component: () => import('@/views/uiGuide/GuideMyLoanDetailPayment001.vue'),
  },
  {
    path: '/ui-guide/my-loan-maintenance-history-001',
    name: '/ui-guide/my-loan-maintenance-history-001',
    component: () =>
      import('@/views/uiGuide/GuideMyLoanMaintenanceHistory001.vue'),
  },
  {
    path: '/ui-guide/my-loan-penalty-001',
    name: '/ui-guide/my-loan-penalty-001',
    component: () => import('@/views/uiGuide/GuideMyLoanPenalty001.vue'),
  },
  {
    path: '/ui-guide/my-loan-car-tax-001',
    name: '/ui-guide/my-loan-car-tax-001',
    component: () => import('@/views/uiGuide/GuideMyLoanCarTax001.vue'),
  },
  {
    path: '/ui-guide/my-loan-designation-driver-001',
    name: '/ui-guide/my-loan-designation-driver-001',
    component: () =>
      import('@/views/uiGuide/GuideMyLoanDesignationDriver001.vue'),
  },
  {
    path: '/ui-guide/my-loan-intermediate-001',
    name: '/ui-guide/my-loan-intermediate-001',
    component: () => import('@/views/uiGuide/GuideMyLoanIntermediate001.vue'),
  },
  {
    path: '/ui-guide/my-loan-progress-001',
    name: '/ui-guide/my-loan-progress-001',
    component: () => import('@/views/uiGuide/GuideMyLoanProgress001.vue'),
  },
  {
    path: '/ui-guide/my-loan-progress-002',
    name: '/ui-guide/my-loan-progress-002',
    component: () => import('@/views/uiGuide/GuideMyLoanProgress002.vue'),
  },
  {
    path: '/ui-guide/my-loan-progress-003',
    name: '/ui-guide/my-loan-progress-003',
    component: () => import('@/views/uiGuide/GuideMyLoanProgress003.vue'),
  },
  {
    path: '/ui-guide/my-loan-progress-004',
    name: '/ui-guide/my-loan-progress-004',
    component: () => import('@/views/uiGuide/GuideMyLoanProgress004.vue'),
  },
  {
    path: '/ui-guide/my-loan-progress-005',
    name: '/ui-guide/my-loan-progress-005',
    component: () => import('@/views/uiGuide/GuideMyLoanProgress005.vue'),
  },
  {
    path: '/ui-guide/my-loan-progress-006',
    name: '/ui-guide/my-loan-progress-006',
    component: () => import('@/views/uiGuide/GuideMyLoanProgress006.vue'),
  },
  {
    path: '/ui-guide/my-loan-progress-007',
    name: '/ui-guide/my-loan-progress-007',
    component: () => import('@/views/uiGuide/GuideMyLoanProgress007.vue'),
  },
  {
    path: '/ui-guide/my-loan-progress-008',
    name: '/ui-guide/my-loan-progress-008',
    component: () => import('@/views/uiGuide/GuideMyLoanProgress008.vue'),
  },
  {
    path: '/ui-guide/my-loan-progress-009',
    name: '/ui-guide/my-loan-progress-009',
    component: () => import('@/views/uiGuide/GuideMyLoanProgress009.vue'),
  },
  {
    path: '/ui-guide/my-loan-progress-010',
    name: '/ui-guide/my-loan-progress-010',
    component: () => import('@/views/uiGuide/GuideMyLoanProgress010.vue'),
  },
  {
    path: '/ui-guide/my-loan-progress-011',
    name: '/ui-guide/my-loan-progress-011',
    component: () => import('@/views/uiGuide/GuideMyLoanProgress011.vue'),
  },
  {
    path: '/ui-guide/my-loan-progress-012',
    name: '/ui-guide/my-loan-progress-012',
    component: () => import('@/views/uiGuide/GuideMyLoanProgress012.vue'),
  },
  {
    path: '/ui-guide/my-loan-progress-013',
    name: '/ui-guide/my-loan-progress-013',
    component: () => import('@/views/uiGuide/GuideMyLoanProgress013.vue'),
  }, //스탁론 연장 프로세스 상품설명서
  {
    path: '/ui-guide/my-loan-progress-014',
    name: '/ui-guide/my-loan-progress-014',
    component: () => import('@/views/uiGuide/GuideMyLoanProgress014.vue'),
  },
  //상품설명서 011 (개인사업자 아파트담보대출 연장프로세스)
  {
    path: '/ui-guide/my-loan-certificate-001',
    name: '/ui-guide/my-loan-certificate-001',
    component: () => import('@/views/uiGuide/GuideMyLoanCertificate001.vue'),
  },
  {
    path: '/ui-guide/my-loan-mortgage-001',
    name: '/ui-guide/my-loan-mortgage-001',
    component: () => import('@/views/uiGuide/GuideMyLoanMortgage001.vue'),
  },
  {
    path: '/ui-guide/my-loan-post-maturity-001',
    name: '/ui-guide/my-loan-post-maturity-001',
    component: () => import('@/views/uiGuide/GuideMyLoanPostMaturity001.vue'),
  },
  {
    path: '/ui-guide/my-loan-post-maturity-rental-001',
    name: '/ui-guide/my-loan-post-maturity-rental-001',
    component: () =>
      import('@/views/uiGuide/GuideMyLoanPostMaturityRental001.vue'),
  },
  {
    path: '/ui-guide/my-loan-post-maturity-lease-001',
    name: '/ui-guide/my-loan-post-maturity-lease-001',
    component: () =>
      import('@/views/uiGuide/GuideMyLoanPostMaturityLease001.vue'),
  },
  {
    path: '/ui-guide/my-loan-interest-rate-cut-request-001',
    name: '/ui-guide/my-loan-interest-rate-cut-request-001',
    component: () =>
      import('@/views/uiGuide/GuideMyLoanInterestRateCutRequest001.vue'),
  },
  {
    path: '/ui-guide/my-loan-subscription-withdrawal-right-001',
    name: '/ui-guide/my-loan-subscription-withdrawal-right-001',
    component: () =>
      import('@/views/uiGuide/GuideMyLoanSubscriptionWithdrawalRight001.vue'),
  },
  {
    path: '/ui-guide/my-loan-add-documents-001',
    name: '/ui-guide/my-loan-add-documents-001',
    component: () => import('@/views/uiGuide/GuideMyLoanAddDocuments001.vue'),
  },
  {
    path: '/ui-guide/search-workplace-001',
    name: '/ui-guide/search-workplace-001',
    component: () => import('@/views/uiGuide/GuideSearchWorkplace001.vue'),
  },
  {
    path: '/ui-guide/enter-date-001',
    name: '/ui-guide/enter-date-001',
    component: () => import('@/views/uiGuide/GuideEnterDate001.vue'),
  },
  {
    path: '/ui-guide/search-address-001',
    name: '/ui-guide/search-address-001',
    component: () => import('@/views/uiGuide/GuideSearchAddress001.vue'),
  },
  {
    path: '/ui-guide/search-001',
    name: '/ui-guide/search-001',
    component: () => import('@/views/uiGuide/GuideSearch001.vue'),
  },
  {
    path: '/ui-guide/my-info-edit-001',
    name: '/ui-guide/my-info-edit-001',
    component: () => import('@/views/uiGuide/GuideMyInfoEdit001.vue'),
  },
  {
    path: '/ui-guide/my-info-password-001',
    name: '/ui-guide/my-info-password-001',
    component: () => import('@/views/uiGuide/GuideMyInfoPassword001.vue'),
  },
  {
    path: '/ui-guide/my-info-direct-debit-account-001',
    name: '/ui-guide/my-info-direct-debit-account-001',
    component: () =>
      import('@/views/uiGuide/GuideMyInfoDirectDebitAccount001.vue'),
  },
  {
    path: '/ui-guide/my-info-billing-001',
    name: '/ui-guide/my-info-billing-001',
    component: () => import('@/views/uiGuide/GuideMyInfoBilling001.vue'),
  },
  {
    path: '/ui-guide/my-info-marketing-001',
    name: '/ui-guide/my-info-marketing-001',
    component: () => import('@/views/uiGuide/GuideMyInfoMarketing001.vue'),
  },
  {
    path: '/ui-guide/my-info-join-hana-money-001',
    name: '/ui-guide/my-info-join-hana-money-001',
    component: () => import('@/views/uiGuide/GuideMyInfoJoinHanaMoney001.vue'),
  },
  {
    path: '/ui-guide/my-info-join-membership-001',
    name: '/ui-guide/my-info-join-membership-001',
    component: () => import('@/views/uiGuide/GuideMyInfoJoinMembership001.vue'),
  },
  {
    path: '/ui-guide/my-info-withdraw-membership-001',
    name: '/ui-guide/my-info-withdraw-membership-001',
    component: () =>
      import('@/views/uiGuide/GuideMyInfoWithdrawMembership001.vue'),
  },
  {
    path: '/ui-guide/my-info-market-price-car-001',
    name: '/ui-guide/my-info-market-price-car-001',
    component: () => import('@/views/uiGuide/GuideMyInfoMarketPriceCar001.vue'),
  },
  {
    path: '/ui-guide/my-info-market-price-realty-001',
    name: '/ui-guide/my-info-market-price-realty-001',
    component: () =>
      import('@/views/uiGuide/GuideMyInfoMarketPriceRealty001.vue'),
  },
  {
    path: '/ui-guide/sales-used-car-001',
    name: '/ui-guide/sales-used-car-001',
    component: () => import('@/views/uiGuide/GuideSalesUsedCar001.vue'),
  },
  {
    path: '/ui-guide/sales-new-car-001',
    name: '/ui-guide/sales-new-car-001',
    component: () => import('@/views/uiGuide/GuideSalesNewCar001.vue'),
  },
  {
    path: '/ui-guide/inventory-finance-check-001',
    name: '/ui-guide/inventory-finance-check-001',
    component: () =>
      import('@/views/uiGuide/GuideInventoryFinanceCheck001.vue'),
  },
  {
    path: '/ui-guide/regist-document-001',
    name: '/ui-guide/regist-document-001',
    component: () => import('@/views/uiGuide/GuideRegistDocument001.vue'),
  },
  {
    path: '/ui-guide/business-equipment-lease-001',
    name: '/ui-guide/business-equipment-lease-001',
    component: () =>
      import('@/views/uiGuide/GuideBusinessEquipmentLease001.vue'),
  },
  {
    path: '/ui-guide/business-general-installment-001',
    name: '/ui-guide/business-general-installment-001',
    component: () =>
      import('@/views/uiGuide/GuideBusinessGeneralInstallment001.vue'),
  },
  {
    path: '/ui-guide/equipment-lease-001',
    name: '/ui-guide/equipment-lease-001',
    component: () => import('@/views/uiGuide/GuideEquipmentLease001.vue'),
  },
  {
    path: '/ui-guide/alert-001',
    name: '/ui-guide/alert-001',
    component: () => import('@/views/uiGuide/GuideAlert001.vue'),
  },
  {
    path: '/ui-guide/alert-002',
    name: '/ui-guide/alert-002',
    component: () => import('@/views/uiGuide/GuideAlert002.vue'),
  },
  {
    path: '/ui-guide/alert-003',
    name: '/ui-guide/alert-003',
    component: () => import('@/views/uiGuide/GuideAlert003.vue'),
  },
  {
    path: '/ui-guide/alert-004',
    name: '/ui-guide/alert-004',
    component: () => import('@/views/uiGuide/GuideAlert004.vue'),
  },
  {
    path: '/ui-guide/toast-alert-001',
    name: '/ui-guide/toast-alert-001',
    component: () => import('@/views/uiGuide/GuideToastAlert001.vue'),
  },
  {
    path: '/ui-guide/loading-001',
    name: '/ui-guide/loading-001',
    component: () => import('@/views/uiGuide/GuideLoading001.vue'),
  },
  {
    path: '/ui-guide/main-001',
    name: '/ui-guide/main-001',
    component: () => import('@/views/uiGuide/GuideMain001.vue'),
  },
  {
    path: '/ui-guide/main-002',
    name: '/ui-guide/main-002',
    component: () => import('@/views/uiGuide/GuideMain002.vue'),
  },
  {
    path: '/ui-guide/lease-rent-estimation-system-001',
    name: '/ui-guide/lease-rent-estimation-system-001',
    component: () =>
      import('@/views/uiGuide/GuideLeaseRentEstimationSystem001.vue'),
  },
  {
    path: '/ui-guide/lease-rent-estimation-system-002',
    name: '/ui-guide/lease-rent-estimation-system-002',
    component: () =>
      import('@/views/uiGuide/GuideLeaseRentEstimationSystem002.vue'),
  },
  {
    path: '/ui-guide/lease-rent-estimation-system-003',
    name: '/ui-guide/lease-rent-estimation-system-003',
    component: () =>
      import('@/views/uiGuide/GuideLeaseRentEstimationSystem003.vue'),
  },
  {
    path: '/ui-guide/lease-rent-estimation-system-004',
    name: '/ui-guide/lease-rent-estimation-system-004',
    component: () =>
      import('@/views/uiGuide/GuideLeaseRentEstimationSystem004.vue'),
  },
  {
    path: '/ui-guide/lease-rent-estimation-system-005',
    name: '/ui-guide/lease-rent-estimation-system-005',
    component: () =>
      import('@/views/uiGuide/GuideLeaseRentEstimationSystem005.vue'),
  },
  {
    path: '/ui-guide/lease-rent-estimation-system-006',
    name: '/ui-guide/lease-rent-estimation-system-006',
    component: () =>
      import('@/views/uiGuide/GuideLeaseRentEstimationSystem006.vue'),
  },

  // splash
  {
    path: '/splash',
    name: '/splash',
    component: () => import('@/views/splash/SplashPage.vue'),
    meta: { layout: 'FullLayout' },
  },

  // main
  {
    path: '/main/home-001',
    name: '/main/home-001',
    component: () => import('@/views/main/MainHome001.vue'),
  },
  {
    path: '/main/home-002',
    name: '/main/home-002',
    component: () => import('@/views/main/MainHome002.vue'),
  },
  {
    path: '/main/push',
    name: '/main/push',
    component: () => import('@/views/main/MainPush.vue'),
  },
  {
    path: '/main/rental',
    name: '/main/rental',
    component: () => import('@/views/main/MainRental.vue'),
  },
  {
    path: '/main/used-rental',
    name: '/main/used-rental',
    component: () => import('@/views/main/MainUsedRental.vue'),
  },
  {
    path: '/main/fortune',
    name: '/main/fortune',
    component: () => import('@/views/main/MainFortune.vue'),
  },
  {
    path: '/main/my-loan',
    name: '/main/my-loan',
    component: () => import('@/views/main/MainMyLoan.vue'),
  },
  {
    path: '/main/my-loan-empty',
    name: '/main/my-loan-empty',
    component: () => import('@/views/main/MainMyLoanEmpty.vue'),
  },
  {
    path: '/main/product',
    name: '/main/product',
    component: () => import('@/views/main/MainProduct.vue'),
  },
  {
    path: '/main/benefit',
    name: '/main/benefit',
    component: () => import('@/views/main/MainBenefit.vue'),
    meta: { layout: 'MainBenefitLayout' },
  },
  {
    path: '/main/Main_M07_p004',
    name: '/main/Main_M07_p004',
    component: () => import('@/views/main/Main_M07_p004.vue'),
  },
  {
    path: '/main/Main_M09_p001',
    name: '/main/Main_M09_p001',
    component: () => import('@/views/main/Main_M09_p001.vue'),
  },
  {
    path: '/main/Main_M05_l001',
    name: '/main/Main_M05_l001',
    component: () => import('@/views/main/Main_M05_l001.vue'),
  },
  {
    path: '/main/Main_M05_p002',
    name: '/main/Main_M05_p002',
    component: () => import('@/views/main/Main_M05_p002.vue'),
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
    path: '/ui-guide/redirect-app',
    name: '/ui-guide/redirect-app',
    component: () => import('@/views/uiGuide/GuideRedirectApp.vue'),
  },
  {
    path: '/redirect/redirect-app-002',
    name: '/redirect/redirect-app-002',
    component: () => import('@/views/redirect/Common_M00_p100.vue'),
  },
  {
    path: '/redirect/redirect-app-003',
    name: '/redirect/redirect-app-003',
    component: () => import('@/views/redirect/Common_M00_p300.vue'),
    meta: { layout: 'NoneLayout' },
  },
  {
    path: '/redirect/redirect-app-004',
    name: '/redirect/redirect-app-004',
    component: () => import('@/views/redirect/Common_M00_p400.vue'),
  },
  {
    path: '/redirect/app-free',
    name: '/redirect/app-free',
    component: () => import('@/views/redirect/RedirectAppFree.vue'),
  },

  // personal-loan
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
  // s: 241220 추가
  {
    path: '/stock/PF_M07_p007_01',
    name: '/stock/PF_M07_p007_01',
    component: () => import('@/views/personalLoan/PF_M07_p007_01.vue'),
  },
  {
    path: '/stock/PF_M07_p007_02',
    name: '/stock/PF_M07_p007_02',
    component: () => import('@/views/personalLoan/PF_M07_p007_02.vue'),
  },
  // e:// 241220 추가
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
  {
    path: '/customer/clause',
    name: '/customer/clause',
    component: () => import('@/views/customer/CustomerClause.vue'),
  },
  {
    path: '/customer/clause-detail',
    name: '/customer/clause-detail',
    component: () => import('@/views/customer/CustomerClauseDetail.vue'),
  },
  {
    path: '/customer/financial-consumer-protection',
    name: '/customer/financial-consumer-protection',
    component: () =>
      import('@/views/customer/CustomerFinancialConsumerProtection.vue'),
  },
  {
    path: '/customer/financial-consumer-protection-charter',
    name: '/customer/financial-consumer-protection-charter',
    component: () =>
      import('@/views/customer/CustomerFinancialConsumerProtectionCharter.vue'),
  },
  {
    path: '/customer/financial-consumer-protection-organization',
    name: '/customer/financial-consumer-protection-organization',
    component: () =>
      import(
        '@/views/customer/CustomerFinancialConsumerProtectionOrganization.vue'
      ),
  },
  {
    path: '/customer/financial-consumer-protection-system',
    name: '/customer/financial-consumer-protection-system',
    component: () =>
      import('@/views/customer/CustomerFinancialConsumerProtectionSystem.vue'),
  },
  {
    path: '/customer/financial-consumer-protection-webzine',
    name: '/customer/financial-consumer-protection-webzine',
    component: () =>
      import('@/views/customer/CustomerFinancialConsumerProtectionWebzine.vue'),
  },
  {
    path: '/customer/financial-consumer-protection-notice-list',
    name: '/customer/financial-consumer-protection-notice-list',
    component: () =>
      import(
        '@/views/customer/CustomerFinancialConsumerProtectionNoticeList.vue'
      ),
  },
  {
    path: '/customer/financial-consumer-protection-notice-view',
    name: '/customer/financial-consumer-protection-notice-view',
    component: () =>
      import(
        '@/views/customer/CustomerFinancialConsumerProtectionNoticeView.vue'
      ),
  },
  {
    path: '/customer/financial-consumer-protection-interest-rate-cut-request-info',
    name: '/customer/financial-consumer-protection-interest-rate-cut-request-info',
    component: () =>
      import(
        '@/views/customer/CustomerFinancialConsumerProtectionInterestRateCutRequestInfo.vue'
      ),
  },
  {
    path: '/customer/financial-consumer-protection-withdraw-subscription-info',
    name: '/customer/financial-consumer-protection-withdraw-subscription-info',
    component: () =>
      import(
        '@/views/customer/CustomerFinancialConsumerProtectionWithdrawSubscriptionInfo.vue'
      ),
  },
  {
    path: '/customer/financial-consumer-protection-exemption-early-redemption-fee',
    name: '/customer/financial-consumer-protection-exemption-early-redemption-fee',
    component: () =>
      import(
        '@/views/customer/CustomerFinancialConsumerProtectionExemptionEarlyRedemptionFee.vue'
      ),
  },
  {
    path: '/customer/financial-consumer-protection-data',
    name: '/customer/financial-consumer-protection-data',
    component: () =>
      import('@/views/customer/CustomerFinancialConsumerProtectionData.vue'),
  },
  {
    path: '/customer/financial-consumer-protection-data-detail',
    name: '/customer/financial-consumer-protection-data-detail',
    component: () =>
      import(
        '@/views/customer/CustomerFinancialConsumerProtectionDataDetail.vue'
      ),
  },

  // inventory-financing
  {
    path: '/inventory-finance/home',
    name: '/inventory-finance/home',
    component: () =>
      import('@/views/inventoryFinance/InventoryFinanceHome.vue'),
  },
  {
    path: '/inventory-finance/loan-limit-inquiry',
    name: '/inventory-finance/loan-limit-inquiry',
    component: () =>
      import('@/views/inventoryFinance/InventoryFinanceLoanLimitInquiry.vue'),
  },
  {
    path: '/inventory-finance/loan-limit-inquiry-search',
    name: '/inventory-finance/loan-limit-inquiry-search',
    component: () =>
      import(
        '@/views/inventoryFinance/InventoryFinanceLoanLimitInquirySearch.vue'
      ),
  },
  {
    path: '/inventory-finance/loan-limit-inquiry-complete',
    name: '/inventory-finance/loan-limit-inquiry-complete',
    component: () =>
      import(
        '@/views/inventoryFinance/InventoryFinanceLoanLimitInquiryComplete.vue'
      ),
  },
  {
    path: '/inventory-finance/early-list',
    name: '/inventory-finance/early-list',
    component: () =>
      import('@/views/inventoryFinance/InventoryFinanceEarlyList.vue'),
  },
  {
    path: '/inventory-finance/early-form',
    name: '/inventory-finance/early-form',
    component: () =>
      import('@/views/inventoryFinance/InventoryFinanceEarlyForm.vue'),
  },
  {
    path: '/inventory-finance/early-simulation',
    name: '/inventory-finance/early-simulation',
    component: () =>
      import('@/views/inventoryFinance/InventoryFinanceEarlySimulation.vue'),
  },
  {
    path: '/inventory-finance/early-confirm',
    name: '/inventory-finance/early-confirm',
    component: () =>
      import('@/views/inventoryFinance/InventoryFinanceEarlyConfirm.vue'),
  },
  {
    path: '/inventory-finance/early-complete',
    name: '/inventory-finance/early-complete',
    component: () =>
      import('@/views/inventoryFinance/InventoryFinanceEarlyComplete.vue'),
  },
  {
    path: '/inventory-finance/early-fail',
    name: '/inventory-finance/early-fail',
    component: () =>
      import('@/views/inventoryFinance/InventoryFinanceEarlyFail.vue'),
  },
  {
    path: '/inventory-finance/extension-list',
    name: '/inventory-finance/extension-list',
    component: () =>
      import('@/views/inventoryFinance/InventoryFinanceExtensionList.vue'),
  },
  {
    path: '/inventory-finance/extension-view',
    name: '/inventory-finance/extension-view',
    component: () =>
      import('@/views/inventoryFinance/InventoryFinanceExtensionView.vue'),
  },
  {
    path: '/inventory-finance/extension-form',
    name: '/inventory-finance/extension-form',
    component: () =>
      import('@/views/inventoryFinance/InventoryFinanceExtensionForm.vue'),
  },
  {
    path: '/inventory-finance/extension-confirm',
    name: '/inventory-finance/extension-confirm',
    component: () =>
      import('@/views/inventoryFinance/InventoryFinanceExtensionConfirm.vue'),
  },
  {
    path: '/inventory-finance/extension-complete',
    name: '/inventory-finance/extension-complete',
    component: () =>
      import('@/views/inventoryFinance/InventoryFinanceExtensionComplete.vue'),
  },
  {
    path: '/inventory-finance/extension-fail',
    name: '/inventory-finance/extension-fail',
    component: () =>
      import('@/views/inventoryFinance/InventoryFinanceExtensionFail.vue'),
  },
  {
    path: '/inventory-finance/add-documents',
    name: '/inventory-finance/add-documents',
    component: () =>
      import('@/views/inventoryFinance/InventoryFinanceAddDocuments.vue'),
  },
  {
    path: '/inventory-finance/termination-bonds',
    name: '/inventory-finance/termination-bonds',
    component: () =>
      import('@/views/inventoryFinance/InventoryFinanceTerminationBonds.vue'),
  },
  {
    path: '/inventory-finance/state-list',
    name: '/inventory-finance/state-list',
    component: () =>
      import('@/views/inventoryFinance/InventoryFinanceStateList.vue'),
  },
  {
    path: '/inventory-finance/state-add-info',
    name: '/inventory-finance/state-add-info',
    component: () =>
      import('@/views/inventoryFinance/InventoryFinanceStateAddInfo.vue'),
  },
  {
    path: '/inventory-finance/loan-agreement',
    name: '/inventory-finance/loan-agreement',
    component: () =>
      import('@/views/inventoryFinance/InventoryFinanceLoanAgreement.vue'),
  },
  {
    path: '/inventory-finance/loan-agreement-complete',
    name: '/inventory-finance/loan-agreement-complete',
    component: () =>
      import(
        '@/views/inventoryFinance/InventoryFinanceLoanAgreementComplete.vue'
      ),
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
  {
    path: '/setting/hana-one-sign-guide',
    name: '/setting/hana-one-sign-guide',
    component: () => import('@/views/setting/SettingHanaOneSignGuide.vue'),
  },

  // lm-blog
  {
    path: '/lm-blog/loan-counseling',
    name: '/lm-blog/loan-counseling',
    component: () => import('@/views/lmBlog/LMBlogLoanCounseling.vue'),
  },
  {
    path: '/lm-blog/loan-counseling-form',
    name: '/lm-blog/loan-counseling-form',
    component: () => import('@/views/lmBlog/LMBlogLoanCounselingForm.vue'),
  },
  {
    path: '/lm-blog/quick-counseling',
    name: '/lm-blog/quick-counseling',
    component: () => import('@/views/lmBlog/LMBlogQuickCounseling.vue'),
  },
  {
    path: '/lm-blog/sms-counseling',
    name: '/lm-blog/sms-counseling',
    component: () => import('@/views/lmBlog/LMBlogSMSCounseling.vue'),
  },
  {
    path: '/lm-blog/sms-counseling-detail',
    name: '/lm-blog/sms-counseling-detail',
    component: () => import('@/views/lmBlog/LMBlogSMSCounselingDetail.vue'),
  },
  {
    path: '/lm-blog/access-statistics',
    name: '/lm-blog/access-statistics',
    component: () => import('@/views/lmBlog/LMBlogAccessStatistics.vue'),
  },
  {
    path: '/lm-blog/status-inquiry',
    name: '/lm-blog/status-inquiry',
    component: () => import('@/views/lmBlog/LMBlogStatusInquiry.vue'),
  },

  // lm-blog-personal
  {
    path: '/lm-blog-personal/home',
    name: '/lm-blog-personal/home',
    component: () => import('@/views/lmBlogPersonal/LMBlogPersonalHome.vue'),
  },
  {
    path: '/lm-blog-personal/menu',
    name: '/lm-blog-personal/menu',
    component: () => import('@/views/lmBlogPersonal/LMBlogPersonalMenu.vue'),
  },
  {
    path: '/lm-blog-personal/quick-counseling',
    name: '/lm-blog-personal/quick-counseling',
    component: () =>
      import('@/views/lmBlogPersonal/LMBlogPersonalQuickCounseling.vue'),
  },
  {
    path: '/lm-blog-personal/sms-counseling',
    name: '/lm-blog-personal/sms-counseling',
    component: () =>
      import('@/views/lmBlogPersonal/LMBlogPersonalSMSCounseling.vue'),
  },
  {
    path: '/lm-blog-personal/map',
    name: '/lm-blog-personal/map',
    component: () => import('@/views/lmBlogPersonal/LMBlogPersonalMap.vue'),
  },

  // auto
  {
    path: '/auto/long-rental',
    name: '/auto/long-rental',
    component: () => import('@/views/auto/AutoLongRental.vue'),
  },
  {
    path: '/auto/lease',
    name: '/auto/lease',
    component: () => import('@/views/auto/AutoLease.vue'),
  },
  {
    path: '/auto/instalment',
    name: '/auto/instalment',
    component: () => import('@/views/auto/AutoInstalment.vue'),
  },
  {
    path: '/auto/loan',
    name: '/auto/loan',
    component: () => import('@/views/auto/AutoLoan.vue'),
  },
  {
    path: '/auto/one-q-loan',
    name: '/auto/one-q-loan',
    component: () => import('@/views/auto/AutoOneQLoan.vue'),
  },
  {
    path: '/auto/used-loan',
    name: '/auto/used-loan',
    component: () => import('@/views/auto/AutoUsedLoan.vue'),
  },
  {
    path: '/auto/succession',
    name: '/auto/succession',
    component: () => import('@/views/auto/AutoSuccession.vue'),
  },
  {
    path: '/auto/hot-deal',
    name: '/auto/hot-deal',
    component: () => import('@/views/auto/AutoHotDeal.vue'),
  },
  {
    path: '/auto/car-cart',
    name: '/auto/car-cart',
    component: () => import('@/views/auto/AutoCarCart.vue'),
  },
  {
    path: '/auto/car-cart-empty',
    name: '/auto/car-cart-empty',
    component: () => import('@/views/auto/AutoCarCartEmpty.vue'),
  },

  // business
  {
    path: '/business/equipment-lease',
    name: '/business/equipment-lease',
    component: () => import('@/views/business/BusinessEquipmentLease.vue'),
  },
  {
    path: '/business/BF_M05_l022',
    name: '/business/BF_M05_l022',
    component: () => import('@/views/business/BF_M05_l022.vue'),
  },
  {
    path: '/business/general-installment',
    name: '/business/general-installment',
    component: () => import('@/views/business/BusinessGeneralInstallment.vue'),
  },

  // my-loan
  {
    path: '/my-loan/home',
    name: '/my-loan/home',
    component: () => import('@/views/myLoan/MyLoanHome.vue'),
  },
  {
    path: '/my-loan/empty',
    name: '/my-loan/empty',
    component: () => import('@/views/myLoan/MyLoanEmpty.vue'),
  },
  {
    path: '/my-loan/detail-personal',
    name: '/my-loan/detail-personal',
    component: () => import('@/views/myLoan/MyLoanDetailPersonal.vue'),
  },
  {
    path: '/my-loan/detail-stock',
    name: '/my-loan/detail-stock',
    component: () => import('@/views/myLoan/MyLoanDetailStock.vue'),
  },
  {
    path: '/my-loan/detail-intermediate',
    name: '/my-loan/detail-intermediate',
    component: () => import('@/views/myLoan/MyLoanDetailIntermediate.vue'),
  },
  {
    path: '/my-loan/detail-auto',
    name: '/my-loan/detail-auto',
    component: () => import('@/views/myLoan/MyLoanDetailAuto.vue'),
  },
  {
    path: '/my-loan/detail-instalment',
    name: '/my-loan/detail-instalment',
    component: () => import('@/views/myLoan/MyLoanDetailInstalment.vue'),
  },
  {
    path: '/my-loan/detail-medical-instalment',
    name: '/my-loan/detail-medical-instalment',
    component: () => import('@/views/myLoan/MyLoanDetailMedicalInstalment.vue'),
  },
  {
    path: '/my-loan/progress',
    name: '/my-loan/progress',
    component: () => import('@/views/myLoan/MyLoanProgress.vue'),
  },
  {
    path: '/my-loan/progress-identification',
    name: '/my-loan/progress-identification',
    component: () => import('@/views/myLoan/MyLoanProgressIdentification.vue'),
  },
  {
    path: '/my-loan/post-maturity-rental-before',
    name: '/my-loan/post-maturity-rental-before',
    component: () =>
      import('@/views/myLoan/MyLoanPostMaturityRentalBefore.vue'),
  },
  {
    path: '/my-loan/post-maturity-rental-after',
    name: '/my-loan/post-maturity-rental-after',
    component: () => import('@/views/myLoan/MyLoanPostMaturityRentalAfter.vue'),
  },
  {
    path: '/my-loan/post-maturity-lease-before',
    name: '/my-loan/post-maturity-lease-before',
    component: () => import('@/views/myLoan/MyLoanPostMaturityLeaseBefore.vue'),
  },
  {
    path: '/my-loan/post-maturity-lease-after',
    name: '/my-loan/post-maturity-lease-after',
    component: () => import('@/views/myLoan/MyLoanPostMaturityLeaseAfter.vue'),
  },
  {
    path: '/my-loan/interest-rate-cut-request',
    name: '/my-loan/interest-rate-cut-request',
    component: () => import('@/views/myLoan/MyLoanInterestRateCutRequest.vue'),
  },
  {
    path: '/my-loan/subscription-withdrawal-right',
    name: '/my-loan/subscription-withdrawal-right',
    component: () =>
      import('@/views/myLoan/MyLoanSubscriptionWithdrawalRight.vue'),
  },
  {
    path: '/my-loan/my-loan-add-documents',
    name: '/my-loan/my-loan-add-documents',
    component: () => import('@/views/myLoan/MyLoanAddDocuments.vue'),
  },
  {
    path: '/my-loan/add-documents-complete',
    name: '/my-loan/add-documents-complete',
    component: () => import('@/views/myLoan/MyLoanAddDocumentsComplete.vue'),
  },
  {
    path: '/my-loan/BF_M06_l017',
    name: '/my-loan/BF_M06_l017',
    component: () => import('@/views/myLoan/BF_M06_l017.vue'),
  },
  {
    path: '/my-loan/BF_M06_l018',
    name: '/my-loan/BF_M06_l018',
    component: () => import('@/views/myLoan/BF_M06_l018.vue'),
  },
  {
    path: '/my-loan/My_M03_l005',
    name: '/my-loan/My_M03_l005',
    component: () => import('@/views/myLoan/My_M03_l005.vue'),
  },

  // my-info
  {
    path: '/my-info/home',
    name: '/my-info/home',
    component: () => import('@/views/myInfo/MyInfoHome.vue'),
  },
  {
    path: '/my-info/edit',
    name: '/my-info/edit',
    component: () => import('@/views/myInfo/MyInfoEdit.vue'),
  },
  {
    path: '/my-info/direct-debit-account',
    name: '/my-info/direct-debit-account',
    component: () => import('@/views/myInfo/MyInfoDirectDebitAccount.vue'),
  },
  {
    path: '/my-info/billing',
    name: '/my-info/billing',
    component: () => import('@/views/myInfo/MyInfoBilling.vue'),
  },
  {
    path: '/my-info/hana-money',
    name: '/my-info/hana-money',
    component: () => import('@/views/myInfo/MyInfoHanaMoney.vue'),
  },
  {
    path: '/my-info/marketing',
    name: '/my-info/marketing',
    component: () => import('@/views/myInfo/MyInfoMarketing.vue'),
  },
  {
    path: '/my-info/withdraw-member',
    name: '/my-info/withdraw-member',
    component: () => import('@/views/myInfo/MyInfoWithdrawMember.vue'),
  },
  {
    path: '/my-info/withdraw-member-complete',
    name: '/my-info/withdraw-member-complete',
    component: () => import('@/views/myInfo/MyInfoWithdrawMemberComplete.vue'),
  },
  {
    path: '/my-info/join-hana-money',
    name: '/my-info/join-hana-money',
    component: () => import('@/views/myInfo/MyInfoJoinHanaMoney.vue'),
  },
  {
    path: '/my-info/join-membership',
    name: '/my-info/join-membership',
    component: () => import('@/views/myInfo/MyInfoJoinMembership.vue'),
  },
  {
    path: '/my-info/join-membership-complete',
    name: '/my-info/join-membership-complete',
    component: () => import('@/views/myInfo/MyInfoJoinMembershipComplete.vue'),
  },
  {
    path: '/my-info/withdraw-membership-complete',
    name: '/my-info/withdraw-membership-complete',
    component: () =>
      import('@/views/myInfo/MyInfoWithdrawMembershipComplete.vue'),
  },
  {
    path: '/my-info/market-price-car',
    name: '/my-info/market-price-car',
    component: () => import('@/views/myInfo/MyInfoMarketPriceCar.vue'),
  },
  {
    path: '/my-info/market-price-realty',
    name: '/my-info/market-price-realty',
    component: () => import('@/views/myInfo/MyInfoMarketPriceRealty.vue'),
  },

  // sales-used-car
  {
    path: '/sales-used-car/home',
    name: '/sales-used-car/home',
    component: () => import('@/views/salesUsedCar/SalesUsedCarHome.vue'),
  },
  {
    path: '/sales-used-car/new-counseling',
    name: '/sales-used-car/new-counseling',
    component: () =>
      import('@/views/salesUsedCar/SalesUsedCarNewCounseling.vue'),
  },
  {
    path: '/sales-used-car/counseling',
    name: '/sales-used-car/counseling',
    component: () => import('@/views/salesUsedCar/SalesUsedCarCounseling.vue'),
  },
  {
    path: '/sales-used-car/counseling-complete',
    name: '/sales-used-car/counseling-complete',
    component: () =>
      import('@/views/salesUsedCar/SalesUsedCarCounselingComplete.vue'),
  },
  {
    path: '/sales-used-car/counseling-auto-complete',
    name: '/sales-used-car/counseling-auto-complete',
    component: () =>
      import('@/views/salesUsedCar/SalesUsedCarCounselingAutoComplete.vue'),
  },
  {
    path: '/sales-used-car/counseling-fail-001',
    name: '/sales-used-car/counseling-fail-001',
    component: () =>
      import('@/views/salesUsedCar/SalesUsedCarCounselingFail001.vue'),
  },
  {
    path: '/sales-used-car/counseling-fail-002',
    name: '/sales-used-car/counseling-fail-002',
    component: () =>
      import('@/views/salesUsedCar/SalesUsedCarCounselingFail002.vue'),
  },
  {
    path: '/sales-used-car/counseling-fail-003',
    name: '/sales-used-car/counseling-fail-003',
    component: () =>
      import('@/views/salesUsedCar/SalesUsedCarCounselingFail003.vue'),
  },
  {
    path: '/sales-used-car/counseling-fail-004',
    name: '/sales-used-car/counseling-fail-004',
    component: () =>
      import('@/views/salesUsedCar/SalesUsedCarCounselingFail004.vue'),
  },
  {
    path: '/sales-used-car/counseling-fail-005',
    name: '/sales-used-car/counseling-fail-005',
    component: () =>
      import('@/views/salesUsedCar/SalesUsedCarCounselingFail005.vue'),
  },
  {
    path: '/sales-used-car/counseling-impossible-001',
    name: '/sales-used-car/counseling-impossible-001',
    component: () =>
      import('@/views/salesUsedCar/SalesUsedCarCounselingImpossible001.vue'),
  },
  {
    path: '/sales-used-car/counseling-impossible-002',
    name: '/sales-used-car/counseling-impossible-002',
    component: () =>
      import('@/views/salesUsedCar/SalesUsedCarCounselingImpossible002.vue'),
  },
  {
    path: '/sales-used-car/counseling-edit',
    name: '/sales-used-car/counseling-edit',
    component: () =>
      import('@/views/salesUsedCar/SalesUsedCarCounselingEdit.vue'),
  },
  {
    path: '/sales-used-car/affiliate',
    name: '/sales-used-car/affiliate',
    component: () => import('@/views/salesUsedCar/SalesUsedCarAffiliate.vue'),
  },
  {
    path: '/sales-used-car/affiliate-confirm',
    name: '/sales-used-car/affiliate-confirm',
    component: () =>
      import('@/views/salesUsedCar/SalesUsedCarAffiliateConfirm.vue'),
  },
  {
    path: '/sales-used-car/affiliate-form',
    name: '/sales-used-car/affiliate-form',
    component: () =>
      import('@/views/salesUsedCar/SalesUsedCarAffiliateForm.vue'),
  },
  {
    path: '/sales-used-car/affiliate-complete',
    name: '/sales-used-car/affiliate-complete',
    component: () =>
      import('@/views/salesUsedCar/SalesUsedCarAffiliateComplete.vue'),
  },

  // sales-new-car
  {
    path: '/sales-new-car/home',
    name: '/sales-new-car/home',
    component: () => import('@/views/salesNewCar/SalesNewCarHome.vue'),
  },
  {
    path: '/sales-new-car/new-counseling',
    name: '/sales-new-car/new-counseling',
    component: () => import('@/views/salesNewCar/SalesNewCarNewCounseling.vue'),
  },
  {
    path: '/sales-new-car/counseling',
    name: '/sales-new-car/counseling',
    component: () => import('@/views/salesNewCar/SalesNewCarCounseling.vue'),
  },
  {
    path: '/sales-new-car/counseling-complete',
    name: '/sales-new-car/counseling-complete',
    component: () =>
      import('@/views/salesNewCar/SalesNewCarCounselingComplete.vue'),
  },
  {
    path: '/sales-new-car/counseling-fail',
    name: '/sales-new-car/counseling-fail',
    component: () =>
      import('@/views/salesNewCar/SalesNewCarCounselingFail.vue'),
  },
  {
    path: '/sales-new-car/add-contract',
    name: '/sales-new-car/add-contract',
    component: () => import('@/views/salesNewCar/SalesNewCarAddContract.vue'),
  },
  {
    path: '/sales-new-car/add-contract-complete',
    name: '/sales-new-car/add-contract-complete',
    component: () =>
      import('@/views/salesNewCar/SalesNewCarAddContractComplete.vue'),
  },
  {
    path: '/sales-new-car/unregistered-bonds',
    name: '/sales-new-car/unregistered-bonds',
    component: () =>
      import('@/views/salesNewCar/SalesNewCarUnregisteredBonds.vue'),
  },

  // inventory-finance-check
  {
    path: '/inventory-finance-check/home',
    name: '/inventory-finance-check/home',
    component: () =>
      import('@/views/InventoryFinanceCheck/InventoryFinanceCheckHome.vue'),
  },

  // lease-rent-estimation-system
  {
    path: '/lease-rent-estimation-system/pre-purchase',
    name: '/lease-rent-estimation-system/pre-purchase',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemPrePurchase.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/pre-purchase-choose-car',
    name: '/lease-rent-estimation-system/pre-purchase-choose-car',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemPrePurchaseChooseCar.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/pre-purchase-regist-car',
    name: '/lease-rent-estimation-system/pre-purchase-regist-car',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemPrePurchaseRegistCar.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/pre-purchase-car-detail',
    name: '/lease-rent-estimation-system/pre-purchase-car-detail',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemPrePurchaseCarDetail.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/save-review',
    name: '/lease-rent-estimation-system/save-review',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemSaveReview.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/save-review-approval-request-rent',
    name: '/lease-rent-estimation-system/save-review-approval-request-rent',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemSaveReviewApprovalRequestRent.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/save-review-approval-request-lease',
    name: '/lease-rent-estimation-system/save-review-approval-request-lease',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemSaveReviewApprovalRequestLease.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/rent',
    name: '/lease-rent-estimation-system/rent',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemRent.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/lease',
    name: '/lease-rent-estimation-system/lease',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemLease.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/view-estimation',
    name: '/lease-rent-estimation-system/view-estimation',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemViewEstimation.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/used-lease',
    name: '/lease-rent-estimation-system/used-lease',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemUsedLease.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/installment',
    name: '/lease-rent-estimation-system/installment',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemInstallment.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/test-drive-car',
    name: '/lease-rent-estimation-system/test-drive-car',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemTestDriveCar.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/my-info',
    name: '/lease-rent-estimation-system/my-info',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemMyInfo.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/notice-list',
    name: '/lease-rent-estimation-system/notice-list',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemNoticeList.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/notice-detail',
    name: '/lease-rent-estimation-system/notice-detail',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemNoticeDetail.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/notice-edit',
    name: '/lease-rent-estimation-system/notice-edit',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemNoticeEdit.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/terms-of-use',
    name: '/lease-rent-estimation-system/terms-of-use',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemTermsOfUse.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/admin-status',
    name: '/lease-rent-estimation-system/admin-status',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemAdminStatus.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/admin-setting-home',
    name: '/lease-rent-estimation-system/admin-setting-home',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemAdminSettingHome.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/admin-setting-role',
    name: '/lease-rent-estimation-system/admin-setting-role',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemAdminSettingRole.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/admin-setting-default',
    name: '/lease-rent-estimation-system/admin-setting-default',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemAdminSettingDefault.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/LR_M05_p013',
    name: '/lease-rent-estimation-system/LR_M05_p013',
    component: () =>
      import('@/views/LeaseRentEstimationSystem/LR_M05_p013.vue'),
  },
  {
    path: '/lease-rent-estimation-system/LR_M05_p014',
    name: '/lease-rent-estimation-system/LR_M05_p014',
    component: () =>
      import('@/views/LeaseRentEstimationSystem/LR_M05_p014.vue'),
  },
  {
    path: '/lease-rent-estimation-system/LR_M05_p015',
    name: '/lease-rent-estimation-system/LR_M05_p015',
    component: () =>
      import('@/views/LeaseRentEstimationSystem/LR_M05_p015.vue'),
  },
  // 20240206
  {
    path: '/lease-rent-estimation-system/LR_TO_p01_check',
    name: '/lease-rent-estimation-system/LR_TO_p01_check',
    component: () =>
      import('@/views/LeaseRentEstimationSystem/LR_TO_p01_check.vue'),
  },
  {
    path: '/lease-rent-estimation-system/LR_TO_p01',
    name: '/lease-rent-estimation-system/LR_TO_p01',
    component: () => import('@/views/LeaseRentEstimationSystem/LR_TO_p01.vue'),
  },
  // // 20240206
  // 20240208
  {
    path: '/lease-rent-estimation-system/DA_reservation-counseling',
    name: '/lease-rent-estimation-system/DA_reservation-counseling',
    component: () =>
      import('@/views/LeaseRentEstimationSystem/LR_DA_reCounseling.vue'),
  },
  {
    path: '/lease-rent-estimation-system/DA_reservation-counseling-complete',
    name: '/lease-rent-estimation-system/DA_reservation-counseling-complete',
    component: () =>
      import('@/views/LeaseRentEstimationSystem/LR_DA_reCounseling_com.vue'),
  },
  {
    path: '/lease-rent-estimation-system/DA_randing',
    name: '/lease-rent-estimation-system/DA_randing',
    component: () =>
      import('@/views/LeaseRentEstimationSystem/LR_DA_randing.vue'),
  },
  // // 20240208
  // company
  {
    path: '/company/about',
    name: '/company/about',
    component: () => import('@/views/company/CompanyAbout.vue'),
  },
  {
    path: '/company/ceo',
    name: '/company/ceo',
    component: () => import('@/views/company/CompanyCEO.vue'),
  },
  {
    path: '/company/history',
    name: '/company/history',
    component: () => import('@/views/company/CompanyHistory.vue'),
  },
  {
    path: '/company/business-areas',
    name: '/company/business-areas',
    component: () => import('@/views/company/CompanyBusinessAreas.vue'),
  },
  {
    path: '/company/ir-list',
    name: '/company/ir-list',
    component: () => import('@/views/company/CompanyIRList.vue'),
  },
  {
    path: '/company/ir-detail',
    name: '/company/ir-detail',
    component: () => import('@/views/company/CompanyIRDetail.vue'),
  },
  {
    path: '/company/sustainable-management-list',
    name: '/company/sustainable-management-list',
    component: () =>
      import('@/views/company/CompanySustainableManagementList.vue'),
  },
  {
    path: '/company/sustainable-management-detail',
    name: '/company/sustainable-management-detail',
    component: () =>
      import('@/views/company/CompanySustainableManagementDetail.vue'),
  },
  {
    path: '/company/group',
    name: '/company/group',
    component: () => import('@/views/company/CompanyGroup.vue'),
  },
  {
    path: '/company/ethics-charter',
    name: '/company/ethics-charter',
    component: () => import('@/views/company/CompanyEthicsCharter.vue'),
  },
  {
    path: '/company/ethics-code',
    name: '/company/ethics-code',
    component: () => import('@/views/company/CompanyEthicsCode.vue'),
  },
  {
    path: '/company/human-rights-declaration',
    name: '/company/human-rights-declaration',
    component: () =>
      import('@/views/company/CompanyHumanRightsDeclaration.vue'),
  },
  {
    path: '/company/human-rights-declaration-structure',
    name: '/company/human-rights-declaration-structure',
    component: () =>
      import('@/views/company/CompanyHumanRightsDeclarationStructure.vue'),
  },
  {
    path: '/company/recruit-guide',
    name: '/company/recruit-guide',
    component: () => import('@/views/company/CompanyRecruitGuide.vue'),
  },
  {
    path: '/company/personnel-welfare',
    name: '/company/personnel-welfare',
    component: () => import('@/views/company/CompanyPersonnelWelfare.vue'),
  },
  {
    path: '/company/recruit-list',
    name: '/company/recruit-list',
    component: () => import('@/views/company/CompanyRecruitList.vue'),
  },
  {
    path: '/company/recruit-detail',
    name: '/company/recruit-detail',
    component: () => import('@/views/company/CompanyRecruitDetail.vue'),
  },

  // equipment-lease
  {
    path: '/equipment-lease/estimate',
    name: '/equipment-lease/estimate',
    component: () =>
      import('@/views/equipmentLease/EquipmentLeaseEstimate.vue'),
  },
  {
    path: '/equipment-lease/estimate-result',
    name: '/equipment-lease/estimate-result',
    component: () =>
      import('@/views/equipmentLease/EquipmentLeaseEstimateResult.vue'),
  },
  {
    path: '/equipment-lease/state-estimate',
    name: '/equipment-lease/state-estimate',
    component: () =>
      import('@/views/equipmentLease/EquipmentLeaseStateEstimate.vue'),
  },
  {
    path: '/equipment-lease/state-internal-memo',
    name: '/equipment-lease/state-internal-memo',
    component: () =>
      import('@/views/equipmentLease/EquipmentLeaseStateInternalMemo.vue'),
  },

  // onboarding
  {
    path: '/onboarding/home',
    name: '/onboarding/home',
    component: () => import('@/views/onboarding/OnboardingHome.vue'),
    meta: { layout: 'FullLayout' },
  },

  // bottom-page
  {
    path: '/bottom-page/Common_M00_p101',
    name: '/bottom-page/Common_M00_p101',
    component: () => import('@/views/bottomPage/Common_M00_p101.vue'),
    meta: { layout: 'FullLayout' },
  },

  // document
  {
    path: '/document/estimate-001',
    name: '/document/estimate-001',
    component: () => import('@/views/document/DocumentEstimate001.vue'),
    meta: { layout: 'DocumentLayout' },
  },
  {
    path: '/document/estimate-002',
    name: '/document/estimate-002',
    component: () => import('@/views/document/DocumentEstimate002.vue'),
    meta: { layout: 'DocumentLayout' },
  },
  {
    path: '/document/estimate-003',
    name: '/document/estimate-003',
    component: () => import('@/views/document/DocumentEstimate003.vue'),
    meta: { layout: 'DocumentLayout' },
  },
  {
    path: '/document/estimate-004',
    name: '/document/estimate-004',
    component: () => import('@/views/document/DocumentEstimate004.vue'),
    meta: { layout: 'DocumentLayout' },
  },

  // 1q
  {
    path: '/one-q/Q_M00_p001',
    name: '/one-q/Q_M00_p001',
    component: () => import('@/views/oneQ/Q_M00_p001.vue'),
  },
  {
    path: '/one-q/Q_M01_p001',
    name: '/one-q/Q_M01_p001',
    component: () => import('@/views/oneQ/Q_M01_p001.vue'),
  },
  {
    path: '/one-q/Q_M01_p002',
    name: '/one-q/Q_M01_p002',
    component: () => import('@/views/oneQ/Q_M01_p002.vue'),
  },
  {
    path: '/one-q/Q_M01_p003',
    name: '/one-q/Q_M01_p003',
    component: () => import('@/views/oneQ/Q_M01_p003.vue'),
  },
  {
    path: '/one-q/Q_M02_p001',
    name: '/one-q/Q_M02_p001',
    component: () => import('@/views/oneQ/Q_M02_p001.vue'),
  },
  {
    path: '/one-q/Q_M02_p002',
    name: '/one-q/Q_M02_p002',
    component: () => import('@/views/oneQ/Q_M02_p002.vue'),
  },
  {
    path: '/one-q/Q_M02_p003',
    name: '/one-q/Q_M02_p003',
    component: () => import('@/views/oneQ/Q_M02_p003.vue'),
  },
  {
    path: '/one-q/Q_M03_p001',
    name: '/one-q/Q_M03_p001',
    component: () => import('@/views/oneQ/Q_M03_p001.vue'),
  },
  {
    path: '/one-q/Q_M03_p002',
    name: '/one-q/Q_M03_p002',
    component: () => import('@/views/oneQ/Q_M03_p002.vue'),
  },
  {
    path: '/one-q/Q_M03_p003',
    name: '/one-q/Q_M03_p003',
    component: () => import('@/views/oneQ/Q_M03_p003.vue'),
  },
  {
    path: '/one-q/Q_M04_p001',
    name: '/one-q/Q_M04_p001',
    component: () => import('@/views/oneQ/Q_M04_p001.vue'),
  },
  {
    path: '/one-q/Q_M04_p002',
    name: '/one-q/Q_M04_p002',
    component: () => import('@/views/oneQ/Q_M04_p002.vue'),
  },
  {
    path: '/one-q/Q_M04_p003',
    name: '/one-q/Q_M04_p003',
    component: () => import('@/views/oneQ/Q_M04_p003.vue'),
  },
  {
    path: '/one-q/Q_M04_p004',
    name: '/one-q/Q_M04_p004',
    component: () => import('@/views/oneQ/Q_M04_p004.vue'),
  },
  {
    path: '/one-q/Q_M04_p005',
    name: '/one-q/Q_M04_p005',
    component: () => import('@/views/oneQ/Q_M04_p005.vue'),
  },
  {
    path: '/one-q/Q_M05_p001',
    name: '/one-q/Q_M05_p001',
    component: () => import('@/views/oneQ/Q_M05_p001.vue'),
  },
  {
    path: '/one-q/Q_M05_p002',
    name: '/one-q/Q_M05_p002',
    component: () => import('@/views/oneQ/Q_M05_p002.vue'),
  },
  {
    path: '/one-q/Q_M06_p001',
    name: '/one-q/Q_M06_p001',
    component: () => import('@/views/oneQ/Q_M06_p001.vue'),
  },
  {
    path: '/one-q/Q_M06_p002',
    name: '/one-q/Q_M06_p002',
    component: () => import('@/views/oneQ/Q_M06_p002.vue'),
  },
  {
    path: '/one-q/Q_M07_p001',
    name: '/one-q/Q_M07_p001',
    component: () => import('@/views/oneQ/Q_M07_p001.vue'),
  },
  {
    path: '/one-q/Q_M07_p002',
    name: '/one-q/Q_M07_p002',
    component: () => import('@/views/oneQ/Q_M07_p002.vue'),
  },
  {
    path: '/one-q/Q_M08_p001',
    name: '/one-q/Q_M08_p001',
    component: () => import('@/views/oneQ/Q_M08_p001.vue'),
  },
  {
    path: '/one-q/Q_M08_p002',
    name: '/one-q/Q_M08_p002',
    component: () => import('@/views/oneQ/Q_M08_p002.vue'),
  },
  {
    path: '/one-q/My_M03_p001',
    name: '/one-q/My_M03_p001',
    component: () => import('@/views/oneQ/My_M03_p001.vue'),
  },
  {
    path: '/one-q/My_M03_p002',
    name: '/one-q/My_M03_p002',
    component: () => import('@/views/oneQ/My_M03_p002.vue'),
  },
  {
    path: '/ui-guide/one-q-002',
    name: '/ui-guide/one-q-002',
    component: () => import('@/views/uiGuide/GuideOneQ002.vue'),
  },
  {
    path: '/ui-guide/one-q-003',
    name: '/ui-guide/one-q-003',
    component: () => import('@/views/uiGuide/GuideOneQ003.vue'),
  },
  {
    path: '/ui-guide/one-q-004',
    name: '/ui-guide/one-q-004',
    component: () => import('@/views/uiGuide/GuideOneQ004.vue'),
  },
  {
    path: '/ui-guide/one-q-005',
    name: '/ui-guide/one-q-005',
    component: () => import('@/views/uiGuide/GuideOneQ005.vue'),
  },
  {
    path: '/ui-guide/one-q-006',
    name: '/ui-guide/one-q-006',
    component: () => import('@/views/uiGuide/GuideOneQ006.vue'),
  },
  {
    path: '/ui-guide/one-q-007',
    name: '/ui-guide/one-q-007',
    component: () => import('@/views/uiGuide/GuideOneQ007.vue'),
  },
  {
    path: '/ui-guide/one-q-008',
    name: '/ui-guide/one-q-008',
    component: () => import('@/views/uiGuide/GuideOneQ008.vue'),
  },
  {
    path: '/ui-guide/untact-customer-001',
    name: '/ui-guide/untact-customer-001',
    component: () => import('@/views/uiGuide/GuideUntactCustomer001.vue'),
  },
  {
    path: '/untactCustomer/Comp_M00_p001',
    name: '/untactCustomer/Comp_M00_p001',
    component: () => import('@/views/untactCustomer/Comp_M00_p001.vue'),
  },

  // link
  {
    path: '/outer-etc/etc-001',
    name: '/outer-etc/etc-001',
    component: () => import('@/views/outerEtc/OuterEtc.vue'),
    meta: { layout: 'NoneLayout' },
  },

  // TestPage
  /**{
    path: '/ui-guide/TestPage',
    name: '/ui-guide/TestPage',
    component: () => import('@/components/ui/gnb/TestPage.vue'),
  },**/
  //플랫폼대출 한도조회(이미지 유) 240409
  {
    path: '/personal-loan/platform-loan001',
    name: '/personal-loan/platform-loan001',
    component: () => import('@/views/personalLoan/PlatformLoan001.vue'),
  },
  //플랫폼대출 한도조회(이미지 무) 240409
  {
    path: '/personal-loan/platform-loan002',
    name: '/personal-loan/platform-loan002',
    component: () => import('@/views/personalLoan/PlatformLoan002.vue'),
  },
  // 240502_보이스피싱 팝업 추가 / 240507 추가 수정
  {
    path: '/ui-guide/my-loan-voicephising',
    name: '/ui-guide/my-loan-voicephising',
    component: () => import('@/views/uiGuide/GuideMyLoanVoice.vue'),
  },

  //태수 대리
  // 240604_스탁론 연장프로세스 상품설명서
  {
    path: '/ui-guide/my-loan-progress-013',
    name: '/ui-guide/my-loan-progress-013',
    component: () => import('@/views/uiGuide/GuideMyLoanProgress013.vue'),
  },

  // 240607_만기대상 재이용 상담 프로세스_상담 정보 입력
  {
    path: '/lease-rent-estimation-system/LR_M05_p016',
    name: '/lease-rent-estimation-system/LR_M05_p016',
    component: () =>
      import('@/views/LeaseRentEstimationSystem/LR_M05_p016.vue'),
  },
  // 240607_만기대상 재이용 상담 프로세스_상담 신청 완료
  {
    path: '/lease-rent-estimation-system/LR_M05_p017',
    name: '/lease-rent-estimation-system/LR_M05_p017',
    component: () =>
      import('@/views/LeaseRentEstimationSystem/LR_M05_p017.vue'),
  },
  // 240607_만기대상 재이용 상담 프로세스_얼럿팝업
  {
    path: '/ui-guide/lease-rent-estimation-system-007',
    name: '/ui-guide/lease-rent-estimation-system-007',
    component: () =>
      import('@/views/uiGuide/GuideLeaseRentEstimationSystem007.vue'),
  },
  // 240611_개인사업자 아파트담보 대출연장 상품설명서
  {
    path: '/ui-guide/my-loan-progress-014',
    name: '/ui-guide/my-loan-progress-014',
    component: () => import('@/views/uiGuide/GuideMyLoanProgress014.vue'),
  },
  //즉시출고 신규
  {
    path: '/lease-rent-estimation-system/pre-purchase-car2',
    name: '/lease-rent-estimation-system/pre-purchase-car2',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemImmediateCar.vue'
      ),
  },
  {
    path: '/lease-rent-estimation-system/pre-purchase-car-detail2',
    name: '/lease-rent-estimation-system/pre-purchase-car-detail2',
    component: () =>
      import(
        '@/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemImmediateCarDetail.vue'
      ),
  },
  // customer  신규 채무조정요청
  {
    path: '/customer/short-term-delinquency',
    name: '/customer/short-term-delinquency',
    component: () => import('@/views/customer/Customer_DS_M01.vue'),
  },
  {
    path: '/customer/short-term-delinquency-view1',
    name: '/customer/short-term-delinquency-view1',
    component: () => import('@/views/customer/Customer_DS_M01_01.vue'),
  },
  {
    path: '/customer/short-term-delinquency-view2',
    name: '/customer/short-term-delinquency-view2',
    component: () => import('@/views/customer/Customer_DS_M02_01.vue'),
  },
  {
    path: '/customer/short-term-delinquency-view3',
    name: '/customer/short-term-delinquency-view3',
    component: () => import('@/views/customer/Customer_DS_M02_02.vue'),
  },
  {
    path: '/customer/short-term-delinquency-view3-1',
    name: '/customer/short-term-delinquency-view3-1',
    component: () => import('@/views/customer/Customer_DS_M02_02_01.vue'),
  },
  {
    path: '/customer/short-term-delinquency-view4',
    name: '/customer/short-term-delinquency-view4',
    component: () => import('@/views/customer/Customer_DS_M02_03.vue'),
  },
  {
    path: '/customer/short-term-delinquency-view5',
    name: '/customer/short-term-delinquency-view5',
    component: () => import('@/views/customer/Customer_DS_M02_04.vue'),
  },
  {
    path: '/customer/DS_NO_M01',
    name: '/customer/DS_NO_M01',
    component: () => import('@/views/customer/DS_NO_M01.vue'),
  },
  {
    path: '/customer/DS_NO_M02',
    name: '/customer/DS_NO_M02',
    component: () => import('@/views/customer/DS_NO_M02.vue'),
  },
  {
    path: '/customer/DS_NO_M03',
    name: '/customer/DS_NO_M03',
    component: () => import('@/views/customer/DS_NO_M03.vue'),
  },
  {
    path: '/customer/DS_NO_M04',
    name: '/customer/DS_NO_M04',
    component: () => import('@/views/customer/DS_NO_M04.vue'),
  },
  {
    path: '/customer/DS_NO_M05',
    name: '/customer/DS_NO_M05',
    component: () => import('@/views/customer/DS_NO_M05.vue'),
  },
  //금융소비자보호 - 신규
  {
    path: '/customer/Customer_M09_p013',
    name: '/customer/Customer_M09_p013',
    component: () =>
      import(
        '@/views/customer/CustomerFinancialConsumerProtectionEnactReviseHistoryList.vue'
      ),
  },
  {
    path: '/customer/Customer_M09_p014',
    name: '/customer/Customer_M09_p014',
    component: () =>
      import(
        '@/views/customer/CustomerFinancialConsumerProtectionIntenalControlRegulations.vue'
      ),
  },
  {
    path: '/customer/Customer_M09_p015',
    name: '/customer/Customer_M09_p015',
    component: () =>
      import(
        '@/views/customer/CustomerFinancialConsumerProtectionBestPractices.vue'
      ),
  },
  {
    path: '/customer/Customer_M09_p016',
    name: '/customer/Customer_M09_p016',
    component: () =>
      import(
        '@/views/customer/CustomerFinancialConsumerProtectionBestPracticesView.vue'
      ),
  },
  {
    path: '/customer/Customer_M10_p001',
    name: '/customer/Customer_M10_p001',
    component: () =>
      import(
        '@/views/customer/CustomerFinancialConsumerProtectionRequestAccessData.vue'
      ),
  },
  {
    path: '/customer/Customer_M10_p002',
    name: '/customer/Customer_M10_p002',
    component: () =>
      import(
        '@/views/customer/CustomerFinancialConsumerProtectionTerminateIllegalContract.vue'
      ),
  },
  {
    path: '/customer/Customer_M11_p001',
    name: '/customer/Customer_M11_p001',
    component: () =>
      import(
        '@/views/customer/CustomerFinancialConsumerProtectionReceivingElectronicComplaints.vue'
      ),
  },
  {
    path: '/customer/Customer_M11_p002',
    name: '/customer/Customer_M11_p002',
    component: () =>
      import(
        '@/views/customer/CustomerFinancialConsumerProtectionInquirySalesVisitingAndTelephone.vue'
      ),
  },
  {
    path: '/customer/Customer_M11_p003',
    name: '/customer/Customer_M11_p003',
    component: () =>
      import(
        '@/views/customer/CustomerFinancialConsumerProtectionInformation.vue'
      ),
  },
  //Customer_M09_p017
  {
    path: '/customer/Customer_M09_p017',
    name: '/customer/Customer_M09_p017',
    component: () =>
      import('@/views/customer/CustomerFinancialConsumerRights.vue'),
  },
  //Customer_M09_p018
  {
    path: '/customer/Customer_M09_p018',
    name: '/customer/Customer_M09_p018',
    component: () =>
      import(
        '@/views/customer/CustomerFinancialConsumerComplainBeneficialInformation.vue'
      ),
  },
  /* s: 250124 추가 */
  {
    path: '/customer/Customer_M09_p019',
    name: '/customer/Customer_M09_p019',
    component: () => import('@/views/customer/Customer_M09_p019.vue'),
  },
  {
    path: '/customer/Customer_M09_p019_002',
    name: '/customer/Customer_M09_p019_002',
    component: () => import('@/views/customer/Customer_M09_p019_002.vue'),
  },
  {
    path: '/customer/Customer_M09_p020',
    name: '/customer/Customer_M09_p020',
    component: () => import('@/views/customer/Customer_M09_p020.vue'),
  },
  /* s: 250211 추가 */
  {
    path: '/lease-rent-estimation-system/LR_M06_p001',
    name: '/lease-rent-estimation-system/LR_M06_p001',
    component: () =>
      import('@/views/LeaseRentEstimationSystem/LR_M06_p001.vue'),
  },
  /* 250219 추가 */
  {
    path: '/lm-blog/LM_M01_p002_001',
    name: '/lm-blog/LM_M01_p002_001',
    component: () => import('@/views/lmBlog/LM_M01_p002_001.vue'),
  },
  {
    path: '/lm-blog/LM_M01_p002_002',
    name: '/lm-blog/LM_M01_p002_002',
    component: () => import('@/views/lmBlog/LM_M01_p002_002.vue'),
  },
  /* 250220 추가 */
  {
    path: '/personal-loan/PF_M12_p001',
    name: '/personal-loan/PF_M12_p001',
    component: () => import('@/views/personalLoan/PF_M12_p001.vue'),
  },
  /* 250325 추가 */
  {
    path: '/ui-guide/customer/GuideCustomer001',
    name: '/ui-guide/customer/GuideCustomer001',
    component: () => import('@/views/uiGuide/GuideCustomer001.vue'),
  },
  /* 250404 추가 */
  {
    path: '/main/Main_M07_p005',
    name: '/main/Main_M07_p005',
    component: () => import('@/views/main/Main_M07_p005.vue'),
  },
  {
    path: '/main/Main_M07_p006',
    name: '/main/Main_M07_p006',
    component: () => import('@/views/main/Main_M07_p006.vue'),
  },
  {
    path: '/main/Main_M07_p007',
    name: '/main/Main_M07_p007',
    component: () => import('@/views/main/Main_M07_p007.vue'),
  },
];

export default routes;
