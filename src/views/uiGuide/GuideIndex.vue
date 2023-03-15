<script>
import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    BasicButton,
  },
};
</script>

<template>
  <PageContents>
    인덱스
    <BasicButton tag="RouterLink" to="/guide-component"
      >컴포넌트 가이드</BasicButton
    >
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/uiGuide/GuideIndex.scss';
</style>
