<script>
import { onMounted, onUnmounted } from 'vue';
import { useUiHeaderStore } from '@/stores/ui/header';
import PageContents from '@/components/ui/layout/PageContents.vue';

import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

export default {
  components: {
    PageContents,

    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    BottomSticky,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => ' ');
      store.ui.header.setUseLeftLogo(() => true);
      store.ui.header.setRightButtons(() => ['menuDA']);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setUseLeftLogo();
      store.ui.header.setRightButtons();
    });
  },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', this.onScroll);
  },

  beforeDestryed() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const OFFSET = 60;
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
  },
};
</script>
<style scoped>
/* // 20240307 수정 */
.text-title-2 {
  margin: 20px auto;
  position: relative;
  display: inline-block;
  z-index: 1;
}
.text-title-2 span {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: #cff0f6;
  z-index: -1;
}

.test-section-sub
  ._basic-list--regular_16x2n_1197
  > ._basic-list__item_16x2n_1144
  > ._basic-list__symbol_16x2n_1157:empty::before {
  border-radius: 0;
  height: 1px;
}

.btn_hotmore {
  display: block;
  margin: 25px -20px 0;
}
.btn_hotmore img {
  width: 100%;
}
.blind {
  width: 0;
  height: 0;
  overflow: hidden;
  text-indent: -9999px;
}
.navbar {
  height: 49px;
  width: 100vw;
  position: fixed;
  background-color: #fff;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
  top: 48px; /* 20240306 */
  left: 0;
  right: 0;
  z-index: 2;
  border-top: 1px solid #eaeaea;
  box-sizing: border-box;
  overflow: hidden;
}
.navbar div div div div div {
  height: 48px;
  padding: 0;
}
.navbar div {
  border-bottom: none;
  box-sizing: border-box;
}
.navbar.hidden-navbar {
  transform: translate3d(0, -100%, 0);
}
.bottom-wrap {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  padding: 30px 20px 16px;
}
/* // 20240307 수정 */
</style>

