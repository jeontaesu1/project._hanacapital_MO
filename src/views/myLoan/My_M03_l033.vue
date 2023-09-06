<script>
// My_M03_l033
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
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
    <FullPopup v-if="layerSlotProps.display !== 'none'">
      <template v-slot:head>
        <FullPopupHead
          :classNames="{
            left: $style['header-left'],
            center: $style['header-center'],
            right: $style['header-right'],
          }"
        >
          <PopupTitle>전기차 보조금 확인사항</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>하나캐피탈㈜ 귀중</strong>
        </PageMainText>

        <!-- Case : 렌트 / 렌트 승계 -->
        <PageSubText>
          계약자(이하 ‘본인’ 이라 함)는 귀사와 체결한 렌터카 계약(계약번호:
          D00000000000000)과 관련하여 아래와 같이 확약합니다.
        </PageSubText>
        <!-- // Case : 렌트 / 렌트 승계 -->

        <!-- Case : 오토리스 / 오토리스 승계 -->
        <PageSubText>
          계약자(이하 ‘본인’ 이라 함)는 귀사와 체결한 오토리스 계약(계약번호:
          D00000000000000)과 관련하여 아래와 같이 확약합니다.
        </PageSubText>
        <!-- // Case : 오토리스 / 오토리스 승계 -->
      </PageTextGroup>

      <div>
        <ol
          :class="[$style['basic-list'], $style['basic-list--regular-margin']]"
        >
          <li :class="[$style['basic-list__item'], 'text-body-4 color-black']">
            <div :class="$style['basic-list__symbol']">1.</div>
            <div :class="$style['basic-list__content']">
              본인은 계약차량의 이용자로서 「대기환경보전법」 제58조 제4항 및
              동법 시행규칙 제79조의4 제1항에 따른 전기차 의무운행기간<strong
                class="font-weight-medium color-red"
                >(최초 등록일로부터 2년)</strong
              >을 준수할 것임을 확약합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'text-body-4 color-black']">
            <div :class="$style['basic-list__symbol']">2.</div>
            <div :class="$style['basic-list__content']">
              본인은 제1항을 위반하여 차량등록일로부터 2년간의 의무이행 기간을
              충족하지 못한 경우(해당 지자체 운영기준에 따라 타지자체 거주차
              판매, 다지자체 전출 및 등록말소 포함), &lt;표&gt;‘운행기간별
              보조금 환수율’에 따라 보조금을 반납하고, 이와 관련한 모든 금전적
              책임을 부담할 것을 확약합니다.(「대기환경보전법」 제58조 제10항 및
              동법 시행규칙 제79조의4 제2항).
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'text-body-4 color-black']">
            <div :class="$style['basic-list__symbol']">3.</div>
            <div :class="$style['basic-list__content']">
              본인은 제1항에 따른 의무운행기간 내 차량 등록말소(폐차·수출 등)을
              하고자 하는 경우에는 해당 지자체의 사전 승인을 받을 것을 확약
              합니다.
            </div>
          </li>
        </ol>

        <div class="row-margin-item-medium">
          <p class="text-body-4 font-weight-light color-gray-tertiary">
            &lt;표&gt;‘운행기간별 보조금 환수율(「대기환경보전법」 시행규칙
            별표21의2)’
          </p>

          <div :class="[$style['basic-table'], 'row-margin-item']">
            <table>
              <colgroup>
                <col style="width: 62.5%" />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>전기차 운행기간</th>
                  <th>보조금 회수요율</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3개월 미만</td>
                  <td>70%</td>
                </tr>
                <tr>
                  <td>3~6개월 미만</td>
                  <td>65%</td>
                </tr>
                <tr>
                  <td>6~9개월 미만</td>
                  <td>60%</td>
                </tr>
                <tr>
                  <td>9~12개월 미만</td>
                  <td>55%</td>
                </tr>
                <tr>
                  <td>12~15개월 미만</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td>15~19개월 미만</td>
                  <td>40%</td>
                </tr>
                <tr>
                  <td>19~21개월 미만</td>
                  <td>30%</td>
                </tr>
                <tr>
                  <td>21~24개월 미만</td>
                  <td>20%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="row-margin-container-medium">
        <BasicBox className="row-margin-contents">
          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>
                계약차량<br />
                (차종/모델명)
              </KeyValueTitle>
              <KeyValueText>
                EQB (X243) 전기 (개소세30%인하) EQB 300 4Matic (w/U56) (KR1)
              </KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>보조금</KeyValueTitle>
              <KeyValueText>2,500,000 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <p class="text-body-3 font-weight-light color-gray align-right">
          생년월일(사업자번호) : 0000.00.00 (000-00-00000)
        </p>

        <p class="text-body-4 align-right row-margin-item-group">
          계약자(본인) : 김수진 (서명/인)
        </p>
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
@import '@/assets/scss/views/myLoan/My_M03_l033.scss';
</style>
