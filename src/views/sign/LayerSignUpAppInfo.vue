<script>
// Member_M06_b002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconSample from '@/assets/images/_dummy/sample-alarm.svg?component';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IconSample,
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
  <UiLayer ref="layer" type="toast" :backgroundClose="true">
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>
            하나캐피탈 회원이 되신다면 이 모든,<br />
            금융서비스를 받아보실 수 있어요
          </PopupTitle>
        </ToastPopupHead>
      </template>

      <div :class="$style['info']">
        <ul :class="$style['info__list']">
          <li :class="$style['info__item']">
            <div :class="$style['info__block']">
              <span :class="$style['info__icon']"><IconSample /></span>
              <span :class="$style['info__title']">
                다이렉트 상품<br />
                금리확인
              </span>
            </div>
          </li>
          <li :class="$style['info__item']">
            <div :class="$style['info__block']">
              <span :class="$style['info__icon']"><IconSample /></span>
              <span :class="$style['info__title']">
                오늘의 운세와<br />
                FUN콘텐츠
              </span>
            </div>
          </li>
          <li :class="$style['info__item']">
            <div :class="$style['info__block']">
              <span :class="$style['info__icon']"><IconSample /></span>
              <span :class="$style['info__title']">
                나에게 꼭 맞는<br />
                상품추천
              </span>
            </div>
          </li>
          <li :class="$style['info__item']">
            <div :class="$style['info__block']">
              <span :class="$style['info__icon']"><IconSample /></span>
              <span :class="$style['info__title']">
                나의 대출현황<br />
                관리
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
            <BasicButton :line="true" theme="quaternary">나중에</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>간편 회원가입 시작</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/sign/LayerSignUpAppInfo.scss';
</style>
