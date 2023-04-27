<script>
// My_M02_l002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ContentsButton from '@/components/ui/button/ContentsButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PopupTitle,
    PageTextGroup,
    PageMainText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    RoundStatus,
    ButtonList,
    ButtonListItem,
    BasicButton,
    ContentsButton,
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
          <PopupTitle>상환스케줄</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>발급할 계약을</strong><br />
          선택하세요
        </PageMainText>
      </PageTextGroup>

      <!-- Case : 계약이 없을 때 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">발급 가능한 계약이 없습니다.</p>
      </div>
      <!-- // Case : 계약이 없을 때 -->

      <!-- Case : 계약이 있을 때 -->
      <ul class="reset-list">
        <li class="row-margin-item-group">
          <ContentsButton>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">
                  오토리스 05도6880
                </h3>
                <p
                  class="text-body-4 color-gray font-weight-regular row-margin-small"
                >
                  기아 레이 럭셔리
                </p>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus :classNames="{ wrap: 'display-block' }">
                  종료
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText
                  :classNames="{
                    text: 'color-green font-weight-medium',
                  }"
                >
                  845,000 원
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText
                  :classNames="{
                    text: 'color-black',
                  }"
                >
                  매월 5일
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText
                  :classNames="{
                    text: 'color-black',
                  }"
                >
                  -
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </ContentsButton>
        </li>

        <li class="row-margin-item-group">
          <ContentsButton>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">오토리스 01바123</h3>
                <p
                  class="text-body-4 color-gray font-weight-regular row-margin-small"
                >
                  현대 펠리세이드 디젤 2.2 4WD (액세서리 변경) 프레스티지
                  (7인승) 자동
                </p>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText
                  :classNames="{
                    text: 'color-green font-weight-medium',
                  }"
                >
                  845,000 원
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText
                  :classNames="{
                    text: 'color-black',
                  }"
                >
                  매월 5일
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText
                  :classNames="{
                    text: 'color-black',
                  }"
                >
                  41/60
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </ContentsButton>
        </li>
      </ul>
      <!-- Case : 계약이 있을 때 -->

      <!-- Case : 계약이 없을 때 -->
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
      <!-- // Case : 계약이 없을 때 -->
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanCertificateRepaymentList.scss';
</style>
