<script>
// Main_M05_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import EventBanner from '@/components/ui/banner/EventBanner.vue';

export default {
  components: {
    PageContents,
    RoundStatus,
    EventBanner,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '이벤트');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['search']);
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
    <ul class="reset-list">
      <!-- Case : 이벤트 - 진행중 -->
      <li class="row-margin-item-group">
        <EventBanner
          thumb="/images/_dummy/banner-money-up.png"
          @click="() => {}"
        >
          <div class="inline-wrap row-margin-item-regular">
            <RoundStatus size="small" theme="duodenary">진행중</RoundStatus>
          </div>
          <h3 class="text-body-1 font-weight-medium ellipsis">
            에코플러스 자동차보험
          </h3>
          <p class="text-body-4 color-gray row-margin-mini multi-ellipsis">
            지금 바로 GO!
          </p>
          <p
            class="text-body-5 color-gray font-weight-light row-margin-item-regular"
          >
            2022.12.01 ~ 2022.12.31
          </p>
        </EventBanner>
      </li>
      <li class="row-margin-item-group">
        <EventBanner
          thumb="/images/_dummy/banner-money-up.png"
          @click="() => {}"
        >
          <div class="inline-wrap row-margin-item-regular">
            <RoundStatus size="small" theme="duodenary">진행중</RoundStatus>
          </div>
          <h3 class="text-body-1 font-weight-medium ellipsis">
            에코플러스 자동차보험
          </h3>
          <p class="text-body-4 color-gray row-margin-mini multi-ellipsis">
            오늘 신청하면 혜택이 두배! 1+1 한명 더 자동 가입되는 안심
          </p>
          <p
            class="text-body-5 color-gray font-weight-light row-margin-item-regular"
          >
            2022.12.01 ~ 2022.12.31
          </p>
        </EventBanner>
      </li>
      <!-- // Case : 이벤트 - 진행중 -->

      <!-- Case : 이벤트 - 종료 -->
      <li class="row-margin-item-group">
        <EventBanner
          thumb="/images/_dummy/banner-money-up.png"
          @click="() => {}"
          :disabledStyle="true"
        >
          <div class="inline-wrap row-margin-item-regular">
            <RoundStatus size="small" theme="duodenary">종료</RoundStatus>
          </div>
          <h3 class="text-body-1 font-weight-medium ellipsis">
            에코플러스 자동차보험
          </h3>
          <p class="text-body-4 color-gray row-margin-mini multi-ellipsis">
            지금 바로 GO!
          </p>
          <p
            class="text-body-5 color-gray font-weight-light row-margin-item-regular"
          >
            2022.12.01 ~ 2022.12.31
          </p>
        </EventBanner>
      </li>
      <!-- // Case : 이벤트 - 종료 -->
    </ul>
  </PageContents>
</template>