<template>
  <PageContents style="margin: -30px 0 23px">
    <UiTab>
      <div class="navbar" :class="{ 'hidden-navbar': !showNavbar }">
        <NavTab :useUiTab="true" :auto="false" class="navbarButton">
          <NavTabButton link="lentselfTab001">렌터카 셀프견적</NavTabButton>
          <NavTabButton link="lenthotTab002">렌터카 핫딜</NavTabButton>
        </NavTab>
      </div>

      <!-- 렌터카 셀프견적 -->
      <UiTabPanel name="lentselfTab001">
        <div :class="$style['image-view']" style="margin: 48px -20px 0">
          <img
            src="@/assets/images/etc/LR_DA/img_LR_DA_randing_self01.png"
            alt="아래 내용 참조"
          />
          <div class="blind">
            <p class="tit">쉽고! 빠른견적!</p>
            <h2>다이렉트 장기렌터카</h2>
            <span class="txt">부담은 줄이고, 편리함은 늘리고</span>
          </div>
        </div>
        <div :class="$style['image-view']" style="margin: 0 -20px">
          <a href="#" title="신용 걱정 NO! 견적 조회하기"
            ><img
              src="@/assets/images/etc/LR_DA/img_LR_DA_randing_self02.png"
              alt="신용 걱정 NO! 견적 조회하기"
          /></a>
        </div>
        <div :class="$style['image-view']" style="margin: 0 -20px">
          <img
            src="@/assets/images/etc/LR_DA/img_LR_DA_randing_self03.png"
            alt="아래 내용 참조"
          />
          <div class="blind">
            <ul>
              <li>세금 보험료 절약</li>
              <li>초기비용 ZERO</li>
              <li>맞춤견적</li>
            </ul>
          </div>
        </div>

        <div :class="$style['image-view']" style="margin: 0 -20px 40px">
          <img
            src="@/assets/images/etc/LR_DA/img_LR_DA_randing_self04.png"
            alt="아래 내용 참조"
          />
          <div class="blind">
            <h2 class="text-title-2"><span>셀프견적 진행절차</span></h2>
            <div class="selfstep_wrap">
              <ul class="selfstep_box">
                <li>
                  <span class="tit">STEP 1</span>
                  <p class="txt">
                    차량, 렌터카 조건 선택 후 <span>상담 신청</span>
                  </p>
                </li>
                <li>
                  <span class="tit">STEP 2</span>
                  <p class="txt">
                    진행가능여부 확인 후 <span>차량 계약 요청</span>
                  </p>
                </li>
                <li>
                  <span class="tit">STEP 3</span>
                  <p class="txt">차량 배정 후 <span>안내</span></p>
                </li>
                <li>
                  <span class="tit">STEP 4</span>
                  <p class="txt"><span>온라인 약정 진행</span></p>
                </li>
                <li>
                  <span class="tit">STEP 5</span>
                  <p class="txt"><span>손님께 차량 인도</span></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </UiTabPanel>
      <!-- // 렌터카 셀프견적 -->

      <!-- 렌터카 핫딜 -->
      <UiTabPanel name="lenthotTab002">
        <div :class="$style['image-view']" style="margin: 48px -20px 0">
          <img
            src="@/assets/images/etc/LR_DA/img_LR_DA_randing_hot01.png"
            alt="아래 내용 참조"
          />
          <div class="blind">
            <p class="tit">특가! 빠른출고!</p>
            <h2>장기 렌터카 즉시출고 핫딜!</h2>
            <span class="txt">인기차종 일주일 내 빠른 출고</span>
          </div>
        </div>
        <div :class="$style['image-view']" style="margin: 0 -20px">
          <a href="#" title="특가 렌터카 핫딜보기"
            ><img
              src="@/assets/images/etc/LR_DA/img_LR_DA_randing_hot02.png"
              alt="특가 렌터카 핫딜보기"
          /></a>
        </div>
        <div :class="$style['image-view']" style="margin: 0 -20px">
          <img
            src="@/assets/images/etc/LR_DA/img_LR_DA_randing_hot03.png"
            alt="아래 내용 참조"
          />
          <div class="blind">
            <ul>
              <li>특가할인</li>
              <li>7일 내 로켓배송</li>
              <li>인기차종 재고보유</li>
            </ul>
          </div>
        </div>

        <!-- // 렌터카 핫딜 -->

        <!-- 즉시출고 핫딜! -->
        <section
          class="row-margin-container-medium"
          style="
            background-color: #eef7f8;
            margin: 0 -20px 40px;
            padding: 0 20px 40px;
          "
        >
          <h2 class="text-title-2">이달의 핫딜<span></span></h2>
          <div
            style="
              padding: 19px;
              background-color: #fff;
              box-shadow: 0px 1px 1px 0px #deedf0;
              border: 1px solid #deedf0;
              border-radius: 8px;
            "
          >
            <span class="flex-box">
              <span class="flex-box__cell flex-box__cell--large flex-1">
                <span class="display-block font-weight-medium ellipsis"
                  >GV70
                </span>
                <span class="display-block text-body-4 color-navy ellipsis"
                  >월 524,130~
                </span>
              </span>
              <span class="flex-box__cell">
                <img
                  style="width: 96px; height: 48px"
                  src="/images/_dummy/car-thumb.png"
                />
              </span>
            </span>
          </div>

          <div
            style="
              padding: 19px;
              background-color: #fff;
              box-shadow: 0px 1px 1px 0px #deedf0;
              border: 1px solid #deedf0;
              border-radius: 8px;
              margin-top: 8px;
            "
          >
            <span class="flex-box">
              <span class="flex-box__cell flex-box__cell--large flex-1">
                <span class="display-block font-weight-medium ellipsis"
                  >디 올 뉴 싼타페
                </span>
                <span class="display-block text-body-4 color-navy ellipsis"
                  >월 395,900~
                </span>
              </span>
              <span class="flex-box__cell">
                <img
                  style="width: 96px; height: 48px"
                  src="/images/_dummy/car-thumb.png"
                />
              </span>
            </span>
          </div>

          <div
            style="
              padding: 19px;
              background-color: #fff;
              box-shadow: 0px 1px 1px 0px #deedf0;
              border: 1px solid #deedf0;
              border-radius: 8px;
              margin-top: 8px;
            "
          >
            <span class="flex-box">
              <span class="flex-box__cell flex-box__cell--large flex-1">
                <span class="display-block font-weight-medium ellipsis"
                  >디 올 뉴 그랜저
                </span>
                <span class="display-block text-body-4 color-navy ellipsis"
                  >월 439,600~
                </span>
              </span>
              <span class="flex-box__cell">
                <img
                  style="width: 96px; height: 48px"
                  src="/images/_dummy/car-thumb.png"
                />
              </span>
            </span>
          </div>

          <div
            style="
              padding: 19px;
              background-color: #fff;
              box-shadow: 0px 1px 1px 0px #deedf0;
              border: 1px solid #deedf0;
              border-radius: 8px;
              margin-top: 8px;
            "
          >
            <span class="flex-box">
              <span class="flex-box__cell flex-box__cell--large flex-1">
                <span class="display-block font-weight-medium ellipsis"
                  >GV80
                </span>
                <span class="display-block text-body-4 color-navy ellipsis"
                  >월 604,820~
                </span>
              </span>
              <span class="flex-box__cell">
                <img
                  style="width: 96px; height: 48px"
                  src="/images/_dummy/car-thumb.png"
                />
              </span>
            </span>
          </div>

          <div
            style="
              padding: 19px;
              background-color: #fff;
              box-shadow: 0px 1px 1px 0px #deedf0;
              border: 1px solid #deedf0;
              border-radius: 8px;
              margin-top: 8px;
            "
          >
            <span class="flex-box">
              <span class="flex-box__cell flex-box__cell--large flex-1">
                <span class="display-block font-weight-medium ellipsis"
                  >디 올 뉴 스포티지
                </span>
                <span class="display-block text-body-4 color-navy ellipsis"
                  >월 300,090~
                </span>
              </span>
              <span class="flex-box__cell">
                <img
                  style="width: 96px; height: 48px"
                  src="/images/_dummy/car-thumb.png"
                />
              </span>
            </span>
          </div>
          <div class="text-body-4 color-gray multi-ellipsis row-margin-item">
            * 이용기간 48개월, 선수금 30%, 연간 약정 거리 2만km 기준
          </div>
          <a href="#" title="즉시출고 핫딜 더보기" class="btn_hotmore">
            <img
              src="@/assets/images/etc/LR_DA/img_LR_DA_randing_hot04.png"
              alt="즉시출고 핫딜 더보기"
            />
          </a>
        </section>
        <!-- // 즉시출고 핫딜! -->
      </UiTabPanel>
    </UiTab>

    <!-- 20240306 -->
    <section>
      <div
        class="text-body-4 color-gray"
        :class="$style['basic-list__content']"
      >
        준법심의필 23-361<br />(2023.10.16 ~ 2024.10.15)
      </div>
    </section>
    <!-- // 20240306 -->

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap" style="display: flex; align-items: center">
          <button
            style="
              width: 100%;
              min-height: 52px;
              border-radius: 8px;
              padding: 15px;
              font-size: 1rem;
              line-height: 1;
              letter-spacing: -0.02em;
              font-weight: 500;
              text-align: center;
              text-decoration: none;
              color: #fff;
              background-color: #143b75;
              border: none;
            "
          >
            견적 조회
            <!-- 20240306 -->
          </button>
          <button
            style="
              margin: 0 0 0 10px;
              width: 100%;
              min-height: 52px;
              border-radius: 8px;
              padding: 15px;
              font-size: 1rem;
              line-height: 1;
              letter-spacing: -0.02em;
              font-weight: 500;
              text-align: center;
              text-decoration: none;
              color: #fff;
              background-color: #088e88;
              border: none;
            "
          >
            상담 예약
            <!-- 20240306 -->
          </button>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/MainHome.scss';
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>
