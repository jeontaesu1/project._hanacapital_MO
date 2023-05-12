<script>
// Customer_M09_p001
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
      store.ui.header.setTitle(() => '금융소비자보호');
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
              <h3 class="text-body-1 font-weight-medium">금융소비자보호헌장</h3>
            </div>
            <div :class="$style['logs__right']">
              <RouterLink
                to="/customer/financial-consumer-protection-charter"
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
              <h3 class="text-body-1 font-weight-medium">금융소비자보호조직</h3>
            </div>
            <div :class="$style['logs__right']">
              <RouterLink
                to="/customer/financial-consumer-protection-organization"
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
              <h3 class="text-body-1 font-weight-medium">금융소비자보호체계</h3>
            </div>
            <div :class="$style['logs__right']">
              <RouterLink
                to="/customer/financial-consumer-protection-system"
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
              <h3 class="text-body-1 font-weight-medium">금융소비자보호웹진</h3>
            </div>
            <div :class="$style['logs__right']">
              <RouterLink
                to="/customer/financial-consumer-protection-webzine"
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
              <h3 class="text-body-1 font-weight-medium">금융소비자보호공시</h3>
            </div>
            <div :class="$style['logs__right']">
              <RouterLink
                to="/customer/financial-consumer-protection-notice-list"
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
              <h3 class="text-body-1 font-weight-medium">금융소비자보호자료</h3>
            </div>
            <div :class="$style['logs__right']">
              <RouterLink
                to="/customer/financial-consumer-protection-data"
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
                금리인하요구권 안내
              </h3>
            </div>
            <div :class="$style['logs__right']">
              <RouterLink
                to="/customer/financial-consumer-protection-interest-rate-cut-request-info"
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
              <h3 class="text-body-1 font-weight-medium">청약철회권 안내</h3>
            </div>
            <div :class="$style['logs__right']">
              <RouterLink
                to="/customer/financial-consumer-protection-withdraw-subscription-info"
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
                중도상환수수료 면제
              </h3>
            </div>
            <div :class="$style['logs__right']">
              <RouterLink
                to="/customer/financial-consumer-protection-exemption-early-redemption-fee"
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
