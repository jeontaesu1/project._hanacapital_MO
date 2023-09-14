<script>
// AF_M06_l005
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
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
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
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';

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
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
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
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    NoticeText,
    CarEmblem,
  },
  setup() {
    const state = reactive({
      carAmountError: false,
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
          <PopupTitle>중고차 오토론 한도조회</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          한도 조회를 위해<br />
          <strong>신청정보를 입력해 주세요</strong>
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
            <h3 class="text-body-1 font-weight-medium">
              쏘나타 뉴 라이즈 1.6T-Gdi 스마트<br />
              (마이 스마트 핏)
            </h3>
          </BasicBoxHeadLeft>
        </BasicBoxHead>
        <KeyValue verticalAlign="center">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle :classNames="{ title: 'color-black' }">
              차량 조정기준가격
            </KeyValueTitle>
            <KeyValueText>
              <UnitText rightUnit="원" align="right">23,500,000</UnitText>
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
          titleText="차량구입금액"
          target="#layerAutoUsedLoanFormCarAmount"
          :require="true"
        >
          <FormInvalid :error="state.carAmountError">
            <InputBlock :error="state.carAmountError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="차량구입금액"
                  id="layerAutoUsedLoanFormCarAmount"
                  pattern="\d*"
                  :useDelete="false"
                  align="right"
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
              >삼천오백만원
            </FormHelpText>
            <NoticeText :classNames="{ wrap: 'row-margin-item' }">
              매매계약서상 매매금액을 입력해 주세요.
            </NoticeText>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="대출신청금액"
          target="#layerAutoUsedLoanFormLoanAmount"
        >
          <FormInvalid :error="state.loanAmountError">
            <InputBlock :error="state.loanAmountError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="대출신청금액"
                  id="layerAutoUsedLoanFormLoanAmount"
                  pattern="\d*"
                  :useDelete="false"
                  align="right"
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
              >삼천오백만원
            </FormHelpText>
            <NoticeText :classNames="{ wrap: 'row-margin-item' }">
              최소 대출금액은 200만원 입니다.
            </NoticeText>
            <NoticeText :classNames="{ wrap: 'row-margin-item' }">
              대출신청금액은 차량 기준가격과 차량구입비용을 초과할 수 없습니다.
            </NoticeText>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="대출기간" :forceFocus="true">
          <BoxCheckList :wrap="true" :col="3">
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoUsedLoanFormPeriod"
                id="layerAutoUsedLoanFormPeriod001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>24개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoUsedLoanFormPeriod"
                id="layerAutoUsedLoanFormPeriod002"
              >
                <BoxCheckLabel>36개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoUsedLoanFormPeriod"
                id="layerAutoUsedLoanFormPeriod003"
              >
                <BoxCheckLabel>48개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoUsedLoanFormPeriod"
                id="layerAutoUsedLoanFormPeriod004"
              >
                <BoxCheckLabel>60개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoUsedLoanFormPeriod"
                id="layerAutoUsedLoanFormPeriod005"
              >
                <BoxCheckLabel>72개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
        </FormListItem>
      </FormList>

      <NoticeText>
        고객님의 신용등급에따라 금리와 한도가 달라질 수 있습니다.
      </NoticeText>

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
            <BasicButton>한도조회</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
