<script>
// BF_M06_l023
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    StepProgress,
    PageTextGroup,
    PageMainText,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NoticeText,
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
          <PopupTitle>온라인약정</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="3" :current="1" />
      </template>

      <PageTextGroup>
        <PageMainText>
          대출 신청 정보를<br />
          <strong>확인해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <div>
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">계약자 정보</h3>

          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>성명</KeyValueTitle>
                <KeyValueText>김하나</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>주민등록번호</KeyValueTitle>
                <KeyValueText>930123-1******</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>고객구분</KeyValueTitle>
                <KeyValueText> 개인 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>휴대폰번호</KeyValueTitle>
                <KeyValueText>010-1234-5678</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>사업장주소</KeyValueTitle>
                <KeyValueText>(22742) 인천 서구<br />에코로 1811</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>사업장명</KeyValueTitle>
                <KeyValueText>강남 피부과</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>이메일</KeyValueTitle>
                <KeyValueText>hanacapital@gmail.com</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">물건 정보</h3>

          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>품목/제품명</KeyValueTitle>
                <KeyValueText>임플란트 12개월(무이자)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>제품가격</KeyValueTitle>
                <KeyValueText>3,000,000원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>계약금</KeyValueTitle>
                <KeyValueText>0원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>판매점명</KeyValueTitle>
                <KeyValueText>판매점명</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">할부금융 계약정보</h3>

          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>할부원금</KeyValueTitle>
                <KeyValueText>3,000,000원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>할부이자율</KeyValueTitle>
                <KeyValueText>0.0% (무이자)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>상환방법</KeyValueTitle>
                <KeyValueText>원금균등분할상환</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>납부일자</KeyValueTitle>
                <KeyValueText>매월 5일</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>중도상환수수료율</KeyValueTitle>
                <KeyValueText>0.0% (면제)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle class="color-red">연체이자율</KeyValueTitle>
                <KeyValueText class="color-red"
                  >9.00%<br />
                  약정이자율 + 최대 3%<br />
                  법정최금리 이내, 무이자 9%</KeyValueText
                >
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>할부기간</KeyValueTitle>
                <KeyValueText>12개월</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>월 할부금</KeyValueTitle>
                <KeyValueText>100,000원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>총할부금(원금+이자)</KeyValueTitle>
                <KeyValueText>1,200,000원</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <div class="row-margin-item">
              <NoticeText :classNames="{ wrap: 'color-red' }">
                첫 회차 및 총할부금은 첫 회차 납부일까지 경과된 일수에 따라
                변동될 수 있습니다.
              </NoticeText>
            </div>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            결제방법 및 우편물 발송정보
          </h3>

          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>입금방법</KeyValueTitle>
                <KeyValueText>자동이체</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>청구안내</KeyValueTitle>
                <KeyValueText>미발송</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>청구주소</KeyValueTitle>
                <KeyValueText>(00000)서울 광진구 구의동</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>실행통지</KeyValueTitle>
                <KeyValueText>(00000)서울 광진구 구의동</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>SMS</KeyValueTitle>
                <KeyValueText>발송</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">수납기관</h3>

          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>수납기관</KeyValueTitle>
                <KeyValueText>하나캐피탈주식회사</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대표자</KeyValueTitle>
                <KeyValueText>박승오</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>사업자번호</KeyValueTitle>
                <KeyValueText>220-81-09337</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>수납요금종류</KeyValueTitle>
                <KeyValueText>대출금(대출/할부/리스/렌트료 등)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>사업장 주소</KeyValueTitle>
                <KeyValueText
                  >서울특별시 강남구 테헤란로<br />
                  127(역삼동 648-19)<br />하나금융그룹 강남사옥</KeyValueText
                >
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">출금이체 신청내용</h3>

          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>금융기관명</KeyValueTitle>
                <KeyValueText>하나은행</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>출금계좌번호</KeyValueTitle>
                <KeyValueText>12345677894</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>예금주</KeyValueTitle>
                <KeyValueText>홍길동</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>생년월일</KeyValueTitle>
                <KeyValueText>1993.01.23</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>예금주 관계</KeyValueTitle>
                <KeyValueText>본인</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>
      </div>

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
            <BasicButton>약정하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
