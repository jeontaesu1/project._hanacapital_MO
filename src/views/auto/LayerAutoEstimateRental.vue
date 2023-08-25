<script>
// AF_M01_l001
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
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
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
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconTell from '@/assets/images/icon/tell.svg?component';
import IconLink from '@/assets/images/icon/link.svg?component';
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
    BasicSelect,
    BasicHr,
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
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    TextButton,
    IconTell,
    IconLink,
    IconDropdown,
  },
  setup() {
    const state = reactive({
      ratioError: false,
      paymentError: false,
      productError: false,
      addressError: false,
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
        <FullPopupHead>
          <template v-slot:right>
            <div class="flex-box">
              <div class="flex-box__cell">
                <RoundButton tagName="a" href="tel:1800-1110">
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
          <h3 class="text-body-2 row-margin-item-medium">이용방법</h3>
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateRentalUseMethod"
                id="layerAutoEstimateRentalUseMethod01"
                :defaultChecked="true"
              >
                <BoxCheckLabel>장기렌터카</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <NoticeText :classNames="{ wrap: 'row-margin-item' }"
            >차량을 직접 소유하지 않아 비용처리에 유리해요.</NoticeText
          >
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">이용기간</h3>
          <!-- Case : 재견적이 아닐 경우 -->
          <BoxCheckList :wrap="true" :col="3">
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateRentalUsePeriod"
                id="layerAutoEstimateRentalUsePeriod001"
              >
                <BoxCheckLabel>36개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateRentalUsePeriod"
                id="layerAutoEstimateRentalUsePeriod002"
              >
                <BoxCheckLabel>48개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateRentalUsePeriod"
                id="layerAutoEstimateRentalUsePeriod003"
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
                name="layerAutoEstimateRentalUsePeriod01"
                id="layerAutoEstimateRentalUsePeriod01__001"
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
              <h3 class="text-body-2">선납금</h3>
            </div>
            <div class="flex-box__cell">
              <div class="text-body-2 font-weight-medium">1,123,456 원</div>
            </div>
          </div>

          <BoxCheckList :wrap="true" :col="3">
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateRentalPrePayment"
                id="layerAutoEstimateRentalPrePayment001"
              >
                <BoxCheckLabel>0%</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateRentalPrePayment"
                id="layerAutoEstimateRentalPrePayment002"
              >
                <BoxCheckLabel>10%</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateRentalPrePayment"
                id="layerAutoEstimateRentalPrePayment003"
              >
                <BoxCheckLabel>20%</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateRentalPrePayment"
                id="layerAutoEstimateRentalPrePayment004"
                :defaultChecked="true"
              >
                <BoxCheckLabel>30%</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateRentalPrePayment"
                id="layerAutoEstimateRentalPrePayment005"
              >
                <BoxCheckLabel>직접입력</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <NoticeText :classNames="{ wrap: 'row-margin-item' }"
            >선납금을 많이 내면 월 납입금이 저렴해요.<br />
            계약종료시 돌려받진 못해요.
          </NoticeText>
        </section>

        <section class="row-margin-contents-group">
          <div class="flex-box row-margin-item-medium">
            <div class="flex-box__cell flex-1">
              <h3 class="text-body-2">보증금</h3>
            </div>
            <div class="flex-box__cell">
              <div class="text-body-2 font-weight-medium">1,123,456 원</div>
            </div>
          </div>

          <BoxCheckList :wrap="true" :col="3">
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateRentalDeposit"
                id="layerAutoEstimateRentalDeposit001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>0%</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateRentalDeposit"
                id="layerAutoEstimateRentalDeposit002"
              >
                <BoxCheckLabel>10%</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateRentalDeposit"
                id="layerAutoEstimateRentalDeposit003"
              >
                <BoxCheckLabel>20%</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateRentalDeposit"
                id="layerAutoEstimateRentalDeposit004"
              >
                <BoxCheckLabel>30%</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateRentalDeposit"
                id="layerAutoEstimateRentalDeposit005"
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
                name="layerAutoEstimateRentalDistanceDriven"
                id="layerAutoEstimateRentalDistanceDriven001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>1만km</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateRentalDistanceDriven"
                id="layerAutoEstimateRentalDistanceDriven002"
              >
                <BoxCheckLabel>2만km</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateRentalDistanceDriven"
                id="layerAutoEstimateRentalDistanceDriven003"
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
              <h3 class="text-body-2">잔존가치</h3>
            </div>
            <div class="flex-box__cell">
              <div class="text-body-2 font-weight-medium">1,123,456 원</div>
            </div>
          </div>

          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateRentalValue"
                id="layerAutoEstimateRentalValue001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>최대잔가</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerAutoEstimateRentalValue"
                id="layerAutoEstimateRentalValue002"
              >
                <BoxCheckLabel>직접입력</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>

          <FormList :classNames="{ wrap: 'row-margin-item-group' }">
            <FormListItem
              titleText="비율"
              target="#layerAutoEstimateLeaseRatio"
            >
              <FormInvalid :error="state.ratioError">
                <!-- DD : 잔존가치 : 직접입력 선택시 입력창 활성화 -->
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
              </FormInvalid>
            </FormListItem>
          </FormList>
        </section>
      </div>

      <BasicHr className="row-margin-container-medium" />

      <div>
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-body-1 font-weight-medium">보험</h3>
            </BasicBoxHeadLeft>
            <BasicBoxHeadRight>
              <TextButton
                theme="secondary"
                :block="true"
                :classNames="{ wrap: 'text-body-5' }"
              >
                변경
                <template v-slot:rightIcon>
                  <IconLink />
                </template>
              </TextButton>
            </BasicBoxHeadRight>
          </BasicBoxHead>

          <KeyValue margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>운전연령</KeyValueTitle>
              <KeyValueText>만 26세 이상</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대물배상</KeyValueTitle>
              <KeyValueText>2억원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>자기차량손해</KeyValueTitle>
              <KeyValueText>1억원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>면책금</KeyValueTitle>
              <KeyValueText>30만원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle> 임직원 특약가입여부 (개인사업자) </KeyValueTitle>
              <KeyValueText>가입</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <FormList :classNames="{ wrap: 'row-margin-contents' }">
          <FormListItem titleText="정비상품" :forceFocus="true">
            <FormInvalid :error="state.productError">
              <BoxCheckList align="full">
                <BoxCheckListItem>
                  <BoxCheck
                    :contents="true"
                    name="layerAutoEstimateRentalProduct"
                    id="layerAutoEstimateRentalProduct001"
                  >
                    <BoxCheckLabel>셀프</BoxCheckLabel>
                    <p
                      class="text-body-5 color-gray-secondary row-margin-small"
                    >
                      고객님의 비용으로 직접 정비, 검사만 대행해드려요.
                    </p>
                  </BoxCheck>
                </BoxCheckListItem>

                <BoxCheckListItem>
                  <BoxCheck
                    :contents="true"
                    name="layerAutoEstimateRentalProduct"
                    id="layerAutoEstimateRentalProduct002"
                  >
                    <BoxCheckLabel>스페셜</BoxCheckLabel>
                    <p
                      class="text-body-5 color-gray-secondary row-margin-small"
                    >
                      2개월에 1회 직접 방문하여 정비 서비스를 제공해요.
                    </p>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="탁송지"
            target="#layerAutoEstimateRentalAddressButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.addressError">
              <InputBlock :error="state.addressError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '서울',
                      },
                      {
                        value: '2',
                        text: '부산',
                      },
                      {
                        value: '3',
                        text: '대구',
                      },
                      {
                        value: '4',
                        text: '대전',
                      },
                      {
                        value: '5',
                        text: '광주',
                      },
                      {
                        value: '6',
                        text: '인천',
                      },
                      {
                        value: '7',
                        text: '경기',
                      },
                      {
                        value: '8',
                        text: '충남',
                      },
                      {
                        value: '9',
                        text: '충북',
                      },
                      {
                        value: '10',
                        text: '울산',
                      },
                      {
                        value: '11',
                        text: '경남',
                      },
                      {
                        value: '12',
                        text: '경북',
                      },
                      {
                        value: '13',
                        text: '전남',
                      },
                      {
                        value: '14',
                        text: '인천강화',
                      },
                      {
                        value: '15',
                        text: '인천공항',
                      },
                      {
                        value: '16',
                        text: '세종',
                      },
                      {
                        value: '17',
                        text: '강원(영동)',
                      },
                      {
                        value: '18',
                        text: '강원(영서)',
                      },
                    ]"
                    buttonTitle="탁송지 선택하기"
                    layerTitle="탁송지를 선택해 주세요"
                    id="layerAutoEstimateRentalAddress"
                    buttonId="layerAutoEstimateRentalAddressButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText
                >실제 탁송 거리에 따라 탁송료 / 월 납입금은 변경될 수
                있어요.</FormHelpText
              >
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="기본제공용품" :forceFocus="true">
            <BasicBox>
              <p class="text-body-3">썬팅 (전면/측후면)</p>
              <p class="text-body-3 row-margin-small">블랙박스 (2채널)</p>
            </BasicBox>
          </FormListItem>
        </FormList>
      </div>

      <template v-slot:foot>
        <!-- Case : 월 납입금 계산 전 -->
        <KeyValue verticalAlign="center">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle :classNames="{ title: 'color-black' }"
              >월 납입금액</KeyValueTitle
            >
            <KeyValueText>
              <div class="inline-wrap">
                <BasicButton size="mini" inline="true">계산하기</BasicButton>
                <!-- Case : 로딩중 -->
                <BasicButton size="mini" inline="true">
                  계산중
                  <template v-slot:rightIcon>
                    <div :class="$style['loading-icon']"></div>
                  </template>
                </BasicButton>
                <!-- //Case : 로딩중 -->
              </div>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
        <!-- // Case : 월 납입금 계산 전 -->

        <!-- Case : 월 납입금 계산 후 -->
        <KeyValue verticalAlign="center">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle :classNames="{ title: 'color-black' }"
              >월 납입금액</KeyValueTitle
            >
            <KeyValueText>
              <div class="flex-box justify-conten-end">
                <div class="flex-box__cell">
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
        <!-- // Case : 월 납입금 계산 후 -->

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
@import '@/assets/scss/views/auto/LayerAutoEstimateRental.scss';
</style>
