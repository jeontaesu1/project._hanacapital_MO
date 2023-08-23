<script>
// My_M99_l009
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

import IconCheck from '@/assets/images/icon/check.svg?component';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    NoticeText,
    IconCheck,
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
          <PopupTitle>자동차운용리스 설명서</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <p
          class="text-body-5 color-gray font-weight-light align-right row-margin-contents-small"
        >
          준법심의필(설) : 2023-20 (2023.05.18)
        </p>
        <PageMainText>
          상품설명서 약관에<br />
          <strong>동의해주세요</strong>
        </PageMainText>
        <PageSubText>
          <strong
            >이 설명서는 「금융소비자 보호에 관한 법률」 제19조제1항, 동 법
            시행령 제14조제1항에 따라 금융상품에 관한 중요한 사항을
            금융소비자(이하 “고객”)가 이해하기 쉽도록 설명하기 위한 중요
            서류</strong
          >로, 금융소비자 보호에 관한 법령 및 내부통제기준에 따른 절차를 거쳐
          제공됩니다.
        </PageSubText>
        <PageSubText>
          아래 <strong>설명내용을 제대로 이해하지 못한 상태에서</strong> 설명을
          이해했다는 <span class="color-red">서명</span>을 하거나
          <span class="color-red">녹취기록을 남기시는 경우</span>, 추후
          해당내용과 관련한
          <span class="color-red">권리구제가 어려울 수 있습니다.</span>
        </PageSubText>
      </PageTextGroup>

      <div>
        <section>
          <p class="text-body-3 font-weight-light">
            - 고객님께서는 상품 가입 前 아래 사항을 반드시 숙지하여 주시기
            바랍니다 -
          </p>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              유사한 금융상품과 구별되는 특징
            </h4>

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--large-margin'],
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
                  리스는 시설을 대여해주는 회사(리스사)가 고객이 선택한
                  물건(자동차, 기계설비 등)을 구매하고, 고객에게 그 물건을
                  사용할 수 있도록 하는 거래입니다. 리스의 종류는 크게
                  <span class="color-red underline"
                    >금융리스와 운용리스로 구분</span
                  >됩니다.
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
                  <div>
                    운용리스는 금융리스 외의 리스를 통칭합니다. 리스회사가
                    범용성이 높은 물건을 리스이용자에게 필요기간 동안 이용하게
                    하고, 리스기간 종료 시 물건을 반환하는 것을 원칙으로 하는
                    계약을 의미하며, 리스료 전체에 대해 손비처리(비용처리)를
                    진행합니다. (금융리스는 이자, 감가상각비의 비용처리가 가능)
                  </div>

                  <ul :class="[$style['basic-list'], 'row-margin-item']">
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
                        <span class="color-green underline"
                          >아울러, 운용리스는 반납을 원칙으로 하며, 반환의무가
                          발생하였을 경우 이를 지체하면 반환지연금이
                          발생합니다.</span
                        >
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              민원·상담이 빈번하여 숙지가 필요한 사항
            </h4>

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--large-margin'],
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
                  차량의 원시적 하자 및 결함에 대하여 금융사가 책임을 부담하지
                  않습니다.
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
                  본 상품(신용상태가 금리에 영향을 미치지 않는 상품)은
                  금리인하요구 대상상품에 해당하지 않습니다.
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
                  「금융소비자 보호에 관한 법률」 시행령
                  제37조제1항제3호제가목에 의거하여, 리스(시설대여)는 같은
                  법에서 규정하는 청약철회권 대상 상품이 아닙니다. (다만, 재화를
                  제공받은 경우만 해당합니다)
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
                  리스상품은 계약이 성립한 날부터 3년 초과하여 상환하여도
                  중도해지수수료 또는 규정손해배상금이 부과되니 유의하여 주시기
                  바랍니다.
                </div>
              </li>
            </ul>

            <div :class="[$style['manual-qna'], 'row-margin-contents']">
              <ul :class="$style['manual-qna__list']">
                <li :class="$style['manual-qna__item']">
                  <div :class="$style['manual-qna__head']">
                    <div :class="$style['manual-qna__symbol']">Q</div>
                    <div :class="$style['manual-qna__cell']">
                      <h5 :class="$style['manual-qna__title']">
                        리스를 이용할 때 발생하는 비용에는 어떤 것들이 있나요?
                      </h5>
                    </div>
                  </div>
                  <div :class="$style['manual-qna__contents']">
                    <div
                      :class="[
                        $style['manual-qna__symbol'],
                        $style['manual-qna__symbol--answer'],
                      ]"
                    >
                      A
                    </div>
                    <div :class="$style['manual-qna__cell']">
                      <div :class="$style['manual-qna__text']">
                        리스 이용 시, 고객이 부담해야 하는 금액에는 리스료와
                        수수료 등이 포함됩니다.(심사 후 정확한 금액 파악 가능)
                        또한 자동차의 구입, 인도, 유지, 사용, 등록말소, 폐차
                        등과 관련하여 고객이 부담하여야 할 비용 중
                        <span class="color-green underline"
                          >리스료에 포함되지 않은 비용과 제세공과금(자동차세,
                          과태료, 벌과금 포함)은 고객이 부담</span
                        >합니다. (☞
                        <span class="color-red underline"
                          >‘3. 수수료 등 비용부담’</span
                        >
                        확인)
                      </div>
                    </div>
                  </div>
                </li>
                <li :class="$style['manual-qna__item']">
                  <div :class="$style['manual-qna__head']">
                    <div :class="$style['manual-qna__symbol']">Q</div>
                    <div :class="$style['manual-qna__cell']">
                      <h5 :class="$style['manual-qna__title']">
                        대출금을 만기 전에 상환하고 싶은데 가능한가요?
                      </h5>
                    </div>
                  </div>
                  <div :class="$style['manual-qna__contents']">
                    <div
                      :class="[
                        $style['manual-qna__symbol'],
                        $style['manual-qna__symbol--answer'],
                      ]"
                    >
                      A
                    </div>
                    <div :class="$style['manual-qna__cell']">
                      <div :class="$style['manual-qna__text']">
                        <div>
                          운용리스의 경우
                          <span class="color-green underline"
                            >계약이 성립한 날로부터 </span
                          ><span class="color-red underline"
                            >3년 경과 후에도 중도상환수수료가 부과(중도해지 후
                            물건 반납 시 중도해지손해배상금*, 물건 매입 시
                            규정손해배상금** 부과)되니, </span
                          ><span class="underline"
                            >확인하여 주시기 바랍니다.</span
                          >
                          (☞
                          <span class="color-red underline"
                            >‘3. 수수료 등 비용부담’, ‘9. 해지에 관한
                            사항’</span
                          >
                          확인)
                        </div>

                        <div class="row-margin-item-medium">
                          <ul
                            :class="[$style['basic-list'], 'row-margin-item']"
                          >
                            <li
                              :class="[
                                $style['basic-list__item'],
                                'font-weight-medium',
                              ]"
                            >
                              <div :class="$style['basic-list__symbol']">*</div>
                              <div :class="$style['basic-list__content']">
                                <div>중도해지손해배상금 산식</div>
                                <ul
                                  :class="[
                                    $style['basic-list'],
                                    $style['basic-list--regular'],
                                    'row-margin-item',
                                  ]"
                                >
                                  <li :class="$style['basic-list__item']">
                                    <div
                                      :class="$style['basic-list__symbol']"
                                    ></div>
                                    <div :class="$style['basic-list__content']">
                                      미회수원금 X 중도해지손해배상금률,
                                      중도해지손해배상금률 = 최고요율(80%)
                                      X(잔여기간 월수/리스기간 전체월수)
                                    </div>
                                  </li>
                                  <li :class="$style['basic-list__item']">
                                    <div
                                      :class="$style['basic-list__symbol']"
                                    ></div>
                                    <div :class="$style['basic-list__content']">
                                      예)미회수 원금 1천만원, 리스기간 36개월,
                                      잔여기간 18개월 인 경우<br />
                                      미회수원금 10,000,000원 X
                                      중도해지손해배상금률 80% X (18 / 36개월) =
                                      4,000,000원
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div class="row-margin-item-medium">
                          <ul
                            :class="[$style['basic-list'], 'row-margin-item']"
                          >
                            <li
                              :class="[
                                $style['basic-list__item'],
                                'font-weight-medium',
                              ]"
                            >
                              <div :class="$style['basic-list__symbol']">
                                **
                              </div>
                              <div :class="$style['basic-list__content']">
                                <div>규정손해배상금</div>
                                <ul
                                  :class="[
                                    $style['basic-list'],
                                    $style['basic-list--regular'],
                                    'row-margin-item',
                                  ]"
                                >
                                  <li :class="$style['basic-list__item']">
                                    <div
                                      :class="$style['basic-list__symbol']"
                                    ></div>
                                    <div :class="$style['basic-list__content']">
                                      규정손해배상금 = 미회수원금 ×
                                      규정손해배상금률, 규정손해배상금률 =
                                      최고요율(20%) X (잔여기간월수/리스기간
                                      전체월수)<br />예) 미회수원금이 15백만원,
                                      최고요율 20%, 리스기간이 36개월(잔여기간이
                                      10개월)인 경우 : 15,000,000원 X 20% X
                                      (10/36)= 833,333원
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              리스료 연체 시 발생하는 불이익
            </h4>
            <div :class="$style['manual-qna']">
              <ul :class="$style['manual-qna__list']">
                <li :class="$style['manual-qna__item']">
                  <div :class="$style['manual-qna__head']">
                    <div :class="$style['manual-qna__symbol']">Q</div>
                    <div :class="$style['manual-qna__cell']">
                      <h5 :class="$style['manual-qna__title']">
                        리스료를 연체할 경우 어떤 불이익이 발생하나요?
                      </h5>
                    </div>
                  </div>
                  <div :class="$style['manual-qna__contents']">
                    <div
                      :class="[
                        $style['manual-qna__symbol'],
                        $style['manual-qna__symbol--answer'],
                      ]"
                    >
                      A
                    </div>
                    <div :class="$style['manual-qna__cell']">
                      <div :class="$style['manual-qna__text']">
                        <div>
                          <span class="color-red underline"
                            >연체 시에는 법에서 정하는 범위 내에서
                            지연배상금율에 의한 지연배상금*을 납부하셔야</span
                          >
                          하며,
                          <span class="color-green underline"
                            >신용점수 하락 및 금융거래 제한 등이 발생</span
                          >할 수 있으니 유의하여 주시기 바랍니다. (☞
                          <span class="color-red underline"
                            >‘5. 지연배상금율’, ’10. 연체정보 등의 등록’</span
                          >
                          확인)
                        </div>
                        <ul :class="[$style['basic-list'], 'row-margin-item']">
                          <li
                            :class="[
                              $style['basic-list__item'],
                              'font-weight-regular',
                            ]"
                          >
                            <div :class="$style['basic-list__symbol']">*</div>
                            <div :class="$style['basic-list__content']">
                              지연배상금 산식 : 리스료 × 지연배상금율 ×
                              연체일수/365<br />예) 리스료 100만원을 10일
                              연체(지연배상금율 가산 시 연 20% 가정) 시, 최대
                              5,479원의 지연배상금 납부
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              민원을 제기하거나 상담을 요청하려는 경우 이용 가능한 연락처
            </h4>
            <div :class="$style['manual-qna']">
              <ul :class="$style['manual-qna__list']">
                <li :class="$style['manual-qna__item']">
                  <div :class="$style['manual-qna__head']">
                    <div :class="$style['manual-qna__symbol']">Q</div>
                    <div :class="$style['manual-qna__cell']">
                      <h5 :class="$style['manual-qna__title']">
                        대출과 관련하여 궁금한 점이나 불만사항이 있는 경우
                        어떻게 하면 되나요?
                      </h5>
                    </div>
                  </div>
                  <div :class="$style['manual-qna__contents']">
                    <div
                      :class="[
                        $style['manual-qna__symbol'],
                        $style['manual-qna__symbol--answer'],
                      ]"
                    >
                      A
                    </div>
                    <div :class="$style['manual-qna__cell']">
                      <div :class="$style['manual-qna__text']">
                        <span class="color-green">당사 인터넷 홈페이지</span
                        ><br />
                        <span class="color-green"
                          ><span class="underline"
                            >(https://www.hanacapital.co.kr) 및
                            고객센터(1800-1110)</span
                          >를 통해 금융상품에 관한 문의</span
                        >가 가능하며,
                        <span class="color-green"
                          >분쟁 발생 시에는
                          <span class="underline"
                            >금융감독원(국번없이 1332)</span
                          >
                          등에 도움을 요청</span
                        >하실 수 있습니다.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">1. 상품 개요 및 특성</h3>

          <div :class="$style['basic-table']">
            <table>
              <colgroup>
                <col style="width: 120px" />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>상품명</th>
                  <td>운용리스</td>
                </tr>
                <tr>
                  <th>보증금</th>
                  <td class="align-right">0 원</td>
                </tr>
                <tr>
                  <th>리스기간</th>
                  <td>취급 후 36개월</td>
                </tr>
                <tr>
                  <th>선납금/선납리스료</th>
                  <td class="align-right">0 원</td>
                </tr>
                <tr>
                  <th>리스료</th>
                  <td class="align-left">
                    <div>N회 ~ N회</div>
                    <div class="row-margin-item-regular">N 원</div>
                  </td>
                </tr>
                <tr>
                  <th>보증금에 따른 리스료 예상할인율 및 할인금액</th>
                  <td class="align-left">
                    <div>N%</div>
                    <div class="row-margin-item-regular">N 원</div>
                  </td>
                </tr>
                <tr>
                  <th>
                    선납금/선납리스료에 따른 리스료 예상할인율 및 할인금액
                  </th>
                  <td class="align-left">
                    <div>N%</div>
                    <div class="row-margin-item-regular">N 원</div>
                  </td>
                </tr>
                <tr>
                  <th rowspan="3">중도상환수수료* 부과 여부 및 요율</th>
                  <td class="align-left">
                    <div :class="$style['manual-check']">
                      <ul :class="$style['manual-check__list']">
                        <li
                          :class="[
                            $style['manual-check__item'],
                            $style['manual-check__item--checked'],
                          ]"
                        >
                          <div :class="$style['manual-check__block']">
                            <div :class="$style['manual-check__object']"></div>
                            <div :class="$style['manual-check__text']">
                              대상
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td :class="[$style['basic-table__left-line'], 'align-left']">
                    중도해지손해배상금률 최고요율 ( 80 ) %
                  </td>
                </tr>
                <tr>
                  <td :class="[$style['basic-table__left-line'], 'align-left']">
                    규정손해배상금률 최고요율 ( 20 ) %
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul :class="[$style['basic-list'], 'row-margin-item']">
            <li
              :class="[
                $style['basic-list__item'],
                'color-gray-tertiary',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']">※</div>
              <div :class="$style['basic-list__content']">
                중도해지 후 물건 반납 시 중도해지수수료*, 물건 매입 시
                규정손해배상금** 부과
              </div>
            </li>
          </ul>

          <div
            class="text-body-2 color-green font-weight-medium row-margin-contents"
          >
            본 운용리스상품은 개인, 개인사업자, 법인을 대상으로 하는 자동차리스
            상품입니다. 리스료는 고객이 금융회사에게 사용료로서 지급하는
            금액으로 이자율로 표시하지 않습니다. 고객께서 부담하셔야 하는 정확한
            금액은 심사 후에 안내해드리도록 하겠습니다.
          </div>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">2. 금리인하요구권</h3>

          <div class="flex-box align-items-start">
            <div class="flex-box__cell flex-1">
              <p class="text-body-4">금리인하요구권 대상여부</p>
            </div>
            <div class="flex-box__cell">
              <div
                :class="[$style['manual-check'], $style['manual-check--wrap']]"
              >
                <ul :class="$style['manual-check__list']">
                  <li :class="$style['manual-check__item']">
                    <div :class="$style['manual-check__block']">
                      <div :class="$style['manual-check__object']"></div>
                      <div :class="$style['manual-check__text']">대상</div>
                    </div>
                  </li>
                  <li
                    :class="[
                      $style['manual-check__item'],
                      $style['manual-check__item--checked'],
                    ]"
                  >
                    <div :class="$style['manual-check__block']">
                      <div :class="$style['manual-check__object']"></div>
                      <div :class="$style['manual-check__text']">비대상</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row-margin-item">
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--large-margin'],
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
                  <div class="row-margin-mini">
                    채무자인 고객은 [여신전문금융업법]
                    제50조의13(금리인하요구)에서 정하는 바에 따라
                    <span class="underline"
                      ><strong
                        >본인의
                        <span class="italic color-gray font-weight-medium"
                          >[신용상태가 개선]</span
                        >
                        되었다고 판단되는 경우(예 : 취업, 승진 등 소득증가,
                        재산증가, 신용평가등급(평점) 등 신용도 상승, 기타
                        신용상태 개선)</strong
                      >* 금융회사에
                      <span class="italic color-gray font-weight-medium"
                        >[금리인하를 요구]</span
                      >
                      할 수 있습니다.</span
                    >
                    <span class="color-green">
                      단, 신용상태가 금리에 영향을 미치지 않는 상품은
                      금리인하요구권의 행사 대상에서 제외되오니, 상단의
                      체크박스를 확인하여 주시기 바랍니다.</span
                    >
                  </div>

                  <ul :class="[$style['basic-list'], 'row-margin-item']">
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'text-body-5',
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">*</div>
                      <div :class="$style['basic-list__content']">
                        기업의 경우(이익증가 등 재무상태 개선, 회사채 등급상승,
                        추가담보 제공 등 신용도상승, 기타 신용상태 개선
                      </div>
                    </li>
                  </ul>
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
                  금리인하요구권은 영업점 방문 및 비대면채널(예 : 홈페이지,
                  모바일)을 통해 신청 가능하며 금융회사는 금리인하를 요구하는
                  고객에게 신용상태 개선을 확인하는 데 필요한 자료의 제출을
                  요구할 수 있습니다.
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
                  신용상태의 개선이 경미하여 금리인하 요구 인정 요건을 충족하지
                  못하는 경우 등
                  <span class="color-green"
                    >심사 결과에 따라 고객의 금리인하 요구는 수용되지 않을 수
                    있습니다.</span
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
                <div :class="$style['basic-list__content']">
                  금융회사는 <strong>금리인하 요구를 받은 날부터 </strong>
                  <span class="color-green">‘10영업일 이내’</span> (고객에게
                  자료의 보완을 요구하는 날부터 자료가 제출되는 날까지의 기간은
                  포함되지 않습니다)에
                  <strong>금리인하 요구 수용 여부 및 그 사유</strong>를 전화,
                  서면, 문자메시지, 전자우편, 팩스 또는 그 밖에 이와 유사한
                  방법으로 <strong>고객에게 통지</strong>합니다.
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            3. 수수료 등 비용부담
          </h3>

          <NoticeText :classNames="{ wrap: 'color-red row-margin-contents' }">
            리스계약을 체결하는 경우 고객이 부담하여야 하는 총 금액에는 리스료,
            수수료 등이 포함됩니다. 상세한 금액의 합계는 심사 후에 확인
            가능하므로, 심사 후 담당자가 안내드리겠습니다.
          </NoticeText>

          <section>
            <h4 class="text-body-2 row-margin-item-medium">근저당권설정비용</h4>
            <p class="text-body-2">
              물건의 근저당권 설정비용은 금융회사가 부담하고 해지비용은 리스
              이용고객이 부담합니다.
            </p>

            <ul :class="[$style['basic-list'], 'row-margin-item']">
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-green',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  <span class="underline"
                    >해지 시 발생하는 설정해지비용 세부금액(등록세, 증지대,
                    대행수수료 등)은 변동 가능합니다.</span
                  >
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">규정손해배상금</h4>

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--large-margin'],
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
                  <span class="color-green"
                    >중도해지를 이유로 물건을 매입하고자 할 경우</span
                  >
                  법령이 허용하는 한도 내에서 금융회사에 납부하는 비용으로
                  산식은 아래와 같습니다.
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
                  <p class="row-margin-mini">
                    규정손해배상금 = 미회수원금 × 규정손해배상금률<br />
                    규정손해배상금률 = 최고요율(20%) X (잔여기간월수/리스기간
                    전체월수)
                  </p>
                  <p class="text-body-4 font-weight-light color-gray-tertiary">
                    (예시) 미회수원금이 15백만원, 최고요율 20%, 리스기간이
                    36개월(잔여기간이 10개월)인 경우<br />
                    15,000,000원 X 20% X (10/36)= 833,333원
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">반환지연금</h4>

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--large-margin'],
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
                  계약이 종료 또는 해지되어 고객이 물건의 반환의무가
                  발생하였음에도 불구하고 반환을 지체한 경우, 고객은 반환기일
                  다음날로부터 반환일까지 산정한 경과일수에 대해 아래 산식에
                  의해 산출된 반환지연금을 지급하기로 합니다.
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
                  <p class="row-margin-mini">
                    반환지연금 = [일리스료 + (일리스료 x 반환지연금율)] x
                    경과일수<br />
                    일리스료 계산: 월리스료 x 12 / 365 = 일리스료
                  </p>
                  <p class="text-body-4 font-weight-light color-gray-tertiary">
                    (예시) 일 리스료 2만원, 반환지연금율 100%, 경과일수 10일인
                    경우<br />
                    [일리스료 20,000원 + (일리스료 20,000원 x 반환지연금율
                    100%)] x 경과일수 10일 = 400,000원
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              중도해지손해배상금
            </h4>
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--large-margin'],
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
                  <span class="color-green"
                    >중도해지를 이유로 물건을 반환하고자 할 경우</span
                  >
                  법령이 허용하는 한도 내에서 금융회사에 중도해지손해배상금을
                  납부하여야 하며, 산식은 아래와 같습니다.
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
                  <div>중도해지손해배상금 산식</div>
                  <ul :class="[$style['basic-list'], 'row-margin-item']">
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
                        <p class="row-margin-item">
                          미회수원금 X 중도해지손해배상금률 X (잔여기간 /
                          리스기간 수)<br />
                          중도해지손해배상금률 = 최고요율(80%) X (잔여기간 월수
                          / 리스기간 전체월수)
                        </p>
                        <p
                          class="text-body-4 font-weight-light color-gray-tertiary"
                        >
                          (예시) 미회수 원금 1천만원, 리스기간 36개월, 잔여기간
                          18개월 인 경우<br />미회수원금 10,000,000원 X
                          중도해지손해배상금률 80% X (18 /36개월) = 4,000,000원
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              반환물건의 평가 및 가치감가 비용
            </h4>
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--large-margin'],
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
                  고객이 물건을 반환하는 경우 반환차량의 상태, 성능을 평가하여
                  사고 등으로 가치감가사유가 있을 때에는 고객에게 설명하고
                  동의를 받은 후 그 금액을 청구하기로 합니다.
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
                  <div>
                    감가금액 = 반환시점의 물건 기대가치* x 감가율**의 합
                  </div>

                  <ul :class="[$style['basic-list'], 'row-margin-item']">
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'text-body-5',
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">*</div>
                      <div :class="$style['basic-list__content']">
                        자동차의 경우 평가는 시가표준액 차량종류별 기준가격표를
                        기준으로 합니다.
                      </div>
                    </li>
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'text-body-5',
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">**</div>
                      <div :class="$style['basic-list__content']">
                        가치감가율 : 물건의 감가율은 차량부위별, 경과연수별 각각
                        3%~14%, 변동가능함
                      </div>
                    </li>
                  </ul>

                  <p class="text-body-4 font-weight-light color-gray-tertiary">
                    (예시) 반환자동차의 가치평가가 15백만원, 차량 부위별 감가가
                    4%인 경우<br />반환자동차의 평가 15,000,000원 X 감가율 4% =
                    600,000원
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              초과운행부담금(자동차의 경우)
            </h4>

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--large-margin'],
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
                  계약한 운행거리를 초과하여 자동차를 운행한 경우 금융회사는
                  아래 산식에 의한 초과운행부담금을 고객에게 청구할 수 있습니다.
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
                  <p class="row-margin-mini">
                    초과운행부담금 = 초과운행km X km당 초과운행료
                  </p>
                  <p class="text-body-4 font-weight-light color-gray-tertiary">
                    km당 초과운행부담금은 수입차 300원, 국산차 100원 적용
                  </p>
                  <p
                    class="text-body-4 font-weight-light color-gray-tertiary row-margin-item"
                  >
                    (예시) 약정시 년간운행거리 30,000km, 36개월(만기 시 총
                    사용가능거리 90,000km)<br />
                    실제총운행거리 90,200km인 경우, 초과운행 200km X
                    300원(수입차 적용시) = 60,000원
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">승계수수료</h4>

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--large-margin'],
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
                  자동차리스 계약상의 권리와 의무를 제3자에게 승계할 수
                  있습니다. 금융회사는 심사기준에 따라 승인하며, 승계수수료를
                  고객에게 부과할 수 있습니다.
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
                  <p class="row-margin-mini">
                    승계수수료 = 미회수원금 X 최고요율( 1%) X(잔여기간
                    월수/리스기간 전체월수)<br />
                    (승계수수료 최소금액 : 500,000원, 최대금액 : 900,000원)
                  </p>
                  <p class="text-body-4 font-weight-light color-gray-tertiary">
                    (예시) 미회수원금 1억원, 잔여기간월수 30개월, 리스기간
                    전체월수 36개월인 경우<br />
                    미회수원금 100,000,000원 X 최고요율 1% X (잔여기간 월수 30 /
                    리스기간 전체월수 36) = 833,333원
                  </p>
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">인지세</h4>
            <p class="text-body-2">
              인지세법에 의해 대출약정 체결 시 납부하는 세금으로 리스의 경우
              인지세는 10,000원으로,
              <span class="color-green"
                >리스사와 고객이 균분하여 납부합니다.(리스사 5,000원 / 고객
                5,000원)</span
              >
            </p>

            <ul :class="[$style['basic-list'], 'row-margin-item']">
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-green',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  고객의 채무불이행으로 인해 발생하는 비용은 여신거래기본약관
                  제4조(비용의부담)에 의거하여 고객이 부담하여야 합니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-green',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  물건의 구입, 인도, 유지, 사용, 등록말소, 폐기 등과 관련하여
                  고객이 부담하여야 할 비용 중 리스료에 포함되지 않는 비용과
                  제세공과금(과태료, 벌과금 포함)은 고객이 부담합니다.
                </div>
              </li>
            </ul>
          </section>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">4. 리스료 납입방법</h3>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">리스료 납입</h4>

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--large-margin'],
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
                  고객님께서는 납입일을 정하여, 일정주기(매월 등) 마다 리스료를
                  납입하셔야 하며, 약정 시 자동이체를 선택하고 관련 정보를 제공
                  시, 리스료는 은행 및 금융기관의 본인명의 계좌에서
                  자동이체됩니다.
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
                  자동이체로 리스료 납입 시, 납입일에 잔고부족 등의 이체불가
                  사유로 납입하실 금액 전부를 이체할 수 없는 경우에는 납입지정일
                  이후 회사가 정하는 출금일에 미납금액(지연배상금 포함)을
                  출금하여 리스료에 충당할 수 있습니다.(고객이 지정한 납입일의
                  오전 10시 이전 청구되며, 금융기관 영업시간 내에 리스료 잔액이
                  있어야 함)
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
                  납입일이 휴일인 경우, 익영업일로 자동으로 납부가 이월되며,
                  해당 기간만큼의 이자가 가산되지 않습니다.
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
                  자동이체 계좌는 콜센터(1800-1110) 등을 통해 변경이 가능하지만,
                  자동이체일 4영업일 전까지 변경(금융기관 별 상이)하실 경우에는
                  당월적용이 가능하며, 그 이후에는 익월부터 변경사항이 적용됨을
                  유의해주시기 바랍니다.
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              상환방법에 따른 리스료 등에 대한 안내
            </h4>
            <p class="text-body-2">
              리스료는 리스물건 취득비용(자동차가격, 취득세 등), 잔존가치 및
              리스기간 등을 고려하여 산정되며, 리스보증금 또는 선납금을 납부할
              경우 약정에 따라 리스료가 인하 가능합니다.
            </p>
          </section>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">5. 지연배상금율</h3>
          <p class="text-body-2 row-margin-mini">
            지연배상금율은 연 20%로 하며 분할상환 원리금을 기준으로 연체일수로
            계산합니다.
          </p>
          <p class="text-body-4 font-weight-light color-gray-tertiary">
            지연배상금 산식 : 월분할상환 원리금 × 지연배상금율 × 연체일수/365<br />
            예) 리스료 100만원, 10일 연체 시 : 100만원 × 20% × 10/365 = 5,479원
          </p>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              리스료를 납부하기로 한 날에 납부하지 아니한 때
            </h4>
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--large-margin'],
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
                  분할상환금(또는 분할상환원리금)을 상환하여야할 날의
                  다음날부터는 해당 분할상환금(또는 분할상환원리금)에 대한
                  연체이자를, 2회 이상 연속하여 지체한 때에는 기한이익상실로
                  인하여 대출원금에 대한 연체이자를 내셔야 합니다.
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
                  <div class="underline">
                    여신거래기본약관 제8조에서 정한 대출기한 전의 채무변제 의무
                    사유에 해당되어 기한의 이익이 상실된 때
                  </div>
                  <ul :class="[$style['basic-list'], 'row-margin-item']">
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
                        기한의 이익이 상실된 때에는 그 다음 날부터 대출원금에
                        대한 연체이자를 내셔야 합니다.
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            6. 대출기한 전 채무 상환이 필요한 경우
          </h3>

          <section class="row-margin-contents">
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--large-margin'],
                'row-margin-contents',
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
                  <div>기한의 이익이란?</div>
                  <ul :class="[$style['basic-list'], 'row-margin-item']">
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
                        기한의 존재로 말미암아 당사자가 받는 이익을 말하며,
                        금융회사와의 대출거래에서 채무자인 고객은 당초 약정한
                        대출기한까지는 대출금을 상환하지 않아도 되므로 그 기간
                        동안 채무자인 고객이 가지는 이익을 기한의 이익이라
                        합니다.
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--large-margin'],
                'row-margin-contents',
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
                  <div>기한의 이익이 상실되면?</div>
                  <ul :class="[$style['basic-list'], 'row-margin-item']">
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
                        모든 대출금(또는 해당 대출금)을 즉시 상환
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
                        연체이자 부담
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
                        일정기간 경과 후 신용도판단정보 등록 등
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--large-margin'],
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
                <div class="underline">
                  채무자인 고객이 담보로 제공한 부동산 등 담보재산에 법원이나
                  세무서 등으로부터 압류명령 등이 있는 때 등 (여신거래기본약관
                  제8조제1항에서 정한 사유)
                </div>
                <ul :class="[$style['basic-list'], 'row-margin-item']">
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
                      모든 대출금(또는 해당 대출금)의 기한이익을 즉시 상실하며,
                      금융회사는 기한의 이익 상실 사유 발생 즉시 기한이익을
                      상실하였다는 사실을 서면통지 합니다.
                    </div>
                  </li>
                </ul>
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
                <div class="underline">
                  대출기한이 도래되었거나 기한이익이 상실된 대출을 하나라도
                  상환하지 아니한 때 등 (여신거래기본약관 제8조제2항, 제3항,
                  제4항에서 정한 사유)
                </div>

                <ul :class="[$style['basic-list'], 'row-margin-item']">
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
                      <div>
                        금융회사의 서면통지가 도달한 날부터 일정 시일이 경과하면
                        기한이익을 상실하며, 모든 대출금(또는 해당 대출금)을
                        대출기한이 도래하기 전임에도 불구하고 곧 상환하셔야
                        합니다.
                      </div>
                      <div class="row-margin-item">
                        <div class="text-body-5 font-weight-medium color-gray">
                          예) 주요 기한의 이익 상실 사유
                        </div>
                        <ul
                          :class="[
                            $style['basic-list'],
                            $style['basic-list--regular'],
                            $style['basic-list--small-margin'],
                            'row-margin-item',
                          ]"
                        >
                          <li
                            :class="[$style['basic-list__item'], 'text-body-5']"
                          >
                            <div :class="$style['basic-list__symbol']"></div>
                            <div :class="$style['basic-list__content']">
                              여신거래와 관련하여 허위, 위변조 또는 고의로
                              부실자료를 제출하여 회사의 채권보전에 중대한
                              손실을 유발할 때
                            </div>
                          </li>
                          <li
                            :class="[$style['basic-list__item'], 'text-body-5']"
                          >
                            <div :class="$style['basic-list__symbol']"></div>
                            <div :class="$style['basic-list__content']">
                              이자등을 지급하기로 한 때부터 계속하여 30일(기업인
                              경우 14일)간 지체한 경우
                            </div>
                          </li>
                          <li
                            :class="[$style['basic-list__item'], 'text-body-5']"
                          >
                            <div :class="$style['basic-list__symbol']"></div>
                            <div :class="$style['basic-list__content']">
                              분할상환금 또는 분할상환 원리금의 지급을 2회 이상
                              연속하여 지체한 때
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            7. 담보권 설정 및 권리변동
          </h3>

          <NoticeText :classNames="{ wrap: 'row-margin-contents' }">
            담보권 설정에 대한 기본적인 안내 사항입니다.
            <strong
              >담보의 제공은 재산상 손실을 가져올 수도 있는 중요한
              법률행위</strong
            >이므로 반드시
            <strong
              >별도로 작성하시는 근저당권[근질권]설정계약서의 내용을 확인 후
              신중한 판단</strong
            >을 하셔야 합니다.(비용부담에 대한 사항은 “수수료 등 비용부담” 내
            근저당권설정비용 항목을 참고하여 주시기 바랍니다.)
          </NoticeText>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--large-margin'],
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
                <span class="color-green underline">
                  대출과 관련하여 담보물을 제공한 경우, 금융회사는 채권보전을
                  위해 제공받은 담보물에 담보권(저당권·질권 등)을 설정할 수
                  있습니다.
                </span>
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
                <span class="color-green underline">
                  대출의 변제기가 도래하였거나 기한이익이 상실되었음에도 채무가
                  상환되지 않는 경우, 금융회사는 법정절차에 따라 담보물을
                  처분하여 채무의 변제에 충당할 수 있으며, 이 경우 담보제공자는
                  담보목적물에 대한 소유권을 상실하게 됩니다.
                </span>
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            8. 개인신용점수에 미치는 영향
          </h3>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--large-margin'],
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
                해당 금융거래로 인하여 개인신용평가회사가 개인신용평점을 만들어
                낼 때 해당 신용정보주체에게 불이익이 발생할 수 있으며,
                개인신용평점 하락 시 불이익 발생 가능성이 있는 금융거래는
                신용공여, 신용카드, 시설대여 및 할부금융 거래 등입니다.
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
                평균적으로 연체율이 높은 금융권역의 신용공여는 은행 등 여타
                금융권역의 신용공여보다 신용점수가 더 큰 폭으로 하락할 수
                있으며, 평균적으로 연체율이 높은 형태의 신용공여는 일반적인
                신용공여보다 신용점수가 더 큰 폭으로 하락할 수 있습니다.
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
                해당 금융거래가 변제나 이에 준하는 방식으로 거래가 종료된
                경우에도 일정기간 개인신용평점의 산정에 영향을 줄 수 있습니다.
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">9. 해지에 관한 사항</h3>

          <p class="text-body-2">
            운용리스 계약의 해지 시
            <span class="color-green-secondary"
              >중도해지수수료 또는 규정손해배상금</span
            ><span class="color-red underline"
              >(중도해지 후 물건 반납 시 중도해지수수료, 물건 매입 시
              규정손해배상금 부과)</span
            >이 부과 될 수 있습니다. 다만
            <span class="color-green underline"
              >리스상품은 계약이 성립한 날부터 3년 초과하여 상환하여도
              <span class="color-green-secondary underline"
                >중도해지수수료 또는 규정손해배상금이</span
              >
              부과되니 유의*</span
            >하여 주시기 바랍니다.
          </p>

          <ul :class="[$style['basic-list'], 'row-margin-item']">
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-5',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']">*</div>
              <div :class="$style['basic-list__content']">
                재화를 인도받고, 인도받은 재화에 하자가 없을 경우
              </div>
            </li>
          </ul>

          <ul :class="[$style['basic-list'], 'row-margin-item']">
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
                고객이 해지를 요청할 경우, 금융회사는 고객센터<br />(1800-1110)를
                통하여 진행가능 합니다(금융사 영업시간내에 처리가능). 금융회사는
                고객에게 중도상환수수료 등 해지 시 납부해야 하는 금액을 안내하고
                가상계좌를 발송합니다.(납부 시 해지 처리 진행)
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
                대출신청 이후 고객에 의한 대출취소 또는 대출심사 거절 시 발생한
                비용(등기설정/말소비용, 감정수수료, 인지세 등)을 고객이
                부담해야합니다.
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            10. 연체정보 등의 등록
          </h3>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--large-margin'],
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
                <div>
                  대출원금, 이자 등을 3개월 이상 「장기연체」한 경우 원금 또는
                  이자를 상환하기로 한 약정기일의 다음날로부터 3개월이 되는 날을
                  등록사유발생일로 하여, 그때로부터 7영업일 이내 '연체정보등'이
                  등록됩니다.
                </div>
                <ul :class="[$style['basic-list'], 'row-margin-item']">
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
                      「일반신용정보관리규약」개정으로 ‘연체정보등’ 등록 기준이
                      변경될 수 있습니다.
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
                      ‘연체정보등’이 등록되면, 금융거래제약 등 불이익을 받을 수
                      있습니다.
                    </div>
                  </li>
                </ul>
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
                '연체기간 5영업일 이상, 연체금 10만원 이상' 「단기연체」한 경우
                신용정보회사를 통해 연체정보가 등록되어 신용카드 사용정지 등
                금융거래가 제한될 수 있습니다.
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
                <div>
                  신용정보집중기관에 장기연체가 등록하는 경우에는
                  신용정보집중기관이 제3자에게 정보를 제공함으로써
                  신용정보주체가 불이익을 받을 수 있으며, 개인신용평점이
                  하락하고 금리가 상승하는 등의 영향이 발생할 수 있습니다.
                </div>
                <ul :class="[$style['basic-list'], 'row-margin-item']">
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
                      <div class="row-margin-item">
                        아래의 신용정보들은 한국신용정보원
                        「일반신용정보관리규약」에 따라 종합신용정보집중기관인
                        한국신용정보원에 제공, 집중, 활용됩니다.
                      </div>
                      <ul class="reset-list">
                        <li class="font-weight-light row-margin-small">
                          ① 개인식별정보(성명, 주민등록번호 등)
                        </li>
                        <li class="font-weight-light row-margin-small">
                          ② ‘연체정보 등’ 정보(연체사실 등)
                        </li>
                        <li class="font-weight-light row-margin-small">
                          ③ 신용거래정보(대출, 보증현황 등)
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <ul :class="[$style['basic-list'], 'row-margin-contents']">
            <li
              :class="[
                $style['basic-list__item'],
                'color-gray-tertiary',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']">※</div>
              <div :class="$style['basic-list__content']">
                정보 등록 후 연체금을 상환하여도 신용점수가 일정기간 회복되지
                아니할 수 있으며, 일정기간 동안 해당 기록이 보관될 수 있습니다.
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            11. 청약의 철회(청약철회권)
          </h3>
          <p class="text-body-2 color-green">
            「금융소비자 보호에 관한 법률」 시행령 제37조제1항제3호제가목에
            의거하여, 리스(시설대여)는 같은 법에서 규정하는 청약철회권 대상
            상품이 아닙니다. (다만, 재화를 제공받은 경우만 해당합니다)
          </p>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">12. 위법계약해지권</h3>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--large-margin'],
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
                <div>
                  <strong
                    >금융회사가 아래와 같이 「금융소비자 보호에 관한 법률」(이하
                    “금융소비자보호법”)상 의무를 위반</strong
                  >하여 대출계약을 체결한 경우, 일반금융소비자는 해당 계약을
                  위약금 등
                  <strong
                    >수수료 부과 없이 해지할 수 있습니다.(다만 계약종료 시 행사
                    불가)</strong
                  >
                </div>

                <ul :class="[$style['basic-list'], 'row-margin-item']">
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
                      금융소비자보호법 제17조제3항을 위반하여 적합하지
                      아니하다고 인정되는 대출계약의 체결을 권유한 경우
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
                      금융소비자보호법 제18조제2항을 위반하여 대출상품이
                      적정하지 아니한 경우임에도 해당 사실을 알리지 않거나 확인
                      받지 않은 경우
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
                      금융소비자보호법 제19조제1항 또는 제3항을 위반하여
                      설명의무를 이행하지 아니한 경우
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
                      금융소비자보호법 제20조제1항을 위반하여 불공정영업행위를
                      한 경우
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
                      금융소비자보호법 제21조를 위반하여 부당권유행위를 한 경우
                    </div>
                  </li>
                </ul>
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
                <div>
                  위법계약 해지를 요구하기 위해서는
                  <strong>아래의 날 중 먼저 도달한 기간 내에</strong>
                  서면등(우편, 전자우편, 문자메세지 등을 말함)으로
                  <strong>계약의 해지를 요구</strong>하여야 하며, 이 경우에는
                  금융위원회가 고시하는 서식(계약해지요구서)에 위반사실을
                  입증하는 서류를 첨부하여 당사에 제출하여야 합니다.
                </div>

                <ul :class="[$style['basic-list'], 'row-margin-item']">
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
                      <span class="underline"
                        >계약체결일로부터 <strong>5년 이내</strong> 또는 법
                        위반사실을 안 날로부터 <strong>1년 이내</strong></span
                      >
                    </div>
                  </li>
                </ul>
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
                <strong
                  >금융회사는 해지를 요구받은 날부터 10일 이내에 고객에게 수락
                  여부를 통지</strong
                >하며, <strong>거절 시에는 그 사유를 함께 통지</strong>합니다.
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">13. 자료열람요구권</h3>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--large-margin'],
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
                <div>
                  고객은 분쟁조정 또는 소송의 수행 등 권리구제를 위한 목적으로
                  금융회사가 기록 및 유지·관리하는 다음의 자료에 대한 열람(사본
                  및 청취 포함)을 요구할 수 있습니다.
                </div>
                <ul :class="[$style['basic-list'], 'row-margin-item']">
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
                      계약체결에 관한 자료, 계약의 이행에 관한 자료,
                      금융상품등에 관한 광고 자료, 고객의 권리행사에 관한 자료,
                      내부통제기준의 제정 및 운영 등에 관한 자료, 업무 위탁에
                      관한 자료
                    </div>
                  </li>
                </ul>
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
                금융회사는 고객의 분쟁조정 신청내역 또는 소송제기 등의 목적 및
                열람의 범위가 기재된 열람요구서로 열람을 요구받은 날로부터
                <strong class="font-weight-medium underline">8일 이내</strong>에
                고객이 해당 자료를 열람할 수 있게 합니다.
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
                금융회사는 법령, 제<strong class="font-weight-medium">3</strong
                >자의 이익 침해, 영업비밀의 침해 등의 사유가 있는 경우 이를
                고객에게 알리고
                <span class="color-red"
                  >자료 열람을 제한하거나 거절할 수 있습니다.</span
                >
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-small">14. 개인신용평가대응권</h3>

          <div>
            <p
              :class="[
                $style['padding-left'],
                'text-body-3',
                'color-green',
                'font-weight-regular',
              ]"
            >
              (개인차주와 관련된 설명)
            </p>
          </div>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--large-margin'],
              'row-margin-contents',
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
                <div>
                  개인신용평가대응권이란 개인인 금융소비자가
                  <strong>자동화평가*에 따른 개인신용평가 </strong>
                  <span class="italic color-gray font-weight-medium"
                    >[결과 및 주요기준 등의 설명]
                  </span>
                  과
                  <strong>
                    자동화평가 결과의 산출에 유리하다고 판단되는 정보</strong
                  >를 제출 또는 기초정보의
                  <span class="italic color-gray font-weight-medium">
                    [정정·삭제·재산출을 요구]
                  </span>
                  할 수 있는 권리(신용정보의 이용 및 보호에 관한 법률
                  제36조의2)를 말합니다.
                </div>

                <ul :class="[$style['basic-list'], 'row-margin-item']">
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'text-body-5',
                      'font-weight-regular',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']">*</div>
                    <div :class="$style['basic-list__content']">
                      <span class="color-green">금융회사</span> 임직원이 평가
                      업무에 관여하지 아니하고 컴퓨터 등 정보처리장치로만
                      개인신용정보 및 그 밖의 정보를 처리하여 개인인
                      금융소비자를 평가하는 행위
                    </div>
                  </li>
                </ul>
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
                <div>
                  금융소비자는 신용정보의 이용 및 보호에 관한 법률 제36조의2에
                  따라 자동화 평가의 결과, 자동화 평가의 주요 기준, 자동화
                  평가의 평가에 이용된
                  <strong
                    >기초정보 등에 대해 설명하여 줄 것을
                    <span class="color-green">금융회사</span>에 요구*할 수
                    있습니다.</strong
                  >
                </div>

                <ul :class="[$style['basic-list'], 'row-margin-item']">
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'text-body-5',
                      'font-weight-regular',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']">*</div>
                    <div :class="$style['basic-list__content']">
                      <span class="color-green"
                        >하나캐피탈 대표번호(1800-1110) 및
                        홈페이지(https://www.hanacapital.co.kr), 우편을 통하여
                        권리 행사할 수 있습니다.</span
                      >
                    </div>
                  </li>
                </ul>
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
                <div>
                  <span class="color-green">금융회사</span>는 다음 어느 하나에
                  해당하는 경우에는 <strong>금융소비자의 요구를 거절</strong>할
                  수 있으며, 기초정보가 정정·삭제 되었더라도 신용상태의 개선이
                  경미한 경우,
                  <strong>재평가결과는 기존과 동일할 수 있습니다.</strong>
                </div>
                <ul :class="[$style['basic-list'], 'row-margin-item']">
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
                      자동화평가가 아닌 방식으로 개인의 신용을 평가하는 경우
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
                      관련 법령에 특별한 규정이 있거나 법령상 의무를 준수하기
                      위하여 불가피한 경우
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
                      해당 금융소비자의 요구에 따르게 되면 금융거래 등
                      상거래관계의 설정 및 유지 등이 곤란한 경우
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
                      금융소비자가 정정 또는 삭제 요청한 내용이 사실과 다른 경우
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
                      정당한 사유 없이 동일한 금융거래 등에 대해 3회 이상
                      반복적으로 대응권을 행사하는 경우
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">15. 그 밖의 유의사항</h3>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              만기 시 처리방법에 관한 유의사항
            </h4>

            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--large-margin'],
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
                  대출만기 시,
                  <span class="underline"
                    >고객은 차량 등의 매입 또는 반납(운용리스 상품만 해당),
                    재이용 등을 선택</span
                  >하실 수 있습니다.
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
                  <div>
                    대출만기 시 차량 등을 매입할 경우, 고객의 명의로 이전하는
                    데에 필요한 취득세 등의 제세공과금 및 만기시점의
                    물건가치(잔존가치)만큼의
                    <span class="underline">비용이 발생</span>할 수 있으며, 이는
                    고객이 부담합니다.
                  </div>

                  <ul :class="[$style['basic-list'], 'row-margin-item']">
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'color-green',
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">※</div>
                      <div :class="$style['basic-list__content']">
                        <span class="underline"
                          >이용자 명의일 경우에도 차량 등 매입 시 취득세가
                          발생하니 유의하여 주시기 바랍니다.</span
                        >
                      </div>
                    </li>
                  </ul>
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
                  차량 등의 등록명의가 이용자 명의일 경우, 차량 등을 반납할 때
                  명의이전서류를 반드시 제출하셔야 합니다.
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
                  위 사항과 관련하여 자세한 내용은 금융회사 담당자에게 문의하여
                  주시기 바랍니다.
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
                  <div class="color-red">
                    리스자동차에 대한 소유권은 리스종류 및 등록명의에 상관없이
                    리스회사에 있습니다.
                  </div>
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
                  <div class="color-red">
                    고객은 자동차 검사를 포함한 사용·관리를 성실히 준수하여야
                    하며, 자기차량 손해에 대한 보험금 청구권에 대해서는
                    금융회사를 질권자로 하여 자동차종합보험 계약을 체결해야
                    합니다.(자세한 내용은 약관을 확인하여 주시기 바랍니다.)
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              계약 연장에 관한 사항
            </h4>
            <p class="text-body-2">
              동 할부금융 상품은 계약 만기시점에 연장이 불가한 상품입니다.
            </p>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              자동차의 제 3자 양도, 대여 등 임의처분 제한 안내
            </h4>
            <p class="text-body-2">
              소비자는 당사의 승낙 없이
              <strong class="color-green">리스 대상 자동차</strong>를 제 3자에게
              <strong class="color-green">양도, 대여</strong>하는 등
              <strong class="color-green">임의처분</strong>하거나
              <strong class="color-green">질권</strong> 또는
              <strong class="color-green">저당권</strong>을 설정할 수 없습니다.
              (자동차 리스 표준약관 제14조)
            </p>
          </section>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            16. 자동차 리스 관련 사기 유의사항
          </h3>

          <p class="text-body-2">
            다음과 같이
            <strong class="color-red">고수익 보장, 리스료 할인</strong>등을
            미끼로 자동차 리스를 받도록 권유하는
            <strong class="color-red">금융사기가 빈번히 발생</strong>하고
            있습니다.
          </p>

          <ul class="reset-list row-margin-item">
            <li
              class="text-body-4 color-gray-tertiary font-weight-light row-margin-item"
            >
              <div
                class="text-body-4 color-gray-tertiary font-weight-regular row-margin-mini"
              >
                [사례1]
              </div>
              <div>
                리스 차량을 렌터카 사업에 제공하면 수익금을 지급하겠다고
                하였으나, 사기범은 리스 자동차를 받은 후 잠적
              </div>
            </li>
            <li
              class="text-body-4 color-gray-tertiary font-weight-light row-margin-item"
            >
              <div
                class="text-body-4 color-gray-tertiary font-weight-regular row-margin-mini"
              >
                [사례2]
              </div>
              <div>
                자동차 딜러가 보증금을 지불하면 매달 내는 리스료를 절반 넘게
                지원해주겠다고 하여 이면계약을 체결하였으나 사기범은 보증금을
                받은 후 잠적
              </div>
            </li>
            <li
              class="text-body-4 color-gray-tertiary font-weight-light row-margin-item"
            >
              <div
                class="text-body-4 color-gray-tertiary font-weight-regular row-margin-mini"
              >
                [사례3]
              </div>
              <div>
                본인 명의로 리스를 받으면 기사로 채용하고, 리스료도
                납부해주겠다고 하였으나, 일자리와 차량 모두 받지 못함
              </div>
            </li>
          </ul>

          <p class="text-body-2">
            <strong
              ><span class="color-red">상기와 같은 목적 또는 이유</span>로
              자동차 리스를 신청하시는 경우 자동차는 받지 못하고, 리스료 및
              자동차 반납 의무만 떠안는 등
              <span class="color-red">예상하지 못한 피해</span>를 입게 되실 수
              있습니다.</strong
            >
          </p>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            ※ 고객의 이해여부 확인을 위한 질의
          </h3>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--large-margin'],
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
                <div class="row-margin-item">
                  <p class="row-margin-mini">
                    본 상품을 연체하셨을 때에는 법에서 정하는 범위 내에서
                    지연배상금*을 납부하셔야 합니다. 예를 들어 리스료 100만원을
                    10일 연체하셨을 경우(지연배상금율 가산 시 연 20% 가정 시),
                    최대 5,479원의 지연배상금이 발생합니다.
                    <strong class="font-weight-medium"
                      >이 내용을 확인하셨습니까?</strong
                    >
                  </p>
                  <ul :class="[$style['basic-list'], 'row-margin-item']">
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">*</div>
                      <div :class="$style['basic-list__content']">
                        지연배상금 산식 : 리스료 × 지연배상금율(20%) ×
                        연체일수/365
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="flex-box">
                  <div class="flex-box__cell">
                    <div class="flex-box">
                      <div class="flex-box__cell">
                        <IconCheck class="display-block" />
                      </div>
                      <div class="flex-box__cell flex-box__cell--small">
                        <div class="text-body-3">예</div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-box__cell flex-box__cell--large">
                    <div class="flex-box">
                      <div class="flex-box__cell">
                        <IconCheck class="display-block" />
                      </div>
                      <div class="flex-box__cell flex-box__cell--small">
                        <div class="text-body-3">아니오</div>
                      </div>
                    </div>
                  </div>
                </div>
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
                <div class="row-margin-item">
                  본 상품은 일반적인 대출상품과 달리 계약이 성립한 날로부터 3년
                  경과 후에도 중도상환수수료가 부과(중도해지 후 물건 반납 시
                  중도해지손해배상금, 물건 매입 시 규정손해배상금
                  부과)됩니다.<br />
                  <strong class="font-weight-medium"
                    >이를 납부하셔야만 중도에 리스계약을 해지하실 수 있다는 점을
                    확인하셨습니까?</strong
                  >
                </div>

                <div class="flex-box">
                  <div class="flex-box__cell">
                    <div class="flex-box">
                      <div class="flex-box__cell">
                        <IconCheck class="display-block" />
                      </div>
                      <div class="flex-box__cell flex-box__cell--small">
                        <div class="text-body-3">예</div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-box__cell flex-box__cell--large">
                    <div class="flex-box">
                      <div class="flex-box__cell">
                        <IconCheck class="display-block" />
                      </div>
                      <div class="flex-box__cell flex-box__cell--small">
                        <div class="text-body-3">아니오</div>
                      </div>
                    </div>
                  </div>
                </div>
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
                <div class="row-margin-item">
                  <p class="row-margin-mini">
                    본 상품은 일반적인 대출상품(신용대출, 오토론 등)과 달리
                    금융소비자보호법 상 청약철회권 대상*이 아닙니다. 재화를
                    제공받은 후에는 청약 철회가 불가능하기에 계약 체결에 신중을
                    기해주시기 바랍니다.<br />
                    <strong class="font-weight-medium"
                      >이 내용을 확인하셨습니까?</strong
                    >
                  </p>
                  <ul :class="[$style['basic-list'], 'row-margin-item']">
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">*</div>
                      <div :class="$style['basic-list__content']">
                        재화를 제공받은 경우에 금융소비자보호법 상 청약철회권
                        행사가 불가능(금융소비자보호법 시행령
                        제37조제1항제3호가목)
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="flex-box">
                  <div class="flex-box__cell">
                    <div class="flex-box">
                      <div class="flex-box__cell">
                        <IconCheck class="display-block" />
                      </div>
                      <div class="flex-box__cell flex-box__cell--small">
                        <div class="text-body-3">예</div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-box__cell flex-box__cell--large">
                    <div class="flex-box">
                      <div class="flex-box__cell">
                        <IconCheck class="display-block" />
                      </div>
                      <div class="flex-box__cell flex-box__cell--small">
                        <div class="text-body-3">아니오</div>
                      </div>
                    </div>
                  </div>
                </div>
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
                <div class="row-margin-item">
                  고수익을 보장하거나 리스료를 할인해 준다고 약속을 받고 자동차
                  리스를 신청하시는 경우 자동차는 받지 못하고, 리스료와 차량반납
                  의무만 떠안는 등 예상하지 못한 피해가 발생할 수 있음을
                  이해하고 확인하셨습니까? 재화를 제공받은 경우에
                  금융소비자보호법 상 청약철회권 행사가 불가능(금융소비자보호법
                  시행령 제37조제1항제3호가목)
                </div>

                <div class="flex-box">
                  <div class="flex-box__cell">
                    <div class="flex-box">
                      <div class="flex-box__cell">
                        <IconCheck class="display-block" />
                      </div>
                      <div class="flex-box__cell flex-box__cell--small">
                        <div class="text-body-3">예</div>
                      </div>
                    </div>
                  </div>
                  <div class="flex-box__cell flex-box__cell--large">
                    <div class="flex-box">
                      <div class="flex-box__cell">
                        <IconCheck class="display-block" />
                      </div>
                      <div class="flex-box__cell flex-box__cell--small">
                        <div class="text-body-3">아니오</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <div class="row-margin-container-medium">
          <div :class="$style['basic-table']">
            <table>
              <colgroup>
                <col style="width: 32px" />
                <col style="width: 72px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th rowspan="2" :class="$style['basic-table__padding-none']">
                    해<br />당<br />여<br />부
                  </th>
                  <td></td>
                  <td class="align-left">
                    본인은 하나캐피탈과 리스계약을 체결함에 있어 금융회사 직원과
                    상담하여 본 설명서를 교부받았으며, 위에서 설명한 내용을
                    포함하여 대출거래의 주요내용 및 고객부담비용에 대하여 충분히
                    설명을 듣고 이해하였음을 확인합니다.
                  </td>
                </tr>
                <tr>
                  <td :class="$style['basic-table__left-line']"></td>
                  <td class="align-left">
                    본인은 금융회사 직원으로부터 금리인하요구권, 청약철회권,
                    위법계약해지권 등 고객의 권리에 대하여 충분히 설명을 듣고
                    이해하였음을 확인합니다.
                  </td>
                </tr>
                <tr>
                  <td colspan="3" class="align-left">
                    <div class="inline-wrap">
                      <div
                        :class="[
                          $style['margin-right-regular'],
                          'inline-block',
                        ]"
                      >
                        <div class="text-body-5 color-gray">
                          고객확인 : 20<span
                            :class="[
                              $style['blank-box'],
                              $style['blank-box--small'],
                            ]"
                          ></span
                          >.<span
                            :class="[
                              $style['blank-box'],
                              $style['blank-box--small'],
                            ]"
                          ></span
                          >.<span
                            :class="[
                              $style['blank-box'],
                              $style['blank-box--small'],
                            ]"
                          ></span
                          >.<span
                            :class="[
                              $style['blank-box'],
                              $style['blank-box--regular'],
                            ]"
                          ></span>
                        </div>
                      </div>
                      <div class="inline-block">
                        <div class="text-body-5 color-gray">(서명/인)</div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <template v-slot:foot>
        <ButtonList
          align="full"
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>동의하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractDescription008_012.scss';
</style>
