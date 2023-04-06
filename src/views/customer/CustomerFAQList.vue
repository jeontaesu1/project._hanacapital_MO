<script>
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
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

export default {
  components: {
    PageContents,
    BasicSelect,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
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
    const state = reactive({
      searchCodeError: false,
    });

    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
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
    };
  },
};
</script>

<template>
  <PageContents>
    <FormList>
      <FormListItem
        target="#CustomerFAQSearchInput"
        :class="$style['no-padding']"
      >
        <FormInvalid :error="state.searchCodeError">
          <InputBlock type="search" :error="state.searchCodeError">
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
                buttonId="CustomerFAQSearchInput"
                :classNames="{
                  wrap: 'input-width-telecom',
                }"
                defaultValue="1"
              />
            </InputBlockCell>
            <InputBlockCell :flexible="true">
              <BasicInput
                type="search"
                title="검색어"
                placeholder="검색어 입력"
              />
            </InputBlockCell>
            <InputBlockCell type="search">
              <SearchButton />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <BasicHr className="row-margin-container-medium" />

    <StickyBar>
      <NavTab :scroll="true" :auto="true">
        <NavTabButton tagName="button" type="button" :active="true">
          전체
        </NavTabButton>
        <NavTabButton tagName="button" type="button">금융상품</NavTabButton>
        <NavTabButton tagName="button" type="button">고객서비스</NavTabButton>
        <NavTabButton tagName="button" type="button">홈페이지이용</NavTabButton>
        <NavTabButton tagName="button" type="button">기타</NavTabButton>
      </NavTab>
    </StickyBar>

    <FilterTab>
      <FilterTabButton tagName="button" type="button" :active="true"
        >자동차금융</FilterTabButton
      >
      <FilterTabButton tagName="button" type="button">개인금융</FilterTabButton>
      <FilterTabButton tagName="button" type="button">기업금융</FilterTabButton>
    </FilterTab>

    <!-- Case : 조회 내역이 있을 경우 -->
    <div :class="$style['faq']">
      <UiAccordion :classNames="{ wrap: $style['faq__list'] }">
        <UiAccordionItem
          :classNames="{ item: $style['faq__item'] }"
          :initialOpen="true"
        >
          <div :class="$style['faq__head']">
            <div :class="$style['faq__block']">
              <div :class="$style['faq__name']">신차할부 오토론</div>
              <div :class="$style['faq__title']">신차할부 오토론이란?</div>
            </div>
            <div :class="$style['faq__right']">
              <UiAccordionOpener :class="$style['faq__opener']" />
            </div>
          </div>

          <UiAccordionLayer>
            <div :class="$style['faq__contents']">
              <div class="text-body-3 color-gray">
                차량을 구매할 목적으로 당사에서 대출 받고, 일정기간 동안 원금과
                이자가 포함된 원리금을 매월 일정하게 납부하는 대출 상품입니다
              </div>
            </div>
          </UiAccordionLayer>
        </UiAccordionItem>
        <UiAccordionItem
          :classNames="{ item: $style['faq__item'] }"
          :initialOpen="true"
        >
          <div :class="$style['faq__head']">
            <div :class="$style['faq__block']">
              <div :class="$style['faq__name']">신차할부 오토론</div>
              <div :class="$style['faq__title']">신차할부 오토론이란?</div>
            </div>
            <div :class="$style['faq__right']">
              <UiAccordionOpener :class="$style['faq__opener']" />
            </div>
          </div>

          <UiAccordionLayer>
            <div :class="$style['faq__contents']">
              <div class="text-body-3 color-gray">
                차량을 구매할 목적으로 당사에서 대출 받고, 일정기간 동안 원금과
                이자가 포함된 원리금을 매월 일정하게 납부하는 대출 상품입니다
              </div>
            </div>
          </UiAccordionLayer>
        </UiAccordionItem>
        <UiAccordionItem
          :classNames="{ item: $style['faq__item'] }"
          :initialOpen="true"
        >
          <div :class="$style['faq__head']">
            <div :class="$style['faq__block']">
              <div :class="$style['faq__name']">신차할부 오토론</div>
              <div :class="$style['faq__title']">신차할부 오토론이란?</div>
            </div>
            <div :class="$style['faq__right']">
              <UiAccordionOpener :class="$style['faq__opener']" />
            </div>
          </div>

          <UiAccordionLayer>
            <div :class="$style['faq__contents']">
              <div class="text-body-3 color-gray">
                차량을 구매할 목적으로 당사에서 대출 받고, 일정기간 동안 원금과
                이자가 포함된 원리금을 매월 일정하게 납부하는 대출 상품입니다
              </div>
            </div>
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
    <!-- //Case : 조회 내역이 있을 경우 -->

    <!-- Case : 조회 내역이 없을 경우 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">조회된 내역이 없습니다</p>
    </div>
    <!-- //Case : 조회 내역이 없을 경우 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerFAQList.scss';
</style>
