<script>
// My_M04_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconCustomer from '@/assets/images/icon/customer-center.svg?component';
import IconTell from '@/assets/images/icon/tell.svg?component';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    PageTextGroup,
    PageMainText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    RoundStatus,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    IconCustomer,
    IconTell,
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
          <PopupTitle>근저당설정 조회/해지</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <!-- Case : 근저당설정 조회 가능한 계약 없는 경우 -->
      <PageTextGroup>
        <PageMainText>
          근저당설정 조회/해지<br />
          <strong
            >가능한 상품은 총 <span class="color-green">0</span>건
            입니다</strong
          >
        </PageMainText>
      </PageTextGroup>

      <div :class="$style['empty']">
        <p :class="$style['empty__text']">
          근저당설정조회 가능한<br />
          계약이 없습니다.
        </p>
      </div>
      <!-- //Case : 근저당설정 조회 가능한 계약 없는 경우 -->

      <!-- Case : 근저당설정 조회 가능한 계약 있는 경우 -->
      <PageTextGroup>
        <PageMainText>
          근저당설정 조회/해지<br />
          <strong
            >가능한 상품은 총 <span class="color-green">2</span>건
            입니다</strong
          >
        </PageMainText>
      </PageTextGroup>

      <div>
        <BasicBox className="row-margin-item-group">
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-body-1 font-weight-medium">오토할부 20고5678</h3>
            </BasicBoxHeadLeft>
            <BasicBoxHeadRight>
              <RoundStatus :classNames="{ wrap: 'display-block' }">
                종료
              </RoundStatus>
            </BasicBoxHeadRight>
          </BasicBoxHead>

          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>계약번호</KeyValueTitle>
              <KeyValueText>L99999999999999</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>을부번호</KeyValueTitle>
              <KeyValueText>482A-2021-143903</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>차대번호</KeyValueTitle>
              <KeyValueText>KLAPC56LDNB23200</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>저당설정액</KeyValueTitle>
              <KeyValueText>17,220,000원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
          <BasicButton
            size="small"
            :classNames="{ wrap: 'row-margin-contents-small' }"
            >근저당설정 해지 신청</BasicButton
          >
        </BasicBox>

        <BasicBox className="row-margin-item-group">
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-body-1 font-weight-medium">렌터카 07호3994</h3>
            </BasicBoxHeadLeft>
            <BasicBoxHeadRight>
              <RoundStatus
                theme="nonary"
                :classNames="{ wrap: 'display-block' }"
              >
                연체
              </RoundStatus>
            </BasicBoxHeadRight>
          </BasicBoxHead>

          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>계약번호</KeyValueTitle>
              <KeyValueText>L99999999999999</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>을부번호</KeyValueTitle>
              <KeyValueText>482A-2021-143903</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>차대번호</KeyValueTitle>
              <KeyValueText>KLAPC56LDNB23200</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>저당설정액</KeyValueTitle>
              <KeyValueText>17,220,000원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
          <BasicButton
            size="small"
            :classNames="{ wrap: 'row-margin-contents-small' }"
            >근저당설정 해지 신청</BasicButton
          >
        </BasicBox>
      </div>
      <!-- //Case : 근저당설정 조회 가능한 계약 있는 경우 -->

      <ul
        :class="[
          $style['basic-list'],
          'row-margin-contents',
          'row-margin-bottom-none',
        ]"
      >
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            상환이 종료된 계약 건에 한하여 조회/신청이 가능합니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            근저당해지 신청은 평일 오전 9시 ~ 오후 4시까지 접수 가능합니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            <span class="color-green font-weight-regular"
              >저당해지 비용 19,300원</span
            >
            이 발생하며, 금액과 계좌번호를 문자로 발송해 드립니다.<br />
            (저당해지대행업체 : 다코스)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            저당해지 비용은 오후 5시까지 입금 시 당일 해지 처리되며, 이후 입금
            시 영업일 기준으로 해지 됩니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            담보대출, 건설기계 등 일부 상환은 홈페이지를 통한 근저당설정 해지
            신청이 불가능하며, 고객센터로 연락 바랍니다.
          </div>
        </li>
      </ul>

      <BasicHr
        type="contents"
        theme="quaternary"
        className="row-margin-container"
      />

      <div :class="$style['icon-list']">
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <div :class="$style['icon-list__block']">
              <div :class="$style['icon-list__icon']"><IconCustomer /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">고객센터</div>
                <div :class="[$style['icon-list__text'], 'font-weight-light']">
                  평일 09:00 ~ 18:00
                </div>
              </div>
              <BasicButton
                tagName="a"
                size="mini"
                :line="true"
                theme="quaternary"
                :classNames="{ wrap: $style['icon-list__button'] }"
                href="tel:1800-1110"
              >
                <template v-slot:leftIcon><IconTell /></template>
                1800-1110
              </BasicButton>
            </div>
          </li>
        </ul>
      </div>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanMortgage.scss';
</style>
