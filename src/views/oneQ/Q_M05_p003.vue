<script>
// Q_M05_p003
import { reactive } from 'vue';
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    StepProgress,
    StickyBar,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    SecurityInput,
    BasicSelect,
    BasicDatepicker,
    FormHelpText,
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

    const state = reactive({
      nameError: false,
      idNumberError: false,
      phone001Error: false,
      incomeTypeError: false,
      workplaceNameError: false,
      dateError: false,
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
          <InputBlock :error="state.idNumberError">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="number"
                pattern="\d*"
                title="주민등록번호 앞 6자리"
                defaultValue="960125"
                s
                id="q_M05_p003_idNumber"
                :disabled="true"
              />
            </InputBlockCell>
            <InputBlockCell type="sub">-</InputBlockCell>
            <InputBlockCell :flexible="true">
              <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
              <SecurityInput
                title="주민등록번호 뒤 7자리"
                :dot="[true, false, false, false, false, false, false]"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="휴대폰번호" target="#q_M05_p003_phone001">
        <FormInvalid :error="state.phone001Error">
          <InputBlock :error="state.phone001Error">
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
                buttonId="q_M05_p003_phone001"
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
        target="#q_M05_p003_TypeButton"
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
                    text: '자영업자',
                  },
                  {
                    value: '3',
                    text: '기타',
                  },
                ]"
                buttonTitle="소득구분 선택하기"
                layerTitle="소득구분을 선택해 주세요"
                id="q_M05_p003_Type"
                buttonId="q_M05_p003_TypeButton"
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
        <FormListItem titleText="직장명" target="#q_M05_p003_WorkplaceName">
          <FormInvalid :error="state.workplaceNameError">
            <InputBlock :error="state.workplaceNameError">
              <InputBlockCell :flexible="true">
                <BasicInput title="직장명" id="q_M05_p003_WorkplaceName" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="입사일" target="#q_M05_p003_DateButton">
          <FormInvalid :error="state.dateError">
            <InputBlock :error="state.dateError">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="입사일"
                  id="q_M05_p003_Date"
                  buttonId="q_M05_p003_DateButton"
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
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>연소득은 세전 소득을 의미합니다.</FormHelpText>
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
            align="full"
          >
            <!-- DD : 필수값 입력시 활성화  -->
            <ButtonListItem>
              <BasicButton>다음</BasicButton>
            </ButtonListItem>
            <!-- // DD : 필수값 입력시 활성화  -->
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/oneQ/Q_M05_p003.scss';
</style>
