<script>
// AF_M00_l015
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import DocumentView from '@/components/ui/viewer/DocumentView.vue';

import DocumentEstimate001Contents from '@/views/document/DocumentEstimate001Contents.vue';

import dummyDataEstimate from '@/assets/_dummyData/견적서asis/견적서HTML샘플(렌트_장기렌트).html?raw';

export default {
  components: {
    UiLayer,
    PopupTitle,
    FullPopup,
    FullPopupHead,
    PopupButton,
    ButtonList,
    ButtonListItem,
    BasicButton,
    DocumentView,
    DocumentEstimate001Contents,
  },
  setup() {
    const layer = ref(null);

    return {
      dummyDataEstimate,
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
          <PopupTitle>장기렌트 견적서</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div v-if="layerSlotProps.display !== 'none'">
        <!-- Case : AS-IS -->
        <DocumentView>
          <article
            :class="$style['document']"
            v-html="dummyDataEstimate"
          ></article>
        </DocumentView>
        <!-- // Case : AS-IS -->

        <!-- Case : TO-BE -->
        <DocumentView>
          <DocumentEstimate001Contents />
        </DocumentView>
        <!-- // Case : TO-BE -->
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>저장</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoEstimateView.scss';
</style>
