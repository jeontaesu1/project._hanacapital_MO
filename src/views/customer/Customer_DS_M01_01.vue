<script>
// Customer_DS_M01_01
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '채무조정요청권 알아보기');
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
      <PageMainText>채무조정요청권이란?</PageMainText>
      <PageSubText>
        「개인금융채권의 관리 및 개인금융채무자의 보호에 관한 법률」 제35조에
        따라 개인금융채권을 연체한 채무자는 채권금융회사에 채무조정을 요청할 수
        있습니다. 다만, 심사결과에 따라 채무조정이 거절될 수도 있습니다.
      </PageSubText>
    </PageTextGroup>

    <section>
      <section class="row-margin-contents">
        <h4 class="text-body-2 row-margin-item-medium">채무조정 요청 대상</h4>
        <p class="text-body-4 color-black font-weight-light">
          계좌별 대출원금 대출약정금액이 3천만원 미만의 개인금융채권을 연체 중인
          개인 및 개인사업자
        </p>
      </section>

      <section class="row-margin-contents">
        <h4 class="text-body-2 row-margin-item-medium">결과안내</h4>
        <p class="text-body-4 color-black font-weight-light">
          요청 접수 후 10영업일 이내 심사결과를 확인할 수 있으며, 전문상담사가
          연락드릴 수 있습니다.
        </p>
      </section>

      <section class="row-margin-contents">
        <h4 class="text-body-2 row-margin-item-medium">유의사항</h4>

        <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              채무조정 결과를 확인한 후
              <span class="color-green">10영업일 안에 동의 여부를 결정</span>
              해야 합니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              채무조정이 거절되는 경우, 혹은 채무조정 내용에 동의하지 않는 경우
              신용회복위원회(16OO-5500)를 통해 상담 받으실 수 있습니다.
            </div>
          </li>
        </ul>
      </section>
    </section>

    <div class="row-margin-contents">
      <BasicButton> 채무조정요청권 신청 </BasicButton>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerFinancialConsumerProtectionInterestRateCutRequestInfo.scss';
</style>
