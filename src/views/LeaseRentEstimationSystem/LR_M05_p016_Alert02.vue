<script>
// LR_M05_p016_Alert02
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
        <PopupText :class="['alertText']"
          >하나캐피탈을 이용 중이신 차량의 차량번호를<br />
          입력해주세요.</PopupText
        >
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
