<script>
// Main_M07_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';

import IconYanadoo from '@/assets/images/etc-logo/yanadoo.svg?component';
import IconLomad from '@/assets/images/etc-logo/lomad.svg?component';
import IconTorder from '@/assets/images/etc-logo/torder.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    IconYanadoo,
    IconLomad,
    IconTorder,
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
        이용해보세요
      </PageMainText>
    </PageTextGroup>

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']">
              <IconYanadoo />
            </span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__title']">야나두</span>
              <span
                :class="[
                  $style['icon-list__text'],
                  'color-gray-tertiary',
                  'font-weight-light',
                ]"
              >
                하루 10분, 야나두 영어를 렌탈 이용해 보세요!
              </span>
            </span>
          </button>
        </li>
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconLomad /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__title']">로마드</span>
              <span
                :class="[
                  $style['icon-list__text'],
                  'color-gray-tertiary',
                  'font-weight-light',
                ]"
              >
                고품격 가구들과 하이엔드 라이프스타일을 만나보세요.
              </span>
            </span>
          </button>
        </li>
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconTorder /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__title']">티오더</span>
              <span
                :class="[
                  $style['icon-list__text'],
                  'color-gray-tertiary',
                  'font-weight-light',
                ]"
              >
                테블릿 메뉴판은 국민 메뉴판 티오더!
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
