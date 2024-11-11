<script>
// ETC_M01_p001
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiLoadingStore } from '@/stores/ui/loading';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

import RoundTab from '@/components/ui/tab/RoundTab.vue';
import RoundTabButton from '@/components/ui/tab/RoundTabButton.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import RadioButton from '@/components/ui/form/RadioButton.vue';
import RadioButtonLabelText from '@/components/ui/form/RadioButtonLabelText.vue';
import RadioButtonObject from '@/components/ui/form/RadioButtonObject.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    PageContents,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BasicSelect,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BottomSticky,

    RoundTab,
    RoundTabButton,
    CarEmblem,
    CarThumb,
    RadioButton,
    RadioButtonLabelText,
    RadioButtonObject,
    UiTab,
    UiTabPanel,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
  },
  setup() {
    const store = {
      ui: {
        loading: useUiLoadingStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '렌터카 상담 예약');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => [' ']);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    const state = reactive({
      PageTextGroup,
      typeError: false,
      categoryError: false,
      productError001: false,
      productError002: false,
      productError003: false,
      corporateError: false,
      nameError: false,
      phoneError: false,
      timeError: false,
      carTypeError: false,
      carNameError: false,
      carRegionError: false,
    });

    const productsAccordionAnimateStart = () => {
      state.productsAccordionAnimate = true;
    };

    const productsAccordionAnimateEnd = () => {
      state.productsAccordionAnimate = false;

      if (state.productsSlider && state.productsSlider.updateSize) {
        state.productsSlider.updateSize();
      }
    };

    // DD : 아코디언 열때 Ajax 통신시 예시 : start
    const testAjax = () => {
      return new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 1000)
      );
    };

    const testAccordionToggle = (props, call) => {
      const { opened, open, close } = props;

      if (!opened) {
        const result = call();

        store.ui.loading.show();

        result.then(() => {
          open();
          store.ui.loading.hide();
        });
      } else {
        close();
      }
    };
    // DD : 아코디언 열때 Ajax 통신시 예시 : end

    // DD : 아코디언 내 폼 선택/적용 후 현재 아코디언 닫기 및 다음 아코디언 여는 함수 예시 : start
    const testAaccordionClose = (props, itemProps, nextKey) => {
      const { items } = props;
      const { close } = itemProps;
      const nextItem = nextKey && items.find((item) => item.key === nextKey);

      close();

      if (nextItem) {
        testAccordionToggle(
          { ...nextItem, opened: nextItem.getOpened() },
          testAjax
        );
      }
    };
    // DD : 아코디언 내 폼 선택/적용 후 현재 아코디언 닫기 및 다음 아코디언 여는 함수 예시 : end

    return {
      state,

      productsAccordionAnimateStart,
      productsAccordionAnimateEnd,
      testAjax,
      testAccordionToggle,
      testAaccordionClose,
    };
  },
};
</script>

