<script>
// UC_M01_p001
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
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import FilterButton from '@/components/ui/button/FilterButton.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import TextProgress from '@/components/ui/progress/TextProgress.vue';

import IconPerson from '@/assets/images/icon/person.svg?component';
import IconArrow from '@/assets/images/icon/dropdown.svg?component';

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
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    BasicDatepicker,
    UnitText,
    ButtonList,
    ButtonListItem,
    FilterButton,
    RoundStatus,
    TextButton,
    TextProgress,
    IconPerson,
    IconArrow,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      filterOpen: false,
      minDate: '2023.04.21',
      maxDate: '2023.04.21',
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '중고할부·론 홈');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    const toggleFilter = () => {
      state.filterOpen = !state.filterOpen;
    };

    return {
      state,
      toggleFilter,
    };
  },
};
</script>

<template>
  <PageContents>
    <div :class="[$style['salesperson-card'], 'row-margin-container-medium']">
      <div :class="$style['salesperson-card__image']">
        <IconPerson />
      </div>
      <div :class="$style['salesperson-card__content']">
        <div :class="$style['salesperson-card__sub']">하나캐피탈</div>
        <div :class="$style['salesperson-card__name']">김하나</div>
      </div>
    </div>

    <section class="contents-wrap">
      <div class="flex-box row-margin-contents">
        <div class="flex-box__cell flex-1">
          <h3 class="text-title-2">현황조회</h3>
        </div>
        <div class="flex-box__cell flex-box__cell--medium">
          <FilterButton
            :active="state.filterOpen"
            :text="`조회 필터 ${state.filterOpen ? '닫기' : '열기'}`"
            :activeText="null"
            @click="toggleFilter"
          />
        </div>
      </div>
      <ul :class="[$style['status-inquiry'], $style['status-inquiry--gap']]">
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
            <span :class="$style['status-inquiry__text']">계약</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">1</span>
            <span :class="$style['status-inquiry__text']">송금</span>
          </button>
        </li>
      </ul>

      <div v-if="state.filterOpen">
        <FormList>
          <FormListItem titleText="조회기간" :forceFocus="true">
            <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="salesUsedCarHomeDateCheck"
                  id="salesUsedCarHomeDateCheck001"
                >
                  <BoxCheckLabel>1주</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="salesUsedCarHomeDateCheck"
                  id="salesUsedCarHomeDateCheck002"
                >
                  <BoxCheckLabel>2주</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="salesUsedCarHomeDateCheck"
                  id="salesUsedCarHomeDateCheck003"
                >
                  <BoxCheckLabel>1개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="salesUsedCarHomeDateCheck"
                  id="salesUsedCarHomeDateCheck004"
                >
                  <BoxCheckLabel>직접설정</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <InputBlock>
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="조회기간 시작 날짜"
                  id="salesUsedCarHomeDateStart"
                  buttonId="salesUsedCarHomeDateStartButton"
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
                  id="salesUsedCarHomeDateEnd"
                  buttonId="salesUsedCarHomeDateEndButton"
                  :min="state.minDate"
                  v-model="state.maxDate"
                />
              </InputBlockCell>
            </InputBlock>
          </FormListItem>
          <FormListItem titleText="조회조건" :forceFocus="true">
            <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="salesUsedCarHomeType"
                  id="salesUsedCarHomeType001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>고객명</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="salesUsedCarHomeType"
                  id="salesUsedCarHomeType002"
                >
                  <BoxCheckLabel>메모</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <InputBlock>
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="search"
                  title="검색어 입력"
                  placeholder="검색어 입력"
                />
              </InputBlockCell>
            </InputBlock>
          </FormListItem>
        </FormList>

        <div class="row-margin-contents-group">
          <BasicButton :line="true">조회</BasicButton>
        </div>
      </div>

      <BasicHr
        v-if="state.filterOpen"
        className="row-margin-container-medium"
      />

      <UiAccordion>
        <!-- Case : 신용동의 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div class="flex-box">
              <div class="flex-box__cell flex-1">
                <div :class="$style['division-info']">
                  <ul :class="$style['division-info__list']">
                    <li :class="$style['division-info__item']">
                      <div class="color-black text-body-4 font-weight-light">
                        2023.01.10
                      </div>
                    </li>
                    <li :class="$style['division-info__item']">
                      <div class="color-green text-body-4 font-weight-medium">
                        신용동의
                      </div>
                    </li>
                  </ul>
                </div>
                <p class="text-body-1 row-margin-small font-weight-medium">
                  홍길동
                </p>
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <RoundStatus
                  theme="denary"
                  :classNames="{ wrap: 'display-block' }"
                  >모바일</RoundStatus
                >
              </div>
            </div>
            <div
              class="flex-box row-margin-item-regular row-margin-bottom-none"
            >
              <div class="flex-box__cell flex-1">
                <div class="text-body-4 color-gray-quaternary">신청금액</div>
              </div>
              <div class="flex-box__cell flex-box__cell--medium">
                <UnitText size="regular" rightUnit="만원" verticalAlign="center"
                  >3,000</UnitText
                >
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <UiAccordionOpener :classNames="{ button: $style['opener'] }" />
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <TextProgress
                  :steps="[
                    '본인인증',
                    '계약자정보',
                    '금융조건',
                    '면허정보',
                    '약관동의',
                    '본인인증',
                    'ARS',
                  ]"
                  :current="1"
                />
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>주민등록번호</KeyValueTitle>
                    <KeyValueText>920101-2******</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>요청일자</KeyValueTitle>
                    <KeyValueText>2022.11.14</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>심사상태</KeyValueTitle>
                    <KeyValueText>동의완료</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>메모 내용</KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                  <ButtonListItem>
                    <BasicButton theme="tertiary" size="small"
                      >상담등록</BasicButton
                    >
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- // Case : 신용동의 -->

        <!-- Case : 상담중 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div class="flex-box">
              <div class="flex-box__cell flex-1">
                <div :class="$style['division-info']">
                  <ul :class="$style['division-info__list']">
                    <li :class="$style['division-info__item']">
                      <div class="color-black text-body-4 font-weight-light">
                        2023.01.10
                      </div>
                    </li>
                    <li :class="$style['division-info__item']">
                      <div class="color-green text-body-4 font-weight-medium">
                        상담중
                      </div>
                    </li>
                  </ul>
                </div>
                <p class="text-body-1 row-margin-small font-weight-medium">
                  홍길동
                </p>
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <RoundStatus
                  theme="denary"
                  :classNames="{ wrap: 'display-block' }"
                  >모바일</RoundStatus
                >
              </div>
            </div>
            <div
              class="flex-box row-margin-item-regular row-margin-bottom-none"
            >
              <div class="flex-box__cell flex-1">
                <div class="text-body-4 color-gray-quaternary">신청금액</div>
              </div>
              <div class="flex-box__cell flex-box__cell--medium">
                <UnitText size="regular" rightUnit="만원" verticalAlign="center"
                  >3,000</UnitText
                >
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <UiAccordionOpener :classNames="{ button: $style['opener'] }" />
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <TextProgress
                  :steps="[
                    '본인인증',
                    '계약자정보',
                    '금융조건',
                    '면허정보',
                    '약관동의',
                    '본인인증',
                    'ARS',
                  ]"
                  :current="1"
                />
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>주민등록번호</KeyValueTitle>
                    <KeyValueText>920101-2******</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>요청일자</KeyValueTitle>
                    <KeyValueText>2022.11.14</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>차종/모델명</KeyValueTitle>
                    <KeyValueText
                      >6시리즈 그란 투리스모(4세대) 630<br />Dx드라이브GT럭셔리
                      라인</KeyValueText
                    >
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>대출기간</KeyValueTitle>
                    <KeyValueText>60개월</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>기본/최종 금리</KeyValueTitle>
                    <KeyValueText>
                      <div>7.9%/7.9%, 03/O/o</div>
                      <div class="inline-wrap row-margin-item">
                        <TextButton :underline="true" theme="secondary"
                          >수수료차감</TextButton
                        >
                      </div>
                    </KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>매매상사</KeyValueTitle>
                    <KeyValueText>14.60 %</KeyValueText>
                  </KeyValueItem>

                  <!-- Case : 상담중-자동승인 -->
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>심사상태</KeyValueTitle>
                    <KeyValueText>상담중-자동승인</KeyValueText>
                  </KeyValueItem>
                  <!-- // Case : 상담중-자동승인 -->

                  <!-- Case : 상담중-지점문의 -->
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>심사상태</KeyValueTitle>
                    <KeyValueText>
                      <span class="color-red">상담중-지점문의</span>
                    </KeyValueText>
                  </KeyValueItem>
                  <!-- // Case : 상담중-지점문의 -->

                  <!-- Case : 상담중-시스템거절 -->
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>심사상태</KeyValueTitle>
                    <KeyValueText>
                      <span class="color-red">상담중-시스템거절</span>
                    </KeyValueText>
                  </KeyValueItem>
                  <!-- // Case : 상담중-시스템거절 -->

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>메모 내용</KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <!-- Case : 상담중-자동승인 -->
                <div class="row-margin-contents-small">
                  <BasicButton theme="quaternary" :line="true" size="small"
                    >상담변경</BasicButton
                  >
                  <ButtonList :classNames="{ wrap: 'row-margin-item' }">
                    <ButtonListItem>
                      <BasicButton theme="tertiary" size="small"
                        >고객서류등록</BasicButton
                      >
                    </ButtonListItem>
                    <ButtonListItem>
                      <BasicButton size="small">계약확정</BasicButton>
                    </ButtonListItem>
                  </ButtonList>
                </div>
                <!-- // Case : 상담중-자동승인 -->

                <!-- Case : 상담중-지점문의, 상담중-시스템거절 -->
                <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                  <ButtonListItem>
                    <BasicButton theme="quaternary" :line="true" size="small"
                      >상담변경</BasicButton
                    >
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton theme="tertiary" size="small"
                      >고객서류등록</BasicButton
                    >
                  </ButtonListItem>
                </ButtonList>
                <!-- // Case : 상담중-지점문의,상담중-시스템거절 -->
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- // Case : 상담중 -->

        <!-- Case : 계약중 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div class="flex-box">
              <div class="flex-box__cell flex-1">
                <div :class="$style['division-info']">
                  <ul :class="$style['division-info__list']">
                    <li :class="$style['division-info__item']">
                      <div class="color-black text-body-4 font-weight-light">
                        2023.01.10
                      </div>
                    </li>
                    <li :class="$style['division-info__item']">
                      <div class="color-green text-body-4 font-weight-medium">
                        계약중
                      </div>
                    </li>
                  </ul>
                </div>
                <p class="text-body-1 row-margin-small font-weight-medium">
                  홍길동
                </p>
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <RoundStatus
                  theme="denary"
                  :classNames="{ wrap: 'display-block' }"
                  >모바일</RoundStatus
                >
              </div>
            </div>
            <div
              class="flex-box row-margin-item-regular row-margin-bottom-none"
            >
              <div class="flex-box__cell flex-1">
                <div class="text-body-4 color-gray-quaternary">신청금액</div>
              </div>
              <div class="flex-box__cell flex-box__cell--medium">
                <UnitText size="regular" rightUnit="만원" verticalAlign="center"
                  >3,000</UnitText
                >
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <UiAccordionOpener :classNames="{ button: $style['opener'] }" />
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <TextProgress
                  :steps="[
                    '본인인증',
                    '계약자정보',
                    '금융조건',
                    '면허정보',
                    '약관동의',
                    '본인인증',
                    'ARS',
                  ]"
                  :current="1"
                />
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>주민등록번호</KeyValueTitle>
                    <KeyValueText>920101-2******</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>요청일자</KeyValueTitle>
                    <KeyValueText>2022.11.14</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>차종/모델명</KeyValueTitle>
                    <KeyValueText
                      >6시리즈 그란 투리스모(4세대) 630<br />Dx드라이브GT럭셔리
                      라인</KeyValueText
                    >
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>대출기간</KeyValueTitle>
                    <KeyValueText>60개월</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>기본/최종 금리</KeyValueTitle>
                    <KeyValueText> 7.9%/7.9%, 03/O/o </KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>매매상사</KeyValueTitle>
                    <KeyValueText>14.60 %</KeyValueText>
                  </KeyValueItem>

                  <!-- Case : 계약중-자동승인 -->
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>심사상태</KeyValueTitle>
                    <KeyValueText>계약중-자동승인</KeyValueText>
                  </KeyValueItem>
                  <!-- // Case : 계약중-자동승인 -->

                  <!-- Case : 계약완료-자동승인 -->
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>심사상태</KeyValueTitle>
                    <KeyValueText>계약완료-자동승인</KeyValueText>
                  </KeyValueItem>
                  <!-- // Case : 계약완료-자동승인 -->

                  <!-- Case : 계약중-지점문의 -->
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>심사상태</KeyValueTitle>
                    <KeyValueText>
                      <span class="color-red">계약중-지점문의</span>
                    </KeyValueText>
                  </KeyValueItem>
                  <!-- // Case : 계약중-지점문의 -->

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>지급계좌</KeyValueTitle>
                    <KeyValueText>하나은행 791271726311133</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>메모 내용</KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <!-- Case : 계약중-자동승인 -->
                <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                  <ButtonListItem>
                    <BasicButton theme="tertiary" size="small"
                      >고객서류등록</BasicButton
                    >
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton size="small">계약확정</BasicButton>
                  </ButtonListItem>
                </ButtonList>
                <!-- // Case : 계약중-자동승인 -->

                <!-- Case : 계약완료-자동승인 -->
                <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                  <ButtonListItem>
                    <BasicButton theme="tertiary" size="small"
                      >고객서류등록</BasicButton
                    >
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton size="small" :disabled="true"
                      >송금요청</BasicButton
                    >
                  </ButtonListItem>
                </ButtonList>
                <!-- // Case : 계약완료-자동승인 -->

                <!-- Case : 상담중-지점문의,상담중-시스템거절 -->
                <div class="row-margin-contents-small">
                  <BasicButton :line="true" size="small">재상담</BasicButton>
                  <ButtonList :classNames="{ wrap: 'row-margin-item' }">
                    <ButtonListItem>
                      <BasicButton theme="tertiary" size="small"
                        >고객서류등록</BasicButton
                      >
                    </ButtonListItem>
                    <ButtonListItem>
                      <BasicButton size="small" :disabled="true"
                        >계약확정</BasicButton
                      >
                    </ButtonListItem>
                  </ButtonList>
                </div>
                <!-- // Case : 상담중-지점문의,상담중-시스템거절 -->
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- // Case : 계약중 -->

        <!-- Case : 계약완료 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div class="flex-box">
              <div class="flex-box__cell flex-1">
                <div :class="$style['division-info']">
                  <ul :class="$style['division-info__list']">
                    <li :class="$style['division-info__item']">
                      <div class="color-black text-body-4 font-weight-light">
                        2023.01.10
                      </div>
                    </li>
                    <li :class="$style['division-info__item']">
                      <div class="color-green text-body-4 font-weight-medium">
                        계약완료
                      </div>
                    </li>
                  </ul>
                </div>
                <p class="text-body-1 row-margin-small font-weight-medium">
                  홍길동
                </p>
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <RoundStatus
                  theme="denary"
                  :classNames="{ wrap: 'display-block' }"
                  >모바일</RoundStatus
                >
              </div>
            </div>
            <div
              class="flex-box row-margin-item-regular row-margin-bottom-none"
            >
              <div class="flex-box__cell flex-1">
                <div class="text-body-4 color-gray-quaternary">신청금액</div>
              </div>
              <div class="flex-box__cell flex-box__cell--medium">
                <UnitText size="regular" rightUnit="만원" verticalAlign="center"
                  >3,000</UnitText
                >
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <UiAccordionOpener :classNames="{ button: $style['opener'] }" />
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <TextProgress
                  :steps="[
                    '본인인증',
                    '계약자정보',
                    '금융조건',
                    '면허정보',
                    '약관동의',
                    '본인인증',
                    'ARS',
                  ]"
                  :current="1"
                />
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>주민등록번호</KeyValueTitle>
                    <KeyValueText>920101-2******</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>요청일자</KeyValueTitle>
                    <KeyValueText>2022.11.14</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>차종/모델명</KeyValueTitle>
                    <KeyValueText
                      >6시리즈 그란 투리스모(4세대) 630<br />Dx드라이브GT럭셔리
                      라인</KeyValueText
                    >
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>대출기간</KeyValueTitle>
                    <KeyValueText>60개월</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>기본/최종 금리</KeyValueTitle>
                    <KeyValueText> 7.9%/7.9%, 03/O/o </KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>매매상사</KeyValueTitle>
                    <KeyValueText>14.60 %</KeyValueText>
                  </KeyValueItem>

                  <!-- Case : 계약완료-자동승인 -->
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>심사상태</KeyValueTitle>
                    <KeyValueText>계약완료-자동승인</KeyValueText>
                  </KeyValueItem>
                  <!-- // Case : 계약완료-자동승인 -->

                  <!-- Case : 계약완료-지점문의 -->
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>심사상태</KeyValueTitle>
                    <KeyValueText>
                      <span class="color-red">계약완료-지점문의</span>
                    </KeyValueText>
                  </KeyValueItem>
                  <!-- // Case : 계약완료-지점문의 -->

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>지급계좌</KeyValueTitle>
                    <KeyValueText>하나은행 791271726311133</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>메모 내용</KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <!-- Case : 계약완료-자동승인 -->
                <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                  <ButtonListItem>
                    <BasicButton theme="tertiary" size="small"
                      >고객서류등록</BasicButton
                    >
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton size="small">송금요청</BasicButton>
                  </ButtonListItem>
                </ButtonList>
                <!-- // Case : 계약완료-자동승인 -->

                <!-- Case : 계약완료-지점문의 -->
                <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                  <ButtonListItem>
                    <BasicButton theme="tertiary" size="small"
                      >고객서류등록</BasicButton
                    >
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton size="small" :disabled="true"
                      >송금요청</BasicButton
                    >
                  </ButtonListItem>
                </ButtonList>
                <!-- // Case : 계약완료-지점문의 -->
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- // Case : 계약완료 -->

        <!-- Case : 송금대기 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div class="flex-box">
              <div class="flex-box__cell flex-1">
                <div :class="$style['division-info']">
                  <ul :class="$style['division-info__list']">
                    <li :class="$style['division-info__item']">
                      <div class="color-black text-body-4 font-weight-light">
                        2023.01.10
                      </div>
                    </li>
                    <li :class="$style['division-info__item']">
                      <div class="color-green text-body-4 font-weight-medium">
                        송금대기(지점문의)
                      </div>
                    </li>
                  </ul>
                </div>
                <p class="text-body-1 row-margin-small font-weight-medium">
                  홍길동
                </p>
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <RoundStatus
                  theme="denary"
                  :classNames="{ wrap: 'display-block' }"
                  >모바일</RoundStatus
                >
              </div>
            </div>
            <div
              class="flex-box row-margin-item-regular row-margin-bottom-none"
            >
              <div class="flex-box__cell flex-1">
                <div class="text-body-4 color-gray-quaternary">신청금액</div>
              </div>
              <div class="flex-box__cell flex-box__cell--medium">
                <UnitText size="regular" rightUnit="만원" verticalAlign="center"
                  >3,000</UnitText
                >
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <UiAccordionOpener :classNames="{ button: $style['opener'] }" />
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <TextProgress
                  :steps="[
                    '본인인증',
                    '계약자정보',
                    '금융조건',
                    '면허정보',
                    '약관동의',
                    '본인인증',
                    'ARS',
                  ]"
                  :current="1"
                />
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>주민등록번호</KeyValueTitle>
                    <KeyValueText>920101-2******</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>요청일자</KeyValueTitle>
                    <KeyValueText>2022.11.14</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>차종/모델명</KeyValueTitle>
                    <KeyValueText
                      >6시리즈 그란 투리스모(4세대) 630<br />Dx드라이브GT럭셔리
                      라인</KeyValueText
                    >
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>대출기간</KeyValueTitle>
                    <KeyValueText>60개월</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>기본/최종 금리</KeyValueTitle>
                    <KeyValueText> 7.9%/7.9%, 03/O/o </KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>매매상사</KeyValueTitle>
                    <KeyValueText>14.60 %</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>전자약정/계약안내</KeyValueTitle>
                    <KeyValueText>Y/Y</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>심사상태</KeyValueTitle>
                    <KeyValueText>
                      <span class="color-red">송금대기(지점문의)</span>
                    </KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>지급계좌</KeyValueTitle>
                    <KeyValueText>하나은행 791271726311133</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>메모 내용</KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                  <ButtonListItem>
                    <BasicButton theme="tertiary" size="small"
                      >고객서류등록</BasicButton
                    >
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- // Case : 송금대기 -->

        <!-- Case : 송금 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div class="flex-box">
              <div class="flex-box__cell flex-1">
                <div :class="$style['division-info']">
                  <ul :class="$style['division-info__list']">
                    <li :class="$style['division-info__item']">
                      <div class="color-black text-body-4 font-weight-light">
                        2023.01.10
                      </div>
                    </li>
                    <li :class="$style['division-info__item']">
                      <div class="color-green text-body-4 font-weight-medium">
                        송금
                      </div>
                    </li>
                  </ul>
                </div>
                <p class="text-body-1 row-margin-small font-weight-medium">
                  홍길동
                </p>
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <RoundStatus
                  theme="denary"
                  :classNames="{ wrap: 'display-block' }"
                  >모바일</RoundStatus
                >
              </div>
            </div>
            <div
              class="flex-box row-margin-item-regular row-margin-bottom-none"
            >
              <div class="flex-box__cell flex-1">
                <div class="text-body-4 color-gray-quaternary">신청금액</div>
              </div>
              <div class="flex-box__cell flex-box__cell--medium">
                <UnitText size="regular" rightUnit="만원" verticalAlign="center"
                  >3,000</UnitText
                >
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <UiAccordionOpener :classNames="{ button: $style['opener'] }" />
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <TextProgress
                  :steps="[
                    '본인인증',
                    '계약자정보',
                    '금융조건',
                    '면허정보',
                    '약관동의',
                    '본인인증',
                    'ARS',
                  ]"
                  :current="1"
                />
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>주민등록번호</KeyValueTitle>
                    <KeyValueText>920101-2******</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>요청일자</KeyValueTitle>
                    <KeyValueText>2022.11.14</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>차종/모델명</KeyValueTitle>
                    <KeyValueText
                      >6시리즈 그란 투리스모(4세대) 630<br />Dx드라이브GT럭셔리
                      라인</KeyValueText
                    >
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>대출기간</KeyValueTitle>
                    <KeyValueText>60개월</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>기본/최종 금리</KeyValueTitle>
                    <KeyValueText> 7.9%/7.9%, 03/O/o </KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>매매상사</KeyValueTitle>
                    <KeyValueText>14.60 %</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>심사상태</KeyValueTitle>
                    <KeyValueText>계약중-자동승인</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>지급계좌</KeyValueTitle>
                    <KeyValueText>하나은행 791271726311133</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>메모 내용</KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                  <ButtonListItem>
                    <BasicButton theme="tertiary" size="small"
                      >고객서류등록</BasicButton
                    >
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- // Case : 송금 -->
      </UiAccordion>

      <div class="inline-wrap align-center row-margin-item-group">
        <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
          더보기
          <template v-slot:rightIcon>
            <IconArrow />
          </template>
        </TextButton>
      </div>

      <!-- Case : 결과 없을 때 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">조회된 결과가 없습니다.</p>
      </div>
      <!-- // Case : 결과 없을 때 -->
    </section>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton theme="quaternary" size="small">신규상담</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton theme="quaternary" size="small">차량검색</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton theme="quaternary" size="small">상사검색</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/salesUsedCar/SalesUsedCarHome.scss';
</style>
