<script>
// LR_M00_l012
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    BasicHr,
    InputBlock,
    InputBlockCell,
    BasicInput,
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
          <PopupTitle>판매점 조회</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <InputBlock>
        <InputBlockCell :flexible="true">
          <BasicInput
            type="search"
            title="판매점 조회 검색어"
            placeholder="검색어 입력"
          />
        </InputBlockCell>
        <InputBlockCell type="search">
          <SearchButton />
        </InputBlockCell>
      </InputBlock>

      <!-- Case : 검색 후 노출 -->

      <BasicHr className="row-margin-container-medium" />

      <!-- Case : 결과 없을 때 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
      </div>
      <!-- Case : 결과 없을 때 -->

      <!-- Case : 결과 있을 때 -->
      <ul :class="$style['search-list']">
        <li :class="$style['search-list__item']">
          <button type="button" :class="$style['search-list__link']">
            <span :class="$style['search-list__text']">
              <mark>오토</mark>큐브㈜일산몰
            </span>
          </button>
        </li>
        <li :class="$style['search-list__item']">
          <button type="button" :class="$style['search-list__link']">
            <span :class="$style['search-list__text']">
              <mark>오토</mark>큐브㈜일산몰
            </span>
          </button>
        </li>
        <li :class="$style['search-list__item']">
          <button type="button" :class="$style['search-list__link']">
            <span :class="$style['search-list__text']">
              <mark>오토</mark>큐브㈜일산몰
            </span>
          </button>
        </li>
        <li :class="$style['search-list__item']">
          <button type="button" :class="$style['search-list__link']">
            <span :class="$style['search-list__text']">
              <mark>오토</mark>큐브㈜일산몰
            </span>
          </button>
        </li>
        <li :class="$style['search-list__item']">
          <button type="button" :class="$style['search-list__link']">
            <span :class="$style['search-list__text']">
              <mark>오토</mark>큐브㈜일산몰
            </span>
          </button>
        </li>
        <li :class="$style['search-list__item']">
          <button type="button" :class="$style['search-list__link']">
            <span :class="$style['search-list__text']">
              <mark>오토</mark>큐브㈜일산몰
            </span>
          </button>
        </li>
        <li :class="$style['search-list__item']">
          <button type="button" :class="$style['search-list__link']">
            <span :class="$style['search-list__text']">
              <mark>오토</mark>큐브㈜일산몰
            </span>
          </button>
        </li>
      </ul>
      <!-- // Case : 결과 있을 때 -->

      <!-- // Case : 검색 후 노출 -->
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemSearchStore.scss';
</style>
