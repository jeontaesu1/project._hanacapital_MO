<script>
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';

import IconRate from '@/assets/images/icon/rate.svg?component';
import IconDate from '@/assets/images/icon/date.svg?component';
import IconCalculate from '@/assets/images/icon/calculate.svg?component';
import IconConsulting from '@/assets/images/icon/consulting.svg?component';
import IconService from '@/assets/images/icon/service.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconCustomerVisit from '@/assets/images/icon/customer-visit.svg?component';
import IconInstallation from '@/assets/images/icon/installation.svg?component';
import IconDeposit from '@/assets/images/icon/deposit.svg?component';
import ImgSample from '@/assets/images/_dummy/illustration-sample.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    StickyBar,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    IconRate,
    IconDate,
    IconCalculate,
    IconConsulting,
    IconService,
    IconCustomerVisit,
    IconSend,
    IconInstallation,
    IconDeposit,
    ImgSample,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '의료기할부');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['share']);
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
    <div :class="$style['bg']">
      <PageTextGroup>
        <PageMainText>
          병/의원 및 의료법인대상<br />
          <strong>의료기기, 의료소모품 구입자금 대출</strong>
        </PageMainText>
      </PageTextGroup>

      <div :class="[$style['illustration-img'], 'row-margin-contents']">
        <ImgSample />
      </div>

      <BasicBox theme="secondary">
        <div
          :class="[$style['product-detail'], $style['product-detail--small']]"
        >
          <ul :class="$style['product-detail__list']">
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconRate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">금리</div>
                <div :class="$style['product-detail__desc']">
                  연 0.0 ~ 8.50%
                </div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconDate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">기간</div>
                <div :class="$style['product-detail__desc']">
                  3개월 ~ 60개월
                </div>
              </div>
            </li>
          </ul>
        </div>
      </BasicBox>
    </div>

    <UiTab>
      <div :class="$style['tab__inner']">
        <StickyBar>
          <NavTab :useUiTab="true" :auto="true">
            <NavTabButton link="PersonalLoanMedicalAppliancesTab001_001"
              >상품안내</NavTabButton
            >
            <NavTabButton link="PersonalLoanMedicalAppliancesTab001_002"
              >진행절차</NavTabButton
            >
            <NavTabButton link="PersonalLoanMedicalAppliancesTab001_003"
              >유의사항</NavTabButton
            >
          </NavTab>
        </StickyBar>
      </div>

      <UiTabPanel name="PersonalLoanMedicalAppliancesTab001_001">
        <BasicBox theme="tertiary">
          <KeyValueList align="left" margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대상</KeyValueTitle>
              <KeyValueText>
                병원, 의원 중 할부금융을 통해<br />
                물건을 구입하고자 하는<br />
                개인사업자, 의료법인
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>금리</KeyValueTitle>
              <KeyValueText> 연 0.00% ~ 최고 8.50%</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>기간</KeyValueTitle>
              <KeyValueText> 3개월 ~ 60개월</KeyValueText>
            </KeyValueItem>
          </KeyValueList>
        </BasicBox>

        <KeyValueList
          direction="vertical"
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <KeyValueItem>
            <KeyValueTitle>할부금</KeyValueTitle>
            <KeyValueText> 구매금액</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>상환방법</KeyValueTitle>
            <KeyValueText>원리금균등분할상환</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>중도상환수수료</KeyValueTitle>
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
                    'text-body-2',
                    'color-black',
                    'font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    만기 1년 이상<br />
                    :
                    중도상환원금X1%+중도상환원금X(중도상환수수료율-1%)X잔존기간/(대출기간-30일)
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-2',
                    'color-black',
                    'font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    만기 1년 미만<br />
                    : 중도상환원금X(중도상환수수료율)X잔존기간/(대출기간-30일)
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
                    'color-gray-tertiary',
                    'font-weight-regular',
                    'text-body-5',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']">※</div>
                  <div :class="$style['basic-list__content']">
                    중도상환수수료율 : 2%
                  </div>
                </li>
              </ul>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>취급수수료</KeyValueTitle>
            <KeyValueText>없음</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>대출부대비용</KeyValueTitle>
            <KeyValueText>
              5천만원 초과 실행 시 인지세 발생
              <div :class="$style['sub']">
                (인지세는 하나캐피탈과 금융소비자가 50%씩 부담합니다.)
              </div>
              <ul :class="[$style['basic-list'], 'row-margin-item']">
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
                    대출금액 5천만원 초과 1억원 이하 : 7만원
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
                  <div :class="$style['basic-list__symbol']">-</div>
                  <div :class="$style['basic-list__content']">
                    대출금액 1억원 초과 10억원 이하 : 15만원
                  </div>
                </li>
              </ul>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>연체이자율</KeyValueTitle>
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
                    'text-body-2',
                    'color-black',
                    'font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    유이자 : 약정이율+3%,
                    <div :class="$style['sub']">(법정최고금리 연 20% 이내)</div>
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-2',
                    'color-black',
                    'font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    무이자 : 상사약정금리+3%,
                    <div :class="$style['sub']">(법정최고금리 연 20% 이내)</div>
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
                    'color-gray-tertiary',
                    'font-weight-regular',
                    'text-body-5',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']">※</div>
                  <div :class="$style['basic-list__content']">
                    <div>
                      단,연체 발생 시점에 약정금리가 없는 경우는 아래의 사항을
                      적용함
                    </div>
                    <ul :class="[$style['basic-list'], 'row-margin-small']">
                      <li
                        :class="[
                          $style['basic-list__item'],
                          'color-black',
                          'font-weight-regular',
                          'text-body-5',
                        ]"
                      >
                        <div :class="$style['basic-list__symbol']">-</div>
                        <div :class="$style['basic-list__content']">
                          <div>
                            약정금리는 상법상 상사법정이율과 상호금융
                            가계자금대출금리 *중 높은 금리 적용
                          </div>
                          <div
                            class="text-body-5 color-gray-tertiary row-margin-small"
                          >
                            * 한국은행에서 매월 발표하는 가장 최근의
                            비은행금융기관 가중평균대출금리(신규대출 기준)
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>이자부과시기</KeyValueTitle>
            <KeyValueText> 매월 후취</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>구비서류</KeyValueTitle>
            <KeyValueText>
              <ul
                :class="[
                  $style['contents-list'],
                  $style['contents-list--small-margin'],
                  $style['margin-top-small'],
                ]"
              >
                <li :class="$style['contents-list__item']">
                  <div
                    :class="[
                      $style['contents-list__symbol'],
                      $style['contents-list__symbol--circle'],
                    ]"
                  >
                    1
                  </div>
                  <div
                    :class="[$style['contents-list__content'], 'text-body-2']"
                  >
                    <div>공통서류</div>
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
                          'text-body-4',
                          'color-black',
                          'font-weight-regular',
                        ]"
                      >
                        <div :class="$style['basic-list__symbol']">-</div>
                        <div :class="$style['basic-list__content']">
                          할부 대상품목의 견적서
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
                        <div :class="$style['basic-list__symbol']">-</div>
                        <div :class="$style['basic-list__content']">
                          할부신청서
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
                        <div :class="$style['basic-list__symbol']">-</div>
                        <div :class="$style['basic-list__content']">
                          의사면허증 사본
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
                        <div :class="$style['basic-list__symbol']">-</div>
                        <div :class="$style['basic-list__content']">
                          사업자등록증 사본
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
                        <div :class="$style['basic-list__symbol']">-</div>
                        <div :class="$style['basic-list__content']">
                          대표이사 인감증명서
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
                        <div :class="$style['basic-list__symbol']">-</div>
                        <div :class="$style['basic-list__content']">
                          대표이사 주민등록등본
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
                        <div :class="$style['basic-list__symbol']">-</div>
                        <div :class="$style['basic-list__content']">
                          대표이사 신분증 사본
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li :class="$style['contents-list__item']">
                  <div
                    :class="[
                      $style['contents-list__symbol'],
                      $style['contents-list__symbol--circle'],
                    ]"
                  >
                    2
                  </div>
                  <div
                    :class="[$style['contents-list__content'], 'text-body-2']"
                  >
                    <div>법인추가서류</div>
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
                          'text-body-4',
                          'color-black',
                          'font-weight-regular',
                        ]"
                      >
                        <div :class="$style['basic-list__symbol']">-</div>
                        <div :class="$style['basic-list__content']">
                          대표이사는 연대보증 필수
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
                        <div :class="$style['basic-list__symbol']">-</div>
                        <div :class="$style['basic-list__content']">
                          법인등기부등본
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
                        <div :class="$style['basic-list__symbol']">-</div>
                        <div :class="$style['basic-list__content']">
                          법인인감증명서
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
                        <div :class="$style['basic-list__symbol']">-</div>
                        <div :class="$style['basic-list__content']">
                          정관사본
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
                        <div :class="$style['basic-list__symbol']">-</div>
                        <div :class="$style['basic-list__content']">
                          이사회결의서
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
                        <div :class="$style['basic-list__symbol']">-</div>
                        <div :class="$style['basic-list__content']">
                          회사안내서
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </KeyValueText>
          </KeyValueItem>
        </KeyValueList>
      </UiTabPanel>
      <UiTabPanel name="PersonalLoanMedicalAppliancesTab001_002">
        <div :class="$style['step']">
          <ul :class="$style['step__list']">
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 1</div>
                  </div>
                  <div :class="$style['step__text']">
                    하나캐피탈 의료기할부
                    <strong>상담을 신청</strong>합니다.
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
                    <strong>상담 또는 전화</strong>로 대출가능 금액에 대해
                    상담을 합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconService />
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
                    <div :class="$style['step__badge']">STEP 4</div>
                  </div>
                  <div :class="$style['step__text']">
                    할부 약정시 담당자 고객님께
                    <strong>직접 방문</strong>합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconCustomerVisit />
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
                    고객님께서 <strong>원하시는 기기를 설치</strong>해 드리고,
                    담당 직원이 실사를 합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconInstallation />
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
                    판매업체에 <strong>기기금액을 입금</strong>해드립니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconDeposit />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </UiTabPanel>
      <UiTabPanel name="PersonalLoanMedicalAppliancesTab001_003">
        <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
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
              'font-weight-medium',
              'text-body-3',
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
              'font-weight-medium',
              'text-body-3',
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
              'font-weight-medium',
              'text-body-3',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              일정기간 원리금을 연체할 경우, 모든 원리금을 변제할 의무가 발생할
              수 있습니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              대출취급이 부적정한 경우(연체금 보유, 개인신용평점 낮음) 대출이
              제한될 수 있습니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              금융소비자의 개인신용평점에 따라 대출한도 및 금리가 차등
              적용됩니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              담보물건, 담보종류 등에 따라 대출조건이 차등 적용되며 담보물이
              부적합할 경우 대출이 제한될 수 있습니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              금융소비자는 해당상품에 대하여 설명을 받을 권리가 있으며, 그
              설명을 듣고 내용을 충분히 이해한 후 거래하시기 바랍니다
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              금리인하요구권 및 대출계약 철회권에 대한 자세한 사항은 당사
              홈페이지에서 확인하시기 바랍니다.
            </div>
          </li>
        </ul>
      </UiTabPanel>
    </UiTab>

    <ul :class="[$style['basic-list'], $style['margin-top-regular']]">
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          준법심의필 22-55<br />
          (2022.01.28~2023.01.27)
        </div>
      </li>
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          여신금융협회 심의필 제2022-C1h-00749호<br />
          (2022.02.04~2023.02.03)
        </div>
      </li>
    </ul>

    <BasicHr
      type="contents"
      theme="quaternary"
      className="row-margin-container"
    />

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <div :class="$style['icon-list__icon']"><IconCalculate /></div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__text']">월 납입금 계산</div>
              <div :class="$style['icon-list__title']">대출 계산기</div>
            </div>
          </button>
        </li>
      </ul>
    </div>
    <template v-slot:foot>
      <!-- Case : APP이 아닌 경우 -->
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton>앱에서 이용하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- //Case : APP이 아닌 경우 -->

      <!-- Case : APP인 경우 -->
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton theme="tertiary">연장신청</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton>상환신청</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- //Case : APP인 경우 -->
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PersonalLoanStock.scss';
</style>
