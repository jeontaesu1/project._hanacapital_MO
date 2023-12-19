<script>
import { useUiCommonStore } from '@/stores/ui/common';
import { useUiLayoutStore } from '@/stores/ui/layout';

import DefaultHeader from '@/layouts/DefaultHeader.vue';
import DefaultFooter from '@/layouts/DefaultFooter.vue';
import DockBar from '@/layouts/app/DockBar.vue';

export default {
  components: {
    DefaultHeader,
    DefaultFooter,
    DockBar,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        layout: useUiLayoutStore(),
      },
    };

    return {
      store,
    };
  },
};
</script>

<template>
  <div :class="$style['layout']">
    <div :class="$style['layout__head']">
      <DefaultHeader v-if="store.ui.layout.useHeader" />
      <DockBar v-if="store.ui.common.isAPP" />
    </div>
    <div :class="$style['layout__body']">
      <slot />
    </div>
    <div :class="$style['layout__foot']">
      <DefaultFooter v-if="store.ui.layout.useFooter" />
      <div :class="$style['fake-dock-bar']" v-if="store.ui.common.isAPP"></div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/DefaultLayout.scss';
</style>
