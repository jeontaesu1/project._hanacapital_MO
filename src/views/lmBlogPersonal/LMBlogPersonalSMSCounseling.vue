<script>
// LM_M06_p005
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import BasicTextarea from '@/components/ui/form/BasicTextarea.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicInput,
    FormInvalid,
    FormInvalidMessage,
    FormList,
    FormListItem,
    BasicTextarea,
    InputBlock,
    InputBlockCell,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    BottomSticky,
  },
  setup() {
    const state = reactive({
      commentError: false,
      nameError: false,
      phoneError: false,
    });

    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => 'SMS 상담');
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
        고객님의 상담에<br />
        최대한 빠르게 답변해 드리겠습니다
      </PageMainText>
    </PageTextGroup>

    <FormList>
      <BasicTextarea
        :error="state.commentError"
        titleText="상담내용"
        title="상담내용"
      >
        <template v-slot:bottom>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </template>
      </BasicTextarea>

      <FormListItem titleText="이름" target="#lmBlogPersonalSMSCounselingName">
        <FormInvalid :error="state.nameError">
          <InputBlock :error="state.nameError">
            <InputBlockCell :flexible="true">
              <BasicInput title="이름" id="lmBlogPersonalSMSCounselingName" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="연락처"
        target="#lmBlogPersonalSMSCounselingPhone"
      >
        <FormInvalid :error="state.phoneError">
          <InputBlock :error="state.phoneError">
            <InputBlockCell :flexible="true">
              <BasicInput
                pattern="\d*"
                title="연락처"
                id="lmBlogPersonalSMSCounselingPhone"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <div :class="[$style['agree-list'], 'row-margin-contents-group']">
      <UiAccordion :classNames="{ wrap: $style['agree-list__container'] }">
        <UiAccordionItem
          :classNames="{ item: $style['agree-list__all'] }"
          :initialOpen="true"
        >
          <div :class="$style['agree-list__all-head']">
            <CheckBox
              id="lmBlogPersonalSMSCounselingAgreeAll"
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
                      id="lmBlogPersonalSMSCounselingAgree_001"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >개인정보 수집 및 이용 동의</CheckBoxLabelText
                      >
                    </CheckBox>
                    <div :class="$style['agree-list__right']">
                      <button type="button" :class="$style['agree-list__link']">
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
                      id="lmBlogPersonalSMSCounselingAgree_002"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>개인정보 제공 동의</CheckBoxLabelText>
                    </CheckBox>
                    <div :class="$style['agree-list__right']">
                      <button type="button" :class="$style['agree-list__link']">
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

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>상담신청</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lmBlogPersonal/LMBlogPersonalSMSCounseling.scss';
</style>
