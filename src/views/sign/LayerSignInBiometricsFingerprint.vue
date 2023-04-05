<script>
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IllustObject from '@/components/ui/common/IllustObject.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    IllustObject,
    TextButton,
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
        <FullPopupHead> </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          지문을<br />
          <strong>인식시켜 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <IllustObject />

      <div class="inline-wrap align-center row-margin-item-group">
        <TextButton
          :classNames="{ wrap: 'text-body-4 color-gray' }"
          :underline="true"
        >
          다른 로그인 방식
        </TextButton>
      </div>
    </FullPopup>
  </UiLayer>
</template>
