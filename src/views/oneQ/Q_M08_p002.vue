<script>
// Q_M08_p002
import { reactive } from 'vue';
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconCertificationPerson from '@/assets/images/icon/certification-person.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BottomSticky,
    BasicSelect,
    SecurityInput,
    UiAccordion,
    UiAccordionItem,
    UiAccordionOpener,
    UiAccordionLayer,
    StepProgress,
    StickyBar,
    BasicHr,
    IconCertificationPerson,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      nameError: false,
      idNumberError: false,
      phone001Error: false,
      phone002Error: false,
      codeError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '우수고객추가대출');
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
    <template v-slot:head>
      <StickyBar>
        <StepProgress :total="3" :current="1" />
      </StickyBar>
    </template>
    <PageTextGroup>
      <PageMainText>
        본인인증을<br />
        진행해 주세요
      </PageMainText>
      <PageSubText>
        대출상담 및 한도조회를 위한신용정보조회는<br />
        손님의 개인신용평점에 영향을 주지 않습니다.
      </PageSubText>
    </PageTextGroup>

    <!-- Case : 휴대전화 인증 후 노출 -->
    <div>
      <div :class="$style['success-view']">
        <div :class="$style['success-view__item']">
          <div :class="$style['success-view__icon']">
            <IconCertificationPerson />
          </div>
          <span :class="$style['success-view__text']">본인인증 성공</span>
        </div>
      </div>

      <BasicHr className="row-margin-container-medium" />

      <section>
        <h3 class="text-title-2 row-margin-contents">서비스 이용약관</h3>

        <div :class="$style['agree-list']">
          <UiAccordion :classNames="{ wrap: $style['agree-list__container'] }">
            <UiAccordionItem
              :classNames="{ item: $style['agree-list__all'] }"
              :initialOpen="true"
            >
              <div :class="$style['agree-list__all-head']">
                <CheckBox
                  id="Q_M08_p002_agreeAll001"
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
                          id="Q_M08_p002_agree_001_001"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            개인(신용)정보 필수적 수집·이용 동의
                          </CheckBoxLabelText>
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <button
                            type="button"
                            :class="$style['agree-list__link']"
                          >
                            <span :class="$style['agree-list__link-text']">
                              상세보기
                            </span>
                          </button>
                        </div>
                      </div>
                      <ul
                        :class="[
                          $style['agree-list__list'],
                          $style['agree-list__list--secondary'],
                        ]"
                      >
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="Q_M08_p002_agree_001_001_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                개인(신용)정보 필수적 수집·이용
                              </CheckBoxLabelText>
                            </CheckBox>
                          </div>
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="Q_M08_p002_agree_001_001_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                고유식별번호 필수적 수집·이용
                              </CheckBoxLabelText>
                            </CheckBox>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="Q_M08_p002_agree_001_002"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            개인(신용)정보 필수적 조회 동의
                          </CheckBoxLabelText>
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <button
                            type="button"
                            :class="$style['agree-list__link']"
                          >
                            <span :class="$style['agree-list__link-text']">
                              상세보기
                            </span>
                          </button>
                        </div>
                      </div>
                      <ul
                        :class="[
                          $style['agree-list__list'],
                          $style['agree-list__list--secondary'],
                        ]"
                      >
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="Q_M08_p002_agree_001_002_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                개인(신용)정보 필수적 조회
                              </CheckBoxLabelText>
                            </CheckBox>
                          </div>
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="Q_M08_p002_agree_001_002_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                고유식별번호 필수적 조회
                              </CheckBoxLabelText>
                            </CheckBox>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="Q_M08_p002_agree_001_003"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            개인(신용)정보 필수적 제공 동의
                          </CheckBoxLabelText>
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <button
                            type="button"
                            :class="$style['agree-list__link']"
                          >
                            <span :class="$style['agree-list__link-text']">
                              상세보기
                            </span>
                          </button>
                        </div>
                      </div>
                      <ul
                        :class="[
                          $style['agree-list__list'],
                          $style['agree-list__list--secondary'],
                        ]"
                      >
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="Q_M08_p002_agree_001_003_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                개인(신용)정보 필수적 제공에 관한 사항
                              </CheckBoxLabelText>
                            </CheckBox>
                          </div>
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="Q_M08_p002_agree_001_003_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                고유식별번호 필수적 제공
                              </CheckBoxLabelText>
                            </CheckBox>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="Q_M08_p002_agree_001_004"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>금융상품안내</CheckBoxLabelText>
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <button
                            type="button"
                            :class="$style['agree-list__link']"
                          >
                            <span :class="$style['agree-list__link-text']">
                              상세보기
                            </span>
                          </button>
                        </div>
                      </div>
                      <ul
                        :class="[
                          $style['agree-list__list'],
                          $style['agree-list__list--secondary'],
                        ]"
                      >
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="Q_M08_p002_agree_001_004_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                금융 상품 안내 동의
                              </CheckBoxLabelText>
                            </CheckBox>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
          </UiAccordion>
        </div>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">
          행정안전부 공공마이데이터서비스 이용 동의 (증빙서류 자동 제출)
        </h3>

        <div :class="$style['agree-list']">
          <UiAccordion :classNames="{ wrap: $style['agree-list__container'] }">
            <UiAccordionItem
              :classNames="{ item: $style['agree-list__all'] }"
              :initialOpen="true"
            >
              <div :class="$style['agree-list__all-head']">
                <CheckBox
                  id="Q_M08_p002_agreeAll002"
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
                          id="Q_M08_p002_agree_002_001"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            개인(신용)정보 필수적 수집∙이용 동의<br />
                            (공공 마이데이터)
                          </CheckBoxLabelText>
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <button
                            type="button"
                            :class="$style['agree-list__link']"
                          >
                            <span :class="$style['agree-list__link-text']">
                              상세보기
                            </span>
                          </button>
                        </div>
                      </div>
                      <ul
                        :class="[
                          $style['agree-list__list'],
                          $style['agree-list__list--secondary'],
                        ]"
                      >
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="Q_M08_p002_agree_002_001_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                개인(신용)정보 수집∙이용 동의
                              </CheckBoxLabelText>
                            </CheckBox>
                          </div>
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="Q_M08_p002_agree_002_001_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                고유식별정보 수집∙이용 동의
                              </CheckBoxLabelText>
                            </CheckBox>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="Q_M08_p002_agree_002_002"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            개인(신용)정보 필수적 제공 동의<br />
                            (공공 마이데이터)
                          </CheckBoxLabelText>
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <button
                            type="button"
                            :class="$style['agree-list__link']"
                          >
                            <span :class="$style['agree-list__link-text']">
                              상세보기
                            </span>
                          </button>
                        </div>
                      </div>
                      <ul
                        :class="[
                          $style['agree-list__list'],
                          $style['agree-list__list--secondary'],
                        ]"
                      >
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="Q_M08_p002_agree_002_002_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                개인(신용)정보 제공 동의
                              </CheckBoxLabelText>
                            </CheckBox>
                          </div>
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="Q_M08_p002_agree_002_002_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                고유식별정보 제공 동의
                              </CheckBoxLabelText>
                            </CheckBox>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="Q_M08_p002_agree_002_003"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            개인(신용)정보 필수적 제3자 제공<br />
                            (공공 마이데이터)
                          </CheckBoxLabelText>
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <button
                            type="button"
                            :class="$style['agree-list__link']"
                          >
                            <span :class="$style['agree-list__link-text']">
                              상세보기
                            </span>
                          </button>
                        </div>
                      </div>
                      <ul
                        :class="[
                          $style['agree-list__list'],
                          $style['agree-list__list--secondary'],
                        ]"
                      >
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="Q_M08_p002_agree_002_003_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                개인(신용)정보 제공(조회) 동의
                              </CheckBoxLabelText>
                            </CheckBox>
                          </div>
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="Q_M08_p002_agree_002_003_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                고유식별정보 제공(조회) 동의
                              </CheckBoxLabelText>
                            </CheckBox>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="Q_M08_p002_agree_002_004"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            본인 행정정보 제3자 제공 요구서<br />
                            (공공 마이데이터)
                          </CheckBoxLabelText>
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <button
                            type="button"
                            :class="$style['agree-list__link']"
                          >
                            <span :class="$style['agree-list__link-text']">
                              상세보기
                            </span>
                          </button>
                        </div>
                      </div>
                      <ul
                        :class="[
                          $style['agree-list__list'],
                          $style['agree-list__list--secondary'],
                        ]"
                      >
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="Q_M08_p002_agree_002_004_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                본인 행정정보 제3자 제공 요구
                              </CheckBoxLabelText>
                            </CheckBox>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
          </UiAccordion>
        </div>
      </section>
    </div>
    <!-- // Case : 휴대전화 인증 후 노출 -->

    <!-- Case : 휴대전화 인증 후 미노출 -->
    <div>
      <FormList>
        <FormListItem titleText="이름" target="#Q_M08_p002_name">
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput title="이름" id="Q_M08_p002_name" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="주민등록번호" target="#Q_M08_p002_idNumber">
          <FormInvalid :error="state.idNumberError">
            <InputBlock :error="state.idNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="Q_M08_p002_idNumber"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                <SecurityInput
                  title="주민등록번호 뒤 7자리"
                  :dot="[true, true, true, false, false, false, false]"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">휴대전화 인증</h3>

        <FormList>
          <FormListItem
            titleText="통신사"
            target="#Q_M08_p002_phone001Button"
            :selectOnly="true"
          >
            <FormInvalid :error="state.phone001Error">
              <InputBlock :error="state.phone001Error">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: 'SKT',
                      },
                      {
                        value: '2',
                        text: 'KT',
                      },
                      {
                        value: '3',
                        text: 'LG U+',
                      },
                      {
                        value: '4',
                        text: '알뜰폰 SKT',
                      },
                      {
                        value: '5',
                        text: '알뜰폰 KT',
                      },
                      {
                        value: '6',
                        text: '알뜰폰 LG +',
                      },
                    ]"
                    buttonTitle="통신사 선택하기"
                    layerTitle="통신사를 선택해 주세요"
                    id="Q_M08_p002_phone001"
                    buttonId="Q_M08_p002_phone001Button"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="휴대폰번호" target="#Q_M08_p002_phone002">
            <FormInvalid :error="state.phone002Error">
              <InputBlock :error="state.phone002Error">
                <InputBlockCell>
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '010',
                      },
                      {
                        value: '2',
                        text: '011',
                      },
                      {
                        value: '3',
                        text: '0130',
                      },
                      {
                        value: '4',
                        text: '016',
                      },
                      {
                        value: '5',
                        text: '017',
                      },
                      {
                        value: '6',
                        text: '018',
                      },
                      {
                        value: '7',
                        text: '019',
                      },
                      {
                        value: '8',
                        text: '0505',
                      },
                    ]"
                    buttonTitle="통신사 선택하기"
                    layerTitle="통신사를 선택해 주세요"
                    buttonId="Q_M08_p002_phone002"
                    :classNames="{
                      wrap: 'input-width-telecom',
                    }"
                  />
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicInput title="휴대폰번호" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <div :class="[$style['agree-list'], 'row-margin-contents']">
          <UiAccordion :classNames="{ wrap: $style['agree-list__container'] }">
            <UiAccordionItem
              :classNames="{ item: $style['agree-list__all'] }"
              :initialOpen="true"
            >
              <div :class="$style['agree-list__all-head']">
                <CheckBox
                  id="Q_M08_p002_agreeAll003"
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
                          id="Q_M08_p002_agree_003_001"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >개인정보 수집∙이용, 취급위탁
                            동의</CheckBoxLabelText
                          >
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <button
                            type="button"
                            :class="$style['agree-list__link']"
                          >
                            <span :class="$style['agree-list__link-text']">
                              상세보기
                            </span>
                          </button>
                        </div>
                      </div>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="Q_M08_p002_agree_003_002"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >고유식별정보 처리동의</CheckBoxLabelText
                          >
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <button
                            type="button"
                            :class="$style['agree-list__link']"
                          >
                            <span :class="$style['agree-list__link-text']">
                              상세보기
                            </span>
                          </button>
                        </div>
                      </div>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="Q_M08_p002_agree_003_003"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >본인확인 이용약관</CheckBoxLabelText
                          >
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <button
                            type="button"
                            :class="$style['agree-list__link']"
                          >
                            <span :class="$style['agree-list__link-text']">
                              상세보기
                            </span>
                          </button>
                        </div>
                      </div>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="Q_M08_p002_agree_003_004"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >통신사 본인확인 이용약관 동의</CheckBoxLabelText
                          >
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <button
                            type="button"
                            :class="$style['agree-list__link']"
                          >
                            <span :class="$style['agree-list__link-text']">
                              상세보기
                            </span>
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
          </UiAccordion>
        </div>

        <!-- Case : 인증번호 전송 후 노출 -->
        <FormList>
          <FormListItem
            titleText="인증번호"
            titleOptionalText="(6자리)"
            target="#Q_M08_p002_phoneCode"
            :forceFocus="true"
            :disabled="false"
          >
            <FormInvalid :error="state.codeError">
              <InputBlock :error="state.codeError" :disabled="false">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="인증번호 (6자리)"
                    id="Q_M08_p002_phoneCode"
                    placeholder="인증번호를 입력해 주세요"
                    :disabled="false"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div :class="$style['input-timer']">00:00</div>
                </template>
                <template v-slot:right>
                  <BasicButton size="mini" theme="quaternary" inline="true">
                    재요청
                  </BasicButton>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
        <!-- // Case : 인증번호 전송 후 노출 -->
      </section>
    </div>
    <!-- // Case : 휴대전화 인증 후 미노출 -->

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
            align="full"
          >
            <ButtonListItem>
              <BasicButton>인증번호 전송</BasicButton>
            </ButtonListItem>
            <!-- Case : 인증번호 전송 후 노출-->
            <!-- DD : 인증 후 비활성화, 전체동의 후 활성화  -->
            <ButtonListItem>
              <BasicButton>다음</BasicButton>
            </ButtonListItem>
            <!-- // DD : 인증 후 비활성화, 전체동의 후 활성화  -->
            <!-- // Case : 인증번호 전송 후 노출 -->
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/oneQ/Q_M08_p002.scss';
</style>
