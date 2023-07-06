<script>
// BF_M06_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';

import IconMedical from '@/assets/images/contents/img-medical.svg?component';
import IconmedicalProgram from '@/assets/images/contents/img-medical-program.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
    BoxCheck,
    BoxCheckLabel,

    IconMedical,
    IconmedicalProgram,
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
      <PageTextGroup>
        <PageMainText>
          원하시는 물품을<br />
          <strong>선택해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <ul class="reset-list">
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel001_001"
          >
            <BoxCheckLabel>
              <div class="flex-box">
                <div class="inline-wrap flex-box__cell">
                  <IconMedical />
                </div>
                <div class="flex-box__cell flex-box__cell--medium flex-1">
                  <span class="color-navy text-body-1 font-weight-medium"
                    >덴티움</span
                  >
                </div>
              </div>
            </BoxCheckLabel>
          </BoxCheck>
        </li>
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel001_002"
          >
            <BoxCheckLabel>
              <div class="flex-box">
                <div class="inline-wrap flex-box__cell">
                  <IconmedicalProgram />
                </div>
                <div class="flex-box__cell flex-box__cell--medium flex-1">
                  <span class="text-body-1 font-weight-medium">덴티움</span>
                </div>
              </div>
            </BoxCheckLabel>
          </BoxCheck>
        </li>
      </ul>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-contents-small',
          }"
        >
          <ButtonListItem>
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
