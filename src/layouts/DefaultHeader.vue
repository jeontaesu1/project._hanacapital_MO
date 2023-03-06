<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import BasicButton from '@/components/ui/BasicButton.vue';

const PATH = {
  ROOT: '/',
  HOME: '/home',
  A_PAGE: '/a',
  B_PAGE: '/b',
  C_PAGE: '/c',
  TEST_PAGE: '/test',
};

const header = ref(null);
const fixbar = ref(null);
const fake = ref(null);

const route = useRoute();

onMounted(() => {
  if (fixbar.value && fake.value) {
    const height = fixbar.value.offsetHeight;
    fake.value.style.height = `${height}px`;
  }
});

onUnmounted(() => {
  //
});
</script>

<template>
  <div :class="$style['header-wrap']">
    <div ref="fixbar" :class="$style['header-fix']">
      <header ref="header" :class="$style['header']">
        <h1 :class="$style['header__logo']">
          <RouterLink :to="PATH.HOME" :class="$style['header__logo-link']">
            Header Logo
          </RouterLink>
        </h1>
        <nav :class="$style['gnb']">
          <ul :class="$style['gnb__list']">
            <li :class="$style['gnb__item']">
              <BasicButton
                tag="RouterLink"
                :to="PATH.A_PAGE"
                :theme="route.path === PATH.A_PAGE ? 'tertiary' : 'secondary'"
              >
                A 페이지 이동
              </BasicButton>
            </li>
            <li :class="$style['gnb__item']">
              <BasicButton
                tag="RouterLink"
                :to="PATH.B_PAGE"
                :theme="route.path === PATH.B_PAGE ? 'tertiary' : 'secondary'"
              >
                B 페이지 이동
              </BasicButton>
            </li>
            <li :class="$style['gnb__item']">
              <BasicButton
                tag="RouterLink"
                :to="PATH.C_PAGE"
                :theme="route.path === PATH.C_PAGE ? 'tertiary' : 'secondary'"
              >
                C 페이지 이동
              </BasicButton>
            </li>
            <li :class="$style['gnb__item']">
              <BasicButton
                tag="RouterLink"
                :to="PATH.TEST_PAGE"
                :theme="
                  route.path === PATH.TEST_PAGE ? 'tertiary' : 'secondary'
                "
              >
                Test 페이지 이동
              </BasicButton>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    <div ref="fake" :class="$style['header-fake']"></div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/DefaultHeader.scss';
</style>
