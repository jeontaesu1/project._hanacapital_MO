<script>
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
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
      nameError: false,
      passwordError: false,
    });

    const store = {
      ui: {
        common: useUiCommonStore(),
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
  <PageContents>
    <UiTab>
      <StickyBar>
        <NavTab :useUiTab="true" :auto="true">
          <NavTabButton link="SignInTab001_001">아이디</NavTabButton>
          <NavTabButton link="SignInTab001_002">공동인증서</NavTabButton>
        </NavTab>
      </StickyBar>

      <UiTabPanel name="SignInTab001_001">
        <PageTextGroup>
          <PageMainText>
            회원 서비스 이용을 위해<br />
            <strong>로그인 해주세요</strong>
          </PageMainText>
        </PageTextGroup>

        <FormList>
          <FormListItem titleText="이름" target="#SignInName">
            <FormInvalid :error="state.nameError">
              <InputBlock :error="state.nameError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이름" id="SignInName" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="비밀번호" target="#SignInPassword">
            <FormInvalid :error="state.passwordError">
              <InputBlock :error="state.passwordError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="password"
                    title="비밀번호"
                    id="SignInPassword"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <ButtonList :classNames="{ wrap: $style['margin-top-auto'] }">
          <ButtonListItem>
            <BasicButton>로그인</BasicButton>
          </ButtonListItem>
        </ButtonList>

        <div :class="$style['sidebar']">
          <div :class="$style['sidebar__list']">
            <div :class="$style['sidebar__item']">
              <TextButton
                tagName="RouterLink"
                to=""
                :classNames="{
                  wrap: 'text-body-4 color-gray-tertiary font-weight-regular',
                }"
              >
                아이디찾기
              </TextButton>
            </div>
            <div :class="$style['sidebar__item']">
              <TextButton
                tagName="RouterLink"
                to=""
                :classNames="{
                  wrap: 'text-body-4 color-gray-tertiary font-weight-regular',
                }"
              >
                비밀번호 찾기
              </TextButton>
            </div>
            <div :class="$style['sidebar__item']">
              <TextButton
                tagName="RouterLink"
                to=""
                :classNames="{
                  wrap: 'text-body-4 color-gray-tertiary font-weight-regular',
                }"
              >
                회원가입
              </TextButton>
            </div>
          </div>
        </div>
      </UiTabPanel>

      <UiTabPanel name="SignInTab001_002">
        <PageTextGroup>
          <PageMainText>
            개인회원은 공인인증서<br />
            <strong>등록 후 이용가능합니다</strong>
          </PageMainText>
        </PageTextGroup>

        <IllustObject type="certification" />

        <BasicButton line="true" theme="quaternary"
          >공동인증서 등록</BasicButton
        >
        <BasicButton :class="$style['margin-top-small']">
          공동인증서 로그인
        </BasicButton>

        <div :class="$style['sidebar']">
          <div :class="$style['sidebar__list']">
            <div :class="$style['sidebar__item']">
              <TextButton
                tagName="RouterLink"
                to=""
                :classNames="{
                  wrap: 'text-body-4 color-gray-tertiary font-weight-regular',
                }"
              >
                회원가입
              </TextButton>
            </div>
          </div>
        </div>
      </UiTabPanel>
    </UiTab>

    <div :class="$style['join']">
      <div :class="$style['join__inner']">
        <div :class="$style['join__icon']"><IconLogo /></div>
        <div :class="$style['join__title']">앱에서 가입하셨나요?</div>
        <a href="" :class="$style['join__link']">
          <span :class="$style['join__text']">앱회원 가입</span>
          <span :class="$style['join__arrow']">
            <IconLink />
          </span>
        </a>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/sign/SignIn.scss';
</style>
