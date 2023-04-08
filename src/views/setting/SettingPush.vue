<script>
// Setting_M01_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import SwitchCheckBox from '@/components/ui/form/SwitchCheckBox.vue';
import BasicTooltip from '@/components/ui/tooltip/BasicTooltip.vue';

import IconTooltip from '@/assets/images/icon/tooltip.svg?component';

export default {
  components: {
    PageContents,
    SwitchCheckBox,
    BasicTooltip,
    IconTooltip,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => 'PUSH 알림 설정');
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
    <div :class="$style['setting-push-head']">
      <div :class="$style['switch-list']">
        <div :class="$style['switch-list__item']">
          <div :class="$style['switch-list__title']">앱 알림 전체 동의</div>
          <div :class="$style['switch-list__right']">
            <SwitchCheckBox
              id="settingPushAll"
              :classNames="{ wrap: $style['switch-list__check'] }"
            />
          </div>
        </div>
      </div>
    </div>
    <div :class="$style['setting-push-depth']">
      <ul :class="$style['switch-list']">
        <li :class="$style['switch-list__item']">
          <div :class="$style['switch-list__title']">정보성 알림</div>
          <BasicTooltip
            placement="bottom"
            :classNames="{ wrap: $style['switch-list__tip'] }"
          >
            <IconTooltip class="display-block" />
            <span class="for-a11y">(도움말)</span>

            <template v-slot:contents>
              <section :class="$style['tooltip-section']">
                <h3 :class="$style['tooltip-section__title']">정보성 알림</h3>
                <p :class="$style['tooltip-section__text']">
                  상품 이용, 상환정보 등 하나캐피탈 서비스에 필요한 정보를
                  수신합니다.
                </p>
              </section>
            </template>
          </BasicTooltip>
          <div :class="$style['switch-list__right']">
            <SwitchCheckBox
              id="settingPush001"
              :classNames="{ wrap: $style['switch-list__check'] }"
            />
          </div>
        </li>
        <li :class="$style['switch-list__item']">
          <div :class="$style['switch-list__title']">혜택 알림</div>
          <BasicTooltip
            placement="bottom"
            :classNames="{ wrap: $style['switch-list__tip'] }"
          >
            <IconTooltip class="display-block" />
            <span class="for-a11y">(도움말)</span>

            <template v-slot:contents>
              <section :class="$style['tooltip-section']">
                <h3 :class="$style['tooltip-section__title']">혜택 알림</h3>
                <p :class="$style['tooltip-section__text']">
                  이벤트, 상품 및 콘텐츠 추천, 금리 할인 등 혜택 정보를
                  수신합니다.
                </p>
              </section>
            </template>
          </BasicTooltip>
          <div :class="$style['switch-list__right']">
            <SwitchCheckBox
              id="settingPush002"
              :classNames="{ wrap: $style['switch-list__check'] }"
            />
          </div>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/setting/SettingPush.scss';
</style>
