<script>
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
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
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <h3 class="text-title-2">하나캐피탈 본점</h3>

      <KeyValue
        margin="regular"
        :classNames="{
          wrap: 'row-margin-contents',
        }"
      >
        <KeyValueItem>
          <KeyValueTitle>연락처</KeyValueTitle>
          <KeyValueText>1800-1110</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>주소</KeyValueTitle>
          <KeyValueText>
            서울특별시 강남구 648-19<br />
            하나금융그룹 강남사옥 20층
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div :class="$style['map-area']">
        <div style="height: 100%; background-color: lightgray">
          // 지도 영역
        </div>
      </div>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/LayerCustomerBranchDetail.scss';
</style>
