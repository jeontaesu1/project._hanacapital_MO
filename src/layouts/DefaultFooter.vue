<script>
import { RouterLink } from 'vue-router';

import IconFacebook from '@/assets/images/common/facebook.svg?component';
import IconYoutube from '@/assets/images/common/youtube.svg?component';
import IconInstagram from '@/assets/images/common/instagram.svg?component';
import IconGlobal from '@/assets/images/common/global.svg?component';

export default {
  components: {
    RouterLink,
    IconFacebook,
    IconYoutube,
    IconInstagram,
    IconGlobal,
  },
};
</script>

<template>
  <footer :class="$style['footer']">
    <ul :class="$style['nav']">
      <li :class="$style['nav__item']">
        <button type="button" :class="$style['nav__link']">앱 서비스</button>
      </li>
      <li :class="[$style['nav__item'], $style['nav__item--emphasis']]">
        <button type="button" :class="$style['nav__link']">
          개인정보 처리 방침
        </button>
      </li>
      <li :class="$style['nav__item']">
        <RouterLink to="" :class="$style['nav__link']">회사소개</RouterLink>
      </li>
      <li :class="$style['nav__item']">
        <RouterLink to="" :class="$style['nav__link']">지점안내</RouterLink>
      </li>
    </ul>

    <address :class="$style['address']">
      서울 강남구 테헤란로 127 하나금융그룹
    </address>

    <p :class="$style['bin']">사업자등록번호 220-81-09337</p>

    <address :class="$style['copy']">
      ⒸHANA CAPITAL CO.,LTD. ALL RIGHT RESERVED
    </address>

    <ul :class="$style['sns']">
      <li :class="$style['sns__item']">
        <a href="" :class="$style['sns__link']">
          <IconFacebook :class="$style['sns__icon']" />
          <span class="for-a11y">Facebook</span>
        </a>
      </li>
      <li :class="$style['sns__item']">
        <a href="" :class="$style['sns__link']">
          <IconYoutube :class="$style['sns__icon']" />
          <span class="for-a11y">Youtube</span>
        </a>
      </li>
      <li :class="$style['sns__item']">
        <a href="" :class="$style['sns__link']">
          <IconInstagram :class="$style['sns__icon']" />
          <span class="for-a11y">Instagram</span>
        </a>
      </li>
      <li :class="$style['sns__item']">
        <a href="" :class="$style['sns__link']">
          <IconGlobal :class="$style['sns__icon']" />
          <span class="for-a11y">Global</span>
        </a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/DefaultFooter.scss';
</style>
