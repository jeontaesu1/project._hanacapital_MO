<script>
// Main_M06_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import ImgAlarm from '@/assets/images/_dummy/sample-alarm.svg?component';
import NoticeText from '@/components/ui/text/NoticeText.vue';

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
    <div :class="$style['alarm']">
      <ul :class="$style['alarm__list']">
        <li :class="$style['new']">
          <div :class="$style['alarm__icon']"><ImgAlarm /></div>
          <div :class="$style['alarm__information']">
            <h3 :class="[$style['alarm__title'], 'ellipsis']">
              범칙금 금액 안내범칙금 금액 안내범칙금 금액 안내범칙금 금액
              안내범칙금 금액 안내범칙금 금액 안내
            </h3>
            <p
              :class="[
                $style['alarm__text'],
                'row-margin-small',
                'multi-ellipsis',
              ]"
            >
              위반차량:[159호5672],<br />위반유형:[주정차(어린이보호)]위반유형:[주정차(어린이보호)]위반유형:[주정차(어린이보호)]위반유형:[주정차(어린이보호)],
            </p>
            <div :class="$style['alarm__date']">12시간 전</div>
          </div>
        </li>
        <li :class="$style['new']">
          <div :class="$style['alarm__icon']"><ImgAlarm /></div>
          <div :class="$style['alarm__information']">
            <h3 :class="[$style['alarm__title'], 'ellipsis']">
              범칙금 금액 안내범칙금 금액 안내범칙금 금액 안내범칙금 금액
              안내범칙금 금액 안내범칙금 금액 안내
            </h3>
            <p
              :class="[
                $style['alarm__text'],
                'row-margin-small',
                'multi-ellipsis',
              ]"
            >
              위반차량:[159호5672],<br />위반유형:[주정차(어린이보호)]위반유형:[주정차(어린이보호)]위반유형:[주정차(어린이보호)]위반유형:[주정차(어린이보호)],
            </p>
            <div :class="$style['alarm__date']">12시간 전</div>
          </div>
        </li>
        <li>
          <div :class="$style['alarm__icon']"><ImgAlarm /></div>
          <div :class="$style['alarm__information']">
            <h3 :class="[$style['alarm__title'], 'ellipsis']">
              범칙금 금액 안내범칙금 금액 안내범칙금 금액 안내범칙금 금액
              안내범칙금 금액 안내범칙금 금액 안내
            </h3>
            <p
              :class="[
                $style['alarm__text'],
                'row-margin-small',
                'multi-ellipsis',
              ]"
            >
              위반차량:[159호5672],<br />위반유형:[주정차(어린이보호)]위반유형:[주정차(어린이보호)]위반유형:[주정차(어린이보호)]위반유형:[주정차(어린이보호)],
            </p>
            <div :class="$style['alarm__date']">2023.04.01</div>
          </div>
        </li>
        <li>
          <div :class="$style['alarm__icon']"><ImgAlarm /></div>
          <div :class="$style['alarm__information']">
            <h3 :class="[$style['alarm__title'], 'ellipsis']">
              범칙금 금액 안내범칙금 금액 안내범칙금 금액 안내범칙금 금액
              안내범칙금 금액 안내범칙금 금액 안내
            </h3>
            <p
              :class="[
                $style['alarm__text'],
                'row-margin-small',
                'multi-ellipsis',
              ]"
            >
              위반차량:[159호5672],<br />위반유형:[주정차(어린이보호)]위반유형:[주정차(어린이보호)]위반유형:[주정차(어린이보호)]위반유형:[주정차(어린이보호)],
            </p>
            <div :class="$style['alarm__date']">2023.04.01</div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 알림이 없을때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">
        알림이 없습니다. <br />PUSH 알림을 설정해 보세요.
      </p>
    </div>
    <!-- // 알림이 없을때 -->
    <NoticeText class="row-margin-item">알림은 60일까지 보관됩니다.</NoticeText>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/MainPush.scss';
</style>
