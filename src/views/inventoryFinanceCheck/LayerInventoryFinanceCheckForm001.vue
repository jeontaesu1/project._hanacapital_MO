<script>
// IF_M11_l001
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicTextarea from '@/components/ui/form/BasicTextarea.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicBox,
    FormList,
    FormInvalidMessage,
    BasicTextarea,
  },
  setup() {
    const state = reactive({
      reasonError: false,
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
          <PopupTitle>미실사정보입력</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <BasicBox theme="senary">
        <h3 class="text-body-1 font-weight-medium">180주8300</h3>
        <p class="text-body-4 color-gray row-margin-small">
          K5 하이브리드(DL3) 노블레스
        </p>
      </BasicBox>

      <FormList :classNames="{ wrap: 'row-margin-contents-group' }">
        <BasicTextarea
          :error="state.reasonError"
          titleText="미실사 사유"
          title="미실사 사유"
        >
          <template v-slot:bottom>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </template>
        </BasicTextarea>
      </FormList>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>저장</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
