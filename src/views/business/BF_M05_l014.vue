<script>
// BF_M05_l014
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';

import IconMedical from '@/assets/images/icon/medical.svg?component';
import IconGolf from '@/assets/images/icon/golf.svg?component';
import IconGeHealthcare from '@/assets/images/icon/ge-healthcare.svg?component';

export default {
  components: {
    UiLayer,
    PageTextGroup,
    PageMainText,
    FullPopup,
    FullPopupHead,
    PopupButton,
    IconMedical,
    IconGolf,
    IconGeHealthcare,
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

      <PageTextGroup>
        <PageMainText>
          일반리스 상품을<br />
          <strong>선택해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <div :class="$style['icon-list']">
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconMedical /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__title']">의료기</span>
              </span>
            </button>
          </li>
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconGolf /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__title']">스크린골프</span>
              </span>
            </button>
          </li>
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']">
                <IconGeHealthcare />
              </span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__title']">GE헬스케어</span>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/business/BF_M05_l014.scss';
</style>
