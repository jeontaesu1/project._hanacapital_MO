<script>
// My_M03_l259
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
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
    NoticeText,
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
          금리인하를<br />
          <strong>요구할 수 있어요</strong>
        </PageMainText>
      </PageTextGroup>

      <IllustObject type="license" :classNames="{ wrap: 'row-margin-none' }" />

      <div class="row-margin-item-group-small">
        <div class="text-body-2">
          채무자인 고객은 본인의
          <span class="color-red">[신용상태가 개선]</span> 되었다고 판단되는
          경우(예 : 취업, 승진, 재산증가, 개인신용평점 상승) 금융회사에
          <span class="color-red">[금리인하를 요구]</span> 할 수 있어요.
        </div>

        <NoticeText class="color-red row-margin-item">
          신용상태가 금리에 영향을 미치지 않는 상품은 금리인하요구권의 행사
          대상에서 제외되오니, 상단의 체크박스를 확인 해 주세요.
        </NoticeText>

        <ul :class="$style['basic-list']">
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
              금융회사는 금리인하를 요구하는 고객에게 신용상태 개선을 확인하는
              데 필요한 자료의 제출을 요구할 수 있으며, 신용상태의 개선이
              경미하여 금리인하 요구 인정 요건을 충족하지 못하는 경우 등
              <span class="font-weight-medium">
                심사 결과에 따라 고객의 금리인하 요구는 수용되지 않을 수 있어요.
              </span>
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
              금융회사는 금리인하 요구를 받은 날부터
              <span class="font-weight-medium">
                ‘10영업일 이내’(고객에게 자료의 보완을 요구하는 날부터 자료가
                제출되는 날까지의 기간은 포함되지 않아요)</span
              >에
              <span class="color-red">
                금리인하 요구 수용 여부 및 그 사유를 고객에게 통지드려요.
              </span>
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
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractDescription006_008.scss';
</style>
