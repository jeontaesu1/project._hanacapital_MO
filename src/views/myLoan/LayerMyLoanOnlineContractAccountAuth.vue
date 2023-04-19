<script>
// My_M03_l031
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';

import ImgAccount from '@/assets/images/illustration/img-account.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    PageSubText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,

    ImgAccount,
  },
  setup() {
    const layer = ref(null);
    const state = reactive({
      nameError: false,
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
          김하나 님 계좌로<br />
          <strong>1원을 보냈습니다</strong>
        </PageMainText>
        <PageSubText>
          해당 계좌의 거래내역에서 입금된 1원의 입금자명을 확인 후
          <span class="color-green font-weight-regular"
            >하나캐피탈 뒤 숫자 세자리</span
          >를 입력해 주세요.
        </PageSubText>
      </PageTextGroup>

      <div :class="$style['img-account']"><ImgAccount /></div>

      <FormList class="row-margin-contents-group">
        <FormListItem
          titleText="입금자명"
          target="#layerMyLoanOnlineContractAccountAuthName"
        >
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="입금자명"
                  placeholder="숫자 3자리 입력"
                  id="layerMyLoanOnlineContractAccountAuthName"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div
                  class="color-red text-body-5"
                  :class="$style['input-timer']"
                >
                  5:00
                </div>
              </template>
              <template v-slot:right>
                <BasicButton size="mini" theme="quaternary">
                  재요청
                </BasicButton>
              </template>
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
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>인증</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractAccountAuth.scss';
</style>
