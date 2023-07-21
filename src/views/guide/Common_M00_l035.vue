<script>
// Common_M00_l035
import { ref } from 'vue';

import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import AlertPopup from '@/components/ui/layer/AlertPopup.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IconLogo from '@/assets/images/icon/logo_main.svg?component';

export default {
  components: {
    BasicButton,
    UiLayer,
    AlertPopup,
    ButtonList,
    ButtonListItem,
    IconLogo,
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
  <UiLayer ref="layer" type="alert" v-slot="layerSlotProps">
    <AlertPopup>
      <div :class="$style['waiting-connection']">
        <div :class="$style['waiting-connection__logo']"><IconLogo /></div>
        <IllustObject
          type="error"
          :classNames="{ wrap: $style['waiting-connection__illust'] }"
        />
        <p :class="$style['waiting-connection__title']">
          현재 접속량이 많아<br />
          서비스 이용이 어렵습니다
        </p>
        <p :class="$style['waiting-connection__text']">
          잠시 후 다시 접속해 주세요.
        </p>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton @click="layerSlotProps.close()">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </AlertPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/guide/Common_M00_l035.scss';
</style>
