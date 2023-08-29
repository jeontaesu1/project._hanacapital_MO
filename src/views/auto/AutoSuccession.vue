<script>
// AF_M07_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconDeposit from '@/assets/images/icon/deposit.svg?component';
import IconPerson from '@/assets/images/icon/person.svg?component';
import IconPhone from '@/assets/images/icon/phone.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconPersonalTerms from '@/assets/images/icon/personal-terms.svg?component';
import IconConsultation from '@/assets/images/icon/consultation.svg?component';
import IconCall from '@/assets/images/icon/call.svg?component';
import IconCalculate from '@/assets/images/icon/calculate.svg?component';
import IconDocumentComplete from '@/assets/images/icon/document-complete.svg?component';
import IconTakingOver from '@/assets/images/icon/taking-over.svg?component';
import IconAssignment from '@/assets/images/icon/assignment.svg?component';
import IconLogoMain from '@/assets/images/icon/logo-main.svg?component';
import ImgAutoLease from '@/assets/images/illustration/img-auto-lease.svg?component';
import ImgAutoRent from '@/assets/images/illustration/img-auto-rent.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    BasicHr,
    StickyBar,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    NoticeText,
    TextButton,

    IconDeposit,
    IconSend,
    IconPhone,
    IconPersonalTerms,
    IconCall,
    IconCalculate,
    IconConsultation,
    IconDocumentComplete,
    IconTakingOver,
    IconAssignment,
    IconPerson,
    IconLogoMain,
    ImgAutoLease,
    ImgAutoRent,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '오토승계');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => [
        {
          name: 'share',
          onClick: () => {
            alert('공유하기 클릭');
          },
        },
      ]);
      store.ui.header.setTheme(() => 'secondary');
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
      store.ui.header.setTheme();
    });
  },
};
</script>

