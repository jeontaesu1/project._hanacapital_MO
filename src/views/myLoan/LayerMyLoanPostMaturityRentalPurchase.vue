<script>
// My_M08_l015
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';

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
    NoticeText,
    ButtonListItem,
    BasicButton,
    ButtonList,
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
          <PopupTitle>만기후처리 반환</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="3" :current="1" />
      </template>

      <PageTextGroup>
        <PageMainText>
          구매 유의사항을<br />
          <strong>확인해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <div>
        <div class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">소유권 이전등록</h3>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li :class="[$style['basic-list__item'], 'color-black']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                계약 종결 이후 10일 이내에 차량등록 명의를 고객님으로 이전
                완료하셔야 합니다.<br />
                고객명의로 이전하는데 필요한 취·등록세등의 제세공과금은 고객이
                부담하셔야 하며, 미이전시에는 자동차관리법에 의한 범칙금이
                부과됩니다. (최고50만원)
              </div>
            </li>
            <li :class="[$style['basic-list__item'], 'color-black']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                손님이 직접 이전하는 방법과, 이전대행업체를 통한 이전 방법이
                있습니다.<br />
                (이전대행업체 통한 이전 시 이전대행비용 발생)
              </div>
            </li>
          </ul>
        </div>

        <div class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">취·등록세</h3>
          <div class="text-body-4 font-weight-light">
            취등록세는 국토부 과세표준금액과 당사 잔존가치금액을 상호 비교하여
            더 높은 금액기준으로 산정됩니다.
          </div>
          <NoticeText :classNames="{ wrap: 'row-margin-item' }">
            지방세법 시행령 제18조(취득가격의 범위 등)
          </NoticeText>
        </div>

        <div class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">제3자이전 불가</h3>
          <div class="text-body-4 font-weight-light row-margin-item">
            자동차관리법 제12조3항에 따라
            <span class="color-red font-weight-regular">
              계약자 외 제3자명의이전은 불가</span
            >합니다.
          </div>
          <NoticeText :classNames="{ wrap: 'color-red' }">
            자동차관리법 제12조3항(이전등록)<br />
            자동차를 양수한 자가 다시 제3자에게 이를 양도하고자 할 때에는 그
            양도 전에 자기명의로 이전등록을 하여야 한다.
          </NoticeText>
        </div>

        <div class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">
            범칙금/과태료/제세공과금 납부
          </h3>
          <div class="text-body-4 font-weight-light">
            렌터카 이용 중 발생한 각종 제세공과금(과태료, 범칙금 포함)등에
            대해서는 본인의 책임하에 부담할 것을 확약합니다.
          </div>
        </div>

        <div class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">보험가입</h3>
          <div class="text-body-4 font-weight-light">
            자동차 소유권이전을 위해 보험에 가입되어 있어야 합니다.<br />
            (렌터카 보험가입: 차대번호로 가입해 주세요.)
          </div>
        </div>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>네, 모두 확인했습니다.</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanPostMaturityRentalPurchase.scss';
</style>
