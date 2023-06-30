<script>
// LR_M00_l008
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';

import IconKakaotalk from '@/assets/images/icon/kakaotalk.svg?component';
import IconPdfDownload from '@/assets/images/icon/pdf-download.svg?component';
import IconJpgDownload from '@/assets/images/icon/jpg-download.svg?component';
import IconPrint from '@/assets/images/icon/print.svg?component';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    BasicButton,
    FormList,
    FormListItem,
    InputBlock,
    InputBlockCell,
    IconKakaotalk,
    IconPdfDownload,
    IconJpgDownload,
    IconPrint,
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
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>견적서 보기</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

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

      <div :class="[$style['image-view'], 'row-margin-contents-group']">
        <img src="@/assets/images/_dummy/box-detail.png" alt="샘플 이미지" />
      </div>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemViewEstimation.scss';
</style>