<template>
  <PageContents>
    <UiTab v-slot="tabSlotProps">
      <div :class="$style['bg']">
        <StickyBar>
          <NavTab :useUiTab="true" :classNames="{ wrap: $style['top-tab'] }">
            <NavTabButton link="autoSuccessionTab001">리스승계</NavTabButton>
            <NavTabButton link="autoSuccessionTab002">렌트승계</NavTabButton>
          </NavTab>
        </StickyBar>

        <PageTextGroup>
          <PageMainText>
            원래 조건 그대로 모바일전용<br />
            <strong>간편 승계 서비스</strong>
          </PageMainText>
        </PageTextGroup>

        <div :class="[$style['illustration-img'], 'row-margin-contents']">
          <img src="@/assets/images/contents/img-change-auto-loan.png" alt="" />
        </div>

        <BasicBox theme="secondary">
          <div
            :class="[$style['product-detail'], $style['product-detail--small']]"
          >
            <ul :class="$style['product-detail__list']">
              <li
                v-if="tabSlotProps.activeName === 'autoSuccessionTab001'"
                :class="$style['product-detail__item']"
              >
                <div :class="$style['product-detail__icon']">
                  <IconPerson />
                </div>
                <div :class="$style['product-detail__block']">
                  <div :class="$style['product-detail__title']">리스</div>
                  <div :class="$style['product-detail__desc']">
                    양도인 · 양수인
                  </div>
                </div>
              </li>
              <li
                v-if="tabSlotProps.activeName === 'autoSuccessionTab002'"
                :class="$style['product-detail__item']"
              >
                <div :class="$style['product-detail__icon']">
                  <IconPerson />
                </div>
                <div :class="$style['product-detail__block']">
                  <div :class="$style['product-detail__title']">렌트</div>
                  <div :class="$style['product-detail__desc']">
                    양도인 · 양수인
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </BasicBox>
      </div>

      <!-- 리스승계 -->
      <UiTabPanel
        name="autoSuccessionTab001"
        :classNames="{
          panel: 'row-margin-container-medium row-margin-bottom-none',
        }"
      >
        <div class="row-margin-container-medium">
          <section class="row-margin-container-medium">
            <h3 class="text-title-1 font-weight-medium row-margin-item">
              리스승계란?
            </h3>
            <p class="text-body-3 color-gray-tertiary">
              계약상의 권리와 의무를 제3자에게 승계하고자 하는 경우 금융회사는
              신규로 리스계약을 체결하는 절차와 동일하게 금융회사가 정한
              심사기준에 따라 이를 승인합니다.
            </p>
            <NoticeText
              :classNames="{ wrap: 'row-margin-item color-gray-tertiary' }"
            >
              주의<br />
              심사비용 등 승계 조건에 따라 소요되는 비용으로 승계수수료가
              부과됩니다.
            </NoticeText>
            <div :class="[$style['illustration-img'], 'row-margin-item-group']">
              <ImgAutoLease />
            </div>
          </section>

          <section class="row-margin-container-medium">
            <h3 class="text-title-1 font-weight-medium row-margin-item">
              위약금 면제와 등록 비용 무료
            </h3>
            <p class="text-body-3 color-gray-tertiary">
              양도인과 양수인 모두에게 유리한 조건을 제공합니다.
            </p>
            <ul class="reset-list row-margin-contents">
              <li class="row-margin-item-group">
                <BasicBox theme="undenary">
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <IconAssignment :class="$style['icon']" />
                    </div>
                    <div class="flex-box__cell flex-box__cell--medium flex-1">
                      <h4
                        class="text-body-2 font-weight-medium row-margin-mini"
                      >
                        양도인
                      </h4>
                      <p class="text-body-5 color-gray">
                        리스 승계 시 위약금이 발생하지 않아<br />
                        유리합니다.
                      </p>
                    </div>
                  </div>
                </BasicBox>
              </li>
              <li class="row-margin-item-group">
                <BasicBox theme="undenary">
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <IconTakingOver :class="$style['icon']" />
                    </div>
                    <div class="flex-box__cell flex-box__cell--medium flex-1">
                      <h4
                        class="text-body-2 font-weight-medium row-margin-mini"
                      >
                        양수인
                      </h4>
                      <p class="text-body-5 color-gray">
                        초기비용이 상대적으로 저렴하고, 등록 비용이 별도로
                        발생하지 않아 유리합니다.
                      </p>
                    </div>
                  </div>
                </BasicBox>
              </li>
            </ul>
          </section>
        </div>

        <UiTab>
          <NavTab :useUiTab="true" :auto="true">
            <NavTabButton link="autoSuccessionTab001_001"
              >상품안내</NavTabButton
            >
            <NavTabButton link="autoSuccessionTab001_002"
              >진행절차</NavTabButton
            >
            <NavTabButton link="autoSuccessionTab001_003"
              >유의사항</NavTabButton
            >
          </NavTab>

          <!-- 상품안내 -->
          <UiTabPanel name="autoSuccessionTab001_001">
            <BasicBox theme="tertiary">
              <KeyValue align="left" margin="regular">
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>대상</KeyValueTitle>
                  <KeyValueText> 개인(사업자) 및 법인사업자 </KeyValueText>
                </KeyValueItem>

                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>한도</KeyValueTitle>
                  <KeyValueText>
                    <div>금융리스 : 양도인 적용금리 동일 적용</div>
                    <div
                      class="text-body-5 color-gray-tertiary row-margin-mini"
                    >
                      (동일조건승계)
                    </div>
                  </KeyValueText>
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
                <KeyValueTitle>연체이자율</KeyValueTitle>
                <KeyValueText>
                  <ul
                    :class="[
                      $style['basic-list'],
                      $style['basic-list--regular'],
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
                        <div>금융리스 : 약정이율+3%</div>
                        <div
                          class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
                        >
                          (법정최고금리 연20% 이내)
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
                        운용리스 : 연20%
                      </div>
                    </li>
                  </ul>
                </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>상환방법</KeyValueTitle>
                <KeyValueText>
                  <div>원리금균등상환</div>
                  <div
                    class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
                  >
                    월 리스트 자동이체(통장)
                  </div>
                </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>이자납부시기</KeyValueTitle>
                <KeyValueText>매월 후취</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>차량소유권</KeyValueTitle>
                <KeyValueText>
                  <div>하나캐피탈</div>
                  <div
                    class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
                  >
                    단, 이용자명의 시 저당설정 추가
                  </div>
                </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>수수료</KeyValueTitle>
                <KeyValueText>
                  <ul
                    :class="[
                      $style['basic-list'],
                      $style['basic-list--regular'],
                      $style['basic-list--medium-margin'],
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
                        <div>손해배상금</div>
                        <ol class="reset-list row-margin-mini">
                          <li class="row-margin-item-group">
                            <div
                              class="text-body-3 font-weight-medium color-green row-margin-mini"
                            >
                              주1) 중도해지손해배상금
                            </div>
                            <ul
                              :class="[
                                $style['basic-list'],
                                $style['basic-list--mini-margin'],
                              ]"
                            >
                              <li
                                :class="[
                                  $style['basic-list__item'],
                                  'text-body-4',
                                  'color-black',
                                  'font-weight-regular',
                                ]"
                              >
                                <div :class="$style['basic-list__symbol']">
                                  -
                                </div>
                                <div :class="$style['basic-list__content']">
                                  미회수원금 X 중도해지손해배상금률
                                </div>
                              </li>
                              <li
                                :class="[
                                  $style['basic-list__item'],
                                  'text-body-4',
                                  'color-black',
                                  'font-weight-regular',
                                ]"
                              >
                                <div :class="$style['basic-list__symbol']">
                                  -
                                </div>
                                <div :class="$style['basic-list__content']">
                                  미회수원금 X 최고요율(80)% X (잔여기간
                                  월수/리스기간 전체월수)
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li class="row-margin-item-group">
                            <div
                              class="text-body-3 font-weight-medium color-green row-margin-mini"
                            >
                              주2) 규정손해배상금(차랑인수-운용리스)
                            </div>
                            <ul
                              :class="[
                                $style['basic-list'],
                                $style['basic-list--mini-margin'],
                              ]"
                            >
                              <li
                                :class="[
                                  $style['basic-list__item'],
                                  'text-body-4',
                                  'color-black',
                                  'font-weight-regular',
                                ]"
                              >
                                <div :class="$style['basic-list__symbol']">
                                  -
                                </div>
                                <div :class="$style['basic-list__content']">
                                  미회수원금 X 규정손해배상금률
                                </div>
                              </li>
                              <li
                                :class="[
                                  $style['basic-list__item'],
                                  'text-body-4',
                                  'color-black',
                                  'font-weight-regular',
                                ]"
                              >
                                <div :class="$style['basic-list__symbol']">
                                  -
                                </div>
                                <div :class="$style['basic-list__content']">
                                  미회수원금 X 최고요율(20)% X (잔여기간
                                  월수/리스기간 전체월수)
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li class="row-margin-item-group">
                            <div
                              class="text-body-3 font-weight-medium color-green row-margin-mini"
                            >
                              주3) 규정손해배상금(차량인수-금융리스)
                            </div>
                            <ul
                              :class="[
                                $style['basic-list'],
                                $style['basic-list--mini-margin'],
                              ]"
                            >
                              <li
                                :class="[
                                  $style['basic-list__item'],
                                  'text-body-4',
                                  'color-black',
                                  'font-weight-regular',
                                ]"
                              >
                                <div :class="$style['basic-list__symbol']">
                                  -
                                </div>
                                <div :class="$style['basic-list__content']">
                                  미회수원금 X 규정손해배상금률
                                </div>
                              </li>
                              <li
                                :class="[
                                  $style['basic-list__item'],
                                  'text-body-4',
                                  'color-black',
                                  'font-weight-regular',
                                ]"
                              >
                                <div :class="$style['basic-list__symbol']">
                                  -
                                </div>
                                <div :class="$style['basic-list__content']">
                                  미회수원금 X 최고요율(3)% X (잔여기간
                                  월수/리스기간전체월수)
                                </div>
                              </li>
                            </ul>
                            <ul
                              :class="[$style['basic-list'], 'row-margin-mini']"
                            >
                              <li
                                :class="[
                                  $style['basic-list__item'],
                                  'font-weight-regular',
                                  'color-gray-tertiary',
                                ]"
                              >
                                <div :class="$style['basic-list__symbol']">
                                  ※
                                </div>
                                <div :class="$style['basic-list__content']">
                                  단, 금융리스의 경우 대부업법에서 정하는
                                  최고이자율을 초과하지 않는 범위로 합니다
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ol>
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
                        <div>승계수수료</div>
                        <div
                          class="text-body-3 font-weight-medium color-green row-margin-mini"
                        >
                          운용리스, 금융리스
                        </div>
                        <ul :class="[$style['basic-list'], 'row-margin-mini']">
                          <li
                            :class="[
                              $style['basic-list__item'],
                              'color-black',
                              'text-body-4',
                              'font-weight-regular',
                            ]"
                          >
                            <div :class="$style['basic-list__symbol']">-</div>
                            <div :class="$style['basic-list__content']">
                              <div>
                                미회수원금의 1%(승계수수료 최고 요율) X
                                (잔여기간 월수/리스기간 전체월수)
                              </div>
                              <div
                                class="text-body-5 color-gray-tertiary row-margin-mini"
                              >
                                (min : 500,000원, max : 900,000원)
                              </div>
                            </div>
                          </li>
                        </ul>
                        <ul :class="[$style['basic-list'], 'row-margin-mini']">
                          <li
                            :class="[
                              $style['basic-list__item'],
                              'text-body-5',
                              'font-weight-regular',
                              'color-gray-tertiary',
                            ]"
                          >
                            <div :class="$style['basic-list__symbol']">※</div>
                            <div :class="$style['basic-list__content']">
                              단, 금융리스의 경우 대부업법에서 정하는
                              최고이자율을 초과하지 않는 범위로 합니다.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  <ul :class="[$style['basic-list'], 'row-margin-item-group']">
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'text-body-5',
                        'font-weight-regular',
                        'color-gray-tertiary',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">※</div>
                      <div :class="$style['basic-list__content']">
                        주1) ‘중도해지손해배상금’은 고객이 계약의 중도해지를
                        이유로
                        <span class="color-green font-weight-medium"
                          >자동차를 반환하고자</span
                        >
                        할 때 ‘자동차리스 표준약관’ 제24조에 따라 금융회사에
                        발생한 손해를 배상하기 위하여 지급해야 하는 금액을
                        의미합니다.
                      </div>
                    </li>
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'text-body-5',
                        'font-weight-regular',
                        'color-gray-tertiary',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">※</div>
                      <div :class="$style['basic-list__content']">
                        주2) 규정손해배상금은 고객이 계약의 중도해지를 이유로
                        <span class="color-green font-weight-medium"
                          >자동차를 매입</span
                        >하고자 할 때 ‘자동차리스 표준약관’ 제23조에 따라
                        금융회사에 발생한 손해를 배상하기 위하여 지급해야 하는
                        금액을 의미합니다.
                      </div>
                    </li>
                  </ul>
                </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>기타비용</KeyValueTitle>
                <KeyValueText>
                  <div>저당설정(이용자명의 시 저당설정 추가)</div>
                  <ul
                    :class="[
                      $style['basic-list'],
                      $style['basic-list--mini-margin'],
                      'row-margin-item',
                    ]"
                  >
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'text-body-4',
                        'color-black',
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">-</div>
                      <div :class="$style['basic-list__content']">
                        설정금액: 대출원금의 0~100%
                      </div>
                    </li>
                  </ul>
                  <ul :class="[$style['basic-list'], 'row-margin-item']">
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'color-gray-tertiary',
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">※</div>
                      <div :class="$style['basic-list__content']">
                        근저당변경비용/해지비용 금융소비자 부담
                      </div>
                    </li>
                  </ul>
                </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대출부대비용</KeyValueTitle>
                <KeyValueText>
                  <p class="text-body-4 color-gray-tertiary font-weight-light">
                    (인지세는 하나캐피탈과 금융소비자가 50%씩 부담합니다.)
                  </p>
                  <ul
                    :class="[
                      $style['basic-list'],
                      $style['basic-list--mini-margin'],
                      'row-margin-item',
                    ]"
                  >
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'text-body-4',
                        'color-black',
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">-</div>
                      <div :class="$style['basic-list__content']">
                        인지세 1만원
                      </div>
                    </li>
                  </ul>
                </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>만기시 유의사항</KeyValueTitle>
                <KeyValueText>
                  <p class="row-margin-none">
                    만기 시 차량을 매입하실 경우 손님의 명의로 이전하는데 필요한
                    취득세 등의 제세공과금이 발생할 수 있으며, 이는 손님이
                    부담하셔야 합니다.
                  </p>
                  <p class="row-margin-item">
                    운용리스의 경우, 만기 차량 반납시사고이력 또는 약정주행거리
                    초과에 따라 별도의 감사비용이 추가로 발생 할 수 있습니다.
                  </p>
                  <p class="row-margin-none">
                    차량 반납시 유의사항을 꼭 확인하여 주시기 바랍니다.
                  </p>
                  <div class="inline-wrap row-margin-item-group">
                    <TextButton theme="secondary" :underline="true">
                      차량 반납 시 유의사항
                    </TextButton>
                  </div>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </UiTabPanel>
          <!-- // 상품안내 -->

          <!-- 진행절차 -->
          <UiTabPanel name="autoSuccessionTab001_002">
            <div :class="$style['step']">
              <ul :class="$style['step__list']">
                <li :class="$style['step__item']">
                  <div :class="$style['step__inner']">
                    <div :class="$style['step__contents']">
                      <div :class="$style['step__top']">
                        <div :class="$style['step__badge']">STEP 1</div>
                      </div>
                      <div :class="$style['step__text']">
                        홈페이지/모바일(웹/앱)을 통하여<br />
                        <strong>승계를 접수</strong>합니다.<br />
                        (신용조회동의)
                      </div>
                    </div>
                    <div :class="[$style['step__icon'], $style['icon-fill']]">
                      <IconPhone />
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
                        신청내용을 확인하여<br />
                        <strong>심사결과를 안내</strong> 드립니다.
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
                        양도인(승계전이용자)과 양수인(승계후이용자)의
                        <strong>승계 계약</strong>이 진행됩니다.<br />
                        (전자약정 가능)
                      </div>
                    </div>
                    <div :class="$style['step__icon']">
                      <IconPersonalTerms />
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
                        <div class="row-margin-item-small">
                          승계 수수료 등
                          <strong>승계 비용을 입금</strong> 합니다.
                        </div>
                        <ul :class="$style['basic-list']">
                          <li :class="$style['basic-list__item']">
                            <div :class="$style['basic-list__symbol']"></div>
                            <div :class="$style['basic-list__content']">
                              오토리스 : 자동차보험가입 확인
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div :class="$style['step__icon']">
                      <IconDeposit />
                    </div>
                  </div>
                </li>
                <li :class="$style['step__item']">
                  <div :class="$style['step__inner']">
                    <div :class="$style['step__contents']">
                      <div :class="$style['step__top']">
                        <div :class="$style['step__badge']">STEP 5</div>
                      </div>
                      <div :class="$style['step__text']">
                        계약사항에 대해<br />
                        <strong>이해하였음을 유선상 확인</strong>합니다.
                      </div>
                    </div>
                    <div :class="$style['step__icon']">
                      <IconCall />
                    </div>
                  </div>
                </li>
                <li :class="$style['step__item']">
                  <div :class="$style['step__inner']">
                    <div :class="$style['step__contents']">
                      <div :class="$style['step__top']">
                        <div :class="$style['step__badge']">STEP 6</div>
                      </div>
                      <div :class="$style['step__text']">
                        <strong>계약자 변경</strong>이 완료됩니다.
                      </div>
                    </div>
                    <div :class="$style['step__icon']">
                      <IconDocumentComplete />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </UiTabPanel>
          <!-- // 진행절차 -->

          <!-- 유의사항 -->
          <UiTabPanel name="autoSuccessionTab001_003">
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--regular-margin'],
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-3',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  계약을 체결하기 전에 상품 설명서와 약관을 확인하시기 바랍니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-3',
                  'font-weight-medium',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  상환능력에 비해 대출금이 과도할 경우 귀하의 신용등급 또는
                  개인신용평점이 하락할 수 있습니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-3',
                  'font-weight-medium',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  개인신용평점 하락 시 금융거래와 관련된 불이익이 발생할 수
                  있습니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-3',
                  'font-weight-medium',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  일정기간 원리금을 연체할 경우, 모든 원리금을 변제할 의무가
                  발생할 수 있습니다.
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
                  대출취급이 부적정한 경우(연체금 보유, 개인신용평점 낮음)
                  대출이 제한될 수 있습니다.
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
                  담보물건, 담보종류 등에 따라 대출조건이 차등 적용되며 담보물이
                  부적합할 경우 대출이 제한될 수 있습니다.
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
                  금융소비자의 개인신용평점에 따라 대출한도 및 금리가 차등
                  적용됩니다.
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
                  금융소비자는 해당상품에 대하여 설명을 받을 권리가 있으며, 그
                  설명을 듣고 내용을 충분히 이해한 후 거래하시기 바랍니다
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
                  금리인하요구권 및 대출계약 철회권에 대한 자세한 사항은 당사
                  홈페이지에서 확인하시기 바랍니다.
                </div>
              </li>
            </ul>
          </UiTabPanel>
          <!-- // 유의사항 -->
        </UiTab>
      </UiTabPanel>
      <!-- // 리스승계 -->

      <!-- 렌트승계 -->
      <UiTabPanel
        name="autoSuccessionTab002"
        :classNames="{
          panel: 'row-margin-container-medium row-margin-bottom-none',
        }"
      >
        <div class="row-margin-container-medium">
          <section class="row-margin-container-medium">
            <h3 class="text-title-1 font-weight-medium row-margin-item">
              렌트승계란?
            </h3>
            <p class="text-body-3 color-gray-tertiary">
              계약상의 권리와 의무를 제3자에게 승계하고자 하는 경우 금융회사는
              신규로 렌트계약을 체결하는 절차와 동일하게 금융회사가 정한
              심사기준에 따라 이를 승인합니다.
            </p>
            <NoticeText
              :classNames="{ wrap: 'row-margin-item color-gray-tertiary' }"
            >
              주의<br />
              심사비용 등 승계 조건에 따라 소요되는 비용으로 승계수수료가
              부과됩니다.
            </NoticeText>
            <div :class="[$style['illustration-img'], 'row-margin-item-group']">
              <ImgAutoRent />
            </div>
          </section>

          <section class="row-margin-container-medium">
            <h3 class="text-title-1 font-weight-medium row-margin-item">
              위약금 면제와 등록 비용 무료
            </h3>
            <p class="text-body-3 color-gray-tertiary">
              양도인과 양수인 모두에게 유리한 조건을 제공합니다.
            </p>
            <ul class="reset-list row-margin-contents">
              <li class="row-margin-item-group">
                <BasicBox theme="undenary">
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <IconAssignment :class="$style['icon']" />
                    </div>
                    <div class="flex-box__cell flex-box__cell--medium flex-1">
                      <h4
                        class="text-body-2 font-weight-medium row-margin-mini"
                      >
                        양도인
                      </h4>
                      <p class="text-body-5 color-gray">
                        렌트 승계 시 위약금이 발생하지 않아<br />
                        유리합니다.
                      </p>
                    </div>
                  </div>
                </BasicBox>
              </li>
              <li class="row-margin-item-group">
                <BasicBox theme="undenary">
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <IconTakingOver :class="$style['icon']" />
                    </div>
                    <div class="flex-box__cell flex-box__cell--medium flex-1">
                      <h4
                        class="text-body-2 font-weight-medium row-margin-mini"
                      >
                        양수인
                      </h4>
                      <p class="text-body-5 color-gray">
                        초기비용이 상대적으로 저렴하고, 등록 비용이 별도로
                        발생하지 않아 유리합니다.
                      </p>
                    </div>
                  </div>
                </BasicBox>
              </li>
            </ul>
          </section>
        </div>

        <UiTab>
          <NavTab :useUiTab="true" :auto="true">
            <NavTabButton link="autoSuccessionTab002_001"
              >상품안내</NavTabButton
            >
            <NavTabButton link="autoSuccessionTab002_002"
              >진행절차</NavTabButton
            >
            <NavTabButton link="autoSuccessionTab002_003"
              >유의사항</NavTabButton
            >
          </NavTab>

          <!-- 상품안내 -->
          <UiTabPanel name="autoSuccessionTab002_001">
            <BasicBox theme="tertiary">
              <KeyValue align="left" margin="regular">
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>대상</KeyValueTitle>
                  <KeyValueText> 개인(사업자) 및 법인사업자 </KeyValueText>
                </KeyValueItem>

                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>한도</KeyValueTitle>
                  <KeyValueText>
                    <div>금융리스 : 양도인 적용금리 동일 적용</div>
                    <div
                      class="text-body-5 color-gray-tertiary row-margin-mini"
                    >
                      (동일조건승계)
                    </div>
                  </KeyValueText>
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
                <KeyValueTitle>승계수수료</KeyValueTitle>
                <KeyValueText>
                  <div>33만원</div>
                  <div
                    class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
                  >
                    (VAT 포함)
                  </div>
                </KeyValueText>
              </KeyValueItem>

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
                        <div>
                          렌트료 포함 내역 : 취득세, 보험료, 자동차세, 정비료
                        </div>
                        <div
                          class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
                        >
                          (계약상품에 따라 보험이 안될 수 있음)
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
                          (양도인 통일 정비상품 적용)
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
                        만기 시 처리 : 계약 종료 후 고객의 의향에 따라 변환,
                        구매, 연장 가능
                      </div>
                    </li>
                  </ul>
                </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>연체이자율</KeyValueTitle>
                <KeyValueText>연20%</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>중도해지 수수료</KeyValueTitle>
                <KeyValueText>
                  <div>중도해지수수료율=잔여렌트료X해지위약금율</div>
                  <ul :class="[$style['basic-list'], 'row-margin-mini']">
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'font-weight-regular',
                        'color-gray-tertiary',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">※</div>
                      <div :class="$style['basic-list__content']">
                        잔여렌트료=앞면표기’월렌트료’X(미청구
                        잔여개월수-1개월)+해지시점 당월 잔여렌트료
                      </div>
                    </li>
                  </ul>
                </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle :classNames="{ title: 'row-margin-item' }"
                  >위약금률</KeyValueTitle
                >
                <KeyValueText>
                  <ul :class="$style['basic-list']">
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'color-black',
                        'text-body-4 ',
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">-</div>
                      <div :class="$style['basic-list__content']">
                        2년 이하 : 35%
                      </div>
                    </li>
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'color-black',
                        'text-body-4 ',
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">-</div>
                      <div :class="$style['basic-list__content']">
                        3년 이하 : 30%
                      </div>
                    </li>
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'color-black',
                        'text-body-4 ',
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">-</div>
                      <div :class="$style['basic-list__content']">
                        4년 이하 : 25%
                      </div>
                    </li>
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'color-black',
                        'text-body-4 ',
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">-</div>
                      <div :class="$style['basic-list__content']">
                        4년 초과 : 20%
                      </div>
                    </li>
                  </ul>
                </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>초과운행부담금</KeyValueTitle>
                <KeyValueText>
                  <div>[초과운행km-유예주행거리]Xkm당 초과운행부담금 부과</div>
                  <div
                    class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
                  >
                    (국산차 100원/수입차 300원)
                  </div>
                </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>반환지연금</KeyValueTitle>
                <KeyValueText>
                  <div>일렌트료 X 경과일수 X 200%</div>
                  <div
                    class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
                  >
                    (일렌트료=“월렌트료”/30)
                  </div>
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
                        차량반환 시 차량원상복구가 원칙이며, 이에 따른 비용이
                        발생할 수 있습니다. 자세한 내용은 홈페이지를
                        참고바랍니다.
                      </div>
                    </li>
                  </ul>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </UiTabPanel>
          <!-- // 상품안내 -->

          <!-- 진행절차 -->
          <UiTabPanel name="autoSuccessionTab002_002">
            <div :class="$style['step']">
              <ul :class="$style['step__list']">
                <li :class="$style['step__item']">
                  <div :class="$style['step__inner']">
                    <div :class="$style['step__contents']">
                      <div :class="$style['step__top']">
                        <div :class="$style['step__badge']">STEP 1</div>
                      </div>
                      <div :class="$style['step__text']">
                        홈페이지/모바일(웹/앱)을 통하여<br />
                        <strong>승계를 접수</strong>합니다.<br />
                        (신용조회동의)
                      </div>
                    </div>
                    <div :class="[$style['step__icon'], $style['icon-fill']]">
                      <IconPhone />
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
                        신청내용을 확인하여<br />
                        <strong>심사결과를 안내</strong> 드립니다.
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
                        양도인(승계전이용자)과 양수인(승계후이용자)의
                        <strong>승계 계약</strong>이 진행됩니다.<br />
                        (전자약정 가능)
                      </div>
                    </div>
                    <div :class="$style['step__icon']">
                      <IconPersonalTerms />
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
                        <div class="row-margin-item-small">
                          승계 수수료 등
                          <strong>승계 비용을 입금</strong> 합니다.
                        </div>
                        <ul :class="$style['basic-list']">
                          <li :class="$style['basic-list__item']">
                            <div :class="$style['basic-list__symbol']"></div>
                            <div :class="$style['basic-list__content']">
                              오토리스 : 자동차보험가입 확인
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div :class="$style['step__icon']">
                      <IconDeposit />
                    </div>
                  </div>
                </li>
                <li :class="$style['step__item']">
                  <div :class="$style['step__inner']">
                    <div :class="$style['step__contents']">
                      <div :class="$style['step__top']">
                        <div :class="$style['step__badge']">STEP 5</div>
                      </div>
                      <div :class="$style['step__text']">
                        계약사항에 대해<br />
                        <strong>이해하였음을 유선상 확인</strong>합니다.
                      </div>
                    </div>
                    <div :class="$style['step__icon']">
                      <IconCall />
                    </div>
                  </div>
                </li>
                <li :class="$style['step__item']">
                  <div :class="$style['step__inner']">
                    <div :class="$style['step__contents']">
                      <div :class="$style['step__top']">
                        <div :class="$style['step__badge']">STEP 6</div>
                      </div>
                      <div :class="$style['step__text']">
                        <strong>계약자 변경</strong>이 완료됩니다.
                      </div>
                    </div>
                    <div :class="$style['step__icon']">
                      <IconDocumentComplete />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </UiTabPanel>
          <!-- // 진행절차 -->

          <!-- 유의사항 -->
          <UiTabPanel name="autoSuccessionTab002_003">
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--regular-margin'],
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-3',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  계약을 체결하기 전에 상품 설명서와 약관을 확인하시기 바랍니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-3',
                  'font-weight-medium',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  일정기간 렌탈료를 연체할 경우, 모든 렌탈료(원리금)을 변제할
                  의무가 발생할 수 있습니다.
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
        </UiTab>
      </UiTabPanel>
      <!-- // 렌트승계 -->

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            준법심의필 22-1197<br />
            (2022.05.01~2023.04.30)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            여신금융협회 심의필 제 2022-C1h-03103호<br />
            (2022.05.01~2023.04.30)
          </div>
        </li>
      </ul>
    </UiTab>

    <div
      class="flex-box justify-conten-end row-margin-contents row-margin-bottom-none"
    >
      <div class="flex-box__cell">
        <IconLogoMain class="display-block" />
      </div>
    </div>

    <BasicHr
      type="contents"
      theme="quaternary"
      className="row-margin-container"
    />

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconConsultation /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__text']">상품 신청 안내</span>
              <span :class="$style['icon-list__title']">전화상담 신청 </span>
            </span>
          </button>
        </li>
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconCalculate /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__text']">월 납입금 계산</span>
              <span :class="$style['icon-list__title']">대출 계산기</span>
            </span>
          </button>
        </li>
      </ul>
    </div>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton theme="tertiary">양도인 신청</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton>양수인 신청</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AutoSuccession.scss';
</style>
