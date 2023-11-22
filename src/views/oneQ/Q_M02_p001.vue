<script>
// Q_M02_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiLayoutStore } from '@/stores/ui/layout';
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
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

import IconContract from '@/assets/images/icon/contract.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconConsulting from '@/assets/images/icon/consulting.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';

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
    BottomSticky,
    IconContract,
    IconSend,
    IconConsulting,
    IconCar,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        layout: useUiLayoutStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.layout.setUseFooter(false);

      store.ui.header.setTitle(() => '장기렌터카');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
      store.ui.header.setTheme(() => 'secondary');
    });

    onUnmounted(() => {
      store.ui.layout.setUseFooter();

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
    </div>

    <div class="row-margin-container-medium">
      <BasicBox theme="tertiary">
        <KeyValue align="left" margin="regular" size="regular-small">
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
                  계약기간 : 12개월 ~ 최대 60개월
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
                  <div :class="$style['sub']">(국산차, 수입차 포함)</div>
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
                  <div>렌트료 포함 내역 : 취득세, 보험료, 자동차세, 정비료</div>
                  <div :class="$style['sub']">
                    (계약 내용에 따라 정비료 여부 차이)
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
                  <div :class="$style['sub']">(운행패턴에 따라 고객 선택)</div>
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
                <div :class="$style['basic-list__content']">
                  잔여렌트료 = 앞면표기 “월렌트료“ X (미청구 잔여개월 수 – 1
                  개월) + 해지시점 당월
                </div>
              </li>
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

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                'row-margin-contents',
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
                  <div class="row-margin-item">초과운행부담금 ①</div>
                  <div class="text-body-4">
                    [초과운행 KM - 우예주행거리] X KM 당 초과 운행부담금<br />
                    (국산차100원 / 수입차 300원)
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
                  <div class="row-margin-item">반환지연금 ②</div>
                  <div class="text-body-4">
                    계약 만기 또는 중도해지시 반환을 지체 하였을 경우 반환지연금
                    발생<br />
                    반환지연금 - 일렉트료 X 경과일수 X 200%<br />
                    (일렌트료 = 월렌트료/30)
                  </div>
                </div>
              </li>
            </ul>
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <BasicHr
        type="contents"
        theme="quaternary"
        className="row-margin-container"
      />

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
                  신청정보 확인하여 <strong>결과를 안내</strong>해<br />
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

      <BasicHr
        type="contents"
        theme="quaternary"
        className="row-margin-container"
      />

      <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-3']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            렌터카 계약을 체결하기 전에 상품설명서와 약관을 확인하시기 바랍니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-3']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            일정기간 렌탈료를 연체할 경우 모든 렌탈료(원리금)를 변제할 의무가
            발생할 수 있습니다. (연체이자 연 20%)
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-3']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            렌탈카 취급이 부적정한 경우 (연체금 보유, 개인신용평점 낮음) 취급이
            제한될 수 있습니다.
          </div>
        </li>
      </ul>

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            준법심의필 23-163<br />
            (2023.06.01 ~ 2024.05.31)
          </div>
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
@import '@/assets/scss/views/oneQ/Q_M02_p001.scss';
</style>
