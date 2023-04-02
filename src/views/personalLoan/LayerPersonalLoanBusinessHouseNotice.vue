<script>
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    PopupSubTitle,
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
  <UiLayer ref="layer" type="toast" v-slot="layerSlotProps">
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

      <p class="text-body-3 color-red">
        사업자대출은 고객님 명의로 개인사업자를 운영하시고, 대출금을 사업자
        운영자금 목적으로 사용하시는 경우 가능합니다.(대출금액 1억 이하 시 별도
        자금용도 증빙은 하지 않습니다.)
      </p>

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
