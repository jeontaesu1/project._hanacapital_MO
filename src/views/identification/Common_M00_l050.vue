<script>
// Common_M00_l050
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
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
    <FullPopup v-if="layerSlotProps.display !== 'none'">
      <template v-slot:head>
        <FullPopupHead
          :classNames="{
            left: $style['header-left'],
            center: $style['header-center'],
            right: $style['header-right'],
          }"
        >
          <PopupTitle>간편인증통합중계 서비스 이용약관</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <ul :class="[$style['basic-list'], $style['basic-list--regular-margin']]">
        <li :class="[$style['basic-list__item'], 'text-body-4 color-black']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제1조 (목적)<br />
            이 약관은 주식회사 드림시큐리티 (이하 "회사")가 제공하는
            간편인증통합중계서비스(이하 "본 서비스") 이용에 관하여 이용자와 회사
            간의 권리와 의무, 서비스 이용조건과 절차 등 제반 사항에 대해
            규정하는 것을 목적으로 합니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'text-body-4 color-black']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제2조 (용어의 정의)<br />
            ① 이 약관에서 사용하는 용어의 의미는 다음과 같습니다.<br />
            1. "본 서비스"라 함은 "이용자"와 "이용기관"에 각 "인증기관"의
            인증서비스를 통합 제공하는 서비스를 말합니다.<br />
            2. "인증기관"이라 함은 전자서명인증사업자 업무를 수행하는 기관을
            말합니다.<br />
            3. "이용기관"이라 함은 "회사"와 계약을 체결하고 "본 서비스"를
            제공받는 자를 말합니다.<br />
            4. "이용자"라 함은 "본 서비스"를 이용하기 위하여 이 약관에 동의하고
            "인증기관"으로부터 인증서를 발급받은 자를 말합니다.<br />
            5. "홈페이지"라 함은 "본 서비스"를 제공하는
            시스템(https://www.ez-iok.com)을 말합니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'text-body-4 color-black']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제3조 (약관의 게시와 개정 등)<br />
            ① “회사”는 “이용자”가 약관의 내용을 쉽게 알 수 있도록 “홈페이지”
            화면에 게시합니다. 다만, 약관의 내용은 “이용자”가 연결화면을 통하여
            볼 수 있도록 할 수 있습니다.<br />
            ② “회사”는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의
            규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「정보통신망
            이용촉진 및 정보보호 등에 관한 법률」, 「소비자기본법」 및
            「전자서명법」등 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할
            수 있습니다.<br />
            ③ “회사”가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여
            현행 약관과 함께 그 적용일자 7일 이전부터 적용일자 전일까지
            “홈페이지”에 공지합니다. 다만, 이용자에게 불리하게 약관 내용을
            변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고
            “홈페이지”에 공지합니다. 이 경우 “회사”는 개정 전 내용과 개정 후
            내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.<br />
            ④ “회사”가 제3항에 따라 개정약관을 “이용자”에게 통지하였음에도
            “이용자”가 명시적으로 약관 개정에 대한 거부 의사를 표시하지 아니한
            경우 “회사”는 “이용자”가 개정약관에 동의한 것으로 간주합니다.<br />
            ⑤ “이용자”가 개정약관의 내용에 동의하지 않는 경우 “회사”는 해당
            “이용자”에 대하여 개정약관의 내용을 적용할 수 없으며, 이 경우
            “회사”는 “이용자”의 “본 서비스” 이용을 제한할 수 있습니다. 또한,
            “회사”가 개정약관에 동의하지 않은 “이용자”에게 개정 전 약관을 적용할
            수 없는 경우 “회사”는 해당 “이용자”와의 “본 서비스” 이용계약을
            해지할 수 있습니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'text-body-4 color-black']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제4조 (약관 외 준칙)<br />
            이 약관에 명시되지 않은 사항은 “인증기관”에서 공지하는 전자서명
            인증업무준칙, 서비스 운영정책 및 개별 이용안내, 서비스 화면에 게시된
            내용, 관계법규 및 일반상관례에 따릅니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'text-body-4 color-black']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제5조 (통지)<br />
            ① “회사”가 “이용자”에게 개별 통지하는 경우, 이 약관에서 달리 정하지
            않는 한 전화, 문자메시지 등 “이용자”가 동의한 수단으로
            통지합니다.<br />
            ② “회사”는 “이용자” 전체 또는 일부에 대한 통지의 경우 7일 이상
            “홈페이지”의 게시판에 게시함으로써 제1항의 통지에 갈음할 수
            있습니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'text-body-4 color-black']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제6조 (서비스의 내용)<br />
            ① “회사”는 “인증기관”들이 제공하는 다음 각 호의 서비스를 통합 및
            중계하여 “이용기관”에게 제공합니다.<br />
            1. ”이용기관”에서 “이용자” 확인<br />
            2. ”이용기관”에서 “이용자”에게 요구하는 전자문서에 대한 전자서명<br />
            ② ”이용자” 확인 절차는 다음 각 호와 같습니다.<br />
            1. “이용자”는 본 약관을 포함하여 “회사”가 요구하는 필수 사항에 대해
            동의합니다.<br />
            2. “이용자”는 “회사”에서 정한 “이용자” 정보를 제공하고, “회사”는
            “인증기관”에 “이용자” 확인 정보를 요청합니다.<br />
            3. “인증기관”은 “이용자” 확인 정보를 “회사”에 제공하고 “회사”는 해당
            정보를 “이용기관”에 제공합니다.<br />
            4. “이용기관”은 “이용자” 확인 정보와 “이용기관”이 보유한 “이용자”
            정보를 비교하여 “이용자”를 확인합니다.<br />
            ③ 전자문서에 대한 전자서명 절차는 다음 각 호와 같습니다.<br />
            1. “이용자”는 본 약관을 포함하여 “회사”가 요구하는 필수 사항에 대해
            동의합니다.<br />
            2. “이용자”는 “회사”에서 정한 “이용자” 정보를 제공하고, “회사”는
            “인증기관”에 전자서명을 요청합니다.<br />
            3. “인증기관”은 전자서명정보를 “회사”에 제공하고 “회사”는 해당
            정보를 “이용기관”에 제공합니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'text-body-4 color-black']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제7조 (서비스 이용제한)<br />
            “회사”는 다음 각 호의 경우 “본 서비스” 이용을 제한할 수 있습니다.<br />
            1. “회사”가 요구하는 필수 동의 항목에 동의하지 않은 경우<br />
            2. “이용자”가 입력한 정보가 허위라고 판단되는 경우<br />
            3. “회사”가 업무상 또는 기술상 문제로 “본 서비스”를 제공할 수 없는
            경우<br />
            4. “이용자”가 “인증기관”이 제공하는 절차를 완료하지 못한 경우<br />
            5. “이용자” 또는 “이용기관”이 “본 서비스”를 불법적이거나 부당한
            용도로 사용할 우려가 있는 경우<br />
            6. “본 서비스”의 정상적인 운영을 방해하거나 “본 서비스” 관련 정보를
            취득 및 도용하는 등의 행위를 하는 경우<br />
            7. 기타 “이용기관” 또는 “인증기관”이 규정한 제반사항을 위반하는
            행위를 하는 경우
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'text-body-4 color-black']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제8조 (서비스 이용시간)<br />
            “회사”는 “본 서비스”를 연중무휴, 1일 24시간 제공함을 원칙으로
            합니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'text-body-4 color-black']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제9조 (서비스의 변경, 중단)<br />
            ① “회사”는 상당한 이유가 있는 경우 운영상, 기술상의 필요에 따라 “본
            서비스”의 전부 또는 일부를 변경할 수 있습니다.<br />
            ② 본 서비스의 내용, 이용방법, 이용시간 등에 대하여 변경이 있는 경우
            회사는 변경사유, 변경내용 및 제공일자 등을 그 변경 전 7일 이상
            “홈페이지”에 게시합니다.<br />
            ③ 제2항의 경우에 변경된 내용이 중대하거나 "이용자"에게 불리한
            경우에는 "회사"가 “본 서비스”를 제공받는 "이용자"에게 제5조 (통지)에
            정한 방법으로 통지하고 동의를 받습니다. 이때, "회사"는 동의를 거절한
            "이용자"에 대하여는 변경전 서비스를 제공합니다. 다만, 그러한 서비스
            제공이 불가능할 경우 계약을 해지할 수 있습니다.<br />
            ④ "회사"는 시스템 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절
            또는 운영상 상당한 이유가 있는 경우 “본 서비스”의 제공을 일시적으로
            중단할 수 있습니다. 이 경우 "회사"는 제5조 (통지)에 정한 방법으로
            "이용자"에게 통지합니다. 다만, "회사"가 사전에 통지할 수 없는
            부득이한 사유가 있는 경우 사후에 통지할 수 있습니다.<br />
            ⑤ “회사”는 “본 서비스” 전부를 중단하는 경우에는 30일 전에 “제5조
            (통지)에 정한 방법으로 "이용자"에게 통지합니다. 다만 사전에 통지할
            수 없는 부득이한 사정이 있는 경우는 사후에 통지를 할 수 있습니다.<br />
            ⑥ 제1항, 제4항, 제5항의 경우에 “본 서비스”가 제공하는 서비스의
            이용과 관련하여, “회사”는 “이용자”에게 발생한 어떠한 손해에 대해서도
            책임을 지지 않습니다. 다만 “회사” 고의 또는 중대한 과실로 인하여
            발생한 손해의 경우는 제외합니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'text-body-4 color-black']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제10조 (저작권 등의 귀속)<br />
            ① "회사"가 작성한 저작물에 대한 저작권 기타 지적재산권은 "회사"에
            귀속합니다.<br />
            ② ”이용기관”이 작성한 저작물에 대한 저작권 기타 지적재산권은
            “이용기관”에 귀속됩니다.<br />
            ③ "이용자"는 "회사"가 제공하는 “본 서비스”를 이용함으로써 얻은 정보
            중 "회사" 또는 “이용기관”에 지적재산권이 귀속된 정보를 해당 업체의
            사전승낙 없이 복제, 전송, 출판, 배포, 방송 기타 방법에 의하여
            영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.<br />
            ④ “회사”는 “이용자”의 저작물을 사용하는 경우 당해 “이용자”의 동의를
            받습니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'text-body-4 color-black']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제11조 (손해배상)<br />
            ① “회사”는 “본 서비스” 제공과 관련하여 이용자에게 어떠한 손해가
            발생하더라도 “회사”의 고의 및 중대한 과실로 인한 행위를 제외하고
            손해에 대한 책임을 부담하지 아니합니다.<br />
            ② “이용자”는 “본 서비스” 이용과 관련하여 “이용자”의 귀책사유로
            “회사”, “인증기관”, “이용기관” 또는 제3자에게 손해를 입힌 경우 그
            손해를 배상하여야 합니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'text-body-4 color-black']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제12조 (면책사항)<br />
            ① “회사”가 천재지변 또는 이에 준하는 불가항력 등 “회사”의 귀책사유가
            아닌 사유로 인하여 “본 서비스”를 제공할 수 없는 경우에는 “본 서비스”
            제공에 관한 책임이 면제됩니다.<br />
            ② “회사”는 “본 서비스”와 무관한 사유로 발생한 손해에 대해 책임이
            면제됩니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'text-body-4 color-black']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            제13조 (준거법 및 재판관할)<br />
            ① “회사”와 “이용자” 또는 “이용기관” 간 제기된 소송은 대한민국 법을
            준거법으로 합니다.<br />
            ② “회사”와 “이용자”간 발생한 분쟁에 관한 소송은 민사소송법상의
            관할법원에 제기합니다.
          </div>
        </li>
      </ul>

      <div class="row-margin-contents">
        <p class="text-body-3 font-weight-light color-gray align-right">
          이 약관은 공지한 날로부터 시행합니다.<br /><br />

          공고일자: 2022년 8월 19일 제정<br />
          시행일자: 2022년 8월 19일 시행
        </p>
        <BasicBox theme="senary" className="row-margin-contents-group">
          <p class="text-body-4 font-weight-medium color-gray-secondary">
            상기 내용과 같이 고유식별정보의 처리 및 제공에 동의합니다.
          </p>
        </BasicBox>
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
@import '@/assets/scss/views/identification/Common_M00_l050.scss';
</style>
