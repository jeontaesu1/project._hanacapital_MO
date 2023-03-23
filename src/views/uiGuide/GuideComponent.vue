<script>
import { ref, reactive } from 'vue';

import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IconAdd from '@/assets/images/icon/add.svg?component';
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
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';

export default {
  components: {
    BasicButton,
    IconAdd,
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
    AlertSystem,
    ButtonList,
    ButtonListItem,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
  },
  setup() {
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
    const testAccordion = ref(null);

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

    const testErrorUpdate001 = (val) => {
      state.testError001 = val;

      testSelect001.value.setValue('4');
    };

    const testInputEvent = (e = {}) => {
      console.log(e.type, e.target);
    };

    const testAccordionAllOpen = () => {
      testAccordion.value.allOpen();
    };
    const testAccordionAllClose = () => {
      testAccordion.value.allClose();
    };

    return {
      state,
      alert,
      layerTest001,
      layerTest002,
      layerTest003,
      layerTest004,
      testInput,
      testSelect001,
      testAccordion,
      alertOpen,
      layerOpenTest001,
      layerOpenTest002,
      layerOpenTest003,
      layerOpenTest004,
      alertOpenTest001,
      testErrorUpdate001,
      testInputEvent,
      testAccordionAllOpen,
      testAccordionAllClose,
    };
  },
};
</script>

