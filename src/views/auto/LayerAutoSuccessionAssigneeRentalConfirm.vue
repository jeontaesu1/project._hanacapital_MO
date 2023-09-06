<script>
// AF_M07_l008
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    PageSubText,
    StepProgress,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    NoticeText,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
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
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="4" :current="3" />
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>
            렌트 승계 상세정보를<br />
            확인해주세요
          </strong>
        </PageMainText>
        <PageSubText>
          실제 차량을 운행하는 목적으로의 승계만 가능하며 신규로 렌트계약을
          체결하는 절차와 동일하게 금융회사가 정한 심시기준에 따라 심사가
          이루어집니다.
        </PageSubText>
        <PageSubText>
          <span class="color-green"
            >판매 목적을 위한 승계는 전액선납 승계만 가능합니다.</span
          >
        </PageSubText>
      </PageTextGroup>

      <div>
        <section class="row-margin-container-medium">
          <h2 class="text-title-2 row-margin-contents">렌트 조건</h2>

          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">렌터카</h3>
              </BasicBoxHeadLeft>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>월 렌트료</KeyValueTitle>
                <KeyValueText>500,000 원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>잔여기간</KeyValueTitle>
                <KeyValueText>00개월</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h2 class="text-title-2 row-margin-contents">승계 조건</h2>

          <div>
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerAutoSuccessionAssigneeRentalConfirmType"
                  id="layerAutoSuccessionAssigneeRentalConfirmType1"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>동일 조건 승계</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerAutoSuccessionAssigneeRentalConfirmType"
                  id="layerAutoSuccessionAssigneeRentalConfirmType2"
                >
                  <BoxCheckLabel>전액선납 승계</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>

            <!-- Case : '동일 조건 승계' 선택시 노출 -->
            <div class="row-margin-item-group">
              <NoticeText
                >현재 계약자의 이용 조건을 동일하게 승계합니다.</NoticeText
              >
            </div>
            <!-- // Case : '동일 조건 승계' 선택시 노출 -->

            <!-- Case : '전액선납 승계' 선택시 노출 -->
            <div class="row-margin-item-group">
              <NoticeText :classNames="{ wrap: 'row-margin-item' }"
                >승계 후 전액선납하는 정산비용이 발생합니다.</NoticeText
              >
              <NoticeText :classNames="{ wrap: 'row-margin-item' }"
                >승계 후 만기일자 이후 손님 명의로 자동차 소유권이전 등록 절차가
                이루어집니다.</NoticeText
              >
            </div>
            <!-- // Case : '전액선납 승계' 선택시 노출 -->
          </div>
        </section>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>승계 신청하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
