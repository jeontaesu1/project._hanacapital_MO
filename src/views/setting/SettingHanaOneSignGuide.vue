<script>
// Setting_M07_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import ImgSample from '@/assets/images/_dummy/illustration-sample.svg?component';

export default {
  components: {
    PageContents,
    BasicButton,
    NoticeText,
    ImgSample,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '하나 원사인 이용안내');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <div class="row-margin-contents-group">
      // 배너 영역 (내용 확인 후 진행 예정)
    </div>

    <div>
      <section class="row-margin-container-medium">
        <div class="row-margin-contents-group">
          <h3 class="text-title-1 font-weight-medium">
            ‘하나 원사인(Hana OneSign)’이란?
          </h3>
          <p class="text-body-3 color-gray-tertiary">
            하나금융그릅의 앱을 공통으로 이용중이신가요?<br />
            관계사 앱에 한번씩 등록하면, 앱에서 앱으로 이동된 경우 따로
            로그인하지 않아도 자동 로그인까지 연동되어 이용 가능한
            인증수단입니다.
          </p>
          <NoticeText :classNames="{ wrap: 'row-margin-item' }">
            ‘하나 원사인 비밀번호‘ 1회 등록 후 ‘얼굴인증‘을 추가로 등록하여
            이용하세요.
          </NoticeText>
        </div>

        <BasicButton>하나 원사인 비밀번호 (재)등록</BasicButton>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-1 font-weight-medium row-margin-item-group">
          하나 원사인 얼굴인증은?
        </h3>

        <section>
          <h4 class="text-body-2 row-margin-item-small">안전해요</h4>
          <p class="text-body-4 color-gray-senary">
            얼굴인증은 사용자의 얼굴을 인식하고 수치로 변환하여 암호화 한 후
            분산 저장하며, 사용자의 사진을 저장하지 않아 더욱 안전합니다.
          </p>

          <div :class="[$style['illustration-img'], 'row-margin-container']">
            <ImgSample />
          </div>
        </section>

        <section class="row-margin-contents-group">
          <h4 class="text-body-2 row-margin-item-small">편리해요</h4>
          <p class="text-body-4 color-gray-senary">
            스마트폰 카메라를 보고 눈을 한번 깜빡이기만 하면 끝!<br />
            비밀번호를 기억할 필요없이 얼굴만으로 쉽고 편리하게 로그인 및 인증을
            해보세요.
          </p>
          <NoticeText :classNames="{ wrap: 'row-margin-item' }">
            ‘하나 원사인 비밀번호‘ 1회 등록 후 ‘얼굴인증‘을 추가로 등록하여
            이용하세요.
          </NoticeText>

          <div :class="[$style['illustration-img'], 'row-margin-container']">
            <ImgSample />
          </div>

          <BasicButton>하나 원사인 얼굴인증 (재)등록</BasicButton>
        </section>
      </section>
    </div>

    <section :class="[$style['notice-section'], 'row-margin-container-medium']">
      <h3 :class="$style['notice-section__title']">꼭 확인해주세요!</h3>
      <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            ‘하나 원사인‘은 앱마다 별도 등록하여 사용하실 수 있습니다.
            하나캐피탈 앱(원큐캐피탈)과 하나은행 앱(하나1Q)은 각각 다른
            비밀번호를 가지고 있을 수 있습니다. 비밀번호가 공용이 아니므로
            주의하세요.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            ‘하나 원사인’을 재등록해야 하는 경우<br />
            - 6자리 핀번호 인증 5회 연속 오류<br />
            - 앱 삭제 후 재설치<br />
            - 스마트폰 기기변경<br />
            - 다른 기기의 동일한 앱에 재등록 시 기존 인증서는 패기
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            ‘하나 원사인 얼굴인증‘은 ‘하나 원사인‘ 6자리 핀번호 등록 후,
            선택적으로 추가하여 사용하실 수 있습니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            하나 원사인 얼굴인증 이용불가 : 디바이스의 카메라 화소가 낮은
            기종이거나 OS버전이 낮은 스마트기기에서는 얼굴인증 등록 및 사용이
            제한됩니다.<br />
            Android : OS 5.0이하버전<br />
            iOS : iPhone 4, iPhone 4S, iPhone 5S, iPhone 6, iPhone 6 Plus,
            iPhone SE 1세대, 아이팟터치, 아이패드
          </div>
        </li>
      </ul>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/setting/SettingHanaOneSignGuide.scss';
</style>
