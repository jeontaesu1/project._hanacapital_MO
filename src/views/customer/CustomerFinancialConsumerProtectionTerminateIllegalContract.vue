<script>
// Customer_M10_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '위법계약해지권');
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
      <PageMainText>위법계약해지권이란?</PageMainText>
      <PageSubText>
        금융상품판매업자등(금융회사·신용카드·대출·리스할부모집인)이 금융소비자
        보호에 관한 법률의 적합성원칙 (법 제17조 제3항), 적정성원칙(법 제18조
        제2항), 설명의무(법 제19조 제1항, 제3항), 불공정영업행위의 금지(법
        제20조 제1항), 부당권유 금지(법 제21조)를 위반하여 금융상품에 관한
        계약을 체결한 경우, 금융소비자가 계약 해지를 요구할 수 있는 권리
      </PageSubText>
    </PageTextGroup>

    <section>
      <section class="row-margin-contents">
        <h4 class="text-body-2 row-margin-item-medium">
          위법계약 해지 대상 금융상품
        </h4>
        <p class="text-body-4 color-gray-tertiary font-weight-light">
          대출, 할부금융, 시설대여(리스), 오토론 등
        </p>

        <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
          <li
            :class="[
              $style['basic-list__item'],
              'color-gray-tertiary',
              'font-weight-regular',
              'text-body-5',
            ]"
          >
            <div :class="$style['basic-list__symbol']">*</div>
            <div :class="$style['basic-list__content']">
              21.03.25일 이후 계약이 체결되었으며, 금융소비자와 금융회사 간
              계속적 거래가 이루어지고, 금융소비자가 해지 시 재산상 불이익이
              발생하는 금융상품
            </div>
          </li>
        </ul>
      </section>

      <section class="row-margin-contents-group">
        <h4 class="text-body-2 row-margin-item-medium">해지신청 가능기한</h4>
        <p class="text-body-4 color-gray-tertiary font-weight-light">
          금융소비자가 계약 체결에 대한 위반사항을 안 날로부터<br />
          1년 이내에 신청 가능 (단, 해당 기간이 계약 체결일로부터<br />
          5년 이내의 범위에 있어야 함)
        </p>
      </section>

      <section class="row-margin-contents-group row-margin-bottom-none">
        <h4 class="text-body-2 row-margin-item-medium">신청 방법</h4>

        <p class="text-body-4 color-gray-tertiary font-weight-light mb8">
          당사 양식은
          <span class="color-green"
            >전체메뉴>고객센터>서식다운로드><br />
            [금융소비자보호법 권리] 위법계약해지 신청서</span
          >로 가셔서 다운로드 하시면 됩니다. 신청서 제출<br />
          (계약체결 지점·센터/콜센터)하시면 위법계약해지여부 검토 후 안내해
          드립니다.
        </p>
      </section>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerFinancialConsumerProtectionInterestRateCutRequestInfo.scss';

@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>

<style lang="scss" scoped>
.color-green {
  font-weight: 400;
}
.etc-list {
  margin: 0;
  font-size: 13px;
  padding-left: 4px;
}
</style>
