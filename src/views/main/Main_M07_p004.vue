<script>
// Main_M07_p004
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconEcoPlus from '@/assets/images/etc-logo/eco-plus.svg?component';
import IconDbInsurance from '@/assets/images/etc-logo/db-insurance.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    IllustObject,
    BasicHr,
    IconEcoPlus,
    IconDbInsurance,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '보험 한눈에 보기');
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
        <strong>김하나님</strong><br />
        보험이 필요하신가요?
      </PageMainText>
    </PageTextGroup>

    <IllustObject type="shield" />

    <BasicHr
      theme="quaternary"
      type="contents"
      className="row-margin-container"
    />

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <li :class="$style['icon-list__item']">
          <button
            type="button"
            :class="[$style['icon-list__block'], 'align-items-start']"
          >
            <span :class="$style['icon-list__icon']">
              <IconEcoPlus />
            </span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__title']"
                >하나에코플러스<br />다이렉트자동차보험</span
              >
              <span
                :class="[
                  $style['icon-list__text'],
                  'row-margin-small',
                  'color-gray-tertiary',
                  'font-weight-light',
                ]"
              >
                준법감시인확인필 제202305-029<br />(2023.05.11~2024.05.10)
              </span>
            </span>
          </button>
        </li>
        <li :class="$style['icon-list__item']">
          <button
            type="button"
            :class="[$style['icon-list__block'], 'align-items-start']"
          >
            <span :class="$style['icon-list__icon']"><IconDbInsurance /></span>
            <span :class="$style['icon-list__content']">
              <span class="display-block text-body-5 color-green"
                >가입 시 최대 3만원 카드혜택</span
              >
              <span :class="$style['icon-list__title']"
                >DB다이렉트 자동차보험</span
              >
              <span
                :class="[
                  $style['icon-list__text'],
                  'row-margin-small',
                  'color-gray-tertiary',
                  'font-weight-light',
                ]"
              >
                준법감시인확인필 제2023-3130호<br />
                (2023.05.16~2024.05.14)
              </span>
            </span>
          </button>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/Main_M07_p004.scss';
</style>
