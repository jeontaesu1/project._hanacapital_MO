<script>
// My_M05_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '금리인하요구권신청');
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
        금리인하요구권 신청<br />
        가능한 상품은 총 <span class="color-green">0</span>건
      </PageMainText>
      <PageSubText>금리인하 대상상품만 조회됩니다.</PageSubText>
    </PageTextGroup>

    <!-- Case : 보유 상품 없을 때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">현재 보유하고 계신 상품이 없습니다.</p>
    </div>
    <!-- // Case : 보유 상품 없을 때 -->

    <!-- Case : 가능 상품 없을 때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">
        현재 금리인하가 가능한 상품이 없습니다.
      </p>
    </div>
    <!-- // Case : 가능 상품 없을 때 -->

    <!-- Case :상품 있을 때 -->
    <ul class="reset-list">
      <li class="row-margin-item-group">
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-body-1 font-weight-medium">오토할부 20고5678</h3>
              <p class="text-body-4 color-gray row-margin-small">
                벤츠 S-Class 세단 가솔린 3.0 S350 Long 자동
              </p>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>현재금리</KeyValueTitle>
              <KeyValueText>4.50%</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>월납입금</KeyValueTitle>
              <KeyValueText>324,440 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>4,820,000 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <BasicButton
            size="small"
            :classNames="{ wrap: 'row-margin-contents-small' }"
            >금리인하 신청</BasicButton
          >
        </BasicBox>
      </li>
      <li class="row-margin-item-group">
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-body-1 font-weight-medium">행복아파트론</h3>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>현재금리</KeyValueTitle>
              <KeyValueText>4.50%</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>월납입금</KeyValueTitle>
              <KeyValueText>324,440 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>4,820,000 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <BasicButton
            size="small"
            :classNames="{ wrap: 'row-margin-contents-small' }"
            >금리인하 신청</BasicButton
          >
        </BasicBox>
      </li>
    </ul>
    <!-- // Case :상품 있을 때 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/MyLoanInterestRateCutRequest.scss';
</style>
