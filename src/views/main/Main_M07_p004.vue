<script>
// Main_M07_p004
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';

import IconHanaInsurance from '@/assets/images/etc-logo/hana-insurance.svg?component';
import IconDbInsurance from '@/assets/images/etc-logo/db-insurance.svg?component';
import IconHyundaiInsurance from '@/assets/images/etc-logo/hyundai-insurance.svg?component';
import IconKbInsurance from '@/assets/images/etc-logo/kb-insurance.svg?component';
import IconAxaInsurance from '@/assets/images/etc-logo/axa-insurance.svg?component';
import IconCarrotInsurance from '@/assets/images/etc-logo/carrot-insurance.svg?component';
import IconMeritzInsurance from '@/assets/images/etc-logo/meritz-insurance.svg?component';
import IconHkInsurance from '@/assets/images/etc-logo/hk-insurance.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    IconHanaInsurance,
    IconDbInsurance,
    IconHyundaiInsurance,
    IconKbInsurance,
    IconAxaInsurance,
    IconCarrotInsurance,
    IconMeritzInsurance,
    IconHkInsurance,
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
        김하나님<br />
        보험이 필요하신가요?
      </PageMainText>
    </PageTextGroup>

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <li :class="$style['icon-list__item']">
          <button
            type="button"
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <span :class="$style['icon-list__icon']"
              ><IconHanaInsurance
            /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__sup']"
                >가입시 최대 3만원 네이버페이 지급</span
              >
              <span :class="$style['icon-list__title']"
                >하나에코플러스<br />다이렉트자동차보험</span
              >
              <span
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                준법감시인확인필 제202305-029<br />
                (2023.05.11~2024.05.10)
              </span>
            </span>
          </button>
        </li>

        <li :class="$style['icon-list__item']">
          <button
            type="button"
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <span :class="$style['icon-list__icon']"><IconDbInsurance /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__sup']"
                >가입 시 최대 3만원 카드결제혜택(주유권/캐시백)</span
              >
              <span :class="$style['icon-list__title']"
                >DB다이렉트 자동차보험</span
              >
              <span
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                준법감시인확인필 제2023-3130호<br />
                (2023.05.16~2024.05.14)
              </span>
            </span>
          </button>
        </li>
        <li :class="$style['icon-list__item']">
          <button
            type="button"
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <span :class="$style['icon-list__icon']"
              ><IconHyundaiInsurance
            /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__sup']"
                >가입 시 최대 3만원 카드혜택</span
              >
              <span :class="$style['icon-list__title']"
                >현대해상 다이렉트 자동차보험</span
              >
              <span
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                준법감시필 제20231856호<br />
                (2023.05.04~2024.05.02)
              </span>
            </span>
          </button>
        </li>
        <li :class="$style['icon-list__item']">
          <button
            type="button"
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <span :class="$style['icon-list__icon']"><IconKbInsurance /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__sup']"
                >가입 시 최대 3만원 카드결제혜택</span
              >
              <span :class="$style['icon-list__title']"
                >KB 다이렉트 자동차보험</span
              >
              <span
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                준법감시인 심의필 제2023-616호<br />
                (2023.05.09~2024.05.07)
              </span>
            </span>
          </button>
        </li>
        <li :class="$style['icon-list__item']">
          <button
            type="button"
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <span :class="$style['icon-list__icon']"><IconAxaInsurance /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__title']"
                >AXA 다이렉트 자동차보험</span
              >
              <span
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                검-230414-채널마케팅팀-236<br />
                (2023.04.14~2024.04.13)
              </span>
            </span>
          </button>
        </li>
        <li :class="$style['icon-list__item']">
          <button
            type="button"
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <span :class="$style['icon-list__icon']"
              ><IconCarrotInsurance
            /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__sup']"
                >신규가입 최대3만원 카드혜택</span
              >
              <span :class="$style['icon-list__title']"
                >캐롯 다이렉트 자동차보험</span
              >
              <span
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                캐롯-제2023-203093-자체<br />
                (2023.04.20~2024.04.19)
              </span>
            </span>
          </button>
        </li>
        <li :class="$style['icon-list__item']">
          <button
            type="button"
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <span :class="$style['icon-list__icon']"
              ><IconMeritzInsurance
            /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__title']"
                >메리츠 다이렉트 자동차보험</span
              >
              <span
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                준법감시인 심의필 제2023-광고-717호<br />
                (2023.04.07~2024.04.05)
              </span>
            </span>
          </button>
        </li>
        <li :class="$style['icon-list__item']">
          <button
            type="button"
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <span :class="$style['icon-list__icon']"><IconHkInsurance /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__title']"
                >흥국 다이렉트 자동차보험</span
              >
              <span
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                준법감시인 심의필T230519-05-21<br />
                (2023-05-19~2023-05-18)
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
