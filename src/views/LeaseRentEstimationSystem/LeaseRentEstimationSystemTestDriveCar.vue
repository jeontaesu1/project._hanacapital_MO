<script>
// LR_M02_p004
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
import SettingButton from '@/components/ui/button/SettingButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import RoundTab from '@/components/ui/tab/RoundTab.vue';
import RoundTabButton from '@/components/ui/tab/RoundTabButton.vue';
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

import IconScroll from '@/assets/images/icon/scroll.svg?component';

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
    SettingButton,
    BasicHr,
    UiTab,
    UiTabPanel,
    RoundTab,
    RoundTabButton,
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
      carNumberError: false,
      exteriorETCError: false,
      exteriorETCPriceError: false,
      interiorETCError: false,
      interiorETCPriceError: false,
      carAmountPriceError: false,
      optionETCError: false,
      optionETCPriceError: false,
      deliveryDiscountPriceError: false,
      deliveryDiscountRatioError: false,
      deliveryManufacturerPriceError: false,
      feeCMError: false,
      feeAGError: false,
      etcCMError: false,
      etcAGError: false,
      publicBondDiscountError: false,
      etcPriceError: false,
      interestSubsidyError: false,
      suppliesSupportError: false,
      advancePaymentError: false,
      prePaymentError: false,
      prepaymentsRatioError: [false, false, false],
      prepaymentsPriceError: [false, false, false],
      prepaymentsPriceInputError: [false, false, false],
      depositRatioError: [false, false, false],
      depositPriceError: [false, false, false],
      depositPriceInputError: [false, false, false],
      residualValueRatioError: [false, false, false],
      residualValueInputError: [false, false, false],
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

    // 아코디언 열때 Ajax 통신시 예시 : start
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
    // 아코디언 열때 Ajax 통신시 예시 : end

    onMounted(() => {
      store.ui.header.setTitle(() => '시승차견적');
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
      modules: [A11y],
      productsAccordionAnimateStart,
      productsAccordionAnimateEnd,
      viewDocumentOpen,
      viewDocumentClose,
      testAjax,
      testAccordionToggle,
    };
  },
};
</script>

