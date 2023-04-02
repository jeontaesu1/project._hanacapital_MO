<script>
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    ButtonList,
    ButtonListItem,
    BasicButton,
    IllustInfo,
    IllustObject,
    IllustInfoTitle,
  },
  setup() {
    const state = reactive({});

    const layer = ref(null);

    return {
      state,
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

      <IllustInfo>
        <IllustObject type="fail" />
        <IllustInfoTitle>
          오류횟수 초과로<br />
          <strong>간편가입을 시작합니다</strong>
        </IllustInfoTitle>
      </IllustInfo>

      <template v-slot:foot>
        <ButtonList align="full">
          <ButtonListItem>
            <BasicButton :line="true">신용카드로 시작하기</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>휴대폰 인증으로 시작하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
