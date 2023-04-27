<script>
// My_M02_l016
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PageTextGroup,
    PageMainText,
    RoundStatus,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
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
          <PopupTitle>스탁론약정서</PopupTitle>
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

      <div class="inline-wrap align-right">
        <CheckBox id="LayerMyLoanCertificateStockLoanListAll" theme="tertiary">
          <CheckBoxObject />
          <CheckBoxLabelText>전체 선택</CheckBoxLabelText>
        </CheckBox>
      </div>

      <!-- Case : 리스트가 있는 경우 -->
      <BoxCheckList
        align="full"
        :classNames="{
          wrap: 'row-margin-item',
        }"
      >
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            align="top"
            type="checkbox"
            id="LayerMyLoanCertificateStockLoanList_001"
          >
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="flex-box align-items-start">
                  <div class="flex-box__cell"><BoxCheckObject /></div>
                  <div class="flex-box__cell flex-box__cell--small flex-1">
                    <BoxCheckLabel :classNames="{ label: 'text-body-1' }">
                      스탁론
                    </BoxCheckLabel>
                    <div class="text-body-4 color-gray row-margin-small">
                      하나증권 ###-###-#######
                    </div>
                  </div>
                </div>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus :classNames="{ wrap: 'display-block' }">
                  종료
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>
            <KeyValue>
              <KeyValueItem>
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText>999,999 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>2021.02.02 (매월 2일)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText
                  :classNames="{ text: 'color-green font-weight-medium' }"
                >
                  16/60
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText>8,000,000 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BoxCheck>
        </BoxCheckListItem>

        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            align="top"
            type="checkbox"
            id="LayerMyLoanCertificateStockLoanList_002"
          >
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="flex-box align-items-start">
                  <div class="flex-box__cell"><BoxCheckObject /></div>
                  <div class="flex-box__cell flex-box__cell--small flex-1">
                    <BoxCheckLabel :classNames="{ label: 'text-body-1' }">
                      스탁론
                    </BoxCheckLabel>
                    <div class="text-body-4 color-gray row-margin-small">
                      하나증권 ###-###-#######
                    </div>
                  </div>
                </div>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus :classNames="{ wrap: 'display-block' }">
                  종료
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>
            <KeyValue>
              <KeyValueItem>
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText>999,999 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>결제일</KeyValueTitle>
                <KeyValueText>2021.02.02 (매월 2일)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText
                  :classNames="{ text: 'color-green font-weight-medium' }"
                >
                  16/60
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem>
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText>8,000,000 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
      <!-- //Case : 리스트가 있는 경우 -->

      <!-- Case : 리스트가 없는 경우 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">발급 가능한 계약이 없습니다.</p>
      </div>
      <!-- Case : 리스트가 없는 경우 -->

      <template v-slot:foot>
        <!-- Case : 리스트가 있는 경우 -->
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>발급</BasicButton>
          </ButtonListItem>
        </ButtonList>
        <!-- //Case : 리스트가 있는 경우 -->

        <!-- Case : 리스트가 없는 경우 -->
        <ButtonList>
          <ButtonListItem>
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
        <!-- //Case : 리스트가 없는 경우 -->
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanCertificateStockLoanList.scss';
</style>
