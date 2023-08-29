<script>
// My_M07_b006
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
          <PopupTitle>승계 고객 안내사항</PopupTitle>
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
            <div>
              승계 계약은 양도인과 양수인이 승계와 관련된 법적 계약서류를
              하나캐피탈에 제출하고, 최종 승인을 위한 확인 녹취콜(전화)을 완료한
              경우에 효력이 발생합니다. 이의 선행조건으로 승계차량의 인수,
              보증금(장기선납금포함), 정산수수료의 납부, 승계조건에 따른
              의무사항을 본 계약 체결 시까지 모두 완료한 경우에 진행 가능합니다.
            </div>
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'text-body-3', 'color-black']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            <div>
              승계계약이 완료되어 효력이 발생하면, 당사와 양도인간에 기체결된
              계약상의 권리의무 중 승계계약일까지 발생한 부분은 모두 양도인에게
              귀속되고, 그 이후부터 발생하는 부분은 모두 양수인에게 귀속되며
              그때부터는 양수인이 당초 계약상 이용자의 지위에 있게됩니다.
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
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractSuccessionNotice001.scss';
</style>
