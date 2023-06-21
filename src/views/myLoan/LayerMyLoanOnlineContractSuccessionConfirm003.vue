<script>
// MY_M03_l026(MY_M03_l026a)
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

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
    StepProgress,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NoticeText,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
  },
  setup() {
    const layer = ref(null);

    return {
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
          온라인약정
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="8" :current="4" />
      </template>

      <PageTextGroup>
        <PageMainText>
          승계확약서를<br />
          <strong>확인해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <div>
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">계약정보</h3>

          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">123가1234</h3>
                <p class="text-body-4 color-gray row-margin-small">
                  아반떼 인스퍼레이션
                </p>
              </BasicBoxHeadLeft>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>계약번호(전)</KeyValueTitle>
                <KeyValueText>L0000000000000</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>계약번호(후)</KeyValueTitle>
                <KeyValueText>L0000000000000</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>

          <BasicBox theme="septenary" className="row-margin-item-group">
            <div :class="$style['agree-list']">
              <div :class="$style['agree-list__head']">
                <CheckBox
                  id="layerMyLoanOnlineContractSuccessionConfirm003Agree001"
                  :classNames="{
                    wrap: $style['agree-list__checkbox'],
                  }"
                  theme="tertiary"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>승계고객 안내사항</CheckBoxLabelText>
                </CheckBox>
                <div :class="$style['agree-list__right']">
                  <button type="button" :class="$style['agree-list__link']">
                    <span :class="$style['agree-list__link-text']">
                      상세보기
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">포괄적 승계 동의</h3>

          <div :class="$style['basic-list']">
            <div
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-gray-tertiary',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']">가.</div>
              <div :class="$style['basic-list__content']">
                양도인(승계 전 이용자)이 하나캐피탈에 예치한 보증금 및 잔여
                선납금을 반환 없이 양수인(승계 후 이용자)에게 귀속합니다.
              </div>
            </div>
          </div>

          <BasicBox className="row-margin-item-group">
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>보증금</KeyValueTitle>
                <KeyValueText>1,000,000원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>잔여 선납금</KeyValueTitle>
                <KeyValueText>1,000,000원</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>

          <div :class="$style['basic-list']">
            <div
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-gray-tertiary',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']">나.</div>
              <div :class="$style['basic-list__content']">
                승계 후 첫 도래 원리금 납부<br />승계시점 첫 도래하는
                원리금(리스료)은 일할 계산 금액이 아닌 원리금 계산 전체금액이
                청구되며, 차량 인도시점 원리금 일할 정산은 당사자간 정산을
                원칙으로 합니다.
              </div>
            </div>
          </div>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">승계수수료 납부</h3>

          <p class="text-body-3 color-gray-tertiary">
            오토리스 차량의 승계 시 승계 수수료(인지세포함)가 부과되며 입금확인
            시 승계절차를 진행합니다.
          </p>

          <BasicBox className="row-margin-item-group">
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>승계수수료</KeyValueTitle>
                <KeyValueText>1,000,000원</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>

          <NoticeText>
            입금계좌 : 하나은행 “000-000000-00000”<br />
            예금주 : 하나캐피탈㈜
          </NoticeText>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">해지 후 보증금 환불</h3>

          <p class="text-body-3 color-gray-tertiary">
            당사와의 계약종료 이후 양도인에게 발생한 범칙금/과태료/제세금 정산을
            위한 수취한 잔여 보증금이 있는 경우 환불시점에 양도인에게 지급함을
            원칙으로 합니다.
          </p>

          <div class="row-margin-item-group">
            <BasicBox theme="septenary" className="row-margin-item">
              <div :class="$style['agree-list']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="layerMyLoanOnlineContractSuccessionConfirm003Agree002_001"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText
                      >양도인 환불(자동이체등록 계좌)</CheckBoxLabelText
                    >
                  </CheckBox>
                </div>
              </div>
            </BasicBox>
            <BasicBox theme="septenary">
              <div :class="$style['agree-list']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="layerMyLoanOnlineContractSuccessionConfirm003Agree002_002"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText
                      >양도인 외 제 3자 환불에 동의</CheckBoxLabelText
                    >
                  </CheckBox>
                </div>
              </div>
            </BasicBox>
          </div>

          <NoticeText>
            제3자 환불 시 상기 양도인 동의 및 증빙서류 필첨<br />
            (증빙서류 : 이체확인증, 신분증, 통장사본)
          </NoticeText>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">주요고지사항</h3>

          <BasicBox theme="septenary">
            <div :class="$style['agree-list']">
              <div :class="$style['agree-list__head']">
                <CheckBox
                  id="layerMyLoanOnlineContractSuccessionConfirm003Agree003"
                  :classNames="{
                    wrap: $style['agree-list__checkbox'],
                  }"
                  theme="tertiary"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>주요고지사항</CheckBoxLabelText>
                </CheckBox>
                <div :class="$style['agree-list__right']">
                  <button type="button" :class="$style['agree-list__link']">
                    <span :class="$style['agree-list__link-text']">
                      상세보기
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </BasicBox>
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
            <BasicButton>약정하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractSuccessionConfirm003.scss';
</style>
