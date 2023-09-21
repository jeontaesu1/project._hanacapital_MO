<script>
// Common_M00_l040
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicTooltip from '@/components/ui/tooltip/BasicTooltip.vue';

import IconAdd from '@/assets/images/icon/add.svg?component';
import IconCheckDocument from '@/assets/images/icon/check-document.svg?component';
import IconTooltip from '@/assets/images/icon/tooltip.svg?component';
import IconDownload from '@/assets/images/icon/download.svg?component';

export default {
  components: {
    UiLayer,
    PopupTitle,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    PopupButton,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicBox,
    BasicTooltip,
    IconAdd,
    IconCheckDocument,
    IconTooltip,
    IconDownload,
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
          <PopupTitle>고객서류등록</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          서류등록을<br />
          진행해주세요
        </PageMainText>
      </PageTextGroup>

      <div>
        <section class="row-margin-contents-group">
          <div class="flex-box row-margin-item-medium">
            <div class="flex-box__cell">
              <h3 class="text-body-2">운전면허증(필수)</h3>
            </div>
            <div class="flex-box__cell flex-box__cell--small">
              <BasicTooltip>
                <IconTooltip class="display-block" />
                <span class="for-a11y">(도움말)</span>

                <template v-slot:contents>
                  <section :class="$style['tooltip-section']">
                    <h4 :class="$style['tooltip-section__title']">
                      운전면허증
                    </h4>
                    <p :class="$style['tooltip-section__text']">
                      재직확인을 위한 서류: 건강보험자격득실확인서, 재직증명서
                      등
                    </p>
                  </section>
                </template>
              </BasicTooltip>
            </div>
          </div>

          <!-- Case : 서류 등록 전 -->
          <button
            type="button"
            :class="[$style['add-button'], 'row-margin-item']"
          >
            <span :class="$style['add-button__inner']">
              <span
                :class="[$style['add-button__text'], 'color-gray-secondary']"
              >
                파일을 첨부해주세요
              </span>
              <span :class="$style['add-button__icon']">
                <IconAdd />
              </span>
            </span>
          </button>
          <!-- //Case : 서류 등록 전 -->

          <!-- Case : 서류 등록 후 -->
          <BasicBox>
            <div class="flex-box">
              <div class="flex-box__cell">
                <IconCheckDocument class="display-block" />
              </div>
              <div class="flex-box__cell flex-1">
                <div class="text-body-3">등록 완료</div>
              </div>
              <div class="flex-box__cell">
                <BasicButton size="mini" theme="quaternary">
                  추가첨부
                </BasicButton>
              </div>
              <div class="flex-box__cell">
                <BasicButton size="mini" theme="tertiary">
                  <template v-slot:leftIcon>
                    <IconDownload />
                    <span class="for-a11y">다운로드</span>
                  </template>
                </BasicButton>
              </div>
            </div>
          </BasicBox>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--small-margin'],
              'row-margin-item',
            ]"
          >
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']">※</div>
              <div :class="$style['basic-list__content']">2022.12.28 11:34</div>
            </li>
          </ul>
          <!-- //Case : 서류 등록 후 -->
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">자동차등록증</h3>
          <!-- Case : 서류 등록 전 -->
          <button
            type="button"
            :class="[$style['add-button'], 'row-margin-item']"
          >
            <span :class="$style['add-button__inner']">
              <span
                :class="[$style['add-button__text'], 'color-gray-secondary']"
              >
                파일을 첨부해주세요
              </span>
              <span :class="$style['add-button__icon']">
                <IconAdd />
              </span>
            </span>
          </button>
          <!-- //Case : 서류 등록 전 -->

          <!-- Case : 서류 등록 후 -->
          <BasicBox>
            <div class="flex-box">
              <div class="flex-box__cell">
                <IconCheckDocument class="display-block" />
              </div>
              <div class="flex-box__cell flex-1">
                <div class="text-body-3">등록 완료</div>
              </div>
              <div class="flex-box__cell">
                <BasicButton size="mini" theme="quaternary">
                  추가첨부
                </BasicButton>
              </div>
              <div class="flex-box__cell">
                <BasicButton size="mini" theme="tertiary">
                  <template v-slot:leftIcon>
                    <IconDownload />
                    <span class="for-a11y">다운로드</span>
                  </template>
                </BasicButton>
              </div>
            </div>
          </BasicBox>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--small-margin'],
              'row-margin-item',
            ]"
          >
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']">※</div>
              <div :class="$style['basic-list__content']">2022.12.28 11:34</div>
            </li>
          </ul>
          <!-- //Case : 서류 등록 후 -->
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">기타서류</h3>
          <!-- Case : 서류 등록 전 -->
          <button
            type="button"
            :class="[$style['add-button'], 'row-margin-item']"
          >
            <span :class="$style['add-button__inner']">
              <span
                :class="[$style['add-button__text'], 'color-gray-secondary']"
              >
                파일을 첨부해주세요
              </span>
              <span :class="$style['add-button__icon']">
                <IconAdd />
              </span>
            </span>
          </button>
          <!-- //Case : 서류 등록 전 -->

          <!-- Case : 서류 등록 후 -->
          <BasicBox>
            <div class="flex-box">
              <div class="flex-box__cell">
                <IconCheckDocument class="display-block" />
              </div>
              <div class="flex-box__cell flex-1">
                <div class="text-body-3">등록 완료</div>
              </div>
              <div class="flex-box__cell">
                <BasicButton size="mini" theme="quaternary">
                  추가첨부
                </BasicButton>
              </div>
              <div class="flex-box__cell">
                <BasicButton size="mini" theme="tertiary">
                  <template v-slot:leftIcon>
                    <IconDownload />
                    <span class="for-a11y">다운로드</span>
                  </template>
                </BasicButton>
              </div>
            </div>
          </BasicBox>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--small-margin'],
              'row-margin-item',
            ]"
          >
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']">※</div>
              <div :class="$style['basic-list__content']">2022.12.28 11:34</div>
            </li>
          </ul>
          <!-- //Case : 서류 등록 후 -->
        </section>
      </div>

      <div class="row-margin-contents-group">
        <ul :class="$style['basic-list']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              서류등록 파일은 jpg, jpeg, png, gif, tif, pdf만 가능합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              서류등록 파일은 최대 30개까지 등록 가능합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              고객님께서 제출하신 서류는 본 금융거래 이외의 다른 목적으로
              사용되지 않습니다.
            </div>
          </li>
          <!-- Case : 오토승계 -->
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              외국인 : 국내거소사실증명원, 국내거소신고증(앞/뒤면)
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              렌터카 임직원 상품 승계 시 임직원 증빙자료를 꼭 등록해주세요.
            </div>
          </li>
          <!-- // Case : 오토승계 -->
        </ul>

        <!-- Case : 설비리스 물건점검 사진등록 -->
        <section :class="[$style['notice-section'], 'row-margin-item-group']">
          <h3 :class="$style['notice-section__title']">
            물건검수사진 등록 안내
          </h3>
          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                <div>아래의 내용을 촬영 후 첨부해 주세요.</div>

                <ol :class="[$style['basic-list'], 'row-margin-item']">
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']">1.</div>
                    <div :class="$style['basic-list__content']">
                      리스물건의 전면 사진
                    </div>
                  </li>
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']">2.</div>
                    <div :class="$style['basic-list__content']">
                      물건제원표 사진
                    </div>
                  </li>
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']">3.</div>
                    <div :class="$style['basic-list__content']">
                      사업장(상호포함) 사진
                    </div>
                  </li>
                </ol>
              </div>
            </li>
          </ul>
        </section>
        <!-- // Case : 설비리스 물건점검 사진등록 -->
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/registDocument/LayerRegistDocumentList.scss';
</style>
