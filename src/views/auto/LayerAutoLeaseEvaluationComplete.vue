<script>
// AF_M02_l014
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
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
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>
            김하나님, 요청하신 견적으로<br />
            심사가 완료되었습니다
          </strong>
        </PageMainText>
        <!-- Case : 운용리스일 경우 -->
        <PageSubText>리스 신청 화면으로 이동할게요</PageSubText>
        <!-- // Case : 운용리스일 경우 -->
        <!-- Case : 금융리스일 경우 -->
        <PageSubText>
          최종 견적 확인 후<br />
          리스 신청 화면으로 이동 할게요.
        </PageSubText>
        <!-- // Case : 금융리스일 경우 -->
      </PageTextGroup>

      <IllustObject type="complete" />

      <section :class="$style['notice-section']">
        <h3 :class="$style['notice-section__title']">주의사항</h3>
        <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              견적은 최초 산출일부터 2주간 유효하며, 이후 견적 재산출하여 진행
              하셔야 합니다.
            </div>
          </li>
        </ul>
      </section>

      <template v-slot:foot>
        <!-- Case : 운용리스일 경우 -->
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton theme="tertiary">견적서 보기</BasicButton>
          </ButtonListItem>

          <ButtonListItem>
            <BasicButton>신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
        <!-- // Case : 운용리스일 경우 -->

        <!-- Case : 금융리스일 경우 -->
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton theme="tertiary">최종 견적서 보기</BasicButton>
          </ButtonListItem>

          <ButtonListItem>
            <BasicButton>신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
        <!-- // Case : 금융리스일 경우 -->
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoLeaseEvaluationComplete.scss';
</style>
