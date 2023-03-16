<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useUiCommonStore } from '@/stores/ui/common';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import PopupText from '@/components/ui/layer/PopupText.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import AlertPopup from '@/components/ui/layer/AlertPopup.vue';
import AlertSystem from '@/components/ui/layer/AlertSystem.vue';

export default {
  components: {
    AlertSystem,
    RouterLink,
    PageContents,
    BasicButton,
    UiLayer,
    PopupTitle,
    PopupSubTitle,
    PopupText,
    PopupButton,
    FullPopup,
    FullPopupHead,
    ToastPopup,
    ToastPopupHead,
    AlertPopup,
    ButtonList,
    ButtonListItem,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
      },
    };

    const alert = ref(null);
    const layerTest001 = ref(null);
    const layerTest002 = ref(null);
    const layerTest003 = ref(null);
    const layerTest004 = ref(null);

    const alertOpen = (options) => {
      alert.value.open(options);
    };
    const layerOpenTest001 = (e = {}) => {
      layerTest001.value.open(e.target);
    };
    const layerOpenTest002 = (e = {}) => {
      layerTest002.value.open(e.target);
    };
    const layerOpenTest003 = (e = {}) => {
      layerTest003.value.open(e.target);
    };
    const layerOpenTest004 = (e = {}) => {
      layerTest004.value.open(e.target);
    };
    const alertOpenTest001 = () => {
      alertOpen({
        title: '타이틀',
        message:
          '여기에 내용이 표시될 예정입니다.\n줄바꿈은 \\n 이용.\n세 줄일 경우는 이렿게 표시됩니다.',
        buttons: [
          {
            text: '취소',
            theme: 'quaternary',
            line: true,
            callback: (closeFn) => {
              console.log('취소');
              closeFn();
            },
            closeAfterCallback: () => {
              console.log('[취소] 닫는 애니메이션 끝난 후 호출 될 함수');
            },
          },
          {
            callback: (closeFn) => {
              console.log('확인');
              closeFn();
            },
            closeAfterCallback: () => {
              console.log('[확인] 닫는 애니메이션 끝난 후 호출 될 함수');
            },
          },
        ],
      });
    };

    onMounted(() => {
      store.ui.common.setRootClassName('page-home');
    });

    onUnmounted(() => {
      store.ui.common.setRootClassName();
    });

    return {
      alert,
      layerTest001,
      layerTest002,
      layerTest003,
      layerTest004,
      alertOpen,
      layerOpenTest001,
      layerOpenTest002,
      layerOpenTest003,
      layerOpenTest004,
      alertOpenTest001,
    };
  },
};
</script>

<template>
  <PageContents>
    <AlertSystem ref="alert" />

    <template v-slot:head>contents head</template>

    <h1>Home Page</h1>

    <RouterLink to="a">A 페이지</RouterLink>
    <RouterLink to="b">B 페이지</RouterLink>
    <RouterLink to="c">C 페이지</RouterLink>
    <RouterLink to="test">Test 페이지</RouterLink>

    <UiLayer ref="layerTest001" type="full" v-slot="layerSlotProps">
      <FullPopup>
        <template v-slot:head>
          <FullPopupHead>
            <template v-slot:left>
              <PopupButton type="back" />
              <PopupButton type="back">커스텀 텍스트</PopupButton>
            </template>
            <PopupTitle>타이틀</PopupTitle>
            <template v-slot:right>
              <PopupButton @click="layerSlotProps.close()" />
            </template>
          </FullPopupHead>
        </template>

        <PopupText>// contents</PopupText>

        <BasicButton @click="layerOpenTest002">
          테스트 002 레이어 열기
        </BasicButton>

        <template v-slot:foot>
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary"
                >Button 1</BasicButton
              >
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton>Button 2</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </template>
      </FullPopup>
    </UiLayer>

    <UiLayer ref="layerTest002" type="toast" v-slot="layerSlotProps">
      <ToastPopup>
        <template v-slot:head>
          <ToastPopupHead>
            <PopupTitle>타이틀</PopupTitle>
            <PopupSubTitle>서브 타이틀 및 텍스트</PopupSubTitle>
            <template v-slot:right>
              <PopupButton @click="layerSlotProps.close()" />
            </template>
          </ToastPopupHead>
        </template>

        <PopupText>// contents</PopupText>
        <PopupText>// contents</PopupText>
        <PopupText>// contents</PopupText>
        <PopupText>// contents</PopupText>
        <PopupText>// contents</PopupText>
        <PopupText>// contents</PopupText>

        <BasicButton @click="layerOpenTest003">
          테스트 003 레이어 열기
        </BasicButton>

        <template v-slot:foot>
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary"
                >Button 1</BasicButton
              >
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton>Button 2</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </template>
      </ToastPopup>
    </UiLayer>

    <UiLayer ref="layerTest003" type="toast-fix" v-slot="layerSlotProps">
      <ToastPopup :fix="true">
        <template v-slot:head>
          <ToastPopupHead>
            <PopupTitle>타이틀</PopupTitle>
            <PopupSubTitle>서브 타이틀 및 텍스트</PopupSubTitle>
          </ToastPopupHead>
        </template>

        <PopupText>// contents</PopupText>
        <PopupText>// contents</PopupText>
        <PopupText>// contents</PopupText>
        <PopupText>// contents</PopupText>
        <PopupText>// contents</PopupText>
        <PopupText>// contents</PopupText>

        <BasicButton @click="layerOpenTest004">
          테스트 004 레이어 열기
        </BasicButton>

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
                @click="layerSlotProps.close()"
                >Button 1</BasicButton
              >
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton @click="layerSlotProps.close()"
                >Button 2</BasicButton
              >
            </ButtonListItem>
          </ButtonList>
        </template>
      </ToastPopup>
    </UiLayer>

    <UiLayer ref="layerTest004" v-slot="layerSlotProps">
      <AlertPopup>
        <template v-slot:head>
          <PopupTitle>타이틀</PopupTitle>
        </template>

        <PopupText>// contents</PopupText>
        <PopupText>// contents</PopupText>

        <BasicButton @click="alertOpenTest001">얼럿 열기</BasicButton>

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
                @click="layerSlotProps.close()"
                >Button 1</BasicButton
              >
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton @click="layerSlotProps.close()"
                >Button 2</BasicButton
              >
            </ButtonListItem>
          </ButtonList>
        </template>
      </AlertPopup>
    </UiLayer>

    <BasicButton @click="layerOpenTest001">
      테스트 001 레이어 열기
    </BasicButton>
    <BasicButton @click="layerOpenTest002">
      테스트 002 레이어 열기
    </BasicButton>
    <BasicButton @click="layerOpenTest003">
      테스트 003 레이어 열기
    </BasicButton>
    <BasicButton @click="layerOpenTest004">
      테스트 004 레이어 열기
    </BasicButton>

    <BasicButton @click="alertOpenTest001">얼럿 열기</BasicButton>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :line="true" theme="quaternary">Button 1</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton>Button 2</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/HomePage.scss';
</style>
