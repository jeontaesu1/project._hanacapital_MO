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
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import DocumentView from '@/components/ui/viewer/DocumentView.vue';

import DocumentEstimate001Contents from '@/views/document/DocumentEstimate001Contents.vue';
import DocumentEstimate002Contents from '@/views/document/DocumentEstimate002Contents.vue';
import DocumentEstimate003Contents from '@/views/document/DocumentEstimate003Contents.vue';
import DocumentEstimate004Contents from '@/views/document/DocumentEstimate004Contents.vue';

import IconKakaotalk from '@/assets/images/icon/kakaotalk.svg?component';
import IconPdfDownload from '@/assets/images/icon/pdf-download.svg?component';
import IconJpgDownload from '@/assets/images/icon/jpg-download.svg?component';
import IconPrint from '@/assets/images/icon/print.svg?component';

import dummyDataEstimate from '@/assets/_dummyData/견적서asis/견적서HTML샘플(렌트_장기렌트).html?raw';

export default {
  components: {
    PageContents,
    BasicButton,
    FormList,
    FormListItem,
    InputBlock,
    InputBlockCell,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    DocumentView,
    DocumentEstimate001Contents,
    DocumentEstimate002Contents,
    DocumentEstimate003Contents,
    DocumentEstimate004Contents,
    IconKakaotalk,
    IconPdfDownload,
    IconJpgDownload,
    IconPrint,
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
      dummyDataEstimate,
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
                <IconKakaotalk />
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
                <IconPdfDownload />
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
                <IconJpgDownload />
              </span>
              <span :class="$style['share-list__text']">JPG 다운로드</span>
            </a>
          </li>
          <li :class="$style['share-list__item']">
            <button type="button" :class="$style['share-list__button']">
              <span :class="$style['share-list__icon']">
                <IconPrint />
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

    <div class="row-margin-contents-group">
      <CheckBox
        id="leaseRentEstimationSystemViewEstimationCheck001"
        theme="tertiary"
        :classNames="{ wrap: 'row-margin-item-group' }"
      >
        <CheckBoxObject />
        <CheckBoxLabelText>연락처 표시</CheckBoxLabelText>
      </CheckBox>

      <!-- Case : AS-IS -->
      <DocumentView>
        <article
          :class="$style['document']"
          v-html="dummyDataEstimate"
        ></article>
      </DocumentView>
      <!-- // Case : AS-IS -->

      <!-- Case : TO-BE -->
      <DocumentView>
        <DocumentEstimate001Contents />
        <DocumentEstimate002Contents />
        <DocumentEstimate003Contents />
        <DocumentEstimate004Contents />
      </DocumentView>
      <!-- // Case : TO-BE -->
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemViewEstimation.scss';
</style>
