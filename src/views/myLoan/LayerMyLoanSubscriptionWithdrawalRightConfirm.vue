<script>
// My_M06_l001
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupSubTitle from '@/components/ui/layer/PopupSubTitle.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    StepProgress,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicBoxHeadRight,
    PopupTitle,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    UnitText,
    ToastPopup,
    ToastPopupHead,
  },
  setup() {
    const layer = ref(null);
    const state = reactive({
      numberError: false,
    });

    const layerTest002 = ref(null);

    const layerOpenTest002 = (e = {}) => {
      layerTest002.value.open(e.target);
    };
    return {
      state,
      layer,
      layerTest002,
      layerOpenTest002,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="3" :current="1" />
      </template>

      <PageTextGroup>
        <PageMainText>
          청약철회 상환금액을 <br />
          <strong>확인해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-1 font-weight-medium">청약철회 상환금액</h3>
          </BasicBoxHeadLeft>
          <BasicBoxHeadRight>
            <UnitText rightUnit="원" align="right">999,999,999</UnitText>
          </BasicBoxHeadRight>
        </BasicBoxHead>

        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>상환원금</KeyValueTitle>
            <KeyValueText>999,999원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>경과이자</KeyValueTitle>
            <KeyValueText>999,999원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>중도상환수수료</KeyValueTitle>
            <KeyValueText>면제</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>설정비</KeyValueTitle>
            <KeyValueText>999,999원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>인지세</KeyValueTitle>
            <KeyValueText>999,999원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>기타비용</KeyValueTitle>
            <KeyValueText>999,999원</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <UiLayer ref="layerTest002" type="toast" :backgroundClose="true">
        <ToastPopup>
          <template v-slot:head>
            <ToastPopupHead>
              <PopupTitle>청약철회신청 유의사항</PopupTitle>
            </ToastPopupHead>
          </template>
          <ol :class="$style['basic-list']">
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'font-weight-regular',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']">1.</div>
              <div :class="$style['basic-list__content']">
                청약철회 상환금액은 당일 기준으로
                <span class="color-green">17시 이내</span> 입금해 주셔야 합니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'font-weight-regular',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']">2.</div>
              <div :class="$style['basic-list__content']">
                당일 <span class="color-green">17시 이내로</span> 입금하지
                않을시 청약철회가 불가능하거나 추가 경과이자 발생할 수 있으며
                입금 금액을 재조회하셔야 합니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'font-weight-regular',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']">3.</div>
              <div :class="$style['basic-list__content']">
                청약철회처리가능일은 대출계약 후 14일 이내입니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'font-weight-regular',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']">4.</div>
              <div :class="$style['basic-list__content']">
                청약철회 신청 이후 청약철회 기간(대출 계약 후 14일)이 경과하거나
                결제일이 도래한 경우 청약철회가 불가합니다.
              </div>
            </li>
          </ol>
          <div class="row-margin-item-group">
            <CheckBox id="testCheckBox021" theme="tertiary">
              <CheckBoxObject />
              <CheckBoxLabelText>유의사항을 확인했습니다.</CheckBoxLabelText>
            </CheckBox>
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
        </ToastPopup>
      </UiLayer>
      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">취소</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton @click="layerOpenTest002">다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanSubscriptionWithdrawalRightConfirm.scss';
</style>
