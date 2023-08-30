<script>
// My_M01_l015
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    PopupTitle,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
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
          <PopupTitle>중도상환신청 유의사항</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <section class="row-margin-contents-group">
        <h3 class="text-body-2 row-margin-item-medium">신청 가능 상품</h3>

        <ul
          :class="[
            $style['basic-list'],
            $style['basic-list--regular'],
            $style['basic-list--regular-margin'],
          ]"
        >
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">할부 및 대출상품</div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              <span class="color-red font-weight-medium"
                >리스, 렌터카 등 일부 상품은 홈페이지 및 모바일을 통한
                중도상환신청이 불가능</span
              >하며, 고객센터(1800-1110)로 연락 바랍니다.
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h3 class="text-body-2 row-margin-item-medium">신청 가능 시간</h3>

        <ul
          :class="[
            $style['basic-list'],
            $style['basic-list--regular'],
            $style['basic-list--regular-margin'],
          ]"
        >
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              월~금 : 09:00 ~ 18:00까지 신청 가능합니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              토요일, 일요일, 공휴일 또는 계약의 결제일에는 신청이 불가합니다.
            </div>
          </li>
        </ul>
      </section>

      <section class="row-margin-contents-group">
        <h3 class="text-body-2 row-margin-item-medium">기본 운전자 범위</h3>

        <ul
          :class="[
            $style['basic-list'],
            $style['basic-list--regular'],
            $style['basic-list--regular-margin'],
          ]"
        >
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              중도상환시에는 상품에 따라 일정액의 '중도상환수수료'가 발생됩니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              <div>
                즉시출금은 '전자금융거래법'에 따라 '고객님의 명의로 인증된
                자동이체계좌'에서만 출금이 가능합니다.
              </div>
              <ul
                :class="[
                  $style['basic-list'],
                  $style['basic-list--regular'],
                  'row-margin-item',
                ]"
              >
                <li
                  :class="[
                    $style['basic-list__item'],
                    'color-black',
                    'text-body-4',
                    'font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']">-</div>
                  <div :class="$style['basic-list__content']">
                    타인 명의 자동이체 계좌에서는 즉시출금이 불가합니다.
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'color-black',
                    'text-body-4',
                    'font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']">-</div>
                  <div :class="$style['basic-list__content']">
                    자동이체 계좌의 잔고가 중도상환신청 금액보다 부족한 경우,
                    출금처리가 되지 않습니다.
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'color-black',
                    'text-body-4',
                    'font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']">-</div>
                  <div :class="$style['basic-list__content']">
                    일부 은행의 계좌에서는 즉시 출금이 불가능하므로, 가상계좌
                    입금 신청을 이용해 주시기 바랍니다.
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              가상계좌 입금 신청 시, 신청 일자에 따라 중복 출금이 발생할 수
              있으며, 중복 출금되었을 경우, 고객센터(1800-1110)로 연락 바랍니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              대출원금잔액의 전액 상환 시,<br />
              담보물건이 있는 경우 담보물건 해지에 관한 사항은
              고객센터(1800-1110)로 연락 바랍니다.
            </div>
          </li>
        </ul>
      </section>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton @click="layerSlotProps.close()"
              >네, 모두 확인했습니다</BasicButton
            >
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanIntermediateNotice.scss';
</style>
