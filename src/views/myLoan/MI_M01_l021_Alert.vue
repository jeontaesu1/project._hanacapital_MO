<script>
// MI_M01_l021
import { ref } from 'vue';

import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import AlertPopup from '@/components/ui/layer/AlertPopup.vue';

export default {
  components: {
    BasicButton,
    UiLayer,
    AlertPopup,
    ButtonList,
    ButtonListItem,
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
  <UiLayer ref="layer" type="alert" v-slot="layerSlotProps">
    <AlertPopup>
      <PageTextGroup
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <PageMainText style="letter-spacing: -1px">
          계열사 마케팅 수신 동의를 하지 않으면<br />
          계열사 상품에 대한 서비스를 받을 수 없습니다.<br />
          개인(신용)정보 선택적 수집 이용 동의
        </PageMainText>
        <PageSubText> </PageSubText>
      </PageTextGroup>

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
@import '@/assets/scss/views/myLoan/MI_M01_l021_Alert.scss';
</style>
