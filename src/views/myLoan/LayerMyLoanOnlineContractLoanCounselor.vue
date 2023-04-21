<script>
// My_M03_l013
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
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
          <PopupTitle>대출상담사 설명 확인서</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>하나캐피탈㈜ 귀중</PageMainText>
        <PageSubText>
          금융회사는 대출상담사를 통해 접수된 대출의 경우 “대출모집인제도
          모범규준“ 제10조 제1항 제2호에 따라 대출 실행 이전에 대출신청인에게
          아래 각 사항을 확인하여야 합니다. 아래 각항의 질문사항에 대하여
          사실대로 기재하여 주시기 바랍니다.
        </PageSubText>
      </PageTextGroup>

      <div :class="$style['agree-list']">
        <ul :class="$style['agree-list__container']">
          <li :class="$style['agree-list__all']">
            <div :class="$style['agree-list__all-head']">
              <CheckBox
                id="layerMyLoanOnlineContractLoanCounselorAll"
                :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText
                  >아래 내용에 대하여 전체 확인</CheckBoxLabelText
                >
              </CheckBox>
            </div>

            <div
              :class="[$style['agree-list__contents'], 'row-margin-contents']"
            >
              <ul :class="$style['agree-list__list']">
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractLoanCounselor001"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        대출계약을 체결하기 전에 대출상담사로부터 대출상품의
                        조건 및 대출내용 등에 관하여 충분한 설명을 들었습니다.
                      </CheckBoxLabelText>
                    </CheckBox>
                  </div>
                </li>
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractLoanCounselor002"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        대출상담사로부터 대출모집인은 금융회사의 업무위탁을 받아
                        대출모집 및 소개 등의 섭외 활동을 한다는 사실에 대하여
                        사전에 고지 받았습니다.
                      </CheckBoxLabelText>
                    </CheckBox>
                  </div>
                </li>
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractLoanCounselor003"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        대출상담사로부터 대출모집인은 별도의 수수료를 요구하거나
                        수취할 수 없다는 사실에 대하여 사전에 고지 받았습니다.
                      </CheckBoxLabelText>
                    </CheckBox>
                  </div>
                </li>
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractLoanCounselor004"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        대출상담사로부터 여신심사 등을 통한 대출실행의 결정은
                        금융회사가 한다는 사실에 대하여 사전에 고지 받았습니다.
                      </CheckBoxLabelText>
                    </CheckBox>
                  </div>
                </li>
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractLoanCounselor005"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        대출상담사로부터 귀하의 소득재산, 부채상황, 신용 및
                        변제계획 등을 고려하여 적합한 대출 상품을 권유
                        받았습니다.
                      </CheckBoxLabelText>
                    </CheckBox>
                  </div>
                </li>
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractLoanCounselor006"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        대출상담사로부터 귀하가 필요한 자금의 범위 이내에서
                        대출을 받도록 권유 또는 유도 받았습니다.
                      </CheckBoxLabelText>
                    </CheckBox>
                  </div>
                </li>
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractLoanCounselor007"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        대출상담사로부터 모집수당 수취 목적으로 기존 대출을
                        고금리대출로 대환하도록 권유받은 사실이 없습니다.
                      </CheckBoxLabelText>
                    </CheckBox>
                  </div>
                </li>
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractLoanCounselor008"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        당사 대출상담을 진행한 대출모집인의 성명은
                        <span class="color-green">소속/이름</span>이 맞습니다.
                      </CheckBoxLabelText>
                    </CheckBox>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <BasicBox theme="senary" className="row-margin-contents-group">
        <div class="color-gray-secondary text-body-4 font-weight-medium">
          위 각 사항에 대한 기재사항은 사실과 다름없으며 본인이 직접
          작성하였음을 확인합니다.
        </div>
      </BasicBox>

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
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractLoanCounselor.scss';
</style>
