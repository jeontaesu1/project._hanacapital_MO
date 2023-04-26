<script>
// PF_M10_l004
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
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
          아래 내용을 확인 후<br />
          <strong>체크 동의해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <ul class="reset-list">
        <li class="row-margin-item-group">
          <CheckBox
            id="layerMyLoanProgressReceiptGoodsAgree001Check001"
            theme="tertiary"
          >
            <CheckBoxObject />
            <CheckBoxLabelText>
              본인은 하나캐피탈㈜ 할부금융을 통해 구매한 상기 물품을
              판매점으로부터 정상적으로 설치/수령하였음을 확인합니다.
            </CheckBoxLabelText>
          </CheckBox>
        </li>
        <li class="row-margin-item-group">
          <CheckBox
            id="layerMyLoanProgressReceiptGoodsAgree001Check002"
            theme="tertiary"
          >
            <CheckBoxObject />
            <CheckBoxLabelText>
              만약 상기 물품이 설치되지 않았음에도 불구하고 본 물품 설치 확인
              동의하고, 할부 계약이 정상적으로 체결되는 경우, 하나캐피탈㈜에
              어떠한 이의제기를 하지 않고 할부금을 성실히 납부하겠음을
              확인합니다.
            </CheckBoxLabelText>
          </CheckBox>
        </li>
        <li class="row-margin-item-group">
          <CheckBox
            id="layerMyLoanProgressReceiptGoodsAgree001Check003"
            theme="tertiary"
          >
            <CheckBoxObject />
            <CheckBoxLabelText>
              상기 물품 구매 시, 판매점과 별도 계약(금전 지원, 상품권/회원권 등
              제공)이 없었음을 확인합니다.
            </CheckBoxLabelText>
          </CheckBox>
        </li>
        <li class="row-margin-item-group">
          <CheckBox
            id="layerMyLoanProgressReceiptGoodsAgree001Check004"
            theme="tertiary"
          >
            <CheckBoxObject />
            <CheckBoxLabelText>
              물품의 가격 성능 등을 충분히 검증하고 확인하였습니다.
            </CheckBoxLabelText>
          </CheckBox>
        </li>
        <li class="row-margin-item-group">
          <CheckBox
            id="layerMyLoanProgressReceiptGoodsAgree001Check005"
            theme="tertiary"
          >
            <CheckBoxObject />
            <CheckBoxLabelText>
              상기 내용에 대해 충분히 이해하고 확인(동의)합니다.
            </CheckBoxLabelText>
          </CheckBox>
        </li>
      </ul>

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
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
