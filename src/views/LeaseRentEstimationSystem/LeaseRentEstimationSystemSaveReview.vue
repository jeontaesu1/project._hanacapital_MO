<script>
// LR_M04_p001
// LR_M04_p002
// LR_M04_p003
// LR_M04_p006
// LR_M04_p007
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
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import FilterButton from '@/components/ui/button/FilterButton.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import ColorChip from '@/components/ui/imageData/ColorChip.vue';

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
    FormInvalid,
    FormInvalidMessage,
    BasicSelect,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    BasicDatepicker,
    ButtonList,
    ButtonListItem,
    FilterButton,
    RoundStatus,
    TextButton,
    ColorChip,
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
      store.ui.header.setTitle(() => '하나원큐오토');
      store.ui.header.setLeftButtons(() => []);
      store.ui.header.setRightButtons(() => ['menu']);
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
    <section class="contents-wrap">
      <div class="flex-box row-margin-contents">
        <div class="flex-box__cell">
          <h3 class="text-title-2">현황조회</h3>
        </div>
        <div class="flex-box__cell flex-box__cell--small flex-1">
          <div class="text-body-3">(최근 2주 이내 조회 가능)</div>
        </div>
        <div class="flex-box__cell">
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
          <button
            type="button"
            :class="[
              $style['status-inquiry__category'],
              $style['status-inquiry__category--active'],
            ]"
          >
            <span :class="$style['status-inquiry__number']">10</span>
            <span :class="$style['status-inquiry__text']">가견적</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">4</span>
            <span :class="$style['status-inquiry__text']">견적</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">3</span>
            <span :class="$style['status-inquiry__text']">심사</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">2</span>
            <span :class="$style['status-inquiry__text']">품의</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">1</span>
            <span :class="$style['status-inquiry__text']">인도</span>
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
                  name="leaseRentEstimationSystemSaveReviewDateCheck"
                  id="leaseRentEstimationSystemSaveReviewDateCheck001"
                >
                  <BoxCheckLabel>1주</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="leaseRentEstimationSystemSaveReviewDateCheck"
                  id="leaseRentEstimationSystemSaveReviewDateCheck002"
                >
                  <BoxCheckLabel>2주</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="leaseRentEstimationSystemSaveReviewDateCheck"
                  id="leaseRentEstimationSystemSaveReviewDateCheck003"
                >
                  <BoxCheckLabel>1개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="leaseRentEstimationSystemSaveReviewDateCheck"
                  id="leaseRentEstimationSystemSaveReviewDateCheck004"
                >
                  <BoxCheckLabel>직접설정</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <InputBlock>
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="조회기간 시작 날짜"
                  id="leaseRentEstimationSystemSaveReviewDateStart"
                  buttonId="leaseRentEstimationSystemSaveReviewDateStartButton"
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
                  id="leaseRentEstimationSystemSaveReviewDateEnd"
                  buttonId="leaseRentEstimationSystemSaveReviewDateEndButton"
                  :min="state.minDate"
                  v-model="state.maxDate"
                />
              </InputBlockCell>
            </InputBlock>
          </FormListItem>

          <FormListItem
            titleText="조회상품"
            target="#leaseRentEstimationSystemSaveReviewProductButton"
          >
            <FormInvalid :error="state.productError">
              <InputBlock :error="state.productError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '전체상품',
                      },
                      {
                        value: '2',
                        text: '장기렌트',
                      },
                      {
                        value: '3',
                        text: '선구매·즉시출고',
                      },
                      {
                        value: '4',
                        text: '운용리스',
                      },
                      {
                        value: '5',
                        text: '금융리스',
                      },
                    ]"
                    buttonTitle="조회상품 선택하기"
                    layerTitle="조회 상품을 선택해 주세요"
                    id="leaseRentEstimationSystemSaveReviewProduct"
                    buttonId="leaseRentEstimationSystemSaveReviewProductButton"
                    defaultValue="1"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="조회조건" :forceFocus="true">
            <BoxCheckList
              :wrap="true"
              :classNames="{ wrap: 'row-margin-item-group' }"
            >
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="leaseRentEstimationSystemSaveReviewType"
                  id="leaseRentEstimationSystemSaveReviewType001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>고객명</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="leaseRentEstimationSystemSaveReviewType"
                  id="leaseRentEstimationSystemSaveReviewType002"
                >
                  <BoxCheckLabel>제목</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="leaseRentEstimationSystemSaveReviewType"
                  id="leaseRentEstimationSystemSaveReviewType003"
                >
                  <BoxCheckLabel>모델</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="leaseRentEstimationSystemSaveReviewType"
                  id="leaseRentEstimationSystemSaveReviewType004"
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
        <!-- Case : 가견적 - 장기렌트 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <div class="color-green text-body-4 font-weight-medium">
                          가견적
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >장기렌트</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적</KeyValueTitle>
                    <KeyValueText>
                      견적1 / 36개월 / 2만km / 682,190 원<br />
                      견적2 / 48개월 / 2만km / 632,190 원<br />
                      견적3 / 60개월 / 2만km / 612,190 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>탁송</KeyValueTitle>
                    <KeyValueText>
                      외주탁송, 아산 출고장, 서울 도착
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText>대리점 출고 / 개인사업자</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>보험</KeyValueTitle>
                    <KeyValueText>26세, 1억원, 1억원, 30만원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText>
                      (0.00%) : 000,000원 / (0.00%) : 000,000원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :classNames="{
                    wrap: 'row-margin-contents-small row-margin-bottom-none',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton theme="quaternary" :line="true" size="small">
                      재견적
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 보기
                    </BasicButton>
                  </ButtonListItem>
                </ButtonList>

                <ButtonList :classNames="{ wrap: 'row-margin-item' }">
                  <ButtonListItem>
                    <BasicButton size="small">견적확정</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 가견적 - 장기렌트 -->

        <!-- Case : 가견적 - 선구매 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <div class="color-green text-body-4 font-weight-medium">
                          가견적
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >선구매</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적</KeyValueTitle>
                    <KeyValueText>
                      견적1 / 36개월 / 2만km / 682,190 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>탁송</KeyValueTitle>
                    <KeyValueText>
                      외주탁송, 아산 출고장, 서울 도착
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText>직판출고 / 개인</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>보험</KeyValueTitle>
                    <KeyValueText>26세, 1억원, 1억원, 30만원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText>
                      (0.00%) : 000,000원 / (0.00%) : 000,000원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :classNames="{
                    wrap: 'row-margin-contents-small row-margin-bottom-none',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton theme="quaternary" :line="true" size="small">
                      재견적
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 보기
                    </BasicButton>
                  </ButtonListItem>
                </ButtonList>

                <ButtonList :classNames="{ wrap: 'row-margin-item' }">
                  <ButtonListItem>
                    <BasicButton size="small">견적확정</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 가견적 - 선구매 -->

        <!-- Case : 가견적 - 운용리스 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <div class="color-green text-body-4 font-weight-medium">
                          가견적
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >운용리스</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]</KeyValueText>
                  </KeyValueItem>
                  <!-- Case : 시승차일 경우 노출 -->
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>시승차142오2102[대구지점]</KeyValueText>
                  </KeyValueItem>
                  <!-- // Case : 시승차일 경우 노출 -->
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적</KeyValueTitle>
                    <KeyValueText>
                      견적1 / 36개월 / 2만km / 682,190 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>탁송</KeyValueTitle>
                    <KeyValueText>
                      외주탁송, 아산 출고장, 서울 도착
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText>직판출고 / 개인</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>보험</KeyValueTitle>
                    <KeyValueText>26세, 1억원, 1억원, 30만원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText>
                      (0.00%) : 000,000원 / (0.00%) : 000,000원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :wrap="true"
                  :classNames="{ wrap: 'row-margin-contents-small' }"
                >
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 발송
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 보기
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton theme="quaternary" :line="true" size="small">
                      재견적
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton size="small">견적확정</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 가견적 - 운용리스 -->

        <!-- Case : 가견적 - 운용리스 (중고차) -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <div class="color-green text-body-4 font-weight-medium">
                          가견적
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >운용리스 (중고차)</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적</KeyValueTitle>
                    <KeyValueText>
                      견적1 / 36개월 / 2만km / 682,190 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>탁송</KeyValueTitle>
                    <KeyValueText>
                      외주탁송, 아산 출고장, 서울 도착
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText
                      >대리점 출고 / 카드결제, 리스사명의</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>원가구성</KeyValueTitle>
                    <KeyValueText
                      >취/등록세 포함, 공채할인 미포함, 기타비용
                      미포함</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText
                      >(0.00%) : 000,000원 / (0.00%) : 000,000원</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :wrap="true"
                  :classNames="{ wrap: 'row-margin-contents-small' }"
                >
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 발송
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 보기
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton theme="quaternary" :line="true" size="small">
                      재견적
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton size="small">견적확정</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 가견적 - 운용리스 (중고차) -->

        <!-- Case : 가견적 - 금융리스 (중고차) -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <div class="color-green text-body-4 font-weight-medium">
                          가견적
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >금융리스 (중고차)</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적</KeyValueTitle>
                    <KeyValueText>
                      견적1 / 36개월 / 2만km / 682,190 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>탁송</KeyValueTitle>
                    <KeyValueText>
                      외주탁송, 아산 출고장, 서울 도착
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText>
                      대리점 출고 / 카드결제, 리스사명의
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>원가구성</KeyValueTitle>
                    <KeyValueText>
                      취/등록세 포함, 공채할인 미포함, 기타비용 미포함
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText
                      >(0.00%) : 000,000원 / (0.00%) : 000,000원</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :wrap="true"
                  :classNames="{ wrap: 'row-margin-contents-small' }"
                >
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 발송
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 보기
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton theme="quaternary" :line="true" size="small">
                      재견적
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton size="small">견적확정</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 가견적 - 금융리스 (중고차) -->

        <!-- Case : 가견적 - 할부 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <div class="color-green text-body-4 font-weight-medium">
                          가견적
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >할부</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적</KeyValueTitle>
                    <KeyValueText>
                      견적1 / 36개월 / 2만km / 1,260,590~1,311,750 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText> 대리점 출고 </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>제휴사</KeyValueTitle>
                    <KeyValueText> (레)츄패문 </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText
                      >(0.00%) : 000,000원 / (0.00%) : 000,000원</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :wrap="true"
                  :classNames="{ wrap: 'row-margin-contents-small' }"
                >
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 발송
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 보기
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton theme="quaternary" :line="true" size="small">
                      재견적
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton size="small">견적확정</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 가견적 - 할부 -->

        <!-- Case : 견적 - 장기렌트 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <!-- Case : 동의전 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          동의전
                        </div>
                        <!-- // Case : 동의전 -->

                        <!-- Case : 동의완료 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          동의완료
                        </div>
                        <!--// Case : 동의완료 -->
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >장기렌트</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>진행일정</KeyValueTitle>
                    <KeyValueText>확정견적(2022.11.21)</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]A##############</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>종료시 처리</KeyValueTitle>
                    <KeyValueText>반납/구매/연장</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>차량 가격</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      41,100,000 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>기간/약정거리</KeyValueTitle>
                    <KeyValueText>36개월 / 2만km</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>선납금/보증금</KeyValueTitle>
                    <KeyValueText>4,110,000 원 / 8,220,000 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>잔존가치</KeyValueTitle>
                    <KeyValueText>최고(56.5%) 23,221,500 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>정비</KeyValueTitle>
                    <KeyValueText>Self Service</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>월납입금</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      628,190 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>탁송</KeyValueTitle>
                    <KeyValueText
                      >외주탁송, 아산 출고장, 서울 도착</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText>직판 출고 / 개인</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>보험</KeyValueTitle>
                    <KeyValueText>26세, 1억원, 1억원, 30만원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText>
                      (0.00%) : 000,000원 / (0.00%) : 000,000원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :classNames="{
                    wrap: 'row-margin-contents-small row-margin-bottom-none',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton theme="quaternary" :line="true" size="small">
                      재견적
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 보기
                    </BasicButton>
                  </ButtonListItem>
                </ButtonList>

                <ButtonList :classNames="{ wrap: 'row-margin-item' }">
                  <ButtonListItem>
                    <BasicButton size="small">신용조회동의</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 견적 - 장기렌트 -->

        <!-- Case : 견적 - 선구매 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <!-- Case : 동의전 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          동의전
                        </div>
                        <!-- // Case : 동의전 -->

                        <!-- Case : 동의완료 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          동의완료
                        </div>
                        <!--// Case : 동의완료 -->
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >선구매</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>진행일정</KeyValueTitle>
                    <KeyValueText>확정견적(2022.11.21)</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]A##############</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>종료시 처리</KeyValueTitle>
                    <KeyValueText>반납/구매/연장</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>차량 가격</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      41,100,000 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>기간/약정거리</KeyValueTitle>
                    <KeyValueText>36개월 / 2만km</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>선납금/보증금</KeyValueTitle>
                    <KeyValueText>4,110,000 원 / 8,220,000 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>잔존가치</KeyValueTitle>
                    <KeyValueText>최고(56.5%) 23,221,500 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>정비</KeyValueTitle>
                    <KeyValueText>Self Service</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>월납입금</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      628,190 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>탁송</KeyValueTitle>
                    <KeyValueText
                      >외주탁송, 아산 출고장, 서울 도착</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText>직판 출고 / 개인</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>보험</KeyValueTitle>
                    <KeyValueText>26세, 1억원, 1억원, 30만원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText>
                      (0.00%) : 000,000원 / (0.00%) : 000,000원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :classNames="{
                    wrap: 'row-margin-contents-small row-margin-bottom-none',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton theme="quaternary" :line="true" size="small">
                      재견적
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 보기
                    </BasicButton>
                  </ButtonListItem>
                </ButtonList>

                <ButtonList :classNames="{ wrap: 'row-margin-item' }">
                  <ButtonListItem>
                    <BasicButton size="small">신용조회동의</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 견적 - 선구매 -->

        <!-- Case : 견적 - 운용리스 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <!-- Case : 동의전 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          동의전
                        </div>
                        <!-- // Case : 동의전 -->

                        <!-- Case : 동의완료 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          동의완료
                        </div>
                        <!--// Case : 동의완료 -->
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >운용리스</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>진행일정</KeyValueTitle>
                    <KeyValueText>확정견적(2022.11.21)</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]A##############</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>종료시 처리</KeyValueTitle>
                    <KeyValueText>재리스/구매/반납</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>취득원가</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      42,915,025 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>기간/약정거리</KeyValueTitle>
                    <KeyValueText>36개월 / 4.47% / 2만km</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>선납금/보증금</KeyValueTitle>
                    <KeyValueText>4,034,000 원 / 8,069,000 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>잔존가치</KeyValueTitle>
                    <KeyValueText>최고(51%) 20,577,000 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>월납입금</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      628,190 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText
                      >대리점출고 / 카드결제, 리스사 명의</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>원가구성</KeyValueTitle>
                    <KeyValueText
                      >취/등록세 포함, 공채할인 미포함, 기타비용
                      미포함</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText>
                      (0.00%) : 000,000원 / (0.00%) : 000,000원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :wrap="true"
                  :classNames="{ wrap: 'row-margin-contents-small' }"
                >
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 발송
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 보기
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton theme="quaternary" :line="true" size="small">
                      재견적
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton size="small">신용조회요청</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 견적 - 운용리스 -->

        <!-- Case : 견적 - 할부 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <!-- Case : 동의전 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          동의전
                        </div>
                        <!-- // Case : 동의전 -->

                        <!-- Case : 동의완료 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          동의완료
                        </div>
                        <!--// Case : 동의완료 -->
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >할부</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>진행일정</KeyValueTitle>
                    <KeyValueText>확정견적(2022.11.21)</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]A##############</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      The New A-Class 2023년형 디젤 2.0세단 (개소세 30% 인하)
                      A200d
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>대출원금<br />(금리)</KeyValueTitle>
                    <KeyValueText>
                      46,200,000 원<br />
                      (9.2% ~ 11.9%)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>선수금</KeyValueTitle>
                    <KeyValueText>(0%) 0</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>월납입금</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      1,473,450~1,532,290 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText>대리점출고</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>제휴사</KeyValueTitle>
                    <KeyValueText>(레)츄패문</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText>
                      (0.00%) : 000,000원 / (0.00%) : 000,000원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :wrap="true"
                  :classNames="{ wrap: 'row-margin-contents-small' }"
                >
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 발송
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 보기
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton theme="quaternary" :line="true" size="small">
                      재견적
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton size="small">신용조회요청</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 견적 - 할부 -->

        <!-- Case : 심사 - 장기렌트 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <!-- Case : 심사중 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          심사중
                        </div>
                        <!--// Case : 심사중 -->

                        <!-- Case : 승인 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          승인
                        </div>
                        <!--// Case : 승인 -->

                        <!-- Case : 발주요청 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          발주요청
                        </div>
                        <!--// Case : 발주요청 -->

                        <!-- Case : 발주완료 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          발주완료
                        </div>
                        <!--// Case : 발주완료 -->

                        <!-- Case : 배정 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          배정
                        </div>
                        <!--// Case : 배정 -->

                        <!-- Case : 결제완료 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          결제완료
                        </div>
                        <!--// Case : 결제완료 -->
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >장기렌트</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>진행일정</KeyValueTitle>
                    <KeyValueText>확정견적(2022.11.21)</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]A##############</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>종료시 처리</KeyValueTitle>
                    <KeyValueText>반납/구매/연장</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>차량 가격</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      41,100,000 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>기간/약정거리</KeyValueTitle>
                    <KeyValueText>36개월 / 2만km</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>선납금/보증금</KeyValueTitle>
                    <KeyValueText>4,110,000 원 / 8,220,000 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>잔존가치</KeyValueTitle>
                    <KeyValueText>최고(56.5%) 23,221,500 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>정비</KeyValueTitle>
                    <KeyValueText>Self Service</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>월납입금</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      628,190 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>탁송</KeyValueTitle>
                    <KeyValueText
                      >외주탁송, 아산 출고장, 서울 도착</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText>대리점 출고 / 개인사업자</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>보험</KeyValueTitle>
                    <KeyValueText>26세, 1억원, 1억원, 30만원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText>
                      (0.00%) : 000,000원 / (0.00%) : 000,000원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :classNames="{
                    wrap: 'row-margin-contents-small row-margin-bottom-none',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton theme="quaternary" :line="true" size="small">
                      조건 변경
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 보기
                    </BasicButton>
                  </ButtonListItem>
                </ButtonList>

                <!-- Case : 심사중, 발주완료 -->
                <BasicButton
                  theme="tertiary"
                  size="small"
                  :classNames="{ wrap: 'row-margin-item' }"
                  >서류 등록</BasicButton
                >
                <!-- //Case : 심사중, 발주완료 -->

                <!-- Case : 승인 -->
                <BasicButton
                  theme="tertiary"
                  size="small"
                  :classNames="{ wrap: 'row-margin-item' }"
                  >서류 추가 등록</BasicButton
                >

                <BasicButton
                  size="small"
                  :classNames="{ wrap: 'row-margin-item' }"
                  >발주요청</BasicButton
                >
                <!-- //Case : 승인 -->

                <!-- Case : 발주요청 -->
                <BasicButton
                  :disabled="true"
                  size="small"
                  :classNames="{ wrap: 'row-margin-item' }"
                  >발주요청 완료</BasicButton
                >
                <!-- // Case : 발주요청 -->

                <!-- Case : 배정, 결제완료 -->
                <BasicButton
                  size="small"
                  :classNames="{ wrap: 'row-margin-item' }"
                  >품의등록</BasicButton
                >
                <!-- //Case : 배정, 결제완료 -->
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 심사 - 장기렌트 -->

        <!-- Case : 심사 - 선구매 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <!-- Case : 심사중 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          심사중
                        </div>
                        <!--// Case : 심사중 -->

                        <!-- Case : 승인 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          승인
                        </div>
                        <!--// Case : 승인 -->
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >선구매</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>진행일정</KeyValueTitle>
                    <KeyValueText>확정견적(2022.11.21)</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]A##############</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>종료시 처리</KeyValueTitle>
                    <KeyValueText>반납/구매/연장</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>차량 가격</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      41,100,000 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>기간/약정거리</KeyValueTitle>
                    <KeyValueText>36개월 / 2만km</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>선납금/보증금</KeyValueTitle>
                    <KeyValueText>4,110,000 원 / 8,220,000 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>잔존가치</KeyValueTitle>
                    <KeyValueText>최고(56.5%) 23,221,500 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>정비</KeyValueTitle>
                    <KeyValueText>Self Service</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>월납입금</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      628,190 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>탁송</KeyValueTitle>
                    <KeyValueText
                      >외주탁송, 아산 출고장, 서울 도착</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText>대리점 출고 / 개인사업자</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>보험</KeyValueTitle>
                    <KeyValueText>26세, 1억원, 1억원, 30만원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText>
                      (0.00%) : 000,000원 / (0.00%) : 000,000원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :classNames="{
                    wrap: 'row-margin-contents-small row-margin-bottom-none',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton theme="quaternary" :line="true" size="small">
                      조건 변경
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 보기
                    </BasicButton>
                  </ButtonListItem>
                </ButtonList>

                <!-- Case : 심사중 -->
                <BasicButton
                  theme="tertiary"
                  size="small"
                  :classNames="{ wrap: 'row-margin-item' }"
                  >서류 등록</BasicButton
                >
                <!-- //Case : 심사중 -->

                <!-- Case : 승인 -->
                <BasicButton
                  theme="tertiary"
                  size="small"
                  :classNames="{ wrap: 'row-margin-item' }"
                  >서류 추가 등록</BasicButton
                >
                <BasicButton
                  size="small"
                  :classNames="{ wrap: 'row-margin-item' }"
                  >품의등록</BasicButton
                >
                <!-- //Case : 승인 -->
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 심사 - 선구매 -->

        <!-- Case : 심사 - 운용리스 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <!-- Case : 심사중 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          심사중
                        </div>
                        <!--// Case : 심사중 -->

                        <!-- Case : 승인 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          승인
                        </div>
                        <!--// Case : 승인 -->

                        <!-- Case : 발주요청 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          발주요청
                        </div>
                        <!--// Case : 발주요청 -->

                        <!-- Case : 발주완료 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          발주완료
                        </div>
                        <!--// Case : 발주완료 -->

                        <!-- Case : 배정 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          배정
                        </div>
                        <!--// Case : 배정 -->

                        <!-- Case : 결제완료 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          결제완료
                        </div>
                        <!--// Case : 결제완료 -->
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >운용리스</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>진행일정</KeyValueTitle>
                    <KeyValueText>확정견적(2022.11.21)</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]A##############</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>종료시 처리</KeyValueTitle>
                    <KeyValueText>재리스/구매/반납</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>차량 가격</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      42,915,025 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>기간/약정거리</KeyValueTitle>
                    <KeyValueText>36개월 / 4.47% / 2만km</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>선납금/보증금</KeyValueTitle>
                    <KeyValueText>4,034,000 원 / 8,069,000 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>잔존가치</KeyValueTitle>
                    <KeyValueText>최고(51%) 20,577,000 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>월납입금</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      628,190 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText
                      >대리점 출고 / 카드결제, 리스사 명의</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>원가구성</KeyValueTitle>
                    <KeyValueText
                      >취/등록세 포함, 공채할인 미포함, 기타비용
                      미포함</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText>
                      (0.00%) : 000,000원 / (0.00%) : 000,000원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <!-- Case : 심사중, 발주완료 -->
                <ButtonList
                  :wrap="true"
                  :classNames="{
                    wrap: 'row-margin-contents-small row-margin-bottom-none',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 발송
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 보기
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton theme="quaternary" :line="true" size="small">
                      조건 변경
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton theme="tertiary" size="small"
                      >서류 등록</BasicButton
                    >
                  </ButtonListItem>
                </ButtonList>
                <!-- //Case : 심사중, 발주완료 -->

                <!-- Case : 배정, 승인 -->
                <div>
                  <ButtonList
                    :wrap="true"
                    :col="3"
                    :classNames="{
                      wrap: 'row-margin-contents-small row-margin-bottom-none',
                    }"
                  >
                    <ButtonListItem>
                      <BasicButton theme="quaternary" :line="true" size="small">
                        조건 변경
                      </BasicButton>
                    </ButtonListItem>
                    <ButtonListItem>
                      <BasicButton :line="true" size="small">
                        견적서 발송
                      </BasicButton>
                    </ButtonListItem>
                    <ButtonListItem>
                      <BasicButton :line="true" size="small">
                        견적서 보기
                      </BasicButton>
                    </ButtonListItem>
                  </ButtonList>

                  <BasicButton
                    theme="tertiary"
                    size="small"
                    :classNames="{ wrap: 'row-margin-item' }"
                    >서류 추가 등록</BasicButton
                  >
                  <BasicButton
                    size="small"
                    :classNames="{ wrap: 'row-margin-item' }"
                    >품의등록</BasicButton
                  >
                </div>
                <!-- //Case : 배정, 승인 -->

                <!-- Case : 발주요청 -->
                <div>
                  <ButtonList
                    :wrap="true"
                    :classNames="{
                      wrap: 'row-margin-contents-small row-margin-bottom-none',
                    }"
                  >
                    <ButtonListItem>
                      <BasicButton theme="quaternary" :line="true" size="small">
                        조건 변경
                      </BasicButton>
                    </ButtonListItem>
                    <ButtonListItem>
                      <BasicButton :line="true" size="small">
                        견적서 보기
                      </BasicButton>
                    </ButtonListItem>
                  </ButtonList>

                  <BasicButton
                    theme="tertiary"
                    size="small"
                    :classNames="{ wrap: 'row-margin-item' }"
                    >서류 추가 등록</BasicButton
                  >
                  <BasicButton
                    size="small"
                    :classNames="{ wrap: 'row-margin-item' }"
                    >발주요청</BasicButton
                  >
                </div>
                <!-- //Case : 발주요청 -->
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 심사 - 운용리스 -->

        <!-- Case : 심사 - 할부 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <!-- Case : 심사중 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          심사중
                        </div>
                        <!--// Case : 심사중 -->

                        <!-- Case : 승인 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          승인
                        </div>
                        <!--// Case : 승인 -->
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >할부</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>진행일정</KeyValueTitle>
                    <KeyValueText>확정견적(2022.11.21)</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]A##############</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>대출원금<br />(금리)</KeyValueTitle>
                    <KeyValueText>
                      46,200,000 원<br />
                      (확정 10%)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>선수금</KeyValueTitle>
                    <KeyValueText>(0%) 0 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>월납입금</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      확정 628,190 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText>대리점 출고</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>제휴사</KeyValueTitle>
                    <KeyValueText>(레)츄패문</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText>
                      (0.00%) : 000,000원 / (0.00%) : 000,000원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <!-- Case : 심사중 -->
                <ButtonList
                  :wrap="true"
                  :classNames="{
                    wrap: 'row-margin-contents-small row-margin-bottom-none',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 발송
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 보기
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton theme="quaternary" :line="true" size="small">
                      조건 변경
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton theme="tertiary" size="small"
                      >서류 등록</BasicButton
                    >
                  </ButtonListItem>
                </ButtonList>
                <!-- //Case : 심사중 -->

                <!-- Case : 승인 -->
                <div>
                  <ButtonList
                    :wrap="true"
                    :col="3"
                    :classNames="{
                      wrap: 'row-margin-contents-small row-margin-bottom-none',
                    }"
                  >
                    <ButtonListItem>
                      <BasicButton theme="quaternary" :line="true" size="small">
                        조건 변경
                      </BasicButton>
                    </ButtonListItem>
                    <ButtonListItem>
                      <BasicButton :line="true" size="small">
                        견적서 발송
                      </BasicButton>
                    </ButtonListItem>
                    <ButtonListItem>
                      <BasicButton :line="true" size="small">
                        견적서 보기
                      </BasicButton>
                    </ButtonListItem>
                  </ButtonList>

                  <BasicButton
                    theme="tertiary"
                    size="small"
                    :classNames="{ wrap: 'row-margin-item' }"
                    >서류 추가 등록</BasicButton
                  >
                  <BasicButton
                    size="small"
                    :classNames="{ wrap: 'row-margin-item' }"
                    >품의등록</BasicButton
                  >
                </div>
                <!-- //Case : 승인 -->
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 심사 - 할부 -->

        <!-- Case : 품의 - 장기렌트 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <div class="color-green text-body-4 font-weight-medium">
                          품의요청
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >장기렌트</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>진행일정</KeyValueTitle>
                    <KeyValueText>확정견적(2022.11.21)</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]A##############</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>종료시 처리</KeyValueTitle>
                    <KeyValueText> 반납/구매/연장 </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>차량 가격</KeyValueTitle>
                    <KeyValueText
                      :classNames="{
                        text: 'color-green font-weight-medium',
                      }"
                    >
                      41,100,000 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>기간/약정거리</KeyValueTitle>
                    <KeyValueText> 36개월 / 2만km</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>선납금/보증금</KeyValueTitle>
                    <KeyValueText>4,110,000 원 / 8,220,000 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>잔존가치</KeyValueTitle>
                    <KeyValueText>최고(56.5%) 23,221,500 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>정비</KeyValueTitle>
                    <KeyValueText>Self Service</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>월납입금</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      628,190 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>탁송</KeyValueTitle>
                    <KeyValueText
                      >외주탁송, 아산 출고장, 서울 도착</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText>대리점 출고 / 개인사업자</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>보험</KeyValueTitle>
                    <KeyValueText>26세, 1억원, 1억원, 30만원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText>
                      (0.00%) : 000,000원 / (0.00%) : 000,000원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :classNames="{
                    wrap: 'row-margin-contents-small',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 보기
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton size="small">약정 URL 전송</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 품의 - 장기렌트 -->

        <!-- Case : 품의 - 선구매 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <div class="color-green text-body-4 font-weight-medium">
                          품의요청
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >선구매</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>진행일정</KeyValueTitle>
                    <KeyValueText>확정견적(2022.11.21)</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]A##############</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>종료시 처리</KeyValueTitle>
                    <KeyValueText> 반납/구매/연장 </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>차량 가격</KeyValueTitle>
                    <KeyValueText
                      :classNames="{
                        text: 'color-green font-weight-medium',
                      }"
                    >
                      41,100,000 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>기간/약정거리</KeyValueTitle>
                    <KeyValueText> 36개월 / 2만km</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>선납금/보증금</KeyValueTitle>
                    <KeyValueText>4,110,000 원 / 8,220,000 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>잔존가치</KeyValueTitle>
                    <KeyValueText>최고(56.5%) 23,221,500 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>정비</KeyValueTitle>
                    <KeyValueText>Self Service</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>월납입금</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      628,190 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>탁송</KeyValueTitle>
                    <KeyValueText
                      >외주탁송, 아산 출고장, 서울 도착</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText>대리점 출고 / 개인사업자</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>보험</KeyValueTitle>
                    <KeyValueText>26세, 1억원, 1억원, 30만원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText>
                      (0.00%) : 000,000원 / (0.00%) : 000,000원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :classNames="{
                    wrap: 'row-margin-contents-small',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 보기
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton size="small">약정 URL 전송</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 품의 - 선구매 -->

        <!-- Case : 품의 - 운용리스 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <div class="color-green text-body-4 font-weight-medium">
                          품의요청
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >운용리스</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>진행일정</KeyValueTitle>
                    <KeyValueText>확정견적(2022.11.21)</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]A##############</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>종료시 처리</KeyValueTitle>
                    <KeyValueText> 재리스/구매/반납</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>차량 가격</KeyValueTitle>
                    <KeyValueText
                      :classNames="{
                        text: 'color-green font-weight-medium',
                      }"
                    >
                      42,915,025 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>기간/약정거리</KeyValueTitle>
                    <KeyValueText> 36개월 / 4.47% / 2만km</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>선납금/보증금</KeyValueTitle>
                    <KeyValueText>4,034,000 원 / 8,069,000 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>잔존가치</KeyValueTitle>
                    <KeyValueText>최고(51%) 20,577,000 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>월납입금</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      628,190 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText
                      >대리점 출고 / 카드결제, 리스사 명의</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>원가구성</KeyValueTitle>
                    <KeyValueText
                      >취/등록세 포함, 공채할인 미포함, 기타비용
                      미포함</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText>
                      (0.00%) : 000,000원 / (0.00%) : 000,000원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :classNames="{
                    wrap: 'row-margin-contents-small row-margin-bottom-none',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 발송
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton :line="true" size="small"
                      >견적서 보기</BasicButton
                    >
                  </ButtonListItem>
                </ButtonList>

                <BasicButton
                  size="small"
                  :classNames="{ wrap: 'row-margin-item' }"
                  >약정 URL 전송</BasicButton
                >
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 품의 - 운용리스 -->

        <!-- Case : 품의 - 할부 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <div class="color-green text-body-4 font-weight-medium">
                          품의요청
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >할부</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>진행일정</KeyValueTitle>
                    <KeyValueText>확정견적(2022.11.21)</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]A##############</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>
                      대출원금<br />
                      (금리)
                    </KeyValueTitle>
                    <KeyValueText>
                      46,200,000 원<br />
                      (확정 10%)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>선수금</KeyValueTitle>
                    <KeyValueText>(0%) 0 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>월납입금</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      확정 628,190 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText>대리점 출고</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>제휴사</KeyValueTitle>
                    <KeyValueText>(레)츄패문</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText>
                      (0.00%) : 000,000원 / (0.00%) : 000,000원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :classNames="{
                    wrap: 'row-margin-contents-small row-margin-bottom-none',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 발송
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton :line="true" size="small"
                      >견적서 보기</BasicButton
                    >
                  </ButtonListItem>
                </ButtonList>

                <BasicButton
                  size="small"
                  :classNames="{ wrap: 'row-margin-item' }"
                  >약정 URL 전송</BasicButton
                >
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 품의 - 할부 -->

        <!-- Case : 인도 - 장기렌트 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <!-- Case : 송금완료 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          송금완료
                        </div>
                        <!--  //Case : 송금완료 -->

                        <!-- Case : 실행완료 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          실행완료
                        </div>
                        <!--  //Case : 실행완료 -->
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >장기렌트</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>진행일정</KeyValueTitle>
                    <KeyValueText>확정견적(2022.11.21)</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]A##############</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>종료시 처리</KeyValueTitle>
                    <KeyValueText> 반납/구매/연장 </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>차량 가격</KeyValueTitle>
                    <KeyValueText
                      :classNames="{
                        text: 'color-green font-weight-medium',
                      }"
                    >
                      41,100,000 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>기간/약정거리</KeyValueTitle>
                    <KeyValueText> 36개월 / 2만km</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>선납금/보증금</KeyValueTitle>
                    <KeyValueText>4,110,000 원 / 8,220,000 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>잔존가치</KeyValueTitle>
                    <KeyValueText>최고(56.5%) 23,221,500 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>정비</KeyValueTitle>
                    <KeyValueText>Self Service</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>월납입금</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      628,190 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>탁송</KeyValueTitle>
                    <KeyValueText
                      >외주탁송, 아산 출고장, 서울 도착</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText>대리점 출고 / 개인사업자</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>보험</KeyValueTitle>
                    <KeyValueText>26세, 1억원, 1억원, 30만원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText>
                      (0.00%) : 000,000원 / (0.00%) : 000,000원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :classNames="{
                    wrap: 'row-margin-contents-small',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 보기
                    </BasicButton>
                  </ButtonListItem>

                  <!-- Case : 송금완료 -->
                  <ButtonListItem>
                    <BasicButton size="small">인도요청</BasicButton>
                  </ButtonListItem>
                  <!-- //Case : 송금완료 -->
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 인도 - 장기렌트 -->

        <!-- Case : 인도 - 선구매 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <!-- Case : 송금완료 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          송금완료
                        </div>
                        <!--  //Case : 송금완료 -->

                        <!-- Case : 실행완료 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          실행완료
                        </div>
                        <!--  //Case : 실행완료 -->
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >선구매</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>진행일정</KeyValueTitle>
                    <KeyValueText>확정견적(2022.11.21)</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]A##############</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>종료시 처리</KeyValueTitle>
                    <KeyValueText> 반납/구매/연장 </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>차량 가격</KeyValueTitle>
                    <KeyValueText
                      :classNames="{
                        text: 'color-green font-weight-medium',
                      }"
                    >
                      41,100,000 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>기간/약정거리</KeyValueTitle>
                    <KeyValueText> 36개월 / 2만km</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>선납금/보증금</KeyValueTitle>
                    <KeyValueText>4,110,000 원 / 8,220,000 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>잔존가치</KeyValueTitle>
                    <KeyValueText>최고(56.5%) 23,221,500 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>정비</KeyValueTitle>
                    <KeyValueText>Self Service</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>월납입금</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      628,190 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>탁송</KeyValueTitle>
                    <KeyValueText
                      >외주탁송, 아산 출고장, 서울 도착</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText>대리점 출고 / 개인사업자</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>보험</KeyValueTitle>
                    <KeyValueText>26세, 1억원, 1억원, 30만원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText>
                      (0.00%) : 000,000원 / (0.00%) : 000,000원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList
                  :classNames="{
                    wrap: 'row-margin-contents-small',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton :line="true" size="small">
                      견적서 보기
                    </BasicButton>
                  </ButtonListItem>

                  <!-- Case : 송금완료 -->
                  <ButtonListItem>
                    <BasicButton size="small">인도요청</BasicButton>
                  </ButtonListItem>
                  <!-- //Case : 송금완료 -->
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 인도 - 선구매 -->

        <!-- Case : 인도 - 운용리스 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <!-- Case : 송금완료 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          송금완료
                        </div>
                        <!--  //Case : 송금완료 -->

                        <!-- Case : 차량등록완료 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          차량등록완료
                        </div>
                        <!--  //Case : 차량등록완료 -->

                        <!-- Case : 실행완료 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          실행완료
                        </div>
                        <!--  //Case : 실행완료 -->
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >운용리스</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>진행일정</KeyValueTitle>
                    <KeyValueText>확정견적(2022.11.21)</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]A##############</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>종료시 처리</KeyValueTitle>
                    <KeyValueText> 반납/구매/연장 </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>차량 가격</KeyValueTitle>
                    <KeyValueText
                      :classNames="{
                        text: 'color-green font-weight-medium',
                      }"
                    >
                      41,100,000 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>기간/약정거리</KeyValueTitle>
                    <KeyValueText> 36개월 / 4.47% / 2만km</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>선납금/보증금</KeyValueTitle>
                    <KeyValueText>4,034,000 원 / 8,069,000 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>잔존가치</KeyValueTitle>
                    <KeyValueText>최고(51%) 20,577,000 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>월납입금</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      628,190 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText
                      >대리점 출고 / 카드결제, 리스사 명의</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>원가구성</KeyValueTitle>
                    <KeyValueText
                      >취/등록세 포함, 공채할인 미포함, 기타비용
                      미포함</KeyValueText
                    >
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText>
                      (0.00%) : 000,000원 / (0.00%) : 000,000원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <!-- Case : 송금완료 - 대리점 출고 -->
                <div class="row-margin-contents-small">
                  <BasicButton :line="true" size="small">
                    견적서 보기
                  </BasicButton>

                  <ButtonList
                    :classNames="{
                      wrap: 'row-margin-item',
                    }"
                  >
                    <ButtonListItem>
                      <BasicButton theme="tertiary" size="small">
                        서류 등록
                      </BasicButton>
                    </ButtonListItem>
                    <ButtonListItem>
                      <BasicButton size="small">차량번호 등록</BasicButton>
                    </ButtonListItem>
                  </ButtonList>
                </div>
                <!-- //Case : 송금완료 - 대리점 출고 -->

                <!-- Case : 송금완료 - 특판 출고 -->
                <div class="row-margin-contents-small">
                  <ButtonList
                    :classNames="{
                      wrap: 'row-margin-top-none',
                    }"
                  >
                    <ButtonListItem>
                      <BasicButton :line="true" size="small">
                        견적서 보기
                      </BasicButton>
                    </ButtonListItem>
                    <ButtonListItem>
                      <BasicButton size="small">인도요청</BasicButton>
                    </ButtonListItem>
                  </ButtonList>
                </div>
                <!-- //Case : 송금완료 - 특판 출고 -->

                <!-- Case : 차량등록완료 -->
                <div class="row-margin-contents-small">
                  <BasicButton :line="true" size="small">
                    견적서 보기
                  </BasicButton>

                  <ButtonList
                    :classNames="{
                      wrap: 'row-margin-item',
                    }"
                  >
                    <ButtonListItem>
                      <BasicButton theme="tertiary" size="small">
                        서류 등록
                      </BasicButton>
                    </ButtonListItem>
                    <ButtonListItem>
                      <BasicButton size="small">차량번호 확인</BasicButton>
                    </ButtonListItem>
                  </ButtonList>
                </div>
                <!-- //Case : 차량등록완료 -->

                <!-- Case : 실행완료 -->
                <BasicButton
                  :line="true"
                  size="small"
                  :classNames="{ wrap: 'row-margin-contents-small' }"
                >
                  견적서 보기
                </BasicButton>
                <!-- //Case : 실행완료 -->
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 인도 - 운용리스 -->

        <!-- Case : 인도 - 할부 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <div :class="$style['division-info']">
                    <ul :class="$style['division-info__list']">
                      <li :class="$style['division-info__item']">
                        <div class="color-black text-body-4 font-weight-light">
                          2022.10.26
                        </div>
                      </li>
                      <li :class="$style['division-info__item']">
                        <!-- Case : 송금완료 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          송금완료
                        </div>
                        <!--  //Case : 송금완료 -->

                        <!-- Case : 실행완료 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          실행완료
                        </div>
                        <!--  //Case : 실행완료 -->

                        <!-- Case : 차량등록완료 -->
                        <div class="color-green text-body-4 font-weight-medium">
                          차량등록완료
                        </div>
                        <!--  //Case : 차량등록완료 -->
                      </li>
                    </ul>
                  </div>
                  <div class="text-body-1 font-weight-medium row-margin-small">
                    홍길동
                  </div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <RoundStatus
                    theme="denary"
                    :classNames="{ wrap: 'display-block' }"
                    >할부</RoundStatus
                  >
                </div>
              </div>
              <div class="flex-box row-margin-item">
                <div class="flex-box__cell flex-1">
                  <p class="text-body-4 color-gray">제네시스 더 뉴 G70</p>
                </div>
                <div class="flex-box__cell">
                  <UiAccordionOpener
                    :classNames="{ button: $style['opener'] }"
                  />
                </div>
              </div>
            </div>

            <UiAccordionLayer
              :classNames="{
                layer: $style['accordion-layer'],
              }"
            >
              <div :class="$style['accordion-contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>진행일정</KeyValueTitle>
                    <KeyValueText>확정견적(2022.11.21)</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적번호</KeyValueTitle>
                    <KeyValueText>[대구지점]A##############</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델</KeyValueTitle>
                    <KeyValueText>
                      2021년형 가솔린 2.0 터보<br />
                      (개소세 5% 기준)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>외장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          우유니 화이트(UYH)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip size="small" :colors="['248, 245, 245']" />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>내장색상</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell flex-1">
                          옵시디언 블랙 / 샌드스톰 그레이 투톤 (샌드스톰 그레이
                          시트)
                        </div>
                        <div class="flex-box__cell">
                          <ColorChip
                            size="small"
                            :colors="[['74, 74, 74'], ['152, 152, 152']]"
                          />
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>옵션</KeyValueTitle>
                    <KeyValueText>선택없음</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>
                      대출원금<br />
                      (금리)
                    </KeyValueTitle>
                    <KeyValueText>
                      46,200,000 원<br />
                      (확정 10%)
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>선수금</KeyValueTitle>
                    <KeyValueText> (0%) 0 원 </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>월납입금</KeyValueTitle>
                    <KeyValueText
                      :classNames="{ text: 'color-green font-weight-medium' }"
                    >
                      628,190 원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>출고/유형</KeyValueTitle>
                    <KeyValueText>대리점 출고</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>제휴사</KeyValueTitle>
                    <KeyValueText>(레)츄패문</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>수수료(CM/AG)</KeyValueTitle>
                    <KeyValueText>
                      (0.00%) : 000,000원 / (0.00%) : 000,000원
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>견적제목</KeyValueTitle>
                    <KeyValueText>
                      <div class="ellipsis">
                        견적제목이 노출됩니다. 길어질 경우 이렇게 보여집니다.
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>메모</KeyValueTitle>
                    <KeyValueText>
                      <div class="flex-box justify-conten-end">
                        <div class="flex-box__cell">메모 내용</div>
                        <div class="flex-box__cell">
                          <TextButton
                            :underline="true"
                            theme="secondary"
                            :block="true"
                            >기록</TextButton
                          >
                        </div>
                      </div>
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <div class="row-margin-contents-small">
                  <ButtonList
                    :classNames="{
                      wrap: 'row-margin-top-none',
                    }"
                  >
                    <ButtonListItem>
                      <BasicButton :line="true" size="small">
                        견적서 발송
                      </BasicButton>
                    </ButtonListItem>
                    <ButtonListItem>
                      <BasicButton :line="true" size="small">
                        견적서 보기
                      </BasicButton>
                    </ButtonListItem>
                  </ButtonList>

                  <!-- Case : 송금완료, 실행완료 -->
                  <BasicButton
                    theme="tertiary"
                    size="small"
                    :classNames="{ wrap: 'row-margin-item' }"
                    >서류 등록</BasicButton
                  >

                  <!-- Case : 송금완료 -->
                  <BasicButton
                    size="small"
                    :classNames="{ wrap: 'row-margin-item' }"
                    >차량번호 등록</BasicButton
                  >
                  <!-- //Case : 송금완료 -->

                  <!-- Case : 실행완료 -->
                  <BasicButton
                    size="small"
                    :classNames="{ wrap: 'row-margin-item' }"
                    >차량번호 확인</BasicButton
                  >
                  <!-- //Case : 실행완료 -->
                  <!-- //Case : 송금완료, 실행완료 -->
                </div>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- //Case : 인도 - 할부 -->
      </UiAccordion>

      <!-- Case : 결과 없을 때 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">조회된 결과가 없습니다.</p>
      </div>
      <!-- // Case : 결과 없을 때 -->
    </section>

    <template v-slot:foot>
      <ButtonList
        :wrap="true"
        :col="3"
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton theme="quaternary" size="small">장기렌트</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton theme="quaternary" size="small">신차리스</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton theme="quaternary" size="small">중고리스</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton theme="quaternary" size="small">국산할부</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton theme="quaternary" size="small">수입할부</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemSaveReview.scss';
</style>
