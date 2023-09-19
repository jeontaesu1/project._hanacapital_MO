<script>
// AF_M02_l001
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import RoundButton from '@/components/ui/button/RoundButton.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ColorChip from '@/components/ui/imageData/ColorChip.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

import IconTell from '@/assets/images/icon/tell.svg?component';
import IconCart from '@/assets/images/icon/cart.svg?component';
import IconDropdown from '@/assets/images/icon/dropdown.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    RoundButton,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    InputBlock,
    InputBlockCell,
    UnitText,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ColorChip,
    NoticeText,
    IconTell,
    IconCart,
    IconDropdown,
  },
  setup() {
    const state = reactive({
      ratioError: false,
      paymentError: false,
    });

    const layer = ref(null);

    return {
      state,
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead
          :classNames="{
            left: 'flex-none',
          }"
        >
          <template v-slot:right>
            <div class="flex-box">
              <div class="flex-box__cell">
                <RoundButton theme="tertiary" :block="true">
                  <template v-slot:leftIcon>
                    <IconCart />
                  </template>
                  차바구니
                </RoundButton>
              </div>
              <div class="flex-box__cell">
                <RoundButton tagName="a" href="tel:1800-1110" :block="true">
                  <template v-slot:leftIcon>
                    <IconTell />
                  </template>
                  상담원 연결
                </RoundButton>
              </div>
              <div class="flex-box__cell flex-box__cell--regular">
                <PopupButton @click="layerSlotProps.close()" />
              </div>
            </div>
          </template>
        </FullPopupHead>
      </template>

      <UiAccordion tagName="div" :classNames="{ wrap: $style['car-info'] }">
        <UiAccordionItem
          tagName="div"
          :classNames="{
            item: $style['car-info__inner'],
          }"
          v-slot="accordionItemSlotProps"
        >
          <div>
            <div class="text-body-4 font-weight-light">현대</div>
            <h3 class="text-body-1 font-weight-medium row-margin-mini">
              캐스퍼
            </h3>
            <div class="text-body-4 color-gray row-margin-small">
              인스퍼레이션 + 캐스퍼 액티브Ⅱ
            </div>
            <div class="flex-box row-margin-item">
              <div class="flex-box__cell flex-1">
                <UnitText rightUnit="원"><strong>30,324,230</strong></UnitText>
              </div>
              <div class="flex-box__cell">
                <button
                  type="button"
                  :class="$style['car-info__opener']"
                  @click="accordionItemSlotProps.toggle"
                  :title="accordionItemSlotProps.opened ? '닫기' : '열기'"
                >
                  <span :class="$style['car-info__opener-text']">내역보기</span>
                  <IconDropdown :class="$style['car-info__opener-icon']" />
                </button>
              </div>
            </div>
          </div>

          <UiAccordionLayer :classNames="{ layer: $style['car-info__layer'] }">
            <div :class="$style['car-info__contents']">
              <KeyValue margin="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>외장색상</KeyValueTitle>
                  <KeyValueText>
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">아틸라스 화이트</div>
                      <div class="flex-box__cell">
                        <ColorChip size="small" :colors="['248, 245, 245']" />
                      </div>
                    </div>
                  </KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>내장색상</KeyValueTitle>
                  <KeyValueText>
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">
                        네츄럴 베이지 / 다크 베이지
                      </div>
                      <div class="flex-box__cell">
                        <ColorChip
                          size="small"
                          :colors="['244, 238, 238', '225, 213, 213']"
                        />
                      </div>
                    </div>
                  </KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>옵션 1</KeyValueTitle>
                  <KeyValueText>스토리지</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>옵션 2</KeyValueTitle>
                  <KeyValueText>커버</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </div>
          </UiAccordionLayer>
        </UiAccordionItem>
      </UiAccordion>

      <PageTextGroup>
        <!-- Case : 재견적이 아닐 경우 -->
        <PageMainText>
          견적조건을<br />
          <strong>선택해 주세요</strong>
        </PageMainText>
        <!--// Case : 재견적이 아닐 경우 -->

        <!-- Case : 재견적일 경우 -->
        <PageMainText>
          승인 가능한 견적을<br />
          <strong>선택해 주세요 (재견적)</strong>
        </PageMainText>
        <!-- //Case : 재견적일 경우 -->
      </PageTextGroup>

      <div>
        <section class="row-margin-contents-group">
          <h3 class="text-body-2 font-weight-bold row-margin-item-medium">
            이용방법
          </h3>
          <!-- Case : 재견적이 아닐 경우 -->
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeaseUseMethod"
                id="layerAutoEstimateLeaseUseMethod001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>운용리스</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeaseUseMethod"
                id="layerAutoEstimateLeaseUseMethod002"
              >
                <BoxCheckLabel>금융리스</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <!-- //Case : 재견적이 아닐 경우 -->

          <!-- Case : 운용리스 (재견적)일 경우 -->
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeaseUseMethod01"
                id="layerAutoEstimateLeaseUseMethod01_001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>운용리스</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <!-- //Case : 운용리스 (재견적)일 경우 -->

          <!-- Case : 금융리스 (재견적)일 경우 -->
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeaseUseMethod02"
                id="layerAutoEstimateLeaseUseMethod02_001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>금융리스</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <!-- //Case : 금융리스 (재견적)일 경우 -->
          <NoticeText :classNames="{ wrap: 'row-margin-item' }"
            >차량을 직접 소유하지 않아 비용처리에 유리해요.</NoticeText
          >
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 font-weight-bold row-margin-item-medium">
            이용기간
          </h3>
          <!-- Case : 재견적이 아닐 경우 -->
          <BoxCheckList :wrap="true" :col="3">
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeaseUsePeriod"
                id="layerAutoEstimateLeaseUsePeriod001"
              >
                <BoxCheckLabel>36개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeaseUsePeriod"
                id="layerAutoEstimateLeaseUsePeriod002"
              >
                <BoxCheckLabel>48개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeaseUsePeriod"
                id="layerAutoEstimateLeaseUsePeriod003"
                :defaultChecked="true"
              >
                <BoxCheckLabel>60개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <!-- //Case : 재견적이 아닐 경우 -->

          <!-- Case : 재견적일 경우 -->
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeaseUsePeriod01"
                id="layerAutoEstimateLeaseUsePeriod01__001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>60개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <!-- //Case : 재견적일 경우 -->

          <NoticeText :classNames="{ wrap: 'row-margin-item' }"
            >이용기간이 길수록 월 납입금이 저렴해요.
          </NoticeText>
        </section>

        <section class="row-margin-contents-group">
          <div class="flex-box row-margin-item-medium">
            <div class="flex-box__cell flex-1">
              <h3 class="text-body-2 font-weight-bold">선납금</h3>
            </div>
            <div class="flex-box__cell">
              <div class="text-body-2 font-weight-medium">1,123,456 원</div>
            </div>
          </div>

          <!-- Case : 운용리스일 경우 -->
          <BoxCheckList :wrap="true" :col="3">
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeasePrePayment"
                id="layerAutoEstimateLeasePrePayment001"
              >
                <BoxCheckLabel>0%</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeasePrePayment"
                id="layerAutoEstimateLeasePrePayment002"
              >
                <BoxCheckLabel>10%</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeasePrePayment"
                id="layerAutoEstimateLeasePrePayment003"
              >
                <BoxCheckLabel>20%</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeasePrePayment"
                id="layerAutoEstimateLeasePrePayment004"
                :defaultChecked="true"
              >
                <BoxCheckLabel>30%</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeasePrePayment"
                id="layerAutoEstimateLeasePrePayment005"
              >
                <BoxCheckLabel>직접입력</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <NoticeText :classNames="{ wrap: 'row-margin-item' }"
            >선납금을 많이 내면 월 납입금이 저렴해요.<br />
            계약종료시 돌려받진 못해요.
          </NoticeText>
          <!-- //Case : 운용리스일 경우 -->

          <!-- Case : 금융 리스일 경우 -->
          <FormList>
            <FormListItem
              titleText="신청금액"
              target="#layerAutoEstimateLeasePayment"
            >
              <FormInvalid :error="state.paymentError">
                <InputBlock :error="state.paymentError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="신청금액 입력"
                      id="layerAutoEstimateLeasePayment"
                      pattern="\d*"
                      :useDelete="false"
                      align="right"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3">원</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
                <FormHelpText>총 차량가 - 신청금액 = 선납금</FormHelpText>
              </FormInvalid>
            </FormListItem>
          </FormList>

          <section
            :class="[$style['notice-section'], 'row-margin-contents-group']"
          >
            <h4 :class="$style['notice-section__title']">이용안내</h4>
            <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
              <li :class="$style['basic-list__item']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  리스 신청 후 신용등급에 따라 최종리스료 확인이 가능합니다.
                </div>
              </li>
            </ul>
          </section>
          <!-- //Case : 금융 리스일 경우 -->
        </section>

        <!-- Case : 운용리스일 경우 -->
        <section class="row-margin-contents-group">
          <div class="flex-box row-margin-item-medium">
            <div class="flex-box__cell flex-1">
              <h3 class="text-body-2 font-weight-bold">보증금</h3>
            </div>
            <div class="flex-box__cell">
              <div class="text-body-2 font-weight-medium">0 원</div>
            </div>
          </div>

          <BoxCheckList :wrap="true" :col="3">
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeaseDeposit"
                id="layerAutoEstimateLeaseDeposit001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>0%</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeaseDeposit"
                id="layerAutoEstimateLeaseDeposit002"
              >
                <BoxCheckLabel>10%</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeaseDeposit"
                id="layerAutoEstimateLeaseDeposit003"
              >
                <BoxCheckLabel>20%</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeaseDeposit"
                id="layerAutoEstimateLeaseDeposit004"
              >
                <BoxCheckLabel>30%</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeaseDeposit"
                id="layerAutoEstimateLeaseDeposit005"
              >
                <BoxCheckLabel>직접입력</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <NoticeText :classNames="{ wrap: 'row-margin-item' }"
            >보증금을 많이 내면 금리가 낮아져요.<br />
            계약종료시 보증금도 돌려 받아요.
          </NoticeText>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 font-weight-bold row-margin-item-medium">
            연간주행거리
          </h3>
          <BoxCheckList :wrap="true" :col="3">
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeaseDistanceDriven"
                id="layerAutoEstimateLeaseDistanceDriven001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>1만km</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeaseDistanceDriven"
                id="layerAutoEstimateLeaseDistanceDriven002"
              >
                <BoxCheckLabel>2만km</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeaseDistanceDriven"
                id="layerAutoEstimateLeaseDistanceDriven003"
              >
                <BoxCheckLabel>3만km</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <NoticeText :classNames="{ wrap: 'row-margin-item' }"
            >주행거리가 짧을수록 월 납입금이 저렴해요.<br />
            신중하게 선택해주세요.
          </NoticeText>
        </section>

        <section class="row-margin-contents-group">
          <div class="flex-box row-margin-item-medium">
            <div class="flex-box__cell flex-1">
              <h3 class="text-body-2 font-weight-bold">잔존가치</h3>
            </div>
            <div class="flex-box__cell">
              <div class="text-body-2 font-weight-medium">1,123,456 원</div>
            </div>
          </div>

          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeaseValue"
                id="layerAutoEstimateLeaseValue001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>최대잔가</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateLeaseValue"
                id="layerAutoEstimateLeaseValue002"
              >
                <BoxCheckLabel>직접입력</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>

          <FormList
            :classNames="{
              wrap: 'row-margin-item-group row-margin-bottom-none',
            }"
          >
            <!-- Case : 잔존가치 : 직접입력 선택시  :disabled="false" -->
            <FormListItem
              titleText="비율"
              target="#layerAutoEstimateLeaseRatio"
              :disabled="true"
            >
              <FormInvalid :error="state.ratioError">
                <InputBlock :error="state.ratioError" :disabled="true">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="비율 입력"
                      id="layerAutoEstimateLeaseRatio"
                      pattern="\d*"
                      :useDelete="false"
                      align="right"
                      :disabled="true"
                      defaultValue="0"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3">%</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
                <!-- Case : 잔존가치 : 직접입력 선택시 노출 -->
                <FormHelpText>최소 32% ~ 최대 55%</FormHelpText>
                <!-- // Case : 잔존가치 : 직접입력 선택시 노출 -->
              </FormInvalid>
            </FormListItem>
            <!-- // Case : 잔존가치 : 직접입력 선택시  :disabled="false" -->
          </FormList>

          <NoticeText :classNames="{ wrap: 'row-margin-item' }"
            >잔존가치는 계약 종료 후 차량 인수 시 납부해야 하는 비용입니다.
            잔존가치가 높을수록 월 납입금이 저렴해요.</NoticeText
          >
        </section>
        <!-- //Case : 운용리스일 경우 -->
      </div>

      <template v-slot:foot>
        <!-- Case : 월 납입금 계산 전 -->
        <KeyValue verticalAlign="center">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle :classNames="{ title: 'color-black' }"
              >월 납입금액</KeyValueTitle
            >
            <KeyValueText>
              <BasicButton size="mini" inline="true">계산하기</BasicButton>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
        <!-- //Case : 월 납입금 계산 전 -->

        <!-- Case : 월 납입금 계산 후 -->
        <KeyValue verticalAlign="center">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle :classNames="{ title: 'color-black' }"
              >월 납입금액</KeyValueTitle
            >
            <KeyValueText>
              <div class="flex-box">
                <div class="flex-box__cell flex-1">
                  <UnitText rightUnit="원 ~" align="right"
                    ><strong>18,850,000</strong></UnitText
                  >
                </div>
                <div class="flex-box__cell">
                  <BasicButton size="mini" theme="quaternary">
                    견적서
                  </BasicButton>
                </div>
              </div>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
        <!-- //Case : 월 납입금 계산 후 -->

        <ButtonList
          :classNames="{
            wrap: 'row-margin-item-group',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>심사신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoEstimateLease.scss';
</style>
