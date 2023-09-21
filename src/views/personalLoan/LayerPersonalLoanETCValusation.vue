<script>
// PF_M11_l005
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
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

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
    BasicBox,
    ButtonListItem,
    ButtonList,
    FormHelpText,
    TextButton,
    NoticeText,
  },
  setup() {
    const state = reactive({
      amountError: false,
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
          아파트에<br />
          부동산 설정 금액이 있나요?
        </PageMainText>
      </PageTextGroup>

      <BasicBox>
        <p class="text-body-3">
          인천광역시 연수구 송도동 39-1<br />
          더샵 랜드마크시티 [158.67/134.3㎡]
        </p>
      </BasicBox>

      <FormList :classNames="{ wrap: 'row-margin-contents' }">
        <FormListItem
          titleText="부동산 설정금액"
          titleOptionalText="(선택)"
          target="#layerPersonalLoanETCValusationAmount"
        >
          <FormInvalid :error="state.amountError">
            <InputBlock :error="state.amountError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  align="right"
                  :useDelete="false"
                  pattern="\d*"
                  title="부동산 설정금액"
                  id="layerPersonalLoanETCValusationAmount"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-3">만원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>

            <!-- Case : 값 입력후 노출 -->
            <FormHelpText
              :classNames="{
                wrap: 'align-right',
              }"
            >
              구천만원
            </FormHelpText>
            <!-- // Case : 값 입력후 노출 -->

            <div class="flex-box align-items-start row-margin-item">
              <div class="flex-box__cell flex-1">
                <NoticeText>
                  등기부등본 상의 채권최고액을 입력해주세요. (근저당설정이 2건
                  이상일 경우 합산하여 입력)
                </NoticeText>
              </div>
              <div class="flex-box__cell flex-box__cell--medium">
                <TextButton theme="secondary" :underline="true" :block="true">
                  등기부등본 조회
                </TextButton>
              </div>
            </div>
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
            <BasicButton>획인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
