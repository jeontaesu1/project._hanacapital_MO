<script>
// My_M07_b007
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
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
  <UiLayer ref="layer" type="toast" :backgroundClose="true">
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>주요 고지사항</PopupTitle>
        </ToastPopupHead>
      </template>

      <ul
        :class="[
          $style['basic-list'],
          $style['basic-list--regular'],
          $style['basic-list--regular-margin'],
        ]"
      >
        <li :class="[$style['basic-list__item'], 'text-body-3', 'color-black']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            <div class="font-weight-medium">차량 인수 및 차량상태 확인</div>
            <div>
              만기 또는 중도반환 시 차량상태에 따라 차량가치감소분이 추가로
              부과될 수 있으니 양수인은 승계 전에 차량상태를 충분히 확인하시어
              추후 예상치 못한 불이익을 미연에 방지하시기 바랍니다.
            </div>
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'text-body-3', 'color-black']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            <div class="font-weight-medium">약정 운행거리 확인</div>
            <div>
              양수인은 승계 시 리스 경과월수와 약정운행거리를 비교하시어 향후
              발생될 수 있는 추가비용에 대한 대비를 하시기 바랍니다. 특히 만기
              시 차량을 반환하고자 할 경우, 약정 운행거리보다 초과한 경우,
              초과운행거리에 대한 초과 운행부담금이 부과됨을 숙지하시기
              바랍니다.
            </div>
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'text-body-3', 'color-black']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            <div class="font-weight-medium">법칙금/과태료, 제세공과금납부</div>
            <div>
              오토리스 이용 중 발생한 각종 범칙금/과태로, 기타비용 등에 대해서는
              양도인 및 양수인의 책임하에 부담할 것을 확약합니다.
            </div>
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
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractSuccessionNotice002.scss';
</style>
