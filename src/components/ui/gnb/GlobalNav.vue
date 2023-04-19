<script>
// Common_M00_l017

import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import ImgSample from '@/assets/images/_dummy/sample-gnb.svg?component';
import ImgSample2 from '@/assets/images/_dummy/menu.svg?component';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import { useUiCommonStore } from '@/stores/ui/common';

export default {
  components: {
    RouterLink,
    PageMainText,
    BasicButton,
    TextButton,
    ImgSample,
    ImgSample2,
    BasicHr,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
      },
    };
    const isLoggedIn = ref(false);

    function login() {
      // 여기서 로그인 처리를 수행하고, isLoggedIn 변수 값을 true로 설정합니다.
      isLoggedIn.value = true;
    }

    function logout() {
      // 여기서 로그아웃 처리를 수행하고, isLoggedIn 변수 값을 false로 설정합니다.
      isLoggedIn.value = false;
    }
    return {
      isLoggedIn,
      login,
      logout,
      store,
    };
  },
};
</script>

<template>
  <div :class="$style['gnb']">
    <!-- 로그인전 -->
    <div v-if="!isLoggedIn">
      <div :class="$style['gnb__logged-in']">
        <PageMainText>
          <strong>로그인 후 편리하게</strong><br />이용해 보세요
        </PageMainText>
        <div :class="$style['gnb__logged-in__button']">
          <BasicButton size="mini" @click="login">로그인</BasicButton>
        </div>
      </div>
      <ul :class="$style['gnb__main-menu']">
        <li>
          <div :class="$style['gnb__main-menu__icon']"><ImgSample /></div>
          <p :class="$style['gnb__main-menu__title']">공지사항</p>
        </li>
        <li>
          <div :class="$style['gnb__main-menu__icon']"><ImgSample /></div>
          <p :class="$style['gnb__main-menu__title']">전화상담</p>
        </li>
        <li>
          <div :class="$style['gnb__main-menu__icon']"><ImgSample /></div>
          <p :class="$style['gnb__main-menu__title']">대출계산기</p>
        </li>
      </ul>
    </div>
    <!-- //로그인전 -->
    <!-- 로그인후 -->
    <div v-else>
      <div :class="$style['gnb__logged-in']">
        <PageMainText> <strong>강하나</strong>님 </PageMainText>
        <div :class="$style['gnb__logged-in__button']">
          <TextButton :underline="true" @click="logout">로그아웃</TextButton>
        </div>
      </div>
      <ul :class="$style['gnb__main-menu']">
        <li>
          <div :class="$style['gnb__main-menu__icon']"><ImgSample /></div>
          <p :class="$style['gnb__main-menu__title']">내 정보</p>
        </li>
        <li>
          <div :class="$style['gnb__main-menu__icon']"><ImgSample /></div>
          <p :class="$style['gnb__main-menu__title']">공지사항</p>
        </li>
        <li>
          <div :class="$style['gnb__main-menu__icon']"><ImgSample /></div>
          <p :class="$style['gnb__main-menu__title']">전화상담</p>
        </li>
        <li>
          <div :class="$style['gnb__main-menu__icon']"><ImgSample /></div>
          <p :class="$style['gnb__main-menu__title']">대출계산기</p>
        </li>
      </ul>
    </div>
    <!-- //로그인후 -->
    <BasicHr
      theme="quaternary"
      type="contents"
      className="row-margin-container-medium"
    />
    <!-- 메뉴 -->
    <div v-if="!store.ui.common.isAPP">
      <p :class="$style['gnb__menu-title']">개인금융</p>
      <ul :class="$style['gnb__menu-list']">
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">e하나신용대출</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">행복아파트론</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">아파트론</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">원큐자동차담보대출</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">원큐자동차담보대출</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">e임대주택론</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">스탁론</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">의료기할부</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">사업자주택담보대출</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">내구소비재할부</p>
          </RouterLink>
        </li>
      </ul>
      <p :class="$style['gnb__menu-title']">오토금융</p>
      <ul :class="$style['gnb__menu-list']">
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">다이렉트 장기렌터카</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">다이렉트 오토리스</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">오토할부</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">오토론</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">중고차오토론</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">오토승계</p>
          </RouterLink>
        </li>
      </ul>
      <p :class="$style['gnb__menu-title']">내대출</p>
      <ul :class="$style['gnb__menu-list']">
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">내대출</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">진행상태조회</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">금리인하요구권신청</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">청약철회권신청</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">서류등록</p>
          </RouterLink>
        </li>
      </ul>
      <p :class="$style['gnb__menu-title']">내정보</p>
      <ul :class="$style['gnb__menu-list']">
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">내정보관리</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">하나머니</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">하나캐피탈 멤버십</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">자동차시세조회</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">부동산시세조회</p>
          </RouterLink>
        </li>
      </ul>
      <p :class="$style['gnb__menu-title']">고객센터</p>
      <ul :class="$style['gnb__menu-list']">
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">FAQ</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">고객상담</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">공지사항</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">지점안내</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">고객센터 ARS안내</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">정책 및 약관</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">금융소비자보호</p>
          </RouterLink>
        </li>
      </ul>
    </div>
    <div v-if="store.ui.common.isAPP">
      <p :class="$style['gnb__menu-title']">최근메뉴</p>
      <ul :class="$style['gnb__menu-list']">
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">내 정보 관리</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">진행상태조회</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">고객상담</p>
          </RouterLink>
        </li>
      </ul>
      <p :class="$style['gnb__menu-title']">내대출</p>
      <ul :class="$style['gnb__menu-list']">
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">내대출</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">진행상태조회</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">금리인하요구권신청</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">청약철회권신청</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">서류등록</p>
          </RouterLink>
        </li>
      </ul>
      <p :class="$style['gnb__menu-title']">내정보</p>
      <ul :class="$style['gnb__menu-list']">
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">내정보관리</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">하나캐피탈 멤버십</p>
          </RouterLink>
        </li>
      </ul>
      <p :class="$style['gnb__menu-title']">고객센터</p>
      <ul :class="$style['gnb__menu-list']">
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">FAQ</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">고객상담</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">공지사항</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">정책 및 약관</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/home">
            <ImgSample2 />
            <p :class="$style['gnb__menu-list__name']">금융소비자보호</p>
          </RouterLink>
        </li>
      </ul>
    </div>

    <!-- //메뉴 -->
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/gnb/GlobalNav.scss';
</style>
