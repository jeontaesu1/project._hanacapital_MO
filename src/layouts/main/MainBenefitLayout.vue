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
    </div>
    <div :class="$style['layout__body']">
      <slot />
    </div>
    <div :class="$style['layout__foot']">
      <DockBar />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/layouts/main/MainBenefitLayout.scss';
</style>
