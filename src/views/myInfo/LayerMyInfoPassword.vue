<script>
// MI_M01_l009
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    FormInvalidMessage,
    FormHelpText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageSubText,
    BasicInput,
  },

  setup() {
    const state = reactive({
      passwordError: false,
      passwordConfirmError: false,
    });

    const layer = ref(null);

    return {
      state,
      layer,
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
          <strong>새로운 비밀번호를</strong><br />
          입력해 주세요
        </PageMainText>
        <PageSubText>
          비밀번호는 반복/연속 된 문자, ID와 동일한 문자, 4자리 이상 숫자 및
          지정된 특수문자 ~’!@#$%^*_-+=.?{} 이외의 문자는 사용할 수 없습니다.
        </PageSubText>
      </PageTextGroup>

      <FormList>
        <FormListItem titleText="신규 비밀번호" target="#layerMyInfoPassword">
          <FormInvalid :error="state.passwordError">
            <InputBlock :error="state.passwordError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="password"
                  title="신규 비밀번호"
                  id="layerMyInfoPassword"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>
              비밀번호 8~16자리 (영문/숫자/특수문자 혼합)
            </FormHelpText>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="신규 비밀번호 확인"
          target="#layerMyInfoPasswordConfirm"
        >
          <FormInvalid :error="state.passwordConfirmError">
            <InputBlock :error="state.passwordConfirmError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="password"
                  title="신규 비밀번호 확인"
                  id="layerMyInfoPasswordConfirm"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>
              비밀번호 8~16자리 (영문/숫자/특수문자 혼합)
            </FormHelpText>
          </FormInvalid>
        </FormListItem>
      </FormList>

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
    </FullPopup>
  </UiLayer>
</template>
