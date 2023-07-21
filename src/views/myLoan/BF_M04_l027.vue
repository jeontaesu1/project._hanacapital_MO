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
        <!-- 고객정보 -->
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">고객정보</h3>

          <div>
            <section class="row-margin-item-group">
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
                    <KeyValueTitle>성명</KeyValueTitle>
                    <KeyValueText>김하나</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>생년월일</KeyValueTitle>
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
            </section>
            <section class="row-margin-item-group">
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
            </section>
          </div>
        </section>
        <!-- // 고객정보 -->

        <!-- 물건지정보 -->
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
        <!-- // 물건지정보 -->

        <!-- 대출내역 -->
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
                  >150,000,000원<br />(금 일억오천만원정)</KeyValueText
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

          <div class="row-margin-contents">
            <section :class="$style['notice-section']">
              <h3 :class="$style['notice-section__title']">
                이자 및 지연배상금 계산방법
              </h3>
              <ul
                :class="[$style['basic-list'], $style['basic-list--regular']]"
              >
                <li :class="$style['basic-list__item']">
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    1년을 365일로 보고 1일 단위로 계산합니다. 그러나, 외국환
                    거래에 있어서는 구제관례, 상관습에 따릅니다.
                  </div>
                </li>
              </ul>
            </section>
          </div>
          <div class="row-margin-contents">
            <section :class="$style['notice-section']">
              <h3 :class="$style['notice-section__title']">
                이자지급 시기 및 방법
              </h3>
              <ul
                :class="[$style['basic-list'], $style['basic-list--regular']]"
              >
                <li :class="$style['basic-list__item']">
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    최초 이자는 여신개시일로부터 2개월 이내에, 그 후의 이자는
                    지급한 이자의 계산 최종일 익일부터 1개월 이내에 지급합니다.
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </section>
        <!-- // 대출내역 -->

        <!-- 지연배상금 -->
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">지연배상금</h3>
          <div :class="$style['contents-list']">
            <ol
              :class="[
                $style['contents-list__list'],
                $style['contents-list__list--quinary'],
              ]"
            >
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">1</div>
                  <div :class="$style['contents-list__title']">
                    이자, 분할상환금, 분할상환원리금을 그 기일에 지급하지 아니한
                    때에는 지급하여야 할 금액에 대하여, 곧 지연배상금을
                    지급하기로 하며 지연배상금은 약정이율 + 최대 3%, 법정
                    최고금리 이내에서 캐피탈과 본인이 약정한 지연배상금률에 따라
                    별도로 납부하기로 합니다.
                  </div>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">2</div>
                  <div :class="$style['contents-list__title']">
                    여신기간 만료일에 채무를 이행하지 아니하거나,
                    여신거래기본약관에 의하여 기한의 이익을 상실한 때
                    (할인어음의 환매채무 발생 포함)에는 그때부터 여신 잔액에
                    대하여 곧 지연배상금을 지급하기로 합니다.
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <!-- // 지연배상금 -->

        <!-- 차용총액 확정 및 분할상환기일표 통지 -->
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            차용총액 확정 및 분할상환기일표 통지
          </h3>
          <div :class="$style['contents-list']">
            <ol
              :class="[
                $style['contents-list__list'],
                $style['contents-list__list--quinary'],
              ]"
            >
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">1</div>
                  <div :class="$style['contents-list__title']">
                    분할실행하는 여신의 경우, 채무총액은 최종의 실행후에
                    확정되며, 확정방법은 분할상환기일표 및 영수증 기타
                    증빙자료에 의합니다.
                  </div>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">2</div>
                  <div :class="$style['contents-list__title']">
                    적금대출 및 급부금을 제외한 분할상환 여신의 경우, 캐피탈은
                    확정된 채무총액에 대한 분할상환기일표를 작성하여
                    채무관계인에게 통지하기로 합니다.
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <!-- // 차용총액 확정 및 분할상환기일표 통지 -->

        <!-- 감액·정지 -->
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">감액·정지</h3>
          <div :class="$style['contents-list']">
            <ol
              :class="[
                $style['contents-list__list'],
                $style['contents-list__list--quinary'],
              ]"
            >
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">1</div>
                  <div :class="$style['contents-list__title']">
                    한도거래 및 분할 실행하는 여신의 경우, 국가경제·금융사정의
                    급격한 변동 또는 본인의 신용상태의 현저한 악화 등으로
                    여신거래에 중대한 지장을 초래한다고 판단될 때에는, 캐피탈은
                    통지에 의하여 거래조건의 여신(한도)금액을 줄이거나,
                    거래기간에 불구하고 여신실행을 일시 정지할 수 있습니다. 이
                    경우 본인은 감액으로 말미암은 한도초과 금액은 곧 갚기로
                    합니다.
                  </div>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">2</div>
                  <div :class="$style['contents-list__title']">
                    제1항에서 정한 사유가 해소되어 정상적 여신거래가 가능한
                    경우에는 캐피탈은 곧 감액·정지를 해소하기로 합니다.
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <!-- // 감액·정지 -->

        <!-- 약정한도 미사용 수수료 -->
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            약정한도 미사용 수수료
          </h3>
          <p class="text-body-2">
            한도거래 및 외화대출의 경우 거래조건의 여신(한도)금액 중
            미사용금액에 대하여 따로 정한 약정이 있는 때에는, 약정으로 정한
            기준에 의한 수수료를 지급하기로 합니다.
          </p>
        </section>
        <!-- // 약정한도 미사용 수수료 -->

        <!-- 인지세의 부담 -->
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">인지세의 부담</h3>
          <div :class="$style['contents-list']">
            <ol
              :class="[
                $style['contents-list__list'],
                $style['contents-list__list--quinary'],
              ]"
            >
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">1</div>
                  <div :class="$style['contents-list__title']">
                    이 약정서 작성에 따른 인지세는 각 50%씩 본인과 캐피탈이
                    부담합니다.
                  </div>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">2</div>
                  <div :class="$style['contents-list__title']">
                    제1항에 의하여 본인이 부담하기로 한 인지세를 캐피탈이 대신
                    지급한 경우에는, 여신거래기본약관에 준하여 곧 갚기로 합니다.
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <!-- // 인지세의 부담 -->

        <!-- 상환통화 및 환율 -->
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">상환통화 및 환율</h3>
          <p class="text-body-2">
            외화대출의 원리금은 차용통화 또는 원화로 상환할 수 있으며, 원화로
            상환하는 경우 적용환율은 상환당일의 대고객 전신환 매도율에 의하기로
            합니다.
          </p>
        </section>
        <!-- // 상환통화 및 환율 -->

        <!-- 담보·보험 -->
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">담보·보험</h3>
          <p class="text-body-2">
            본인은 캐피탈의 다른 의사표시가 없는한, 이 약정에 의해 실행된
            여신으로 건설 또는 설치된 시설물을 그것이 설치된 토지·건물 및 그
            안의 기타시설과 함께 캐피탈에 담보로 제공하기로 하며, 캐피탈이
            요청하는 경우 캐피탈이 동의하는 종류와 금액의 보험에 가입하고 그
            보험금 청구권에 캐피탈을 위하여 질권을 설정하기로 합니다.
          </p>
        </section>
        <!-- // 담보·보험 -->

        <!-- 담보권 설정 -->
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">담보권 설정</h3>
          <div :class="$style['contents-list']">
            <ol
              :class="[
                $style['contents-list__list'],
                $style['contents-list__list--quinary'],
              ]"
            >
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">1</div>
                  <div :class="$style['contents-list__title']">
                    이 약정에 의한 채무를 담보하기 위하여 아래에 표시한 예금
                    등에 질권을 설정하고 캐피탈앞으로 그 증서(통장)의 인도를
                    마쳤습니다.
                  </div>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">2</div>
                  <div :class="$style['contents-list__title']">
                    제1항의 질권의 효력은 원금·수익권(이 계약 이후에 적립되는
                    금액을 포함합니다)과 이에 부수하는 이자·수익의 수익권,
                    특별장려금, 법정장려금 등에 미칩니다.
                  </div>
                </div>
              </li>
              <li :class="$style['contents-list__item']">
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">3</div>
                  <div :class="$style['contents-list__title']">
                    예금 등이 기한연장·개서·갱신·분할·병합·증액·감액 또는
                    이자원가된 경우에도 그 위에 질권의 효력이 미침을 승인하며,
                    그 목적인 신탁이 기간 연장되거나 연체로 말미암아
                    자동연장처리된 경우에 있어서도 그에 대한 수익권 위에 효력이
                    미침을 승인합니다.
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <!-- // 담보권 설정 -->

        <div class="row-margin-container-medium">
          <p class="text-body-2">
            채무인수 계약은 매도인과 매수자의 채무인수와 관련된 법적 계약 서류를
            하나캐피탈에 제출하고, 최종 승인을 위한 확인 ARS를 완료 및
            내부승인된 경우에 효력이 발생합니다.
          </p>
        </div>
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
@import '@/assets/scss/views/myLoan/BF_M04_l027.scss';
</style>
