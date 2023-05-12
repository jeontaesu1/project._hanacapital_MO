<script>
// Common_M00_l043
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    FullPopup,
    FullPopupHead,
    PopupButton,
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
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>매매계약서 서류등록</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div class="contents-wrap">
        <p
          class="text-body-4 font-weight-light color-gray-secondary row-margin-item-medium"
        >
          <strong class="font-weight-medium color-green">6</strong> 건
        </p>

        <BasicHr theme="quaternary" type="contents" />

        <div :class="[$style['gallery-file'], 'row-margin-contents']">
          <ul :class="$style['gallery-file__list']">
            <li :class="$style['gallery-file__item']">
              <!-- DD : 에러시 gallery-file__block--error 클래스 추가 -->
              <div
                :class="[
                  $style['gallery-file__block'],
                  $style['gallery-file__block--error'],
                ]"
              >
                <div :class="$style['gallery-file__image']"></div>
                <button type="button" :class="$style['gallery-file__link']">
                  <span class="for-a11y">미리보기</span>
                </button>
                <button type="button" :class="$style['gallery-file__delete']">
                  <span class="for-a11y">삭제</span>
                </button>
              </div>
            </li>
            <li :class="$style['gallery-file__item']">
              <!-- DD : 에러시 gallery-file__block--error 클래스 추가 -->
              <div
                :class="[
                  $style['gallery-file__block'],
                  $style['gallery-file__block--pdf'],
                  $style['gallery-file__block--error'],
                ]"
              >
                <div :class="$style['gallery-file__icon']"></div>
                <button type="button" :class="$style['gallery-file__link']">
                  <span class="for-a11y">미리보기</span>
                </button>
                <button type="button" :class="$style['gallery-file__delete']">
                  <span class="for-a11y">삭제</span>
                </button>
              </div>
            </li>
            <li :class="$style['gallery-file__item']">
              <div
                :class="[
                  $style['gallery-file__block'],
                  $style['gallery-file__block--pdf'],
                ]"
              >
                <div :class="$style['gallery-file__icon']"></div>
                <button type="button" :class="$style['gallery-file__link']">
                  <span class="for-a11y">미리보기</span>
                </button>
                <button type="button" :class="$style['gallery-file__delete']">
                  <span class="for-a11y">삭제</span>
                </button>
              </div>
            </li>
            <li :class="$style['gallery-file__item']">
              <div :class="$style['gallery-file__block']">
                <div :class="$style['gallery-file__image']">
                  <img
                    src="@/assets/images/_dummy/file-sample.png"
                    alt="샘플 이미지"
                  />
                </div>
                <button type="button" :class="$style['gallery-file__link']">
                  <span class="for-a11y">미리보기</span>
                </button>
                <button type="button" :class="$style['gallery-file__delete']">
                  <span class="for-a11y">삭제</span>
                </button>
              </div>
            </li>
            <li :class="$style['gallery-file__item']">
              <div :class="$style['gallery-file__block']">
                <div :class="$style['gallery-file__image']">
                  <img
                    src="@/assets/images/_dummy/file-sample.png"
                    alt="샘플 이미지"
                  />
                </div>
                <button type="button" :class="$style['gallery-file__link']">
                  <span class="for-a11y">미리보기</span>
                </button>
                <button type="button" :class="$style['gallery-file__delete']">
                  <span class="for-a11y">삭제</span>
                </button>
              </div>
            </li>
            <li :class="$style['gallery-file__item']">
              <div :class="$style['gallery-file__block']">
                <div :class="$style['gallery-file__image']">
                  <img
                    src="@/assets/images/_dummy/file-sample.png"
                    alt="샘플 이미지"
                  />
                </div>
                <button type="button" :class="$style['gallery-file__link']">
                  <span class="for-a11y">미리보기</span>
                </button>
                <button type="button" :class="$style['gallery-file__delete']">
                  <span class="for-a11y">삭제</span>
                </button>
              </div>
            </li>
            <li :class="$style['gallery-file__item']">
              <div :class="$style['gallery-file__block']">
                <div :class="$style['gallery-file__image']">
                  <img
                    src="@/assets/images/_dummy/file-sample.png"
                    alt="샘플 이미지"
                  />
                </div>
                <button type="button" :class="$style['gallery-file__link']">
                  <span class="for-a11y">미리보기</span>
                </button>
                <button type="button" :class="$style['gallery-file__delete']">
                  <span class="for-a11y">삭제</span>
                </button>
              </div>
            </li>
            <li :class="$style['gallery-file__item']">
              <div :class="$style['gallery-file__block']">
                <div :class="$style['gallery-file__image']">
                  <img
                    src="@/assets/images/_dummy/file-sample.png"
                    alt="샘플 이미지"
                  />
                </div>
                <button type="button" :class="$style['gallery-file__link']">
                  <span class="for-a11y">미리보기</span>
                </button>
                <button type="button" :class="$style['gallery-file__delete']">
                  <span class="for-a11y">삭제</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/registDocument/LayerRegistDocumentHistory.scss';
</style>
