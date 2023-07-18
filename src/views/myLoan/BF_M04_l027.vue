<script>
// BF_M04_l027

import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
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
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText> 중도금대출 채무인수 확약서 </PageMainText>
        <PageSubText
          >매도자(채무자), 매수자(채무인수자)는 분양권 전매에 따른 공급계약서
          명의변경 시 중도금대출 채무인수를 다음과 같이 진행할 것을 확약하며, 본
          확약의 증거로 확약서를 작성하여 채권자 하나캐피탈㈜에
          제출합니다.</PageSubText
        >
      </PageTextGroup>

      <div>
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">고객정보</h3>

          <ul class="reset-list">
            <li class="row-margin-item-group">
              <BasicBox>
                <BasicBoxHead>
                  <BasicBoxHeadLeft>
                    <h3 class="text-body-1 font-weight-medium">
                      채무자(매도자)
                    </h3>
                  </BasicBoxHeadLeft>
                </BasicBoxHead>

                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>성명 </KeyValueTitle>
                    <KeyValueText>김하나</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>생년월일 </KeyValueTitle>
                    <KeyValueText>1999.01.23</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>휴대폰번호</KeyValueTitle>
                    <KeyValueText>010-####-5678</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </BasicBox>
            </li>
            <li class="row-margin-item-group">
              <BasicBox>
                <BasicBoxHead>
                  <BasicBoxHeadLeft>
                    <h3 class="text-body-1 font-weight-medium">
                      채무인수자(매수자)
                    </h3>
                  </BasicBoxHeadLeft>
                </BasicBoxHead>

                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>성명 </KeyValueTitle>
                    <KeyValueText>김하나</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>생년월일 </KeyValueTitle>
                    <KeyValueText>1999.01.23</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>휴대폰번호</KeyValueTitle>
                    <KeyValueText>010-####-5678</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </BasicBox>
            </li>
          </ul>
        </section>
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">물건지정보</h3>
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">분양내역</h3>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>물건지주소 </KeyValueTitle>
                <KeyValueText
                  >(46088)부산 기장군 기장읍<br />사랑리 465-1</KeyValueText
                >
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>물건명 </KeyValueTitle>
                <KeyValueText>오시리아 스위체 마티에</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>세부정보</KeyValueTitle>
                <KeyValueText>XX동 YY호</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>사업주체명</KeyValueTitle>
                <KeyValueText>오시리아타워 레지던스 PFV</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">대출내역</h3>
          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>총대출금액</KeyValueTitle>
                <KeyValueText
                  >150,000,000원 <br />(금 일억오천만원정)</KeyValueText
                >
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>거래구분</KeyValueTitle>
                <KeyValueText>한도거래</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>이자율</KeyValueTitle>
                <KeyValueText>변동CD(91일물) + 3.290%</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>지연배상금율</KeyValueTitle>
                <KeyValueText>약정이자율+3%</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출개시일</KeyValueTitle>
                <KeyValueText>채무인수실행일</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출만료일</KeyValueTitle>
                <KeyValueText>2024.07.31</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>중도상환수수료</KeyValueTitle>
                <KeyValueText>없음</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>이자납입일</KeyValueTitle>
                <KeyValueText>6일</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>상환방법</KeyValueTitle>
                <KeyValueText>대출기간만료일 전액상환</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출상환방법</KeyValueTitle>
                <KeyValueText>중도금일정에 따라 분할 실행</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>

          <h4 class="text-body-5 font-weight-medium">
            이자 및 지연배상금 계산방법
          </h4>
          <h4 class="text-body-5 font-weight-medium">이자지급 시기 및 방법</h4>
        </section>
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">지연배상금</h3>
        </section>
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            차용총액 확정 및 분할상환기일표 통지
          </h3>
        </section>
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">감액·정지</h3>
        </section>
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            약정한도 미사용 수수료
          </h3>
        </section>
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">인지세의 부담</h3>
        </section>
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">상환통화 및 환율</h3>
        </section>
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">담보·보험</h3>
        </section>
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">담보권 설정</h3>
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
