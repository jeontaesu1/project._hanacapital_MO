<script>
// Common_M00_l034

import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import AlertPopup from '@/components/ui/layer/AlertPopup.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconLogo from '@/assets/images/icon/logo_main.svg?component';
import IconWaiting from '@/assets/images/icon/waiting.svg?component';

export default {
  components: {
    UiLayer,
    AlertPopup,
    BasicHr,

    IconLogo,
    IconWaiting,
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
  <UiLayer ref="layer" type="alert" v-slot="layerSlotProps">
    <AlertPopup>
      <div :class="$style['connection']">
        <div :class="$style['connection__logo']"><IconLogo /></div>
        <div :class="$style['connection__image']"><IconWaiting /></div>
        <p
          class="row-margin-item color-gray-secondary text-body-3 row-margin-bottom-none"
        >
          대기인원
        </p>
        <div class="row-margin-mini">
          <span :class="$style['connection__number']">222</span>
          <span :class="$style['connection__count']">명</span>
        </div>
        <BasicHr
          theme="quaternary"
          type="contents"
          className="row-margin-contents"
        />
        <p :class="$style['connection__title']">서비스 접속 대기중 입니다</p>
        <p :class="$style['connection__text']">
          잠시만 기다리시면<br />서비스로 자동 접속됩니다.
        </p>
      </div>
    </AlertPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/guide/Common_M00_l034.scss';
</style>
