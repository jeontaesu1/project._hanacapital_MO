<script>
// BF_M04_l013
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import { ref, reactive } from 'vue';

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
      birthDateError: false,
      nameError: false,
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
          하나캐피탈 <span class="color-green">중도금 대출 승계</span><br />
          모바일 약정을 위하여<br />
          <!-- Case : 기본 -->
          <strong>이름을 입력해 주세요</strong>
          <!-- // Case : 기본 -->
          <br />
          <!-- Case : 생년월일 입력 시 -->
          <strong>생년월일을 입력해주세요</strong>
          <!-- // Case : 생년월일 입력 시 -->
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <!-- Case : 생년월일 입력 시 -->
        <FormListItem
          titleText="생년월일"
          titleOptionalText="(6자리)"
          target="#layerMyLoanOnlineContractIntermediateSuccessionIdentificationBirthDate"
        >
          <FormInvalid :error="state.birthDateError">
            <InputBlock :error="state.birthDateError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="생년월일 (6자리)"
                  id="layerMyLoanOnlineContractIntermediateSuccessionIdentificationBirthDate"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : 생년월일 입력 시 -->

        <!-- Case : 기본 -->
        <FormListItem
          titleText="이름"
          target="#layerMyLoanOnlineContractIntermediateSuccessionIdentificationName"
        >
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이름"
                  id="layerMyLoanOnlineContractIntermediateSuccessionIdentificationName"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : 기본 -->
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
