<script>
// Common_M00_l017
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import { useUiCommonStore } from '@/stores/ui/common';

import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import ImgSample from '@/assets/images/_dummy/sample-gnb.svg?component';
import ImgSample2 from '@/assets/images/_dummy/menu.svg?component';

export default {
  components: {
    RouterLink,
    PageMainText,
    BasicButton,
    TextButton,
    BasicHr,
    ImgSample,
    ImgSample2,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
      },
    };

    const isLoggedIn = ref(false);

    const login = () => {
      // 여기서 로그인 처리를 수행하고, isLoggedIn 변수 값을 true로 설정합니다.
      isLoggedIn.value = true;
    };

    const logout = () => {
      // 여기서 로그아웃 처리를 수행하고, isLoggedIn 변수 값을 false로 설정합니다.
      isLoggedIn.value = false;
    };

    return {
      store,
      isLoggedIn,
      login,
      logout,
    };
  },
};
</script>

<template>
  <!-- Case : 로그인 전 -->
  <div v-if="!isLoggedIn" :class="$style['name-card']">
    <div :class="$style['name-card__left']">
      <PageMainText>
        <strong>로그인 후 편리하게</strong><br />
        이용해 보세요
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
      <PageMainText><strong>강하나</strong>님</PageMainText>
    </div>
    <div :class="$style['name-card__right']">
      <TextButton :block="true" :underline="true" @click="logout"
        >로그아웃</TextButton
      >
    </div>
  </div>
  <!-- // Case : 로그인 후 -->

  <ul :class="$style['main-menu']">
    <!-- Case : 로그인 후 -->
    <li v-if="!isLoggedIn" :class="$style['main-menu__item']">
      <RouterLink :class="$style['main-menu__link']" to="">
        <div :class="$style['main-menu__icon']"><ImgSample /></div>
        <p :class="$style['main-menu__title']">내 정보</p>
      </RouterLink>
    </li>
    <!-- // Case : 로그인 후 -->
    <li :class="$style['main-menu__item']">
      <RouterLink :class="$style['main-menu__link']" to="">
        <div :class="$style['main-menu__icon']"><ImgSample /></div>
        <p :class="$style['main-menu__title']">공지사항</p>
      </RouterLink>
    </li>
    <li :class="$style['main-menu__item']">
      <RouterLink :class="$style['main-menu__link']" to="">
        <div :class="$style['main-menu__icon']"><ImgSample /></div>
        <p :class="$style['main-menu__title']">전화상담</p>
      </RouterLink>
    </li>
    <li :class="$style['main-menu__item']">
      <RouterLink :class="$style['main-menu__link']" to="">
        <div :class="$style['main-menu__icon']"><ImgSample /></div>
        <p :class="$style['main-menu__title']">대출계산기</p>
      </RouterLink>
    </li>
  </ul>

  <BasicHr
    theme="quaternary"
    type="contents"
    className="row-margin-container-medium"
  />

  <section v-if="!store.ui.common.isAPP" :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">개인금융</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">e하나신용대출</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">행복아파트론</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">아파트론</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">원큐자동차담보대출</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">우수고객추가대출</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">e임대주택론</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">스탁론</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">의료기할부</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">사업자주택담보대출</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">내구소비재할부</p>
        </RouterLink>
      </li>
    </ul>
  </section>

  <section v-if="!store.ui.common.isAPP" :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">오토금융</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">다이렉트 장기렌터카</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">다이렉트 오토리스</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">오토할부</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">오토론</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">중고차오토론</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">오토승계</p>
        </RouterLink>
      </li>
    </ul>
  </section>

  <section v-if="!store.ui.common.isAPP" :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">내대출</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">내대출</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">진행상태조회</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">금리인하요구권신청</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">청약철회권신청</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">서류등록</p>
        </RouterLink>
      </li>
    </ul>
  </section>

  <section v-if="!store.ui.common.isAPP" :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">내정보</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">내정보관리</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">하나머니</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">하나캐피탈 멤버십</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">자동차시세조회</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">부동산시세조회</p>
        </RouterLink>
      </li>
    </ul>
  </section>

  <section v-if="!store.ui.common.isAPP" :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">고객센터</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">FAQ</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">고객상담</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">공지사항</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">지점안내</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">고객센터 ARS안내</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">정책 및 약관</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">금융소비자보호</p>
        </RouterLink>
      </li>
    </ul>
  </section>

  <section v-if="store.ui.common.isAPP" :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">최근메뉴</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">내 정보 관리</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">진행상태조회</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">고객상담</p>
        </RouterLink>
      </li>
    </ul>
  </section>

  <section v-if="store.ui.common.isAPP" :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">내대출</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">내대출</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">진행상태조회</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">금리인하요구권신청</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">청약철회권신청</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">서류등록</p>
        </RouterLink>
      </li>
    </ul>
  </section>

  <section v-if="store.ui.common.isAPP" :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">내정보</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">내정보관리</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">하나캐피탈 멤버십</p>
        </RouterLink>
      </li>
    </ul>
  </section>

  <section v-if="store.ui.common.isAPP" :class="$style['gnb__section']">
    <h3 :class="$style['gnb__section-title']">고객센터</h3>
    <ul :class="$style['gnb__list']">
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">FAQ</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">고객상담</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">공지사항</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">정책 및 약관</p>
        </RouterLink>
      </li>
      <li :class="$style['gnb__item']">
        <RouterLink :class="$style['gnb__link']" to="">
          <div :class="$style['gnb__icon']"><ImgSample2 /></div>
          <p :class="$style['gnb__name']">금융소비자보호</p>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/gnb/GlobalNav.scss';
</style>
