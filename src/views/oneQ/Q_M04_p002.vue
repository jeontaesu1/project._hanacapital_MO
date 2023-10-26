<script>
// Q_M04_p002
import { reactive } from 'vue';
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
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

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
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
      timeError: false,
      branchError: false,
      phone001Error: false,
      phone002Error: false,
      codeError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '중고차 오토론');
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
    <PageTextGroup>
      <PageMainText>
        손님정보를<br />
        입력해 주세요
      </PageMainText>
    </PageTextGroup>

    <FormList>
      <FormListItem titleText="이름" target="#q_M04_p002_name">
        <FormInvalid :error="state.nameError">
          <InputBlock :error="state.nameError">
            <InputBlockCell :flexible="true">
              <BasicInput title="이름" id="q_M04_p002_name" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="주민등록번호" target="#q_M04_p002_idNumber">
        <FormInvalid :error="state.idNumberError">
          <InputBlock :error="state.idNumberError">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="number"
                pattern="\d*"
                title="주민등록번호 앞 6자리"
                id="q_M04_p002_idNumber"
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

      <FormListItem
        titleText="연락가능시간"
        target="#q_M04_p002_startTimeButton"
      >
        <FormInvalid :error="state.timeError">
          <InputBlock :error="state.timeError">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '9',
                    text: '9',
                  },
                  {
                    value: '10',
                    text: '10',
                  },
                  {
                    value: '11',
                    text: '11',
                  },
                  {
                    value: '12',
                    text: '12',
                  },
                  {
                    value: '13',
                    text: '13',
                  },
                  {
                    value: '14',
                    text: '14',
                  },
                  {
                    value: '15',
                    text: '15',
                  },
                  {
                    value: '16',
                    text: '16',
                  },
                  {
                    value: '17',
                    text: '17',
                  },
                ]"
                buttonTitle="시작시간 선택하기"
                layerTitle="시작시간을 선택해 주세요"
                id="q_M04_p002_startTime"
                buttonId="q_M04_p002_startTimeButton"
              />
            </InputBlockCell>
            <InputBlockCell margin="regular">
              <div class="text-body-3">시</div>
            </InputBlockCell>
            <InputBlockCell margin="regular">
              <div class="text-body-3">~</div>
            </InputBlockCell>
            <InputBlockCell :flexible="true" margin="regular">
              <BasicSelect
                :option="[
                  {
                    value: '10',
                    text: '10',
                  },
                  {
                    value: '11',
                    text: '11',
                  },
                  {
                    value: '12',
                    text: '12',
                  },
                  {
                    value: '13',
                    text: '13',
                  },
                  {
                    value: '14',
                    text: '14',
                  },
                  {
                    value: '15',
                    text: '15',
                  },
                  {
                    value: '16',
                    text: '16',
                  },
                  {
                    value: '17',
                    text: '17',
                  },
                  {
                    value: '18',
                    text: '18',
                  },
                ]"
                buttonTitle="종료시간 선택하기"
                layerTitle="종료시간을 선택해 주세요"
                id="q_M04_p002_endTime"
                buttonId="q_M04_p002_endTimeButton"
              />
            </InputBlockCell>
            <InputBlockCell margin="regular">
              <div class="text-body-3">시 사이</div>
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="차량구매지"
        target="#q_M04_p002_branchButton"
        :selectOnly="true"
      >
        <FormInvalid :error="state.branchError">
          <InputBlock :error="state.branchError">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: '서울',
                  },
                  {
                    value: '2',
                    text: '인천',
                  },
                  {
                    value: '3',
                    text: '경기북부',
                  },
                  {
                    value: '4',
                    text: '경기남부',
                  },
                  {
                    value: '5',
                    text: '경기안산',
                  },
                  {
                    value: '6',
                    text: '강원도',
                  },
                  {
                    value: '7',
                    text: '충청도',
                  },
                  {
                    value: '8',
                    text: '전라도',
                  },
                  {
                    value: '9',
                    text: '대구',
                  },
                  {
                    value: '10',
                    text: '부산',
                  },
                  {
                    value: '11',
                    text: '경상도',
                  },
                  {
                    value: '12',
                    text: '제주도',
                  },
                ]"
                buttonTitle="차량구매지 선택하기"
                layerTitle="지역을 선택해 주세요"
                id="q_M04_p002_branch"
                buttonId="q_M04_p002_branchButton"
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
          target="#q_M04_p002_phone001Button"
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
                  id="q_M04_p002_phone001"
                  buttonId="q_M04_p002_phone001Button"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="휴대폰번호" target="#q_M04_p002_phone002">
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
                  buttonId="q_M04_p002_phone002"
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
                id="q_M04_p002_agreeAll001"
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
                        id="q_M04_p002_agree_001_001"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText
                          >개인정보 수집∙이용, 취급위탁 동의</CheckBoxLabelText
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
                        id="q_M04_p002_agree_001_002"
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
                        id="q_M04_p002_agree_001_003"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText>본인확인 이용약관</CheckBoxLabelText>
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
                        id="q_M04_p002_agree_001_004"
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
        <!-- DD : 인증번호 인증 후 :disabled="true" -->
        <FormListItem
          titleText="인증번호"
          titleOptionalText="(6자리)"
          target="#q_M04_p002_phoneCode"
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
                  id="q_M04_p002_phoneCode"
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

                <!-- Case : 인증번호 인증 후 노출 -->
                <!-- <BasicButton
                  size="mini"
                  theme="quaternary"
                  :disabled="true"
                  inline="true"
                >
                  인증완료
                </BasicButton> -->
                <!-- // Case : 인증번호 인증 후 노출 -->
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // DD : 인증번호 인증 후 :disabled="true" -->
      </FormList>
      <!-- // Case : 인증번호 전송 후 노출 -->
    </section>

    <!-- Case : 인증번호 인증 후 노출 -->
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
                id="q_M04_p002_agreeAll002"
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
                        id="q_M04_p002_agree_002_001"
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
                            id="q_M04_p002_agree_002_001_001"
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
                            id="q_M04_p002_agree_002_001_002"
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
                        id="q_M04_p002_agree_002_002"
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
                            id="q_M04_p002_agree_002_002_001"
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
                            id="q_M04_p002_agree_002_002_002"
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
                        id="q_M04_p002_agree_002_003"
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
                            id="q_M04_p002_agree_002_003_001"
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
                            id="q_M04_p002_agree_002_003_002"
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
                </ul>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </div>
    </section>
    <!-- // Case : 인증번호 인증 후 노출 -->

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
@import '@/assets/scss/views/oneQ/Q_M04_p002.scss';
</style>
