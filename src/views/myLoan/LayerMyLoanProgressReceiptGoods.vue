<script>
// PF_M10_l001
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
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

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
    BasicButton,
    ButtonList,
    ButtonListItem,
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
          하나캐피탈 <span class="color-green">물품수령확인</span>을 위해<br />
          <strong>이름을 입력해 주세요</strong>
        </PageMainText>
        <!-- DD : 이름 입력 및 다음 버튼 누른 후 노출 -->
        <PageMainText>
          하나캐피탈 <span class="color-green">물품수령확인</span>을 위해<br />
          <strong>생년월일을 입력해 주세요</strong>
        </PageMainText>
        <!-- // DD : 이름 입력 및 다음 버튼 누른 후 노출 -->
      </PageTextGroup>

      <FormList>
        <!-- DD : 이름 입력 및 다음 버튼 누른 후 노출 -->
        <FormListItem
          titleText="생년월일"
          titleOptionalText="(6자리)"
          target="#layerMyLoanProgressReceiptGoodsBirthDate"
        >
          <FormInvalid :error="state.birthDateError">
            <InputBlock :error="state.birthDateError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="layerMyLoanProgressReceiptGoodsBirthDate"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // DD : 이름 입력 및 다음 버튼 누른 후 노출 -->

        <FormListItem
          titleText="이름"
          target="#layerMyLoanProgressReceiptGoodsName"
        >
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이름"
                  id="layerMyLoanProgressReceiptGoodsName"
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
          <ButtonListItem>
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
