<script>
// Common_M00_l011
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

import ImgLicense from '@/assets/images/id-shoot/img-license.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    StepProgress,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    SecurityInput,
    BasicSelect,

    ImgLicense,
  },
  setup() {
    const state = reactive({
      nameError: false,
      idNumberError: false,
      licenseError: false,
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
        <StepProgress :total="3" :current="3" />
      </template>

      <PageTextGroup>
        <PageMainText>
          운전면허증 정보를<br />
          입력해 주세요
        </PageMainText>
        <PageSubText>
          운전면허증 정보를 확인하신 후 수정하거나<br />
          재촬영 해주세요.
        </PageSubText>
      </PageTextGroup>

      <div :class="$style['id-card']">
        <div :class="$style['id-card__inner']">
          <ImgLicense />
        </div>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-group' }">
        <ButtonListItem>
          <BasicButton :line="true">신분증 촬영</BasicButton>
        </ButtonListItem>
      </ButtonList>

      <FormList>
        <FormListItem titleText="이름" target="#layerIdShootDrivingFormName">
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput title="이름" id="layerIdShootDrivingFormName" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="주민등록번호"
          target="#layerIdShootDrivingFormIdCardNumber"
        >
          <FormInvalid :error="state.idNumberError">
            <InputBlock :error="state.idNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="layerIdShootDrivingFormIdCardNumber"
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

        <FormListItem
          titleText="면허발급번호"
          target="#layerIdShootDrivingFormNumber"
        >
          <FormInvalid :error="state.licenseError">
            <InputBlock :error="state.licenseError">
              <InputBlockCell>
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '서울 (11)',
                    },
                    {
                      value: '2',
                      text: '부산 (12)',
                    },
                    {
                      value: '3',
                      text: '경기 (13)',
                    },
                    {
                      value: '4',
                      text: '강원 (14)',
                    },
                    {
                      value: '5',
                      text: '충북 (15)',
                    },
                    {
                      value: '6',
                      text: '충남 (16)',
                    },
                    {
                      value: '7',
                      text: '전북 (17)',
                    },
                    {
                      value: '8',
                      text: '경남 (18)',
                    },
                    {
                      value: '9',
                      text: '제주 (19)',
                    },
                    {
                      value: '10',
                      text: '대구 (20)',
                    },
                    {
                      value: '11',
                      text: '인천 (21)',
                    },
                    {
                      value: '12',
                      text: '광주 (22)',
                    },
                    {
                      value: '13',
                      text: '대전 (23)',
                    },
                    {
                      value: '14',
                      text: '울산 (24)',
                    },
                  ]"
                  buttonTitle="지역번호 선택하기"
                  layerTitle="면허발급번호를 선택해 주세요"
                  buttonId="layerIdShootDrivingFormNumber"
                  :classNames="{
                    wrap: 'input-width-driving-license',
                  }"
                />
              </InputBlockCell>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="면허발급번호 앞 2자리"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell
                :classNames="{
                  cell: 'flex-2',
                }"
                margin="regular"
              >
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="면허발급번호 두번째 6자리"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="면허발급번호 뒤 2자리"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

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

<style lang="scss" module>
@import '@/assets/scss/views/idShoot/LayerIdShootDrivingForm.scss';
</style>
