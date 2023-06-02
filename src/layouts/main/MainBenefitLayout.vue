<script>
import MainBenefitHeader from '@/layouts/main/MainBenefitHeader.vue';
import DockBar from '@/layouts/app/DockBar.vue';

export default {
  components: {
    MainBenefitHeader,
    DockBar,
  },
};
</script>

<template>
  <div :class="$style['layout']">
    <div :class="$style['layout__head']">
      <MainBenefitHeader />
      <DockBar />
    </div>
    <div :class="$style['layout__body']">
      <slot />
    </div>
    <div :class="$style['layout__foot']">
      <div :class="$style['fake-dock-bar']"></div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/main/MainBenefitLayout.scss';
</style>
