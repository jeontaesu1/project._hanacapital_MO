<script>
// BF_M05_l009
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PageTextGroup,
    PageMainText,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicHr,
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
          <PopupTitle>주문서</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>김하나 귀중</PageMainText>
      </PageTextGroup>

      <BasicBox>
        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>주문번호</KeyValueTitle>
            <KeyValueText>D12212-02015-2000</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>주문일자</KeyValueTitle>
            <KeyValueText>2022.12.01</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>수락기한</KeyValueTitle>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <p class="text-body-4 font-weight-light row-margin-item-group">
        리스(시설대여)회사인 하나캐피탈주식회사(이하 '갑'이라 한다.)와
        리스이용자인 [$이름$] (이하 '병'이라 한다)간에 $YYYY$년 $MM$월
        $DD$일자로 체결한 리스계약(계약번호 : $00000000$)에 따라, '갑'은 '병'이
        선정한 리스계약의 목적물인 다음 별표에 명시한 물건(이하 '물건'이라
        한다)을 (이하 '을'이라 한다.)에게 다음 주문조건과 별표의 내용으로
        주문하오니 이 주문을 수락하는 경우에는 주문 수락서를 작성하여 수락기한
        내 '갑'에게 도달되도록 '주문수락서'를 보내주시기 바랍니다. 본 건
        주문서와 '을'의 주문수락서에 의한 매매계약(이하 '매매계약'이라 한다)은
        '갑'이 상기 수락기한내에 '을'로부터 '주문수락서'를 실제로 수렴한 때에
        성립하는 것으로 하며, '병'은 '을'이 본 건 주문을 수락하는 경우 본 건
        주문조건에 의한 책임을 부담하기로 합니다.
      </p>

      <div class="row-margin-item-group-small row-margin-bottom-none">
        <section class="row-margin-contents-group">
          <h3 class="text-body-2 font-weight-bold row-margin-item-medium">
            물건명세
          </h3>

          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>물건명 및 규격</KeyValueTitle>
                <KeyValueText>피콜로레이져 외</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>금액</KeyValueTitle>
                <KeyValueText>100,000,00 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 font-weight-bold row-margin-item-medium">
            물건대금
          </h3>

          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>금액</KeyValueTitle>
                <KeyValueText>100,000,000 원 (부가세 포함)</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 font-weight-bold row-margin-item-medium">
            물건대금 지급방법
          </h3>

          <BasicBox>
            <h4 class="text-body-2 font-weight-regular row-margin-small">
              현금
            </h4>
            <p class="text-body-4 font-weight-light">
              '을'이 물건을 별표 제4항에 명시한 인도장소에 인도(설치)한 후
              '병'의 물건수령증서 또는 리스물건의 인수확인서를 '갑'이 접수하고,
              물건의 수량·품질·규격·성능 등이 완전하다고 '갑'이 인정하면
              물건대금을 지급하기로 한다.
            </p>
          </BasicBox>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 font-weight-bold row-margin-item-medium">
            특약사항
          </h3>

          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>특약사항</KeyValueTitle>
                <KeyValueText>없음</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>
      </div>

      <ul class="reset-list row-margin-contents-group row-margin-bottom-none">
        <li class="flex-box justify-conten-end align-items-start">
          <div class="flex-box__cell">
            <p class="text-body-4 font-weight-regular">주문인(갑)</p>
          </div>
          <div class="flex-box__cell flex-box__cell--mini">
            <p class="text-body-4 font-weight-regular">
              하나캐피탈주식회사<br />
              대표이사 박승오
            </p>
          </div>
        </li>
        <li
          class="flex-box justify-conten-end align-items-start row-margin-item-group"
        >
          <div class="flex-box__cell">
            <p class="text-body-4 font-weight-regular">대여시설이용자(병)</p>
          </div>
          <div class="flex-box__cell flex-box__cell--mini">
            <p class="text-body-4 font-weight-regular">김하나 (인)</p>
          </div>
        </li>
      </ul>

      <BasicHr className="row-margin-container-medium" />

      <section>
        <h3 class="text-title-2 row-margin-contents">주문조건</h3>

        <ul
          :class="[
            $style['basic-list'],
            $style['basic-list--regular'],
            $style['basic-list--regular-margin'],
          ]"
        >
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              제1조 (물건의 선정 및 성능보증)<br />
              ① 물건의 사양, 규격, 기능, 성능(이하‘사양, 규격, 성능’이라
              약칭한다),가격 및 매도인 등은 리스계약에 따라 병의 책임하에 병이
              선정한 것이므로 물건의 성능의 하자에 대하여 갑은 병에게 일체
              책임지지 아니하며, 만약 그 하자가 을의 귀책 사유로 인한 경우에는
              을이 갑과 병에 대해 그책임을 부담하기로 한다.<br />② 을은
              물건제작에 있어 물건의 견적서 및 사양서 등에 의한 양질의 재료를
              사용하여야 하며, 제작물건에 대해 성능의 완전성과 잠재된 하자가
              없음을 보증한다.<br />
              ③ 물건의 사용도중 발생되는 제작상의 하자 또는 자재 불량 등으로
              인한 하자에 대하여 을은 보수의 책임을 지며, 구체적인 하자 보증의
              방법은 을과 병의 별도 합의에 따르기로 한다.<br />
              ④ 제2항 및 제3항의 규정에 의한 물건 성능보장에 관한 청구 및 분쟁의
              해결은 병의 책임하에 이를 처리한다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              제2조 (설계 및 사양의 변경 등)<br />
              물건의 제작도중 설계 및 사양을 변경할 필요가 있을 경우 을과 병이
              합의한 후 갑에게 서면에 의한 사전동의를 받아야 한다.<br />
              이 경우 갑은 발주금액의 변동을 수반하지 아니하는 한도내에서 설계,
              명세 및 사양의 변경에 동의하기로 한다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              제3조 (경비의 부담)<br />
              매매계약의 따른 물건의 제작 및 인도와 관련하여 발생하는
              부대경비(운송비, 보험료, 제세공과금 등 일체)는 원칙적으로 을의
              부담으로 한다. 다만, 을은 병과 합의에 의하여 그 일부를 병의
              부담으로 할 수 있으나, 이때에 병은 갑에 대하여 취득물건가액에의
              전가 또는 병이 부담한 금액에대 한 권리를 주장하지 못한다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              제4조 (지체배상)<br />
              물건인도의 지체로 인하여 병이 입은 손해는 을과 병이 별도 합의한
              바에 따르기로 하며, 어느 경우에나 갑에게 인도 지연으로 인한
              손해배상을 청구할 수 없다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              제5조 (계약의 해제) <br />① 을에게 다음의 각호의 1에 해당하는
              사유가 발생한 때에는 갑은 을에게 14일의 기간을 정하여 그
              위반사항의 시정을 최고하고 그 기간내에 을이 이에 응하지 아니한
              때에는 갑은 본 계약을 해제할 수 있다.<br />
              1. 을이 물건제작에 있어 견적서 또는 사양서 등에 의한 양질의 재료를
              사용하지 아니한 때<br />
              2. 물건에 관하여 지적소유권에 대한분쟁이 발생하였으나 대금지급
              전까지 을이 이를 해결하지 아니한 때<br />
              3. 물건의 제작도중 갑의 사전승인 없이 설계 또는 사양을 변경한
              때<br />
              4. 물건의 제작 또는 인도 시 갑 또는 갑이 지정하는 자의 입회를
              거부한 때<br />
              5. 물건의 견적서, 사양서 및 주문조건의 이행과 관련된 을과 병간의
              별도의 합의사항을 위반한 때<br />
              ② 을, 병에게 다음 각호의 1에 해당하는 사유가 발생하는 경우, 갑은
              을로부터 주문수락서를 수령하기 전에는 이 주문을 철회할 수 있고,
              주문수락서를 수령한 이후에는 이 매매계약을 즉시 해지할 수 있다.
              다만, 이 경우 갑은 을, 병에게 다음 각호의 사유 발생 사실, 이에
              따라 주문이 철회되거나 매매계약이 해지되었다는 사실을 서면으로
              통지 하여야 한다.<br />
              1. 어음 또는 수표가 부도되어 은행의 거래정지 처분이 있을 때<br />
              2. 영업이 휴·폐업되거나 회사가 해산된 때<br />
              3. 다른 채무로 인하여 강제집행, 보전처분, 체납처분의 절차가
              개시되었을 때<br />
              4. 파산, 화의 또는 회사정리의 신청이 있거나, 기타 영업의 계속이
              곤란하다고 인정할만한 상당한 사유가 있을 때
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              제6조 (손해배상)<br />
              이 주문조건 제5조(계약의 해제)에 의거 을의 귀책사유로 이 주문이
              철회되거나 이 매매계약이 해제된 경우 병이 입은 손해는 배상하기로
              하며, 갑은 을, 병에게 아무런 책임도 지지 않는 것으로 한다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              제7조 (연대보증인겸 물건수령자)<br />
              ① 연대보증인겸 물건수령자인 병은 이 매매계약에 있어 을이 완전한
              계약이행을 연대하여 보증하며, 만일 을이 이 매매계약을 불이행 또는
              위반함으로 인하여 갑이 손해를 입을 경우 갑이 정하는 바에 따라 병의
              책임하에 이를 배상하기로 한다.<br />
              ② 물건의 제작의 제작에 대한 관리 감독은 병의 책임으로 한다.<br />
              ③ 물건의 인수(설치, 성능보장을 위한 시운전, 품질 및 규격 등의
              공인검사기관에 의한 감사를 포함)는 을 및 병의 책임하에 모든 절차를
              이행하여야 하며, 물건의 인수가 끝나는 즉시 병은 물건수령증을
              갑에게 발급하여야 한다. 다만 갑이 필요하다고 인정할 때에는 병이
              물건을 인수할 때 갑 또는 갑이 지정하는 자가 입회할 수 있으며
              필요한 조치를 취할 수 있다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              제8조 (소유권이전 및 사고책임)<br />
              ① 물건의 소유권은 병이 갑에게 물건수령증을 발급하고, 갑이
              물건대금의 전액을 을에게 지급한 때에 을로부터 갑에게 이전되는
              것임을 갑, 을 및 병은 각각 확인한다.<br />
              ② 물건의 소유권이 을로부터 갑에게 이전되기 이전에 이 물건에 관하여
              발생하는 모든 위험과 사고로 인한 책임은 전 부 을의 부담과 책임으로
              한다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              제9조 (주문조건의 내용)<br />
              이 주문조건은 별표, 물건의견적서, 사양서 및 을과 병간의 별도 합의
              등을 포함하는 것으로 하고, 만일 이 주문조건과 기타 서면과의 내용이
              상이할 때에는 이 주문조건 조항에 따른다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              제10조 (주문조건의 해석)<br />
              ① 이 주문조건의 해석에 이의가 있을 때에는 갑과 을 및 병이 협의하여
              결정하되, 합의에 이르지 못할 때에는 대한 민국 법령 일반금융관례에
              따르기로 한다.<br />
              ② 이 주문조건에 명시되지 아니한 사항은 일반 상관례에 따른다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-4']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              제11조 (특약사항)<br />
              별지기재 특약사항은 이 매매계약과 일체가 되어 이 매매계약을
              보완하거나 수정하는 것으로 한다.
            </div>
          </li>
        </ul>
      </section>

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
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractURLOrderSheet.scss';
</style>
