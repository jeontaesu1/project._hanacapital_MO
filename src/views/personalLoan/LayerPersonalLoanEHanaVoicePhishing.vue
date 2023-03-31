<script>
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupText from '@/components/ui/layer/PopupText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    PopupText,
    BasicButton,
    ButtonListItem,
    ButtonList,
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
          <PopupTitle>보이스피싱 주의안내</PopupTitle>
        </ToastPopupHead>
      </template>

      <PopupText>
        금융감독원, 금융기관, 검찰청, 경찰청, 직원을 사칭한 의심스러운 전화 또는
        문자를 받고 대출을 신청하신다면, 대출진행을 중단하시기 바랍니다.
      </PopupText>
      <PopupText>
        대출 보이스 피싱이 우려되는 경우
        <strong class="color-black font-weight-medium"
          >금융감독원 콜센터(1332)</strong
        >
        또는
        <strong class="color-black font-weight-medium">경찰청(112)</strong>으로
        문의바랍니다.
      </PopupText>

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
