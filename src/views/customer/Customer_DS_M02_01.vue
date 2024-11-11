<script>
// Customer_DS_M02_01
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicButton,
    IllustObject,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '채무조정요청권 신청');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <PageTextGroup>
      <PageMainText>
        채무조정 요청을 위해<br />
        본인인증을 진행해 주세요
      </PageMainText>
    </PageTextGroup>

    <IllustObject type="license" />

    <div class="row-margin-contents">
      <BasicButton> 본인인증 </BasicButton>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerFinancialConsumerProtectionInterestRateCutRequestInfo.scss';
</style>
