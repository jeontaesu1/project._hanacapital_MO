<script>
import {
  ref,
  computed,
  reactive,
  nextTick,
  inject,
  onMounted,
  watch,
} from 'vue';

import SelectButton from '@/components/ui/form/SelectButton.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import RoundTab from '@/components/ui/tab/RoundTab.vue';
import RoundTabButton from '@/components/ui/tab/RoundTabButton.vue';
import BankLogo from '@/components/ui/imageData/BankLogo.vue';

const defaultClassNames = () => ({
  wrap: '',
  input: '',
});

const data = () => ({
  bank: [
    {
      value: '081',
      text: '하나은행',
    },
    {
      value: '039',
      text: '경남은행',
    },
    {
      value: '034',
      text: '광주은행',
    },
    {
      value: '004',
      text: '국민은행',
    },
    {
      value: '003',
      text: '기업은행',
    },
    {
      value: '011',
      text: '농협은행',
    },
    {
      value: '031',
      text: '대구은행',
    },
    {
      value: '055',
      text: '도이치은행',
    },
    {
      value: '032',
      text: '부산은행',
    },
    {
      value: '064',
      text: '산림조합중앙회',
    },
    {
      value: '002',
      text: '산업은행',
    },
    {
      value: '050',
      text: '상호저축은행',
    },
    {
      value: '045',
      text: '새마을금고중앙회',
    },
    {
      value: '007',
      text: '수협중앙회',
    },
    {
      value: '088',
      text: '신한은행',
    },
    {
      value: '048',
      text: '신협중앙회',
    },
    {
      value: '020',
      text: '우리은행',
    },
    {
      value: '071',
      text: '우체국',
    },
    {
      value: '037',
      text: '전북은행',
    },
    {
      value: '057',
      text: '제이피모간체이스은행',
    },
    {
      value: '035',
      text: '제주은행',
    },
    {
      value: '012',
      text: '지역농축협',
    },
    {
      value: '027',
      text: '한국시티은행',
    },
    {
      value: '060',
      text: 'BOA은행',
    },
    {
      value: '054',
      text: 'HSBC은행',
    },
    {
      value: '023',
      text: 'SC은행',
    },
    {
      value: '089',
      text: '케이뱅크',
    },
    {
      value: '090',
      text: '카카오뱅크',
    },
  ],
  securities: [
    {
      value: '261',
      text: '교보증권',
    },
    {
      value: '267',
      text: '대신증권',
    },
    {
      value: '238',
      text: '대우증권',
    },
    {
      value: '279',
      text: '동부증권',
    },
    {
      value: '287',
      text: '메리츠증권',
    },
    {
      value: '230',
      text: '미래에셋증권',
    },
    {
      value: '290',
      text: '부국증권',
    },
    {
      value: '240',
      text: '삼성증권',
    },
    {
      value: '291',
      text: '신영증권',
    },
    {
      value: '278',
      text: '신한금융투자',
    },
    {
      value: '268',
      text: '아이엠투자증권',
    },
    {
      value: '289',
      text: '엔에이치농협증권',
    },
    {
      value: '209',
      text: '유안타증권((구)동양증권)',
    },
    {
      value: '280',
      text: '유진투자증권',
    },
    {
      value: '265',
      text: '이베스트투자증권',
    },
    {
      value: '264',
      text: '키움증권',
    },
    {
      value: '270',
      text: '하나금융투자',
    },
    {
      value: '262',
      text: '하이투자증권',
    },
    {
      value: '243',
      text: '한국투자증권',
    },
    {
      value: '269',
      text: '한화증권',
    },
    {
      value: '218',
      text: '현대증권',
    },
    {
      value: '263',
      text: '현대차증권(주)',
    },
    {
      value: '296',
      text: 'IBK투자증권',
    },
    {
      value: '320',
      text: 'KB투자증권',
    },
    {
      value: '293',
      text: 'KTB투자증권',
    },
    {
      value: '292',
      text: 'LIG투자증권',
    },
    {
      value: '247',
      text: 'NH투자증권',
    },
    {
      value: '266',
      text: 'SK증권',
    },
  ],
});

