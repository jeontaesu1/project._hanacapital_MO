<script>
// My_M01_p007
import { ref, reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
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
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';

import LayerMyLoanCarTaxDetail from '@/views/myLoan/LayerMyLoanCarTaxDetail.vue';

export default {
  components: {
    PageContents,
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
    BasicHr,
    BasicDatepicker,
    LayerMyLoanCarTaxDetail,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      dateError: false,
      minDate: '2023.04.21',
      maxDate: '2023.04.21',
    });

    const layer = ref(null);

    const layerOpen = (e = {}) => {
      layer.value.layer.open(e.target);
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '자동차세');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      state,
      layer,
      layerOpen,
    };
  },
};
</script>

<template>
  <PageContents>
    <div>
      <FormList>
        <FormListItem
          titleText="조회기간 선택"
          target="#myLoanCarTaxDateStartButton"
        >
          <FormInvalid :error="state.dateError">
            <InputBlock :error="state.dateError">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="조회기간 시작 날짜"
                  id="myLoanCarTaxDateStart"
                  buttonId="myLoanCarTaxDateStartButton"
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
                  id="myLoanCarTaxDateEnd"
                  buttonId="myLoanCarTaxDateEndButton"
                  :min="state.minDate"
                  v-model="state.maxDate"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>
    </div>

    <BasicHr className="row-margin-container-medium" />

    <!-- Case : 조회 결과 없을 때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">조회 결과가 없습니다.</p>
    </div>
    <!-- // Case : 조회 결과 없을 때 -->

    <!-- Case : 조회 결과 있을 때 -->
    <ul :class="$style['logs']">
      <li v-for="i in 4" :key="i" :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <KeyValue align="left" size="regular" margin="mini">
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>납부기한</KeyValueTitle>
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
                @click="layerOpen"
              >
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <!-- // Case : 조회 결과 있을 때 -->

    <LayerMyLoanCarTaxDetail ref="layer" />
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/MyLoanCarTax.scss';
</style>
