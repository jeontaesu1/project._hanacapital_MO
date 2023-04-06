<script>
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import SwitchCheckBox from '@/components/ui/form/SwitchCheckBox.vue';

export default {
  components: {
    PageContents,
    SwitchCheckBox,
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
        <p :class="$style['setting-push__title']">정보성 알림</p>
        <SwitchCheckBox id="alarmTotal" />
      </div>
      <ul :class="$style['setting-push__list']">
        <li>
          <p :class="$style['setting-push__title']">정보성 알림</p>
          <SwitchCheckBox id="alarm01" />
        </li>
        <li>
          <p :class="$style['setting-push__title']">혜택 알림</p>
          <SwitchCheckBox id="alarm02" />
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/setting/SettingPush.scss';
</style>
