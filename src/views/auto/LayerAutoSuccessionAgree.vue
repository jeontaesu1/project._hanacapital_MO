<script>
// AF_M07_b001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    NoticeText,
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
          <PopupTitle>
            <span class="color-blue">111가1111</span> 차량에 대하여<br />
            승계를 신청하시겠습니까?
          </PopupTitle>
        </ToastPopupHead>
      </template>

      <div>
        <p class="text-body-3 color-gray-tertiary row-margin-item-group">
          손님의 동의하에 승계 후 이용자 또는 승계 후 이용자로부터 위임을 받은
          신청인에게 승계 계약관련 차량/금융정보가 제공됩니다.<br />
          관련 정보 제공 동의는 승계절차 완료 또는 계약종결시점 종료되며, 중도에
          정보제공동의
          <strong class="font-weight-medium color-black">철회가 가능</strong
          >합니다.
        </p>
        <p class="text-body-3 color-gray-tertiary row-margin-item-group">
          승계 계약관련 정보제공에 동의하십니까?
        </p>
        <NoticeText :classNames="{ wrap: 'row-margin-item' }">
          정보제공 동의를 거부하실 수 있으나, 거부 시 승계진행이 불가할 수
          있습니다.
        </NoticeText>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton theme="secondary">네, 동의합니다</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>
