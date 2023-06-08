<script>
// Common_M00_l040
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicTooltip from '@/components/ui/tooltip/BasicTooltip.vue';

import IconAdd from '@/assets/images/icon/add.svg?component';
import IconCheckDocument from '@/assets/images/icon/check-document.svg?component';
import IconTooltip from '@/assets/images/icon/tooltip.svg?component';

export default {
  components: {
    UiLayer,
    PopupTitle,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    PageSubText,
    PopupButton,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicBox,
    BasicTooltip,
    IconAdd,
    IconCheckDocument,
    IconTooltip,
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
          <strong>진행해주세요</strong>
        </PageMainText>
        <PageSubText>
          파일을 첨부하신 뒤에<br />
          해당 박스를 클릭하시면 미리보기 가능합니다.
        </PageSubText>
      </PageTextGroup>

      <div>
        <section class="row-margin-contents-group">
          <div class="flex-box row-margin-item-medium">
            <div class="flex-box__cell">
              <h3 class="text-body-2">운전면허증(필수)</h3>
            </div>
            <div class="flex-box__cell flex-box__cell--small">
              <BasicTooltip placement="top" :fit="true">
                <IconTooltip :class="$style['icon']" />
                <span class="for-a11y">(도움말)</span>

                <template v-slot:contents>
                  <section :class="$style['tooltip-section']">
                    <h4 :class="$style['tooltip-section__title']">운전면허증</h4>
                    <p :class="$style['tooltip-section__text']">
                      재직확인을 위한 서류: 건강보험자격득실확인서, 재직증명서 등
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
                <div class="text-body-3">1건 등록 완료</div>
              </div>
              <div class="flex-box__cell">
                <BasicButton size="mini" theme="quaternary">
                  추가첨부
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
              <div :class="$style['basic-list__content']">
                2022-12-28 11:34 4건 전송
              </div>
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
                <div class="text-body-3">1건 등록 완료</div>
              </div>
              <div class="flex-box__cell">
                <BasicButton size="mini" theme="quaternary">
                  추가첨부
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
              <div :class="$style['basic-list__content']">
                2022-12-28 11:34 4건 전송
              </div>
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
                <div class="text-body-3">5건 등록 완료</div>
              </div>
              <div class="flex-box__cell">
                <BasicButton size="mini" theme="quaternary">
                  추가첨부
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
              <div :class="$style['basic-list__content']">
                2022-12-28 11:34 4건 전송
              </div>
            </li>
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
              <div :class="$style['basic-list__symbol']">※</div>
              <div :class="$style['basic-list__content']">
                2022-12-26 09:34 1건 전송
              </div>
            </li>
          </ul>
          <!-- //Case : 서류 등록 후 -->
        </section>
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
