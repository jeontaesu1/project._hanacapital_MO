<script>
// LR_M02_p006
import { reactive, onMounted, onUnmounted } from 'vue';

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
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import RadioButton from '@/components/ui/form/RadioButton.vue';
import RadioButtonLabelText from '@/components/ui/form/RadioButtonLabelText.vue';
import RadioButtonObject from '@/components/ui/form/RadioButtonObject.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import DeleteButton from '@/components/ui/button/DeleteButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';

export default {
  components: {
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
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    RadioButton,
    RadioButtonLabelText,
    RadioButtonObject,
    NoticeText,
    UnitText,
    DeleteButton,
    TextButton,
    BasicDatepicker,
  },
  setup() {
    const store = {
      ui: {
        loading: useUiLoadingStore(),
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      exteriorETCError: false,
      exteriorETCPriceError: false,
      interiorETCError: false,
      interiorETCPriceError: false,
      optionETCError: false,
      optionETCPriceError: false,
      deliveryDiscountPriceError: false,
      deliveryDiscountRatioError: false,
      deliveryManufacturerPriceError: false,
      carQuantityError001: false,
      carQuantityError002: false,
      contractNumberError001: false,
      contractNumberError002: false,
      contractNumberError003: false,
      carIdNumberError001: false,
      carIdNumberError002: false,
      carIdNumberError003: false,
      dateError001: false,
      dateError002: false,
      dateError003: false,
    });

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
      store.ui.header.setTitle(() => '선구매');
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
                        link="leaseRentEstimationSystemPrePurchaseRegistCarBrand_001"
                      >
                        국산
                      </RoundTabButton>
                      <RoundTabButton
                        link="leaseRentEstimationSystemPrePurchaseRegistCarBrand_002"
                      >
                        수입
                      </RoundTabButton>
                    </RoundTab>

                    <UiTabPanel
                      name="leaseRentEstimationSystemPrePurchaseRegistCarBrand_001"
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
                      name="leaseRentEstimationSystemPrePurchaseRegistCarBrand_002"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarLineup"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarLineup_001"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarLineup"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarLineup_002"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarLineup"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarLineup_003"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarLineup"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarLineup_004"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarTrim"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarTrim_001"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarTrim"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarTrim_002"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarTrim"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarTrim_003"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarTrim"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarTrim_004"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarExterior"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarExterior_001"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarExterior"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarExterior_002"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarExterior"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarExterior_003"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarExterior"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarExterior_004"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarExterior"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarExterior_005"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarExterior"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarExterior_006"
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
                            name="leaseRentEstimationSystemPrePurchaseRegistCarExterior"
                            id="leaseRentEstimationSystemPrePurchaseRegistCarExterior_007"
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
                              target="#leaseRentEstimationSystemPrePurchaseRegistCarExteriorETC"
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
                                      id="leaseRentEstimationSystemPrePurchaseRegistCarExteriorETC"
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
                              target="#leaseRentEstimationSystemPrePurchaseRegistCarExteriorETCPrice"
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
                                      id="leaseRentEstimationSystemPrePurchaseRegistCarExteriorETCPrice"
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
                                :colors="['66, 66, 66']"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarInterior"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarInterior_001"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarInterior"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarInterior_002"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarInterior"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarInterior_003"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarInterior"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarInterior_004"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarInterior"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarInterior_005"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarInterior"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarInterior_006"
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
                            name="leaseRentEstimationSystemPrePurchaseRegistCarInterior"
                            id="leaseRentEstimationSystemPrePurchaseRegistCarInterior_007"
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
                              target="#leaseRentEstimationSystemPrePurchaseRegistCarInteriorETC"
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
                                      id="leaseRentEstimationSystemPrePurchaseRegistCarInteriorETC"
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
                              target="#leaseRentEstimationSystemPrePurchaseRegistCarInteriorETCPrice"
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
                                      id="leaseRentEstimationSystemPrePurchaseRegistCarInteriorETCPrice"
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
            <KeyValue verticalAlign="center">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle
                  :classNames="{
                    title: 'color-black font-weight-medium',
                  }"
                >
                  기본가격
                </KeyValueTitle>
                <KeyValueText>
                  <UnitText rightUnit="원" align="right">0</UnitText>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>
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
                          id="leaseRentEstimationSystemPrePurchaseRegistCarOption001"
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
                          id="leaseRentEstimationSystemPrePurchaseRegistCarOption002"
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
                          id="leaseRentEstimationSystemPrePurchaseRegistCarOption003"
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
                          id="leaseRentEstimationSystemPrePurchaseRegistCarOption004"
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
                            target="#leaseRentEstimationSystemPrePurchaseRegistCarOptionETC"
                            :forceFocus="true"
                          >
                            <FormInvalid :error="state.optionETCError">
                              <InputBlock :error="state.optionETCError">
                                <InputBlockCell :flexible="true">
                                  <BasicInput
                                    title="옵션 명칭"
                                    id="leaseRentEstimationSystemPrePurchaseRegistCarOptionETC"
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
                            target="#leaseRentEstimationSystemPrePurchaseRegistCarOptionETCPrice"
                            :forceFocus="true"
                          >
                            <FormInvalid :error="state.optionETCPriceError">
                              <InputBlock :error="state.optionETCPriceError">
                                <InputBlockCell :flexible="true">
                                  <BasicInput
                                    title="금액"
                                    id="leaseRentEstimationSystemPrePurchaseRegistCarOptionETCPrice"
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
              <ul class="reset-list">
                <li class="row-margin-item-group">
                  <div class="flex-box align-items-start">
                    <div class="flex-box__cell">
                      <RadioButton
                        theme="tertiary"
                        :onlyObject="true"
                        name="leaseRentEstimationSystemPrePurchaseRegistCarDeliveryDiscount"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarDeliveryDiscount001"
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
                          target="#leaseRentEstimationSystemPrePurchaseRegistCarDeliveryDiscountPrice"
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
                                  id="leaseRentEstimationSystemPrePurchaseRegistCarDeliveryDiscountPrice"
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
                        name="leaseRentEstimationSystemPrePurchaseRegistCarDeliveryDiscount"
                        id="leaseRentEstimationSystemPrePurchaseRegistCarDeliveryDiscount002"
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
                          target="#leaseRentEstimationSystemPrePurchaseRegistCarDeliveryDiscountRatio"
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
                                  id="leaseRentEstimationSystemPrePurchaseRegistCarFeeCMRatio"
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
                                  id="leaseRentEstimationSystemPrePurchaseRegistCarFeeCMPrice"
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
          <div :class="$style['estimate-list__foot']">
            <section>
              <h4 class="text-body-4 row-margin-item-group">제조사탁송</h4>
              <FormList>
                <FormListItem
                  titleText="금액"
                  target="#leaseRentEstimationSystemPrePurchaseRegistCarDeliveryManufacturerPrice"
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
                          id="leaseRentEstimationSystemPrePurchaseRegistCarDeliveryManufacturerPrice"
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
              <KeyValueTitle>할인금액</KeyValueTitle>
              <KeyValueText>0 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>개소세감면</KeyValueTitle>
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
                <div class="flex-box">
                  <div class="flex-box__cell flex-1">
                    <div class="color-green">
                      <UnitText rightUnit="원" align="right">0</UnitText>
                    </div>
                  </div>
                  <div class="flex-box__cell">
                    <BasicButton size="mini">목록추가</BasicButton>
                  </div>
                </div>
              </KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </div>
      </section>

      <section class="row-margin-container-medium row-margin-bottom-none">
        <h2 class="text-title-2 row-margin-contents">상품 목록</h2>

        <!-- Case : 차량 선택 전 -->
        <div :class="$style['empty']">
          <p :class="$style['empty__text']">
            모델을 선택하시고 목록에 추가하세요.
          </p>
        </div>
        <!-- // Case : 차량 선택 전 -->

        <!-- Case : 차량 선택 후 -->
        <ul class="reset-list">
          <!-- Case : 전송하기 버튼 클릭 전 -->
          <li class="row-margin-item-group">
            <section :class="$style['estimate-list']">
              <div :class="$style['estimate-list__top']">
                <div class="flex-box">
                  <div class="flex-box__cell flex-1">
                    <h3 :class="$style['estimate-list__title']">1번 상품</h3>
                  </div>
                  <div class="flex-box__cell">
                    <DeleteButton theme="secondary" />
                  </div>
                </div>
              </div>

              <UiAccordion
                :classNames="{ wrap: $style['estimate-list__list'] }"
              >
                <!-- 상품 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <div :class="$style['product-setting']">
                          <div :class="$style['product-setting__title']">
                            상품
                          </div>
                          <div :class="$style['product-setting__contents']">
                            <BoxCheckList spacing="small" :wrap="true">
                              <BoxCheckListItem>
                                <BoxCheck
                                  :minSide="true"
                                  name="
                                    leaseRentEstimationSystemPrePurchaseRegistCarProducts001_check001
                                  "
                                  id="leaseRentEstimationSystemPrePurchaseRegistCarProducts001_check001_001"
                                  size="small"
                                  :defaultChecked="true"
                                >
                                  <BoxCheckLabel>선구매</BoxCheckLabel>
                                </BoxCheck>
                              </BoxCheckListItem>
                              <BoxCheckListItem>
                                <BoxCheck
                                  :minSide="true"
                                  name="
                                    leaseRentEstimationSystemPrePurchaseRegistCarProducts001_check001
                                  "
                                  id="leaseRentEstimationSystemPrePurchaseRegistCarProducts001_check001_002"
                                  size="small"
                                >
                                  <BoxCheckLabel>즉시출고</BoxCheckLabel>
                                </BoxCheck>
                              </BoxCheckListItem>
                            </BoxCheckList>

                            <FormList
                              :classNames="{ wrap: 'row-margin-item-group' }"
                            >
                              <FormListItem
                                titleText="차량 수"
                                target="#leaseRentEstimationSystemPrePurchaseRegistCar_carQuantity001"
                              >
                                <FormInvalid :error="state.carQuantityError001">
                                  <InputBlock
                                    :error="state.carQuantityError001"
                                  >
                                    <InputBlockCell :flexible="true">
                                      <BasicInput
                                        title="차량 수 입력"
                                        id="leaseRentEstimationSystemPrePurchaseRegistCar_carQuantity001"
                                        pattern="\d*"
                                        :useDelete="false"
                                        align="right"
                                      />
                                    </InputBlockCell>
                                    <template v-slot:innerRight>
                                      <div class="text-body-3">대</div>
                                    </template>
                                  </InputBlock>
                                  <FormInvalidMessage
                                    >Error Message</FormInvalidMessage
                                  >
                                </FormInvalid>
                              </FormListItem>
                            </FormList>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 상품 -->

                <!-- 모델 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue align="left" size="regular">
                          <KeyValueItem :classNames="{ item: 'text-body-3' }">
                            <KeyValueTitle>
                              <div class="text-body-4">모델</div>
                            </KeyValueTitle>
                            <KeyValueText>
                              2023년 LPG 2.0 LPe 2WD (면세가격) LE (26,293,639)
                            </KeyValueText>
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 모델 -->

                <!-- 색상 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue align="left" size="regular">
                          <KeyValueItem :classNames="{ item: 'text-body-3' }">
                            <KeyValueTitle>
                              <div class="text-body-4">색상</div>
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
                                  클라우드 펄 블랙 인조가죽 시트
                                </div>
                              </div>
                            </KeyValueText>
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 색상 -->

                <!-- 옵션 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue align="left" size="regular">
                          <KeyValueItem :classNames="{ item: 'text-body-3' }">
                            <KeyValueTitle>
                              <div class="text-body-4">옵션</div>
                            </KeyValueTitle>
                            <KeyValueText>
                              운적석파워시트(전동식 요추 받침장치 포함) + 동승석
                              파워시트 + 앞좌석 통풍 시트 + 뒷자석 열선시트
                              S-Link 패키지 Ⅰ 매직 테일게이트
                            </KeyValueText>
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 옵션 -->

                <!-- 차량가격 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue verticalAlign="center">
                          <KeyValueItem
                            :classNames="{
                              item: 'text-body-3',
                            }"
                          >
                            <KeyValueTitle>
                              <div class="text-body-4">차량가격</div>
                            </KeyValueTitle>
                            <KeyValueText
                              :classNames="{ text: 'font-weight-bold' }"
                              >46,700,000 원</KeyValueText
                            >
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 차량가격 -->

                <!-- 면세가격 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue verticalAlign="center">
                          <KeyValueItem
                            :classNames="{
                              item: 'text-body-3',
                            }"
                          >
                            <KeyValueTitle>
                              <div class="text-body-4">면세가격</div>
                            </KeyValueTitle>
                            <KeyValueText
                              :classNames="{ text: 'font-weight-bold' }"
                              >43,849,765 원</KeyValueText
                            >
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 면세가격 -->

                <!-- 할인금액 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue verticalAlign="center">
                          <KeyValueItem
                            :classNames="{
                              item: 'text-body-3',
                            }"
                          >
                            <KeyValueTitle>
                              <div class="text-body-4">할인금액</div>
                            </KeyValueTitle>
                            <KeyValueText
                              :classNames="{
                                text: 'color-green font-weight-bold',
                              }"
                              >0 원</KeyValueText
                            >
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 할인금액 -->

                <!-- 탁송료 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue verticalAlign="center">
                          <KeyValueItem
                            :classNames="{
                              item: 'text-body-3',
                            }"
                          >
                            <KeyValueTitle>
                              <div class="text-body-4">탁송료</div>
                            </KeyValueTitle>
                            <KeyValueText
                              :classNames="{
                                text: 'font-weight-bold',
                              }"
                              >0 원</KeyValueText
                            >
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 탁송료 -->

                <!-- 출고가격 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue verticalAlign="center">
                          <KeyValueItem
                            :classNames="{
                              item: 'text-body-3',
                            }"
                          >
                            <KeyValueTitle>
                              <div class="text-body-4">출고가격</div>
                            </KeyValueTitle>
                            <KeyValueText
                              :classNames="{
                                text: 'font-weight-bold',
                              }"
                              >43,849,765 원</KeyValueText
                            >
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 출고가격 -->

                <!-- 계약번호 -->
                <!-- Case : 디폴트 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue verticalAlign="center">
                          <KeyValueItem
                            :classNames="{
                              item: 'text-body-3',
                            }"
                          >
                            <KeyValueTitle>
                              <div class="text-body-4">계약번호</div>
                            </KeyValueTitle>
                            <KeyValueText></KeyValueText>
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- //Case : 디폴트 -->

                <!-- Case : 상품 항목 - 차량 수 입력 시 -->
                <UiAccordionItem
                  :classNames="{ item: $style['estimate-list__item'] }"
                >
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue size="regular" verticalAlign="center">
                          <KeyValueItem :classNames="{ item: 'text-body-3' }">
                            <KeyValueTitle>
                              <div class="text-body-4">계약번호</div>
                            </KeyValueTitle>
                            <KeyValueText>
                              <div class="inline-wrap">
                                <TextButton
                                  theme="secondary"
                                  :underline="true"
                                  :class="$style['input-button']"
                                  >일괄입력</TextButton
                                >
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
                      <div :class="$style['contents-list']">
                        <ol
                          :class="[
                            $style['contents-list__list'],
                            $style['contract-list'],
                          ]"
                        >
                          <li :class="$style['contents-list__item']">
                            <div :class="$style['contents-list__head']">
                              <div :class="$style['contents-list__symbol']">
                                1
                              </div>
                              <div :class="$style['contents-list__title']">
                                <FormList
                                  :classNames="{
                                    wrap: 'row-margin-item-group',
                                  }"
                                >
                                  <FormListItem
                                    titleText="계약번호"
                                    target="#leaseRentEstimationSystemRent_contractNumber001"
                                  >
                                    <FormInvalid
                                      :error="state.contractNumberError001"
                                    >
                                      <InputBlock
                                        :error="state.contractNumberError001"
                                      >
                                        <InputBlockCell :flexible="true">
                                          <BasicInput
                                            title="계약번호 입력"
                                            id="leaseRentEstimationSystemRent_contractNumber001"
                                            type="number"
                                            pattern="\d*"
                                          />
                                        </InputBlockCell>
                                      </InputBlock>
                                      <FormInvalidMessage
                                        >Error Message</FormInvalidMessage
                                      >
                                    </FormInvalid>
                                  </FormListItem>
                                  <!-- Case : 즉시출고일 경우, 미노출 -->
                                  <FormListItem
                                    titleText="차대번호"
                                    titleOptionalText="(계약번호)"
                                    target="#leaseRentEstimationSystemRent_CarIdNumber001"
                                  >
                                    <FormInvalid
                                      :error="state.carIdNumberError001"
                                    >
                                      <InputBlock
                                        :error="state.carIdNumberError001"
                                      >
                                        <InputBlockCell :flexible="true">
                                          <BasicInput
                                            title="차대번호 입력"
                                            id="leaseRentEstimationSystemRent_CarIdNumber001"
                                          />
                                        </InputBlockCell>
                                      </InputBlock>
                                      <FormInvalidMessage
                                        >Error Message</FormInvalidMessage
                                      >
                                    </FormInvalid>
                                  </FormListItem>
                                  <!-- //Case : 즉시출고일 경우, 미노출 -->
                                  <FormListItem
                                    titleText="출고예정일"
                                    target="#leaseRentEstimationSystemPrePurchaseRegistCar_DateButton001"
                                  >
                                    <FormInvalid :error="state.dateError001">
                                      <InputBlock :error="state.dateError001">
                                        <InputBlockCell :flexible="true">
                                          <BasicDatepicker
                                            title="출고예정일"
                                            id="leaseRentEstimationSystemPrePurchaseRegistCar_Date001"
                                            buttonId="leaseRentEstimationSystemPrePurchaseRegistCar_DateButton001"
                                          />
                                        </InputBlockCell>
                                      </InputBlock>
                                      <FormInvalidMessage
                                        >Error Message</FormInvalidMessage
                                      >
                                    </FormInvalid>
                                  </FormListItem>
                                </FormList>
                              </div>
                            </div>
                          </li>

                          <li :class="$style['contents-list__item']">
                            <div :class="$style['contents-list__head']">
                              <div :class="$style['contents-list__symbol']">
                                2
                              </div>
                              <div :class="$style['contents-list__title']">
                                <FormList
                                  :classNames="{
                                    wrap: 'row-margin-item-group',
                                  }"
                                >
                                  <FormListItem
                                    titleText="계약번호"
                                    target="#leaseRentEstimationSystemRent_contractNumber001_001"
                                  >
                                    <FormInvalid
                                      :error="state.contractNumberError002"
                                    >
                                      <InputBlock
                                        :error="state.contractNumberError002"
                                      >
                                        <InputBlockCell :flexible="true">
                                          <BasicInput
                                            title="계약번호 입력"
                                            id="leaseRentEstimationSystemRent_contractNumber001_001"
                                            type="number"
                                            pattern="\d*"
                                          />
                                        </InputBlockCell>
                                      </InputBlock>
                                      <FormInvalidMessage
                                        >Error Message</FormInvalidMessage
                                      >
                                    </FormInvalid>
                                  </FormListItem>
                                  <!-- Case : 즉시출고일 경우, 미노출 -->
                                  <FormListItem
                                    titleText="차대번호"
                                    titleOptionalText="(계약번호)"
                                    target="#leaseRentEstimationSystemRent_contractNumber001_002"
                                  >
                                    <FormInvalid
                                      :error="state.carIdNumberError002"
                                    >
                                      <InputBlock
                                        :error="state.carIdNumberError002"
                                      >
                                        <InputBlockCell :flexible="true">
                                          <BasicInput
                                            title="차대번호 입력"
                                            id="leaseRentEstimationSystemRent_contractNumber001_002"
                                          />
                                        </InputBlockCell>
                                      </InputBlock>
                                      <FormInvalidMessage
                                        >Error Message</FormInvalidMessage
                                      >
                                    </FormInvalid>
                                  </FormListItem>
                                  <!-- //Case : 즉시출고일 경우, 미노출 -->
                                  <FormListItem
                                    titleText="출고예정일"
                                    target="#leaseRentEstimationSystemPrePurchaseRegistCar_DateButton001_001"
                                  >
                                    <FormInvalid :error="state.dateError002">
                                      <InputBlock :error="state.dateError002">
                                        <InputBlockCell :flexible="true">
                                          <BasicDatepicker
                                            title="출고예정일"
                                            id="leaseRentEstimationSystemPrePurchaseRegistCar_Date001_001"
                                            buttonId="leaseRentEstimationSystemPrePurchaseRegistCar_DateButton001_001"
                                          />
                                        </InputBlockCell>
                                      </InputBlock>
                                      <FormInvalidMessage
                                        >Error Message</FormInvalidMessage
                                      >
                                    </FormInvalid>
                                  </FormListItem>
                                </FormList>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </section>
                  </UiAccordionLayer>
                </UiAccordionItem>
                <!-- //Case : 상품 항목 - 차량 수 입력 시 -->
                <!-- // 계약번호 -->
              </UiAccordion>

              <div :class="$style['estimate-list__foot']">
                <ButtonList :classNames="{ wrap: 'row-margin-top-none' }">
                  <ButtonListItem>
                    <BasicButton size="small">전송하기</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </div>
            </section>
          </li>
          <!-- //Case : 전송하기 버튼 클릭 전 -->

          <!-- Case : 전송하기 버튼 클릭 후 -->
          <li class="row-margin-item-group">
            <section
              :class="[
                $style['estimate-list'],
                $style['estimate-list--disabled'],
              ]"
            >
              <div :class="$style['estimate-list__top']">
                <div class="flex-box">
                  <div class="flex-box__cell flex-1">
                    <h3 :class="$style['estimate-list__title']">1번 상품</h3>
                  </div>
                  <div class="flex-box__cell">
                    <DeleteButton theme="secondary" />
                  </div>
                </div>
              </div>

              <UiAccordion
                :classNames="{ wrap: $style['estimate-list__list'] }"
              >
                <!-- 상품 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <div :class="$style['product-setting']">
                          <div :class="$style['product-setting__title']">
                            상품
                          </div>
                          <div :class="$style['product-setting__contents']">
                            <BoxCheckList spacing="small" :wrap="true">
                              <BoxCheckListItem>
                                <BoxCheck
                                  :minSide="true"
                                  name="
                                    leaseRentEstimationSystemPrePurchaseRegistCarProducts002_check001
                                  "
                                  id="leaseRentEstimationSystemPrePurchaseRegistCarProducts002_check001_001"
                                  size="small"
                                  :disabled="true"
                                  :defaultChecked="true"
                                >
                                  <BoxCheckLabel>선구매</BoxCheckLabel>
                                </BoxCheck>
                              </BoxCheckListItem>
                              <BoxCheckListItem>
                                <BoxCheck
                                  :minSide="true"
                                  name="
                                    leaseRentEstimationSystemPrePurchaseRegistCarProducts002_check001
                                  "
                                  id="leaseRentEstimationSystemPrePurchaseRegistCarProducts002_check001_002"
                                  size="small"
                                  :disabled="true"
                                >
                                  <BoxCheckLabel>즉시출고</BoxCheckLabel>
                                </BoxCheck>
                              </BoxCheckListItem>
                            </BoxCheckList>

                            <FormList
                              :classNames="{ wrap: 'row-margin-item-group' }"
                            >
                              <FormListItem
                                titleText="차량 수"
                                target="#leaseRentEstimationSystemPrePurchaseRegistCar_carQuantity002"
                                :disabled="true"
                              >
                                <FormInvalid :error="state.carQuantityError002">
                                  <InputBlock
                                    :error="state.carQuantityError002"
                                    :disabled="true"
                                  >
                                    <InputBlockCell :flexible="true">
                                      <BasicInput
                                        title="차량 수 입력"
                                        id="leaseRentEstimationSystemPrePurchaseRegistCar_carQuantity002"
                                        pattern="\d*"
                                        :useDelete="false"
                                        align="right"
                                        :disabled="true"
                                        defaultValue="2"
                                      />
                                    </InputBlockCell>
                                    <template v-slot:innerRight>
                                      <div class="text-body-3">대</div>
                                    </template>
                                  </InputBlock>
                                  <FormInvalidMessage
                                    >Error Message</FormInvalidMessage
                                  >
                                </FormInvalid>
                              </FormListItem>
                            </FormList>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 상품 -->

                <!-- 모델 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue align="left" size="regular">
                          <KeyValueItem :classNames="{ item: 'text-body-3' }">
                            <KeyValueTitle>
                              <div class="text-body-4">모델</div>
                            </KeyValueTitle>
                            <KeyValueText>
                              2023년 LPG 2.0 LPe 2WD (면세가격) LE (26,293,639)
                            </KeyValueText>
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 모델 -->

                <!-- 색상 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue align="left" size="regular">
                          <KeyValueItem :classNames="{ item: 'text-body-3' }">
                            <KeyValueTitle>
                              <div class="text-body-4">색상</div>
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
                                  클라우드 펄 블랙 인조가죽 시트
                                </div>
                              </div>
                            </KeyValueText>
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 색상 -->

                <!-- 옵션 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue align="left" size="regular">
                          <KeyValueItem :classNames="{ item: 'text-body-3' }">
                            <KeyValueTitle>
                              <div class="text-body-4">옵션</div>
                            </KeyValueTitle>
                            <KeyValueText>
                              운적석파워시트(전동식 요추 받침장치 포함) + 동승석
                              파워시트 + 앞좌석 통풍 시트 + 뒷자석 열선시트
                              S-Link 패키지 Ⅰ 매직 테일게이트
                            </KeyValueText>
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 옵션 -->

                <!-- 차량가격 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue verticalAlign="center">
                          <KeyValueItem
                            :classNames="{
                              item: 'text-body-3',
                            }"
                          >
                            <KeyValueTitle>
                              <div class="text-body-4">차량가격</div>
                            </KeyValueTitle>
                            <KeyValueText
                              :classNames="{ text: 'font-weight-bold' }"
                              >46,700,000 원</KeyValueText
                            >
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 차량가격 -->

                <!-- 면세가격 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue verticalAlign="center">
                          <KeyValueItem
                            :classNames="{
                              item: 'text-body-3',
                            }"
                          >
                            <KeyValueTitle>
                              <div class="text-body-4">면세가격</div>
                            </KeyValueTitle>
                            <KeyValueText
                              :classNames="{ text: 'font-weight-bold' }"
                              >43,849,765 원</KeyValueText
                            >
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 면세가격 -->

                <!-- 할인금액 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue verticalAlign="center">
                          <KeyValueItem
                            :classNames="{
                              item: 'text-body-3',
                            }"
                          >
                            <KeyValueTitle>
                              <div class="text-body-4">할인금액</div>
                            </KeyValueTitle>
                            <KeyValueText
                              :classNames="{
                                text: 'color-green font-weight-bold',
                              }"
                              >0 원</KeyValueText
                            >
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 할인금액 -->

                <!-- 탁송료 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue verticalAlign="center">
                          <KeyValueItem
                            :classNames="{
                              item: 'text-body-3',
                            }"
                          >
                            <KeyValueTitle>
                              <div class="text-body-4">탁송료</div>
                            </KeyValueTitle>
                            <KeyValueText
                              :classNames="{
                                text: 'font-weight-bold',
                              }"
                              >0 원</KeyValueText
                            >
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 탁송료 -->

                <!-- 출고가격 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue verticalAlign="center">
                          <KeyValueItem
                            :classNames="{
                              item: 'text-body-3',
                            }"
                          >
                            <KeyValueTitle>
                              <div class="text-body-4">출고가격</div>
                            </KeyValueTitle>
                            <KeyValueText
                              :classNames="{
                                text: 'font-weight-bold',
                              }"
                              >43,849,765 원</KeyValueText
                            >
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 출고가격 -->

                <!-- 계약번호 -->
                <!-- Case : 디폴트 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue verticalAlign="center">
                          <KeyValueItem
                            :classNames="{
                              item: 'text-body-3',
                            }"
                          >
                            <KeyValueTitle>
                              <div class="text-body-4">계약번호</div>
                            </KeyValueTitle>
                            <KeyValueText></KeyValueText>
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- //Case : 디폴트 -->

                <!-- Case : 상품 항목 - 차량 수 입력 시 -->
                <UiAccordionItem
                  :classNames="{ item: $style['estimate-list__item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue size="regular" verticalAlign="center">
                          <KeyValueItem :classNames="{ item: 'text-body-3' }">
                            <KeyValueTitle>
                              <div class="text-body-4">계약번호</div>
                            </KeyValueTitle>
                            <KeyValueText>
                              <TextButton
                                theme="secondary"
                                :underline="true"
                                :class="$style['input-button']"
                                tagName="span"
                                >일괄입력</TextButton
                              >
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
                      <div :class="$style['contents-list']">
                        <ol
                          :class="[
                            $style['contents-list__list'],
                            $style['contract-list'],
                          ]"
                        >
                          <li :class="$style['contents-list__item']">
                            <div :class="$style['contents-list__head']">
                              <div :class="$style['contents-list__symbol']">
                                1
                              </div>
                              <div :class="$style['contents-list__title']">
                                <FormList
                                  :classNames="{
                                    wrap: 'row-margin-item-group',
                                  }"
                                >
                                  <FormListItem
                                    titleText="계약번호"
                                    target="#leaseRentEstimationSystemRent_contractNumber002"
                                    :disabled="true"
                                  >
                                    <FormInvalid
                                      :error="state.contractNumberError003"
                                    >
                                      <InputBlock
                                        :error="state.contractNumberError003"
                                        :disabled="true"
                                      >
                                        <InputBlockCell :flexible="true">
                                          <BasicInput
                                            title="계약번호 입력"
                                            id="leaseRentEstimationSystemRent_contractNumber002"
                                            type="number"
                                            pattern="\d*"
                                            defaultValue="9000321511"
                                            :disabled="true"
                                          />
                                        </InputBlockCell>
                                      </InputBlock>
                                      <FormInvalidMessage
                                        >Error Message</FormInvalidMessage
                                      >
                                    </FormInvalid>
                                  </FormListItem>
                                  <!-- Case : 즉시출고일 경우, 미노출 -->
                                  <FormListItem
                                    titleText="차대번호"
                                    titleOptionalText="(계약번호)"
                                    target="#leaseRentEstimationSystemRent_CarIdNumber002"
                                    :disabled="true"
                                  >
                                    <FormInvalid
                                      :error="state.carIdNumberError003"
                                    >
                                      <InputBlock
                                        :error="state.carIdNumberError003"
                                        :disabled="true"
                                      >
                                        <InputBlockCell :flexible="true">
                                          <BasicInput
                                            title="차대번호 입력"
                                            id="leaseRentEstimationSystemRent_CarIdNumber002"
                                            defaultValue="DWAB87436A1538752"
                                            :disabled="true"
                                          />
                                        </InputBlockCell>
                                      </InputBlock>
                                      <FormInvalidMessage
                                        >Error Message</FormInvalidMessage
                                      >
                                    </FormInvalid>
                                  </FormListItem>
                                  <!-- //Case : 즉시출고일 경우, 미노출 -->
                                  <FormListItem
                                    titleText="출고예정일"
                                    target="#leaseRentEstimationSystemPrePurchaseRegistCar_DateButton002"
                                    :disabled="true"
                                  >
                                    <FormInvalid :error="state.dateError003">
                                      <InputBlock
                                        :error="state.dateError003"
                                        :disabled="true"
                                      >
                                        <InputBlockCell :flexible="true">
                                          <BasicDatepicker
                                            title="출고예정일"
                                            id="leaseRentEstimationSystemPrePurchaseRegistCar_Date002"
                                            buttonId="leaseRentEstimationSystemPrePurchaseRegistCar_DateButton002"
                                            defaultValue="2020.12.12"
                                            :disabled="true"
                                          />
                                        </InputBlockCell>
                                      </InputBlock>
                                      <FormInvalidMessage
                                        >Error Message</FormInvalidMessage
                                      >
                                    </FormInvalid>
                                  </FormListItem>
                                </FormList>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </div>
                    </section>
                  </UiAccordionLayer>
                </UiAccordionItem>
                <!-- //Case : 상품 항목 - 차량 수 입력 시 -->
                <!-- // 계약번호 -->
              </UiAccordion>

              <div :class="$style['estimate-list__foot']">
                <ButtonList :classNames="{ wrap: 'row-margin-top-none' }">
                  <ButtonListItem>
                    <BasicButton size="small" disabled>전송완료</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </div>
            </section>
          </li>
          <!-- //Case : 전송하기 버튼 클릭 후 -->
        </ul>
        <!-- // Case : 차량 선택 후 -->
      </section>

      <section :class="[$style['notice-section'], 'row-margin-contents']">
        <h3 :class="$style['notice-section__title']">등록 유의사항</h3>
        <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              전송 된 차량 가격을 다시 한번 확인하여 주시기 바랍니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              중복되어 신청되지 않게 주의해 주세요.
            </div>
          </li>
        </ul>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemPrePurchaseRegistCar.scss';
</style>
