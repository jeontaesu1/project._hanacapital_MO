<script>
// Member_M06_l004
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import SwitchCheckBox from '@/components/ui/form/SwitchCheckBox.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    IllustObject,
    SwitchCheckBox,
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
          하나캐피탈 회원이 되신 것을<br />
          <strong>환영합니다</strong>
        </PageMainText>
      </PageTextGroup>

      <IllustObject type="complete" />

      <ul :class="$style['switch-list']">
        <li>
          <p :class="$style['switch-list__title']">
            앱 알림을 받아 보시겠어요?
          </p>
          <SwitchCheckBox id="alarm" />
        </li>
        <li>
          <p :class="$style['switch-list__title']">
            자동으로 로그인하시겠어요?
          </p>
          <SwitchCheckBox id="auto" />
        </li>
      </ul>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>로그인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/sign/LayerSignUpRegistrationCompleted.scss';
</style>
