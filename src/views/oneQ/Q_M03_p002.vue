<script>
// Q_M03_p002
import { reactive } from 'vue';
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicBox,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BottomSticky,
    BasicSelect,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      nameError: false,
      phoneError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '예약상담 신청');
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
        본 상품은 한정 상품으로<br />
        예약 접수만 받고 있습니다
      </PageMainText>
      <PageSubText>
        연락처를 남겨주시면 상담원이 연락 드리고<br />
        친절하게 상담해 드리겠습니다.
      </PageSubText>
    </PageTextGroup>

    <FormList>
      <FormListItem titleText="이름" target="#q_M03_p002_name">
        <FormInvalid :error="state.nameError">
          <InputBlock :error="state.nameError">
            <InputBlockCell :flexible="true">
              <BasicInput title="이름" id="q_M03_p002_name" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="휴대폰번호" target="#q_M03_p002_phone">
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
                buttonId="q_M03_p002_phone"
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
    </FormList>

    <section class="row-margin-container-medium">
      <h3 class="text-title-2 row-margin-contents">서비스 이용약관</h3>

      <BasicBox theme="septenary">
        <div :class="$style['agree-list']">
          <div :class="$style['agree-list__head']">
            <CheckBox
              id="q_M03_p002_agree"
              :classNames="{
                wrap: $style['agree-list__checkbox'],
              }"
              theme="tertiary"
            >
              <CheckBoxObject />
              <CheckBoxLabelText>개인정보 수집·이용 동의</CheckBoxLabelText>
            </CheckBox>
            <div :class="$style['agree-list__right']">
              <button type="button" :class="$style['agree-list__link']">
                <span :class="$style['agree-list__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </BasicBox>

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            하나캐피탈㈜와 위탁계약을 체결하고 여신금융협회에 정식 등록된 리스
            및 할부 모집인들을 통하여 고객상담 접수 및 회신이 진행됩니다.
          </div>
        </li>
      </ul>
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

<style lang="scss" module>
@import '@/assets/scss/views/oneQ/Q_M03_p002.scss';
</style>
