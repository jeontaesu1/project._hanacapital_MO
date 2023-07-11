<script>
// BF_M04_l022
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

import IconLink from '@/assets/images/icon/link.svg?component';
import IconCheckDocument from '@/assets/images/icon/check-document.svg?component';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    StepProgress,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicBoxHead,
    BasicBoxHeadLeft,
    ButtonList,
    ButtonListItem,
    BasicButton,
    NoticeText,
    IconLink,
    IconCheckDocument,
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
          <PopupTitle>온라인약정</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="5" :current="4" />
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>중도금 승계 상세정보를</strong><br />
          확인해 주세요
        </PageMainText>
        <PageSubText>
          신규로 체결하는 절차와 동일하게 금융회사가<br />
          정한 심사기준에 따라 심사가 이루어집니다.
        </PageSubText>
      </PageTextGroup>

      <div>
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">계약자 정보</h3>

          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">양도자</h3>
              </BasicBoxHeadLeft>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>성명</KeyValueTitle>
                <KeyValueText>김하나</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>생년월일</KeyValueTitle>
                <KeyValueText>1999.01.23</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>휴대폰번호</KeyValueTitle>
                <KeyValueText>010-####-5678</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>

          <BasicBox className="row-margin-item-group">
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">양수자</h3>
              </BasicBoxHeadLeft>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>성명</KeyValueTitle>
                <KeyValueText>김하나</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>생년월일</KeyValueTitle>
                <KeyValueText>1999.01.23</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>휴대폰번호</KeyValueTitle>
                <KeyValueText>010-####-5678</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">물건 정보</h3>

          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>사업자명</KeyValueTitle>
                <KeyValueText>김하나</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>동</KeyValueTitle>
                <KeyValueText>1</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>호</KeyValueTitle>
                <KeyValueText>101</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">결제 정보</h3>

          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>매월 15일</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>

          <div :class="[$style['notice-section'], 'row-margin-contents']">
            <h3 :class="$style['notice-section__title']">
              이자지급 시기 및 방법
            </h3>
            <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
              <li :class="$style['basic-list__item']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  최초 이자는 여신개시일로부터 1개월 이내에, 그 후의 이자는
                  지급한 이자계산 최종일 익일부터 1개월 이내에 지급합니다.
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">계약 정보</h3>

          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">
                  중도금대출(비주택)
                </h3>
              </BasicBoxHeadLeft>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>거래구분</KeyValueTitle>
                <KeyValueText>한도거래</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출(한도)금액</KeyValueTitle>
                <KeyValueText>50,000,000 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>이자율</KeyValueTitle>
                <KeyValueText>변동 회사채(무보증)AA-:3년+2.400%</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>지연배상금율</KeyValueTitle>
                <KeyValueText>약정이자율+3%</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>중도상환수수료</KeyValueTitle>
                <KeyValueText>0 %</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>인지세</KeyValueTitle>
                <KeyValueText>75,000 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출개시일</KeyValueTitle>
                <KeyValueText>분양계약서참조</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출만료일</KeyValueTitle>
                <KeyValueText>2023.08.02</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출상환방법</KeyValueTitle>
                <KeyValueText>대출기간 만기일 전액 상환</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <div class="flex-box row-margin-contents">
            <div class="flex-box__cell">
              <h3 class="text-title-2">서류등록</h3>
            </div>
            <div class="flex-box__cell flex-box__cell--small">
              <div class="text-body-3">(선택)</div>
            </div>
          </div>

          <!-- Case : : 등록 전 -->
          <button
            type="button"
            :class="[$style['add-button'], 'row-margin-item']"
          >
            <span :class="$style['add-button__inner']">
              <span :class="$style['add-button__text']">서류등록</span>
              <span
                :class="[
                  $style['add-button__icon'],
                  $style['add-button__icon--secondary'],
                ]"
              >
                <IconLink />
              </span>
            </span>
          </button>
          <!-- //Case : : 등록 전 -->

          <!-- Case : : 등록 후 -->
          <BasicBox>
            <div class="flex-box">
              <div class="flex-box__cell">
                <IconCheckDocument class="display-block" />
              </div>
              <div class="flex-box__cell flex-1">
                <div class="text-body-3">등록 완료</div>
              </div>
              <div class="flex-box__cell">
                <BasicButton size="mini" theme="quaternary">
                  추가첨부
                </BasicButton>
              </div>
            </div>
          </BasicBox>
          <!-- //Case : : 등록 후 -->

          <NoticeText :classNames="{ wrap: 'row-margin-item-group' }">
            약정 후 해당 URL로 재진입 시 추가 서류 등록이 가능합니다.
          </NoticeText>
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
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractIntermediateSuccessionAssigneeConfirm.scss';
</style>
