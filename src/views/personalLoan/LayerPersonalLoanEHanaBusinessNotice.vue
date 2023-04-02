<script>
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    PopupSubTitle,
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
  <UiLayer
    ref="layer"
    type="toast"
    :backgroundClose="true"
    v-slot="layerSlotProps"
  >
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>사업자 대출 진행안내</PopupTitle>
          <PopupSubTitle>
            고객님은 사업자대출을 신청하셨습니다.<br />
            아래 사항을 참고하시고 사업자대출로 진행을 원하실 경우 ‘동의’를
            눌러주세요.
          </PopupSubTitle>
        </ToastPopupHead>
      </template>

      <ol :class="[$style['basic-list'], $style['basic-list--normal-margin']]">
        <li :class="[$style['basic-list__item']]">
          <div :class="$style['basic-list__symbol']">1.</div>
          <div :class="$style['basic-list__content']">
            사업자대출은 고객님 명의로 개인사업자를 운영하시고, 대출금을 사업자
            운영자금 목적으로 사용하시는 경우 가능합니다.(대출금액 1억 이하 시
            별도 자금용도 증빙은 하지 않습니다.)
          </div>
        </li>
        <li :class="[$style['basic-list__item']]">
          <div :class="$style['basic-list__symbol']">2.</div>
          <div :class="$style['basic-list__content']">
            추후 사업자를 폐업하는 경우 개인대출로 전환되며, 이때 고객님
            개인신용평점에 변동이 발생할 수 있습니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item']]">
          <div :class="$style['basic-list__symbol']">3.</div>
          <div :class="$style['basic-list__content']">
            사업자대출 진행 시 사업자등록증 사본 등 추가 서류를 요청할 수
            있습니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item']]">
          <div :class="$style['basic-list__symbol']">4.</div>
          <div :class="$style['basic-list__content']">
            사업자대출 진행을 동의하지 않으시면 개인대출로 진행됩니다.
          </div>
        </li>
      </ol>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton @click="layerSlotProps.close()">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/LayerPersonalLoanEHanaBusinessNotice.scss';
</style>
