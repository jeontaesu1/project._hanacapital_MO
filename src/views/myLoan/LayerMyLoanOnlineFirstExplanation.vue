<script>
// My_M03_l006_금융취약 소비자 우선설명
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
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
          <PopupTitle>금융취약 소비자 우선설명</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div>
        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">중도상환수수료</h3>

          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                대출의 상환기일이 도래하기 전에 대출금을 상환할 경우, <br />
                마지막 결제일로부터 중도상환일까지 경과이자와 <br />
                상환원금에 대해 약정서에 명시된 중도상환수수료가<br />
                부과됩니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                단, 대출취급일로부터 3년 경과 시 면제됩니다.
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">연체이자율</h3>

          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                대출금 및 이자납부가 지연될 경우 연체기간에 따라<br />
                약정서에 명시된 연체이자가 적용됩니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                연체이자율은 [대출이자율+3%]로 적용되며,<br />
                법정최고금리인 20% 이내로 적용됩니다.
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">기한의 이익상실</h3>

          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                기한의 이익이란 기한의 존재로 말미암아 당사자가 받는<br />
                이익을 말하며, 금융회사와의 대출거래에서 채무자인 고객은<br />
                당초 약정한 대출기한까지는 대출금을<br />
                상환하지 않아도 되므로 그 기간동안 채무자인 고객이<br />
                가지는 이익을 뜻합니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                기한의 이익이 상실되면 모든 대출금(또는 해당 대출금)을<br />
                즉시 상환하여야 하며, 대출금에 연체이자를<br />
                부담하셔야 합니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                주요 기한의 이익상실 사유는 아래와 같습니다.<br />
                (세부내용 여신거래기본약관 제8조 참고)
              </div>
            </li>
            <li class="addText">
              <p>
                여신거래와 관련하여 허위 위변조 또는 고의로 부실자료를<br />
                제출한 사실이 확인되어 회사의 채권보전에<br />
                현저한 위험이 예상될 경우
              </p>
              <p>
                이자 등을 지급하기로 한 때부터 계속하여 30일간<br />
                지체한 경우
              </p>
              <p>
                분할상환금 또는 분할상환 원리금의 지급을 2회 이상<br />
                연속하여 지체한 때
              </p>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">
            연체 등의 정보 등재
          </h3>

          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                연체기간 5영업일 이상, 연체금 10만원 이상의 단기연체를<br />
                한 경우 신용정보회사를 통해 연체정보가 등록되어 신용카드<br />
                사용정지 등 금융거래가 제한될 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                대출원금, 이자 등을 3개월 이상 장기연체한 경우 원금 또는<br />
                이자를 상환하기로 한 약정기일의 다음날로부터 3개월이<br />
                되는 날을 등록사유발생일로 하여, 그때로부터 7영업일 이내<br />
                ‘연체정보 등’이 등록됩니다. 이는 고객님의 신용도 하락 및<br />
                금리 상승 등의 영향이 발생할 수 있습니다.
              </div>
            </li>
          </ul>
        </section>

        <!-- s: 240911 -->
        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">청약의 철회</h3>

          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                일반금융소비자는 계약체결일 또는 계약서류를 제공받은 날(다만
                금전·재화 ·용역의 지급이 늦게 이루어진 경우에는 그 지급일로
                대체함)로부터 14일 이내 계약에 대한 청약을 철회할 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                일반금융소비자는 계약체결일 또는 계약서류를 제공받은 날(다만
                금전·재화 ·용역의 지급이 늦게 이루어진 경우에는 그 지급일로
                대체함)로부터 14일 이내 계약에 대한 청약을 철회할 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                청약의 철회 의사를 표시하기 위해서는 서면 등(우편, 전자우편,
                문자메세지 등을 말함)으로 의사표시를 해야 하며, 이미 공급받은
                금전 ·재화와 그에 대한 이자를 반환하여야 합니다. 아울러 인지세
                등 제세공과금 및 저당권 설정 등에 따른 등기비용이 발생하였을
                경우, 이를 함께 반환하셔야 합니다. 청약철회의 의사를 서면 등으로
                발송한 때에는 그 발송 사실을 지체없이 당사에 알려주셔야 합니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                청약철회권 행사 시에는 중도상환수수료가 면제되며, 5영업일 이내에
                해당 대출과 관련된 정보가 삭제됩니다. 청약철회권의 효력이 발생한
                이후에는 취소가 불가하오며 대출 중도상환 시에는 중도상환수수료
                납부로 조기상환이 가능하며 별도의 부대반환 비용은 없지만
                대출기록은 유지됩니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                동일한 금융회사를 대상으로 최근 1개월 내에 2회 이상 대출계약을
                철회하는 경우, 신규대출 ·만기연장 거절, 대출한도 축소, 금리우대
                제한 등 불이익이 발생할 수 있습니다.
              </div>
            </li>
          </ul>
        </section>
        <!-- e:// 240911 -->
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
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractUsedCarLoanScam.scss';
</style>

<style lang="scss" scoped>
.addText {
  padding-left: 19px;
  p {
    position: relative;
    margin: 8px 0 0 0;
    font-size: 13px;
    font-weight: 400;
    line-height: 19.5px;
    letter-spacing: -0.02em;
    text-align: left;

    &:before {
      content: '';
      position: absolute;
      left: -11px;
      top: 8px;
      width: 6px;
      height: 1px;
      background: #15181f;
      margin-right: 4px;
    }
  }
}
</style>
