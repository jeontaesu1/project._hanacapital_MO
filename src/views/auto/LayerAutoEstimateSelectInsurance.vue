<script>
// AF_M00_b013
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicTooltip from '@/components/ui/tooltip/BasicTooltip.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

import IconTooltip from '@/assets/images/icon/tooltip.svg?component';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicTooltip,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    IconTooltip,
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
  <UiLayer ref="layer" type="toast" :backgroundClose="true">
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>보험 내용을 선택해 주세요</PopupTitle>
        </ToastPopupHead>
      </template>

      <section class="row-margin-contents-group">
        <div class="flex-box row-margin-item-medium">
          <div class="flex-box__cell">
            <h3 class="text-body-2">운전연령</h3>
          </div>
          <div class="flex-box__cell flex-box__cell--small">
            <BasicTooltip placement="bottom">
              <IconTooltip />
              <span class="for-a11y">(도움말)</span>

              <template v-slot:contents>
                <section :class="$style['tooltip-section']">
                  <h4 :class="$style['tooltip-section__title']">운전연령</h4>
                  <p :class="$style['tooltip-section__text']">
                    만 26세~75세 까지
                  </p>
                </section>
              </template>
            </BasicTooltip>
          </div>
        </div>
        <BoxCheckList>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerAutoEstimateSelectInsuranceAge"
              id="layerAutoEstimateSelectInsuranceAge001"
              :defaultChecked="true"
            >
              <BoxCheckLabel>만 26세 이상</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </section>

      <section class="row-margin-contents-group">
        <div class="flex-box row-margin-item-medium">
          <div class="flex-box__cell">
            <h3 class="text-body-2">대물배상</h3>
          </div>
          <div class="flex-box__cell flex-box__cell--small">
            <BasicTooltip placement="bottom">
              <IconTooltip />
              <span class="for-a11y">(도움말)</span>

              <template v-slot:contents>
                <section :class="$style['tooltip-section']">
                  <h4 :class="$style['tooltip-section__title']">대물배상</h4>
                  <p :class="$style['tooltip-section__text']">
                    사고로 다른 사람의 재물을 파손하는 경우에 보상
                  </p>
                </section>
              </template>
            </BasicTooltip>
          </div>
        </div>
        <BoxCheckList :wrap="true" :col="3">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerAutoEstimateSelectInsuranceCompensation"
              id="layerAutoEstimateSelectInsuranceCompensation001"
            >
              <BoxCheckLabel>1억원</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerAutoEstimateSelectInsuranceCompensation"
              id="layerAutoEstimateSelectInsuranceCompensation002"
            >
              <BoxCheckLabel>2억원</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerAutoEstimateSelectInsuranceCompensation"
              id="layerAutoEstimateSelectInsuranceCompensation003"
              :defaultChecked="true"
            >
              <BoxCheckLabel>3억원</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </section>

      <section class="row-margin-contents-group">
        <div class="flex-box row-margin-item-medium">
          <div class="flex-box__cell">
            <h3 class="text-body-2">자기신체사고</h3>
          </div>
          <div class="flex-box__cell flex-box__cell--small">
            <BasicTooltip>
              <IconTooltip />
              <span class="for-a11y">(도움말)</span>

              <template v-slot:contents>
                <section :class="$style['tooltip-section']">
                  <h4 :class="$style['tooltip-section__title']">
                    자기신체사고
                  </h4>
                  <p :class="$style['tooltip-section__text']">
                    피보험자(임차인)가 사망 또는 다친경우에 보상
                  </p>
                </section>
              </template>
            </BasicTooltip>
          </div>
        </div>
        <BoxCheckList :wrap="true" :col="3">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerAutoEstimateSelectInsuranceAccident"
              id="layerAutoEstimateSelectInsuranceAccident001"
            >
              <BoxCheckLabel>3천만원</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerAutoEstimateSelectInsuranceAccident"
              id="layerAutoEstimateSelectInsuranceAccident002"
            >
              <BoxCheckLabel>5천만원</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerAutoEstimateSelectInsuranceAccident"
              id="layerAutoEstimateSelectInsuranceAccident003"
              :defaultChecked="true"
            >
              <BoxCheckLabel>1억원 </BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </section>

      <section class="row-margin-contents-group">
        <div class="flex-box row-margin-item-medium">
          <div class="flex-box__cell">
            <h3 class="text-body-2">면책금</h3>
          </div>
          <div class="flex-box__cell flex-box__cell--small">
            <BasicTooltip>
              <IconTooltip />
              <span class="for-a11y">(도움말)</span>

              <template v-slot:contents>
                <section :class="$style['tooltip-section']">
                  <h4 :class="$style['tooltip-section__title']">면책금</h4>
                  <p :class="$style['tooltip-section__text']">
                    사고로 인한 자차수리시 손님 부담금
                  </p>
                </section>
              </template>
            </BasicTooltip>
          </div>
        </div>
        <BoxCheckList :wrap="true" :col="4">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerAutoEstimateSelectInsuranceIndemnity"
              id="layerAutoEstimateSelectInsuranceIndemnity001"
            >
              <BoxCheckLabel>10만원</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerAutoEstimateSelectInsuranceIndemnity"
              id="layerAutoEstimateSelectInsuranceIndemnity002"
            >
              <BoxCheckLabel>20만원</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerAutoEstimateSelectInsuranceIndemnity"
              id="layerAutoEstimateSelectInsuranceIndemnity003"
              :defaultChecked="true"
            >
              <BoxCheckLabel>30만원 </BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerAutoEstimateSelectInsuranceIndemnity"
              id="layerAutoEstimateSelectInsuranceIndemnity004"
            >
              <BoxCheckLabel>40만원 </BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </section>

      <!-- Case : 개인사업자, 법인사업자의 경우 -->
      <section class="row-margin-contents-group">
        <div class="flex-box row-margin-item-medium">
          <div class="flex-box__cell">
            <h3 class="text-body-2">임직원 특약</h3>
          </div>
          <div class="flex-box__cell flex-box__cell--small">
            <BasicTooltip>
              <IconTooltip />
              <span class="for-a11y">(도움말)</span>

              <template v-slot:contents>
                <section :class="$style['tooltip-section']">
                  <h4 :class="$style['tooltip-section__title']">임직원 특약</h4>
                  <p :class="$style['tooltip-section__text']">
                    사업자는 임직원 특약 가입 시에만 관련비용을 필요경비로 인정
                  </p>
                </section>
              </template>
            </BasicTooltip>
          </div>
        </div>
        <BoxCheckList align="full">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerAutoEstimateSelectInsuranceEmployee"
              id="layerAutoEstimateSelectInsuranceEmployee001"
              :defaultChecked="true"
            >
              <BoxCheckLabel>가입 (임직원만 운전 가능)</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerAutoEstimateSelectInsuranceEmployee"
              id="layerAutoEstimateSelectInsuranceEmployee002"
            >
              <BoxCheckLabel>미가입 (경비 처리 50%만 인정)</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </section>
      <!-- //Case : 개인사업자, 법인사업자의 경우 -->

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">초기화</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoEstimateSelectInsurance.scss';
</style>
