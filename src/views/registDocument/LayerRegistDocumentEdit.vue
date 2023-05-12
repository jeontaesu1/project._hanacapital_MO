<script>
// Common_M00_l041
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    FullPopup,
    FullPopupHead,
    PopupButton,
    ButtonList,
    ButtonListItem,
    BasicButton,
    NoticeText,
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

      <section>
        <h3 class="text-body-2 row-margin-item-medium">첨부파일 유형</h3>

        <div class="flex-box">
          <div class="flex-box__cell flex-1">
            <div :class="$style['upload-button']">
              <input
                type="file"
                id="layerRegistDocumentEditImage"
                :class="$style['upload-button__input']"
              />
              <label
                for="layerRegistDocumentEditImage"
                :class="$style['upload-button__label']"
              >
                <span :class="$style['upload-button__text']">이미지 첨부</span>
              </label>
            </div>
          </div>
          <div class="flex-box__cell flex-1">
            <div :class="$style['upload-button']">
              <input
                type="file"
                id="layerRegistDocumentEditPDF"
                :class="$style['upload-button__input']"
              />
              <label
                for="layerRegistDocumentEditPDF"
                :class="$style['upload-button__label']"
              >
                <span :class="$style['upload-button__text']">PDF 첨부</span>
              </label>
            </div>
          </div>
        </div>

        <NoticeText :classNames="{ wrap: 'row-margin-item-group' }"
          >등록 후 추가 등록 가능합니다.</NoticeText
        >
      </section>

      <BasicHr className="row-margin-container-medium"></BasicHr>

      <div class="contents-wrap">
        <p class="text-body-4 font-weight-light color-gray-secondary">
          <strong class="font-weight-medium color-green">6</strong> 건
        </p>
        <BasicHr
          theme="quaternary"
          type="contents"
          className="row-margin-item-medium"
        />

        <div class="contents-wrap row-margin-item-medium">
          <!-- Case : 등록된 서류가 없을 때 -->
          <div :class="$style['empty']">
            <p :class="$style['empty__text']">등록된 서류가 없습니다.</p>
          </div>
          <!-- // Case : 등록된 서류가 없을 때 -->

          <!-- Case : 등록된 서류가 있을 때 -->
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
          <!-- //Case : 등록된 서류가 있을 때 -->
        </div>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>등록</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/registDocument/LayerRegistDocumentEdit.scss';
</style>
