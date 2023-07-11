<script>
// IF_M02_p001
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';

import IconArrow from '@/assets/images/icon/dropdown.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicBox,
    BasicBoxHead,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    InputBlock,
    InputBlockCell,
    BasicInput,
    ButtonList,
    ButtonListItem,
    BasicButton,
    TextButton,
    BasicDatepicker,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    UnitText,
    NavTab,
    NavTabButton,
    StickyBar,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
    IconArrow,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      carNumberError: false,
      dateError: false,
      minDate: '2023.04.21',
      maxDate: '2023.04.21',
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '재고금융 대출신청');
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
    <PageTextGroup>
      <PageMainText>
        약정 목록을 확인하고<br />
        <strong> 약정을 진행하세요 </strong>
      </PageMainText>
    </PageTextGroup>

    <div>
      <!-- Case : 상품 2개일 경우 노출 -->
      <StickyBar>
        <NavTab>
          <NavTabButton tagName="button" type="button" :active="true"
            >재고금융</NavTabButton
          >
          <NavTabButton tagName="button" type="button">재고금융 Ⅱ</NavTabButton>
        </NavTab>
      </StickyBar>
      <!-- // Case : 상품 2개일 경우 노출 -->

      <BasicBox>
        <BasicBoxHead>
          <h4 class="text-body-1 font-weight-medium">
            주식회사알차이노베이션 (재고금융)
          </h4>
        </BasicBoxHead>

        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>약정기간</KeyValueTitle>
            <KeyValueText>2021.11.10 ~ 2022.01.10</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>한도금액</KeyValueTitle>
            <KeyValueText>200,000,000 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>한도잔액</KeyValueTitle>
            <KeyValueText>2,000,000 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>실행건수</KeyValueTitle>
            <KeyValueText>N 건</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>실행금액</KeyValueTitle>
            <KeyValueText>N 건</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <FormList :classNames="{ wrap: 'row-margin-contents' }">
        <FormListItem
          titleText="차량번호"
          target="#inventoryFinanceExtensionListCarNumber"
        >
          <FormInvalid :error="state.carNumberError">
            <InputBlock :error="state.carNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="차량번호"
                  id="inventoryFinanceExtensionListCarNumber"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="조회기간" :forceFocus="true">
          <FormInvalid :error="state.dateError">
            <InputBlock :error="state.dateError">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="조회기간 시작 날짜"
                  id="inventoryFinanceExtensionListDateStart"
                  buttonId="inventoryFinanceExtensionListDateStartButton"
                  :max="state.maxDate"
                  v-model="state.minDate"
                />
              </InputBlockCell>
              <InputBlockCell margin="regular">
                <div class="text-body-3">~</div>
              </InputBlockCell>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicDatepicker
                  title="조회기간 종료 날짜"
                  id="inventoryFinanceExtensionListDateEnd"
                  buttonId="inventoryFinanceExtensionListDateEndButton"
                  :min="state.minDate"
                  v-model="state.maxDate"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>조회기간은 최대 7일까지 가능합니다.</FormHelpText>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <BasicButton
        :line="true"
        :classNames="{ wrap: 'row-margin-contents-group' }"
      >
        조회
      </BasicButton>
    </div>

    <!-- Case : 조회 후 노출 -->
    <BasicHr className="row-margin-container-medium" />

    <div class="contents-wrap">
      <ul class="reset-list">
        <!-- Case : 대출신청 정보 입력 전 -->
        <li class="row-margin-item-group">
          <BasicBox>
            <div class="row-margin-item">
              <div class="text-body-4 font-weight-light">2023.01.10</div>
              <div class="text-body-1 font-weight-medium row-margin-small">
                11가1234
              </div>
              <div class="text-body-4 color-gray row-margin-small">
                A3(3세대) 세단 40 TFSI 2019
              </div>
            </div>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출신청금액</KeyValueTitle>
                <KeyValueText>
                  <UnitText rightUnit="만원" align="right" size="regular">
                    800
                  </UnitText>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <ButtonList
              :classNames="{
                wrap: 'row-margin-contents-small',
              }"
            >
              <ButtonListItem>
                <BasicButton theme="tertiary" size="small"
                  >정보입력</BasicButton
                >
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
        <!-- //Case : 대출신청 정보 입력 전 -->

        <!-- Case : 대출신청 정보 입력 완료 후 -->
        <li class="row-margin-item-group">
          <BasicBox>
            <UiAccordion tagName="div">
              <UiAccordionItem tagName="div">
                <div class="row-margin-item">
                  <div class="text-body-4 font-weight-light">2023.01.10</div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    11가1234
                  </div>
                  <div class="text-body-4 color-gray row-margin-small">
                    A3(3세대) 세단 40 TFSI 2019
                  </div>
                </div>

                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3 align-items-center',
                    }"
                  >
                    <KeyValueTitle>대출신청금액</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box">
                        <div class="flex-box__cell flex-1">
                          <UnitText
                            rightUnit="만원"
                            align="right"
                            size="regular"
                          >
                            800
                          </UnitText>
                        </div>
                        <div class="flex-box__cell flex-box__cell--small">
                          <UiAccordionOpener
                            :classNames="{
                              button: $style['opener'],
                            }"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <UiAccordionLayer>
                  <div :class="$style['detail-contents']">
                    <KeyValue margin="regular">
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3',
                        }"
                      >
                        <KeyValueTitle>상품구분</KeyValueTitle>
                        <KeyValueText>재고1</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3',
                        }"
                      >
                        <KeyValueTitle>제조사</KeyValueTitle>
                        <KeyValueText>BMW</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3',
                        }"
                      >
                        <KeyValueTitle>한도잔액</KeyValueTitle>
                        <KeyValueText>25,200,000 원</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3',
                        }"
                      >
                        <KeyValueTitle>대출신청금액</KeyValueTitle>
                        <KeyValueText>10,000,000 원</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3',
                        }"
                      >
                        <KeyValueTitle>결제일자</KeyValueTitle>
                        <KeyValueText>15일</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3',
                        }"
                      >
                        <KeyValueTitle>대출기간</KeyValueTitle>
                        <KeyValueText>3개월</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3',
                        }"
                      >
                        <KeyValueTitle>이전 소유자</KeyValueTitle>
                        <KeyValueText>김하나</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3',
                        }"
                      >
                        <KeyValueTitle>계좌선택</KeyValueTitle>
                        <KeyValueText>Y</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3',
                        }"
                      >
                        <KeyValueTitle>서류등록</KeyValueTitle>
                        <KeyValueText>Y</KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </UiAccordionLayer>

                <ButtonList
                  :classNames="{
                    wrap: 'row-margin-contents-small',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton theme="quaternary" size="small">
                      정보수정
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton theme="tertiary" size="small"
                      >확정</BasicButton
                    >
                  </ButtonListItem>
                </ButtonList>
              </UiAccordionItem>
            </UiAccordion>
          </BasicBox>
        </li>
        <!-- //Case : 대출신청 정보 입력 완료 후 -->

        <!-- Case : 확정 버튼 선택한 경우 -->
        <li class="row-margin-item-group">
          <BoxCheck
            :contents="true"
            type="checkbox"
            id="InventoryFinanceStateList001_001"
          >
            <UiAccordion tagName="div">
              <UiAccordionItem tagName="div">
                <div class="flex-box align-items-start">
                  <div class="flex-box__cell flex-box__cell--small-regular">
                    <BoxCheckObject />
                  </div>
                  <div class="flex-box__cell flex-1">
                    <div class="row-margin-item">
                      <div class="text-body-4 font-weight-light">
                        2023.01.10
                      </div>
                      <div
                        class="text-body-1 font-weight-medium row-margin-small"
                      >
                        <BoxCheckLabel>11가1234</BoxCheckLabel>
                      </div>
                      <div class="text-body-4 color-gray row-margin-small">
                        A3(3세대) 세단 40 TFSI 2019
                      </div>
                    </div>

                    <KeyValue margin="regular">
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3 align-items-center',
                        }"
                      >
                        <KeyValueTitle>대출신청금액</KeyValueTitle>
                        <KeyValueText>
                          <div class="flex-box">
                            <div class="flex-box__cell flex-1">
                              <UnitText
                                rightUnit="만원"
                                align="right"
                                size="regular"
                              >
                                800
                              </UnitText>
                            </div>
                            <div class="flex-box__cell flex-box__cell--small">
                              <UiAccordionOpener
                                :classNames="{
                                  button: $style['opener'],
                                }"
                              />
                            </div>
                          </div>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>

                <UiAccordionLayer>
                  <div :class="$style['detail-contents']">
                    <KeyValue margin="regular">
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3',
                        }"
                      >
                        <KeyValueTitle>상품구분</KeyValueTitle>
                        <KeyValueText>재고1</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3',
                        }"
                      >
                        <KeyValueTitle>제조사</KeyValueTitle>
                        <KeyValueText>BMW</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3',
                        }"
                      >
                        <KeyValueTitle>한도잔액</KeyValueTitle>
                        <KeyValueText>25,200,000 원</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3',
                        }"
                      >
                        <KeyValueTitle>대출신청금액</KeyValueTitle>
                        <KeyValueText>10,000,000 원</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3',
                        }"
                      >
                        <KeyValueTitle>결제일자</KeyValueTitle>
                        <KeyValueText>15일</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3',
                        }"
                      >
                        <KeyValueTitle>대출기간</KeyValueTitle>
                        <KeyValueText>3개월</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3',
                        }"
                      >
                        <KeyValueTitle>이전 소유자</KeyValueTitle>
                        <KeyValueText>김하나</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3',
                        }"
                      >
                        <KeyValueTitle>계좌선택</KeyValueTitle>
                        <KeyValueText>Y</KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3',
                        }"
                      >
                        <KeyValueTitle>서류등록</KeyValueTitle>
                        <KeyValueText>Y</KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </UiAccordionLayer>
              </UiAccordionItem>
            </UiAccordion>
          </BoxCheck>
        </li>
        <!-- //Case : 확정 버튼 선택한 경우 -->
      </ul>

      <!-- Case : 내역 5개 이상일 때만 노출 -->
      <div class="inline-wrap align-center row-margin-item-group">
        <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
          더보기
          <template v-slot:rightIcon>
            <IconArrow />
          </template>
        </TextButton>
      </div>
      <!-- //Case : 내역 5개 이상일 때만 노출 -->
    </div>
    <!-- // Case : 조회 후 노출 -->

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
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/InventoryFinanceStateList.scss';
</style>
