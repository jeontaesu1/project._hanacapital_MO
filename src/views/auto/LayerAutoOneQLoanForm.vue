<script>
// AF_M05_l001
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UnitText,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BasicSelect,
    CarEmblem,
    CarThumb,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
  },
  setup() {
    const state = reactive({
      branchError: false,
      loanAmountError: false,
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
          한도 조회를 위해<br />
          신청정보를 입력해 주세요
        </PageMainText>
      </PageTextGroup>

      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <div class="flex-box row-margin-mini">
              <div class="flex-box__cell">
                <CarEmblem src="/images/_dummy/car-emblem.png" name="현대" />
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <p class="text-body-4 font-weight-light">2020년식</p>
              </div>
            </div>
            <h3 class="text-body-1 font-weight-medium">캐스퍼</h3>
            <p class="text-body-4 color-gray row-margin-small">
              2022년형 가솔린 1.0 터보 밴
            </p>
          </BasicBoxHeadLeft>
          <BasicBoxHeadRight>
            <CarThumb src="/images/_dummy/car-thumb.png" />
          </BasicBoxHeadRight>
        </BasicBoxHead>
        <KeyValue verticalAlign="center">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle :classNames="{ title: 'color-black' }"
              >총 차량가격</KeyValueTitle
            >
            <KeyValueText>
              <UnitText rightUnit="원" align="right"
                ><strong>23,500,000</strong></UnitText
              >
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <FormList
        :classNames="{
          wrap: 'row-margin-contents',
        }"
      >
        <FormListItem
          titleText="차량구매지"
          target="#layerAutoOneQLoanFormBranchButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.branchError">
            <InputBlock :error="state.branchError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '서울',
                    },
                    {
                      value: '2',
                      text: '인천',
                    },
                    {
                      value: '3',
                      text: '경기북부',
                    },
                    {
                      value: '4',
                      text: '경기남부',
                    },
                    {
                      value: '5',
                      text: '경기안산',
                    },
                    {
                      value: '6',
                      text: '강원도',
                    },
                    {
                      value: '7',
                      text: '충청도',
                    },
                    {
                      value: '8',
                      text: '전라도',
                    },
                    {
                      value: '9',
                      text: '대구',
                    },
                    {
                      value: '10',
                      text: '부산',
                    },
                    {
                      value: '11',
                      text: '경상도',
                    },
                    {
                      value: '12',
                      text: '제주도',
                    },
                  ]"
                  buttonTitle="차량구매지 선택하기"
                  layerTitle="지역을 선택해 주세요"
                  id="layerAutoOneQLoanFormBranch"
                  buttonId="layerAutoOneQLoanFormBranchButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="대출신청금액"
          target="#layerAutoOneQLoanFormLoanAmount"
        >
          <FormInvalid :error="state.loanAmountError">
            <InputBlock :error="state.loanAmountError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="대출신청금액"
                  id="layerAutoOneQLoanFormLoanAmount"
                  pattern="\d*"
                  :useDelete="false"
                  align="right"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-3">원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText
              :classNames="{
                wrap: 'align-right',
              }"
              >삼천오백만원</FormHelpText
            >
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="대출기간" :forceFocus="true">
          <BoxCheckList :wrap="true" :col="3">
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoOneQLoanFormPeriod"
                id="layerAutoOneQLoanFormPeriod1"
                :defaultChecked="true"
              >
                <BoxCheckLabel>12개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoOneQLoanFormPeriod"
                id="layerAutoOneQLoanFormPeriod2"
              >
                <BoxCheckLabel>24개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoOneQLoanFormPeriod"
                id="layerAutoOneQLoanFormPeriod3"
              >
                <BoxCheckLabel>36개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoOneQLoanFormPeriod"
                id="layerAutoOneQLoanFormPeriod4"
              >
                <BoxCheckLabel>48개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoOneQLoanFormPeriod"
                id="layerAutoOneQLoanFormPeriod5"
              >
                <BoxCheckLabel>60개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoOneQLoanFormPeriod"
                id="layerAutoOneQLoanFormPeriod6"
              >
                <BoxCheckLabel>72개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
        </FormListItem>
      </FormList>

      <ul :class="$style['basic-list']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            대출신청금액은 3백만원 이상 입력해 주세요.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            신청금액과 실제 가능한 대출한도금액은 차이가 발생할 수 있습니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            차량 출고 시, 관련 제세금액은 포함되어 있지 않습니다.
          </div>
        </li>
      </ul>

      <template v-slot:foot>
        <KeyValue verticalAlign="center">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle :classNames="{ title: 'color-black' }"
              >월 납입금액</KeyValueTitle
            >
            <KeyValueText>
              <div class="flex-box align-items-end justify-conten-end">
                <div class="flex-box__cell">약</div>
                <div class="flex-box__cell">
                  <UnitText rightUnit="원" align="right"
                    ><strong>254,760</strong></UnitText
                  >
                </div>
              </div>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <ButtonList
          :classNames="{
            wrap: 'row-margin-contents-small',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>한도조회</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoOneQLoanForm.scss';
</style>
