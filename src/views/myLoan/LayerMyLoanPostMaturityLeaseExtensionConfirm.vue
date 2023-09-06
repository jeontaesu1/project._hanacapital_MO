<script>
// My_M08_l021
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicTooltip from '@/components/ui/tooltip/BasicTooltip.vue';

import IconTooltip from '@/assets/images/icon/tooltip.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
    StepProgress,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UnitText,
    BasicHr,
    BasicTooltip,
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
          <PopupTitle>만기후처리 연장</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="3" :current="2" />
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>
            연장 신청정보를<br />
            확인해 주세요
          </strong>
        </PageMainText>
      </PageTextGroup>

      <!-- Case : 운용리스일 경우 노출 -->
      <div>
        <BasicBox>
          <KeyValue margin="regular" verticalAlign="center">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle
                :classNames="{
                  title: 'text-body-1 color-black font-weight-medium',
                }"
              >
                매회 리스료(실납)
              </KeyValueTitle>
              <KeyValueText>
                <UnitText rightUnit="원" align="right">999,999,999</UnitText>
              </KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <BasicBox className="row-margin-item-group">
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h4 class="text-body-1 font-weight-medium">운용리스</h4>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>종료후처리</KeyValueTitle>
              <KeyValueText>-</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>기간</KeyValueTitle>
              <KeyValueText>36개월</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>잔존가치</KeyValueTitle>
              <KeyValueText>99,999,999 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>보증금</KeyValueTitle>
              <KeyValueText>50% (99,999,999 원)</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>선납금</KeyValueTitle>
              <KeyValueText>50% (99,999,999 원)</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>자동차세</KeyValueTitle>
              <KeyValueText>포함</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>약정주행거리</KeyValueTitle>
              <KeyValueText>연3만 km</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </div>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">예상 정산 비용</h3>

        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <h4 class="text-body-1 font-weight-medium">예상비용(지급)</h4>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <BasicTooltip placement="top">
                    <IconTooltip class="display-block" />
                    <span class="for-a11y">(도움말)</span>

                    <template v-slot:contents>
                      <section :class="$style['tooltip-section']">
                        <h5 :class="$style['tooltip-section__title']">
                          예상비용(지급)
                        </h5>
                        <ul
                          :class="[
                            $style['basic-list'],
                            $style['basic-list--mini-margin'],
                          ]"
                        >
                          <li
                            :class="[$style['basic-list__item'], 'color-white']"
                          >
                            <div :class="$style['basic-list__symbol']"></div>
                            <div :class="$style['basic-list__content']">
                              정산금액(a): 잔존가치-재리스원금
                            </div>
                          </li>
                          <li
                            :class="[$style['basic-list__item'], 'color-white']"
                          >
                            <div :class="$style['basic-list__symbol']"></div>
                            <div :class="$style['basic-list__content']">
                              인지대(d): 금융사/손님 50%부담
                            </div>
                          </li>
                          <li
                            :class="[$style['basic-list__item'], 'color-white']"
                          >
                            <div :class="$style['basic-list__symbol']"></div>
                            <div :class="$style['basic-list__content']">
                              정산금액은 (만기일자) 기준으로 기준일자에 따라
                              변경될 수 있습니다.
                            </div>
                          </li>
                        </ul>
                      </section>
                    </template>
                  </BasicTooltip>
                </div>
              </div>
            </BasicBoxHeadLeft>
            <BasicBoxHeadRight>
              <UnitText rightUnit="원" align="right">999,999,999</UnitText>
            </BasicBoxHeadRight>
          </BasicBoxHead>

          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>정산금액(a)</KeyValueTitle>
              <KeyValueText>999,999 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>기납입보증금(b)</KeyValueTitle>
              <KeyValueText>999,999 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>연장후보증금(c)</KeyValueTitle>
              <KeyValueText>999,999 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>연장후선납금(d)</KeyValueTitle>
              <KeyValueText>999,999 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>인지대(e)</KeyValueTitle>
              <KeyValueText>5,000 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <BasicHr
            theme="quaternary"
            type="contents"
            className="row-margin-contents-small"
          />

          <KeyValue>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>합계 (a-b+c+d+e)</KeyValueTitle>
              <KeyValueText>99,999,999 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>
      <!-- //Case : 운용리스일 경우 노출 -->

      <!-- Case : 금융리스일 경우 노출 -->
      <section>
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h4 class="text-body-1 font-weight-medium">금융리스</h4>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>종료후처리</KeyValueTitle>
              <KeyValueText>-</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>기간</KeyValueTitle>
              <KeyValueText>36개월</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>잔존가치</KeyValueTitle>
              <KeyValueText>99,999,999 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>보증금</KeyValueTitle>
              <KeyValueText>50% (99,999,999 원)</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>선납금</KeyValueTitle>
              <KeyValueText>50% (99,999,999 원)</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>자동차세</KeyValueTitle>
              <KeyValueText>포함</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>약정주행거리</KeyValueTitle>
              <KeyValueText>연3만 km</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>
      <!-- //Case : 금융리스일 경우 노출 -->

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanPostMaturityLeaseExtensionConfirm.scss';
</style>
