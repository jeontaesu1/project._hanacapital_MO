<script>
// MI_M01_p005
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicBox,
    BasicHr,
    UnitText,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '하나머니');
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
        김하나님의<br />
        <strong>하나머니 내역을 알려드릴게요</strong>
      </PageMainText>
    </PageTextGroup>

    <BasicBox>
      <section>
        <h3 class="text-body-4 font-weight-light row-margin-small">
          사용 신청할 수 있는
        </h3>
        <div class="flex-box">
          <div class="flex-box__cell flex-1">
            <h4 class="text-body-1 font-weight-medium">사용가능 하나머니</h4>
          </div>
          <div class="flex-box__cell flex-box__cell--medium">
            <UnitText size="regular" rightUnit="원" align="right"
              ><span class="color-green">35,000</span></UnitText
            >
          </div>
        </div>
      </section>

      <BasicHr
        type="contents"
        theme="quaternary"
        className="row-margin-contents-small"
      />

      <section>
        <h3 class="text-body-4 font-weight-light row-margin-small">
          사용가능 머니로 전환 예정인
        </h3>
        <div class="flex-box">
          <div class="flex-box__cell flex-1">
            <h4 class="text-body-1 font-weight-medium">가용예정 하나머니는</h4>
          </div>
          <div class="flex-box__cell flex-box__cell--medium">
            <UnitText size="regular" rightUnit="원" align="right"
              ><span class="color-green">5,000</span></UnitText
            >
          </div>
        </div>
      </section>

      <BasicHr
        type="contents"
        theme="quaternary"
        className="row-margin-contents-small"
      />

      <section>
        <h3 class="text-body-4 font-weight-light row-margin-small">
          유효기간 종료로 익월 소멸 예정인
        </h3>
        <div class="flex-box">
          <div class="flex-box__cell flex-1">
            <h4 class="text-body-1 font-weight-medium">
              익월소멸예정 하나머니
            </h4>
          </div>
          <div class="flex-box__cell flex-box__cell--medium">
            <UnitText size="regular" rightUnit="원" align="right"
              ><span class="color-green">0</span></UnitText
            >
          </div>
        </div>
      </section>
    </BasicBox>
  </PageContents>
</template>
