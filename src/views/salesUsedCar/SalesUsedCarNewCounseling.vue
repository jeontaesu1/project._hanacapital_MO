<script>
// UC_M02_p001
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicTextarea from '@/components/ui/form/BasicTextarea.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    BasicTextarea,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };
    const state = reactive({
      testError001: false,
    });
    onMounted(() => {
      store.ui.header.setTitle(() => '중고할부·론');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
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
        손님 정보를<br />
        <strong>입력해 주세요</strong>
      </PageMainText>
    </PageTextGroup>
    <section>
      <FormList>
        <FormListItem titleText="성명" target="#testInput001">
          <FormInvalid :error="state.testError001">
            <InputBlock :error="state.testError001">
              <InputBlockCell :flexible="true">
                <BasicInput title="성명" id="testInput001" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <FormListItem titleText="생년월일" target="#testInput002">
          <FormInvalid :error="state.testError001">
            <InputBlock :error="state.testError001">
              <InputBlockCell :flexible="true">
                <BasicInput title="생년월일" id="testInput002" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>숫자만 입력해 주세요. (예:230503)</FormHelpText>
          </FormInvalid>
        </FormListItem>
        <FormListItem titleText="휴대폰번호" target="#testInput003">
          <FormInvalid :error="state.testError001">
            <InputBlock :error="state.testError001">
              <InputBlockCell :flexible="true">
                <BasicInput title="휴대폰번호" id="testInput003" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="상품선택" :forceFocus="true">
          <FormInvalid :error="state.testError001">
            <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="testInputCheck014"
                  id="testInputCheck014_001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>모바일</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="testInputCheck014"
                  id="testInputCheck014_002"
                >
                  <BoxCheckLabel>중고차할부</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </FormInvalid>
        </FormListItem>

        <BasicTextarea
          :error="state.testError001"
          titleText="메모"
          titleOptionalText="(매매상사, 직원명, 연락처를 입력하세요.)"
          :maxlength="150"
          :count="false"
          title="메모"
        >
          <template v-slot:bottom>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>최대 20자 이내로 입력해주세요.</FormHelpText>
          </template>
        </BasicTextarea>
      </FormList>
    </section>
    <section class="row-margin-contents-group">
      <h3 class="text-body-2 row-margin-item-medium">신용조회동의 요청</h3>
      <ButtonList class="row-margin-none">
        <ButtonListItem>
          <BasicButton theme="tertiary">ARS연결</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton theme="secondary">URL전송</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </section>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton
            :line="true"
            theme="quaternary"
            tagName="RouterLink"
            to="/lm-blog/sms-counseling"
          >
            목록
          </BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>
