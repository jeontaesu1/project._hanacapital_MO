<script>
// LM_M02_p001
import { ref, reactive, onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import IconTell from '@/assets/images/icon/tell.svg?component';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicHr,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    IconTell,
    BasicDatepicker,
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
    const testInputEvent = (e = {}) => {
      console.log(e.type, e.target);
    };
    const layerTest001 = ref(null);
    onMounted(() => {
      // optional : html 태그에 클래스 추가
      store.ui.common.setRootClassName('page-optional-class');

      // optional : 헤더 구성 변경
      store.ui.header.setTitle(() => '빠른상담신청 내역');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
    });

    onUnmounted(() => {
      // optional : html 태그에 클래스 리셋
      store.ui.common.setRootClassName();

      // optional : 헤더 구성 설정 값 리셋
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
    return {
      state,
      alert,
      layerTest001,
      testInputEvent,
    };
  },
};
</script>

<template>
  <PageContents>
    <FormList>
      <FormListItem titleText="검색조건" target="#testInput013StartButton">
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicDatepicker
                title="검색조건 시작 날짜"
                id="testInput013Start"
                buttonId="testInput013StartButton"
                :max="state.testMaxDate001"
                v-model="state.testMinDate001"
                :onChange="testInputEvent"
              />
            </InputBlockCell>
            <InputBlockCell margin="regular">
              <div class="text-body-3">~</div>
            </InputBlockCell>
            <InputBlockCell :flexible="true" margin="regular">
              <BasicDatepicker
                title="검색조건 종료 날짜"
                id="testInput013End"
                buttonId="testInput013EndButton"
                :min="state.testMinDate001"
                v-model="state.testMaxDate001"
                :onChange="testInputEvent"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <FormListItem titleText="신청자명" target="#testInput007">
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicInput title="신청자명" id="testInput007" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <div class="row-margin-contents-group row-margin-bottom-none">
      <BasicButton :line="true"> 조회 </BasicButton>
    </div>
    <BasicHr className="row-margin-container-medium" />
    <ul class="reset-list">
      <li class="row-margin-item">
        <BasicBox>
          <KeyValue class="row-margin-item-group">
            <KeyValueItem>
              <KeyValueTitle>구분</KeyValueTitle>
              <KeyValueText> LM </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>신청자명</KeyValueTitle>
              <KeyValueText>김하나</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>신청일</KeyValueTitle>
              <KeyValueText> 2022.02.02 </KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <BasicButton tagName="a" size="small">
            <template v-slot:leftIcon>
              <IconTell />
            </template>
            전화상담
          </BasicButton>
        </BasicBox>
      </li>
      <li class="row-margin-item">
        <BasicBox>
          <KeyValue class="row-margin-item-group">
            <KeyValueItem>
              <KeyValueTitle>구분</KeyValueTitle>
              <KeyValueText> LM </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>신청자명</KeyValueTitle>
              <KeyValueText>김하나</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>신청일</KeyValueTitle>
              <KeyValueText> 2022.02.02 </KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <BasicButton tagName="a" size="small">
            <template v-slot:leftIcon>
              <IconTell />
            </template>
            전화상담
          </BasicButton>
        </BasicBox>
      </li>
    </ul>

    <!-- <div :class="$style['empty']">
      <p :class="$style['empty__text']">조회된 결과가 없습니다.</p>
    </div> -->
  </PageContents>
</template>
