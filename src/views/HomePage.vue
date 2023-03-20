<script>
import { ref, reactive, onMounted, onUnmounted } from 'vue';
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
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

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
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BasicSelect,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
      },
    };

    const state = reactive({
      testError001: false,
    });

    const alert = ref(null);
    const layerTest001 = ref(null);
    const layerTest002 = ref(null);
    const layerTest003 = ref(null);
    const layerTest004 = ref(null);
    const testInput = ref(null);
    const testSelect001 = ref(null);

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

    const testInputEvent = (e = {}) => {
      console.log(e.type, e.target, testInput.value.getInputElement());
    };

    const testErrorUpdate001 = (val) => {
      state.testError001 = val;

      testSelect001.value.setValue('4');
    };

    onMounted(() => {
      store.ui.common.setRootClassName('page-home');
    });

    onUnmounted(() => {
      store.ui.common.setRootClassName();
    });

    return {
      state,
      alert,
      layerTest001,
      layerTest002,
      layerTest003,
      layerTest004,
      testInput,
      testSelect001,
      alertOpen,
      layerOpenTest001,
      layerOpenTest002,
      layerOpenTest003,
      layerOpenTest004,
      alertOpenTest001,
      testInputEvent,
      testErrorUpdate001,
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

    <FormList>
      <FormListItem
        titleText="Label"
        titleOptionalText="Optional"
        :require="true"
        target="#testInput001"
      >
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <template v-slot:innerLeft>il</template>
            <InputBlockCell :flexible="true">
              <BasicInput
                ref="testInput"
                id="testInput001"
                @keyup="testInputEvent"
                @focus="testInputEvent"
                @blur="testInputEvent"
              />
            </InputBlockCell>
            <InputBlockCell type="sub">-</InputBlockCell>
            <InputBlockCell :flexible="true">
              <BasicInput
                type="number"
                :useDelete="false"
                align="right"
                @keyup="testInputEvent"
                @focus="testInputEvent"
                @blur="testInputEvent"
              />
            </InputBlockCell>
            <template v-slot:innerRight>ir</template>
            <template v-slot:right>r</template>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>Helper Text</FormHelpText>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="Label"
        titleOptionalText="Optional"
        :require="true"
        target="#testInput002"
        :disabled="true"
      >
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001" :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                ref="testInput"
                id="testInput002"
                @keyup="testInputEvent"
                @focus="testInputEvent"
                @blur="testInputEvent"
                value="value"
                :disabled="true"
              />
            </InputBlockCell>
            <InputBlockCell type="sub">-</InputBlockCell>
            <InputBlockCell :flexible="true">
              <BasicInput
                type="number"
                :useDelete="false"
                align="right"
                @keyup="testInputEvent"
                @focus="testInputEvent"
                @blur="testInputEvent"
                value="1234"
                :readonly="true"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>Helper Text</FormHelpText>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="Label"
        titleOptionalText="Optional"
        :require="true"
        target="#testInputButton003"
        :force-focus="true"
      >
        <InputBlock>
          <InputBlockCell :flexible="true">
            <BasicInput
              ref="testInput"
              @keyup="testInputEvent"
              @focus="testInputEvent"
              @blur="testInputEvent"
            />
          </InputBlockCell>
          <InputBlockCell type="sub">-</InputBlockCell>
          <InputBlockCell :flexible="true">
            <BasicSelect
              ref="testSelect001"
              :option="[
                {
                  value: '1',
                  text: '옵션 1',
                },
                {
                  value: '2',
                  text: '옵션 2',
                },
                {
                  value: '3',
                  text: '옵션 3',
                },
                {
                  value: '4',
                  text: '옵션 4\n줄바꿈은 \\n 이용',
                },
                {
                  value: '5',
                  text: '옵션 5',
                },
                {
                  value: '6',
                  text: '옵션 6',
                },
                {
                  value: '7',
                  text: '옵션 7',
                },
                {
                  value: '8',
                  text: '옵션 8',
                },
              ]"
              defaultValue="6"
              buttonTitle="ㅇㅇ 선택하기"
              layerTitle="ㅇㅇ를 선택해 주세요"
              id="testInput003"
              name="testInput003"
              buttonId="testInputButton003"
              :onChange="testInputEvent"
            />
          </InputBlockCell>
        </InputBlock>
      </FormListItem>
    </FormList>

    <InputBlock>
      <template v-slot:left>l</template>
      <template v-slot:innerLeft>il</template>
      <InputBlockCell :flexible="true">
        <BasicInput
          ref="testInput"
          @keyup="testInputEvent"
          @focus="testInputEvent"
          @blur="testInputEvent"
        />
      </InputBlockCell>
      <InputBlockCell type="sub">-</InputBlockCell>
      <InputBlockCell :flexible="true">
        <BasicInput
          type="number"
          :useDelete="false"
          align="right"
          @keyup="testInputEvent"
          @focus="testInputEvent"
          @blur="testInputEvent"
        />
      </InputBlockCell>
      <template v-slot:innerRight>ir</template>
      <template v-slot:right>r</template>
    </InputBlock>
    <FormHelpText>Helper Text</FormHelpText>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
        align="full"
      >
        <ButtonListItem>
          <BasicButton
            :line="true"
            theme="quaternary"
            @click="testErrorUpdate001(true)"
            >Button 1</BasicButton
          >
        </ButtonListItem>
        <ButtonListItem flex="none">
          <BasicButton @click="testErrorUpdate001(false)">Button 2</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/HomePage.scss';
</style>
