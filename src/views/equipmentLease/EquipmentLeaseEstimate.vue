<script>
// EL_M01_p001
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

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
    NavTab,
    NavTabButton,
    StickyBar,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicSelect,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BasicHr,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    UnitText,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      nameError: false,
      equipmentNameError: false,
      acquisitionCostError: false,
      depositRatioError: false,
      depositInputError: false,
      valueRatioError: false,
      valueInputError: false,
      deferredPrincipalRatioError: false,
      deferredPrincipalInputError: false,
      interestSupportInputError: false,
      InsuranceRateError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '견적 계산기');
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
    <FormList>
      <FormListItem titleText="고객 이름" target="#equipmentLeaseEstimateName">
        <FormInvalid :error="state.nameError">
          <InputBlock :error="state.nameError">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="고객 이름"
                id="equipmentLeaseEstimateName"
                align="right"
                :useDelete="false"
              />
            </InputBlockCell>
            <template v-slot:innerRight>
              <div class="text-body-3">고객님</div>
            </template>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <BasicHr className="row-margin-container-medium" />

    <!-- Case : 복수 견적일 경우 탭 노출 -->
    <StickyBar>
      <NavTab>
        <NavTabButton tagName="button" type="button" :active="true">
          견적A
        </NavTabButton>
        <NavTabButton tagName="button" type="button">견적B</NavTabButton>
        <NavTabButton tagName="button" type="button">견적C</NavTabButton>
      </NavTab>
    </StickyBar>
    <!-- // Case : 복수 견적일 경우 탭 노출 -->

    <div :class="$style['estimate-list']">
      <UiAccordion :classNames="{ wrap: $style['estimate-list__list'] }">
        <UiAccordionItem :classNames="{ item: $style['estimate-list__item'] }">
          <div :class="$style['estimate-list__head']">
            <div :class="$style['estimate-list__block']">
              <div :class="$style['estimate-list__left']">
                <KeyValue align="left" size="regular" verticalAlign="center">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <div class="text-body-4">품목</div>
                    </KeyValueTitle>
                    <KeyValueText> 의료기 </KeyValueText>
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
              <BoxCheckList>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck001"
                    id="equipmentLeaseEstimateCheck001_001"
                    size="small"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>의료기</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck001"
                    id="equipmentLeaseEstimateCheck001_002"
                    size="small"
                  >
                    <BoxCheckLabel>스크린골프</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
            </section>
          </UiAccordionLayer>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: $style['estimate-list__item'] }">
          <div :class="$style['estimate-list__head']">
            <div :class="$style['estimate-list__block']">
              <div :class="$style['estimate-list__left']">
                <KeyValue align="left" size="regular" verticalAlign="center">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <div class="text-body-4">이자구분</div>
                    </KeyValueTitle>
                    <KeyValueText> 유이자 </KeyValueText>
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
              <BoxCheckList>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck002"
                    id="equipmentLeaseEstimateCheck002_001"
                    size="small"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>유이자</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck002"
                    id="equipmentLeaseEstimateCheck002_002"
                    size="small"
                  >
                    <BoxCheckLabel>무이자</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
            </section>
          </UiAccordionLayer>
        </UiAccordionItem>

        <!-- Case : 하나인 견적등록이 아닐 경우 -->
        <UiAccordionItem :classNames="{ item: $style['estimate-list__item'] }">
          <div :class="$style['estimate-list__head']">
            <div :class="$style['estimate-list__block']">
              <div :class="$style['estimate-list__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <div class="text-body-4">장비명</div>
                    </KeyValueTitle>
                    <KeyValueText>
                      <FormList>
                        <FormListItem
                          titleText="장비명"
                          target="#equipmentLeaseEstimateEquipmentName"
                        >
                          <FormInvalid :error="state.equipmentNameError">
                            <InputBlock :error="state.equipmentNameError">
                              <InputBlockCell :flexible="true">
                                <BasicInput
                                  title="장비명"
                                  id="equipmentLeaseEstimateEquipmentName"
                                />
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
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: $style['estimate-list__item'] }">
          <div :class="$style['estimate-list__head']">
            <div :class="$style['estimate-list__block']">
              <div :class="$style['estimate-list__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <div class="text-body-4">취득원가</div>
                    </KeyValueTitle>
                    <KeyValueText>
                      <FormList>
                        <FormListItem
                          titleText="금액"
                          target="#equipmentLeaseEstimateAcquisitionCost"
                        >
                          <FormInvalid :error="state.acquisitionCostError">
                            <InputBlock :error="state.acquisitionCostError">
                              <InputBlockCell :flexible="true">
                                <BasicInput
                                  title="취득원가"
                                  id="equipmentLeaseEstimateAcquisitionCost"
                                  pattern="\d*"
                                  :useDelete="false"
                                  align="right"
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
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </div>
          </div>
        </UiAccordionItem>
        <!-- //Case : 하나인 견적등록이 아닐 경우 -->

        <!-- Case : 하나인 견적등록일 경우 -->
        <UiAccordionItem :classNames="{ item: $style['estimate-list__item'] }">
          <div :class="$style['estimate-list__head']">
            <div :class="$style['estimate-list__block']">
              <div :class="$style['estimate-list__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <div class="text-body-4">장비명</div>
                    </KeyValueTitle>
                    <KeyValueText>레이져</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </div>
          </div>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: $style['estimate-list__item'] }">
          <div :class="$style['estimate-list__head']">
            <div :class="$style['estimate-list__block']">
              <div :class="$style['estimate-list__left']">
                <KeyValue>
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <div class="text-body-4">취득원가</div>
                    </KeyValueTitle>
                    <KeyValueText :classNames="{ text: 'font-weight-bold' }">
                      18,700,000 원
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </div>
          </div>
        </UiAccordionItem>
        <!-- //Case : 하나인 견적등록일 경우 -->

        <UiAccordionItem :classNames="{ item: $style['estimate-list__item'] }">
          <div :class="$style['estimate-list__head']">
            <div :class="$style['estimate-list__block']">
              <div :class="$style['estimate-list__left']">
                <KeyValue align="left" size="regular">
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
                :classNames="{ button: $style['estimate-list__opener'] }"
              />
            </div>
          </div>

          <UiAccordionLayer
            :classNames="{ layer: $style['estimate-list__layer'] }"
          >
            <section :class="$style['estimate-list__contents']">
              <BoxCheckList :wrap="true" col="3" spacing="small">
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck003"
                    id="equipmentLeaseEstimateCheck003_001"
                    size="small"
                  >
                    <BoxCheckLabel>12개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck003"
                    id="equipmentLeaseEstimateCheck003_002"
                    size="small"
                  >
                    <BoxCheckLabel>24개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck003"
                    id="equipmentLeaseEstimateCheck003_003"
                    size="small"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>36개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck003"
                    id="equipmentLeaseEstimateCheck003_004"
                    size="small"
                  >
                    <BoxCheckLabel>48개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck003"
                    id="equipmentLeaseEstimateCheck003_005"
                    size="small"
                  >
                    <BoxCheckLabel>60개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck003"
                    id="equipmentLeaseEstimateCheck003_006"
                    size="small"
                  >
                    <BoxCheckLabel>직접입력</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>

              <!-- Case : 직접 입력 선택시 노출 -->
              <FormList :classNames="{ wrap: 'row-margin-item-group' }">
                <FormListItem
                  titleText="기간 수기입력"
                  target="#equipmentLeaseEstimatePeriod"
                >
                  <FormInvalid :error="state.periodError">
                    <InputBlock :error="state.periodError">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          title="기간 수기입력"
                          id="equipmentLeaseEstimatePeriod"
                          type="number"
                          pattern="\d*"
                          :useDelete="false"
                          align="right"
                        />
                      </InputBlockCell>
                      <template v-slot:innerRight>
                        <div class="text-body-3">개월</div>
                      </template>
                    </InputBlock>
                    <FormInvalidMessage> Error Message </FormInvalidMessage>
                    <FormHelpText>최대 60개월까지 가능합니다.</FormHelpText>
                  </FormInvalid>
                </FormListItem>
              </FormList>
              <!-- //Case : 직접 입력 선택시 노출 -->

              <ButtonList :classNames="{ wrap: 'row-margin-item-group' }">
                <ButtonListItem>
                  <BasicButton theme="tertiary" size="small">
                    적용
                  </BasicButton>
                </ButtonListItem>
              </ButtonList>
            </section>
          </UiAccordionLayer>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: $style['estimate-list__item'] }">
          <div :class="$style['estimate-list__head']">
            <div :class="$style['estimate-list__block']">
              <div :class="$style['estimate-list__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <div class="text-body-4">적용금리</div>
                    </KeyValueTitle>
                    <KeyValueText>0%</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </div>
          </div>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: $style['estimate-list__item'] }">
          <div :class="$style['estimate-list__head']">
            <div :class="$style['estimate-list__block']">
              <div :class="$style['estimate-list__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <div class="text-body-4">보증금</div>
                    </KeyValueTitle>
                    <KeyValueText>0%</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
              <div :class="$style['estimate-list__right']">
                <div class="text-body-3 font-weight-bold">0 원</div>
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
              <BoxCheckList :wrap="true" col="3" spacing="small">
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck004"
                    id="equipmentLeaseEstimateCheck004_001"
                    size="small"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>없음</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck004"
                    id="equipmentLeaseEstimateCheck004_002"
                    size="small"
                  >
                    <BoxCheckLabel>10%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck004"
                    id="equipmentLeaseEstimateCheck004_003"
                    size="small"
                  >
                    <BoxCheckLabel>20%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck004"
                    id="equipmentLeaseEstimateCheck004_004"
                    size="small"
                  >
                    <BoxCheckLabel>30%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck004"
                    id="equipmentLeaseEstimateCheck004_005"
                    size="small"
                  >
                    <BoxCheckLabel>40%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck004"
                    id="equipmentLeaseEstimateCheck004_006"
                    size="small"
                  >
                    <BoxCheckLabel>50%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>

              <FormList :classNames="{ wrap: 'row-margin-item-group' }">
                <FormListItem
                  titleText="비율"
                  target="#equipmentLeaseEstimateDepositRatioButton"
                  :selectOnly="true"
                >
                  <FormInvalid :error="state.depositRatioError">
                    <InputBlock :error="state.depositRatioError">
                      <InputBlockCell :flexible="true">
                        <BasicSelect
                          :option="[
                            {
                              value: '1',
                              text: '선택',
                            },
                            {
                              value: '2',
                              text: '1%',
                            },
                            {
                              value: '3',
                              text: '2%',
                            },
                            {
                              value: '4',
                              text: '3%',
                            },
                            {
                              value: '5',
                              text: '4%',
                            },
                            {
                              value: '6',
                              text: '5%',
                            },
                            {
                              value: '7',
                              text: '6%',
                            },
                            {
                              value: '8',
                              text: '7%',
                            },
                            {
                              value: '9',
                              text: '8%',
                            },
                            {
                              value: '10',
                              text: '9%',
                            },
                            {
                              value: '11',
                              text: '10%',
                            },
                            {
                              value: '12',
                              text: '11%',
                            },
                            {
                              value: '13',
                              text: '12%',
                            },
                            {
                              value: '14',
                              text: '13%',
                            },
                            {
                              value: '15',
                              text: '14%',
                            },
                            {
                              value: '16',
                              text: '15%',
                            },
                            {
                              value: '17',
                              text: '16%',
                            },
                            {
                              value: '18',
                              text: '17%',
                            },
                            {
                              value: '19',
                              text: '18%',
                            },
                            {
                              value: '20',
                              text: '19%',
                            },
                            {
                              value: '21',
                              text: '20%',
                            },
                            {
                              value: '22',
                              text: '21%',
                            },
                            {
                              value: '23',
                              text: '22%',
                            },
                            {
                              value: '24',
                              text: '23%',
                            },
                            {
                              value: '25',
                              text: '24%',
                            },
                            {
                              value: '26',
                              text: '25%',
                            },
                            {
                              value: '27',
                              text: '26%',
                            },
                            {
                              value: '28',
                              text: '27%',
                            },
                            {
                              value: '29',
                              text: '28%',
                            },
                            {
                              value: '30',
                              text: '29%',
                            },
                            {
                              value: '31',
                              text: '30%',
                            },
                            {
                              value: '32',
                              text: '31%',
                            },
                            {
                              value: '33',
                              text: '32%',
                            },
                            {
                              value: '34',
                              text: '33%',
                            },
                            {
                              value: '35',
                              text: '34%',
                            },
                            {
                              value: '36',
                              text: '35%',
                            },
                            {
                              value: '37',
                              text: '36%',
                            },
                            {
                              value: '38',
                              text: '37%',
                            },
                            {
                              value: '39',
                              text: '38%',
                            },
                            {
                              value: '40',
                              text: '39%',
                            },
                            {
                              value: '41',
                              text: '40%',
                            },
                            {
                              value: '42',
                              text: '41%',
                            },
                            {
                              value: '43',
                              text: '42%',
                            },
                            {
                              value: '44',
                              text: '43%',
                            },
                            {
                              value: '45',
                              text: '44%',
                            },
                            {
                              value: '46',
                              text: '45%',
                            },
                            {
                              value: '47',
                              text: '46%',
                            },
                            {
                              value: '48',
                              text: '47%',
                            },
                            {
                              value: '49',
                              text: '48%',
                            },
                            {
                              value: '50',
                              text: '49%',
                            },
                            {
                              value: '51',
                              text: '50%',
                            },
                          ]"
                          buttonTitle="보증금 비율 선택하기"
                          layerTitle="보증금 비율을 선택하세요"
                          id="equipmentLeaseEstimateDepositRatio"
                          buttonId="equipmentLeaseEstimateDepositRatioButton"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage> Error Message </FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>

                <FormListItem
                  titleText="보증금 수기입력"
                  target="#equipmentLeaseEstimateAcquisitionDepositInput"
                >
                  <FormInvalid :error="state.depositInputError">
                    <InputBlock :error="state.depositInputError">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          title="보증금 수기입력"
                          id="equipmentLeaseEstimateAcquisitionDepositInput"
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

              <ButtonList :classNames="{ wrap: 'row-margin-item-group' }">
                <ButtonListItem>
                  <BasicButton theme="tertiary" size="small">
                    적용
                  </BasicButton>
                </ButtonListItem>
              </ButtonList>
            </section>
          </UiAccordionLayer>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: $style['estimate-list__item'] }">
          <div :class="$style['estimate-list__head']">
            <div :class="$style['estimate-list__block']">
              <div :class="$style['estimate-list__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <div class="text-body-4">잔존가치</div>
                    </KeyValueTitle>
                    <KeyValueText>0%</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
              <div :class="$style['estimate-list__right']">
                <div class="text-body-3 font-weight-bold">0 원</div>
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
              <BoxCheckList :wrap="true" col="3" spacing="small">
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck005"
                    id="equipmentLeaseEstimateCheck005_001"
                    size="small"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>없음</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck005"
                    id="equipmentLeaseEstimateCheck005_002"
                    size="small"
                  >
                    <BoxCheckLabel>10%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck005"
                    id="equipmentLeaseEstimateCheck005_003"
                    size="small"
                  >
                    <BoxCheckLabel>20%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck005"
                    id="equipmentLeaseEstimateCheck005_004"
                    size="small"
                  >
                    <BoxCheckLabel>30%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck005"
                    id="equipmentLeaseEstimateCheck005_005"
                    size="small"
                  >
                    <BoxCheckLabel>40%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck005"
                    id="equipmentLeaseEstimateCheck005_006"
                    size="small"
                  >
                    <BoxCheckLabel>50%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>

              <FormList :classNames="{ wrap: 'row-margin-item-group' }">
                <FormListItem
                  titleText="비율"
                  target="#equipmentLeaseEstimateValueRatioButton"
                  :selectOnly="true"
                >
                  <FormInvalid :error="state.valueRatioError">
                    <InputBlock :error="state.valueRatioError">
                      <InputBlockCell :flexible="true">
                        <BasicSelect
                          :option="[
                            {
                              value: '1',
                              text: '선택',
                            },
                            {
                              value: '2',
                              text: '1%',
                            },
                            {
                              value: '3',
                              text: '2%',
                            },
                            {
                              value: '4',
                              text: '3%',
                            },
                            {
                              value: '5',
                              text: '4%',
                            },
                            {
                              value: '6',
                              text: '5%',
                            },
                            {
                              value: '7',
                              text: '6%',
                            },
                            {
                              value: '8',
                              text: '7%',
                            },
                            {
                              value: '9',
                              text: '8%',
                            },
                            {
                              value: '10',
                              text: '9%',
                            },
                            {
                              value: '11',
                              text: '10%',
                            },
                            {
                              value: '12',
                              text: '11%',
                            },
                            {
                              value: '13',
                              text: '12%',
                            },
                            {
                              value: '14',
                              text: '13%',
                            },
                            {
                              value: '15',
                              text: '14%',
                            },
                            {
                              value: '16',
                              text: '15%',
                            },
                            {
                              value: '17',
                              text: '16%',
                            },
                            {
                              value: '18',
                              text: '17%',
                            },
                            {
                              value: '19',
                              text: '18%',
                            },
                            {
                              value: '20',
                              text: '19%',
                            },
                            {
                              value: '21',
                              text: '20%',
                            },
                            {
                              value: '22',
                              text: '21%',
                            },
                            {
                              value: '23',
                              text: '22%',
                            },
                            {
                              value: '24',
                              text: '23%',
                            },
                            {
                              value: '25',
                              text: '24%',
                            },
                            {
                              value: '26',
                              text: '25%',
                            },
                            {
                              value: '27',
                              text: '26%',
                            },
                            {
                              value: '28',
                              text: '27%',
                            },
                            {
                              value: '29',
                              text: '28%',
                            },
                            {
                              value: '30',
                              text: '29%',
                            },
                            {
                              value: '31',
                              text: '30%',
                            },
                            {
                              value: '32',
                              text: '31%',
                            },
                            {
                              value: '33',
                              text: '32%',
                            },
                            {
                              value: '34',
                              text: '33%',
                            },
                            {
                              value: '35',
                              text: '34%',
                            },
                            {
                              value: '36',
                              text: '35%',
                            },
                            {
                              value: '37',
                              text: '36%',
                            },
                            {
                              value: '38',
                              text: '37%',
                            },
                            {
                              value: '39',
                              text: '38%',
                            },
                            {
                              value: '40',
                              text: '39%',
                            },
                            {
                              value: '41',
                              text: '40%',
                            },
                            {
                              value: '42',
                              text: '41%',
                            },
                            {
                              value: '43',
                              text: '42%',
                            },
                            {
                              value: '44',
                              text: '43%',
                            },
                            {
                              value: '45',
                              text: '44%',
                            },
                            {
                              value: '46',
                              text: '45%',
                            },
                            {
                              value: '47',
                              text: '46%',
                            },
                            {
                              value: '48',
                              text: '47%',
                            },
                            {
                              value: '49',
                              text: '48%',
                            },
                            {
                              value: '50',
                              text: '49%',
                            },
                            {
                              value: '51',
                              text: '50%',
                            },
                          ]"
                          buttonTitle="잔존가치 비율 선택하기"
                          layerTitle="잔존가치 비율을 선택하세요"
                          id="equipmentLeaseEstimateValueRatio"
                          buttonId="equipmentLeaseEstimateValueRatioButton"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage> Error Message </FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>

                <FormListItem
                  titleText="잔존가치 수기입력"
                  target="#equipmentLeaseEstimateAcquisitionValueInput"
                >
                  <FormInvalid :error="state.valueInputError">
                    <InputBlock :error="state.valueInputError">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          title="잔존가치 수기입력"
                          id="equipmentLeaseEstimateAcquisitionValueInput"
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

              <ButtonList :classNames="{ wrap: 'row-margin-item-group' }">
                <ButtonListItem>
                  <BasicButton theme="tertiary" size="small">
                    적용
                  </BasicButton>
                </ButtonListItem>
              </ButtonList>
            </section>
          </UiAccordionLayer>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: $style['estimate-list__item'] }">
          <div :class="$style['estimate-list__head']">
            <div :class="$style['estimate-list__block']">
              <div :class="$style['estimate-list__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <div class="text-body-4">유예원금</div>
                    </KeyValueTitle>
                    <KeyValueText>0%</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
              <div :class="$style['estimate-list__right']">
                <div class="text-body-3 font-weight-bold">0 원</div>
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
              <BoxCheckList :wrap="true" col="3" spacing="small">
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck006"
                    id="equipmentLeaseEstimateCheck006_001"
                    size="small"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>없음</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck006"
                    id="equipmentLeaseEstimateCheck006_002"
                    size="small"
                  >
                    <BoxCheckLabel>10%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck006"
                    id="equipmentLeaseEstimateCheck006_003"
                    size="small"
                  >
                    <BoxCheckLabel>20%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck006"
                    id="equipmentLeaseEstimateCheck006_004"
                    size="small"
                  >
                    <BoxCheckLabel>30%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck006"
                    id="equipmentLeaseEstimateCheck006_005"
                    size="small"
                  >
                    <BoxCheckLabel>40%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck006"
                    id="equipmentLeaseEstimateCheck006_006"
                    size="small"
                  >
                    <BoxCheckLabel>50%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>

              <FormList :classNames="{ wrap: 'row-margin-item-group' }">
                <FormListItem
                  titleText="비율"
                  target="#equipmentLeaseEstimateDeferredPrincipalRatioButton"
                  :selectOnly="true"
                >
                  <FormInvalid :error="state.deferredPrincipalRatioError">
                    <InputBlock :error="state.deferredPrincipalRatioError">
                      <InputBlockCell :flexible="true">
                        <BasicSelect
                          :option="[
                            {
                              value: '1',
                              text: '선택',
                            },
                            {
                              value: '2',
                              text: '1%',
                            },
                            {
                              value: '3',
                              text: '2%',
                            },
                            {
                              value: '4',
                              text: '3%',
                            },
                            {
                              value: '5',
                              text: '4%',
                            },
                            {
                              value: '6',
                              text: '5%',
                            },
                            {
                              value: '7',
                              text: '6%',
                            },
                            {
                              value: '8',
                              text: '7%',
                            },
                            {
                              value: '9',
                              text: '8%',
                            },
                            {
                              value: '10',
                              text: '9%',
                            },
                            {
                              value: '11',
                              text: '10%',
                            },
                            {
                              value: '12',
                              text: '11%',
                            },
                            {
                              value: '13',
                              text: '12%',
                            },
                            {
                              value: '14',
                              text: '13%',
                            },
                            {
                              value: '15',
                              text: '14%',
                            },
                            {
                              value: '16',
                              text: '15%',
                            },
                            {
                              value: '17',
                              text: '16%',
                            },
                            {
                              value: '18',
                              text: '17%',
                            },
                            {
                              value: '19',
                              text: '18%',
                            },
                            {
                              value: '20',
                              text: '19%',
                            },
                            {
                              value: '21',
                              text: '20%',
                            },
                            {
                              value: '22',
                              text: '21%',
                            },
                            {
                              value: '23',
                              text: '22%',
                            },
                            {
                              value: '24',
                              text: '23%',
                            },
                            {
                              value: '25',
                              text: '24%',
                            },
                            {
                              value: '26',
                              text: '25%',
                            },
                            {
                              value: '27',
                              text: '26%',
                            },
                            {
                              value: '28',
                              text: '27%',
                            },
                            {
                              value: '29',
                              text: '28%',
                            },
                            {
                              value: '30',
                              text: '29%',
                            },
                            {
                              value: '31',
                              text: '30%',
                            },
                            {
                              value: '32',
                              text: '31%',
                            },
                            {
                              value: '33',
                              text: '32%',
                            },
                            {
                              value: '34',
                              text: '33%',
                            },
                            {
                              value: '35',
                              text: '34%',
                            },
                            {
                              value: '36',
                              text: '35%',
                            },
                            {
                              value: '37',
                              text: '36%',
                            },
                            {
                              value: '38',
                              text: '37%',
                            },
                            {
                              value: '39',
                              text: '38%',
                            },
                            {
                              value: '40',
                              text: '39%',
                            },
                            {
                              value: '41',
                              text: '40%',
                            },
                            {
                              value: '42',
                              text: '41%',
                            },
                            {
                              value: '43',
                              text: '42%',
                            },
                            {
                              value: '44',
                              text: '43%',
                            },
                            {
                              value: '45',
                              text: '44%',
                            },
                            {
                              value: '46',
                              text: '45%',
                            },
                            {
                              value: '47',
                              text: '46%',
                            },
                            {
                              value: '48',
                              text: '47%',
                            },
                            {
                              value: '49',
                              text: '48%',
                            },
                            {
                              value: '50',
                              text: '49%',
                            },
                            {
                              value: '51',
                              text: '50%',
                            },
                          ]"
                          buttonTitle="유예원금 비율 선택하기"
                          layerTitle="유예원금 비율을 선택하세요"
                          id="equipmentLeaseEstimateDeferredPrincipalRatio"
                          buttonId="equipmentLeaseEstimateDeferredPrincipalRatioButton"
                        />
                      </InputBlockCell>
                    </InputBlock>
                    <FormInvalidMessage> Error Message </FormInvalidMessage>
                  </FormInvalid>
                </FormListItem>

                <FormListItem
                  titleText="유예원금 수기입력"
                  target="#equipmentLeaseEstimateAcquisitionDeferredPrincipalInput"
                >
                  <FormInvalid :error="state.deferredPrincipalInputError">
                    <InputBlock :error="state.deferredPrincipalInputError">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          title="유예원금 수기입력"
                          id="equipmentLeaseEstimateAcquisitionDeferredPrincipalInput"
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

              <ButtonList :classNames="{ wrap: 'row-margin-item-group' }">
                <ButtonListItem>
                  <BasicButton theme="tertiary" size="small">
                    적용
                  </BasicButton>
                </ButtonListItem>
              </ButtonList>
            </section>
          </UiAccordionLayer>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: $style['estimate-list__item'] }">
          <div :class="$style['estimate-list__head']">
            <div :class="$style['estimate-list__block']">
              <div :class="$style['estimate-list__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <div class="text-body-4">공급자<br />이자지원</div>
                    </KeyValueTitle>
                    <KeyValueText>0%</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
              <div :class="$style['estimate-list__right']">
                <div class="text-body-3 font-weight-bold">0 원</div>
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
              <BoxCheckList :wrap="true" col="6" spacing="small">
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_001"
                    size="small"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>없음</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_002"
                    size="small"
                  >
                    <BoxCheckLabel>1%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_003"
                    size="small"
                  >
                    <BoxCheckLabel>2%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_004"
                    size="small"
                  >
                    <BoxCheckLabel>3%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_005"
                    size="small"
                  >
                    <BoxCheckLabel>4%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_006"
                    size="small"
                  >
                    <BoxCheckLabel>5%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_007"
                    size="small"
                  >
                    <BoxCheckLabel>6%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_008"
                    size="small"
                  >
                    <BoxCheckLabel>7%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_009"
                    size="small"
                  >
                    <BoxCheckLabel>8%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_010"
                    size="small"
                  >
                    <BoxCheckLabel>9%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_011"
                    size="small"
                  >
                    <BoxCheckLabel>10%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_012"
                    size="small"
                  >
                    <BoxCheckLabel>11%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_013"
                    size="small"
                  >
                    <BoxCheckLabel>12%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_014"
                    size="small"
                  >
                    <BoxCheckLabel>13%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_015"
                    size="small"
                  >
                    <BoxCheckLabel>14%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_016"
                    size="small"
                  >
                    <BoxCheckLabel>15%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_017"
                    size="small"
                  >
                    <BoxCheckLabel>16%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_018"
                    size="small"
                  >
                    <BoxCheckLabel>17%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_019"
                    size="small"
                  >
                    <BoxCheckLabel>18%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_020"
                    size="small"
                  >
                    <BoxCheckLabel>19%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck007"
                    id="equipmentLeaseEstimateCheck007_021"
                    size="small"
                  >
                    <BoxCheckLabel>20%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>

              <FormList :classNames="{ wrap: 'row-margin-item-group' }">
                <FormListItem
                  titleText="금액"
                  target="#equipmentLeaseEstimateAcquisitionInterestSupportInput"
                >
                  <FormInvalid :error="state.interestSupportInputError">
                    <InputBlock :error="state.interestSupportInputError">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          title="공급자 이자지원 금액"
                          id="equipmentLeaseEstimateAcquisitionInterestSupportInput"
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

              <ButtonList :classNames="{ wrap: 'row-margin-item-group' }">
                <ButtonListItem>
                  <BasicButton theme="tertiary" size="small">
                    적용
                  </BasicButton>
                </ButtonListItem>
              </ButtonList>
            </section>
          </UiAccordionLayer>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: $style['estimate-list__item'] }">
          <div :class="$style['estimate-list__head']">
            <div :class="$style['estimate-list__block']">
              <div :class="$style['estimate-list__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <div class="text-body-4">납입방식</div>
                    </KeyValueTitle>
                    <KeyValueText>1개월 후불</KeyValueText>
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
              <BoxCheckList>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck008"
                    id="equipmentLeaseEstimateCheck008_001"
                    size="small"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>1개월 후불</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck008"
                    id="equipmentLeaseEstimateCheck008_002"
                    size="small"
                  >
                    <BoxCheckLabel>1개월 선불</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
            </section>
          </UiAccordionLayer>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: $style['estimate-list__item'] }">
          <div :class="$style['estimate-list__head']">
            <div :class="$style['estimate-list__block']">
              <div :class="$style['estimate-list__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <div class="text-body-4">보험조건<br />/요율</div>
                    </KeyValueTitle>
                    <KeyValueText>이용자 책임부보</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
              <div :class="$style['estimate-list__right']">
                <div class="text-body-3 font-weight-bold">0%</div>
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
              <BoxCheckList>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck009"
                    id="equipmentLeaseEstimateCheck009_001"
                    size="small"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>이용자 책임부보</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck009"
                    id="equipmentLeaseEstimateCheck009_002"
                    size="small"
                  >
                    <BoxCheckLabel>당사부보</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>

              <FormList :classNames="{ wrap: 'row-margin-item-group' }">
                <FormListItem
                  titleText="보험요율"
                  target="#equipmentLeaseEstimateInsuranceRate"
                >
                  <FormInvalid :error="state.InsuranceRateError">
                    <InputBlock :error="state.InsuranceRateError">
                      <InputBlockCell :flexible="true">
                        <BasicInput
                          title="보험요율"
                          id="equipmentLeaseEstimateInsuranceRate"
                          type="number"
                          pattern="\d*"
                          :useDelete="false"
                          align="right"
                        />
                      </InputBlockCell>
                      <template v-slot:innerRight>
                        <div class="text-body-3">%</div>
                      </template>
                    </InputBlock>
                    <FormInvalidMessage> Error Message </FormInvalidMessage>
                    <FormHelpText>최대 10%까지 가능합니다.</FormHelpText>
                  </FormInvalid>
                </FormListItem>
              </FormList>

              <ButtonList :classNames="{ wrap: 'row-margin-item-group' }">
                <ButtonListItem>
                  <BasicButton theme="tertiary" size="small">
                    적용
                  </BasicButton>
                </ButtonListItem>
              </ButtonList>
            </section>
          </UiAccordionLayer>
        </UiAccordionItem>
      </UiAccordion>

      <div :class="$style['estimate-list__foot']">
        <!-- Case : 견적 계산 전 -->
        <KeyValue margin="regular" verticalAlign="center">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle
              :classNames="{ title: 'color-black font-weight-medium' }"
            >
              월 리스료
            </KeyValueTitle>
            <KeyValueText>
              <div class="inline-wrap">
                <BasicButton size="mini" inline="true">계산하기</BasicButton>
                <!-- Case : 로딩중 -->
                <BasicButton size="mini" inline="true">
                  계산중
                  <template v-slot:rightIcon>
                    <div :class="$style['loading-icon']"></div>
                  </template>
                </BasicButton>
                <!-- //Case : 로딩중 -->
              </div>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle
              :classNames="{
                title: 'color-black font-weight-medium',
              }"
            >
              IRR
            </KeyValueTitle>
            <KeyValueText>
              <UnitText rightUnit="%" align="right">
                <strong>-</strong>
              </UnitText>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
        <!-- //Case : 견적 계산 전 -->

        <!-- Case : 견적 계산 후 -->
        <KeyValue margin="regular" verticalAlign="center">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle
              :classNames="{ title: 'color-black font-weight-medium' }"
            >
              월 리스료
            </KeyValueTitle>
            <KeyValueText>
              <UnitText rightUnit="원" align="right">
                <strong>880,300</strong>
              </UnitText>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle
              :classNames="{
                title: 'color-black font-weight-medium',
              }"
            >
              IRR
            </KeyValueTitle>
            <KeyValueText>
              <UnitText rightUnit="%" align="right">
                <strong>1</strong>
              </UnitText>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
        <!-- Case : 견적 계산 후 -->
      </div>
    </div>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton theme="quaternary" :line="true">견적수정</BasicButton>
        </ButtonListItem>
        <!-- Case : 견적 개수 3개일 경우, 미노출 -->
        <ButtonListItem>
          <BasicButton theme="quaternary" :line="true" :minSide="true">
            견적추가 (최대 3개)
          </BasicButton>
        </ButtonListItem>
        <!-- //Case : 견적 개수 3개일 경우, 미노출 -->
      </ButtonList>

      <ButtonList
        :classNames="{
          wrap: 'row-margin-item-medium',
        }"
      >
        <ButtonListItem>
          <BasicButton>최종 견적 확인</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/equipmentLease/EquipmentLeaseEstimate.scss';
</style>
