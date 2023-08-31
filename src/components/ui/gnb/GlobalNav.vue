<script>
// Common_M00_l017
import { ref, inject } from 'vue';
import { RouterLink } from 'vue-router';

import { useUiCommonStore } from '@/stores/ui/common';

import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconLink from '@/assets/images/icon/link.svg?component';
import IconMyInfo from '@/assets/images/icon/my-info.svg?component';
import IconNotice from '@/assets/images/icon/notice.svg?component';
import IconCallMint from '@/assets/images/icon/call-mint.svg?component';
import IconCalculate from '@/assets/images/icon/calculate.svg?component';
import IconPig from '@/assets/images/icon/pig.svg?component';
import IconBuilding from '@/assets/images/icon/building.svg?component';
import IconApt from '@/assets/images/icon/apt.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';
import IconVip from '@/assets/images/icon/vip.svg?component';
import IconHome from '@/assets/images/icon/home.svg?component';
import IconCompanyBuilding from '@/assets/images/icon/company-building.svg?component';
import IconInterestRate from '@/assets/images/icon/interest-rate.svg?component';
import IconDirectRent from '@/assets/images/icon/direct-rent.svg?component';
import IconDirectLease from '@/assets/images/icon/direct-lease.svg?component';
import IconAutoInstallment from '@/assets/images/icon/auto-installment.svg?component';
import IconAutoLoan from '@/assets/images/icon/auto-loan.svg?component';
import IconCarPrice from '@/assets/images/icon/car-price.svg?component';
import IconAutoSuccession from '@/assets/images/icon/auto-succession.svg?component';
import IconLease from '@/assets/images/icon/lease.svg?component';
import IconInstallment from '@/assets/images/icon/installment.svg?component';
import IconGoods from '@/assets/images/icon/goods.svg?component';
import IconMyLoan from '@/assets/images/icon/my-loan.svg?component';
import IconSchedule from '@/assets/images/icon/schedule.svg?component';
import IconLowInterestRate from '@/assets/images/icon/low-interest-rate.svg?component';
import IconWithdrawSubscription from '@/assets/images/icon/withdraw-subscription.svg?component';
import IconFile from '@/assets/images/icon/file.svg?component';
import IconMy from '@/assets/images/icon/my.svg?component';
import IconHanamoney from '@/assets/images/icon/hanamoney.svg?component';
import IconMembershipCrown from '@/assets/images/icon/membership-crown.svg?component';
import IconRealEstatePrice from '@/assets/images/icon/real-estate-price.svg?component';
import IconFaq from '@/assets/images/icon/faq.svg?component';
import IconCustomer from '@/assets/images/icon/customer-center.svg?component';
import IconLocation from '@/assets/images/icon/location.svg?component';
import IconArs from '@/assets/images/icon/ars.svg?component';
import IconTerms from '@/assets/images/icon/terms.svg?component';
import IconWarning from '@/assets/images/icon/warning.svg?component';
import IconEvent from '@/assets/images/icon/event.svg?component';
import Icon1qDirectAuto from '@/assets/images/icon/1q-direct-auto.svg?component';
import IconBusinessAutoMenu1 from '@/assets/images/icon/business-auto-menu-1.svg?component';
import IconBusinessAutoMenu2 from '@/assets/images/icon/business-auto-menu-2.svg?component';
import IconBusinessAutoMenu3 from '@/assets/images/icon/business-auto-menu-3.svg?component';
import IconBusinessAutoMenu4 from '@/assets/images/icon/business-auto-menu-4.svg?component';
import IconBusinessAutoMenu5 from '@/assets/images/icon/business-auto-menu-5.svg?component';
import IconBusinessAutoMenu6 from '@/assets/images/icon/business-auto-menu-6.svg?component';
import IconBusinessAutoMenu7 from '@/assets/images/icon/business-auto-menu-7.svg?component';
import IconBusinessAutoMenu8 from '@/assets/images/icon/business-auto-menu-8.svg?component';
import IconBusinessAutoMenu14 from '@/assets/images/icon/business-auto-menu-14.svg?component';
import IconBusinessAutoMenu15 from '@/assets/images/icon/business-auto-menu-15.svg?component';
import IconBusinessAutoMenu16 from '@/assets/images/icon/business-auto-menu-16.svg?component';
import IconBusinessAutoMenu17 from '@/assets/images/icon/business-auto-menu-17.svg?component';
import IconBusinessAutoMenu18 from '@/assets/images/icon/business-auto-menu-18.svg?component';
import IconBusinessInventoryMenu1 from '@/assets/images/icon/business-Inventory-menu-1.svg?component';
import IconBusinessInventoryMenu2 from '@/assets/images/icon/business-Inventory-menu-2.svg?component';
import IconBusinessInventoryMenu3 from '@/assets/images/icon/business-Inventory-menu-3.svg?component';
import IconBusinessInventoryMenu4 from '@/assets/images/icon/business-Inventory-menu-4.svg?component';
import IconBusinessInventoryMenu5 from '@/assets/images/icon/business-Inventory-menu-5.svg?component';
import IconBusinessInventoryMenu6 from '@/assets/images/icon/business-Inventory-menu-6.svg?component';
import IconBusinessInventoryMenu7 from '@/assets/images/icon/business-Inventory-menu-7.svg?component';
import IconBusinessLeaseMenu2 from '@/assets/images/icon/business-lease-menu-2.svg?component';
import IconBusinessLmMenu1 from '@/assets/images/icon/business-lm-menu-1.svg?component';
import IconBusinessLmMenu2 from '@/assets/images/icon/business-lm-menu-2.svg?component';
import IconBusinessLmMenu3 from '@/assets/images/icon/business-lm-menu-3.svg?component';
import IconBusinessLmMenu4 from '@/assets/images/icon/business-lm-menu-4.svg?component';
import IconBusinessLmMenu5 from '@/assets/images/icon/business-lm-menu-5.svg?component';
import IconBusinessFirst from '@/assets/images/icon/business-first.svg?component';

