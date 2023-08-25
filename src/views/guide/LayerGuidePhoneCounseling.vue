<script>
// Common_M00_b017
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
  },
  setup() {
    const state = reactive({
      phoneError: false,
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
  <UiLayer ref="layer" type="toast" :backgroundClose="true">
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>
            연락처를 남겨주시면<br />
            전화상담을 도와드릴게요.
          </PopupTitle>
        </ToastPopupHead>
      </template>

      <FormList>
        <FormListItem
          titleText="휴대폰번호"
          target="#layerGuidePhoneCounselingPhone"
        >
          <FormInvalid :error="state.phoneError">
            <InputBlock :error="state.phoneError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  title="휴대폰번호"
                  id="layerGuidePhoneCounselingPhone"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <div :class="[$style['agree-list'], 'row-margin-contents']">
        <UiAccordion :classNames="{ wrap: $style['agree-list__list'] }">
          <UiAccordionItem
            :classNames="{ item: $style['agree-list__item'] }"
            :initialOpen="true"
          >
            <div :class="$style['agree-list__head']">
              <CheckBox
                id="layerGuidePhoneCounselingAgree001"
                :classNames="{
                  wrap: $style['agree-list__checkbox'],
                }"
                theme="tertiary"
              >
                <CheckBoxObject />
                <CheckBoxLabelText> 개인정보 수집·이용 동의 </CheckBoxLabelText>
              </CheckBox>
              <div :class="$style['agree-list__right']">
                <UiAccordionOpener
                  :classNames="{
                    button: $style['agree-list__opener'],
                  }"
                />
              </div>
            </div>

            <UiAccordionLayer>
              <div :class="$style['agree-list__detail']">
                <ol
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--normal-margin'],
                  ]"
                >
                  <li
                    :class="[$style['basic-list__item'], 'font-weight-medium']"
                  >
                    <div :class="$style['basic-list__symbol']">1.</div>
                    <div :class="$style['basic-list__content']">
                      <div>개인정보 수집 및 이용목적</div>
                      <div class="font-weight-light row-margin-small">
                        고객상담 접수 및 회신
                      </div>
                    </div>
                  </li>
                  <li
                    :class="[$style['basic-list__item'], 'font-weight-medium']"
                  >
                    <div :class="$style['basic-list__symbol']">2.</div>
                    <div :class="$style['basic-list__content']">
                      <div>수집하는 개인정보 항목</div>
                      <div class="font-weight-light row-margin-small">
                        연락처
                      </div>
                    </div>
                  </li>
                  <li
                    :class="[$style['basic-list__item'], 'font-weight-medium']"
                  >
                    <div :class="$style['basic-list__symbol']">3.</div>
                    <div :class="$style['basic-list__content']">
                      <div>보유 및 이용기간</div>
                      <div class="font-weight-light row-margin-small">
                        수집·이용 동의일로부터 개인(신용)정보의 수집·이용 목적을
                        달성할 때까지
                      </div>
                    </div>
                  </li>
                </ol>
                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--normal-margin'],
                    'row-margin-item-regular',
                  ]"
                >
                  <li
                    :class="[$style['basic-list__item'], 'color-gray-tertiary']"
                  >
                    <div :class="$style['basic-list__symbol']">※</div>
                    <div :class="$style['basic-list__content']">
                      단, 수집이용 목적 달성 이후에는 금융사고 조사, 분쟁해결,
                      민원처리, 법령상 의무이행 및 당사의
                      리스크관리(통계)업무만을 위하여 보유 및 이용됩니다.
                    </div>
                  </li>
                </ul>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </div>

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
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/guide/LayerGuidePhoneCounseling.scss';
</style>
