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
      store.ui.header.setRightButtons(() => []);
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
      <BasicBox theme="senary" className="row-margin-item-group">
        <h3 class="text-body-1 font-weight-medium row-margin-small">
          소비자보호책임자
        </h3>
        <p class="text-body-4 color-gray font-weight-regular">
          금융소비자보호에 관한 의사결정이 전사적 시각에서 효율적으로
          이루어지도록 소비자보호제반 업무를 총괄하는 독립적 지위의
          소비자보호책임자를 지정하여 운영하고 있습니다.
        </p>
      </BasicBox>

      <BasicBox theme="senary" className="row-margin-item-group">
        <h3 class="text-body-1 font-weight-medium row-margin-small">
          소비자보호협의회
        </h3>
        <p class="text-body-4 color-gray font-weight-regular">
          금융소비자보호 관련 이슈를 종합적인 시각에서 신속하고 효과적으로
          조정하기 위하여 소비자보호책임자가 주관하여 운영하고 관련 임원 및
          부서장이 참여하는 금융소비자보호협의회를 설치 운영하고 있습니다.
        </p>
      </BasicBox>

      <BasicBox theme="senary" className="row-margin-item-group">
        <h3 class="text-body-1 font-weight-medium row-margin-small">
          민원심의위원회
        </h3>
        <p class="text-body-4 color-gray font-weight-regular">
          접수한 민원에 대하여 공정한 처리 및 합리적 보상을 위하여 자체적으로
          정한 기준에 따라 민원심의위원회를 설치 운영하고 있습니다.
        </p>
      </BasicBox>

      <BasicBox theme="senary" className="row-margin-item-group">
        <h3 class="text-body-1 font-weight-medium row-margin-small">
          소비자보호 총괄부서
        </h3>
        <p class="text-body-4 color-gray font-weight-regular">
          책임과 권한을 가지고 금융소비자보호업무를 수행할 소비자보호 총괄부서를
          설치 운영하고 있습니다.
        </p>
      </BasicBox>
    </div>
  </PageContents>
</template>
