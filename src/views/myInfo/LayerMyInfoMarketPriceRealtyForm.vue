<script>
// MI_M01_l018
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    PopupTitle,
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
          <PopupTitle>부동산 검색</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <!-- DD : 검색 전 노출 -->
      <PageTextGroup>
        <PageMainText>
          부동산 주소를 입력하고<br />
          <strong>시세를 확인해 보세요</strong>
        </PageMainText>
      </PageTextGroup>
      <!-- // DD : 검색 전 노출 -->

      <div>
        <InputBlock type="search">
          <InputBlockCell :flexible="true">
            <BasicInput
              type="search"
              title="아파트 검색어"
              placeholder="동(읍/면) 또는 아파트 이름 입력"
            />
          </InputBlockCell>
          <InputBlockCell type="search">
            <SearchButton />
          </InputBlockCell>
        </InputBlock>

        <!-- Case : 검색 후 미노출 -->
        <ul :class="[$style['basic-list'], 'row-margin-contents']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              아파트/오피스텔만 확인할 수 있습니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              부동산 정보는 매월 업데이트되고 있습니다.
            </div>
          </li>
        </ul>
        <!-- // Case : 검색 후 미노출 -->
      </div>

      <!-- DD : 검색 후 노출 -->

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
              서울특별시 강남구 <mark>역삼동</mark> 역삼<mark>자이</mark>
            </span>
          </button>
        </li>
        <li :class="$style['search-list__item']">
          <button type="button" :class="$style['search-list__link']">
            <span :class="$style['search-list__text']">
              서울특별시 강남구 <mark>역삼동</mark> 자자<mark>자이</mark>
            </span>
          </button>
        </li>
        <li :class="$style['search-list__item']">
          <button type="button" :class="$style['search-list__link']">
            <span :class="$style['search-list__text']">
              서울특별시 강남구 <mark>역삼동</mark> 자자<mark>리톨</mark>
            </span>
          </button>
        </li>
      </ul>
      <!-- // Case : 결과 있을 때 -->

      <!-- // DD : 검색 후 노출 -->
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myInfo/LayerMyInfoMarketPriceRealtyForm.scss';
</style>
