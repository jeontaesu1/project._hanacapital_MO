<script>
// Member_M01_p001
// Member_M02_p001
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
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconLogo from '@/assets/images/icon/hanacapital-small.svg?component';
import IconLink from '@/assets/images/icon/link.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    IllustObject,
    StickyBar,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    TextButton,
    IconLogo,
    IconLink,
  },
  setup() {
    const state = reactive({
      idError: false,
      passwordError: false,
    });

    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '로그인');
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
  <UiTab>
    <PageContents>
      <template v-slot:head>
        <StickyBar>
          <NavTab :head="true" :useUiTab="true">
            <NavTabButton link="signInTab001">아이디</NavTabButton>
            <NavTabButton link="signInTab002">공동인증서</NavTabButton>
          </NavTab>
        </StickyBar>
      </template>

      <UiTabPanel name="signInTab001">
        <PageTextGroup>
          <PageMainText>
            <strong>
              회원 서비스 이용을 위해<br />
              로그인 해주세요
            </strong>
          </PageMainText>
        </PageTextGroup>

        <FormList :classNames="{ wrap: $style['form'] }">
          <FormListItem titleText="아이디" target="#signInId">
            <FormInvalid :error="state.idError">
              <InputBlock :error="state.idError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="아이디" id="signInId" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="비밀번호" target="#signInPassword">
            <FormInvalid :error="state.passwordError">
              <InputBlock :error="state.passwordError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="password"
                    title="비밀번호"
                    id="signInPassword"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <ButtonList :classNames="{ wrap: $style['buttons'] }">
          <ButtonListItem>
            <BasicButton>로그인</BasicButton>
          </ButtonListItem>
        </ButtonList>

        <div :class="$style['sidebar']">
          <ul :class="$style['sidebar__list']">
            <li :class="$style['sidebar__item']">
              <button type="button" :class="$style['sidebar__link']">
                아이디찾기
              </button>
            </li>
            <li :class="$style['sidebar__item']">
              <button type="button" :class="$style['sidebar__link']">
                비밀번호 찾기
              </button>
            </li>
            <li :class="$style['sidebar__item']">
              <button type="button" :class="$style['sidebar__link']">
                회원가입
              </button>
            </li>
          </ul>
        </div>
      </UiTabPanel>

      <UiTabPanel name="signInTab002">
        <PageTextGroup>
          <PageMainText>
            <strong>
              개인회원은 공인인증서<br />
              등록 후 이용가능합니다
            </strong>
          </PageMainText>
        </PageTextGroup>

        <IllustObject type="certification" />

        <ButtonList
          align="full"
          :classNames="{ wrap: [$style['buttons'], 'row-margin-top-none'] }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary"
              >공동인증서 등록</BasicButton
            >
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>공동인증서 로그인</BasicButton>
          </ButtonListItem>
        </ButtonList>

        <div :class="$style['sidebar']">
          <ul :class="$style['sidebar__list']">
            <li :class="$style['sidebar__item']">
              <button type="button" :class="$style['sidebar__link']">
                회원가입
              </button>
            </li>
          </ul>
        </div>
      </UiTabPanel>

      <div :class="$style['join']">
        <div :class="$style['join__inner']">
          <div :class="$style['join__icon']"><IconLogo /></div>
          <div :class="$style['join__title']">앱에서 가입하셨나요?</div>
          <TextButton
            :block="true"
            :classNames="{
              wrap: [$style['join__link'], 'text-body-4 color-gray'],
            }"
          >
            앱회원 가입
            <template v-slot:rightIcon>
              <IconLink />
            </template>
          </TextButton>
        </div>
      </div>
    </PageContents>
  </UiTab>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/sign/SignIn.scss';
</style>
