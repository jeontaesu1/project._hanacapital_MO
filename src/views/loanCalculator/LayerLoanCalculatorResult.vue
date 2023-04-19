<script>
// Common_M00_b014
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    UnitText,
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
          <strong>계산결과를</strong><br />
          알려드릴게요
        </PageMainText>
        <PageSubText>
          대출금액과 기간으로 계산한 결과예요.<br />
          실제 대출 결과와 다를 수 있어요.
        </PageSubText>
      </PageTextGroup>

      <BasicBox>
        <KeyValue>
          <KeyValueItem
            :classNames="{ item: 'text-body-3 align-items-center' }"
          >
            <KeyValueTitle :classNames="{ title: 'color-black' }">
              월 납입액
            </KeyValueTitle>
            <KeyValueText>
              <UnitText rightUnit="원" align="right">333,389</UnitText>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <BasicHr
          type="contents"
          theme="quaternary"
          className="row-margin-contents-small"
        />
        <KeyValue margin="regular">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>대출원금</KeyValueTitle>
            <KeyValueText>1,000,000 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>이자합계</KeyValueTitle>
            <KeyValueText>167 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>총 상환금액</KeyValueTitle>
            <KeyValueText>1,000,167 원</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <BasicHr className="row-margin-container-medium" />

      <section>
        <h3 class="text-title-2 row-margin-contents">예상 상환 스케쥴</h3>

        <ul :class="$style['data-list']">
          <li v-for="i in 12" :key="i" :class="$style['data-list__item']">
            <div :class="$style['data-list__row']">
              <div :class="$style['data-list__cell']">{{ i }}회차</div>
              <div
                :class="[
                  $style['data-list__cell'],
                  $style['data-list__cell--flexible'],
                  'font-weight-bold',
                  'align-right',
                ]"
              >
                1,232,456,345 원
              </div>
            </div>
            <div :class="$style['data-list__row']">
              <div :class="$style['data-list__cell']">
                <div :class="$style['text-group']">
                  <div :class="$style['text-group__item']">원금</div>
                  <div
                    :class="[
                      $style['text-group__item'],
                      $style['text-group__item--auto'],
                    ]"
                  >
                    912,232,321 원
                  </div>
                </div>
                <div :class="$style['text-group']">
                  <div :class="$style['text-group__item']">이자</div>
                  <div
                    :class="[
                      $style['text-group__item'],
                      $style['text-group__item--auto'],
                    ]"
                  >
                    902,123,223 원
                  </div>
                </div>
              </div>
              <div
                :class="[
                  $style['data-list__cell'],
                  $style['data-list__cell--flexible'],
                ]"
              >
                <div :class="[$style['text-group'], 'justify-conten-end']">
                  <div :class="$style['text-group__item']">잔액</div>
                  <div
                    :class="[
                      $style['text-group__item'],
                      $style['text-group__item--auto'],
                    ]"
                  >
                    982,232,123 원
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">다시하기</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/loanCalculator/LayerLoanCalculatorResult.scss';
</style>
