<script>
// LM_M05_p001
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

export default {
  components: {
    PageContents,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicButton,
    BasicHr,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    BasicDatepicker,
    UnitText,
    ButtonList,
    ButtonListItem,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      dateError: false,
      nameError: false,
      minDate: '2023.04.21',
      maxDate: '2023.04.21',
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '현황조회');
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
      <ul :class="$style['status-inquiry']">
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">10</span>
            <span :class="$style['status-inquiry__text']">전체</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button
            type="button"
            :class="[
              $style['status-inquiry__category'],
              $style['status-inquiry__category--active'],
            ]"
          >
            <span :class="$style['status-inquiry__number']">4</span>
            <span :class="$style['status-inquiry__text']">신용동의</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">3</span>
            <span :class="$style['status-inquiry__text']">상담</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">2</span>
            <span :class="$style['status-inquiry__text']">품의(계약)</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">1</span>
            <span :class="$style['status-inquiry__text']">심사</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">1</span>
            <span :class="$style['status-inquiry__text']">정산</span>
          </button>
        </li>
      </ul>
    </template>

    <div>
      <FormList>
        <FormListItem titleText="조회기간" :forceFocus="true">
          <FormInvalid :error="state.dateError">
            <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="lMBlogStatusInquiryDateCheck"
                  id="lMBlogStatusInquiryDateCheck001"
                >
                  <BoxCheckLabel>1주</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="lMBlogStatusInquiryDateCheck"
                  id="lMBlogStatusInquiryDateCheck002"
                >
                  <BoxCheckLabel>2주</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="lMBlogStatusInquiryDateCheck"
                  id="lMBlogStatusInquiryDateCheck003"
                >
                  <BoxCheckLabel>직접설정</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <InputBlock :error="state.dateError">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="조회기간 시작 날짜"
                  id="lMBlogStatusInquiryDateStart"
                  buttonId="lMBlogStatusInquiryDateStartButton"
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
                  id="lMBlogStatusInquiryDateEnd"
                  buttonId="lMBlogStatusInquiryDateEndButton"
                  :min="state.minDate"
                  v-model="state.maxDate"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="고객명 입력" target="#lMBlogStatusInquiryName">
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput title="고객명 입력" id="lMBlogStatusInquiryName" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <div class="row-margin-contents-group">
        <BasicButton :line="true"> 조회 </BasicButton>
      </div>
    </div>

    <BasicHr className="row-margin-container-medium" />

    <UiAccordion>
      <!-- Case : 신용동의 -->
      <UiAccordionItem :classNames="{ item: 'row-margin-item-medium' }">
        <BasicBox>
          <div :class="[$style['division-info'], 'row-margin-small']">
            <ul :class="$style['division-info__list']">
              <li :class="[$style['division-info__item'], $style['date']]">
                2023.01.10
              </li>
              <li :class="[$style['division-info__item'], $style['category']]">
                신용동의
              </li>
            </ul>
          </div>

          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              <h3 class="text-body-1 font-weight-medium">김하나</h3>
            </div>
          </div>
        </BasicBox>
      </UiAccordionItem>
      <!-- // Case : 신용동의 -->

      <!-- Case : 상담 -->
      <UiAccordionItem :classNames="{ item: 'row-margin-item-medium' }">
        <BasicBox>
          <div :class="[$style['division-info'], 'row-margin-small']">
            <ul :class="$style['division-info__list']">
              <li :class="[$style['division-info__item'], $style['date']]">
                2023.01.10
              </li>
              <li :class="[$style['division-info__item'], $style['category']]">
                상담
              </li>
            </ul>
          </div>

          <div class="flex-box">
            <div class="flex-box__cell">
              <h3 class="text-body-1 font-weight-medium">이하나</h3>
            </div>
            <div class="flex-box__cell flex-box__cell--mini">
              <h3 class="text-body-1 font-weight-medium">(행복아파트론)</h3>
            </div>
          </div>

          <div class="flex-box row-margin-item row-margin-bottom-none">
            <div class="flex-box__cell flex-1">
              <p class="text-body-3 color-gray-secondary font-weight-regular">
                신청금액
              </p>
            </div>
            <div class="flex-box__cell flex-box__cell--medium">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <UnitText size="regular" rightUnit="원">3,000,000</UnitText>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>
          </div>

          <UiAccordionLayer>
            <div :class="$style['contents']">
              <KeyValue margin="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>상담일자</KeyValueTitle>
                  <KeyValueText>2023.01.16</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>상담번호</KeyValueTitle>
                  <KeyValueText>C42302010014400</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>대출기간</KeyValueTitle>
                  <KeyValueText>36개월</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>금리</KeyValueTitle>
                  <KeyValueText>14.60%</KeyValueText>
                </KeyValueItem>
              </KeyValue>

              <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                <ButtonListItem>
                  <BasicButton size="small" theme="tertiary"
                    >서류등록</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton size="small">상담변경</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </div>
          </UiAccordionLayer>
        </BasicBox>
      </UiAccordionItem>
      <!-- // Case : 상담 -->

      <!-- Case : 계약 -->
      <UiAccordionItem :classNames="{ item: 'row-margin-item-medium' }">
        <BasicBox>
          <div :class="[$style['division-info'], 'row-margin-small']">
            <ul :class="$style['division-info__list']">
              <li :class="[$style['division-info__item'], $style['date']]">
                2023.01.10
              </li>
              <li :class="[$style['division-info__item'], $style['category']]">
                품의(계약)
              </li>
            </ul>
          </div>

          <div class="flex-box">
            <div class="flex-box__cell">
              <h3 class="text-body-1 font-weight-medium">박하나</h3>
            </div>
            <div class="flex-box__cell flex-box__cell--mini">
              <h3 class="text-body-1 font-weight-medium">(행복아파트론)</h3>
            </div>
          </div>

          <div class="flex-box row-margin-item row-margin-bottom-none">
            <div class="flex-box__cell flex-1">
              <p class="text-body-3 color-gray-secondary font-weight-regular">
                신청금액
              </p>
            </div>
            <div class="flex-box__cell flex-box__cell--medium">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <UnitText size="regular" rightUnit="원">3,000,000</UnitText>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>
          </div>

          <UiAccordionLayer>
            <div :class="$style['contents']">
              <KeyValue margin="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>상담일자</KeyValueTitle>
                  <KeyValueText>2023.01.16</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>상담번호</KeyValueTitle>
                  <KeyValueText>C42302010014400</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>품의번호</KeyValueTitle>
                  <KeyValueText>D42302010014400</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>대출기간</KeyValueTitle>
                  <KeyValueText>36개월</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>금리</KeyValueTitle>
                  <KeyValueText>14.60%</KeyValueText>
                </KeyValueItem>
              </KeyValue>

              <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                <ButtonListItem>
                  <BasicButton size="small" theme="tertiary"
                    >서류등록</BasicButton
                  >
                </ButtonListItem>
              </ButtonList>
            </div>
          </UiAccordionLayer>
        </BasicBox>
      </UiAccordionItem>
      <!-- // Case : 계약 -->

      <!-- Case : 심사 -->
      <UiAccordionItem :classNames="{ item: 'row-margin-item-medium' }">
        <BasicBox>
          <div :class="[$style['division-info'], 'row-margin-small']">
            <ul :class="$style['division-info__list']">
              <li :class="[$style['division-info__item'], $style['date']]">
                2023.01.10
              </li>
              <li :class="[$style['division-info__item'], $style['category']]">
                심사
              </li>
            </ul>
          </div>

          <div class="flex-box">
            <div class="flex-box__cell">
              <h3 class="text-body-1 font-weight-medium">유하나</h3>
            </div>
            <div class="flex-box__cell flex-box__cell--mini">
              <h3 class="text-body-1 font-weight-medium">(행복아파트론)</h3>
            </div>
          </div>

          <div class="flex-box row-margin-item row-margin-bottom-none">
            <div class="flex-box__cell flex-1">
              <p class="text-body-3 color-gray-secondary font-weight-regular">
                신청금액
              </p>
            </div>
            <div class="flex-box__cell flex-box__cell--medium">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <UnitText size="regular" rightUnit="원">3,000,000</UnitText>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>
          </div>

          <UiAccordionLayer>
            <div :class="$style['contents']">
              <KeyValue margin="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>상담일자</KeyValueTitle>
                  <KeyValueText>2023.01.16</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>상담번호</KeyValueTitle>
                  <KeyValueText>C42302010014400</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>품의번호</KeyValueTitle>
                  <KeyValueText>D42302010014400</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>심사</KeyValueTitle>
                  <KeyValueText>승인</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>대출기간</KeyValueTitle>
                  <KeyValueText>36개월</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>금리</KeyValueTitle>
                  <KeyValueText>14.60%</KeyValueText>
                </KeyValueItem>
              </KeyValue>

              <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                <ButtonListItem>
                  <BasicButton size="small" theme="tertiary"
                    >서류등록</BasicButton
                  >
                </ButtonListItem>
              </ButtonList>
            </div>
          </UiAccordionLayer>
        </BasicBox>
      </UiAccordionItem>
      <!-- // Case : 심사 -->

      <!-- Case : 송금 -->
      <UiAccordionItem :classNames="{ item: 'row-margin-item-medium' }">
        <BasicBox>
          <div :class="[$style['division-info'], 'row-margin-small']">
            <ul :class="$style['division-info__list']">
              <li :class="[$style['division-info__item'], $style['date']]">
                2023.01.10
              </li>
              <li :class="[$style['division-info__item'], $style['category']]">
                송금
              </li>
            </ul>
          </div>

          <div class="flex-box">
            <div class="flex-box__cell">
              <h3 class="text-body-1 font-weight-medium">송하나</h3>
            </div>
            <div class="flex-box__cell flex-box__cell--mini">
              <h3 class="text-body-1 font-weight-medium">(행복아파트론)</h3>
            </div>
          </div>

          <div class="flex-box row-margin-item row-margin-bottom-none">
            <div class="flex-box__cell flex-1">
              <p class="text-body-3 color-gray-secondary font-weight-regular">
                신청금액
              </p>
            </div>
            <div class="flex-box__cell flex-box__cell--medium">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <UnitText size="regular" rightUnit="원">3,000,000</UnitText>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>
          </div>
          <UiAccordionLayer>
            <div :class="$style['contents']">
              <KeyValue margin="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>상담일자</KeyValueTitle>
                  <KeyValueText>2023.01.16</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>상담번호</KeyValueTitle>
                  <KeyValueText>C42302010014400</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>품의번호</KeyValueTitle>
                  <KeyValueText>D42302010014400</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>심사</KeyValueTitle>
                  <KeyValueText>승인</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>정산결과</KeyValueTitle>
                  <KeyValueText>완료</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>대출기간</KeyValueTitle>
                  <KeyValueText>36개월</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>금리</KeyValueTitle>
                  <KeyValueText>14.60%</KeyValueText>
                </KeyValueItem>
              </KeyValue>

              <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                <ButtonListItem>
                  <BasicButton size="small" theme="tertiary"
                    >서류등록</BasicButton
                  >
                </ButtonListItem>
              </ButtonList>
            </div>
          </UiAccordionLayer>
        </BasicBox>
      </UiAccordionItem>
      <!-- // Case : 송금 -->
    </UiAccordion>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lmBlog/LMBlogStatusInquiry.scss';
</style>
