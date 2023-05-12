<script>
// AF_M00_b001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
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
        <FullPopupHead
          :classNames="{
            wrap: $style['head'],
            left: $style['head__left'],
            center: $style['head__center'],
            right: $style['head__right'],
          }"
        >
          <template v-slot:left>
            <PopupButton type="back" @click="layerSlotProps.close()" />
          </template>
          <BasicInput
            type="search"
            title="검색어"
            placeholder="자동차명으로 검색"
            :classNames="{
              wrap: $style['head__form'],
              input: $style['head__input'],
            }"
          />
          <template v-slot:right>
            <SearchButton />
          </template>
        </FullPopupHead>
      </template>

      <!-- Case : 검색 전 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">차량명을 입력해 주세요.</p>
      </div>
      <!-- // Case : 검색 전 -->

      <!-- Case : 검색 결과 없을 때 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">
          검색결과가 없습니다.<br /><br />
          자동차명이 정확히 기억이 안나신다면 일부분만 입력하여 검색해보세요.<br />
          (아반떼 → 아반)
        </p>
      </div>
      <!-- // Case : 검색 결과 없을 때 -->

      <!-- Case : 자동 완성 -->
      <ul
        :class="[$style['search-list'], $style['search-list--margin-regular']]"
      >
        <li :class="$style['search-list__item']">
          <button type="button" :class="$style['search-list__link']">
            <span :class="$style['search-list__text']">
              <mark>K</mark>5 2020
            </span>
          </button>
        </li>
        <li :class="$style['search-list__item']">
          <button type="button" :class="$style['search-list__link']">
            <span :class="$style['search-list__text']">
              <mark>K</mark>5 2021
            </span>
          </button>
        </li>
        <li :class="$style['search-list__item']">
          <button type="button" :class="$style['search-list__link']">
            <span :class="$style['search-list__text']">
              <mark>K</mark>5 2021
            </span>
          </button>
        </li>
        <li :class="$style['search-list__item']">
          <button type="button" :class="$style['search-list__link']">
            <span :class="$style['search-list__text']">
              <mark>K</mark>7 2023 하이브리드
            </span>
          </button>
        </li>
      </ul>
      <!-- // Case : 자동 완성 -->

      <!-- Case : 검색 결과 있을 때 -->
      <div class="row-margin-contents">// 라디오 선택 UI</div>
      <!-- // Case : 검색 결과 있을 때 -->
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoEstimateSearchCar.scss';
</style>
