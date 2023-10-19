<script>
// Common_M00_p100
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconStore from '@/assets/images/icon/store.svg?component';
import IconLogo from '@/assets/images/icon/hanacapital-small.svg?component';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PageTextGroup,
    PageMainText,
    IllustObject,
    BasicHr,
    IconStore,
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
  <UiLayer ref="layer" type="full">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>하나캐피탈</PopupTitle>
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
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconStore /></span>
              <span :class="$style['icon-list__content']">
                <span class="color-gray display-block"
                  >아직 앱이 없으시다면</span
                >
                <span :class="$style['icon-list__title']">스토어로 이동</span>
              </span>
            </button>
          </li>

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
@import '@/assets/scss/views/redirect/Common_M00_p100.scss';
</style>
