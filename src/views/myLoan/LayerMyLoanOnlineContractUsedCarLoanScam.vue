<script>
// My_M03_l012
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

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
    BasicBox,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    NoticeText,
  },
  setup() {
    const state = reactive({
      typeError: false,
      usageError: false,
      usageInputError: false,
      careerError: false,
      salesError: false,
      netProfitError: false,
      totalAssetsError: false,
      ageError: false,
      incomeError: false,
      assetError: false,
      expensesError: false,
      debtError: false,
      creditScoreError: false,
      liquidationError: false,
      creditRatingAgencyError: false,
      creditRatingError: false,
    });

    const layer = ref(null);

    return {
      state,
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
          <PopupTitle>중고차 대출사기 방지 안내문</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <section class="row-margin-contents-group">
        <h3 class="text-body-2 row-margin-item-medium">대출사기 사례 안내</h3>

        <ul
          :class="[
            $style['basic-list'],
            $style['basic-list--regular'],
            $style['basic-list--regular-margin'],
          ]"
        >
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              (대출사기 사례 안내) 중고차대출 관련 금융 사기 사례가 있어 안내
              드립니다. 신청하고자 하는 계약과 별개로 다른 사람과 이면계약을
              체결하거나 타인에게 명의를 대여하여 금융사기를 당하는 피해사례가
              다수 발생하고 있습니다. 계약 신청과 관련하여 다른 사람에게 명의를
              대여하셨거나 월 납입금 대납, 렌터카 운영 등 수익제공, 대환대출 등
              본인이 직접 차량을 운행하는 목적 외에 제3자와 별도 계약 또는
              약정한 사실이 있으시면 당사와의 대출계약 신청은 철회하여 주시기
              바랍니다.
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h3 class="text-body-2 row-margin-item-medium">신청인의 책임 안내</h3>

        <ul
          :class="[
            $style['basic-list'],
            $style['basic-list--regular'],
            $style['basic-list--regular-margin'],
          ]"
        >
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              만약 고객님께서 제3자와 구두 또는 서면 방식으로 별도 계약을
              체결하거나 약정한 사실이 있는 경우, 고객님이 대출금 전체에 대한
              최종적인 상환 책임을 부담하며, 형사 책임도 부담할 수 있음을
              알려드립니다.
            </div>
          </li>
        </ul>
      </section>

      <section class="row-margin-contents-group">
        <h3 class="text-body-2 row-margin-item-medium">이면계약 확인</h3>

        <ul
          :class="[
            $style['basic-list'],
            $style['basic-list--regular'],
            $style['basic-list--regular-margin'],
          ]"
        >
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              당사로 대출계약을 신청함에 있어서 다른 사람에게 명의를
              대여하셨거나 월 납입금 대납, 렌터카 운영 등 수익제공, 대환대출 등
              본인이 직접 차량을 운행하는 목적 외의 다른 제3자와 별도로 계약
              또는 약정한 사실이 있습니까?
            </div>
          </li>
        </ul>

        <div class="flex-box row-margin-item">
          <div class="flex-box__cell flex-box__cell--large">
            <CheckBox id="testCheckBox021" theme="tertiary">
              <CheckBoxObject />
              <CheckBoxLabelText>예, 있습니다.</CheckBoxLabelText>
            </CheckBox>
          </div>
          <div class="flex-box__cell flex-box__cell--large">
            <CheckBox id="testCheckBox021" theme="tertiary">
              <CheckBoxObject />
              <CheckBoxLabelText>아니오, 없습니다.</CheckBoxLabelText>
            </CheckBox>
          </div>
        </div>

        <NoticeText :classNames="{ wrap: 'row-margin-item-group' }">
          ‘아니오, 없습니다’라고 기재한 경우, 당사가 모르는 이면계약 체결은
          당사와 무관하고, 고객님께 대출금액 상환에 대한 최종적인 책임이
          있습니다.
        </NoticeText>
      </section>

      <BasicBox theme="senary">
        <div class="color-gray-secondary text-body-4 font-weight-medium">
          계약자은(는) 중고차 대출사기 관련 안내를 직원명(으)로부터 충분히
          들었음을 확인합니다.
        </div>
      </BasicBox>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton theme="secondary">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractUsedCarLoanScam.scss';
</style>
