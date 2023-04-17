<script>
// AF_M06_b005
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import LayerAutoUsedLoanContractConfirm from '@/views/auto/LayerAutoUsedLoanContractConfirm.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerAutoUsedLoanContractConfirm,
  },
  setup() {
    const layer = ref(null);
    const layer001 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };

    return {
      layer,
      layer001,
      layer001Open,
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
            매매계약서 금액과 구입비용을<br />
            알고 계신가요?
          </PopupTitle>
        </ToastPopupHead>
      </template>

      <div>
        <p class="text-body-3 color-gray-tertiary row-margin-item-group">
          매매계약서 금액과 상이할 경우 대출이 취소 될 수 있습니다.<br />
          동의 하시겠습니까?
        </p>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">미동의</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton theme="secondary" @click="layer001Open"
              >동의</BasicButton
            >
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>

    <LayerAutoUsedLoanContractConfirm ref="layer001" />
  </UiLayer>
</template>
