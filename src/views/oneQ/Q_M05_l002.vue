<script>
// Q_M05_l002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    BasicButton,
    ButtonList,
    ButtonListItem,
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
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead
          :classNames="{
            left: $style['header-left'],
            center: $style['header-center'],
            right: $style['header-right'],
          }"
        >
          <h2 class="text-body-1 font-weight-medium multi-ellipsis">
            개인(신용)정보 필수적 수집∙이용 동의<br />
            (공공 마이데이터)
          </h2>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <p class="text-body-3 color-gray-tertiary font-weight-light">
        하나캐피탈 주식회사 귀중<br /><br />

        [하나캐피탈 주식회사]와의 (금융)거래와 고나련하여 행정안전부가 운영하는
        공공 마이데이터 유동체계를 통하여 데이터 보유 정부∙공공기관이 보유한
        본인의 개인(신용)정보를 조회하고자 (이후 생략)
      </p>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/oneQ/Q_M05_l002.scss';
</style>
