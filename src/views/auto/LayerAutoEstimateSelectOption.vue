<script>
// AF_M00_l005
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
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import RoundButton from '@/components/ui/button/RoundButton.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
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
    PageSubText,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
    BoxCheckList,
    BoxCheckListItem,
    RoundButton,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UnitText,
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
      optionNameError: false,
      optionPriceError: false,
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

      <div :class="$style['car-info']">
        <div :class="$style['car-info__inner']">
          <div>
            <div class="text-body-4 font-weight-light">현대</div>
            <h3 class="text-body-1 font-weight-medium row-margin-mini">
              캐스퍼
            </h3>
            <div class="text-body-4 color-gray row-margin-small">
              인스퍼레이션 + 캐스퍼 액티브Ⅱ
            </div>
          </div>
        </div>
      </div>

      <PageTextGroup>
        <PageMainText>
          자동차 옵션을<br />
          <strong>선택해 주세요</strong>
        </PageMainText>
        <PageSubText>옵션은 선택하지 않으셔도 됩니다.</PageSubText>
      </PageTextGroup>

      <BoxCheckList align="full">
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            id="layerAutoEstimateSelectOption001"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>
              <span class="flex-box">
                <span class="flex-box__cell flex-1">스토리지</span>
                <span class="flex-box__cell flex-box__cell--regular">
                  + 70,000 원
                </span>
              </span>
            </BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            id="layerAutoEstimateSelectOption002"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>
              <span class="flex-box">
                <span class="flex-box__cell flex-1">액티비 플러스</span>
                <span class="flex-box__cell flex-box__cell--regular">
                  + 500,000 원
                </span>
              </span>
            </BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            id="layerAutoEstimateSelectOption003"
            ><template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>
              <span class="flex-box">
                <span class="flex-box__cell flex-1">선루프</span>
                <span class="flex-box__cell flex-box__cell--regular">
                  + 400,000 원
                </span>
              </span>
            </BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            id="layerAutoEstimateSelectOption004"
            ><template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>
              <span class="flex-box">
                <span class="flex-box__cell flex-1">기타옵션</span>
                <span class="flex-box__cell flex-box__cell--regular">
                  + 0 원
                </span>
              </span>
            </BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>

      <!-- Case : 기타옵션 선택 시 -->
      <FormList :classNames="{ wrap: 'row-margin-contents' }">
        <FormListItem
          titleText="옵션명"
          :forceFocus="true"
          target="#layerAutoEstimateSelectOptionName"
        >
          <FormInvalid :error="state.optionNameError">
            <InputBlock :error="state.optionNameError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="옵션명 입력"
                  placeholder="옵션명을 입력해 주세요"
                  id="layerAutoEstimateSelectOptionName"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="옵션금액"
          :forceFocus="true"
          target="#layerAutoEstimateSelectOptionPrice"
        >
          <FormInvalid :error="state.optionPriceError">
            <InputBlock :error="state.optionPriceError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="옵션금액 입력"
                  placeholder="옵션금액을 입력해 주세요"
                  id="layerAutoEstimateSelectOptionPrice"
                  pattern="\d*"
                  :useDelete="false"
                  align="right"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-3">원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>

            <!-- Case : 입력 후 노출 -->
            <FormHelpText :classNames="{ wrap: 'align-right' }">
              이백만원
            </FormHelpText>
            <!-- //Case : 입력 후 노출 -->
          </FormInvalid>
        </FormListItem>
      </FormList>
      <!-- //Case : 기타옵션 선택 시 -->

      <template v-slot:foot>
        <KeyValue verticalAlign="center">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle :classNames="{ title: 'color-black' }">
              총 차량가격
            </KeyValueTitle>
            <KeyValueText>
              <UnitText rightUnit="원" align="right"
                ><strong>16,920,000</strong></UnitText
              >
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <ButtonList
          :classNames="{
            wrap: 'row-margin-contents-small',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoEstimateSelectOption.scss';
</style>
