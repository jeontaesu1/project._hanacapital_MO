<script>
// Company_M08_p010
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicBox,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '윤리헌장');
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
    <PageTextGroup>
      <PageMainText>
        <strong>함께 성장하며 행복을 나누는</strong><br />
        금융을 실현하기 위해<br />
        <span class="color-green">윤리적 가치를 최우선</span>으로 합니다
      </PageMainText>
    </PageTextGroup>

    <div>
      <section class="row-margin-item-medium">
        <BasicBox theme="senary">
          <h3 class="text-body-1 font-weight-medium">하나인은</h3>
          <p class="text-body-4 color-gray row-margin-small">
            도덕성과 책임감을 바탕으로 함께 성장하며 행복을 나누는 금융을
            실현하기 위해 윤리적 가치를 최우선으로 한다.
          </p>
        </BasicBox>
      </section>

      <section class="row-margin-item-medium">
        <BasicBox theme="senary">
          <h3 class="text-body-1 font-weight-medium">하나인은</h3>
          <p class="text-body-4 color-gray row-margin-small">
            원칙과 법규를 준수하고 공과 사를 명확히 구분하며 손님을 포함한 모든
            이해관계자를 상호존중의 정신으로 대하고 서로 협력한다.
          </p>
        </BasicBox>
      </section>

      <section class="row-margin-item-medium">
        <BasicBox theme="senary">
          <h3 class="text-body-1 font-weight-medium">하나인은</h3>
          <p class="text-body-4 color-gray row-margin-small">
            “내가 회사를 대표한다”는 생각으로 행동하며 성숙한 시민으로서의
            소임을 다해 구성원, 손님 및 사회로부터 신뢰받는 하나금융그룹을
            만드는 책임을 다한다.
          </p>
        </BasicBox>
      </section>
    </div>
  </PageContents>
</template>
