<script>
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

import IconCall from '@/assets/images/icon/call.svg?component';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    IconCall,
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
            필수 접근권한을 허용해야<br />
            서비스를 이용할 수 있어요.
          </PopupTitle>
        </ToastPopupHead>
      </template>

      <BasicBox theme="quaternary">
        <div :class="$style['authority']">
          <ul :class="$style['authority__list']">
            <li :class="$style['authority__item']">
              <div :class="$style['authority__icon']">
                <IconCall />
              </div>
              <div :class="$style['authority__contents']">
                <div :class="$style['authority__head']">
                  <div :class="$style['authority__title']">전화</div>
                  <div :class="[$style['authority__sub'], 'color-green']">
                    (필수)
                  </div>
                </div>
                <div :class="$style['authority__text']">
                  고객센터 및 기타 상담을 위하여<br />
                  전화를 걸 때 사용합니다.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </BasicBox>

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            <strong class="color-green font-weight-medium">설정</strong>
            버튼을 누르면 휴대폰의
            <strong class="color-green font-weight-medium">앱 권한</strong>
            화면으로 이동해요. 해당 화면에서 필수 접근권한을 허용해 주세요.
          </div>
        </li>
      </ul>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">종료</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>설정</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/guide/LayerGuideAuthorityPermit.scss';
</style>
