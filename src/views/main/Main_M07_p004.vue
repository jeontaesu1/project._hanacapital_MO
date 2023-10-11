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

    <section class="row-margin-container-medium">
      <h3 class="text-body-5 color-gray font-weight-medium row-margin-item">
        유의사항
      </h3>

      <ul :class="$style['basic-list']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            이벤트에 대한 상세 내용은 각 보험사를 통해 확인해 주세요.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            보험계약 체결전 반드시 상품설명서 및 약관을 읽어보시기 바랍니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            보험계약자가 기존에 체결했던 보험계약을 해지하고 다른 보험 계약을
            체결하면 보험계약이 거절될 수 있으며, 보험료가 인상되거나 보장내용이
            달라질 수 있습니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            이 보험계약은 예금자보호법에 따라 예금보험공사가 보호하되,
            보호한도는 본 보험회사에 있는 귀하의 모든 예금보험대상 금융상품의
            해약환급금(또는 만기 시 보험금이나 사고보험금)에 기타지급금을 합하여
            1인당 “최고 5천만원”이며, 5천만원을 초과하는 나머지 금액은 보호하지
            않습니다. 다만, 보험계약자 및 보험료납부자가 법인인 경우에는
            보호하지 않습니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            보험계약자 또는 피보험자의 고의로 인한 사고는 보상하지 않으며, 이외
            담보별 자세한 지급한도, 면책사항, 감액지급사항 등 보험금 지급 제한
            조건은 반드시 약관 내용을 확인하시기 바랍니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            보험사는 해당 상품에 대해 충분히 안내할 의무가 있으며, 가입자는
            가입에 앞서 이에 대한 충분한 내용을 확인하시기 바랍니다.
          </div>
        </li>
      </ul>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/Main_M07_p004.scss';
</style>
