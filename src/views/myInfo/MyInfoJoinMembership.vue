<script>
// MI_M01_p010
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

import IconHyendaiRentalCare from '@/assets/images/etc-logo/hyendai-rental-care.svg?component';
import IconBuilding from '@/assets/images/icon/building.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    NavTab,
    NavTabButton,
    StickyBar,
    UiTabPanel,
    UiTab,
    ButtonList,
    ButtonListItem,
    BasicButton,
    TextButton,
    RoundStatus,
    BasicHr,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    BottomSticky,
    IconHyendaiRentalCare,
    IconBuilding,
    IconCar,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '하나캐피탈 멤버십');
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
  <UiTab>
    <PageContents>
      <template v-slot:head>
        <StickyBar>
          <NavTab :head="true" :useUiTab="true" :auto="true" :scroll="true">
            <NavTabButton link="MyInfoJoinMembershipTab001"
              >무료보험</NavTabButton
            >
            <NavTabButton link="MyInfoJoinMembershipTab002"
              >금리우대</NavTabButton
            >
            <NavTabButton link="MyInfoJoinMembershipTab003">렌탈</NavTabButton>
            <NavTabButton link="MyInfoJoinMembershipTab004"
              >부동산 시세</NavTabButton
            >
            <NavTabButton link="MyInfoJoinMembershipTab005"
              >자동차 시세</NavTabButton
            >
            <NavTabButton link="MyInfoJoinMembershipTab006">Q&A</NavTabButton>
          </NavTab>
        </StickyBar>
      </template>

      <!-- Tab : 무료보험 -->
      <UiTabPanel name="MyInfoJoinMembershipTab001">
        <PageTextGroup>
          <PageMainText>
            <strong>
              ‘교통상해사망/교통상해후유장해보험’<br />
              서비스를 하나캐피탈 멤버십 회원에게는<br />
              무료 제공하는 서비스
            </strong>
          </PageMainText>
        </PageTextGroup>

        <div>
          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              서비스 안내
            </h4>

            <p class="text-body-2 font-weight-regular">
              교통상해 발생 시 최고 5백만원 보상 서비스 제공
            </p>
            <ul :class="[$style['basic-list'], 'row-margin-item']">
              <li
                :class="[
                  $style['basic-list__item'],
                  'font-weight-regular',
                  'color-gray-tertiary',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  2022.06.29 이전 가입자는 메신저/보이스피싱 서비스 제공<br />
                  (최고 3백만원 보상)
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              대상고객
            </h4>

            <p class="text-body-2 font-weight-regular">
              하나캐피탈 멤버십 가입 회원
            </p>
            <ul :class="[$style['basic-list'], 'row-margin-item']">
              <li
                :class="[
                  $style['basic-list__item'],
                  'font-weight-regular',
                  'color-gray-tertiary',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  2021년 8월 11일 이 후 "최초 가입한"멤버십 회원에 한해 최초 1회
                  제공 (탈퇴 및 중복가입 시 제공 불가)
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
                  보험기간 중 일어난 사고에 한하여 사고 발생 후 3년 이내
                  보상신청 가능
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
                  하나캐피탈 APP, Mobile WEB 신규가입자/렌터카 상품 가입 고객
                  제외(단, 기존 하나캐피탈 상품 이용손님 멤버십 가입 시
                  보험서비스 제공)
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              제휴회사
            </h4>

            <p class="text-body-2 font-weight-regular">하나손해보험㈜</p>
            <p
              class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
            >
              (상품 : 하나손해보험 단체안심상해보험II)
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              제공기간
            </h4>

            <p class="text-body-2 font-weight-regular">
              멤버십 최초 가입 다음 날부터 1년간
            </p>
            <ul :class="[$style['basic-list'], 'row-margin-item']">
              <li
                :class="[
                  $style['basic-list__item'],
                  'font-weight-regular',
                  'color-gray-tertiary',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  멤버십 탈회 시 탈회일 기준 보험서비스 해지
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              사고접수
            </h4>

            <p class="text-body-2 font-weight-regular">
              고객센터 1566-3000 (하나손해보험)
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-item"
            >
              접수절차
            </h4>

            <div :class="$style['contents-list']">
              <ol
                :class="[
                  $style['contents-list__list'],
                  $style['contents-list__list--quinary'],
                ]"
              >
                <li :class="$style['contents-list__item']">
                  <div :class="$style['contents-list__head']">
                    <div :class="$style['contents-list__symbol']">1</div>
                    <div :class="$style['contents-list__title']">피해발생</div>
                  </div>
                </li>
                <li :class="$style['contents-list__item']">
                  <div :class="$style['contents-list__head']">
                    <div :class="$style['contents-list__symbol']">2</div>
                    <div :class="$style['contents-list__title']">사고접수</div>
                  </div>
                </li>
                <li :class="$style['contents-list__item']">
                  <div :class="$style['contents-list__head']">
                    <div :class="$style['contents-list__symbol']">3</div>
                    <div :class="$style['contents-list__title']">서류제출</div>
                  </div>
                </li>
                <li :class="$style['contents-list__item']">
                  <div :class="$style['contents-list__head']">
                    <div :class="$style['contents-list__symbol']">3</div>
                    <div :class="$style['contents-list__title']">보상지급</div>
                  </div>
                </li>
              </ol>
            </div>
          </section>
        </div>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">유의사항</h3>

          <p class="text-body-4 font-weight-light">
            상기 서비스는 하나손해보험㈜ 제휴를 통해 제공해 드리는 무료보험
            서비스로 보험약관 변경에 따라 서비스 내용이 변경 또는 종료될 수
            있습니다.
          </p>
        </section>
      </UiTabPanel>
      <!-- // Tab : 무료보험 -->

      <!-- Tab : 금리우대 -->
      <UiTabPanel name="MyInfoJoinMembershipTab002">
        <PageTextGroup>
          <div class="inline-wrap row-margin-item">
            <RoundStatus theme="secondary">모바일 전용</RoundStatus>
          </div>
          <PageMainText>
            <strong>
              하나캐피탈 멤버십 회원이<br />
              신용대출 상품 이용 시<br />
              금리 우대를 제공하는 혜택 서비스
            </strong>
          </PageMainText>
        </PageTextGroup>

        <div>
          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              서비스 안내
            </h4>

            <p class="text-body-2 font-weight-regular">
              신용대출 상품 이용 시 금리 우대 서비스 제공
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              대상고객
            </h4>

            <p class="text-body-2 font-weight-regular">
              하나캐피탈 멤버십 가입 회원
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              제공서비스
            </h4>

            <p class="text-body-2 font-weight-regular">
              신용대출 상품 이용 시 0.2% 금리 할인 제공
            </p>
            <p
              class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
            >
              (신용대출 상품 : e하나신용대출, 행복아파트론, 원큐자동차담보대출)
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              이용방법
            </h4>

            <p class="text-body-2 font-weight-regular">
              당사 홈페이지(모바일/App) "하나캐피탈 멤버십 금리우대" 서비스
              페이지 내 멤버십 대출신청 바로가기 로 신청
            </p>
            <ul :class="[$style['basic-list'], 'row-margin-item']">
              <li
                :class="[
                  $style['basic-list__item'],
                  'font-weight-regular',
                  'color-gray-tertiary',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  PC 홈페이지, 유선, 서면으로 대출신청 고객은 서비스 제외
                </div>
              </li>
            </ul>
          </section>
        </div>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">상품안내</h3>

          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                대출한도 : 최저 100만원 ~ 최대 1억원
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금리 : 고정 연 4.9% ~ 18.9%
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                대출기간 : 12개월 ~ 120개월
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                연체이자율 :
                <strong class="font-weight-medium"
                  >약정이율+3% (법정최고금리 연 20% 이내)</strong
                >
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                <div>중도상환수수료</div>
                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--regular'],
                    'row-margin-item',
                  ]"
                >
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
                      e하나신용대출 : 0%
                    </div>
                  </li>
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
                      행복아파트론 · 원큐자동차담보대출 대출일로부터 3년 이내
                      상환 시 적용, 중도상환수수료율 2%
                    </div>
                  </li>
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
                      <div>중도상환수수료 산식</div>

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
                            'font-weight-regular',
                            'color-gray-tertiary',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">※</div>
                          <div :class="$style['basic-list__content']">
                            만기 1년 이상 :<br />
                            중도상환원금 × 1% + 중도상환원금 × (중도상환수수료율
                            - 1%) × 잔존기간/(대출기간-30일)
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
                            만기 1년 미만 :<br />
                            중도상환원금 × (중도상환수수료율) ×
                            잔존기간/(대출기간-30일)
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
                            잔존기간 :<br />
                            30일 미만 상환 시 '대출사용기간'을 30일로 간주
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                상환방법 및 이자 납부시기 : 원리금균등분할상환, 매월 후취
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                <div>
                  인지세는 5천만원 초과 실행 시 발생하며 하나캐피탈과
                  금융소비자가 50%씩 부담합니다.
                </div>
                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--regular'],
                    'row-margin-item',
                  ]"
                >
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
                      대출금액 5천만원 초과 1억원 이하 : 7만원
                    </div>
                  </li>
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
                      대출금액 1억원 초과 10억원 이하 : 15만원
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">유의사항</h3>

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
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                계약을 체결하기 전에 상품설명서와 약관을 확인하시기 바랍니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
                'font-weight-medium',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                상환능력에 비해 대출금이 과도할 경우 귀하의 개인신용평점이
                하락할 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
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
                'text-body-4',
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
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                대출취급이 부적정한 경우(연체금 보유, 개인신용평점 낮음) 대출이
                제한될 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                담보물건, 담보종류 등에 따라 대출조건이 차등적용되며 담보물이
                부적합할 경우 대출이 제한될 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
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
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금융소비자는 해당상품에 대하여 설명을 받을 권리가 있으며, 그
                설명을 듣고 내용을 충분히 이해한 후 거래하시기 바랍니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금리인하요구권 및 대출계약 철회권에 대한 자세한 사항은
                홈페이지에서 확인하시기 바랍니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                상기 서비스는 당사 또는 회원 사정에 의해 상이할 수 있으며,
                서비스 내용이 변경 또는 종료될 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                하나캐피탈 멤버십 금리우대 서비스는 2022년 11월 11일 대출
                신청부터 적용됩니다.
              </div>
            </li>
          </ul>
          <ul :class="[$style['basic-list'], 'row-margin-contents']">
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                준법 심의필 22-1737<br />
                (2022.11.09 ~ 2023.11.08)
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                여신금융협회 심의필 제 2022-L1h-10002호<br />
                (2022.11.09 ~ 2023.11.08)
              </div>
            </li>
          </ul>
        </section>
      </UiTabPanel>
      <!-- // Tab : 금리우대 -->

      <!-- Tab : 렌탈 -->
      <UiTabPanel name="MyInfoJoinMembershipTab003">
        <PageTextGroup>
          <PageMainText>
            <strong>
              하나캐피탈 제휴처 렌탈 시<br />
              렌탈료 할인을 제공하는 혜택 서비스
            </strong>
          </PageMainText>
        </PageTextGroup>

        <div>
          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              서비스 안내
            </h4>

            <p class="text-body-2 font-weight-regular">
              정수기/비데/공기청정기 등 렌탈 시 렌탈료 할인 제공 혜택 서비스
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              대상고객
            </h4>

            <p class="text-body-2 font-weight-regular">
              하나캐피탈 멤버십 가입 회원
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              제공기간
            </h4>

            <p class="text-body-2 font-weight-regular">
              렌탈 약정기간 : 36개월, 48개월, 60개월
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              제휴회사
            </h4>

            <p class="text-body-2 font-weight-regular">(주) 현대렌탈서비스</p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              이용방법
            </h4>

            <p class="text-body-2 font-weight-regular">
              하나캐피탈 서비스 페이지 내 제휴사 연동 페이지 내 상담 신청 후
              제공
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              제공서비스
            </h4>

            <p class="text-body-2 font-weight-regular">
              멤버십 회원에 한하여 렌탈료 할인제공
            </p>
          </section>
        </div>

        <BasicHr
          type="contents"
          theme="quaternary"
          className="row-margin-container"
        />

        <div :class="$style['icon-list']">
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <RouterLink to="" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']">
                  <IconHyendaiRentalCare />
                </span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__text']">
                    자세한 할인율 정보가 궁금하시다면
                  </span>
                  <span :class="$style['icon-list__title']">
                    현대렌탈 바로가기
                  </span>
                </span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </UiTabPanel>
      <!-- // Tab : 렌탈 -->

      <!-- Tab : 부동산 시세 -->
      <UiTabPanel name="MyInfoJoinMembershipTab004">
        <PageTextGroup>
          <div class="inline-wrap row-margin-item">
            <RoundStatus theme="secondary">모바일 전용</RoundStatus>
          </div>
          <PageMainText>
            <strong>
              매주 업데이트되는 부동산 시세 조회를<br />
              무료로 이용할 수 있는 혜택 서비스
            </strong>
          </PageMainText>
        </PageTextGroup>

        <div>
          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              서비스 안내
            </h4>

            <p class="text-body-2 font-weight-regular">
              매주 업데이트 되는 아파트/오피스텔 시세 조회 가능 서비스 제공
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              대상고객
            </h4>

            <p class="text-body-2 font-weight-regular">
              하나캐피탈 멤버십 가입 회원
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              제공기간
            </h4>

            <p class="text-body-2 font-weight-regular">멤버십 탈회 시까지</p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              제공회사
            </h4>

            <p class="text-body-2 font-weight-regular">(주)국민은행</p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              이용방법
            </h4>

            <p class="text-body-2 font-weight-regular">
              하나캐피탈 모바일을 통해 이용 가능
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              제공서비스
            </h4>

            <p class="text-body-2 font-weight-regular">
              매주 업데이트로 원하는 아파트/오피스텔 의 매매 또는 전세 시세 확인
              가능
            </p>
          </section>
        </div>

        <BasicHr
          type="contents"
          theme="quaternary"
          className="row-margin-container"
        />

        <div :class="$style['icon-list']">
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <RouterLink to="" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']">
                  <IconBuilding />
                </span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__text']">
                    매주 업데이트 되는 시세 정보
                  </span>
                  <span :class="$style['icon-list__title']">
                    부동산 시세 조회하기
                  </span>
                </span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </UiTabPanel>
      <!-- // Tab : 부동산 시세 -->

      <!-- Tab : 자동차 시세 -->
      <UiTabPanel name="MyInfoJoinMembershipTab005">
        <PageTextGroup>
          <div class="inline-wrap row-margin-item">
            <RoundStatus theme="secondary">모바일 전용</RoundStatus>
          </div>
          <PageMainText>
            <strong>
              매월 업데이트되는 차량정보로<br />
              내 차 시세조회가 가능한 혜택 서비스
            </strong>
          </PageMainText>
        </PageTextGroup>

        <div>
          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              서비스 안내
            </h4>

            <p class="text-body-2 font-weight-regular">
              매월 업데이트 되는 데이터로 내 차량 시세조회 가능 서비스 제공
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              대상고객
            </h4>

            <p class="text-body-2 font-weight-regular">
              하나캐피탈 멤버십 가입 회원
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              제공기간
            </h4>

            <p class="text-body-2 font-weight-regular">멤버십 탈회 시까지</p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              제공회사
            </h4>

            <p class="text-body-2 font-weight-regular">NICE평가정보(주)</p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              이용방법
            </h4>

            <p class="text-body-2 font-weight-regular">
              하나캐피탈 모바일을 통해 이용 가능
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              제공서비스
            </h4>

            <p class="text-body-2 font-weight-regular">
              월 말 기준의 내 차량 시세조회 가능
            </p>
          </section>
        </div>

        <BasicHr
          type="contents"
          theme="quaternary"
          className="row-margin-container"
        />

        <div :class="$style['icon-list']">
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <RouterLink to="" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']">
                  <IconCar />
                </span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__text']">
                    매월 업데이트 되는 시세 정보
                  </span>
                  <span :class="$style['icon-list__title']">
                    자동차 시세 조회하기
                  </span>
                </span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </UiTabPanel>
      <!-- // Tab : 자동차 시세 -->

      <!-- Tab : Q&A -->
      <UiTabPanel name="MyInfoJoinMembershipTab006">
        <div :class="$style['qna']">
          <UiAccordion :classNames="{ wrap: $style['qna__list'] }">
            <UiAccordionItem :classNames="{ item: $style['qna__item'] }">
              <div :class="$style['qna__head']">
                <div :class="$style['qna__symbol']">Q</div>
                <div :class="$style['qna__cell']">
                  <h3 :class="$style['qna__title']">
                    하나캐피탈 멤버십 가입은<br />
                    어떻게 하나요?
                  </h3>
                </div>
                <div :class="$style['qna__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['qna__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer :classNames="{ layer: $style['qna__layer'] }">
                <div :class="$style['qna__contents']">
                  <div
                    :class="[
                      $style['qna__symbol'],
                      $style['qna__symbol--answer'],
                    ]"
                  >
                    A
                  </div>
                  <div :class="$style['qna__cell']">
                    <p :class="$style['qna__text']">
                      하나캐피탈 회원가입은 성별 나이 특정제한 없이 하나캐피탈
                      이용 및 관심있으신 손님이시면 누구나 가입가능하며,
                      홈페이지 및 모바일에서 멤버십 가입하기를 통해 가입하실 수
                      있습니다.
                    </p>
                  </div>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
            <UiAccordionItem :classNames="{ item: $style['qna__item'] }">
              <div :class="$style['qna__head']">
                <div :class="$style['qna__symbol']">Q</div>
                <div :class="$style['qna__cell']">
                  <h3 :class="$style['qna__title']">
                    하나캐피탈 멤버십 가입 시<br />
                    연회비나 기타비용이 들어가나요?
                  </h3>
                </div>
                <div :class="$style['qna__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['qna__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer :classNames="{ layer: $style['qna__layer'] }">
                <div :class="$style['qna__contents']">
                  <div
                    :class="[
                      $style['qna__symbol'],
                      $style['qna__symbol--answer'],
                    ]"
                  >
                    A
                  </div>
                  <div :class="$style['qna__cell']">
                    <p :class="$style['qna__text']">
                      하나캐피탈 멤버십은 손님들께 전액 무료로 제공되는 서비스로
                      추가비용이 발생하지 않습니다.
                    </p>
                  </div>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
            <UiAccordionItem :classNames="{ item: $style['qna__item'] }">
              <div :class="$style['qna__head']">
                <div :class="$style['qna__symbol']">Q</div>
                <div :class="$style['qna__cell']">
                  <h3 :class="$style['qna__title']">
                    보험 서비스는<br />
                    직접 신청해야만 하나요?
                  </h3>
                </div>
                <div :class="$style['qna__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['qna__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer :classNames="{ layer: $style['qna__layer'] }">
                <div :class="$style['qna__contents']">
                  <div
                    :class="[
                      $style['qna__symbol'],
                      $style['qna__symbol--answer'],
                    ]"
                  >
                    A
                  </div>
                  <div :class="$style['qna__cell']">
                    <p :class="$style['qna__text']">
                      네. 사고 시 하나손해보험 고객센터로 직접 접수해주셔야
                      보상이 가능합니다.
                    </p>
                  </div>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
            <UiAccordionItem :classNames="{ item: $style['qna__item'] }">
              <div :class="$style['qna__head']">
                <div :class="$style['qna__symbol']">Q</div>
                <div :class="$style['qna__cell']">
                  <h3 :class="$style['qna__title']">
                    하나캐피탈 멤버십 탈회는<br />
                    어떻게 해야하나요?
                  </h3>
                </div>
                <div :class="$style['qna__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['qna__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer :classNames="{ layer: $style['qna__layer'] }">
                <div :class="$style['qna__contents']">
                  <div
                    :class="[
                      $style['qna__symbol'],
                      $style['qna__symbol--answer'],
                    ]"
                  >
                    A
                  </div>
                  <div :class="$style['qna__cell']">
                    <p :class="$style['qna__text']">
                      탈회를 원하실 경우, 고객센터(1800-1110) 또는 하나캐피탈
                      홈페이지 및 WEB/APP을 통해 편리하게 처리 가능합니다.<br />
                      단, 탈회 즉시 모든 멤버십 서비스를 이용할 수 없으니
                      신중하게 생각하시길 바랍니다.
                    </p>
                  </div>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
          </UiAccordion>
        </div>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">유의사항</h3>

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
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                계약을 체결하기 전에 상품설명서와 약관을 확인하시기 바랍니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
                'font-weight-medium',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                상환능력에 비해 대출금이 과도할 경우 귀하의 개인신용평점이
                하락할 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
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
                'text-body-4',
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
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                대출취급이 부적정한 경우(연체금 보유, 개인신용평점 낮음) 대출이
                제한될 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                담보물건, 담보종류 등에 따라 대출조건이 차등적용되며 담보물이
                부적합할 경우 대출이 제한될 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
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
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금융소비자는 해당상품에 대하여 설명을 받을 권리가 있으며, 그
                설명을 듣고 내용을 충분히 이해한 후 거래하시기 바랍니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금리인하요구권 및 대출계약 철회권에 대한 자세한 사항은
                홈페이지에서 확인하시기 바랍니다.
              </div>
            </li>
          </ul>
          <ul :class="[$style['basic-list'], 'row-margin-contents']">
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                준법 심의필 22-1635<br />
                (2022.10.01 ~ 2023.09.30)
              </div>
            </li>
          </ul>
        </section>
      </UiTabPanel>
      <!-- // Tab : Q&A -->

      <!-- Case : 가입자일 경우 노출 -->
      <div class="inline-wrap align-center row-margin-contents-group">
        <TextButton
          :classNames="{ wrap: 'text-body-4 color-gray' }"
          :underline="true"
        >
          탈퇴하기
        </TextButton>
      </div>
      <!-- //Case : 가입자일 경우 노출 -->

      <template v-slot:foot>
        <!-- Case : 미가입자일 경우 노출 -->
        <BottomSticky>
          <div class="bottom-wrap">
            <ButtonList
              :classNames="{
                wrap: 'row-margin-none',
              }"
            >
              <ButtonListItem>
                <BasicButton>가입하기</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </div>
        </BottomSticky>
        <!-- //Case : 미가입자일 경우 노출 -->
      </template>
    </PageContents>
  </UiTab>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myInfo/MyInfoJoinMembership.scss';
</style>
