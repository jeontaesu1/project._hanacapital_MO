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

      <p class="text-body-4 font-weight-light color-gray-secondary">
        <strong class="font-weight-medium color-green">6</strong> 건
      </p>
      <BasicHr
        theme="quaternary"
        type="contents"
        className="row-margin-item-medium"
      />

      <div class="contents-wrap row-margin-item-medium">
        <div :class="$style['files']">
          <ul :class="$style['files__list']">
            <!-- Case : 이미지 -->
            <li :class="$style['files__item']">
              <div :class="$style['files__block']">
                <div :class="$style['files__image']">
                  <img
                    src="@/assets/images/_dummy/file-sample.png"
                    alt="파일 이름 넣어주세요"
                    @error="
                      (e) => {
                        e.target.parentNode.classList.add('is-error');
                      }
                    "
                  />
                </div>
                <button type="button" :class="$style['files__link']">
                  <span class="for-a11y">미리보기</span>
                </button>
                <button type="button" :class="$style['files__delete']">
                  <span class="for-a11y">삭제</span>
                </button>
              </div>
            </li>
            <!-- // Case : 이미지 -->

            <!-- Case : 이미지 에러 -->
            <li :class="$style['files__item']">
              <div :class="$style['files__block']">
                <div :class="$style['files__image']">
                  <img
                    src="/"
                    alt="파일 이름 넣어주세요"
                    @error="
                      (e) => {
                        e.target.parentNode.classList.add('is-error');
                      }
                    "
                  />
                </div>
                <button type="button" :class="$style['files__link']">
                  <span class="for-a11y">미리보기</span>
                </button>
                <button type="button" :class="$style['files__delete']">
                  <span class="for-a11y">삭제</span>
                </button>
              </div>
            </li>
            <!-- // Case : 이미지 에러 -->

            <!-- Case : PDF -->
            <li :class="$style['files__item']">
              <div :class="$style['files__block']">
                <div
                  :class="[$style['files__icon'], $style['files__icon--pdf']]"
                >
                  <span class="for-a11y">파일 이름 넣어주세요</span>
                </div>
                <button type="button" :class="$style['files__link']">
                  <span class="for-a11y">미리보기</span>
                </button>
                <button type="button" :class="$style['files__delete']">
                  <span class="for-a11y">삭제</span>
                </button>
              </div>
            </li>
            <!-- // Case : PDF -->

            <li :class="$style['files__item']">
              <div :class="$style['files__block']">
                <div :class="$style['files__image']">
                  <img
                    src="@/assets/images/_dummy/file-sample.png"
                    alt="파일 이름 넣어주세요"
                    @error="
                      (e) => {
                        e.target.parentNode.classList.add('is-error');
                      }
                    "
                  />
                </div>
                <button type="button" :class="$style['files__link']">
                  <span class="for-a11y">미리보기</span>
                </button>
                <button type="button" :class="$style['files__delete']">
                  <span class="for-a11y">삭제</span>
                </button>
              </div>
            </li>

            <li :class="$style['files__item']">
              <div :class="$style['files__block']">
                <div :class="$style['files__image']">
                  <img
                    src="@/assets/images/_dummy/file-sample.png"
                    alt="파일 이름 넣어주세요"
                    @error="
                      (e) => {
                        e.target.parentNode.classList.add('is-error');
                      }
                    "
                  />
                </div>
                <button type="button" :class="$style['files__link']">
                  <span class="for-a11y">미리보기</span>
                </button>
                <button type="button" :class="$style['files__delete']">
                  <span class="for-a11y">삭제</span>
                </button>
              </div>
            </li>

            <li :class="$style['files__item']">
              <div :class="$style['files__block']">
                <div :class="$style['files__image']">
                  <img
                    src="@/assets/images/_dummy/file-sample.png"
                    alt="파일 이름 넣어주세요"
                    @error="
                      (e) => {
                        e.target.parentNode.classList.add('is-error');
                      }
                    "
                  />
                </div>
                <button type="button" :class="$style['files__link']">
                  <span class="for-a11y">미리보기</span>
                </button>
                <button type="button" :class="$style['files__delete']">
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
