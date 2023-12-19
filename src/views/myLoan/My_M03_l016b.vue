<script>
// My_M03_l016b
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    PopupSubTitle,
    InputBlock,
    InputBlockCell,
    BasicInput,
    SearchButton,
    BasicHr,
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
  <UiLayer ref="layer" type="toast" :backgroundClose="true">
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>국가명을 입력해 주세요</PopupTitle>
          <PopupSubTitle>국가명 일부를 입력해 주세요</PopupSubTitle>
        </ToastPopupHead>
      </template>

      <InputBlock type="search">
        <InputBlockCell :flexible="true">
          <BasicInput
            type="search"
            title="검색어 입력"
            placeholder="검색어 입력"
          />
        </InputBlockCell>
        <InputBlockCell type="search">
          <SearchButton />
        </InputBlockCell>
      </InputBlock>

      <!-- Case : 검색 결과 없을 때 -->
      <div
        :class="[$style['empty'], 'row-margin-item', 'row-margin-bottom-none']"
      >
        <p :class="$style['empty__text']">검색결과가 없습니다.</p>
      </div>
      <!-- // Case : 검색 결과 없을 때 -->

      <!-- Case : 자동 완성 -->
      <div class="row-margin-item">
        <div :class="$style['icon-buttons']">
          <ul :class="$style['icon-buttons__list']">
            <li :class="$style['icon-buttons__item']">
              <button type="button" :class="$style['icon-buttons__block']">
                <span :class="$style['icon-buttons__content']">
                  <span :class="$style['icon-buttons__title']"
                    >미국 (UNITED STATES)</span
                  >
                </span>
              </button>
            </li>
            <li :class="$style['icon-buttons__item']">
              <button type="button" :class="$style['icon-buttons__block']">
                <span :class="$style['icon-buttons__content']">
                  <span :class="$style['icon-buttons__title']"
                    >일본 (JAPAN)</span
                  >
                </span>
              </button>
            </li>
            <li :class="$style['icon-buttons__item']">
              <button type="button" :class="$style['icon-buttons__block']">
                <span :class="$style['icon-buttons__content']">
                  <span :class="$style['icon-buttons__title']"
                    >중국 (CHINA)</span
                  >
                </span>
              </button>
            </li>
            <li :class="$style['icon-buttons__item']">
              <button type="button" :class="$style['icon-buttons__block']">
                <span :class="$style['icon-buttons__content']">
                  <span :class="$style['icon-buttons__title']"
                    >캐나다 (CANADA)</span
                  >
                </span>
              </button>
            </li>
            <li :class="$style['icon-buttons__item']">
              <button type="button" :class="$style['icon-buttons__block']">
                <span :class="$style['icon-buttons__content']">
                  <span :class="$style['icon-buttons__title']"
                    >호주 (AUSTRAILIA)</span
                  >
                </span>
              </button>
            </li>
            <li :class="$style['icon-buttons__item']">
              <button type="button" :class="$style['icon-buttons__block']">
                <span :class="$style['icon-buttons__content']">
                  <span :class="$style['icon-buttons__title']"
                    >뉴질랜드 (NEW ZEALAND)</span
                  >
                </span>
              </button>
            </li>
            <li :class="$style['icon-buttons__item']">
              <button type="button" :class="$style['icon-buttons__block']">
                <span :class="$style['icon-buttons__content']">
                  <span :class="$style['icon-buttons__title']"
                    >프랑스 (FRANCE)</span
                  >
                </span>
              </button>
            </li>
            <li :class="$style['icon-buttons__item']">
              <button type="button" :class="$style['icon-buttons__block']">
                <span :class="$style['icon-buttons__content']">
                  <span :class="$style['icon-buttons__title']"
                    >이탈리아 (ITALY)</span
                  >
                </span>
              </button>
            </li>
            <li :class="$style['icon-buttons__item']">
              <button type="button" :class="$style['icon-buttons__block']">
                <span :class="$style['icon-buttons__content']">
                  <span :class="$style['icon-buttons__title']"
                    >독일 (GERMANY)</span
                  >
                </span>
              </button>
            </li>
            <li :class="$style['icon-buttons__item']">
              <button type="button" :class="$style['icon-buttons__block']">
                <span :class="$style['icon-buttons__content']">
                  <span :class="$style['icon-buttons__title']"
                    >영국 (UNITED KINGDOM)</span
                  >
                </span>
              </button>
            </li>
          </ul>
        </div>

        <BasicHr
          type="contents"
          theme="quinary"
          className="row-margin-item-regular"
        />

        <div :class="[$style['icon-buttons'], 'row-margin-item']">
          <ul :class="$style['icon-buttons__list']">
            <li :class="$style['icon-buttons__item']">
              <button type="button" :class="$style['icon-buttons__block']">
                <span :class="$style['icon-buttons__content']">
                  <span :class="$style['icon-buttons__title']"
                    >가나 (GHANA)</span
                  >
                </span>
              </button>
            </li>
            <li :class="$style['icon-buttons__item']">
              <button type="button" :class="$style['icon-buttons__block']">
                <span :class="$style['icon-buttons__content']">
                  <span :class="$style['icon-buttons__title']"
                    >가봉 (GANONAISE)</span
                  >
                </span>
              </button>
            </li>
            <li :class="$style['icon-buttons__item']">
              <button type="button" :class="$style['icon-buttons__block']">
                <span :class="$style['icon-buttons__content']">
                  <span :class="$style['icon-buttons__title']"
                    >가이아나 (GUYANA)</span
                  >
                </span>
              </button>
            </li>
            <li :class="$style['icon-buttons__item']">
              <button type="button" :class="$style['icon-buttons__block']">
                <span :class="$style['icon-buttons__content']">
                  <span :class="$style['icon-buttons__title']"
                    >감비아 (GAMBIA)</span
                  >
                </span>
              </button>
            </li>
            <li :class="$style['icon-buttons__item']">
              <button type="button" :class="$style['icon-buttons__block']">
                <span :class="$style['icon-buttons__content']">
                  <span :class="$style['icon-buttons__title']"
                    >과들루프섬 (GWADLOUP)</span
                  >
                </span>
              </button>
            </li>
            <li :class="$style['icon-buttons__item']">
              <button type="button" :class="$style['icon-buttons__block']">
                <span :class="$style['icon-buttons__content']">
                  <span :class="$style['icon-buttons__title']"
                    >과테말라 (GUATEMALA)</span
                  >
                </span>
              </button>
            </li>
            <li :class="$style['icon-buttons__item']">
              <button type="button" :class="$style['icon-buttons__block']">
                <span :class="$style['icon-buttons__content']">
                  <span :class="$style['icon-buttons__title']">괌 (GUAM)</span>
                </span>
              </button>
            </li>
            <li :class="$style['icon-buttons__item']">
              <button type="button" :class="$style['icon-buttons__block']">
                <span :class="$style['icon-buttons__content']">
                  <span :class="$style['icon-buttons__title']"
                    >사우스조지아 사우스샌드위치제도 (영국령)(SOUTH GEORGIA AND
                    THE SOUTH SANDWICHISLAND)</span
                  >
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <!-- // Case : 자동 완성 -->
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/My_M03_l016b.scss';
</style>
