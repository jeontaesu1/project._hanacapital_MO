<script>
// BF_M05_l004
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    SecurityInput,
    BasicSelect,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const layer = ref(null);

    const state = reactive({
      memberTypeError: false,
      nameError: false,
      birthDateError: false,
      buisnessNameError: false,
      buisnessLicenseError: false,
      residenceTypeError: false,
      ownershipError: false,
      businessError: false,
    });

    return {
      layer,
      state,
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
          <strong>손님의 정보를</strong><br />
          입력해 주세요
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem
          titleText="회원유형"
          target="#layerBusinessEquipmentLeaseEstimateFormMemberType"
          :disabled="true"
        >
          <FormInvalid :error="state.memberTypeError">
            <InputBlock :error="state.memberTypeError" :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="회원유형"
                  id="layerBusinessEquipmentLeaseEstimateFormMemberType"
                  defaultValue="개인사업자"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="이름"
          target="#layerBusinessEquipmentLeaseEstimateFormName"
          :disabled="true"
        >
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError" :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이름"
                  id="layerBusinessEquipmentLeaseEstimateFormName"
                  defaultValue="김하나"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="주민등록번호"
          target="#layerBusinessEquipmentLeaseEstimateFormBirthDate"
          :disabled="true"
        >
          <FormInvalid :error="state.birthDateError">
            <InputBlock :error="state.birthDateError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="layerBusinessEquipmentLeaseEstimateFormBirthDate"
                  :disabled="true"
                  defaultValue="960123"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                <SecurityInput
                  title="주민등록번호 뒤 7자리"
                  :dot="[true, true, true, true, true, true, true]"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="사업자명"
          target="#layerBusinessEquipmentLeaseEstimateFormBuisnessName"
        >
          <FormInvalid :error="state.buisnessNameError">
            <InputBlock :error="state.buisnessNameError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="사업자명"
                  id="layerBusinessEquipmentLeaseEstimateFormBuisnessName"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="사업자등록번호"
          target="#layerBusinessEquipmentLeaseEstimateFormBuisnessLicense"
        >
          <FormInvalid :error="state.buisnessLicenseError">
            <InputBlock :error="state.buisnessLicenseError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="사업자등록번호"
                  id="layerBusinessEquipmentLeaseEstimateFormBuisnessLicense"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="거주지 유형"
          target="#layerBusinessEquipmentLeaseEstimateFormResidenceTypeButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.residenceTypeError">
            <InputBlock :error="state.residenceTypeError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '아파트',
                    },
                    {
                      value: '2',
                      text: '오피스텔',
                    },
                    {
                      value: '3',
                      text: '단독주택',
                    },
                    {
                      value: '4',
                      text: '빌라/연립',
                    },
                    {
                      value: '5',
                      text: '다가구/다세대',
                    },
                    {
                      value: '6',
                      text: '사택',
                    },
                    {
                      value: '7',
                      text: '기술사',
                    },
                    {
                      value: '8',
                      text: '분양아파트',
                    },
                    {
                      value: '9',
                      text: '기타',
                    },
                    {
                      value: '10',
                      text: '무응답',
                    },
                  ]"
                  buttonTitle="거주지 유형을 선택하기"
                  layerTitle="거주지 유형을 선택하세요"
                  id="layerBusinessEquipmentLeaseEstimateFormResidenceType"
                  buttonId="layerBusinessEquipmentLeaseEstimateFormResidenceTypeButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="거주지 소유여부"
          target="#layerBusinessEquipmentLeaseEstimateFormOwnershipButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.ownershipError">
            <InputBlock :error="state.ownershipError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '본인소유',
                    },
                    {
                      value: '2',
                      text: '배우자소유',
                    },
                    {
                      value: '3',
                      text: '가족소유',
                    },
                    {
                      value: '4',
                      text: '공동소유',
                    },
                    {
                      value: '5',
                      text: '전/월세',
                    },
                    {
                      value: '6',
                      text: '기타',
                    },
                    {
                      value: '7',
                      text: '무응답',
                    },
                  ]"
                  buttonTitle="거주지 소유여부를 선택하기"
                  layerTitle="거주지 소유여부를 선택하세요"
                  id="layerBusinessEquipmentLeaseEstimateFormOwnership"
                  buttonId="layerBusinessEquipmentLeaseEstimateFormOwnershipButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="근속/사업년수"
          target="#layerBusinessEquipmentLeaseEstimateFormBusinessButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.businessError">
            <InputBlock :error="state.businessError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '6개월 이하',
                    },
                    {
                      value: '2',
                      text: '1년 이하',
                    },
                    {
                      value: '3',
                      text: '2년 이하',
                    },
                    {
                      value: '4',
                      text: '3년 이하',
                    },
                    {
                      value: '5',
                      text: '4년 이하',
                    },
                    {
                      value: '6',
                      text: '6년 이하',
                    },
                    {
                      value: '7',
                      text: '7년 이하',
                    },
                    {
                      value: '8',
                      text: '8년 이하',
                    },
                    {
                      value: '9',
                      text: '9년 이하',
                    },
                    {
                      value: '10',
                      text: '10년 이하',
                    },
                    {
                      value: '11',
                      text: '10년 초과',
                    },
                    {
                      value: '12',
                      text: '무응답',
                    },
                  ]"
                  buttonTitle="근속/사업년수를 선택하기"
                  layerTitle="근속/사업년수를 선택하세요"
                  id="layerBusinessEquipmentLeaseEstimateFormBusiness"
                  buttonId="layerBusinessEquipmentLeaseEstimateFormBusinessButton"
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
