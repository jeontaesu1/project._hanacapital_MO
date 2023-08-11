<script>
// AF_M06_l008
import { ref, reactive, nextTick } from 'vue';

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
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
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
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';

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
    BasicBoxHeadRight,
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
    FormHelpText,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    NoticeText,
    CarEmblem,
    CarThumb,
  },
  setup() {
    const state = reactive({
      modifyMode: false,
      carAmountError: false,
      loanAmountError: false,
    });

    const layer = ref(null);
    const modifyButton = ref(null);
    const saveButton = ref(null);

    const modify = () => {
      state.modifyMode = true;

      nextTick(() => {
        saveButton.value.button.focus();
      });
    };

    const save = () => {
      state.modifyMode = false;

      nextTick(() => {
        modifyButton.value.button.focus();
      });
    };

    return {
      state,
      layer,
      modifyButton,
      saveButton,
      modify,
      save,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>중고차오토론</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          약정신청 내용을<br />
          <strong>확인해 주세요</strong>
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
            <h3 class="text-body-1 font-weight-medium">11가1111</h3>
            <p class="text-body-4 color-gray row-margin-small">
              쏘나타 뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
            </p>
          </BasicBoxHeadLeft>
          <BasicBoxHeadRight>
            <CarThumb src="/images/_dummy/car-thumb.png" />
          </BasicBoxHeadRight>
        </BasicBoxHead>
        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>신청일자</KeyValueTitle>
            <KeyValueText>2022.12.26</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <ButtonList
          :classNames="{
            wrap: 'row-margin-contents-small',
          }"
        >
          <ButtonListItem>
            <BasicButton size="small" theme="quaternary">재선택</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </BasicBox>

      <section class="row-margin-container-medium">
        <div class="flex-box row-margin-contents">
          <div class="flex-box__cell flex-1">
            <h3 class="text-title-2">신청금액</h3>
          </div>
          <div class="flex-box__cell">
            <BasicButton
              ref="modifyButton"
              v-if="!state.modifyMode"
              size="mini"
              :line="true"
              theme="quaternary"
              inline="true"
              @click="modify"
              >수정</BasicButton
            >
            <BasicButton
              ref="saveButton"
              v-if="state.modifyMode"
              size="mini"
              :line="true"
              theme="secondary"
              inline="true"
              @click="save"
              >저장</BasicButton
            >
          </div>
        </div>

        <FormList>
          <FormListItem
            titleText="차량구입금액"
            target="#layerAutoUsedLoanContractCarAmount"
            :require="true"
            :disabled="!state.modifyMode"
          >
            <FormInvalid :error="state.carAmountError">
              <InputBlock
                :error="state.carAmountError"
                :disabled="!state.modifyMode"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="차량구입금액"
                    id="layerAutoUsedLoanContractCarAmount"
                    pattern="\d*"
                    :useDelete="false"
                    align="right"
                    :disabled="!state.modifyMode"
                    defaultValue="15,300,000"
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
                >삼천오백만원</FormHelpText
              >
              <NoticeText :classNames="{ wrap: 'row-margin-item' }">
                매매계약서상 매매금액을 입력해 주세요.
              </NoticeText>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대출신청금액"
            target="#layerAutoUsedLoanContractLoanAmount"
            :disabled="!state.modifyMode"
          >
            <FormInvalid :error="state.loanAmountError">
              <InputBlock
                :error="state.loanAmountError"
                :disabled="!state.modifyMode"
              >
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="대출신청금액"
                    id="layerAutoUsedLoanContractLoanAmount"
                    pattern="\d*"
                    :useDelete="false"
                    align="right"
                    :disabled="!state.modifyMode"
                    defaultValue="13,000,000"
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
                >삼천오백만원</FormHelpText
              >
              <NoticeText :classNames="{ wrap: 'row-margin-item' }">
                대출신청금액은 차량 기준가격과 차량구입비용을 초과할 수
                없습니다.
              </NoticeText>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <section>
        <h3 class="text-title-2 row-margin-contents">상세정보</h3>

        <FormList>
          <FormListItem titleText="대출기간" :forceFocus="true">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerAutoUsedLoanContractPeriod"
                  id="layerAutoUsedLoanContractPeriod001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>24개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerAutoUsedLoanContractPeriod"
                  id="layerAutoUsedLoanContractPeriod002"
                >
                  <BoxCheckLabel>36개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerAutoUsedLoanContractPeriod"
                  id="layerAutoUsedLoanContractPeriod003"
                >
                  <BoxCheckLabel>48개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerAutoUsedLoanContractPeriod"
                  id="layerAutoUsedLoanContractPeriod004"
                >
                  <BoxCheckLabel>60개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </FormListItem>
        </FormList>

        <BasicBox className="row-margin-contents">
          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>금리</KeyValueTitle>
              <KeyValueText>10.9 %</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>월 납입금액</KeyValueTitle>
              <KeyValueText>605,300 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>약정하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
