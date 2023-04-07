<script>
// Customer_M02_p002

import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';

import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicTextarea from '@/components/ui/form/BasicTextarea.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicSelect,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormHelpText,
    BasicTextarea,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      testError001: false,
    });
    const testErrorUpdate001 = (val) => {
      state.testError001 = val;
    };

    onMounted(() => {
      // optional : html 태그에 클래스 추가
      store.ui.common.setRootClassName('page-optional-class');

      // optional : 헤더 구성 변경
      store.ui.header.setTitle(() => '고객상담');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      // optional : html 태그에 클래스 리셋
      store.ui.common.setRootClassName();

      // optional : 헤더 구성 설정 값 리셋
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
    });

    return {
      state,
      alert,
      testErrorUpdate001,
    };
  },
};
</script>

<template>
  <PageContents>
    <PageTextGroup>
      <PageMainText>
        일반문의만 가능하며<br />대출 관련 상담 신청 시<br /><strong
          >전화상담 버튼를 이용하세요</strong
        >
      </PageMainText>
    </PageTextGroup>

    <FormList>
      <FormListItem
        titleText="대출기간"
        titleOptionalText="(일반문의)"
        target="#testInput010Button"
        :selectOnly="true"
      >
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: '정보변경',
                  },
                  {
                    value: '2',
                    text: '제증명발급',
                  },
                  {
                    value: '3',
                    text: '상환문의',
                  },
                  {
                    value: '4',
                    text: '기타문의',
                  },
                  {
                    value: '5',
                    text: '홈페이지관련',
                  },
                  {
                    value: '6',
                    text: '채용관련',
                  },
                  {
                    value: '7',
                    text: '철약철회신청',
                  },
                ]"
                buttonTitle="문의분야 선택하기"
                layerTitle="문의분야를 선택해 주세요"
                id="testInput010"
                buttonId="testInput010Button"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="고객명" target="#testInput002">
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicInput title="고객명" id="testInput002" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="생년월일" target="#testInput003">
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicInput title="생년월일" id="testInput003" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>숫자만 입력해 주세요. (예:900123)</FormHelpText>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="연락처" target="#testInput004">
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicInput title="연락처" id="testInput004" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>-없이 입력해주세요.</FormHelpText>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="이메일"
        titleOptionalText="이메일"
        target="#testInput005"
      >
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="number"
                pattern="\d*"
                title="주민등록번호 앞 6자리"
                id="testInput005"
              />
            </InputBlockCell>
            <InputBlockCell type="sub">@</InputBlockCell>
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: 'naver.com',
                  },
                  {
                    value: '2',
                    text: 'hanmail.net',
                  },
                  {
                    value: '3',
                    text: 'gmail.com',
                  },
                  {
                    value: '4',
                    text: 'nate.com',
                  },
                  {
                    value: '5',
                    text: 'paran.com',
                  },
                  {
                    value: '6',
                    text: 'dreamwiz.com',
                  },
                  {
                    value: '7',
                    text: 'yahoo.com',
                  },
                  {
                    value: '8',
                    text: 'freechal.com',
                  },
                  {
                    value: '9',
                    text: '직접입력',
                  },
                ]"
                buttonTitle="문의분야 선택하기"
                layerTitle="문의분야를 선택해 주세요"
                id="testInput010"
                buttonId="testInput010Button"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <!-- Case : 직접입력 선택시 노출 -->

      <BasicTextarea :error="state.testError001" titleText="상담신청내용">
      </BasicTextarea>
    </FormList>

    <div :class="[$style['agree-list'], 'row-margin-container']">
      <ul :class="$style['agree-list__depth']">
        <li :class="$style['agree-list__depth-item']">
          <div :class="$style['agree-list__depth-head']">
            <CheckBox
              id="layerGuidePhoneCounselingAgree001"
              :classNames="{
                wrap: $style['agree-list__checkbox'],
              }"
              theme="tertiary"
            >
              <CheckBoxObject />
              <CheckBoxLabelText>개인정보 수집ㆍ이용 동의</CheckBoxLabelText>
            </CheckBox>
            <div :class="$style['agree-list__right']">
              <button type="button" :class="$style['agree-list__link']">
                <span :class="$style['agree-list__link-text']"> 상세보기 </span>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton>확인</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerCounselingRegist.scss';
</style>
