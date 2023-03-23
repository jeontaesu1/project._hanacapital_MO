<script>
import { ref, reactive, nextTick, computed } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicButton,
    ButtonList,
    ButtonListItem,
    SecurityInput,
  },
  setup() {
    const state = reactive({
      nameError: false,
      licenseError: false,
      numberError: false,
      clearName: false,
      clearLicense: false,
      clearNumber: false,
    });

    const focusName = computed(() => {
      if (!state.clearName) {
        return '법인명을';
      } else if (!state.clearLicense) {
        return '사업자등록번호를';
      } else {
        return '법인번호를';
      }
    });

    const layer = ref(null);
    const name = ref(null);
    const license = ref(null);
    const number01 = ref(null);
    const number02 = ref(null);

    const nameCheck = () => {
      if (state.clearName) return;

      state.clearName = true;

      nextTick(() => {
        license.value.getInputElement().focus();
      });
    };

    const licenseCheck = () => {
      if (state.clearLicense) return;

      state.clearLicense = true;

      nextTick(() => {
        number01.value.getInputElement().focus();
      });
    };

    const numberCheck = () => {
      if (state.clearNumber) return;

      state.clearNumber = true;
    };

    return {
      state,
      focusName,
      layer,
      name,
      license,
      number01,
      number02,
      nameCheck,
      licenseCheck,
      numberCheck,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          법인 확인을 위해<br />
          <strong>{{ focusName }} 입력해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem
          v-if="state.clearLicense"
          titleText="법인번호"
          target="#layerIdentificationBusinessNumber01"
        >
          <FormInvalid :error="state.numberError">
            <InputBlock :error="state.numberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  ref="number01"
                  title="법인번호 앞 6자리"
                  id="layerIdentificationBusinessNumber01"
                  @keyup="numberCheck"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                <SecurityInput
                  title="법인번호 뒤 7자리"
                  :dot="[true, true, true, false, false, false, false]"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          v-if="state.clearName"
          titleText="사업자등록번호"
          titleOptionalText="(10자리)"
          target="#layerIdentificationBusinessLicense"
        >
          <FormInvalid :error="state.licenseError">
            <InputBlock :error="state.licenseError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  ref="license"
                  title="사업자등록번호 (10자리)"
                  id="layerIdentificationBusinessLicense"
                  @keyup="licenseCheck"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="법인명"
          target="#layerIdentificationBusinessName"
        >
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  ref="name"
                  title="법인명"
                  id="layerIdentificationBusinessName"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem v-if="!state.clearName">
            <BasicButton @click="nameCheck">다음</BasicButton>
          </ButtonListItem>
          <ButtonListItem v-if="state.clearLicense">
            <BasicButton :disabled="!state.clearNumber"
              >공동인증서 인증</BasicButton
            >
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
