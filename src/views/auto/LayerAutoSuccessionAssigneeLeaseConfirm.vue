<script>
// AF_M07_l006
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
          리스 승계 상세정보를<br />
          <strong>확인해주세요</strong>
        </PageMainText>
        <PageSubText>
          실제 차량을 운행하는 목적으로의 승계만 가능하며 신규로 리스계약을
          체결하는 절차와 동일하게 금융회사가 정한 심사기준에 따라 심사가
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
          <h2 class="text-title-2 row-margin-contents">리스 조건</h2>

          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">운용리스</h3>
              </BasicBoxHeadLeft>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>월 리스료</KeyValueTitle>
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
                  name="layerAutoSuccessionAssigneeLeaseConfirmType"
                  id="layerAutoSuccessionAssigneeLeaseConfirmType1"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>동일 조건 승계</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerAutoSuccessionAssigneeLeaseConfirmType"
                  id="layerAutoSuccessionAssigneeLeaseConfirmType2"
                >
                  <BoxCheckLabel>전액선납 승계</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>

            <!-- Case : '동일 조건 승계' 선택시 노출 -->
            <div class="row-margin-item-group">
              <NoticeText
                >현재 계약자의 이용 조건을 동일하게 승계합니다.
              </NoticeText>

              <section
                :class="[$style['notice-section'], 'row-margin-item-group']"
              >
                <h3 :class="$style['notice-section__title']">보험가입 안내</h3>
                <ul
                  :class="[$style['basic-list'], $style['basic-list--regular']]"
                >
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      양수인명의로 자동차 보험을 가입합니다.
                    </div>
                  </li>
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      자차손해 가입은 필수이며, 질권설정금액 부족/불가 시
                      보증금/선납금을 추가 납입할 수 있습니다.
                    </div>
                  </li>
                </ul>
              </section>
            </div>
            <!-- // Case : '동일 조건 승계' 선택시 노출 -->

            <!-- Case : '전액선납 승계' 선택시 노출 -->
            <div class="row-margin-item-group">
              <div>
                <NoticeText :classNames="{ wrap: 'row-margin-item' }"
                  >심사서류가 간소화됩니다.</NoticeText
                >
                <NoticeText :classNames="{ wrap: 'row-margin-item' }"
                  >전액선납 정산비용이 발생합니다.</NoticeText
                >
                <NoticeText :classNames="{ wrap: 'row-margin-item' }"
                  >정산서는 심사 승인 이후 발송됩니다.</NoticeText
                >
              </div>

              <section
                :class="[$style['notice-section'], 'row-margin-item-group']"
              >
                <h3 :class="$style['notice-section__title']">보험가입 안내</h3>
                <ul
                  :class="[$style['basic-list'], $style['basic-list--regular']]"
                >
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      양수인 명의로 자동차 보험을 가입해주세요.
                    </div>
                  </li>
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      책임보험 가입 가능합니다.
                    </div>
                  </li>
                </ul>
              </section>
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
            <BasicButton theme="secondary">승계 신청하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoSuccessionAssigneeLeaseConfirm.scss';
</style>
