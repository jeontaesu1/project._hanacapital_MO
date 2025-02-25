<script>
// PF_M12_p001
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
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import TopButton from '@/components/ui/button/TopButton.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import IconMoney from '@/assets/images/icon/money.svg?component';
import IconRate from '@/assets/images/icon/rate.svg?component';
import IconDate from '@/assets/images/icon/date.svg?component';
import IconSearchMoney from '@/assets/images/icon/search-money.svg?component';
import IconCompleted from '@/assets/images/icon/completed.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconDeposit from '@/assets/images/icon/deposit.svg?component';
import IconCalculate from '@/assets/images/icon/calculate.svg?component';
import IconLogoMain from '@/assets/images/icon/logo-main.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    BasicBox,
    StickyBar,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    TopButton,
    IconMoney,
    IconRate,
    IconDate,
    IconSearchMoney,
    IconCompleted,
    IconSend,
    IconDeposit,
    IconCalculate,
    IconLogoMain,
    BottomSticky,
    BasicButton,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '하나모기지론');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => [
        {
          name: 'share',
          onClick: () => {
            alert('공유하기 클릭');
          },
        },
        {
          name: 'menu',
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
          상환 계획에 따라 최대 40년까지<br />
          아파트 담보대출
        </PageMainText>
      </PageTextGroup>

      <div :class="[$style['illustration-img'], 'row-margin-contents']">
        <img src="@/assets/images/contents/img-mortgage-loan.png" alt="" />
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
                <div :class="$style['product-detail__desc']">
                  시세의 최대 70%
                </div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconRate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">금리</div>
                <div :class="$style['product-detail__desc']">
                  <div>연 5.1 ~ 7.4%</div>
                  <div
                    :class="[
                      $style['product-detail__desc-sub'],
                      'font-weight-regular',
                    ]"
                  >
                    ※ 고객의 신용도 및 LTV에 따라 금리 차등 적용
                  </div>
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
                  <div>10년 ~ 40년</div>
                </div>
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
          <NavTabButton link="personalLoanERentalHouseTab001"
            >상품안내</NavTabButton
          >
          <NavTabButton link="personalLoanERentalHouseTab002"
            >진행절차</NavTabButton
          >
        </NavTab>
      </StickyBar>

      <!-- 상품안내 -->
      <UiTabPanel name="personalLoanERentalHouseTab001">
        <BasicBox theme="tertiary">
          <KeyValue align="left" margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대상</KeyValueTitle>
              <KeyValueText> 아파트를 담보로 제공하는 개인 </KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>한도</KeyValueTitle>
              <KeyValueText>
                <div>시세의 최대 70%</div>
                <!-- <div class="text-body-5 color-gray-tertiary row-margin-mini">
                  1111
                </div> -->
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>금리</KeyValueTitle>
              <KeyValueText :classNames="{ text: 'font-weight-medium' }">
                연 5.1 ~ 7.4%
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
            <KeyValueTitle
              :classNames="{
                title: 'font-weight-bold',
              }"
              >상환방법</KeyValueTitle
            >
            <KeyValueText>
              <div class="font-weight-bold">원리금균등분할상환</div>
              <div class="font-weight-bold">거치후 원리금균등분할상환</div>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle
              :classNames="{
                title: 'font-weight-bold',
              }"
              >중도상환수수료</KeyValueTitle
            >
            <KeyValueText>
              <div class="font-weight-bold">
                대출실행일 기준 경과기간에 따라 차등 적용되며,<br />
                3년 경과 시 면제
              </div>
              <ul :class="[$style['basic-list'], 'row-margin-item']">
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-4',
                    'font-weight-bold',
                    'color-black',
                  ]"
                >
                  <!-- <div :class="$style['basic-list__symbol']"></div> -->
                  <div :class="$style['basic-list__content']">
                    중도상환원금 X 1% + 중도상환원금 X (중도상환수수료율 - 1%) X
                    잔존기간 / (대출기간 - 30일)
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
                    대출기간이 3년 초과인 경우 대출기간은 3년으로 간주하며, 30일
                    미만 상환 시 대출기간을 30일로 간주
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
                    중도상환수수료율 : 최대 2%
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
                    중도상환수수료율은 상품의 자금운용 기회비용, 모집·행정비용에
                    따라 산정됩니다.<br />
                    본 대출의 중도상환수수료율은 약정서 ‘중도상환수수료’
                    부분에서 확인 가능합니다
                  </div>
                </li>
              </ul>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle
              :classNames="{
                title: 'font-weight-bold',
              }"
              >대출부대비용</KeyValueTitle
            >
            <KeyValueText>
              <div class="font-weight-bold">
                5천만원 초과 실행 시 인지세 발생
              </div>
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
                    'font-weight-bold',
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
                    'font-weight-bold',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']">-</div>
                  <div :class="$style['basic-list__content']">
                    대출금액 1억원 초과 10억원 이하 : 15만원
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
                    국민주택채권비용 및 확인서변비용, 주소이전비용,<br />
                    해지/감액/말소 등기 비용은 고객 부담입니다.
                  </div>
                </li>
              </ul>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle
              :classNames="{
                title: 'font-weight-bold',
              }"
              >연체이자율</KeyValueTitle
            >
            <KeyValueText>
              <div class="font-weight-bold">약정이율 + 3%</div>
              <div
                class="text-body-4 font-weight-bold color-gray-tertiary row-margin-mini"
              >
                (법정최고금리 연 20% 이내)
              </div>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle
              :classNames="{
                title: 'font-weight-bold',
              }"
              >이자부과시기</KeyValueTitle
            >
            <KeyValueText>
              <div class="font-weight-bold">매월 후취</div>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle
              :classNames="{
                title: 'font-weight-bold',
              }"
              >부동산 근저당설정</KeyValueTitle
            >
            <KeyValueText>
              <div class="font-weight-bold">설정비율: 대출금액의 120%</div>
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
                    설정비용은당사부담/해지비용은 금융소비자 부담
                  </div>
                </li>
              </ul>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle :classNames="{ title: 'font-weight-bold' }"
              >유의사항</KeyValueTitle
            >
            <KeyValueText>
              <ul
                :class="[$style['basic-list'], $style['basic-list--regular']]"
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
                    'font-weight-bold',
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
                    'font-weight-bold',
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
                    'font-weight-bold',
                    'text-body-3',
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
                    설명을 듣고 내용을 충분히 이해한 후 거래하시기 바랍니다.
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
                    금리인하요구권 및 대출계약 철회권에 대한 자세한 사항은
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
      <UiTabPanel name="personalLoanERentalHouseTab002">
        <div :class="$style['step']">
          <ul :class="$style['step__list']">
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 1</div>
                  </div>
                  <div :class="$style['step__text']">
                    본인인증 및 손님의 정보로<strong
                      >대출한도를<br />
                      조회하고 상담을 신청</strong
                    >합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconSearchMoney />
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
                    하나캐피탈과 협약된 상담사가<br />
                    연락드려 <strong>대출상담을 도와</strong>드립니다.
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
                    <div :class="$style['step__badge']">STEP 3</div>
                  </div>
                  <div :class="$style['step__text']">
                    대출조건 확인 후,
                    <strong
                      >약정서를 작성하고<br />
                      관련 서류를 제출</strong
                    >합니다.
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
                    제출하신 정보를 바탕으로 최종심사 후<br />
                    손님께 <strong>결과안내 및 담보를 설정</strong>합니다.
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
                    손님 계좌에 <strong>대출금을 입금</strong>해드립니다.
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

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            준법심의필 23-388<br />
            (2023.10.16 ~ 2024.10.15)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            여신금융협회 심의필 제2023-C1h-11550호<br />
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

    <div :class="$style['top-button-wrap']">
      <TopButton />
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
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>상담신청</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PersonalLoanERentalHouse.scss';
</style>
