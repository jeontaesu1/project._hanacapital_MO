<script>
// LR_M02_p007
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import ColorChip from '@/components/ui/imageData/ColorChip.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';

export default {
  components: {
    PageContents,
    CarEmblem,
    RoundStatus,
    BasicHr,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicSelect,
    FormInvalidMessage,
    NoticeText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    CarThumb,
    UnitText,
    ColorChip,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    TextButton,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      lineupError: false,
      trimError: false,
      exteriorError: false,
      interiorError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '선구매');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <div class="row-margin-contents-small">
      <div class="flex-box">
        <div class="flex-box__cell flex-1">
          <CarEmblem src="/images/_dummy/car-emblem.png" name="현대" />
          <h3 class="text-body-1 font-weight-medium row-margin-mini">뉴 QM6</h3>
        </div>
        <div class="flex-box__cell">
          <RoundStatus theme="undenary" :block="true">전체 22대</RoundStatus>
        </div>
      </div>
    </div>

    <BasicHr
      className="row-margin-contents-group row-margin-top-none"
      theme="quaternary"
    ></BasicHr>

    <div>
      <FormList>
        <FormListItem titleText="구분" :forceFocus="true">
          <BoxCheckList :wrap="true" :col="3">
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="leaseRentEstimationSystemPrePurchaseCarDetailDivision"
                id="leaseRentEstimationSystemPrePurchaseCarDetailDivision01"
              >
                <BoxCheckLabel>전체</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="leaseRentEstimationSystemPrePurchaseCarDetailDivision"
                id="leaseRentEstimationSystemPrePurchaseCarDetailDivision02"
              >
                <BoxCheckLabel>선구매</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="leaseRentEstimationSystemPrePurchaseCarDetailDivision"
                id="leaseRentEstimationSystemPrePurchaseCarDetailDivision03"
              >
                <BoxCheckLabel>즉시출고</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
        </FormListItem>

        <FormListItem
          titleText="라인업"
          target="#leaseRentEstimationSystemPrePurchaseCarDetailLineupButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.lineupError">
            <InputBlock :error="state.lineupError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '전체',
                    },
                    {
                      value: '2',
                      text: '2023년형 LPG 2.0 Lpe 2WD(면세가격)',
                    },
                    {
                      value: '3',
                      text: '2023년형 LPG 2.0 Lpe 2WD(면세가격)',
                    },
                  ]"
                  buttonTitle="라인업 선택하기"
                  layerTitle="라인업을 선택해 주세요"
                  id="leaseRentEstimationSystemPrePurchaseCarDetailLineup"
                  buttonId="leaseRentEstimationSystemPrePurchaseCarDetailLineupButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <!-- Case : 라인업 선택 시 노출 -->
        <!-- <FormListItem
          titleText="트림"
          target="#leaseRentEstimationSystemPrePurchaseCarDetailTrimButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.trimError">
            <InputBlock :error="state.trimError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '전체',
                    },
                    {
                      value: '2',
                      text: '디 에센셜',
                    },
                    {
                      value: '3',
                      text: '디 에센셜',
                    },
                  ]"
                  buttonTitle="트림 선택하기"
                  layerTitle="트림을 선택해 주세요"
                  id="leaseRentEstimationSystemPrePurchaseCarDetailTrim"
                  buttonId="leaseRentEstimationSystemPrePurchaseCarDetailTrimButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem> -->
        <!-- // Case : 라인업 선택 시 노출 -->

        <FormListItem
          titleText="외장"
          target="#leaseRentEstimationSystemPrePurchaseCarDetailExteriorButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.exteriorError">
            <InputBlock :error="state.exteriorError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '전체',
                    },
                    {
                      value: '2',
                      text: '2023년형 LPG 2.0 Lpe 2WD(면세가격)',
                    },
                    {
                      value: '3',
                      text: '2023년형 LPG 2.0 Lpe 2WD(면세가격)',
                    },
                  ]"
                  buttonTitle="외장 선택하기"
                  layerTitle="외장을 선택해 주세요"
                  id="leaseRentEstimationSystemPrePurchaseCarDetailExterior"
                  buttonId="leaseRentEstimationSystemPrePurchaseCarDetailExteriorButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="내장"
          target="#leaseRentEstimationSystemPrePurchaseCarDetailInteriorButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.interiorError">
            <InputBlock :error="state.interiorError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '전체',
                    },
                    {
                      value: '2',
                      text: '블랙 인조가죽 시트',
                    },
                    {
                      value: '3',
                      text: '블랙 가죽 시트',
                    },
                  ]"
                  buttonTitle="내장 선택하기"
                  layerTitle="내장을 선택해 주세요"
                  id="leaseRentEstimationSystemPrePurchaseCarDetailInterior"
                  buttonId="leaseRentEstimationSystemPrePurchaseCarDetailInteriorButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <NoticeText :classNames="{ wrap: 'row-margin-contents' }"
        >계약번호를 클릭하시면 견적으로 이동하고, 조건에 맞춰 견적을 뽑고
        심사신청을 바로 하실 수 있습니다.</NoticeText
      >
    </div>

    <BasicHr className="row-margin-container-medium"></BasicHr>

    <ul class="reset-list">
      <li v-for="i in 2" :key="i" class="row-margin-item-group">
        <BasicBox>
          <!-- 240702 수정 -->
          <RoundStatus :block="true" theme="nonary" class="box-promotion"
            ><RoundStatus
              :square="true"
              theme="septenary"
              class="badge-promotion"
              >프로모션</RoundStatus
            >
            70만원
          </RoundStatus>
          <!-- // 240702 수정 -->
          <BasicBoxHead align="top" class="box-head">
            <BasicBoxHeadLeft>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <CarEmblem src="/images/_dummy/car-emblem.png" name="현대" />
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <span class="text-body-4 color-black font-weight-light"
                    >2020년식</span
                  >
                </div>
              </div>

              <div class="text-body-1 color-black font-weight-medium">
                쏘나타
              </div>
              <div class="text-body-4 color-gray row-margin-small">
                뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
              </div>
              <UnitText rightUnit="원" :classNames="{ wrap: 'row-margin-item' }"
                >16,900,000</UnitText
              >
            </BasicBoxHeadLeft>
            <BasicBoxHeadRight>
              <div class="inline-wrap align-right">
                <RoundStatus theme="secondary">선구매 12대</RoundStatus>
              </div>
              <CarThumb
                src="/images/_dummy/car-thumb.png"
                :classNames="{ wrap: 'row-margin-item-medium' }"
              />
            </BasicBoxHeadRight>
          </BasicBoxHead>

          <KeyValue margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>외장</KeyValueTitle>
              <KeyValueText>
                <div class="flex-box">
                  <div class="flex-box__cell flex-1">아틸라스 화이트</div>
                  <div class="flex-box__cell">
                    <ColorChip :colors="['248, 245, 245']" size="small" />
                  </div>
                </div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>내장</KeyValueTitle>
              <KeyValueText>
                <div class="flex-box">
                  <div class="flex-box__cell flex-1">
                    네츄럴 베이지 / 다크 베이지
                  </div>
                  <div class="flex-box__cell">
                    <ColorChip
                      :colors="['244, 238, 238', '225, 213, 213']"
                      size="small"
                    />
                  </div>
                </div>
              </KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>옵션</KeyValueTitle>
              <KeyValueText>
                운적석파워시트(전동식 요추 받침장치 포함) + 동승석 파워시트 +
                앞좌석 통풍 시트 + 뒷자석 열선시트 S-Link 패키지 I 매직
                테일게이트
              </KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <UiAccordion
            tagName="div"
            :classNames="{
              wrap: 'row-margin-item-group',
            }"
          >
            <UiAccordionItem tagName="div">
              <KeyValue verticalAlign="center">
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>계약번호</KeyValueTitle>
                  <KeyValueText>
                    <div class="flex-box justify-conten-end">
                      <div class="flex-box__cell">
                        <div :class="$style['number']">
                          <!-- 240702 수정 -->
                          <ul :class="($style['number__list'], 'numList')">
                            <li :class="($style['number__item'], 'numItem')">
                              <TextButton theme="senary" :underline="true">
                                D12345678
                              </TextButton>
                              <RoundStatus :border="true" class="marginLeft2"
                                >70만원</RoundStatus
                              >
                            </li>
                            <li :class="($style['number__item'], 'numItem')">
                              <TextButton theme="secondary" :underline="true">
                                D12345678
                              </TextButton>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="flex-box__cell flex-box__cell--small">
                        <UiAccordionOpener
                          :classNames="{
                            button: $style['key-value-opener'],
                          }"
                        />
                      </div>
                    </div>
                  </KeyValueText>
                </KeyValueItem>
              </KeyValue>

              <UiAccordionLayer>
                <div :class="$style['detail-contents']">
                  <BasicBox theme="senary" class="basicBoxWrap">
                    <div :class="$style['number']">
                      <ul :class="($style['number__list'], 'numList')">
                        <li :class="($style['number__item'], 'numItem')">
                          <TextButton theme="secondary" underline="true">
                            D12345678
                          </TextButton>
                        </li>
                        <li :class="($style['number__item'], 'numItem')">
                          <TextButton theme="senary" underline="true">
                            D12345678
                          </TextButton>
                          <RoundStatus :border="true" class="marginLeft2"
                            >70만원</RoundStatus
                          >
                        </li>
                        <li :class="($style['number__item'], 'numItem')">
                          <TextButton theme="secondary" underline="true">
                            D12345678
                          </TextButton>
                        </li>
                        <li :class="($style['number__item'], 'numItem')">
                          <TextButton theme="secondary" underline="true">
                            D12345678
                          </TextButton>
                        </li>
                        <li :class="($style['number__item'], 'numItem')">
                          <TextButton theme="secondary" underline="true">
                            D12345678
                          </TextButton>
                        </li>
                        <!-- // 240702 수정 -->
                      </ul>
                    </div>
                  </BasicBox>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
          </UiAccordion>
        </BasicBox>
      </li>
    </ul>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemPrePurchaseCarDetail.scss';
</style>

<style lang="scss" scoped>
.box-promotion {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 12px;

  .badge-promotion {
    padding: 1px 6px;
    font-size: 10px;
  }
}

.box-head {
  margin-top: 20px;
}

.marginLeft2 {
  margin-left: 2px;
}

.basicBoxWrap {
  padding: 22px 52px 22px 12px;
}

.numList {
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  .numItem {
    display: flex;
    align-items: flex-end;
    margin-left: 8px;

    &:nth-child(n + 4) {
      padding-top: 19px;
    }
  }
}
</style>
