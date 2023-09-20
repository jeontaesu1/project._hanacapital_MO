<script>
// LR_M00_l010
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    PageTextGroup,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    StickyBar,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
    BoxCheckList,
    BoxCheckListItem,
    NoticeText,
  },
  setup() {
    const layer = ref(null);

    const state = reactive({
      tab001NameError: false,
      tab001BirthDateError: false,
      tab001PhoneError: false,
      tab002BuisnessLicenseError: false,
      tab002CorporateNameError: false,
      tab002DateError: false,
      tab002NameError: false,
      tab002BirthDateError: false,
      tab002PhoneError: false,
      tab003BuisnessLicenseError: false,
      tab003BuisnessLicenseInputError: false,
      tab003CorporateNameError: false,
      tab003DateError: false,
      tab003NumberError: false,
      tab003NameError: false,
      tab003BirthDateError: false,
      tab003PhoneError: false,
      tab003CEONameError: false,
      tab003CEODateError: false,
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
          <PopupTitle>신용정보조회 동의 요청</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>
            신용정보조회 동의를 위하여<br />
            고객님께 URL을 보내드립니다<br />
            아래 정보를 입력해주세요
          </strong>
        </PageMainText>
      </PageTextGroup>

      <UiTab>
        <StickyBar>
          <NavTab :useUiTab="true" :auto="true">
            <NavTabButton
              link="layerLeaseRentEstimationSystemCreditCheckRequestTab001"
              >개인</NavTabButton
            >
            <NavTabButton
              link="layerLeaseRentEstimationSystemCreditCheckRequestTab002"
              >개인사업자</NavTabButton
            >
            <NavTabButton
              link="layerLeaseRentEstimationSystemCreditCheckRequestTab003"
              >법인사업자</NavTabButton
            >
          </NavTab>
        </StickyBar>

        <!-- Tab : 개인 -->
        <UiTabPanel
          name="layerLeaseRentEstimationSystemCreditCheckRequestTab001"
        >
          <FormList>
            <FormListItem
              titleText="성명"
              target="#layerLeaseRentEstimationSystemCreditCheckRequest001Name"
            >
              <FormInvalid :error="state.tab001NameError">
                <InputBlock :error="state.tab001NameError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="성명"
                      id="layerLeaseRentEstimationSystemCreditCheckRequest001Name"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="생년월일"
              target="#layerLeaseRentEstimationSystemCreditCheckRequest001BirthDate"
            >
              <FormInvalid :error="state.tab001BirthDateError">
                <InputBlock :error="state.tab001BirthDateError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="생년월일"
                      id="layerLeaseRentEstimationSystemCreditCheckRequest001BirthDate"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
                <FormHelpText>숫자만 입력해 주세요. (예:19900123)</FormHelpText>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="휴대폰번호"
              target="#layerLeaseRentEstimationSystemCreditCheckRequest001Phone"
            >
              <FormInvalid :error="state.tab001PhoneError">
                <InputBlock :error="state.tab001PhoneError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="휴대폰번호"
                      id="layerLeaseRentEstimationSystemCreditCheckRequest001Phone"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
                <FormHelpText>-없이 숫자만 입력해 주세요.</FormHelpText>
              </FormInvalid>
            </FormListItem>

            <FormListItem titleText="고객성별" :forceFocus="true">
              <BoxCheckList>
                <BoxCheckListItem>
                  <BoxCheck
                    name="layerLeaseRentEstimationSystemCreditCheckRequest001Sex"
                    id="layerLeaseRentEstimationSystemCreditCheckRequest001Sex001"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>남자</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    name="layerLeaseRentEstimationSystemCreditCheckRequest001Sex"
                    id="layerLeaseRentEstimationSystemCreditCheckRequest001Sex002"
                  >
                    <BoxCheckLabel>여자</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
            </FormListItem>
          </FormList>
        </UiTabPanel>
        <!-- // Tab : 개인 -->

        <!-- Tab : 개인사업자 -->
        <UiTabPanel
          name="layerLeaseRentEstimationSystemCreditCheckRequestTab002"
        >
          <NoticeText>
            취급제한 업종(경비보안업체, 여행사, 렌터카업체, 캠핑카업체,
            엔터테인먼트사, 건설업, 토목업 등 공사현장 출입차량)은 취급시
            영업점에 문의하시기 바랍니다.
          </NoticeText>

          <div class="row-margin-contents-group">
            <section class="row-margin-container-medium">
              <h3 class="text-title-2 row-margin-contents">개인사업자 정보</h3>

              <FormList>
                <FormListItem
                  titleText="사업자번호"
                  target="#layerLeaseRentEstimationSystemCreditCheckRequest002BuisnessLicense"
                >
                  <FormInvalid :error="state.tab002BuisnessLicenseError">
                    <InputBlock :error="state.tab002BuisnessLicenseError">
                      <InputBlockCell :flexible="true">
                        <!-- Case : 사업자번호 조회 후 :disabled="true" -->
                        <BasicInput
                          type="number"
                          pattern="\d*"
                          title="사업자번호"
                          id="layerLeaseRentEstimationSystemCreditCheckRequest002BuisnessLicense"
                          :disabled="false"
                        />
                        <!-- // Case : 사업자번호 조회 후 :disabled="true" -->
                      </InputBlockCell>
                      <template v-slot:right>
                        <!-- Case : 사업자번호 조회 후 비노출 -->
                        <BasicButton
                          size="mini"
                          theme="tertiary"
                          :class="$style['appoint-btn']"
                          >조회</BasicButton
                        >
                        <!-- // Case : 사업자번호 조회 후 비노출 -->

                        <!-- Case : 사업자번호 조회 후 노출 -->
                        <BasicButton
                          size="mini"
                          theme="quaternary"
                          :class="$style['appoint-btn']"
                        >
                          초기화
                        </BasicButton>
                        <!-- // Case : 사업자번호 조회 후 노출 -->
                      </template>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                    <FormHelpText>10자리 숫자만 입력해 주세요.</FormHelpText>
                  </FormInvalid>
                </FormListItem>

                <FormListItem
                  titleText="회사명"
                  target="#layerLeaseRentEstimationSystemCreditCheckRequest002CorporateName"
                >
                  <FormInvalid :error="state.tab002CorporateNameError">
                    <InputBlock :error="state.tab002CorporateNameError">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          title="회사명"
                          id="layerLeaseRentEstimationSystemCreditCheckRequest002CorporateName"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>

                <FormListItem
                  titleText="설립일자"
                  target="#layerLeaseRentEstimationSystemCreditCheckRequest002Date"
                >
                  <FormInvalid :error="state.tab002DateError">
                    <InputBlock :error="state.tab002DateError">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          type="number"
                          pattern="\d*"
                          title="설립일자"
                          id="layerLeaseRentEstimationSystemCreditCheckRequest002Date"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                    <FormHelpText
                      >숫자만 입력해 주세요. (예:19900123)</FormHelpText
                    >
                  </FormInvalid>
                </FormListItem>
              </FormList>
            </section>

            <section class="row-margin-container-medium">
              <h3 class="text-title-2 row-margin-contents">대표자 정보</h3>

              <FormList>
                <FormListItem
                  titleText="대표자 이름"
                  target="#layerLeaseRentEstimationSystemCreditCheckRequest002Name"
                >
                  <FormInvalid :error="state.tab002NameError">
                    <InputBlock :error="state.tab002NameError">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          title="대표자 이름"
                          id="layerLeaseRentEstimationSystemCreditCheckRequest002Name"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>

                <FormListItem
                  titleText="대표자 생년월일"
                  target="#layerLeaseRentEstimationSystemCreditCheckRequest002BirthDate"
                >
                  <FormInvalid :error="state.tab002BirthDateError">
                    <InputBlock :error="state.tab002BirthDateError">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          type="number"
                          pattern="\d*"
                          title="대표자 생년월일"
                          id="layerLeaseRentEstimationSystemCreditCheckRequest002BirthDate"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                    <FormHelpText
                      >숫자만 입력해 주세요. (예:19900123)</FormHelpText
                    >
                  </FormInvalid>
                </FormListItem>

                <FormListItem
                  titleText="대표자 휴대폰번호"
                  target="#layerLeaseRentEstimationSystemCreditCheckRequest002Phone"
                >
                  <FormInvalid :error="state.tab002PhoneError">
                    <InputBlock :error="state.tab002PhoneError">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          type="number"
                          pattern="\d*"
                          title="대표자 휴대폰번호"
                          id="layerLeaseRentEstimationSystemCreditCheckRequest002Phone"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                    <FormHelpText>-없이 숫자만 입력해 주세요.</FormHelpText>
                  </FormInvalid>
                </FormListItem>

                <FormListItem titleText="고객성별" :forceFocus="true">
                  <BoxCheckList>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="layerLeaseRentEstimationSystemCreditCheckRequest002Sex"
                        id="layerLeaseRentEstimationSystemCreditCheckRequest002Sex001"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>남자</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="layerLeaseRentEstimationSystemCreditCheckRequest002Sex"
                        id="layerLeaseRentEstimationSystemCreditCheckRequest002Sex002"
                      >
                        <BoxCheckLabel>여자</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                  </BoxCheckList>
                </FormListItem>
              </FormList>
            </section>
          </div>
        </UiTabPanel>
        <!-- // Tab : 개인사업자 -->

        <!-- Tab : 법인사업자 -->
        <UiTabPanel
          name="layerLeaseRentEstimationSystemCreditCheckRequestTab003"
        >
          <NoticeText>
            취급제한 업종(경비보안업체, 여행사, 렌터카업체, 캠핑카업체,
            엔터테인먼트사, 건설업, 토목업 등 공사현장 출입차량)은 취급시
            영업점에 문의하시기 바랍니다.
          </NoticeText>

          <div class="row-margin-contents-group">
            <section class="row-margin-container-medium">
              <h3 class="text-title-2 row-margin-contents">법인 정보</h3>

              <FormList>
                <FormListItem
                  titleText="사업자번호 입력방식"
                  :forceFocus="true"
                >
                  <BoxCheckList>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="layerLeaseRentEstimationSystemCreditCheckRequest003InputType"
                        id="layerLeaseRentEstimationSystemCreditCheckRequest003InputType001"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>번호조회</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="layerLeaseRentEstimationSystemCreditCheckRequest003InputType"
                        id="layerLeaseRentEstimationSystemCreditCheckRequest003InputType002"
                      >
                        <BoxCheckLabel>직접입력</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                  </BoxCheckList>
                </FormListItem>

                <!-- Case : [사업자번호 입력방식 - 번호조회] 선택 시 노출 -->
                <FormListItem
                  titleText="사업자번호"
                  target="#layerLeaseRentEstimationSystemCreditCheckRequest003BuisnessLicense"
                >
                  <FormInvalid :error="state.tab003BuisnessLicenseError">
                    <InputBlock :error="state.tab003BuisnessLicenseError">
                      <InputBlockCell :flexible="true">
                        <!-- Case : 사업자번호 조회 후 :disabled="true" -->
                        <BasicInput
                          type="number"
                          pattern="\d*"
                          title="사업자번호"
                          id="layerLeaseRentEstimationSystemCreditCheckRequest003BuisnessLicense"
                          :disabled="false"
                        />
                        <!-- // Case : 사업자번호 조회 후 :disabled="true" -->
                      </InputBlockCell>
                      <template v-slot:right>
                        <!-- Case : 사업자번호 조회 후 비노출 -->
                        <BasicButton
                          size="mini"
                          theme="tertiary"
                          :class="$style['appoint-btn']"
                          >조회</BasicButton
                        >
                        <!-- // Case : 사업자번호 조회 후 비노출 -->

                        <!-- Case : 사업자번호 조회 후 노출 -->
                        <BasicButton
                          size="mini"
                          theme="quaternary"
                          :class="$style['appoint-btn']"
                        >
                          초기화
                        </BasicButton>
                        <!-- // Case : 사업자번호 조회 후 노출 -->
                      </template>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                    <FormHelpText>10자리 숫자만 입력해 주세요.</FormHelpText>
                  </FormInvalid>
                </FormListItem>
                <!-- // Case : [사업자번호 입력방식 - 번호조회] 선택 시 노출 -->

                <!-- Case : [사업자번호 입력방식 - 직접입력] 선택 시 노출 -->
                <FormListItem
                  titleText="사업자번호"
                  target="#layerLeaseRentEstimationSystemCreditCheckRequest003BuisnessLicenseInput"
                >
                  <FormInvalid :error="state.tab003BuisnessLicenseInputError">
                    <InputBlock :error="state.tab003BuisnessLicenseInputError">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          type="number"
                          pattern="\d*"
                          title="사업자번호"
                          id="layerLeaseRentEstimationSystemCreditCheckRequest003BuisnessLicenseInput"
                          :disabled="false"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                    <FormHelpText>‘-’를 제외하고 입력해주세요.</FormHelpText>
                  </FormInvalid>
                </FormListItem>
                <!-- // Case : [사업자번호 입력방식 - 직접입력] 선택 시 노출 -->

                <!-- Case : [사업자번호 입력방식 - 직접입력] 선택 시 :disabled="false" : start -->
                <FormListItem
                  titleText="회사명"
                  target="#layerLeaseRentEstimationSystemCreditCheckRequest003CorporateName"
                  :disabled="true"
                >
                  <FormInvalid :error="state.tab003CorporateNameError">
                    <InputBlock
                      :error="state.tab003CorporateNameError"
                      :disabled="true"
                    >
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          title="회사명"
                          id="layerLeaseRentEstimationSystemCreditCheckRequest003CorporateName"
                          :disabled="true"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>

                <FormListItem
                  titleText="설립일자"
                  target="#layerLeaseRentEstimationSystemCreditCheckRequest003Date"
                  :disabled="true"
                >
                  <FormInvalid :error="state.tab003DateError">
                    <InputBlock :error="state.tab003DateError" :disabled="true">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          type="number"
                          pattern="\d*"
                          title="설립일자"
                          id="layerLeaseRentEstimationSystemCreditCheckRequest003Date"
                          :disabled="true"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                    <FormHelpText
                      >숫자만 입력해 주세요. (예:19900123)</FormHelpText
                    >
                  </FormInvalid>
                </FormListItem>

                <FormListItem
                  titleText="법인등록번호"
                  target="#layerLeaseRentEstimationSystemCreditCheckRequest003Number"
                  :disabled="true"
                >
                  <FormInvalid :error="state.tab003NumberError">
                    <InputBlock
                      :error="state.tab003NumberError"
                      :disabled="true"
                    >
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          type="number"
                          pattern="\d*"
                          title="법인등록번호"
                          id="layerLeaseRentEstimationSystemCreditCheckRequest003Number"
                          :disabled="true"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                    <FormHelpText>숫자만 입력해 주세요.</FormHelpText>
                  </FormInvalid>
                </FormListItem>

                <FormListItem
                  titleText="대표자명"
                  target="#layerLeaseRentEstimationSystemCreditCheckRequest003CEOName"
                  :disabled="true"
                >
                  <FormInvalid :error="state.tab003CEONameError">
                    <InputBlock
                      :error="state.tab003CEONameError"
                      :disabled="true"
                    >
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          title="대표자명"
                          id="layerLeaseRentEstimationSystemCreditCheckRequest003CEOName"
                          :disabled="true"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>
                <!-- // Case : [사업자번호 입력방식 - 직접입력] 선택 시 :disabled="false" : end -->

                <FormListItem
                  titleText="대표 취임일자"
                  target="#layerLeaseRentEstimationSystemCreditCheckRequest003CEODate"
                >
                  <FormInvalid :error="state.tab003CEODateError">
                    <InputBlock :error="state.tab003CEODateError">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          type="number"
                          title="대표 취임일자"
                          id="layerLeaseRentEstimationSystemCreditCheckRequest003CEODate"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>
              </FormList>
            </section>

            <section class="row-margin-container-medium">
              <div class="flex-box row-margin-contents">
                <div class="flex-box__cell flex-1">
                  <h3 class="text-title-2">보증인 정보</h3>
                </div>
                <div class="flex-box__cell flex-box__cell--medium">
                  <BoxCheck
                    type="checkbox"
                    size="small"
                    id="layerLeaseRentEstimationSystemCreditCheckRequest003same"
                  >
                    <template v-slot:left>
                      <BoxCheckObject />
                    </template>
                    <BoxCheckLabel>대표자 동일</BoxCheckLabel>
                  </BoxCheck>
                </div>
              </div>

              <FormList>
                <FormListItem
                  titleText="연대보증인 이름"
                  target="#layerLeaseRentEstimationSystemCreditCheckRequest003Name"
                >
                  <FormInvalid :error="state.tab003NameError">
                    <InputBlock :error="state.tab003NameError">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          title="연대보증인 이름"
                          id="layerLeaseRentEstimationSystemCreditCheckRequest003Name"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>

                <FormListItem
                  titleText="연대보증인 생년월일"
                  target="#layerLeaseRentEstimationSystemCreditCheckRequest003BirthDate"
                >
                  <FormInvalid :error="state.tab003BirthDateError">
                    <InputBlock :error="state.tab003BirthDateError">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          type="number"
                          pattern="\d*"
                          title="연대보증인 생년월일"
                          id="layerLeaseRentEstimationSystemCreditCheckRequest003BirthDate"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                    <FormHelpText
                      >숫자만 입력해 주세요. (예:19900123)</FormHelpText
                    >
                  </FormInvalid>
                </FormListItem>

                <FormListItem titleText="관계" :forceFocus="true">
                  <BoxCheckList>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="layerLeaseRentEstimationSystemCreditCheckRequest003Relation"
                        id="layerLeaseRentEstimationSystemCreditCheckRequest003Relation001"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>대표자</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="layerLeaseRentEstimationSystemCreditCheckRequest003Relation"
                        id="layerLeaseRentEstimationSystemCreditCheckRequest003Relation002"
                      >
                        <BoxCheckLabel>과점주주</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="layerLeaseRentEstimationSystemCreditCheckRequest003Relation"
                        id="layerLeaseRentEstimationSystemCreditCheckRequest003Relation003"
                      >
                        <BoxCheckLabel>대주주</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                  </BoxCheckList>
                </FormListItem>

                <FormListItem
                  titleText="연대보증인 휴대폰번호"
                  target="#layerLeaseRentEstimationSystemCreditCheckRequest003Phone"
                >
                  <FormInvalid :error="state.tab003PhoneError">
                    <InputBlock :error="state.tab003PhoneError">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          type="number"
                          pattern="\d*"
                          title="연대보증인 휴대폰번호"
                          id="layerLeaseRentEstimationSystemCreditCheckRequest003Phone"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage>Error Message</FormInvalidMessage>
                    <FormHelpText>-없이 숫자만 입력해 주세요.</FormHelpText>
                  </FormInvalid>
                </FormListItem>

                <FormListItem titleText="고객 성별" :forceFocus="true">
                  <BoxCheckList>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="layerLeaseRentEstimationSystemCreditCheckRequest003sex"
                        id="layerLeaseRentEstimationSystemCreditCheckRequest003sex001"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>남자</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="layerLeaseRentEstimationSystemCreditCheckRequest003sex"
                        id="layerLeaseRentEstimationSystemCreditCheckRequest003sex002"
                      >
                        <BoxCheckLabel>여자</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                  </BoxCheckList>
                </FormListItem>
              </FormList>
            </section>
          </div>
        </UiTabPanel>
        <!-- // Tab : 법인사업자 -->
      </UiTab>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>요청하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemCreditCheckRequest.scss';
</style>
