<script>
// Common_M00_l017
import { ref, watch, provide } from 'vue';
import { useRoute } from 'vue-router';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import DA_Nav from '@/components/ui/gnb/DA_Nav.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    DA_Nav,
  },
  setup() {
    const route = useRoute();

    const layer = ref(null);

    watch(
      () => route.path,
      () => {
        layer.value.close();
      }
    );

    provide('LayerGlobalNavDA', {
      layer,
    });

    return {
      layer,
    };
  },
};
</script>

<template>
  <UiLayer
    ref="layer"
    type="full"
    v-slot="layerSlotProps"
    :classNames="{
      wrap: $style['gnb-layer'],
    }"
  >
    <FullPopup
      :classNames="{
        wrap: [
          $style['gnb'],
          {
            [$style['gnb--opened']]: layerSlotProps.opened,
          },
        ],
      }"
    >
      <template v-slot:head>
        <FullPopupHead>
          메뉴
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <DA_Nav />
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/gnb/LayerGlobalNav.scss';
</style>
