<script>
// Common_M00_l008
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import RoundTab from '@/components/ui/tab/RoundTab.vue';
import RoundTabButton from '@/components/ui/tab/RoundTabButton.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

import ImgIdCard from '@/assets/images/id-shoot/img-idcard.svg?component';
import ImgLicense from '@/assets/images/id-shoot/img-license.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    StepProgress,
    UiTab,
    UiTabPanel,
    RoundTab,
    RoundTabButton,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    SecurityInput,
    BasicSelect,

    ImgIdCard,
    ImgLicense,
  },
  setup() {
    const state = reactive({
      idNumberNameError: false,
      idNumberError: false,
      idNumberDateError: false,
      licenseNameError: false,
      licenseIdNumberError: false,
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
          신분증 정보를<br />
          <strong>입력해 주세요</strong><br />
        </PageMainText>
      </PageTextGroup>

      <UiTab>
        <RoundTab :useUiTab="true">
          <RoundTabButton link="layerIdShootFormTab_001">
            주민등록증
          </RoundTabButton>
          <RoundTabButton link="layerIdShootFormTab_002">
            운전면허증
          </RoundTabButton>
        </RoundTab>

        <!-- Tab : 주민등록증 -->
        <UiTabPanel name="layerIdShootFormTab_001">
          <div :class="$style['id-card']">
            <div :class="$style['id-card__inner']">
              <ImgIdCard />
            </div>
          </div>

          <ButtonList :classNames="{ wrap: 'row-margin-contents-group' }">
            <ButtonListItem>
              <BasicButton :line="true">신분증 촬영</BasicButton>
            </ButtonListItem>
          </ButtonList>

          <FormList>
            <FormListItem titleText="이름" target="#layerIdShootFormIdCardName">
              <FormInvalid :error="state.idNumberNameError">
                <InputBlock :error="state.idNumberNameError">
                  <InputBlockCell :flexible="true">
                    <BasicInput title="이름" id="layerIdShootFormIdCardName" />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="주민등록번호"
              target="#layerIdShootFormIdCardNumber"
            >
              <FormInvalid :error="state.idNumberError">
                <InputBlock :error="state.idNumberError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="주민등록번호 앞 6자리"
                      id="layerIdShootFormIdCardNumber"
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
              titleText="발급일자"
              target="#layerIdShootFormIdCardDate"
            >
              <FormInvalid :error="state.idNumberDateError">
                <InputBlock :error="state.idNumberDateError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="발급일자"
                      id="layerIdShootFormIdCardDate"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </UiTabPanel>
        <!-- //Tab : 주민등록증 -->

        <!-- Tab : 운전면허증 -->
        <UiTabPanel name="layerIdShootFormTab_002">
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
            <FormListItem
              titleText="이름"
              target="#layerIdShootFormLicenseName"
            >
              <FormInvalid :error="state.licenseNameError">
                <InputBlock :error="state.licenseNameError">
                  <InputBlockCell :flexible="true">
                    <BasicInput title="이름" id="layerIdShootFormLicenseName" />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="주민등록번호"
              target="#layerIdShootFormLicenseIdCardNumber"
            >
              <FormInvalid :error="state.licenseIdNumberError">
                <InputBlock :error="state.licenseIdNumberError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="주민등록번호 앞 6자리"
                      id="layerIdShootFormLicenseIdCardNumber"
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
              target="#layerIdShootFormLicenseNumber"
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
                      buttonId="layerIdShootFormLicenseNumber"
                      :classNames="{
                        wrap: 'input-width-driving-license',
                      }"
                    />
                  </InputBlockCell>
                  <InputBlockCell :flexible="true" margin="regular">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      :useDelete="false"
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
                      :useDelete="false"
                      title="면허발급번호 두번째 6자리"
                    />
                  </InputBlockCell>
                  <InputBlockCell type="sub">-</InputBlockCell>
                  <InputBlockCell :flexible="true" margin="regular">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      :useDelete="false"
                      title="면허발급번호 뒤 2자리"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </UiTabPanel>
        <!-- //Tab : 운전면허증 -->
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

<style lang="scss" module>
@import '@/assets/scss/views/idShoot/LayerIdShootForm.scss';
</style>
