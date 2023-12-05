<script>
// AF_M00_l008
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import RoundButton from '@/components/ui/button/RoundButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import RoundTab from '@/components/ui/tab/RoundTab.vue';
import RoundTabButton from '@/components/ui/tab/RoundTabButton.vue';

import IconTell from '@/assets/images/icon/tell.svg?component';
import IconCarRent from '@/assets/images/icon/car-rent.svg?component';
import IconAutoLease from '@/assets/images/icon/auto-lease.svg?component';
import iconInformation from '@/assets/images/icon/information.svg?component';
import IconDropdown from '@/assets/images/icon/dropdown.svg?component';
import IconConsulting from '@/assets/images/icon/consulting.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconContract from '@/assets/images/icon/contract.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    RoundButton,
    PageTextGroup,
    PageMainText,
    UnitText,
    TextButton,
    RoundStatus,
    BasicHr,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    BasicButton,
    UiTab,
    UiTabPanel,
    RoundTab,
    RoundTabButton,

    IconTell,
    IconCarRent,
    IconAutoLease,
    iconInformation,
    IconDropdown,
    IconConsulting,
    IconSend,
    IconContract,
    IconCar,
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

      <div :class="$style['car-info']">
        <div :class="$style['car-info__inner']">
          <div>
            <div class="text-body-4 font-weight-light">현대</div>
            <h3 class="text-body-1 font-weight-medium row-margin-mini">
              캐스퍼
            </h3>
            <div class="text-body-4 color-gray row-margin-small">
              인스퍼레이션 + 캐스퍼 액티브Ⅱ
            </div>
            <div class="row-margin-item">
              <UnitText rightUnit="원"><strong>30,324,230</strong></UnitText>
            </div>
          </div>
        </div>
      </div>

      <PageTextGroup>
        <PageMainText>
          상담을 원하시는<br />
          상품을 선택해 주세요
        </PageMainText>
      </PageTextGroup>

      <div :class="$style['icon-list']">
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']">
                <IconAutoLease />
              </span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__text']"
                  >다양한 혜택, 편리한 내차 이용</span
                >
                <span :class="$style['icon-list__title']">오토리스</span>
              </span>
              <span :class="$style['icon-list__etc']">
                <RoundStatus
                  :classNames="{ wrap: 'display-block' }"
                  theme="secondary"
                >
                  12~60개월
                </RoundStatus>
              </span>
            </button>
          </li>
          <li :class="$style['icon-list__item']">
            <RouterLink to="" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconCarRent /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__text']"
                  >부담은 줄이고, 편리함은 늘리고</span
                >
                <span :class="$style['icon-list__title']">장기렌트카</span>
              </span>
              <span :class="$style['icon-list__etc']">
                <RoundStatus
                  :classNames="{ wrap: 'display-block' }"
                  theme="secondary"
                >
                  12~60개월
                </RoundStatus>
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <div
        class="inline-wrap align-right row-margin-contents row-margin-bottom-none"
      >
        <TextButton
          theme="quaternary"
          :classNames="{ wrap: 'font-weight-regular' }"
        >
          리스와 렌트 차이가 궁금하다면?
          <template v-slot:rightIcon>
            <iconInformation />
          </template>
        </TextButton>
      </div>

      <BasicHr className="row-margin-container-medium" />

      <section>
        <h3 class="text-title-2 row-margin-contents">상품안내</h3>

        <UiAccordion tagName="div">
          <UiAccordionItem
            tagName="section"
            v-slot="accordionItemSlotProps"
            class="row-margin-contents-group"
          >
            <h4 class="text-body-2 row-margin-item-medium">오토리스</h4>

            <!-- DD : AF_M02_p001 동일 내용 -->

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

            <UiAccordionLayer>
              <div :class="$style['accordion-contents']">
                <UiTab>
                  <RoundTab
                    :useUiTab="true"
                    :classNames="{ wrap: 'row-margin-contents-group' }"
                  >
                    <RoundTabButton link="layerAutoEstimateSelectProduct_001">
                      상품안내
                    </RoundTabButton>
                    <RoundTabButton link="layerAutoEstimateSelectProduct_002">
                      진행절차
                    </RoundTabButton>
                  </RoundTab>

                  <!-- 상품안내 -->
                  <UiTabPanel name="layerAutoEstimateSelectProduct_001">
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
                            :class="[
                              $style['basic-list'],
                              $style['basic-list--regular'],
                            ]"
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
                                      <div
                                        :class="$style['contents-list__head']"
                                      >
                                        <div
                                          :class="
                                            $style['contents-list__symbol']
                                          "
                                        >
                                          주1
                                        </div>
                                        <div
                                          :class="
                                            $style['contents-list__title']
                                          "
                                        >
                                          <div>중도해지손해배상금</div>
                                        </div>
                                      </div>
                                      <ul
                                        :class="[
                                          $style['basic-list'],
                                          'row-margin-item',
                                        ]"
                                      >
                                        <li
                                          :class="[
                                            $style['basic-list__item'],
                                            'text-body-4',
                                            'font-weight-regular',
                                            'color-black',
                                          ]"
                                        >
                                          <div
                                            :class="
                                              $style['basic-list__symbol']
                                            "
                                          >
                                            -
                                          </div>
                                          <div
                                            :class="
                                              $style['basic-list__content']
                                            "
                                          >
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
                                          <div
                                            :class="
                                              $style['basic-list__symbol']
                                            "
                                          >
                                            -
                                          </div>
                                          <div
                                            :class="
                                              $style['basic-list__content']
                                            "
                                          >
                                            미회수원금 X 최고요율(80)% X
                                            (잔여기간 월수/리스기간 전체월수)
                                          </div>
                                        </li>
                                      </ul>
                                    </li>
                                    <li :class="$style['contents-list__item']">
                                      <div
                                        :class="$style['contents-list__head']"
                                      >
                                        <div
                                          :class="
                                            $style['contents-list__symbol']
                                          "
                                        >
                                          주2
                                        </div>
                                        <div
                                          :class="
                                            $style['contents-list__title']
                                          "
                                        >
                                          <div>
                                            규정손해배상금(차량인수-운용리스)
                                          </div>
                                        </div>
                                      </div>
                                      <ul
                                        :class="[
                                          $style['basic-list'],
                                          'row-margin-item',
                                        ]"
                                      >
                                        <li
                                          :class="[
                                            $style['basic-list__item'],
                                            'text-body-4',
                                            'font-weight-regular',
                                            'color-black',
                                          ]"
                                        >
                                          <div
                                            :class="
                                              $style['basic-list__symbol']
                                            "
                                          >
                                            -
                                          </div>
                                          <div
                                            :class="
                                              $style['basic-list__content']
                                            "
                                          >
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
                                          <div
                                            :class="
                                              $style['basic-list__symbol']
                                            "
                                          >
                                            -
                                          </div>
                                          <div
                                            :class="
                                              $style['basic-list__content']
                                            "
                                          >
                                            미회수원금 X 최고요율(20)% X
                                            (잔여기간 월수/리스기간 전체월수)
                                          </div>
                                        </li>
                                      </ul>
                                    </li>
                                    <li :class="$style['contents-list__item']">
                                      <div
                                        :class="$style['contents-list__head']"
                                      >
                                        <div
                                          :class="
                                            $style['contents-list__symbol']
                                          "
                                        >
                                          주3
                                        </div>
                                        <div
                                          :class="
                                            $style['contents-list__title']
                                          "
                                        >
                                          <div>
                                            규정손해배상금(차량인수-금융리스)
                                          </div>
                                        </div>
                                      </div>
                                      <ul
                                        :class="[
                                          $style['basic-list'],
                                          'row-margin-item',
                                        ]"
                                      >
                                        <li
                                          :class="[
                                            $style['basic-list__item'],
                                            'text-body-4',
                                            'font-weight-regular',
                                            'color-black',
                                          ]"
                                        >
                                          <div
                                            :class="
                                              $style['basic-list__symbol']
                                            "
                                          >
                                            -
                                          </div>
                                          <div
                                            :class="
                                              $style['basic-list__content']
                                            "
                                          >
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
                                          <div
                                            :class="
                                              $style['basic-list__symbol']
                                            "
                                          >
                                            -
                                          </div>
                                          <div
                                            :class="
                                              $style['basic-list__content']
                                            "
                                          >
                                            미회수원금 X 최고요율(3)% X
                                            (잔여기간 월수/리스기간 전체월수)
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
                                          <div
                                            :class="
                                              $style['basic-list__symbol']
                                            "
                                          >
                                            ※
                                          </div>
                                          <div
                                            :class="
                                              $style['basic-list__content']
                                            "
                                          >
                                            단, 금융리스의 경우 대부업법에서
                                            정하는 최고이자율을 초과하지 않는
                                            범위로 합니다.
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
                                      <div
                                        :class="$style['contents-list__head']"
                                      >
                                        <div
                                          :class="
                                            $style['contents-list__symbol']
                                          "
                                        >
                                          1
                                        </div>
                                        <div
                                          :class="
                                            $style['contents-list__title']
                                          "
                                        >
                                          <div>운용리스, 금융리스</div>
                                        </div>
                                      </div>
                                      <ul
                                        :class="[
                                          $style['basic-list'],
                                          'row-margin-item',
                                        ]"
                                      >
                                        <li
                                          :class="[
                                            $style['basic-list__item'],
                                            'text-body-4',
                                            'font-weight-regular',
                                            'color-black',
                                          ]"
                                        >
                                          <div
                                            :class="
                                              $style['basic-list__symbol']
                                            "
                                          >
                                            -
                                          </div>
                                          <div
                                            :class="
                                              $style['basic-list__content']
                                            "
                                          >
                                            미회수원금의 1%(승계수수료 최고
                                            요율) X (잔여기간 월수/리스기간 전체
                                            월수) (min : 500,000원, max :
                                            900,000원)
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
                                          <div
                                            :class="
                                              $style['basic-list__symbol']
                                            "
                                          >
                                            ※
                                          </div>
                                          <div
                                            :class="
                                              $style['basic-list__content']
                                            "
                                          >
                                            단, 금융리스의 경우 대부업법에서
                                            정하는 최고이자율을 초과하지 않는
                                            범위로 합니다.
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
                                주1) ‘중도해지손해배상금’은 고객이 계약의
                                중도해지를 이유로
                                <strong class="font-weight-regular"
                                  >자동차를 반환</strong
                                >하고자 할 때 ‘자동차리스 표준약관’ 제24조에
                                따라 금융회사에 발생한 손해를 배상하기 위하여
                                지급해야 하는 금액을 의미합니다.
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
                                주2) 규정손해배상금은 고객이 계약의 중도해지를
                                이유로
                                <strong class="font-weight-regular"
                                  >자동차를 매입</strong
                                >하고자 할 때 ‘자동차리스 표준약관’ 제23조에
                                따라 금융회사에 발생한 손해를 배상하기 위하여
                                지급해야 하는 금액을 의미합니다.
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
                          반환시점의 자동차의 기대가치(혹은 중고차 시세) X
                          감가율(1~14%)의 합
                        </KeyValueText>
                      </KeyValueItem>

                      <KeyValueItem>
                        <KeyValueTitle>초과운행부담금</KeyValueTitle>
                        <KeyValueText
                          >초과운행 KM X KM 당 초과운행료</KeyValueText
                        >
                      </KeyValueItem>

                      <KeyValueItem>
                        <KeyValueTitle>초과운행료</KeyValueTitle>
                        <KeyValueText>수입차 300원, 국산차 100원</KeyValueText>
                      </KeyValueItem>

                      <KeyValueItem>
                        <KeyValueTitle>연체이자율</KeyValueTitle>
                        <KeyValueText>
                          <div class="font-weight-bold underline">
                            금융리스 (약정이율+3%,법정최고금리 연 20%이내),
                            운용리스 연 20%
                          </div>
                        </KeyValueText>
                      </KeyValueItem>

                      <KeyValueItem>
                        <KeyValueTitle>기타비용</KeyValueTitle>
                        <KeyValueText>
                          <div>저당설정(이용자명의 시 저당설정 추가)</div>
                          <ul
                            :class="[$style['basic-list'], 'row-margin-item']"
                          >
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
                                근저당설정비용 당사 부담 / 해지비용 금융소비자
                                부담
                              </div>
                            </li>
                          </ul>
                        </KeyValueText>
                      </KeyValueItem>

                      <KeyValueItem>
                        <KeyValueTitle>대출부대비용</KeyValueTitle>
                        <KeyValueText>
                          <p
                            class="text-body-4 color-gray-tertiary font-weight-light"
                          >
                            (인지세는 하나캐피탈과 금융소비자가 50%씩
                            부담합니다.)
                          </p>

                          <ul
                            :class="[$style['basic-list'], 'row-margin-item']"
                          >
                            <li
                              :class="[
                                $style['basic-list__item'],
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
                                'text-body-2',
                                'font-weight-regular',
                              ]"
                            >
                              <div :class="$style['basic-list__symbol']"></div>
                              <div :class="$style['basic-list__content']">
                                만기 시 차량을 매입하실 경우 손님의 명의로
                                이전하는데 필요한 취득세 등의 제세공과금이
                                발생할 수 있으며, 이는 손님이 부담하셔야 합니다.
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
                                운용리스의 경우, 만기 차량 반납시사고이력 또는
                                약정주행거리 초과에 따라 별도의 감사비용이
                                추가로 발생 할 수 있습니다.
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
                                차량 반납시 유의사항을 꼭 확인하여 주시기
                                바랍니다.
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
                                계약을 체결하기 전에 상품 설명서와 약관을
                                확인하시기 바랍니다.
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
                                상환능력에 비해 대출금이 과도할 경우 귀하의
                                신용등급 또는 개인신용평점이 하락할 수 있습니다.
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
                                개인신용평점 하락 시 금융거래와 관련된 불이익이
                                발생할 수 있습니다.
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
                                일정기간 원리금을 연체할 경우, 모든 원리금을
                                변제할 의무가 발생할 수 있습니다.
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
                                리스취급이 부적정한 경우(연체금 보유,
                                개인신용평점 낮음) 대출이 제한될 수 있습니다.
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
                                담보물건, 담보종류 등에 따라 대출조건이 차등
                                적용되며 담보물이 부적합할 경우 대출이 제한될 수
                                있습니다.
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
                                금융소비자의 신용등급 또는 개인신용평점에 따라
                                대출한도 및 금리가 차등 적용됩니다.
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
                                금융소비자는 해당상품에 대하여 설명을 받을
                                권리가 있으며, 그 설명을 듣고 내용을 충분히
                                이해한 후 거래하시기 바랍니다
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
                                금리인하요구권 및 대출계약 철회권에 대한 자세한
                                사항은 당사 홈페이지에서 확인하시기 바랍니다.
                              </div>
                            </li>
                          </ul>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </UiTabPanel>
                  <!-- // 상품안내 -->

                  <!-- 진행절차 -->
                  <UiTabPanel name="layerAutoEstimateSelectProduct_002">
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
                                신청내용 확인하여
                                <strong>결과를 통보</strong>합니다.
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
                                계약 시
                                <strong>온라인이나 오프라인 약정</strong
                                >을<br />
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
                                차량을 구입 후
                                <strong>고객님께 인도</strong>해<br />
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
                </UiTab>
              </div>
            </UiAccordionLayer>

            <div
              :class="[
                $style['accordion-button'],
                {
                  [$style['accordion-button--opened']]:
                    accordionItemSlotProps.opened,
                },
              ]"
            >
              <BasicButton
                :line="true"
                theme="quinary"
                @click="accordionItemSlotProps.toggle()"
                size="none-line"
              >
                <span
                  class="text-body-4"
                  @click="accordionItemSlotProps.toggle()"
                >
                  {{
                    accordionItemSlotProps.opened ? '접기' : '상세보기'
                  }}</span
                >
                <span class="for-a11y">{{
                  accordionItemSlotProps.opened ? '접기' : '펼치기'
                }}</span>
                <template v-slot:rightIcon>
                  <IconDropdown :class="$style['accordion-button__icon']" />
                </template>
              </BasicButton>
            </div>
          </UiAccordionItem>

          <UiAccordionItem
            tagName="section"
            v-slot="accordionItemSlotProps"
            class="row-margin-contents-group"
          >
            <h4 class="text-body-2 row-margin-item-medium">장기렌터카</h4>

            <!-- DD : AF_M01_p001 동일 내용 -->

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

            <UiAccordionLayer>
              <div :class="$style['accordion-contents']">
                <UiTab>
                  <RoundTab
                    :useUiTab="true"
                    :classNames="{ wrap: 'row-margin-contents-group' }"
                  >
                    <RoundTabButton link="layerAutoEstimateSelectProduct_004">
                      상품안내
                    </RoundTabButton>
                    <RoundTabButton link="layerAutoEstimateSelectProduct_005">
                      진행절차
                    </RoundTabButton>
                  </RoundTab>

                  <!-- 상품안내 -->
                  <UiTabPanel name="layerAutoEstimateSelectProduct_004">
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
                                  렌트료 포함 내역 : 취득세, 보험료, 자동차세,
                                  정비료
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
                                만기 시 처리 : 계약 종료 후 고객의 의향에 따라
                                반환, 구매, 연장 가능
                              </div>
                            </li>
                          </ul>
                        </KeyValueText>
                      </KeyValueItem>

                      <KeyValueItem>
                        <KeyValueTitle>중도해지수수료</KeyValueTitle>
                        <KeyValueText>
                          <p
                            class="text-body-2 font-weight-regular row-margin-item"
                          >
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
                              <div :class="$style['basic-list__content']">
                                잔여렌트료
                              </div>
                            </li>
                          </ul>

                          <div
                            :class="[$style['basic-table'], 'row-margin-mini']"
                          >
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

                          <ul
                            :class="[
                              $style['basic-list'],
                              'row-margin-item-small',
                            ]"
                          >
                            <li
                              :class="[
                                $style['basic-list__item'],
                                'color-gray-tertiary',
                                'font-weight-regular',
                              ]"
                            >
                              <div :class="$style['basic-list__symbol']">※</div>
                              <div :class="$style['basic-list__content']">
                                잔여렌트료 = 앞면표기 “월렌트료” X (미청구
                                잔여개월 수 – 1 개월) + 해지시점 당월
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
                          <div>
                            [초과운행km-유예주행거리] X km당 초과운행부담금
                          </div>
                          <ul
                            :class="[$style['basic-list'], 'row-margin-mini']"
                          >
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
                                km당 초과운행부담금 : 국산차 100원 / 수입차
                                300원
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

                      <KeyValueItem>
                        <KeyValueTitle>유의사항</KeyValueTitle>
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
                                'text-body-3',
                              ]"
                            >
                              <div :class="$style['basic-list__symbol']"></div>
                              <div :class="$style['basic-list__content']">
                                렌터카 계약을 체결하기 전에 상품 설명서와 약관을
                                확인하시기 바랍니다.
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
                                일정기간 렌탈료를 연체할 경우, 모든
                                렌탈료(원리금)를 변제할 의무가 발생할 수
                                있습니다. (연체이자 : 년 20%)
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
                                렌터카 취급이 부적정한 경우(연체금 보유,
                                개인신용평점 낮음) 취급이 제한될 수 있습니다.
                              </div>
                            </li>
                          </ul>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </UiTabPanel>
                  <!-- // 상품안내 -->

                  <!-- 진행절차 -->
                  <UiTabPanel name="layerAutoEstimateSelectProduct_005">
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
                                신청정보 확인하여 <strong>결과를 안내</strong>해
                                드립니다.
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
                                고객님께 <strong>차량을 인도</strong>해
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
                </UiTab>
              </div>
            </UiAccordionLayer>

            <div
              :class="[
                $style['accordion-button'],
                {
                  [$style['accordion-button--opened']]:
                    accordionItemSlotProps.opened,
                },
              ]"
            >
              <BasicButton
                :line="true"
                theme="quinary"
                @click="accordionItemSlotProps.toggle()"
                size="none-line"
              >
                <span
                  class="text-body-4"
                  @click="accordionItemSlotProps.toggle()"
                >
                  {{
                    accordionItemSlotProps.opened ? '접기' : '상세보기'
                  }}</span
                >
                <span class="for-a11y">{{
                  accordionItemSlotProps.opened ? '접기' : '펼치기'
                }}</span>
                <template v-slot:rightIcon>
                  <IconDropdown :class="$style['accordion-button__icon']" />
                </template>
              </BasicButton>
            </div>
          </UiAccordionItem>
        </UiAccordion>
      </section>

      <ul :class="[$style['basic-list'], 'row-margin-container-medium']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            준법심의필 23-358<br />
            (2023.10.16 ~ 2024.10.15)
          </div>
        </li>
      </ul>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoEstimateSelectProduct.scss';
</style>
