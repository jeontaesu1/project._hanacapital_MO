<script>
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
    BasicButton,
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

      <span class="text-body-5 color-navy font-weight-light row-margin-item"
        >계약선택</span
      >
      <PageTextGroup>
        <PageMainText>
          중도상환신청 계약을<br />
          <strong>선택해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <a
        href="#"
        class="none-deco-link text-body-5 color-navy row-margin-item-group align-right"
        >대출가능차량 기준안내</a
      >

      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>스탁론 키움증권 (*****1234567)</BasicBoxHeadLeft>
        </BasicBoxHead>
        <KeyValueList>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>대출기간</KeyValueTitle>
            <KeyValueText>2023.01.04~2025.01.04</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>결제회차</KeyValueTitle>
            <KeyValueText>1/12</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>대출금액</KeyValueTitle>
            <KeyValueText>5,000,000 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>대출잔액</KeyValueTitle>
            <KeyValueText>5,000,000 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>결제예정금액</KeyValueTitle>
            <KeyValueText>5,000,000 원</KeyValueText>
          </KeyValueItem>
        </KeyValueList>

        <ButtonList
          :classNames="{
            wrap: 'row-margin-contents-small',
          }"
        >
          <ButtonListItem>
            <BasicButton size="small">신청하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </BasicBox>

      <BasicBox class="row-margin-item-group">
        <BasicBoxHead>
          <BasicBoxHeadLeft>스탁론 키움증권 (*****1234567)</BasicBoxHeadLeft>
        </BasicBoxHead>
        <KeyValueList>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>대출기간</KeyValueTitle>
            <KeyValueText>2023.01.04~2025.01.04</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>결제회차</KeyValueTitle>
            <KeyValueText>1/12</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>대출금액</KeyValueTitle>
            <KeyValueText>5,000,000 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>대출잔액</KeyValueTitle>
            <KeyValueText>5,000,000 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>결제예정금액</KeyValueTitle>
            <KeyValueText>5,000,000 원</KeyValueText>
          </KeyValueItem>
        </KeyValueList>

        <ButtonList
          :classNames="{
            wrap: 'row-margin-contents-small',
          }"
        >
          <ButtonListItem>
            <BasicButton size="small">신청하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </BasicBox>
    </FullPopup>
  </UiLayer>
</template>
