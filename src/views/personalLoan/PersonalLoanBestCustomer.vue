<script>
// PF_M05_p001
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

import IconMoney from '@/assets/images/icon/money.svg?component';
import IconRate from '@/assets/images/icon/rate.svg?component';
import IconDate from '@/assets/images/icon/date.svg?component';
import IconSearchMoney from '@/assets/images/icon/search-money.svg?component';
import IconPersonalTerms from '@/assets/images/icon/personal-terms.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconContract from '@/assets/images/icon/contract.svg?component';
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

    IconMoney,
    IconRate,
    IconDate,
    IconSearchMoney,
    IconPersonalTerms,
    IconSend,
    IconContract,
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
      store.ui.header.setTitle(() => '우수고객추가대출');
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
          <strong>
            하나캐피탈 손님을 위한,<br />
            중도상환수수료 없는<br />
            쉽고 빠른 신용대출
          </strong>
        </PageMainText>
      </PageTextGroup>

      <div :class="[$style['illustration-img'], 'row-margin-contents']">
        <img src="@/assets/images/contents/img-vip-loan.png" alt="" />
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
                <div :class="$style['product-detail__desc']">5,000만원</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconRate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">최저금리</div>
                <div :class="$style['product-detail__desc']">연 5.9%</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconDate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">기간</div>
                <div :class="$style['product-detail__desc']">최대 84개월</div>
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
          <NavTabButton link="personalLoanBestCustomerTab001"
            >상품안내</NavTabButton
          >
          <NavTabButton link="personalLoanBestCustomerTab002"
            >진행절차</NavTabButton
          >
          <NavTabButton link="personalLoanBestCustomerTab003"
            >유의사항</NavTabButton
          >
        </NavTab>
      </StickyBar>

      <!-- 상품안내 -->
      <UiTabPanel name="personalLoanBestCustomerTab001">
        <BasicBox theme="tertiary">
          <KeyValue align="left" margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대상</KeyValueTitle>
              <KeyValueText>
                하나캐피탈 우수거래고객 및<br />
                하나캐피탈 멤버십 우수회원
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>한도</KeyValueTitle>
              <KeyValueText>최대 5천만원 (최저 300만원)</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>금리</KeyValueTitle>
              <KeyValueText :classNames="{ text: 'font-weight-bold' }">
                연 5.9% ~ 19.9%
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>기간</KeyValueTitle>
              <KeyValueText>12개월 ~ 84개월</KeyValueText>
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
            <KeyValueTitle>중도상환수수료</KeyValueTitle>
            <KeyValueText>없음</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>연체이자율</KeyValueTitle>
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
            <KeyValueTitle>이자부과시기</KeyValueTitle>
            <KeyValueText>매월 후취</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </UiTabPanel>
      <!-- // 상품안내 -->

      <!-- 진행절차 -->
      <UiTabPanel name="personalLoanBestCustomerTab002">
        <div :class="$style['step']">
          <ul :class="$style['step__list']">
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 1</div>
                  </div>
                  <div :class="$style['step__text']">
                    본인인증 및 손님의 정보로<br />
                    <strong>대출한도를 조회</strong>합니다.
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
                    고객님이 원하는 조건으로<br />
                    <strong>대출을 신청</strong>합니다.
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
                    <div :class="$style['step__badge']">STEP 3</div>
                  </div>
                  <div :class="$style['step__text']">
                    신청하신 정보를 바탕으로 최종심사 후<br />
                    손님께 <strong>결과를 안내</strong>해드립니다.
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
                    온라인으로 <strong>약정을 진행</strong>합니다.
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
                    <div :class="$style['step__badge']">STEP 5</div>
                  </div>
                  <div :class="$style['step__text']">
                    손님 계좌로 <strong>대출금을 입금</strong>해드립니다.
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
      <UiTabPanel name="personalLoanBestCustomerTab003">
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

        <ul :class="[$style['basic-list'], 'row-margin-contents']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              준법심의필 22-986<br />
              (2022.03.22~2023.03.21)
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              여신금융협회 심의필 제2022-L1h-02243호<br />
              (2022.03.22~2023.03.21)
            </div>
          </li>
        </ul>
      </UiTabPanel>
      <!-- // 유의사항 -->
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
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>한도조회</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PersonalLoanBestCustomer.scss';
</style>
