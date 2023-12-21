<script>
// Customer_M09_p012
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import IconRightArrow from '@/assets/images/icon/right-arrow.svg?component';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    TextButton,
    BasicHr,
    IconRightArrow,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '금융소비자보호자료');
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
    <div :class="$style['board-detail']">
      <div :class="$style['board-detail__head']">
        <h2 :class="$style['board-detail__title']">
          사업자담보대출 [금융소비자보호자료]
        </h2>
        <p :class="$style['board-detail__sub']">2022.10.25</p>
      </div>
      <section :class="$style['board-detail__contents']">
        //게시물 내용 노출
      </section>
    </div>

    <!-- Case : 버튼 1개일 경우 -->
    <ButtonList>
      <ButtonListItem>
        <BasicButton to="/customer/notice-list">버튼</BasicButton>
      </ButtonListItem>
    </ButtonList>
    <!-- // Case : 버튼 1개일 경우 -->

    <!-- Case : 버튼 2개일 경우 -->
    <ButtonList>
      <ButtonListItem>
        <BasicButton to="/customer/notice-list">버튼</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton to="/customer/notice-list">버튼</BasicButton>
      </ButtonListItem>
    </ButtonList>
    <!-- // Case : 버튼 2개일 경우 -->

    <!-- Case : 버튼 3개일 경우 -->
    <ButtonList>
      <ButtonListItem>
        <BasicButton to="/customer/notice-list">버튼</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton to="/customer/notice-list">버튼</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton to="/customer/notice-list">버튼</BasicButton>
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

    <!-- DD : 버튼 추가시 노출 -->
    <BasicHr
      type="contents"
      theme="quaternary"
      className="row-margin-contents row-margin-bottom-none"
    />
    <!-- DD : 버튼 추가시 노출 -->

    <!-- Case: 상시 노출 -->
    <ButtonList>
      <ButtonListItem>
        <BasicButton
          :line="true"
          theme="quaternary"
          tagName="RouterLink"
          to="/customer/financial-consumer-protection-data"
        >
          목록
        </BasicButton>
      </ButtonListItem>
    </ButtonList>
    <!-- // Case: 상시 노출 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerFinancialConsumerProtectionDataDetail.scss';
</style>
