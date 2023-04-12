<script>
// My_M01_l014
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import iconInformation from '@/assets/images/icon/information.svg?component';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    FormList,
    BoxCheckList,
    BoxCheckLabel,
    FormListItem,
    FormInvalid,
    FormHelpText,
    BasicSelect,
    BasicInput,
    BoxCheckListItem,
    BoxCheck,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicHr,
    TextButton,
    NoticeText,
    iconInformation,
  },
  setup() {
    const layer = ref(null);
    const state = reactive({
      phoneError: false,
      typeError: false,
      periodError: false,
      amountError: false,
      accountError: false,
      dateError: false,
    });

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
          <PopupTitle>중도상환신청</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          중도상환하실 금액을<br />
          <strong>입력해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-1 font-weight-medium">오토론 12가4567</h3>
            <p
              class="text-body-4 color-gray row-margin-small row-margin-bottom-none"
            >
              벤츠 더 뉴 C-class(W205/S205)
            </p>
            <p class="text-body-5 color-gray font-weight-light row-margin-mini">
              가솔린 2.0 Sedan (개소세 30% 인하)<br />
              C200 AMG Line
            </p>
          </BasicBoxHeadLeft>
        </BasicBoxHead>

        <KeyValueList margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>결제일</KeyValueTitle>
            <KeyValueText>2022.02.05 (매월 5일)</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>결제회차</KeyValueTitle>
            <KeyValueText>16/60</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>계약기간</KeyValueTitle>
            <KeyValueText>2021.02.10 ~ 2022.02.10</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>의료금리</KeyValueTitle>
            <KeyValueText>0.0%</KeyValueText>
          </KeyValueItem>
        </KeyValueList>

        <BasicHr
          theme="quaternary"
          type="contents"
          className="row-margin-item-group"
        />

        <KeyValueList>
          <KeyValueItem>
            <KeyValueTitle class="text-body-1 color-black font-weight-medium">
              결제예정금액
            </KeyValueTitle>

            <KeyValueText class="text-title-2 font-weight-bold"
              >845,000
              <spna class="font-weight-medium text-body-1"
                >원</spna
              ></KeyValueText
            >
          </KeyValueItem>
        </KeyValueList>
      </BasicBox>

      <FormList :classNames="{ wrap: 'row-margin-contents-group' }">
        <FormListItem titleText="상환방법" :forceFocus="true">
          <FormInvalid :error="state.typeError">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  name="layerMyLoanIntermediateCheck001"
                  id="layerMyLoanIntermediateCheck001_001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>일부상환</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="layerMyLoanIntermediateCheck001"
                  id="layerMyLoanIntermediateCheck001_002"
                >
                  <BoxCheckLabel>전체상환</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <!-- Case : 일부상환일 경우 노출 -->
        <FormListItem titleText="상환기준" :forceFocus="true">
          <FormInvalid :error="state.typeError">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  name="layerMyLoanIntermediateCheck002"
                  id="layerMyLoanIntermediateCheck002_001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>원금기준</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="layerMyLoanIntermediateCheck002"
                  id="layerMyLoanIntermediateCheck002_002"
                >
                  <BoxCheckLabel>입금액기준</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="중도상환 후 결제일자"
          target="#layerMyLoanIntermediateDate"
          :selectOnly="true"
        >
          <FormInvalid :error="state.dateError">
            <InputBlock :error="state.datedError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '2021.11.20',
                    },
                    {
                      value: '2',
                      text: '2021.12.20',
                    },
                    {
                      value: '3',
                      text: '2022.01.20',
                    },
                  ]"
                  buttonTitle="결제일자 선택하기"
                  layerTitle="결제일자를 선택해 주세요"
                  id="layerMyLoanIntermediate001"
                  buttonId="layerMyLoanIntermediateDate"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : 일부상환일 경우 노출 -->

        <FormListItem
          titleText="상환금액"
          target="#layerMyLoanIntermediateAmount"
        >
          <FormInvalid :error="state.amountError">
            <InputBlock :error="state.amountError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  align="right"
                  :useDelete="false"
                  pattern="\d*"
                  title="상환금액"
                  id="layerMyLoanIntermediateAmount"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-3">원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <!-- Case : 상환금액 입력 시 노출 -->
            <FormHelpText class="align-right">오십만원</FormHelpText>
            <!-- // Case : 상환금액 입력 시 노출 -->
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="결제방법" :forceFocus="true">
          <FormInvalid :error="state.typeError">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  name="layerMyLoanIntermediateCheck003"
                  id="layerMyLoanIntermediateCheck003_001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>즉시출금</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="layerMyLoanIntermediateCheck003"
                  id="layerMyLoanIntermediateCheck003_002"
                >
                  <BoxCheckLabel>가상계좌</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <div class="inline-wrap align-right row-margin-item">
          <TextButton theme="quaternary">
            중도상환신청 유의사항
            <template v-slot:rightIcon>
              <iconInformation />
            </template>
          </TextButton>
        </div>

        <!-- Case : 가상계좌일 경우 노출 -->
        <FormListItem
          titleText="가상계좌"
          target="#layerMyLoanIntermediateVirtualAccount"
          :selectOnly="true"
        >
          <FormInvalid :error="state.accountError">
            <InputBlock :error="state.accountError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '하나 123-456-789012',
                    },
                    {
                      value: '2',
                      text: '신한 123-456-789012',
                    },
                    {
                      value: '3',
                      text: '우리 123-456-789012',
                    },
                    {
                      value: '4',
                      text: '농협 123-456-789012',
                    },
                    {
                      value: '5',
                      text: '국민 123-456-789012',
                    },
                    {
                      value: '6',
                      text: '카카오뱅크 123-456-789012',
                    },
                    {
                      value: '7',
                      text: '기업 123-456-789012',
                    },
                  ]"
                  buttonTitle="가상계좌 선택하기"
                  layerTitle="가상계좌를 선택해 주세요"
                  id="layerMyLoanIntermediate"
                  buttonId="layerMyLoanIntermediateVirtualAccount"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : 가상계좌일 경우 노출 -->

        <!-- Case : 즉시출금일 경우 노출 -->
        <FormListItem
          titleText="출금계좌"
          target="#layerMyLoanIntermediateImmediate"
          :selectOnly="true"
        >
          <FormInvalid :error="state.accountError">
            <InputBlock :error="state.accountError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '하나 123-456-789012',
                    },
                    {
                      value: '2',
                      text: '신한 123-456-789012',
                    },
                    {
                      value: '3',
                      text: '우리 123-456-789012',
                    },
                  ]"
                  buttonTitle="출금계좌 선택하기"
                  layerTitle="즉시출금계좌를 선택해 주세요"
                  id="layerMyLoanIntermediate002"
                  buttonId="layerMyLoanIntermediateImmediate"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText
              >자동이체 등록된 계좌 중
              <span class="color-green"
                >하나, 농협, 국민, 기업,신한, 우리은행</span
              >
              계좌만 가능합니다.</FormHelpText
            >
          </FormInvalid>
        </FormListItem>

        <div class="row-margin-item">
          <KeyValueList>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>
                <NoticeText
                  >새로운 계좌로 출금하시겠어요?</NoticeText
                ></KeyValueTitle
              >
              <KeyValueText>
                <TextButton theme="secondary" :underline="true"
                  >신규계좌등록</TextButton
                ></KeyValueText
              >
            </KeyValueItem>
          </KeyValueList>
        </div>
      </FormList>
      <!-- // Case : 즉시출금일 경우 노출 -->

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">취소</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :minSide="true">중도상환금액 조회</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanIntermediate.scss';
</style>
