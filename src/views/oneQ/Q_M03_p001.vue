<script>
// Q_M03_p001
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
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';

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
    BottomSticky,
    TextButton,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
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

      store.ui.header.setTitle(() => '오토리스 다이렉트');
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
  <PageContents :class="$style['bg-wrap']">
    <div :class="$style['bg']">
      <PageTextGroup>
        <PageMainText>
          비용은 낮추고<br />
          견적은 빠르게!
        </PageMainText>
      </PageTextGroup>

      <div :class="[$style['illustration-img'], 'row-margin-contents']">
        <img src="@/assets/images/contents/img-direct-autolease.png" alt="" />
      </div>

      <div class="row-margin-container-medium">
        <section>
          <h3 class="text-body-2 row-margin-item-regular">대상차종</h3>

          <div :class="$style['car-list']">
            <ul :class="$style['car-list__list']">
              <li :class="$style['car-list__item']">
                <div :class="$style['car-list__box']">국산</div>
                <div :class="$style['car-list__text']">현대, 기아, 쌍용 등</div>
              </li>
              <li :class="$style['car-list__item']">
                <div :class="$style['car-list__box']">수입</div>
                <div :class="$style['car-list__text']">
                  벤츠, BMW, 아우디, 폭스바겐<br />
                  포르쉐, 볼보, 랜드로버, 재규어 등
                </div>
              </li>
            </ul>
          </div>
        </section>

        <div
          :class="[
            $style['estimate-list'],
            $style['estimate-list--product'],
            'row-margin-contents',
          ]"
        >
          <UiAccordion
            :once="true"
            :classNames="{ wrap: $style['estimate-list__list'] }"
          >
            <UiAccordionItem
              :classNames="{ item: $style['estimate-list__item'] }"
            >
              <div
                :class="[
                  $style['estimate-list__head'],
                  $style['estimate-list__head--row'],
                  $style['estimate-list__head--none'],
                ]"
              >
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <h3
                      :class="[
                        $style['estimate-list__title'],
                        'font-weight-medium',
                        'text-body-3',
                      ]"
                    >
                      상품안내
                    </h3>
                  </div>
                </div>
                <div :class="$style['estimate-list__arrow']">
                  <UiAccordionOpener
                    :classNames="{
                      button: $style['estimate-list__green--opener'],
                    }"
                  />
                </div>
              </div>

              <UiAccordionLayer
                :classNames="{ layer: $style['estimate-list__layer'] }"
              >
                <div
                  :class="[
                    $style['estimate-list__contents'],
                    $style['estimate-list__contents--line'],
                  ]"
                >
                  <KeyValue direction="vertical" margin="regular">
                    <KeyValueItem>
                      <KeyValueTitle>
                        <div class="text-body-3 color-black font-weight-medium">
                          상품
                        </div>
                      </KeyValueTitle>
                      <KeyValueText>
                        <div
                          class="text-body-4 color-gray-secondary font-weight-regular"
                        >
                          오토리스
                        </div>
                      </KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem>
                      <KeyValueTitle>
                        <div class="text-body-3 color-black font-weight-medium">
                          대상
                        </div>
                      </KeyValueTitle>
                      <KeyValueText>
                        <div
                          class="text-body-4 color-gray-secondary font-weight-regular"
                        >
                          개인, 개인사업자, 법인
                        </div>
                      </KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem>
                      <KeyValueTitle>
                        <div class="text-body-3 color-black font-weight-medium">
                          금리
                        </div>
                      </KeyValueTitle>
                      <KeyValueText>
                        <div
                          class="text-body-4 color-gray-secondary font-weight-regular underline"
                        >
                          금융리스 연 최저 6.2% ~ 7.8%<br />
                          (금융소비자의 개인신용평점에 따라 차등 적용)<br />
                          연체이자율 :<br />
                          - 금융리스 : 약정이자율+3%<br />
                          (법정최고금리 연 20% 이내)<br />
                          - 운용리스 : 연 20%
                        </div>
                      </KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem>
                      <KeyValueTitle>
                        <div class="text-body-3 color-black font-weight-medium">
                          이자납부시기
                        </div>
                      </KeyValueTitle>
                      <KeyValueText>
                        <div
                          class="text-body-4 color-gray-secondary font-weight-regular"
                        >
                          매월 후취
                        </div>
                      </KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem>
                      <KeyValueTitle>
                        <div class="text-body-3 color-black font-weight-medium">
                          기간
                        </div>
                      </KeyValueTitle>
                      <KeyValueText>
                        <div
                          class="text-body-4 color-gray-secondary font-weight-regular"
                        >
                          12 ~ 60개월
                        </div>
                      </KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem>
                      <KeyValueTitle>
                        <div class="text-body-3 color-black font-weight-medium">
                          상환방법
                        </div>
                      </KeyValueTitle>
                      <KeyValueText>
                        <div
                          class="text-body-4 color-gray-secondary font-weight-regular"
                        >
                          원리금균등상환
                        </div>
                      </KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem>
                      <KeyValueTitle>
                        <div class="text-body-3 color-black font-weight-medium">
                          차량소유권
                        </div>
                      </KeyValueTitle>
                      <KeyValueText>
                        <div
                          class="text-body-4 color-gray-secondary font-weight-regular"
                        >
                          하나캐피탈(단, 이용자명의 시 저당설정 추가)
                        </div>
                      </KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem>
                      <KeyValueTitle>
                        <div class="text-body-3 color-black font-weight-medium">
                          수수료
                        </div>
                      </KeyValueTitle>
                      <KeyValueText>
                        <div :class="$style['auto-table']">
                          <table>
                            <colgroup>
                              <col style="width: 70px" />
                              <col />
                            </colgroup>
                            <tbody>
                              <tr>
                                <th>
                                  <div>손해배상금</div>
                                </th>
                                <td class="align-left color-gray">
                                  <!-- S: 240408 수정 -->
                                  <ul class="reset-list">
                                    <li class="row-margin-item-group">
                                      주1) 중도해지손해배상금<br />
                                      미회수원금 X 중도해지손해배상금률<br />
                                      (최고 40%)

                                      <ul
                                        :class="[
                                          $style['basic-list'],
                                          $style['basic-list--small-margin'],
                                          'row-margin-item-group',
                                          'row-margin-bottom',
                                        ]"
                                      >
                                        <li
                                          :class="[
                                            $style['basic-list__item'],
                                            'text-caption-1',
                                            'font-weight-regular',
                                            'color-gray',
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
                                            경과 개월별 차등 인하
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
                                            'text-caption-1',
                                            'font-weight-regular',
                                            'color-gray',
                                          ]"
                                        >
                                          <div
                                            class="inline-wrap row-margin-item-group"
                                          >
                                            <TextButton
                                              :underline="true"
                                              theme="tertiary"
                                              >중도해지손해배상금
                                              세부내역</TextButton
                                            >
                                          </div>
                                        </li>
                                      </ul>
                                    </li>
                                    <!-- E: 240408 수정 -->

                                    <li class="row-margin-item-group">
                                      주2) 규정손해배상금(차량인수-운용리스)<br />
                                      미회수원금 X 규정손해배상금률<br />
                                      미회수원금 X 최고요율(20)% X <br />
                                      (잔여기간 월수/리스기간 전체월수)
                                    </li>
                                    <li class="row-margin-item-group">
                                      주3) 규정손해배상금(차량인수-금융리스)<br />
                                      미회수원금 X 최고요율(3)% X<br />
                                      (잔여기간 월수/리스기간 전체월수)
                                    </li>
                                  </ul>
                                  <ul
                                    :class="[
                                      $style['basic-list'],
                                      $style['basic-list--small-margin'],
                                      'row-margin-item-group',
                                    ]"
                                  >
                                    <li
                                      :class="[
                                        $style['basic-list__item'],
                                        'text-caption-1',
                                        'font-weight-regular',
                                        'color-gray',
                                      ]"
                                    >
                                      <div
                                        :class="$style['basic-list__symbol']"
                                      >
                                        ※
                                      </div>
                                      <div
                                        :class="$style['basic-list__content']"
                                      >
                                        단, 금융리스의 경우 대부업법에서 정하는
                                        최고이자율을 초과하지 않는 범위로
                                        합니다.
                                      </div>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <div>승계수수료</div>
                                </th>
                                <td class="align-left color-gray">
                                  <!-- S: 240408 수정 -->
                                  <div> 
                                    운용리스, 금융리스<br />
                                    미회수원금의 1% X (잔여기간 월수/리스기간
                                    전체월수)<br />
                                    (min : 500,000원, max : 900,000원)
                                  </div>
                                  <!-- E: 240408 수정 -->
                                  <ul
                                    :class="[
                                      $style['basic-list'],
                                      $style['basic-list--small-margin'],
                                      'row-margin-item-group',
                                    ]"
                                  >
                                    <li
                                      :class="[
                                        $style['basic-list__item'],
                                        'text-caption-1',
                                        'font-weight-regular',
                                        'color-gray',
                                      ]"
                                    >
                                      <div
                                        :class="$style['basic-list__symbol']"
                                      >
                                        ※
                                      </div>
                                      <div
                                        :class="$style['basic-list__content']"
                                      >
                                        단, 금융리스의 경우 대부업법에서 정하는
                                        최고이자율을 초과하지 않는 범위로
                                        합니다.
                                      </div>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                              <tr>
                                <th>
                                  <div>기타비용</div>
                                </th>
                                <td class="align-left color-gray">
                                  <ul
                                    :class="[
                                      $style['basic-list'],
                                      $style['basic-list--regular'],
                                      $style['basic-list--none-margin'],
                                    ]"
                                  >
                                    <li
                                      :class="[
                                        $style['basic-list__item'],
                                        'text-caption-1',
                                        'color-gray-senary',
                                        'font-weight-regular',
                                      ]"
                                    >
                                      <div
                                        :class="$style['basic-list__symbol']"
                                      ></div>
                                      <div
                                        :class="$style['basic-list__content']"
                                      >
                                        저당설정(이용자명의 시 저당설정 추가)
                                      </div>
                                    </li>
                                    <li
                                      :class="[
                                        $style['basic-list__item'],
                                        'text-caption-1',
                                        'font-weight-regular',
                                        'color-gray',
                                      ]"
                                    >
                                      <div
                                        :class="$style['basic-list__symbol']"
                                      >
                                        -
                                      </div>
                                      <div
                                        :class="$style['basic-list__content']"
                                      >
                                        설정금액 : 대출원금의 0~100%
                                      </div>
                                    </li>
                                    <li
                                      :class="[
                                        $style['basic-list__item'],
                                        'text-caption-1',
                                        'font-weight-regular',
                                        'color-gray',
                                      ]"
                                    >
                                      <div
                                        :class="$style['basic-list__symbol']"
                                      >
                                        ※
                                      </div>
                                      <div
                                        :class="$style['basic-list__content']"
                                      >
                                        근저당설정은 개인신용평점에 따라 차등
                                        적용
                                      </div>
                                    </li>
                                    <li
                                      :class="[
                                        $style['basic-list__item'],
                                        'text-caption-1',
                                        'font-weight-regular',
                                        'color-gray',
                                      ]"
                                    >
                                      <div
                                        :class="$style['basic-list__symbol']"
                                      >
                                        ※
                                      </div>
                                      <div
                                        :class="$style['basic-list__content']"
                                      >
                                        근저당설정비용 당사 부담 / 해지비용
                                        금융소비자 부담
                                      </div>
                                    </li>
                                  </ul>

                                  <ul
                                    :class="[
                                      $style['basic-list'],
                                      $style['basic-list--regular'],
                                      $style['basic-list--none-margin'],
                                      'row-margin-item-group',
                                    ]"
                                  >
                                    <li
                                      :class="[
                                        $style['basic-list__item'],
                                        'text-caption-1',
                                        'color-gray-senary',
                                        'font-weight-regular',
                                      ]"
                                    >
                                      <div
                                        :class="$style['basic-list__symbol']"
                                      ></div>
                                      <div
                                        :class="$style['basic-list__content']"
                                      >
                                        인지세
                                      </div>
                                    </li>
                                    <li
                                      :class="[
                                        $style['basic-list__item'],
                                        'text-caption-1',
                                        'font-weight-regular',
                                        'color-gray',
                                      ]"
                                    >
                                      <div
                                        :class="$style['basic-list__symbol']"
                                      >
                                        -
                                      </div>
                                      <div
                                        :class="$style['basic-list__content']"
                                      >
                                        하나캐피탈과 금융소비자 각각 50% 부담
                                        (인지세 1만원)
                                      </div>
                                    </li>
                                  </ul>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </KeyValueText>
                    </KeyValueItem>
                  </KeyValue>

                  <ul
                    :class="[
                      $style['basic-list'],
                      $style['basic-list--medium-margin'],
                      'row-margin-item-group',
                    ]"
                  >
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'font-weight-regular',
                        'color-gray',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">※</div>
                      <div :class="$style['basic-list__content']">
                        주1) ‘중도해지손해배상금’은 고객이 계약의 중도해지를
                        이유로
                        <span class="color-black font-weight-medium"
                          >자동차를 반환</span
                        >하고자 할 때 ‘자동차리스 표준약관’ 제24조에 따라
                        금융회사에 발생한 손해를 배상하기 위하여 지급해야 하는
                        금액을 의미합니다.
                      </div>
                    </li>
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'font-weight-regular',
                        'color-gray',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">※</div>
                      <div :class="$style['basic-list__content']">
                        주2) ‘규정손해배상금’은 고객이 계약의 중도해지를 이유로
                        <span class="color-black font-weight-medium"
                          >자동차를 매입</span
                        >하고자 할 때 ‘자동차리스 표준약관’ 제23조에 따라
                        금융회사에 발생한 손해를 배상하기 위하여 지급해야 하는
                        금액을 의미합니다.
                      </div>
                    </li>
                  </ul>

                  <section>
                    <h3 class="text-body-3 font-weight-medium row-margin-mini">
                      만기시 유의사항
                    </h3>
                    <p
                      class="text-body-4 color-gray-secondary font-weight-regular"
                    >
                      만기시 차량을 매입하실 경우 손님의 명의로 이전하는데
                      필요한 취득세 등의 제세공과금이 발생할 수 있으며, 이는
                      손님이 부담하셔야 합니다.<br />
                      운용리스의 경우, 만기 차량 반납시 사고이력 또는
                      약정주행거리 초과에 따라 별도의 감가비용이 추가로 발생할
                      수 있습니다.<br />
                      차량반납 시 유의사항을 꼭 확인하여 주시기 랍니다.
                    </p>
                  </section>

                  <div class="inline-wrap row-margin-item-group">
                    <TextButton :underline="true" theme="tertiary"
                      >차량 반납 시 유의사항</TextButton
                    >
                  </div>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
            <UiAccordionItem
              :classNames="{ item: $style['estimate-list__item'] }"
            >
              <div
                :class="[
                  $style['estimate-list__head'],
                  $style['estimate-list__head--row'],
                  $style['estimate-list__head--none'],
                ]"
              >
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <h3
                      :class="[
                        $style['estimate-list__title'],
                        'font-weight-medium',
                        'text-body-3',
                      ]"
                    >
                      진행순서
                    </h3>
                  </div>
                </div>
                <div :class="$style['estimate-list__arrow']">
                  <UiAccordionOpener
                    :classNames="{
                      button: $style['estimate-list__green--opener'],
                    }"
                  />
                </div>
              </div>

              <UiAccordionLayer
                :classNames="{ layer: $style['estimate-list__layer'] }"
              >
                <section
                  :class="[
                    $style['estimate-list__contents'],
                    $style['estimate-list__contents--line'],
                  ]"
                >
                  <ul :class="$style['step-list']">
                    <li :class="$style['step-list__item']">
                      <div :class="$style['step-list__box']">
                        <span>STEP 01</span>
                      </div>
                      <h3 :class="$style['step-list__title']">상담신청</h3>
                      <p :class="$style['step-list__text']">
                        홈페이지에서 신차리스 상담을 신청합니다.
                      </p>
                    </li>
                    <li :class="$style['step-list__item']">
                      <div :class="$style['step-list__box']">
                        <span>STEP 02</span>
                      </div>
                      <h3 :class="$style['step-list__title']">
                        서류심사 및 결과통보
                      </h3>
                      <p :class="$style['step-list__text']">
                        신청내용을 확인하여 결과를 통보합니다.
                      </p>
                    </li>
                    <li :class="$style['step-list__item']">
                      <div :class="$style['step-list__box']">
                        <span>STEP 03</span>
                      </div>
                      <h3 :class="$style['step-list__title']">계약서 작성</h3>
                      <p :class="$style['step-list__text']">
                        계약 시 온라인이나 오프라인 약정을 진행합니다.
                      </p>
                    </li>
                    <li :class="$style['step-list__item']">
                      <div :class="$style['step-list__box']">
                        <span>STEP 04</span>
                      </div>
                      <h3 :class="$style['step-list__title']">
                        차량구입 및 리스 실행
                      </h3>
                      <p :class="$style['step-list__text']">
                        차량을 구입 후 고객님께 인도해 드립니다.
                      </p>
                    </li>
                  </ul>
                </section>
              </UiAccordionLayer>
            </UiAccordionItem>
          </UiAccordion>
        </div>

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
              일정기간 원리금을 연체할 경우 모든 원리금을 변제할 의무가 발생할
              수 있습니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              리스취급이 부적정한 경우 (연체금 보유, 개인신용평점 낮음) 대출이
              제한될 수 있습니다.
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
              금융소비자의 신용등급 또는 개인신용평점에 따라 대출한도 및 금리가
              차등 적용됩니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              금융소비자는 해당 상품에 대하여 설명을 받을 권리가 있으며, 그
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
              준법심의필 23-153 (2023.05.22 ~ 2024.05.21)
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              여신금융협회 심의필 제 2023-C1h-05808호<br />
              (2023.05.22~2024.05.21)
            </div>
          </li>
        </ul>
      </div>
    </div>
    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap-color">
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
@import '@/assets/scss/views/oneQ/Q_M03_p001.scss';
</style>
<!-- S: 240408 수정 -->
<style scoped>
.row-margin-bottom {
  margin-bottom: 5px;
}
</style>
<!-- E: 240408 수정 -->
