<script>
// PF_M07_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
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
import BottomSticky from '@/components/ui/common/BottomSticky.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconMoney from '@/assets/images/icon/money.svg?component';
import IconRate from '@/assets/images/icon/rate.svg?component';
import IconDate from '@/assets/images/icon/date.svg?component';
import IconCommission from '@/assets/images/icon/commission.svg?component';
import IconPersonalTerms from '@/assets/images/icon/personal-terms.svg?component';
import IconCompany from '@/assets/images/icon/company.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconCompleted from '@/assets/images/icon/completed.svg?component';
import IconDeposit from '@/assets/images/icon/deposit.svg?component';
import IconCalculate from '@/assets/images/icon/calculate.svg?component';
import IconLogoMain from '@/assets/images/icon/logo-main.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    KeyValue,
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
    BottomSticky,
    TextButton,

    IconMoney,
    IconRate,
    IconDate,
    IconCommission,
    IconPersonalTerms,
    IconCompany,
    IconSend,
    IconCompleted,
    IconDeposit,
    IconCalculate,
    IconLogoMain,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '스탁론');
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
          주식매입자금을 위한<br />
          자금지원 금융서비스
        </PageMainText>
        <PageSubText>본인명의 증권위탁계좌 질권설정</PageSubText>
      </PageTextGroup>

      <div :class="[$style['illustration-img'], 'row-margin-contents']">
        <img src="@/assets/images/contents/img-stock-loan.png" alt="" />
      </div>

      <BasicBox theme="secondary">
        <div
          :class="[$style['product-detail'], $style['product-detail--small']]"
        >
          <ul :class="$style['product-detail__list']">
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconMoney />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">최대한도</div>
                <div :class="$style['product-detail__desc']">6억원</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconRate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">금리</div>
                <div :class="$style['product-detail__desc']">연 5.9 ~ 7.5%</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconDate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">기간</div>
                <div :class="$style['product-detail__desc']">12개월</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconCommission />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">
                  중도상환수수료
                </div>
                <div :class="$style['product-detail__desc']">0원</div>
              </div>
            </li>
          </ul>
        </div>
      </BasicBox>
    </div>

    <UiTab
      :classNames="{
        wrap: 'row-margin-container-medium row-margin-bottom-none',
      }"
    >
      <StickyBar>
        <NavTab :useUiTab="true" :auto="true">
          <NavTabButton link="personalLoanStockTab001">상품안내</NavTabButton>
          <NavTabButton link="personalLoanStockTab002">진행절차</NavTabButton>
          <NavTabButton link="personalLoanStockTab003">유의사항</NavTabButton>
        </NavTab>
      </StickyBar>

      <!-- 상품안내 -->
      <UiTabPanel name="personalLoanStockTab001">
        <BasicBox theme="tertiary">
          <KeyValue align="left" margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대상</KeyValueTitle>
              <KeyValueText>만 20세 이상 개인 고객</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>한도</KeyValueTitle>
              <KeyValueText>
                <div>최대 6억원</div>
                <div class="text-body-5 color-gray-tertiary row-margin-mini">
                  고객계좌를 담보로 계좌평가금액의 최대 300%, 최대 6억원(계좌당
                  3억원)까지
                </div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>금리</KeyValueTitle>
              <KeyValueText>연 5.9 ~ 7.5%</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>기간</KeyValueTitle>
              <KeyValueText>12개월(최대 5년)</KeyValueText>
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
            <KeyValueText>만기일시상환</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>중도상환수수료</KeyValueTitle>
            <KeyValueText>없음</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>대출부대비용</KeyValueTitle>
            <KeyValueText>
              <div>5천만원 초과 실행 시 인지세 발생</div>
              <div
                class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
              >
                (인지세는 하나캐피탈과 금융소비자가 50%씩 부담합니다.)
              </div>
              <ul :class="[$style['basic-list'], 'row-margin-item']">
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
                    대출금액 5천만원 초과 1억원 이하 : 7만원
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
                    대출금액 1억원 초과 10억원 이하 : 15만원
                  </div>
                </li>
              </ul>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>연체이자율</KeyValueTitle>
            <KeyValueText>
              <div>약정이율 + 3%</div>
              <div
                class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
              >
                (법정최고금리 연 20% 이내)
              </div>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>시간</KeyValueTitle>
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
                    'font-weight-regular',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    대출 : 08:10 ~ 16:00
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
                    <div>상환 : 08:30 ~ 16:00</div>
                    <div
                      class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
                    >
                      (토,일,공휴일은 불가합니다.)
                    </div>
                  </div>
                </li>
              </ul>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>이자부과시기</KeyValueTitle>
            <KeyValueText>매월 후취</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle :classNames="{ title: 'row-margin-item' }">
              스탁론 위험성 안내
            </KeyValueTitle>
            <KeyValueText>
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
                      <div
                        :class="[$style['contents-list__title'], 'color-green']"
                      >
                        리스크관리시스템(RMS) 자동제한을 통해 종목매수제한 및
                        보유제한을 두고 있습니다.
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">2</div>
                      <div :class="$style['contents-list__title']">
                        <span class="color-green">
                          담보유지비율 하락으로 인한 반대매매, 보유불가종목
                          반대매매 등 담보관리를 위한 여러가지 제한이 있으니
                          계좌운용규칙을 충분히 숙지하시기 바랍니다.</span
                        ><TextButton
                          theme="quinary"
                          :classNames="{ wrap: $style['account-guide'] }"
                          >[계좌운용규칙 열람]</TextButton
                        >
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">3</div>
                      <div :class="$style['contents-list__title']">
                        주식 입/출고 및 대체가 제한되며, 계좌 내 일부 현금출금이
                        제한됩니다.
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">4</div>
                      <div :class="$style['contents-list__title']">
                        주가 하락 시에는 대출금 및 투자원금의 일부 또는 전부를
                        잃을 수 있으니 투자에 유의하시기 바랍니다.
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">5</div>
                      <div :class="$style['contents-list__title']">
                        상품의 위험성을 인지하시어 안정적인 투자를 위해 증권계좌
                        담보평가비율 관리를 철저히 해주시기 바랍니다.
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle :classNames="{ title: 'row-margin-item' }">
              추가대출안내
            </KeyValueTitle>
            <KeyValueText>
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
                      <div :class="$style['contents-list__title']">
                        담보평가액에 따라 한도 내 추가 대출 신청가능
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">2</div>
                      <div :class="$style['contents-list__title']">
                        기존 집중투자비율 60~80% 상품은 15년 6월 15일부터
                        추가대출 불가
                      </div>
                    </div>
                    <div
                      :class="[
                        $style['contents-list__depth-3'],
                        'row-margin-mini',
                      ]"
                    >
                      <p
                        class="text-body-4 font-weight-light color-gray-tertiary"
                      >
                        단, 한도대출(마이너스식)은 변경된 대출비율에 한해 한도내
                        추가대출 가능
                      </p>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">3</div>
                      <div :class="$style['contents-list__title']">
                        추가대출가능금액 = (계좌평가금액 - 대출잔액) ×
                        대출가능비율 - 대출잔액
                      </div>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">4</div>
                      <div :class="$style['contents-list__title']">
                        최초 대출금액과 상관없이 추가대출금액에 대해 인지대
                        7만원~15만원 발생
                      </div>
                    </div>
                    <div
                      :class="[
                        $style['contents-list__depth-3'],
                        'row-margin-mini',
                      ]"
                    >
                      <p
                        class="text-body-4 font-weight-light color-gray-tertiary"
                      >
                        (신규대출과 동일)
                      </p>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">5</div>
                      <div :class="$style['contents-list__title']">
                        최초대출과 추가대출은 별개의 약정이므로 상품조건(금리,
                        사용기간, 결제일자, 만기일자)이 상이할 수 있음
                      </div>
                    </div>
                    <div
                      :class="[
                        $style['contents-list__depth-3'],
                        'row-margin-mini',
                      ]"
                    >
                      <p
                        class="text-body-4 font-weight-light color-gray-tertiary"
                      >
                        (상품포트폴리오는 동일함)
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>이용가이드</KeyValueTitle>
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
                    'font-weight-regular',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    대출신청시간: 증권사 영업일 08:10~16:00(토,일, 공휴일은
                    제외)
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
                    증권계좌보유: 대출을 받고자 하는 증권계좌에 100만원 이상
                    보유 시 신청이 가능합니다.
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
                    본인인증과정:본인명의의 공동인증서로 인증 후 신청할 수
                    있으며, 일 5회이상 오류 시 당일 대출신청을 할 수 없습니다.
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
                    <div>
                      인지대: 대출 실행 시 인지대(7만원~15만원)이 발생합니다.
                    </div>
                    <div
                      class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
                    >
                      (단, 인지대는 본인 및 하나캐피탈 각각 50%씩 부담, 대출금
                      5천만원 이하 인지대 없음)
                    </div>
                  </div>
                </li>
              </ul>
              <ul :class="[$style['basic-list'], 'row-margin-item']">
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
                    대출가능금액 신청을 위한 계좌평가시 RMS(리스크관리시스템)
                    운용 규칙에 따라 일부 종목은 평가대상에서 제외될 수
                    있습니다.<br />
                    대출 신청 시 개인신상정보 및 직장정보를 정확하게 입력해
                    주셔야 합니다.
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
                    입력하신 개인신상정보는 한국신용정보의 개인신용정보시스템과
                    내부신용평가 프로그램, 기존 거래내역 조회 등을 통해 확인을
                    거치므로 허위로 작성하실 경우 대출이 이루어지지 않습니다.
                  </div>
                </li>
              </ul>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </UiTabPanel>
      <!-- // 상품안내 -->

      <!-- 진행절차 -->
      <UiTabPanel name="personalLoanStockTab002">
        <div :class="$style['step']">
          <ul :class="$style['step__list']">
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 1</div>
                  </div>
                  <div :class="$style['step__text']">
                    <strong>성명, 주민등록번호, 휴대폰번호</strong>를<br />
                    입력합니다.
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
                    <div :class="$style['step__badge']">STEP 2</div>
                  </div>
                  <div :class="$style['step__text']">
                    <strong>거주지, 직장주소, 전화번호</strong> 등을<br />
                    입력합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconCompany />
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
                    <strong>대출약정, 질권설정, 약관동의</strong> 등을<br />
                    확인합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconCompleted />
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
                    계좌로 <strong>대출금을 입금</strong>해드립니다.
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
      <!-- // 진행절차 -->

      <!-- 유의사항 -->
      <UiTabPanel name="personalLoanStockTab003">
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
              <div>
                대출취급이 부적정한 경우(연체금 보유, 개인신용평점 낮음) 대출이
                제한될 수 있습니다.
              </div>
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
                    보유 주식이 당사 취급제한 품목에 해당될 경우 대출이 제한될
                    수 있습니다.
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              금융소비자의 거래 증권사 상품에 따라 금리가 차등 적용됩니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              금융소비자는 해당상품에 대하여 설명을 받을 권리가 있으며, 그
              설명을 듣고 내용을 충분히 이해한 후 거래하시기 바랍니다.
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
      <!-- // 유의사항 -->

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            준법심의필 22-134<br />
            (2022.02.24~2023.02.23)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            여신금융협회 심의필 제2022-L1h-01579호<br />
            (2022.02.28~2023.02.27)
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
      <BottomSticky>
        <div class="bottom-wrap">
          <!-- Case : Web -->
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>앱에서 이용하기</BasicButton>
            </ButtonListItem>
          </ButtonList>
          <!-- // Case : Web -->

          <!-- Case : App -->
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
          <!-- // Case : App -->
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PersonalLoanStock.scss';
</style>
