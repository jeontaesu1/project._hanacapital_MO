<script>
// Main_M05_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

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
import TextButton from '@/components/ui/button/TextButton.vue';
import IconLink from '@/assets/images/icon/link.svg?component';

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
    TextButton,
    IconLink,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => ' ');
      store.ui.header.setLeftButtons(() => ' ');
      store.ui.header.setRightButtons(() => ' ');
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
    <PageTextGroup>
      <PageMainText><strong>혜택</strong></PageMainText>
    </PageTextGroup>

    <StickyBar>
      <NavTab
        :auto="true"
        :classNames="{
          wrap: 'row-margin-contents-small row-margin-bottom-none',
        }"
      >
        <NavTabButton tagName="button" type="button" :active="true">
          전체
        </NavTabButton>
        <NavTabButton tagName="button" type="button">이벤트</NavTabButton>
        <NavTabButton tagName="button" type="button">FUN</NavTabButton>
        <NavTabButton tagName="button" type="button">쿠폰함</NavTabButton>
      </NavTab>
    </StickyBar>

    <!-- Case : FUN 메뉴 선택시 노출 -->
    <FilterTab
      :classNames="{ wrap: 'row-margin-contents-small row-margin-bottom-none' }"
    >
      <FilterTabButton tagName="button" type="button" :active="true">
        원큐자동차상식
      </FilterTabButton>
      <FilterTabButton tagName="button" type="button">하캐카북</FilterTabButton>
      <FilterTabButton tagName="button" type="button">인스타툰</FilterTabButton>
      <FilterTabButton tagName="button" type="button">
        참여형콘텐츠
      </FilterTabButton>
    </FilterTab>
    <!-- //Case : FUN 메뉴 선택시 노출 -->

    <div
      :class="[
        $style['benefit'],
        'row-margin-contents-group row-margin-bottom-none',
      ]"
    >
      <ul :class="$style['benefit__list']">
        <!-- Case : 이벤트 탭 선택 시 -->
        <!-- Case : 진행중인 경우 -->
        <li :class="$style['benefit__item']">
          <div
            :class="[$style['benefit__block'], $style['benefit__block--event']]"
          >
            <button type="button" :class="$style['benefit__button']">
              <div :class="$style['benefit__inner']">
                <div :class="$style['benefit__left']">
                  <RoundStatus size="small" theme="duodenary"
                    >진행중</RoundStatus
                  >
                  <h3 :class="$style['benefit__title']">
                    에코플러스 자동차보험
                  </h3>
                  <p :class="$style['benefit__sub']">지금 바로 GO!</p>
                  <div :class="$style['benefit__date']">
                    2022.12.01 ~ 2022.12.31
                  </div>
                </div>
                <div :class="$style['benefit__right']">
                  <div :class="$style['benefit__icon']">
                    <img
                      src="@/assets/images/_dummy/banner-sample.png"
                      alt="샘플 아이콘"
                    />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </li>

        <li :class="$style['benefit__item']">
          <div
            :class="[$style['benefit__block'], $style['benefit__block--event']]"
          >
            <div :class="$style['benefit__inner']">
              <div :class="$style['benefit__left']">
                <RoundStatus size="small" theme="duodenary">진행중</RoundStatus>
                <h3 :class="$style['benefit__title']">에코플러스 자동차보험</h3>
                <p :class="$style['benefit__sub']">
                  오늘 신청하면 혜택이 두배!<br />
                  1+1 한명 더 자동 가입되는 안심 혜택 놓치지 마세요.
                </p>
                <div :class="$style['benefit__date']">
                  2022.12.01 ~ 2022.12.31
                </div>
                <div :class="$style['benefit__link']">
                  <TextButton
                    theme="secondary"
                    :block="true"
                    :classNames="{ wrap: $style['benefit__link-button'] }"
                  >
                    바로가기
                    <template v-slot:rightIcon>
                      <IconLink />
                    </template>
                  </TextButton>
                </div>
              </div>
              <div :class="$style['benefit__right']">
                <div :class="$style['benefit__icon']">
                  <img
                    src="@/assets/images/_dummy/banner-sample.png"
                    alt="샘플 아이콘"
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
        <!-- //Case : 진행중인 경우 -->

        <!-- Case : 종료된 경우 -->
        <li :class="$style['benefit__item']">
          <div
            :class="[
              $style['benefit__block'],
              $style['benefit__block--event'],
              $style['benefit__block--event-end'],
            ]"
          >
            <button type="button" :class="$style['benefit__button']">
              <div :class="$style['benefit__inner']">
                <div :class="$style['benefit__left']">
                  <RoundStatus size="small" theme="duodenary">종료</RoundStatus>
                  <h3 :class="$style['benefit__title']">
                    에코플러스 자동차보험
                  </h3>
                  <p :class="$style['benefit__sub']">
                    오늘 신청하면 혜택이 두배!<br />
                    1+1 한명 더 자동 가입되는 안심 혜택 놓치지 마세요.
                  </p>
                  <div :class="$style['benefit__date']">
                    2022.12.01 ~ 2022.12.31
                  </div>
                </div>
                <div :class="$style['benefit__right']">
                  <div :class="$style['benefit__icon']">
                    <img
                      src="@/assets/images/_dummy/banner-sample.png"
                      alt="샘플 아이콘"
                    />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </li>
        <!-- //Case : 종료된 경우 -->
        <!-- //Case : 이벤트 탭 선택 시 -->

        <!-- Case : FUN 탭 선택 시 -->
        <li :class="$style['benefit__item']">
          <div
            :class="[$style['benefit__block'], $style['benefit__block--fun']]"
          >
            <button type="button" :class="$style['benefit__button']">
              <div :class="$style['benefit__inner']">
                <div :class="$style['benefit__left']">
                  <h3 :class="$style['benefit__title']">소모품 교체하기</h3>
                  <p :class="$style['benefit__sub']">소모품 교체 체크리스트!</p>
                </div>
                <div :class="$style['benefit__right']">
                  <div :class="$style['benefit__thumbnail']"></div>
                </div>
              </div>
            </button>
          </div>
        </li>

        <li :class="$style['benefit__item']">
          <div
            :class="[$style['benefit__block'], $style['benefit__block--fun']]"
          >
            <button type="button" :class="$style['benefit__button']">
              <div :class="$style['benefit__inner']">
                <div :class="$style['benefit__left']">
                  <h3 :class="$style['benefit__title']">
                    소모품 교체하기 (초보자 가이드)
                  </h3>
                  <p :class="$style['benefit__sub']">
                    소모품 교체 체크리스트!<br />
                    초보자 가이드로 언제 어디서나 쉽게 교체할 수 있어요. 초보자
                    가이드로 언제 어디서나 쉽게 교체할 수 있어요.
                  </p>
                </div>
                <div :class="$style['benefit__right']">
                  <div :class="$style['benefit__thumbnail']"></div>
                </div>
              </div>
            </button>
          </div>
        </li>
        <!-- //Case : FUN 탭 선택 시 -->

        <!-- Case : 쿠폰함 탭 선택 시 -->
        <li :class="$style['benefit__item']">
          <div
            :class="[
              $style['benefit__block'],
              $style['benefit__block--coupon'],
            ]"
          >
            <div :class="$style['benefit__inner']">
              <div :class="$style['benefit__left']">
                <button type="button" :class="$style['benefit__button']">
                  <div :class="$style['benefit__logo']">
                    <img
                      src="@/assets/images/_dummy/logo-sample.png"
                      alt="샘플 로고"
                    />
                  </div>
                  <div :class="$style['benefit__info']">
                    <div :class="$style['benefit__category']">스타벅스</div>
                    <div :class="$style['benefit__title']">
                      디카페인 콜드브루 라떼 T 쿠폰
                    </div>
                    <div :class="$style['benefit__date']">
                      2022.12.01 ~ 2022.12.31
                    </div>
                  </div>
                </button>
              </div>
              <div :class="$style['benefit__right']">
                <DownloadButton
                  tagName="a"
                  href="/foo/bar.png"
                  theme="secondary"
                  download
                  :class="$style['benefit__download']"
                />
              </div>
            </div>
          </div>
        </li>
        <!-- //Case : 쿠폰함 탭 선택 시 -->
      </ul>
    </div>

    <!-- Case : 검색 결과 없을 때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">검색 결과가 없습니다.</p>
    </div>
    <!-- //Case : 검색 결과 없을 때 -->

    <!-- Case : 등록된 혜택이 0개인 경우 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">혜택을 준비중입니다.</p>
    </div>
    <!-- //Case : 등록된 혜택이 0개인 경우 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/MainBenefit.scss';
</style>
