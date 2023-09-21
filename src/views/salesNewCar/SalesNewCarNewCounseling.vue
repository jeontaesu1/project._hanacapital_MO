<script>
// NC_M02_p001
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicTextarea from '@/components/ui/form/BasicTextarea.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    FormHelpText,
    BasicTextarea,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const state = reactive({
      nameError: false,
      birthDateError: false,
      phoneError: false,
      memoError: false,
    });

    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '신차모바일');
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
        손님 정보를<br />
        입력해 주세요
      </PageMainText>
    </PageTextGroup>

    <FormList>
      <FormListItem titleText="성명" target="#salesNewCarNewCounselingName">
        <FormInvalid :error="state.nameError">
          <InputBlock :error="state.nameError">
            <InputBlockCell :flexible="true">
              <BasicInput title="성명" id="salesNewCarNewCounselingName" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="생년월일"
        target="#salesNewCarNewCounselingBirthDate"
      >
        <FormInvalid :error="state.birthDateError">
          <InputBlock :error="state.birthDateError">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="number"
                pattern="\d*"
                title="생년월일"
                id="salesNewCarNewCounselingBirthDate"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>숫자만 입력해 주세요. (예:900123)</FormHelpText>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="휴대폰번호"
        target="#salesNewCarNewCounselingPhone"
      >
        <FormInvalid :error="state.phoneError">
          <InputBlock :error="state.phoneError">
            <InputBlockCell :flexible="true">
              <BasicInput
                pattern="\d*"
                title="휴대폰번호"
                id="salesNewCarNewCounselingPhone"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>-없이 숫자만 입력해 주세요.</FormHelpText>
        </FormInvalid>
      </FormListItem>

      <BasicTextarea
        :error="state.memoError"
        titleText="메모"
        titleOptionalText="(매매상사, 직원명, 연락처를 입력하세요.)"
        :maxlength="20"
        :count="true"
        title="메모"
      >
        <template v-slot:bottom>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>최대 20자 이내로 입력해주세요.</FormHelpText>
        </template>
      </BasicTextarea>
    </FormList>

    <div class="row-margin-contents-group row-margin-bottom-none">
      <h3 class="text-body-2 row-margin-item-medium">신용조회동의 요청</h3>

      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton theme="tertiary">ARS연결</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton>URL전송</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton :line="true" theme="quaternary">목록</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>
</template>
