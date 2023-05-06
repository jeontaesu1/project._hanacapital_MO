<script>
// UC_M08_p003
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicSelect,
    BasicInput,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      accountError: false,
      mailError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '중고차 매매상사 할부 제휴 협약');
      store.ui.header.setLeftButtons(() => []);
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
        제휴사 정보를<br />
        <strong>확인해 주세요</strong>
      </PageMainText>
    </PageTextGroup>

    <FormList>
      <FormListItem
        titleText="대출금 지급 계좌 선택"
        target="#salesUsedCarAffiliateFormAccountButton"
        :selectOnly="true"
      >
        <FormInvalid :error="state.accountError">
          <InputBlock :error="state.accountError">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: '하나은행 123-456-678901',
                  },
                  {
                    value: '2',
                    text: '국민은행 123-456-678901',
                  },
                ]"
                buttonTitle="계좌 선택하기"
                layerTitle="계좌를 선택해 주세요"
                id="salesUsedCarAffiliateFormAccount"
                buttonId="salesUsedCarAffiliateFormAccountButton"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="이메일"
        target="#salesUsedCarAffiliateFormAccountEmailMailId"
      >
        <FormInvalid :error="state.mailError">
          <InputBlock :error="state.mailError">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="이메일"
                id="salesUsedCarAffiliateFormAccountEmailMailId"
              />
            </InputBlockCell>
            <InputBlockCell margin="regular">@</InputBlockCell>
            <InputBlockCell margin="regular" :flexible="true">
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
                buttonTitle="이메일 도메인 선택하기"
                layerTitle="이메일 도메인을 선택해 주세요"
              />
            </InputBlockCell>
          </InputBlock>
          <!-- Case : 직접입력 선택 시 노출 -->
          <InputBlock
            :error="state.mailError"
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <InputBlockCell :flexible="true">
              <BasicInput
                title="이메일 도메인 직접입력"
                id="salesUsedCarAffiliateFormAccountEmailDomainSelf"
              />
            </InputBlockCell>
          </InputBlock>
          <!-- // Case : 직접입력 선택 시 노출 -->
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <div class="row-margin-contents-group">
      <CheckBox id="salesUsedCarAffiliateFormAgree" theme="tertiary">
        <CheckBoxObject />
        <CheckBoxLabelText>할부 제휴 협약 동의</CheckBoxLabelText>
      </CheckBox>
    </div>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton theme="secondary">다음</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>
