<script>
// AF_M00_l008
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import RoundButton from '@/components/ui/button/RoundButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';

import IconTell from '@/assets/images/icon/tell.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';
import IconBuilding from '@/assets/images/icon/building.svg?component';
import iconInformation from '@/assets/images/icon/information.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    RoundButton,
    PageTextGroup,
    PageMainText,
    UnitText,
    TextButton,
    RoundStatus,
    IconTell,
    IconCar,
    IconBuilding,
    iconInformation,
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
            <div class="flex-box">
              <div class="flex-box__cell">
                <RoundButton tagName="a" href="tel:1800-1110">
                  <template v-slot:leftIcon>
                    <IconTell />
                  </template>
                  상담원 연결
                </RoundButton>
              </div>
              <div class="flex-box__cell flex-box__cell--regular">
                <PopupButton @click="layerSlotProps.close()" />
              </div>
            </div>
          </template>
        </FullPopupHead>
      </template>

      <div :class="$style['car-info']">
        <div :class="$style['car-info__inner']">
          <div>
            <div class="text-body-4 font-weight-light">현대</div>
            <h3 class="text-body-1 font-weight-medium row-margin-mini">
              캐스퍼
            </h3>
            <div class="text-body-4 color-gray row-margin-small">
              인스퍼레이션 + 캐스퍼 액티브Ⅱ
            </div>
            <div class="row-margin-item">
              <UnitText rightUnit="원"><strong>30,324,230</strong></UnitText>
            </div>
          </div>
        </div>
      </div>

      <PageTextGroup>
        <PageMainText>
          상담을 원하시는<br />
          <strong>상품을 선택해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <div :class="$style['icon-list']">
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconBuilding /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__text']"
                  >다양한 혜택, 편리한 내차 이용</span
                >
                <span :class="$style['icon-list__title']">오토리스</span>
              </span>
              <span :class="$style['icon-list__etc']">
                <RoundStatus
                  :classNames="{ wrap: 'display-block' }"
                  theme="secondary"
                >
                  12~60개월
                </RoundStatus>
              </span>
            </button>
          </li>
          <li :class="$style['icon-list__item']">
            <RouterLink to="" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconCar /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__text']"
                  >비용 NO! 보험 NO! 내차 OK!</span
                >
                <span :class="$style['icon-list__title']">장기렌트카</span>
              </span>
              <span :class="$style['icon-list__etc']">
                <RoundStatus
                  :classNames="{ wrap: 'display-block' }"
                  theme="secondary"
                >
                  12~60개월
                </RoundStatus>
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="inline-wrap align-right row-margin-contents">
        <TextButton
          theme="quaternary"
          :classNames="{ wrap: 'font-weight-regular' }"
        >
          리스와 렌트 차이가 궁금하다면?
          <template v-slot:rightIcon>
            <iconInformation />
          </template>
        </TextButton>
      </div>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoEstimateSelectProduct.scss';
</style>
