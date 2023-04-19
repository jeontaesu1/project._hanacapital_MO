<script>
// AF_M07_l015
import { ref, reactive } from 'vue';

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
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

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
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const layer = ref(null);
    const state = reactive({
      nameError: false,
      birthDateError: false,
    });
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
          승계 업무 진행을 위해<br />
          <strong>본인확인을 진행해주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <!--  DD : 이름 입력 후 다음 버튼 클릭시 노출 / 생년월일 입력전 하단 다음 버튼 비노출 -->
      <FormList>
        <FormListItem
          titleText="생년월일"
          titleOptionalText="(6자리)"
          target="#layerAutoSuccessionAssigneeIdentificationBirthDate"
        >
          <FormInvalid :error="state.birthDateError">
            <InputBlock :error="state.birthDateError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="생년월일"
                  id="layerAutoSuccessionAssigneeIdentificationBirthDate"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // DD : 이름 입력 후 다음 버튼 클릭시 노출 / 생년월일 입력전 하단 다음 버튼 비노출 -->

        <FormListItem
          titleText="이름"
          target="#layerAutoSuccessionAssigneeIdentificationName"
        >
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이름"
                  id="layerAutoSuccessionAssigneeIdentificationName"
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
          <!-- DD : 이름, 생년월일 각 폼 입력 시에만 다음버튼 노출 -->
          <ButtonListItem>
            <BasicButton theme="secondary">다음</BasicButton>
          </ButtonListItem>
          <!-- // DD : 이름, 생년월일 각 폼 입력 시에만 다음버튼 노출 -->
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
