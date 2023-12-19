<script>
// PF_M01_l007
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
import BasicBox from '@/components/ui/common/BasicBox.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';

import IconMaximum from '@/assets/images/icon/maximum.svg?component';
import IconExpectedInterestRate from '@/assets/images/icon/expected-interest-rate.svg?component';
import IconCommisionRate from '@/assets/images/icon/commission-rate.svg?component';

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
    BasicBox,
    BasicInput,
    BasicSelect,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    UnitText,
    FormHelpText,
    IconMaximum,
    IconExpectedInterestRate,
    IconCommisionRate,
  },
  setup() {
    const state = reactive({
      amountError: false,
      periodError: false,
      methodError: false,
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
          대출신청 정보를<br />
          입력해 주세요
        </PageMainText>
      </PageTextGroup>

      <BasicBox theme="tertiary">
        <div :class="$style['product-detail']">
          <ul :class="$style['product-detail__list']">
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconMaximum />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">최대한도</div>
                <div :class="$style['product-detail__desc']">
                  <UnitText size="regular" rightUnit="만원">4,000</UnitText>
                </div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconExpectedInterestRate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">예상금리</div>
                <div :class="$style['product-detail__desc']">
                  <UnitText size="regular" rightUnit="%">10.9</UnitText>
                  <div :class="$style['product-detail__desc-sub']">
                    (36개월 기준)
                  </div>
                </div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconCommisionRate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">
                  중도상환수수료율
                </div>
                <div :class="$style['product-detail__desc']">
                  <UnitText size="regular" rightUnit="%">0</UnitText>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </BasicBox>

      <FormList :classNames="{ wrap: 'row-margin-contents-group' }">
        <FormListItem
          titleText="대출신청금액"
          target="#layerPersonalLoanEHanaInputAmount"
        >
          <FormInvalid :error="state.amountError">
            <InputBlock :error="state.amountError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  align="right"
                  :useDelete="false"
                  pattern="\d*"
                  title="대출신청금액"
                  id="layerPersonalLoanEHanaInputAmount"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-3">만원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText
              :classNames="{
                wrap: 'align-right',
              }"
              >사천만원</FormHelpText
            >
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="대출기간"
          target="#layerPersonalLoanEHanaInputPeriodButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.periodError">
            <InputBlock :error="state.periodError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '12개월',
                    },
                    {
                      value: '2',
                      text: '24개월',
                    },
                    {
                      value: '3',
                      text: '36개월',
                    },
                    {
                      value: '4',
                      text: '48개월',
                    },
                    {
                      value: '5',
                      text: '60개월',
                    },
                    {
                      value: '6',
                      text: '72개월',
                    },
                    {
                      value: '7',
                      text: '84개월',
                    },
                  ]"
                  buttonTitle="대출기간 선택하기"
                  layerTitle="대출기간을 선택해 주세요."
                  id="layerPersonalLoanEHanaInputPeriod"
                  buttonId="layerPersonalLoanEHanaInputPeriodButton"
                  defaultValue="3"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="상환방법"
          target="#layerPersonalLoanEHanaInputMethod"
          :disabled="true"
        >
          <FormInvalid :error="state.methodError">
            <InputBlock :error="state.methodError" :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="상환방법"
                  id="layerPersonalLoanEHanaInputMethod"
                  defaultValue="원리금균등분할상환"
                  :disabled="true"
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
            <BasicButton>신청하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/LayerPersonalLoanEHanaInput.scss';
</style>
