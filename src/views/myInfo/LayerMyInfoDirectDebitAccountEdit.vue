<script>
// MI_M01_l005
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
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BankSelect from '@/components/ui/form/BankSelect.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconLogo from '@/assets/images/icon/hanacapital-small.svg?component';
import IconLink from '@/assets/images/icon/link.svg?component';

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
    FormList,
    FormListItem,
    FormInvalid,
    FormHelpText,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BankSelect,
    NoticeText,
    TextButton,

    IconLogo,
    IconLink,
  },
  setup() {
    const layer = ref(null);
    const state = reactive({
      EditBankError: false,
      domesticAccountError: false,
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
          <strong>
            결제하실 계좌 정보를<br />
            입력하세요
          </strong>
        </PageMainText>
        <PageSubText>
          계좌 변경은 공동인증서 인증을 통해 변경이 가능합니다.
        </PageSubText>
      </PageTextGroup>

      <FormList>
        <!-- Case : 개인 회원일 경우 노출 -->
        <FormListItem titleText="예금주" :disabled="true">
          <InputBlock :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="예금주"
                defaultValue="김하나"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
        </FormListItem>

        <FormListItem titleText="생년월일" :disabled="true">
          <InputBlock :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="생년월일"
                defaultValue="1985.03.05"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
        </FormListItem>
        <!-- // Case : 개인 회원일 경우 노출 -->

        <!-- Case : 법인 회원일 경우 노출 -->
        <FormListItem titleText="예금주" :disabled="true">
          <InputBlock :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="예금주"
                defaultValue="㈜하나캐피탈테스트"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
        </FormListItem>

        <FormListItem titleText="사업자등록번호" :disabled="true">
          <InputBlock :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="사업자등록번호"
                defaultValue="1068659012"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
        </FormListItem>
        <!-- // Case : 법인 회원일 경우 노출 -->
      </FormList>

      <section class="row-margin-container-medium row-margin-bottom-none">
        <h3 class="text-title-2 row-margin-contents">계좌정보</h3>

        <FormList>
          <FormListItem
            titleText="은행"
            target="#layerMyInfoDirectDebitAccountEditBankButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.EditBankError">
              <InputBlock :error="state.EditBankError">
                <InputBlockCell :flexible="true">
                  <BankSelect
                    id="layerMyInfoDirectDebitAccountEditBank"
                    buttonId="layerMyInfoDirectDebitAccountEditBankButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="계좌번호"
            target="#layerMyInfoDirectDebitAccountEditDomesticAccount"
          >
            <FormInvalid :error="state.domesticAccountError">
              <InputBlock :error="state.domesticAccountError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    pattern="\d*"
                    title="계좌번호"
                    id="layerMyInfoDirectDebitAccountEditDomesticAccount"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton size="mini" theme="quaternary">확인</BasicButton>
                </template>
              </InputBlock>
              <FormInvalidMessage>
                계좌번호를 다시 확인해 주세요.
              </FormInvalidMessage>
              <FormHelpText>‘-’ 를 제외하고 입력해주세요.</FormHelpText>
            </FormInvalid>
            <div class="flex-box row-margin-item">
              <div class="flex-box__cell flex-1">
                <NoticeText>보유하고 있는 계좌를 조회하세요.</NoticeText>
              </div>
              <div class="flex-box__cell">
                <TextButton theme="secondary" :underline="true" :block="true">
                  보유계좌조회
                </TextButton>
              </div>
            </div>
          </FormListItem>
        </FormList>
      </section>

      <div :class="$style['join']">
        <div :class="$style['join__inner']">
          <div :class="$style['join__icon']"><IconLogo /></div>
          <div :class="$style['join__title']">하나은행 계좌가 없으신가요?</div>
          <TextButton
            :block="true"
            :classNames="{
              wrap: [$style['join__link'], 'text-body-4 color-gray'],
            }"
          >
            비대면 개설
            <template v-slot:rightIcon>
              <IconLink />
            </template>
          </TextButton>
        </div>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>변경</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myInfo/LayerMyInfoDirectDebitAccountEdit.scss';
</style>
