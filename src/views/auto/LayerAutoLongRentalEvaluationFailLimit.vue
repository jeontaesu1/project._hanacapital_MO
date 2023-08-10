<script>
// AF_M01_l005
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
    IllustObject,
    BasicHr,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
    BasicButton,
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
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          김하나님, 요청하신 견적으로<br />
          <strong>진행이 어렵습니다</strong>
        </PageMainText>
        <!-- Case : 수정 요청 내용 case 1 -->
        <PageSubText>
          선납금/보증금을 높여서 재견적하시거나,<br />
          상담원 연결을 통해 견적문의 주시길 바랍니다.
        </PageSubText>
        <!-- // Case : 수정 요청 내용 case 1 -->
      </PageTextGroup>

      <IllustObject type="fail" />

      <!-- Case : 수정 요청 내용 case 2 -->
      <BasicHr
        type="contents"
        theme="quaternary"
        className="row-margin-container"
      />

      <PageTextGroup>
        <PageMainText>
          아래 조건으로<br />
          <strong>진행이 가능해요!</strong>
        </PageMainText>
      </PageTextGroup>

      <ul
        :class="[
          $style['logs'],
          'row-margin-contents-group',
          'row-margin-top-none',
        ]"
      >
        <li :class="$style['logs__item']">
          <div :class="$style['logs__block']">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 class="text-body-2 font-weight-medium">
                  승인조건으로 재견적 하기
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <button type="button" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">진행하기</span>
                </button>
              </div>
            </div>

            <BasicHr
              type="contents"
              theme="quaternary"
              className="row-margin-contents-small"
            />

            <KeyValue>
              <KeyValueItem class="text-body-5">
                <KeyValueTitle>선납금 + 보증금</KeyValueTitle>
                <KeyValueText>20% (22,145,111원)</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </div>
        </li>
      </ul>
      <!-- // Case : 수정 요청 내용 case 2 -->

      <section :class="$style['notice-section']">
        <h3 :class="$style['notice-section__title']">진행방법</h3>
        <ol :class="$style['basic-list']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']">1.</div>
            <div :class="$style['basic-list__content']">
              재견적하여 보증금 or 선수금을 더 넣어 본다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']">2.</div>
            <div :class="$style['basic-list__content']">
              한도증액 신청을 하여 정밀심사를 진행한다.<br />
              <span class="color-green"
                >(한도증액 신청은 별도 서류를 징구합니다.)</span
              >
            </div>
          </li>
        </ol>
      </section>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <!-- Case : 수정 요청 내용 case 1 -->
          <ButtonListItem>
            <BasicButton theme="tertiary">재견적</BasicButton>
          </ButtonListItem>
          <!-- // Case : 수정 요청 내용 case 1 -->

          <!-- Case : 수정 요청 내용 case 2 -->
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">다음에</BasicButton>
          </ButtonListItem>
          <!-- // Case : 수정 요청 내용 case 2 -->
          <ButtonListItem>
            <BasicButton>상담원 연결</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoLongRentalEvaluationFailLimit.scss';
</style>
