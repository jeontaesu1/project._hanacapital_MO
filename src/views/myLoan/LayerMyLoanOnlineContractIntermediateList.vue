<script>
// BF_M04_l002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    StepProgress,
    PageMainText,
    PageTextGroup,
    PageSubText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
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
          온라인약정
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="5" :current="1" />
      </template>

      <!-- Case : 중도금 대출 내역이 없는 경우 -->
      <PageTextGroup>
        <PageMainText>
          김하나님은<br />
          <strong>중도금 대출 대상자가 아닙니다</strong>
        </PageMainText>
      </PageTextGroup>
      <!-- // Case : 중도금 대출 내역이 없는 경우 -->

      <!-- Case : 중도금 대출 내역이 있는 경우 -->
      <PageTextGroup>
        <PageMainText>
          김하나님은<br />
          아현 푸르지오 클라시티에<br />
          <strong>중도금 대출 대상자입니다</strong>
        </PageMainText>
        <PageSubText>대출신청을 진행해 주세요.</PageSubText>
      </PageTextGroup>
      <!-- // Case : 중도금 대출 내역이 있는 경우 -->

      <!-- Case : 중도금 대출 내역이 없는 경우 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">확인 후 다시 신청해주세요.</p>
      </div>
      <!-- // Case : 중도금 대출 내역이 없는 경우 -->

      <!-- Case : 중도금 대출 내역이 있는 경우 -->
      <ul class="reset-list">
        <li class="row-margin-item-group">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">
                  아현 푸르지오 클라시티 V1 101호
                </h3>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>약정 완료여부</KeyValueTitle>
                <KeyValueText>N</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>ARS 완료여부</KeyValueTitle>
                <KeyValueText>N</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>서류 제출</KeyValueTitle>
                <KeyValueText>N</KeyValueText>
              </KeyValueItem>

              <BasicButton
                size="small"
                :classNames="{ wrap: 'row-margin-contents-small' }"
                >대출신청</BasicButton
              >
            </KeyValue>
          </BasicBox>
        </li>
        <li class="row-margin-item-group">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">
                  아현 푸르지오 클라시티 V1 101호
                </h3>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>약정 완료여부</KeyValueTitle>
                <KeyValueText>Y</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>ARS 완료여부</KeyValueTitle>
                <KeyValueText>N</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>서류 제출</KeyValueTitle>
                <KeyValueText>N</KeyValueText>
              </KeyValueItem>

              <BasicButton
                size="small"
                :classNames="{ wrap: 'row-margin-contents-small' }"
                >ARS 계약 안내</BasicButton
              >
            </KeyValue>
          </BasicBox>
        </li>
        <li class="row-margin-item-group">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">
                  아현 푸르지오 클라시티 V1 101호
                </h3>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>약정 완료여부</KeyValueTitle>
                <KeyValueText>Y</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>ARS 완료여부</KeyValueTitle>
                <KeyValueText>Y</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>서류 제출</KeyValueTitle>
                <KeyValueText>N</KeyValueText>
              </KeyValueItem>

              <BasicButton
                size="small"
                :classNames="{ wrap: 'row-margin-contents-small' }"
                >서류 등록</BasicButton
              >
            </KeyValue>
          </BasicBox>
        </li>
        <li class="row-margin-item-group">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">
                  아현 푸르지오 클라시티 V1 101호
                </h3>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>약정 완료여부</KeyValueTitle>
                <KeyValueText>Y</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>ARS 완료여부</KeyValueTitle>
                <KeyValueText>Y</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>서류 제출</KeyValueTitle>
                <KeyValueText>Y</KeyValueText>
              </KeyValueItem>

              <BasicButton
                size="small"
                :classNames="{ wrap: 'row-margin-contents-small' }"
                >서류 등록</BasicButton
              >
            </KeyValue>
          </BasicBox>
        </li>
      </ul>
      <!-- // Case : 중도금 대출 내역이 있는 경우 -->

      <!-- Case : 중도금 대출 내역이 없는 경우 -->
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
      <!-- // Case : 중도금 대출 내역이 없는 경우 -->
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractIntermediateList.scss';
</style>
