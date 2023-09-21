<script>
// My_M03_l200
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    StepProgress,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicBox,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    IllustObject,
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
        <StepProgress :total="3" :current="3" />
      </template>

      <PageTextGroup>
        <PageMainText>
          상품설명서<br />
          확인 안내
        </PageMainText>
        <PageSubText>
          이 설명서는 『금융소비자 보호에 관한 법률』 제19조 제1항, 동 법 시행령
          제14조 제1항에 따라 금융상품에 관한 중요한 사항을 금융소비자가
          이해하기 쉽도록 설명하기 위한 중요 안내로, 금융소비자 보호에 관현 법령
          및 내부통제기준에 따른 절차를 거쳐 제공돼요.
        </PageSubText>
        <PageSubText>
          아래
          <strong class="font-weight-medium"
            >설명내용을 제대로 이해하지 못한 상태에서</strong
          >
          설명을 이해했다는 <span class="color-red">서명</span>을 하시는 경우
          추후 해당내용과 관련한
          <span class="color-red">권리구제가 어려울 수 있어요!</span>
        </PageSubText>
      </PageTextGroup>

      <IllustObject type="check" />

      <div class="row-margin-contents">
        <BasicBox theme="septenary" className="row-margin-item">
          <CheckBox
            theme="tertiary"
            id="layerMyLoanOnlineContractDescription001"
          >
            <CheckBoxObject />
            <CheckBoxLabelText>상품의 중요사항 확인하기</CheckBoxLabelText>
          </CheckBox>
        </BasicBox>
        <BasicBox theme="septenary" className="row-margin-item">
          <CheckBox
            theme="tertiary"
            id="layerMyLoanOnlineContractDescription002"
          >
            <CheckBoxObject />
            <CheckBoxLabelText>손님의 주요권리 확인하기</CheckBoxLabelText>
          </CheckBox>
        </BasicBox>
      </div>

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
            <BasicButton :minSide="true">상품설명서 전체보기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
