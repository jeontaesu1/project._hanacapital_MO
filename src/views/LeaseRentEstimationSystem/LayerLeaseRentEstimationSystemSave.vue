<script>
// LR_M00_l006
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicTextarea from '@/components/ui/form/BasicTextarea.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormHelpText,
    BasicTextarea,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const state = reactive({
      nameError: false,
      titleError: false,
      commentError: false,
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
          <PopupTitle>견적 저장</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <FormList>
        <FormListItem
          titleText="고객명"
          titleOptionalText="(10자 이하)"
          target="#layerLeaseRentEstimationSystemSaveName"
        >
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="고객명"
                  id="layerLeaseRentEstimationSystemSaveName"
                  align="right"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-3">님 귀중</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="견적 제목"
          titleOptionalText="(20자 이하)"
          target="#layerLeaseRentEstimationSystemSaveTitle"
        >
          <FormInvalid :error="state.titleError">
            <InputBlock :error="state.titleError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="고객명"
                  id="layerLeaseRentEstimationSystemSaveTitle"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>
              견적을 구분할 수 있는 간단한 문구를 입력해 주세요.
            </FormHelpText>
          </FormInvalid>
        </FormListItem>

        <BasicTextarea
          :error="state.commentError"
          titleText="상담기록"
          title="상담기록"
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
            <BasicButton>저장하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
