<script>
// AF_M44_l002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import RoundTab from '@/components/ui/tab/RoundTab.vue';
import RoundTabButton from '@/components/ui/tab/RoundTabButton.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    CarEmblem,
    UiTab,
    UiTabPanel,
    RoundTab,
    RoundTabButton,
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
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          어떤 차가 마음에<br />
          <strong>드시나요?</strong>
        </PageMainText>
      </PageTextGroup>

      <UiTab>
        <RoundTab
          :useUiTab="true"
          :classNames="{ wrap: 'row-margin-item-group' }"
        >
          <RoundTabButton link="layerAutoCarCartSelectBrand1_001">
            국산
          </RoundTabButton>
          <RoundTabButton link="layerAutoCarCartSelectBrand1_002">
            수입
          </RoundTabButton>
        </RoundTab>

        <UiTabPanel name="layerAutoCarCartSelectBrand1_001">
          <div :class="[$style['bank-brand'], $style['bank-brand--col-3']]">
            <ul :class="$style['bank-brand__list']">
              <li :class="$style['bank-brand__item']">
                <button type="button" :class="$style['bank-brand__block']">
                  <span :class="$style['bank-brand__logo']">
                    <CarEmblem code="1001" size="medium" />
                  </span>
                  <span :class="$style['bank-brand__text']">현대</span>
                </button>
              </li>
              <li :class="$style['bank-brand__item']">
                <button type="button" :class="$style['bank-brand__block']">
                  <span :class="$style['bank-brand__logo']">
                    <CarEmblem code="1012" size="medium" />
                  </span>
                  <span :class="$style['bank-brand__text']">제네시스</span>
                </button>
              </li>
              <li :class="$style['bank-brand__item']">
                <button type="button" :class="$style['bank-brand__block']">
                  <span :class="$style['bank-brand__logo']">
                    <CarEmblem code="1002" size="medium" />
                  </span>
                  <span :class="$style['bank-brand__text']">기아</span>
                </button>
              </li>
              <li :class="$style['bank-brand__item']">
                <button type="button" :class="$style['bank-brand__block']">
                  <span :class="$style['bank-brand__logo']">
                    <CarEmblem code="1003" size="medium" />
                  </span>
                  <span :class="$style['bank-brand__text']">르노삼성</span>
                </button>
              </li>
              <li :class="$style['bank-brand__item']">
                <button type="button" :class="$style['bank-brand__block']">
                  <span :class="$style['bank-brand__logo']">
                    <CarEmblem code="1006" size="medium" />
                  </span>
                  <span :class="$style['bank-brand__text']">쉐보레</span>
                </button>
              </li>
              <li :class="$style['bank-brand__item']">
                <button type="button" :class="$style['bank-brand__block']">
                  <span :class="$style['bank-brand__logo']">
                    <CarEmblem code="1005" size="medium" />
                  </span>
                  <span :class="$style['bank-brand__text']">쌍용</span>
                </button>
              </li>
            </ul>
          </div>
        </UiTabPanel>

        <UiTabPanel name="layerAutoCarCartSelectBrand1_002">
          <ul :class="$style['bank-brand__list']">
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem code="2001" size="medium" />
                </span>
                <span :class="$style['bank-brand__text']">벤츠</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem code="2002" size="medium" />
                </span>
                <span :class="$style['bank-brand__text']">BMW</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem code="2003" size="medium" />
                </span>
                <span :class="$style['bank-brand__text']">아우디</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem code="2017" size="medium" />
                </span>
                <span :class="$style['bank-brand__text']">포르쉐</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem code="2018" size="medium" />
                </span>
                <span :class="$style['bank-brand__text']">마세라티</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem code="2025" size="medium" />
                </span>
                <span :class="$style['bank-brand__text']">벤틀리</span>
              </button>
            </li>
          </ul>
        </UiTabPanel>
      </UiTab>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoCarCartSelectBrand.scss';
</style>
