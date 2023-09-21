<script>
// UC_M08_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
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
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
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
    BottomSticky,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '중고차 매매상사 할부 제휴 협약');
      store.ui.header.setLeftButtons(() => []);
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
        제휴사 정보를<br />
        확인해 주세요
      </PageMainText>
    </PageTextGroup>

    <BasicBox>
      <BasicBoxHead align="top">
        <BasicBoxHeadLeft>
          <h3 class="text-body-1 font-weight-medium">하나매매상사</h3>
        </BasicBoxHeadLeft>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>사업자번호</KeyValueTitle>
          <KeyValueText>123-45-678</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>사업자유형</KeyValueTitle>
          <KeyValueText>개인사업자</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>대표자명</KeyValueTitle>
          <KeyValueText>김하나</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>대표자 주민등록번호</KeyValueTitle>
          <KeyValueText>860316-1******</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>대표자 연락처</KeyValueTitle>
          <KeyValueText>010-1234-5678</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>사업장주소지</KeyValueTitle>
          <KeyValueText>
            서울 강남구 헌릉로 745길 25 216호(율현동, 강남자동차매매단지)
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>관리부서</KeyValueTitle>
          <KeyValueText>경인드림카센터</KeyValueText>
        </KeyValueItem>
      </KeyValue>
    </BasicBox>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary">이전</BasicButton>
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton>다음</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>