export default {
  components: {
    RouterLink,
    PageMainText,
    BasicButton,
    TextButton,
    BasicHr,
    IconLink,
    IconMyInfo,
    IconNotice,
    IconCallMint,
    IconCalculate,
    IconPig,
    IconBuilding,
    IconApt,
    IconCar,
    IconVip,
    IconHome,
    IconCompanyBuilding,
    IconInterestRate,
    IconDirectRent,
    IconDirectLease,
    IconAutoInstallment,
    IconAutoLoan,
    IconCarPrice,
    IconAutoSuccession,
    IconLease,
    IconInstallment,
    IconGoods,
    IconMyLoan,
    IconSchedule,
    IconLowInterestRate,
    IconWithdrawSubscription,
    IconFile,
    IconMy,
    IconHanamoney,
    IconMembershipCrown,
    IconRealEstatePrice,
    IconFaq,
    IconCustomer,
    IconLocation,
    IconArs,
    IconTerms,
    IconWarning,
    IconEvent,
    Icon1qDirectAuto,
    IconBusinessAutoMenu1,
    IconBusinessAutoMenu2,
    IconBusinessAutoMenu3,
    IconBusinessAutoMenu4,
    IconBusinessAutoMenu5,
    IconBusinessAutoMenu6,
    IconBusinessAutoMenu7,
    IconBusinessAutoMenu8,
    IconBusinessAutoMenu14,
    IconBusinessAutoMenu15,
    IconBusinessAutoMenu16,
    IconBusinessAutoMenu17,
    IconBusinessAutoMenu18,
    IconBusinessInventoryMenu1,
    IconBusinessInventoryMenu2,
    IconBusinessInventoryMenu3,
    IconBusinessInventoryMenu4,
    IconBusinessInventoryMenu5,
    IconBusinessInventoryMenu6,
    IconBusinessInventoryMenu7,
    IconBusinessLeaseMenu2,
    IconBusinessLmMenu1,
    IconBusinessLmMenu2,
    IconBusinessLmMenu3,
    IconBusinessLmMenu4,
    IconBusinessLmMenu5,
    IconBusinessFirst,
  },
  setup() {
    const layerGlobalNav = inject('layerGlobalNav', {});

    const store = {
      ui: {
        common: useUiCommonStore(),
      },
    };

    const isLoggedIn = ref(false); // 로그인 여부 테스트 변수
    const isSalesperson = ref(false); // 영업용 여부 테스트 변수

    const login = () => {
      // 여기서 로그인 처리를 수행하고, isLoggedIn 변수 값을 true로 설정합니다.
      isLoggedIn.value = true;
      isSalesperson.value = true;
    };

    const logout = () => {
      // 여기서 로그아웃 처리를 수행하고, isLoggedIn 변수 값을 false로 설정합니다.
      isLoggedIn.value = false;
      isSalesperson.value = false;
    };

    const routerLinkClick = () => {
      if (
        layerGlobalNav.layer &&
        layerGlobalNav.layer.value &&
        layerGlobalNav.layer.value.close
      ) {
        layerGlobalNav.layer.value.close();
      }
    };

    return {
      store,
      isLoggedIn,
      isSalesperson,
      login,
      logout,
      routerLinkClick,
    };
  },
};
</script>

