<script>
// AF_M06_l003
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import RoundTab from '@/components/ui/tab/RoundTab.vue';
import RoundTabButton from '@/components/ui/tab/RoundTabButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    StickyBar,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    RoundTab,
    RoundTabButton,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NoticeText,
    CarEmblem,
    CarThumb,
    UnitText,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
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
          <PopupTitle>사고이력조회</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <BasicBox className="row-margin-container-medium">
        <div class="flex-box">
          <div class="flex-box__cell flex-1">
            <div class="flex-box row-margin-mini">
              <div class="flex-box__cell">
                <CarEmblem code="auto-hyundai" name="현대차" />
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <p class="text-body-4 font-weight-light">2020년식</p>
              </div>
            </div>
            <h3 class="text-body-1 font-weight-medium">11가1111</h3>
            <p class="text-body-4 color-gray row-margin-small">
              쏘나타 뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
            </p>
          </div>
          <div class="flex-box__cell flex-box__cell--medium">
            <CarThumb src="/images/_dummy/car-thumb.png" />
          </div>
        </div>
      </BasicBox>

      <UiTab>
        <StickyBar>
          <NavTab :useUiTab="true">
            <NavTabButton link="layerAutoUsedLoanAccidentHistoryTab001"
              >요약정보</NavTabButton
            >
            <NavTabButton link="layerAutoUsedLoanAccidentHistoryTab002"
              >상세정보</NavTabButton
            >
          </NavTab>
        </StickyBar>

        <div class="contents-wrap">
          <NoticeText
            :classNames="{
              wrap: 'row-margin-contents',
            }"
          >
            아래정보는 고객님께서 조회하신 차량에 대한 조회일 현재 (yyyy년 mm월
            dd일) 보험 개발원의 실시간 정보입니다.
          </NoticeText>

          <!-- Tab : 요약정보 -->
          <UiTabPanel name="layerAutoUsedLoanAccidentHistoryTab001">
            <div>
              <section class="row-margin-item-group">
                <BasicBox>
                  <BasicBoxHead>
                    <BasicBoxHeadLeft>
                      <h3 class="text-body-1 font-weight-medium">일반사양</h3>
                    </BasicBoxHeadLeft>
                  </BasicBoxHead>

                  <KeyValueList margin="regular">
                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>차량번호</KeyValueTitle>
                      <KeyValueText>11가 1111</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>제조회사</KeyValueTitle>
                      <KeyValueText>현대</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>자동차 명</KeyValueTitle>
                      <KeyValueText>투싼(TUCSON)</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>연식</KeyValueTitle>
                      <KeyValueText>2014년식</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>사용연료</KeyValueTitle>
                      <KeyValueText>디젤</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>배기량</KeyValueTitle>
                      <KeyValueText>1995cc</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>자체형상</KeyValueTitle>
                      <KeyValueText>SUV</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>용도 및 차종</KeyValueTitle>
                      <KeyValueText>자가용/승용</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>최초 보험 가입일</KeyValueTitle>
                      <KeyValueText>2013-08-14</KeyValueText>
                    </KeyValueItem>
                  </KeyValueList>
                </BasicBox>
              </section>
              <section class="row-margin-item-group">
                <BasicBox>
                  <BasicBoxHead>
                    <BasicBoxHeadLeft>
                      <h3 class="text-body-1 font-weight-medium">
                        사고이력 요약
                      </h3>
                    </BasicBoxHeadLeft>
                  </BasicBoxHead>

                  <KeyValueList margin="regular">
                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>용도 변경</KeyValueTitle>
                      <KeyValueText>있음</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>번호/소유자 변경</KeyValueTitle>
                      <KeyValueText>0회 / 0회</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>전손/침수/도난</KeyValueTitle>
                      <KeyValueText>
                        전손 : 이력없음<br />
                        침수 : 이력없음<br />
                        도난 : 이력없음
                      </KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>내가 가해</KeyValueTitle>
                      <KeyValueText>2회 / 1,073,880원</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>타차 피해</KeyValueTitle>
                      <KeyValueText>0회 / 0원</KeyValueText>
                    </KeyValueItem>
                  </KeyValueList>
                </BasicBox>
              </section>
            </div>
          </UiTabPanel>
          <!-- // Tab : 요약정보 -->

          <!-- Tab : 상세정보 -->
          <UiTabPanel name="layerAutoUsedLoanAccidentHistoryTab002">
            <div>
              <section class="row-margin-item-group">
                <BasicBox>
                  <BasicBoxHead>
                    <BasicBoxHeadLeft>
                      <h3 class="text-body-1 font-weight-medium">용도변경</h3>
                    </BasicBoxHeadLeft>
                  </BasicBoxHead>

                  <KeyValueList margin="regular">
                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>대여 (렌터카)</KeyValueTitle>
                      <KeyValueText>이력없음</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>영업</KeyValueTitle>
                      <KeyValueText>이력없음</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>관용</KeyValueTitle>
                      <KeyValueText>이력없음</KeyValueText>
                    </KeyValueItem>
                  </KeyValueList>
                </BasicBox>
              </section>
              <section class="row-margin-item-group">
                <BasicBox>
                  <BasicBoxHead>
                    <BasicBoxHeadLeft>
                      <h3 class="text-body-1 font-weight-medium">
                        소유자 변경
                      </h3>
                    </BasicBoxHeadLeft>
                  </BasicBoxHead>

                  <KeyValueList margin="regular">
                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>20-02-02</KeyValueTitle>
                      <KeyValueText>소유자 변경</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>20-08-20</KeyValueTitle>
                      <KeyValueText>소유자 변경</KeyValueText>
                    </KeyValueItem>
                  </KeyValueList>
                </BasicBox>
              </section>
              <section class="row-margin-item-group">
                <BasicBox>
                  <BasicBoxHead>
                    <BasicBoxHeadLeft>
                      <h3 class="text-body-1 font-weight-medium">특수사고</h3>
                    </BasicBoxHeadLeft>
                  </BasicBoxHead>

                  <KeyValueList margin="regular">
                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>전손</KeyValueTitle>
                      <KeyValueText>이력없음</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>침수</KeyValueTitle>
                      <KeyValueText>이력없음</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>도난</KeyValueTitle>
                      <KeyValueText>이력없음</KeyValueText>
                    </KeyValueItem>
                  </KeyValueList>
                </BasicBox>
              </section>
            </div>

            <section class="contents-wrap row-margin-container-medium">
              <h3 class="text-title-2 row-margin-contents">보험처리 내역</h3>

              <UiTab>
                <RoundTab :useUiTab="true">
                  <RoundTabButton
                    link="layerAutoUsedLoanAccidentHistoryTab001_001"
                  >
                    내차보험
                  </RoundTabButton>
                  <RoundTabButton
                    link="layerAutoUsedLoanAccidentHistoryTab001_002"
                  >
                    타차보험
                  </RoundTabButton>
                  <RoundTabButton
                    link="layerAutoUsedLoanAccidentHistoryTab001_003"
                  >
                    타차피해
                  </RoundTabButton>
                </RoundTab>

                <!-- Tab : 내차보험 -->
                <UiTabPanel name="layerAutoUsedLoanAccidentHistoryTab001_001">
                  <!-- Case : 내역 없을 때 -->
                  <div :class="$style['empty']">
                    <p :class="$style['empty__text']">
                      검색된 결과가 없습니다.
                    </p>
                  </div>
                  <!-- // Case : 내역 없을 때 -->

                  <!-- Case : 내역 있을 때 -->
                  <UiAccordion class="reset-list">
                    <UiAccordionItem
                      v-for="i in 3"
                      :key="i"
                      class="row-margin-item-group"
                    >
                      <BasicBox>
                        <div class="flex-box">
                          <div class="flex-box__cell">
                            <div class="text-body-4 font-weight-light">
                              2022.08.11
                            </div>
                          </div>
                          <div class="flex-box__cell flex-1">
                            <UnitText
                              rightUnit="원"
                              align="right"
                              size="regular"
                              >625,500</UnitText
                            >
                          </div>
                          <div class="flex-box__cell">
                            <UiAccordionOpener />
                          </div>
                        </div>
                        <UiAccordionLayer>
                          <div :class="$style['insurance-contents']">
                            <KeyValueList margin="regular">
                              <KeyValueItem
                                :classNames="{
                                  item: 'text-body-3',
                                }"
                              >
                                <KeyValueTitle>부품</KeyValueTitle>
                                <KeyValueText>240,360 원</KeyValueText>
                              </KeyValueItem>
                              <KeyValueItem
                                :classNames="{
                                  item: 'text-body-3',
                                }"
                              >
                                <KeyValueTitle>공임</KeyValueTitle>
                                <KeyValueText>81,000 원</KeyValueText>
                              </KeyValueItem>
                              <KeyValueItem
                                :classNames="{
                                  item: 'text-body-3',
                                }"
                              >
                                <KeyValueTitle>도장</KeyValueTitle>
                                <KeyValueText>244,940 원</KeyValueText>
                              </KeyValueItem>
                              <KeyValueItem
                                :classNames="{
                                  item: 'text-body-3',
                                }"
                              >
                                <KeyValueTitle>보험비용</KeyValueTitle>
                                <KeyValueText>566,300 원</KeyValueText>
                              </KeyValueItem>
                            </KeyValueList>
                          </div>
                        </UiAccordionLayer>
                      </BasicBox>
                    </UiAccordionItem>
                  </UiAccordion>
                  <!-- // Case : 내역 있을 때 -->
                </UiTabPanel>
                <!-- // Tab : 내차보험 -->

                <!-- Tab : 타차보험 -->
                <UiTabPanel name="layerAutoUsedLoanAccidentHistoryTab001_002">
                  <!-- Case : 내역 없을 때 -->
                  <div :class="$style['empty']">
                    <p :class="$style['empty__text']">
                      검색된 결과가 없습니다.
                    </p>
                  </div>
                  <!-- // Case : 내역 없을 때 -->

                  <!-- Case : 내역 있을 때 -->
                  <UiAccordion class="reset-list">
                    <UiAccordionItem
                      v-for="i in 3"
                      :key="i"
                      class="row-margin-item-group"
                    >
                      <BasicBox>
                        <div class="flex-box">
                          <div class="flex-box__cell">
                            <div class="text-body-4 font-weight-light">
                              2022.08.11
                            </div>
                          </div>
                          <div class="flex-box__cell flex-1">
                            <UnitText
                              rightUnit="원"
                              align="right"
                              size="regular"
                              >625,500</UnitText
                            >
                          </div>
                          <div class="flex-box__cell">
                            <UiAccordionOpener />
                          </div>
                        </div>
                        <UiAccordionLayer>
                          <div :class="$style['insurance-contents']">
                            <KeyValueList margin="regular">
                              <KeyValueItem
                                :classNames="{
                                  item: 'text-body-3',
                                }"
                              >
                                <KeyValueTitle>부품</KeyValueTitle>
                                <KeyValueText>240,360 원</KeyValueText>
                              </KeyValueItem>
                              <KeyValueItem
                                :classNames="{
                                  item: 'text-body-3',
                                }"
                              >
                                <KeyValueTitle>공임</KeyValueTitle>
                                <KeyValueText>81,000 원</KeyValueText>
                              </KeyValueItem>
                              <KeyValueItem
                                :classNames="{
                                  item: 'text-body-3',
                                }"
                              >
                                <KeyValueTitle>도장</KeyValueTitle>
                                <KeyValueText>244,940 원</KeyValueText>
                              </KeyValueItem>
                              <KeyValueItem
                                :classNames="{
                                  item: 'text-body-3',
                                }"
                              >
                                <KeyValueTitle>보험비용</KeyValueTitle>
                                <KeyValueText>566,300 원</KeyValueText>
                              </KeyValueItem>
                            </KeyValueList>
                          </div>
                        </UiAccordionLayer>
                      </BasicBox>
                    </UiAccordionItem>
                  </UiAccordion>
                  <!-- // Case : 내역 있을 때 -->
                </UiTabPanel>
                <!-- // Tab : 타차보험 -->

                <!-- Tab : 타차피해 -->
                <UiTabPanel name="layerAutoUsedLoanAccidentHistoryTab001_003">
                  <!-- Case : 내역 없을 때 -->
                  <div :class="$style['empty']">
                    <p :class="$style['empty__text']">
                      검색된 결과가 없습니다.
                    </p>
                  </div>
                  <!-- // Case : 내역 없을 때 -->

                  <!-- Case : 내역 있을 때 -->
                  <UiAccordion class="reset-list">
                    <UiAccordionItem
                      v-for="i in 3"
                      :key="i"
                      class="row-margin-item-group"
                    >
                      <BasicBox>
                        <div class="flex-box">
                          <div class="flex-box__cell">
                            <div class="text-body-4 font-weight-light">
                              2022.08.11
                            </div>
                          </div>
                          <div class="flex-box__cell flex-1">
                            <UnitText
                              rightUnit="원"
                              align="right"
                              size="regular"
                              >625,500</UnitText
                            >
                          </div>
                          <div class="flex-box__cell">
                            <UiAccordionOpener />
                          </div>
                        </div>
                        <UiAccordionLayer>
                          <div :class="$style['insurance-contents']">
                            <KeyValueList margin="regular">
                              <KeyValueItem
                                :classNames="{
                                  item: 'text-body-3',
                                }"
                              >
                                <KeyValueTitle>부품</KeyValueTitle>
                                <KeyValueText>240,360 원</KeyValueText>
                              </KeyValueItem>
                              <KeyValueItem
                                :classNames="{
                                  item: 'text-body-3',
                                }"
                              >
                                <KeyValueTitle>공임</KeyValueTitle>
                                <KeyValueText>81,000 원</KeyValueText>
                              </KeyValueItem>
                              <KeyValueItem
                                :classNames="{
                                  item: 'text-body-3',
                                }"
                              >
                                <KeyValueTitle>도장</KeyValueTitle>
                                <KeyValueText>244,940 원</KeyValueText>
                              </KeyValueItem>
                              <KeyValueItem
                                :classNames="{
                                  item: 'text-body-3',
                                }"
                              >
                                <KeyValueTitle>보험비용</KeyValueTitle>
                                <KeyValueText>566,300 원</KeyValueText>
                              </KeyValueItem>
                            </KeyValueList>
                          </div>
                        </UiAccordionLayer>
                      </BasicBox>
                    </UiAccordionItem>
                  </UiAccordion>
                  <!-- // Case : 내역 있을 때 -->
                </UiTabPanel>
                <!-- // Tab : 타차피해 -->
              </UiTab>
            </section>
          </UiTabPanel>
          <!-- // Tab : 상세정보 -->
        </div>
      </UiTab>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoUsedLoanAccidentHistory.scss';
</style>
