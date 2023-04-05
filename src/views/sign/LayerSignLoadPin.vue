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
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

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
    IllustInfoText,
    TextButton,
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
        <IllustObject />
        <IllustInfoTitle>
          하나캐피탈 앱을<br />
          <strong>이용한 이력이 있습니다</strong>
        </IllustInfoTitle>
        <IllustInfoText>
          계속 서비스를 이용하시려면<br />
          재인증 절차를 수행해주세요.
        </IllustInfoText>
      </IllustInfo>

      <template v-slot:foot>
        <div class="inline-wrap align-center row-margin-contents">
          <TextButton
            :classNames="{ wrap: 'text-body-4 color-gray' }"
            :underline="true"
          >
            기존 인증을 사용할 수 없으세요?
          </TextButton>
        </div>

        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>간편비밀번호 인증하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
