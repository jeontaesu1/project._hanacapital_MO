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

import IllustObject from '@/components/ui/common/IllustObject.vue';

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
    IllustObject,
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

      <div :class="['row-margin-none']">
        <PageTextGroup
          :classNames="{
            wrap: 'row-margin-item-group',
          }"
        >
          <PageMainText><strong>안전한 정보 저장 시스템!</strong></PageMainText>
          <PageSubText class="font-weight-regular">
            얼굴인증은 사용자의 얼굴을 인식하고 수치로 변환하여 암호화 한 후
            분산 저장하며, 사용자의 사진을 저장하지 않아 더욱 안전합니다.<br />
            또한 마스크 쓴 얼굴을 등록하면 마스크를 쓰고도 인증이 가능합니다.
          </PageSubText>
        </PageTextGroup>

        <!-- 이미지 없어서 임시로 넣어둠 -->
        <IllustObject type="license" />
      </div>

      <div :class="['row-margin-container-medium']">
        <PageTextGroup
          :classNames="{
            wrap: 'row-margin-item-group',
          }"
        >
          <PageMainText><strong>로그인을 쉽고 간편하게</strong></PageMainText>
          <PageSubText class="font-weight-regular">
            스마트폰 카메라를 보고 눈을 한번 깜빡이기만 하면 끝!<br />
            비밀번호를 기억할 필요없이 얼굴만으로 쉽고 편리하게 로그인 및 인증을
            해보세요.
          </PageSubText>
          <div
            :class="[
              $style['basic-list__item'],
              'color-gray-tertiary',
              'row-margin-item',
            ]"
          >
            <div :class="$style['basic-list__symbol']">※</div>
            <div :class="$style['basic-list__content']">
              선글라스 등으로 얼굴을 가릴 경우, 조명이 너무 강하거나 역광인
              곳에서는 인식을 못할 수 있습니다.
            </div>
          </div>
        </PageTextGroup>

        <!-- 이미지 없어서 임시로 넣어둠 -->
        <IllustObject type="license" />
      </div>

      <section :class="$style['notice-section']">
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

      <ButtonList align="full">
        <ButtonListItem>
          <BasicButton :line="true">마스크인증 (재)등록</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton>얼굴인증 (재)등록</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/setting/LayerSettingResetFace.scss';
</style>
