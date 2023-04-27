<script>
// My_M02_l014
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PageTextGroup,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    InputBlock,
    InputBlockCell,
    BasicDatepicker,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    BasicHr,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
  },
  setup() {
    const state = reactive({
      dateError: false,
      minDate: '2023.04.21',
      maxDate: '2023.04.21',
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
          <PopupTitle>계산서/세금계산서</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>조회 기간 내 발급할 항목을</strong><br />
          선택해 주세요
        </PageMainText>
      </PageTextGroup>

      <div>
        <FormList>
          <FormListItem titleText="조회기간" :forceFocus="true">
            <FormInvalid :error="state.dateError">
              <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="LayerMyLoanCertificateInvoiceTaxInvoiceItemsDateCheck"
                    id="LayerMyLoanCertificateInvoiceTaxInvoiceItemsDateCheck001"
                  >
                    <BoxCheckLabel>1개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="LayerMyLoanCertificateInvoiceTaxInvoiceItemsDateCheck"
                    id="LayerMyLoanCertificateInvoiceTaxInvoiceItemsDateCheck002"
                  >
                    <BoxCheckLabel>3개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="LayerMyLoanCertificateInvoiceTaxInvoiceItemsDateCheck"
                    id="LayerMyLoanCertificateInvoiceTaxInvoiceItemsDateCheck003"
                  >
                    <BoxCheckLabel>6개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="LayerMyLoanCertificateInvoiceTaxInvoiceItemsDateCheck"
                    id="LayerMyLoanCertificateInvoiceTaxInvoiceItemsDateCheck004"
                  >
                    <BoxCheckLabel>1년</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
              <InputBlock :error="state.dateError">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="조회기간 시작 날짜"
                    id="LayerMyLoanCertificateInvoiceTaxInvoiceItemsDateStart"
                    buttonId="LayerMyLoanCertificateInvoiceTaxInvoiceItemsDateStartButton"
                    :max="state.maxDate"
                    v-model="state.minDate"
                  />
                </InputBlockCell>
                <InputBlockCell margin="regular">
                  <div class="text-body-3">~</div>
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicDatepicker
                    title="조회기간 종료 날짜"
                    id="LayerMyLoanCertificateInvoiceTaxInvoiceItemsDateEnd"
                    buttonId="LayerMyLoanCertificateInvoiceTaxInvoiceItemsDateEndButton"
                    :min="state.minDate"
                    v-model="state.maxDate"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>조회기간은 최대 1년까지 가능합니다.</FormHelpText>
            </FormInvalid>
          </FormListItem>
        </FormList>
        <BasicButton
          line="true"
          :classNames="{ wrap: 'row-margin-contents-group' }"
          >조회</BasicButton
        >
      </div>

      <BasicHr className="row-margin-container-medium" />

      <div class="contents-wrap">
        <div class="flex-box row-margin-contents">
          <div class="flex-box__cell flex-1">
            <h3 class="text-title-2">발급항목</h3>
          </div>
          <!-- Case : 리스트가 있는 경우 -->
          <div class="flex-box__cell">
            <CheckBox
              id="LayerMyLoanCertificateInvoiceTaxInvoiceItemsAll"
              theme="tertiary"
            >
              <CheckBoxObject />
              <CheckBoxLabelText>전체 선택</CheckBoxLabelText>
            </CheckBox>
          </div>
          <!-- //Case : 리스트가 있는 경우 -->
        </div>

        <!-- Case : 리스트가 있는 경우 -->
        <ul :class="$style['bill-list']">
          <li v-for="i in 3" :key="i" :class="$style['bill-list__item']">
            <CheckBox
              :id="`LayerMyLoanCertificateInvoiceTaxInvoiceItemsCount${i}`"
              theme="secondary"
              full="true"
            >
              <CheckBoxObject />
              <CheckBoxLabelText>
                <span :class="$style['bill-list__block']">
                  <span :class="$style['bill-list__head']">
                    <span :class="$style['bill-list__detail']">
                      <span :class="$style['bill-list__detail-item']">
                        2022.02.02
                      </span>
                    </span>
                    <span :class="$style['bill-list__amount']">
                      845,000 원
                    </span>
                  </span>
                </span>
              </CheckBoxLabelText>
            </CheckBox>
          </li>
        </ul>
        <!-- //Case : 리스트가 있는 경우 -->

        <!-- Case : 리스트가 없는 경우 -->
        <div :class="$style['empty']">
          <p :class="$style['empty__text']">발급 가능한 항목이 없습니다.</p>
        </div>
        <!-- Case : 리스트가 없는 경우 -->
      </div>

      <!-- Case : 리스트가 있는 경우 -->
      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>발급</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
      <!-- //Case : 리스트가 있는 경우 -->
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanCertificateInvoiceTaxInvoiceItems.scss';
</style>
