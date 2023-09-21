<script>
// My_M08_l025
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
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';

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
    BasicDatepicker,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
  },
  setup() {
    const state = reactive({
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
          구매 정보를<br />
          확인해 주세요
        </PageMainText>
      </PageTextGroup>

      <div>
        <ul :class="$style['basic-list']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              이용자 명의 리스상품으로, 소유권 이전 등록 절차가 필요하지
              않습니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              취득세가 발생됩니다. 리스차량 이용자는 리스
              <span class="color-red font-weight-regular"
                >계약 종료일로부터 60일이내에 취득세(2%)를 신고 납부</span
              >하여야 합니다. 불이행시 가산세를 포함한 금액으로 과세됩니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              리스 종료 이후,
              <span class="color-red font-weight-regular">저당해지</span>가
              필요합니다.
            </div>
          </li>
        </ul>
      </div>

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
            target="#layerMyLoanPostMaturityLeasePurchaseUserConfirmDateButton"
          >
            <FormInvalid :error="state.dateError">
              <InputBlock :error="state.dateError">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="입금예약일자"
                    id="layerMyLoanPostMaturityLeasePurchaseUserConfirmDate"
                    buttonId="layerMyLoanPostMaturityLeasePurchaseUserConfirmDateButton"
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
@import '@/assets/scss/views/myLoan/LayerMyLoanPostMaturityLeasePurchaseUserConfirm.scss';
</style>
