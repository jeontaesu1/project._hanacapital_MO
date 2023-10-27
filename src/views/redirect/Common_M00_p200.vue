<script>
// Common_M00_p200
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
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
  <UiLayer ref="layer" type="full">
    <FullPopup bottom="secondary">
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle></PopupTitle>
        </FullPopupHead>
      </template>

      <div :class="[$style['image-view'], $style['image-view--img-full']]">
        <img src="@/assets/images/_dummy/img-app-page.png" alt="샘플 이미지" />
      </div>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/redirect/Common_M00_p200.scss';
</style>
