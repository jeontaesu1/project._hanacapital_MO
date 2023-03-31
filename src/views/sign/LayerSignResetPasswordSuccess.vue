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
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';

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
    IllustInfoTitle,
    IllustObject,
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
          <strong>비밀번호를 변경했어요</strong><br />
          이제부터 서비스를 이용하실 수 있어요!
        </IllustInfoTitle>
      </IllustInfo>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
