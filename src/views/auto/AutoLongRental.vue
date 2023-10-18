<script>
// AF_M01_p001
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
import StickyBar from '@/components/ui/common/StickyBar.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

import IconPerson from '@/assets/images/icon/person.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';
import IconDate from '@/assets/images/icon/date.svg?component';
import IconCheckDocument from '@/assets/images/icon/check-document.svg?component';
import IconContract from '@/assets/images/icon/contract.svg?component';
import IconConsulting from '@/assets/images/icon/consulting.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconLogoMain from '@/assets/images/icon/logo-main.svg?component';
import ImgLongTermCarRental01 from '@/assets/images/illustration/img-long-term-car-rental01.svg?component';
import ImgLongTermCarRental02 from '@/assets/images/illustration/img-long-term-car-rental02.svg?component';
import ImgLongTermCarRental03 from '@/assets/images/illustration/img-long-term-car-rental03.svg?component';

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
    StickyBar,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    BottomSticky,

    IconPerson,
    IconCar,
    IconDate,
    IconCheckDocument,
    IconSend,
    IconContract,
    IconConsulting,
    IconLogoMain,
    ImgLongTermCarRental01,
    ImgLongTermCarRental02,
    ImgLongTermCarRental03,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '장기렌터카');
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
          로켓출고!<br />
          하나캐피탈 다이렉트 렌터카
        </PageMainText>
      </PageTextGroup>

      <div :class="[$style['illustration-img'], 'row-margin-contents']">
        <img
          src="@/assets/images/contents/img-long-term-car-rental-main.png"
          alt=""
        />
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
                  개인(사업자) 및 법인사업자
                </div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconCar />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">가능 차종</div>
                <div :class="$style['product-detail__desc']">
                  승용차 전 모델 (국산차,수입차)
                </div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconDate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">
                  렌트료 납부시기
                </div>
                <div :class="$style['product-detail__desc']">매월 후취</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconCheckDocument />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">만기후처리</div>
                <div :class="$style['product-detail__desc']">
                  반납, 구매, 연장, 선택가능
                </div>
              </div>
            </li>
          </ul>
        </div>
      </BasicBox>
    </div>

    <div class="row-margin-container-medium">
      <section class="row-margin-container-medium">
        <h3 class="text-title-1 font-weight-medium row-margin-item">
          세금보험료 걱정 NO!
        </h3>
        <p class="text-body-3 color-gray-tertiary">
          계약기간동안 자동차세와<br />
          각종 보험료를 절약해보세요.
        </p>
        <div :class="[$style['illustration-img'], 'row-margin-item-group']">
          <ImgLongTermCarRental01 />
        </div>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-1 font-weight-medium row-margin-item">
          맞춤요금제 선택!
        </h3>
        <p class="text-body-3 color-gray-tertiary">
          나에게 맞는 상품을 설정하여<br />
          월납입부담을 줄여보세요.
        </p>
        <div :class="[$style['illustration-img'], 'row-margin-item-group']">
          <ImgLongTermCarRental02 />
        </div>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-1 font-weight-medium row-margin-item">
          초기비용 ZERO!
        </h3>
        <p class="text-body-3 color-gray-tertiary">
          초기비용 걱정없이 다이렉트 렌트카로<br />
          저렴하게 이용해보세요.
        </p>
        <div :class="[$style['illustration-img'], 'row-margin-item-group']">
          <ImgLongTermCarRental03 />
        </div>
      </section>
    </div>

    <UiTab>
      <StickyBar>
        <NavTab :useUiTab="true" :auto="true">
          <NavTabButton link="autoLongRentalTab001">상품안내</NavTabButton>
          <NavTabButton link="autoLongRentalTab002">진행절차</NavTabButton>
          <NavTabButton link="autoLongRentalTab003">유의사항</NavTabButton>
        </NavTab>
      </StickyBar>

      <!-- 상품안내 -->
      <UiTabPanel name="autoLongRentalTab001">
        <BasicBox theme="tertiary">
          <KeyValue align="left" margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대상</KeyValueTitle>
              <KeyValueText>개인(사업자) 및 법인사업자 </KeyValueText>
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
                    계약기간 : 12개월 ~ 최대 60개월 까지
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
                      (국산차, 수입차 포함)
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
                    잔여렌트료 = 앞면표기 “월렌트료“ X (미청구 잔여개월 수 – 1
                    개월) + 해지시점 당월
                  </div>
                </li>
              </ul>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </UiTabPanel>
      <!-- // 상품안내 -->

      <!-- 진행절차 -->
      <UiTabPanel name="autoLongRentalTab002">
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
                    <strong>온라인약정 또는 오프라인 약정</strong>을<br />
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
      <UiTabPanel name="autoLongRentalTab003">
        <ul
          :class="[
            $style['basic-list'],
            $style['basic-list--regular'],
            $style['basic-list--regular-margin'],
          ]"
        >
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              렌터카 계약을 체결하기 전에 상품 설명서와 약관을 확인하시기
              바랍니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              일정기간 렌탈료를 연체할 경우, 모든 렌탈료(원리금)를 변제할 의무가
              발생할 수 있습니다. (연체이자 : 년 20%)
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              렌터카 취급이 부적정한 경우(연체금 보유, 개인신용평점 낮음) 취급이
              제한될 수 있습니다.
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

    <div
      class="flex-box justify-conten-end row-margin-contents row-margin-bottom-none"
    >
      <div class="flex-box__cell">
        <IconLogoMain class="display-block" />
      </div>
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
@import '@/assets/scss/views/auto/AutoLongRental.scss';
</style>
