<script>
// My_M03_l246
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    PageTextGroup,
    PageMainText,
    IllustObject,
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
          <PopupTitle>중고차오토론 중요사항 안내</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>
            연체 시<br />
            어떠한 불이익이 있나요?
          </strong>
        </PageMainText>
      </PageTextGroup>

      <IllustObject type="overdue" :classNames="{ wrap: 'row-margin-none' }" />

      <div>
        <div class="text-body-2">
          <span class="color-red">
            원리금 연체 시에는 법에서 정하는 범위 내에서 약정에 따라 정한
            지연배상금율에 의한 지연배상금을 지불</span
          >하셔야 하며,
          <span class="font-weight-medium">
            신용점수 하락 및 금융거래 제한 등이 발생
          </span>
          할 수 있으니 유의 해야해요!
        </div>

        <div class="row-margin-contents">
          <div class="color-gray-secondary text-body-4">지연배상금율 산식</div>
          <ul :class="[$style['basic-list'], 'row-margin-mini']">
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-4',
                'color-black',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']">-</div>
              <div :class="$style['basic-list__content']">
                약정이자율 + 연체가산이자율3%
              </div>
            </li>
          </ul>
        </div>
      </div>

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
            <BasicButton>확인했습니다</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractDescription005_005.scss';
</style>
