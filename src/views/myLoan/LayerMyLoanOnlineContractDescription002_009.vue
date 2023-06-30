<script>
// My_M03_l219
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
          <PopupTitle>일반할부금융 주요권리 안내</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          청약철회를<br />
          <strong>요구할 수 있어요</strong>
        </PageMainText>
      </PageTextGroup>

      <IllustObject type="restore" :classNames="{ wrap: 'row-margin-none' }" />

      <div>
        <div class="text-body-2">
          <span class="color-red">
            금융소비자 보호에 관한 법률 시행령 제37조 제1항 제3호가목에
            의거하여, 할부금융상품은 같은 법에서 규정하는 청약철회권 대상 상품이
            아닙니다.
          </span>
          <span class="font-weight-medium">
            (다만 재화를 제공받은 경우만 해당합니다.)
          </span>
        </div>

        <NoticeText :classNames="{ wrap: 'row-margin-item' }">
          할부금융상품은 할부거래에 관한 법률 제 8조의 청약철회권과 같은 법
          제16조의 항변권을 적용받으며, 주요한 특징은 아래와 같습니다.
        </NoticeText>

        <div class="row-margin-contents">
          <div>
            <div class="color-gray-secondary text-body-4">
              할부거래법 상 청약철회권이란
            </div>
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
                  <span class="font-weight-medium">
                    “할부 구입일 또는 목적물 인도를 받은 날로부터 7일 이내
                    철회(취소)를 요청할 수 있는 권리”</span
                  >를 말합니다.
                </div>
              </li>
            </ul>
          </div>

          <div class="row-margin-contents">
            <div class="color-gray-secondary text-body-4">
              할부거래법 상 항변권이란
            </div>
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
                  <span class="font-weight-medium">
                    “할부계약기간 중 물품, 서비스 등이 계약내용대로 이행되지
                    않는 경우 등에 대해 잔여 할부금 지급을 거절할 수 있는
                    권리”를
                  </span>
                  말합니다.
                </div>
              </li>
            </ul>
          </div>
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
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractDescription002_009.scss';
</style>
