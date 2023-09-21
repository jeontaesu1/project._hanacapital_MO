<script>
// Main_M04_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiLayoutStore } from '@/stores/ui/layout';
import { useUiHeaderStore } from '@/stores/ui/header';
import { useUiDockBarStore } from '@/stores/ui/dockBar';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import ProductIcon from '@/components/ui/imageData/ProductIcon.vue';

const BASE_URL = import.meta.env.BASE_URL;

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    StickyBar,
    NavTab,
    NavTabButton,
    RoundStatus,
    ProductIcon,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        layout: useUiLayoutStore(),
        header: useUiHeaderStore(),
        dockBar: useUiDockBarStore(),
      },
    };

    onMounted(() => {
      store.ui.common.setApp(true); // 앱모드 테스트 변수

      store.ui.layout.setUseFooter(false);

      store.ui.header.setTitle(() => ' ');
      store.ui.header.setLeftButtons(() => []);
      store.ui.header.setRightButtons(() => []);

      store.ui.dockBar.setActive(() => 'product');
    });

    onUnmounted(() => {
      store.ui.common.setApp(); // 앱모드 테스트 변수

      store.ui.layout.setUseFooter();

      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();

      store.ui.dockBar.setActive();
    });

    return {
      BASE_URL,
    };
  },
};
</script>

<template>
  <PageContents :classNames="{ head: $style['head'] }">
    <template v-slot:head>
      <PageTextGroup>
        <PageMainText>상품</PageMainText>
      </PageTextGroup>

      <StickyBar>
        <NavTab
          :scroll="true"
          :auto="true"
          :classNames="{ wrap: 'row-margin-none' }"
        >
          <NavTabButton tagName="button" type="button" :active="true">
            전체
          </NavTabButton>
          <NavTabButton tagName="button" type="button">신용대출</NavTabButton>
          <NavTabButton tagName="button" type="button">자동차</NavTabButton>
          <NavTabButton tagName="button" type="button"
            >의료기·설비</NavTabButton
          >
          <NavTabButton tagName="button" type="button">제휴</NavTabButton>
        </NavTab>
      </StickyBar>
    </template>

    <!-- Case : 상품이 없을 때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">상품을 준비중입니다.</p>
    </div>
    <!-- // Case : 상품이 없을 때 -->

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <!-- 신용대출 -->
        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/pig.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">
                소득이 있다면 쉽고 빠른 신용대출
              </div>
              <div :class="$style['icon-list__title']">e하나신용대출</div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                최대 1억원ㆍ무서류
              </div>
              <button type="button" :class="$style['icon-list__tag-button']">
                <RoundStatus theme="undenary">
                  지금 가입하면 최대 1만원 지원!
                </RoundStatus>
              </button>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/building.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">
                아파트 소유자를 위한 무담보대출
              </div>
              <div :class="$style['icon-list__title']">행복아파트론</div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                최대 2억원ㆍ최대 84개월
              </div>
              <button type="button" :class="$style['icon-list__tag-button']">
                <RoundStatus theme="undenary">
                  지금 가입하면 최대 1만원 지원!
                </RoundStatus>
              </button>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/car-security.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">
                차량 소유자를 위한 특별한도
              </div>
              <div :class="$style['icon-list__title']">원큐자동차담보대출</div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                최대 1억원ㆍ최대 84개월
              </div>
              <button type="button" :class="$style['icon-list__tag-button']">
                <RoundStatus theme="undenary">
                  지금 가입하면 최대 1만원 지원!
                </RoundStatus>
              </button>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/vip.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">
                하나캐피탈 손님을 위한
              </div>
              <div :class="$style['icon-list__title']">우수고객추가대출</div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                중도상환수수료 0원
              </div>
              <button type="button" :class="$style['icon-list__tag-button']">
                <RoundStatus theme="undenary">
                  지금 가입하면 최대 1만원 지원!
                </RoundStatus>
              </button>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/interest-rate.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">
                주식매입자금지원 금융서비스
              </div>
              <div :class="$style['icon-list__title']">스탁론</div>
              <div
                :class="[
                  $style['icon-list__text'],
                  $style['icon-list__text--secondary'],
                ]"
              >
                최대 6억원
              </div>
              <button type="button" :class="$style['icon-list__tag-button']">
                <RoundStatus theme="undenary">
                  지금 가입하면 최대 1만원 지원!
                </RoundStatus>
              </button>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>
        <!-- // 신용대출 -->

        <!-- 자동차 -->
        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/car-rent.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">
                부담은 줄이고 편리함을 늘린
              </div>
              <div :class="$style['icon-list__title']">장기렌터카</div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/car-lease.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">
                다양한 혜택, 편리한 내차 이용
              </div>
              <div :class="$style['icon-list__title']">오토리스</div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/car-used.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">스마트한 중고차 구입</div>
              <div :class="$style['icon-list__title']">중고차오토론</div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/car-change.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__sup']">원래조건 그대로</div>
              <div :class="$style['icon-list__title']">오토승계</div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>
        <!-- // 자동차 -->

        <!-- 의료기·설비 -->
        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/lease-stuff.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__title']">일반리스</div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/medical.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__title']">일반할부</div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>

        <li :class="$style['icon-list__item']">
          <div
            :class="[
              $style['icon-list__block'],
              $style['icon-list__block--product'],
            ]"
          >
            <div :class="$style['icon-list__icon']">
              <ProductIcon
                :classNames="{ wrap: $style['icon-list__icon-image'] }"
                src="/images/product-icon/goods-loan.png"
              />
            </div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__title']">내구재할부</div>
            </div>
            <button type="button" :class="$style['icon-list__view-button']">
              <span class="for-a11y">상세보기</span>
            </button>
          </div>
        </li>
        <!-- // 의료기·설비 -->

        <!-- 제휴 -->
        <li :class="$style['icon-list__item']">
          <div :class="$style['image-view']">
            <img
              :src="`${BASE_URL}images/_dummy/banner-006.png`"
              alt="배너 설명 넣어주세요"
            />
          </div>
        </li>
        <!-- // 제휴 -->
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/MainProduct.scss';
</style>
