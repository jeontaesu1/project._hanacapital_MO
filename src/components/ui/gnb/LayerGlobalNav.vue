<script>
// Common_M00_l017
import { ref, watch, provide } from 'vue';
import { useRoute } from 'vue-router';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import GlobalNav from '@/components/ui/gnb/GlobalNav.vue';

import LayerSearch from '@/views/search/LayerSearch.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    GlobalNav,
    LayerSearch,
  },
  setup() {
    const route = useRoute();

    const layer = ref(null);
    const layerSearch = ref(null);

    const layerSearchOpen = (e = {}) => {
      layerSearch.value.layer.open(e.target);
    };

    watch(
      () => route.path,
      () => {
        layer.value.close();
      }
    );

    provide('layerGlobalNav', {
      layer,
    });

    return {
      layer,
      layerSearch,
      layerSearchOpen,
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
          <template v-slot:right>
            <PopupButton type="search" @click="layerSearchOpen" />
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <GlobalNav />
    </FullPopup>
  </UiLayer>

  <LayerSearch ref="layerSearch" />
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/gnb/LayerGlobalNav.scss';
</style>
