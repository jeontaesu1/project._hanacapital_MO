<script>
// Customer_M09_p018
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
      store.ui.header.setTitle(() => '민원창구·유익정보');
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
              <h3 class="text-body-1 font-weight-medium">전자민원접수</h3>
            </div>
            <div :class="$style['logs__right']">
              <RouterLink
                to="/customer/financial-consumer-protection-receiving-electronic-complaints"
                :class="$style['logs__link']"
              >
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
                방문·전화권유판매원 조회
              </h3>
            </div>
            <div :class="$style['logs__right']">
              <RouterLink
                to="/customer/financial-consumer-protection-inquirysales-visiting-telephone"
                :class="$style['logs__link']"
              >
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
                소비자권익보호 유익한 정보
              </h3>
            </div>
            <div :class="$style['logs__right']">
              <RouterLink
                to="/customer/financial-consumer-protection-information"
                :class="$style['logs__link']"
              >
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
