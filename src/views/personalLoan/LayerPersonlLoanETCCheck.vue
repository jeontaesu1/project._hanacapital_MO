<script>
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicButton,

    BasicBox,
    CheckBox,
    UiAccordionLayer,
    CheckBoxObject,
    CheckBoxLabelText,
    UiAccordion,
    UiAccordionItem,
    ButtonListItem,
    ButtonList,
    FormHelpText,
  },
  setup() {
    const state = reactive({
      nameError: false,
      idNumberError: false,
    });

    const layer = ref(null);

    return {
      state,
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
          아파트에<br />
          <strong>부동산 설정 금액이 있나요?</strong>
        </PageMainText>
      </PageTextGroup>
      <BasicBox
        >인천광역시 연수구 송도동 39-1 <br />
        더샵 랜드마크시티 [158.67/134.3㎡]</BasicBox
      >

      <FormList class="row-margin-contents">
        <FormInvalid :error="state.phoneError">
          <FormListItem
            titleText="부동산 설정금액"
            titleOptionalText="(선택)"
            target="#testInput007"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이름" id="testInput007" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText
            >등기부등본 상의 채권최고액을 입력해주세요. <br />
            (근저당설정이 2건 이상일 경우 합산하여 입력)</FormHelpText
          >
          <FormHelpText class="color-green underline font-weight-medium"
            >등기부등본 조회</FormHelpText
          >
        </FormInvalid>
      </FormList>

      <UiAccordion>
        <UiAccordionItem>
          <UiAccordionLayer>
            <div :class="$style['agree-list__all-contents']">
              <ul :class="$style['agree-list__list']">
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="etc_check_box_01"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >개인정보 수집·이용, 취급위탁 동의</CheckBoxLabelText
                      >
                    </CheckBox>
                    <div :class="$style['agree-list__right']">
                      <button type="button" :class="$style['agree-list__link']">
                        <span :class="$style['agree-list__link-text']">
                          상세보기
                        </span>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </UiAccordionLayer>
        </UiAccordionItem>
      </UiAccordion>

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
@import '@/assets/scss/views/personalLoan/LayerPersonlLoanETCCheck.scss';
</style>
