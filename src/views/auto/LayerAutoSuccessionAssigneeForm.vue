<script>
// AF_M07_l009 / AF_M07_l010
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
    StepProgress,
    NavTab,
    NavTabButton,
    StickyBar,
    UiTabPanel,
    UiTab,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    BasicSelect,
    SecurityInput,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicHr,
  },
  setup() {
    const layer = ref(null);

    const state = reactive({
      nameError001: false,
      idNumberError001: false,
      phoneError001: false,
      nameError002: false,
      idNumberError002: false,
      phoneError002: false,
      buisnessNameError001: false,
      buisnessLicenseError001: false,
      buisnessNameError002: false,
      nameError003: false,
      businessNumberError001: false,
      buisnessLicenseError002: false,
      suretyError: false,
      relationError: false,
      nameError004: false,
      idNumberError003: false,
      phoneError003: false,
      nameError005: false,
      birthDateError001: false,
      phoneError004: false,
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
        <StepProgress :total="4" :current="2" />
      </template>

      <PageTextGroup>
        <PageMainText>
          양수인(승계후이용자) 정보를<br />
          <strong>입력해주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <UiTab>
        <StickyBar>
          <NavTab :useUiTab="true" :auto="true">
            <NavTabButton link="layerAutoSuccessionAssigneeFormTab001_001"
              >개인</NavTabButton
            >
            <NavTabButton link="layerAutoSuccessionAssigneeFormTab001_002"
              >개인사업자</NavTabButton
            >
            <NavTabButton link="layerAutoSuccessionAssigneeFormTab001_003"
              >법인사업자</NavTabButton
            >
          </NavTab>
        </StickyBar>

        <!-- Tab : 개인 -->
        <UiTabPanel name="layerAutoSuccessionAssigneeFormTab001_001">
          <FormList>
            <FormListItem
              titleText="이름"
              target="#layerAutoSuccessionAssigneeFormName001"
            >
              <FormInvalid :error="state.nameError001">
                <InputBlock :error="state.nameError001">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="이름"
                      id="layerAutoSuccessionAssigneeFormName001"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="주민등록번호"
              target="#layerAutoSuccessionAssigneeFormIdNumber001"
            >
              <FormInvalid :error="state.idNumberError001">
                <InputBlock :error="state.idNumberError001">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="주민등록번호 앞 6자리"
                      id="layerAutoSuccessionAssigneeFormIdNumber001"
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
              target="#layerAutoSuccessionAssigneeFormPhone001"
            >
              <FormInvalid :error="state.phoneError001">
                <InputBlock :error="state.phoneError001">
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
                      buttonId="layerAutoSuccessionAssigneeFormPhone001"
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
        <UiTabPanel name="layerAutoSuccessionAssigneeFormTab001_002">
          <FormList>
            <FormListItem
              titleText="이름"
              target="#layerAutoSuccessionAssigneeFormName002"
            >
              <FormInvalid :error="state.nameError002">
                <InputBlock :error="state.nameError002">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="이름"
                      id="layerAutoSuccessionAssigneeFormName002"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="주민등록번호"
              target="#layerAutoSuccessionAssigneeFormIdNumber002"
            >
              <FormInvalid :error="state.idNumberError002">
                <InputBlock :error="state.idNumberError002">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="주민등록번호 앞 6자리"
                      id="layerAutoSuccessionAssigneeFormIdNumber002"
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
              target="#layerAutoSuccessionAssigneeFormPhone002"
            >
              <FormInvalid :error="state.phoneError002">
                <InputBlock :error="state.phoneError002">
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
                      buttonId="layerAutoSuccessionAssigneeFormPhone002"
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
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="사업자명"
              target="#layerAutoSuccessionAssigneeFormBuisnessName001"
            >
              <FormInvalid :error="state.buisnessNameError001">
                <InputBlock :error="state.buisnessNameError001">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="사업자명"
                      id="layerAutoSuccessionAssigneeFormBuisnessName001"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="사업자등록번호"
              target="#layerAutoSuccessionAssigneeFormBuisnessLicense001"
            >
              <FormInvalid :error="state.buisnessLicenseError001">
                <InputBlock :error="state.buisnessLicenseError001">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="사업자등록번호"
                      id="layerAutoSuccessionAssigneeFormBuisnessLicense001"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </UiTabPanel>
        <!-- // Tab : 개인사업자 -->

        <!-- Tab : 법인사업자 -->
        <UiTabPanel name="layerAutoSuccessionAssigneeFormTab001_003">
          <FormList>
            <FormListItem
              titleText="법인명"
              target="#layerAutoSuccessionAssigneeFormBusinessName002"
            >
              <FormInvalid :error="state.buisnessNameError002">
                <InputBlock :error="state.buisnessNameError002">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      ref="name"
                      title="법인명"
                      id="layerAutoSuccessionAssigneeFormBusinessName002"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="대표자명"
              target="#layerAutoSuccessionAssigneeFormName003"
            >
              <FormInvalid :error="state.nameError003">
                <InputBlock :error="state.nameError003">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      ref="name"
                      title="대표자명"
                      id="layerAutoSuccessionAssigneeFormName003"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="법인번호"
              target="#layerAutoSuccessionAssigneeFormBusinessNumber001"
            >
              <FormInvalid :error="state.businessNumberError001">
                <InputBlock :error="state.businessNumberError001">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      ref="number01"
                      title="법인번호 앞 6자리"
                      id="layerAutoSuccessionAssigneeFormBusinessNumber001"
                    />
                  </InputBlockCell>
                  <InputBlockCell type="sub">-</InputBlockCell>
                  <InputBlockCell :flexible="true">
                    <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                    <SecurityInput
                      title="법인번호 뒤 7자리"
                      :dot="[true, true, true, false, false, false, false]"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="사업자번호"
              target="#layerAutoSuccessionAssigneeFormBuisnessLicense002"
            >
              <FormInvalid :error="state.buisnessLicenseError002">
                <InputBlock :error="state.buisnessLicenseError002">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="사업자번호"
                      id="layerAutoSuccessionAssigneeFormBuisnessLicense002"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem titleText="연대보증인 여부" :forceFocus="true">
              <FormInvalid :error="state.suretyError">
                <BoxCheckList>
                  <BoxCheckListItem>
                    <BoxCheck
                      :minSide="true"
                      name="layerAutoSuccessionAssigneeFormSurety"
                      id="layerAutoSuccessionAssigneeFormSurety001"
                    >
                      <BoxCheckLabel>개인</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                  <BoxCheckListItem>
                    <BoxCheck
                      :minSide="true"
                      name="layerAutoSuccessionAssigneeFormSurety"
                      id="layerAutoSuccessionAssigneeFormSurety002"
                      :defaultChecked="true"
                    >
                      <BoxCheckLabel>없음</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                </BoxCheckList>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <!-- Case : '연대보증인 여부' 항목 '개인' 선택시 노출 -->
            <FormListItem
              titleText="계약자와의 관계"
              target="#layerAutoSuccessionAssigneeFormRelationButton"
              :selectOnly="true"
            >
              <FormInvalid :error="state.relationError">
                <InputBlock :error="state.relationError">
                  <InputBlockCell :flexible="true">
                    <BasicSelect
                      :option="[
                        {
                          value: '1',
                          text: '최대주주',
                        },
                        {
                          value: '2',
                          text: '대주주',
                        },
                        {
                          value: '3',
                          text: '대표이사',
                        },
                        {
                          value: '4',
                          text: '무한책임사원',
                        },
                      ]"
                      buttonTitle="계약자와의 관계 선택하기"
                      layerTitle="계약자와의 관계를 선택해 주세요."
                      id="layerAutoSuccessionAssigneeFormRelation"
                      buttonId="layerAutoSuccessionAssigneeFormRelationButton"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="이름"
              target="#layerAutoSuccessionAssigneeFormName004"
            >
              <FormInvalid :error="state.nameError004">
                <InputBlock :error="state.nameError004">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="이름"
                      id="layerAutoSuccessionAssigneeFormName004"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="주민등록번호"
              target="#layerAutoSuccessionAssigneeFormIdNumber003"
            >
              <FormInvalid :error="state.idNumberError003">
                <InputBlock :error="state.idNumberError003">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="주민등록번호 앞 6자리"
                      id="layerAutoSuccessionAssigneeFormIdNumber003"
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
              target="#layerAutoSuccessionAssigneeFormPhone003"
            >
              <FormInvalid :error="state.phoneError003">
                <InputBlock :error="state.phoneError003">
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
                      buttonId="layerAutoSuccessionAssigneeFormPhone003"
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
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
            <!-- // Case : '연대보증인 여부' 항목 '개인' 선택시 노출 -->
          </FormList>
        </UiTabPanel>
        <!-- // Tab : 법인사업자 -->
      </UiTab>

      <BasicHr className="row-margin-container-medium" />

      <section>
        <PageTextGroup>
          <PageMainText>
            <span class="color-blue">신청인 정보</span>를<br />
            <strong>입력해주세요</strong>
          </PageMainText>
          <PageSubText>(심사결과 안내 및 승계상담 담당자 정보)</PageSubText>
        </PageTextGroup>

        <div class="row-margin-contents row-margin-top-none">
          <CheckBox
            id="layerAutoSuccessionAssigneeFormCheckBox001"
            theme="tertiary"
          >
            <CheckBoxObject />
            <CheckBoxLabelText>신청인 정보와 동일</CheckBoxLabelText>
          </CheckBox>
        </div>

        <FormList>
          <FormListItem
            titleText="이름"
            target="#layerAutoSuccessionAssigneeFormName005"
          >
            <FormInvalid :error="state.nameError005">
              <InputBlock :error="state.nameError005">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="이름"
                    id="layerAutoSuccessionAssigneeFormName005"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="생년월일"
            titleOptionalText="(6자리)"
            target="#layerAutoSuccessionAssigneeFormBirthDate001"
          >
            <FormInvalid :error="state.birthDateError001">
              <InputBlock :error="state.birthDateError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="생년월일"
                    id="layerAutoSuccessionAssigneeFormBirthDate001"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="휴대폰번호"
            target="#layerAutoSuccessionAssigneeFormPhone004"
          >
            <FormInvalid :error="state.phoneError004">
              <InputBlock :error="state.phoneError004">
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
                    buttonId="layerAutoSuccessionAssigneeFormPhone004"
                    :classNames="{
                      wrap: 'input-width-telecom',
                    }"
                  />
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicInput type="number" pattern="\d*" title="휴대폰번호" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton theme="secondary">다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
