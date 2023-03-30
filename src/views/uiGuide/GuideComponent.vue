<script>
import { ref, reactive, onMounted } from 'vue';

import { useUiLoadingStore } from '@/stores/ui/loading';

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
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import PartInput from '@/components/ui/form/PartInput.vue';
import ExtendSelect from '@/components/ui/form/ExtendSelect.vue';
import ExtendSelectOption from '@/components/ui/form/ExtendSelectOption.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabList from '@/components/ui/tab/UiTabList.vue';
import UiTabButton from '@/components/ui/tab/UiTabButton.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';

import BrandLogo001 from '@/assets/images/bank-logo/hana.svg?component';
import BrandLogo002 from '@/assets/images/bank-logo/lotte.svg?component';
import BrandLogo003 from '@/assets/images/bank-logo/samsung.svg?component';
import BrandLogo004 from '@/assets/images/bank-logo/shinhan.svg?component';
import BrandLogo005 from '@/assets/images/bank-logo/kb.svg?component';
import BrandLogo006 from '@/assets/images/bank-logo/hyundai.svg?component';
import BrandLogo007 from '@/assets/images/bank-logo/bc.svg?component';

export default {
  components: {
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
    AlertSystem,
    ButtonList,
    ButtonListItem,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BasicSelect,
    SecurityInput,
    PartInput,
    ExtendSelect,
    ExtendSelectOption,
    BasicHr,
    BasicBox,
    IllustObject,
    UiTab,
    UiTabList,
    UiTabButton,
    UiTabPanel,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NoticeText,
    IllustInfo,
    IllustInfoTitle,
    IllustInfoText,
    IconAdd,
    BrandLogo001,
    BrandLogo002,
    BrandLogo003,
    BrandLogo004,
    BrandLogo005,
    BrandLogo006,
    BrandLogo007,
  },
  setup() {
    const store = {
      ui: {
        loading: useUiLoadingStore(),
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

    onMounted(() => {
      store.ui.loading.show();

      setTimeout(() => {
        store.ui.loading.hide();
      }, 1000);
    });

    return {
      state,
      alert,
      layerTest001,
      layerTest002,
      layerTest003,
      layerTest004,
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

        <BasicButton @click="layerOpenTest001">풀 팝업</BasicButton>
        <BasicButton @click="layerOpenTest002">하단 레이어 팝업</BasicButton>
        <BasicButton @click="layerOpenTest003">
          하단 레이어 팝업 (고정 높이값)
        </BasicButton>
        <BasicButton @click="layerOpenTest004">얼럿형 팝업</BasicButton>

        <BasicButton @click="alertOpenTest001">얼럿</BasicButton>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Button List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <ButtonList>
          <ButtonListItem>
            <BasicButton line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>

        <ButtonList>
          <ButtonListItem flex="none">
            <BasicButton line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Left</h3>
        <ButtonList align="left">
          <ButtonListItem>
            <BasicButton line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Center</h3>
        <ButtonList align="center">
          <ButtonListItem>
            <BasicButton line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Right</h3>
        <ButtonList align="right">
          <ButtonListItem>
            <BasicButton line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Align Full</h3>
        <ButtonList align="full">
          <ButtonListItem>
            <BasicButton line="true" theme="quaternary">Button 1</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>Button 2</BasicButton>
          </ButtonListItem>
        </ButtonList>
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

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">quinary</h3>
        <CheckBox id="testCheckBox029" theme="quinary">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox030" theme="quinary" :checked="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox id="testCheckBox031" theme="quinary" :disabled="true">
          <CheckBoxObject />
          <CheckBoxLabelText>Label<br />2 line label</CheckBoxLabelText>
        </CheckBox>
        <CheckBox
          id="testCheckBox032"
          theme="quinary"
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
            <UiAccordionOpener />
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

          <UiAccordionItem v-slot="accordionItemSlotProps" :initialOpen="true">
            <UiAccordionOpener />
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
            <UiAccordionOpener />
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
            <UiAccordionOpener />
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
            <UiAccordionOpener />
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
            <UiAccordionOpener />
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
            <UiAccordionOpener />
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
            <UiAccordionOpener />
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
      <h2 class="test-section-title">Form</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <button type="button" @click="testErrorUpdate001(true)">에러 On</button>
        <button type="button" @click="testErrorUpdate001(false)">
          에러 Off
        </button>

        <FormList>
          <FormListItem
            titleText="Label"
            titleOptionalText="Optional"
            :require="true"
            target="#testInput001"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <template v-slot:innerLeft>text</template>
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
                <template v-slot:innerRight>text</template>
                <template v-slot:right>
                  <BasicButton size="mini" theme="quaternary">
                    button
                  </BasicButton>
                </template>
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
            titleText="인증번호"
            titleOptionalText="(6자리)"
            target="#testInput003"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="인증번호 (6자리)"
                    id="testInput003"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div :class="$style['input-timer']">00:00</div>
                </template>
                <template v-slot:right>
                  <BasicButton size="mini" theme="quaternary">
                    재요청
                  </BasicButton>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="휴대폰번호" target="#testInput004">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell>
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: 'SKT',
                      },
                      {
                        value: '2',
                        text: 'KT',
                      },
                      {
                        value: '3',
                        text: 'LG U+',
                      },
                      {
                        value: '4',
                        text: '알뜰폰 SKT',
                      },
                      {
                        value: '5',
                        text: '알뜰폰 KT',
                      },
                      {
                        value: '6',
                        text: '알뜰폰 LG +',
                      },
                    ]"
                    buttonTitle="통신사 선택하기"
                    layerTitle="통신사를 선택해 주세요"
                    buttonId="testInput004"
                    :classNames="{
                      wrap: 'input-width-telecom',
                    }"
                  />
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicInput type="number" pattern="\d*" title="휴대폰번호" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>본인명의의 휴대폰만 가능합니다.</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="생년월일"
            titleOptionalText="(6자리)"
            target="#testInput005"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="주민등록번호 앞 6자리"
                    id="testInput005"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <PartInput
                    type="number"
                    pattern="\d*"
                    title="주민등록번호 뒤 7자리 중 첫번째자리"
                    :afterDot="6"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="주민등록번호" target="#testInput006">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="주민등록번호 앞 6자리"
                    id="testInput006"
                  />
                </InputBlockCell>
                <InputBlockCell type="sub">-</InputBlockCell>
                <InputBlockCell :flexible="true">
                  <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                  <SecurityInput
                    title="주민등록번호 뒤 7자리"
                    :dot="[true, true, true, false, false, false, false]"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="이름" target="#testInput007">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput title="이름" id="testInput007" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="확장 셀렉트" target="#testInput008">
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <ExtendSelect
                    buttonTitle="확장 셀렉트 선택하기"
                    layerTitle="확장 셀렉트를 선택해 주세요"
                    buttonId="testInput008"
                    :onChange="testInputEvent"
                  >
                    <ExtendSelectOption value="1" text="옵션 1">
                      옵션 1
                    </ExtendSelectOption>
                    <ExtendSelectOption value="2" text="옵션 2">
                      옵션 2
                    </ExtendSelectOption>
                    <ExtendSelectOption value="3" text="옵션 3">
                      옵션 3
                    </ExtendSelectOption>
                    <ExtendSelectOption value="4" text="옵션 4">
                      옵션 4
                    </ExtendSelectOption>
                    <ExtendSelectOption value="5" text="옵션 5">
                      옵션 5
                    </ExtendSelectOption>
                    <ExtendSelectOption value="6" text="옵션 6">
                      옵션 6
                    </ExtendSelectOption>
                    <ExtendSelectOption value="7" text="옵션 7">
                      옵션 7
                    </ExtendSelectOption>
                    <ExtendSelectOption value="8" text="옵션 8">
                      옵션 8
                    </ExtendSelectOption>
                  </ExtendSelect>
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="카드사" target="#testInput009">
            <FormInvalid :error="state.brandError">
              <InputBlock :error="state.brandError">
                <InputBlockCell :flexible="true">
                  <ExtendSelect
                    buttonTitle="카드사 선택하기"
                    layerTitle="카드사를 선택해 주세요"
                    buttonId="testInput009"
                  >
                    <div :class="$style['bank-brand']">
                      <ul :class="$style['bank-brand__list']">
                        <li :class="$style['bank-brand__item']">
                          <ExtendSelectOption
                            value="1"
                            text="하나"
                            :classNames="{
                              option: $style['bank-brand__block'],
                            }"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <BrandLogo001 />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >하나</span
                            >
                          </ExtendSelectOption>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <ExtendSelectOption
                            value="2"
                            text="롯데"
                            :classNames="{
                              option: $style['bank-brand__block'],
                            }"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <BrandLogo002 />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >롯데</span
                            >
                          </ExtendSelectOption>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <ExtendSelectOption
                            value="3"
                            text="삼성"
                            :classNames="{
                              option: $style['bank-brand__block'],
                            }"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <BrandLogo003 />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >삼성</span
                            >
                          </ExtendSelectOption>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <ExtendSelectOption
                            value="4"
                            text="신한"
                            :classNames="{
                              option: $style['bank-brand__block'],
                            }"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <BrandLogo004 />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >신한</span
                            >
                          </ExtendSelectOption>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <ExtendSelectOption
                            value="5"
                            text="국민"
                            :classNames="{
                              option: $style['bank-brand__block'],
                            }"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <BrandLogo005 />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >국민</span
                            >
                          </ExtendSelectOption>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <ExtendSelectOption
                            value="6"
                            text="현대"
                            :classNames="{
                              option: $style['bank-brand__block'],
                            }"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <BrandLogo006 />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >현대</span
                            >
                          </ExtendSelectOption>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <ExtendSelectOption
                            value="7"
                            text="BC"
                            :classNames="{
                              option: $style['bank-brand__block'],
                            }"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <BrandLogo007 />
                            </span>
                            <span :class="$style['bank-brand__text']">BC</span>
                          </ExtendSelectOption>
                        </li>
                      </ul>
                    </div>

                    <ul :class="[$style['basic-list'], 'row-margin-contents']">
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          본인명의의 개인 신용카드 또는 체크카드로 본인확인이
                          가능합니다.
                        </div>
                      </li>
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          법인카드, 가족카드, 선불카드는 본인확인이
                          불가능합니다.
                        </div>
                      </li>
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          비씨카드는 비씨로고(
                          <span :class="$style['inline-logo']"
                            ><BrandLogo007
                          /></span>
                          )가 표시된 카드만 이용가능합니다.<br />
                          (예 : 농협BC, 우리카드, IBK카드 등)
                        </div>
                      </li>
                    </ul>
                  </ExtendSelect>
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Agree List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <div :class="$style['agree-list']">
          <UiAccordion :classNames="{ wrap: $style['agree-list__container'] }">
            <UiAccordionItem
              :classNames="{ item: $style['agree-list__all'] }"
              :initialOpen="true"
            >
              <div :class="$style['agree-list__all-head']">
                <CheckBox
                  id="testagree001All"
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
                  <UiAccordion
                    :classNames="{ wrap: $style['agree-list__depth'] }"
                  >
                    <UiAccordionItem
                      :classNames="{ item: $style['agree-list__depth-item'] }"
                      :initialOpen="true"
                    >
                      <div :class="$style['agree-list__depth-head']">
                        <CheckBox
                          id="testagree001_001"
                          :classNames="{
                            wrap: $style['agree-list__depth-checkbox'],
                          }"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >서비스 이용약관 전체동의</CheckBoxLabelText
                          >
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <UiAccordionOpener
                            :classNames="{
                              button: $style['agree-list__depth-opener'],
                            }"
                          />
                        </div>
                      </div>

                      <UiAccordionLayer>
                        <div :class="$style['agree-list__depth-contents']">
                          <ul :class="$style['agree-list__list']">
                            <li :class="$style['agree-list__item']">
                              <div :class="$style['agree-list__head']">
                                <CheckBox
                                  id="testagree001_001_001"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="tertiary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >개인(신용)정보 필수적 수집·이용
                                    동의</CheckBoxLabelText
                                  >
                                </CheckBox>
                              </div>
                              <ul
                                :class="[
                                  $style['agree-list__list'],
                                  $style['agree-list__list--secondary'],
                                ]"
                              >
                                <li :class="$style['agree-list__item']">
                                  <div :class="$style['agree-list__head']">
                                    <CheckBox
                                      id="testagree001_001_001_001"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >개인(신용)정보 필수적
                                        수집·이용</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                    <div :class="$style['agree-list__right']">
                                      <button
                                        type="button"
                                        :class="$style['agree-list__link']"
                                      >
                                        <span
                                          :class="
                                            $style['agree-list__link-text']
                                          "
                                        >
                                          상세보기
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </li>
                                <li :class="$style['agree-list__item']">
                                  <div :class="$style['agree-list__head']">
                                    <CheckBox
                                      id="testagree001_001_001_002"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >고유식별번호 필수적
                                        수집·이용</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                    <div :class="$style['agree-list__right']">
                                      <button
                                        type="button"
                                        :class="$style['agree-list__link']"
                                      >
                                        <span
                                          :class="
                                            $style['agree-list__link-text']
                                          "
                                        >
                                          상세보기
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li :class="$style['agree-list__item']">
                              <div :class="$style['agree-list__head']">
                                <CheckBox
                                  id="testagree001_001_002"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="tertiary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >개인(신용)정보 필수적 조회
                                    동의</CheckBoxLabelText
                                  >
                                </CheckBox>
                              </div>
                              <ul
                                :class="[
                                  $style['agree-list__list'],
                                  $style['agree-list__list--secondary'],
                                ]"
                              >
                                <li :class="$style['agree-list__item']">
                                  <div :class="$style['agree-list__head']">
                                    <CheckBox
                                      id="testagree001_001_002_001"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >개인(신용)정보 필수적
                                        조회</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                    <div :class="$style['agree-list__right']">
                                      <button
                                        type="button"
                                        :class="$style['agree-list__link']"
                                      >
                                        <span
                                          :class="
                                            $style['agree-list__link-text']
                                          "
                                        >
                                          상세보기
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </li>
                                <li :class="$style['agree-list__item']">
                                  <div :class="$style['agree-list__head']">
                                    <CheckBox
                                      id="testagree001_001_002_002"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >고유식별번호 필수적
                                        조회</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                    <div :class="$style['agree-list__right']">
                                      <button
                                        type="button"
                                        :class="$style['agree-list__link']"
                                      >
                                        <span
                                          :class="
                                            $style['agree-list__link-text']
                                          "
                                        >
                                          상세보기
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </UiAccordionLayer>
                    </UiAccordionItem>

                    <UiAccordionItem
                      :classNames="{ item: $style['agree-list__depth-item'] }"
                      :initialOpen="true"
                    >
                      <div :class="$style['agree-list__depth-head']">
                        <CheckBox
                          id="testagree001_002"
                          :classNames="{
                            wrap: $style['agree-list__depth-checkbox'],
                          }"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            공공마이데이터 서비스 이용<br />
                            전체동의(증빙서류 자동제출)
                          </CheckBoxLabelText>
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <UiAccordionOpener
                            :classNames="{
                              button: $style['agree-list__depth-opener'],
                            }"
                          />
                        </div>
                      </div>

                      <UiAccordionLayer>
                        <div :class="$style['agree-list__depth-contents']">
                          <ul :class="$style['agree-list__list']">
                            <li :class="$style['agree-list__item']">
                              <div :class="$style['agree-list__head']">
                                <CheckBox
                                  id="testagree001_002_001"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="tertiary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText>
                                    개인(신용)정보 필수적 수집·이용 동의<br />
                                    (공공 마이데이터)
                                  </CheckBoxLabelText>
                                </CheckBox>
                              </div>
                              <ul
                                :class="[
                                  $style['agree-list__list'],
                                  $style['agree-list__list--secondary'],
                                ]"
                              >
                                <li :class="$style['agree-list__item']">
                                  <div :class="$style['agree-list__head']">
                                    <CheckBox
                                      id="testagree001_002_001_001"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >개인(신용)정보 수집·이용
                                        동의</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                    <div :class="$style['agree-list__right']">
                                      <button
                                        type="button"
                                        :class="$style['agree-list__link']"
                                      >
                                        <span
                                          :class="
                                            $style['agree-list__link-text']
                                          "
                                        >
                                          상세보기
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </li>
                                <li :class="$style['agree-list__item']">
                                  <div :class="$style['agree-list__head']">
                                    <CheckBox
                                      id="testagree001_002_001_002"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >고유식별정보 수집·이용
                                        동의</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                    <div :class="$style['agree-list__right']">
                                      <button
                                        type="button"
                                        :class="$style['agree-list__link']"
                                      >
                                        <span
                                          :class="
                                            $style['agree-list__link-text']
                                          "
                                        >
                                          상세보기
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li :class="$style['agree-list__item']">
                              <div :class="$style['agree-list__head']">
                                <CheckBox
                                  id="testagree001_002_002"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="tertiary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText>
                                    개인(신용)정보 필수적 제공 동의<br />
                                    (공공 마이데이터)
                                  </CheckBoxLabelText>
                                </CheckBox>
                              </div>
                              <ul
                                :class="[
                                  $style['agree-list__list'],
                                  $style['agree-list__list--secondary'],
                                ]"
                              >
                                <li :class="$style['agree-list__item']">
                                  <div :class="$style['agree-list__head']">
                                    <CheckBox
                                      id="testagree001_002_002_001"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >개인(신용)정보 제공
                                        동의</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                    <div :class="$style['agree-list__right']">
                                      <button
                                        type="button"
                                        :class="$style['agree-list__link']"
                                      >
                                        <span
                                          :class="
                                            $style['agree-list__link-text']
                                          "
                                        >
                                          상세보기
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </li>
                                <li :class="$style['agree-list__item']">
                                  <div :class="$style['agree-list__head']">
                                    <CheckBox
                                      id="testagree001_002_002_002"
                                      :classNames="{
                                        wrap: $style['agree-list__checkbox'],
                                      }"
                                      theme="quinary"
                                    >
                                      <CheckBoxObject />
                                      <CheckBoxLabelText
                                        >고유식별정보 제공
                                        동의</CheckBoxLabelText
                                      >
                                    </CheckBox>
                                    <div :class="$style['agree-list__right']">
                                      <button
                                        type="button"
                                        :class="$style['agree-list__link']"
                                      >
                                        <span
                                          :class="
                                            $style['agree-list__link-text']
                                          "
                                        >
                                          상세보기
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </UiAccordionLayer>
                    </UiAccordionItem>
                  </UiAccordion>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
          </UiAccordion>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">하위 아코디언 없을 때</h3>

        <div :class="$style['agree-list']">
          <UiAccordion :classNames="{ wrap: $style['agree-list__container'] }">
            <UiAccordionItem
              :classNames="{ item: $style['agree-list__all'] }"
              :initialOpen="true"
            >
              <div :class="$style['agree-list__all-head']">
                <CheckBox
                  id="testagree002All"
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
                          id="testagree002_001"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >개인(신용)정보 필수적 수집·이용
                            동의</CheckBoxLabelText
                          >
                        </CheckBox>
                      </div>
                      <ul
                        :class="[
                          $style['agree-list__list'],
                          $style['agree-list__list--secondary'],
                        ]"
                      >
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="testagree002_001_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText
                                >개인(신용)정보 필수적
                                수집·이용</CheckBoxLabelText
                              >
                            </CheckBox>
                            <div :class="$style['agree-list__right']">
                              <button
                                type="button"
                                :class="$style['agree-list__link']"
                              >
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
                              id="testagree002_001_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText
                                >고유식별번호 필수적
                                수집·이용</CheckBoxLabelText
                              >
                            </CheckBox>
                            <div :class="$style['agree-list__right']">
                              <button
                                type="button"
                                :class="$style['agree-list__link']"
                              >
                                <span :class="$style['agree-list__link-text']">
                                  상세보기
                                </span>
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="testagree002_002"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="tertiary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText
                            >개인(신용)정보 필수적 조회 동의</CheckBoxLabelText
                          >
                        </CheckBox>
                      </div>
                      <ul
                        :class="[
                          $style['agree-list__list'],
                          $style['agree-list__list--secondary'],
                        ]"
                      >
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="testagree002_002_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText
                                >개인(신용)정보 필수적 조회</CheckBoxLabelText
                              >
                            </CheckBox>
                            <div :class="$style['agree-list__right']">
                              <button
                                type="button"
                                :class="$style['agree-list__link']"
                              >
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
                              id="testagree002_002_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="quinary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText
                                >고유식별번호 필수적 조회</CheckBoxLabelText
                              >
                            </CheckBox>
                            <div :class="$style['agree-list__right']">
                              <button
                                type="button"
                                :class="$style['agree-list__link']"
                              >
                                <span :class="$style['agree-list__link-text']">
                                  상세보기
                                </span>
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
          </UiAccordion>
        </div>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">전체동의 아코디언 기능 없을 때</h3>

        <div :class="$style['agree-list']">
          <ul :class="$style['agree-list__container']">
            <li :class="$style['agree-list__all']">
              <div :class="$style['agree-list__all-head']">
                <CheckBox
                  id="testagree003All"
                  :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>전체동의</CheckBoxLabelText>
                </CheckBox>
              </div>

              <div :class="$style['agree-list__all-contents']">
                <UiAccordion
                  :classNames="{ wrap: $style['agree-list__depth'] }"
                >
                  <UiAccordionItem
                    :classNames="{ item: $style['agree-list__depth-item'] }"
                    :initialOpen="true"
                  >
                    <div :class="$style['agree-list__depth-head']">
                      <CheckBox
                        id="testagree003_001"
                        :classNames="{
                          wrap: $style['agree-list__depth-checkbox'],
                        }"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText
                          >서비스 이용약관 전체동의</CheckBoxLabelText
                        >
                      </CheckBox>
                      <div :class="$style['agree-list__right']">
                        <UiAccordionOpener
                          :classNames="{
                            button: $style['agree-list__depth-opener'],
                          }"
                        />
                      </div>
                    </div>

                    <UiAccordionLayer>
                      <div :class="$style['agree-list__depth-contents']">
                        <ul :class="$style['agree-list__list']">
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="testagree003_001_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >개인(신용)정보 필수적 수집·이용
                                  동의</CheckBoxLabelText
                                >
                              </CheckBox>
                            </div>
                            <ul
                              :class="[
                                $style['agree-list__list'],
                                $style['agree-list__list--secondary'],
                              ]"
                            >
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="testagree003_001_001_001"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >개인(신용)정보 필수적
                                      수집·이용</CheckBoxLabelText
                                    >
                                  </CheckBox>
                                  <div :class="$style['agree-list__right']">
                                    <button
                                      type="button"
                                      :class="$style['agree-list__link']"
                                    >
                                      <span
                                        :class="$style['agree-list__link-text']"
                                      >
                                        상세보기
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </li>
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="testagree003_001_001_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >고유식별번호 필수적
                                      수집·이용</CheckBoxLabelText
                                    >
                                  </CheckBox>
                                  <div :class="$style['agree-list__right']">
                                    <button
                                      type="button"
                                      :class="$style['agree-list__link']"
                                    >
                                      <span
                                        :class="$style['agree-list__link-text']"
                                      >
                                        상세보기
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="testagree003_001_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >개인(신용)정보 필수적 조회
                                  동의</CheckBoxLabelText
                                >
                              </CheckBox>
                            </div>
                            <ul
                              :class="[
                                $style['agree-list__list'],
                                $style['agree-list__list--secondary'],
                              ]"
                            >
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="testagree003_001_002_001"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >개인(신용)정보 필수적
                                      조회</CheckBoxLabelText
                                    >
                                  </CheckBox>
                                  <div :class="$style['agree-list__right']">
                                    <button
                                      type="button"
                                      :class="$style['agree-list__link']"
                                    >
                                      <span
                                        :class="$style['agree-list__link-text']"
                                      >
                                        상세보기
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </li>
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="testagree003_001_002_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >고유식별번호 필수적
                                      조회</CheckBoxLabelText
                                    >
                                  </CheckBox>
                                  <div :class="$style['agree-list__right']">
                                    <button
                                      type="button"
                                      :class="$style['agree-list__link']"
                                    >
                                      <span
                                        :class="$style['agree-list__link-text']"
                                      >
                                        상세보기
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </UiAccordionLayer>
                  </UiAccordionItem>

                  <UiAccordionItem
                    :classNames="{ item: $style['agree-list__depth-item'] }"
                    :initialOpen="true"
                  >
                    <div :class="$style['agree-list__depth-head']">
                      <CheckBox
                        id="testagree003_002"
                        :classNames="{
                          wrap: $style['agree-list__depth-checkbox'],
                        }"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText>
                          공공마이데이터 서비스 이용<br />
                          전체동의(증빙서류 자동제출)
                        </CheckBoxLabelText>
                      </CheckBox>
                      <div :class="$style['agree-list__right']">
                        <UiAccordionOpener
                          :classNames="{
                            button: $style['agree-list__depth-opener'],
                          }"
                        />
                      </div>
                    </div>

                    <UiAccordionLayer>
                      <div :class="$style['agree-list__depth-contents']">
                        <ul :class="$style['agree-list__list']">
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="testagree003_002_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  개인(신용)정보 필수적 수집·이용 동의<br />
                                  (공공 마이데이터)
                                </CheckBoxLabelText>
                              </CheckBox>
                            </div>
                            <ul
                              :class="[
                                $style['agree-list__list'],
                                $style['agree-list__list--secondary'],
                              ]"
                            >
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="testagree003_002_001_001"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >개인(신용)정보 수집·이용
                                      동의</CheckBoxLabelText
                                    >
                                  </CheckBox>
                                  <div :class="$style['agree-list__right']">
                                    <button
                                      type="button"
                                      :class="$style['agree-list__link']"
                                    >
                                      <span
                                        :class="$style['agree-list__link-text']"
                                      >
                                        상세보기
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </li>
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="testagree003_002_001_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >고유식별정보 수집·이용
                                      동의</CheckBoxLabelText
                                    >
                                  </CheckBox>
                                  <div :class="$style['agree-list__right']">
                                    <button
                                      type="button"
                                      :class="$style['agree-list__link']"
                                    >
                                      <span
                                        :class="$style['agree-list__link-text']"
                                      >
                                        상세보기
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="testagree003_002_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  개인(신용)정보 필수적 제공 동의<br />
                                  (공공 마이데이터)
                                </CheckBoxLabelText>
                              </CheckBox>
                            </div>
                            <ul
                              :class="[
                                $style['agree-list__list'],
                                $style['agree-list__list--secondary'],
                              ]"
                            >
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="testagree003_002_002_001"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >개인(신용)정보 제공
                                      동의</CheckBoxLabelText
                                    >
                                  </CheckBox>
                                  <div :class="$style['agree-list__right']">
                                    <button
                                      type="button"
                                      :class="$style['agree-list__link']"
                                    >
                                      <span
                                        :class="$style['agree-list__link-text']"
                                      >
                                        상세보기
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </li>
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="testagree003_002_002_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >고유식별정보 제공 동의</CheckBoxLabelText
                                    >
                                  </CheckBox>
                                  <div :class="$style['agree-list__right']">
                                    <button
                                      type="button"
                                      :class="$style['agree-list__link']"
                                    >
                                      <span
                                        :class="$style['agree-list__link-text']"
                                      >
                                        상세보기
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </UiAccordionLayer>
                  </UiAccordionItem>
                </UiAccordion>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Tab Base</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <UiTab v-slot="tabSlotProps">
          <UiTabList>
            <UiTabButton link="testTab001_001">Tab 1</UiTabButton>
            <UiTabButton link="testTab001_002">Tab 2</UiTabButton>
            <UiTabButton link="testTab001_003">Tab 3</UiTabButton>
            <UiTabButton link="testTab001_004">Tab 4</UiTabButton>
          </UiTabList>

          <p>Active : {{ tabSlotProps.activeName }}</p>

          <UiTabPanel name="testTab001_001">// Tab 1 Contents</UiTabPanel>

          <UiTabPanel name="testTab001_002">// Tab 2 Contents</UiTabPanel>

          <UiTabPanel name="testTab001_003">// Tab 3 Contents</UiTabPanel>

          <UiTabPanel name="testTab001_004">// Tab 4 Contents</UiTabPanel>
        </UiTab>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Basic List</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default (font:12px, margin:8px)</h3>

        <ul :class="$style['basic-list']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              법인카드, 가족카드, 선불카드는 본인확인이 불가능합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              비씨카드는 비씨로고(
              <span :class="$style['inline-logo']"><BrandLogo007 /></span>
              )가 표시된 카드만 이용가능합니다.<br />
              (예 : 농협BC, 우리카드, IBK카드 등)
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-black']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-green']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
        </ul>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Text Symbol</h3>

        <ol :class="$style['basic-list']">
          <li :class="$style['basic-list__item']">
            <div :class="[$style['basic-list__symbol'], 'font-weight-medium']">
              1.
            </div>
            <div :class="$style['basic-list__content']">
              <div :class="$style['basic-list__title']">본인확인 안내</div>
              <div :class="$style['basic-list__text']">
                본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
              </div>
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="[$style['basic-list__symbol'], 'font-weight-medium']">
              2.
            </div>
            <div :class="$style['basic-list__content']">
              <div :class="$style['basic-list__title']">타이틀</div>
              <div :class="$style['basic-list__text']">
                본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
              </div>
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']">3.</div>
            <div :class="$style['basic-list__content']">
              비씨카드는 비씨로고(
              <span :class="$style['inline-logo']"><BrandLogo007 /></span>
              )가 표시된 카드만 이용가능합니다.<br />
              (예 : 농협BC, 우리카드, IBK카드 등)
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-black']">
            <div :class="$style['basic-list__symbol']">4.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-green']">
            <div :class="$style['basic-list__symbol']">5.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red']">
            <div :class="$style['basic-list__symbol']">6.</div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
        </ol>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Regular (font:14px; margin:12px)</h3>

        <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              법인카드, 가족카드, 선불카드는 본인확인이 불가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              비씨카드는 비씨로고(
              <span :class="$style['inline-logo']"><BrandLogo007 /></span>
              )가 표시된 카드만 이용가능합니다.<br />
              (예 : 농협BC, 우리카드, IBK카드 등)
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-green', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red', 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
        </ul>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">small margin (4px)</h3>
        <ul :class="[$style['basic-list'], $style['basic-list--small-margin']]">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              법인카드, 가족카드, 선불카드는 본인확인이 불가능합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              비씨카드는 비씨로고(
              <span :class="$style['inline-logo']"><BrandLogo007 /></span>
              )가 표시된 카드만 이용가능합니다.<br />
              (예 : 농협BC, 우리카드, IBK카드 등)
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-black']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-green']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
        </ul>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">mini margin (2px)</h3>
        <ul :class="[$style['basic-list'], $style['basic-list--mini-margin']]">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              법인카드, 가족카드, 선불카드는 본인확인이 불가능합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              비씨카드는 비씨로고(
              <span :class="$style['inline-logo']"><BrandLogo007 /></span>
              )가 표시된 카드만 이용가능합니다.<br />
              (예 : 농협BC, 우리카드, IBK카드 등)
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-black']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-green']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인명의의 개인 신용카드 또는 체크카드로 본인확인이 가능합니다.
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">hr</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <BasicHr className="row-margin-contents" />
        <BasicHr theme="secondary" className="row-margin-contents" />
        <BasicHr theme="tertiary" className="row-margin-contents" />
        <BasicHr theme="quaternary" className="row-margin-contents" />
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Contents</h3>
        <BasicHr type="contents" className="row-margin-contents" />
        <BasicHr
          theme="secondary"
          type="contents"
          className="row-margin-contents"
        />
        <BasicHr
          theme="tertiary"
          type="contents"
          className="row-margin-contents"
        />
        <BasicHr
          theme="quaternary"
          type="contents"
          className="row-margin-contents"
        />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Box</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <BasicBox>// contnets</BasicBox>
        <BasicBox theme="secondary">// contnets</BasicBox>
        <BasicBox theme="tertiary">// contnets</BasicBox>
        <BasicBox theme="quaternary">// contnets</BasicBox>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Key Value Text</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <KeyValueList>
          <KeyValueItem>
            <KeyValueTitle>차량명의</KeyValueTitle>
            <KeyValueText>
              본인명의(공동명의 제외)<br />
              소유기간 3개월 이상
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>소유차종</KeyValueTitle>
            <KeyValueText>국산/수입 승용, RV, 승합</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>차량연식</KeyValueTitle>
            <KeyValueText>
              출고 이후 10년 이내<br />
              차량가격 500만원 이상<br />
              (당사 차량 시세 가격 기준)
            </KeyValueText>
          </KeyValueItem>
        </KeyValueList>
      </div>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">align: left</h3>
        <KeyValueList align="left">
          <KeyValueItem>
            <KeyValueTitle>차량명의</KeyValueTitle>
            <KeyValueText>
              본인명의(공동명의 제외)<br />
              소유기간 3개월 이상
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>소유차종</KeyValueTitle>
            <KeyValueText>국산/수입 승용, RV, 승합</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>차량연식</KeyValueTitle>
            <KeyValueText>
              출고 이후 10년 이내<br />
              차량가격 500만원 이상<br />
              (당사 차량 시세 가격 기준)
            </KeyValueText>
          </KeyValueItem>
        </KeyValueList>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Illust Object</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <IllustObject />
        <IllustObject type="complete" />
        <IllustObject type="error" />
        <IllustObject type="fail" />
        <IllustObject type="license" />
        <IllustObject type="certification" />
        <IllustObject type="star" />
        <IllustObject type="appfree" />
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Illust Info</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>

        <IllustInfo>
          <IllustObject type="fail" />
          <IllustInfoTitle>
            만기연장 신청 대상이 아닙니다<br />
            <strong>잔여 회차를 확인해 주세요</strong>
          </IllustInfoTitle>
          <IllustInfoText>
            하나캐피탈 스탁론에<br />
            관심을 가져주셔서 감사합니다.
          </IllustInfoText>
        </IllustInfo>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Notice Text</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <NoticeText>Text Text Text Text Text</NoticeText>
        <NoticeText :classNames="{ wrap: 'color-black' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText :classNames="{ wrap: 'color-green' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText :classNames="{ wrap: 'color-red' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText :classNames="{ wrap: 'color-navy' }">
          Text Text Text Text Text
        </NoticeText>
      </div>

      <div class="test-section-sub">
        <h3 class="test-section-sub-title">check</h3>
        <NoticeText type="check">Text Text Text Text Text</NoticeText>
        <NoticeText type="check" :classNames="{ wrap: 'color-black' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText type="check" :classNames="{ wrap: 'color-green' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText type="check" :classNames="{ wrap: 'color-red' }">
          Text Text Text Text Text
        </NoticeText>
        <NoticeText type="check" :classNames="{ wrap: 'color-navy' }">
          Text Text Text Text Text
        </NoticeText>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">colors</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <div class="color-black">.color-black</div>
        <div class="color-gray">.color-gray</div>
        <div class="color-gray-secondary">.color-gray-secondary</div>
        <div class="color-green">.color-green</div>
        <div class="color-red">.color-red</div>
        <div class="color-navy">.color-navy</div>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Text</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
        <p class="text-title-1">.text-title-1 (20)</p>
        <p class="text-title-2">.text-title-1 (18)</p>
        <p class="text-body-1">.text-body-1 (16)</p>
        <p class="text-body-2">.text-body-2 (15)</p>
        <p class="text-body-3">.text-body-3 (14)</p>
        <p class="text-body-4">.text-body-4 (13)</p>
        <p class="text-body-5">.text-body-5 (12)</p>
      </div>
    </section>

    <section class="test-section">
      <h2 class="test-section-title">Component Title</h2>
      <div class="test-section-sub">
        <h3 class="test-section-sub-title">Default</h3>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideComponent.scss';
</style>

<style lang="scss" module>
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>
