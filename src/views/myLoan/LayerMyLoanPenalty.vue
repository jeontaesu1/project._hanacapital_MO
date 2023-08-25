<script>
// My_M01_p006
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';

import LayerMyLoanPenaltyDetail from '@/views/myLoan/LayerMyLoanPenaltyDetail.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicButton,
    BasicHr,
    BasicDatepicker,
    LayerMyLoanPenaltyDetail,
  },
  setup() {
    const state = reactive({
      dateError: false,
      minDate: '2023.04.21',
      maxDate: '2023.04.21',
    });

    const layer = ref(null);
    const layer001 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };

    return {
      state,
      layer,
      layer001,
      layer001Open,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>범칙금</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div>
        <FormList>
          <FormListItem
            titleText="조회기간 선택"
            target="#layerMyLoanPenaltyDateStartButton"
          >
            <FormInvalid :error="state.dateError">
              <InputBlock :error="state.dateError">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="조회기간 시작 날짜"
                    id="layerMyLoanPenaltyDateStart"
                    buttonId="layerMyLoanPenaltyDateStartButton"
                    :max="state.maxDate"
                    v-model="state.minDate"
                  />
                </InputBlockCell>
                <InputBlockCell margin="regular">
                  <div class="text-body-3">~</div>
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicDatepicker
                    title="조회기간 종료 날짜"
                    id="layerMyLoanPenaltyDateEnd"
                    buttonId="layerMyLoanPenaltyDateEndButton"
                    :min="state.minDate"
                    v-model="state.maxDate"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <div class="row-margin-contents-group">
          <BasicButton :line="true">조회</BasicButton>
        </div>
      </div>

      <BasicHr className="row-margin-container-medium" />

      <!-- Case : 조회 결과 없을 때 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">조회 결과가 없습니다.</p>
      </div>
      <!-- // Case : 조회 결과 없을 때 -->

      <!-- Case : 조회 결과 있을 때 -->
      <ul :class="[$style['logs'], $style['logs--margin-regular']]">
        <li v-for="i in 4" :key="i" :class="$style['logs__item']">
          <div :class="$style['logs__block']">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 :class="$style['logs__title']">
                  어린이 보호구역 과속 및 신호위반 관련 과태료 청구
                </h3>
                <KeyValue align="left" size="regular" margin="mini">
                  <KeyValueItem :classNames="{ item: 'text-body-4' }">
                    <KeyValueTitle>위반일시</KeyValueTitle>
                    <KeyValueText>2021.08.04 12:22</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem :classNames="{ item: 'text-body-4' }">
                    <KeyValueTitle>과세금액</KeyValueTitle>
                    <KeyValueText>29,000 원</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
              <div :class="$style['logs__right']">
                <button
                  type="button"
                  :class="$style['logs__link']"
                  @click="layer001Open"
                >
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!-- // Case : 조회 결과 있을 때 -->
    </FullPopup>
  </UiLayer>

  <LayerMyLoanPenaltyDetail ref="layer001" />
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanPenalty.scss';
</style>
