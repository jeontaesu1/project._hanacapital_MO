<script>
// Setting_M01_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import SwitchCheckBox from '@/components/ui/form/SwitchCheckBox.vue';
import IconTooltip from '@/assets/images/icon/tooltip.svg?component';
import Tooltip from 'vue3-popper';

export default {
  components: {
    PageContents,
    SwitchCheckBox,
    IconTooltip,
    Tooltip,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      // optional : html 태그에 클래스 추가
      store.ui.common.setRootClassName('page-optional-class');

      // optional : 헤더 구성 변경
      store.ui.header.setTitle(() => 'PUSH 알림 설정');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      // optional : html 태그에 클래스 리셋
      store.ui.common.setRootClassName();

      // optional : 헤더 구성 설정 값 리셋
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <div :class="$style['setting-push']">
      <div :class="$style['setting-push__header']">
        <p :class="$style['setting-push__title']">앱 알림 전체 동의</p>
        <SwitchCheckBox id="alarmTotal" />
      </div>
      <ul :class="$style['setting-push__list']">
        <li>
          <div :class="$style['setting-push__title']">
            <Tooltip arrow placement="top" arrowPadding="106">
              <div :class="$style['tooltip__header']">
                정보성 알림
                <button :class="$style['tooltip__button']">
                  <IconTooltip />
                </button>
              </div>
              <template #content>
                <h3 :class="$style['tooltip__title']">정보성 알림</h3>
                <ul
                  :class="[$style['basic-list'], $style['basic-list--regular']]"
                >
                  <li :class="[$style['basic-list__item'], 'color-white']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      상품 이용, 상환정보 등 하나캐피탈 서비스에 필요한 정보를
                      수신합니다.
                    </div>
                  </li>
                </ul>
              </template>
            </Tooltip>
          </div>
          <SwitchCheckBox id="alarm01" />
        </li>
        <li>
          <div :class="$style['setting-push__title']">
            <Tooltip arrow placement="top" arrowPadding="88">
              <div :class="$style['tooltip__header']">
                혜택 알림
                <button :class="$style['tooltip__button']">
                  <IconTooltip />
                </button>
              </div>
              <template #content>
                <h3 :class="$style['tooltip__title']">공동인증서 등록</h3>
                <ul
                  :class="[$style['basic-list'], $style['basic-list--regular']]"
                >
                  <li :class="[$style['basic-list__item'], 'color-white']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      이벤트, 상품 및 콘텐츠 추천, 금리 할인 등 혜택 정보를
                      수신합니다.
                    </div>
                  </li>
                </ul>
              </template>
            </Tooltip>
          </div>
          <SwitchCheckBox id="alarm02" />
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/setting/SettingPush.scss';
</style>
