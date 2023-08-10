<script>
// LR_M04_p004
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
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
import BankSelect from '@/components/ui/form/BankSelect.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

import IconLink from '@/assets/images/icon/link.svg?component';
import IconCheckDocument from '@/assets/images/icon/check-document.svg?component';

export default {
  components: {
    PageContents,
    ButtonList,
    ButtonListItem,
    BasicButton,
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
    BankSelect,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    CarEmblem,
    BasicSelect,
    IconLink,
    IconCheckDocument,
  },
  setup() {
    const state = reactive({
      storeError: false,
      salespersonError: false,
      consignmentCompanyNameError: false,
      registrationCompanyNameError: false,
      bankError: false,
      accountError: false,
      domesticBankNameError: false,
      dealer001Error: false,
      dealer002Error: false,
      agency001Error: false,
      agency002Error: false,
    });

    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '품의등록');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <div>
      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">계약자 정보</h3>
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <!-- DD : [개인]의 경우 '이름' 출력 / [개인사업자] 혹은 [법인사업자]일 경우 '회사명' 출력 -->
              <h3 class="text-body-1 font-weight-medium">홍길동</h3>
            </BasicBoxHeadLeft>
          </BasicBoxHead>
          <KeyValue margin="regular">
            <!-- Case : 개인일 경우 -->
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>주민등록번호</KeyValueTitle>
              <KeyValueText>710908-1******</KeyValueText>
            </KeyValueItem>
            <!-- //Case : 개인일 경우 -->

            <!-- Case : 개인사업자일 경우 -->
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>대표자 이름</KeyValueTitle>
              <KeyValueText>홍길동</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>대표자 주민등록번호</KeyValueTitle>
              <KeyValueText>710908-1******</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>사업자번호</KeyValueTitle>
              <KeyValueText>123-12-12345</KeyValueText>
            </KeyValueItem>
            <!-- //Case : 개인사업자일 경우 -->

            <!-- Case : 법인사업자일 경우 -->
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>법인등록번호</KeyValueTitle>
              <KeyValueText>123-12-12345</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>사업자번호</KeyValueTitle>
              <KeyValueText>123-12-12345</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>연대보증인 이름</KeyValueTitle>
              <KeyValueText>홍길동</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>연대보증인 주민등록번호</KeyValueTitle>
              <KeyValueText>710908-1******</KeyValueText>
            </KeyValueItem>
            <!-- //Case : 법인사업자일 경우 -->

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>진행일정</KeyValueTitle>
              <KeyValueText>2022.10.03</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>상품명</KeyValueTitle>
              <KeyValueText>장기렌트</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>견적번호</KeyValueTitle>
              <KeyValueText>[강남지점]A12345678978</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>모델</KeyValueTitle>
              <KeyValueText>
                더 뉴 G70 2021년형 가솔린 2.0 터보<br />
                (개소세5%기준) 2WD A/T
              </KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>차량 가격</KeyValueTitle>
              <KeyValueText> 41,100,000 원 </KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>선납금/보증금</KeyValueTitle>
              <KeyValueText> 0 원 / 0 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>월납입금</KeyValueTitle>
              <KeyValueText>902,770 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>탁송</KeyValueTitle>
              <KeyValueText>외주탁송, 부산 출고장, 서울 도착</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>출고/유형</KeyValueTitle>
              <KeyValueText>대리점출고 / 개인</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2">판매점 정보</h3>

        <BasicBox className="row-margin-contents">
          <KeyValue>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>브랜드</KeyValueTitle>
              <KeyValueText>
                <!-- Case : '국산차'일 경우 -->
                <div class="flex-box justify-conten-end">
                  <div class="flex-box__cell">
                    <CarEmblem code="1001" name="현대" />
                  </div>
                  <div class="flex-box__cell flex-box__cell--small">현대</div>
                </div>
                <!-- // Case : '국산차'일 경우 -->

                <!-- Case : '수입차'일 경우 -->
                <div class="flex-box justify-conten-end">
                  <div class="flex-box__cell">
                    <CarEmblem code="2001" name="벤츠" />
                  </div>
                  <div class="flex-box__cell flex-box__cell--small">벤츠</div>
                </div>
                <!-- // Case : '수입차'일 경우 -->
              </KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <FormList>
          <!-- Case : '국산차', '국산차(특판출고)'일 경우 -->
          <FormListItem
            titleText="판매대리점"
            target="#leaseRentEstimationSystemSaveReviewApprovalRequestRentStoreSearch"
          >
            <FormInvalid :error="state.storeError">
              <InputBlock :error="state.storeError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="판매대리점" :disabled="true" />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="mini"
                    theme="tertiary"
                    id="leaseRentEstimationSystemSaveReviewApprovalRequestRentStoreSearch"
                    >검색</BasicButton
                  >
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <!-- // Case : '국산차', '국산차(특판출고)'일 경우 -->

          <!-- Case : '수입차'일 경우 -->
          <FormListItem
            titleText="딜러사"
            target="#leaseRentEstimationSystemSaveReviewApprovalRequestRentDealer001Button"
            :selectOnly="true"
          >
            <FormInvalid :error="state.dealer001Error">
              <InputBlock :error="state.dealer001Error">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '한성자동차㈜',
                      },
                      {
                        value: '2',
                        text: '주식회사진모터스',
                      },
                      {
                        value: '3',
                        text: '중앙모터스㈜',
                      },
                      {
                        value: '4',
                        text: '교학모터스㈜',
                      },
                      {
                        value: '5',
                        text: '경남자동차판매㈜',
                      },
                    ]"
                    buttonTitle="딜러사 선택하기"
                    layerTitle="딜러사를 선택해 주세요"
                    id="leaseRentEstimationSystemSaveReviewApprovalRequestRentDealer001"
                    buttonId="leaseRentEstimationSystemSaveReviewApprovalRequestRentDealer001Button"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="전시장"
            titleOptionalText="(판매대리점)"
            target="#leaseRentEstimationSystemSaveReviewApprovalRequestRentAgency001Button"
            :selectOnly="true"
            :disabled="true"
          >
            <FormInvalid :error="state.agency001Error">
              <InputBlock :error="state.agency001Error" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '강남지점',
                      },
                      {
                        value: '2',
                        text: '서초지점',
                      },
                      {
                        value: '3',
                        text: '잠실지점',
                      },
                    ]"
                    buttonTitle="전시장 선택하기"
                    layerTitle="전시장을 선택해 주세요"
                    id="leaseRentEstimationSystemSaveReviewApprovalRequestRentAgency001"
                    buttonId="leaseRentEstimationSystemSaveReviewApprovalRequestRentAgency001Button"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <!-- // Case : '수입차'일 경우 -->

          <!-- Case : '수입차_제휴사'인 경우 -->
          <FormListItem
            titleText="딜러사"
            target="#leaseRentEstimationSystemSaveReviewApprovalRequestRentDealer002Button"
            :selectOnly="true"
            :disabled="true"
          >
            <FormInvalid :error="state.dealer002Error">
              <InputBlock :error="state.dealer002Error" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '한성자동차㈜',
                      },
                      {
                        value: '2',
                        text: '주식회사진모터스',
                      },
                      {
                        value: '3',
                        text: '중앙모터스㈜',
                      },
                      {
                        value: '4',
                        text: '교학모터스㈜',
                      },
                      {
                        value: '5',
                        text: '경남자동차판매㈜',
                      },
                    ]"
                    buttonTitle="딜러사 선택하기"
                    layerTitle="딜러사를 선택해 주세요"
                    id="leaseRentEstimationSystemSaveReviewApprovalRequestRentDealer002"
                    buttonId="leaseRentEstimationSystemSaveReviewApprovalRequestRentDealer002Button"
                    defaultValue="1"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="전시장"
            titleOptionalText="(판매대리점)"
            target="#leaseRentEstimationSystemSaveReviewApprovalRequestRentAgency002Button"
            :selectOnly="true"
          >
            <FormInvalid :error="state.agency002Error">
              <InputBlock :error="state.agency002Error">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '강남지점',
                      },
                      {
                        value: '2',
                        text: '서초지점',
                      },
                      {
                        value: '3',
                        text: '잠실지점',
                      },
                    ]"
                    buttonTitle="전시장 선택하기"
                    layerTitle="전시장을 선택해 주세요"
                    id="leaseRentEstimationSystemSaveReviewApprovalRequestRentAgency002"
                    buttonId="leaseRentEstimationSystemSaveReviewApprovalRequestRentAgency002Button"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <!-- // Case : '수입차_제휴사'인 경우 -->

          <FormListItem
            titleText="판매사원"
            titleOptionalText="(선택)"
            target="#leaseRentEstimationSystemSaveReviewApprovalRequestRentSalespersonSearch"
          >
            <FormInvalid :error="state.salespersonError">
              <InputBlock :error="state.salespersonError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="판매사원" :disabled="true" />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="mini"
                    theme="tertiary"
                    id="leaseRentEstimationSystemSaveReviewApprovalRequestRentSalespersonSearch"
                    >검색</BasicButton
                  >
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">영업사원(AG) 정보</h3>
        <BasicBox>
          <h4 class="text-body-1 font-weight-medium">김사원</h4>
        </BasicBox>
      </section>

      <!-- Case : 국산차(특판출고)일 경우 미노출 -->
      <section class="row-margin-container-medium">
        <div class="flex-box row-margin-contents">
          <div class="flex-box__cell">
            <!-- Case : 국산차일 경우 -->
            <h3 class="text-title-2">계약금 송금계좌</h3>
            <!-- // Case : 국산차일 경우 -->
            <!-- Case : 수입차일 경우 -->
            <h3 class="text-title-2">차량대금 송금계좌</h3>
            <!-- // Case : 수입차일 경우 -->
          </div>
        </div>

        <FormList>
          <FormListItem
            titleText="은행명"
            target="#leaseRentEstimationSystemSaveReviewApprovalRequestRentBankButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.bankError">
              <InputBlock :error="state.bankError">
                <InputBlockCell :flexible="true">
                  <BankSelect
                    id="leaseRentEstimationSystemSaveReviewApprovalRequestRentBank"
                    buttonId="leaseRentEstimationSystemSaveReviewApprovalRequestRentBankButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="계좌번호"
            target="#leaseRentEstimationSystemSaveReviewApprovalRequestRentAccount"
          >
            <FormInvalid :error="state.accountError">
              <InputBlock :error="state.accountError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    pattern="\d*"
                    title="계좌번호"
                    id="leaseRentEstimationSystemSaveReviewApprovalRequestRentAccount"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton size="mini" theme="tertiary">
                    계좌확인
                  </BasicButton>
                </template>
              </InputBlock>
              <FormInvalidMessage
                >계좌번호를 다시 입력해 주세요</FormInvalidMessage
              >
              <FormHelpText>-없이 숫자만 입력해 주세요.</FormHelpText>
            </FormInvalid>
          </FormListItem>
          <FormListItem
            titleText="예금주명"
            target="#leaseRentEstimationSystemSaveReviewApprovalRequestRentDomesticBankName"
            :disabled="true"
          >
            <FormInvalid :error="state.domesticBankNameError">
              <InputBlock :error="state.domesticBankNameError" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="예금주명"
                    id="leaseRentEstimationSystemSaveReviewApprovalRequestRentDomesticBankName"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <section class="row-margin-container-medium">
        <div class="row-margin-contents">
          <div class="flex-box">
            <div class="flex-box__cell">
              <h3 class="text-title-2">서류등록</h3>
            </div>
            <div class="flex-box__cell flex-box__cell--small">
              <div class="text-body-3">(선택)</div>
            </div>
          </div>
          <p
            class="text-body-3 font-weight-light color-gray-tertiary row-margin-small"
          >
            매매계약서, 계좌확인증을 등록해 주세요.
          </p>
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
      </section>
      <!-- // Case : 국산차(특판출고)일 경우 미노출 -->
    </div>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :minSide="true" :line="true" theme="quaternary"
            >이전</BasicButton
          >
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true">품의등록 요청</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemSaveReviewApprovalRequestRent.scss';
</style>
