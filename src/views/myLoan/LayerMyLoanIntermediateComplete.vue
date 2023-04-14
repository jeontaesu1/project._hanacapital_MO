<script>
// My_M01_l017
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    IllustObject,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
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
        <PageMainText>
          중도상환신청 접수가<br />
          <strong>완료되었습니다</strong>
        </PageMainText>
        <!-- Case : 가상계좌 선택 시 노출  -->
        <PageSubText
          >신청하신 내용은 1~3 영업일 이후에 적용됩니다.<br />
          고객님의 소중한 정보 확인 후<br />
          심사결과를 알려드리겠습니다.</PageSubText
        >
        <!-- // Case : 가상계좌 선택 시 노출  -->
        <PageSubText>하나캐피탈을 이용해주셔서 감사합니다.</PageSubText>
      </PageTextGroup>

      <IllustObject type="complete" :classNames="{ wrap: $style['illust'] }" />

      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-1 font-weight-medium">오토론</h3>
          </BasicBoxHeadLeft>
        </BasicBoxHead>

        <KeyValueList margin="regular">
          <!-- Case : 가상계좌 선택 시 노출  -->
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>결제방식</KeyValueTitle>
            <KeyValueText>가상계좌</KeyValueText>
          </KeyValueItem>
          <!-- // Case : 가상계좌 선택 시 노출  -->

          <!-- Case : 즉시출금 선택 시 노출  -->
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>결제방식</KeyValueTitle>
            <KeyValueText>즉시출금</KeyValueText>
          </KeyValueItem>
          <!-- // Case : 즉시출금 선택 시 노출  -->

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>상환예정금액</KeyValueTitle>
            <KeyValueText>999,999원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>가상계좌</KeyValueTitle>
            <KeyValueText>하나 123-456-7890123</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>예금주</KeyValueTitle>
            <KeyValueText>김하나</KeyValueText>
          </KeyValueItem>
        </KeyValueList>
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

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanIntermediateComplete.scss';
</style>
