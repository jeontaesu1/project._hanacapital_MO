<script>
// My_M06_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

import IconCustomer from '@/assets/images/icon/customer-center.svg?component';
import IconTell from '@/assets/images/icon/tell.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicButton,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    IconTell,
    IconCustomer,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '청약철회권신청');
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
        <strong>
          청약철회권 신청<br />
          가능한 상품은 총 <span class="color-green">0</span>건
        </strong>
      </PageMainText>
      <PageSubText>
        금융소비자 보호를 위해 대출 계약 후,<br />
        14일 동안 불이익 없이 청약 탈퇴할 수 있습니다.<br />
        (5영업일 이내 대출기록이 삭제됩니다)
      </PageSubText>
    </PageTextGroup>

    <div class="contents-wrap">
      <!-- Case : 보유 상품 없을 때 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">
          현재 보유하고 계신 상품이 없습니다.
        </p>
      </div>
      <!-- // Case : 보유 상품 없을 때 -->

      <!-- Case : 가능 상품 없을 때 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">
          현재 청약철회가 가능한 상품이 없습니다.
        </p>
      </div>
      <!-- // Case : 가능 상품 없을 때 -->

      <!-- Case :상품 있을 때 -->
      <ul class="reset-list">
        <li v-for="i in 2" :key="i" class="row-margin-item-group">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">소비자신용대출</h3>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText>2021.11.17 ~ 2026.11.21</KeyValueText>
              </KeyValueItem>

              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>대출금액</KeyValueTitle>
                <KeyValueText>23,000,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem :classNames="{ item: 'text-body-3 ' }">
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText>4,820,000 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <BasicButton
              size="small"
              :classNames="{ wrap: 'row-margin-contents-small' }"
              >청약철회 신청</BasicButton
            >
          </BasicBox>
        </li>
      </ul>
      <!-- // Case :상품 있을 때 -->
    </div>

    <div :class="[$style['icon-list'], 'row-margin-contents-group']">
      <ul :class="$style['icon-list__list']">
        <li :class="$style['icon-list__item']">
          <div :class="$style['icon-list__block']">
            <div :class="$style['icon-list__icon']"><IconCustomer /></div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__title']">고객센터</div>
              <div :class="$style['icon-list__text']">평일 09:00 ~ 18:00</div>
            </div>
            <BasicButton
              tagName="a"
              size="mini"
              :line="true"
              theme="quaternary"
              :classNames="{ wrap: $style['icon-list__button'] }"
              href="tel:1800-1110"
            >
              <template v-slot:leftIcon>
                <IconTell />
              </template>
              1800-1110
            </BasicButton>
          </div>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/MyLoanSubscriptionWithdrawalRight.scss';
</style>
