<script>
import { ref, reactive } from 'vue';

import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

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
    BasicInput,
    FormInvalidMessage,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const state = reactive({
      nameError: false,
      idNumberError: false,
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
          <strong>아이디를</strong><br />
          입력해주세요
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem titleText="아이디" target="#LayerSignResetPasswordIdName">
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput title="아이디" id="LayerSignResetPasswordIdName" />
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
          <ButtonListItem>
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