<template>
  <PageContents>
    <FormList :class="[$style['agree-list'], 'row-margin-container']">
      <!-- 회원구분 -->
      <FormListItem titleText="회원구분" :forceFocus="true">
        <FormInvalid :error="state.typeError">
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="customerReservationCounselingType"
                id="customerReservationCounselingType1"
                :defaultChecked="true"
              >
                <BoxCheckLabel>개인(개인사업자)</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="customerReservationCounselingType"
                id="customerReservationCounselingType2"
              >
                <BoxCheckLabel>법인</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // 회원구분 -->
      <!-- 상담상품 -->
      <FormListItem
        titleText="상담 상품"
        target="#customerReservationCounselingCategoryButton"
        :selectOnly="true"
      >
        <FormInvalid :error="state.categoryError">
          <InputBlock :error="state.categoryError">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: '렌터카',
                  },
                  {
                    value: '2',
                    text: '리스카',
                  },
                  {
                    value: '3',
                    text: '법카',
                  },
                ]"
                buttonTitle="상담 분야 선택하기"
                layerTitle="상담 분야를 선택해 주세요"
                id="customerReservationCounselingCategory"
                buttonId="customerReservationCounselingCategoryButton"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText
            >연락처를 남겨주시면 상담원이 연락 드리고 친절하게 상담해
            드리겠습니다.</FormHelpText
          >
        </FormInvalid>
      </FormListItem>
      <!-- // 상담상품 -->
      <!-- 이름 -->
      <FormListItem
        titleText="이름"
        target="#customerReservationCounselingName"
      >
        <FormInvalid :error="state.nameError">
          <InputBlock :error="state.nameError">
            <InputBlockCell :flexible="true">
              <BasicInput title="이름" id="customerReservationCounselingName" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // 이름 -->
      <!-- Case : 회원구분 법인 선택 시 -->
      <FormListItem
        titleText="법인명"
        target="#customerReservationCounselingCorporateName"
      >
        <FormInvalid :error="state.corporateError">
          <InputBlock :error="state.corporateError">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="법인명"
                id="customerReservationCounselingCorporateName"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // Case : 회원구분 법인 선택 시 -->
      <!-- 연락처 -->
      <FormListItem
        titleText="연락처"
        target="#customerReservationCounselingPhone"
      >
        <FormInvalid :error="state.phoneError">
          <InputBlock :error="state.phoneError">
            <InputBlockCell :flexible="true">
              <BasicInput
                pattern="\d*"
                title="연락처"
                id="customerReservationCounselingPhone"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // 연락처 -->
      <!-- 연락가능시간 -->
      <FormListItem
        titleText="연락가능시간"
        target="#customerReservationCounselingStartTimeButton"
      >
        <FormInvalid :error="state.timeError">
          <InputBlock :error="state.timeError">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '9',
                    text: '9',
                  },
                  {
                    value: '10',
                    text: '10',
                  },
                  {
                    value: '11',
                    text: '11',
                  },
                  {
                    value: '12',
                    text: '12',
                  },
                  {
                    value: '13',
                    text: '13',
                  },
                  {
                    value: '14',
                    text: '14',
                  },
                  {
                    value: '15',
                    text: '15',
                  },
                  {
                    value: '16',
                    text: '16',
                  },
                  {
                    value: '17',
                    text: '17',
                  },
                ]"
                buttonTitle="시작시간 선택하기"
                layerTitle="시작시간을 선택해 주세요"
                id="customerReservationCounselingStartTime"
                buttonId="customerReservationCounselingStartTimeButton"
              />
            </InputBlockCell>
            <InputBlockCell margin="regular">
              <div class="text-body-3">시</div>
            </InputBlockCell>
            <InputBlockCell margin="regular">
              <div class="text-body-3">~</div>
            </InputBlockCell>
            <InputBlockCell :flexible="true" margin="regular">
              <BasicSelect
                :option="[
                  {
                    value: '10',
                    text: '10',
                  },
                  {
                    value: '11',
                    text: '11',
                  },
                  {
                    value: '12',
                    text: '12',
                  },
                  {
                    value: '13',
                    text: '13',
                  },
                  {
                    value: '14',
                    text: '14',
                  },
                  {
                    value: '15',
                    text: '15',
                  },
                  {
                    value: '16',
                    text: '16',
                  },
                  {
                    value: '17',
                    text: '17',
                  },
                ]"
                buttonTitle="종료시간 선택하기"
                layerTitle="종료시간을 선택해 주세요"
                id="customerReservationCounselingEndTime"
                buttonId="customerReservationCounselingEndTimeButton"
              />
            </InputBlockCell>
            <InputBlockCell margin="regular">
              <div class="text-body-3">시 사이</div>
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // 연락가능시간 -->
      <!-- 차량구분 -->
      <FormListItem
        titleText="차량구분"
        target="#customerReservationCounselingCarTypeButton"
        :selectOnly="true"
      >
        <FormInvalid :error="state.carTypeError">
          <InputBlock :error="state.carTypeError">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: '국산차',
                  },
                  {
                    value: '2',
                    text: '수입차',
                  },
                ]"
                buttonTitle="차량구분 선택하기"
                layerTitle="차량구분을 선택해 주세요"
                id="customerReservationCounselingCarType"
                buttonId="customerReservationCounselingCarTypeButton"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // 차량구분 -->
      <!-- 관심차량 -->
      <FormListItem
        titleText="관심차량"
        target="#customerReservationCounselingCarName"
      >
        <FormInvalid :error="state.carNameError">
          <InputBlock :error="state.carNameError">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="관심차량"
                id="customerReservationCounselingCarName"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // 관심차량 -->
    </FormList>

    <!-- 차량선택 -->
    <section :class="[$style['estimate-list'], 'row-margin-item']">
      <UiAccordion tagName="div" :defaultSpeed="0">
        <UiAccordionItem tagName="div">
          <div
            :class="$style['estimate-list__top']"
            style="padding: 19px 15px 17px"
          >
            <div class="flex-box">
              <div class="flex-box__cell flex-1">
                <h3 class="text-body-3 font-weight-regular">
                  <span class="color-green">차량정보</span> 추가 선택사항
                </h3>
              </div>
              <div class="flex-box__cell">
                <UiAccordionOpener
                  :classNames="{
                    button: $style['estimate-list__top-opener'],
                  }"
                />
              </div>
            </div>
          </div>

          <UiAccordionLayer>
            <UiAccordion
              :once="true"
              :classNames="{ wrap: $style['estimate-list__list'] }"
              v-slot="accordionSlotProps"
            >
              <!-- 브랜드 -->
              <UiAccordionItem
                :classNames="{ item: $style['estimate-list__item'] }"
                v-slot="accordionItemSlotProps"
                keyName="brand"
              >
                <div :class="$style['estimate-list__head']">
                  <div :class="$style['estimate-list__block']">
                    <div :class="$style['estimate-list__left']">
                      <KeyValue
                        align="left"
                        size="regular"
                        verticalAlign="center"
                      >
                        <KeyValueItem :classNames="{ item: 'text-body-3' }">
                          <KeyValueTitle>
                            <div class="text-body-4">브랜드</div>
                          </KeyValueTitle>
                          <KeyValueText>
                            <div class="flex-box">
                              <div class="flex-box__cell">
                                <CarEmblem
                                  src="/images/_dummy/car-emblem.png"
                                  size="small"
                                />
                              </div>
                              <div class="flex-box__cell flex-box__cell--small">
                                제네시스
                              </div>
                            </div>
                          </KeyValueText>
                        </KeyValueItem>
                      </KeyValue>
                    </div>
                  </div>
                  <div :class="$style['estimate-list__arrow']">
                    <UiAccordionOpener
                      :toggleAction="false"
                      :classNames="{
                        button: $style['estimate-list__opener'],
                      }"
                      @click="
                        testAccordionToggle(accordionItemSlotProps, testAjax)
                      "
                    />
                  </div>
                </div>

                <UiAccordionLayer
                  :classNames="{ layer: $style['estimate-list__layer'] }"
                >
                  <section :class="$style['estimate-list__contents']">
                    <UiTab>
                      <RoundTab
                        :useUiTab="true"
                        :classNames="{ wrap: 'row-margin-item-group' }"
                      >
                        <RoundTabButton
                          link="leaseRentEstimationSystemPrePurchaseBrand_001"
                        >
                          국산
                        </RoundTabButton>
                        <RoundTabButton
                          link="leaseRentEstimationSystemPrePurchaseBrand_002"
                        >
                          수입
                        </RoundTabButton>
                      </RoundTab>

                      <UiTabPanel
                        name="leaseRentEstimationSystemPrePurchaseBrand_001"
                      >
                        <div :class="$style['bank-brand']">
                          <ul :class="$style['bank-brand__list']">
                            <li :class="$style['bank-brand__item']">
                              <button
                                type="button"
                                :class="$style['bank-brand__block']"
                                @click="
                                  testAaccordionClose(
                                    accordionSlotProps,
                                    accordionItemSlotProps,
                                    'model'
                                  )
                                "
                              >
                                <span :class="$style['bank-brand__logo']">
                                  <CarEmblem
                                    src="/images/_dummy/car-emblem.png"
                                    size="medium"
                                  />
                                </span>
                                <span :class="$style['bank-brand__text']"
                                  >현대</span
                                >
                              </button>
                            </li>
                            <li :class="$style['bank-brand__item']">
                              <!-- DD : 선택 된 요소 is-selected 클래스 값 추가 및 title="선택 됨" 속성 추가 -->
                              <button
                                type="button"
                                :class="[
                                  $style['bank-brand__block'],
                                  'is-selected',
                                ]"
                                title="선택 됨"
                                @click="
                                  testAaccordionClose(
                                    accordionSlotProps,
                                    accordionItemSlotProps,
                                    'model'
                                  )
                                "
                              >
                                <span :class="$style['bank-brand__logo']">
                                  <CarEmblem
                                    src="/images/_dummy/car-emblem.png"
                                    size="medium"
                                  />
                                </span>
                                <span :class="$style['bank-brand__text']"
                                  >제네시스</span
                                >
                              </button>
                            </li>
                            <li :class="$style['bank-brand__item']">
                              <button
                                type="button"
                                :class="$style['bank-brand__block']"
                                @click="
                                  testAaccordionClose(
                                    accordionSlotProps,
                                    accordionItemSlotProps,
                                    'model'
                                  )
                                "
                              >
                                <span :class="$style['bank-brand__logo']">
                                  <CarEmblem
                                    src="/images/_dummy/car-emblem.png"
                                    size="medium"
                                  />
                                </span>
                                <span :class="$style['bank-brand__text']"
                                  >기아</span
                                >
                              </button>
                            </li>
                            <li :class="$style['bank-brand__item']">
                              <button
                                type="button"
                                :class="$style['bank-brand__block']"
                                @click="
                                  testAaccordionClose(
                                    accordionSlotProps,
                                    accordionItemSlotProps,
                                    'model'
                                  )
                                "
                              >
                                <span :class="$style['bank-brand__logo']">
                                  <CarEmblem
                                    src="/images/_dummy/car-emblem.png"
                                    size="medium"
                                  />
                                </span>
                                <span :class="$style['bank-brand__text']"
                                  >르노삼성</span
                                >
                              </button>
                            </li>
                            <li :class="$style['bank-brand__item']">
                              <button
                                type="button"
                                :class="$style['bank-brand__block']"
                                @click="
                                  testAaccordionClose(
                                    accordionSlotProps,
                                    accordionItemSlotProps,
                                    'model'
                                  )
                                "
                              >
                                <span :class="$style['bank-brand__logo']">
                                  <CarEmblem
                                    src="/images/_dummy/car-emblem.png"
                                    size="medium"
                                  />
                                </span>
                                <span :class="$style['bank-brand__text']"
                                  >쉐보레</span
                                >
                              </button>
                            </li>
                            <li :class="$style['bank-brand__item']">
                              <button
                                type="button"
                                :class="$style['bank-brand__block']"
                                @click="
                                  testAaccordionClose(
                                    accordionSlotProps,
                                    accordionItemSlotProps,
                                    'model'
                                  )
                                "
                              >
                                <span :class="$style['bank-brand__logo']">
                                  <CarEmblem
                                    src="/images/_dummy/car-emblem.png"
                                    size="medium"
                                  />
                                </span>
                                <span :class="$style['bank-brand__text']"
                                  >쌍용</span
                                >
                              </button>
                            </li>
                            <li :class="$style['bank-brand__item']">
                              <button
                                type="button"
                                :class="$style['bank-brand__block']"
                                @click="
                                  testAaccordionClose(
                                    accordionSlotProps,
                                    accordionItemSlotProps,
                                    'model'
                                  )
                                "
                              >
                                <span :class="$style['bank-brand__logo']">
                                  <CarEmblem size="medium" />
                                </span>
                                <span :class="$style['bank-brand__text']"
                                  >기타</span
                                >
                              </button>
                            </li>
                          </ul>
                        </div>
                      </UiTabPanel>

                      <UiTabPanel
                        name="leaseRentEstimationSystemPrePurchaseBrand_002"
                      >
                        <div :class="$style['bank-brand']">
                          <ul :class="$style['bank-brand__list']">
                            <li :class="$style['bank-brand__item']">
                              <button
                                type="button"
                                :class="$style['bank-brand__block']"
                                @click="
                                  testAaccordionClose(
                                    accordionSlotProps,
                                    accordionItemSlotProps,
                                    'model'
                                  )
                                "
                              >
                                <span :class="$style['bank-brand__logo']">
                                  <CarEmblem
                                    src="/images/_dummy/car-emblem.png"
                                    size="medium"
                                  />
                                </span>
                                <span :class="$style['bank-brand__text']"
                                  >벤츠</span
                                >
                              </button>
                            </li>
                            <li :class="$style['bank-brand__item']">
                              <button
                                type="button"
                                :class="$style['bank-brand__block']"
                                @click="
                                  testAaccordionClose(
                                    accordionSlotProps,
                                    accordionItemSlotProps,
                                    'model'
                                  )
                                "
                              >
                                <span :class="$style['bank-brand__logo']">
                                  <CarEmblem
                                    src="/images/_dummy/car-emblem.png"
                                    size="medium"
                                  />
                                </span>
                                <span :class="$style['bank-brand__text']"
                                  >BMW</span
                                >
                              </button>
                            </li>
                            <li :class="$style['bank-brand__item']">
                              <button
                                type="button"
                                :class="$style['bank-brand__block']"
                                @click="
                                  testAaccordionClose(
                                    accordionSlotProps,
                                    accordionItemSlotProps,
                                    'model'
                                  )
                                "
                              >
                                <span :class="$style['bank-brand__logo']">
                                  <CarEmblem
                                    src="/images/_dummy/car-emblem.png"
                                    size="medium"
                                  />
                                </span>
                                <span :class="$style['bank-brand__text']"
                                  >아우디</span
                                >
                              </button>
                            </li>
                            <li :class="$style['bank-brand__item']">
                              <button
                                type="button"
                                :class="$style['bank-brand__block']"
                                @click="
                                  testAaccordionClose(
                                    accordionSlotProps,
                                    accordionItemSlotProps,
                                    'model'
                                  )
                                "
                              >
                                <span :class="$style['bank-brand__logo']">
                                  <CarEmblem
                                    src="/images/_dummy/car-emblem.png"
                                    size="medium"
                                  />
                                </span>
                                <span :class="$style['bank-brand__text']"
                                  >포르쉐</span
                                >
                              </button>
                            </li>
                            <li :class="$style['bank-brand__item']">
                              <button
                                type="button"
                                :class="$style['bank-brand__block']"
                                @click="
                                  testAaccordionClose(
                                    accordionSlotProps,
                                    accordionItemSlotProps,
                                    'model'
                                  )
                                "
                              >
                                <span :class="$style['bank-brand__logo']">
                                  <CarEmblem
                                    src="/images/_dummy/car-emblem.png"
                                    size="medium"
                                  />
                                </span>
                                <span :class="$style['bank-brand__text']"
                                  >마세라티</span
                                >
                              </button>
                            </li>
                            <li :class="$style['bank-brand__item']">
                              <button
                                type="button"
                                :class="$style['bank-brand__block']"
                                @click="
                                  testAaccordionClose(
                                    accordionSlotProps,
                                    accordionItemSlotProps,
                                    'model'
                                  )
                                "
                              >
                                <span :class="$style['bank-brand__logo']">
                                  <CarEmblem
                                    src="/images/_dummy/car-emblem.png"
                                    size="medium"
                                  />
                                </span>
                                <span :class="$style['bank-brand__text']"
                                  >벤틀리</span
                                >
                              </button>
                            </li>
                            <li :class="$style['bank-brand__item']">
                              <button
                                type="button"
                                :class="$style['bank-brand__block']"
                                @click="
                                  testAaccordionClose(
                                    accordionSlotProps,
                                    accordionItemSlotProps,
                                    'model'
                                  )
                                "
                              >
                                <span :class="$style['bank-brand__logo']">
                                  <CarEmblem size="medium" />
                                </span>
                                <span :class="$style['bank-brand__text']"
                                  >기타</span
                                >
                              </button>
                            </li>
                          </ul>
                        </div>
                      </UiTabPanel>
                    </UiTab>
                  </section>
                </UiAccordionLayer>
              </UiAccordionItem>
              <!-- // 브랜드 -->

              <!-- 모델 -->
              <UiAccordionItem
                :classNames="{ item: $style['estimate-list__item'] }"
                v-slot="accordionItemSlotProps"
                keyName="model"
              >
                <div :class="$style['estimate-list__head']">
                  <div :class="$style['estimate-list__block']">
                    <div :class="$style['estimate-list__left']">
                      <KeyValue
                        align="left"
                        size="regular"
                        verticalAlign="center"
                      >
                        <KeyValueItem :classNames="{ item: 'text-body-3' }">
                          <KeyValueTitle>
                            <div class="text-body-4">모델</div>
                          </KeyValueTitle>
                          <KeyValueText>올 뉴 아반떼 HEV</KeyValueText>
                        </KeyValueItem>
                      </KeyValue>
                    </div>
                  </div>
                  <div :class="$style['estimate-list__arrow']">
                    <UiAccordionOpener
                      :toggleAction="false"
                      :classNames="{ button: $style['estimate-list__opener'] }"
                      @click="
                        testAccordionToggle(accordionItemSlotProps, testAjax)
                      "
                    />
                  </div>
                </div>

                <UiAccordionLayer
                  :classNames="{ layer: $style['estimate-list__layer'] }"
                >
                  <section :class="$style['estimate-list__contents']">
                    <div
                      :class="[
                        $style['bank-brand'],
                        $style['bank-brand--col-2'],
                      ]"
                    >
                      <ul :class="$style['bank-brand__list']">
                        <li :class="$style['bank-brand__item']">
                          <button
                            type="button"
                            :class="$style['bank-brand__block']"
                            @click="
                              testAaccordionClose(
                                accordionSlotProps,
                                accordionItemSlotProps,
                                'lineup'
                              )
                            "
                          >
                            <span :class="$style['bank-brand__logo']">
                              <CarThumb src="/images/_dummy/car-thumb.png" />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >캐스퍼</span
                            >
                          </button>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <!-- DD : 선택 된 요소 is-selected 클래스 값 추가 및 title="선택 됨" 속성 추가 -->
                          <button
                            type="button"
                            :class="[
                              $style['bank-brand__block'],
                              'is-selected',
                            ]"
                            title="선택 됨"
                            @click="
                              testAaccordionClose(
                                accordionSlotProps,
                                accordionItemSlotProps,
                                'lineup'
                              )
                            "
                          >
                            <span :class="$style['bank-brand__logo']">
                              <CarThumb src="/images/_dummy/car-thumb.png" />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >올 뉴 아반떼 HEV</span
                            >
                            <span class="inline-wrap row-margin-small">
                              <RoundStatus size="small" theme="secondary">
                                재고한정
                              </RoundStatus>
                            </span>
                          </button>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <button
                            type="button"
                            :class="$style['bank-brand__block']"
                            @click="
                              testAaccordionClose(
                                accordionSlotProps,
                                accordionItemSlotProps,
                                'lineup'
                              )
                            "
                          >
                            <span :class="$style['bank-brand__logo']">
                              <CarThumb src="/images/_dummy/car-thumb.png" />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >아반떼-N</span
                            >
                          </button>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <button
                            type="button"
                            :class="$style['bank-brand__block']"
                            @click="
                              testAaccordionClose(
                                accordionSlotProps,
                                accordionItemSlotProps,
                                'lineup'
                              )
                            "
                          >
                            <span :class="$style['bank-brand__logo']">
                              <CarThumb src="/images/_dummy/car-thumb.png" />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >더 뉴 그랜저</span
                            >
                          </button>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <button
                            type="button"
                            :class="$style['bank-brand__block']"
                            @click="
                              testAaccordionClose(
                                accordionSlotProps,
                                accordionItemSlotProps,
                                'lineup'
                              )
                            "
                          >
                            <span :class="$style['bank-brand__logo']">
                              <CarThumb src="/images/_dummy/car-thumb.png" />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >올 뉴 아반떼 HEV</span
                            >
                          </button>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <button
                            type="button"
                            :class="$style['bank-brand__block']"
                            @click="
                              testAaccordionClose(
                                accordionSlotProps,
                                accordionItemSlotProps,
                                'lineup'
                              )
                            "
                          >
                            <span :class="$style['bank-brand__logo']">
                              <CarThumb src="/images/_dummy/car-thumb.png" />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >더 뉴 싼타페</span
                            >
                          </button>
                        </li>
                      </ul>
                    </div>
                  </section>
                </UiAccordionLayer>
              </UiAccordionItem>
              <!-- // 모델 -->

              <!-- 라인업 -->
              <UiAccordionItem
                :classNames="{ item: $style['estimate-list__item'] }"
                v-slot="accordionItemSlotProps"
                keyName="lineup"
              >
                <div :class="$style['estimate-list__head']">
                  <div :class="$style['estimate-list__block']">
                    <div :class="$style['estimate-list__left']">
                      <KeyValue
                        align="left"
                        size="regular"
                        verticalAlign="center"
                      >
                        <KeyValueItem :classNames="{ item: 'text-body-3' }">
                          <KeyValueTitle>
                            <div class="text-body-4">라인업</div>
                          </KeyValueTitle>
                          <KeyValueText>2022년형 가솔린 1.0</KeyValueText>
                        </KeyValueItem>
                      </KeyValue>
                    </div>
                  </div>
                  <div :class="$style['estimate-list__arrow']">
                    <UiAccordionOpener
                      :toggleAction="false"
                      :classNames="{ button: $style['estimate-list__opener'] }"
                      @click="
                        testAccordionToggle(accordionItemSlotProps, testAjax)
                      "
                    />
                  </div>
                </div>

                <UiAccordionLayer
                  :classNames="{ layer: $style['estimate-list__layer'] }"
                >
                  <section :class="$style['estimate-list__contents']">
                    <ul class="reset-list">
                      <li class="row-margin-item-group">
                        <RadioButton
                          theme="tertiary"
                          :full="true"
                          name="leaseRentEstimationSystemPrePurchaseLineup"
                          id="leaseRentEstimationSystemPrePurchaseLineup_001"
                          @change="
                            testAaccordionClose(
                              accordionSlotProps,
                              accordionItemSlotProps,
                              'trim'
                            )
                          "
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="display-block"
                              >2022년형 가솔린 1.0</span
                            >
                            <span
                              class="flex-box row-margin-mini text-body-5 color-gray-secondary"
                            >
                              <span class="flex-box__cell"
                                >개소세 5%기준 2021.09~</span
                              >
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </li>
                      <li class="row-margin-item-group">
                        <RadioButton
                          theme="tertiary"
                          :full="true"
                          name="leaseRentEstimationSystemPrePurchaseLineup"
                          id="leaseRentEstimationSystemPrePurchaseLineup_002"
                          @change="
                            testAaccordionClose(
                              accordionSlotProps,
                              accordionItemSlotProps,
                              'trim'
                            )
                          "
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="display-block"
                              >2022년형 가솔린 1.0 터보</span
                            >
                            <span
                              class="flex-box row-margin-mini text-body-5 color-gray-secondary"
                            >
                              <span class="flex-box__cell">2021.09~</span>
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </li>
                      <li class="row-margin-item-group">
                        <RadioButton
                          theme="tertiary"
                          :full="true"
                          name="leaseRentEstimationSystemPrePurchaseLineup"
                          id="leaseRentEstimationSystemPrePurchaseLineup_003"
                          @change="
                            testAaccordionClose(
                              accordionSlotProps,
                              accordionItemSlotProps,
                              'trim'
                            )
                          "
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="display-block"
                              >2022년형 가솔린 1.0 밴</span
                            >
                            <span
                              class="flex-box row-margin-mini text-body-5 color-gray-secondary"
                            >
                              <span class="flex-box__cell">2022.02~</span>
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </li>
                      <li class="row-margin-item-group">
                        <RadioButton
                          theme="tertiary"
                          :full="true"
                          name="leaseRentEstimationSystemPrePurchaseLineup"
                          id="leaseRentEstimationSystemPrePurchaseLineup_004"
                          @change="
                            testAaccordionClose(
                              accordionSlotProps,
                              accordionItemSlotProps,
                              'trim'
                            )
                          "
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="display-block"
                              >2022년형 가솔린 1.0</span
                            >
                            <span
                              class="flex-box row-margin-mini text-body-5 color-gray-secondary"
                            >
                              <span class="flex-box__cell">2022.02~</span>
                              <span
                                class="flex-box__cell flex-box__cell--small-regular"
                              >
                                <RoundStatus
                                  :block="true"
                                  size="small"
                                  theme="secondary"
                                >
                                  재고한정
                                </RoundStatus>
                              </span>
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </li>
                    </ul>
                  </section>
                </UiAccordionLayer>
              </UiAccordionItem>
              <!-- // 라인업 -->

              <!-- 트림 -->
              <UiAccordionItem
                :classNames="{ item: $style['estimate-list__item'] }"
                v-slot="accordionItemSlotProps"
                keyName="trim"
              >
                <div :class="$style['estimate-list__head']">
                  <div :class="$style['estimate-list__block']">
                    <div :class="$style['estimate-list__left']">
                      <KeyValue
                        align="left"
                        size="regular"
                        verticalAlign="center"
                      >
                        <KeyValueItem :classNames="{ item: 'text-body-3' }">
                          <KeyValueTitle>
                            <div class="text-body-4">트림</div>
                          </KeyValueTitle>
                          <KeyValueText>인스퍼레이션</KeyValueText>
                        </KeyValueItem>
                      </KeyValue>
                    </div>
                    <!-- <div :class="$style['estimate-list__right']">
                      <div class="text-body-3 font-weight-bold">
                        18,700,000 원
                      </div>
                    </div> -->
                  </div>
                  <div :class="$style['estimate-list__arrow']">
                    <UiAccordionOpener
                      :toggleAction="false"
                      :classNames="{ button: $style['estimate-list__opener'] }"
                      @click="
                        testAccordionToggle(accordionItemSlotProps, testAjax)
                      "
                    />
                  </div>
                </div>

                <UiAccordionLayer
                  :classNames="{ layer: $style['estimate-list__layer'] }"
                >
                  <section :class="$style['estimate-list__contents']">
                    <ul class="reset-list">
                      <li class="row-margin-item-group">
                        <RadioButton
                          theme="tertiary"
                          :full="true"
                          name="leaseRentEstimationSystemPrePurchaseTrim"
                          id="leaseRentEstimationSystemPrePurchaseTrim_001"
                          @change="
                            testAaccordionClose(
                              accordionSlotProps,
                              accordionItemSlotProps,
                              'exterior'
                            )
                          "
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell flex-1"
                                >디 에센셜</span
                              >
                              <span class="flex-box__cell font-weight-medium"
                                >16,900,000 원</span
                              >
                            </span>
                            <span
                              class="flex-box row-margin-mini text-body-5 color-gray-secondary"
                            >
                              <span class="flex-box__cell"
                                >휘발유 14.3km/l</span
                              >
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </li>
                      <li class="row-margin-item-group">
                        <RadioButton
                          theme="tertiary"
                          :full="true"
                          name="leaseRentEstimationSystemPrePurchaseTrim"
                          id="leaseRentEstimationSystemPrePurchaseTrim_002"
                          @change="
                            testAaccordionClose(
                              accordionSlotProps,
                              accordionItemSlotProps,
                              'exterior'
                            )
                          "
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell flex-1">스마트</span>
                              <span class="flex-box__cell font-weight-medium"
                                >13,850,000 원</span
                              >
                            </span>
                            <span
                              class="flex-box row-margin-mini text-body-5 color-gray-secondary"
                            >
                              <span class="flex-box__cell"
                                >휘발유 14.3km/l</span
                              >
                              <span
                                class="flex-box__cell flex-box__cell--small-regular"
                              >
                                <RoundStatus
                                  :block="true"
                                  size="small"
                                  theme="secondary"
                                >
                                  재고한정
                                </RoundStatus>
                              </span>
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </li>
                      <li class="row-margin-item-group">
                        <RadioButton
                          theme="tertiary"
                          :full="true"
                          name="leaseRentEstimationSystemPrePurchaseTrim"
                          id="leaseRentEstimationSystemPrePurchaseTrim_003"
                          @change="
                            testAaccordionClose(
                              accordionSlotProps,
                              accordionItemSlotProps,
                              'exterior'
                            )
                          "
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell flex-1">모던</span>
                              <span class="flex-box__cell font-weight-medium"
                                >15,900,000 원</span
                              >
                            </span>
                            <span
                              class="flex-box row-margin-mini text-body-5 color-gray-secondary"
                            >
                              <span class="flex-box__cell"
                                >휘발유 14.3km/l</span
                              >
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </li>
                      <li class="row-margin-item-group">
                        <RadioButton
                          theme="tertiary"
                          :full="true"
                          name="leaseRentEstimationSystemPrePurchaseTrim"
                          id="leaseRentEstimationSystemPrePurchaseTrim_004"
                          @change="
                            testAaccordionClose(
                              accordionSlotProps,
                              accordionItemSlotProps,
                              'exterior'
                            )
                          "
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>
                            <span class="flex-box">
                              <span class="flex-box__cell flex-1"
                                >인스퍼레이션</span
                              >
                              <span class="flex-box__cell font-weight-medium"
                                >18.700,000 원</span
                              >
                            </span>
                            <span
                              class="flex-box row-margin-mini text-body-5 color-gray-secondary"
                            >
                              <span class="flex-box__cell"
                                >휘발유 14.3km/l</span
                              >
                            </span>
                          </RadioButtonLabelText>
                        </RadioButton>
                      </li>
                    </ul>
                  </section>
                </UiAccordionLayer>
              </UiAccordionItem>
              <!-- // 트림 -->
            </UiAccordion>
          </UiAccordionLayer>
        </UiAccordionItem>
      </UiAccordion>
    </section>
    <!-- // 차량선택 -->
    <div class="text-body-4 color-gray multi-ellipsis">
      차량정보를 선택하시면 상담 시간이 단축됩니다.
    </div>

    <div :class="[$style['agree-list'], 'row-margin-container']">
      <ul :class="$style['agree-list__list']">
        <li :class="$style['agree-list__item']">
          <div :class="$style['agree-list__head']">
            <CheckBox
              id="layerGuidePhoneCounselingAgree001"
              :classNames="{
                wrap: $style['agree-list__checkbox'],
              }"
              theme="tertiary"
            >
              <CheckBoxObject />
              <CheckBoxLabelText>개인정보 수집ㆍ이용 동의</CheckBoxLabelText>
            </CheckBox>
            <div :class="$style['agree-list__right']">
              <button type="button" :class="$style['agree-list__link']">
                <span :class="$style['agree-list__link-text']"> 상세보기 </span>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <ul :class="[$style['basic-list']]">
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          하나캐피탈㈜와 위탁계약을 체결하고 여신금융협회에 정식 등록된 리스 및
          할부 모집인을 통하여 고객상담 접수 및 회신이 진행됩니다.
        </div>
      </li>
    </ul>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>확인</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerReservationCounseling.scss';
@import '@/assets/scss/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemPrePurchase.scss';
</style>
