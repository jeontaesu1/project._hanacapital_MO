<script>
// LR_M02_p001
import { reactive, onMounted, onUnmounted, ref } from 'vue';
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
import DocumentView from '@/components/ui/viewer/DocumentView.vue';

import DocumentEstimate001Contents from '@/views/document/DocumentEstimate001Contents.vue';

import LayerLeaseRentEstimationSystemSetting from '@/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemSetting.vue';

import IconScroll from '@/assets/images/icon/scroll.svg?component';

import dummyDataEstimate from '@/assets/_dummyData/견적서asis/견적서HTML샘플(렌트_장기렌트).html?raw';

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
    DocumentView,

    DocumentEstimate001Contents,

    LayerLeaseRentEstimationSystemSetting,

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
      ageError: false,
      viewDocument: false,
      exteriorETCError: false,
      exteriorETCPriceError: false,
      interiorETCError: false,
      interiorETCPriceError: false,
      carAmountPriceError: false,
      optionETCError: false,
      optionETCPriceError: false,
      frontTintingRatioError: false,
      sideTintingRatioError: false,
      deliveryDiscountPriceError: false,
      deliveryDiscountRatioError: false,
      deliveryManufacturerPriceError: false,
      addOptionItemError: false,
      addOptionItemPriceError: false,
      specialModificationError: false,
      specialModificationPriceError: false,
      feeCMError: false,
      feeAGError: false,
      etcCMError: false,
      etcAGError: false,
      prepaymentsRatioError: [false, false, false],
      prepaymentsPriceError: [false, false, false],
      prepaymentsPriceInputError: [false, false, false],
      depositRatioError: [false, false, false],
      depositPriceError: [false, false, false],
      depositPriceInputError: [false, false, false],
      residualValueRatioError: [false, false, false],
      residualValueInputError: [false, false, false],
    });

    const layerSetting = ref(null);

    const layerSettingOpen = (e = {}) => {
      layerSetting.value.layer.open(e.target);
    };

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
      store.ui.header.setTitle(() => '장기 렌트');
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
      layerSetting,
      layerSettingOpen,
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
                  <UiTab>
                    <RoundTab
                      :useUiTab="true"
                      :classNames="{ wrap: 'row-margin-item-group' }"
                    >
                      <RoundTabButton
                        link="leaseRentEstimationSystemRentBrand_001"
                      >
                        국산
                      </RoundTabButton>
                      <RoundTabButton
                        link="leaseRentEstimationSystemRentBrand_002"
                      >
                        수입
                      </RoundTabButton>
                    </RoundTab>

                    <UiTabPanel name="leaseRentEstimationSystemRentBrand_001">
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
                                testAaccordionClose(accordionItemSlotProps)
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

                    <UiTabPanel name="leaseRentEstimationSystemRentBrand_002">
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
                        name="leaseRentEstimationSystemRentLineup"
                        id="leaseRentEstimationSystemRentLineup_001"
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
                        name="leaseRentEstimationSystemRentLineup"
                        id="leaseRentEstimationSystemRentLineup_002"
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
                        name="leaseRentEstimationSystemRentLineup"
                        id="leaseRentEstimationSystemRentLineup_003"
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
                        name="leaseRentEstimationSystemRentLineup"
                        id="leaseRentEstimationSystemRentLineup_004"
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
                        name="leaseRentEstimationSystemRentTrim"
                        id="leaseRentEstimationSystemRentTrim_001"
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
                        name="leaseRentEstimationSystemRentTrim"
                        id="leaseRentEstimationSystemRentTrim_002"
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
                        name="leaseRentEstimationSystemRentTrim"
                        id="leaseRentEstimationSystemRentTrim_003"
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
                        name="leaseRentEstimationSystemRentTrim"
                        id="leaseRentEstimationSystemRentTrim_004"
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
                        name="leaseRentEstimationSystemRentExterior"
                        id="leaseRentEstimationSystemRentExterior_001"
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
                        name="leaseRentEstimationSystemRentExterior"
                        id="leaseRentEstimationSystemRentExterior_002"
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
                        name="leaseRentEstimationSystemRentExterior"
                        id="leaseRentEstimationSystemRentExterior_003"
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
                        name="leaseRentEstimationSystemRentExterior"
                        id="leaseRentEstimationSystemRentExterior_004"
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
                        name="leaseRentEstimationSystemRentExterior"
                        id="leaseRentEstimationSystemRentExterior_005"
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
                        name="leaseRentEstimationSystemRentExterior"
                        id="leaseRentEstimationSystemRentExterior_006"
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
                            name="leaseRentEstimationSystemRentExterior"
                            id="leaseRentEstimationSystemRentExterior_007"
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
                              target="#leaseRentEstimationSystemRentExteriorETC"
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
                                      id="leaseRentEstimationSystemRentExteriorETC"
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
                              target="#leaseRentEstimationSystemRentExteriorETCPrice"
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
                                      id="leaseRentEstimationSystemRentExteriorETCPrice"
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
                        name="leaseRentEstimationSystemRentInterior"
                        id="leaseRentEstimationSystemRentInterior_001"
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
                        name="leaseRentEstimationSystemRentInterior"
                        id="leaseRentEstimationSystemRentInterior_002"
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
                        name="leaseRentEstimationSystemRentInterior"
                        id="leaseRentEstimationSystemRentInterior_003"
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
                        name="leaseRentEstimationSystemRentInterior"
                        id="leaseRentEstimationSystemRentInterior_004"
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
                        name="leaseRentEstimationSystemRentInterior"
                        id="leaseRentEstimationSystemRentInterior_005"
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
                        name="leaseRentEstimationSystemRentInterior"
                        id="leaseRentEstimationSystemRentInterior_006"
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
                            name="leaseRentEstimationSystemRentInterior"
                            id="leaseRentEstimationSystemRentInterior_007"
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
                              target="#leaseRentEstimationSystemRentInteriorETC"
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
                                      id="leaseRentEstimationSystemRentInteriorETC"
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
                              target="#leaseRentEstimationSystemRentInteriorETCPrice"
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
                                      id="leaseRentEstimationSystemRentInteriorETCPrice"
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
                  name="leaseRentEstimationSystemRentCarAmount"
                  id="leaseRentEstimationSystemRentCarAmount_001"
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
                  name="leaseRentEstimationSystemRentCarAmount"
                  id="leaseRentEstimationSystemRentCarAmount_002"
                >
                  <RadioButtonObject />
                  <RadioButtonLabelText>수기입력</RadioButtonLabelText>
                </RadioButton>
                <div :class="[$style['car-amount'], 'row-margin-item']">
                  <!-- DD : 수기입력 선택시 :disabled="false" -->
                  <FormList>
                    <FormListItem
                      titleText="차량금액"
                      target="#leaseRentEstimationSystemRentCarAmountPrice"
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
                              id="leaseRentEstimationSystemRentCarAmountPrice"
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
                          id="leaseRentEstimationSystemRentOption001"
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
                          id="leaseRentEstimationSystemRentOption002"
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
                          id="leaseRentEstimationSystemRentOption003"
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
                          id="leaseRentEstimationSystemRentOption004"
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
                            target="#leaseRentEstimationSystemRentOptionETC"
                            :forceFocus="true"
                          >
                            <FormInvalid :error="state.optionETCError">
                              <InputBlock :error="state.optionETCError">
                                <InputBlockCell :flexible="true">
                                  <BasicInput
                                    title="옵션 명칭"
                                    id="leaseRentEstimationSystemRentOptionETC"
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
                            target="#leaseRentEstimationSystemRentOptionETCPrice"
                            :forceFocus="true"
                          >
                            <FormInvalid :error="state.optionETCPriceError">
                              <InputBlock :error="state.optionETCPriceError">
                                <InputBlockCell :flexible="true">
                                  <BasicInput
                                    title="금액"
                                    id="leaseRentEstimationSystemRentOptionETCPrice"
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
            <BoxCheckList spacing="small">
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="leaseRentEstimationSystemRentDelivery"
                  id="leaseRentEstimationSystemRentDelivery001"
                  size="small"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>대리점출고</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="leaseRentEstimationSystemRentDelivery"
                  id="leaseRentEstimationSystemRentDelivery002"
                  size="small"
                >
                  <BoxCheckLabel>특판출고</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="leaseRentEstimationSystemRentDelivery"
                  id="leaseRentEstimationSystemRentDelivery003"
                  size="small"
                >
                  <BoxCheckLabel>즉시출고<br />(현대/기아)</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>

            <!-- Case : 특판출고 선택시 비노출 -->
            <section class="row-margin-item-group">
              <h4 class="text-body-4 row-margin-item-group">
                대리점 출고시 할인
              </h4>
              <ul class="reset-list">
                <li class="row-margin-item-group">
                  <div class="flex-box align-items-start">
                    <div class="flex-box__cell">
                      <RadioButton
                        theme="tertiary"
                        :onlyObject="true"
                        name="leaseRentEstimationSystemRentDeliveryDiscount"
                        id="leaseRentEstimationSystemRentDeliveryDiscount001"
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
                          target="#leaseRentEstimationSystemRentDeliveryDiscountPrice"
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
                                  id="leaseRentEstimationSystemRentDeliveryDiscountPrice"
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
                        name="leaseRentEstimationSystemRentDeliveryDiscount"
                        id="leaseRentEstimationSystemRentDeliveryDiscount002"
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
                          target="#leaseRentEstimationSystemRentDeliveryDiscountRatio"
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
                                  id="leaseRentEstimationSystemRentFeeCMRatio"
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
                                  id="leaseRentEstimationSystemRentFeeCMPrice"
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
            <!-- // Case : 특판출고 선택시 비노출 -->
          </div>
          <div :class="$style['estimate-list__foot']">
            <section>
              <h4 class="text-body-4 row-margin-item-group">제조사탁송</h4>
              <FormList>
                <!-- Case : { 상품설정 : 탁송방법 } 제조사탁송 선택시, disabled="false" -->
                <FormListItem
                  titleText="금액"
                  target="#leaseRentEstimationSystemRentDeliveryManufacturerPrice"
                  :forceFocus="true"
                  :disabled="true"
                >
                  <FormInvalid :error="state.deliveryManufacturerPriceError">
                    <InputBlock
                      :error="state.deliveryManufacturerPriceError"
                      :disabled="true"
                    >
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          title="금액"
                          id="leaseRentEstimationSystemRentDeliveryManufacturerPrice"
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
                    <FormInvalidMessage> Error Message </FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>
                <!-- //Case : { 상품설정 : 탁송방법 } 제조사탁송 선택시, disabled="false" -->
              </FormList>
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
              <KeyValueTitle>면세가격</KeyValueTitle>
              <KeyValueText>0 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>할인금액</KeyValueTitle>
              <KeyValueText>0 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>제조사탁송료</KeyValueTitle>
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
                  <UnitText rightUnit="원" align="right"> 1,200,000 </UnitText>
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
            <SettingButton @click="layerSettingOpen" />
            <LayerLeaseRentEstimationSystemSetting ref="layerSetting" />
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
                        <KeyValueText>장기렌트</KeyValueText>
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
                                name="leaseRentEstimationSystemRentCustomerType"
                                id="leaseRentEstimationSystemRentCustomerType_001"
                                size="small"
                                :defaultChecked="true"
                              >
                                <BoxCheckLabel>개인</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                name="leaseRentEstimationSystemRentCustomerType"
                                id="leaseRentEstimationSystemRentCustomerType_002"
                                size="small"
                              >
                                <BoxCheckLabel>개인사업자</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                name="leaseRentEstimationSystemRentCustomerType"
                                id="leaseRentEstimationSystemRentCustomerType_003"
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

            <!-- Case : 고객구분 [개인사업자, 법인] 선택시 노출 -->
            <!-- 임직원 한정 운전특약 -->
            <li :class="$style['estimate-list__item']">
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">
                            임직원<br />한정<br />운전특약
                          </div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <BoxCheckList align="full" spacing="small">
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                name="leaseRentEstimationSystemRentEmployeeSpecialContract"
                                id="leaseRentEstimationSystemRentEmployeeSpecialContract_001"
                                size="small"
                              >
                                <BoxCheckLabel
                                  >가입 (임직원 외 운행시 보상
                                  불가)</BoxCheckLabel
                                >
                              </BoxCheck>
                            </BoxCheckListItem>
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                name="leaseRentEstimationSystemRentEmployeeSpecialContract"
                                id="leaseRentEstimationSystemRentEmployeeSpecialContract_002"
                                size="small"
                                :defaultChecked="true"
                              >
                                <BoxCheckLabel
                                  >미가입 (비용의 50%만 인정
                                  가능)</BoxCheckLabel
                                >
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
            <!-- // 임직원 한정 운전특약 -->
            <!-- // Case : 고객구분 [개인사업자, 법인] 선택시 노출 -->

            <!-- 보험 -->
            <UiAccordionItem
              :classNames="{ item: $style['estimate-list__item'] }"
            >
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">보험</div>
                        </KeyValueTitle>
                        <KeyValueText>26세, 1억원, 1억원, 30만원</KeyValueText>
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
                      titleText="운전연령"
                      target="#leaseRentEstimationSystemRentAge"
                      :disabled="true"
                    >
                      <FormInvalid :error="state.ageError">
                        <InputBlock :error="state.ageError" :disabled="true">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="운전연령"
                              id="leaseRentEstimationSystemRentAge"
                              :disabled="true"
                              defaultValue="만26세 이상"
                            />
                          </InputBlockCell>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                    <FormListItem titleText="대물" :forceFocus="true">
                      <BoxCheckList spacing="small">
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck002"
                            id="leaseRentEstimationSystemRentCheck002_001"
                            size="small"
                            :defaultChecked="true"
                          >
                            <BoxCheckLabel>1억원</BoxCheckLabel>
                          </BoxCheck>
                        </BoxCheckListItem>
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck002"
                            id="leaseRentEstimationSystemRentCheck002_002"
                            size="small"
                          >
                            <BoxCheckLabel>2억원</BoxCheckLabel>
                          </BoxCheck>
                        </BoxCheckListItem>
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck002"
                            id="leaseRentEstimationSystemRentCheck002_003"
                            size="small"
                          >
                            <BoxCheckLabel>3억원</BoxCheckLabel>
                          </BoxCheck>
                        </BoxCheckListItem>
                      </BoxCheckList>
                    </FormListItem>
                    <FormListItem titleText="자손" :forceFocus="true">
                      <BoxCheckList spacing="small">
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck003"
                            id="leaseRentEstimationSystemRentCheck003_001"
                            size="small"
                          >
                            <BoxCheckLabel>3천만원</BoxCheckLabel>
                          </BoxCheck>
                        </BoxCheckListItem>
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck003"
                            id="leaseRentEstimationSystemRentCheck003_002"
                            size="small"
                          >
                            <BoxCheckLabel>5천만원</BoxCheckLabel>
                          </BoxCheck>
                        </BoxCheckListItem>
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck003"
                            id="leaseRentEstimationSystemRentCheck003_003"
                            size="small"
                            :defaultChecked="true"
                          >
                            <BoxCheckLabel>1억원</BoxCheckLabel>
                          </BoxCheck>
                        </BoxCheckListItem>
                      </BoxCheckList>
                    </FormListItem>
                    <FormListItem titleText="면책금" :forceFocus="true">
                      <BoxCheckList spacing="small">
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck004"
                            id="leaseRentEstimationSystemRentCheck004_001"
                            size="small"
                          >
                            <BoxCheckLabel>10만원</BoxCheckLabel>
                          </BoxCheck>
                        </BoxCheckListItem>
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck004"
                            id="leaseRentEstimationSystemRentCheck004_002"
                            size="small"
                          >
                            <BoxCheckLabel>20만원</BoxCheckLabel>
                          </BoxCheck>
                        </BoxCheckListItem>
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck004"
                            id="leaseRentEstimationSystemRentCheck004_003"
                            size="small"
                            :defaultChecked="true"
                          >
                            <BoxCheckLabel>30만원</BoxCheckLabel>
                          </BoxCheck>
                        </BoxCheckListItem>
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck004"
                            id="leaseRentEstimationSystemRentCheck004_004"
                            size="small"
                          >
                            <BoxCheckLabel>50만원</BoxCheckLabel>
                          </BoxCheck>
                        </BoxCheckListItem>
                      </BoxCheckList>
                    </FormListItem>
                  </FormList>
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
            <!-- // 보험 -->

            <!-- 탁송방법 -->
            <UiAccordionItem
              :classNames="{ item: $style['estimate-list__item'] }"
            >
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">탁송방법</div>
                        </KeyValueTitle>
                        <KeyValueText>외주탁송</KeyValueText>
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
                        name="leaseRentEstimationSystemRentCheck005"
                        id="leaseRentEstimationSystemRentCheck005_001"
                        size="small"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>외주탁송</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck005"
                        id="leaseRentEstimationSystemRentCheck005_002"
                        size="small"
                      >
                        <BoxCheckLabel>제조사탁송</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemRentCheck005"
                        id="leaseRentEstimationSystemRentCheck005_003"
                        size="small"
                      >
                        <BoxCheckLabel>1차제조사 + 2차외주탁송</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                  </BoxCheckList>
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
            <!-- // 탁송방법 -->

            <!-- 출고장 -->
            <li :class="$style['estimate-list__item']">
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">출고장</div>
                        </KeyValueTitle>
                        <KeyValueText>아산</KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 출고장 -->

            <!-- Case : 수입차 선택 시 노출 -->
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
                        name="leaseRentEstimationSystemRentCheck012"
                        id="leaseRentEstimationSystemRentCheck012_001"
                        size="small"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>코오롱글로벌(주)</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck012"
                        id="leaseRentEstimationSystemRentCheck012_002"
                        size="small"
                      >
                        <BoxCheckLabel>한성모터스주식회사</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemRentCheck012"
                        id="leaseRentEstimationSystemRentCheck012_003"
                        size="small"
                      >
                        <BoxCheckLabel>(주)한독모터스</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemRentCheck012"
                        id="leaseRentEstimationSystemRentCheck012_004"
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
            <!-- // Case : 수입 선택 시 노출 -->

            <!-- 도착지 -->
            <UiAccordionItem
              :classNames="{ item: $style['estimate-list__item'] }"
            >
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">도착지</div>
                        </KeyValueTitle>
                        <KeyValueText>서울</KeyValueText>
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
                  <BoxCheckList spacing="small" :wrap="true" :col="4">
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck006"
                        id="leaseRentEstimationSystemRentCheck006_001"
                        size="small"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>서울</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck006"
                        id="leaseRentEstimationSystemRentCheck006_002"
                        size="small"
                      >
                        <BoxCheckLabel>부산</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck006"
                        id="leaseRentEstimationSystemRentCheck006_003"
                        size="small"
                      >
                        <BoxCheckLabel>대구</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck006"
                        id="leaseRentEstimationSystemRentCheck006_004"
                        size="small"
                      >
                        <BoxCheckLabel>대전</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck006"
                        id="leaseRentEstimationSystemRentCheck006_005"
                        size="small"
                      >
                        <BoxCheckLabel>광주</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck006"
                        id="leaseRentEstimationSystemRentCheck006_006"
                        size="small"
                      >
                        <BoxCheckLabel>인천</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck006"
                        id="leaseRentEstimationSystemRentCheck006_007"
                        size="small"
                      >
                        <BoxCheckLabel>경기</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck006"
                        id="leaseRentEstimationSystemRentCheck006_008"
                        size="small"
                      >
                        <BoxCheckLabel>충남</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck006"
                        id="leaseRentEstimationSystemRentCheck006_009"
                        size="small"
                      >
                        <BoxCheckLabel>충북</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck006"
                        id="leaseRentEstimationSystemRentCheck006_010"
                        size="small"
                      >
                        <BoxCheckLabel>울산</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck006"
                        id="leaseRentEstimationSystemRentCheck006_011"
                        size="small"
                      >
                        <BoxCheckLabel>경남</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck006"
                        id="leaseRentEstimationSystemRentCheck006_012"
                        size="small"
                      >
                        <BoxCheckLabel>경북</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck006"
                        id="leaseRentEstimationSystemRentCheck006_013"
                        size="small"
                      >
                        <BoxCheckLabel>전남</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck006"
                        id="leaseRentEstimationSystemRentCheck006_014"
                        size="small"
                      >
                        <BoxCheckLabel>전북</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck006"
                        id="leaseRentEstimationSystemRentCheck006_015"
                        size="small"
                      >
                        <BoxCheckLabel>인천강화</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck006"
                        id="leaseRentEstimationSystemRentCheck006_016"
                        size="small"
                      >
                        <BoxCheckLabel>인천공항</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck006"
                        id="leaseRentEstimationSystemRentCheck006_017"
                        size="small"
                      >
                        <BoxCheckLabel>세종</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck006"
                        id="leaseRentEstimationSystemRentCheck006_018"
                        size="small"
                      >
                        <BoxCheckLabel>강원(영동)</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck006"
                        id="leaseRentEstimationSystemRentCheck006_019"
                        size="small"
                      >
                        <BoxCheckLabel>강원(영서)</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                  </BoxCheckList>
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
            <!-- // 도착지 -->

            <!-- 용품 -->
            <UiAccordionItem
              :classNames="{ item: $style['estimate-list__item'] }"
            >
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">용품</div>
                        </KeyValueTitle>
                        <KeyValueText>선택없음</KeyValueText>
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
                    <FormListItem titleText="내비게이션" :forceFocus="true">
                      <BoxCheckList spacing="small">
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck007"
                            id="leaseRentEstimationSystemRentCheck007_001"
                            size="small"
                            :defaultChecked="true"
                          >
                            <BoxCheckLabel>해당없음</BoxCheckLabel>
                          </BoxCheck>
                        </BoxCheckListItem>
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck007"
                            id="leaseRentEstimationSystemRentCheck007_002"
                            size="small"
                          >
                            <BoxCheckLabel>포함</BoxCheckLabel>
                          </BoxCheck>
                        </BoxCheckListItem>
                      </BoxCheckList>
                    </FormListItem>
                    <FormListItem titleText="블랙박스" :forceFocus="true">
                      <BoxCheckList spacing="small">
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck008"
                            id="leaseRentEstimationSystemRentCheck008_001"
                            size="small"
                            :defaultChecked="true"
                          >
                            <BoxCheckLabel>해당없음</BoxCheckLabel>
                          </BoxCheck>
                        </BoxCheckListItem>
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck008"
                            id="leaseRentEstimationSystemRentCheck008_002"
                            size="small"
                          >
                            <BoxCheckLabel>아이나비<br />(A300)</BoxCheckLabel>
                          </BoxCheck>
                        </BoxCheckListItem>
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck008"
                            id="leaseRentEstimationSystemRentCheck008_003"
                            size="small"
                          >
                            <BoxCheckLabel
                              >아이지넷<br />(G프로200)</BoxCheckLabel
                            >
                          </BoxCheck>
                        </BoxCheckListItem>
                      </BoxCheckList>
                    </FormListItem>
                    <FormListItem titleText="측후면썬팅" :forceFocus="true">
                      <BoxCheckList spacing="small">
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck009"
                            id="leaseRentEstimationSystemRentCheck009_001"
                            size="small"
                            :defaultChecked="true"
                          >
                            <BoxCheckLabel>해당없음</BoxCheckLabel>
                          </BoxCheck>
                        </BoxCheckListItem>
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck009"
                            id="leaseRentEstimationSystemRentCheck009_002"
                            size="small"
                          >
                            <BoxCheckLabel>일반(쿠폰)</BoxCheckLabel>
                          </BoxCheck>
                        </BoxCheckListItem>
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck009"
                            id="leaseRentEstimationSystemRentCheck009_003"
                            size="small"
                          >
                            <BoxCheckLabel>3M</BoxCheckLabel>
                          </BoxCheck>
                        </BoxCheckListItem>
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck009"
                            id="leaseRentEstimationSystemRentCheck009_004"
                            size="small"
                          >
                            <BoxCheckLabel>루마</BoxCheckLabel>
                          </BoxCheck>
                        </BoxCheckListItem>
                      </BoxCheckList>
                    </FormListItem>
                    <!-- Case : 측후면썬팅 [일반(쿠폰), 3M, 루마] 선택시 노출 -->
                    <FormListItem
                      titleText="측후면썬팅 투과율(농도)"
                      target="#leaseRentEstimationSystemRentSideTintingRatioButton"
                      :selectOnly="true"
                    >
                      <FormInvalid :error="state.sideTintingRatioError">
                        <InputBlock :error="state.sideTintingRatioError">
                          <InputBlockCell :flexible="true">
                            <BasicSelect
                              :option="[
                                {
                                  value: '1',
                                  text: '50%',
                                },
                                {
                                  value: '2',
                                  text: '35%',
                                },
                                {
                                  value: '3',
                                  text: '15%',
                                },
                                {
                                  value: '4',
                                  text: '5%',
                                },
                              ]"
                              buttonTitle="측후면썬팅 투과율(농도) 선택하기"
                              layerTitle="측후면썬팅 투과율(농도)을 선택해 주세요"
                              id="leaseRentEstimationSystemRentSideTintingRatio"
                              buttonId="leaseRentEstimationSystemRentSideTintingRatioButton"
                            />
                          </InputBlockCell>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                    <!-- // Case : 측후면썬팅 [일반(쿠폰), 3M, 루마] 선택시 노출 -->
                    <FormListItem titleText="전면썬팅" :forceFocus="true">
                      <BoxCheckList spacing="small">
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck010"
                            id="leaseRentEstimationSystemRentCheck010_001"
                            size="small"
                            :defaultChecked="true"
                          >
                            <BoxCheckLabel>해당없음</BoxCheckLabel>
                          </BoxCheck>
                        </BoxCheckListItem>
                        <BoxCheckListItem>
                          <BoxCheck
                            :minSide="true"
                            name="leaseRentEstimationSystemRentCheck010"
                            id="leaseRentEstimationSystemRentCheck010_002"
                            size="small"
                          >
                            <BoxCheckLabel>포함</BoxCheckLabel>
                          </BoxCheck>
                        </BoxCheckListItem>
                      </BoxCheckList>
                    </FormListItem>
                    <!-- Case : 전면썬팅 [포함] 선택시 노출 -->
                    <FormListItem
                      titleText="전면썬팅 투과율(농도)"
                      target="#leaseRentEstimationSystemRentFrontTintingRatioButton"
                      :selectOnly="true"
                    >
                      <FormInvalid :error="state.frontTintingRatioError">
                        <InputBlock :error="state.frontTintingRatioError">
                          <InputBlockCell :flexible="true">
                            <BasicSelect
                              :option="[
                                {
                                  value: '1',
                                  text: '50%',
                                },
                                {
                                  value: '2',
                                  text: '35%',
                                },
                              ]"
                              buttonTitle="전면썬팅 투과율(농도) 선택하기"
                              layerTitle="전면썬팅 투과율(농도)을 선택해 주세요"
                              id="leaseRentEstimationSystemRentFrontTintingRatio"
                              buttonId="leaseRentEstimationSystemRentFrontTintingRatioButton"
                            />
                          </InputBlockCell>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                    <!-- // Case : 전면썬팅 [포함] 선택시 노출 -->
                    <FormListItem
                      titleText="추가용품 품목"
                      target="#leaseRentEstimationSystemRentAddOptionItem"
                    >
                      <FormInvalid :error="state.addOptionItemError">
                        <InputBlock :error="state.addOptionItemError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="추가용품 품목"
                              id="leaseRentEstimationSystemRentAddOptionItem"
                            />
                          </InputBlockCell>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                    <FormListItem
                      titleText="추가용품 금액"
                      target="#leaseRentEstimationSystemRentAddOptionItemPrice"
                    >
                      <FormInvalid :error="state.addOptionItemPriceError">
                        <InputBlock :error="state.addOptionItemPriceError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="추가용품 금액"
                              id="leaseRentEstimationSystemRentAddOptionItemPrice"
                              pattern="\d*"
                              :useDelete="false"
                              align="right"
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
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
            <!-- // 용품 -->

            <!-- 특장개조 -->
            <UiAccordionItem
              :classNames="{ item: $style['estimate-list__item'] }"
            >
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">특장개조</div>
                        </KeyValueTitle>
                        <KeyValueText>선택없음</KeyValueText>
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
                      titleText="품목"
                      target="#leaseRentEstimationSystemRentSpecialModification"
                    >
                      <FormInvalid :error="state.specialModificationError">
                        <InputBlock :error="state.specialModificationError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="품목"
                              id="leaseRentEstimationSystemRentSpecialModification"
                            />
                          </InputBlockCell>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                    <FormListItem
                      titleText="금액"
                      target="#leaseRentEstimationSystemRentSpecialModificationPrice"
                    >
                      <FormInvalid :error="state.specialModificationPriceError">
                        <InputBlock
                          :error="state.specialModificationPriceError"
                        >
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="금액"
                              id="leaseRentEstimationSystemRentSpecialModificationPrice"
                              pattern="\d*"
                              :useDelete="false"
                              align="right"
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
                  <NoticeText :classNames="{ wrap: 'row-margin-item-group' }"
                    >품목, 금액 모두 입력해주세요.</NoticeText
                  >
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
            <!-- // 특장개조 -->

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
                  <NoticeText :classNames="{ wrap: 'row-margin-item-group' }"
                    >한도: AG+CM 9.9% 이내 (단 CM 9% 이내)</NoticeText
                  >
                  <FormList>
                    <FormListItem
                      titleText="CM"
                      target="#leaseRentEstimationSystemRentFeeCMRatio"
                    >
                      <FormInvalid :error="state.feeCMError">
                        <InputBlock :error="state.feeCMError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="CM 금액"
                              id="leaseRentEstimationSystemRentFeeCMPrice"
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
                              id="leaseRentEstimationSystemRentFeeCMRatio"
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
                      target="#leaseRentEstimationSystemRentFeeAGRatio"
                    >
                      <FormInvalid :error="state.feeAGError">
                        <InputBlock :error="state.feeAGError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="AG 금액"
                              id="leaseRentEstimationSystemRentFeeAGPrice"
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
                              id="leaseRentEstimationSystemRentFeeAGRatio"
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
                  <NoticeText :classNames="{ wrap: 'row-margin-item-group' }"
                    >한도: AG+CM 9.9% 이내 (단 CM 9% 이내)</NoticeText
                  >
                  <FormList>
                    <FormListItem
                      titleText="CM"
                      target="#leaseRentEstimationSystemRentETCCMRatio"
                    >
                      <FormInvalid :error="state.etcCMError">
                        <InputBlock :error="state.etcCMError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="CM 금액"
                              id="leaseRentEstimationSystemRentETCCMPrice"
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
                              id="leaseRentEstimationSystemRentETCCMRatio"
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
                      target="#leaseRentEstimationSystemRentETCAGRatio"
                    >
                      <FormInvalid :error="state.etcAGError">
                        <InputBlock :error="state.etcAGError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="AG 금액"
                              id="leaseRentEstimationSystemRentETCAGPrice"
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
                              id="leaseRentEstimationSystemRentETCAGRatio"
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
                        <KeyValueText>신차사업팀</KeyValueText>
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
                        name="leaseRentEstimationSystemRentCheck011"
                        id="leaseRentEstimationSystemRentCheck011_001"
                        size="small"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>신차사업팀</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck011"
                        id="leaseRentEstimationSystemRentCheck011_002"
                        size="small"
                      >
                        <BoxCheckLabel>강남지점</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemRentCheck011"
                        id="leaseRentEstimationSystemRentCheck011_003"
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
          </UiAccordion>
        </div>
      </section>

      <BasicHr className="row-margin-container-medium" />

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
                        {{ i }}번 견적
                      </h3>
                    </div>
                    <div class="flex-box__cell">
                      <div class="text-body-5 color-gray">견적 비교 추가</div>
                    </div>
                    <div class="flex-box__cell">
                      <SwitchCheckBox
                        theme="secondary"
                        :id="`leaseRentEstimationSystemRentProducts${i}_On`"
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
                              <KeyValueText>장기렌트</KeyValueText>
                            </KeyValueItem>
                          </KeyValue>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- // 상품 -->

                  <!-- 만기 -->
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
                                <div class="text-body-4">만기</div>
                              </KeyValueTitle>
                              <KeyValueText>반납/구매/연장</KeyValueText>
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
                              :name="`leaseRentEstimationSystemRentProducts${i}_check001`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check001_001`"
                              size="small"
                            >
                              <BoxCheckLabel>구매</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check001`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check001_002`"
                              size="small"
                            >
                              <BoxCheckLabel>반납</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check001`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check001_003`"
                              size="small"
                              :defaultChecked="true"
                            >
                              <BoxCheckLabel>반납/구매/연장</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                        </BoxCheckList>
                      </section>
                    </UiAccordionLayer>
                  </UiAccordionItem>
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
                              :name="`leaseRentEstimationSystemRentProducts${i}_check002`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check002_001`"
                              size="small"
                            >
                              <BoxCheckLabel>12개월</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check002`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check002_002`"
                              size="small"
                            >
                              <BoxCheckLabel>24개월</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check002`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check002_003`"
                              size="small"
                              :defaultChecked="true"
                            >
                              <BoxCheckLabel>36개월</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check002`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check002_004`"
                              size="small"
                            >
                              <BoxCheckLabel>48개월</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check002`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check002_005`"
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

                  <!-- 약정주행거리 -->
                  <UiAccordionItem
                    :classNames="{ item: $style['estimate-list__item'] }"
                  >
                    <div :class="$style['estimate-list__head']">
                      <div :class="$style['estimate-list__block']">
                        <div :class="$style['estimate-list__left']">
                          <KeyValue align="left" size="regular">
                            <KeyValueItem :classNames="{ item: 'text-body-3' }">
                              <KeyValueTitle>
                                <div class="text-body-4">약정주행거리</div>
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
                        <!-- Case : 국산 -->
                        <BoxCheckList spacing="small" :wrap="true" :col="3">
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check003_type001`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check003_type001_001`"
                              size="small"
                            >
                              <BoxCheckLabel>15,000 km</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check003_type001`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check003_type001_002`"
                              size="small"
                              :defaultChecked="true"
                            >
                              <BoxCheckLabel>20,000 km</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check003_type001`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check003_type001_003`"
                              size="small"
                            >
                              <BoxCheckLabel>25,000 km</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check003_type001`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check003_type001_004`"
                              size="small"
                            >
                              <BoxCheckLabel>30,000 km</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check003_type001`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check003_type001_005`"
                              size="small"
                            >
                              <BoxCheckLabel>50,000 km</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                        </BoxCheckList>
                        <!-- // Case : 국산 -->

                        <!-- Case : 수입 -->
                        <BoxCheckList spacing="small">
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check003_type002`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check003_type002_001`"
                              size="small"
                              :defaultChecked="true"
                            >
                              <BoxCheckLabel>20,000 km</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check003_type002`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check003_type002_002`"
                              size="small"
                            >
                              <BoxCheckLabel>30,000 km</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                        </BoxCheckList>
                        <!-- // Case : 수입 -->
                      </section>
                    </UiAccordionLayer>
                  </UiAccordionItem>
                  <!-- // 약정주행거리 -->

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
                            :name="`leaseRentEstimationSystemRentProducts${i}_check004`"
                            :id="`leaseRentEstimationSystemRentProducts${i}_check004_000`"
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
                              :name="`leaseRentEstimationSystemRentProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check004_001`"
                              size="small"
                            >
                              <BoxCheckLabel>5%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check004_002`"
                              size="small"
                            >
                              <BoxCheckLabel>10%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check004_003`"
                              size="small"
                            >
                              <BoxCheckLabel>15%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check004_004`"
                              size="small"
                            >
                              <BoxCheckLabel>20%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check004_005`"
                              size="small"
                            >
                              <BoxCheckLabel>25%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check004_006`"
                              size="small"
                            >
                              <BoxCheckLabel>30%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check004_007`"
                              size="small"
                            >
                              <BoxCheckLabel>35%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check004_008`"
                              size="small"
                            >
                              <BoxCheckLabel>40%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                        </BoxCheckList>

                        <FormList
                          :classNames="{ wrap: 'row-margin-item-group' }"
                        >
                          <FormListItem
                            titleText="비율"
                            :target="`#leaseRentEstimationSystemRentProducts${i}_prepaymentsRatioButton`"
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
                                    :id="`leaseRentEstimationSystemRentProducts${i}_prepaymentsRatio`"
                                    :buttonId="`leaseRentEstimationSystemRentProducts${i}_prepaymentsRatioButton`"
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
                            :target="`#leaseRentEstimationSystemRentProducts${i}_prepaymentsPriceButton`"
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
                                    :id="`leaseRentEstimationSystemRentProducts${i}_prepaymentsPrice`"
                                    :buttonId="`leaseRentEstimationSystemRentProducts${i}_prepaymentsPriceButton`"
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
                            :target="`#leaseRentEstimationSystemRentProducts${i}_prepaymentsPriceInput`"
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
                                    :id="`leaseRentEstimationSystemRentProducts${i}_prepaymentsPriceInput`"
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
                            :name="`leaseRentEstimationSystemRentProducts${i}_check005`"
                            :id="`leaseRentEstimationSystemRentProducts${i}_check005_000`"
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
                              :name="`leaseRentEstimationSystemRentProducts${i}_check005`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check005_001`"
                              size="small"
                            >
                              <BoxCheckLabel>5%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check005`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check005_002`"
                              size="small"
                            >
                              <BoxCheckLabel>10%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check005`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check005_003`"
                              size="small"
                            >
                              <BoxCheckLabel>15%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check005`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check005_004`"
                              size="small"
                            >
                              <BoxCheckLabel>20%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check005`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check005_005`"
                              size="small"
                            >
                              <BoxCheckLabel>25%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check005`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check005_006`"
                              size="small"
                            >
                              <BoxCheckLabel>30%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check005`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check005_007`"
                              size="small"
                            >
                              <BoxCheckLabel>35%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check005`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check005_008`"
                              size="small"
                            >
                              <BoxCheckLabel>40%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                        </BoxCheckList>

                        <FormList
                          :classNames="{ wrap: 'row-margin-item-group' }"
                        >
                          <FormListItem
                            titleText="비율"
                            :target="`#leaseRentEstimationSystemRentProducts${i}_depositRatioButton`"
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
                                    :id="`leaseRentEstimationSystemRentProducts${i}_depositRatio`"
                                    :buttonId="`leaseRentEstimationSystemRentProducts${i}_depositRatioButton`"
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
                            :target="`#leaseRentEstimationSystemRentProducts${i}_depositPriceButton`"
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
                                    :id="`leaseRentEstimationSystemRentProducts${i}_depositPrice`"
                                    :buttonId="`leaseRentEstimationSystemRentProducts${i}_depositPriceButton`"
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
                            :target="`#leaseRentEstimationSystemRentProducts${i}_depositPriceInput`"
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
                                    :id="`leaseRentEstimationSystemRentProducts${i}_depositPriceInput`"
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
                                    최대(51.5%)
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
                            :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                            :id="`leaseRentEstimationSystemRentProducts${i}_check006_000`"
                            size="small"
                            :defaultChecked="true"
                          >
                            <BoxCheckLabel>최대(51%)</BoxCheckLabel>
                          </BoxCheck>
                        </div>
                        <BoxCheckList spacing="small" :wrap="true" :col="4">
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check006_001`"
                              size="small"
                            >
                              <BoxCheckLabel>50%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check006_002`"
                              size="small"
                            >
                              <BoxCheckLabel>49%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check006_003`"
                              size="small"
                            >
                              <BoxCheckLabel>48%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check006_004`"
                              size="small"
                            >
                              <BoxCheckLabel>47%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check006_005`"
                              size="small"
                            >
                              <BoxCheckLabel>46%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check006_006`"
                              size="small"
                            >
                              <BoxCheckLabel>45%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check006_007`"
                              size="small"
                            >
                              <BoxCheckLabel>44%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check006_008`"
                              size="small"
                            >
                              <BoxCheckLabel>43%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check006_009`"
                              size="small"
                            >
                              <BoxCheckLabel>42%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check006_010`"
                              size="small"
                            >
                              <BoxCheckLabel>41%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check006_011`"
                              size="small"
                            >
                              <BoxCheckLabel>40%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check006_012`"
                              size="small"
                            >
                              <BoxCheckLabel>39%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check006_013`"
                              size="small"
                            >
                              <BoxCheckLabel>38%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check006_014`"
                              size="small"
                            >
                              <BoxCheckLabel>37%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check006_015`"
                              size="small"
                            >
                              <BoxCheckLabel>36%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check006_016`"
                              size="small"
                            >
                              <BoxCheckLabel>35%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check006_017`"
                              size="small"
                            >
                              <BoxCheckLabel>34%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check006_018`"
                              size="small"
                            >
                              <BoxCheckLabel>33%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check006_019`"
                              size="small"
                            >
                              <BoxCheckLabel>32%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check006_020`"
                              size="small"
                            >
                              <BoxCheckLabel>31%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                        </BoxCheckList>

                        <FormList
                          :classNames="{ wrap: 'row-margin-item-group' }"
                        >
                          <FormListItem
                            titleText="비율"
                            :target="`#leaseRentEstimationSystemRentProducts${i}_residualValueRatioButton`"
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
                                    :id="`leaseRentEstimationSystemRentProducts${i}_residualValueRatio`"
                                    :buttonId="`leaseRentEstimationSystemRentProducts${i}_residualValueRatioButton`"
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
                            :target="`#leaseRentEstimationSystemRentProducts${i}_residualValuePriceInput`"
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
                                    :id="`leaseRentEstimationSystemRentProducts${i}_residualValuePriceInput`"
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

                  <!-- 정비 -->
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
                                <div class="text-body-4">정비</div>
                              </KeyValueTitle>
                              <KeyValueText>Self Service</KeyValueText>
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
                              :name="`leaseRentEstimationSystemRentProducts${i}_check007`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check007_001`"
                              size="small"
                              :defaultChecked="true"
                            >
                              <BoxCheckLabel>
                                Self 자가정비<br />(고객자체정비)
                              </BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemRentProducts${i}_check007`"
                              :id="`leaseRentEstimationSystemRentProducts${i}_check007_002`"
                              size="small"
                            >
                              <BoxCheckLabel>
                                Special 순회정비<br />(정비사 방문)
                              </BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                        </BoxCheckList>
                      </section>
                    </UiAccordionLayer>
                  </UiAccordionItem>
                  <!-- // 정비 -->

                  <!-- 출고전 납입 -->
                  <li :class="$style['estimate-list__item']">
                    <div :class="$style['estimate-list__head']">
                      <div :class="$style['estimate-list__block']">
                        <div :class="$style['estimate-list__left']">
                          <KeyValue>
                            <KeyValueItem :classNames="{ item: 'text-body-3' }">
                              <KeyValueTitle>
                                <div class="text-body-4">출고전<br />납입</div>
                              </KeyValueTitle>
                              <KeyValueText>
                                <strong>0 원</strong>
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
                        <BasicButton size="small" inline="true"
                          >계산하기</BasicButton
                        >
                        <!-- Case : 계산중 -->
                        <BasicButton size="small" inline="true">
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
                          1,200,000
                        </UnitText>
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
        <CheckBox
          id="leaseRentEstimationSystemRentCheck001"
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
          <DocumentEstimate001Contents />
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
              하나캐피탈에서 제공하는 차량 정보의 가격, 색상, 판매조건에 오류가
              있을 수 있습니다. 계약전에 필히 확인하여 주시기 바랍니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              견적에 표시된 차량에는 재고차량이나 단종된 차량이 포함되어 있을 수
              있습니다. 실제 판매하는 차량인지 확인하시기 바랍니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              수동 변속기나 특이한 색상, 일반용 LPG, 특판 출고 등은 판매사나
              금융사에 따라 취급되지 않을 수 있습니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              전기차 진행시, 지자체 예산 조기소진 등의 사유로 보조금이 변동될 수
              있으며, 이 경우 상기 견적은 변경될 수 있습니다. 취급 전
              <span class="color-red font-weight-medium">반드시</span> 확인
              바랍니다.
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
@import '@/assets/scss/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemRent.scss';
</style>
