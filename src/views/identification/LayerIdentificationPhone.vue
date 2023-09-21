<script>
// Common_M00_l002
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
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import PartInput from '@/components/ui/form/PartInput.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

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
    FormHelpText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicSelect,
    SecurityInput,
    PartInput,
    TextButton,
  },
  setup() {
    const state = reactive({
      nameError: false,
      idNumberError: false,
      phoneError: false,
      codeError: false,
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
          이름을<br />
          입력해 주세요
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem
          titleText="인증번호"
          titleOptionalText="(6자리)"
          target="#layerIdentificationPhoneCode"
          :forceFocus="true"
        >
          <FormInvalid :error="state.codeError">
            <InputBlock :error="state.codeError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="인증번호 (6자리)"
                  id="layerIdentificationPhoneCode"
                  placeholder="인증번호를 입력해 주세요"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div :class="$style['input-timer']">00:00</div>
              </template>
              <template v-slot:right>
                <BasicButton size="mini" theme="quaternary">
                  재요청
                </BasicButton>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="휴대폰번호"
          target="#layerIdentificationPhonePhoneButton01"
        >
          <FormInvalid :error="state.phoneError">
            <InputBlock :error="state.phoneError">
              <InputBlockCell>
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: 'SKT',
                    },
                    {
                      value: '2',
                      text: 'KT',
                    },
                    {
                      value: '3',
                      text: 'LG U+',
                    },
                    {
                      value: '4',
                      text: '알뜰폰 SKT',
                    },
                    {
                      value: '5',
                      text: '알뜰폰 KT',
                    },
                    {
                      value: '6',
                      text: '알뜰폰 LG +',
                    },
                  ]"
                  buttonTitle="통신사 선택하기"
                  layerTitle="통신사를 선택해 주세요"
                  id="layerIdentificationPhonePhone01"
                  buttonId="layerIdentificationPhonePhoneButton01"
                  placeholder="선택"
                  :classNames="{
                    wrap: 'input-width-telecom',
                  }"
                />
              </InputBlockCell>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="휴대폰번호"
                  id="layerIdentificationPhonePhone02"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>본인명의의 휴대폰만 가능합니다.</FormHelpText>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="생년월일"
          titleOptionalText="(6자리)"
          target="#layerIdentificationPhoneIdNumber01"
        >
          <FormInvalid :error="state.idNumberError">
            <InputBlock :error="state.idNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="layerIdentificationPhoneIdNumber01"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <PartInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 뒤 7자리 중 첫번째자리"
                  id="layerIdentificationPhoneIdNumber02"
                  :afterDot="6"
                  placeholder="◌"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="주민등록번호"
          target="#layerIdentificationPhoneIdNumber03"
        >
          <FormInvalid :error="state.idNumberError">
            <InputBlock :error="state.idNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="layerIdentificationPhoneIdNumber03"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                <SecurityInput
                  title="주민등록번호 뒤 7자리"
                  :dot="[true, true, true, false, false, false, false]"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="이름" target="#layerIdentificationPhoneName">
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput title="이름" id="layerIdentificationPhoneName" />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton size="mini">다음</BasicButton>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <template v-slot:foot>
        <div class="inline-wrap align-center row-margin-contents">
          <TextButton
            :classNames="{ wrap: 'text-body-4 color-gray' }"
            :underline="true"
          >
            다른 방법으로 인증하기
          </TextButton>
        </div>

        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/identification/LayerIdentificationPhone.scss';
</style>
