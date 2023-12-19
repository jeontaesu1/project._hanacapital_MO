<script>
// AF_M02_p001
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
import TextButton from '@/components/ui/button/TextButton.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';
import TopButton from '@/components/ui/button/TopButton.vue';

import IconPerson from '@/assets/images/icon/person.svg?component';
import IconRate from '@/assets/images/icon/rate.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';
import IconDate from '@/assets/images/icon/date.svg?component';
import IconCommission from '@/assets/images/icon/commission.svg?component';
import IconContract from '@/assets/images/icon/contract.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconConsulting from '@/assets/images/icon/consulting.svg?component';
import IconConsultation from '@/assets/images/icon/consultation.svg?component';
import IconLogoMain from '@/assets/images/icon/logo-main.svg?component';
import ImgZeroCommission from '@/assets/images/illustration/img-zero-commission.svg?component';
import ImgSimplePay from '@/assets/images/illustration/img-simple-pay.svg?component';

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
    TextButton,
    BottomSticky,
    TopButton,
    IconPerson,
    IconRate,
    IconCar,
    IconDate,
    IconCommission,
    IconSend,
    IconContract,
    IconConsultation,
    IconConsulting,
    IconLogoMain,
    ImgZeroCommission,
    ImgSimplePay,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '오토리스');
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
    <div :class="$style['bg']">
      <PageTextGroup>
        <PageMainText>
          빠른견적! 저렴한 견적!<br />
          하나캐피탈 다이렉트 오토리스!
        </PageMainText>
      </PageTextGroup>

      <div :class="[$style['illustration-img'], 'row-margin-contents']">
        <img src="@/assets/images/contents/img-direct-autolease.png" alt="" />
      </div>

      <BasicBox theme="secondary">
        <div
          :class="[$style['product-detail'], $style['product-detail--small']]"
        >
          <ul :class="$style['product-detail__list']">
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconPerson />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">대상</div>
                <div :class="$style['product-detail__desc']">
                  개인(개인사업자) 및 법인
                </div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconRate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">금융리스</div>
                <div :class="[$style['product-detail__desc'], 'underline']">
                  연 6.3%~9.1%
                </div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconDate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">기간</div>
                <div :class="$style['product-detail__desc']">12개월~60개월</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconCommission />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">상환방법</div>
                <div :class="$style['product-detail__desc']">매월후취</div>
              </div>
            </li>
          </ul>
        </div>
      </BasicBox>
    </div>

    <div class="row-margin-container-medium">
      <section class="row-margin-container-medium">
        <h3 class="text-title-1 font-weight-medium row-margin-item">
          리스 초기비용 0원!
        </h3>
        <p class="text-body-3 color-gray-tertiary">
          취득세 공채 비용을 리스료에 포함 할 수 있어 차량구매 초기비용 절감!
        </p>
        <div :class="[$style['illustration-img'], 'row-margin-item-group']">
          <ImgZeroCommission />
        </div>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-1 font-weight-medium row-margin-item">
          간편하게 바로결제!
        </h3>
        <p class="text-body-3 color-gray-tertiary">
          차량 출고일에 맞춘 차량대금결제!<br />
          차량금액만 알려주세요!
        </p>
        <div :class="[$style['illustration-img'], 'row-margin-item-group']">
          <ImgSimplePay />
        </div>
      </section>
    </div>

    <UiTab>
      <StickyBar>
        <NavTab :useUiTab="true" :auto="true">
          <NavTabButton link="autoLeaseTab001">상품안내</NavTabButton>
          <NavTabButton link="autoLeaseTab002">진행절차</NavTabButton>
        </NavTab>
      </StickyBar>

      <!-- 상품안내 -->
      <UiTabPanel name="autoLeaseTab001">
        <BasicBox theme="tertiary">
          <KeyValue align="left" margin="regular" size="regular-small">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대상</KeyValueTitle>
              <KeyValueText>개인(사업자) 및 법인사업자</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>금융리스</KeyValueTitle>
              <KeyValueText>
                <div class="font-weight-bold underline">연 6.3% ~ 9.1%</div>
                <div
                  class="text-body-5 color-gray-tertiary font-weight-bold underline row-margin-mini"
                >
                  (금융소비자의 개인신용평점에 따라 차등 적용)
                </div>
              </KeyValueText>
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
            <KeyValueTitle>상환방법</KeyValueTitle>
            <KeyValueText>원리금균등분할상환</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>이자납부시기</KeyValueTitle>
            <KeyValueText>매월 후취</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>차량소유권</KeyValueTitle>
            <KeyValueText
              ><div>하나캐피탈</div>
              <div
                class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
              >
                (단, 이용자명의 시 저당설정 추가)
              </div>
            </KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>수수료</KeyValueTitle>
            <KeyValueText>
              <ul
                :class="[$style['basic-list'], $style['basic-list--regular']]"
              >
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-2',
                    'font-weight-regular',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    <div>규정손해배상금</div>
                    <div
                      :class="[
                        $style['contents-list'],
                        $style['table-contents-list'],
                        'row-margin-item',
                      ]"
                    >
                      <ol
                        :class="[
                          $style['contents-list__list'],
                          $style['contents-list__list--quinary'],
                        ]"
                      >
                        <li :class="$style['contents-list__item']">
                          <div :class="$style['contents-list__head']">
                            <div :class="$style['contents-list__symbol']">
                              주1
                            </div>
                            <div :class="$style['contents-list__title']">
                              <div>중도해지손해배상금</div>
                            </div>
                          </div>
                          <ul
                            :class="[$style['basic-list'], 'row-margin-item']"
                          >
                            <li
                              :class="[
                                $style['basic-list__item'],
                                'text-body-4',
                                'font-weight-regular',
                                'color-black',
                              ]"
                            >
                              <div :class="$style['basic-list__symbol']">-</div>
                              <div :class="$style['basic-list__content']">
                                미회수원금 X 중도해지손해배상금
                              </div>
                            </li>
                            <li
                              :class="[
                                $style['basic-list__item'],
                                'text-body-4',
                                'font-weight-regular',
                                'color-black',
                              ]"
                            >
                              <div :class="$style['basic-list__symbol']">-</div>
                              <div :class="$style['basic-list__content']">
                                미회수원금 X 최고요율(80)% X (잔여기간
                                월수/리스기간 전체월수)
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li :class="$style['contents-list__item']">
                          <div :class="$style['contents-list__head']">
                            <div :class="$style['contents-list__symbol']">
                              주2
                            </div>
                            <div :class="$style['contents-list__title']">
                              <div>규정손해배상금(차량인수-운용리스)</div>
                            </div>
                          </div>
                          <ul
                            :class="[$style['basic-list'], 'row-margin-item']"
                          >
                            <li
                              :class="[
                                $style['basic-list__item'],
                                'text-body-4',
                                'font-weight-regular',
                                'color-black',
                              ]"
                            >
                              <div :class="$style['basic-list__symbol']">-</div>
                              <div :class="$style['basic-list__content']">
                                미회수원금 X 규정손해배상금률
                              </div>
                            </li>
                            <li
                              :class="[
                                $style['basic-list__item'],
                                'text-body-4',
                                'font-weight-regular',
                                'color-black',
                              ]"
                            >
                              <div :class="$style['basic-list__symbol']">-</div>
                              <div :class="$style['basic-list__content']">
                                미회수원금 X 최고요율(20)% X (잔여기간
                                월수/리스기간 전체월수)
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li :class="$style['contents-list__item']">
                          <div :class="$style['contents-list__head']">
                            <div :class="$style['contents-list__symbol']">
                              주3
                            </div>
                            <div :class="$style['contents-list__title']">
                              <div>규정손해배상금(차량인수-금융리스)</div>
                            </div>
                          </div>
                          <ul
                            :class="[$style['basic-list'], 'row-margin-item']"
                          >
                            <li
                              :class="[
                                $style['basic-list__item'],
                                'text-body-4',
                                'font-weight-regular',
                                'color-black',
                              ]"
                            >
                              <div :class="$style['basic-list__symbol']">-</div>
                              <div :class="$style['basic-list__content']">
                                미회수원금 X 규정손해배상금률
                              </div>
                            </li>
                            <li
                              :class="[
                                $style['basic-list__item'],
                                'text-body-4',
                                'font-weight-regular',
                                'color-black',
                              ]"
                            >
                              <div :class="$style['basic-list__symbol']">-</div>
                              <div :class="$style['basic-list__content']">
                                미회수원금 X 최고요율(3)% X (잔여기간
                                월수/리스기간 전체월수)
                              </div>
                            </li>
                          </ul>
                          <ul
                            :class="[
                              $style['basic-list'],
                              $style['basic-list--small-margin'],
                              'row-margin-item',
                            ]"
                          >
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
                        </li>
                      </ol>
                    </div>
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-2',
                    'font-weight-regular',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    <div>승계수수료</div>
                    <div
                      :class="[
                        $style['contents-list'],
                        $style['table-contents-list'],
                        'row-margin-item',
                      ]"
                    >
                      <ol
                        :class="[
                          $style['contents-list__list'],
                          $style['contents-list__list--quinary'],
                        ]"
                      >
                        <li :class="$style['contents-list__item']">
                          <div :class="$style['contents-list__head']">
                            <div :class="$style['contents-list__symbol']">
                              1
                            </div>
                            <div :class="$style['contents-list__title']">
                              <div>운용리스, 금융리스</div>
                            </div>
                          </div>
                          <ul
                            :class="[$style['basic-list'], 'row-margin-item']"
                          >
                            <li
                              :class="[
                                $style['basic-list__item'],
                                'text-body-4',
                                'font-weight-regular',
                                'color-black',
                              ]"
                            >
                              <div :class="$style['basic-list__symbol']">-</div>
                              <div :class="$style['basic-list__content']">
                                미회수원금의 1%(승계수수료 최고 요율) X
                                (잔여기간 월수/리스기간 전체 월수) (min :
                                500,000원, max : 900,000원)
                              </div>
                            </li>
                          </ul>
                          <ul
                            :class="[
                              $style['basic-list'],
                              $style['basic-list--small-margin'],
                              'row-margin-item',
                            ]"
                          >
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
                        </li>
                      </ol>
                    </div>
                  </div>
                </li>
              </ul>
              <ul
                :class="[
                  $style['basic-list'],
                  $style['basic-list--regular'],
                  $style['basic-list--regular-margin'],
                  'row-margin-item',
                ]"
              >
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-3',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    주1) ‘중도해지손해배상금’은 고객이 계약의 중도해지를 이유로
                    <strong class="font-weight-regular">자동차를 반환</strong
                    >하고자 할 때 ‘자동차리스 표준약관’ 제24조에 따라 금융회사에
                    발생한 손해를 배상하기 위하여 지급해야 하는 금액을
                    의미합니다.
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-3',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    주2) 규정손해배상금은 고객이 계약의 중도해지를 이유로
                    <strong class="font-weight-regular">자동차를 매입</strong
                    >하고자 할 때 ‘자동차리스 표준약관’ 제23조에 따라 금융회사에
                    발생한 손해를 배상하기 위하여 지급해야 하는 금액을
                    의미합니다.
                  </div>
                </li>
              </ul>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>반환지연금</KeyValueTitle>
            <KeyValueText
              >[일 리스료 + (일 리스료 X 반환지원금율 100%)] X
              경과일수</KeyValueText
            >
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>가치감가금액</KeyValueTitle>
            <KeyValueText>
              반환시점의 자동차의 기대가치(혹은 중고차 시세) X 감가율(1~14%)의
              합
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>초과운행부담금</KeyValueTitle>
            <KeyValueText>초과운행 KM X KM 당 초과운행료</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>초과운행료</KeyValueTitle>
            <KeyValueText>수입차 300원, 국산차 100원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>연체이자율</KeyValueTitle>
            <KeyValueText>
              <div class="font-weight-bold underline">
                금융리스 (약정이율+3%,법정최고금리 연 20%이내), 운용리스 연 20%
              </div>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>기타비용</KeyValueTitle>
            <KeyValueText>
              <div>저당설정(이용자명의 시 저당설정 추가)</div>
              <ul :class="[$style['basic-list'], 'row-margin-item']">
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-5',
                    'color-black',
                    'font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']">-</div>
                  <div :class="$style['basic-list__content']">
                    <div>설정금액: 대출원금의 0~100%</div>
                  </div>
                </li>
              </ul>
              <ul
                :class="[
                  $style['basic-list'],
                  $style['basic-list--small-margin'],
                ]"
              >
                <li
                  :class="[
                    $style['basic-list__item'],
                    'font-weight-regular',
                    'color-gray-tertiary',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']">※</div>
                  <div :class="$style['basic-list__content']">
                    근저당설정은 개인신용평점에 따라 차등 적용
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'font-weight-regular',
                    'color-gray-tertiary',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']">※</div>
                  <div :class="$style['basic-list__content']">
                    근저당설정비용 당사 부담 / 해지비용 금융소비자 부담
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

              <ul :class="[$style['basic-list'], 'row-margin-item']">
                <li
                  :class="[
                    $style['basic-list__item'],
                    'color-black',
                    'font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']">-</div>
                  <div :class="$style['basic-list__content']">인지세 1만원</div>
                </li>
              </ul>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>만기시 유의사항</KeyValueTitle>
            <KeyValueText>
              <ul
                :class="[$style['basic-list'], $style['basic-list--regular']]"
              >
                <li
                  :class="[
                    $style['basic-list__item'],
                    'color-black',
                    'text-body-2',
                    'font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    만기 시 차량을 매입하실 경우 손님의 명의로 이전하는데 필요한
                    취득세 등의 제세공과금이 발생할 수 있으며, 이는 손님이
                    부담하셔야 합니다.
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'color-black',
                    'text-body-2',
                    'font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    운용리스의 경우, 만기 차량 반납시사고이력 또는 약정주행거리
                    초과에 따라 별도의 감사비용이 추가로 발생 할 수 있습니다.
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'color-black',
                    'text-body-2',
                    'font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    차량 반납시 유의사항을 꼭 확인하여 주시기 바랍니다.
                  </div>
                </li>
              </ul>

              <div class="inline-wrap row-margin-contents">
                <TextButton theme="secondary" :underline="true">
                  차량 반납 시 유의사항
                </TextButton>
              </div>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>유의사항</KeyValueTitle>
            <KeyValueText>
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
                    계약을 체결하기 전에 상품 설명서와 약관을 확인하시기
                    바랍니다.
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
                    리스취급이 부적정한 경우(연체금 보유, 개인신용평점 낮음)
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
                    담보물건, 담보종류 등에 따라 대출조건이 차등 적용되며
                    담보물이 부적합할 경우 대출이 제한될 수 있습니다.
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
                    금융소비자의 신용등급 또는 개인신용평점에 따라 대출한도 및
                    금리가 차등 적용됩니다.
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
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </UiTabPanel>
      <!-- // 상품안내 -->

      <!-- 진행절차 -->
      <UiTabPanel name="autoLeaseTab002">
        <div :class="$style['step']">
          <ul :class="$style['step__list']">
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 1</div>
                  </div>
                  <div :class="$style['step__text']">
                    <strong>오토리스 상담</strong>을 신청합니다.
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
                    신청내용 확인하여 <strong>결과를 통보</strong>합니다.
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
                    계약 시 <strong>온라인이나 오프라인 약정</strong>을<br />
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
                    차량을 구입 후 <strong>고객님께 인도</strong>해<br />
                    드립니다.
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

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            준법심의필 23-363<br />
            (2023.10.16 ~ 2024.10.15)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            여신금융협회 심의필 제2023-C1h-11524호<br />
            (2023.10.16 ~ 2024.10.15)
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
              <span :class="$style['icon-list__title']">전화 상담 신청</span>
            </span>
          </button>
        </li>
      </ul>
    </div>

    <div :class="$style['top-button-wrap']">
      <TopButton />
    </div>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>견적조회</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AutoLease.scss';
</style>
