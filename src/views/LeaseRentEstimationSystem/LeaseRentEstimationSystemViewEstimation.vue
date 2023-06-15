<script>
// LR_M00_p003
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';

import IconSample from '@/assets/images/_dummy/sample.svg?component';

export default {
  components: {
    PageContents,
    BasicButton,
    FormList,
    FormListItem,
    InputBlock,
    InputBlockCell,
    IconSample,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const copy = (text) => {
      navigator.clipboard.writeText(text).then(() => {
        console.log('success');
      });
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '견적서 보기');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      copy,
    };
  },
};
</script>

<template>
  <PageContents>
    <div>
      <div :class="[$style['share-list'], $style['share-list--col-4']]">
        <ul :class="$style['share-list__list']">
          <li :class="$style['share-list__item']">
            <button type="button" :class="$style['share-list__button']">
              <span :class="$style['share-list__icon']">
                <IconSample />
              </span>
              <span :class="$style['share-list__text']">카카오톡</span>
            </button>
          </li>
          <li :class="$style['share-list__item']">
            <a
              href="/foo/bar.pdf"
              download
              :class="$style['share-list__button']"
            >
              <span :class="$style['share-list__icon']">
                <IconSample />
              </span>
              <span :class="$style['share-list__text']">PDF 다운로드</span>
            </a>
          </li>
          <li :class="$style['share-list__item']">
            <a
              href="/foo/bar.pdf"
              download
              :class="$style['share-list__button']"
            >
              <span :class="$style['share-list__icon']">
                <IconSample />
              </span>
              <span :class="$style['share-list__text']">JPG 다운로드</span>
            </a>
          </li>
          <li :class="$style['share-list__item']">
            <button type="button" :class="$style['share-list__button']">
              <span :class="$style['share-list__icon']">
                <IconSample />
              </span>
              <span :class="$style['share-list__text']">인쇄</span>
            </button>
          </li>
        </ul>
      </div>

      <FormList :classNames="{ wrap: 'row-margin-item-group' }">
        <FormListItem titleText="URL" :forceFocus="true">
          <InputBlock :disabled="true">
            <InputBlockCell :flexible="true">
              <div class="ellipsis">
                https://www.hanacapital.co.kr/personal/info/directLoan.hnc
              </div>
            </InputBlockCell>
            <template v-slot:right>
              <BasicButton
                size="mini"
                theme="quaternary"
                @click="
                  copy(
                    'https://www.hanacapital.co.kr/personal/info/directLoan.hnc'
                  )
                "
                >URL 복사</BasicButton
              >
            </template>
          </InputBlock>
        </FormListItem>
      </FormList>
    </div>

    <div :class="[$style['image-view'], 'row-margin-contents-group']">
      <img src="@/assets/images/_dummy/box-detail.png" alt="샘플 이미지" />
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemViewEstimation.scss';
</style>
