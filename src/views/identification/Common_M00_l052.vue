<script>
// Common_M00_l052
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicBox,
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
    <FullPopup v-if="layerSlotProps.display !== 'none'">
      <template v-slot:head>
        <FullPopupHead
          :classNames="{
            left: $style['header-left'],
            center: $style['header-center'],
            right: $style['header-right'],
          }"
        >
          <PopupTitle>제3자 정보제공동의</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>"㈜드림시큐리티" 귀중</PageMainText>
        <PageSubText>
          본인은 "㈜드림시큐리티"(이하 “회사”라 합니다)이 제공하는 간편인증
          통합중계 서비스(이하 “서비스”라 합니다)를 이용하기 위해, 다음과 같이
          “회사”가 본인의 개인정보를 제3자에게 제공하는 것에 동의합니다.
          개인정보를 제3자에게 제공하는 내용입니다.
        </PageSubText>
      </PageTextGroup>

      <div>
        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">제공받는 자</h3>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li
              :class="[$style['basic-list__item'], 'text-body-4 color-black']"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                "회사"와 "서비스"를 계약한 이용기관
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">제공목적</h3>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li
              :class="[$style['basic-list__item'], 'text-body-4 color-black']"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                간편인증서비스(이용자 확인, 전자서명) 제공 중계
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">
            보유기간 및 이용기간
          </h3>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li
              :class="[$style['basic-list__item'], 'text-body-4 color-black']"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                제공받는 자의 처리목적 달성 후 관련법령에 따른 보유기간동안 보관
                후 파기
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">
            동의거부권리 및 거부에 따른 불이익 내용
          </h3>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li
              :class="[$style['basic-list__item'], 'text-body-4 color-black']"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                개인정보 제3자 제공에 따른 동의는 거부할 수 있으며, 동의 후에도
                언제든지 철회 가능합니다. 다만, 동의 거부 시에는 “서비스” 이용이
                제한될 수 있습니다.
              </div>
            </li>
            <li
              :class="[$style['basic-list__item'], 'text-body-4 color-black']"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                “회사”가 제공하는 “서비스”와 관련된 개인정보의 취급과 관련된
                사항은, “회사”의 개인정보처리방침(“회사” 홈페이지
                www.ez-iok.com)에 따릅니다.
              </div>
            </li>
          </ul>
        </section>
      </div>

      <BasicBox theme="senary" className="row-margin-contents-group">
        <p class="text-body-4 font-weight-medium color-gray-secondary">
          상기 내용과 같이 개인정보 수집 및 이용 약관에 동의합니다.
        </p>
      </BasicBox>

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
@import '@/assets/scss/views/identification/Common_M00_l052.scss';
</style>
