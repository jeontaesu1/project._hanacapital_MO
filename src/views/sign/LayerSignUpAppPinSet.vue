<script>
// Member_M06_l002
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageMainText,
    SecurityInput,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
  },
  setup() {
    const state = reactive({
      error: false,
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
    <FullPopup bg="secondary">
      <template v-slot:head>
        <FullPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageMainText
        :classNames="{
          wrap: 'align-center row-margin-contents',
        }"
        >간편비밀번호<br />
        <strong>6자리를 설정해 주세요</strong>
      </PageMainText>

      <FormInvalid :error="state.error">
        <SecurityInput
          theme="pin"
          title="간편비밀번호 6자리 입력하기"
          :dot="[true, true, true, false, false, false]"
        />
        <FormInvalidMessage
          :classNames="{
            wrap: 'align-center text-body-4 row-margin-contents',
          }"
        >
          동일 숫자 3개, 연속된 3자리 숫자,<br />
          생년월일 숫자를 사용할 수 없습니다.
        </FormInvalidMessage>
        <FormHelpText
          :classNames="{
            wrap: 'align-center text-body-4 row-margin-contents',
          }"
        >
          동일 숫자, 연속 숫자, 개인정보 관련 숫자는<br />
          등록이 제한됩니다.
        </FormHelpText>
      </FormInvalid>
    </FullPopup>
  </UiLayer>
</template>
