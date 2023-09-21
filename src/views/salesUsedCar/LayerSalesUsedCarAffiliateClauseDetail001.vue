<script>
// UC_M08_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
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
    PopupTitle,
    PageSubText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
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
          <PopupTitle>협약서</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>자동차 할부금융 업무 협약서</strong>
        </PageMainText>
        <PageSubText>
          <span class="color-green">상호명</span> (이하 ”매도인”이라 함)와
          하나캐피탈 주식회사(이하 “하나”라 함)는 자동차 구매자(이하 “구매자”라
          함)에게 자동차 할부금융을 제공함에 있어 다음과 같이 협약한다.
        </PageSubText>
      </PageTextGroup>

      <ul :class="[$style['basic-list'], $style['basic-list--regular-margin']]">
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제1조 (목적)<br />
            본 협약의 목적은 “매도인”이 판매하는 차량(이하 “대상차량”)을
            구매하기 위하여 “하나”의 할부 금융상품을 이용하는 “구매자”의 편의를
            증진하고, “매도인”의 차량대금을 확보하기 위하여, 양 당사자의 업무
            내용을 구체적으로 정하고자 함에 있다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제2조 (적용범위)<br />
            본 협약은 “매도인”이 공급하는 대상차량을 “구매자”가 “하나”로부터
            할부금융을 받아서 구입하기로 하는 경우에 적용된다. 여기서
            “할부금융”이란 여신전문금융업법 제2조 제13호에서 정한 것을 말한다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제3조 (할부금융 기본 업무 체계)<br />
            “하나”는 “구매자”에게 융자하는 할부대금을 “구매자”의 동의를 받아
            “매도인”에게 직접 지급한다. “할부대금”의 원리금은 “하나”가
            “구매자”로부터 직접 상환 받는다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제4조 (고객정보)<br />
            ① “매도인”은 본 협약의 수행으로 인해 취득한 “구매자”의
            개인(신용)정보를 본 업무 목적 이외에 이용하거나 제3자에게 제공할 수
            없고 이를 위반하여 “하나” 또는 “구매자”에게 손해가 발생한 경우 이를
            배상하여야 한다.<br />
            ② “매도인”은 본 업무를 수행하면서 『신용정보의 이용 및 보호에 관한
            법률』, 『개인정보 보호법』 등 관련 법규를 준수하여야 하며,
            “구매자”의 개인(신용)정보와 관련한 일체의 자료를 보유할 수 없다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제5조 (할부대금 지급)<br />
            ① “하나”는 할부대금을 “매도인”이 지정한 “매도인” 명의의 결제계좌로
            입금한다.<br />
            ② “매도인”이 지정계좌를 변경하고자 할 때에는 “하나”에게 서면으로
            통보하여야 한다.<br />
            ③ “매도인”이 차량대금을 “하나”와 신용카드사의 제휴서비스를 이용하여
            자동차 제작사에 신용카드로 결제한 경우, “하나”가 할부대금 중
            차량대금에 해당하는 카드결제금액은 “매도인”을 대신하여 신용카드사에
            입금하고, 할부대금에서 신용카드사에 입금한 금액을 제외한 금액을
            “매도인”에게 지급하면 “하나”는 “매도인”에게 할부대금 지급 의무를
            이행한 것으로 간주한다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제6조 (할부대금 반환책임)<br />
            ① “매도인”의 책임 있는 사유로 다음 각 호의 경우가 발생한 때에는
            “매도인”은 “하나”에게 “하나”가 지급한 할부대금 및 대금
            지급시점부터의 경과이자를 “하나”의 통지를 받은 즉시 반환하여야 하며,
            해당 할부금융 건의 지연이자(연체이자) 및 기타비용이 발생하였을 경우
            이를 "하나"에게 지급한다. (경과이자 및 지연이자(연체이자)는
            할부신청서 상의 약정 내용 적용)<br />
            1. 목적물(대상차량)의 전부 또는 일부가 목적물의 인도 시기까지
            “구매자”에게 인도되지 아니한 경우<br />
            2. 할부대금 지급 후 “매도인”의 하자담보책임 불이행 등 “매도인”의
            귀책사유로 인하여 “구매자”가 할부대금의 원리금 상환을 거부하는
            경우<br />
            3. “구매자”가 『할부거래에 관한 법률』상 인정되는 철회권, 항변권 등
            정당한 권리에 의거하여 할부대금 원리금 상환을 거부하거나 “매도인”의
            귀책사유로 대상차량 매매계약이 해제, 해지, 또는 취소되는 경우<br />
            4. 1개의 물품에 대하여 “하나”에게 중복으로 할부신청을 한
            경우(이중할부신청)<br />
            5. 물품판매 없이 물품판매를 가장하여 할부신청을 한 경우(물품판매 후
            목적물 회수 등 허위 할부신청)
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제7조 (할부금융조건)<br />
            금리, 할부기간 등 할부금융 조건은 “하나”가 관계법령에 저촉되지 않는
            범위 내에서 정하는 기준에 의한다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제8조 (할부대금 지급 및 등록)<br />
            ① “매도인”이 “하나”의 할부금융과 관련하여 “구매자”로부터 징구하여야
            할 기타비용이 있는 경우 “구매자”로부터 수령하기로 한다.<br />
            ② “매도인”은 할부금융 신청 승인이 확인되고, “하나”로부터 할부대금을
            지급 받으면 대상차량을 등록하여 “구매자” 또는 “구매자”가 지정하는
            자에게 인도할 의무가 있다.<br />
            (“매도인”은 차량등록 및 인도의 구체적 시기와 절차를 “구매자”와
            협의하여 동의하에 진행한다.)<br />
            ③ ”하나”의 전산 또는 컴퓨터 시스템 기능정지나 기타 유사한 사건 등
            “하나”의 통제를 벗어난 합리적인 사유가 있고, “매도인”과 “하나”가
            그러한 사유에 대하여 상호이해 및 수용하여 “매도인”이 사전 동의하는
            경우에는 “하나”의 할부대금 지급이 연기될 수 있다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제9조 (협조사항)<br />
            ① “매도인”은 “하나”에게 “구매자”의 할부금 납입 등 할부금융 약정
            이행상황의 확인을 의뢰할 수 있고, ”하나”는 이에 협조하여야 한다.<br />
            ② “매도인”은 “구매자”가 할부금융 약정을 이행하지 않을 경우 ”하나”의
            요청에 따라 할부금융 약정이 조속히 이행될 수 있도록 협조하여야 한다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제10조 (중도상환시 취급수수료 처리)<br />
            할부 약정 시 “매도인” 또는 “매도인”의 판매위탁자가 “하나”에게 지급한
            취급수수료 및 무이자 선취수수료는 “구매자”가 할부약정 기간 중에
            할부대금을 중도상환하더라도 “하나”는 반환하지 않으며 “매도인”은 이에
            동의한다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제11조 (“매도인”의 유통점 등)<br />
            ① 본 협약은 “매도인”의 대리인, 대리점 또는 유통점 등(이하 “유통점”
            이라 함)이 존재 할 경우 “유통점”에게도 적용되며, 이때 “매도인”은
            “유통점”으로 인한 “하나”의 모든 손해에 대해 “하나”에게 직접 배상할
            책임을 진다. (유통점은 차량 판매대행등 판매에 관한 위탁업체를
            의미함.)<br />
            ② “유통점”이 “하나”에게 지급할 금액이 있는 경우, “하나”는
            “매도인”에게 지급할 금액에서 이를 공제한 후 “매도인”에게 지급할 수
            있다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제12조 (변경사항 통보)<br />
            “매도인”은 상호, 대표자, 주소, 인감, 거래계좌 등 거래에 있어 주요한
            변경사항이 있는 경우에는 “하나”에게 서면으로 통보하여야 한다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제13조 (협약기간 및 해지)<br />
            ① 본 협약의 기간은 본 협약 체결일로부터 1년으로 하고, 기간 만료
            1개월 전에 계약 종료 또는 조건 변경에 관한 서면 통지가 없는 경우에는
            동일한 조건으로 1년씩 자동 갱신된 것으로 본다.<br />
            ② 협약기간 중에도 양 당사자 합의로 본 협약을 해지할 수 있다. 단,
            “매도인” 또는 “하나”는 상대방에게 아래 각호 중 하나에 해당하는
            사유가 발생하는 경우에는 상대방에 대한 서면 통지로서 본 협약을
            해지할 수 있다.<br />
            1. 양 당사자 중 어느 일방이 본 협약의 내용을 위반하거나 의무를
            태만히 하고 그 시정을 구하는 상대방의 통지가 있는 날로부터 1개월
            이내에 해당 당사자가 이를 시정하지 않은 경우<br />
            2. 양 당사자 중 어느 일방이 파산, 화의, 회사정리 신청 등을 하거나 그
            주요재산 등에 대해서 압류, 가압류 등의 처분을 받거나 당해 영업의
            전부 또는 주요부분을 양도하거나 관련 인허가, 등록 등이 취소된
            경우<br />
            ③ “매도인” 또는 “하나”가 본 협약상의 의무를 지체하거나 불완전하게
            이행하여 상대방에게 손해가 발생하는 경우, 그 귀책당사자는 상대방이
            입은 일체의 손해를 배상하여야 한다.<br />
            ④ 본 협약이 해지 또는 종료된 경우에도 해지 또는 종료 전에 승인된
            할부금융 신청과 관련하여 각 당사자의 의무는 영향을 받지 아니한다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제14조 (준용)<br />
            본 협약이 “매도인”의 딜러지점(판매대리점)에도 동일하게 적용될 수
            있도록 “매도인”은 딜러지점(판매대리점)을 관리하고 이에 필요한 법적
            의무를 다한다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제15조 (준거법 및 합의 관할)<br />
            본 협약으로부터 또는 본 협약과 관련하여 발생한 분쟁은 상호 신의를
            바탕으로 하여 우호적으로 해결하기로 한다. 분쟁이 원만히 해결될 수
            없을 때에는 “매도인”의 주소, 영업소 또는 “하나”의 본 · 지점 소재지
            법원을 관할법원으로 한다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제16조 (기타사항)<br />
            본 협약에 명시되지 아니한 사항은 상호간의 원만한 협의에 의하여
            결정하되 이견이 있는 경우에는 관련법규, 일반 상관례에 의하여
            결정한다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            본 협약의 성립을 입증하기 위하여 “매도인”과 ”하나”는 본 협약서에
            기명날인 하여 2부를 작성하여 각각 1부씩 보관한다.
          </div>
        </li>
      </ul>

      <p
        class="text-body-3 font-weight-light color-gray align-right row-margin-contents"
      >
        2023년 05월 03일
      </p>

      <div>
        <section class="row-margin-contents">
          <h3 class="text-body-2 row-margin-item-medium">매도인</h3>

          <KeyValue margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>상호</KeyValueTitle>
              <KeyValueText>드림카센터</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>주소</KeyValueTitle>
              <KeyValueText>
                서울 강남구 헌릉로 745길 25 216호<br />
                (율현동, 강남자동차매매단지)
              </KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대표이사</KeyValueTitle>
              <KeyValueText>김하나 (인)</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </section>

        <section class="row-margin-contents">
          <h3 class="text-body-2 row-margin-item-medium">하나</h3>

          <KeyValue margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>상호</KeyValueTitle>
              <KeyValueText>하나캐피탈주식회사</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>주소</KeyValueTitle>
              <KeyValueText>
                서울특별시 강남구 테헤란로 127<br />
                (역삼동 648-19) 하나금융그룹 20층
              </KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대표이사</KeyValueTitle>
              <KeyValueText>박승오 (인)</KeyValueText>
            </KeyValueItem>
          </KeyValue>
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

<style lang="scss" module>
@import '@/assets/scss/views/salesUsedCar/LayerSalesUsedCarAffiliateClauseDetail001.scss';
</style>
