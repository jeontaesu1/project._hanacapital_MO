<script>
// IF_M04_p001
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconArrow from '@/assets/images/icon/dropdown.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    StepProgress,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicButton,
    StickyBar,
    RoundStatus,
    TextButton,
    IconArrow,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      carNumberError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '재고금융 만기연장');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>
      <StickyBar>
        <StepProgress :total="5" :current="1" />
      </StickyBar>
    </template>

    <PageTextGroup>
      <PageMainText>
        재고금융 만기연장건에 대한<br />
        <strong>
          세부내역 확인 후 만기연장을<br />
          신청해 주세요
        </strong>
      </PageMainText>
      <PageSubText :classNames="{ wrap: 'font-weight-medium color-green' }"
        >주식회사알차이노베이션</PageSubText
      >
    </PageTextGroup>

    <FormList>
      <FormListItem
        titleText="차량번호"
        target="#InventoryFinanceEarlyListCarNumber"
      >
        <FormInvalid :error="state.carNumberError">
          <InputBlock :error="state.carNumberError">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="차량번호"
                id="InventoryFinanceEarlyListCarNumber"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <FormListItem titleText="조회기간"> // DatePicker </FormListItem>
    </FormList>

    <BasicButton line="true" :classNames="{ wrap: 'row-margin-contents-group' }"
      >조회</BasicButton
    >

    <BasicHr className="row-margin-container-medium" />

    <h3 class="text-title-2 row-margin-contents row-margin-top-none">
      대출내역
    </h3>

    <!-- Case : 조회내역이 없을 경우 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">만기리스트가 존재하지 않습니다.</p>
    </div>
    <!-- //Case : 조회내역이 없을 경우 -->

    <section>
      <BasicBox class="row-margin-item-group">
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-1 font-weight-medium">25버 9969</h3>
            <p class="text-body-4 color-gray row-margin-small">
              쏘나타 하이브리드(DN8) 스파이더
            </p>
          </BasicBoxHeadLeft>
        </BasicBoxHead>

        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>대출실행금액</KeyValueTitle>
            <KeyValueText>3,500,000 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>대출기간</KeyValueTitle>
            <KeyValueText>2019.05.30 ~ 2019.06.30</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>대출금리</KeyValueTitle>
            <KeyValueText>7.5%</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <BasicButton
          size="small"
          :classNames="{ wrap: 'row-margin-contents-small' }"
          >만기연장신청</BasicButton
        >
      </BasicBox>

      <!-- Case : 연체 건일 경우 -->
      <BasicBox class="row-margin-item-group">
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-1 font-weight-medium">10나 8941</h3>
            <p class="text-body-4 color-gray row-margin-small">
              엑센트 신형 1.6 VGT 프리미어
            </p>
          </BasicBoxHeadLeft>
          <BasicBoxHeadRight>
            <RoundStatus theme="nonary">연체</RoundStatus>
          </BasicBoxHeadRight>
        </BasicBoxHead>

        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>대출실행금액</KeyValueTitle>
            <KeyValueText>3,500,000 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>대출기간</KeyValueTitle>
            <KeyValueText>2019.05.30 ~ 2019.06.30</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>대출금리</KeyValueTitle>
            <KeyValueText>7.5%</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <BasicButton
          size="small"
          :disabled="true"
          :classNames="{ wrap: 'row-margin-contents-small' }"
          >만기연장신청</BasicButton
        >
      </BasicBox>
      <!-- //Case : 연체 건일 경우 -->
    </section>

    <div class="inline-wrap align-center row-margin-item-group">
      <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
        더보기
        <template v-slot:rightIcon>
          <IconArrow />
        </template>
      </TextButton>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventory-finance/InventoryFinanceExtensionList.scss';
</style>
