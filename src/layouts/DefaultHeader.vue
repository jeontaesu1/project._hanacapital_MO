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
.header-wrap {
  display: block;
}
.header-fake {
  display: block;
}
.header-fix {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
}
.header {
  width: 100%;
  min-width: $page-min-width;
  box-sizing: border-box;
  padding: 20px;
  background-color: #00a69e;

  &__logo {
    margin: 0;
    text-align: center;
    color: #fff;
    @include font-size-set(30);
  }

  &__logo-link {
    display: block;
    color: inherit;
    text-decoration: none;
  }
}
.gnb {
  margin-top: 15px;

  &__list {
    @include reset-list;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__item {
    & + & {
      margin-left: 12px;
    }
  }
}
:global(.page-b) .header,
:global(.page-c) .header {
  background-color: #075f5b;
}
</style>
