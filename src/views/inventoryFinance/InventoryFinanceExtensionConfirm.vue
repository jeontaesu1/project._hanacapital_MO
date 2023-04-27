<script>
// IF_M04_p004
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    StepProgress,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicHr,
    StickyBar,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

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

    return {};
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>
      <StickyBar>
        <StepProgress :total="5" :current="4" />
      </StickyBar>
    </template>

    <PageTextGroup>
      <PageMainText>
        만기연장 처리 후<br />
        <strong>변경된 대출정보를 확인해 주세요</strong>
      </PageMainText>
    </PageTextGroup>

    <BasicBox>
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <h3 class="text-body-1 font-weight-medium">65두 5451</h3>
          <p class="text-body-4 color-gray row-margin-small">
            그랜저HG 240 모던 컬렉션 2016
          </p>
        </BasicBoxHeadLeft>
      </BasicBoxHead>

      <KeyValue margin="regular">
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>대출일자</KeyValueTitle>
          <KeyValueText>
            <span class="color-green font-weight-medium">2019.03.05</span>
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>대출실행금액</KeyValueTitle>
          <KeyValueText>
            <span class="color-green font-weight-medium">11.700,000 원</span>
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>원금잔액</KeyValueTitle>
          <KeyValueText>13,000,000 원</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>금리</KeyValueTitle>
          <KeyValueText>7.5%</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>기간</KeyValueTitle>
          <KeyValueText>
            <span class="color-green font-weight-medium">2개월</span>
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>상환방법</KeyValueTitle>
          <KeyValueText>만기일시상환</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>결제일자</KeyValueTitle>
          <KeyValueText>5일</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>설정금액</KeyValueTitle>
          <KeyValueText>1,300,000 원</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>연체이자율</KeyValueTitle>
          <KeyValueText>
            <span class="color-green font-weight-medium">약정대출금리+3%</span>
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <BasicHr
        theme="quaternary"
        type="contents"
        className="row-margin-contents-small"
      />

      <KeyValue margin="regular">
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>만기일자</KeyValueTitle>
          <KeyValueText>
            <span class="color-green font-weight-medium">2019.08.05</span>
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>만기시 상환금액</KeyValueTitle>
          <KeyValueText>
            <span class="color-green font-weight-medium">11,895,530 원</span>
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>원금</KeyValueTitle>
          <KeyValueText>
            <span class="color-green font-weight-medium">11,700,000 원</span>
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>이자</KeyValueTitle>
          <KeyValueText>
            <span class="color-green font-weight-medium">195,530 원</span>
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>
    </BasicBox>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :line="true" theme="quaternary">이전</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton>휴대폰 본인인증</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>
