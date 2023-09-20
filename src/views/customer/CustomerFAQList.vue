<script>
// Customer_M01_p001
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import FilterTab from '@/components/ui/tab/FilterTab.vue';
import FilterTabButton from '@/components/ui/tab/FilterTabButton.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';

import IconArrow from '@/assets/images/icon/dropdown.svg?component';

const dummyData = () => [
  {
    name: '금융상품',
    depth: [
      {
        name: '자동차금융',
      },
      {
        name: '개인금융',
      },
      {
        name: '기업금융',
      },
    ],
  },
  {
    name: '고객서비스',
    depth: [
      {
        name: '결제/입금',
      },
      {
        name: '승계/연장',
      },
      {
        name: '온라인 약정',
      },
      {
        name: '금리인하요구',
      },
    ],
  },
  {
    name: '홈페이지이용',
    depth: [
      {
        name: '본인인증',
      },
      {
        name: '서류발급',
      },
      {
        name: '회원가입',
      },
      {
        name: '아이핀',
      },
    ],
  },
  {
    name: '기타',
    depth: [
      {
        name: '채용관련',
      },
    ],
  },
];

export default {
  components: {
    PageContents,
    BasicSelect,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicHr,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    NavTab,
    NavTabButton,
    FilterTab,
    FilterTabButton,
    StickyBar,
    TextButton,
    SearchButton,
    IconArrow,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      data: dummyData(),
      active: 0,
      activeDepth: 0,
    });

    const setPage = (i = 0, j = 0) => {
      state.active = i;
      state.activeDepth = j;
    };

    onMounted(() => {
      store.ui.header.setTitle(() => 'FAQ');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      state,
      setPage,
    };
  },
};
</script>

<template>
  <PageContents>
    <InputBlock>
      <InputBlockCell>
        <BasicSelect
          :option="[
            {
              value: '1',
              text: '전체',
            },
            {
              value: '2',
              text: '제목',
            },
            {
              value: '3',
              text: '내용',
            },
          ]"
          buttonTitle="검색어 항목을 선택하기"
          layerTitle="검색어 항목을 선택해 주세요"
          :classNames="{
            wrap: 'input-width-category',
          }"
          defaultValue="1"
        />
      </InputBlockCell>
      <InputBlockCell :flexible="true">
        <BasicInput type="search" title="검색어" placeholder="검색어 입력" />
      </InputBlockCell>
      <InputBlockCell type="search">
        <SearchButton />
      </InputBlockCell>
    </InputBlock>

    <BasicHr className="row-margin-container-medium" />

    <StickyBar>
      <NavTab :scroll="true" :auto="true" :classNames="{ wrap: $style['nav'] }">
        <NavTabButton
          tagName="button"
          type="button"
          :active="state.active === 0"
          @click="setPage(0)"
        >
          전체
        </NavTabButton>
        <NavTabButton
          v-for="(item, i) in state.data"
          :key="i"
          tagName="button"
          type="button"
          :active="state.active === i + 1"
          @click="setPage(i + 1)"
        >
          {{ item.name }}
        </NavTabButton>
      </NavTab>
    </StickyBar>

    <FilterTab
      v-if="state.active > 0"
      :classNames="{ wrap: $style['category'] }"
    >
      <FilterTabButton
        v-for="(item, i) in state.data[state.active - 1].depth"
        :key="i"
        tagName="button"
        type="button"
        :active="state.activeDepth === i"
        @click="setPage(state.active, i)"
      >
        {{ item.name }}
      </FilterTabButton>
    </FilterTab>

    <!-- Case : 검색 결과가 없을 경우 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">검색 결과가 없습니다.</p>
    </div>
    <!-- // Case : 검색 결과가 없을 경우 -->

    <!-- Case : 조회 내역이 있을 경우 -->
    <div :class="$style['faq']">
      <UiAccordion :classNames="{ wrap: $style['faq__list'] }">
        <UiAccordionItem
          v-for="i in 10"
          :key="i"
          :classNames="{ item: $style['faq__item'] }"
        >
          <div :class="$style['faq__head']">
            <div :class="$style['faq__block']">
              <div :class="$style['faq__name']">신차할부 오토론</div>
              <div :class="$style['faq__title']">신차할부 오토론이란?</div>
            </div>
            <div :class="$style['faq__right']">
              <UiAccordionOpener
                :classNames="{ button: $style['faq__opener'] }"
              />
            </div>
          </div>

          <UiAccordionLayer :classNames="{ layer: $style['faq__layer'] }">
            <section :class="$style['faq__contents']">
              // 내용 노출<br />
              차량을 구매할 목적으로 당사에서 대출 받고, 일정기간 동안 원금과
              이자가 포함된 원리금을 매월 일정하게 납부하는 대출 상품입니다
            </section>
          </UiAccordionLayer>
        </UiAccordionItem>
      </UiAccordion>
    </div>

    <div class="inline-wrap align-center row-margin-item">
      <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
        더보기
        <template v-slot:rightIcon>
          <IconArrow />
        </template>
      </TextButton>
    </div>
    <!-- // Case : 조회 내역이 있을 경우 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerFAQList.scss';
</style>
