<script>
// LR_M07_p001
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';

import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
// import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicSelect2nd from '@/components/ui/form/BasicSelect2nd.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

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

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicBox,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    // FormHelpText,

    InputBlock,
    InputBlockCell,
    BasicInput,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    BasicSelect,
    BasicSelect2nd,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,

    BasicButton,
    ButtonList,
    ButtonListItem,
    BottomSticky,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };
    onMounted(() => {
      store.ui.header.setTitle(() => ' ');
      store.ui.header.setLeftButtons(() => [' ']);
      store.ui.header.setRightButtons(() => []);
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
      departmentError: false,
    });

    const testInputEvent = (e = {}) => {
      console.log(e.type, e.target);
    };

    return {
      state,
      testInputEvent,
    };
  },
};
</script>

<template>
  <PageContents
    :classNames="{
      body: $style['page-body'],
    }"
  >
    <PageTextGroup :class="$style['page-text-group']">
      <div :class="$style['logo-main']">
        <img
          src="@/assets/images/illustration/logo_main.png"
          alt="하나캐피탈"
          style="width: 108px; height: 24px"
        />
      </div>
      <!-- 250425 재수정 -->
      <div :class="$style['img-top-new']">
        <PageMainText :class="$style['text-position']">
          <span>하나금융그룹 임직원에게만 드리는</span> <br />
          <div :class="'font-weight-bold'">렌터카 특별 혜택</div>
        </PageMainText>
        <div :class="$style['illustration-img-icon']">
          <img
            src="@/assets/images/contents/img-lease-rental-main2_car.png"
            alt="만기대상 프로세스"
          />
        </div>
      </div>
      <!--//250425 -->
    </PageTextGroup>
    <!--//250425 -->

    <FormList :class="$style['agree-list']">
      <!-- title -->
      <PageTextGroup :class="$style['page-text-group-mb']">
        <PageMainText>
          <div :class="$style['main-title-area']">
            <span style="font-weight: 300">상담 안내를 위한</span><br />
            정보를 입력해 주세요
          </div>
        </PageMainText>
      </PageTextGroup>
      <!-- 관계사 -->
      <FormListItem
        titleText="관계사"
        target="#layerMyInfoBillingEditBillingMethodButton"
        :selectOnly="true"
      >
        <FormInvalid :error="state.billingMethodSelectError">
          <InputBlock :error="state.billingMethodSelectError">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: '하나금융지주',
                  },
                  {
                    value: '2',
                    text: '하나은행',
                  },
                  {
                    value: '3',
                    text: '하나증권',
                  },
                  {
                    value: '4',
                    text: '하나카드',
                  },
                  {
                    value: '5',
                    text: '하나캐피탈',
                  },
                  {
                    value: '6',
                    text: '하나생명',
                  },
                  {
                    value: '7',
                    text: '하나손해보험',
                  },
                  {
                    value: '8',
                    text: '하나저축은행',
                  },
                  {
                    value: '9',
                    text: '하나자산신탁',
                  },
                  {
                    value: '10',
                    text: '하나대체투자',
                  },
                  {
                    value: '11',
                    text: '하나에프앤아이',
                  },
                  {
                    value: '12',
                    text: '하나벤처스',
                  },
                  {
                    value: '13',
                    text: '하나펀드서비스',
                  },
                  {
                    value: '14',
                    text: '하나금융티아이',
                  },
                  {
                    value: '15',
                    text: '핀크',
                  },
                ]"
                buttonTitle="관계사 선택하기"
                layerTitle="관계사 선택해 주세요"
                id="layerMyInfoBillingEditBillingMethodSelect"
                buttonId="layerMyInfoBillingEditBillingMethodButton"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!--//관계사-->
      <!-- 사원번호 -->
      <FormListItem titleText="사원번호" target="#testInput001">
        <FormInvalid :error="state.nameError">
          <InputBlock :error="state.nameError">
            <InputBlockCell :flexible="true">
              <BasicInput title="사원번호" id="testInput001" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // 사원번호 250425 -->

      <!-- 부서 -->
      <FormListItem titleText="부서" target="#testInput007">
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicInput title="부서" id="testInput007" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // 부서 -->

      <!-- 이름 -->
      <FormListItem titleText="이름" target="#testInput007">
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicInput title="이름" id="testInput007" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // 이름 -->

      <!-- 휴대폰번호 -->
      <FormListItem titleText="휴대폰번호" target="#testInput007">
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicInput title="휴대폰번호" id="testInput007" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // 휴대폰번호 -->

      <!-- 구입희망차량 -->
      <FormListItem
        titleText="구입희망차량"
        titleOptionalText=""
        target="#testInput010Button"
        :selectOnly="true"
      >
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicSelect2nd
                :option="[
                  {
                    value: '1',
                    text: '111',
                  },
                  {
                    value: '2',
                    text: '222',
                  },
                  {
                    value: '3',
                    text: '333',
                  },
                  {
                    value: '4',
                    text: '444',
                  },
                  {
                    value: '5',
                    text: '555',
                  },
                ]"
                buttonTitle="희망차량 선택하기"
                layerTitle="희망차량을 선택해 주세요"
                id="testInput010"
                buttonId="testInput010Button"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // 희망차량선택 -->
    </FormList>

    <div :class="$style['border-division']"></div>

    <section class="service-wrap">
      <h3 class="text-title-2 row-margin-contents">서비스 이용약관</h3>

      <div :class="$style['agree-list']">
        <UiAccordion :classNames="{ wrap: $style['agree-list__container'] }">
          <UiAccordionItem
            :classNames="{ item: $style['agree-list__all'] }"
            :initialOpen="true"
          >
            <div :class="$style['agree-list__all-head']">
              <CheckBox
                id="testagree002All"
                :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>전체동의</CheckBoxLabelText>
              </CheckBox>
              <div :class="$style['agree-list__right']">
                <UiAccordionOpener
                  :classNames="{ button: $style['agree-list__all-opener'] }"
                />
              </div>
            </div>

            <UiAccordionLayer>
              <div :class="$style['agree-list__all-contents']">
                <ul :class="$style['agree-list__list']">
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        id="testagree002_001"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText>
                          개인정보 수집·이용 동의
                        </CheckBoxLabelText>
                      </CheckBox>
                    </div>
                  </li>
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        id="testagree002_002"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText
                          >개인(신용)정보 필수적 조회 동의</CheckBoxLabelText
                        >
                      </CheckBox>
                    </div>
                  </li>
                </ul>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </div>
    </section>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton :disabled="true">다음</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/MainMyLoanEmptyLR_M07_p001.scss';
@import '@/assets/scss/views/uiGuide/GuideComponentModuleLR_M07_p001.scss';
@import '@/assets/scss/views/LeaseRentEstimationSystem/LR_M07_p001.scss';
</style>
