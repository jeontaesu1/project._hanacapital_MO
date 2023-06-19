<script>
// Main_M06_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

import ImgAlarm from '@/assets/images/_dummy/sample-alarm.svg?component';

export default {
  components: {
    PageContents,
    NoticeText,
    ImgAlarm,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '알림');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['setting']);
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
    <!-- Case : 알림 있을 때 -->
    <div :class="$style['alarm']">
      <ul :class="$style['alarm__list']">
        <li :class="[$style['alarm__item'], $style['alarm__item--new']]">
          <div :class="$style['alarm__block']">
            <div :class="$style['alarm__icon']"><ImgAlarm /></div>
            <div :class="$style['alarm__information']">
              <h3 :class="[$style['alarm__title'], 'ellipsis']">
                범칙금 금액 안내범칙금 금액 안내범칙금 금액 안내범칙금 금액
                안내범칙금 금액 안내범칙금 금액 안내
              </h3>
              <p :class="[$style['alarm__text'], 'multi-ellipsis']">
                위반차량:[159호5672], 위반유형:[주정차(어린이보호)],
                위반유형:[주정차(어린이보호)], 위반유형:[주정차(어린이보호)],
                위반유형:[주정차(어린이보호)],
              </p>
              <div :class="$style['alarm__date']">12시간 전</div>
            </div>
            <button type="button" :class="$style['alarm__link']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>
        <li :class="[$style['alarm__item'], $style['alarm__item--new']]">
          <div :class="$style['alarm__block']">
            <div :class="$style['alarm__icon']"><ImgAlarm /></div>
            <div :class="$style['alarm__information']">
              <h3 :class="[$style['alarm__title'], 'ellipsis']">
                범칙금 금액 안내범칙금 금액 안내범칙금 금액 안내범칙금 금액
                안내범칙금 금액 안내범칙금 금액 안내
              </h3>
              <p :class="[$style['alarm__text'], 'multi-ellipsis']">
                위반차량:[159호5672], 위반유형:[주정차(어린이보호)],
                위반유형:[주정차(어린이보호)], 위반유형:[주정차(어린이보호)],
                위반유형:[주정차(어린이보호)],
              </p>
              <div :class="$style['alarm__date']">12시간 전</div>
            </div>
            <button type="button" :class="$style['alarm__link']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>
        <li :class="$style['alarm__item']">
          <div :class="$style['alarm__block']">
            <div :class="$style['alarm__icon']"><ImgAlarm /></div>
            <div :class="$style['alarm__information']">
              <h3 :class="[$style['alarm__title'], 'ellipsis']">
                범칙금 금액 안내범칙금 금액 안내범칙금 금액 안내범칙금 금액
                안내범칙금 금액 안내범칙금 금액 안내
              </h3>
              <p :class="[$style['alarm__text'], 'multi-ellipsis']">
                위반차량:[159호5672], 위반유형:[주정차(어린이보호)],
                위반유형:[주정차(어린이보호)], 위반유형:[주정차(어린이보호)],
                위반유형:[주정차(어린이보호)],
              </p>
              <div :class="$style['alarm__date']">2023.04.01</div>
            </div>
            <button type="button" :class="$style['alarm__link']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>
        <li :class="$style['alarm__item']">
          <div :class="$style['alarm__block']">
            <div :class="$style['alarm__icon']"><ImgAlarm /></div>
            <div :class="$style['alarm__information']">
              <h3 :class="[$style['alarm__title'], 'ellipsis']">
                범칙금 금액 안내범칙금 금액 안내범칙금 금액 안내범칙금 금액
                안내범칙금 금액 안내범칙금 금액 안내
              </h3>
              <p :class="[$style['alarm__text'], 'multi-ellipsis']">
                위반차량:[159호5672], 위반유형:[주정차(어린이보호)],
                위반유형:[주정차(어린이보호)], 위반유형:[주정차(어린이보호)],
                위반유형:[주정차(어린이보호)],
              </p>
              <div :class="$style['alarm__date']">2023.04.01</div>
            </div>
            <button type="button" :class="$style['alarm__link']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
    <!-- // Case : 알림 있을 때 -->

    <!-- Case : 알림 없을 때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">
        알림이 없습니다.<br />
        PUSH 알림을 설정해 보세요.
      </p>
    </div>
    <!-- // Case : 알림 없을 때 -->

    <div class="row-margin-item">
      <NoticeText>알림은 60일까지 보관됩니다.</NoticeText>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/MainPush.scss';
</style>
