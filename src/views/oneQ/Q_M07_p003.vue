<script>
// Q_M07_p003
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
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';

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
    BasicButton,
    ButtonList,
    ButtonListItem,
    BottomSticky,
    TextButton,
    BasicDatepicker,
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
      carNumberError: false,
      buisnessNameError: false,
      buisnessLicenseError: false,
      buisnessDateError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '원큐자동차담보대출');
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
      <FormListItem titleText="이름" target="#q_M07_p003_name" :disabled="true">
        <FormInvalid :error="state.nameError">
          <InputBlock :error="state.nameError" :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="이름"
                defaultValue="김하나"
                id="q_M07_p003_name"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="주민등록번호"
        target="#q_M07_p003_idNumber"
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
                id="q_M07_p003_idNumber"
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

      <FormListItem titleText="휴대폰번호" target="#q_M07_p003_phone001">
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
                buttonId="q_M07_p003_phone001"
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
        target="#q_M07_p003_TypeButton"
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
                id="q_M07_p003_Type"
                buttonId="q_M07_p003_TypeButton"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <section class="row-margin-container-medium">
      <h3 class="text-title-2 row-margin-contents">차량 정보</h3>

      <FormList>
        <FormListItem
          titleText="차량 번호"
          target="#q_M07_p003_carCarNumber"
          :class="$style['appoint-wrap']"
        >
          <FormInvalid :error="state.carNumberError">
            <InputBlock :error="state.carNumberError">
              <InputBlockCell
                :flexible="true"
                :class="$style['appoint-wrap-input']"
              >
                <BasicInput
                  pattern="\d*"
                  title="차량 번호"
                  id="q_M07_p003_carCarNumber"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton
                  size="mini"
                  theme="tertiary"
                  :class="$style['appoint-btn']"
                  >조회</BasicButton
                >
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>
      <div class="inline-wrap align-right row-margin-item">
        <TextButton :underline="true" :classNames="{ wrap: 'color-gray' }">
          대출가능차량 기준안내
        </TextButton>
      </div>
    </section>

    <section class="row-margin-container-medium">
      <h3 class="text-title-2 row-margin-contents">사업장정보 입력</h3>

      <FormList>
        <FormListItem titleText="상호명" target="#q_M07_p003_buisnessName">
          <FormInvalid :error="state.buisnessNameError">
            <InputBlock :error="state.buisnessNameError">
              <InputBlockCell :flexible="true">
                <BasicInput title="상호명" id="q_M07_p003_buisnessName" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="사업자번호"
          target="#q_M08_p003_buisnessLicense"
        >
          <FormInvalid :error="state.buisnessLicenseError">
            <InputBlock :error="state.buisnessLicenseError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  title="사업자번호"
                  id="q_M07_p003_buisnessLicense"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton size="mini" theme="tertiary">조회</BasicButton>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="사업개시일"
          target="#q_M07_p003_buisnessDateButton"
        >
          <FormInvalid :error="state.buisnessDateError">
            <InputBlock :error="state.buisnessDateError">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="사업개시일"
                  id="q_M07_p003_buisnessDate"
                  buttonId="q_M07_p003_buisnessDateButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <div class="row-margin-item-regular">
        <ul :class="$style['basic-list']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              실제 정보와 상이할 경우 한도 및 금리가 달라질 수 있습니다.
            </div>
          </li>
        </ul>
      </div>
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
@import '@/assets/scss/views/oneQ/Q_M07_p003.scss';
</style>
