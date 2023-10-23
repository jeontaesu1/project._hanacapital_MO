<script>
// AF_M00_l011
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import RoundButton from '@/components/ui/button/RoundButton.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';

import IconTell from '@/assets/images/icon/tell.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
    RoundButton,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    InputBlock,
    InputBlockCell,
    IconTell,
  },
  setup() {
    const state = reactive({
      businessNameError: false,
      businessNumberError: false,
      dateError: false,
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
            <div class="flex-box">
              <div class="flex-box__cell">
                <RoundButton tagName="a" href="tel:1800-1110">
                  <template v-slot:leftIcon>
                    <IconTell />
                  </template>
                  상담원 연결
                </RoundButton>
              </div>
              <div class="flex-box__cell flex-box__cell--regular">
                <PopupButton @click="layerSlotProps.close()" />
              </div>
            </div>
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          상담 안내를 위한<br />
          사업자 정보를 입력해주세요.
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem
          titleText="사업자번호"
          target="#layerAutoEstimateBusinessInfoBusinessNumber"
          :class="$style['appoint-wrap']"
        >
          <FormInvalid :error="state.businessNumberError">
            <InputBlock :error="state.businessNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="사업자번호 입력"
                  id="layerAutoEstimateBusinessInfoBusinessNumber"
                />
              </InputBlockCell>
              <template v-slot:right>
                <!-- Case : 사업자번호 조회 후 비노출 -->
                <BasicButton
                  size="mini"
                  theme="tertiary"
                  inline="true"
                  :class="$style['appoint-btn']"
                  >조회</BasicButton
                >
                <!-- // Case : 사업자번호 조회 후 비노출 -->

                <!-- Case : 사업자번호 조회 후 노출 -->
                <BasicButton
                  size="mini"
                  theme="quaternary"
                  inline="true"
                  :class="$style['appoint-btn']"
                >
                  초기화
                </BasicButton>
                <!-- // Case : 사업자번호 조회 후 노출 -->
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="사업자명"
          target="#layerAutoEstimateBusinessInfoBusinessManName"
        >
          <FormInvalid :error="state.businessNameError">
            <InputBlock :error="state.businessNameError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="사업자명 입력"
                  id="layerAutoEstimateBusinessInfoBusinessManName"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="설립일자"
          target="#layerAutoEstimateBusinessInfoDate"
        >
          <FormInvalid :error="state.dateError">
            <InputBlock :error="state.dateError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="설립일자"
                  id="layerAutoEstimateBusinessInfoDate"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>숫자만 입력해 주세요. (예:19900123)</FormHelpText>
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
            <BasicButton>완료</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoEstimateBusinessInfo.scss';
</style>
