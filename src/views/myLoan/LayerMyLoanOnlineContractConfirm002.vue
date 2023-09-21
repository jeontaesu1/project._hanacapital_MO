<script>
// MY_M03_l022(MY_M03_l022le1)
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PageTextGroup,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    StepProgress,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    UnitText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    CarEmblem,
    CarThumb,
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
        <StepProgress :total="8" :current="4" />
      </template>

      <PageTextGroup>
        <PageMainText>
          대출 신청 정보를<br />
          확인해 주세요
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
                <KeyValueTitle>생년월일</KeyValueTitle>
                <KeyValueText>1993.01.23</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>자택주소</KeyValueTitle>
                <KeyValueText>
                  (88733) 인천 서구 청라1동<br />
                  11, 청라동
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>사업자번호</KeyValueTitle>
                <KeyValueText>12-345-6780</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>전화번호</KeyValueTitle>
                <KeyValueText>010-1234-5678</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>이메일</KeyValueTitle>
                <KeyValueText>hanacapital@gmail.com</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>청구서 수령방법</KeyValueTitle>
                <KeyValueText>온라인(SMS)</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">결제 정보</h3>

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
                <KeyValueText>***4567890123</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>예금주명</KeyValueTitle>
                <KeyValueText>김하나</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>매월 11일</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>1회차 납부일</KeyValueTitle>
                <KeyValueText>2021.11.11</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">차량 정보</h3>

          <BasicBox>
            <BasicBoxHead align="top">
              <BasicBoxHeadLeft>
                <div class="flex-box row-margin-item">
                  <div class="flex-box__cell flex-1">
                    <div class="row-margin-mini">
                      <CarEmblem
                        src="/images/_dummy/car-emblem.png"
                        name="현대"
                      />
                    </div>
                    <h4 class="text-body-1 font-weight-medium">캐스퍼</h4>
                    <p class="text-body-4 color-gray row-margin-small">
                      올 뉴 아반떼/인스퍼레이션
                    </p>
                  </div>
                  <div class="flex-box__cell flex-box__cell--medium">
                    <CarThumb src="/images/_dummy/car-thumb.png" />
                  </div>
                </div>
                <UnitText rightUnit="원"><strong>23,500,000</strong></UnitText>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>판매사(매도인)</KeyValueTitle>
                <KeyValueText>현대자동차㈜송파지점</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>등록명의</KeyValueTitle>
                <KeyValueText>금융회사</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">리스 조건</h3>

          <BasicBox>
            <BasicBoxHead align="top">
              <BasicBoxHeadLeft>
                <p class="text-body-4 font-weight-light row-margin-small">
                  2023.01.10
                </p>
                <!-- Case : 운용리스 -->
                <h4 class="text-body-1 font-weight-medium">운용리스</h4>
                <!-- //Case : 운용리스 -->

                <!-- Case : 금융리스 -->
                <h4 class="text-body-1 font-weight-medium">금융리스</h4>
                <!-- // Case : 금융리스 -->
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>계약번호</KeyValueTitle>
                <KeyValueText>D#############</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>리스기간</KeyValueTitle>
                <KeyValueText>36 개월</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>취득원가</KeyValueTitle>
                <KeyValueText>17,800,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>보증금</KeyValueTitle>
                <KeyValueText>0 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>잔존가치</KeyValueTitle>
                <KeyValueText>8,722,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>선납금 / 선납리스료</KeyValueTitle>
                <KeyValueText>0 원 / 0 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>리스료(A+B+C+D+E)</KeyValueTitle>
                <KeyValueText>365,700 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>리스료/차량분(A)</KeyValueTitle>
                <KeyValueText>365,700 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>선납리스료(B)</KeyValueTitle>
                <KeyValueText>0 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>자동차세(C)</KeyValueTitle>
                <KeyValueText>0 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>보험료(D)</KeyValueTitle>
                <KeyValueText>0 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>기타비용(E)</KeyValueTitle>
                <KeyValueText>0 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>
                  보증금에 따른<br />
                  리스료예상할인율<br />
                  /할인금액
                </KeyValueTitle>
                <KeyValueText>
                  0.0 % <br />
                  / 0 원
                </KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>
                  선납금/선납리스료에<br />
                  따른 리스료<br />
                  예상할인율<br />
                  /할인금액
                </KeyValueTitle>
                <KeyValueText>
                  0.0 % <br />
                  / 0 원
                </KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>계약주행거리</KeyValueTitle>
                <KeyValueText>20,000 km</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>Km당 초과운행료</KeyValueTitle>
                <KeyValueText>
                  국산차 : 100원<br />
                  수입차 : 300원
                </KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>자동자체 포함여부</KeyValueTitle>
                <KeyValueText>불포함</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>보험료 포함여부</KeyValueTitle>
                <KeyValueText>불포함</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>교통범칙금</KeyValueTitle>
                <KeyValueText>대납</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">리스조건 안내</h3>

          <!-- Case : 운용리스일 경우 노출 -->
          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              중도해지 손해배상금
            </h4>
            <p class="text-body-2">
              미회수원금X최고요율(80%)X(잔여기간 월수/리스기간 전체월수)
            </p>
            <p
              class="text-body-4 color-gray-tertiary font-weight-light row-margin-mini"
            >
              중도해지손해배상금률은 리스 기간이 경과함에 따라 연/월/일 단위로
              차등하여 인하되는 방식으로 적용하며, 계약해지일 현재의 잔존일수가
              1년 이하인 경우에는 월 단위 또는 일 단위로 차등하여 인하하는
              방식으로 적용.
            </p>
          </section>
          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              규정손해배상금
            </h4>
            <p class="text-body-2">
              미회수원금X최고요율(20%)X(잔여기간 월수/리스시간 전체월수)
            </p>
            <p
              class="text-body-4 color-gray-tertiary font-weight-light row-margin-mini"
            >
              규정손해배상금률은 리스 기간이 경과함에 따라 연/월/일 단위로
              차등하여 인하되는 방식으로 적용하며, 계약해지일 현재의 잔존일수가
              1년 이하인 경우에는 월 단위 또는 일 단위로 차등하여 인하하는
              방식으로 적용.
            </p>
          </section>
          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              승계수수료
            </h4>
            <p class="text-body-2">
              미회수원금X승계수수료 최고요율(1%)X(잔여기간 월수/리스기간
              전체월수)
            </p>
            <p
              class="text-body-4 color-gray-tertiary font-weight-light row-margin-mini"
            >
              최소금액 : 500,000원/최대금액 900,000원
            </p>
          </section>
          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              반환지연금
            </h4>
            <p class="text-body-2">
              일리스료+(일리스료X반환지연금률 100%)X경과일수
            </p>
          </section>
          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              반환자동차평가/가치감가비용
            </h4>
            <p class="text-body-2">
              감가금액=반환시점의 자동차의 기대가치(혹은 중고차시세)X감가율의 합
            </p>
            <p
              class="text-body-4 color-gray-tertiary font-weight-light row-margin-mini"
            >
              감가비 산정기준은 홈페이지 참조
            </p>
          </section>
          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              지연배상금률
            </h4>
            <p class="text-body-2">연 20%</p>
          </section>
          <!-- //Case : 운용리스일 경우 노출 -->

          <!-- Case : 금융리스일 경우 노출 -->
          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              규정손해배상금
            </h4>
            <p class="text-body-2">
              미회수원금X최고요율(4%) X(잔여기간 월수/리스기간 전체월수)
            </p>
            <p
              class="text-body-4 color-gray-tertiary font-weight-light row-margin-mini"
            >
              규정손해배상금률은 리스 기간이 경과함에 따라 연/월/일 단위로
              차등하여 인하되는 방식으로 적용하며, 계약해지일 현재의 잔존일수가
              1년 이하인 경우에는 월 단위 또는 일 단위로 차등하여 인하하는
              방식으로 적용.
            </p>
          </section>
          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              승계수수료
            </h4>
            <p class="text-body-2">
              미회수원금X승계수수료 최고요율(1%)X(잔여기간 월수/리스기간
              전체월수)
            </p>
            <p
              class="text-body-4 color-gray-tertiary font-weight-light row-margin-mini"
            >
              최소금액 : 500,000원/최대금액 900,000원
            </p>
          </section>
          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              반환지연금
            </h4>
            <p class="text-body-2">
              일리스료+(일리스료X반환지연금률 100%)X경과일수
            </p>
          </section>
          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              반환자동차평가/가치감가비용
            </h4>
            <p class="text-body-2">
              감가금액=반환시점의 자동차의 기대가치(혹은 중고차시세)X감가율의 합
            </p>
            <p
              class="text-body-4 color-gray-tertiary font-weight-light row-margin-mini"
            >
              감가비 산정기준은 홈페이지 참조
            </p>
          </section>
          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              지연배상금률
            </h4>
            <p class="text-body-2">연 6.9%</p>
            <p
              class="text-body-4 color-gray-tertiary font-weight-light row-margin-mini"
            >
              약정이자율+최대3%, 법정최고금리 이내
            </p>
          </section>
          <!-- //Case : 금융리스일 경우 노출 -->
        </section>

        <!-- Case : 자동차 근저당 설정이 되어있을 경우 노출 -->
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            자동차 근저당 설정계약서
          </h3>

          <div>
            <section class="row-margin-contents-group">
              <h4 class="text-body-2 row-margin-item-medium">
                채권자 겸 근저당권자
              </h4>

              <BasicBox>
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>주소</KeyValueTitle>
                    <KeyValueText>
                      88733<br />
                      인천 서구 청라1동 11, 청라동
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>상호</KeyValueTitle>
                    <KeyValueText>하나캐피탈</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </BasicBox>
            </section>

            <section class="row-margin-contents-group">
              <h4 class="text-body-2 row-margin-item-medium">
                근저당권 설정인
              </h4>

              <BasicBox>
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>주소</KeyValueTitle>
                    <KeyValueText>
                      88733<br />
                      인천 서구 청라1동 11, 청라동
                    </KeyValueText>
                  </KeyValueItem>
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
                    <KeyValueTitle>생년월일</KeyValueTitle>
                    <KeyValueText>1998.01.23</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </BasicBox>
            </section>

            <section class="row-margin-contents-group">
              <h4 class="text-body-2 row-margin-item-medium">채무자</h4>

              <BasicBox>
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>주소</KeyValueTitle>
                    <KeyValueText>
                      88733<br />
                      인천 서구 청라1동 11, 청라동
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>성명</KeyValueTitle>
                    <KeyValueText>홍길동</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>
                      설정금액<br />
                      (채권가액)
                    </KeyValueTitle>
                    <KeyValueText>
                      금 100,000,000 원정<br />
                      (100,000,000 원)
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </BasicBox>
            </section>
          </div>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">자동차의 표시</h3>

          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="flex-box row-margin-mini">
                  <div class="flex-box__cell">
                    <CarEmblem
                      src="/images/_dummy/car-emblem.png"
                      name="현대"
                    />
                  </div>
                  <div class="flex-box__cell flex-box__cell--small">
                    <p class="text-body-4 font-weight-light">2020년식</p>
                  </div>
                </div>
                <h3 class="text-body-1 font-weight-medium">123가1234</h3>
                <p class="text-body-4 color-gray row-margin-small">
                  올 뉴 아반떼/인스퍼레이션
                </p>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <CarThumb src="/images/_dummy/car-thumb.png" />
              </BasicBoxHeadRight>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>차대번호</KeyValueTitle>
                <KeyValueText>ASDFSD1231ASDF</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>
        <!-- //Case : 자동차 근저당 설정이 되어있을 경우 노출 -->
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