<template>
  <!-- Case : 로그인 전 -->
  <div v-if="!isLoggedIn" :class="$style['name-card']">
    <div :class="$style['name-card__left']">
      <PageMainText>
        <strong>
          로그인 후 편리하게<br />
          이용해 보세요
        </strong>
      </PageMainText>
    </div>
    <div :class="$style['name-card__right']">
      <BasicButton size="mini" @click="login">로그인</BasicButton>
    </div>
  </div>
  <!-- //Case : 로그인 전 -->

  <!-- Case : 로그인 후 -->
  <div v-else :class="$style['name-card']">
    <div :class="$style['name-card__left']">
      <PageMainText><strong>강하나님</strong></PageMainText>
    </div>
    <div :class="$style['name-card__right']">
      <TextButton
        :block="true"
        :underline="true"
        :classNames="{ wrap: 'color-gray' }"
        @click="logout"
        >로그아웃</TextButton
      >
    </div>
  </div>
  <!-- // Case : 로그인 후 -->

  <ul :class="$style['main-menu']">
    <!-- Case : 로그인 후 -->
    <li v-if="isLoggedIn" :class="$style['main-menu__item']">
      <RouterLink
        :class="$style['main-menu__link']"
        to=""
        @click="routerLinkClick"
      >
        <div :class="$style['main-menu__icon']"><IconMyInfo /></div>
        <p :class="$style['main-menu__title']">내 정보</p>
      </RouterLink>
    </li>
    <!-- // Case : 로그인 후 -->
    <li :class="$style['main-menu__item']">
      <RouterLink
        :class="$style['main-menu__link']"
        to=""
        @click="routerLinkClick"
      >
        <div :class="$style['main-menu__icon']"><IconNotice /></div>
        <p :class="$style['main-menu__title']">공지사항</p>
      </RouterLink>
    </li>
    <li :class="$style['main-menu__item']">
      <RouterLink
        :class="$style['main-menu__link']"
        to=""
        @click="routerLinkClick"
      >
        <div :class="$style['main-menu__icon']"><IconCallMint /></div>
        <p :class="$style['main-menu__title']">전화상담</p>
      </RouterLink>
    </li>
    <li :class="$style['main-menu__item']">
      <button :class="$style['main-menu__link']">
        <div :class="$style['main-menu__icon']"><IconCalculate /></div>
        <p :class="$style['main-menu__title']">대출계산기</p>
      </button>
    </li>
  </ul>

  <BasicHr
    theme="quaternary"
    type="contents"
    className="row-margin-container"
  />

  <!-- Case : 영업용 -->
  <div v-if="isSalesperson" :class="$style['top-notice']">
    <RouterLink
      :class="$style['top-notice__block']"
      to=""
      @click="routerLinkClick"
    >
      <span :class="$style['top-notice__icon']">
        <IconBusinessFirst />
      </span>
      <span :class="$style['top-notice__text']">
        편리하게 첫 화면을 설정해 보세요
      </span>
      <span :class="$style['top-notice__arrow']">
        <IconLink />
      </span>
    </RouterLink>
  </div>
  <!-- // Case : 영업용 -->

  <section v-if="store.ui.common.isAPP" :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">최근메뉴</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconMy /></div>
          <p :class="$style['gnb__name']">내 정보 관리</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconSchedule /></div>
          <p :class="$style['gnb__name']">진행상태조회</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconCustomer /></div>
          <p :class="$style['gnb__name']">고객상담</p>
        </RouterLink>
      </li>
    </ul>
  </section>

  <!-- Case : 영업용 -->
  <section v-if="isSalesperson" :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">재고금융</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessInventoryMenu7 /></div>
          <p :class="$style['gnb__name']">한도조회</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessInventoryMenu1 /></div>
          <p :class="$style['gnb__name']">대출신청</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessInventoryMenu2 /></div>
          <p :class="$style['gnb__name']">중도상환</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessInventoryMenu3 /></div>
          <p :class="$style['gnb__name']">만기연장</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessInventoryMenu4 /></div>
          <p :class="$style['gnb__name']">구비서류 추가등록</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessInventoryMenu5 /></div>
          <p :class="$style['gnb__name']">종료건 확인</p>
        </RouterLink>
      </li>
    </ul>
  </section>

  <section v-if="isSalesperson" :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">재고금융실사</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessInventoryMenu6 /></div>
          <p :class="$style['gnb__name']">재고금융실사</p>
        </RouterLink>
      </li>
    </ul>
  </section>

  <section v-if="isSalesperson" :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">하나원큐오토</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessAutoMenu1 /></div>
          <p :class="$style['gnb__name']">장기렌트</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessAutoMenu2 /></div>
          <p :class="$style['gnb__name']">신차리스</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessAutoMenu3 /></div>
          <p :class="$style['gnb__name']">수입 할부·론</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessAutoMenu4 /></div>
          <p :class="$style['gnb__name']">국산 할부·론</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessAutoMenu5 /></div>
          <p :class="$style['gnb__name']">시승차</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessAutoMenu6 /></div>
          <p :class="$style['gnb__name']">선구매</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessAutoMenu7 /></div>
          <p :class="$style['gnb__name']">중고 할부·론</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessAutoMenu8 /></div>
          <p :class="$style['gnb__name']">중고리스</p>
        </RouterLink>
      </li>
    </ul>
  </section>

  <section v-if="isSalesperson" :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">하나원큐오토 서비스</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessAutoMenu14 /></div>
          <p :class="$style['gnb__name']">차량/저당 미등록 채권</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessAutoMenu15 /></div>
          <p :class="$style['gnb__name']">내정보</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessAutoMenu16 /></div>
          <p :class="$style['gnb__name']">공지사항(즉시출고)</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessAutoMenu17 /></div>
          <p :class="$style['gnb__name']">이용약관</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessAutoMenu18 /></div>
          <p :class="$style['gnb__name']">관리자</p>
        </RouterLink>
      </li>
    </ul>
  </section>

  <section v-if="isSalesperson" :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">LM블로그</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessLmMenu1 /></div>
          <p :class="$style['gnb__name']">대출상담</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessLmMenu2 /></div>
          <p :class="$style['gnb__name']">빠른 대출상담 신청내역</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessLmMenu3 /></div>
          <p :class="$style['gnb__name']">SMS 상담요청 내역</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessLmMenu4 /></div>
          <p :class="$style['gnb__name']">접속통계</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessLmMenu5 /></div>
          <p :class="$style['gnb__name']">현황조회</p>
        </RouterLink>
      </li>
    </ul>
  </section>

  <section v-if="isSalesperson" :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">일반리스</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBusinessLeaseMenu2 /></div>
          <p :class="$style['gnb__name']">현황조회</p>
        </RouterLink>
      </li>
    </ul>
  </section>
  <!-- // Case : 영업용 -->

  <section v-if="!store.ui.common.isAPP" :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">자동차</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconDirectRent /></div>
          <p :class="$style['gnb__name']">다이렉트 장기렌터카</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconDirectLease /></div>
          <p :class="$style['gnb__name']">다이렉트 오토리스</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconAutoInstallment /></div>
          <p :class="$style['gnb__name']">오토할부</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconAutoLoan /></div>
          <p :class="$style['gnb__name']">오토론</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><Icon1qDirectAuto /></div>
          <p :class="$style['gnb__name']">원큐다이렉트오토론</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconCarPrice /></div>
          <p :class="$style['gnb__name']">중고차오토론</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconAutoSuccession /></div>
          <p :class="$style['gnb__name']">오토승계</p>
        </RouterLink>
      </li>
    </ul>
  </section>

  <section v-if="!store.ui.common.isAPP" :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">개인대출</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconPig /></div>
          <p :class="$style['gnb__name']">e하나신용대출</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconBuilding /></div>
          <p :class="$style['gnb__name']">행복아파트론</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconApt /></div>
          <p :class="$style['gnb__name']">아파트론</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconCar /></div>
          <p :class="$style['gnb__name']">원큐자동차담보대출</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconVip /></div>
          <p :class="$style['gnb__name']">우수고객추가대출</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconHome /></div>
          <p :class="$style['gnb__name']">e임대주택론</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconCompanyBuilding /></div>
          <p :class="$style['gnb__name']">사업자주택담보대출</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconInterestRate /></div>
          <p :class="$style['gnb__name']">스탁론</p>
        </RouterLink>
      </li>
    </ul>
  </section>

  <section v-if="!store.ui.common.isAPP" :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">의료기 · 설비</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconLease /></div>
          <p :class="$style['gnb__name']">일반리스</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconInstallment /></div>
          <p :class="$style['gnb__name']">일반할부</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconGoods /></div>
          <p :class="$style['gnb__name']">내구재할부</p>
        </RouterLink>
      </li>
    </ul>
  </section>

  <section :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">내대출</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconMyLoan /></div>
          <p :class="$style['gnb__name']">내대출</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconSchedule /></div>
          <p :class="$style['gnb__name']">진행상태조회</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconLowInterestRate /></div>
          <p :class="$style['gnb__name']">금리인하요구권신청</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconWithdrawSubscription /></div>
          <p :class="$style['gnb__name']">청약철회권신청</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconFile /></div>
          <p :class="$style['gnb__name']">서류등록</p>
        </RouterLink>
      </li>
    </ul>
  </section>

  <section :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">내정보</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconMy /></div>
          <p :class="$style['gnb__name']">내정보관리</p>
        </RouterLink>
      </li>
      <li v-if="!store.ui.common.isAPP" :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconHanamoney /></div>
          <p :class="$style['gnb__name']">하나머니</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconMembershipCrown /></div>
          <p :class="$style['gnb__name']">하나캐피탈 멤버십</p>
        </RouterLink>
      </li>
      <li v-if="!store.ui.common.isAPP" :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconCarPrice /></div>
          <p :class="$style['gnb__name']">자동차시세조회</p>
        </RouterLink>
      </li>
      <li v-if="!store.ui.common.isAPP" :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconRealEstatePrice /></div>
          <p :class="$style['gnb__name']">부동산시세조회</p>
        </RouterLink>
      </li>
    </ul>
  </section>

  <section :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">고객센터</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconFaq /></div>
          <p :class="$style['gnb__name']">FAQ</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconCustomer /></div>
          <p :class="$style['gnb__name']">고객상담</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconNotice /></div>
          <p :class="$style['gnb__name']">공지사항</p>
        </RouterLink>
      </li>
      <li v-if="!store.ui.common.isAPP" :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconEvent /></div>
          <p :class="$style['gnb__name']">이벤트</p>
        </RouterLink>
      </li>
      <li v-if="!store.ui.common.isAPP" :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconLocation /></div>
          <p :class="$style['gnb__name']">지점안내</p>
        </RouterLink>
      </li>
      <li v-if="!store.ui.common.isAPP" :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconArs /></div>
          <p :class="$style['gnb__name']">고객센터 ARS안내</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconTerms /></div>
          <p :class="$style['gnb__name']">정책 및 약관</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="" @click="routerLinkClick">
          <div :class="$style['gnb__icon']"><IconWarning /></div>
          <p :class="$style['gnb__name']">금융소비자보호</p>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/gnb/GlobalNav.scss';
</style>
