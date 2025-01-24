<script>
// Customer_M09_p019
import { onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';

export default {
  components: {
    RouterLink,
    PageContents,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '상품공시실');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
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
    <ul :class="[$style['logs'], $style['logs--margin-regular']]">
      <li :class="$style['logs__item']">
        <div
          :class="[
            $style['logs__block'],
            $style['logs__block--secondary'],
            $style['logs__block--regular'],
          ]"
        >
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-body-1 font-weight-medium">
                금융상품통합비교공시
              </h3>
            </div>
            <div :class="$style['logs__right']">
              <RouterLink to="/" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div
          :class="[
            $style['logs__block'],
            $style['logs__block--secondary'],
            $style['logs__block--regular'],
          ]"
        >
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-body-1 font-weight-medium">
                여신금융협회상품공시
              </h3>
            </div>
            <div :class="$style['logs__right']">
              <RouterLink to="/" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div
          :class="[
            $style['logs__block'],
            $style['logs__block--secondary'],
            $style['logs__block--regular'],
          ]"
        >
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-body-1 font-weight-medium">판매중단상품안내</h3>
            </div>
            <div :class="$style['logs__right']">
              <RouterLink to="/" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </RouterLink>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerFinancialConsumerProtection.scss';
</style>
