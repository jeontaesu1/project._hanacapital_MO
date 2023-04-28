<script>
// My_M08_p003
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

import IconPhone from '@/assets/images/icon/phone.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconPersonalTerms from '@/assets/images/icon/personal-terms.svg?component';
import IconDeposit from '@/assets/images/icon/deposit.svg?component';
import IconCall from '@/assets/images/icon/call.svg?component';
import IconDocumentComplete from '@/assets/images/icon/document-complete.svg?component';
import IconContract from '@/assets/images/icon/contract.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';
import IconDocument2 from '@/assets/images/icon/document2.svg?component';
import IconCarSecurity2 from '@/assets/images/icon/car-security2.svg?component';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicHr,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicButton,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    ButtonList,
    ButtonListItem,
    NoticeText,
    TextButton,
    IconPhone,
    IconSend,
    IconPersonalTerms,
    IconDeposit,
    IconCall,
    IconDocumentComplete,
    IconContract,
    IconCar,
    IconDocument2,
    IconCarSecurity2,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '만기후처리');
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
  <UiTab v-slot="tabSlotProps">
    <PageContents>
      <PageTextGroup>
        <PageMainText>
          오토리스 계약 만기 1개월 전까지<br />
          <strong>만기후처리를 반드시 선택해 주세요</strong>
        </PageMainText>
      </PageTextGroup>
      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <div class="text-body-1 font-weight-medium">오토리스 07호3994</div>
          </BasicBoxHeadLeft>
        </BasicBoxHead>
        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{ item: 'text-body-3 font-weight-regular' }"
          >
            <KeyValueTitle>계약기간</KeyValueTitle>
            <KeyValueText>2016.01.01 ~ 2021.01.01</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{ item: 'text-body-3 font-weight-regular' }"
          >
            <KeyValueTitle>잔존가치</KeyValueTitle>
            <KeyValueText>99,999,999 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{ item: 'text-body-3 font-weight-regular' }"
          >
            <KeyValueTitle>보증금</KeyValueTitle>
            <KeyValueText>99,999,999 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{ item: 'text-body-3 font-weight-regular' }"
          >
            <KeyValueTitle>실납리스료</KeyValueTitle>
            <KeyValueText>99,999,999 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{ item: 'text-body-3 font-weight-regular' }"
          >
            <KeyValueTitle>자동차세</KeyValueTitle>
            <KeyValueText>포함</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{ item: 'text-body-3 font-weight-regular' }"
          >
            <KeyValueTitle>약정주행거리</KeyValueTitle>
            <KeyValueText>999,999 km</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <BasicHr className="row-margin-container-medium" />

      <NavTab :useUiTab="true" :scroll="true" :auto="true">
        <NavTabButton link="testNavTab001_001">연장</NavTabButton>
        <NavTabButton link="testNavTab001_002">반환</NavTabButton>
        <NavTabButton link="testNavTab001_003">구매</NavTabButton>
      </NavTab>

      <UiTabPanel name="testNavTab001_001">
        <h3 class="text-title-2 row-margin-contents">만기후 연장 진행절차</h3>
        <div :class="$style['step']">
          <ul :class="$style['step__list']">
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 1</div>
                  </div>
                  <div :class="$style['step__text']">
                    홈페이지/모바일(웹)을 통하여
                    <strong>재리스 신청 및 견적을 요청</strong>합니다.<br />
                    (신용조회동의)
                  </div>
                </div>
                <div :class="$style['step__icon']">
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
                    신청내역을 확인하여
                    <strong>심사결과를 안내</strong>드립니다.
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
                    <strong>서면약정 또는 온라인약정</strong>으로 계약이
                    진행됩니다.
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
                    입금/지급 <strong>금액을 정산</strong>합니다.
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
                    계약사항에 대해<strong>이해하였음을 유선상 확인</strong
                    >합니다.
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
                    <strong>재리스가 완료</strong>됩니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconDocumentComplete />
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">상품안내</h3>

          <ul class="reset-list">
            <li class="row-margin-contents">
              <h4
                :class="[
                  $style['notice-section__title'],
                  'font-weight-regular',
                  'color-gray-secondary',
                ]"
              >
                금리
              </h4>
              <p class="text-body-2 font-weight-regular">금융리스 : 연 4~10%</p>
            </li>
            <li class="row-margin-contents">
              <h4
                :class="[
                  $style['notice-section__title'],
                  'font-weight-regular',
                  'color-gray-secondary',
                ]"
              >
                연체이자율
              </h4>
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
                  <div :class="[$style['basic-list__content']]">
                    금융리스: 약정이율+3%
                    <br />
                    <span class="text-body-4 font-weight-light"
                      >(법정최고금리 연20% 이내)</span
                    >
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
                  <div :class="[$style['basic-list__content']]">
                    운용리스: 연20%
                  </div>
                </li>
              </ul>
            </li>

            <li class="row-margin-contents">
              <h4
                :class="[
                  $style['notice-section__title'],
                  'font-weight-regular',
                  'color-gray-secondary',
                ]"
              >
                연장기간
              </h4>
              <p class="text-body-2 font-weight-regular">
                12개월 ~ 60개월
                <br />
                <span class="text-body-4 font-weight-light"
                  >(내용연수기간 이내)</span
                >
              </p>

              <div :class="[$style['basic-list'], 'row-margin-item']">
                <div :class="$style['basic-list__item']">
                  <div :class="$style['basic-list__symbol']">※</div>
                  <div :class="$style['basic-list__content']">
                    내용연수: 운용리스 60개월, 금융리스 84개월 (이전 계약기간
                    포함)
                  </div>
                </div>
              </div>
            </li>
            <li class="row-margin-contents">
              <h4
                :class="[
                  $style['notice-section__title'],
                  'font-weight-regular',
                  'color-gray-secondary',
                ]"
              >
                상환방법
              </h4>
              <p class="text-body-2 font-weight-regular">
                원리금균등상환
                <br />
                <span class="text-body-4 font-weight-light"
                  >(월 리스료 자동이체(통장))</span
                >
              </p>
            </li>
            <li class="row-margin-contents">
              <h4
                :class="[
                  $style['notice-section__title'],
                  'font-weight-regular',
                  'color-gray-secondary',
                ]"
              >
                이자납부시기
              </h4>
              <p class="text-body-2 font-weight-regular">매월 후취</p>
            </li>

            <li class="row-margin-contents">
              <h4
                :class="[
                  $style['notice-section__title'],
                  'font-weight-regular',
                  'color-gray-secondary',
                ]"
              >
                차량소유권
              </h4>
              <p class="text-body-2 font-weight-regular">
                하나캐피탈
                <br />
                <span class="text-body-4 font-weight-light"
                  >(단, 이용자명의 시 저당설정 추가)</span
                >
              </p>
            </li>

            <li class="row-margin-contents">
              <h4
                :class="[
                  $style['notice-section__title'],
                  'font-weight-regular',
                  'color-gray-secondary',
                ]"
              >
                수수료
              </h4>
              <div :class="$style['basic-table']">
                <table>
                  <colgroup>
                    <col style="width: 65px" />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>손해<br />배상금</th>
                      <td class="align-left">
                        <div :class="$style['contents-list']">
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
                                <div
                                  :class="[
                                    $style['contents-list__title'],
                                    'row-margin-mini',
                                  ]"
                                >
                                  <div class="text-body-4">
                                    중도해지손해배상금
                                  </div>
                                  <p
                                    class="text-caption-1 font-weight-light row-margin-small"
                                  >
                                    미회수원금 X 중도해지손해배상금률
                                  </p>
                                  <p class="text-caption-1 font-weight-light">
                                    미회수원금 X 최고요율(80)% X (잔여기간
                                    월수/리스기간 전체월수)
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li :class="$style['contents-list__item']">
                              <div :class="$style['contents-list__head']">
                                <div :class="$style['contents-list__symbol']">
                                  주2
                                </div>
                                <div
                                  :class="[
                                    $style['contents-list__title'],
                                    'row-margin-mini',
                                  ]"
                                >
                                  <div class="text-body-4">
                                    규정손해배상금(차랑인수-운용리스)
                                  </div>
                                  <p
                                    class="text-caption-1 font-weight-light row-margin-small"
                                  >
                                    미회수원금 X 규정손해배상금률
                                  </p>
                                  <p class="text-caption-1 font-weight-light">
                                    미회수원금 X 최고요율(20)% X (잔여기간
                                    월수/리스기간 전체월수)
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li :class="$style['contents-list__item']">
                              <div :class="$style['contents-list__head']">
                                <div :class="$style['contents-list__symbol']">
                                  주3
                                </div>
                                <div
                                  :class="[
                                    $style['contents-list__title'],
                                    'row-margin-mini',
                                  ]"
                                >
                                  <div class="text-body-4">
                                    규정손해배상금(차량인수-금융리스)
                                  </div>
                                  <p
                                    class="text-caption-1 font-weight-light row-margin-small"
                                  >
                                    미회수원금 X 규정손해배상금률
                                  </p>
                                  <p class="text-caption-1 font-weight-light">
                                    미회수원금 X 최고요율(4)% X (잔여기간
                                    월수/리스기간 전체월수)
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ol>
                        </div>

                        <div class="row-margin-item">
                          <div :class="[$style['basic-list']]">
                            <div
                              :class="[
                                $style['basic-list__item'],
                                'color-black',
                              ]"
                            >
                              <div :class="$style['basic-list__symbol']">※</div>
                              <div :class="$style['basic-list__content']">
                                단, 금융리스의 경우 대부업법에서 정하는
                                최고이자율을 초과하지 않는 범위로 합니다.
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>승계<br />수수료</th>
                      <td class="align-left">
                        <p class="row-margin-small text-body-4">
                          운용리스, 금융리스
                        </p>
                        <p
                          class="row-margin-none text-caption-1 font-weight-light"
                        >
                          미회수원금의 1%(승계수수료 최고 요율) X (잔여기간
                          월수/리스기간 전체 월수) (min: 500,000원, max:
                          900,000원)
                        </p>

                        <div class="row-margin-item">
                          <div :class="[$style['basic-list']]">
                            <div
                              :class="[
                                $style['basic-list__item'],
                                'color-black',
                              ]"
                            >
                              <div :class="$style['basic-list__symbol']">※</div>
                              <div :class="$style['basic-list__content']">
                                단, 금융리스의 경우 대부업법에서 정하는
                                최고이자율을 초과하지 않는 범위로 합니다.
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul :class="[$style['basic-list'], 'row-margin-item']">
                <li :class="$style['basic-list__item']">
                  <div :class="$style['basic-list__symbol']">※</div>
                  <div :class="$style['basic-list__content']">
                    주1) ‘중도해지손해배상금’은 고객이 계약의 중도해지를 이유로
                    자동차를 반환하고자 할 때 ‘자동차리스 표준약관’ 제24조에
                    따라 금융회사에 발생한 손해를 배상하기 위하여 지급해야 하는
                    금액을 의미합니다.
                  </div>
                </li>
                <li :class="$style['basic-list__item']">
                  <div :class="$style['basic-list__symbol']">※</div>
                  <div :class="$style['basic-list__content']">
                    주2) 규정손해배상금은 고객이 계약의 중도해지를 이유로
                    자동차를 매입하고자 할 때 ‘자동차리스 표준약관’ 제23조에
                    따라 금융회사에 발생한 손해를 배상하기 위하여 지급해야 하는
                    금액을 의미합니다.
                  </div>
                </li>
              </ul>
            </li>

            <li class="row-margin-contents">
              <h4
                :class="[
                  $style['notice-section__title'],
                  'font-weight-regular',
                  'color-gray-secondary',
                ]"
              >
                기타비용
              </h4>
              <p class="text-body-2 font-weight-regular">
                저당설정(연장기간까지 유지)
              </p>
              <div :class="[$style['basic-list'], 'row-margin-item']">
                <div :class="$style['basic-list__item']">
                  <div :class="$style['basic-list__symbol']">※</div>
                  <div :class="$style['basic-list__content']">
                    근저당해지비용 금융소비자 부담
                  </div>
                </div>
              </div>
            </li>

            <li class="row-margin-contents">
              <h4
                :class="[
                  $style['notice-section__title'],
                  'font-weight-regular',
                  'color-gray-secondary',
                ]"
              >
                대출부대비용
              </h4>
              <p class="text-body-4 font-weight-light">
                (인지세는 하나캐피탈과 금융소비자가 50%씩 부담합니다.)
                <br />
                <span class="text-body-4 font-weight-regular color-black"
                  >- 인지세 1만원</span
                >
              </p>
            </li>

            <li class="row-margin-contents">
              <h4
                :class="[
                  $style['notice-section__title'],
                  'font-weight-regular',
                  'color-gray-secondary',
                ]"
              >
                만기시 유의사항
              </h4>
              <p class="text-body-2 font-weight-regular">
                만기 시 차량을 매입하실 경우 손님의 명의로 이전하는데 필요한
                취득세 등의 제세공과금이 발생할 수 있으며, 이는 손님이
                부담하셔야 합니다.
              </p>
              <p class="text-body-2 font-weight-regular row-margin-item">
                운용리스의 경우, 만기 차량 반납 시 사고이력 또는 약정주행거리
                초과에 따라 별도의 감가비용이 추가로 발생할 수 있습니다.
              </p>
              <p class="text-body-2 font-weight-regular">
                차량 반납시 유의사항을 꼭 확인하여 주시기 바랍니다.
              </p>
            </li>
          </ul>
          <div class="row-margin-contents">
            <TextButton :underline="true" theme="secondary"
              >차량 반납 시 유의사항</TextButton
            >
          </div>
        </div>
        <div>
          <h3 class="text-title-2 row-margin-contents">유의사항</h3>
          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                계약을 체결하기 전에 자세한 내용은 상품설명서와 약관을
                읽어보시기 바랍니다.
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
              <div
                :class="[$style['basic-list__content'], 'font-weight-medium']"
              >
                상환능력에 비해 대출금이 과도할 경우 귀하의 신용등급 또는
                개인신용평점이 하락할 수 있습니다.
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
              <div
                :class="[$style['basic-list__content'], 'font-weight-medium']"
              >
                개인신용평점 하락 시 금융거래와 관련된 불이익 발생할 수
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
              <div
                :class="[$style['basic-list__content'], 'font-weight-medium']"
              >
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
                대출취급이 부적정한 경우(연체금 보유, 개인신용평점 낮음) 대출이
                제한될 수 있습니다.
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
                금리인하요구권 및 대출계약 철회권에 대한 자세한 사항은 당사
                홈페이지에서 확인하시기 바랍니다.
              </div>
            </li>
          </ul>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--normal-margin'],
              'row-margin-contents',
            ]"
          >
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                준법심의필 xx-xxxx<br />
                (2022.01.01~2022.12.31)
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                여신금융협회 심의필 제xxxx-xxx-xxxxx호<br />
                (2022.01.01~2022.12.31)
              </div>
            </li>
          </ul>
        </div>
      </UiTabPanel>

      <UiTabPanel name="testNavTab001_002">
        <h3 class="text-title-2 row-margin-contents">만기후 반환 진행절차</h3>
        <div :class="$style['step']">
          <ul :class="$style['step__list']">
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 1</div>
                  </div>
                  <div :class="$style['step__text']">
                    반환 일시, 장소 등
                    <strong>반환정보를 등록</strong>합니다.
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
                    <div :class="$style['step__badge']">STEP 2</div>
                  </div>
                  <div :class="$style['step__text']">
                    지정 일시, 장소에서
                    <strong>자동차를 반환</strong>합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconCar />
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
                    지정 평가기관에서
                    <strong>반환자동차의 상태 및 성능을 평가</strong
                    >합니다.라인약정으로 계약이 진행됩니다.
                  </div>

                  <NoticeText class="row-margin-item-small font-weight-regular"
                    >평가결과에 따라 ‘차량평가정산금’이 발생될 수
                    있습니다.</NoticeText
                  >
                </div>
                <div :class="$style['step__icon']">
                  <IconDocument2 />
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
                    반환등록 시
                    <strong>발생 비용을 정산</strong> (입금/지급)합니다.
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
                    <strong>반환처리가 완료</strong>됩니다.
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

      <UiTabPanel name="testNavTab001_003">
        <h3 class="text-title-2 row-margin-contents">만기후 구매 진행절차</h3>
        <div :class="$style['step']">
          <ul :class="$style['step__list']">
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 1</div>
                  </div>
                  <div :class="$style['step__text']">
                    <strong>구매방법</strong>(직접/이전대행)선택 및
                    <strong>구매정보</strong>(매도용 인감신청정보)를 입력합니다.
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
                    <div :class="$style['step__badge']">STEP 2</div>
                  </div>
                  <div :class="$style['step__text']">
                    구매 등록 시
                    <strong>발생 비용을 정산</strong> (입금/지급)합니다.
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
                    <div :class="$style['step__badge']">STEP 3</div>
                  </div>
                  <div :class="$style['step__text']">
                    차량 명의를 고객명의로
                    <strong>소유권 이전등록</strong> 합니다.
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
                    <strong>구매 처리가 완료</strong>됩니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconCarSecurity2 />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </UiTabPanel>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton v-if="tabSlotProps.activeName === 'testNavTab001_001'"
              >연장신청</BasicButton
            >
            <BasicButton v-if="tabSlotProps.activeName === 'testNavTab001_002'"
              >반환신청</BasicButton
            >
            <BasicButton v-if="tabSlotProps.activeName === 'testNavTab001_003'"
              >구매신청</BasicButton
            >
          </ButtonListItem>
        </ButtonList>
      </template>
    </PageContents>
  </UiTab>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/MyLoanPostMaturityLeaseBefore.scss';
</style>
