<script>
// LR_M03_p001
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
import DocumentView from '@/components/ui/viewer/DocumentView.vue';

import DocumentEstimate002Contents from '@/views/document/DocumentEstimate002Contents.vue';
import DocumentEstimate003Contents from '@/views/document/DocumentEstimate003Contents.vue';

import IconScroll from '@/assets/images/icon/scroll.svg?component';

import dummyDataEstimate from '@/assets/_dummyData/견적서asis/견적서HTML샘플(중고리스_운용리스).html?raw';

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
    DocumentView,
    DocumentEstimate002Contents,
    DocumentEstimate003Contents,
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
      carYearError: false,
      carModelError: false,
      salePriceError: false,
      feeCMError: false,
      feeAGError: false,
      publicBondDiscountError: false,
      etcPriceError: false,
      consignmentPriceError: false,
      interestSubsidyError: false,
      suppliesSupportError: false,
      advancePaymentError: false,
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

    onMounted(() => {
      store.ui.header.setTitle(() => '중고 리스');
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

          <UiAccordion
            :once="true"
            :classNames="{ wrap: $style['estimate-list__list'] }"
          >
            <li :class="$style['estimate-list__item']">
              <div :class="$style['estimate-list__head']">
                <div :class="[$style['estimate-list__block'], 'display-block']">
                  <BoxCheckList spacing="small" wrap="true">
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseCarSelect001"
                        id="leaseRentEstimationSystemUsedLeaseCarSelect001_001"
                        size="small"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>일반 중고차</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseCarSelect001"
                        id="leaseRentEstimationSystemUsedLeaseCarSelect001_002"
                        size="small"
                      >
                        <BoxCheckLabel>인증 중고차</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                  </BoxCheckList>

                  <div
                    :class="[
                      $style['check-list'],
                      $style['check-list--col-2'],
                      'row-margin-item-group',
                    ]"
                  >
                    <ul :class="$style['check-list__list']">
                      <li :class="$style['check-list__item']">
                        <RadioButton
                          name="leaseRentEstimationSystemUsedLeaseSearch"
                          id="leaseRentEstimationSystemUsedLeaseSearch001"
                          theme="tertiary"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>차량번호</RadioButtonLabelText>
                        </RadioButton>
                      </li>
                      <li :class="$style['check-list__item']">
                        <RadioButton
                          name="leaseRentEstimationSystemUsedLeaseSearch"
                          id="leaseRentEstimationSystemUsedLeaseSearch002"
                          theme="tertiary"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>차량명</RadioButtonLabelText>
                        </RadioButton>
                      </li>
                    </ul>
                  </div>

                  <FormList>
                    <!-- Case : 차량번호 선택시 노출 -->
                    <FormListItem
                      titleText="차량번호"
                      target="#leaseRentEstimationSystemUsedLeaseCarNumber"
                    >
                      <FormInvalid :error="state.carNumberError">
                        <InputBlock :error="state.carNumberError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="차량번호"
                              id="leaseRentEstimationSystemUsedLeaseCarNumber"
                            />
                          </InputBlockCell>
                          <template v-slot:right>
                            <BasicButton size="mini" theme="tertiary">
                              조회
                            </BasicButton>
                          </template>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                    <!-- Case : 차량번호 선택시 노출 -->

                    <!-- Case : 차량명 선택시 노출 -->
                    <FormListItem
                      titleText="차량연식"
                      target="#leaseRentEstimationSystemUsedLeaseCarYear"
                    >
                      <FormInvalid :error="state.carYearError">
                        <InputBlock :error="state.carYearError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="차량연식"
                              id="leaseRentEstimationSystemUsedLeaseCarYear"
                            />
                          </InputBlockCell>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>

                    <FormListItem
                      titleText="차종"
                      target="#leaseRentEstimationSystemUsedLeaseCarModel"
                    >
                      <FormInvalid :error="state.carModelError">
                        <InputBlock :error="state.carModelError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="차종"
                              id="leaseRentEstimationSystemUsedLeaseCarModel"
                            />
                          </InputBlockCell>
                        </InputBlock>
                        <FormInvalidMessage>Error Message</FormInvalidMessage>
                      </FormInvalid>
                    </FormListItem>
                    <!-- // Case : 차량명 선택시 노출 -->
                  </FormList>

                  <div class="row-margin-item-group">
                    <BasicButton size="small" theme="tertiary"
                      >조회</BasicButton
                    >
                  </div>
                </div>
              </div>
            </li>

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
                          <div class="text-body-4">차량선택</div>
                        </KeyValueTitle>
                        <KeyValueText
                          >기아 K5(DL3) 2.0 가솔린 프레스티지</KeyValueText
                        >
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
                        name="leaseRentEstimationSystemUsedLeaseCarSelect002"
                        id="leaseRentEstimationSystemUsedLeaseCarSelect002_001"
                        :defaultChecked="true"
                      >
                        <RadioButtonObject />
                        <RadioButtonLabelText>
                          <span class="display-block"
                            >기아 K5(DL3) 2.0 가솔린 프레스티지</span
                          >
                        </RadioButtonLabelText>
                      </RadioButton>
                    </li>
                    <li class="row-margin-item-group">
                      <RadioButton
                        theme="tertiary"
                        :full="true"
                        name="leaseRentEstimationSystemUsedLeaseCarSelect002"
                        id="leaseRentEstimationSystemUsedLeaseCarSelect002_002"
                      >
                        <RadioButtonObject />
                        <RadioButtonLabelText>
                          <span class="display-block"
                            >기아 K5(DL3) 2.0 가솔린 트렌디</span
                          >
                        </RadioButtonLabelText>
                      </RadioButton>
                    </li>
                    <li class="row-margin-item-group">
                      <RadioButton
                        theme="tertiary"
                        :full="true"
                        name="leaseRentEstimationSystemUsedLeaseCarSelect002"
                        id="leaseRentEstimationSystemUsedLeaseCarSelect002_003"
                      >
                        <RadioButtonObject />
                        <RadioButtonLabelText>
                          <span class="display-block"
                            >기아 K5(DL3) 2.0 가솔린 시그니처</span
                          >
                        </RadioButtonLabelText>
                      </RadioButton>
                    </li>
                    <li class="row-margin-item-group">
                      <RadioButton
                        theme="tertiary"
                        :full="true"
                        name="leaseRentEstimationSystemUsedLeaseCarSelect002"
                        id="leaseRentEstimationSystemUsedLeaseCarSelect002_004"
                      >
                        <RadioButtonObject />
                        <RadioButtonLabelText>
                          <span class="display-block"
                            >기아 K5(DL3) 2.0 가솔린 노블레스</span
                          >
                        </RadioButtonLabelText>
                      </RadioButton>
                    </li>
                  </ul>
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
            <!-- //Case : 차량번호, 차량명 선택시 노출 -->

            <!-- Case : 차량번호, 차량명 선택시 노출 -->
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
                          <div class="text-body-4">등록년월</div>
                        </KeyValueTitle>
                        <KeyValueText>2022년 1월</KeyValueText>
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
                  <BoxCheckList spacing="small" :wrap="true" :col="3">
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterYear"
                        id="leaseRentEstimationSystemUsedLeaseRegisterYear_001"
                        size="small"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>2022년</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterYear"
                        id="leaseRentEstimationSystemUsedLeaseRegisterYear_002"
                        size="small"
                      >
                        <BoxCheckLabel>2021년</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterYear"
                        id="leaseRentEstimationSystemUsedLeaseRegisterYear_003"
                        size="small"
                      >
                        <BoxCheckLabel>2020년</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterYear"
                        id="leaseRentEstimationSystemUsedLeaseRegisterYear_004"
                        size="small"
                      >
                        <BoxCheckLabel>2019년</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterYear"
                        id="leaseRentEstimationSystemUsedLeaseRegisterYear_005"
                        size="small"
                      >
                        <BoxCheckLabel>2018년</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterYear"
                        id="leaseRentEstimationSystemUsedLeaseRegisterYear_006"
                        size="small"
                      >
                        <BoxCheckLabel>2017년</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterYear"
                        id="leaseRentEstimationSystemUsedLeaseRegisterYear_007"
                        size="small"
                      >
                        <BoxCheckLabel>2016년</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterYear"
                        id="leaseRentEstimationSystemUsedLeaseRegisterYear_008"
                        size="small"
                      >
                        <BoxCheckLabel>2015년</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterYear"
                        id="leaseRentEstimationSystemUsedLeaseRegisterYear_009"
                        size="small"
                      >
                        <BoxCheckLabel>2014년</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterYear"
                        id="leaseRentEstimationSystemUsedLeaseRegisterYear_010"
                        size="small"
                      >
                        <BoxCheckLabel>2013년</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterYear"
                        id="leaseRentEstimationSystemUsedLeaseRegisterYear_011"
                        size="small"
                      >
                        <BoxCheckLabel>2012년</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                  </BoxCheckList>

                  <BoxCheckList
                    spacing="small"
                    :wrap="true"
                    :col="3"
                    :classNames="{ wrap: 'row-margin-item-group' }"
                  >
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterMonth"
                        id="leaseRentEstimationSystemUsedLeaseRegisterMonth_001"
                        size="small"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>1월</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterMonth"
                        id="leaseRentEstimationSystemUsedLeaseRegisterMonth_002"
                        size="small"
                      >
                        <BoxCheckLabel>2월</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterMonth"
                        id="leaseRentEstimationSystemUsedLeaseRegisterMonth_003"
                        size="small"
                      >
                        <BoxCheckLabel>3월</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterMonth"
                        id="leaseRentEstimationSystemUsedLeaseRegisterMonth_004"
                        size="small"
                      >
                        <BoxCheckLabel>4월</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterMonth"
                        id="leaseRentEstimationSystemUsedLeaseRegisterMonth_005"
                        size="small"
                      >
                        <BoxCheckLabel>5월</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterMonth"
                        id="leaseRentEstimationSystemUsedLeaseRegisterMonth_006"
                        size="small"
                      >
                        <BoxCheckLabel>6월</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterMonth"
                        id="leaseRentEstimationSystemUsedLeaseRegisterMonth_007"
                        size="small"
                      >
                        <BoxCheckLabel>7월</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterMonth"
                        id="leaseRentEstimationSystemUsedLeaseRegisterMonth_008"
                        size="small"
                      >
                        <BoxCheckLabel>8월</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterMonth"
                        id="leaseRentEstimationSystemUsedLeaseRegisterMonth_009"
                        size="small"
                      >
                        <BoxCheckLabel>9월</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterMonth"
                        id="leaseRentEstimationSystemUsedLeaseRegisterMonth_010"
                        size="small"
                      >
                        <BoxCheckLabel>10월</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterMonth"
                        id="leaseRentEstimationSystemUsedLeaseRegisterMonth_011"
                        size="small"
                      >
                        <BoxCheckLabel>11월</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseRegisterMonth"
                        id="leaseRentEstimationSystemUsedLeaseRegisterMonth_012"
                        size="small"
                      >
                        <BoxCheckLabel>12월</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                  </BoxCheckList>
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
          </UiAccordion>
        </section>

        <div :class="$style['total']">
          <h3 class="text-body-3 row-margin-item-group">판매가격</h3>
          <FormList>
            <FormListItem
              titleText="금액"
              target="#leaseRentEstimationSystemUsedLeaseSalePrice"
            >
              <FormInvalid :error="state.salePriceError">
                <InputBlock :error="state.salePriceError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="금액"
                      id="leaseRentEstimationSystemUsedLeaseSalePrice"
                      pattern="\d*"
                      :useDelete="false"
                      align="right"
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
                          <BoxCheckList spacing="small">
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                name="leaseRentEstimationSystemUsedLeaseProduct"
                                id="leaseRentEstimationSystemUsedLeaseProduct_001"
                                size="small"
                                :defaultChecked="true"
                              >
                                <BoxCheckLabel>운용리스</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                name="leaseRentEstimationSystemUsedLeaseProduct"
                                id="leaseRentEstimationSystemUsedLeaseProduct_002"
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
                                name="leaseRentEstimationSystemUsedLeaseCustomerType"
                                id="leaseRentEstimationSystemUsedLeaseCustomerType_001"
                                size="small"
                                :defaultChecked="true"
                              >
                                <BoxCheckLabel>개인</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                name="leaseRentEstimationSystemUsedLeaseCustomerType"
                                id="leaseRentEstimationSystemUsedLeaseCustomerType_002"
                                size="small"
                              >
                                <BoxCheckLabel>개인사업자</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                name="leaseRentEstimationSystemUsedLeaseCustomerType"
                                id="leaseRentEstimationSystemUsedLeaseCustomerType_003"
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
                        <KeyValueText>리스사</KeyValueText>
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
                        <KeyValueText>고객별도</KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 자동차세 -->

            <!-- Case : 인증중고차일 경우, 노출 -->
            <!-- Case : 제휴사 있을 때 -->
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
                        name="leaseRentEstimationSystemUsedLeaseCheck001"
                        id="leaseRentEstimationSystemUsedLeaseCheck001_001"
                        size="small"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>코오롱글로벌(주)</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseCheck001"
                        id="leaseRentEstimationSystemUsedLeaseCheck001_002"
                        size="small"
                      >
                        <BoxCheckLabel>한성모터스주식회사</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemUsedLeaseCheck001"
                        id="leaseRentEstimationSystemUsedLeaseCheck001_003"
                        size="small"
                      >
                        <BoxCheckLabel>한성모터스주식회사</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        name="leaseRentEstimationSystemUsedLeaseCheck001"
                        id="leaseRentEstimationSystemUsedLeaseCheck001_004"
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
            <!-- // Case : 제휴사 있을 때 -->

            <!-- Case : 제휴사 없을 때 -->
            <!-- 제휴사 -->
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
            <!-- // 제휴사 -->
            <!-- //Case :  제휴사 없을 때 -->
            <!-- //Case : 인증중고차일 경우, 노출 -->

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
                          CM : 0.003% (690,000원)<br />
                          AG : 0.000% (000,000원)
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
                  <!-- Case : 상품 - 운용리스 선택시 노출 -->
                  <!-- Case : 일반중고차일 경우 -->
                  <NoticeText :classNames="{ wrap: 'row-margin-item-group' }"
                    >한도: AG+딜러 9.9% 이내</NoticeText
                  >
                  <!-- //Case : 일반중고차일 경우 -->

                  <!-- Case : 인증중고차일 경우 -->
                  <NoticeText :classNames="{ wrap: 'row-margin-item-group' }"
                    >한도: AG+딜러 9.9% 이내(단 AG 3%이내)</NoticeText
                  >
                  <!-- //Case : 인증중고차일 경우 -->
                  <!-- //Case : 상품 - 운용리스 선택시 노출 -->

                  <!-- Case : 상품 - 금융리스 선택시 노출 -->
                  <NoticeText :classNames="{ wrap: 'row-margin-item-group' }"
                    >한도: 500만원까지 3%, 500만원 초과 최대 2.25%</NoticeText
                  >
                  <!-- // Case : 상품 - 금융리스 선택시 노출 -->
                  <FormList>
                    <FormListItem
                      titleText="CM"
                      target="#leaseRentEstimationSystemUsedLeaseFeeCMRatio"
                    >
                      <FormInvalid :error="state.feeCMError">
                        <InputBlock :error="state.feeCMError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="CM 금액"
                              id="leaseRentEstimationSystemUsedLeaseFeeCMPrice"
                              pattern="\d*"
                              :useDelete="false"
                              align="right"
                              defaultValue="690,000"
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
                              id="leaseRentEstimationSystemUsedLeaseFeeCMRatio"
                              pattern="\d*"
                              :useDelete="false"
                              align="right"
                              defaultValue="0.03"
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
                      target="#leaseRentEstimationSystemUsedLeaseFeeAGRatio"
                    >
                      <FormInvalid :error="state.feeAGError">
                        <InputBlock :error="state.feeAGError">
                          <InputBlockCell :flexible="true">
                            <BasicInput
                              title="AG 금액"
                              id="leaseRentEstimationSystemUsedLeaseFeeAGPrice"
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
                              id="leaseRentEstimationSystemUsedLeaseFeeAGRatio"
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
                        name="leaseRentEstimationSystemUsedLeaseCheck002"
                        id="leaseRentEstimationSystemUsedLeaseCheck002_001"
                        size="small"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>대구지점</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="leaseRentEstimationSystemUsedLeaseCheck002"
                        id="leaseRentEstimationSystemUsedLeaseCheck002_002"
                        size="small"
                      >
                        <BoxCheckLabel>강남지점</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                  </BoxCheckList>
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
            <!-- // 취급지점 -->

            <!-- 취득세 -->
            <!-- Case : 상품 - 운용리스 선택시 노출  -->
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
                                  name="leaseRentEstimationSystemUsedLeaseAcquisitionTax"
                                  id="leaseRentEstimationSystemUsedLeaseAcquisitionTax_001"
                                  size="small"
                                  :defaultChecked="true"
                                >
                                  <BoxCheckLabel>포함</BoxCheckLabel>
                                </BoxCheck>
                              </BoxCheckListItem>
                              <BoxCheckListItem>
                                <BoxCheck
                                  :minSide="true"
                                  name="leaseRentEstimationSystemUsedLeaseAcquisitionTax"
                                  id="leaseRentEstimationSystemUsedLeaseAcquisitionTax_002"
                                  size="small"
                                >
                                  <BoxCheckLabel>고객별도</BoxCheckLabel>
                                </BoxCheck>
                              </BoxCheckListItem>
                            </BoxCheckList>

                            <div class="align-right row-margin-item-group">
                              <strong class="text-body-3">0 원</strong>
                            </div>
                          </div>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- //Case : 상품 - 운용리스 선택시 노출  -->

            <!-- Case : 상품 - 금융리스 선택시 노출  -->
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
                          <div class="flex-box">
                            <div class="flex-box__cell">고객별도</div>
                            <div class="flex-box__cell flex-1 align-right">
                              <strong>0 원</strong>
                            </div>
                          </div>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- //Case : 상품 - 금융리스 선택시 노출  -->
            <!-- // 취득세 -->

            <!-- 감면 -->
            <li :class="$style['estimate-list__item']">
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="medium" verticalAlign="center">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">감면</div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <div :class="$style['check-list']">
                            <ul :class="$style['check-list__list']">
                              <li :class="$style['check-list__item']">
                                <CheckBox
                                  id="leaseRentEstimationSystemUsedLeaseReduction001_001"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText>경차</CheckBoxLabelText>
                                </CheckBox>
                              </li>
                              <li :class="$style['check-list__item']">
                                <CheckBox
                                  id="leaseRentEstimationSystemUsedLeaseReduction001_002"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >하이브리드</CheckBoxLabelText
                                  >
                                </CheckBox>
                              </li>
                              <li :class="$style['check-list__item']">
                                <CheckBox
                                  id="leaseRentEstimationSystemUsedLeaseReduction001_003"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >전기/수소차</CheckBoxLabelText
                                  >
                                </CheckBox>
                              </li>
                            </ul>
                          </div>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 감면 -->

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
                          <!-- Case : 상품 - 운용리스일 경우 -->
                          <div class="row-margin-item-group">
                            <BoxCheckList spacing="small">
                              <BoxCheckListItem>
                                <BoxCheck
                                  :minSide="true"
                                  name="leaseRentEstimationSystemUsedLeasePublicBondDiscount"
                                  id="leaseRentEstimationSystemUsedLeasePublicBondDiscount_001"
                                  size="small"
                                  :defaultChecked="true"
                                >
                                  <BoxCheckLabel>포함</BoxCheckLabel>
                                </BoxCheck>
                              </BoxCheckListItem>
                              <BoxCheckListItem>
                                <BoxCheck
                                  :minSide="true"
                                  name="leaseRentEstimationSystemUsedLeasePublicBondDiscount"
                                  id="leaseRentEstimationSystemUsedLeasePublicBondDiscount_002"
                                  size="small"
                                >
                                  <BoxCheckLabel>고객별도</BoxCheckLabel>
                                </BoxCheck>
                              </BoxCheckListItem>
                            </BoxCheckList>
                          </div>
                          <!-- //Case : 상품 - 운용리스일 경우 -->

                          <!-- Case : 상품 - 금융리스일 경우 -->
                          <div class="row-margin-item-group">고객별도</div>
                          <!-- //Case : 상품 - 금융리스일 경우 -->

                          <FormList>
                            <FormListItem
                              titleText="금액"
                              target="#leaseRentEstimationSystemUsedLeasePublicBondDiscountPrice"
                            >
                              <FormInvalid
                                :error="state.publicBondDiscountError"
                              >
                                <InputBlock
                                  :error="state.publicBondDiscountError"
                                >
                                  <InputBlockCell :flexible="true">
                                    <BasicInput
                                      title="공채할인 금액"
                                      id="leaseRentEstimationSystemUsedLeasePublicBondDiscountPrice"
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
                          <div>
                            <div class="row-margin-item-group">고객별도</div>
                            <FormList>
                              <FormListItem
                                titleText="금액"
                                target="#leaseRentEstimationSystemUsedLeaseEtcPrice"
                              >
                                <FormInvalid :error="state.etcPriceError">
                                  <InputBlock :error="state.etcPriceError">
                                    <InputBlockCell :flexible="true">
                                      <BasicInput
                                        title="기타비용 금액"
                                        id="leaseRentEstimationSystemUsedLeaseEtcPrice"
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
                          </div>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 기타비용 -->

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
                          <div>
                            <div class="row-margin-item-group">고객별도</div>
                            <FormList>
                              <FormListItem
                                titleText="금액"
                                target="#leaseRentEstimationSystemUsedLeaseConsignmentPrice"
                              >
                                <FormInvalid
                                  :error="state.consignmentPriceError"
                                >
                                  <InputBlock
                                    :error="state.consignmentPriceError"
                                  >
                                    <InputBlockCell :flexible="true">
                                      <BasicInput
                                        title="탁송료 금액"
                                        id="leaseRentEstimationSystemUsedLeaseConsignmentPrice"
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
                          </div>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 탁송료 -->

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
                                  name="leaseRentEstimationSystemUsedLeaseInterestSubsidy"
                                  id="leaseRentEstimationSystemUsedLeaseInterestSubsidy_001"
                                  size="small"
                                  :defaultChecked="true"
                                >
                                  <BoxCheckLabel>N</BoxCheckLabel>
                                </BoxCheck>
                              </BoxCheckListItem>
                              <BoxCheckListItem>
                                <BoxCheck
                                  :minSide="true"
                                  name="leaseRentEstimationSystemUsedLeaseInterestSubsidy"
                                  id="leaseRentEstimationSystemUsedLeaseInterestSubsidy_002"
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
                              target="#leaseRentEstimationSystemUsedLeaseInterestSubsidyPrice"
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
                                      id="leaseRentEstimationSystemUsedLeaseInterestSubsidyPrice"
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

            <!-- Case : 상품 - 금융리스 선택시 노출 -->
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
                              target="#leaseRentEstimationSystemUsedLeaseAdvancePaymentPrice"
                            >
                              <FormInvalid :error="state.advancePaymentError">
                                <InputBlock :error="state.advancePaymentError">
                                  <InputBlockCell :flexible="true">
                                    <BasicInput
                                      title="선수금 금액"
                                      id="leaseRentEstimationSystemUsedLeaseAdvancePaymentPrice"
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
            <!-- // Case : 상품 - 금융리스 선택시 노출 -->
          </UiAccordion>
        </div>

        <div :class="[$style['total'], 'row-margin-none']">
          <!-- Case : 취득원가 계산 전 -->
          <KeyValue verticalAlign="center">
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
          </KeyValue>
          <!-- //Case : 취득원가 계산 전 -->

          <!-- Case : 취득원가 계산 후 -->
          <KeyValue verticalAlign="center">
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
                  <UnitText rightUnit="원" align="right">47,097,665</UnitText>
                </div>
              </KeyValueText>
            </KeyValueItem>
          </KeyValue>
          <!-- //Case : 취득원가 계산 후 -->
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

        <!-- Case : 취득원가 계산 전 -->
        <div :class="$style['empty']">
          <p :class="$style['empty__text']">취득원가를 먼저 계산해 주세요</p>
        </div>
        <!-- // Case : 취득원가 계산 전 -->

        <!-- Case : 취득원가 계산 후 -->
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
                        :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_On`"
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
                                <div>구매/반납</div>
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
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check001`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check001_001`"
                              size="small"
                            >
                              <BoxCheckLabel>12개월</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check001`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check001_002`"
                              size="small"
                            >
                              <BoxCheckLabel>24개월</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check001`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check001_003`"
                              size="small"
                              :defaultChecked="true"
                            >
                              <BoxCheckLabel>36개월</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check001`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check001_004`"
                              size="small"
                            >
                              <BoxCheckLabel>48개월</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check001`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check001_005`"
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
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check002`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check002_001`"
                              size="small"
                            >
                              <BoxCheckLabel>20,000 km</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check002`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check002_002`"
                              size="small"
                              :defaultChecked="true"
                            >
                              <BoxCheckLabel>30,000 km</BoxCheckLabel>
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
                            :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                            :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_000`"
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
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_001`"
                              size="small"
                            >
                              <BoxCheckLabel>5%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_002`"
                              size="small"
                            >
                              <BoxCheckLabel>10%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_003`"
                              size="small"
                            >
                              <BoxCheckLabel>15%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_004`"
                              size="small"
                            >
                              <BoxCheckLabel>20%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_005`"
                              size="small"
                            >
                              <BoxCheckLabel>25%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_006`"
                              size="small"
                            >
                              <BoxCheckLabel>30%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_007`"
                              size="small"
                            >
                              <BoxCheckLabel>35%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_008`"
                              size="small"
                            >
                              <BoxCheckLabel>40%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_009`"
                              size="small"
                            >
                              <BoxCheckLabel>45%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_010`"
                              size="small"
                            >
                              <BoxCheckLabel>50%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_011`"
                              size="small"
                            >
                              <BoxCheckLabel>55%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_012`"
                              size="small"
                            >
                              <BoxCheckLabel>60%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_013`"
                              size="small"
                            >
                              <BoxCheckLabel>65%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_014`"
                              size="small"
                            >
                              <BoxCheckLabel>70%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_015`"
                              size="small"
                            >
                              <BoxCheckLabel>75%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_016`"
                              size="small"
                            >
                              <BoxCheckLabel>80%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_017`"
                              size="small"
                            >
                              <BoxCheckLabel>85%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_018`"
                              size="small"
                            >
                              <BoxCheckLabel>90%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_019`"
                              size="small"
                            >
                              <BoxCheckLabel>95%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check003_020`"
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
                            :target="`#leaseRentEstimationSystemUsedLeaseProducts${i}_prepaymentsRatioButton`"
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
                                    :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_prepaymentsRatio`"
                                    :buttonId="`leaseRentEstimationSystemUsedLeaseProducts${i}_prepaymentsRatioButton`"
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
                            :target="`#leaseRentEstimationSystemUsedLeaseProducts${i}_prepaymentsPriceButton`"
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
                                    :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_prepaymentsPrice`"
                                    :buttonId="`leaseRentEstimationSystemUsedLeaseProducts${i}_prepaymentsPriceButton`"
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
                            :target="`#leaseRentEstimationSystemUsedLeaseProducts${i}_prepaymentsPriceInput`"
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
                                    :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_prepaymentsPriceInput`"
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
                            :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004`"
                            :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004_000`"
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
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004_001`"
                              size="small"
                            >
                              <BoxCheckLabel>5%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004_002`"
                              size="small"
                            >
                              <BoxCheckLabel>10%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004_003`"
                              size="small"
                            >
                              <BoxCheckLabel>15%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004_004`"
                              size="small"
                            >
                              <BoxCheckLabel>20%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004_005`"
                              size="small"
                            >
                              <BoxCheckLabel>25%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004_006`"
                              size="small"
                            >
                              <BoxCheckLabel>30%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004_007`"
                              size="small"
                            >
                              <BoxCheckLabel>35%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004_008`"
                              size="small"
                            >
                              <BoxCheckLabel>40%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004_009`"
                              size="small"
                            >
                              <BoxCheckLabel>45%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004_010`"
                              size="small"
                            >
                              <BoxCheckLabel>50%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004_011`"
                              size="small"
                            >
                              <BoxCheckLabel>55%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004_012`"
                              size="small"
                            >
                              <BoxCheckLabel>60%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004_013`"
                              size="small"
                            >
                              <BoxCheckLabel>65%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004_014`"
                              size="small"
                            >
                              <BoxCheckLabel>70%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004_015`"
                              size="small"
                            >
                              <BoxCheckLabel>75%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004_016`"
                              size="small"
                            >
                              <BoxCheckLabel>80%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004_017`"
                              size="small"
                            >
                              <BoxCheckLabel>85%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004_018`"
                              size="small"
                            >
                              <BoxCheckLabel>90%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check004_019`"
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
                            :target="`#leaseRentEstimationSystemUsedLeaseProducts${i}_depositRatioButton`"
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
                                    :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_depositRatio`"
                                    :buttonId="`leaseRentEstimationSystemUsedLeaseProducts${i}_depositRatioButton`"
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
                            :target="`#leaseRentEstimationSystemUsedLeaseProducts${i}_depositPriceButton`"
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
                                    :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_depositPrice`"
                                    :buttonId="`leaseRentEstimationSystemUsedLeaseProducts${i}_depositPriceButton`"
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
                            :target="`#leaseRentEstimationSystemUsedLeaseProducts${i}_depositPriceInput`"
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
                                    :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_depositPriceInput`"
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
                                    최대(48%)
                                  </div>
                                  <div class="flex-box__cell">
                                    <strong>33,810,000 원</strong>
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
                            :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                            :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_000`"
                            size="small"
                            :defaultChecked="true"
                          >
                            <BoxCheckLabel>최대(48%)</BoxCheckLabel>
                          </BoxCheck>
                        </div>
                        <BoxCheckList spacing="small" :wrap="true" :col="4">
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_001`"
                              size="small"
                            >
                              <BoxCheckLabel>47%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_002`"
                              size="small"
                            >
                              <BoxCheckLabel>46%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_003`"
                              size="small"
                            >
                              <BoxCheckLabel>45%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_004`"
                              size="small"
                            >
                              <BoxCheckLabel>44%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_005`"
                              size="small"
                            >
                              <BoxCheckLabel>43%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_006`"
                              size="small"
                            >
                              <BoxCheckLabel>42%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_007`"
                              size="small"
                            >
                              <BoxCheckLabel>41%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_008`"
                              size="small"
                            >
                              <BoxCheckLabel>40%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_009`"
                              size="small"
                            >
                              <BoxCheckLabel>39%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_010`"
                              size="small"
                            >
                              <BoxCheckLabel>38%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_011`"
                              size="small"
                            >
                              <BoxCheckLabel>37%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_012`"
                              size="small"
                            >
                              <BoxCheckLabel>36%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_013`"
                              size="small"
                            >
                              <BoxCheckLabel>35%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_014`"
                              size="small"
                            >
                              <BoxCheckLabel>34%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_015`"
                              size="small"
                            >
                              <BoxCheckLabel>33%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_016`"
                              size="small"
                            >
                              <BoxCheckLabel>32%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_017`"
                              size="small"
                            >
                              <BoxCheckLabel>31%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_018`"
                              size="small"
                            >
                              <BoxCheckLabel>30%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_019`"
                              size="small"
                            >
                              <BoxCheckLabel>29%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                          <BoxCheckListItem>
                            <BoxCheck
                              :minSide="true"
                              :name="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006`"
                              :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_check006_020`"
                              size="small"
                            >
                              <BoxCheckLabel>28%</BoxCheckLabel>
                            </BoxCheck>
                          </BoxCheckListItem>
                        </BoxCheckList>

                        <FormList
                          :classNames="{ wrap: 'row-margin-item-group' }"
                        >
                          <FormListItem
                            titleText="비율"
                            :target="`#leaseRentEstimationSystemUsedLeaseProducts${i}_residualValueRatioButton`"
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
                                    :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_residualValueRatio`"
                                    :buttonId="`leaseRentEstimationSystemUsedLeaseProducts${i}_residualValueRatioButton`"
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
                            :target="`#leaseRentEstimationSystemUsedLeaseProducts${i}_residualValuePriceInput`"
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
                                    :id="`leaseRentEstimationSystemUsedLeaseProducts${i}_residualValuePriceInput`"
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

                  <!-- 할인 지원금 -->
                  <li :class="$style['estimate-list__item']">
                    <div :class="$style['estimate-list__head']">
                      <div :class="$style['estimate-list__block']">
                        <div :class="$style['estimate-list__left']">
                          <KeyValue align="left" size="regular">
                            <KeyValueItem :classNames="{ item: 'text-body-3' }">
                              <KeyValueTitle>
                                <div class="text-body-4">할인<br />지원금</div>
                              </KeyValueTitle>
                              <KeyValueText>해당 없음</KeyValueText>
                            </KeyValueItem>
                          </KeyValue>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- // 할인 지원금 -->

                  <!-- 추가 수수료 -->
                  <li :class="$style['estimate-list__item']">
                    <div :class="$style['estimate-list__head']">
                      <div :class="$style['estimate-list__block']">
                        <div :class="$style['estimate-list__left']">
                          <KeyValue align="left" size="regular">
                            <KeyValueItem :classNames="{ item: 'text-body-3' }">
                              <KeyValueTitle>
                                <div class="text-body-4">추가<br />수수료</div>
                              </KeyValueTitle>
                              <KeyValueText>해당 없음</KeyValueText>
                            </KeyValueItem>
                          </KeyValue>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- // 추가 수수료 -->

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
                                      <strong>10,000,000 원</strong>
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
                  <!-- // Case : 운용리스 : end -->

                  <!-- Case : 금융리스 : start -->
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
                          <KeyValue>
                            <KeyValueItem :classNames="{ item: 'text-body-3' }">
                              <KeyValueTitle>
                                <div class="text-body-4">출고전<br />납입</div>
                              </KeyValueTitle>
                              <KeyValueText><strong>0 원</strong></KeyValueText>
                            </KeyValueItem>
                          </KeyValue>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- // 출고전 납입 -->
                  <!-- //Case : 금융리스 : end -->
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
                          6,191,360
                        </UnitText>
                        <div
                          class="flex-box font-weight-medium text-body-3 row-margin-mini"
                        >
                          <div class="flex-box__cell flex-1">~ 6,191,360</div>
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
        <!-- // Case : 취득원가 계산 후 -->
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
          id="leaseRentEstimationSystemUsedLeaseCheck001"
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
          <DocumentEstimate002Contents />
          <DocumentEstimate003Contents />
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
      <!-- Case : [가견적 상태에서 재견적] - 견적서 보기 선택 후, 디폴트 상태 -->
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :minSide="true">견적 저장</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" theme="tertiary" :disabled="true">
            견적서 발송
          </BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" :disabled="true">견적확정</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : [가견적 상태에서 재견적] - 견적서 보기 선택 후, 디폴트 상태 -->

      <!-- Case : [견적확정 or 동의완료 상태에서 재견적] - 견적서 보기 선택 후, 디폴트 상태 -->
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :minSide="true">재견적 저장</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" theme="tertiary" :disabled="true">
            견적서 발송
          </BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" :disabled="true">견적확정</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : [견적확정 or 동의완료 상태에서 재견적] - 견적서 보기 선택 후, 디폴트 상태 -->

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
          <BasicButton :minSide="true" theme="tertiary"
            >견적서 발송</BasicButton
          >
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
            >견적서 발송</BasicButton
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
          <BasicButton :minSide="true" theme="tertiary"
            >견적서 발송</BasicButton
          >
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
      <!-- // Case : 확정된 상태의 하단 버튼 -->

      <!-- Case : [심사신청 상태에서 조건변경] - 견적서 보기 선택 후, 디폴트 상태 -->
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
      <!-- // [심사신청 상태에서 조건변경] - 견적서 보기 선택 후, 디폴트 상태 -->

      <!-- Case : [심사신청 상태에서 조건변경] - 견적저장 된 상태의 하단 버튼 -->
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
      <!-- // [심사신청 상태에서 조건변경] - 견적저장 된 상태의 하단 버튼 -->
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemUsedLease.scss';
</style>
