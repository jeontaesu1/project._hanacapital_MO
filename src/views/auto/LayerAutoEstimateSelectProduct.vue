<script>
// AF_M00_l008
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import RoundButton from '@/components/ui/button/RoundButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
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
    BasicHr,
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
                <RoundButton size="mini" tagName="a" href="tel:1800-1110">
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

      <div>
        <div class="text-body-4 font-weight-light">현대</div>
        <h3 class="text-body-1 font-weight-medium row-margin-mini">캐스퍼</h3>
        <p class="text-body-4 font-weight-light color-gray row-margin-small">
          인스퍼레이션 + 캐스퍼 액티브Ⅱ
        </p>
        <UnitText
          :classNames="{
            wrap: 'row-margin-item',
          }"
          rightUnit="원"
          >30,324,230</UnitText
        >
      </div>

      <BasicHr theme="quaternary" className="row-margin-contents"></BasicHr>

      <div class="row-margin-item-regular row-margin-bottom-none">
        <PageTextGroup>
          <PageMainText>
            상담을 원하시는<br />
            <strong>상품을 선택해 주세요</strong>
          </PageMainText>
        </PageTextGroup>
      </div>

      <div class="contents-wrap">
        <div
          :class="[
            $style['icon-list'],
            'row-margin-contents-group',
            'row-margin-bottom-none',
          ]"
        >
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
                <RoundStatus
                  :classNames="{ wrap: 'display-block' }"
                  theme="secondary"
                >
                  12~60개월
                </RoundStatus>
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
                <RoundStatus
                  :classNames="{ wrap: 'display-block' }"
                  theme="secondary"
                >
                  12~60개월
                </RoundStatus>
              </RouterLink>
            </li>
          </ul>
        </div>

        <div class="row-margin-contents inline-wrap align-right">
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
      </div>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoEstimateSelectProduct.scss';
</style>
