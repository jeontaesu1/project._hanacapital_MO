<script>
// PF_M07_l013
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
    PageSubText,
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
          <h2 class="text-body-1 font-weight-medium multi-ellipsis">
            스탁론 추가 약정서
          </h2>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>스탁론 추가 약정서</PageMainText>
        <!-- :class="$style['comment-txt1']"a-->
        <PageSubText>
          (스탁론 대출 최대만기일 변경 등에 대한 주식매입자금<br />
          (주식담보)대출 추가약정용)
        </PageSubText>
      </PageTextGroup>
      <div :class="$style['text-list-ty-box']">
        <p>
          본인은 하나캐피탈 주식회사 (이하 “하나캐피탈” 이라 한다) 와 체결한 YYYY년 MM월 DD일자 주식매입자금(주식담보)대출 (이하 “스탁론”이라 한다)에 관한 스탁론 약정서 (이하 “원약정” 이라 한다)에 대하여 아래와 같이 추가약정서 (이하 “본 약정” 이라 한다)를 체결합니다.
        </p>
        <p :class="$style['title']">제1조 (목적)</p>
        <p :class="$style['mt-6']">
          본 약정서는 원 약정서에 따른 기존대출약정의 대출기한이 연장되는 범위를 변경함에 있어서 제반사항을 정하기 위하여 체결되었습니다.
        </p>
        <p :class="$style['title']">제2조 (대출 조건의 변경)</p>
        <!--<p :class="[$style['mt-6'], $style['fb300']]"></p>-->
        <p :class="$style['num-text-box']">
          <span>①</span> 원 약정서상 [특약사항]을 다음과 같이 변경합니다.
        </p>
      </div>
      <div :class="$style['mt-12']">
        <!--class="row-margin-container-medium"-->
        <section :class="$style['mb-12']">
          <div :class="$style['basic-table']">
            <div :class="$style['basic-table']">
              <table>
                <colgroup>
                  <col style="width:35%">
                  <col style="width:auto">
                </colgroup>
                <tbody>
                  <tr>
                    <th>구분</th>
                    <th style="border-left: 1px solid #e0e0e0;">특약사항</th>
                  </tr>
                  <!-- 250422 -->
                  <tr>
                    <th scope="row" style="color:#15181F;">변경 전</th>
                    <td class="align-left" style="text-align: left">
                      본 대출 실행 후 대출금의 기한 도래 시 회사의
                      상품운영기준에 따른 연장조건에 부합할 경우,
                      변경금리(연장시점의 금리) 확인 또는 안내 후 별도의
                      기한연장신청서를 작성하지 않고 증권계좌 최저담보비율에
                      만기해당월 이자를 현금으로 보유한 경우에 잔액 범위 내에서
                      최초 약정기간 포함하여 최장 5년 범위 내 12개월 단위로
                      기한연장 처리하고, 회사는 고객에게 연장완료 사실을
                      안내합니다.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" style="color:#15181F;">변경 후</th>
                    <td class="align-left" style="text-align: left">
                      본 대출 실행 후 대출금의 기한 도래 시 회사의
                      상품운영기준에 따른 연장조건에 부합할 경우,
                      변경금리(연장시점의 금리) 확인 또는 안내 후 별도의
                      기한연장신청서를 작성하지 않고 증권계좌 최저담보비율에
                      만기해당월 이자를 현금으로 보유한 경우에 잔액 범위 내에서
                      최초 약정기간 포함하여 최장 10년 범위 내 12개월 단위로
                      기한연장 처리하고, 회사는 고객에게 연장완료 사실을
                      안내합니다.
                    </td>
                  </tr>
                  <!--// 250422 -->
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <div :class="$style['text-list-ty-box']">
          <p :class="$style['num-text-box']">
            <span>②</span> 제1항에 따라 원 약정서에 따른 기존대출약정의 대출 만기일의 최장 연장기한이 10년으로 변경됩니다. 즉, 본 약정에 따라 변경되는 내용은 아래와 같습니다.
          </p>
          <p :class="$style['title']">제3조 (계약기간)</p>
          <p :class="$style['mt-6']">
            본 약정은 기존대출약정의 계약기간이 만료될 경우 그 효력을 상실합니다.
          </p>
        </div>
      </div>

      <div :class="$style['mt-40']">
        <p :class="$style['text-sing-box']">YYYY년 MM월DD일</p>
        <p :class="[$style['text-sing-box'], $style['mt-16']]">
          본인(대출받는자) 성명 : 홍길동 (인)
        </p>
        <p :class="[$style['text-sing-box'], $style['mt-16']]">
          증권계좌번호 : OOOOOOOOOO
        </p>
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
@import '@/assets/scss/views/personalLoan/PF_M07_l013_List.scss';
</style>
