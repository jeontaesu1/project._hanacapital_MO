<script>
// My_M03_b016
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupText from '@/components/ui/layer/PopupText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

import BasicBox from '@/components/ui/common/BasicBox.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PopupText,
    BasicBox,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
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
  <UiLayer ref="layer" type="toast" :backgroundClose="true">
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle> 약정 중요사항을 확인해 주세요 </PopupTitle>
        </ToastPopupHead>
      </template>

      <PopupText>
        신청인(본인)은 약정 중요사항에 대해 충분한 설명을 듣고 잘 이해한 후
        본인의 의사에 따라 약정을 체결하며 약정내용을 성실히 이행할 것을
        확약합니다.
      </PopupText>

      <BasicBox
        theme="septenary"
        class="row-margin-item-group row-margin-bottom-none"
      >
        <div :class="$style['agree-list']">
          <div :class="$style['agree-list__container']">
            <div :class="$style['agree-list__head']">
              <CheckBox
                id="testagree011_001_001"
                :classNames="{
                  wrap: $style['agree-list__checkbox'],
                }"
                theme="tertiary"
              >
                <CheckBoxObject />
                <CheckBoxLabelText
                  >네, 계약사항에 대하여 충분히 이해했습니다.</CheckBoxLabelText
                >
              </CheckBox>
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
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractSuccessionImportant.scss';
</style>
