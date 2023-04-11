<script>
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    PageSubText,
    PopupTitle,
    NoticeText,
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
          <PopupTitle>개인정보 제공 동의</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>개인정보 제공 동의</PageMainText>
        <PageSubText>
          하나캐피탈㈜ 귀중<br />
          귀사와의 (금융)거래와 관련하여 귀사가 본인의 개인정보를
          수집.이용하고자 하는 경우에는 「개인정보 보호법」 제 15조, 제22조 및
          제24조, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」제22조에
          따라 동의를 얻어야 합니다.<br />
          이에 귀사가 아래와 같이 본인의 개인정보를 수집.이용하는데 동의합니다.
        </PageSubText>
      </PageTextGroup>

      <div :class="$style['contents-list']">
        <ol
          :class="[
            $style['contents-list__list'],
            $style['contents-list__list--quinary'],
          ]"
        >
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">1</div>
              <div :class="$style['contents-list__title']">
                제공목적 및 제공대상자
              </div>
            </div>
            <div :class="[$style['contents-list__depth-3'], 'row-margin-mini']">
              <p class="text-body-4 font-weight-light color-gray-tertiary">
                제공목적 : 신용대출 등 귀사 대출 상품에 대한 상담
              </p>
              <p
                class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
              >
                제공대상자 : 귀사와 위탁계약을 체결한 대출모집인 제공대상
                개인정보
              </p>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">2</div>
              <div :class="$style['contents-list__title']">
                제공대상 개인정보
              </div>
            </div>
            <div :class="[$style['contents-list__depth-3'], 'row-margin-mini']">
              <p class="text-body-4 font-weight-light color-gray-tertiary">
                이름, 휴대폰번호
              </p>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">3</div>
              <div :class="$style['contents-list__title']">
                제공받는 자의 개인정보 보유.이용 기간
              </div>
            </div>
            <div :class="[$style['contents-list__depth-3'], 'row-margin-mini']">
              <p class="text-body-4 font-weight-light color-gray-tertiary">
                제공 동의일로부터 개인정보를 제공받는 자의 목적을 달성할 때까지
              </p>
            </div>
          </li>
        </ol>
      </div>

      <NoticeText :classNames="{ wrap: 'row-margin-item' }">
        귀하는 동의를 거부할 권리가 있으나, 동의하지 않으실 경우 거래관계의 설정
        또는 유지가 불가능할 수 있음을 알려드립니다.
      </NoticeText>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lm-blog-personal/LayerLMBlogQuickCounselingAgree002.scss';
</style>
