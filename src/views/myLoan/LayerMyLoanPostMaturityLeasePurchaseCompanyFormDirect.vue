<script>
// My_M08_l029
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BasicTooltip from '@/components/ui/tooltip/BasicTooltip.vue';

import IconTooltip from '@/assets/images/icon/tooltip.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
    StepProgress,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NoticeText,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicDatepicker,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    BasicTooltip,
    IconTooltip,
  },
  setup() {
    const state = reactive({
      nameError: false,
      addressError001: false,
      addressError002: false,
      dateError: false,
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
          <PopupTitle>만기후처리 구매</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="3" :current="1" />
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>
            구매 정보를<br />
            입력해 주세요
          </strong>
        </PageMainText>
      </PageTextGroup>

      <div>
        <BasicBox>
          <KeyValue>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>이전서류발송예정일자</KeyValueTitle>
              <KeyValueText>2023.01.10</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <NoticeText :classNames="{ wrap: 'color-red row-margin-item-group' }">
          매도용인감 발급 사정에 따라 변경될 수 있습니다.
        </NoticeText>
      </div>

      <div class="row-margin-container-medium">
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">매수인 정보</h3>

          <CheckBox
            id="layerMyLoanPostMaturityRentalPurchaseFormDirectCheckBox001"
            theme="tertiary"
            :classNames="{
              wrap: 'row-margin-contents',
            }"
          >
            <CheckBoxObject />
            <CheckBoxLabelText>계약자 정보와 동일</CheckBoxLabelText>
          </CheckBox>

          <FormList>
            <FormListItem
              titleText="매수인명"
              target="#layerMyLoanPostMaturityRentalPurchaseFormDirectName"
            >
              <FormInvalid :error="state.nameError">
                <InputBlock :error="state.nameError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="매수인명"
                      id="layerMyLoanPostMaturityRentalPurchaseFormDirectName"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="매도용인감 주소"
              :forceFocus="true"
              target="#layerMyLoanPostMaturityRentalPurchaseFormDirectAddressSearch001"
            >
              <FormInvalid :error="state.addressError001">
                <InputBlock :error="state.addressError001">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="매도용인감 주소 우편번호"
                      :disabled="true"
                      defaultValue="01000"
                    />
                  </InputBlockCell>
                  <template v-slot:right>
                    <BasicButton
                      size="mini"
                      theme="tertiary"
                      id="layerMyLoanPostMaturityRentalPurchaseFormDirectAddressSearch001"
                      >검색</BasicButton
                    >
                  </template>
                </InputBlock>
                <!-- DD : 주소 검색 및 입력 후 노출 -->
                <InputBlock
                  :error="state.addressError001"
                  :classNames="{
                    wrap: 'row-margin-item-group row-margin-bottom-none',
                  }"
                >
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="매도용인감 도로명 주소"
                      :disabled="true"
                      defaultValue="인천 서구 에코로 181"
                    />
                  </InputBlockCell>
                </InputBlock>
                <InputBlock
                  :error="state.addressError001"
                  :classNames="{
                    wrap: 'row-margin-item-group row-margin-bottom-none',
                  }"
                >
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="매도용인감 상세 주소"
                      :disabled="true"
                      defaultValue="하나금융 로비"
                    />
                  </InputBlockCell>
                </InputBlock>
                <!-- // DD : 주소 검색 및 입력 후 노출 -->
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>

              <div class="flex-box row-margin-item-group">
                <div class="flex-box__cell text-body-5 color-gray-secondary">
                  매도용인감 주소 안내
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <BasicTooltip placement="top">
                    <IconTooltip :class="$style['icon']" />
                    <span class="for-a11y">(도움말)</span>

                    <template v-slot:contents>
                      <section :class="$style['tooltip-section']">
                        <h4 :class="$style['tooltip-section__title']">
                          매도용인감주소 안내
                        </h4>
                        <ul
                          :class="[
                            $style['basic-list'],
                            $style['basic-list--mini-margin'],
                          ]"
                        >
                          <li
                            :class="[$style['basic-list__item'], 'color-white']"
                          >
                            <div :class="$style['basic-list__symbol']"></div>
                            <div :class="$style['basic-list__content']">
                              개인/개인사업자 : 등본지 주소
                            </div>
                          </li>
                          <li
                            :class="[$style['basic-list__item'], 'color-white']"
                          >
                            <div :class="$style['basic-list__symbol']"></div>
                            <div :class="$style['basic-list__content']">
                              법인사업자 : 사업자 주소
                            </div>
                          </li>
                        </ul>
                      </section>
                    </template>
                  </BasicTooltip>
                </div>
              </div>
            </FormListItem>
          </FormList>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">수령/수취 정보</h3>

          <CheckBox
            id="layerMyLoanPostMaturityRentalPurchaseFormDirectCheckBox002"
            theme="tertiary"
            :classNames="{
              wrap: 'row-margin-contents',
            }"
          >
            <CheckBoxObject />
            <CheckBoxLabelText>매도용인감주소와 동일</CheckBoxLabelText>
          </CheckBox>

          <FormList>
            <FormListItem
              titleText="수령 주소"
              :forceFocus="true"
              target="#layerMyLoanPostMaturityRentalPurchaseFormDirectAddressSearch002"
            >
              <FormInvalid :error="state.addressError002">
                <InputBlock :error="state.addressError002">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="수령 주소 우편번호"
                      :disabled="true"
                      defaultValue="01000"
                    />
                  </InputBlockCell>
                  <template v-slot:right>
                    <BasicButton
                      size="mini"
                      theme="tertiary"
                      id="layerMyLoanPostMaturityRentalPurchaseFormDirectAddressSearch002"
                      >검색</BasicButton
                    >
                  </template>
                </InputBlock>
                <!-- DD : 주소 검색 및 입력 후 노출 -->
                <InputBlock
                  :error="state.addressError002"
                  :classNames="{
                    wrap: 'row-margin-item-group row-margin-bottom-none',
                  }"
                >
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="수령 주소 도로명 주소"
                      :disabled="true"
                      defaultValue="인천 서구 에코로 181"
                    />
                  </InputBlockCell>
                </InputBlock>
                <InputBlock
                  :error="state.addressError002"
                  :classNames="{
                    wrap: 'row-margin-item-group row-margin-bottom-none',
                  }"
                >
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="수령 주소 상세 주소"
                      :disabled="true"
                      defaultValue="하나금융 로비"
                    />
                  </InputBlockCell>
                </InputBlock>
                <!-- // DD : 주소 검색 및 입력 후 노출 -->
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem titleText="수취방법" :forceFocus="true">
              <BoxCheckList>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerMyLoanPostMaturityRentalPurchaseFormDirectType"
                    id="layerMyLoanPostMaturityRentalPurchaseFormDirectType001"
                  >
                    <BoxCheckLabel>등기</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerMyLoanPostMaturityRentalPurchaseFormDirectType"
                    id="layerMyLoanPostMaturityRentalPurchaseFormDirectType002"
                  >
                    <BoxCheckLabel>퀵착불</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
            </FormListItem>
          </FormList>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">정산 정보</h3>

          <BasicBox className="row-margin-contents">
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>정산금액</KeyValueTitle>
                <KeyValueText>99,999,999 원</KeyValueText>
              </KeyValueItem>

              <!-- Case : 정산금액 +금액일 경우 노출 -->
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>입금계좌번호</KeyValueTitle>
                <KeyValueText>하나 21556-412-94556</KeyValueText>
              </KeyValueItem>
              <!-- //Case : 정산금액 +금액일 경우 노출 -->

              <!-- Case : 정산금액 -금액일 경우 노출 -->
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>환불예정일자</KeyValueTitle>
                <KeyValueText>2023.01.10</KeyValueText>
              </KeyValueItem>
              <!-- //Case : 정산금액 -금액일 경우 노출 -->
            </KeyValue>
          </BasicBox>

          <!-- Case : 정산금액 +금액일 경우 노출 -->
          <FormList>
            <FormListItem
              titleText="입금예약일자"
              target="#layerMyLoanPostMaturityRentalPurchaseFormDirectDateButton"
            >
              <FormInvalid :error="state.dateError">
                <InputBlock :error="state.dateError">
                  <InputBlockCell :flexible="true">
                    <BasicDatepicker
                      title="입금예약일자"
                      id="layerMyLoanPostMaturityRentalPurchaseFormDirectDate"
                      buttonId="layerMyLoanPostMaturityRentalPurchaseFormDirectDateButton"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>

          <NoticeText :classNames="{ wrap: 'row-margin-item-group' }">
            차량번호 혹은 계약자명으로 입금 부탁드립니다.
          </NoticeText>
          <!-- //Case : 정산금액 +금액일 경우 노출 -->

          <!-- Case : 정산금액 -금액일 경우 노출 -->
          <NoticeText :classNames="{ wrap: 'row-margin-item-group' }">
            환불예정일자는 회사 내부사정에 따라 변경 될 수 있습니다.
          </NoticeText>
          <!-- //Case : 정산금액 -금액일 경우 노출 -->
        </section>
      </div>

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
@import '@/assets/scss/views/myLoan/LayerMyLoanPostMaturityLeasePurchaseCompanyFormDirect.scss';
</style>
