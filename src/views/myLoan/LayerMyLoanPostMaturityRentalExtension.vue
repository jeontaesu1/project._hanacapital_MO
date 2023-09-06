<script>
// My_M08_l002
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
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
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
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    BasicTooltip,
    IconTooltip,
  },
  setup() {
    const state = reactive({
      depositError: false,
      advancePaymentError: false,
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
          <PopupTitle>만기후처리 연장</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="3" :current="1" />
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>
            연장 조건을<br />
            선택하세요
          </strong>
        </PageMainText>
      </PageTextGroup>

      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-1 font-weight-medium">렌터카 07호3994</h3>
          </BasicBoxHeadLeft>
        </BasicBoxHead>
        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>계약기간</KeyValueTitle>
            <KeyValueText>2016.01.01 ~ 2021.01.01</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>잔존가치(VAT포함)</KeyValueTitle>
            <KeyValueText>99,999,999 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>보증금</KeyValueTitle>
            <KeyValueText>99,999,999 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>실납렌트료(VAT포함)</KeyValueTitle>
            <KeyValueText>999,999 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>약정주행거리</KeyValueTitle>
            <KeyValueText>999,999 km</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>정비서비스</KeyValueTitle>
            <KeyValueText>프리미엄</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <FormList
        :classNames="{
          wrap: 'row-margin-contents',
        }"
      >
        <FormListItem titleText="기간선택" :forceFocus="true">
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerMyLoanPostMaturityRentalExtensionPeriod"
                id="layerMyLoanPostMaturityRentalExtensionPeriod001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>12개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerMyLoanPostMaturityRentalExtensionPeriod"
                id="layerMyLoanPostMaturityRentalExtensionPeriod002"
              >
                <BoxCheckLabel>24개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerMyLoanPostMaturityRentalExtensionPeriod"
                id="layerMyLoanPostMaturityRentalExtensionPeriod003"
              >
                <BoxCheckLabel>36개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerMyLoanPostMaturityRentalExtensionPeriod"
                id="layerMyLoanPostMaturityRentalExtensionPeriod004"
              >
                <BoxCheckLabel>48개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
        </FormListItem>

        <FormListItem titleText="보증금/선납금 선택" :forceFocus="true">
          <BoxCheckList :wrap="true">
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerMyLoanPostMaturityRentalExtensionDeposit"
                id="layerMyLoanPostMaturityRentalExtensionDeposit001"
              >
                <BoxCheckLabel>보증금</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerMyLoanPostMaturityRentalExtensionDeposit"
                id="layerMyLoanPostMaturityRentalExtensionDeposit002"
              >
                <BoxCheckLabel>선납금</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerMyLoanPostMaturityRentalExtensionDeposit"
                id="layerMyLoanPostMaturityRentalExtensionDeposit003"
              >
                <BoxCheckLabel>보증금+선납금</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerMyLoanPostMaturityRentalExtensionDeposit"
                id="layerMyLoanPostMaturityRentalExtensionDeposit004"
                :defaultChecked="true"
              >
                <BoxCheckLabel>해당사항없음</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <div class="flex-box row-margin-item">
            <div class="flex-box__cell text-body-5 color-gray-secondary">
              보증금/선납금 선택 안내
            </div>
            <div class="flex-box__cell flex-box__cell--small">
              <BasicTooltip placement="top">
                <IconTooltip :class="$style['icon']" />
                <span class="for-a11y">(도움말)</span>

                <template v-slot:contents>
                  <section :class="$style['tooltip-section']">
                    <h3 :class="$style['tooltip-section__title']">
                      보증금/선납금 안내
                    </h3>
                    <ul
                      :class="[
                        $style['basic-list'],
                        $style['basic-list--mini-margin'],
                      ]"
                    >
                      <li :class="[$style['basic-list__item'], 'color-white']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          보증금: 보증금을 납입하는 경우 리스료가 할인됩니다.<br />
                          (계약이 중도해지 되거나, 약정서에 기재된 채무를 전부
                          이행한 때에는 리스보증금을 반환해 드립니다.)
                        </div>
                      </li>
                      <li :class="[$style['basic-list__item'], 'color-white']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          선납금: 리스기간 회차로 나누어 매월 리스료에 충당<br />
                          (만기 시 반환되지 않습니다.)
                        </div>
                      </li>
                    </ul>
                  </section>
                </template>
              </BasicTooltip>
            </div>
          </div>
        </FormListItem>

        <!-- Case : '보증금' 선택 시 노출 -->
        <FormListItem titleText="보증금비율" :forceFocus="true">
          <FormInvalid :error="state.depositError">
            <BoxCheckList
              :wrap="true"
              col="4"
              :classNames="{ wrap: 'row-margin-item-group' }"
            >
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerMyLoanPostMaturityRentalExtensionDepositPercentage"
                  id="layerMyLoanPostMaturityRentalExtensionDepositPercentage001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>10%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerMyLoanPostMaturityRentalExtensionDepositPercentage"
                  id="layerMyLoanPostMaturityRentalExtensionDepositPercentage002"
                >
                  <BoxCheckLabel>20%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerMyLoanPostMaturityRentalExtensionDepositPercentage"
                  id="layerMyLoanPostMaturityRentalExtensionDepositPercentage003"
                >
                  <BoxCheckLabel>30%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerMyLoanPostMaturityRentalExtensionDepositPercentage"
                  id="layerMyLoanPostMaturityRentalExtensionDepositPercentage004"
                >
                  <BoxCheckLabel>40%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerMyLoanPostMaturityRentalExtensionDepositPercentage"
                  id="layerMyLoanPostMaturityRentalExtensionDepositPercentage005"
                >
                  <BoxCheckLabel>50%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerMyLoanPostMaturityRentalExtensionDepositPercentage"
                  id="layerMyLoanPostMaturityRentalExtensionDepositPercentage006"
                >
                  <BoxCheckLabel>60%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerMyLoanPostMaturityRentalExtensionDepositPercentage"
                  id="layerMyLoanPostMaturityRentalExtensionDepositPercentage007"
                >
                  <BoxCheckLabel>70%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerMyLoanPostMaturityRentalExtensionDepositPercentage"
                  id="layerMyLoanPostMaturityRentalExtensionDepositPercentage008"
                >
                  <BoxCheckLabel>금액입력</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>

            <InputBlock :error="state.depositError" :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  align="right"
                  :useDelete="false"
                  pattern="\d*"
                  title="보증금 금액 직접입력"
                  id="layerMyLoanPostMaturityRentalExtensionDepositSelf"
                  defaultValue="10,002,120"
                  :disabled="true"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-3">원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- //Case : '보증금' 선택 시 노출 -->

        <!-- Case : '선납금' 선택 시 노출 -->
        <FormListItem titleText="선납금비율" :forceFocus="true">
          <FormInvalid :error="state.advancePaymentError">
            <BoxCheckList
              :wrap="true"
              col="4"
              :classNames="{ wrap: 'row-margin-item-group' }"
            >
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerMyLoanPostMaturityRentalExtensionAdvancePaymentPercentage"
                  id="layerMyLoanPostMaturityRentalExtensionAdvancePaymentPercentage001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>10%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerMyLoanPostMaturityRentalExtensionAdvancePaymentPercentage"
                  id="layerMyLoanPostMaturityRentalExtensionAdvancePaymentPercentage002"
                >
                  <BoxCheckLabel>20%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerMyLoanPostMaturityRentalExtensionAdvancePaymentPercentage"
                  id="layerMyLoanPostMaturityRentalExtensionAdvancePaymentPercentage003"
                >
                  <BoxCheckLabel>30%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerMyLoanPostMaturityRentalExtensionAdvancePaymentPercentage"
                  id="layerMyLoanPostMaturityRentalExtensionAdvancePaymentPercentage004"
                >
                  <BoxCheckLabel>40%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerMyLoanPostMaturityRentalExtensionAdvancePaymentPercentage"
                  id="layerMyLoanPostMaturityRentalExtensionAdvancePaymentPercentage005"
                >
                  <BoxCheckLabel>50%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerMyLoanPostMaturityRentalExtensionAdvancePaymentPercentage"
                  id="layerMyLoanPostMaturityRentalExtensionAdvancePaymentPercentage006"
                >
                  <BoxCheckLabel>60%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerMyLoanPostMaturityRentalExtensionAdvancePaymentPercentage"
                  id="layerMyLoanPostMaturityRentalExtensionAdvancePaymentPercentage007"
                >
                  <BoxCheckLabel>70%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerMyLoanPostMaturityRentalExtensionAdvancePaymentPercentage"
                  id="layerMyLoanPostMaturityRentalExtensionAdvancePaymentPercentage008"
                >
                  <BoxCheckLabel>금액입력</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>

            <InputBlock :error="state.advancePaymentError" :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  align="right"
                  :useDelete="false"
                  pattern="\d*"
                  title="선납금 금액 직접입력"
                  id="layerMyLoanPostMaturityRentalExtensionAdvancePaymentSelf"
                  defaultValue="10,002,120"
                  :disabled="true"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-3">원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- //Case : '선납금' 선택 시 노출 -->
      </FormList>

      <template v-slot:foot>
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
@import '@/assets/scss/views/myLoan/LayerMyLoanPostMaturityRentalExtension.scss';
</style>
