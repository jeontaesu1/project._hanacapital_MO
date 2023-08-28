<script>
// LR_M02_p003
import { reactive, onMounted, onUnmounted } from 'vue';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import { useUiLoadingStore } from '@/stores/ui/loading';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import SettingButton from '@/components/ui/button/SettingButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import ColorChip from '@/components/ui/imageData/ColorChip.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import RadioButton from '@/components/ui/form/RadioButton.vue';
import RadioButtonLabelText from '@/components/ui/form/RadioButtonLabelText.vue';
import RadioButtonObject from '@/components/ui/form/RadioButtonObject.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import SwitchCheckBox from '@/components/ui/form/SwitchCheckBox.vue';
import DeleteButton from '@/components/ui/button/DeleteButton.vue';
import DocumentView from '@/components/ui/viewer/DocumentView.vue';

import DocumentEstimate004Contents from '@/views/document/DocumentEstimate004Contents.vue';

import IconScroll from '@/assets/images/icon/scroll.svg?component';

import dummyDataEstimate from '@/assets/_dummyData/견적서asis/견적서HTML샘플(할부_할부금융).html?raw';

export default {
  components: {
    Swiper,
    SwiperSlide,
    PageContents,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheckObject,
    SettingButton,
    BasicHr,
    CarEmblem,
    CarThumb,
    ColorChip,
    RoundStatus,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicSelect,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    RadioButton,
    RadioButtonLabelText,
    RadioButtonObject,
    NoticeText,
    UnitText,
    SwitchCheckBox,
    DeleteButton,
    DocumentView,
    DocumentEstimate004Contents,
    IconScroll,
  },
  setup() {
    const store = {
      ui: {
        loading: useUiLoadingStore(),
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      productsSlider: null,
      productsAccordionAnimate: false,
      viewDocument: false,
      exteriorETCError: false,
      exteriorETCPriceError: false,
      interiorETCError: false,
      interiorETCPriceError: false,
      carAmountPriceError: false,
      optionETCError: false,
      optionETCPriceError: false,
      deliveryDiscountPriceError: false,
      deliveryDiscountRatioError: false,
      feeCMError: false,
      feeAGError: false,
      etcCMError: false,
      etcAGError: false,
      prepaymentsRatioError: [false, false, false],
      prepaymentsPriceError: [false, false, false],
      prepaymentsPriceInputError: [false, false, false],
      loanPrincipalPriceError: [false, false, false],
      loanPrincipalPriceInputError: [false, false, false],
      subsidyError: false,
      advancePaymentError: false,
      publicBondDiscountError: false,
      etcPriceError: false,
      interestSubsidyError: false,
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

    const viewDocumentOpen = () => {
      state.viewDocument = true;
    };

    const viewDocumentClose = () => {
      state.viewDocument = false;
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

    // DD : 이미 체크 된 라디오 버튼 재 클릭 시 체크 해제 함수 예시 : start
    const eChange = new Event('change');
    const testTimer = {};
    const testRadioClick = (e) => {
      const el = e.target;
      const { id, checked } = el;

      testTimer[id] = setTimeout(() => {
        if (checked) {
          el.checked = false;
          el.dispatchEvent(eChange);
        }
      }, 50);
    };
    const testRadioChange = (e) => {
      const el = e.target;
      const { id } = el;

      clearTimeout(testTimer[id]);
    };
    // DD : 이미 체크 된 라디오 버튼 재 클릭 시 체크 해제 함수 예시 : end

    onMounted(() => {
      store.ui.header.setTitle(() => '수입 할부');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      dummyDataEstimate,
      state,
      modules: [A11y],
      productsAccordionAnimateStart,
      productsAccordionAnimateEnd,
      viewDocumentOpen,
      viewDocumentClose,
      testAjax,
      testAccordionToggle,
      testAaccordionClose,
      testRadioClick,
      testRadioChange,
    };
  },
};
</script>

<template>
  <PageContents>
    <ButtonList
      :classNames="{
        wrap: 'row-margin-contents-group',
      }"
    >
      <ButtonListItem>
        <BasicButton size="mini" theme="quaternary">제원</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton size="mini" theme="quaternary">가격표</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton size="mini" theme="quaternary">카탈로그</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <div>
      <section class="row-margin-container-medium">
        <h2 class="text-title-2 row-margin-contents">견적 상품</h2>

        <section :class="$style['estimate-list']">
          <div :class="$style['estimate-list__top']">
            <h3 :class="$style['estimate-list__title']">차량 선택</h3>
          </div>

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
                          <span :class="$style['bank-brand__text']">벤츠</span>
                        </button>
                      </li>
                      <li :class="$style['bank-brand__item']">
                        <!-- DD : 선택 된 요소 is-selected 클래스 값 추가 및 title="선택 됨" 속성 추가 -->
                        <button
                          type="button"
                          :class="[$style['bank-brand__block'], 'is-selected']"
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
                          <span :class="$style['bank-brand__text']">BMW</span>
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
                          <span :class="$style['bank-brand__text']">기타</span>
                        </button>
                      </li>
                    </ul>
                  </div>
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
                    :class="[$style['bank-brand'], $style['bank-brand--col-2']]"
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
                          :class="[$style['bank-brand__block'], 'is-selected']"
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
                        name="leaseRentEstimationSystemInstallmentLineup"
                        id="leaseRentEstimationSystemInstallmentLineup_001"
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
                          <span class="display-block">2022년형 가솔린 1.0</span>
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
                        name="leaseRentEstimationSystemInstallmentLineup"
                        id="leaseRentEstimationSystemInstallmentLineup_002"
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
                        name="leaseRentEstimationSystemInstallmentLineup"
                        id="leaseRentEstimationSystemInstallmentLineup_003"
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
                        name="leaseRentEstimationSystemInstallmentLineup"
                        id="leaseRentEstimationSystemInstallmentLineup_004"
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
                          <span class="display-block">2022년형 가솔린 1.0</span>
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
                  <div :class="$style['estimate-list__right']">
                    <div class="text-body-3 font-weight-bold">
                      18,700,000 원
                    </div>
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
                        name="leaseRentEstimationSystemInstallmentTrim"
                        id="leaseRentEstimationSystemInstallmentTrim_001"
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
                            <span class="flex-box__cell flex-1">디 에센셜</span>
                            <span class="flex-box__cell font-weight-medium"
                              >16,900,000 원</span
                            >
                          </span>
                          <span
                            class="flex-box row-margin-mini text-body-5 color-gray-secondary"
                          >
                            <span class="flex-box__cell">휘발유 14.3km/l</span>
                          </span>
                        </RadioButtonLabelText>
                      </RadioButton>
                    </li>
                    <li class="row-margin-item-group">
                      <RadioButton
                        theme="tertiary"
                        :full="true"
                        name="leaseRentEstimationSystemInstallmentTrim"
                        id="leaseRentEstimationSystemInstallmentTrim_002"
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
                            <span class="flex-box__cell">휘발유 14.3km/l</span>
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
                        name="leaseRentEstimationSystemInstallmentTrim"
                        id="leaseRentEstimationSystemInstallmentTrim_003"
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
                            <span class="flex-box__cell">휘발유 14.3km/l</span>
                          </span>
                        </RadioButtonLabelText>
                      </RadioButton>
                    </li>
                    <li class="row-margin-item-group">
                      <RadioButton
                        theme="tertiary"
                        :full="true"
                        name="leaseRentEstimationSystemInstallmentTrim"
                        id="leaseRentEstimationSystemInstallmentTrim_004"
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
                            <span class="flex-box__cell">휘발유 14.3km/l</span>
                          </span>
                        </RadioButtonLabelText>
                      </RadioButton>
                    </li>
                  </ul>
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
            <!-- // 트림 -->

            <!-- 외장 -->
            <UiAccordionItem
              :classNames="{ item: $style['estimate-list__item'] }"
              v-slot="accordionItemSlotProps"
              keyName="exterior"
            >
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="regular">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">외장</div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <div class="flex-box align-items-start">
                            <div class="flex-box__cell">
                              <ColorChip
                                :colors="['66, 66, 66']"
                                size="small"
                              ></ColorChip>
                            </div>
                            <div class="flex-box__cell flex-1">
                              티탄 그레이 메탈릭(R4G)
                            </div>
                          </div>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                  <div :class="$style['estimate-list__right']">
                    <div class="text-body-3 font-weight-bold">400,000 원</div>
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
                  <NoticeText :classNames="{ wrap: 'row-margin-item-group' }"
                    >원색계열(빨강, 주황, 노랑, 초록, 보라)은 구매(인수) 조건만
                    진행 가능합니다.</NoticeText
                  >
                  <ul class="reset-list">
                    <li class="row-margin-item-group">
                      <RadioButton
                        theme="tertiary"
                        :full="true"
                        name="leaseRentEstimationSystemInstallmentExterior"
                        id="leaseRentEstimationSystemInstallmentExterior_001"
                        @change="
                          testAaccordionClose(
                            accordionSlotProps,
                            accordionItemSlotProps,
                            'interior'
                          )
                        "
                      >
                        <RadioButtonObject />
                        <RadioButtonLabelText>
                          <span class="flex-box">
                            <span class="flex-box__cell">
                              <ColorChip size="small"></ColorChip>
                            </span>
                            <span
                              class="flex-box__cell flex-box__cell--small-regular flex-1"
                              >선택안함</span
                            >
                          </span>
                        </RadioButtonLabelText>
                      </RadioButton>
                    </li>
                    <li class="row-margin-item-group">
                      <RadioButton
                        theme="tertiary"
                        :full="true"
                        name="leaseRentEstimationSystemInstallmentExterior"
                        id="leaseRentEstimationSystemInstallmentExterior_002"
                        @change="
                          testAaccordionClose(
                            accordionSlotProps,
                            accordionItemSlotProps,
                            'interior'
                          )
                        "
                      >
                        <RadioButtonObject />
                        <RadioButtonLabelText>
                          <span class="flex-box">
                            <span class="flex-box__cell">
                              <ColorChip
                                :colors="['66, 66, 66']"
                                size="small"
                              ></ColorChip>
                            </span>
                            <span
                              class="flex-box__cell flex-box__cell--small-regular flex-1"
                              >티탄 그레이 메탈릭(R4G)</span
                            >
                          </span>
                        </RadioButtonLabelText>
                      </RadioButton>
                    </li>
                    <li class="row-margin-item-group">
                      <RadioButton
                        theme="tertiary"
                        :full="true"
                        name="leaseRentEstimationSystemInstallmentExterior"
                        id="leaseRentEstimationSystemInstallmentExterior_003"
                        @change="
                          testAaccordionClose(
                            accordionSlotProps,
                            accordionItemSlotProps,
                            'interior'
                          )
                        "
                      >
                        <RadioButtonObject />
                        <RadioButtonLabelText>
                          <span class="flex-box">
                            <span class="flex-box__cell">
                              <ColorChip
                                :colors="['244, 241, 241']"
                                size="small"
                              ></ColorChip>
                            </span>
                            <span
                              class="flex-box__cell flex-box__cell--small-regular flex-1"
                              >언블리치드 아이보리(NES)</span
                            >
                          </span>
                        </RadioButtonLabelText>
                      </RadioButton>
                    </li>
                    <li class="row-margin-item-group">
                      <RadioButton
                        theme="tertiary"
                        :full="true"
                        name="leaseRentEstimationSystemInstallmentExterior"
                        id="leaseRentEstimationSystemInstallmentExterior_004"
                        @change="
                          testAaccordionClose(
                            accordionSlotProps,
                            accordionItemSlotProps,
                            'interior'
                          )
                        "
                      >
                        <RadioButtonObject />
                        <RadioButtonLabelText>
                          <span class="flex-box">
                            <span class="flex-box__cell">
                              <ColorChip
                                :colors="['241, 242, 244']"
                                size="small"
                              ></ColorChip>
                            </span>
                            <span
                              class="flex-box__cell flex-box__cell--small-regular flex-1"
                              >아틸라스 화이트(SAW)</span
                            >
                            <span class="flex-box__cell font-weight-medium">
                              400,000 원
                            </span>
                          </span>
                        </RadioButtonLabelText>
                      </RadioButton>
                    </li>
                    <li class="row-margin-item-group">
                      <RadioButton
                        theme="tertiary"
                        :full="true"
                        name="leaseRentEstimationSystemInstallmentExterior"
                        id="leaseRentEstimationSystemInstallmentExterior_005"
                        @change="
                          testAaccordionClose(
                            accordionSlotProps,
                            accordionItemSlotProps,
                            'interior'
                          )
                        "
                      >
                        <RadioButtonObject />
                        <RadioButtonLabelText>
                          <span class="flex-box">
                            <span class="flex-box__cell">
                              <ColorChip
                                :colors="['78, 105, 100']"
                                size="small"
                              ></ColorChip>
                            </span>
                            <span
                              class="flex-box__cell flex-box__cell--small-regular flex-1"
                              >톰보이 카키(TKS)</span
                            >
                            <span class="flex-box__cell font-weight-medium">
                              700,000 원
                            </span>
                          </span>
                          <span
                            :class="[
                              $style['color-etc'],
                              'flex-box',
                              'row-margin-mini',
                            ]"
                          >
                            <span
                              class="flex-box__cell text-body-5 color-green"
                            >
                              연계된 옵션 선택 필요
                            </span>
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
                        name="leaseRentEstimationSystemInstallmentExterior"
                        id="leaseRentEstimationSystemInstallmentExterior_006"
                        @change="
                          testAaccordionClose(
                            accordionSlotProps,
                            accordionItemSlotProps,
                            'interior'
                          )
                        "
                      >
                        <RadioButtonObject />
                        <RadioButtonLabelText>
                          <span class="flex-box">
                            <span class="flex-box__cell">
                              <ColorChip
                                :colors="['37, 59, 117']"
                                size="small"
                              ></ColorChip>
                            </span>
                            <span
                              class="flex-box__cell flex-box__cell--small-regular flex-1"
                              >아틀란티스 네이비(NAV)</span
                            >
                            <span class="flex-box__cell font-weight-medium">
                              300,000 원
                            </span>
                          </span>
                          <span
                            :class="[
                              $style['color-etc'],
                              'flex-box',
                              'row-margin-mini',
                            ]"
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
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell">
                          <RadioButton
                            theme="tertiary"
                            :onlyObject="true"
                            name="leaseRentEstimationSystemInstallmentExterior"
                            id="leaseRentEstimationSystemInstallmentExterior_007"
                          >
                            <RadioButtonObject />
                            <RadioButtonLabelText
                              >직접입력</RadioButtonLabelText
                            >
                          </RadioButton>
                        </div>
                        <div
                          class="flex-box__cell flex-box__cell--small-regular flex-1"
                        >
                          <!-- Case : 직접입력 선택시 :disabled="false" -->
                          <FormList>
                            <FormListItem
                              titleText="외장 색상 명칭"
                              target="#leaseRentEstimationSystemInstallmentExteriorETC"
                              :forceFocus="true"
                              :disabled="true"
                            >
                              <FormInvalid :error="state.exteriorETCError">
                                <InputBlock
                                  :error="state.exteriorETCError"
                                  :disabled="true"
                                >
                                  <InputBlockCell :flexible="true">
                                    <BasicInput
                                      title="외장 색상 명칭"
                                      id="leaseRentEstimationSystemInstallmentExteriorETC"
                                      :disabled="true"
                                    />
                                  </InputBlockCell>
                                </InputBlock>
                                <FormInvalidMessage>
                                  Error Message
                                </FormInvalidMessage>
                              </FormInvalid>
                            </FormListItem>
                            <FormListItem
                              titleText="금액"
                              target="#leaseRentEstimationSystemInstallmentExteriorETCPrice"
                              :forceFocus="true"
                              :disabled="true"
                            >
                              <FormInvalid :error="state.exteriorETCPriceError">
                                <InputBlock
                                  :error="state.exteriorETCPriceError"
                                  :disabled="true"
                                >
                                  <InputBlockCell :flexible="true">
                                    <BasicInput
                                      title="금액"
                                      id="leaseRentEstimationSystemInstallmentExteriorETCPrice"
                                      pattern="\d*"
                                      :useDelete="false"
                                      align="right"
                                      :disabled="true"
                                    />
                                  </InputBlockCell>
                                  <template v-slot:innerRight>
                                    <div class="text-body-3">원</div>
                                  </template>
                                </InputBlock>
                                <FormInvalidMessage>
                                  Error Message
                                </FormInvalidMessage>
                              </FormInvalid>
                            </FormListItem>
                          </FormList>
                          <div class="row-margin-item-group">
                            <BasicButton
                              size="small"
                              theme="tertiary"
                              :disabled="true"
                              @click="
                                testAaccordionClose(
                                  accordionSlotProps,
                                  accordionItemSlotProps,
                                  'interior'
                                )
                              "
                              >적용</BasicButton
                            >
                          </div>
                          <!-- // Case : 직접입력 선택시 :disabled="false" -->
                        </div>
                      </div>
                    </li>
                  </ul>
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
            <!-- // 외장 -->

            <!-- 내장 -->
            <UiAccordionItem
              :classNames="{ item: $style['estimate-list__item'] }"
              v-slot="accordionItemSlotProps"
              keyName="interior"
            >
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="regular">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">내장</div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <div class="flex-box align-items-start">
                            <div class="flex-box__cell">
                              <ColorChip
                                :colors="['241, 233, 233']"
                                size="small"
                              ></ColorChip>
                            </div>
                            <div class="flex-box__cell flex-1">그레이</div>
                          </div>
                        </KeyValueText>
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
                        name="leaseRentEstimationSystemInstallmentInterior"
                        id="leaseRentEstimationSystemInstallmentInterior_001"
                        @change="
                          testAaccordionClose(
                            accordionSlotProps,
                            accordionItemSlotProps
                          )
                        "
                      >
                        <RadioButtonObject />
                        <RadioButtonLabelText>
                          <span class="flex-box">
                            <span class="flex-box__cell">
                              <ColorChip size="small"></ColorChip>
                            </span>
                            <span
                              class="flex-box__cell flex-box__cell--small-regular flex-1"
                              >선택안함</span
                            >
                          </span>
                        </RadioButtonLabelText>
                      </RadioButton>
                    </li>
                    <li class="row-margin-item-group">
                      <RadioButton
                        theme="tertiary"
                        :full="true"
                        name="leaseRentEstimationSystemInstallmentInterior"
                        id="leaseRentEstimationSystemInstallmentInterior_002"
                        @change="
                          testAaccordionClose(
                            accordionSlotProps,
                            accordionItemSlotProps
                          )
                        "
                      >
                        <RadioButtonObject />
                        <RadioButtonLabelText>
                          <span class="flex-box">
                            <span class="flex-box__cell">
                              <ColorChip
                                :colors="['66, 66, 66']"
                                size="small"
                              ></ColorChip>
                            </span>
                            <span
                              class="flex-box__cell flex-box__cell--small-regular flex-1"
                              >그레이</span
                            >
                          </span>
                        </RadioButtonLabelText>
                      </RadioButton>
                    </li>
                    <li class="row-margin-item-group">
                      <RadioButton
                        theme="tertiary"
                        :full="true"
                        name="leaseRentEstimationSystemInstallmentInterior"
                        id="leaseRentEstimationSystemInstallmentInterior_003"
                        @change="
                          testAaccordionClose(
                            accordionSlotProps,
                            accordionItemSlotProps
                          )
                        "
                      >
                        <RadioButtonObject />
                        <RadioButtonLabelText>
                          <span class="flex-box">
                            <span class="flex-box__cell">
                              <ColorChip
                                :colors="['244, 241, 241']"
                                size="small"
                              ></ColorChip>
                            </span>
                            <span
                              class="flex-box__cell flex-box__cell--small-regular flex-1"
                              >아이보리</span
                            >
                          </span>
                        </RadioButtonLabelText>
                      </RadioButton>
                    </li>
                    <li class="row-margin-item-group">
                      <RadioButton
                        theme="tertiary"
                        :full="true"
                        name="leaseRentEstimationSystemInstallmentInterior"
                        id="leaseRentEstimationSystemInstallmentInterior_004"
                        @change="
                          testAaccordionClose(
                            accordionSlotProps,
                            accordionItemSlotProps
                          )
                        "
                      >
                        <RadioButtonObject />
                        <RadioButtonLabelText>
                          <span class="flex-box">
                            <span class="flex-box__cell">
                              <ColorChip
                                :colors="['241, 242, 244']"
                                size="small"
                              ></ColorChip>
                            </span>
                            <span
                              class="flex-box__cell flex-box__cell--small-regular flex-1"
                              >화이트</span
                            >
                            <span class="flex-box__cell font-weight-medium">
                              400,000 원
                            </span>
                          </span>
                          <span
                            :class="[
                              $style['color-etc'],
                              'flex-box',
                              'row-margin-mini',
                            ]"
                          >
                            <span
                              class="flex-box__cell text-body-5 color-green"
                            >
                              선택된 외장 조합 불가
                            </span>
                          </span>
                        </RadioButtonLabelText>
                      </RadioButton>
                    </li>
                    <li class="row-margin-item-group">
                      <RadioButton
                        theme="tertiary"
                        :full="true"
                        name="leaseRentEstimationSystemInstallmentInterior"
                        id="leaseRentEstimationSystemInstallmentInterior_005"
                        @change="
                          testAaccordionClose(
                            accordionSlotProps,
                            accordionItemSlotProps
                          )
                        "
                      >
                        <RadioButtonObject />
                        <RadioButtonLabelText>
                          <span class="flex-box">
                            <span class="flex-box__cell">
                              <ColorChip
                                :colors="['78, 105, 100']"
                                size="small"
                              ></ColorChip>
                            </span>
                            <span
                              class="flex-box__cell flex-box__cell--small-regular flex-1"
                              >카키</span
                            >
                            <span class="flex-box__cell font-weight-medium">
                              700,000 원
                            </span>
                          </span>
                          <span
                            :class="[
                              $style['color-etc'],
                              'flex-box',
                              'row-margin-mini',
                            ]"
                          >
                            <span
                              class="flex-box__cell text-body-5 color-green"
                            >
                              연계된 옵션 선택 필요
                            </span>
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
                        name="leaseRentEstimationSystemInstallmentInterior"
                        id="leaseRentEstimationSystemInstallmentInterior_006"
                        @change="
                          testAaccordionClose(
                            accordionSlotProps,
                            accordionItemSlotProps
                          )
                        "
                      >
                        <RadioButtonObject />
                        <RadioButtonLabelText>
                          <span class="flex-box">
                            <span class="flex-box__cell">
                              <ColorChip
                                :colors="['37, 59, 117']"
                                size="small"
                              ></ColorChip>
                            </span>
                            <span
                              class="flex-box__cell flex-box__cell--small-regular flex-1"
                              >네이비</span
                            >
                            <span class="flex-box__cell font-weight-medium">
                              300,000 원
                            </span>
                          </span>
                          <span
                            :class="[
                              $style['color-etc'],
                              'flex-box',
                              'row-margin-mini',
                            ]"
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
                      <div class="flex-box align-items-start">
                        <div class="flex-box__cell">
                          <RadioButton
                            theme="tertiary"
                            :onlyObject="true"
                            name="leaseRentEstimationSystemInstallmentInterior"
                            id="leaseRentEstimationSystemInstallmentInterior_007"
                          >
                            <RadioButtonObject />
                            <RadioButtonLabelText
                              >직접입력</RadioButtonLabelText
                            >
                          </RadioButton>
                        </div>
                        <div
                          class="flex-box__cell flex-box__cell--small-regular flex-1"
                        >
                          <!-- Case : 직접입력 선택시 :disabled="false" -->
                          <FormList>
                            <FormListItem
                              titleText="내장 색상 명칭"
                              target="#leaseRentEstimationSystemInstallmentInteriorETC"
                              :forceFocus="true"
                              :disabled="true"
                            >
                              <FormInvalid :error="state.interiorETCError">
                                <InputBlock
                                  :error="state.interiorETCError"
                                  :disabled="true"
                                >
                                  <InputBlockCell :flexible="true">
                                    <BasicInput
                                      title="내장 색상 명칭"
                                      id="leaseRentEstimationSystemInstallmentInteriorETC"
                                      :disabled="true"
                                    />
                                  </InputBlockCell>
                                </InputBlock>
                                <FormInvalidMessage>
                                  Error Message
                                </FormInvalidMessage>
                              </FormInvalid>
                            </FormListItem>
                            <FormListItem
                              titleText="금액"
                              target="#leaseRentEstimationSystemInstallmentInteriorETCPrice"
                              :forceFocus="true"
                              :disabled="true"
                            >
                              <FormInvalid :error="state.interiorETCPriceError">
                                <InputBlock
                                  :error="state.interiorETCPriceError"
                                  :disabled="true"
                                >
                                  <InputBlockCell :flexible="true">
                                    <BasicInput
                                      title="금액"
                                      id="leaseRentEstimationSystemInstallmentInteriorETCPrice"
                                      pattern="\d*"
                                      :useDelete="false"
                                      align="right"
                                      :disabled="true"
                                    />
                                  </InputBlockCell>
                                  <template v-slot:innerRight>
                                    <div class="text-body-3">원</div>
                                  </template>
                                </InputBlock>
                                <FormInvalidMessage>
                                  Error Message
                                </FormInvalidMessage>
                              </FormInvalid>
                            </FormListItem>
                          </FormList>
                          <div class="row-margin-item-group">
                            <BasicButton
                              size="small"
                              theme="tertiary"
                              :disabled="true"
                              @click="
                                testAaccordionClose(
                                  accordionSlotProps,
                                  accordionItemSlotProps
                                )
                              "
                              >적용</BasicButton
                            >
                          </div>
                          <!-- // Case : 직접입력 선택시 :disabled="false" -->
                        </div>
                      </div>
                    </li>
                  </ul>
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
            <!-- // 내장 -->
          </UiAccordion>

          <div :class="$style['estimate-list__foot']">
            <ul class="reset-list">
              <li class="row-margin-item-group">
                <RadioButton
                  theme="tertiary"
                  :full="true"
                  align="center"
                  name="leaseRentEstimationSystemInstallmentCarAmount"
                  id="leaseRentEstimationSystemInstallmentCarAmount_001"
                  :defaultChecked="true"
                >
                  <RadioButtonObject />
                  <RadioButtonLabelText>
                    <span class="flex-box">
                      <span class="flex-box__cell flex-1 font-weight-medium">
                        기본가격
                      </span>
                      <!-- DD : 기본가격 선택시 color-gray-quinary 클래스 값 제거 -->
                      <span class="flex-box__cell color-gray-quinary">
                        <UnitText rightUnit="원" align="right">
                          16,900,000
                        </UnitText>
                      </span>
                    </span>
                  </RadioButtonLabelText>
                </RadioButton>
              </li>
              <li class="row-margin-item-group">
                <RadioButton
                  theme="tertiary"
                  :full="true"
                  name="leaseRentEstimationSystemInstallmentCarAmount"
                  id="leaseRentEstimationSystemInstallmentCarAmount_002"
                >
                  <RadioButtonObject />
                  <RadioButtonLabelText>
                    <span class="font-weight-medium">수기입력</span>
                  </RadioButtonLabelText>
                </RadioButton>
                <div :class="[$style['car-amount'], 'row-margin-item']">
                  <!-- DD : 수기입력 선택시 :disabled="false" -->
                  <FormList>
                    <FormListItem
                      titleText="차량금액"
                      target="#leaseRentEstimationSystemInstallmentCarAmountPrice"
                      :forceFocus="true"
                      :disabled="true"
                    >
                      <FormInvalid :error="state.carAmountPriceError">
                        <InputBlock
                          :error="state.carAmountPriceError"
                          :disabled="true"
                        >
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="차량금액"
                              id="leaseRentEstimationSystemInstallmentCarAmountPrice"
                              pattern="\d*"
                              :useDelete="false"
                              align="right"
                              :disabled="true"
                            />
                          </InputBlockCell>
                          <template v-slot:innerRight>
                            <div class="text-body-3">원</div>
                          </template>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                  </FormList>
                  <!-- // DD : 수기입력 선택시 :disabled="false" -->
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section :class="[$style['estimate-list'], 'row-margin-item-group']">
          <UiAccordion tagName="div" :defaultSpeed="0">
            <UiAccordionItem tagName="div" v-slot="accordionItemSlotProps">
              <div :class="$style['estimate-list__top']">
                <div class="flex-box">
                  <div class="flex-box__cell flex-1">
                    <h3 :class="$style['estimate-list__title']">옵션 선택</h3>
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
                <div :class="$style['option-select']">
                  <ul :class="$style['option-select__list']">
                    <li :class="$style['option-select__item']">
                      <div :class="$style['option-select__block']">
                        <CheckBox
                          :full="true"
                          theme="secondary"
                          id="leaseRentEstimationSystemInstallmentOption001"
                          :defaultChecked="true"
                          :classNames="{
                            wrap: $style['option-select__check'],
                            input: $style['option-select__input'],
                            label: $style['option-select__label'],
                          }"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            :classNames="{
                              text: $style['option-select__label-text'],
                            }"
                          >
                            <span class="flex-box">
                              <span
                                class="flex-box__cell flex-1 font-weight-regular"
                                >파일럿 라이트 패키지</span
                              >
                              <span class="flex-box__cell font-weight-medium">
                                2,990,000 원
                              </span>
                            </span>
                          </CheckBoxLabelText>
                        </CheckBox>
                      </div>
                    </li>
                    <li :class="$style['option-select__item']">
                      <div :class="$style['option-select__block']">
                        <CheckBox
                          :full="true"
                          theme="secondary"
                          id="leaseRentEstimationSystemInstallmentOption002"
                          :classNames="{
                            wrap: $style['option-select__check'],
                            input: $style['option-select__input'],
                            label: $style['option-select__label'],
                          }"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            :classNames="{
                              text: $style['option-select__label-text'],
                            }"
                          >
                            <span class="flex-box">
                              <span
                                class="flex-box__cell flex-1 font-weight-regular"
                                >플러스 패키지</span
                              >
                              <span class="flex-box__cell font-weight-medium">
                                400,000 원
                              </span>
                            </span>
                          </CheckBoxLabelText>
                        </CheckBox>
                      </div>
                    </li>
                    <li :class="$style['option-select__item']">
                      <div :class="$style['option-select__block']">
                        <CheckBox
                          :full="true"
                          theme="secondary"
                          id="leaseRentEstimationSystemInstallmentOption003"
                          :classNames="{
                            wrap: $style['option-select__check'],
                            input: $style['option-select__input'],
                            label: $style['option-select__label'],
                          }"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            :classNames="{
                              text: $style['option-select__label-text'],
                            }"
                          >
                            <span class="flex-box">
                              <span
                                class="flex-box__cell flex-1 font-weight-regular"
                                >선루프</span
                              >
                              <span class="flex-box__cell font-weight-medium">
                                400,000 원
                              </span>
                            </span>
                            <span
                              class="display-block text-body-5 color-gray-secondary font-weight-regular row-margin-mini"
                            >
                              선루프, A필라 블랙테이프
                            </span>
                          </CheckBoxLabelText>
                        </CheckBox>
                      </div>
                    </li>
                    <li :class="$style['option-select__item']">
                      <div :class="$style['option-select__block']">
                        <CheckBox
                          :full="true"
                          theme="secondary"
                          id="leaseRentEstimationSystemInstallmentOption004"
                          :classNames="{
                            wrap: $style['option-select__check'],
                            input: $style['option-select__input'],
                            label: $style['option-select__label'],
                          }"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            :classNames="{
                              text: $style['option-select__label-text'],
                            }"
                          >
                            <span class="flex-box">
                              <span
                                class="flex-box__cell flex-1 font-weight-regular"
                                >스타일</span
                              >
                              <span class="flex-box__cell font-weight-medium">
                                400,000 원
                              </span>
                            </span>
                            <span
                              class="display-block text-body-5 color-gray-secondary font-weight-regular row-margin-mini"
                            >
                              17인치 알로이 휠 &amp; 타이어, 아웃사이드 미러(LED
                              방향지시등), LED 리어콤비램프
                            </span>
                            <span class="flex-box row-margin-mini">
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
                          </CheckBoxLabelText>
                        </CheckBox>
                      </div>
                    </li>
                    <li
                      :class="[
                        $style['option-select__item'],
                        $style['option-select__item--selected'],
                      ]"
                    >
                      <div :class="$style['option-select__block']">
                        <span class="flex-box text-body-3">
                          <span class="flex-box__cell font-weight-medium">
                            <DeleteButton />
                          </span>
                          <span
                            class="flex-box__cell flex-box__cell--small-regular flex-1 font-weight-regular"
                            >옵션 입력값 출력</span
                          >
                          <span class="flex-box__cell font-weight-medium">
                            400,000 원
                          </span>
                        </span>
                      </div>
                    </li>
                    <li :class="$style['option-select__item']">
                      <div :class="$style['option-select__block']">
                        <FormList>
                          <FormListItem
                            titleText="옵션 명칭"
                            target="#leaseRentEstimationSystemInstallmentOptionETC"
                            :forceFocus="true"
                          >
                            <FormInvalid :error="state.optionETCError">
                              <InputBlock :error="state.optionETCError">
                                <InputBlockCell :flexible="true">
                                  <BasicInput
                                    title="옵션 명칭"
                                    id="leaseRentEstimationSystemInstallmentOptionETC"
                                  />
                                </InputBlockCell>
                              </InputBlock>
                              <FormInvalidMessage
                                >Error Message</FormInvalidMessage
                              >
                            </FormInvalid>
                          </FormListItem>
                          <FormListItem
                            titleText="금액"
                            target="#leaseRentEstimationSystemInstallmentOptionETCPrice"
                            :forceFocus="true"
                          >
                            <FormInvalid :error="state.optionETCPriceError">
                              <InputBlock :error="state.optionETCPriceError">
                                <InputBlockCell :flexible="true">
                                  <BasicInput
                                    title="금액"
                                    id="leaseRentEstimationSystemInstallmentOptionETCPrice"
                                    pattern="\d*"
                                    :useDelete="false"
                                    align="right"
                                  />
                                </InputBlockCell>
                                <template v-slot:innerRight>
                                  <div class="text-body-3">원</div>
                                </template>
                              </InputBlock>
                              <FormInvalidMessage
                                >Error Message</FormInvalidMessage
                              >
                            </FormInvalid>
                          </FormListItem>
                        </FormList>
                        <div class="row-margin-item-group">
                          <BasicButton size="small" theme="quaternary"
                            >적용</BasicButton
                          >
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </UiAccordionLayer>

              <div v-if="!accordionItemSlotProps.opened">
                <div :class="$style['option-select']">
                  <ul :class="$style['option-select__list']">
                    <li :class="$style['option-select__item']">
                      <div :class="$style['option-select__block']">
                        <KeyValue>
                          <KeyValueItem :classNames="{ item: 'text-body-3' }">
                            <KeyValueTitle
                              :classNames="{ title: 'color-black' }"
                              >파일럿 라이트 패키지</KeyValueTitle
                            >
                            <KeyValueText
                              :classNames="{ text: 'font-weight-medium' }"
                              >2,990,000 원</KeyValueText
                            >
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </li>
                    <li :class="$style['option-select__item']">
                      <div :class="$style['option-select__block']">
                        <KeyValue>
                          <KeyValueItem :classNames="{ item: 'text-body-3' }">
                            <KeyValueTitle
                              :classNames="{ title: 'color-black' }"
                              >플러스 패키지</KeyValueTitle
                            >
                            <KeyValueText
                              :classNames="{ text: 'font-weight-medium' }"
                              >400,000 원</KeyValueText
                            >
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </li>
                    <li :class="$style['option-select__item']">
                      <div :class="$style['option-select__block']">
                        <span class="flex-box text-body-3">
                          <span
                            class="flex-box__cell flex-1 font-weight-regular"
                            >옵션 입력값 출력</span
                          >
                          <span class="flex-box__cell font-weight-medium">
                            400,000 원
                          </span>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </UiAccordionItem>
          </UiAccordion>
          <div :class="$style['estimate-list__foot']">
            <KeyValue verticalAlign="center">
              <KeyValueItem :classNames="{ item: 'text-body-4' }">
                <KeyValueTitle
                  :classNames="{
                    title: 'color-black font-weight-bold',
                  }"
                >
                  옵션 (+색상)
                </KeyValueTitle>
                <KeyValueText>
                  <UnitText rightUnit="원" align="right"> 1,200,000 </UnitText>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </div>
        </section>

        <section :class="[$style['estimate-list'], 'row-margin-item-group']">
          <div :class="$style['estimate-list__top']">
            <h3 :class="$style['estimate-list__title']">할인/탁송료</h3>
          </div>
          <div :class="$style['estimate-list__foot']">
            <section class="row-margin-item-group">
              <h4 class="text-body-3 font-weight-medium row-margin-item-group">
                대리점 출고시 할인
              </h4>
              <ul class="reset-list">
                <li class="row-margin-item-group">
                  <div class="flex-box align-items-start">
                    <div class="flex-box__cell">
                      <RadioButton
                        theme="tertiary"
                        :onlyObject="true"
                        name="leaseRentEstimationSystemInstallmentDeliveryDiscount"
                        id="leaseRentEstimationSystemInstallmentDeliveryDiscount001"
                        @change="testRadioChange"
                        @click="testRadioClick"
                      >
                        <RadioButtonObject />
                        <RadioButtonLabelText>할인액</RadioButtonLabelText>
                      </RadioButton>
                    </div>
                    <div
                      class="flex-box__cell flex-box__cell--small-regular flex-1"
                    >
                      <!-- Case : 할인액 선택시 :disabled="false" -->
                      <FormList>
                        <FormListItem
                          titleText="할인액"
                          target="#leaseRentEstimationSystemInstallmentDeliveryDiscountPrice"
                          :forceFocus="true"
                          :disabled="true"
                        >
                          <FormInvalid
                            :error="state.deliveryDiscountPriceError"
                          >
                            <InputBlock
                              :error="state.deliveryDiscountPriceError"
                              :disabled="true"
                            >
                              <InputBlockCell :flexible="true">
                                <BasicInput
                                  title="할인액"
                                  id="leaseRentEstimationSystemInstallmentDeliveryDiscountPrice"
                                  pattern="\d*"
                                  :useDelete="false"
                                  align="right"
                                  defaultValue="0"
                                  :disabled="true"
                                />
                              </InputBlockCell>
                              <template v-slot:innerRight>
                                <div class="text-body-3">원</div>
                              </template>
                            </InputBlock>
                            <FormInvalidMessage>
                              Error Message
                            </FormInvalidMessage>
                          </FormInvalid>
                        </FormListItem>
                      </FormList>
                      <!-- //Case : 할인액 선택시 :disabled="false" -->
                    </div>
                  </div>
                </li>
                <li class="row-margin-item-group">
                  <div class="flex-box align-items-start">
                    <div class="flex-box__cell">
                      <RadioButton
                        theme="tertiary"
                        :onlyObject="true"
                        name="leaseRentEstimationSystemInstallmentDeliveryDiscount"
                        id="leaseRentEstimationSystemInstallmentDeliveryDiscount002"
                        @change="testRadioChange"
                        @click="testRadioClick"
                      >
                        <RadioButtonObject />
                        <RadioButtonLabelText>할인율</RadioButtonLabelText>
                      </RadioButton>
                    </div>
                    <div
                      class="flex-box__cell flex-box__cell--small-regular flex-1"
                    >
                      <!-- Case : 할인율 선택시 :disabled="false" -->
                      <FormList>
                        <FormListItem
                          titleText="할인율"
                          target="#leaseRentEstimationSystemInstallmentDeliveryDiscountRatio"
                          :forceFocus="true"
                          :disabled="true"
                        >
                          <FormInvalid
                            :error="state.deliveryDiscountRatioError"
                          >
                            <InputBlock
                              :error="state.deliveryDiscountRatioError"
                              :disabled="true"
                            >
                              <InputBlockCell>
                                <BasicInput
                                  type="number"
                                  title="할인율 비율(%)"
                                  id="leaseRentEstimationSystemInstallmentFeeCMRatio"
                                  pattern="\d*"
                                  :useDelete="false"
                                  align="right"
                                  defaultValue="0"
                                  :classNames="{ wrap: 'input-width-ratio' }"
                                  :disabled="true"
                                />
                              </InputBlockCell>
                              <InputBlockCell>
                                <div class="text-body-3">%</div>
                              </InputBlockCell>
                              <!-- Case : 할인율 선택시 :disabled="false" 기능 제외 -->
                              <InputBlockCell :flexible="true">
                                <BasicInput
                                  title="할인율 금액"
                                  id="leaseRentEstimationSystemInstallmentFeeCMPrice"
                                  pattern="\d*"
                                  :useDelete="false"
                                  align="right"
                                  defaultValue="0"
                                  :disabled="true"
                                />
                              </InputBlockCell>
                              <InputBlockCell>
                                <div class="text-body-3 color-gray-quinary">
                                  원
                                </div>
                              </InputBlockCell>
                              <!-- //Case : 할인율 선택시 :disabled="false" 기능 제외 -->
                            </InputBlock>
                            <FormInvalidMessage>
                              Error Message
                            </FormInvalidMessage>
                          </FormInvalid>
                        </FormListItem>
                      </FormList>
                      <!-- //Case : 할인율 선택시 :disabled="false" -->
                    </div>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </section>

        <div :class="$style['total']">
          <KeyValue margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>순수차량가격</KeyValueTitle>
              <KeyValueText>0 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>할인금액</KeyValueTitle>
              <KeyValueText>0 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <BasicHr
            theme="tertiary"
            type="contents"
            className="row-margin-contents-small"
          />

          <KeyValue verticalAlign="center">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle
                :classNames="{
                  title: 'color-black font-weight-bold',
                }"
              >
                출고가격 (계산서)
              </KeyValueTitle>
              <KeyValueText>
                <div class="color-green">
                  <UnitText rightUnit="원" align="right">0</UnitText>
                </div>
              </KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </section>

      <section class="row-margin-container-medium">
        <div class="flex-box row-margin-contents">
          <div class="flex-box__cell flex-1">
            <h2 class="text-title-2">상품 설정</h2>
          </div>
          <div class="flex-box__cell">
            <SettingButton />
          </div>
        </div>
        <div :class="[$style['estimate-list'], $style['estimate-list--full']]">
          <UiAccordion
            :once="true"
            :classNames="{ wrap: $style['estimate-list__list'] }"
          >
            <!-- 상품 -->
            <li :class="$style['estimate-list__item']">
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">상품</div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <!-- Case : 오토론 -->
                          <div>오토론</div>
                          <!-- //Case : 오토론 -->

                          <!-- Case : 오토할부 -->
                          <div>오토할부</div>
                          <!-- //Case : 오토할부 -->
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 상품 -->

            <!-- 고객구분 -->
            <li :class="$style['estimate-list__item']">
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">고객구분</div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <BoxCheckList spacing="small">
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                name="leaseRentEstimationSystemInstallmentCustomerType"
                                id="leaseRentEstimationSystemInstallmentCustomerType_001"
                                size="small"
                                :defaultChecked="true"
                              >
                                <BoxCheckLabel>개인</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                name="leaseRentEstimationSystemInstallmentCustomerType"
                                id="leaseRentEstimationSystemInstallmentCustomerType_002"
                                size="small"
                              >
                                <BoxCheckLabel>개인사업자</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                name="leaseRentEstimationSystemInstallmentCustomerType"
                                id="leaseRentEstimationSystemInstallmentCustomerType_003"
                                size="small"
                              >
                                <BoxCheckLabel>법인</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                          </BoxCheckList>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 고객구분 -->

            <!-- 등록명의 -->
            <li :class="$style['estimate-list__item']">
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">등록명의</div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <div class="flex-box">
                            <div class="flex-box__cell flex-1">이용자</div>
                            <div class="flex-box__cell">
                              <BoxCheck
                                type="checkbox"
                                size="small"
                                id="leaseRentEstimationSystemInstallmentRenterCarCorporation"
                              >
                                <template v-slot:left>
                                  <BoxCheckObject />
                                </template>
                                <BoxCheckLabel>렌터카법인</BoxCheckLabel>
                              </BoxCheck>
                            </div>
                          </div>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 등록명의 -->

            <!-- 제휴사 -->
            <!-- Case : 제휴사 없을 때 -->
            <li :class="$style['estimate-list__item']">
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">제휴사</div>
                        </KeyValueTitle>
                        <KeyValueText>제휴사 없음</KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- //Case : 제휴사 없을 때 -->

            <!-- Case : 제휴사 있을 때 -->
            <UiAccordionItem
              :classNames="{ item: $style['estimate-list__item'] }"
            >
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">제휴사</div>
                        </KeyValueTitle>
                        <KeyValueText>코오롱글로벌(주)</KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
                <div :class="$style['estimate-list__arrow']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['estimate-list__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer
                :classNames="{ layer: $style['estimate-list__layer'] }"
              >
                <section :class="$style['estimate-list__contents']">
                  <BoxCheckList spacing="small" align="full">
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemInstallmentCheck001"
                        id="leaseRentEstimationSystemInstallmentCheck001_001"
                        size="small"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>코오롱글로벌(주)</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemInstallmentCheck001"
                        id="leaseRentEstimationSystemInstallmentCheck001_002"
                        size="small"
                      >
                        <BoxCheckLabel>한성모터스주식회사</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck001"
                        id="leaseRentEstimationSystemInstallmentCheck001_003"
                        size="small"
                      >
                        <BoxCheckLabel>한성모터스주식회사</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck001"
                        id="leaseRentEstimationSystemInstallmentCheck001_004"
                        size="small"
                      >
                        <BoxCheckLabel>선택하지 않음</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                  </BoxCheckList>
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
            <!-- //Case : 제휴사 있을 때 -->
            <!-- // 제휴사 -->

            <!-- Case : "견적 기본설정"에서 수수료 표시하지 않음 선택시 비노출 -->
            <!-- 수수료 -->
            <UiAccordionItem
              :classNames="{ item: $style['estimate-list__item'] }"
            >
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">수수료</div>
                        </KeyValueTitle>
                        <KeyValueText>
                          대출원금 기준<br />
                          CM : 690,000원 (0.003%)<br />
                          AG : 000,000원 (0.000%)
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
                <div :class="$style['estimate-list__arrow']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['estimate-list__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer
                :classNames="{ layer: $style['estimate-list__layer'] }"
              >
                <section :class="$style['estimate-list__contents']">
                  <FormList>
                    <FormListItem
                      titleText="CM"
                      target="#leaseRentEstimationSystemInstallmentFeeCMRatio"
                    >
                      <FormInvalid :error="state.feeCMError">
                        <InputBlock :error="state.feeCMError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="CM 금액"
                              id="leaseRentEstimationSystemInstallmentFeeCMPrice"
                              pattern="\d*"
                              :useDelete="false"
                              align="right"
                              defaultValue="1,521,120"
                              :disabled="true"
                            />
                          </InputBlockCell>
                          <InputBlockCell>
                            <div class="text-body-3 color-gray-quinary">원</div>
                          </InputBlockCell>
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              type="number"
                              title="CM 비율(%)"
                              id="leaseRentEstimationSystemInstallmentFeeCMRatio"
                              pattern="\d*"
                              :useDelete="false"
                              align="right"
                              defaultValue="9.000"
                            />
                          </InputBlockCell>
                          <InputBlockCell>
                            <div class="text-body-3">%</div>
                          </InputBlockCell>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                    <!-- Case : "견적 기본설정"에서 AG 표시하지 않음 선택시 비노출 -->
                    <FormListItem
                      titleText="AG"
                      target="#leaseRentEstimationSystemInstallmentFeeAGRatio"
                    >
                      <FormInvalid :error="state.feeAGError">
                        <InputBlock :error="state.feeAGError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="AG 금액"
                              id="leaseRentEstimationSystemInstallmentFeeAGPrice"
                              pattern="\d*"
                              :useDelete="false"
                              align="right"
                              defaultValue="0"
                              :disabled="true"
                            />
                          </InputBlockCell>
                          <InputBlockCell>
                            <div class="text-body-3 color-gray-quinary">원</div>
                          </InputBlockCell>
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              type="number"
                              title="AG 비율(%)"
                              id="leaseRentEstimationSystemInstallmentFeeAGRatio"
                              pattern="\d*"
                              :useDelete="false"
                              align="right"
                              defaultValue="0"
                            />
                          </InputBlockCell>
                          <InputBlockCell>
                            <div class="text-body-3">%</div>
                          </InputBlockCell>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                    <!-- //Case : "견적 기본설정"에서 AG 표시하지 않음 선택시 비노출 -->
                  </FormList>
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
            <!-- // 수수료 -->
            <!-- //Case : "견적 기본설정"에서 수수료 표시하지 않음 선택시 비노출 -->

            <!-- Case : "견적 기본설정"에서 수수료 표시하지 않음 선택시 노출 -->
            <!-- 기타 -->
            <UiAccordionItem
              :classNames="{ item: $style['estimate-list__item'] }"
            >
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">기타</div>
                        </KeyValueTitle>
                        <KeyValueText>
                          대출원금 기준<br />
                          CM : 690,000원 (0.003%)<br />
                          AG : 000,000원 (0.000%)
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
                <div :class="$style['estimate-list__arrow']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['estimate-list__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer
                :classNames="{ layer: $style['estimate-list__layer'] }"
              >
                <section :class="$style['estimate-list__contents']">
                  <FormList>
                    <FormListItem
                      titleText="CM"
                      target="#leaseRentEstimationSystemInstallmentETCCMRatio"
                    >
                      <FormInvalid :error="state.etcCMError">
                        <InputBlock :error="state.etcCMError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="CM 금액"
                              id="leaseRentEstimationSystemInstallmentETCCMPrice"
                              pattern="\d*"
                              :useDelete="false"
                              align="right"
                              defaultValue="1,521,120"
                              :disabled="true"
                            />
                          </InputBlockCell>
                          <InputBlockCell>
                            <div class="text-body-3 color-gray-quinary">원</div>
                          </InputBlockCell>
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              type="number"
                              title="CM 비율(%)"
                              id="leaseRentEstimationSystemInstallmentETCCMRatio"
                              pattern="\d*"
                              :useDelete="false"
                              align="right"
                              defaultValue="9.000"
                            />
                          </InputBlockCell>
                          <InputBlockCell>
                            <div class="text-body-3">%</div>
                          </InputBlockCell>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                    <FormListItem
                      titleText="AG"
                      target="#leaseRentEstimationSystemInstallmentETCAGRatio"
                    >
                      <FormInvalid :error="state.etcAGError">
                        <InputBlock :error="state.etcAGError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="AG 금액"
                              id="leaseRentEstimationSystemInstallmentETCAGPrice"
                              pattern="\d*"
                              :useDelete="false"
                              align="right"
                              defaultValue="0"
                              :disabled="true"
                            />
                          </InputBlockCell>
                          <InputBlockCell>
                            <div class="text-body-3 color-gray-quinary">원</div>
                          </InputBlockCell>
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              type="number"
                              title="AG 비율(%)"
                              id="leaseRentEstimationSystemInstallmentETCAGRatio"
                              pattern="\d*"
                              :useDelete="false"
                              align="right"
                              defaultValue="0"
                            />
                          </InputBlockCell>
                          <InputBlockCell>
                            <div class="text-body-3">%</div>
                          </InputBlockCell>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                  </FormList>
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
            <!-- // 기타 -->
            <!-- // Case : "견적 기본설정"에서 수수료 표시하지 않음 선택시 노출 -->

            <!-- 취급지점 -->
            <UiAccordionItem
              :classNames="{ item: $style['estimate-list__item'] }"
            >
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">취급지점</div>
                        </KeyValueTitle>
                        <KeyValueText>대구지점</KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
                <div :class="$style['estimate-list__arrow']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['estimate-list__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer
                :classNames="{ layer: $style['estimate-list__layer'] }"
              >
                <section :class="$style['estimate-list__contents']">
                  <BoxCheckList spacing="small">
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemInstallmentCheck002"
                        id="leaseRentEstimationSystemInstallmentCheck002_001"
                        size="small"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>대구지점</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemInstallmentCheck002"
                        id="leaseRentEstimationSystemInstallmentCheck002_002"
                        size="small"
                      >
                        <BoxCheckLabel>강남지점</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck002"
                        id="leaseRentEstimationSystemInstallmentCheck002_003"
                        size="small"
                      >
                        <BoxCheckLabel>서초지점</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                  </BoxCheckList>
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
            <!-- // 취급지점 -->

            <!-- 취득세 -->
            <li :class="$style['estimate-list__item']">
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">취득세</div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <div>
                            <BoxCheckList spacing="small">
                              <BoxCheckListItem>
                                <BoxCheck
                                  :minSide="true"
                                  name="leaseRentEstimationSystemInstallmentAcquisitionTax"
                                  id="leaseRentEstimationSystemInstallmentAcquisitionTax_001"
                                  size="small"
                                  :defaultChecked="true"
                                >
                                  <BoxCheckLabel>과세</BoxCheckLabel>
                                </BoxCheck>
                              </BoxCheckListItem>
                              <BoxCheckListItem>
                                <BoxCheck
                                  :minSide="true"
                                  name="leaseRentEstimationSystemInstallmentAcquisitionTax"
                                  id="leaseRentEstimationSystemInstallmentAcquisitionTax_002"
                                  size="small"
                                >
                                  <BoxCheckLabel>면제</BoxCheckLabel>
                                </BoxCheck>
                              </BoxCheckListItem>
                            </BoxCheckList>

                            <!-- Case : 전기차 아닐 경우  -->
                            <div class="row-margin-item-group align-right">
                              <strong>7% , 999,999,999 원</strong>
                            </div>
                            <!-- //Case : 전기차 아닐 경우  -->

                            <!-- Case : 전기차일 경우  -->
                            <div class="row-margin-item-group align-right">
                              <strong>전기차 감면 , 999,999,999 원</strong>
                            </div>
                            <!-- //Case : 전기차일 경우  -->
                          </div>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 취득세 -->

            <!-- 공채지역 -->
            <UiAccordionItem
              :classNames="{ item: $style['estimate-list__item'] }"
            >
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">공채지역</div>
                        </KeyValueTitle>
                        <KeyValueText>
                          서울 (매입 3% 5,885,000)
                          <!-- Case : 매입 없음 일 때
                            부산 (매입 없음)
                          -->
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
                <div :class="$style['estimate-list__arrow']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['estimate-list__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer
                :classNames="{ layer: $style['estimate-list__layer'] }"
              >
                <section :class="$style['estimate-list__contents']">
                  <BoxCheckList spacing="small" :wrap="true" :col="3">
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemInstallmentCheck003"
                        id="leaseRentEstimationSystemInstallmentCheck003_001"
                        size="small"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>서울</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemInstallmentCheck003"
                        id="leaseRentEstimationSystemInstallmentCheck003_002"
                        size="small"
                      >
                        <BoxCheckLabel>수원</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck003"
                        id="leaseRentEstimationSystemInstallmentCheck003_003"
                        size="small"
                      >
                        <BoxCheckLabel>인천</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck003"
                        id="leaseRentEstimationSystemInstallmentCheck003_004"
                        size="small"
                      >
                        <BoxCheckLabel>강원</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck003"
                        id="leaseRentEstimationSystemInstallmentCheck003_005"
                        size="small"
                      >
                        <BoxCheckLabel>대전</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck003"
                        id="leaseRentEstimationSystemInstallmentCheck003_006"
                        size="small"
                      >
                        <BoxCheckLabel>세종</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck003"
                        id="leaseRentEstimationSystemInstallmentCheck003_007"
                        size="small"
                      >
                        <BoxCheckLabel>충북</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck003"
                        id="leaseRentEstimationSystemInstallmentCheck003_008"
                        size="small"
                      >
                        <BoxCheckLabel>충남</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck003"
                        id="leaseRentEstimationSystemInstallmentCheck003_009"
                        size="small"
                      >
                        <BoxCheckLabel>부산</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck003"
                        id="leaseRentEstimationSystemInstallmentCheck003_010"
                        size="small"
                      >
                        <BoxCheckLabel>대구</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck003"
                        id="leaseRentEstimationSystemInstallmentCheck003_011"
                        size="small"
                      >
                        <BoxCheckLabel>울산</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck003"
                        id="leaseRentEstimationSystemInstallmentCheck003_012"
                        size="small"
                      >
                        <BoxCheckLabel>경남</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck003"
                        id="leaseRentEstimationSystemInstallmentCheck003_013"
                        size="small"
                      >
                        <BoxCheckLabel>창원</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck003"
                        id="leaseRentEstimationSystemInstallmentCheck003_014"
                        size="small"
                      >
                        <BoxCheckLabel>광주</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck003"
                        id="leaseRentEstimationSystemInstallmentCheck003_015"
                        size="small"
                      >
                        <BoxCheckLabel>전북</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck003"
                        id="leaseRentEstimationSystemInstallmentCheck003_016"
                        size="small"
                      >
                        <BoxCheckLabel>창원</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck003"
                        id="leaseRentEstimationSystemInstallmentCheck003_017"
                        size="small"
                      >
                        <BoxCheckLabel>광주</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck003"
                        id="leaseRentEstimationSystemInstallmentCheck003_018"
                        size="small"
                      >
                        <BoxCheckLabel>전북</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck003"
                        id="leaseRentEstimationSystemInstallmentCheck003_019"
                        size="small"
                      >
                        <BoxCheckLabel>전남</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemInstallmentCheck003"
                        id="leaseRentEstimationSystemInstallmentCheck003_020"
                        size="small"
                      >
                        <BoxCheckLabel>제주</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                  </BoxCheckList>
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
            <!-- // 공채지역 -->

            <!-- 공채할인 -->
            <li :class="$style['estimate-list__item']">
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">공채할인</div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <div class="row-margin-item-group">
                            <BoxCheckList spacing="small">
                              <BoxCheckListItem>
                                <BoxCheck
                                  :minSide="true"
                                  name="leaseRentEstimationSystemInstallmentPublicBondDiscount"
                                  id="leaseRentEstimationSystemInstallmentPublicBondDiscount_001"
                                  size="small"
                                  :defaultChecked="true"
                                >
                                  <BoxCheckLabel>과세</BoxCheckLabel>
                                </BoxCheck>
                              </BoxCheckListItem>
                              <BoxCheckListItem>
                                <BoxCheck
                                  :minSide="true"
                                  name="leaseRentEstimationSystemInstallmentPublicBondDiscount"
                                  id="leaseRentEstimationSystemInstallmentPublicBondDiscount_002"
                                  size="small"
                                >
                                  <BoxCheckLabel>면제</BoxCheckLabel>
                                </BoxCheck>
                              </BoxCheckListItem>
                            </BoxCheckList>
                          </div>

                          <FormList>
                            <FormListItem
                              titleText="할인율"
                              target="#leaseRentEstimationSystemInstallmentPublicBondDiscountRatio"
                            >
                              <FormInvalid
                                :error="state.publicBondDiscountError"
                              >
                                <InputBlock
                                  :error="state.publicBondDiscountError"
                                >
                                  <InputBlockCell>
                                    <BasicInput
                                      type="number"
                                      title="공채할인율 비율(%)"
                                      id="leaseRentEstimationSystemInstallmentPublicBondDiscountRatio"
                                      pattern="\d*"
                                      :useDelete="false"
                                      align="right"
                                      defaultValue="0"
                                      :classNames="{
                                        wrap: 'input-width-ratio',
                                      }"
                                    />
                                  </InputBlockCell>
                                  <InputBlockCell>
                                    <div class="text-body-3">%</div>
                                  </InputBlockCell>
                                  <InputBlockCell :flexible="true">
                                    <BasicInput
                                      title="공채할인율 금액"
                                      id="leaseRentEstimationSystemInstallmentPublicBondDiscountPrice"
                                      pattern="\d*"
                                      :useDelete="false"
                                      align="right"
                                      defaultValue="0"
                                      :disabled="true"
                                    />
                                  </InputBlockCell>
                                  <InputBlockCell>
                                    <div class="text-body-3 color-gray-quinary">
                                      원
                                    </div>
                                  </InputBlockCell>
                                </InputBlock>
                                <FormInvalidMessage
                                  >Error Message</FormInvalidMessage
                                >
                              </FormInvalid>
                            </FormListItem>
                          </FormList>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 공채할인 -->

            <!-- 기타비용 -->
            <li :class="$style['estimate-list__item']">
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">기타비용</div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <FormList>
                            <FormListItem
                              titleText="금액"
                              target="#leaseRentEstimationSystemInstallmentEtcPrice"
                            >
                              <FormInvalid :error="state.etcPriceError">
                                <InputBlock :error="state.etcPriceError">
                                  <InputBlockCell :flexible="true">
                                    <BasicInput
                                      title="기타비용 금액"
                                      id="leaseRentEstimationSystemInstallmentEtcPrice"
                                      pattern="\d*"
                                      :useDelete="false"
                                      align="right"
                                      defaultValue="0"
                                    />
                                  </InputBlockCell>
                                  <InputBlockCell>
                                    <div class="text-body-3">원</div>
                                  </InputBlockCell>
                                </InputBlock>
                                <FormInvalidMessage
                                  >Error Message</FormInvalidMessage
                                >
                              </FormInvalid>
                            </FormListItem>
                          </FormList>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 기타비용 -->

            <!-- 이손금 -->
            <li :class="$style['estimate-list__item']">
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">이손금</div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <div class="row-margin-item-group">
                            <BoxCheckList spacing="small">
                              <BoxCheckListItem>
                                <BoxCheck
                                  :minSide="true"
                                  name="leaseRentEstimationSystemInstallmentInterestSubsidy"
                                  id="leaseRentEstimationSystemInstallmentInterestSubsidy_001"
                                  size="small"
                                  :defaultChecked="true"
                                >
                                  <BoxCheckLabel>N</BoxCheckLabel>
                                </BoxCheck>
                              </BoxCheckListItem>
                              <BoxCheckListItem>
                                <BoxCheck
                                  :minSide="true"
                                  name="leaseRentEstimationSystemInstallmentInterestSubsidy"
                                  id="leaseRentEstimationSystemInstallmentInterestSubsidy_002"
                                  size="small"
                                >
                                  <BoxCheckLabel>Y</BoxCheckLabel>
                                </BoxCheck>
                              </BoxCheckListItem>
                            </BoxCheckList>
                          </div>

                          <!-- Case : Y 선택시 :disabled="false" -->
                          <FormList>
                            <FormListItem
                              titleText="금액"
                              target="#leaseRentEstimationSystemInstallmentInterestSubsidyPrice"
                              :disabled="true"
                            >
                              <FormInvalid :error="state.interestSubsidyError">
                                <InputBlock
                                  :error="state.interestSubsidyError"
                                  :disabled="true"
                                >
                                  <InputBlockCell :flexible="true">
                                    <BasicInput
                                      title="이손금 금액"
                                      id="leaseRentEstimationSystemInstallmentInterestSubsidyPrice"
                                      pattern="\d*"
                                      :useDelete="false"
                                      align="right"
                                      defaultValue="0"
                                      :disabled="true"
                                    />
                                  </InputBlockCell>
                                  <InputBlockCell>
                                    <div class="text-body-3">원</div>
                                  </InputBlockCell>
                                </InputBlock>
                                <FormInvalidMessage
                                  >Error Message</FormInvalidMessage
                                >
                              </FormInvalid>
                            </FormListItem>
                          </FormList>
                          <!-- //Case : Y 선택시 :disabled="false" -->
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 이손금 -->

            <!-- 탁송료 -->
            <li :class="$style['estimate-list__item']">
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">탁송료</div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <FormList>
                            <FormListItem
                              titleText="금액"
                              target="#leaseRentEstimationSystemInstallmentAdvancePaymentPrice"
                            >
                              <FormInvalid :error="state.advancePaymentError">
                                <InputBlock :error="state.advancePaymentError">
                                  <InputBlockCell :flexible="true">
                                    <BasicInput
                                      title="탁송료 금액"
                                      id="leaseRentEstimationSystemInstallmentAdvancePaymentPrice"
                                      pattern="\d*"
                                      :useDelete="false"
                                      align="right"
                                      defaultValue="0"
                                    />
                                  </InputBlockCell>
                                  <InputBlockCell>
                                    <div class="text-body-3">원</div>
                                  </InputBlockCell>
                                </InputBlock>
                                <FormInvalidMessage
                                  >Error Message</FormInvalidMessage
                                >
                              </FormInvalid>
                            </FormListItem>
                          </FormList>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 탁송료 -->

            <!-- { 상품 : 오토할부 } 선택시 노출 -->
            <!-- 보조금 (견적표기) -->
            <UiAccordionItem
              :classNames="{ item: $style['estimate-list__item'] }"
            >
              <div
                :class="[$style['estimate-list__head'], 'align-items-center']"
              >
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">
                            보조금<br />
                            (견적표기)
                          </div>
                        </KeyValueTitle>
                        <KeyValueText
                          :classNames="{ text: 'font-weight-bold' }"
                        >
                          0 원
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
                <div :class="$style['estimate-list__arrow']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['estimate-list__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer
                :classNames="{ layer: $style['estimate-list__layer'] }"
              >
                <section :class="$style['estimate-list__contents']">
                  <FormList>
                    <FormListItem
                      titleText="보조금"
                      target="#leaseRentEstimationSystemInstallmentSubsidy"
                    >
                      <FormInvalid :error="state.subsidyError">
                        <InputBlock :error="state.subsidyError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="보조금"
                              id="leaseRentEstimationSystemInstallmentSubsidy"
                              pattern="\d*"
                              :useDelete="false"
                              align="right"
                            />
                          </InputBlockCell>
                          <InputBlockCell>
                            <div class="text-body-3">원</div>
                          </InputBlockCell>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                  </FormList>

                  <NoticeText :classNames="{ wrap: 'row-margin-item-group' }">
                    보조금 지원여부는 출고 전 반드시 재확인 바랍니다.<br />
                    (보조금 변경시, 견적 재산출 필수)
                  </NoticeText>

                  <BasicButton size="small" theme="tertiary">
                    적용
                  </BasicButton>
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
            <!-- //보조금 (견적표기) -->
            <!-- //{ 상품 : 오토할부 } 선택시 노출 -->
          </UiAccordion>
        </div>

        <div :class="[$style['total'], 'row-margin-none']">
          <KeyValue verticalAlign="center">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle
                :classNames="{
                  title: 'color-black font-weight-bold',
                }"
              >
                총 소요비용
              </KeyValueTitle>
              <KeyValueText>
                <div class="color-green">
                  <UnitText rightUnit="원" align="right">44,174,225</UnitText>
                </div>
              </KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </section>

      <section class="row-margin-container-medium">
        <div class="flex-box row-margin-contents">
          <div class="flex-box__cell flex-1">
            <h2 class="text-title-2">견적 선택</h2>
          </div>
          <div class="flex-box__cell">
            <IconScroll class="display-block" />
          </div>
        </div>

        <!-- Case : 차량 선택 전 -->
        <div :class="$style['empty']">
          <p :class="$style['empty__text']">차량을 선택해 주세요.</p>
        </div>
        <!-- //Case : 차량 선택 전 -->

        <!-- Case : 차량 선택 후 -->
        <div
          :class="[
            $style['products'],
            {
              [$style['products--accordion-animate']]:
                state.productsAccordionAnimate,
            },
          ]"
        >
          <Swiper
            :modules="modules"
            :autoHeight="true"
            :observeSlideChildren="true"
            @swiper="
              (swiper) => {
                state.productsSlider = swiper;
              }
            "
          >
            <!-- item -->
            <SwiperSlide v-for="i in 3" :key="i">
              <section :class="$style['estimate-list']">
                <div :class="$style['estimate-list__top']">
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1">
                      <h3 :class="$style['estimate-list__title']">
                        {{ i }}번 견적
                      </h3>
                    </div>
                    <div class="flex-box__cell">
                      <div class="text-body-5 color-gray">견적 비교 추가</div>
                    </div>
                    <div class="flex-box__cell">
                      <SwitchCheckBox
                        theme="secondary"
                        :id="`leaseRentEstimationSystemInstallmentProducts${i}_On`"
                        :classNames="{ wrap: 'display-block' }"
                      />
                    </div>
                  </div>
                </div>

                <UiAccordion
                  :once="true"
                  :onBeforeOpened="productsAccordionAnimateStart"
                  :onBeforeClosed="productsAccordionAnimateStart"
                  :onAfterOpened="productsAccordionAnimateEnd"
                  :onAfterClosed="productsAccordionAnimateEnd"
                  :classNames="{ wrap: $style['estimate-list__list'] }"
                >
                  <!-- 상품 -->
                  <li :class="$style['estimate-list__item']">
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
                                <div class="text-body-4">상품</div>
                              </KeyValueTitle>
                              <KeyValueText>
                                <!-- Case : 오토론 -->
                                <div>오토론</div>
                                <!-- //Case : 오토론 -->

                                <!-- Case : 오토할부 -->
                                <div>오토할부</div>
                                <!-- //Case : 오토할부 -->
                              </KeyValueText>
                            </KeyValueItem>
                          </KeyValue>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- // 상품 -->

                  <!-- 기간 -->
                  <UiAccordionItem
                    :classNames="{ item: $style['estimate-list__item'] }"
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
                                <div class="text-body-4">기간</div>
                              </KeyValueTitle>
                              <KeyValueText>36개월</KeyValueText>
                            </KeyValueItem>
                          </KeyValue>
                        </div>
                      </div>
                      <div :class="$style['estimate-list__arrow']">
                        <UiAccordionOpener
                          :classNames="{
                            button: $style['estimate-list__opener'],
                          }"
                        />
                      </div>
                    </div>

                    <UiAccordionLayer
                      :classNames="{ layer: $style['estimate-list__layer'] }"
                    >
                      <section :class="$style['estimate-list__contents']">
                        <BoxCheckList spacing="small" :wrap="true" :col="3">
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemInstallmentProducts${i}_check001`"
                              :id="`leaseRentEstimationSystemInstallmentProducts${i}_check001_001`"
                              size="small"
                            >
                              <BoxCheckLabel>12개월</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemInstallmentProducts${i}_check001`"
                              :id="`leaseRentEstimationSystemInstallmentProducts${i}_check001_002`"
                              size="small"
                            >
                              <BoxCheckLabel>24개월</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemInstallmentProducts${i}_check001`"
                              :id="`leaseRentEstimationSystemInstallmentProducts${i}_check001_003`"
                              size="small"
                              :defaultChecked="true"
                            >
                              <BoxCheckLabel>36개월</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemInstallmentProducts${i}_check001`"
                              :id="`leaseRentEstimationSystemInstallmentProducts${i}_check001_004`"
                              size="small"
                            >
                              <BoxCheckLabel>48개월</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemInstallmentProducts${i}_check001`"
                              :id="`leaseRentEstimationSystemInstallmentProducts${i}_check001_005`"
                              size="small"
                            >
                              <BoxCheckLabel>60개월</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                        </BoxCheckList>
                      </section>
                    </UiAccordionLayer>
                  </UiAccordionItem>
                  <!-- // 기간 -->

                  <!-- 선수금 -->
                  <UiAccordionItem
                    :classNames="{ item: $style['estimate-list__item'] }"
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
                                <div class="text-body-4">선수금</div>
                              </KeyValueTitle>
                              <KeyValueText>
                                <div class="flex-box">
                                  <div class="flex-box__cell flex-1">10%</div>
                                  <div class="flex-box__cell">
                                    <strong>19,420,000 원</strong>
                                  </div>
                                </div>
                              </KeyValueText>
                            </KeyValueItem>
                          </KeyValue>
                        </div>
                      </div>
                      <div :class="$style['estimate-list__arrow']">
                        <UiAccordionOpener
                          :classNames="{
                            button: $style['estimate-list__opener'],
                          }"
                        />
                      </div>
                    </div>

                    <UiAccordionLayer
                      :classNames="{ layer: $style['estimate-list__layer'] }"
                    >
                      <section :class="$style['estimate-list__contents']">
                        <div class="row-margin-item-small">
                          <BoxCheck
                            :minSide="true"
                            :name="`leaseRentEstimationSystemInstallmentProducts${i}_check003`"
                            :id="`leaseRentEstimationSystemInstallmentProducts${i}_check003_000`"
                            size="small"
                            :defaultChecked="true"
                          >
                            <BoxCheckLabel>없음</BoxCheckLabel>
                          </BoxCheck>
                        </div>
                        <BoxCheckList spacing="small" :wrap="true" :col="4">
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemInstallmentProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemInstallmentProducts${i}_check003_001`"
                              size="small"
                            >
                              <BoxCheckLabel>5%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemInstallmentProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemInstallmentProducts${i}_check003_002`"
                              size="small"
                            >
                              <BoxCheckLabel>10%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemInstallmentProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemInstallmentProducts${i}_check003_003`"
                              size="small"
                            >
                              <BoxCheckLabel>15%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemInstallmentProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemInstallmentProducts${i}_check003_004`"
                              size="small"
                            >
                              <BoxCheckLabel>20%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemInstallmentProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemInstallmentProducts${i}_check003_005`"
                              size="small"
                            >
                              <BoxCheckLabel>25%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemInstallmentProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemInstallmentProducts${i}_check003_006`"
                              size="small"
                            >
                              <BoxCheckLabel>30%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemInstallmentProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemInstallmentProducts${i}_check003_007`"
                              size="small"
                            >
                              <BoxCheckLabel>35%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemInstallmentProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemInstallmentProducts${i}_check003_008`"
                              size="small"
                            >
                              <BoxCheckLabel>40%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemInstallmentProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemInstallmentProducts${i}_check003_009`"
                              size="small"
                            >
                              <BoxCheckLabel>45%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemInstallmentProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemInstallmentProducts${i}_check003_010`"
                              size="small"
                            >
                              <BoxCheckLabel>50%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                        </BoxCheckList>

                        <FormList
                          :classNames="{ wrap: 'row-margin-item-group' }"
                        >
                          <FormListItem
                            titleText="비율"
                            :target="`#leaseRentEstimationSystemInstallmentProducts${i}_prepaymentsRatioButton`"
                            :selectOnly="true"
                          >
                            <FormInvalid
                              :error="state.prepaymentsRatioError[i]"
                            >
                              <InputBlock
                                :error="state.prepaymentsRatioError[i]"
                              >
                                <InputBlockCell :flexible="true">
                                  <BasicSelect
                                    :option="[
                                      {
                                        value: '0',
                                        text: '없음',
                                      },
                                      {
                                        value: '1',
                                        text: '1%',
                                      },
                                      {
                                        value: '2',
                                        text: '2%',
                                      },
                                      {
                                        value: '3',
                                        text: '3%',
                                      },
                                      {
                                        value: '4',
                                        text: '4%',
                                      },
                                      {
                                        value: '5',
                                        text: '5%',
                                      },
                                      {
                                        value: '6',
                                        text: '6%',
                                      },
                                      {
                                        value: '7',
                                        text: '7%',
                                      },
                                      {
                                        value: '8',
                                        text: '8%',
                                      },
                                      {
                                        value: '9',
                                        text: '9%',
                                      },
                                      {
                                        value: '10',
                                        text: '10%',
                                      },
                                      {
                                        value: '11',
                                        text: '11%',
                                      },
                                      {
                                        value: '12',
                                        text: '12%',
                                      },
                                      {
                                        value: '13',
                                        text: '13%',
                                      },
                                      {
                                        value: '14',
                                        text: '14%',
                                      },
                                      {
                                        value: '15',
                                        text: '15%',
                                      },
                                      {
                                        value: '16',
                                        text: '16%',
                                      },
                                      {
                                        value: '17',
                                        text: '17%',
                                      },
                                      {
                                        value: '18',
                                        text: '18%',
                                      },
                                    ]"
                                    buttonTitle="선수금 비율 선택하기"
                                    layerTitle="선수금 비율을 선택해 주세요"
                                    :id="`leaseRentEstimationSystemInstallmentProducts${i}_prepaymentsRatio`"
                                    :buttonId="`leaseRentEstimationSystemInstallmentProducts${i}_prepaymentsRatioButton`"
                                  />
                                </InputBlockCell>
                              </InputBlock>
                              <FormInvalidMessage
                                >Error Message</FormInvalidMessage
                              >
                            </FormInvalid>
                          </FormListItem>
                          <FormListItem
                            titleText="금액"
                            :target="`#leaseRentEstimationSystemInstallmentProducts${i}_prepaymentsPriceButton`"
                            :selectOnly="true"
                          >
                            <FormInvalid
                              :error="state.prepaymentsPriceError[i]"
                            >
                              <InputBlock
                                :error="state.prepaymentsPriceError[i]"
                              >
                                <InputBlockCell :flexible="true">
                                  <BasicSelect
                                    :option="[
                                      {
                                        value: '0',
                                        text: '없음',
                                      },
                                      {
                                        value: '1',
                                        text: '100만원',
                                      },
                                      {
                                        value: '2',
                                        text: '200만원',
                                      },
                                      {
                                        value: '3',
                                        text: '300만원',
                                      },
                                      {
                                        value: '4',
                                        text: '400만원',
                                      },
                                      {
                                        value: '5',
                                        text: '500만원',
                                      },
                                      {
                                        value: '6',
                                        text: '600만원',
                                      },
                                      {
                                        value: '7',
                                        text: '700만원',
                                      },
                                      {
                                        value: '8',
                                        text: '724만원',
                                      },
                                    ]"
                                    buttonTitle="선수금 금액 선택하기"
                                    layerTitle="선수금 금액을 선택해 주세요"
                                    :id="`leaseRentEstimationSystemInstallmentProducts${i}_prepaymentsPrice`"
                                    :buttonId="`leaseRentEstimationSystemInstallmentProducts${i}_prepaymentsPriceButton`"
                                  />
                                </InputBlockCell>
                              </InputBlock>
                              <FormInvalidMessage
                                >Error Message</FormInvalidMessage
                              >
                            </FormInvalid>
                          </FormListItem>
                          <FormListItem
                            titleText="선수금 수기입력"
                            :target="`#leaseRentEstimationSystemInstallmentProducts${i}_prepaymentsPriceInput`"
                          >
                            <FormInvalid
                              :error="state.prepaymentsPriceInputError[i]"
                            >
                              <InputBlock
                                :error="state.prepaymentsPriceInputError[i]"
                              >
                                <InputBlockCell :flexible="true">
                                  <BasicInput
                                    title="선수금 수기입력"
                                    :id="`leaseRentEstimationSystemInstallmentProducts${i}_prepaymentsPriceInput`"
                                    pattern="\d*"
                                    :useDelete="false"
                                    align="right"
                                  />
                                </InputBlockCell>
                                <template v-slot:innerRight>
                                  <div class="text-body-3">원</div>
                                </template>
                              </InputBlock>
                              <FormInvalidMessage
                                >Error Message</FormInvalidMessage
                              >
                            </FormInvalid>
                          </FormListItem>
                        </FormList>

                        <BasicButton size="small" theme="tertiary"
                          >적용</BasicButton
                        >
                      </section>
                    </UiAccordionLayer>
                  </UiAccordionItem>
                  <!-- // 선수금 -->

                  <!-- 대출원금 -->
                  <UiAccordionItem
                    :classNames="{ item: $style['estimate-list__item'] }"
                  >
                    <div :class="$style['estimate-list__head']">
                      <div :class="$style['estimate-list__block']">
                        <div :class="$style['estimate-list__left']">
                          <KeyValue verticalAlign="center">
                            <KeyValueItem :classNames="{ item: 'text-body-3' }">
                              <KeyValueTitle>
                                <div class="text-body-4">대출원금</div>
                              </KeyValueTitle>
                              <KeyValueText
                                :classNames="{ text: 'font-weight-bold' }"
                                >174,710,000 원</KeyValueText
                              >
                            </KeyValueItem>
                          </KeyValue>
                        </div>
                      </div>
                      <div :class="$style['estimate-list__arrow']">
                        <UiAccordionOpener
                          :classNames="{
                            button: $style['estimate-list__opener'],
                          }"
                        />
                      </div>
                    </div>

                    <UiAccordionLayer
                      :classNames="{ layer: $style['estimate-list__layer'] }"
                    >
                      <section :class="$style['estimate-list__contents']">
                        <FormList
                          :classNames="{ wrap: 'row-margin-item-group' }"
                        >
                          <FormListItem
                            titleText="금액"
                            :target="`#leaseRentEstimationSystemInstallmentProducts${i}_loanPrincipalPriceButton`"
                            :selectOnly="true"
                          >
                            <FormInvalid
                              :error="state.loanPrincipalPriceError[i]"
                            >
                              <InputBlock
                                :error="state.loanPrincipalPriceError[i]"
                              >
                                <InputBlockCell :flexible="true">
                                  <BasicSelect
                                    :option="[
                                      {
                                        value: '0',
                                        text: '없음',
                                      },
                                      {
                                        value: '1',
                                        text: '100만원',
                                      },
                                      {
                                        value: '2',
                                        text: '200만원',
                                      },
                                      {
                                        value: '3',
                                        text: '300만원',
                                      },
                                      {
                                        value: '4',
                                        text: '400만원',
                                      },
                                      {
                                        value: '5',
                                        text: '500만원',
                                      },
                                      {
                                        value: '6',
                                        text: '600만원',
                                      },
                                      {
                                        value: '7',
                                        text: '700만원',
                                      },
                                      {
                                        value: '8',
                                        text: '724만원',
                                      },
                                    ]"
                                    buttonTitle="대출원금 금액 선택하기"
                                    layerTitle="대출원금 금액을 선택해 주세요"
                                    :id="`leaseRentEstimationSystemInstallmentProducts${i}_loanPrincipalPrice`"
                                    :buttonId="`leaseRentEstimationSystemInstallmentProducts${i}_loanPrincipalPriceButton`"
                                  />
                                </InputBlockCell>
                              </InputBlock>
                              <FormInvalidMessage
                                >Error Message</FormInvalidMessage
                              >
                            </FormInvalid>
                          </FormListItem>
                          <FormListItem
                            titleText="대출원금 수기입력"
                            :target="`#leaseRentEstimationSystemInstallmentProducts${i}_loanPrincipalPriceInput`"
                          >
                            <FormInvalid
                              :error="state.loanPrincipalPriceInputError[i]"
                            >
                              <InputBlock
                                :error="state.loanPrincipalPriceInputError[i]"
                              >
                                <InputBlockCell :flexible="true">
                                  <BasicInput
                                    title="대출원금 수기입력"
                                    :id="`leaseRentEstimationSystemInstallmentProducts${i}_loanPrincipalPriceInput`"
                                    pattern="\d*"
                                    :useDelete="false"
                                    align="right"
                                  />
                                </InputBlockCell>
                                <template v-slot:innerRight>
                                  <div class="text-body-3">원</div>
                                </template>
                              </InputBlock>
                              <FormInvalidMessage
                                >Error Message</FormInvalidMessage
                              >
                            </FormInvalid>
                          </FormListItem>
                        </FormList>

                        <BasicButton size="small" theme="tertiary"
                          >적용</BasicButton
                        >
                      </section>
                    </UiAccordionLayer>
                  </UiAccordionItem>
                  <!-- // 대출원금 -->

                  <!-- 인지세 -->
                  <li :class="$style['estimate-list__item']">
                    <div :class="$style['estimate-list__head']">
                      <div :class="$style['estimate-list__block']">
                        <div :class="$style['estimate-list__left']">
                          <KeyValue align="left" size="regular">
                            <KeyValueItem :classNames="{ item: 'text-body-3' }">
                              <KeyValueTitle>
                                <div class="text-body-4">인지세</div>
                              </KeyValueTitle>
                              <KeyValueText>
                                <BoxCheckList spacing="small" :wrap="true">
                                  <BoxCheckListItem>
                                    <BoxCheck
                                      :minSide="true"
                                      :name="`leaseRentEstimationSystemInstallmentProducts${i}_check002`"
                                      :id="`leaseRentEstimationSystemInstallmentProducts${i}_check002_001`"
                                      size="small"
                                    >
                                      <BoxCheckLabel>포함</BoxCheckLabel>
                                    </BoxCheck>
                                  </BoxCheckListItem>
                                  <BoxCheckListItem>
                                    <BoxCheck
                                      :minSide="true"
                                      :name="`leaseRentEstimationSystemInstallmentProducts${i}_check002`"
                                      :id="`leaseRentEstimationSystemInstallmentProducts${i}_check002_002`"
                                      size="small"
                                    >
                                      <BoxCheckLabel>불포함</BoxCheckLabel>
                                    </BoxCheck>
                                  </BoxCheckListItem>
                                </BoxCheckList>
                                <div
                                  class="text-body-3 align-right row-margin-item"
                                >
                                  75,000 원
                                </div>
                              </KeyValueText>
                            </KeyValueItem>
                          </KeyValue>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- // 인지세 -->

                  <!-- 금리 -->
                  <li :class="$style['estimate-list__item']">
                    <div :class="$style['estimate-list__head']">
                      <div :class="$style['estimate-list__block']">
                        <div :class="$style['estimate-list__left']">
                          <KeyValue align="left" size="regular">
                            <KeyValueItem :classNames="{ item: 'text-body-3' }">
                              <KeyValueTitle>
                                <div class="text-body-4">금리</div>
                              </KeyValueTitle>
                              <KeyValueText>
                                <!-- Case : 견적 계산 후 -->
                                9.5 ~ 13.2%
                                <!-- //Case : 견적 계산 후 -->
                              </KeyValueText>
                            </KeyValueItem>
                          </KeyValue>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- // 금리 -->
                </UiAccordion>

                <div :class="$style['estimate-list__foot']">
                  <KeyValue margin="regular" verticalAlign="center">
                    <!-- Case : 견적 계산 전 -->
                    <KeyValueItem :classNames="{ item: 'text-body-4' }">
                      <KeyValueTitle
                        :classNames="{
                          title: 'color-black font-weight-medium',
                        }"
                      >
                        월 납입금
                      </KeyValueTitle>
                      <KeyValueText>
                        <BasicButton size="small" inline="true"
                          >계산하기</BasicButton
                        >
                        <!-- Case : 계산중 -->
                        <BasicButton size="small" inline="true">
                          계산중
                          <template v-slot:rightIcon>
                            <div
                              :class="[
                                $style['loading-icon'],
                                $style['loading-icon--regular'],
                              ]"
                            ></div>
                          </template>
                        </BasicButton>
                        <!-- //Case : 계산중 -->
                      </KeyValueText>
                    </KeyValueItem>
                    <!-- //Case : 견적 계산 전 -->

                    <!-- Case : 견적 계산 후 -->
                    <KeyValueItem :classNames="{ item: 'text-body-4' }">
                      <KeyValueTitle
                        :classNames="{
                          title: 'color-black font-weight-medium',
                        }"
                      >
                        월 납입금
                      </KeyValueTitle>
                      <KeyValueText>
                        <div>
                          <UnitText rightUnit="원" align="right">
                            6,191,360
                          </UnitText>
                          <div class="flex-box row-margin-mini">
                            <div class="flex-box__cell flex-1">
                              <div class="text-body-3">~</div>
                            </div>
                            <div class="flex-box__cell flex-box__cell--small">
                              <UnitText rightUnit="원" align="right">
                                6,438,620
                              </UnitText>
                            </div>
                          </div>
                        </div>
                      </KeyValueText>
                    </KeyValueItem>
                    <!-- //Case : 견적 계산 후 -->
                  </KeyValue>
                </div>
              </section>
            </SwiperSlide>
            <!-- // item -->
          </Swiper>
        </div>
        <!-- //Case : 차량 선택 후 -->
      </section>

      <ButtonList
        v-if="!state.viewDocument"
        :classNames="{
          wrap: 'row-margin-contents',
        }"
      >
        <ButtonListItem>
          <BasicButton @click="viewDocumentOpen">견적서 보기</BasicButton>
        </ButtonListItem>
      </ButtonList>

      <div v-if="state.viewDocument" class="row-margin-contents">
        <CheckBox
          id="leaseRentEstimationSystemInstallmentCheck001"
          theme="tertiary"
          :classNames="{ wrap: 'row-margin-item-group' }"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>연락처 표시</CheckBoxLabelText>
        </CheckBox>

        <!-- Case : AS-IS -->
        <DocumentView>
          <article
            :class="$style['document']"
            v-html="dummyDataEstimate"
          ></article>
        </DocumentView>
        <!-- // Case : AS-IS -->

        <!-- Case : TO-BE -->
        <DocumentView>
          <DocumentEstimate004Contents />
        </DocumentView>
        <!-- // Case : TO-BE -->

        <ButtonList
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <ButtonListItem>
            <BasicButton
              :line="true"
              theme="quaternary"
              @click="viewDocumentClose"
              >견적서 접기</BasicButton
            >
          </ButtonListItem>
        </ButtonList>
      </div>

      <section :class="$style['notice-section']">
        <h3 :class="$style['notice-section__title']">견적 작성시 유의사항</h3>
        <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              고객님과 계약 전에 반드시 요청 받은 차량이 맞는지 트림 및 변속기,
              제원, 내외장 색상, 탁송료, 채권 등 정보 등을 다시 한번 확인하시기
              바랍니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              하나캐피탈에서 제공하는 차량 정보의 가격, 색상, 판매조건에 오류가
              있을 수 있습니다. 계약전에 필히 확인하여 주시기 바랍니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              제조사의 악세사리(Customizing) 옵션(TUIX, TUON 등) 선택시 출고장에
              제한이 있습니다. 전용 출고장의 탁송료를 선택해 주세요.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              견적에 표시된 차량에는 재고차량이나 단종된 차량이 포함되어 있을 수
              있습니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              수동 변속기나 특이한 색상, 일반용 LPG, 특판 출고 등은 판매사나
              금융사에 따라 취급되지 않을 수 있습니다.
            </div>
          </li>
        </ul>
      </section>
    </div>

    <template v-slot:foot>
      <!-- Case : 가견적 상태에서 재견적 && 견적서 보기 선택 후, 디폴트 상태 -->
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :minSide="true">견적 저장</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" theme="tertiary" :disabled="true"
            >견적서 발송</BasicButton
          >
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" :disabled="true">견적확정</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 가견적 상태에서 재견적 && 견적서 보기 선택 후, 디폴트 상태 -->

      <!-- Case : 견적확정 or 동의완료 상태에서 재견적 && 견적서 보기 선택 후, 디폴트 상태 -->
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :minSide="true">재견적 저장</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" theme="tertiary" :disabled="true"
            >견적서 발송</BasicButton
          >
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" :disabled="true">견적확정</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 견적확정 or 동의완료 상태에서 재견적 && 견적서 보기 선택 후, 디폴트 상태 -->

      <!-- Case : 심사신청 상태에서 조건변경 && 견적서 보기 선택 후, 디폴트 상태 -->
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :minSide="true">조건변경 저장</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" theme="tertiary" :disabled="true"
            >견적서 발송</BasicButton
          >
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 심사신청 상태에서 조건변경 && 견적서 보기 선택 후, 디폴트 상태 -->

      <!-- Case : 견적 저장 된 상태 -->
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :minSide="true" :disabled="true">저장됨</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" theme="tertiary"
            >견적서 발송</BasicButton
          >
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true">견적확정</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 견적 저장 된 상태 -->

      <!-- Case : 심사신청 상태에서 조건변경 && 견적 저장 된 상태 -->
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :minSide="true" :disabled="true">저장됨</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" theme="tertiary"
            >견적서 발송</BasicButton
          >
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 심사신청 상태에서 조건변경 && 견적 저장 된 상태 -->

      <!-- Case : 견적서 저장 후, 견적서 설정 값 변경의 경우 -->
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :minSide="true">새로 저장</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" theme="tertiary" :disabled="true"
            >견적서 발송</BasicButton
          >
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" :disabled="true">견적확정</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 견적서 저장 후, 견적서 설정 값 변경의 경우 -->

      <!-- Case : 견적 확정된 상태 -->
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :minSide="true" :disabled="true">저장됨</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" theme="tertiary"
            >견적서 발송</BasicButton
          >
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true">신용조회요청</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 견적 확정된 상태 -->

      <!-- Case : 확정된 상태 -->
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :minSide="true" :disabled="true">저장됨</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" theme="tertiary"
            >견적서 발송</BasicButton
          >
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" :disabled="true"
            >동의 요청됨</BasicButton
          >
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 확정된 상태 -->
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemInstallment.scss';
</style>
