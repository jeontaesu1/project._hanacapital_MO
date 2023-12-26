<script>
// Main_M05_l001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import IconRightArrow from '@/assets/images/icon/right-arrow.svg?component';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BottomSticky,
    TextButton,
    IconRightArrow,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '이벤트 상세');
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
    <div :class="$style['event-view']">
      <div :class="[$style['image-view'], $style['image-view--full']]">
        <img src="@/assets/images/_dummy/image-001.png" alt="샘플 이미지" />
      </div>
    </div>

    <!-- Case : 버튼 1개일 경우 -->
    <ButtonList>
      <ButtonListItem>
        <BasicButton>버튼</BasicButton>
      </ButtonListItem>
    </ButtonList>
    <!-- // Case : 버튼 1개일 경우 -->

    <!-- Case : 버튼 2개일 경우 -->
    <ButtonList>
      <ButtonListItem>
        <BasicButton>버튼</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton>버튼</BasicButton>
      </ButtonListItem>
    </ButtonList>
    <!-- // Case : 버튼 2개일 경우 -->

    <!-- Case : 버튼 3개일 경우 -->
    <ButtonList>
      <ButtonListItem>
        <BasicButton>버튼</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton>버튼</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton>버튼</BasicButton>
      </ButtonListItem>
    </ButtonList>
    <!-- // Case : 버튼 3개일 경우 -->

    <ButtonList align="full">
      <!-- Case : 버튼 컬러 타입 #143B75 -->
      <ButtonListItem>
        <BasicButton theme="tertiary">버튼</BasicButton>
      </ButtonListItem>
      <!-- // Case : 버튼 컬러 타입 #143B75 -->

      <!-- Case : 버튼 컬러 타입 #3A81E0  -->
      <ButtonListItem>
        <BasicButton theme="secondary">버튼</BasicButton>
      </ButtonListItem>
      <!-- // Case : 버튼 컬러 타입 #3A81E0 -->

      <!-- Case : 버튼 컬러 타입 #EAEAEA  -->
      <ButtonListItem>
        <BasicButton theme="quaternary">버튼</BasicButton>
      </ButtonListItem>
      <!-- // Case : 버튼 컬러 타입 #EAEAEA  -->

      <!-- Case : 버튼 텍스트 컬러 타입 #00A69E  -->
      <ButtonListItem>
        <BasicButton theme="quaternary-green">버튼</BasicButton>
      </ButtonListItem>
      <!-- // Case : 버튼 텍스트 컬러 타입 #00A69E  -->

      <!-- Case : 버튼 텍스트 컬러 타입 #3A81E0  -->
      <ButtonListItem>
        <BasicButton theme="quaternary-blue">버튼</BasicButton>
      </ButtonListItem>
      <!-- // Case : 버튼 텍스트 컬러 타입 #3A81E0  -->

      <!-- Case : 버튼 텍스트 컬러 타입 #143B75  -->
      <ButtonListItem>
        <BasicButton theme="quaternary-navy">버튼</BasicButton>
      </ButtonListItem>
      <!-- // Case : 버튼 텍스트 컬러 타입 #143B75  -->

      <!-- Case : 버튼 텍스트 컬러 타입 #00A69E  -->
      <ButtonListItem>
        <BasicButton :line="true" theme="quaternary-green">버튼</BasicButton>
      </ButtonListItem>
      <!-- Case : 버튼 텍스트 컬러 타입 #00A69E  -->

      <!-- Case : 버튼 텍스트 컬러 타입 #3A81E0  -->
      <ButtonListItem>
        <BasicButton :line="true" theme="quaternary-blue">버튼</BasicButton>
      </ButtonListItem>
      <!-- // Case : 버튼 텍스트 컬러 타입 #3A81E0  -->

      <!-- Case : 버튼 텍스트 컬러 타입 #757575  -->
      <ButtonListItem>
        <BasicButton :line="true" theme="quaternary">버튼</BasicButton>
      </ButtonListItem>
      <!-- // Case : 버튼 텍스트 컬러 타입 #757575  -->

      <!-- Case : 버튼 텍스트 컬러 타입 #143B75  -->
      <ButtonListItem>
        <BasicButton :line="true" theme="quaternary-navy">버튼</BasicButton>
      </ButtonListItem>
      <!-- // Case : 버튼 텍스트 컬러 타입 #143B75  -->
    </ButtonList>

    <!-- Case : 버튼 1개일 경우 -->
    <ButtonList>
      <TextButton theme="secondary" :iconFillAll="true">
        <template v-slot:rightIcon>
          <IconRightArrow />
        </template>
        버튼
      </TextButton>
    </ButtonList>
    <!-- // Case : 버튼 1개일 경우 -->

    <!-- Case : 버튼 2개일 경우 -->
    <ButtonList>
      <ButtonListItem>
        <TextButton theme="secondary" :iconFillAll="true">
          <template v-slot:rightIcon>
            <IconRightArrow />
          </template>
          버튼
        </TextButton>
      </ButtonListItem>
      <ButtonListItem>
        <TextButton theme="secondary" :iconFillAll="true">
          <template v-slot:rightIcon>
            <IconRightArrow />
          </template>
          버튼
        </TextButton>
      </ButtonListItem>
    </ButtonList>
    <!-- // Case : 버튼 2개일 경우 -->

    <!-- Case : 버튼 3개일 경우 -->
    <ButtonList>
      <ButtonListItem>
        <TextButton theme="secondary" :iconFillAll="true">
          <template v-slot:rightIcon>
            <IconRightArrow />
          </template>
          버튼
        </TextButton>
      </ButtonListItem>
      <ButtonListItem>
        <TextButton theme="secondary" :iconFillAll="true">
          <template v-slot:rightIcon>
            <IconRightArrow />
          </template>
          버튼
        </TextButton>
      </ButtonListItem>
      <ButtonListItem>
        <TextButton theme="secondary" :iconFillAll="true">
          <template v-slot:rightIcon>
            <IconRightArrow />
          </template>
          버튼
        </TextButton>
      </ButtonListItem>
    </ButtonList>
    <!-- // Case : 버튼 3개일 경우 -->

    <!-- Case : 버튼 컬러 타입 #3A81E0  -->
    <ButtonList>
      <TextButton theme="tertiary" :iconFillAll="true">
        <template v-slot:rightIcon>
          <IconRightArrow />
        </template>
        버튼
      </TextButton>
    </ButtonList>
    <!-- // Case : 버튼 컬러 타입 #3A81E0  -->

    <!-- Case : 버튼 컬러 타입 #757575  -->
    <ButtonList>
      <TextButton class="color-gray" :iconFillAll="true">
        <template v-slot:rightIcon>
          <IconRightArrow />
        </template>
        버튼
      </TextButton>
    </ButtonList>
    <!-- // Case : 버튼 컬러 타입 #757575  -->

    <!-- Case : 버튼 컬러 타입 #143B75  -->
    <ButtonList>
      <TextButton class="color-navy" :iconFillAll="true">
        <template v-slot:rightIcon>
          <IconRightArrow />
        </template>
        버튼
      </TextButton>
    </ButtonList>
    <!-- // Case : 버튼 컬러 타입 #143B75  -->

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>응모하기</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/Main_M05_l001.scss';
</style>
