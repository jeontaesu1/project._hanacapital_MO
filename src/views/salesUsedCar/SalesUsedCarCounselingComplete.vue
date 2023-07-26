<script>
// UC_M03_p003
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    IllustObject,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    CarEmblem,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NoticeText,
    TextButton,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '중고할부·론');
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
        상담등록이<br />
        <strong>완료되었습니다</strong>
      </PageMainText>
      <!-- 상담등록 성공 -->
      <PageSubText
        >온라인 약정을 진행하시려면 ‘계약확정’을 눌러주세요.</PageSubText
      >
      <!-- //상담등록 성공 -->
      <!-- 상담등록 성공_일반심사A -->
      <PageSubText>지점문의 바랍니다.</PageSubText>
      <!-- //상담등록 성공_일반심사A -->
      <!-- 상담등록 성공_일반심사 or 정밀심사 or 예외심사 -->
      <PageSubText>지점문의 바랍니다.</PageSubText>
      <!-- //상담등록 성공_일반심사 or 정밀심사 or 예외심사 -->
    </PageTextGroup>

    <IllustObject type="complete" />

    <BasicBox>
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div class="flex-box row-margin-mini justify-conten-start">
            <div class="flex-box__cell">
              <CarEmblem code="1001" name="현대" />
            </div>
            <div class="flex-box__cell flex-box__cell--small">
              <p class="text-body-4 font-weight-light">2020년식</p>
            </div>
          </div>
          <h3 class="text-body-1 font-weight-medium">캐스퍼</h3>
          <p class="text-body-4 color-gray row-margin-small">
            2022년형 가솔린 1.0 터보 밴
          </p>
        </BasicBoxHeadLeft>
      </BasicBoxHead>
      <div>
        <KeyValue>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>신청금액</KeyValueTitle>
            <KeyValueText>2,000,000 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>대출기간</KeyValueTitle>
            <KeyValueText>24개월</KeyValueText>
          </KeyValueItem>

          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>금리</KeyValueTitle>
            <KeyValueText>
              <div class="flex-box">
                <span class="flex-box__cell flex-1">9.1%</span>
                <span class="flex-box__cell">
                  <TextButton theme="tertiary" :underline="true" :block="true"
                    >수수료차감</TextButton
                  >
                </span>
              </div>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
        <NoticeText :classNames="{ wrap: 'color-red row-margin-item' }">
          대출기간별 금리 상이
        </NoticeText>
        <KeyValue :classNames="{ wrap: 'row-margin-item-group' }">
          <!-- 상담등록 성공 -->
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>심사상태</KeyValueTitle>
            <KeyValueText>상담중</KeyValueText>
          </KeyValueItem>
          <!-- //상담등록 성공 -->

          <!-- 상담등록 성공_일반심사A -->
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>심사상태</KeyValueTitle>
            <KeyValueText>지점문의</KeyValueText>
          </KeyValueItem>
          <!-- //상담등록 성공_일반심사A -->
          <!-- 상담등록 성공_일반심사 or 정밀심사 or 예외심사 -->
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>심사상태</KeyValueTitle>
            <KeyValueText>지점문의</KeyValueText>
          </KeyValueItem>
          <!-- //상담등록 성공_일반심사 or 정밀심사 or 예외심사 -->
        </KeyValue>
      </div>
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
          <BasicButton theme="secondary">확인</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>
