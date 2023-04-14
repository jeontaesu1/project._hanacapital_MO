<script>
// AF_M07_l008
// AF_M07_l009
// AF_M07_l010
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
    NavTab,
    NavTabButton,
    StickyBar,
    UiTabPanel,
    UiTab,
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
      addressError001_001: false,
      addressError001_002: false,
      addressError001_003: false,
      addressError001_004: false,
      addressDetailError001: false,
      addressError002_001: false,
      addressError002_002: false,
      addressError002_003: false,
      addressError002_004: false,
      addressError002_005: false,
      addressDetailError002: false,
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
        <div :class="$style['tab__inner']">
          <StickyBar>
            <NavTab :useUiTab="true" :auto="true">
              <NavTabButton link="LayerAutoSuccessionAssigneeFormTab001_001"
                >개인</NavTabButton
              >
              <NavTabButton link="LayerAutoSuccessionAssigneeFormTab001_002"
                >개인사업자</NavTabButton
              >
              <NavTabButton link="LayerAutoSuccessionAssigneeFormTab001_003"
                >법인사업자</NavTabButton
              >
            </NavTab>
          </StickyBar>
        </div>

        <UiTabPanel name="LayerAutoSuccessionAssigneeFormTab001_001">
          <FormList>
            <FormListItem titleText="이름" target="#layerIdShootConfirmName">
              <FormInvalid :error="state.nameError">
                <InputBlock :error="state.nameError">
                  <InputBlockCell :flexible="true">
                    <BasicInput title="이름" id="layerIdShootConfirmName" />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="주민등록번호"
              target="#layerIdShootConfirmIdNumber01"
            >
              <FormInvalid :error="state.idNumberError">
                <InputBlock :error="state.idNumberError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="주민등록번호 앞 6자리"
                      id="layerIdShootConfirmIdNumber01"
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
          </FormList>

          <BasicHr className="row-margin-container-medium" />

          <PageTextGroup>
            <PageMainText>
              <span class="color-blue">신청인 정보</span>를<br />
              <strong>입력해주세요</strong>
            </PageMainText>
          </PageTextGroup>

          <FormList>
            <FormListItem
              titleText="리/동"
              target="#layerLMBlogLoanCounselingApartmentCertifiedArea002"
            >
              <FormInvalid :error="state.addressError001_003">
                <InputBlock :error="state.addressError001_003">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="리/동"
                      id="layerLMBlogLoanCounselingApartmentCertifiedArea002"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem titleText="입력선택" :forceFocus="true">
              <FormInvalid :error="state.addressError001_004">
                <BoxCheckList>
                  <BoxCheckListItem>
                    <BoxCheck
                      :minSide="true"
                      name="layerLMBlogLoanCounselingApartmentCertifiedAddress"
                      id="layerLMBlogLoanCounselingApartmentCertifiedAddress1"
                      :defaultChecked="true"
                    >
                      <BoxCheckLabel>지번</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                  <BoxCheckListItem>
                    <BoxCheck
                      :minSide="true"
                      name="layerLMBlogLoanCounselingApartmentCertifiedAddress"
                      id="layerLMBlogLoanCounselingApartmentCertifiedAddress2"
                    >
                      <BoxCheckLabel>건물명칭</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                </BoxCheckList>

                <InputBlock
                  :error="state.addressError001_004"
                  :classNames="{ wrap: 'row-margin-item-group' }"
                >
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="지번/건물명칭"
                      id="layerLMBlogLoanCounselingApartmentCertifiedAddress"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
              <FormInvalid
                :error="state.addressDetailError001"
                :classNames="{ wrap: 'row-margin-contents' }"
              >
                <BoxCheckList>
                  <BoxCheckListItem>
                    <BoxCheck
                      :minSide="true"
                      name="layerLMBlogLoanCounselingApartmentCertifiedAddressDetail1"
                      id="layerLMBlogLoanCounselingApartmentCertifiedAddressDetail1_1"
                      :defaultChecked="true"
                    >
                      <BoxCheckLabel>동+호</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                  <BoxCheckListItem>
                    <BoxCheck
                      :minSide="true"
                      name="layerLMBlogLoanCounselingApartmentCertifiedAddressDetail1"
                      id="layerLMBlogLoanCounselingApartmentCertifiedAddressDetail1_2"
                    >
                      <BoxCheckLabel>동</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                  <BoxCheckListItem>
                    <BoxCheck
                      :minSide="true"
                      name="layerLMBlogLoanCounselingApartmentCertifiedAddressDetail1"
                      id="layerLMBlogLoanCounselingApartmentCertifiedAddressDetail1_3"
                    >
                      <BoxCheckLabel>호</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                </BoxCheckList>

                <!-- Case : '동 + 호' 선택 시  -->
                <InputBlock
                  :error="state.addressDetailError001"
                  :classNames="{ wrap: 'row-margin-item-group' }"
                >
                  <InputBlockCell :flexible="true">
                    <BasicInput align="right" :useDelete="false" title="동" />
                  </InputBlockCell>
                  <InputBlockCell>
                    <div class="text-body-3">동</div>
                  </InputBlockCell>
                  <InputBlockCell :flexible="true">
                    <BasicInput align="right" :useDelete="false" title="호" />
                  </InputBlockCell>
                  <InputBlockCell>
                    <div class="text-body-3">호</div>
                  </InputBlockCell>
                </InputBlock>
                <!-- // Case : '동 + 호' 선택 시  -->

                <!-- Case : '동' 선택 시  -->
                <InputBlock
                  :error="state.addressDetailError001"
                  :classNames="{ wrap: 'row-margin-item-group' }"
                >
                  <InputBlockCell :flexible="true">
                    <BasicInput align="right" :useDelete="false" title="동" />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3">동</div>
                  </template>
                </InputBlock>
                <!-- // Case : '동' 선택 시  -->

                <!-- Case : '호' 선택 시  -->
                <InputBlock
                  :error="state.addressDetailError001"
                  :classNames="{ wrap: 'row-margin-item-group' }"
                >
                  <InputBlockCell :flexible="true">
                    <BasicInput align="right" :useDelete="false" title="호" />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3">호</div>
                  </template>
                </InputBlock>
                <!-- // Case : '호' 선택 시  -->
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </UiTabPanel>

        <UiTabPanel name="LayerAutoSuccessionAssigneeFormTab001_002">
          //tab2
        </UiTabPanel>
        <UiTabPanel name="LayerAutoSuccessionAssigneeFormTab001_003">
          tab3
        </UiTabPanel>
      </UiTab>

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

<!-- <style lang="scss" module>
@import '@/assets/scss/views/personalLoan/LayerPersonalLoanEHanaLink.scss';
</style> -->
