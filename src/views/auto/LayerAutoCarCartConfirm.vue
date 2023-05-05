<script>
// AF_M44_l004
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    BasicBox,
    CarThumb,
    CarEmblem,
    ButtonList,
    ButtonListItem,
    BasicButton,
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
          선택하신 자동차를<br />
          <strong>차바구니에 담을까요?</strong>
        </PageMainText>
      </PageTextGroup>

      <BasicBox>
        <div class="flex-box">
          <div class="flex-box__cell flex-1">
            <div class="row-margin-mini">
              <CarEmblem code="1001" name="현대" />
            </div>
            <h3 class="text-body-1 font-weight-medium">현대</h3>
            <p class="text-body-4 color-gray row-margin-small">
              더 뉴 그랜저 HEV
            </p>
          </div>
          <div class="flex-box__cell flex-box__cell--medium">
            <CarThumb src="/images/_dummy/car-thumb.png" />
          </div>
        </div>
      </BasicBox>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton theme="secondary">담기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
