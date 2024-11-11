<script>
// Common_M00_l017
import { inject } from 'vue';
import { RouterLink } from 'vue-router';

import { useUiCommonStore } from '@/stores/ui/common';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconLR_DA_search from '@/assets/images/etc/LR_DA/ico_LR_DA_search.svg?component';
import IconLR_DA_hotdeal from '@/assets/images/etc/LR_DA/ico_LR_DA_hotdeal.svg?component';
import IconLR_DA_consult from '@/assets/images/etc/LR_DA/ico_LR_DA_consult.svg?component';
import IconCapitalSmall from '@/assets/images/icon/img-capital-small.svg?component';

export default {
  components: {
    RouterLink,
    BasicHr,
    TextButton,
    IconLR_DA_search,
    IconLR_DA_hotdeal,
    IconLR_DA_consult,
    IconCapitalSmall,
  },
  setup() {
    const LayerGlobalNavDA = inject('LayerGlobalNavDA', {});

    const store = {
      ui: {
        common: useUiCommonStore(),
      },
    };

    const routerLinkClick = () => {
      if (
        LayerGlobalNavDA.layer &&
        LayerGlobalNavDA.layer.value &&
        LayerGlobalNavDA.layer.value.close
      ) {
        LayerGlobalNavDA.layer.value.close();
      }
    };

    return {
      store,
      routerLinkClick,
    };
  },
};
</script>
<style>
.appdown_img {
  display: inline-block;
  width: 70px;
  height: 70px;
}
.appdown_img img {
  width: 100%;
}
.appdown_txt {
  line-height: 1.5;
  font-weight: 700;
}
.appdown_txt p {
  font-weight: 300;
  margin: 0;
  padding: 0;
}
.btn_appdown {
  display: inline-block;
  margin: 16px auto 0;
  font-size: 12px;
  color: #00a69e;
  text-decoration: underline;
}
</style>
<template>
  <!-- <h2 class="text-title-2">메뉴</h2> -->
  <ul :class="$style['main-menu']">
    <li :class="$style['main-menu__item']">
      <RouterLink
        :class="$style['main-menu__link']"
        to=""
        @click="routerLinkClick"
      >
        <div :class="$style['main-menu__icon']"><IconLR_DA_search /></div>
        <p :class="$style['main-menu__title']">견적 조회</p>
      </RouterLink>
    </li>
    <li :class="$style['main-menu__item']">
      <RouterLink
        :class="$style['main-menu__link']"
        to=""
        @click="routerLinkClick"
      >
        <div :class="$style['main-menu__icon']"><IconLR_DA_hotdeal /></div>
        <p :class="$style['main-menu__title']">렌터카 핫딜</p>
      </RouterLink>
    </li>
    <li :class="$style['main-menu__item']">
      <button :class="$style['main-menu__link']">
        <div :class="$style['main-menu__icon']"><IconLR_DA_consult /></div>
        <p :class="$style['main-menu__title']">상담 예약</p>
      </button>
    </li>
  </ul>

  <BasicHr theme="secondary" className="row-margin-contents" />

  <section v-if="!store.ui.common.isAPP" :class="$style['gnb__section']">
    <ul :class="$style['logs']">
      <li :class="$style['logs__item']" style="background-color: #f9f9f9">
        <div :class="[$style['logs__block'], $style['logs__block--small']]">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-body-3 font-weight-regular">
                하나캐피탈 바로가기
              </h3>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </li>
      <li :class="$style['logs__item']" style="background-color: #f9f9f9">
        <div :class="[$style['logs__block'], $style['logs__block--small']]">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-body-3 font-weight-regular">지점안내</h3>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </li>
      <li :class="$style['logs__item']" style="background-color: #f9f9f9">
        <div :class="[$style['logs__block'], $style['logs__block--small']]">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-body-3 font-weight-regular">정책 및 약관</h3>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
  <div style="margin: 35px auto 0">
    <!-- 앱 다운로드 안내 -->
    <section :class="$style['app']">
      <div :class="$style['app__icon']">
        <IconCapitalSmall />
      </div>
      <h2 :class="$style['app__title']">
        다양한 금융서비스 제공<br />
        <strong>쉽고 빠른 하나원큐 하나캐피탈!</strong>
      </h2>
      <div class="inline-wrap">
        <TextButton theme="secondary" :underline="true">
          앱 다운로드
        </TextButton>
      </div>
    </section>
    <!-- // 앱 다운로드 안내 -->
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/gnb/GlobalNav.scss';
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
@import '@/assets/scss/views/main/MainHome.scss';
</style>
