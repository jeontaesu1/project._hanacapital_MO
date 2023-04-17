<script>
// My_M01_p008 등록 후
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

import iconImportant from '@/assets/images/icon/important.svg?component';
import IconAdd from '@/assets/images/icon/add.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageSubText,
    PageMainText,
    TextButton,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    iconImportant,
    IconAdd,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '지정운전자');
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
        지정운전자를<br />
        <strong>등록해 주세요</strong>
      </PageMainText>
      <PageSubText>
        기본 운전자 외 2인에 한하여<br />
        추가로 지정 가능합니다.
      </PageSubText>
    </PageTextGroup>

    <div :class="[$style['info'], 'inline-wrap align-right']">
      <TextButton
        theme="quaternary"
        :classNames="{
          text: 'font-weight-regular',
        }"
      >
        지정운전자 등록안내 및 유의사항
        <template v-slot:rightIcon>
          <iconImportant />
        </template>
      </TextButton>
    </div>

    <BasicBox class="row-margin-item">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div class="font-weight-light text-body-4">지정운전자 1</div>
          <h3 class="text-body-1 font-weight-medium row-margin-small">
            김하나(친인척)
          </h3>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <TextButton
            :classNames="{ text: 'display-block color-gray' }"
            underline="true"
            >변경</TextButton
          >
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValueList margin="regular">
        <KeyValueItem :classNames="{ item: 'text-body-3' }">
          <KeyValueTitle>생년월일</KeyValueTitle>
          <KeyValueText> 2022.02.02 </KeyValueText>
        </KeyValueItem>
        <KeyValueItem :classNames="{ item: 'text-body-3' }">
          <KeyValueTitle>전화번호</KeyValueTitle>
          <KeyValueText> 010-1234-5678</KeyValueText>
        </KeyValueItem>
        <KeyValueItem :classNames="{ item: 'text-body-3' }">
          <KeyValueTitle>운전면허번호</KeyValueTitle>
          <KeyValueText> 01-23-456789-01</KeyValueText>
        </KeyValueItem>
        <KeyValueItem :classNames="{ item: 'text-body-3' }">
          <KeyValueTitle>취득일자</KeyValueTitle>
          <KeyValueText> 2001.02.06</KeyValueText>
        </KeyValueItem>
      </KeyValueList>
    </BasicBox>

    <BasicBox class="row-margin-item">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div class="font-weight-light text-body-4">지정운전자 2</div>
          <h3 class="text-body-1 font-weight-medium row-margin-small">
            김하나(배우자)
          </h3>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <TextButton
            :classNames="{ text: 'display-block color-gray' }"
            underline="true"
            >변경</TextButton
          >
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValueList margin="regular">
        <KeyValueItem :classNames="{ item: 'text-body-3' }">
          <KeyValueTitle>생년월일</KeyValueTitle>
          <KeyValueText> 2022.02.02 </KeyValueText>
        </KeyValueItem>
        <KeyValueItem :classNames="{ item: 'text-body-3' }">
          <KeyValueTitle>전화번호</KeyValueTitle>
          <KeyValueText> 010-1234-5678</KeyValueText>
        </KeyValueItem>
        <KeyValueItem :classNames="{ item: 'text-body-3' }">
          <KeyValueTitle>운전면허번호</KeyValueTitle>
          <KeyValueText> 01-23-456789-01</KeyValueText>
        </KeyValueItem>
        <KeyValueItem :classNames="{ item: 'text-body-3' }">
          <KeyValueTitle>취득일자</KeyValueTitle>
          <KeyValueText> 2001.02.06</KeyValueText>
        </KeyValueItem>
      </KeyValueList>
    </BasicBox>

    <!-- Case : 1인 등록시 노출 -->
    <button type="button" :class="[$style['add-button'], 'row-margin-item']">
      <span :class="$style['add-button__inner']">
        <span :class="$style['add-button__text']">지정운전자 추가등록</span>
        <span :class="$style['add-button__icon']">
          <IconAdd />
        </span>
      </span>
    </button>
    <!-- //Case : 1인 등록시 노출 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/MyLoanDesignationDriver.scss';
</style>