<template>
  <PageContents>
    <div>
      <section class="row-margin-container-medium">
        <h2 class="text-title-2 row-margin-contents">견적 상품</h2>

        <section :class="$style['estimate-list']">
          <div :class="$style['estimate-list__top']">
            <h3 :class="$style['estimate-list__title']">차량 선택</h3>
          </div>

          <UiAccordion :classNames="{ wrap: $style['estimate-list__list'] }">
            <!-- 차량 번호 -->
            <li :class="$style['estimate-list__item']">
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <FormList>
                      <FormListItem
                        titleText="차량 번호"
                        target="#leaseRentEstimationSystemTestDriveCarCarNumber"
                      >
                        <FormInvalid :error="state.carNumberError">
                          <InputBlock :error="state.carNumberError">
                            <InputBlockCell :flexible="true">
                              <BasicInput
                                pattern="\d*"
                                title="차량 번호"
                                id="leaseRentEstimationSystemTestDriveCarCarNumber"
                              />
                            </InputBlockCell>
                            <template v-slot:right>
                              <BasicButton size="mini" theme="tertiary"
                                >조회</BasicButton
                              >
                            </template>
                          </InputBlock>
                          <FormInvalidMessage>Error Message</FormInvalidMessage>
                        </FormInvalid>
                      </FormListItem>
                    </FormList>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 차량 번호 -->

            <!-- 브랜드 -->
            <UiAccordionItem
              :classNames="{ item: $style['estimate-list__item'] }"
              v-slot="accordionItemSlotProps"
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
                              <CarEmblem code="1012" size="small" />
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
                  <UiTab>
                    <RoundTab
                      :useUiTab="true"
                      :classNames="{ wrap: 'row-margin-item-group' }"
                    >
                      <RoundTabButton
                        link="leaseRentEstimationSystemTestDriveCarBrand_001"
                      >
                        국산
                      </RoundTabButton>
                      <RoundTabButton
                        link="leaseRentEstimationSystemTestDriveCarBrand_002"
                      >
                        수입
                      </RoundTabButton>
                    </RoundTab>

                    <UiTabPanel
                      name="leaseRentEstimationSystemTestDriveCarBrand_001"
                    >
                      <div
                        :class="[
                          $style['bank-brand'],
                          $style['bank-brand--col-3'],
                        ]"
                      >
                        <ul :class="$style['bank-brand__list']">
                          <li :class="$style['bank-brand__item']">
                            <button
                              type="button"
                              :class="$style['bank-brand__block']"
                            >
                              <span :class="$style['bank-brand__logo']">
                                <CarEmblem code="1001" size="medium" />
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
                            >
                              <span :class="$style['bank-brand__logo']">
                                <CarEmblem code="1012" size="medium" />
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
                            >
                              <span :class="$style['bank-brand__logo']">
                                <CarEmblem code="1002" size="medium" />
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
                            >
                              <span :class="$style['bank-brand__logo']">
                                <CarEmblem code="1003" size="medium" />
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
                            >
                              <span :class="$style['bank-brand__logo']">
                                <CarEmblem code="1006" size="medium" />
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
                            >
                              <span :class="$style['bank-brand__logo']">
                                <CarEmblem code="1005" size="medium" />
                              </span>
                              <span :class="$style['bank-brand__text']"
                                >쌍용</span
                              >
                            </button>
                          </li>
                        </ul>
                      </div>
                    </UiTabPanel>

                    <UiTabPanel
                      name="leaseRentEstimationSystemTestDriveCarBrand_002"
                    >
                      <ul :class="$style['bank-brand__list']">
                        <li :class="$style['bank-brand__item']">
                          <button
                            type="button"
                            :class="$style['bank-brand__block']"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <CarEmblem code="2001" size="medium" />
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
                          >
                            <span :class="$style['bank-brand__logo']">
                              <CarEmblem code="2002" size="medium" />
                            </span>
                            <span :class="$style['bank-brand__text']">BMW</span>
                          </button>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <button
                            type="button"
                            :class="$style['bank-brand__block']"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <CarEmblem code="2003" size="medium" />
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
                          >
                            <span :class="$style['bank-brand__logo']">
                              <CarEmblem code="2017" size="medium" />
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
                          >
                            <span :class="$style['bank-brand__logo']">
                              <CarEmblem code="2018" size="medium" />
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
                          >
                            <span :class="$style['bank-brand__logo']">
                              <CarEmblem code="2025" size="medium" />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >벤틀리</span
                            >
                          </button>
                        </li>
                      </ul>
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
                        name="leaseRentEstimationSystemTestDriveCarLineup"
                        id="leaseRentEstimationSystemTestDriveCarLineup_001"
                        :defaultChecked="true"
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
                        name="leaseRentEstimationSystemTestDriveCarLineup"
                        id="leaseRentEstimationSystemTestDriveCarLineup_002"
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
                        name="leaseRentEstimationSystemTestDriveCarLineup"
                        id="leaseRentEstimationSystemTestDriveCarLineup_003"
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
                        name="leaseRentEstimationSystemTestDriveCarLineup"
                        id="leaseRentEstimationSystemTestDriveCarLineup_004"
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
                        name="leaseRentEstimationSystemTestDriveCarTrim"
                        id="leaseRentEstimationSystemTestDriveCarTrim_001"
                        :defaultChecked="true"
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
                            class="display-block row-margin-mini text-body-5 color-gray-secondary"
                          >
                            휘발유 14.3km/l
                          </span>
                        </RadioButtonLabelText>
                      </RadioButton>
                    </li>
                    <li class="row-margin-item-group">
                      <RadioButton
                        theme="tertiary"
                        :full="true"
                        name="leaseRentEstimationSystemTestDriveCarTrim"
                        id="leaseRentEstimationSystemTestDriveCarTrim_002"
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
                            class="display-block row-margin-mini text-body-5 color-gray-secondary"
                          >
                            휘발유 14.3km/l
                          </span>
                        </RadioButtonLabelText>
                      </RadioButton>
                    </li>
                    <li class="row-margin-item-group">
                      <RadioButton
                        theme="tertiary"
                        :full="true"
                        name="leaseRentEstimationSystemTestDriveCarTrim"
                        id="leaseRentEstimationSystemTestDriveCarTrim_003"
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
                            class="display-block row-margin-mini text-body-5 color-gray-secondary"
                          >
                            휘발유 14.3km/l
                          </span>
                        </RadioButtonLabelText>
                      </RadioButton>
                    </li>
                    <li class="row-margin-item-group">
                      <RadioButton
                        theme="tertiary"
                        :full="true"
                        name="leaseRentEstimationSystemTestDriveCarTrim"
                        id="leaseRentEstimationSystemTestDriveCarTrim_004"
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
                            class="display-block row-margin-mini text-body-5 color-gray-secondary"
                          >
                            휘발유 13.8km/l
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
                        name="leaseRentEstimationSystemTestDriveCarExterior"
                        id="leaseRentEstimationSystemTestDriveCarExterior_001"
                        :defaultChecked="true"
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
                        name="leaseRentEstimationSystemTestDriveCarExterior"
                        id="leaseRentEstimationSystemTestDriveCarExterior_002"
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
                        name="leaseRentEstimationSystemTestDriveCarExterior"
                        id="leaseRentEstimationSystemTestDriveCarExterior_003"
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
                        name="leaseRentEstimationSystemTestDriveCarExterior"
                        id="leaseRentEstimationSystemTestDriveCarExterior_004"
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
                        name="leaseRentEstimationSystemTestDriveCarExterior"
                        id="leaseRentEstimationSystemTestDriveCarExterior_005"
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
                        name="leaseRentEstimationSystemTestDriveCarExterior"
                        id="leaseRentEstimationSystemTestDriveCarExterior_006"
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
                            name="leaseRentEstimationSystemTestDriveCarExterior"
                            id="leaseRentEstimationSystemTestDriveCarExterior_007"
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
                          <FormList>
                            <FormListItem
                              titleText="외장 색상 명칭"
                              target="#leaseRentEstimationSystemTestDriveCarExteriorETC"
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
                                      id="leaseRentEstimationSystemTestDriveCarExteriorETC"
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
                              target="#leaseRentEstimationSystemTestDriveCarExteriorETCPrice"
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
                                      id="leaseRentEstimationSystemTestDriveCarExteriorETCPrice"
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
                        name="leaseRentEstimationSystemTestDriveCarInterior"
                        id="leaseRentEstimationSystemTestDriveCarInterior_001"
                        :defaultChecked="true"
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
                        name="leaseRentEstimationSystemTestDriveCarInterior"
                        id="leaseRentEstimationSystemTestDriveCarInterior_002"
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
                        name="leaseRentEstimationSystemTestDriveCarInterior"
                        id="leaseRentEstimationSystemTestDriveCarInterior_003"
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
                        name="leaseRentEstimationSystemTestDriveCarInterior"
                        id="leaseRentEstimationSystemTestDriveCarInterior_004"
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
                        name="leaseRentEstimationSystemTestDriveCarInterior"
                        id="leaseRentEstimationSystemTestDriveCarInterior_005"
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
                        name="leaseRentEstimationSystemTestDriveCarInterior"
                        id="leaseRentEstimationSystemTestDriveCarInterior_006"
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
                            name="leaseRentEstimationSystemTestDriveCarInterior"
                            id="leaseRentEstimationSystemTestDriveCarInterior_007"
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
                          <FormList>
                            <FormListItem
                              titleText="내장 색상 명칭"
                              target="#leaseRentEstimationSystemTestDriveCarInteriorETC"
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
                                      id="leaseRentEstimationSystemTestDriveCarInteriorETC"
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
                              target="#leaseRentEstimationSystemTestDriveCarInteriorETCPrice"
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
                                      id="leaseRentEstimationSystemTestDriveCarInteriorETCPrice"
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
                  name="leaseRentEstimationSystemTestDriveCarCarAmount"
                  id="leaseRentEstimationSystemTestDriveCarCarAmount_001"
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
                  name="leaseRentEstimationSystemTestDriveCarCarAmount"
                  id="leaseRentEstimationSystemTestDriveCarCarAmount_002"
                >
                  <RadioButtonObject />
                  <RadioButtonLabelText
                    ><span class="font-weight-medium"
                      >수기입력</span
                    ></RadioButtonLabelText
                  >
                </RadioButton>
                <div :class="[$style['car-amount'], 'row-margin-item']">
                  <!-- DD : 수기입력 선택시 :disabled="false" -->
                  <FormList>
                    <FormListItem
                      titleText="차량금액"
                      target="#leaseRentEstimationSystemTestDriveCarCarAmountPrice"
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
                              id="leaseRentEstimationSystemTestDriveCarCarAmountPrice"
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
                          id="leaseRentEstimationSystemTestDriveCarOption001"
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
                                >현대 스마트 센서 I</span
                              >
                              <span class="flex-box__cell font-weight-medium">
                                700,000 원
                              </span>
                            </span>
                            <span
                              class="display-block text-body-5 color-gray-secondary row-margin-mini"
                            >
                              전방 충돌방지 보조(교차로대향차), 후측방 충돌방지
                              보조, 후방 교차 충돌방지 보조, 안전 하차 경고,
                              스마트 크루즈 컨트롤(스탑앤고 기능 미포함),
                              내비게이션 기반 스마트 크루즈 컨트롤(안전구간,
                              곡선로)
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
                          id="leaseRentEstimationSystemTestDriveCarOption002"
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
                                >컴포트</span
                              >
                              <span class="flex-box__cell font-weight-medium">
                                400,000 원
                              </span>
                            </span>
                            <span
                              class="display-block text-body-5 color-gray-secondary row-margin-mini"
                            >
                              1열 풀 폴딩 시트, 2열 슬라이딩 & 리클라이닝 시트,
                              USB 충전기(2열 1개)
                            </span>
                            <span class="flex-box row-margin-mini">
                              <span
                                class="flex-box__cell text-body-5 color-green"
                              >
                                연계된 옵션 선택 필요
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
                          id="leaseRentEstimationSystemTestDriveCarOption003"
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
                              class="display-block text-body-5 color-gray-secondary row-margin-mini"
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
                          id="leaseRentEstimationSystemTestDriveCarOption004"
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
                              class="display-block text-body-5 color-gray-secondary row-margin-mini"
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
                        <span class="flex-box text-body-4">
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
                            target="#leaseRentEstimationSystemTestDriveCarOptionETC"
                            :forceFocus="true"
                          >
                            <FormInvalid :error="state.optionETCError">
                              <InputBlock :error="state.optionETCError">
                                <InputBlockCell :flexible="true">
                                  <BasicInput
                                    title="옵션 명칭"
                                    id="leaseRentEstimationSystemTestDriveCarOptionETC"
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
                            target="#leaseRentEstimationSystemTestDriveCarOptionETCPrice"
                            :forceFocus="true"
                          >
                            <FormInvalid :error="state.optionETCPriceError">
                              <InputBlock :error="state.optionETCPriceError">
                                <InputBlockCell :flexible="true">
                                  <BasicInput
                                    title="금액"
                                    id="leaseRentEstimationSystemTestDriveCarOptionETCPrice"
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
                        <span class="flex-box text-body-4">
                          <span
                            class="flex-box__cell flex-1 font-weight-regular"
                            >현대 스마트 센서 I</span
                          >
                          <span class="flex-box__cell font-weight-medium">
                            700,000 원
                          </span>
                        </span>
                        <span
                          class="display-block text-body-5 color-gray-secondary row-margin-mini"
                        >
                          전방 충돌방지 보조(교차로대향차), 후측방 충돌방지
                          보조, 후방 교차 충돌방지 보조, 안전 하차 경고, 스마트
                          크루즈 컨트롤(스탑앤고 기능 미포함), 내비게이션 기반
                          스마트 크루즈 컨트롤(안전구간, 곡선로)
                        </span>
                      </div>
                    </li>
                    <li :class="$style['option-select__item']">
                      <div :class="$style['option-select__block']">
                        <span class="flex-box text-body-4">
                          <span
                            class="flex-box__cell flex-1 font-weight-regular"
                            >컴포트</span
                          >
                          <span class="flex-box__cell font-weight-medium">
                            400,000 원
                          </span>
                        </span>
                        <span
                          class="display-block text-body-5 color-gray-secondary row-margin-mini"
                        >
                          1열 풀 폴딩 시트, 2열 슬라이딩 & 리클라이닝 시트, USB
                          충전기(2열 1개)
                        </span>
                        <span class="flex-box row-margin-mini">
                          <span class="flex-box__cell text-body-5 color-green">
                            연계된 옵션 선택 필요
                          </span>
                        </span>
                      </div>
                    </li>
                    <li :class="$style['option-select__item']">
                      <div :class="$style['option-select__block']">
                        <span class="flex-box text-body-4">
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
              <div class="flex-box align-items-start row-margin-item-group">
                <div class="flex-box__cell flex-1">
                  <h4 class="text-body-4 font-weight-medium">
                    대리점 출고시 할인
                  </h4>
                </div>
                <div class="flex-box__cell flex-box__cell--medium">
                  <CheckBox
                    id="leaseRentEstimationSystemTestDriveCarDeliveryDiscountOnOff"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>개소세 감면액 포함</CheckBoxLabelText>
                  </CheckBox>
                </div>
              </div>
              <ul class="reset-list">
                <li class="row-margin-item-group">
                  <div class="flex-box align-items-start">
                    <div class="flex-box__cell">
                      <RadioButton
                        theme="tertiary"
                        :onlyObject="true"
                        name="leaseRentEstimationSystemTestDriveCarDeliveryDiscount"
                        id="leaseRentEstimationSystemTestDriveCarDeliveryDiscount001"
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
                          target="#leaseRentEstimationSystemTestDriveCarDeliveryDiscountPrice"
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
                                  id="leaseRentEstimationSystemTestDriveCarDeliveryDiscountPrice"
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
                      <!-- // Case : 할인액 선택시 :disabled="false" -->
                    </div>
                  </div>
                </li>
                <li class="row-margin-item-group">
                  <div class="flex-box align-items-start">
                    <div class="flex-box__cell">
                      <RadioButton
                        theme="tertiary"
                        :onlyObject="true"
                        name="leaseRentEstimationSystemTestDriveCarDeliveryDiscount"
                        id="leaseRentEstimationSystemTestDriveCarDeliveryDiscount002"
                      >
                        <RadioButtonObject />
                        <RadioButtonLabelText>할인액</RadioButtonLabelText>
                      </RadioButton>
                    </div>
                    <div
                      class="flex-box__cell flex-box__cell--small-regular flex-1"
                    >
                      <!-- Case : 할인율 선택시 :disabled="false" -->
                      <FormList>
                        <FormListItem
                          titleText="할인율"
                          target="#leaseRentEstimationSystemTestDriveCarDeliveryDiscountRatio"
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
                                  id="leaseRentEstimationSystemTestDriveCarFeeCMRatio"
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
                                  id="leaseRentEstimationSystemTestDriveCarFeeCMPrice"
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
                              <!-- // Case : 할인율 선택시 :disabled="false" 기능 제외 -->
                            </InputBlock>
                            <FormInvalidMessage>
                              Error Message
                            </FormInvalidMessage>
                          </FormInvalid>
                        </FormListItem>
                      </FormList>
                      <!-- // Case : 할인율 선택시 :disabled="false" -->
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
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>개소세감면</KeyValueTitle>
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
            <h2 class="text-title-2">상품 설정</h2>
          </div>
          <div class="flex-box__cell">
            <SettingButton />
          </div>
        </div>
        <div :class="[$style['estimate-list'], $style['estimate-list--full']]">
          <UiAccordion :classNames="{ wrap: $style['estimate-list__list'] }">
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
                          <BoxCheckList spacing="small">
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                name="leaseRentEstimationSystemTestDriveCarProduct"
                                id="leaseRentEstimationSystemTestDriveCarProduct_001"
                                size="small"
                                :defaultChecked="true"
                              >
                                <BoxCheckLabel>운용리스</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                name="leaseRentEstimationSystemTestDriveCarProduct"
                                id="leaseRentEstimationSystemTestDriveCarProduct_002"
                                size="small"
                              >
                                <BoxCheckLabel>금융리스</BoxCheckLabel>
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
                                name="leaseRentEstimationSystemTestDriveCarCustomerType"
                                id="leaseRentEstimationSystemTestDriveCarCustomerType_001"
                                size="small"
                                :defaultChecked="true"
                              >
                                <BoxCheckLabel>개인</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                name="leaseRentEstimationSystemTestDriveCarCustomerType"
                                id="leaseRentEstimationSystemTestDriveCarCustomerType_002"
                                size="small"
                              >
                                <BoxCheckLabel>개인사업자</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                name="leaseRentEstimationSystemTestDriveCarCustomerType"
                                id="leaseRentEstimationSystemTestDriveCarCustomerType_003"
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
                          <div>
                            <BoxCheckList spacing="small">
                              <BoxCheckListItem>
                                <BoxCheck
                                  :minSide="true"
                                  name="leaseRentEstimationSystemTestDriveCarRegistName"
                                  id="leaseRentEstimationSystemTestDriveCarRegistName_001"
                                  size="small"
                                  :defaultChecked="true"
                                >
                                  <BoxCheckLabel>금융회사</BoxCheckLabel>
                                </BoxCheck>
                              </BoxCheckListItem>
                              <BoxCheckListItem>
                                <BoxCheck
                                  :minSide="true"
                                  name="leaseRentEstimationSystemTestDriveCarRegistName"
                                  id="leaseRentEstimationSystemTestDriveCarRegistName_002"
                                  size="small"
                                >
                                  <BoxCheckLabel>리스이용자</BoxCheckLabel>
                                </BoxCheck>
                              </BoxCheckListItem>
                            </BoxCheckList>
                            <!-- Case : { 등록명의 : 리스이용자 } 선택시 노출 -->
                            <div class="row-margin-item">
                              <CheckBox
                                id="leaseRentEstimationSystemTestDriveCarCommercialLicensePlate"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >영업용 번호판</CheckBoxLabelText
                                >
                              </CheckBox>
                            </div>
                            <!-- // Case : { 등록명의 : 리스이용자 } 선택시 노출 -->
                          </div>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 등록명의 -->

            <!-- 자동차세 -->
            <li :class="$style['estimate-list__item']">
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">자동차세</div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <!-- Case : 기본 -->
                          <BoxCheckList spacing="small">
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                name="leaseRentEstimationSystemTestDriveCarCarTax"
                                id="leaseRentEstimationSystemTestDriveCarCarTax_001"
                                size="small"
                                :defaultChecked="true"
                              >
                                <BoxCheckLabel>포함</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                name="leaseRentEstimationSystemTestDriveCarCarTax"
                                id="leaseRentEstimationSystemTestDriveCarCarTax_002"
                                size="small"
                              >
                                <BoxCheckLabel>고객별도</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                          </BoxCheckList>
                          <!-- //Case : 기본 -->

                          <!-- Case : { 상품 : 운용리스 - 금융회사, 금융리스 - 리스이용자 } 선택시 노출 -->
                          <div>고객별도</div>
                          <!-- //Case : { 상품 : 운용리스 - 금융회사, 금융리스 - 리스이용자 } 선택시 노출 -->
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 자동차세 -->

            <!-- Case : 수입차 선택시 노출 -->
            <!-- 제휴사 -->
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
                        name="leaseRentEstimationSystemTestDriveCarCheck001"
                        id="leaseRentEstimationSystemTestDriveCarCheck001_001"
                        size="small"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>코오롱글로벌(주)</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemTestDriveCarCheck001"
                        id="leaseRentEstimationSystemTestDriveCarCheck001_002"
                        size="small"
                      >
                        <BoxCheckLabel>한성모터스주식회사</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemTestDriveCarCheck001"
                        id="leaseRentEstimationSystemTestDriveCarCheck001_003"
                        size="small"
                      >
                        <BoxCheckLabel>한성모터스주식회사</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemTestDriveCarCheck001"
                        id="leaseRentEstimationSystemTestDriveCarCheck001_004"
                        size="small"
                      >
                        <BoxCheckLabel>선택하지 않음</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                  </BoxCheckList>
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
            <!-- // 제휴사 -->
            <!-- // Case : 수입차 선택시 노출 -->

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
                          CM : (0.03%) 690,000<br />
                          AG : (0%) 0
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
                  <!-- Case : { 상품 : 운용리스 } 선택시 노출 -->
                  <NoticeText :classNames="{ wrap: 'row-margin-item-group' }"
                    >한도: AG+CM 9.9% 이내 (단 AG 3% 이내)</NoticeText
                  >
                  <!-- // Case : { 상품 : 운용리스 } 선택시 노출 -->

                  <!-- Case : { 상품 : 금융리스 } 선택시 노출 -->
                  <NoticeText :classNames="{ wrap: 'row-margin-item-group' }"
                    >한도: 500만원까지 3%, 500만원 초과 최대 2.25%</NoticeText
                  >
                  <!-- // Case : { 상품 : 금융리스 } 선택시 노출 -->

                  <FormList>
                    <FormListItem
                      titleText="CM"
                      target="#leaseRentEstimationSystemTestDriveCarFeeCMRatio"
                    >
                      <FormInvalid :error="state.feeCMError">
                        <InputBlock :error="state.feeCMError">
                          <InputBlockCell>
                            <BasicInput
                              type="number"
                              title="CM 비율(%)"
                              id="leaseRentEstimationSystemTestDriveCarFeeCMRatio"
                              pattern="\d*"
                              :useDelete="false"
                              align="right"
                              defaultValue="0"
                              :classNames="{ wrap: 'input-width-ratio' }"
                            />
                          </InputBlockCell>
                          <InputBlockCell>
                            <div class="text-body-3">%</div>
                          </InputBlockCell>
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="CM 금액"
                              id="leaseRentEstimationSystemTestDriveCarFeeCMPrice"
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
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                    <!-- Case : "견적 기본설정"에서 AG 표시하지 않음 선택시 비노출 -->
                    <FormListItem
                      titleText="AG"
                      target="#leaseRentEstimationSystemTestDriveCarFeeAGRatio"
                    >
                      <FormInvalid :error="state.feeAGError">
                        <InputBlock :error="state.feeAGError">
                          <InputBlockCell>
                            <BasicInput
                              type="number"
                              title="AG 비율(%)"
                              id="leaseRentEstimationSystemTestDriveCarFeeAGRatio"
                              pattern="\d*"
                              :useDelete="false"
                              align="right"
                              defaultValue="0"
                              :classNames="{ wrap: 'input-width-ratio' }"
                            />
                          </InputBlockCell>
                          <InputBlockCell>
                            <div class="text-body-3">%</div>
                          </InputBlockCell>
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="AG 금액"
                              id="leaseRentEstimationSystemTestDriveCarFeeAGPrice"
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
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                    <!-- // Case : "견적 기본설정"에서 AG 표시하지 않음 선택시 비노출 -->
                  </FormList>
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
            <!-- // 수수료 -->
            <!-- // Case : "견적 기본설정"에서 수수료 표시하지 않음 선택시 비노출 -->

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
                          CM : (0%) 0 원<br />
                          AG : (0%) 0 원
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
                  <!-- Case : { 상품 : 운용리스 } 선택시 노출 -->
                  <NoticeText :classNames="{ wrap: 'row-margin-item-group' }"
                    >한도: AG+CM 9.9% 이내 (단 AG 3% 이내)</NoticeText
                  >
                  <!-- // Case : { 상품 : 운용리스 } 선택시 노출 -->

                  <!-- Case : { 상품 : 금융리스 } 선택시 노출 -->
                  <NoticeText :classNames="{ wrap: 'row-margin-item-group' }"
                    >한도: 500만원까지 3%, 500만원 초과 최대 2.25%</NoticeText
                  >
                  <!-- // Case : { 상품 : 금융리스 } 선택시 노출 -->

                  <FormList>
                    <FormListItem
                      titleText="CM"
                      target="#leaseRentEstimationSystemTestDriveCarETCCMRatio"
                    >
                      <FormInvalid :error="state.etcCMError">
                        <InputBlock :error="state.etcCMError">
                          <InputBlockCell>
                            <BasicInput
                              type="number"
                              title="CM 비율(%)"
                              id="leaseRentEstimationSystemTestDriveCarETCCMRatio"
                              pattern="\d*"
                              :useDelete="false"
                              align="right"
                              defaultValue="0"
                              :classNames="{ wrap: 'input-width-ratio' }"
                            />
                          </InputBlockCell>
                          <InputBlockCell>
                            <div class="text-body-3">%</div>
                          </InputBlockCell>
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="CM 금액"
                              id="leaseRentEstimationSystemTestDriveCarETCCMPrice"
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
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                    <FormListItem
                      titleText="AG"
                      target="#leaseRentEstimationSystemTestDriveCarETCAGRatio"
                    >
                      <FormInvalid :error="state.etcAGError">
                        <InputBlock :error="state.etcAGError">
                          <InputBlockCell>
                            <BasicInput
                              type="number"
                              title="AG 비율(%)"
                              id="leaseRentEstimationSystemTestDriveCarETCAGRatio"
                              pattern="\d*"
                              :useDelete="false"
                              align="right"
                              defaultValue="0"
                              :classNames="{ wrap: 'input-width-ratio' }"
                            />
                          </InputBlockCell>
                          <InputBlockCell>
                            <div class="text-body-3">%</div>
                          </InputBlockCell>
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="AG 금액"
                              id="leaseRentEstimationSystemTestDriveCarETCAGPrice"
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
                        name="leaseRentEstimationSystemTestDriveCarCheck002"
                        id="leaseRentEstimationSystemTestDriveCarCheck002_001"
                        size="small"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>대구지점</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemTestDriveCarCheck002"
                        id="leaseRentEstimationSystemTestDriveCarCheck002_002"
                        size="small"
                      >
                        <BoxCheckLabel>강남지점</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemTestDriveCarCheck002"
                        id="leaseRentEstimationSystemTestDriveCarCheck002_003"
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
                          <KeyValue>
                            <KeyValueItem :classNames="{ item: 'text-body-3' }">
                              <KeyValueTitle>
                                <div class="color-black">고객별도</div>
                              </KeyValueTitle>
                              <KeyValueText>
                                <strong>0 원</strong>
                              </KeyValueText>
                            </KeyValueItem>
                          </KeyValue>
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
                          서울 (매입 12% 4,830,000)
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
                        name="leaseRentEstimationSystemTestDriveCarCheck003"
                        id="leaseRentEstimationSystemTestDriveCarCheck003_001"
                        size="small"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>서울</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemTestDriveCarCheck003"
                        id="leaseRentEstimationSystemTestDriveCarCheck003_002"
                        size="small"
                      >
                        <BoxCheckLabel>수원</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemTestDriveCarCheck003"
                        id="leaseRentEstimationSystemTestDriveCarCheck003_003"
                        size="small"
                      >
                        <BoxCheckLabel>인천</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemTestDriveCarCheck003"
                        id="leaseRentEstimationSystemTestDriveCarCheck003_004"
                        size="small"
                      >
                        <BoxCheckLabel>대전</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemTestDriveCarCheck003"
                        id="leaseRentEstimationSystemTestDriveCarCheck003_005"
                        size="small"
                      >
                        <BoxCheckLabel>부산</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemTestDriveCarCheck003"
                        id="leaseRentEstimationSystemTestDriveCarCheck003_006"
                        size="small"
                      >
                        <BoxCheckLabel>대구</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemTestDriveCarCheck003"
                        id="leaseRentEstimationSystemTestDriveCarCheck003_007"
                        size="small"
                      >
                        <BoxCheckLabel>함양</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemTestDriveCarCheck003"
                        id="leaseRentEstimationSystemTestDriveCarCheck003_008"
                        size="small"
                      >
                        <BoxCheckLabel>창원</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemTestDriveCarCheck003"
                        id="leaseRentEstimationSystemTestDriveCarCheck003_009"
                        size="small"
                      >
                        <BoxCheckLabel>광주</BoxCheckLabel>
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
                          <div class="row-margin-item-group">고객별도</div>

                          <FormList>
                            <FormListItem
                              titleText="할인율"
                              target="#leaseRentEstimationSystemTestDriveCarPublicBondDiscountRatio"
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
                                      id="leaseRentEstimationSystemTestDriveCarPublicBondDiscountRatio"
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
                                      id="leaseRentEstimationSystemTestDriveCarPublicBondDiscountPrice"
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
                          <div class="row-margin-item-group">고객별도</div>
                          <FormList>
                            <FormListItem
                              titleText="금액"
                              target="#leaseRentEstimationSystemTestDriveCarEtcPrice"
                            >
                              <FormInvalid :error="state.etcPriceError">
                                <InputBlock :error="state.etcPriceError">
                                  <InputBlockCell :flexible="true">
                                    <BasicInput
                                      title="기타비용 금액"
                                      id="leaseRentEstimationSystemTestDriveCarEtcPrice"
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
                                  name="leaseRentEstimationSystemTestDriveCarInterestSubsidy"
                                  id="leaseRentEstimationSystemTestDriveCarInterestSubsidy_001"
                                  size="small"
                                  :defaultChecked="true"
                                >
                                  <BoxCheckLabel>N</BoxCheckLabel>
                                </BoxCheck>
                              </BoxCheckListItem>
                              <BoxCheckListItem>
                                <BoxCheck
                                  :minSide="true"
                                  name="leaseRentEstimationSystemTestDriveCarInterestSubsidy"
                                  id="leaseRentEstimationSystemTestDriveCarInterestSubsidy_002"
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
                              target="#leaseRentEstimationSystemTestDriveCarInterestSubsidyPrice"
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
                                      id="leaseRentEstimationSystemTestDriveCarInterestSubsidyPrice"
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
                          <!-- // Case : Y 선택시 :disabled="false" -->
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 이손금 -->

            <!-- 용품지원 -->
            <li :class="$style['estimate-list__item']">
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">용품지원</div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <div class="row-margin-item-group">
                            <BoxCheckList spacing="small">
                              <BoxCheckListItem>
                                <BoxCheck
                                  :minSide="true"
                                  name="leaseRentEstimationSystemTestDriveCarSuppliesSupport"
                                  id="leaseRentEstimationSystemTestDriveCarSuppliesSupport_001"
                                  size="small"
                                  :defaultChecked="true"
                                >
                                  <BoxCheckLabel>N</BoxCheckLabel>
                                </BoxCheck>
                              </BoxCheckListItem>
                              <BoxCheckListItem>
                                <BoxCheck
                                  :minSide="true"
                                  name="leaseRentEstimationSystemTestDriveCarSuppliesSupport"
                                  id="leaseRentEstimationSystemTestDriveCarSuppliesSupport_002"
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
                              target="#leaseRentEstimationSystemTestDriveCarSuppliesSupportPrice"
                              :disabled="true"
                            >
                              <FormInvalid :error="state.suppliesSupportError">
                                <InputBlock
                                  :error="state.suppliesSupportError"
                                  :disabled="true"
                                >
                                  <InputBlockCell :flexible="true">
                                    <BasicInput
                                      title="용품지원 금액"
                                      id="leaseRentEstimationSystemTestDriveCarSuppliesSupportPrice"
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
                          <!-- // Case : Y 선택시 :disabled="false" -->
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 용품지원 -->

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
                          <div class="row-margin-item-group">고객별도</div>
                          <FormList>
                            <FormListItem
                              titleText="금액"
                              target="#leaseRentEstimationSystemTestDriveCarAdvancePaymentPrice"
                            >
                              <FormInvalid :error="state.advancePaymentError">
                                <InputBlock :error="state.advancePaymentError">
                                  <InputBlockCell :flexible="true">
                                    <BasicInput
                                      title="탁송료 금액"
                                      id="leaseRentEstimationSystemTestDriveCarAdvancePaymentPrice"
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

            <!-- Case : { 상품 : 금융리스 } 선택시 노출 -->
            <!-- 선수금 -->
            <li :class="$style['estimate-list__item']">
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">선수금</div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <FormList>
                            <FormListItem
                              titleText="금액"
                              target="#leaseRentEstimationSystemTestDriveCarPrePaymentPrice"
                            >
                              <FormInvalid :error="state.prePaymentError">
                                <InputBlock :error="state.prePaymentError">
                                  <InputBlockCell :flexible="true">
                                    <BasicInput
                                      title="선수금 금액"
                                      id="leaseRentEstimationSystemTestDriveCarPrePaymentPrice"
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
            <!-- // 선수금 -->
            <!-- // Case : { 상품 : 금융리스 } 선택시 노출 -->
          </UiAccordion>
        </div>

        <div :class="[$style['total'], 'row-margin-none']">
          <KeyValue verticalAlign="center">
            <!-- Case : 취득원가 계산 전 -->
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle
                :classNames="{
                  title: 'color-black font-weight-bold',
                }"
              >
                취득원가
              </KeyValueTitle>
              <KeyValueText>
                <BasicButton size="mini" inline="true">계산하기</BasicButton>

                <!-- Case : 로딩중 -->
                <BasicButton size="mini" inline="true">
                  계산중
                  <template v-slot:rightIcon>
                    <div :class="$style['loading-icon']"></div>
                  </template>
                </BasicButton>
                <!-- //Case : 로딩중 -->
              </KeyValueText>
            </KeyValueItem>
            <!-- //Case : 취득원가 계산 전 -->

            <!-- Case : 취득원가 계산 후 -->
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle
                :classNames="{
                  title: 'color-black font-weight-bold',
                }"
              >
                취득원가
              </KeyValueTitle>
              <KeyValueText>
                <div class="color-green">
                  <UnitText rightUnit="원" align="right">69,000,000</UnitText>
                </div>
              </KeyValueText>
            </KeyValueItem>
            <!-- //Case : 취득원가 계산 후 -->
          </KeyValue>
        </div>
      </section>

      <section class="row-margin-container-medium">
        <div class="flex-box row-margin-contents">
          <div class="flex-box__cell flex-1">
            <h2 class="text-title-2">상품 선택</h2>
          </div>
          <div class="flex-box__cell">
            <IconScroll class="display-block" />
          </div>
        </div>

        <!-- Case : 차량 선택 전 -->
        <div :class="$style['empty']">
          <p :class="$style['empty__text']">차량을 선택해 주세요.</p>
        </div>
        <!-- // Case : 차량 선택 전 -->

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
                        {{ i }}번 상품
                      </h3>
                    </div>
                    <div class="flex-box__cell">
                      <div class="text-body-5 color-gray">견적 비교 추가</div>
                    </div>
                    <div class="flex-box__cell">
                      <SwitchCheckBox
                        theme="secondary"
                        :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_On`"
                        :classNames="{ wrap: 'display-block' }"
                      />
                    </div>
                  </div>
                </div>

                <UiAccordion
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
                                <!-- Case : 운용리스 -->
                                <div>운용리스</div>
                                <!-- // Case : 운용리스 -->

                                <!-- Case : 금융리스 -->
                                <div>금융리스</div>
                                <!-- // Case : 금융리스 -->
                              </KeyValueText>
                            </KeyValueItem>
                          </KeyValue>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- // 상품 -->

                  <!-- 만기 -->
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
                                <div class="text-body-4">만기</div>
                              </KeyValueTitle>
                              <KeyValueText>
                                <!-- Case : 운용리스 -->
                                <div>재리스/구매/반납</div>
                                <!-- // Case : 운용리스 -->

                                <!-- Case : 금융리스 -->
                                <div>구매</div>
                                <!-- // Case : 금융리스 -->
                              </KeyValueText>
                            </KeyValueItem>
                          </KeyValue>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- // 만기 -->

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
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check001`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check001_001`"
                              size="small"
                            >
                              <BoxCheckLabel>12개월</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check001`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check001_002`"
                              size="small"
                            >
                              <BoxCheckLabel>24개월</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check001`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check001_003`"
                              size="small"
                              :defaultChecked="true"
                            >
                              <BoxCheckLabel>36개월</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check001`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check001_004`"
                              size="small"
                            >
                              <BoxCheckLabel>48개월</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check001`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check001_005`"
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

                  <!-- Case : 운용리스 : start -->

                  <!-- 약정거리 -->
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
                                <div class="text-body-4">약정거리</div>
                              </KeyValueTitle>
                              <KeyValueText>20,000 km/년</KeyValueText>
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
                        <BoxCheckList spacing="small">
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check002`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check002_001`"
                              size="small"
                            >
                              <BoxCheckLabel>20,000 km</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check002`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check002_002`"
                              size="small"
                              :defaultChecked="true"
                            >
                              <BoxCheckLabel>30,000 km</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check002`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check002_003`"
                              size="small"
                            >
                              <BoxCheckLabel>40,000 km</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                        </BoxCheckList>
                      </section>
                    </UiAccordionLayer>
                  </UiAccordionItem>
                  <!-- // 약정거리 -->

                  <!-- 선납금 -->
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
                                <div class="text-body-4">선납금</div>
                              </KeyValueTitle>
                              <KeyValueText>
                                <div class="flex-box">
                                  <div class="flex-box__cell flex-1">0%</div>
                                  <div class="flex-box__cell">
                                    <strong>0 원</strong>
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
                            :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                            :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_000`"
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
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_001`"
                              size="small"
                            >
                              <BoxCheckLabel>5%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_002`"
                              size="small"
                            >
                              <BoxCheckLabel>10%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_003`"
                              size="small"
                            >
                              <BoxCheckLabel>15%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_004`"
                              size="small"
                            >
                              <BoxCheckLabel>20%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_005`"
                              size="small"
                            >
                              <BoxCheckLabel>25%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_006`"
                              size="small"
                            >
                              <BoxCheckLabel>30%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_007`"
                              size="small"
                            >
                              <BoxCheckLabel>35%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_008`"
                              size="small"
                            >
                              <BoxCheckLabel>40%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_009`"
                              size="small"
                            >
                              <BoxCheckLabel>45%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_010`"
                              size="small"
                            >
                              <BoxCheckLabel>50%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_011`"
                              size="small"
                            >
                              <BoxCheckLabel>55%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_012`"
                              size="small"
                            >
                              <BoxCheckLabel>60%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_013`"
                              size="small"
                            >
                              <BoxCheckLabel>65%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_014`"
                              size="small"
                            >
                              <BoxCheckLabel>70%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_015`"
                              size="small"
                            >
                              <BoxCheckLabel>75%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_016`"
                              size="small"
                            >
                              <BoxCheckLabel>80%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_017`"
                              size="small"
                            >
                              <BoxCheckLabel>85%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_018`"
                              size="small"
                            >
                              <BoxCheckLabel>90%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_019`"
                              size="small"
                            >
                              <BoxCheckLabel>95%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check003_020`"
                              size="small"
                            >
                              <BoxCheckLabel>100%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                        </BoxCheckList>

                        <FormList
                          :classNames="{ wrap: 'row-margin-item-group' }"
                        >
                          <FormListItem
                            titleText="비율"
                            :target="`#leaseRentEstimationSystemTestDriveCarProducts${i}_prepaymentsRatioButton`"
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
                                    buttonTitle="선납금 비율 선택하기"
                                    layerTitle="선납금 비율을 선택해 주세요"
                                    :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_prepaymentsRatio`"
                                    :buttonId="`leaseRentEstimationSystemTestDriveCarProducts${i}_prepaymentsRatioButton`"
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
                            :target="`#leaseRentEstimationSystemTestDriveCarProducts${i}_prepaymentsPriceButton`"
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
                                    buttonTitle="선납금 금액 선택하기"
                                    layerTitle="선납금 금액을 선택해 주세요"
                                    :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_prepaymentsPrice`"
                                    :buttonId="`leaseRentEstimationSystemTestDriveCarProducts${i}_prepaymentsPriceButton`"
                                  />
                                </InputBlockCell>
                              </InputBlock>
                              <FormInvalidMessage
                                >Error Message</FormInvalidMessage
                              >
                            </FormInvalid>
                          </FormListItem>
                          <FormListItem
                            titleText="선납금 수기입력"
                            :target="`#leaseRentEstimationSystemTestDriveCarProducts${i}_prepaymentsPriceInput`"
                          >
                            <FormInvalid
                              :error="state.prepaymentsPriceInputError[i]"
                            >
                              <InputBlock
                                :error="state.prepaymentsPriceInputError[i]"
                              >
                                <InputBlockCell :flexible="true">
                                  <BasicInput
                                    title="선납금 수기입력"
                                    :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_prepaymentsPriceInput`"
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
                  <!-- // 선납금 -->

                  <!-- 보증금 -->
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
                                <div class="text-body-4">보증금</div>
                              </KeyValueTitle>
                              <KeyValueText>
                                <div class="flex-box">
                                  <div class="flex-box__cell flex-1">0%</div>
                                  <div class="flex-box__cell">
                                    <strong>0 원</strong>
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
                            :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004`"
                            :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004_000`"
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
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004_001`"
                              size="small"
                            >
                              <BoxCheckLabel>5%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004_002`"
                              size="small"
                            >
                              <BoxCheckLabel>10%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004_003`"
                              size="small"
                            >
                              <BoxCheckLabel>15%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004_004`"
                              size="small"
                            >
                              <BoxCheckLabel>20%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004_005`"
                              size="small"
                            >
                              <BoxCheckLabel>25%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004_006`"
                              size="small"
                            >
                              <BoxCheckLabel>30%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004_007`"
                              size="small"
                            >
                              <BoxCheckLabel>35%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004_008`"
                              size="small"
                            >
                              <BoxCheckLabel>40%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004_009`"
                              size="small"
                            >
                              <BoxCheckLabel>45%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004_010`"
                              size="small"
                            >
                              <BoxCheckLabel>50%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004_011`"
                              size="small"
                            >
                              <BoxCheckLabel>55%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004_012`"
                              size="small"
                            >
                              <BoxCheckLabel>60%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004_013`"
                              size="small"
                            >
                              <BoxCheckLabel>65%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004_014`"
                              size="small"
                            >
                              <BoxCheckLabel>70%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004_015`"
                              size="small"
                            >
                              <BoxCheckLabel>75%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004_016`"
                              size="small"
                            >
                              <BoxCheckLabel>80%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004_017`"
                              size="small"
                            >
                              <BoxCheckLabel>85%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004_018`"
                              size="small"
                            >
                              <BoxCheckLabel>90%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check004_019`"
                              size="small"
                            >
                              <BoxCheckLabel>95%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                        </BoxCheckList>

                        <FormList
                          :classNames="{ wrap: 'row-margin-item-group' }"
                        >
                          <FormListItem
                            titleText="비율"
                            :target="`#leaseRentEstimationSystemTestDriveCarProducts${i}_depositRatioButton`"
                            :selectOnly="true"
                          >
                            <FormInvalid :error="state.depositRatioError[i]">
                              <InputBlock :error="state.depositRatioError[i]">
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
                                    buttonTitle="보증금 비율 선택하기"
                                    layerTitle="보증금 비율을 선택해 주세요"
                                    :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_depositRatio`"
                                    :buttonId="`leaseRentEstimationSystemTestDriveCarProducts${i}_depositRatioButton`"
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
                            :target="`#leaseRentEstimationSystemTestDriveCarProducts${i}_depositPriceButton`"
                            :selectOnly="true"
                          >
                            <FormInvalid :error="state.depositPriceError[i]">
                              <InputBlock :error="state.depositPriceError[i]">
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
                                        text: '362만원',
                                      },
                                    ]"
                                    buttonTitle="보증금 금액 선택하기"
                                    layerTitle="보증금 금액을 선택해 주세요"
                                    :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_depositPrice`"
                                    :buttonId="`leaseRentEstimationSystemTestDriveCarProducts${i}_depositPriceButton`"
                                  />
                                </InputBlockCell>
                              </InputBlock>
                              <FormInvalidMessage
                                >Error Message</FormInvalidMessage
                              >
                            </FormInvalid>
                          </FormListItem>
                          <FormListItem
                            titleText="보증금 수기입력"
                            :target="`#leaseRentEstimationSystemTestDriveCarProducts${i}_depositPriceInput`"
                          >
                            <FormInvalid
                              :error="state.depositPriceInputError[i]"
                            >
                              <InputBlock
                                :error="state.depositPriceInputError[i]"
                              >
                                <InputBlockCell :flexible="true">
                                  <BasicInput
                                    title="보증금 수기입력"
                                    :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_depositPriceInput`"
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
                  <!-- // 보증금 -->

                  <!-- 잔존가치 -->
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
                                <div class="text-body-4">잔존가치</div>
                              </KeyValueTitle>
                              <KeyValueText>
                                <div class="flex-box">
                                  <div class="flex-box__cell flex-1">
                                    최대(49%)
                                  </div>
                                  <div class="flex-box__cell">
                                    <strong>9,321,500 원</strong>
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
                            :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006`"
                            :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006_000`"
                            size="small"
                            :defaultChecked="true"
                          >
                            <BoxCheckLabel>최대(49%)</BoxCheckLabel>
                          </BoxCheck>
                        </div>
                        <BoxCheckList spacing="small" :wrap="true" :col="4">
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006_001`"
                              size="small"
                            >
                              <BoxCheckLabel>48%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006_002`"
                              size="small"
                            >
                              <BoxCheckLabel>47%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006_003`"
                              size="small"
                            >
                              <BoxCheckLabel>46%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006_004`"
                              size="small"
                            >
                              <BoxCheckLabel>45%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006_005`"
                              size="small"
                            >
                              <BoxCheckLabel>44%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006_006`"
                              size="small"
                            >
                              <BoxCheckLabel>43%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006_007`"
                              size="small"
                            >
                              <BoxCheckLabel>42%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006_008`"
                              size="small"
                            >
                              <BoxCheckLabel>41%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006_009`"
                              size="small"
                            >
                              <BoxCheckLabel>39%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006_010`"
                              size="small"
                            >
                              <BoxCheckLabel>38%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006_011`"
                              size="small"
                            >
                              <BoxCheckLabel>37%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006_012`"
                              size="small"
                            >
                              <BoxCheckLabel>36%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006_013`"
                              size="small"
                            >
                              <BoxCheckLabel>35%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006_014`"
                              size="small"
                            >
                              <BoxCheckLabel>34%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006_015`"
                              size="small"
                            >
                              <BoxCheckLabel>33%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006_016`"
                              size="small"
                            >
                              <BoxCheckLabel>32%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006_017`"
                              size="small"
                            >
                              <BoxCheckLabel>31%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_check006_018`"
                              size="small"
                            >
                              <BoxCheckLabel>30%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                        </BoxCheckList>

                        <FormList
                          :classNames="{ wrap: 'row-margin-item-group' }"
                        >
                          <FormListItem
                            titleText="비율"
                            :target="`#leaseRentEstimationSystemTestDriveCarProducts${i}_residualValueRatioButton`"
                            :selectOnly="true"
                          >
                            <FormInvalid
                              :error="state.residualValueRatioError[i]"
                            >
                              <InputBlock
                                :error="state.residualValueRatioError[i]"
                              >
                                <InputBlockCell :flexible="true">
                                  <BasicSelect
                                    :option="[
                                      {
                                        value: '0',
                                        text: '51%',
                                      },
                                      {
                                        value: '1',
                                        text: '50%',
                                      },
                                      {
                                        value: '2',
                                        text: '49%',
                                      },
                                      {
                                        value: '3',
                                        text: '48%',
                                      },
                                      {
                                        value: '4',
                                        text: '47%',
                                      },
                                      {
                                        value: '5',
                                        text: '46%',
                                      },
                                      {
                                        value: '6',
                                        text: '45%',
                                      },
                                      {
                                        value: '7',
                                        text: '44%',
                                      },
                                      {
                                        value: '8',
                                        text: '43%',
                                      },
                                      {
                                        value: '9',
                                        text: '42%',
                                      },
                                      {
                                        value: '10',
                                        text: '41%',
                                      },
                                      {
                                        value: '11',
                                        text: '40%',
                                      },
                                      {
                                        value: '12',
                                        text: '39%',
                                      },
                                      {
                                        value: '13',
                                        text: '38%',
                                      },
                                      {
                                        value: '14',
                                        text: '37%',
                                      },
                                      {
                                        value: '15',
                                        text: '36%',
                                      },
                                      {
                                        value: '16',
                                        text: '35%',
                                      },
                                      {
                                        value: '17',
                                        text: '34%',
                                      },
                                      {
                                        value: '18',
                                        text: '33%',
                                      },
                                    ]"
                                    buttonTitle="잔존가치 비율 선택하기"
                                    layerTitle="잔존가치 비율을 선택해 주세요"
                                    :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_residualValueRatio`"
                                    :buttonId="`leaseRentEstimationSystemTestDriveCarProducts${i}_residualValueRatioButton`"
                                  />
                                </InputBlockCell>
                              </InputBlock>
                              <FormInvalidMessage
                                >Error Message</FormInvalidMessage
                              >
                            </FormInvalid>
                          </FormListItem>
                          <FormListItem
                            titleText="잔존가치 수기입력"
                            :target="`#leaseRentEstimationSystemTestDriveCarProducts${i}_residualValuePriceInput`"
                          >
                            <FormInvalid
                              :error="state.residualValueInputError[i]"
                            >
                              <InputBlock
                                :error="state.residualValueInputError[i]"
                              >
                                <InputBlockCell :flexible="true">
                                  <BasicInput
                                    title="잔존가치 수기입력"
                                    :id="`leaseRentEstimationSystemTestDriveCarProducts${i}_residualValuePriceInput`"
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
                  <!-- // 잔존가치 -->

                  <!-- // Case : 운용리스 : end -->

                  <!-- 대출원금 -->
                  <li :class="$style['estimate-list__item']">
                    <div :class="$style['estimate-list__head']">
                      <div :class="$style['estimate-list__block']">
                        <div :class="$style['estimate-list__left']">
                          <KeyValue verticalAlign="center">
                            <KeyValueItem :classNames="{ item: 'text-body-3' }">
                              <KeyValueTitle>
                                <div class="text-body-4">대출원금</div>
                              </KeyValueTitle>
                              <KeyValueText>
                                <strong>44,174,224 원</strong>
                              </KeyValueText>
                            </KeyValueItem>
                          </KeyValue>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- // 대출원금 -->

                  <!-- 출고전 납입 -->
                  <li :class="$style['estimate-list__item']">
                    <div :class="$style['estimate-list__head']">
                      <div :class="$style['estimate-list__block']">
                        <div :class="$style['estimate-list__left']">
                          <KeyValue align="left" size="regular">
                            <KeyValueItem :classNames="{ item: 'text-body-3' }">
                              <KeyValueTitle>
                                <div class="text-body-4">출고전<br />납입</div>
                              </KeyValueTitle>
                              <KeyValueText>
                                <KeyValue>
                                  <KeyValueItem
                                    :classNames="{ item: 'text-body-3' }"
                                  >
                                    <KeyValueTitle>
                                      <div class="color-black">
                                        선납금+보증금
                                      </div>
                                    </KeyValueTitle>
                                    <KeyValueText>
                                      <strong>4,426,000 원</strong>
                                    </KeyValueText>
                                  </KeyValueItem>
                                </KeyValue>
                              </KeyValueText>
                            </KeyValueItem>
                          </KeyValue>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- // 출고전 납입 -->
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
                        <BasicButton size="mini" inline="true"
                          >계산하기</BasicButton
                        >
                        <!-- Case : 계산중 -->
                        <BasicButton size="mini" inline="true">
                          계산중
                          <template v-slot:rightIcon>
                            <div :class="$style['loading-icon']"></div>
                          </template>
                        </BasicButton>
                        <!-- // Case : 계산중 -->
                      </KeyValueText>
                    </KeyValueItem>
                    <!-- // Case : 견적 계산 전 -->

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
                        <UnitText rightUnit="원" align="right">
                          880,300
                        </UnitText>
                        <div
                          class="flex-box justify-conten-end text-body-3 font-weight-medium row-margin-mini"
                        >
                          <div class="flex-box__cell">~ 6,438,620</div>
                          <div class="flex-box__cell flex-box__cell--mini">
                            원
                          </div>
                        </div>
                      </KeyValueText>
                    </KeyValueItem>
                    <!-- // Case : 견적 계산 후 -->
                  </KeyValue>
                </div>
              </section>
            </SwiperSlide>
            <!-- // item -->
          </Swiper>
        </div>
        <!-- // Case : 차량 선택 후 -->
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
        <div>// 견적서 영역 추후 작업 예정</div>

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
      <!-- Case : 견적서 보기 선택 후, 디폴트 상태 -->
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
            >견적서발송</BasicButton
          >
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" :disabled="true">견적확정</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 견적서 보기 선택 후, 디폴트 상태 -->

      <!-- Case : 견적 저장 된 상태의 하단 버튼 -->
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :minSide="true" :disabled="true">저장됨</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" theme="tertiary">견적서발송</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true">견적확정</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 견적 저장 된 상태의 하단 버튼 -->

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
            >견적서발송</BasicButton
          >
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" :disabled="true">견적확정</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 견적서 저장 후, 견적서 설정 값 변경의 경우 -->

      <!-- Case : 견적 확정된 상태의 하단 버튼 -->
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :minSide="true" :disabled="true">저장됨</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" theme="tertiary">견적서발송</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true">신용조회요청</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 견적 확정된 상태의 하단 버튼 -->

      <!-- Case : 확정된 상태의 하단 버튼 -->
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :minSide="true" :disabled="true">저장됨</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" theme="tertiary">견적서발송</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" :disabled="true"
            >동의 요청됨</BasicButton
          >
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 확정된 상태의 하단 버튼 -->

      <!-- Case : 재견적 버튼으로 견적 진입 시 -->
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton>재견적 저장</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 재견적 버튼으로 견적 진입 시 -->
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemTestDriveCar.scss';
</style>
