<script>
// BF_M04_l014
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
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
    PageTextGroup,
    PageMainText,
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

      <PageTextGroup>
        <PageMainText>
          아현 푸르지오 클라시티 V1에<br />
          <strong>분양권 승계 진행건입니다</strong>
        </PageMainText>

        <!-- Case : 대상건이 있는 경우 -->
        <PageSubText>승계 대상 호실을 선택해주세요.</PageSubText>
        <!-- // Case : 대상건이 있는 경우 -->
      </PageTextGroup>

      <!-- Case : 대상건이 없는 경우 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">
          승계 가능한 물건이 없습니다.<br />
          하나캐피탈에 승계 안내를 요청해주세요.
        </p>
      </div>
      <!-- // Case : 대상건이 없는 경우 -->

      <!-- Case : 대상건이 있는 경우 -->
      <ul class="reset-list">
        <li class="row-margin-item-group">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">
                  아현 푸르지오 클라시티 V1 5동 101호
                </h3>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>양도인</KeyValueTitle>
                <KeyValueText>김하나</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>약정 완료 여부</KeyValueTitle>
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
              >
                승계 신청
              </BasicButton>
            </KeyValue>
          </BasicBox>
        </li>
        <li class="row-margin-item-group">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">
                  아현 푸르지오 클라시티 V1 5동 101호
                </h3>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>양도인</KeyValueTitle>
                <KeyValueText>김하나</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>약정 완료 여부</KeyValueTitle>
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
              >
                서류 등록
              </BasicButton>
            </KeyValue>
          </BasicBox>
        </li>
        <li class="row-margin-item-group">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">
                  아현 푸르지오 클라시티 V1 5동 101호
                </h3>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>양도인</KeyValueTitle>
                <KeyValueText>김하나</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>약정 완료 여부</KeyValueTitle>
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
              >
                서류 등록
              </BasicButton>
            </KeyValue>
          </BasicBox>
        </li>
      </ul>
      <!-- // Case : 대상건이 있는 경우 -->

      <!-- Case : 대상건이 없는 경우 -->
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
      <!-- // Case : 대상건이 없는 경우 -->
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractIntermediateSuccessionList.scss';
</style>
