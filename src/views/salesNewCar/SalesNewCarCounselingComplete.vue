<script>
// NC_M03_p003 완료
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';

export default {
  components: {
    PageContents,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    IllustObject,
    CarEmblem,
    CarThumb,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '신차모바일');
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
        김하나 손님은 <span class="color-blue">자동승인</span> 대상입니다<br />
        <strong>계약등록을 진행해주세요</strong>
      </PageMainText>
    </PageTextGroup>

    <IllustObject type="complete" />

    <BasicBox>
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div class="row-margin-mini">
            <CarEmblem code="1001" name="현대" />
          </div>
          <h3 class="text-body-1 font-weight-medium">캐스퍼</h3>
          <p class="text-body-4 color-gray row-margin-small">스마트</p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <CarThumb src="/images/_dummy/car-thumb.png" />
        </BasicBoxHeadRight>
      </BasicBoxHead>

      <KeyValue margin="regular">
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>신청금액</KeyValueTitle>
          <KeyValueText>3,000,000 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>대출기간</KeyValueTitle>
          <KeyValueText>36개월</KeyValueText>
        </KeyValueItem>
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>금리</KeyValueTitle>
          <KeyValueText>6.2%</KeyValueText>
        </KeyValueItem>
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>설정율/금액</KeyValueTitle>
          <KeyValueText>0% / 0 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>AG수수료율/금액</KeyValueTitle>
          <KeyValueText>0.50% / 15,000 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>CM수수료율/금액</KeyValueTitle>
          <KeyValueText>0.50% / 15,000 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>추가프로모션 금액</KeyValueTitle>
          <KeyValueText>0 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>진행상태</KeyValueTitle>
          <KeyValueText>상담중</KeyValueText>
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
          <BasicButton :line="true" theme="quaternary">상담변경</BasicButton>
        </ButtonListItem>

        <ButtonListItem>
          <BasicButton>확인</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>
