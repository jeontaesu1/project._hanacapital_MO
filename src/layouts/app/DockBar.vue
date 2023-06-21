<script>
import { RouterLink } from 'vue-router';

import { useUiDockBarStore } from '@/stores/ui/dockBar';

import IconHome from '@/assets/images/common/tabbar-home.svg?component';
import IconMy from '@/assets/images/common/tabbar-my.svg?component';
import IconProduct from '@/assets/images/common/tabbar-product.svg?component';
import IconBenefit from '@/assets/images/common/tabbar-benefit.svg?component';
import IconMenu from '@/assets/images/common/tabbar-menu.svg?component';

export default {
  components: {
    RouterLink,
  },
  setup() {
    const store = {
      ui: {
        dockBar: useUiDockBarStore(),
      },
    };

    const items = [
      {
        name: 'home',
        text: '홈',
        icon: IconHome,
        to: '/main/home-002',
      },
      {
        name: 'my',
        text: '내 대출',
        icon: IconMy,
        to: '/main/my-loan',
      },
      {
        name: 'product',
        text: '상품',
        icon: IconProduct,
        to: '/main/product',
      },
      {
        name: 'benefit',
        text: '혜택',
        icon: IconBenefit,
        to: '/main/benefit',
      },
      {
        name: 'menu',
        text: '메뉴',
        icon: IconMenu,
        to: '/menu',
      },
    ];

    return {
      store,
      items,
    };
  },
};
</script>

<template>
  <nav :class="$style['dock-bar']">
    <h2 class="for-a11y">Dock Bar</h2>
    <ul :class="$style['dock-bar__list']">
      <li
        v-for="item in items"
        :key="item.name"
        :class="[
          $style['dock-bar__item'],
          {
            [$style['dock-bar__item--active']]:
              store.ui.dockBar.active === item.name,
          },
        ]"
      >
        <RouterLink :to="item.to" :class="$style['dock-bar__link']">
          <component :is="item.icon" :class="$style['dock-bar__icon']" />
          <span :class="$style['dock-bar__text']">{{ item.text }}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/app/DockBar.scss';
</style>
