<script>
// LR_M05_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicBox,
    BasicBoxHead,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    TextButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '내 정보');
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
        <strong>내 정보를</strong><br />
        확인하세요
      </PageMainText>
      <PageSubText>
        회원정보는 온라인에서 변경되지 않습니다.<br />
        정보 변경은 관리자에게 문의 바랍니다.
      </PageSubText>
    </PageTextGroup>

    <BasicBox className="row-margin-container-medium row-margin-top-none">
      <BasicBoxHead>
        <h3 class="text-body-1 font-weight-medium">홍길동</h3>
      </BasicBoxHead>

      <KeyValue margin="regular">
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>등록 ID</KeyValueTitle>
          <KeyValueText>Testsh (Y)</KeyValueText>
        </KeyValueItem>
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>휴대폰</KeyValueTitle>
          <KeyValueText>010-1234-5678</KeyValueText>
        </KeyValueItem>
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>소속사</KeyValueTitle>
          <KeyValueText>㈜소속사명</KeyValueText>
        </KeyValueItem>
      </KeyValue>
    </BasicBox>

    <div class="inline-wrap align-center auto-bottom-wrap">
      <TextButton
        :underline="true"
        theme="quaternary"
        :classNames="{ text: 'text-body-4 color-gray' }"
      >
        로그아웃
      </TextButton>
    </div>
  </PageContents>
</template>
