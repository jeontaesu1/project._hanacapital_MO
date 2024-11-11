<script>
// LR_M04_b001
import { ref } from 'vue';

import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

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
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
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
          <PopupTitle>자동차 인수 확인</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          차량 확인 후<br />
          아래 내용에 동의해 주세요
        </PageMainText>
        <PageSubText>
          자동차 인수 확인 시 <span class="color-green">리스</span>가 실행되며,
          확인 이후 발생된 차량의 결함(파손)등 차량 운행의 관리 책임은 고객님께
          있음을 인지해 주시기 바랍니다
        </PageSubText>
      </PageTextGroup>

      <BasicBox>
        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>차종</KeyValueTitle>
            <KeyValueText>벤츠 The New CLS-Class(C257 F/L)</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>차량번호</KeyValueTitle>
            <KeyValueText>123호4567</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>계약자</KeyValueTitle>
            <KeyValueText>(주)하나상사</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>인수확인자</KeyValueTitle>
            <KeyValueText>최 석</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>인수확인일자</KeyValueTitle>
            <KeyValueText>2024.02.06</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <section class="row-margin-container-medium">
        <div :class="$style['agree-list']">
          <ul :class="$style['agree-list__container']">
            <li :class="$style['agree-list__all']">
              <div :class="$style['agree-list__all-head']">
                <CheckBox
                  id="LR_TO_checkbox_L_all"
                  :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>아래 내용 전체 확인</CheckBoxLabelText>
                </CheckBox>
              </div>

              <div class="row-margin-contents">
                <ul :class="$style['agree-list__list']">
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        id="LR_TO_checkbox_L01"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText>
                          신청하신 차량과 인도된 차량의 사양(차종 / 모델 / 색상
                          / 옵션 등)이 동일합니다
                        </CheckBoxLabelText>
                      </CheckBox>
                    </div>
                  </li>
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        id="LR_TO_checkbox_L02"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText>
                          차량 외부 / 내부 상태 이상이 없습니다
                        </CheckBoxLabelText>
                      </CheckBox>
                    </div>
                  </li>
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        id="LR_TO_checkbox_L03"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText>
                          차량에 이상이 없으며 인수를 확인합니다
                        </CheckBoxLabelText>
                      </CheckBox>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div class="test-section-sub">
        <BasicHr className="row-margin-contents" />
      </div>

      <section class="row-margin-container-medium">
        <BasicBox>
          <KeyValue margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>공채비용<br />(리스취득원가 포함)​</KeyValueTitle>
              <KeyValueText>750,000원​</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents-small"
          />

          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>실제 공채 비용​</KeyValueTitle>
              <KeyValueText>650,000원​</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>차액​</KeyValueTitle>
              <KeyValueText>100,000원​</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <BasicBox theme="senary" className="row-margin-contents">
          <div class="color-gray-secondary text-body-4">
            <span class="color-green">차액</span>은 출고 담당자 직원에게 정산
            받으실 수 있습니다.
          </div>
        </BasicBox>
      </section>

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
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractSuccessionConfirm002.scss';
</style>
