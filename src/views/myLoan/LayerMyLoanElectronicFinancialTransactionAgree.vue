<script>
// My_M01_b001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
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
    PageSubText,
    BasicBox,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
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

      <PageTextGroup>
        <PageMainText>
          전자금융거래 약관에<br />
          <strong>동의해 주세요</strong>
        </PageMainText>
        <PageSubText>
          내대출 서비스를 이용하기 위해서는 전자금융거래법 제 2조 제 1호에
          근거하여 전자금융거래약관 동의가 필요합니다.
        </PageSubText>
      </PageTextGroup>

      <BasicBox theme="septenary">
        <div :class="$style['agree-list']">
          <div :class="$style['agree-list__head']">
            <CheckBox
              id="layerMyLoanElectronicFinancialTransactionAgree001"
              :classNames="{
                wrap: $style['agree-list__checkbox'],
              }"
              theme="tertiary"
            >
              <CheckBoxObject />
              <CheckBoxLabelText>전자금융거래약관</CheckBoxLabelText>
            </CheckBox>
            <div :class="$style['agree-list__right']">
              <button type="button" :class="$style['agree-list__link']">
                <span :class="$style['agree-list__link-text']"> 상세보기 </span>
              </button>
            </div>
          </div>
        </div>
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
@import '@/assets/scss/views/myLoan/LayerMyLoanElectronicFinancialTransactionAgree.scss';
</style>
