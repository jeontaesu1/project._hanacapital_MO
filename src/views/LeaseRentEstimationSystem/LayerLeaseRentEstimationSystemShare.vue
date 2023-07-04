<script>
// LR_M00_l007
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';

import IconKakaotalk from '@/assets/images/icon/kakaotalk.svg?component';
import IconPdfDownload from '@/assets/images/icon/pdf-download.svg?component';
import IconJpgDownload from '@/assets/images/icon/jpg-download.svg?component';
import IconPrint from '@/assets/images/icon/print.svg?component';
import IconFileOpen from '@/assets/images/icon/file-open.svg?component';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    FormList,
    FormListItem,
    InputBlock,
    InputBlockCell,
    IconKakaotalk,
    IconPdfDownload,
    IconJpgDownload,
    IconPrint,
    IconFileOpen,
  },
  setup() {
    const layer = ref(null);

    const copy = (text) => {
      navigator.clipboard.writeText(text).then(() => {
        console.log('success');
      });
    };

    return {
      layer,
      copy,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="toast" :backgroundClose="true">
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>공유하기</PopupTitle>
        </ToastPopupHead>
      </template>

      <div :class="[$style['share-list'], $style['share-list--col-3']]">
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
          <li :class="$style['share-list__item']">
            <button type="button" :class="$style['share-list__button']">
              <span :class="$style['share-list__icon']">
                <IconFileOpen />
              </span>
              <span :class="$style['share-list__text']">열기</span>
            </button>
          </li>
        </ul>
      </div>

      <FormList :classNames="{ wrap: 'row-margin-contents' }">
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
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemShare.scss';
</style>
