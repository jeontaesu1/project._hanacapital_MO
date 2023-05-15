<script>
// AF_M00_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import RoundButton from '@/components/ui/button/RoundButton.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import RoundTab from '@/components/ui/tab/RoundTab.vue';
import RoundTabButton from '@/components/ui/tab/RoundTabButton.vue';

import IconTell from '@/assets/images/icon/tell.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    RoundButton,
    CarEmblem,
    BasicInput,
    SearchButton,
    UiTab,
    UiTabPanel,
    RoundTab,
    RoundTabButton,
    IconTell,
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

      <PageTextGroup>
        <PageMainText>
          자동차 제조사를<br />
          <strong>선택해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <div class="flex-box">
        <div class="flex-box__cell flex-1">
          <BasicInput
            type="search"
            title="검색어"
            placeholder="자동차명으로 검색"
            :classNames="{
              wrap: $style['head__form'],
              input: $style['head__input'],
            }"
          />
        </div>
        <div class="flex-box__cell">
          <SearchButton />
        </div>
      </div>

      <UiTab :classNames="{ wrap: 'row-margin-container-medium' }">
        <RoundTab
          :useUiTab="true"
          :classNames="{ wrap: 'row-margin-item-group' }"
        >
          <RoundTabButton link="layerAutoEstimateSelectBrand1_001">
            국산
          </RoundTabButton>
          <RoundTabButton link="layerAutoEstimateSelectBrand1_002">
            수입
          </RoundTabButton>
        </RoundTab>

        <UiTabPanel name="layerAutoEstimateSelectBrand1_001">
          <div :class="[$style['bank-brand'], $style['bank-brand--col-3']]">
            <ul :class="$style['bank-brand__list']">
              <li :class="$style['bank-brand__item']">
                <button type="button" :class="$style['bank-brand__block']">
                  <span :class="$style['bank-brand__logo']">
                    <CarEmblem code="1001" name="현대" size="medium" />
                  </span>
                  <span :class="$style['bank-brand__text']">현대</span>
                </button>
              </li>
              <li :class="$style['bank-brand__item']">
                <button type="button" :class="$style['bank-brand__block']">
                  <span :class="$style['bank-brand__logo']">
                    <CarEmblem code="1012" name="제네시스" size="medium" />
                  </span>
                  <span :class="$style['bank-brand__text']">제네시스</span>
                </button>
              </li>
              <li :class="$style['bank-brand__item']">
                <button type="button" :class="$style['bank-brand__block']">
                  <span :class="$style['bank-brand__logo']">
                    <CarEmblem code="1002" name="기아" size="medium" />
                  </span>
                  <span :class="$style['bank-brand__text']">기아</span>
                </button>
              </li>
              <li :class="$style['bank-brand__item']">
                <button type="button" :class="$style['bank-brand__block']">
                  <span :class="$style['bank-brand__logo']">
                    <CarEmblem code="1003" name="르노삼성" size="medium" />
                  </span>
                  <span :class="$style['bank-brand__text']">르노삼성</span>
                </button>
              </li>
              <li :class="$style['bank-brand__item']">
                <button type="button" :class="$style['bank-brand__block']">
                  <span :class="$style['bank-brand__logo']">
                    <CarEmblem code="1006" name="쉐보레" size="medium" />
                  </span>
                  <span :class="$style['bank-brand__text']">쉐보레</span>
                </button>
              </li>
              <li :class="$style['bank-brand__item']">
                <button type="button" :class="$style['bank-brand__block']">
                  <span :class="$style['bank-brand__logo']">
                    <CarEmblem code="1005" name="쌍용" size="medium" />
                  </span>
                  <span :class="$style['bank-brand__text']">쌍용</span>
                </button>
              </li>
            </ul>
          </div>
        </UiTabPanel>

        <UiTabPanel name="layerAutoEstimateSelectBrand1_002">
          <ul :class="$style['bank-brand__list']">
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem code="2001" name="벤츠" size="medium" />
                </span>
                <span :class="$style['bank-brand__text']">벤츠</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem code="2002" name="BMW" size="medium" />
                </span>
                <span :class="$style['bank-brand__text']">BMW</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem code="2003" name="아우디" size="medium" />
                </span>
                <span :class="$style['bank-brand__text']">아우디</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem code="2017" name="포르쉐" size="medium" />
                </span>
                <span :class="$style['bank-brand__text']">포르쉐</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem code="2018" name="마세라티" size="medium" />
                </span>
                <span :class="$style['bank-brand__text']">마세라티</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem code="2025" name="벤틀리" size="medium" />
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
@import '@/assets/scss/views/auto/LayerAutoEstimateSelectBrand.scss';
</style>
