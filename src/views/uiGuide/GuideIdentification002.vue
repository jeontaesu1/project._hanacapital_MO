<script>
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
  },
};
</script>

<template>
  <PageContents>
    <PageTextGroup>
      <PageMainText>
        고객상담 이용을 위해<br />
        <strong>본인인증을 진행해 주세요</strong>
      </PageMainText>
    </PageTextGroup>
  </PageContents>
</template>
