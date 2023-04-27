<script>
// PF_M10_l009
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicHr,
    SearchButton,
  },
  setup() {
    const layer = ref(null);

    return {
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

      <InputBlock type="search">
        <InputBlockCell :flexible="true">
          <BasicInput
            type="search"
            title="검색할 품목명 입력"
            placeholder="검색할 품목명을 입력하세요"
          />
        </InputBlockCell>
        <InputBlockCell type="search">
          <SearchButton />
        </InputBlockCell>
      </InputBlock>

      <!-- Case : 검색 후 노출 -->

      <BasicHr className="row-margin-container-medium" />

      <!-- Case : 검색 결과 없을 때 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">조회된 내용이 없습니다.</p>
      </div>
      <!-- // Case : 검색 결과 없을 때 -->

      <!-- Case : 검색 결과 있을 때 -->
      <div :class="$style['board']">
        <ul :class="$style['board__list']">
          <li v-for="i in 3" :key="i" :class="$style['board__item']">
            <button type="button" :class="$style['board__link']">
              <span :class="$style['board__title']">
                <span :class="$style['board__title-text']">LED전광판</span>
              </span>
              <span :class="$style['board__text']">㈜삼성애드</span>
            </button>
          </li>
        </ul>
      </div>
      <!-- // Case : 검색 결과 있을 때 -->

      <!-- // Case : 검색 후 노출 -->
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanProgressInstallmentConsultationSearch.scss';
</style>
