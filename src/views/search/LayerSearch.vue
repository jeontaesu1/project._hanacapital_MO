<script>
// Common_M00_l019
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import FilterTab from '@/components/ui/tab/FilterTab.vue';
import FilterTabButton from '@/components/ui/tab/FilterTabButton.vue';

import IconLink from '@/assets/images/icon/link.svg?component';

export default {
  components: {
    RouterLink,
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicInput,
    SearchButton,
    FilterTab,
    FilterTabButton,
    IconLink,
  },
  setup() {
    const layer = ref(null);

    return {
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead
          :classNames="{
            wrap: $style['head'],
            left: $style['head__left'],
            center: $style['head__center'],
            right: $style['head__right'],
          }"
        >
          <template v-slot:left>
            <PopupButton type="back" @click="layerSlotProps.close()" />
          </template>
          <BasicInput
            type="search"
            title="검색어"
            placeholder="검색어를 입력하세요"
            :classNames="{
              wrap: $style['head__form'],
              input: $style['head__input'],
            }"
          />
          <template v-slot:right>
            <SearchButton />
          </template>
        </FullPopupHead>
      </template>

      <!-- DD : 검색 전 노출 -->
      <div class="contents-wrap">
        <section :class="$style['section']">
          <h3 :class="$style['section__title']">인기검색어</h3>
          <ol :class="$style['keyword-rank']">
            <li v-for="i in 5" :key="i" :class="$style['keyword-rank__item']">
              <button type="button" :class="$style['keyword-rank__button']">
                <span :class="$style['keyword-rank__num']">{{ i }}</span>
                <span :class="$style['keyword-rank__text']">
                  내 대출 내 대출 내 대출 내 대출
                </span>
              </button>
            </li>
          </ol>
        </section>
      </div>
      <!-- // DD : 검색 전 노출 -->

      <!-- DD : 검색 후 노출 -->
      <div class="contents-wrap">
        <!-- Case : 결과 없을 때 -->
        <div :class="$style['empty']">
          <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
        </div>
        <!-- // Case : 결과 없을 때 -->

        <!-- Case : 결과 있을 때 -->
        <FilterTab>
          <FilterTabButton tagName="button" type="button" :active="true">
            전체 6
          </FilterTabButton>
          <FilterTabButton tagName="button" type="button">
            메뉴 2
          </FilterTabButton>
          <FilterTabButton tagName="button" type="button">
            이벤트 2
          </FilterTabButton>
          <FilterTabButton tagName="button" type="button">
            공지사항 2
          </FilterTabButton>
        </FilterTab>

        <section :class="$style['section']">
          <h3 :class="$style['section__title']">메뉴(2)</h3>
          <ul
            :class="[
              $style['search-list'],
              $style['search-list--margin-regular'],
            ]"
          >
            <li v-for="i in 2" :key="i" :class="$style['search-list__item']">
              <RouterLink to="" :class="$style['search-list__link']">
                <span :class="$style['search-list__text']">
                  개인금융<span :class="$style['search-list__icon']"
                    ><IconLink /></span
                  >e하나<mark>신용</mark>대출
                </span>
              </RouterLink>
            </li>
          </ul>
        </section>
        <section :class="$style['section']">
          <h3 :class="$style['section__title']">이벤트(2)</h3>
          <ul
            :class="[
              $style['search-list'],
              $style['search-list--margin-regular'],
            ]"
          >
            <li v-for="i in 2" :key="i" :class="$style['search-list__item']">
              <RouterLink to="" :class="$style['search-list__link']">
                <span :class="$style['search-list__text']">
                  2030을 위한 <mark>신용</mark>대출 혜택
                </span>
                <span :class="$style['search-list__date']">
                  2023.01.01 ~ 2023.01.24
                </span>
              </RouterLink>
            </li>
          </ul>
        </section>
        <section :class="$style['section']">
          <h3 :class="$style['section__title']">공지사항(2)</h3>
          <ul
            :class="[
              $style['search-list'],
              $style['search-list--margin-regular'],
            ]"
          >
            <li v-for="i in 2" :key="i" :class="$style['search-list__item']">
              <RouterLink to="" :class="$style['search-list__link']">
                <span :class="$style['search-list__text']">
                  2030을 위한 <mark>신용</mark>대출 혜택
                </span>
                <span :class="$style['search-list__date']">
                  2023.01.01 ~ 2023.01.24
                </span>
              </RouterLink>
            </li>
          </ul>
        </section>
        <!-- // Case : 결과 있을 때 -->
      </div>
      <!-- // DD : 검색 후 노출 -->
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/search/LayerSearch.scss';
</style>