export default {
  components: {
    SelectButton,
    UiLayer,
    PopupTitle,
    ToastPopup,
    ToastPopupHead,
    UiTab,
    UiTabPanel,
    RoundTab,
    RoundTabButton,
    BankLogo,
  },
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    buttonClassNames: {
      Type: Object,
      default: null,
    },
    defaultValue: {
      Type: String,
      default: null,
    },
    disabled: {
      Type: Boolean,
      default: false,
    },
    buttonTitle: {
      Type: String,
      default: null,
    },
    layerTitle: {
      Type: String,
      default: null,
    },
    id: {
      Type: String,
      default: null,
    },
    name: {
      Type: String,
      default: null,
    },
    placeholder: {
      Type: String,
      default: '',
    },
    buttonId: {
      Type: String,
      default: null,
    },
    onChange: {
      Type: Function,
      default() {
        return () => {};
      },
    },
    modelValue: {
      Type: String,
    },
  },
  setup(props, { emit }) {
    const option = data();
    const optionMerge = [...option.bank, ...option.securities];

    const state = reactive({
      value: props.defaultValue || '',
      text:
        (props.defaultValue &&
          optionMerge.filter((item) => item.value === props.defaultValue)[0]
            .text) ||
        '',
      forcePlaceholder: !props.defaultValue,
    });

    const formListItem = inject('formListItem', {});
    const inputBlock = inject('inputBlock', {});

    const layer = ref(null);
    const button = ref(null);
    const input = ref(null);

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    watch(
      () => props.modelValue,
      (cur) => {
        setValue(cur);
      }
    );

    const layerOpen = () => {
      layer.value.open(button.value.button);

      if (formListItem && formListItem.selectFocus) {
        formListItem.selectFocus(true);
      }
      if (inputBlock && inputBlock.selectFocus) {
        inputBlock.selectFocus(true);
      }
    };

    const selectOption = (option) => {
      state.value = option.value;
      state.text = option.text;
      state.forcePlaceholder = false;
      layer.value.close();

      nextTick(() => {
        const eChange = new Event('change');
        const eInput = new Event('input');
        input.value.dispatchEvent(eChange);
        input.value.dispatchEvent(eInput);

        if (formListItem && formListItem.checkInputed) {
          formListItem.checkInputed();
        }
      });
    };

    const setValue = (value) => {
      const filterOption = optionMerge.filter((item) => item.value === value);

      if (filterOption.length) {
        selectOption(filterOption[0]);
      } else {
        selectOption('');
      }
    };

    const onAfterClosed = () => {
      if (formListItem && formListItem.selectFocus) {
        formListItem.selectFocus(false);
      }
      if (inputBlock && inputBlock.selectFocus) {
        inputBlock.selectFocus(false);
      }
    };

    const onInput = (e) => {
      emit('update:modelValue', e.target.value);
    };

    const onKeyup = (e, option) => {
      const { keyCode } = e;

      switch (keyCode) {
        case 13:
        case 32:
          selectOption(option);
          break;
        default:
          break;
      }
    };

    onMounted(() => {
      setValue(props.modelValue || props.defaultValue);
    });

    return {
      state,
      layer,
      button,
      input,
      customClassNames,
      option,
      layerOpen,
      selectOption,
      setValue,
      onAfterClosed,
      onInput,
      onKeyup,
    };
  },
};
</script>

<template>
  <div :class="[$style['select'], customClassNames.wrap]">
    <input
      type="hidden"
      ref="input"
      :class="[$style['select__input'], customClassNames.input]"
      :id="id"
      :name="name"
      :disabled="disabled"
      :value="state.value"
      @change="onChange"
      @input="onInput"
    />
    <SelectButton
      ref="button"
      :classNames="buttonClassNames"
      :disabled="disabled"
      :title="buttonTitle || '은행 선택하기'"
      :placeholder="placeholder"
      :forcePlaceholder="state.forcePlaceholder"
      :id="buttonId"
      @click="layerOpen"
      >{{ state.text }}</SelectButton
    >

    <UiLayer
      ref="layer"
      type="toast"
      :onAfterClosed="onAfterClosed"
      :backgroundClose="true"
    >
      <ToastPopup>
        <template v-slot:head>
          <ToastPopupHead>
            <PopupTitle>{{ layerTitle || '은행 선택' }}</PopupTitle>
          </ToastPopupHead>
        </template>

        <UiTab>
          <RoundTab
            :useUiTab="true"
            :classNames="{ wrap: $style['select__tab'] }"
          >
            <RoundTabButton :link="`${id}_BankSelect001`">은행</RoundTabButton>
            <RoundTabButton :link="`${id}_BankSelect002`">증권</RoundTabButton>
          </RoundTab>

          <UiTabPanel :name="`${id}_BankSelect001`">
            <div :class="$style['bank-brand']">
              <ul :class="$style['bank-brand__list']">
                <li
                  v-for="item in option.bank"
                  :key="item.value"
                  :class="$style['bank-brand__item']"
                >
                  <div
                    role="button"
                    tabindex="0"
                    :title="state.value === item.value ? '선택 됨' : null"
                    :class="[
                      $style['bank-brand__block'],
                      {
                        'is-selected': state.value === item.value,
                      },
                    ]"
                    @click="selectOption(item)"
                    @keyup="onKeyup($event, item)"
                  >
                    <span :class="$style['bank-brand__logo']">
                      <BankLogo :code="item.value" />
                    </span>
                    <span :class="$style['bank-brand__text']">{{
                      item.text
                    }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </UiTabPanel>

          <UiTabPanel :name="`${id}_BankSelect002`">
            <div :class="$style['bank-brand']">
              <ul :class="$style['bank-brand__list']">
                <li
                  v-for="item in option.securities"
                  :key="item.value"
                  :class="$style['bank-brand__item']"
                >
                  <div
                    role="button"
                    tabindex="0"
                    :title="state.value === item.value ? '선택 됨' : null"
                    :class="[
                      $style['bank-brand__block'],
                      {
                        'is-selected': state.value === item.value,
                      },
                    ]"
                    @click="selectOption(item)"
                    @keyup="onKeyup($event, item)"
                  >
                    <span :class="$style['bank-brand__logo']">
                      <BankLogo type="securities" :code="item.value" />
                    </span>
                    <span :class="$style['bank-brand__text']">{{
                      item.text
                    }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </UiTabPanel>
        </UiTab>
      </ToastPopup>
    </UiLayer>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/BankSelect.scss';
</style>
