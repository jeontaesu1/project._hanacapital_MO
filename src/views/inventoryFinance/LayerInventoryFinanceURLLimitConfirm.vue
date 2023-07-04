<script>
// AF_M98_l012
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
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
          <PopupTitle>재고금융 한도거래 확약서</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>재고금융 한도거래 확약서</PageMainText>
        <PageSubText>
          하나캐피탈주식회사(이하 “하나”라고 함)와 한도거래신청인(이하
          “신청인”이라 함)은 2023년 05월 03일 체결한 여신거래 약정서에 기한
          여신거래기본약관(기업용) 적용과 함께 중고 자동차의 구입비용에 대한
          대출거래에 관하여 다음과 같이 적용됨을 확약합니다.
        </PageSubText>
      </PageTextGroup>

      <div :class="$style['contents-list']">
        <ol
          :class="[
            $style['contents-list__list'],
            $style['contents-list__list--senary'],
          ]"
        >
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">1</div>
              <div :class="$style['contents-list__title']">
                “재고금융”이란 “신청인”이 중고자동차 매매업을 위하여 구입하는
                중고자동차의 구입대금을 “하나”가 “신청인”에게 대출해주는
                금융상품을 의미한다.
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">2</div>
              <div :class="$style['contents-list__title']">
                “하나”는 “신청인”에 대하여 약정기간 동안 금 상품한도금액 원정
                이내에서 계속적, 반복적으로 ‘재고금융’을 실행할 수 있으며,
                여신(한도)금액은 실행된 대출금액만큼 감소하며 대출금액을 상환한
                경우 상환액만큼 증가되고 대출금액의 상환은 대출 기간내 에서
                언제든지 신청할 수 있다. ‘여신(한도)금액’은 재고금융 外 다른
                상품(용도)으로 진행할 수 없다.
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">3</div>
              <div :class="$style['contents-list__title']">
                재고금융의 대출조건은 건별 진행시 마다 “하나”의 규정에 따라 해당
                차량연식, 사고이력 등의 조건을 바탕으로 심사 후 대출승인 여부 및
                대출가능금액을 결정하며, 내부 심사기준에 부합하지 않는 경우 대출
                실행의 중단 및 약정을 해지할 수 있다. 재고금융의 신청은 “하나”가
                정한 차입신청서를 작성하고 채권보전과 관련된 일체의 서류를
                첨부하여 “하나”에게 제출하는 것으로 한다. 중고차 매매업을 하기
                위해 신규로 구입한 중고자동차에 한정하여 구입 후 해당 차량에
                대해 “신청인”의 명의로 명의 이전을 완료하고, 해당차량에 대하여
                “하나”가 정한 채권최고액으로 하여 “하나”의 명의로 근저당권을
                설정하여야 한다. “재고금융 대출 가능한도”에 대한 사전 확인 없이
                근저당설정을 완료하여 생긴 손해에 대해 “하나”는 책임지지
                아니한다.
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">4</div>
              <div :class="$style['contents-list__title']">
                “신청인”이 판매하는 차량의 판매조건이 할부조건인 경우 “하나”의
                할부금융 또는 대출을 최우선적으로 이용할 수 있도록 상호 적극
                노력하며, 재고금융 이용률 또는 할부이용률이 저조할 경우
                ‘여신(한도)금액’의 감액 및 여신거래 약정을 해지할 수 있다.
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">5</div>
              <div :class="$style['contents-list__title']">
                “신청인”은 아래 사유에 해당하는 경우 기한의 이익을 상실하고
                “하나”는 “신청인”에게 잔여 대출금액에 대하여 일시불 납입을
                청구할 수 있다.<br />
                ① 채무불이행 발생<br />
                ② 재고금융 본래 목적 이외의 용도로 전용<br />
                ③ 재고금융대상 차량의 임의처분<br />
                ④ 담보제공재산에 대하여 채권 보전조치/강제집행조치 등의 신청이
                있거나 체납처분압류통지가 발송된 때<br />
                ⑤ 휴업, 폐업, 도피 및 기타의 사유로 지급을 정지한 것으로
                인정되는 경우
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">6</div>
              <div :class="$style['contents-list__title']">
                “하나”와 “신청인”은 약정내용 및 조건을 변경하고자 할 경우에는
                15일 전에 상대방에 대하여 서면으로 통보하여야 하며 상호합의에
                의하여 변경할 수 있다. 이에 대한 합의가 이루어지지 않는 경우
                “하나”, “신청인” 양 당사자는 본 약정을 해지할 수 있다.
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">7</div>
              <div :class="$style['contents-list__title']">
                “하나”와 “신청인”은 아래의 사유가 발생한 때에는 서면통지에
                의하여 본 약정을 즉시 해지할 수 있다.<br />
                ① 고의로 거래를 불성실하게 하거나 거래 상대방에게 사해행위 또는
                불법행위를 하는 경우<br />
                ② 거래관계를 통하여 알게 된 상대방의 영업비밀을 외부에 누설 및
                제공하는 경우<br />
                ③ 상대방의 신용 또는 명예를 현저하게 손상한 경우<br />
                ④ “신청인”의 재고금융 이용률 및 할부이용률이 저조한 경우<br />
                ⑤ 기타 약정상의 의무를 위반하거나 더 이상 약정을 유지할 수 없는
                중대한 사유가 발생한 때
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">8</div>
              <div :class="$style['contents-list__title']">
                본 약정의 유효기간 이내이더라도 “하나”와 “신청인”은 15일 전에
                상대방에게 서면 통지하여 본 약정을 해지할 수 있다.
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">9</div>
              <div :class="$style['contents-list__title']">
                신용정보 동의<br />
                ① “신청인” 및 연대보증인은 귀사의 본 약정 및 본 약정에 기한
                재고금융 대출 계약 각각의 체결, 유지, 이행, 관리, 개선 등의
                목적으로 신용조회회사, 신용정보 집중기관으로 부터 본인 및
                연대보증인의 신용정보를 조회하거나, 공공기관을 통하여
                “신청인”임을 확인하는 것에 대해 동의한다.<br />
                ② “신청인” 및 연대보증인은 귀사가 재고금융 대출 계약의 체결,
                유지, 이행, 관리, 개선 등의 목적으로 개인식별정보(성명,
                주민등록번호 등), 신용거래정보, 신용도정보, 신용능력정보,
                공공기관정보 등 본인 및 연대보증인의 개인(신용)정보를
                수집,이용하는 것에 대해 동의한다.<br />
                ③ “신청인” 및 연대보증인은 신용정보 수집, 이용, 조회에 대한
                동의서를 별도로 작성, 제출하며 동의의 효력은 본 약정의
                유효기간이 종료하는 시점까지 유지됨을 동의한다.<br />
                ④ 본 약정의 유효기간 동안 개별 재고금융을 신청할 때마다
                이루어지는 신용정보의 수집, 이용, 조회에 대해서도 상기 동의의
                효력이 미치며, 상기 동의에 의하여 모두 동의한 것으로 간주한다.
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">10</div>
              <div :class="$style['contents-list__title']">
                본 확약 내용 중 “여신거래 약정서”내용과 충돌되는 사항에 대해서는
                본 확약 내용이 우선하며, 본 확약 이외 사항은 “여신거래 약정서”
                내용과 약관을 따르기로 한다.
              </div>
            </div>
          </li>
        </ol>
      </div>

      <div class="row-margin-contents">
        <p
          class="text-body-3 color-gray font-weight-light align-right row-margin-item-group"
        >
          2000.01.01
        </p>

        <p class="text-body-4 font-weight-regular align-right">
          리스 신청인(이름) 김하나 (인)
        </p>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확인했습니다</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/LayerInventoryFinanceURLLimitConfirm.scss';
</style>
