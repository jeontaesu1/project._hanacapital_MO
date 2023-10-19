<script>
// Common_M00_p007
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconPlayStore from '@/assets/images/icon/playstore.svg?component';
import IconAppStore from '@/assets/images/icon/appstore.svg?component';
import IconLogo from '@/assets/images/icon/hanacapital-small.svg?component';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    IllustObject,
    BasicHr,
    IconPlayStore,
    IconAppStore,
    IconLogo,
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
          하나캐피탈 앱으로<br />
          이동합니다
        </PageMainText>
      </PageTextGroup>

      <IllustObject />

      <BasicHr
        theme="quaternary"
        type="contents"
        className="row-margin-container"
      />

      <div :class="$style['icon-list']">
        <ul :class="$style['icon-list__list']">
          <!-- Case : Android -->
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconPlayStore /></span>
              <span :class="$style['icon-list__content']">
                <span class="color-gray display-block"
                  >아직 앱이 없으시다면</span
                >
                <span :class="$style['icon-list__title']"
                  >Google Play로 이동</span
                >
              </span>
            </button>
          </li>
          <!-- // Case : Android -->

          <!-- Case : IOS -->
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconAppStore /></span>
              <span :class="$style['icon-list__content']">
                <span class="color-gray display-block"
                  >아직 앱이 없으시다면</span
                >
                <span :class="$style['icon-list__title']"
                  >App Store로 이동</span
                >
              </span>
            </button>
          </li>
          <!-- // Case : IOS -->

          <li
            :class="[$style['icon-list__item'], $style['icon-list__item_last']]"
          >
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconLogo /></span>
              <span :class="$style['icon-list__content']">
                <span class="color-gray display-block">앱을 설치하셨다면</span>
                <span :class="$style['icon-list__title']">
                  하나캐피탈 앱으로 이동
                </span>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/redirect/Common_M00_p007.scss';
</style>
