<script>
// Main_M05_p001
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import FilterTab from '@/components/ui/tab/FilterTab.vue';
import FilterTabButton from '@/components/ui/tab/FilterTabButton.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import DownloadButton from '@/components/ui/button/DownloadButton.vue';
import EventBanner from '@/components/ui/banner/EventBanner.vue';
import FunBanner from '@/components/ui/banner/FunBanner.vue';
import CouponBanner from '@/components/ui/banner/CouponBanner.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    NavTab,
    NavTabButton,
    StickyBar,
    FilterTab,
    FilterTabButton,
    RoundStatus,
    DownloadButton,
    EventBanner,
    FunBanner,
    CouponBanner,
  },
};
</script>

<template>
  <PageContents :classNames="{ head: $style['head'] }">
    <template v-slot:head>
      <!-- Case : 검색시 비노출 -->
      <div>
        <PageTextGroup>
          <PageMainText><strong>혜택</strong></PageMainText>
        </PageTextGroup>

        <StickyBar>
          <NavTab :auto="true" :classNames="{ wrap: $style['nav'] }">
            <NavTabButton tagName="button" type="button" :active="true">
              전체
            </NavTabButton>
            <NavTabButton tagName="button" type="button">이벤트</NavTabButton>
            <NavTabButton tagName="button" type="button">FUN</NavTabButton>
            <NavTabButton tagName="button" type="button">쿠폰함</NavTabButton>
          </NavTab>
        </StickyBar>

        <!-- Case : FUN 메뉴 선택시 노출 -->
        <FilterTab :classNames="{ wrap: $style['category'] }">
          <FilterTabButton tagName="button" type="button" :active="true">
            원큐자동차상식
          </FilterTabButton>
          <FilterTabButton tagName="button" type="button"
            >하캐카북</FilterTabButton
          >
          <FilterTabButton tagName="button" type="button"
            >인스타툰</FilterTabButton
          >
          <FilterTabButton tagName="button" type="button">
            참여형콘텐츠
          </FilterTabButton>
        </FilterTab>
        <!-- // Case : FUN 메뉴 선택시 노출 -->
      </div>
      <!-- // Case : 검색시 비노출 -->
    </template>

    <!-- Case : 등록된 혜택이 0개인 경우 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">혜택을 준비중입니다.</p>
    </div>
    <!-- // Case : 등록된 혜택이 0개인 경우 -->

    <!-- Case : 검색 결과 없을 때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">검색 결과가 없습니다.</p>
    </div>
    <!-- // Case : 검색 결과 없을 때 -->

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

      <!-- Case : FUN -->
      <li class="row-margin-item-group">
        <FunBanner
          thumb="/images/_dummy/thumbnail-sample2.jpg"
          @click="() => {}"
        >
          <h3 class="text-body-1 font-weight-medium ellipsis">
            중고차 구입 꿀팁
          </h3>
          <p class="text-body-4 color-gray row-margin-mini multi-ellipsis">
            중고차 구입 이렇게만 하면 전문가 부럽지 않은 구매가이드
          </p>
        </FunBanner>
      </li>
      <!-- // Case : FUN -->

      <!-- Case : 쿠폰 -->
      <li class="row-margin-item-group">
        <CouponBanner logo="/images/_dummy/logo-sample.png" @click="() => {}">
          <p class="text-body-4 font-weight-light row-margin-mini ellipsis">
            스타벅스
          </p>
          <h3 class="text-body-3 font-weight-medium multi-ellipsis">
            디카페인 콜드브루 라떼 T 쿠폰
          </h3>
          <p class="text-body-5 color-gray font-weight-light row-margin-item">
            2022.12.01 ~ 2022.12.31
          </p>
          <template v-slot:download>
            <DownloadButton
              tagName="a"
              href="/foo/bar.png"
              theme="secondary"
              download
              text="교환권 저장"
            />
          </template>
        </CouponBanner>
      </li>
      <!-- // Case : 쿠폰 -->
    </ul>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/MainBenefit.scss';
</style>
