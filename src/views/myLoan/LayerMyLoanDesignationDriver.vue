<script>
// My_M01_p008 등록 후
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

import iconImportant from '@/assets/images/icon/important.svg?component';
import IconAdd from '@/assets/images/icon/add.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PageTextGroup,
    PageSubText,
    PageMainText,
    TextButton,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    iconImportant,
    IconAdd,
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
          <PopupTitle>지정운전자</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          지정운전자를<br />
          등록해 주세요
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

      <BasicBox className="row-margin-item">
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
        <KeyValue margin="regular">
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
        </KeyValue>
      </BasicBox>

      <BasicBox className="row-margin-item">
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
        <KeyValue margin="regular">
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
        </KeyValue>
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
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanDesignationDriver.scss';
</style>