<template>
  <div class="test-component-wrap">
    <h1 class="test-title">Components</h1>

    <section class="test-section">
      <h2 class="test-section-title">BasicButton</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">button tag</h3>
        <BasicButton>Button</BasicButton>
        <BasicButton disabled>Button</BasicButton>
        <BasicButton theme="secondary">Button</BasicButton>
        <BasicButton theme="secondary" disabled>Button</BasicButton>
        <BasicButton theme="tertiary">Button</BasicButton>
        <BasicButton theme="tertiary" disabled>Button</BasicButton>
        <BasicButton theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton theme="quaternary" disabled>
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>

        <BasicButton line="true">Button</BasicButton>
        <BasicButton line="true" disabled>Button</BasicButton>
        <BasicButton line="true" theme="secondary">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton line="true" theme="secondary" disabled>
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton line="true" theme="tertiary">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton line="true" theme="tertiary" disabled>
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton line="true" theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton line="true" theme="quaternary" disabled>
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">a tag</h3>
        <BasicButton tagName="a">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="a" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton tagName="a" line="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="a" line="true" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Router Link</h3>
        <BasicButton tagName="RouterLink" to="/">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="RouterLink" to="/" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton tagName="RouterLink" to="/" line="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton
          tagName="RouterLink"
          to="/"
          line="true"
          disabledStyle="true"
        >
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">small</h3>
        <BasicButton size="small">Button</BasicButton>
        <BasicButton size="small" disabled>Button</BasicButton>
        <BasicButton tagName="a" size="small">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="a" size="small" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton size="small" theme="secondary">Button</BasicButton>
        <BasicButton size="small" theme="secondary" disabled
          >Button</BasicButton
        >
        <BasicButton size="small" theme="tertiary">Button</BasicButton>
        <BasicButton size="small" theme="tertiary" disabled>Button</BasicButton>
        <BasicButton size="small" theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton size="small" theme="quaternary" disabled>
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">mini</h3>
        <BasicButton size="mini">Button</BasicButton>
        <BasicButton size="mini" disabled>Button</BasicButton>
        <BasicButton tagName="a" size="mini">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="a" size="mini" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton size="mini" theme="secondary">Button</BasicButton>
        <BasicButton size="mini" theme="secondary" disabled>Button</BasicButton>
        <BasicButton size="mini" theme="tertiary">Button</BasicButton>
        <BasicButton size="mini" theme="tertiary" disabled>Button</BasicButton>
        <BasicButton size="mini" theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton size="mini" theme="quaternary" disabled>
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">inline style</h3>
        <BasicButton inline="true">Button</BasicButton>
        <BasicButton inline="true" disabled>Button</BasicButton>
        <BasicButton tagName="a" inline="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton tagName="a" inline="true" disabledStyle="true">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" theme="secondary">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" theme="secondary" disabled>
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" theme="tertiary">
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" theme="tertiary" disabled>
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" theme="quaternary">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
          Button
        </BasicButton>
        <BasicButton inline="true" theme="quaternary" disabled>
          Button
          <template v-slot:rightIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">only icon</h3>
        <BasicButton inline="true" line="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" line="true" size="small">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" line="true" size="mini">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" size="small">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
        <BasicButton inline="true" size="mini">
          <template v-slot:leftIcon>
            <IconAdd />
          </template>
        </BasicButton>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Layer</h2>
      <div class="test-section-sub">
        <AlertSystem ref="alert" />

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
              하단 레이어 팝업
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
              하단 레이어 팝업 (고정 높이값)
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
              레이어 팝업 열기
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

        <BasicButton @click="layerOpenTest001"> 풀 팝업 </BasicButton>
        <BasicButton @click="layerOpenTest002"> 하단 레이어 팝업 </BasicButton>
        <BasicButton @click="layerOpenTest003"
          >하단 레이어 팝업 (고정 높이값)</BasicButton
        >
        <BasicButton @click="layerOpenTest004"> 레이어 팝업 </BasicButton>

        <BasicButton @click="alertOpenTest001">얼럿</BasicButton>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">CheckBox</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <CheckBox id="testCheckBox001" @change="testInputEvent">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox002" :checked="true" @change="testInputEvent">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox003" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox004" :disabled="true" :checked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Center</h3>
        <CheckBox id="testCheckBox005" align="center">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox006" align="center" :checked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox007" align="center" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox008"
          align="center"
          :disabled="true"
          :checked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Full</h3>
        <CheckBox id="testCheckBox009" :full="true">
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
          <CheckBoxObject />
        </CheckBox>
        <CheckBox id="testCheckBox010" :full="true" :checked="true">
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
          <CheckBoxObject />
        </CheckBox>
        <CheckBox id="testCheckBox011" :full="true" :disabled="true">
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
          <CheckBoxObject />
        </CheckBox>
        <CheckBox
          id="testCheckBox012"
          :full="true"
          :disabled="true"
          :checked="true"
        >
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
          <CheckBoxObject />
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Only Object</h3>
        <CheckBox id="testCheckBox013" :onlyObject="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox014" :onlyObject="true" :checked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox015" :onlyObject="true" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox016"
          :onlyObject="true"
          :disabled="true"
          :checked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">secondary</h3>
        <CheckBox id="testCheckBox017" theme="secondary">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox018" theme="secondary" :checked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox019" theme="secondary" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox020"
          theme="secondary"
          :disabled="true"
          :checked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">tertiary</h3>
        <CheckBox id="testCheckBox021" theme="tertiary">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox022" theme="tertiary" :checked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox023" theme="tertiary" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox024"
          theme="tertiary"
          :disabled="true"
          :checked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">quaternary</h3>
        <CheckBox id="testCheckBox025" theme="quaternary">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox026" theme="quaternary" :checked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox027" theme="quaternary" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox028"
          theme="quaternary"
          :disabled="true"
          :checked="true"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Accordion Base</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <button type="button" @click="testAccordionAllOpen">모두 열기</button>
        <button type="button" @click="testAccordionAllClose">모두 닫기</button>

        <UiAccordion ref="testAccordion">
          <UiAccordionItem v-slot="accordionItemSlotProps">
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Once</h3>

        <UiAccordion :once="true">
          <UiAccordionItem v-slot="accordionItemSlotProps">
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>

          <UiAccordionItem v-slot="accordionItemSlotProps">
            <button type="button" @click="accordionItemSlotProps.toggle()">
              {{ accordionItemSlotProps.opened ? '닫기' : '열기' }}
            </button>

            <UiAccordionLayer>
              지나가는 동경과 어머니, 그리워 아름다운 시와 것은 옥 거외다.
              라이너 이름을 이네들은 어머니, 말 써 멀리 못 불러 계십니다.<br /><br />

              봄이 어머님, 가득 버리었습니다. 소학교 청춘이 이름과 나는 이웃
              책상을 봅니다. 패, 경, 내 하나에 하나에 봅니다. 가을로 사랑과
              이름과, 패, 무성할 잠, 내 차 추억과 듯합니다.<br /><br />

              마리아 하나에 이런 가득 까닭입니다. 걱정도 별 하나에 이런 아름다운
              거외다.
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Component Title</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Sub Title</h3>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideComponent.scss';
</style>
