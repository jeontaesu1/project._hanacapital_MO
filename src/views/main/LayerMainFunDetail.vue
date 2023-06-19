<script>
// Main_M05_l002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBanner from '@/components/ui/banner/BasicBanner.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBanner,
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
        <FullPopupHead>
          <template v-slot:right>
            <PopupButton type="subscript" />
            <PopupButton type="subscript" :active="true" />
            <PopupButton type="share" />
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div :class="$style['board-detail']">
        <div :class="$style['board-detail__head']">
          <h2 :class="$style['board-detail__category']">원큐자동차상식</h2>
          <h3 :class="$style['board-detail__title']">2022년 2분기 IR 자료</h3>
          <h4 :class="$style['board-detail__text']">
            하나캐피탈과 함께 알아봐요!
          </h4>
          <p :class="$style['board-detail__sub']">2022.08.09</p>
        </div>

        <section :class="$style['board-detail__contents']">
          //게시물 내용 노출
        </section>

        <BasicBanner
          thumb="/images/_dummy/banner-money-up.png"
          @click="() => {}"
          :classNames="{ wrap: 'row-margin-contents' }"
        >
          <p class="text-body-4 color-gray row-margin-mini">
            비용NO! 보험NO! 내 차OK!
          </p>
          <h3 class="text-body-1 font-weight-medium">다이렉트 장기렌터카</h3>
        </BasicBanner>
      </div>

      <!-- Case : 링크 콘텐츠일 경우 -->
      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>보러가기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
      <!-- //Case : 링크 콘텐츠일 경우 -->
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/LayerMainFunDetail.scss';
</style>
