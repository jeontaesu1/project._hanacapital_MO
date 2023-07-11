<script>
// Main_M07_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IllustObject from '@/components/ui/common/IllustObject.vue';
import IconHyendaiRentalCare from '@/assets/images/icon/hyendai-rental-care.svg?component';
import IconCeragem from '@/assets/images/icon/ceragem.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicHr,
    IllustObject,
    IconHyendaiRentalCare,
    IconCeragem,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '렌탈 서비스');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <PageTextGroup>
      <PageMainText>
        렌탈 서비스를<br />
        <strong>이용해보세요</strong>
      </PageMainText>
    </PageTextGroup>

    <IllustObject type="rental" />

    <BasicHr
      theme="quaternary"
      type="contents"
      className="row-margin-container"
    />

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']">
              <IconHyendaiRentalCare />
            </span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__title']">현대렌탈케어</span>
              <span
                :class="[
                  $style['icon-list__text'],
                  'color-gray-tertiary',
                  'font-weight-light',
                ]"
              >
                정수기, 비데, 공기청정기 등<br />
                다양한 렌탈 상품을 이용해보세요.
              </span>
            </span>
          </button>
        </li>
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconCeragem /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__title']">세라젬</span>
              <span
                :class="[
                  $style['icon-list__text'],
                  'color-gray-tertiary',
                  'font-weight-light',
                ]"
              >
                세라젬 제품을 렌탈 이용해 보세요.
              </span>
            </span>
          </button>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/MainRental.scss';
</style>
