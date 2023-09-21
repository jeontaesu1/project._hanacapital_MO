<script>
// AF_M07_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
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
          승계 유의사항을<br />
          확인해주세요
        </PageMainText>
      </PageTextGroup>

      <div>
        <section class="row-margin-contents-group">
          <h2 class="text-body-2 row-margin-item-medium">
            승계효력 및 차량인계시점
          </h2>
          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                하나캐피탈에서 최종 승계 완료 후 승계 계약자의 효력이
                발생됩니다. 승계 완료 이후 차량 인계 해주세요.
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h2 class="text-body-2 row-margin-item-medium">
            차량상태 점검 및 확인
          </h2>
          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                사고 유무, 약정주행거리/실제주행거리, 차량 상태는 승계 당사자간
                확인해주세요. 차량상태 미확인으로 인한 책임은 이용자에게
                있습니다.
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h2 class="text-body-2 row-margin-item-medium">비용정산</h2>
          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                승계 금액을 제외한 거래 정산(보증금/선납금)은 승계 당사자간
                정산해주세요.
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h2 class="text-body-2 row-margin-item-medium">
            승계 후 첫 도래 원리금
          </h2>
          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                승계 후 첫 도래 원리금(리스료/렌트료)은 일할 계산 금액이 아닌
                원리금 계산 전체 금액이 청구됩니다.
                <strong class="font-weight-medium color-green"
                  >차량 인도시점 원리금 일괄 정산은 당사자간 정산</strong
                >해 주세요.
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h2 class="text-body-2 row-margin-item-medium">자동차세(오토리스)</h2>
          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                자동차세는 승계 시점 당사자간 정산 완료해주세요.
              </div>
            </li>
          </ul>
        </section>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>네, 모두 확인했습니다</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoSuccessionNotice.scss';
</style>
