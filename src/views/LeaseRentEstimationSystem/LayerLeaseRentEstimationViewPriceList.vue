<script>
// LR_M00_l014
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    BasicBox,
    RoundStatus,
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
    <FullPopup bg="tertiary">
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>가격표 보기</PopupTitle>
          <template v-slot:right>
            <PopupButton theme="white" @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div class="row-margin-container-medium">
        <BasicBox theme="octonary">
          <div class="flex-box row-margin-mini">
            <div class="flex-box__cell flex-1">
              <p class="text-body-4 font-weight-light">2020년식</p>
            </div>
            <div class="flex-box__cell flex-box__cell--small">
              <RoundStatus theme="tridenary" :block="true"
                >2022.07 기준</RoundStatus
              >
            </div>
          </div>
          <h3 class="text-body-1 font-weight-medium">디 올 뉴 G80 가격표</h3>
        </BasicBox>
      </div>

      <div :class="$style['image-view']">
        <img src="@/assets/images/_dummy/image-001.png" alt="샘플 이미지" />
      </div>

      <div :class="$style['image-view']">
        <img src="@/assets/images/_dummy/image-001.png" alt="샘플 이미지" />
      </div>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationViewPriceList.scss';
</style>
