<script>
// Common_M00_l060
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import NoticePopup from '@/components/ui/layer/NoticePopup.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconLogo from '@/assets/images/icon/logo-main.svg?component';

export default {
  components: {
    UiLayer,
    NoticePopup,
    BasicButton,
    ButtonList,
    ButtonListItem,
    TextButton,
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
  <UiLayer ref="layer" type="notice">
    <NoticePopup>
      <section :class="$style['connection-over']">
        <IconLogo :class="$style['connection-over__logo']" />

        <h2 :class="$style['connection-over__title']">
          하나캐피탈 앱을 이용해 보세요
        </h2>

        <p :class="$style['connection-over__text']">
          네이버 앱을 이용할 경우<br />
          일부 기능이 제대로<br />
          작동하지 않을 수 있습니다.
        </p>

        <ButtonList>
          <ButtonListItem>
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </section>

      <template v-slot:outerBottom>
        <div :class="$style['bottom']">
          <TextButton
            :classNames="{ wrap: 'text-body-4 color-white' }"
            :underline="true"
          >
            오늘 하루 보지 않기
          </TextButton>
        </div>
      </template>
    </NoticePopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/guide/Common_M00_l060.scss';
</style>
