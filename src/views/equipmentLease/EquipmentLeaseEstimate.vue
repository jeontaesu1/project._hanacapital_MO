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
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
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
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
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

    <div :class="$style['estimate']">
      <UiAccordion :classNames="{ wrap: $style['estimate__list'] }">
        <UiAccordionItem :classNames="{ item: $style['estimate__item'] }">
          <div :class="$style['estimate__head']">
            <div :class="$style['estimate__block']">
              <div :class="$style['estimate__left']">
                <KeyValue align="left" size="regular" verticalAlign="center">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <span class="inline-block text-body-4">품목</span>
                    </KeyValueTitle>
                    <KeyValueText> 의료기 </KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </div>
            <div :class="$style['estimate__arrow']">
              <UiAccordionOpener
                :classNames="{ button: $style['estimate__opener'] }"
              />
            </div>
          </div>

          <UiAccordionLayer :classNames="{ layer: $style['estimate__layer'] }">
            <section :class="$style['estimate__contents']">
              <BoxCheckList>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="equipmentLeaseEstimateCheck001"
                    id="equipmentLeaseEstimateCheck001_001"
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
                  >
                    <BoxCheckLabel>스크린골프</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
            </section>
          </UiAccordionLayer>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: $style['estimate__item'] }">
          <div :class="$style['estimate__head']">
            <div :class="$style['estimate__block']">
              <div :class="$style['estimate__left']">
                <KeyValue align="left" size="regular" verticalAlign="center">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <span class="inline-block text-body-4">이자구분</span>
                    </KeyValueTitle>
                    <KeyValueText> 유이자 </KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </div>
            <div :class="$style['estimate__arrow']">
              <UiAccordionOpener
                :classNames="{ button: $style['estimate__opener'] }"
              />
            </div>
          </div>

          <UiAccordionLayer :classNames="{ layer: $style['estimate__layer'] }">
            <section :class="$style['estimate__contents']">
              // 내용 노출
            </section>
          </UiAccordionLayer>
        </UiAccordionItem>

        <!-- Case : 하나인 견적등록이 아닐 경우 -->
        <UiAccordionItem :classNames="{ item: $style['estimate__item'] }">
          <div :class="$style['estimate__head']">
            <div :class="$style['estimate__block']">
              <div :class="$style['estimate__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <span class="inline-block text-body-4">장비명</span>
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

        <UiAccordionItem :classNames="{ item: $style['estimate__item'] }">
          <div :class="$style['estimate__head']">
            <div :class="$style['estimate__block']">
              <div :class="$style['estimate__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <span class="inline-block text-body-4">취득원가</span>
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
        <UiAccordionItem :classNames="{ item: $style['estimate__item'] }">
          <div :class="$style['estimate__head']">
            <div :class="$style['estimate__block']">
              <div :class="$style['estimate__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <span class="inline-block text-body-4">장비명</span>
                    </KeyValueTitle>
                    <KeyValueText>레이져</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </div>
          </div>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: $style['estimate__item'] }">
          <div :class="$style['estimate__head']">
            <div :class="$style['estimate__block']">
              <div :class="$style['estimate__left']">
                <KeyValue>
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <span class="inline-block text-body-4">취득원가</span>
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

        <UiAccordionItem :classNames="{ item: $style['estimate__item'] }">
          <div :class="$style['estimate__head']">
            <div :class="$style['estimate__block']">
              <div :class="$style['estimate__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <span class="inline-block text-body-4">기간</span>
                    </KeyValueTitle>
                    <KeyValueText>36개월</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </div>
          </div>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: $style['estimate__item'] }">
          <div :class="$style['estimate__head']">
            <div :class="$style['estimate__block']">
              <div :class="$style['estimate__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <span class="inline-block text-body-4">적용금리</span>
                    </KeyValueTitle>
                    <KeyValueText>0%</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </div>
          </div>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: $style['estimate__item'] }">
          <div :class="$style['estimate__head']">
            <div :class="$style['estimate__block']">
              <div :class="$style['estimate__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <span class="inline-block text-body-4">보증금</span>
                    </KeyValueTitle>
                    <KeyValueText>0%</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
              <div :class="$style['estimate__right']">
                <div class="text-body-3 font-weight-bold">0 원</div>
              </div>
            </div>
            <div :class="$style['estimate__arrow']">
              <UiAccordionOpener
                :classNames="{ button: $style['estimate__opener'] }"
              />
            </div>
          </div>

          <UiAccordionLayer :classNames="{ layer: $style['estimate__layer'] }">
            <section :class="$style['estimate__contents']">
              // 내용 노출
            </section>
          </UiAccordionLayer>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: $style['estimate__item'] }">
          <div :class="$style['estimate__head']">
            <div :class="$style['estimate__block']">
              <div :class="$style['estimate__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <span class="inline-block text-body-4">잔존가치</span>
                    </KeyValueTitle>
                    <KeyValueText>0%</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
              <div :class="$style['estimate__right']">
                <div class="text-body-3 font-weight-bold">0 원</div>
              </div>
            </div>
            <div :class="$style['estimate__arrow']">
              <UiAccordionOpener
                :classNames="{ button: $style['estimate__opener'] }"
              />
            </div>
          </div>

          <UiAccordionLayer :classNames="{ layer: $style['estimate__layer'] }">
            <section :class="$style['estimate__contents']">
              // 내용 노출
            </section>
          </UiAccordionLayer>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: $style['estimate__item'] }">
          <div :class="$style['estimate__head']">
            <div :class="$style['estimate__block']">
              <div :class="$style['estimate__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <span class="inline-block text-body-4">유예원금</span>
                    </KeyValueTitle>
                    <KeyValueText>0%</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
              <div :class="$style['estimate__right']">
                <div class="text-body-3 font-weight-bold">0 원</div>
              </div>
            </div>
            <div :class="$style['estimate__arrow']">
              <UiAccordionOpener
                :classNames="{ button: $style['estimate__opener'] }"
              />
            </div>
          </div>

          <UiAccordionLayer :classNames="{ layer: $style['estimate__layer'] }">
            <section :class="$style['estimate__contents']">
              // 내용 노출
            </section>
          </UiAccordionLayer>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: $style['estimate__item'] }">
          <div :class="$style['estimate__head']">
            <div :class="$style['estimate__block']">
              <div :class="$style['estimate__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <span class="inline-block text-body-4"
                        >공급자<br />이자지원</span
                      >
                    </KeyValueTitle>
                    <KeyValueText>0%</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
              <div :class="$style['estimate__right']">
                <div class="text-body-3 font-weight-bold">0 원</div>
              </div>
            </div>
            <div :class="$style['estimate__arrow']">
              <UiAccordionOpener
                :classNames="{ button: $style['estimate__opener'] }"
              />
            </div>
          </div>

          <UiAccordionLayer :classNames="{ layer: $style['estimate__layer'] }">
            <section :class="$style['estimate__contents']">
              // 내용 노출
            </section>
          </UiAccordionLayer>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: $style['estimate__item'] }">
          <div :class="$style['estimate__head']">
            <div :class="$style['estimate__block']">
              <div :class="$style['estimate__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <span class="inline-block text-body-4">납입방식</span>
                    </KeyValueTitle>
                    <KeyValueText>1개월 후불</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </div>
            <div :class="$style['estimate__arrow']">
              <UiAccordionOpener
                :classNames="{ button: $style['estimate__opener'] }"
              />
            </div>
          </div>

          <UiAccordionLayer :classNames="{ layer: $style['estimate__layer'] }">
            <section :class="$style['estimate__contents']">
              // 내용 노출
            </section>
          </UiAccordionLayer>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: $style['estimate__item'] }">
          <div :class="$style['estimate__head']">
            <div :class="$style['estimate__block']">
              <div :class="$style['estimate__left']">
                <KeyValue align="left" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>
                      <span class="inline-block text-body-4"
                        >보험조건<br />/요율</span
                      >
                    </KeyValueTitle>
                    <KeyValueText>이용자 책임부보</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
              <div :class="$style['estimate__right']">
                <div class="text-body-3 font-weight-bold">0%</div>
              </div>
            </div>
            <div :class="$style['estimate__arrow']">
              <UiAccordionOpener
                :classNames="{ button: $style['estimate__opener'] }"
              />
            </div>
          </div>

          <UiAccordionLayer :classNames="{ layer: $style['estimate__layer'] }">
            <section :class="$style['estimate__contents']">
              // 내용 노출
            </section>
          </UiAccordionLayer>
        </UiAccordionItem>
      </UiAccordion>

      <div :class="$style['estimate__foot']">
        <!-- Case : 견적 계산 전 -->
        <KeyValue margin="regular" verticalAlign="center">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle
              :classNames="{ title: 'color-black font-weight-medium' }"
            >
              월 리스료
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
          <BasicButton theme="quaternary" line="true">견적수정</BasicButton>
        </ButtonListItem>
        <!-- Case : 견적 개수 3개일 경우, 미노출 -->
        <ButtonListItem>
          <BasicButton theme="quaternary" line="true">
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
