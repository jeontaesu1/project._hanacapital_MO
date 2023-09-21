<script>
// PF_M10_l007
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
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
    NavTab,
    NavTabButton,
    StickyBar,
    UiTabPanel,
    UiTab,
    FormList,
    FormListItem,
    FormHelpText,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    SecurityInput,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const state = reactive({
      nameError001: false,
      nameError002: false,
      idNumberError001: false,
      idNumberError002: false,
      phoneError001: false,
      phoneError002: false,
      buisnessNameError: false,
      buisnessLicenseError: false,
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
          <strong>
            고객 정보를<br />
            입력해 주세요
          </strong>
        </PageMainText>
      </PageTextGroup>

      <UiTab>
        <StickyBar>
          <NavTab :useUiTab="true">
            <NavTabButton
              link="layerMyLoanProgressInstallmentConsultationCustomerInfoTab001"
            >
              개인
            </NavTabButton>
            <NavTabButton
              link="layerMyLoanProgressInstallmentConsultationCustomerInfoTab002"
            >
              개인사업자
            </NavTabButton>
          </NavTab>
        </StickyBar>

        <!-- Tab : 개인 -->
        <UiTabPanel
          name="layerMyLoanProgressInstallmentConsultationCustomerInfoTab001"
        >
          <FormList>
            <FormListItem
              titleText="이름"
              target="#layerMyLoanProgressInstallmentConsultationCustomerInfoName001"
            >
              <FormInvalid :error="state.nameError001">
                <InputBlock :error="state.nameError001">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="이름"
                      id="layerMyLoanProgressInstallmentConsultationCustomerInfoName001"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="주민등록번호"
              target="#layerMyLoanProgressInstallmentConsultationCustomerInfoIdNumber001"
            >
              <FormInvalid :error="state.idNumberError001">
                <InputBlock :error="state.idNumberError001">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="주민등록번호 앞 6자리"
                      id="layerMyLoanProgressInstallmentConsultationCustomerInfoIdNumber001"
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
              titleText="휴대폰번호"
              target="#layerMyLoanProgressInstallmentConsultationCustomerInfoPhone001"
            >
              <FormInvalid :error="state.phoneError001">
                <InputBlock :error="state.phoneError001">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      pattern="\d*"
                      title="휴대폰번호"
                      id="layerMyLoanProgressInstallmentConsultationCustomerInfoPhone001"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </UiTabPanel>
        <!-- // Tab : 개인 -->

        <!-- Tab : 개인사업자 -->
        <UiTabPanel
          name="layerMyLoanProgressInstallmentConsultationCustomerInfoTab002"
        >
          <FormList>
            <FormListItem
              titleText="이름"
              target="#layerMyLoanProgressInstallmentConsultationCustomerInfoName002"
            >
              <FormInvalid :error="state.nameError002">
                <InputBlock :error="state.nameError002">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="이름"
                      id="layerMyLoanProgressInstallmentConsultationCustomerInfoName002"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="주민등록번호"
              target="#layerMyLoanProgressInstallmentConsultationCustomerInfoIdNumber002"
            >
              <FormInvalid :error="state.idNumberError002">
                <InputBlock :error="state.idNumberError002">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="주민등록번호 앞 6자리"
                      id="layerMyLoanProgressInstallmentConsultationCustomerInfoIdNumber002"
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
              titleText="휴대폰번호"
              target="#layerMyLoanProgressInstallmentConsultationCustomerInfoPhone002"
            >
              <FormInvalid :error="state.phoneError002">
                <InputBlock :error="state.phoneError002">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      pattern="\d*"
                      title="휴대폰번호"
                      id="layerMyLoanProgressInstallmentConsultationCustomerInfoPhone002"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="상호명"
              target="#layerMyLoanProgressInstallmentConsultationCustomerInfoBuisnessName"
            >
              <FormInvalid :error="state.buisnessNameError">
                <InputBlock :error="state.buisnessNameError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="상호명"
                      id="layerMyLoanProgressInstallmentConsultationCustomerInfoBuisnessName"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="사업자번호"
              target="#layerMyLoanProgressInstallmentConsultationCustomerInfoBuisnessLicense"
            >
              <FormInvalid :error="state.buisnessLicenseError">
                <InputBlock :error="state.buisnessLicenseError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="사업자번호"
                      id="layerMyLoanProgressInstallmentConsultationCustomerInfoBuisnessLicense"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
                <FormHelpText>‘-’ 를 제외하고 입력해주세요.</FormHelpText>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </UiTabPanel>
        <!-- // Tab : 개인사업자 -->
      </UiTab>

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
