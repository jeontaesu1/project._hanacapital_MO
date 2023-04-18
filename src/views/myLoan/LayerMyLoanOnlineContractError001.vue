<script>
// My_M03_l023 약정실패 Fraud대상자
import { ref } from 'vue';

import FullPopup from '@/components/ui/layer/FullPopup.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

import IconTell from '@/assets/images/icon/tell.svg?component';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    IllustInfo,
    IllustObject,
    IllustInfoTitle,
    IllustInfoText,
    ButtonList,
    ButtonListItem,
    BasicButton,

    IconTell,
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
          <PopupTitle>온라인약정</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <IllustInfo>
        <IllustObject type="error" />
        <IllustInfoTitle>
          온라인약정이<br />
          <strong>완료되지 않았습니다</strong>
        </IllustInfoTitle>
        <IllustInfoText>
          고객님은 상담원과 통화 후<br />
          온라인약정이 가능합니다.
        </IllustInfoText>
      </IllustInfo>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton tagName="a">
              <template v-slot:leftIcon>
                <IconTell />
              </template>
              1599-7942
            </BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
