<script>
// AF_M07_l002
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
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

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
    PageSubText,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
    BoxCheckList,
    BoxCheckListItem,
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
          승계 신청을 동의할<br />
          <strong>차량을 선택해주세요</strong>
        </PageMainText>
        <PageSubText>
          승계 신청 철회를 원하시는 경우,<br />
          체크박스를 해제해 주세요.
        </PageSubText>
      </PageTextGroup>

      <!-- Case : 차량 없을 때 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">승계 가능한 차량이 없습니다.</p>
      </div>
      <!-- // Case : 차량 없을 때 -->

      <!-- Case : 차량 있을 때 -->
      <BoxCheckList align="full">
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            id="layerAutoSuccessionList001"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>오토리스 111가 1111</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            id="layerAutoSuccessionList002"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>오토리스 222나 2222</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            id="layerAutoSuccessionList003"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>오토리스 333다3333</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            id="layerAutoSuccessionList004"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>오토리스 11라4444</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
      <!-- // Case : 차량 있을 때 -->

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

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoSuccessionList.scss';
</style>
