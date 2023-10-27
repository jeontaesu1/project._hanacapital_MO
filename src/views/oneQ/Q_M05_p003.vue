<script>
// Q_M05_p002
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
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';

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
    BasicButton,
    ButtonList,
    ButtonListItem,
    BottomSticky,
    BasicSelect,
    SecurityInput,
    StepProgress,
    StickyBar,
    BasicDatepicker,
    FormHelpText,
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
      phoneError: false,
      incomeTypeError: false,
      workPlaceNameError: false,
      joiningDateError: false,
      workIncomeError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => 'e하나신용대출(연계)');
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
        <StepProgress :total="3" :current="2" />
      </StickyBar>
    </template>
    <PageTextGroup>
      <PageMainText>
        손님정보를<br />
        입력해 주세요
      </PageMainText>
    </PageTextGroup>

    <FormList>
      <FormListItem titleText="이름" target="#q_M05_p003_name" :disabled="true">
        <FormInvalid :error="state.nameError">
          <InputBlock :error="state.nameError" :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="이름"
                defaultValue="김하나"
                id="q_M05_p003_name"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="주민등록번호"
        target="#q_M05_p003_idNumber"
        :disabled="true"
      >
        <FormInvalid :error="state.idNumberError">
          <InputBlock :error="state.idNumberError" :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="number"
                defaultValue="960125"
                pattern="\d*"
                title="주민등록번호 앞 6자리"
                id="q_M05_p003_idNumber"
                :disabled="true"
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

      <FormListItem titleText="휴대폰번호" target="#q_M05_p003_phone">
        <FormInvalid :error="state.phoneError">
          <InputBlock :error="state.phoneError">
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
                buttonId="q_M05_p003_phone"
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

      <FormListItem
        titleText="소득구분"
        target="#q_M05_p003_incomeTypeButton"
        :selectOnly="true"
      >
        <FormInvalid :error="state.incomeTypeError">
          <InputBlock :error="state.incomeTypeError">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: '급여소득자',
                  },
                  {
                    value: '2',
                    text: '전문직',
                  },
                  {
                    value: '3',
                    text: '자영업자',
                  },
                  {
                    value: '4',
                    text: '학생',
                  },
                  {
                    value: '5',
                    text: '주부',
                  },
                  {
                    value: '6',
                    text: '무직',
                  },
                  {
                    value: '7',
                    text: '연금소득자',
                  },
                  {
                    value: '8',
                    text: '공무원',
                  },
                  {
                    value: '9',
                    text: '기타',
                  },
                ]"
                buttonTitle="소득구분 선택하기"
                layerTitle="소득구분을 선택해 주세요"
                id="q_M05_p003_incomeType"
                buttonId="q_M05_p003_incomeTypeButton"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <section class="row-margin-container-medium">
      <h3 class="text-title-2 row-margin-contents">직장정보 입력</h3>

      <FormList>
        <FormListItem titleText="직장명" target="#q_M05_p003_workPlaceName">
          <FormInvalid :error="state.workPlaceNameError">
            <InputBlock :error="state.workPlaceNameError">
              <InputBlockCell :flexible="true">
                <BasicInput title="직장명" id="q_M05_p003_workPlaceName" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="입사일" target="#q_M05_p003_joiningDateButton">
          <FormInvalid :error="state.joiningDateError">
            <InputBlock :error="state.joiningDateError">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="입사일"
                  id="q_M05_p003_joiningDate"
                  buttonId="q_M05_p003_joiningDateButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="연소득" target="#q_M05_p003_workIncome">
          <FormInvalid :error="state.workIncomeError">
            <InputBlock :error="state.workIncomeError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="연소득"
                  id="q_M05_p003_workIncome"
                  pattern="\d*"
                  :useDelete="false"
                  align="right"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-3">만원</div>
              </template>
            </InputBlock>
            <FormHelpText>연소득은 세전 소득을 의미합니다.</FormHelpText>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>
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
              <BasicButton>다음</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>
