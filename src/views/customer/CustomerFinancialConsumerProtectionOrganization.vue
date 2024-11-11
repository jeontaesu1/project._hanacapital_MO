<script>
// Customer_M09_p003
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

export default {
  components: {
    PageContents,
    BasicBox,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '금융소비자보호조직');
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
    <div>
      <!-- S: 240729 수정 -->
      <img
        src="@/assets/images/contents/organization-wrap.png"
        alt="금융소비자보호조직도"
      />

      <section class="row-margin-item-group marginTop">
        <BasicBox theme="senary">
          <h3 class="text-body-1 font-weight-medium row-margin-small">
            금융소비자보호 내부통제위원회
          </h3>
          <p class="text-body-4 color-gray font-weight-regular">
            금융소비자보호 관련 경영방향 수립, 주요 제도 변경·개선 등
            금융소비자보호에 관한 내부통제를 수행하기 위하여 금융소비자보호
            내부통제위원회를 설치·운영하고 있습니다.
          </p>
        </BasicBox>
      </section>

      <section class="row-margin-item-group">
        <BasicBox theme="senary">
          <h3 class="text-body-1 font-weight-medium row-margin-small">
            금융소비자보호총괄책임자 (CCO)
          </h3>
          <p class="text-body-4 color-gray font-weight-regular">
            대표이사 직속으로 설치한 금융소비자보호 총괄기관의 최고책임자로서
            금융소비자보호 내부통제체제의 총괄 등 금융소비자보호 총괄기관의
            업무를 수행하고 있습니다.
          </p>
        </BasicBox>
      </section>

      <section class="row-margin-item-group">
        <BasicBox theme="senary">
          <h3 class="text-body-1 font-weight-medium row-margin-small">
            민원심의위원회
          </h3>
          <p class="text-body-4 color-gray font-weight-regular">
            접수된 민원에 대하여 공정한 처리 및 합리적 보상을 위하여 자체적으로
            정한 기준에 따라 민원심의위원회를 설치·운영하고 있습니다.
          </p>
        </BasicBox>
      </section>

      <section class="row-margin-item-group">
        <BasicBox theme="senary">
          <h3 class="text-body-1 font-weight-medium row-margin-small">
            금융소비자보호총괄부서
          </h3>
          <p class="text-body-4 color-gray font-weight-regular">
            금융소비자보호에 관한 내부통제, 금융소비자보호, 민원 처리 및 예방
            활동 등의 업무를 수행하고 있습니다.
          </p>
        </BasicBox>
      </section>
      <!-- // E: 240729 수정 -->
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>

<!-- S: 240729 추가 -->
<style lang="scss" scoped>
.marginTop {
  margin-top: 40px;
}
img {
  max-width: 100%;
}
</style>
<!-- //E: 240729 추가 -->
