<script>
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconArrow from '@/assets/images/icon/link.svg?component';

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
    TextButton,
    IconArrow,
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
      >
        간편비밀번호를<br />
        <strong>입력해 주세요</strong>
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
          간편 비밀번호가 일치하지 않습니다. (1/5)
        </FormInvalidMessage>
      </FormInvalid>

      <template v-slot:foot>
        <div :class="$style['flex-box']">
          <TextButton
            :classNames="{ wrap: 'text-body-4 color-gray' }"
            :underline="true"
          >
            간편비밀번호를 잊으셨나요?
          </TextButton>

          <TextButton theme="quaternary" :classNames="{ wrap: 'text-body-4' }">
            다른 로그인 방식
            <template v-slot:rightIcon>
              <IconArrow />
            </template>
          </TextButton>
        </div>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/sign/LayerSignInPin.scss';
</style>
