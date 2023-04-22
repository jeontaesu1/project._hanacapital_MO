<script>
// LM_M05_p001
import { ref, reactive, onMounted, onUnmounted } from 'vue';

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
import StickyBar from '@/components/ui/common/StickyBar.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
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
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    BasicDatepicker,
    UnitText,
    ButtonList,
    ButtonListItem,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const layerTest002 = ref(null);
    const layerOpenTest002 = (e = {}) => {
      layerTest002.value.open(e.target);
    };
    onMounted(() => {
      store.ui.header.setTitle(() => '대출상담');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
    const state = reactive({
      testError001: false,
    });
    const testErrorUpdate001 = (val) => {
      state.testError001 = val;
    };

    return {
      state,
      alert,
      testErrorUpdate001,
      layerTest002,
      layerOpenTest002,
    };
  },
};
</script>

<template>
  <PageContents>
    <ul :class="$style['status-inquiry']">
      <li>
        <div :class="$style['status-inquiry__number']">10</div>
        <div :class="$style['status-inquiry__text']">전체</div>
      </li>
      <li>
        <div :class="$style['status-inquiry__number']">4</div>
        <div :class="$style['status-inquiry__text']">신용동의</div>
      </li>
      <li>
        <div :class="$style['status-inquiry__number']">3</div>
        <div :class="$style['status-inquiry__text']">상담</div>
      </li>
      <li>
        <div :class="$style['status-inquiry__number']">2</div>
        <div :class="$style['status-inquiry__text']">계약</div>
      </li>
      <li>
        <div :class="$style['status-inquiry__number']">1</div>
        <div :class="$style['status-inquiry__text']">심사</div>
      </li>
      <li>
        <div :class="$style['status-inquiry__number']">1</div>
        <div :class="$style['status-inquiry__text']">송금</div>
      </li>
    </ul>
    <FormList class="row-margin-contents row-margin-bottom-none">
      <FormListItem titleText="조회기간" :forceFocus="true">
        <FormInvalid :error="state.testError001">
          <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="testInputCheck014"
                id="testInputCheck014_001"
              >
                <BoxCheckLabel>1개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="testInputCheck014"
                id="testInputCheck014_002"
              >
                <BoxCheckLabel>3개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="testInputCheck014"
                id="testInputCheck014_003"
              >
                <BoxCheckLabel>6개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="testInputCheck014"
                id="testInputCheck014_004"
              >
                <BoxCheckLabel>직접입력</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicDatepicker
                title="조회기간 시작 날짜"
                id="testInput014Start"
                buttonId="testInput014StartButton"
                :max="state.testMaxDate002"
                v-model="state.testMinDate002"
                :onChange="testInputEvent"
              />
            </InputBlockCell>
            <InputBlockCell margin="regular">
              <div class="text-body-3">~</div>
            </InputBlockCell>
            <InputBlockCell :flexible="true" margin="regular">
              <BasicDatepicker
                title="조회기간 종료 날짜"
                id="testInput014End"
                buttonId="testInput014EndButton"
                :min="state.testMinDate002"
                v-model="state.testMaxDate002"
                :onChange="testInputEvent"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>조회기간은 최대 1년까지 가능해요.</FormHelpText>
        </FormInvalid>
      </FormListItem>
      <FormListItem titleText="고객명 입력" target="#testInput007">
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicInput title="고객명 입력" id="testInput007" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <div class="row-margin-contents-group row-margin-bottom-none">
      <BasicButton :line="true">조회</BasicButton>
    </div>

    <BasicHr className="row-margin-container" />

    <UiAccordion ref="testAccordion">
      <BasicBox class="row-margin-item-medium">
        <UiAccordionItem>
          <div class="row-margin-item-small">
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
          </div>
          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              <h3 class="text-body-1 font-weight-bold">김하나</h3>
            </div>
            <div class="flex-box__cell flex-box__cell">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <UnitText rightUnit="만원">333,389</UnitText>
                </div>
                <div class="flex-box__cell flex-box__cell">
                  <UiAccordionOpener />
                </div>
              </div>
            </div>
          </div>

          <UiAccordionLayer class="row-margin-contents-small">
            <BasicHr theme="quaternary" type="contents" className="" />
            <KeyValue class="row-margin-contents-small">
              <KeyValueItem>
                <KeyValueTitle>신용동의</KeyValueTitle>
                <KeyValueText> 2023.32.32 </KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </UiAccordionLayer>
        </UiAccordionItem>
      </BasicBox>
      <BasicBox class="row-margin-item-medium">
        <UiAccordionItem>
          <div class="row-margin-item-small">
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
          </div>
          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              <h3 class="text-body-1 font-weight-bold">김하나</h3>
            </div>
            <div class="flex-box__cell flex-box__cell">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <UnitText rightUnit="만원">333,389</UnitText>
                </div>
                <div class="flex-box__cell flex-box__cell">
                  <UiAccordionOpener />
                </div>
              </div>
            </div>
          </div>

          <UiAccordionLayer class="row-margin-contents-small">
            <BasicHr theme="quaternary" type="contents" className="" />
            <KeyValue class="row-margin-contents-small">
              <KeyValueItem>
                <KeyValueTitle>상품명</KeyValueTitle>
                <KeyValueText> 상품명 </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>신용동의</KeyValueTitle>
                <KeyValueText>2023.01.16</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>상담번호</KeyValueTitle>
                <KeyValueText>C42302010014400</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>심사</KeyValueTitle>
                <KeyValueText>승인</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText>36개월</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>금리</KeyValueTitle>
                <KeyValueText>14.60%</KeyValueText>
              </KeyValueItem>
            </KeyValue>
            <ButtonList class="row-margin-contents-small">
              <ButtonListItem>
                <BasicButton size="small" theme="tertiary"
                  >서류등록</BasicButton
                >
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton size="small">상담변경</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </UiAccordionLayer>
        </UiAccordionItem>
      </BasicBox>
      <BasicBox class="row-margin-item-medium">
        <UiAccordionItem>
          <div class="row-margin-item-small">
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
          </div>
          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              <h3 class="text-body-1 font-weight-bold">김하나</h3>
            </div>
            <div class="flex-box__cell flex-box__cell">
              <div class="flex-box">
                <div class="flex-box__cell">
                  <UnitText rightUnit="만원">333,389</UnitText>
                </div>
                <div class="flex-box__cell flex-box__cell">
                  <UiAccordionOpener />
                </div>
              </div>
            </div>
          </div>

          <UiAccordionLayer class="row-margin-contents-small">
            <BasicHr theme="quaternary" type="contents" className="" />
            <KeyValue class="row-margin-contents-small">
              <KeyValueItem>
                <KeyValueTitle>상품명</KeyValueTitle>
                <KeyValueText> 상품명 </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>신용동의</KeyValueTitle>
                <KeyValueText>2023.01.16</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>상담번호</KeyValueTitle>
                <KeyValueText>C42302010014400</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>심사</KeyValueTitle>
                <KeyValueText>승인</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText>36개월</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>금리</KeyValueTitle>
                <KeyValueText>14.60%</KeyValueText>
              </KeyValueItem>
            </KeyValue>
            <ButtonList class="row-margin-contents-small">
              <ButtonListItem>
                <BasicButton size="small" theme="tertiary"
                  >서류등록</BasicButton
                >
              </ButtonListItem>
            </ButtonList>
          </UiAccordionLayer>
        </UiAccordionItem>
      </BasicBox>
    </UiAccordion>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lm-blog/LMBlogStatusInquiry.scss';
</style>
