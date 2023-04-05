<script>
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
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
    FormInvalidMessage,
    FormHelpText,
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
    <FullPopup bg="navy">
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
        >간편비밀번호<br />
        <strong>6자리를 설정해 주세요</strong>
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
      <!-- DD : 입력 오류시 문구 노출 -->
      <FormInvalidMessage
        :classNames="{
          wrap: 'align-center text-body-4',
        }"
        >동일 숫자 3개, 연속된 3자리 숫자,<br />
        생년월일 숫자를 사용할 수 없습니다.
      </FormInvalidMessage>
      <!-- //DD : 입력 오류시 문구 노출 -->
      <FormHelpText
        :classNames="{
          wrap: 'align-center text-body-4',
        }"
      >
        동일 숫자, 연속 숫자, 개인정보 관련 숫자는<br />
        등록이 제한됩니다.
      </FormHelpText>
    </FullPopup>
  </UiLayer>
</template>
