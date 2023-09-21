<script>
// Main_M03_p001 계약미보유 / 종료계약만 보유
import { onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiLayoutStore } from '@/stores/ui/layout';
import { useUiHeaderStore } from '@/stores/ui/header';
import { useUiDockBarStore } from '@/stores/ui/dockBar';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconCertification from '@/assets/images/icon/certification.svg?component';
import IconSecurity from '@/assets/images/icon/security.svg?component';
import IconPig from '@/assets/images/icon/pig.svg?component';
import IconBuilding from '@/assets/images/icon/building.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';
import IconInterestRate from '@/assets/images/icon/interest-rate.svg?component';
import ImgArea from '@/assets/images/illustration/img-area.svg?component';

export default {
  components: {
    RouterLink,
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicHr,
    BasicButton,
    ButtonList,
    ButtonListItem,

    IconCertification,
    IconSecurity,
    IconPig,
    IconBuilding,
    IconCar,
    IconInterestRate,
    ImgArea,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        layout: useUiLayoutStore(),
        header: useUiHeaderStore(),
        dockBar: useUiDockBarStore(),
      },
    };

    onMounted(() => {
      store.ui.common.setApp(true); // 앱모드 테스트 변수

      store.ui.layout.setUseFooter(false);

      store.ui.header.setTitle(() => ' ');
      store.ui.header.setLeftButtons(() => []);
      store.ui.header.setRightButtons(() => []);
      store.ui.header.setTheme(() => 'tertiary');

      store.ui.dockBar.setActive(() => 'my');
    });

    onUnmounted(() => {
      store.ui.common.setApp(); // 앱모드 테스트 변수

      store.ui.layout.setUseFooter();

      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
      store.ui.header.setTheme();

      store.ui.dockBar.setActive();
    });
  },
};
</script>

<template>
  <PageContents
    :classNames="{
      body: $style['page-body'],
    }"
  >
    <PageTextGroup>
      <PageMainText>
        김하나님<br />
        대출이 필요하신가요?
      </PageMainText>
    </PageTextGroup>

    <div :class="$style['illustration-img']">
      <ImgArea />
    </div>

    <!-- Case : 종료계약만 보유 -->
    <div>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton>종료된 계약 확인하기</BasicButton>
        </ButtonListItem>
      </ButtonList>

      <!-- Case : 캐피탈 계약 보유 -->
      <div :class="[$style['icon-list'], 'row-margin-container-medium']">
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"
                ><IconCertification
              /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__text']"
                  >필요한 증명서를 받아보세요</span
                >
                <span :class="$style['icon-list__title']"
                  >증명서 조회/발급</span
                >
              </span>
            </button>
          </li>
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconSecurity /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__text']"
                  >근저당설정 상태를 확인해보세요</span
                >
                <span :class="$style['icon-list__title']"
                  >근저당설정 조회/해지</span
                >
              </span>
            </button>
          </li>
        </ul>
      </div>
      <!-- // Case : 캐피탈 계약 보유 -->
    </div>
    <!-- // Case : 종료계약만 보유 -->

    <BasicHr
      theme="quaternary"
      type="contents"
      className="row-margin-container"
    />

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <li :class="$style['icon-list__item']">
          <RouterLink to="" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconPig /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__text']"
                >소득이 있다면 쉽고 빠른 신용대출</span
              >
              <span :class="$style['icon-list__title']">e하나신용대출</span>
            </span>
          </RouterLink>
        </li>
        <li :class="$style['icon-list__item']">
          <RouterLink to="" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconBuilding /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__text']"
                >아파트 소유자를 위한 무담보 아파트 신용대출</span
              >
              <span :class="$style['icon-list__title']">행복아파트론</span>
            </span>
          </RouterLink>
        </li>
        <li :class="$style['icon-list__item']">
          <RouterLink to="" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconCar /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__text']"
                >내 차만 있다면 특별한도와 금리혜택까지</span
              >
              <span :class="$style['icon-list__title']"
                >원큐자동차담보대출</span
              >
            </span>
          </RouterLink>
        </li>
        <li :class="$style['icon-list__item']">
          <RouterLink to="" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconInterestRate /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__text']"
                >주식매입자금을 위한 자금지원 금융서비스</span
              >
              <span :class="$style['icon-list__title']">스탁론</span>
            </span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/MainMyLoanEmpty.scss';
</style>
