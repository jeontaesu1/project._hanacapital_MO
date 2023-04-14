<script>
// Setting_M00_p001
import { onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import SwitchCheckBox from '@/components/ui/form/SwitchCheckBox.vue';
import BasicTooltip from '@/components/ui/tooltip/BasicTooltip.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';

import IconTooltip from '@/assets/images/icon/tooltip.svg?component';

export default {
  components: {
    PageContents,
    SwitchCheckBox,
    BasicTooltip,
    RouterLink,
    BasicHr,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    IconTooltip,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '설정');
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
    <ul :class="$style['switch-list']">
      <li :class="$style['switch-list__item']">
        <div :class="$style['switch-list__title']">자동로그인 설정</div>
        <BasicTooltip
          placement="bottom"
          :classNames="{ wrap: $style['switch-list__tip'] }"
        >
          <IconTooltip class="display-block" />
          <span class="for-a11y">(도움말)</span>

          <template v-slot:contents>
            <section :class="$style['tooltip-section']">
              <h3 :class="$style['tooltip-section__title']">자동로그인 설정</h3>
              <ul
                :class="[
                  $style['basic-list'],
                  $style['basic-list--mini-margin'],
                ]"
              >
                <li :class="[$style['basic-list__item'], 'color-white']">
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    자동로그인 설정을 위해서는 간편비밀번호, 얼굴인증,
                    지문인증(Face ID)가 필요합니다.
                  </div>
                </li>
                <li :class="[$style['basic-list__item'], 'color-white']">
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    보안을 위해 기기의 화면잠금 설정이 되어 있는 경우에만 설정이
                    가능합니다.
                  </div>
                </li>
              </ul>
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
    </ul>
    <div :class="[$style['nav-menu'], $style['top-menu']]">
      <ul :class="$style['nav-menu__list']">
        <li :class="$style['nav-menu__item']">
          <RouterLink to="/setting/push" :class="$style['nav-menu__link']"
            >PUSH 알림 설정</RouterLink
          >
        </li>
      </ul>
    </div>

    <BasicHr class="row-margin-container" />

    <h3 class="text-title-2">인증센터</h3>

    <div :class="[$style['nav-menu'], $style['bottom-menu']]">
      <ul :class="$style['nav-menu__list']">
        <li :class="$style['nav-menu__item']">
          <UiAccordion :classNames="{ wrap: $style['nav-menu__accordion'] }">
            <UiAccordionItem
              :classNames="{
                item: [
                  $style['nav-menu__accordion-item'],
                  'row-margin-item-group',
                ],
              }"
            >
              <div :class="$style['nav-menu__accordion-head']">
                <div div :class="$style['nav-menu__accordion-title']">
                  공동인증서 관리
                </div>

                <UiAccordionOpener
                  :classNames="{
                    button: $style['nav-menu__accordion-opener'],
                  }"
                />
              </div>
              <UiAccordionLayer>
                <div :class="[$style['nav-menu'], $style['nav-menu--depth']]">
                  <ul :class="$style['nav-menu__list']">
                    <li :class="$style['nav-menu__item']">
                      <RouterLink
                        to="/setting/certificate-import"
                        :class="$style['nav-menu__link']"
                        >인증서 가져오기</RouterLink
                      >
                    </li>
                    <li :class="$style['nav-menu__item']">
                      <RouterLink
                        to="/setting/certificate-export"
                        :class="$style['nav-menu__link']"
                        >인증서 내보내기</RouterLink
                      >
                    </li>
                  </ul>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
          </UiAccordion>
        </li>

        <li :class="$style['nav-menu__item']">
          <RouterLink to="/" :class="$style['nav-menu__link']"
            >간편비밀번호 (재)등록</RouterLink
          >
        </li>
        <li :class="$style['nav-menu__item']">
          <RouterLink to="/" :class="$style['nav-menu__link']"
            >얼굴인증 (재)등록</RouterLink
          >
        </li>
        <li :class="$style['nav-menu__item']">
          <RouterLink to="/" :class="$style['nav-menu__link']"
            >지문인증 (재)등록</RouterLink
          >
        </li>
        <li :class="$style['nav-menu__item']">
          <RouterLink to="/" :class="$style['nav-menu__link']"
            >Face ID (재)등록</RouterLink
          >
        </li>
        <li :class="$style['nav-menu__item']">
          <RouterLink to="/" :class="$style['nav-menu__link']"
            >하나원사인 이용안내</RouterLink
          >
        </li>
      </ul>
    </div>

    <div :class="$style['version']">
      <div :class="$style['version__inner']">
        <div :class="$style['version__title']">앱버전</div>
        <div :class="$style['version__info']">1.0</div>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/setting/SettingHome.scss';
</style>
