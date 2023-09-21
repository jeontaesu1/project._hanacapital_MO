<script>
// AF_M01_l008
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    FullPopupHead,
    PopupButton,
    FullPopup,
    PageTextGroup,
    PageMainText,
    PageSubText,
    IllustObject,
    ButtonList,
    ButtonListItem,
    BasicButton,
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
          김하나님, 심사 승인 되었습니다<br />
          다음 단계를 진행할까요?
        </PageMainText>
        <PageSubText>
          심사 승인 후, 차량 생산과 배정을 위한<br />
          발주가 필요합니다.
        </PageSubText>
      </PageTextGroup>

      <IllustObject type="complete" />

      <div>
        <section :class="[$style['notice-section'], 'row-margin-contents']">
          <h3 :class="$style['notice-section__title']">차량 발주 신청</h3>
          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                당사가 직접 차량 제조사에 차량 생산주문을 해요.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                손님의 차량이 생산되면 별도의 연락을 드려요.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                당사가 주문부터 탁송까지 일정관리를 대행해 드려요.
              </div>
            </li>
          </ul>
        </section>
        <section :class="[$style['notice-section'], 'row-margin-contents']">
          <h3 :class="$style['notice-section__title']">주의사항</h3>
          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                차량 발주신청을 완료하셔야 생산이 가능해요.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                견적은 최초 산출일로부터 2주간 유효해요.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                궁금하신 사항은 1800-1100으로 언제든지 연락 주세요.
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
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoLongRentalOrder.scss';
</style>
