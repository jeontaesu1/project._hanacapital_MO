<script>
// Customer_M02_p002
import { reactive, onMounted, onUnmounted } from 'vue';

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
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';

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
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      categoryError: false,
      nameError: false,
      birthDateError: false,
      phoneError: false,
      mailError: false,
      discriptionError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '고객상담');
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
      <div :class="$style['customer-counseling']">
        <PageMainText>
          일반문의만 가능하며<br />대출 관련 상담 신청 시<br /><strong
            >전화상담 버튼를 이용하세요</strong
          >
        </PageMainText>
        <div :class="$style['customer-counseling__button']">
          <BasicButton
            size="small"
            :line="true"
            tagName="RouterLink"
            to="/customer/reservation-counseling"
            >전화상담</BasicButton
          >
        </div>
      </div>
    </PageTextGroup>

    <FormList>
      <FormListItem
        titleText="문의분야"
        titleOptionalText="(일반문의)"
        target="#customerCounselingRegistCategoryButton"
        :selectOnly="true"
      >
        <FormInvalid :error="state.categoryError">
          <InputBlock :error="state.categoryError">
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
                id="customerCounselingRegistCategory"
                buttonId="customerCounselingRegistCategoryButton"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="고객명" target="#customerCounselingRegistName">
        <FormInvalid :error="state.nameError">
          <InputBlock :error="state.nameError">
            <InputBlockCell :flexible="true">
              <BasicInput title="고객명" id="customerCounselingRegistName" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="생년월일"
        target="#customerCounselingRegistBirthDate"
      >
        <FormInvalid :error="state.birthDateError">
          <InputBlock :error="state.birthDateError">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="number"
                pattern="\d*"
                title="생년월일"
                id="customerCounselingRegistBirthDate"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>숫자만 입력해 주세요. (예:900123)</FormHelpText>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="연락처" target="#customerCounselingRegistPhone">
        <FormInvalid :error="state.phoneError">
          <InputBlock :error="state.phoneError">
            <InputBlockCell :flexible="true">
              <BasicInput
                pattern="\d*"
                title="연락처"
                id="customerCounselingRegistPhone"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>-없이 입력해주세요.</FormHelpText>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="이메일" target="#customerCounselingRegistMailId">
        <FormInvalid :error="state.mailError">
          <InputBlock :error="state.mailError">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="이메일 아이디"
                id="customerCounselingRegistMailId"
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
                id="customerCounselingRegistMailDomainSelf"
              />
            </InputBlockCell>
          </InputBlock>
          <!-- // Case : 직접입력 선택 시 노출 -->
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <BasicTextarea
        :error="state.discriptionError"
        titleText="상담신청내용"
        title="상담신청내용"
      />
    </FormList>

    <div :class="[$style['agree-list'], 'row-margin-container']">
      <ul :class="$style['agree-list__list']">
        <li :class="$style['agree-list__item']">
          <div :class="$style['agree-list__head']">
            <CheckBox
              id="customerCounselingRegistAgree"
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
