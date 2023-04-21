<script>
// IF_M03_p001
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
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
import BasicButton from '@/components/ui/button/BasicButton.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BankLogo from '@/components/ui/imageData/BankLogo.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

import IconArrow from '@/assets/images/icon/dropdown.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    StepProgress,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
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
    BasicButton,
    StickyBar,
    RoundStatus,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    TextButton,
    BankLogo,
    BasicDatepicker,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
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
      store.ui.header.setTitle(() => '재고금융 중도상환');
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
    <template v-slot:head>
      <StickyBar>
        <StepProgress :total="4" :current="1" />
      </StickyBar>
    </template>

    <PageTextGroup>
      <PageMainText>
        중도상환 신청을 원하시는 상품을<br />
        <strong>선택해 주세요</strong>
      </PageMainText>
    </PageTextGroup>

    <div>
      <FormList>
        <FormListItem
          titleText="차량번호"
          target="#inventoryFinanceEarlyListCarNumber"
        >
          <FormInvalid :error="state.carNumberError">
            <InputBlock :error="state.carNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="차량번호"
                  id="inventoryFinanceEarlyListCarNumber"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="조회기간" :forceFocus="true">
          <FormInvalid :error="state.dateError">
            <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="inventoryFinanceEarlyListDateCheck"
                  id="inventoryFinanceEarlyListDateCheck001"
                >
                  <BoxCheckLabel>1개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="inventoryFinanceEarlyListDateCheck"
                  id="inventoryFinanceEarlyListDateCheck002"
                >
                  <BoxCheckLabel>3개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="inventoryFinanceEarlyListDateCheck"
                  id="inventoryFinanceEarlyListDateCheck003"
                >
                  <BoxCheckLabel>6개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="inventoryFinanceEarlyListDateCheck"
                  id="inventoryFinanceEarlyListDateCheck004"
                >
                  <BoxCheckLabel>직접입력</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <InputBlock :error="state.dateError">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="조회기간 시작 날짜"
                  id="inventoryFinanceEarlyListDateStart"
                  buttonId="inventoryFinanceEarlyListDateStartButton"
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
                  id="inventoryFinanceEarlyListDateEnd"
                  buttonId="inventoryFinanceEarlyListDateEndButton"
                  :min="state.minDate"
                  v-model="state.maxDate"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>조회기간은 최대 1년까지 가능해요.</FormHelpText>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <BasicButton
        line="true"
        :classNames="{ wrap: 'row-margin-contents-group' }"
        >조회</BasicButton
      >
    </div>

    <BasicHr className="row-margin-container-medium" />

    <section class="contents-wrap">
      <h3 class="text-title-2 row-margin-contents">중도상환 신청내역</h3>

      <!-- Case : 중도상환신청 없을 경우 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">
          중도상환신청이 가능한 계약이 없습니다.
        </p>
      </div>
      <!-- //Case : 중도상환신청 없을 경우 -->

      <ul class="reset-list">
        <!-- Case : 기본 -->
        <li class="row-margin-item-group">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">10나 8941</h3>
                <p class="text-body-4 color-gray row-margin-small">
                  쏘나타 하이브리드(DN8) 스파이더
                </p>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText>2022.12.06 ~ 2023.03.11</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>1/1 (매월11일)</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText>2,039,040 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <BasicButton
              size="small"
              :classNames="{ wrap: 'row-margin-contents-small' }"
              >중도상환 신청</BasicButton
            >
          </BasicBox>
        </li>
        <!-- // Case : 기본 -->

        <!-- Case : 연체 -->
        <li class="row-margin-item-group">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">10나 8941</h3>
                <p class="text-body-4 color-gray row-margin-small">
                  쏘나타 하이브리드(DN8) 스파이더
                </p>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus
                  :classNames="{ wrap: 'display-block' }"
                  theme="nonary"
                  >연체</RoundStatus
                >
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText>2022.12.06 ~ 2023.03.11</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>1/1 (매월11일)</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText>2,039,040 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <BasicButton
              size="small"
              :disabled="true"
              :classNames="{ wrap: 'row-margin-contents-small' }"
              >중도상환 신청</BasicButton
            >
          </BasicBox>
        </li>
        <!-- // Case : 연체 -->

        <!-- Case : 중도상환신청 완료 -->
        <li class="row-margin-item-group">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">10나 8941</h3>
                <p class="text-body-4 color-gray row-margin-small">
                  쏘나타 하이브리드(DN8) 스파이더
                </p>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <UiAccordion tagName="div">
              <KeyValue>
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>입금예정일자</KeyValueTitle>
                  <KeyValueText>2022.12.06 ~ 2023.03.11</KeyValueText>
                </KeyValueItem>
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>입금예정금액</KeyValueTitle>
                  <KeyValueText>2,039,040 원</KeyValueText>
                </KeyValueItem>
              </KeyValue>

              <UiAccordionItem
                tagName="div"
                :classNames="{
                  item: 'row-margin-item-group',
                }"
              >
                <KeyValue>
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>입금가상계좌</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box">
                        <div class="flex-box__cell flex-1">
                          하나 123-456-7890123
                        </div>
                        <div class="flex-box__cell flex-box__cell--small">
                          <UiAccordionOpener
                            :classNames="{
                              button: $style['key-value-opener'],
                            }"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <UiAccordionLayer>
                  <div :class="$style['account-contents']">
                    <BasicBox theme="senary">
                      <KeyValue align="left" margin="regular" size="regular">
                        <KeyValueItem
                          :classNames="{
                            item: 'text-body-3',
                          }"
                        >
                          <KeyValueTitle>
                            <div class="flex-box">
                              <div class="flex-box__cell">
                                <BankLogo size="small" code="004" />
                              </div>
                              <div class="flex-box__cell flex-box__cell--mini">
                                국민
                              </div>
                            </div>
                          </KeyValueTitle>
                          <KeyValueText>123-456-78901234</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem
                          :classNames="{
                            item: 'text-body-3',
                          }"
                        >
                          <KeyValueTitle>
                            <div class="flex-box">
                              <div class="flex-box__cell">
                                <BankLogo size="small" code="011" />
                              </div>
                              <div class="flex-box__cell flex-box__cell--mini">
                                농협
                              </div>
                            </div>
                          </KeyValueTitle>
                          <KeyValueText>123-456-78901234</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem
                          :classNames="{
                            item: 'text-body-3',
                          }"
                        >
                          <KeyValueTitle>
                            <div class="flex-box">
                              <div class="flex-box__cell">
                                <BankLogo size="small" code="020" />
                              </div>
                              <div class="flex-box__cell flex-box__cell--mini">
                                우리
                              </div>
                            </div>
                          </KeyValueTitle>
                          <KeyValueText>123-456-78901234</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem
                          :classNames="{
                            item: 'text-body-3',
                          }"
                        >
                          <KeyValueTitle>
                            <div class="flex-box">
                              <div class="flex-box__cell">
                                <BankLogo size="small" code="081" />
                              </div>
                              <div class="flex-box__cell flex-box__cell--mini">
                                하나
                              </div>
                            </div>
                          </KeyValueTitle>
                          <KeyValueText>123-456-78901234</KeyValueText>
                        </KeyValueItem>
                        <KeyValueItem
                          :classNames="{
                            item: 'text-body-3',
                          }"
                        >
                          <KeyValueTitle>
                            <div class="flex-box">
                              <div class="flex-box__cell">
                                <BankLogo size="small" code="088" />
                              </div>
                              <div class="flex-box__cell flex-box__cell--mini">
                                신한
                              </div>
                            </div>
                          </KeyValueTitle>
                          <KeyValueText> 123-456-78901234 </KeyValueText>
                        </KeyValueItem>
                      </KeyValue>
                    </BasicBox>
                  </div>
                </UiAccordionLayer>
              </UiAccordionItem>
            </UiAccordion>

            <div
              :class="[
                $style['inline-alert'],
                $style['inline-alert--complete'],
                'row-margin-item-group',
              ]"
            >
              <p :class="$style['inline-alert__text']">중도상환 신청완료</p>
            </div>
          </BasicBox>
        </li>
        <!-- // Case : 중도상환신청 완료 -->
      </ul>

      <div class="inline-wrap align-center row-margin-item-group">
        <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
          더보기
          <template v-slot:rightIcon>
            <IconArrow />
          </template>
        </TextButton>
      </div>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventory-finance/inventoryFinanceEarlyList.scss';
</style>
