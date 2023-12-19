<script>
// Q_M00_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiLayoutStore } from '@/stores/ui/layout';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconLogoMainH from '@/assets/images/etc-logo/logo_main_h.svg?component';

export default {
  components: {
    PageContents,
    BasicHr,
    IconLogoMainH,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        layout: useUiLayoutStore(),
      },
    };

    onMounted(() => {
      store.ui.layout.setUseFooter(false);
      store.ui.layout.setUseHeader(false);
    });

    onUnmounted(() => {
      store.ui.layout.setUseFooter();
      store.ui.layout.setUseHeader();
    });
  },
};
</script>

<template>
  <PageContents>
    <div :class="$style['box-wrap']">
      <div :class="$style['box-wrap--icon']"><IconLogoMainH /></div>
      <span class="text-title-1 font-weight-medium row-margin-item-group-small">
        이동 중입니다.
      </span>
    </div>

    <BasicHr
      theme="quaternary"
      type="contents"
      className="row-margin-contents-small"
    />

    <div :class="$style['box-footer-wrap']">
      <p class="text-body-3 color-gray-tertiary font-weight-light">
        하나캐피탈 서비스는 하나은행 위탁사인 하나캐피탈에서 제공합니다.
        하나은행은 하나캐피탈의 서비스 페이지에 연결하는 역할만하며,
        <span class="color-green"
          >서비스의 제공과 그 책임은 위탁사인 하나캐피탈</span
        >에 있습니다.<br /><br />

        문의처:하나캐피탈 고객센터 1800-1110
      </p>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/oneQ/Q_M00_p001.scss';
</style>
