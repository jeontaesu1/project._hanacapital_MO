<script>
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    KeyValueList,
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

      <KeyValueList
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
          <KeyValueTitle>증권계좌</KeyValueTitle>
          <KeyValueText>123456789</KeyValueText>
        </KeyValueItem>
      </KeyValueList>

      <div :class="$style['map-area']">//지도 영역</div>
    </FullPopup>
  </UiLayer>
</template>
<style lang="scss" module>
@import '@/assets/scss/views/customer/LayerCustomerBranchDetail.scss';
</style>
