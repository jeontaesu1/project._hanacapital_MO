<script>
// PF_M04_b003
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
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
  <UiLayer ref="layer" type="toast" :backgroundClose="true">
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>대환상품 유의사항</PopupTitle>
        </ToastPopupHead>
      </template>

      <ul
        :class="[
          $style['basic-list'],
          $style['basic-list--regular'],
          $style['basic-list--normal-margin'],
        ]"
      >
        <li
          :class="[
            $style['basic-list__item'],
            'font-weight-regular',
            'text-body-3',
          ]"
        >
          <div :class="$style['basic-list__symbol']">1.</div>
          <div :class="$style['basic-list__content']">
            <div>
              현재 차량의 설정건을 하나캐피탈로 대환하는 조건으로 진행
              가능합니다.
            </div>
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--mini-margin'],
                'row-margin-item',
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">설정금액 : 0원</div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  설정일자 : YYYY-MM-DD
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  저당권자 : 오리
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li
          :class="[
            $style['basic-list__item'],
            'font-weight-regular',
            'text-body-3',
          ]"
        >
          <div :class="$style['basic-list__symbol']">2.</div>
          <div :class="$style['basic-list__content']">
            대환금액은 당사에서 상환처로 직접 송금하며 대환 후 잔액은 고객님
            계좌로 입금됩니다.
          </div>
        </li>
        <li
          :class="[
            $style['basic-list__item'],
            'font-weight-regular',
            'text-body-3',
          ]"
        >
          <div :class="$style['basic-list__symbol']">3.</div>
          <div :class="$style['basic-list__content']">
            대출가능금액이 대환금액보다 작거나 저당권자가 당사에서 인정한
            금융기관이 아닌 경우에는 진행이 불가합니다.
          </div>
        </li>
      </ul>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/LayerPersonalLoanOneQAutoInfo.scss';
</style>
