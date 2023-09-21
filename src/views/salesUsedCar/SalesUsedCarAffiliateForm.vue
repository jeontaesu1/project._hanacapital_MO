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
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

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
    BottomSticky,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      accountError: false,
      phoneError: false,
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
        <strong>
          대출금 지급 계좌 정보를<br />
          선택해 주세요
        </strong>
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
        titleText="휴대폰번호"
        target="#salesUsedCarAffiliateFormPhone"
      >
        <FormInvalid :error="state.phoneError">
          <InputBlock :error="state.phoneError">
            <InputBlockCell :flexible="true">
              <BasicInput
                pattern="\d*"
                title="휴대폰번호"
                id="salesUsedCarAffiliateFormPhone"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <ul class="reset-list row-margin-contents">
      <li class="row-margin-item-medium">
        <CheckBox id="salesUsedCarAffiliateFormAgree001" theme="tertiary">
          <CheckBoxObject />
          <CheckBoxLabelText>할부 제휴 협약 동의</CheckBoxLabelText>
        </CheckBox>
      </li>
      <li class="row-margin-item-medium">
        <CheckBox id="salesUsedCarAffiliateFormAgree002" theme="tertiary">
          <CheckBoxObject />
          <CheckBoxLabelText>청렴·윤리 실천 서약 동의</CheckBoxLabelText>
        </CheckBox>
      </li>
    </ul>

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
