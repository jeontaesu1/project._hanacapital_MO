<script>
// AF_M43_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import ColorChip from '@/components/ui/imageData/ColorChip.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import SlideScroll from '@/components/ui/section/SlideScroll.vue';
import SlideScrollItem from '@/components/ui/section/SlideScrollItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconHot from '@/assets/images/icon/hot.svg?component';
import IconConsulting from '@/assets/images/icon/consulting.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconContract from '@/assets/images/icon/contract.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    CarThumb,
    ColorChip,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    SlideScroll,
    SlideScrollItem,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    StickyBar,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    BasicHr,

    IconHot,
    IconConsulting,
    IconSend,
    IconContract,
    IconCar,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '즉시출고 핫딜!');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <PageTextGroup>
      <PageMainText>
        바로 출고 가능한<br />
        렌터카 견적을 확인해보세요!
      </PageMainText>
    </PageTextGroup>

    <!-- Case : 즉시 출고 차량 없을 때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">준비 중 입니다.</p>
    </div>
    <!-- // Case : 즉시 출고 차량 없을 때 -->

    <div>
      <section class="row-margin-container-medium">
        <div class="flex-box align-items-end row-margin-item-group">
          <div class="flex-box__cell">
            <IconHot :class="$style['icon']" />
          </div>
          <div class="flex-box__cell flex-1 flex-box__cell--small-regular">
            <h2 class="text-title-2">현대 쏘나타</h2>
          </div>
        </div>

        <SlideScroll :hideScrollbar="false">
          <SlideScrollItem v-for="i in 5" :key="i">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h3 class="text-body-1 font-weight-medium multi-ellipsis">
                    뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
                  </h3>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <div :class="$style['slide-thumb']">
                    <CarThumb src="/images/_dummy/car-thumb.png" />
                  </div>
                </BasicBoxHeadRight>
              </BasicBoxHead>

              <KeyValue margin="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>외장</KeyValueTitle>
                  <KeyValueText>
                    <div class="flex-box justify-conten-end">
                      <div class="flex-box__cell flex-1">
                        <div class="ellipsis">아틸라스 화이트</div>
                      </div>
                      <div class="flex-box__cell">
                        <ColorChip
                          :colors="['248, 245, 245']"
                          size="small"
                        ></ColorChip>
                      </div>
                    </div>
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>내장</KeyValueTitle>
                  <KeyValueText>
                    <div class="flex-box justify-conten-end">
                      <div class="flex-box__cell flex-1">
                        <div class="ellipsis">네츄럴 베이지 / 다크 베이지</div>
                      </div>
                      <div class="flex-box__cell">
                        <ColorChip
                          :colors="['244, 238, 238', '225, 213, 213']"
                          size="small"
                        ></ColorChip>
                      </div>
                    </div>
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>옵션</KeyValueTitle>
                  <KeyValueText>
                    <div class="ellipsis">선루프1 외 2개</div>
                  </KeyValueText>
                </KeyValueItem>
              </KeyValue>

              <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                <ButtonListItem>
                  <BasicButton size="small"> 즉시출고 </BasicButton>
                </ButtonListItem>
              </ButtonList>
            </BasicBox>
          </SlideScrollItem>
        </SlideScroll>
      </section>

      <section class="row-margin-container-medium">
        <div class="flex-box row-margin-item-group">
          <div class="flex-box__cell flex-1 flex-box__cell--small-regular">
            <h2 class="text-title-2">현대 싼타페</h2>
          </div>
        </div>

        <SlideScroll :hideScrollbar="false">
          <SlideScrollItem v-for="i in 1" :key="i">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h3 class="text-body-1 font-weight-medium multi-ellipsis">
                    뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
                  </h3>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <div :class="$style['slide-thumb']">
                    <CarThumb src="/images/_dummy/car-thumb.png" />
                  </div>
                </BasicBoxHeadRight>
              </BasicBoxHead>

              <KeyValue margin="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>외장</KeyValueTitle>
                  <KeyValueText>
                    <div class="flex-box justify-conten-end">
                      <div class="flex-box__cell flex-1">
                        <div class="ellipsis">아틸라스 화이트</div>
                      </div>
                      <div class="flex-box__cell">
                        <ColorChip
                          :colors="['248, 245, 245']"
                          size="small"
                        ></ColorChip>
                      </div>
                    </div>
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>내장</KeyValueTitle>
                  <KeyValueText>
                    <div class="flex-box justify-conten-end">
                      <div class="flex-box__cell flex-1">
                        <div class="ellipsis">네츄럴 베이지 / 다크 베이지</div>
                      </div>
                      <div class="flex-box__cell">
                        <ColorChip
                          :colors="['244, 238, 238', '225, 213, 213']"
                          size="small"
                        ></ColorChip>
                      </div>
                    </div>
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>옵션</KeyValueTitle>
                  <KeyValueText>
                    <div class="ellipsis">선루프1 외 2개</div>
                  </KeyValueText>
                </KeyValueItem>
              </KeyValue>

              <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                <ButtonListItem>
                  <BasicButton size="small"> 즉시출고 </BasicButton>
                </ButtonListItem>
              </ButtonList>
            </BasicBox>
          </SlideScrollItem>
        </SlideScroll>
      </section>

      <BasicHr />

      <UiTab
        :classNames="{
          wrap: 'row-margin-container-medium row-margin-bottom-none',
        }"
      >
        <StickyBar>
          <NavTab :useUiTab="true" :auto="true">
            <NavTabButton link="autoHotDealTab001">상품안내</NavTabButton>
            <NavTabButton link="autoHotDealTab002">진행절차</NavTabButton>
            <NavTabButton link="autoHotDealTab003">유의사항</NavTabButton>
          </NavTab>
        </StickyBar>

        <!-- 상품안내 -->
        <UiTabPanel name="autoHotDealTab001">
          <BasicBox theme="tertiary">
            <KeyValue align="left" margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>대상</KeyValueTitle>
                <KeyValueText>개인(사업자) 및 법인사업자</KeyValueText>
              </KeyValueItem>

              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>기간</KeyValueTitle>
                <KeyValueText>12개월 ~ 60개월</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>

          <KeyValue
            direction="vertical"
            :classNames="{
              wrap: 'row-margin-contents',
            }"
          >
            <KeyValueItem>
              <KeyValueTitle>취급조건</KeyValueTitle>
              <KeyValueText>
                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--regular'],
                    $style['basic-list--mini-margin'],
                  ]"
                >
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'color-black',
                      'text-body-2 ',
                      'font-weight-regular',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      계약기간 : 12개월 ~ 60개월
                    </div>
                  </li>
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'color-black',
                      'text-body-2 ',
                      'font-weight-regular',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      <div>계약가능차종 : 승용차 전 모델</div>
                      <div
                        class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
                      >
                        (국산차, 수입차)
                      </div>
                    </div>
                  </li>
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'color-black',
                      'text-body-2 ',
                      'font-weight-regular',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      렌탈료 납부시기 : 매월 후취
                    </div>
                  </li>
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'color-black',
                      'text-body-2 ',
                      'font-weight-regular',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      <div>
                        렌트료 포함 내역 : 취득세, 보험료, 자동차세, 정비료
                      </div>
                      <div
                        class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
                      >
                        (계약상품에 따라 포함이 안될 수 있음)
                      </div>
                    </div>
                  </li>
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'color-black',
                      'text-body-2 ',
                      'font-weight-regular',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      <div>정비상품 : Special, Self 상품</div>
                      <div
                        class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
                      >
                        (운행패턴에 따라 고객 선택)
                      </div>
                    </div>
                  </li>
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'color-black',
                      'text-body-2 ',
                      'font-weight-regular',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      만기 시 처리 : 계약 종료 후 고객의 의향에 따라 반환, 구매,
                      연장 가능
                    </div>
                  </li>
                </ul>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>중도해지수수료</KeyValueTitle>
              <KeyValueText>
                <p class="text-body-2 font-weight-regular row-margin-item">
                  중도해지수수료율 = 잔여렌트료 X 해지위약금율
                </p>

                <ul :class="$style['basic-list']">
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'color-gray-tertiary',
                      'font-weight-regular',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']">※</div>
                    <div :class="$style['basic-list__content']">잔여렌트료</div>
                  </li>
                </ul>

                <div :class="[$style['basic-table'], 'row-margin-mini']">
                  <table>
                    <colgroup>
                      <col style="width: 120px" />
                      <col />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>차량인도일로부터</th>
                        <th>위약금률</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>2년이하</th>
                        <td>35%</td>
                      </tr>
                      <tr>
                        <th>3년이하</th>
                        <td>30%</td>
                      </tr>
                      <tr>
                        <th>4년이하</th>
                        <td>25%</td>
                      </tr>
                      <tr>
                        <th>4년초과</th>
                        <td>20%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ul :class="[$style['basic-list'], 'row-margin-item-small']">
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'color-gray-tertiary',
                      'font-weight-regular',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']">※</div>
                    <div :class="$style['basic-list__content']">
                      잔여렌트료 = 앞면표기 “월렌트료” X (미청구 잔여개월 수 – 1
                      개월) + 해지시점 당월
                    </div>
                  </li>
                </ul>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>반환지연금</KeyValueTitle>
              <KeyValueText>
                <div>일렌트료 X 경과일수 X 200%</div>
                <div
                  class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
                >
                  (일렌트료=앞면표기 “월렌트료”/30)
                </div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>초과운행부담금</KeyValueTitle>
              <KeyValueText>
                <div>[초과운행km-유예주행거리] X km당 초과운행부담금</div>
                <ul :class="[$style['basic-list'], 'row-margin-mini']">
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'font-weight-regular',
                      'color-gray-tertiary',
                      'text-body-5',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']">※</div>
                    <div :class="$style['basic-list__content']">
                      km당 초과운행부담금 : 국산차 100원 / 수입차 300원
                    </div>
                  </li>
                </ul>
                <div
                  class="text-body-5 font-weight-regular color-gray-tertiary"
                >
                  (유예주행거리 : 1,000km)
                </div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>승계수수료</KeyValueTitle>
              <KeyValueText>30만원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </UiTabPanel>
        <!-- // 상품안내 -->

        <!-- 진행절차 -->
        <UiTabPanel name="autoHotDealTab002">
          <div :class="$style['step']">
            <ul :class="$style['step__list']">
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__top']">
                      <div :class="$style['step__badge']">STEP 1</div>
                    </div>
                    <div :class="$style['step__text']">
                      <strong>장기렌터카 상담</strong>을 신청합니다.
                    </div>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconConsulting />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__top']">
                      <div :class="$style['step__badge']">STEP 2</div>
                    </div>
                    <div :class="$style['step__text']">
                      신청정보 확인하여 <strong>결과를 안내</strong>해 드립니다.
                    </div>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconSend />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__top']">
                      <div :class="$style['step__badge']">STEP 3</div>
                    </div>
                    <div :class="$style['step__text']">
                      <strong>온라인약정 또는 오프라인 약정</strong>을
                      진행합니다.
                    </div>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconContract />
                  </div>
                </div>
              </li>
              <li :class="$style['step__item']">
                <div :class="$style['step__inner']">
                  <div :class="$style['step__contents']">
                    <div :class="$style['step__top']">
                      <div :class="$style['step__badge']">STEP 4</div>
                    </div>
                    <div :class="$style['step__text']">
                      고객님께 <strong>차량을 인도</strong>해 드립니다.
                    </div>
                  </div>
                  <div :class="$style['step__icon']">
                    <IconCar />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </UiTabPanel>
        <!-- // 진행절차 -->

        <!-- 유의사항 -->
        <UiTabPanel name="autoHotDealTab003">
          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                렌터카 계약을 체결하기 전에 상품 설명서와 약관을 확인하시기
                바랍니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                일정기간 렌탈료를 연체할 경우, 모든 렌탈료(원리금)를 변제할
                의무가 발생할 수 있습니다. (연체이자 : 년 20%)
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                렌터카 취급이 부적정한 경우(연체금 보유, 개인신용평점 낮음)
                취급이 제한될 수 있습니다.
              </div>
            </li>
          </ul>
        </UiTabPanel>
        <!-- // 유의사항 -->

        <ul :class="[$style['basic-list'], 'row-margin-contents']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              준법심의필 23-7<br />
              (2023.01.28~2024.01.27)
            </div>
          </li>
        </ul>
      </UiTab>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AutoHotDeal.scss';
</style>
