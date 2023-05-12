<script>
// AF_M00_b003
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
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
  <UiLayer ref="layer" type="toast" :backgroundClose="true">
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>세부모델을 선택해 주세요</PopupTitle>
        </ToastPopupHead>
      </template>

      <div :class="$style['icon-buttons']">
        <ul :class="$style['icon-buttons__list']">
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']"
                  >모던 + 캐스퍼 액티브Ⅰ</span
                >
                <span
                  class="text-body-3 font-weight-light color-gray-tertiary row-margin-mini"
                  >16,800,000원</span
                >
              </span>
            </button>
          </li>
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']"
                  >스마트 + 캐스퍼 액티브Ⅰ</span
                >
                <span
                  class="text-body-3 font-weight-light color-gray-tertiary row-margin-mini"
                  >16,800,000원</span
                >
              </span>
            </button>
          </li>
          <li :class="$style['icon-buttons__item']">
            <button type="button" :class="$style['icon-buttons__block']">
              <span :class="$style['icon-buttons__content']">
                <span :class="$style['icon-buttons__title']"
                  >인스퍼레이션 + 캐스퍼 액티브Ⅰ</span
                >
                <span
                  class="text-body-3 font-weight-light color-gray-tertiary row-margin-mini"
                  >16,800,000원</span
                >
              </span>
            </button>
          </li>
        </ul>
      </div>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoEstimateSelectTrim.scss';
</style>
