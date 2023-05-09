<script>
// Customer_M09_p011
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import IconArrow from '@/assets/images/icon/dropdown.svg?component';

export default {
  components: {
    PageContents,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicSelect,
    BasicHr,
    SearchButton,
    TextButton,
    IconArrow,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '금융소비자보호자료');
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

    <!-- Case : 검색 결과 없을 때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
    </div>
    <!-- // Case : 검색 결과 없을 때 -->

    <!-- Case : 검색 결과 있을 때 -->
    <div :class="$style['board']">
      <ul :class="$style['board__list']">
        <li v-for="i in 10" :key="i" :class="$style['board__item']">
          <RouterLink
            to="/customer/financial-consumer-protection-data-detail"
            :class="$style['board__link']"
          >
            <span :class="$style['board__title']">
              <span :class="$style['board__title-text']">
                사업자담보대출 [금융소비자보호자료]
              </span>
            </span>
            <span :class="$style['board__text']">2022.10.25</span>
          </RouterLink>
        </li>
      </ul>
    </div>
    <!-- // Case : 검색 결과 있을 때 -->

    <div class="inline-wrap align-center row-margin-contents">
      <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
        더보기
        <template v-slot:rightIcon>
          <IconArrow />
        </template>
      </TextButton>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerFinancialConsumerProtectionData.scss';
</style>
