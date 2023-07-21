<script>
// Common_M00_l035 App
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconLogo from '@/assets/images/icon/logo-main.svg?component';

export default {
  components: {
    UiLayer,
    IllustObject,
    BasicButton,
    ButtonList,
    ButtonListItem,

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
  <UiLayer ref="layer">
    <section :class="$style['connection-over']">
      <IconLogo :class="$style['connection-over__logo']" />

      <IllustObject
        type="error"
        :classNames="{ wrap: $style['connection-over__illust'] }"
      />

      <h2 :class="$style['connection-over__title']">
        현재 접속량이 많아<br />
        서비스 이용이 어렵습니다
      </h2>

      <p :class="$style['connection-over__text']">
        잠시 후 다시 접속해 주세요.
      </p>

      <ButtonList>
        <ButtonListItem>
          <BasicButton>확인</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </section>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/guide/Common_M00_l035_App.scss';
</style>
