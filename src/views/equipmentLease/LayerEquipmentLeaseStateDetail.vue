<script>
// EL_M02_l004
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    TextButton,
  },
  setup() {
    const layer = ref(null);

    return {
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>김하나 고객님</PageMainText>
        <PageSubText>
          아래와 같이 일반리스 조건을 제시드리며, 세부 사항은 담당자에게
          문의하여 주시기 바랍니다.
        </PageSubText>
      </PageTextGroup>

      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-1 font-weight-medium">
              OOO레이져글자수열다섯글자수
            </h3>
          </BasicBoxHeadLeft>
        </BasicBoxHead>

        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>취득원가</KeyValueTitle>
            <KeyValueText>99,999,000원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>기간</KeyValueTitle>
            <KeyValueText>24개월</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>상환금리</KeyValueTitle>
            <KeyValueText>5%</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>보증금</KeyValueTitle>
            <KeyValueText>20% (2,000,000 원)</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>잔존가치</KeyValueTitle>
            <KeyValueText>20% (2,000,000 원)</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>유예원금</KeyValueTitle>
            <KeyValueText>20% (2,000,000 원)</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>월리스료</KeyValueTitle>
            <KeyValueText>100,000,000원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>총납입액</KeyValueTitle>
            <KeyValueText>100,000,000원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>이자총액</KeyValueTitle>
            <KeyValueText>100,000,000원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>보험조건</KeyValueTitle>
            <KeyValueText>이용자책임부보</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>납입방식</KeyValueTitle>
            <KeyValueText>1개월 후불</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3 align-items-center',
            }"
          >
            <KeyValueTitle>상환스케줄</KeyValueTitle>
            <KeyValueText>
              <div class="inline-wrap">
                <TextButton :underline="true" theme="secondary">
                  상세보기
                </TextButton>
              </div>
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
            <KeyValueTitle>견적번호</KeyValueTitle>
            <KeyValueText>A00000000001</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>영업사원</KeyValueTitle>
            <KeyValueText>이두리</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>연락처</KeyValueTitle>
            <KeyValueText>
              M 010-1234-5678<br />
              T 02-1234-5678
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
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
