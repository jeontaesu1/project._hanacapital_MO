<script>
// My_M02_l008
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
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
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
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
          <PopupTitle>금융거래확인서</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <section>
        <h3 class="text-title-2 row-margin-contents">대출거래현황</h3>
        <!-- Case : 대출 거래 내역이 있을 경우 -->
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-body-1 font-weight-medium">
                오토리스 운용 (정상)
              </h3>
            </BasicBoxHeadLeft>
          </BasicBoxHead>
          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>용도</KeyValueTitle>
              <KeyValueText>대환대출 </KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>이율</KeyValueTitle>
              <KeyValueText>22.6%</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>대출일자</KeyValueTitle>
              <KeyValueText>2021.02.02</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>대출기한</KeyValueTitle>
              <KeyValueText>2022.02.02</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>대출잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
        <!-- //Case : 대출 거래 내역이 있을 경우 -->

        <!-- Case : 대출 거래 내역이 없을 경우 -->
        <BasicBox :className="[$style['box'], 'row-margin-contents']">
          <div :class="$style['empty']">
            <p :class="$style['empty__text']">대출 거래 내역이 없습니다.</p>
          </div>
        </BasicBox>
        <!-- //Case : 대출 거래 내역이 없을 경우 -->
      </section>

      <section class="row-margin-container-medium row-margin-bottom-none">
        <h3 class="text-title-2 row-margin-contents">담보내용</h3>
        <!-- Case : 담보 내역이 있을 경우 -->
        <BasicBox>
          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>소재지</KeyValueTitle>
              <KeyValueText>
                인천 서구 에코로 181<br />
                하나금융 로비
              </KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>소유자</KeyValueTitle>
              <KeyValueText>김하나</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>채무자관계</KeyValueTitle>
              <KeyValueText>최대주주</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>종류</KeyValueTitle>
              <KeyValueText>오토리스 운용</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>감정가격</KeyValueTitle>
              <KeyValueText>845,000 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>설정순위/금액</KeyValueTitle>
              <KeyValueText>845,000 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
        <!-- //Case : 담보 내역이 있을 경우 -->

        <!-- Case : 담보 내역이 없을 경우 -->
        <BasicBox :className="[$style['box'], 'row-margin-contents']">
          <div :class="$style['empty']">
            <p :class="$style['empty__text']">담보 내역이 없습니다.</p>
          </div>
        </BasicBox>
        <!-- //Case : 담보 내역이 없을 경우 -->
      </section>

      <section class="row-margin-container-medium row-margin-bottom-none">
        <h3 class="text-title-2 row-margin-small">기준일 현재 연체</h3>
        <p class="text-body-3 color-gray">
          연체대출금 및 지급보증대지급급 보유 또는 이자, 분할상환금,
          분할상환원리금 지체 포함
        </p>

        <BasicBox className="row-margin-contents">
          <KeyValue>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>연체여부</KeyValueTitle>
              <KeyValueText>있음</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-small">
          최근 3개월 내 10일 이상 계속된 연체 명세
        </h3>
        <p class="text-body-3 color-gray font-weight-light">
          가산 일자 : 2022.02.02
        </p>

        <!-- Case : 연체 내역이 있을 경우 -->
        <BasicBox className="row-margin-contents">
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-body-1 font-weight-medium">
                오토리스 운용 (정상)
              </h3>
            </BasicBoxHeadLeft>
          </BasicBoxHead>
          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>연체발생일</KeyValueTitle>
              <KeyValueText>2022.02.02</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>원금</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>이자</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>연체정리일</KeyValueTitle>
              <KeyValueText>2022.02.02</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>연체일수</KeyValueTitle>
              <KeyValueText>15일</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
        <!-- //Case : 연체 내역이 있을 경우 -->

        <!-- Case : 연체 내역이 없을 경우 -->
        <BasicBox :className="[$style['box'], 'row-margin-contents']">
          <div :class="$style['empty']">
            <p :class="$style['empty__text']">연체 내역이 없습니다.</p>
          </div>
        </BasicBox>
        <!-- //Case : 연체 내역이 없을 경우 -->
      </section>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>발급</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanCertificateConfirmationFinancialTransaction.scss';
</style>
