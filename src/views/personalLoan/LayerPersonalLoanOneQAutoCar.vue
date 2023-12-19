<script>
// PF_M04_b002
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
          <PopupTitle>대출가능차량</PopupTitle>
        </ToastPopupHead>
      </template>

      <div :class="$style['basic-table']">
        <div :class="$style['basic-table']">
          <table>
            <colgroup>
              <col style="width: 80px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>차량명의</th>
                <td>
                  본인명의(공동명의 제외)<br />
                  소유기간 3개월 이상
                </td>
              </tr>
              <tr>
                <th>소유차종</th>
                <td>국산/수입 승용, RV, 승합</td>
              </tr>
              <tr>
                <th>차량연식</th>
                <td>
                  출고 이후 10년 이내<br />
                  차량가격 500만원 이상<br />
                  (당사 차량 시세 가격 기준)
                </td>
              </tr>
              <tr>
                <th>
                  차량압류<br />
                  및 설정
                </th>
                <td>
                  차량 압류 및 설정 내역이 있을 경우<br />
                  해지 후 대출 가능
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            차량 조회 결과(사고금액, 침수/도난/전손여부)에 따라 대출 제한이 될
            수 있습니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            차량 압류/설정 여부는 자동차민원 대국민포털 (https://ecar.go.kr)에서
            조회 가능합니다.
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
@import '@/assets/scss/views/personalLoan/LayerPersonalLoanOneQAutoCar.scss';
</style>
