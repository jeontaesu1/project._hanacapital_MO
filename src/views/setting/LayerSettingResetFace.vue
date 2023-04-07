<script>
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';

import ImgSample from '@/assets/images/_dummy/illustration-sample.svg?component';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicHr,
    PopupTitle,
    ImgSample,
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
          <PopupTitle>얼굴인증</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          얼굴인증을<br />
          <strong>(재)등록합니다</strong>
        </PageMainText>
        <PageSubText>
          스마트폰 카메라만 있으면 얼굴로 간편하게 로그인 및 인증을 할 수
          있습니다.<br />
          (마스크 쓴 얼굴도 가능합니다.)
        </PageSubText>
      </PageTextGroup>

      <BasicButton :line="true" theme="quaternary">얼굴인증 삭제</BasicButton>

      <BasicHr
        theme="tertiary"
        type="contents"
        className="row-margin-container-medium"
      />

      <div>
        <section class="row-margin-container-medium">
          <h3 class="text-title-1 font-weight-medium row-margin-item">
            안전한 정보 저장 시스템!
          </h3>
          <p class="text-body-3 color-gray-tertiary">
            얼굴인증은 사용자의 얼굴을 인식하고 수치로 변환하여 암호화 한 후
            분산 저장하며, 사용자의 사진을 저장하지 않아 더욱 안전합니다.<br />
            또한 마스크 쓴 얼굴을 등록하면 마스크를 쓰고도 인증이 가능합니다.
          </p>
          <div :class="[$style['illustration-img'], 'row-margin-container']">
            <ImgSample />
          </div>
        </section>
        <section class="row-margin-container-medium">
          <h3 class="text-title-1 font-weight-medium row-margin-item">
            로그인을 쉽고 간편하게
          </h3>
          <p class="text-body-3 color-gray-tertiary">
            스마트폰 카메라를 보고 눈을 한번 깜빡이기만 하면 끝!<br />
            비밀번호를 기억할 필요없이 얼굴만으로 쉽고 편리하게 로그인 및 인증을
            해보세요.
          </p>
          <ul :class="[$style['basic-list'], 'row-margin-item']">
            <li :class="[$style['basic-list__item'], 'color-gray-tertiary']">
              <div :class="$style['basic-list__symbol']">※</div>
              <div :class="$style['basic-list__content']">
                선글라스 등으로 얼굴을 가릴 경우, 조명이 너무 강하거나 역광인
                곳에서는 인식을 못할 수 있습니다.
              </div>
            </li>
          </ul>
          <div :class="[$style['illustration-img'], 'row-margin-container']">
            <ImgSample />
          </div>
        </section>
      </div>

      <section :class="[$style['notice-section'], 'row-margin-contents']">
        <h3 :class="$style['notice-section__title']">유의사항</h3>
        <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              화소가 낮은 카메라 또는 OS버전이 낮은 스마트기기에서는 얼굴인증
              등록이 제한됩니다.<br />
              Android : OS 5.0이하버전<br />
              iOS : iPhone 4, iPhone 4S, iPhone 5S, iPhone 6,<br />
              iPhone 6 Plus, iPhone SE 1세대, 아이팟터치, 아이패드
            </div>
          </li>
        </ul>
      </section>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
          align="full"
        >
          <ButtonListItem>
            <BasicButton :line="true">마스크인증 (재)등록</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>얼굴인증 (재)등록</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/setting/LayerSettingResetFace.scss';
</style>
