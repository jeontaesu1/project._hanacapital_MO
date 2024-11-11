<script>
// My_M03_l319
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

import IconStar from '@/assets/images/icon/star.svg?component';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    PageTextGroup,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    IllustObject,
    BasicBox,
    IconStar,
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
          <PopupTitle></PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          신용정보조회 동의 및 담보제공<br />
          확인을 위한 본인인증을 진행해주세요
        </PageMainText>
      </PageTextGroup>

      <IllustObject type="license" />

      <!-- Case : AG 발송 -->
      <BasicBox>
        <div :class="$style['icon-box']">
          <div :class="$style['icon-box__icon']">
            <IconStar />
          </div>
          <div :class="$style['icon-box__content']">
            <div class="text-body-2">
              <span class="color-green font-weight-medium">김하나</span>님은
              하나캐피탈에 등록된<br />
              정식 모집인입니다
            </div>
          </div>
        </div>
      </BasicBox>
      <!-- // Case : AG 발송 -->

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>본인인증</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractDescription011_014.scss';
</style>
