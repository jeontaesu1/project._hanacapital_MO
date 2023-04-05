<script>
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageMainText,
    SecurityInput,
    FormInvalidMessage,
  },
  setup() {
    const layer = ref(null);

    return {
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup :classNames="{ wrap: $style['bg'] }">
      <template v-slot:head>
        <FullPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>
      <PageMainText
        :classNames="{
          wrap: 'align-center',
        }"
      >
        간편비밀번호를<br />
        <strong>입력해 주세요</strong>
      </PageMainText>

      <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
      <SecurityInput
        type="password"
        :classNames="{
          wrap: 'row-margin-contents',
        }"
        title="간편비밀번호 6자리"
        :dot="[true, true, true, false, false, false]"
      />
      <FormInvalidMessage
        :classNames="{
          wrap: 'align-center text-body-4  color-red',
        }"
        >간편 비밀번호가 일치하지 않습니다. (1/5)</FormInvalidMessage
      >
    </FullPopup>
  </UiLayer>
</template>
<style lang="scss" module>
@import '@/assets/scss/views/sign/LayerSignLoadPinCertified.scss';
</style>
