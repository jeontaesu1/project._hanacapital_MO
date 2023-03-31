<script>
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';

import IllustObject from '@/components/ui/common/IllustObject.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    IllustObject,
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
        <FullPopupHead></FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          얼굴을<br />
          <strong>인식시켜 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <IllustObject />

      <a href="/" target="_blank" :class="$style['text-underline']"
        >다른 로그인 방식</a
      >
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/sign/LayerSignFaceCertificate.scss';
</style>
