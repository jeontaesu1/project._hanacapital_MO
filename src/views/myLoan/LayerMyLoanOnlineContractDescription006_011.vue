<script>
// My_M03_l262
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
          <PopupTitle>자동차할부금융 주요권리 안내</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          자료열람을<br />
          <strong>요구할 수 있어요</strong>
        </PageMainText>
      </PageTextGroup>

      <IllustObject type="license" :classNames="{ wrap: 'row-margin-none' }" />

      <div class="row-margin-item-group-small">
        <div class="text-body-2">
          <span class="font-weight-medium">
            고객은 분쟁조정 또는 소송의 수행 등 권리구제를 위한 목적</span
          >으로 금융회사가 기록 및 유지·관리하는 다음의 자료에 대한 열람(사본 및
          청취 포함)을 요구할 수 있어요.
        </div>

        <ul :class="[$style['basic-list'], 'row-margin-contents']">
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
              계약체결에 관한 자료, 계약의 이행에 관한 자료
            </div>
          </li>
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
              금융상품 등에 관한 광고 자료
            </div>
          </li>
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
              고객의 권리행사에 관한 자료
            </div>
          </li>
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
              내부통제기준의 제정 및 운영 등에 관한 자료
            </div>
          </li>
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
              업무 위탁에 관한 자료
            </div>
          </li>
        </ul>
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
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractDescription006_011.scss';
</style>
