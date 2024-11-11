<script>
// Customer_DS_M02_02
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicButton,
    IllustObject,
    BasicHr,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
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
        채무조정 요청 가능한 계좌를<br />
        확인하세요
      </PageMainText>
    </PageTextGroup>

    <ul :class="$style['logs']">
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-body-1 font-weight-medium">e하나 신용대출</h3>
              <div class="text-body-4 color-gray row-margin-mini">
                000-000000-00
              </div>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents-small"
          />

          <KeyValue margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText :classNames="{ text: 'color-green' }"
                >10,000,000 원</KeyValueText
              >
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>만기일</KeyValueTitle>
              <KeyValueText>2024.12.31</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>적용금리</KeyValueTitle>
              <KeyValueText>5.15%</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <div :class="[$style['logs__button'], 'row-margin-contents-small']">
            <BasicButton size="small">채무조정요청권 신청</BasicButton>
          </div>
        </div>
      </li>

      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-body-1 font-weight-medium">행복아파트론</h3>
              <div class="text-body-4 color-gray row-margin-mini">
                1O1-11O111-1O
              </div>
            </div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents-small"
          />

          <KeyValue margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText :classNames="{ text: 'color-green' }"
                >10,000,000 원</KeyValueText
              >
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>만기일</KeyValueTitle>
              <KeyValueText>2024.12.31</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>적용금리</KeyValueTitle>
              <KeyValueText>5.15%</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <div :class="[$style['logs__button'], 'row-margin-contents-small']">
            <BasicButton size="small" :disabled="true"
              >채무조정요청권 신청 완료</BasicButton
            >
          </div>
        </div>
      </li>
    </ul>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerFinancialConsumerProtectionInterestRateCutRequestInfo.scss';
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>

<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideComponent.scss';
</style>
