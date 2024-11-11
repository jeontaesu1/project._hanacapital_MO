<script>
// LR_M05_p016_Alert
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupText from '@/components/ui/layer/PopupText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import AlertPopup from '@/components/ui/layer/AlertPopup.vue';

export default {
  components: {
    UiLayer,
    ButtonList,
    ButtonListItem,
    BasicButton,
    AlertPopup,
    PopupText,
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
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <AlertPopup>
      <template v-slot:head>
        <PopupText :class="['alertText']">입력 정보를 확인해주세요.</PopupText>
      </template>

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
    </AlertPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/salesUsedCar/LayerSalesUsedCarAffiliateClauseDetail001.scss';
</style>

<style lang="scss" scoped>
.alertText {
  color: #15181f;
  padding-top: 10px;
  padding-bottom: 20px;
}
</style>
