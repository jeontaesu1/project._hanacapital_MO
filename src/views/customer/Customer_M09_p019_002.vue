<script>
// Customer_M09_p019_002
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
import DownloadButton from '@/components/ui/button/DownloadButton.vue';

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
    DownloadButton,
    IconArrow,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '판매 중단 상품 안내');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
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
    <!-- <div :class="$style['empty']">
      <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
    </div> -->
    <!-- // Case : 검색 결과 없을 때 -->

    <!-- Case : 검색 결과 있을 때 -->
    <ul class="reset-list">
      <li v-for="i in 10" :key="i" class="row-margin-container">
        <div class="flex-box">
          <div class="flex-box__cell flex-1">
            <h4 class="text-body-1 font-weight-medium">상품명</h4>
            <div class="reset-sort row-margin-small">
              <p class="text-body-4 font-weight-light color-gray-secondary">
                0000.00.00
              </p>
              <span class="text-body-4 font-weight-light">의료기·설비</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
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
@import '@/assets/scss/views/customer/CustomerFinancialConsumerProtectionIntenalControlRegulations.scss';
</style>

<style lang="scss" scoped>
.reset-sort {
  display: flex;
  align-items: center;
  span {
    display: flex;
    align-items: center;
    &:before {
      content: '';
      width: 1px;
      height: 12px;
      background: $color-gray-30;
      margin: 0 8px;
    }
  }
}
</style>
