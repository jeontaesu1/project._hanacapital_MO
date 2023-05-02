<script>
// UC_M03_p005 일반심사, 일반심사A, 정밀심사, 예외심사

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
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
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
    BasicBoxHeadRight,
    CarThumb,
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
        상담이<br />
        <strong>불가능한 고객입니다</strong>
      </PageMainText>
      <PageSubText>자세한 사항은 지점에 문의하시기 바랍니다.</PageSubText>
    </PageTextGroup>
    <IllustObject type="fail" />
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
          <h3 class="text-body-1 font-weight-medium">GS(4세대)</h3>
          <p class="text-body-4 color-gray row-margin-small">300 슈프림</p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <CarThumb src="/images/_dummy/car-thumb.png" />
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <div>
        <KeyValue class="row-margin-item">
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
              <div class="flex-box justify-conten-end">
                <span class="flex-box__cell">9.1%</span>
                <TextButton
                  class="flex-box__cell"
                  theme="tertiary"
                  :underline="true"
                  >수수료차감</TextButton
                >
              </div>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
        <NoticeText :classNames="{ wrap: 'color-red' }">
          대출기간별 금리 상이
        </NoticeText>
        <KeyValue class="row-margin-item-group">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>심사상태</KeyValueTitle>
            <KeyValueText>지점문의</KeyValueText>
          </KeyValueItem>
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
