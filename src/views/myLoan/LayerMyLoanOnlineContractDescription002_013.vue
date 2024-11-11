<script>
// My_M99_l003
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
          <PopupTitle>일반할부금융 설명서</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <p
          class="text-body-5 color-gray font-weight-light align-right row-margin-contents-small"
        >
          준법심의필(설) : 2023-10 (2023.03.01)
        </p>
        <PageMainText>
          상품설명서 약관에<br />
          동의해주세요
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
                  할부금융은
                  <span class="color-green"
                    >금융회사와 소비자의 대출 약정 체결(2자 거래)로 이루어지는
                    오토론과는 달리,</span
                  >
                  소비자-금융사-물품판매자 간의
                  <span class="color-green underline"
                    >3자계약에 따라 금융회사는 소비자를 대신하여 물품판매자에게
                    대출금을 지급하고, 소비자는 할부상품의 소유권을 취득</span
                  >하게 되는 상품입니다. (☞<span class="color-red"
                    >‘1. 상품 개요 및 특성’</span
                  >
                  확인)
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
                    일반적인 대출(신용대출, 오토론 등)과 달리 할부금융은 대출
                    실행 후 3년이 경과해도 중도상환수수료가 부과되며,
                    금융소비자보호법 상 청약철회권의 행사가 제약*되오니 확인하여
                    주시기 바랍니다. (☞<span class="color-red"
                      >'4. 수수료 등 비용부담’, ‘10. 해지에 관한 사항‘, ‘13.
                      청약의 철회(청약철회권) 및 항변권’</span
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
                        재화를 제공받은 경우에 금융소비자보호법 상 청약철회권
                        행사가 불가능(금융소비자보호법 시행령
                        제37조제1항제3호가목)하며, 할부거래법 상 철회권과
                        항변권은 별도 적용
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
            <div :class="$style['manual-qna']">
              <ul :class="$style['manual-qna__list']">
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
                          할부금의 경우
                          <span class="color-green underline"
                            >계약이 성립한 날로부터</span
                          >
                          <span class="color-red underline"
                            >3년 경과 후에도 최대 1%의 해약금(중도상환수수료)이
                            발생*</span
                          >
                          <span class="underline"
                            >하오니 참고하여 주시기 바랍니다.</span
                          >(☞<span class="color-red"
                            >‘4. 수수료 등 비용부담’, ‘10. 해지에 관한
                            사항’</span
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
                              예) 1천만원을 중도상환(적용요율을 1%로 가정)할
                              경우, 고객은 최대 10만원의 중도상환수수료를
                              금융회사에 납부해야 함. 항변권은 별도 적용
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li :class="$style['manual-qna__item']">
                  <div :class="$style['manual-qna__head']">
                    <div :class="$style['manual-qna__symbol']">Q</div>
                    <div :class="$style['manual-qna__cell']">
                      <h5 :class="$style['manual-qna__title']">
                        할부금융을 이용하기 위해서는 어떤 비용을 부담해야
                        하나요?
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
                        할부계약을 체결하는 경우
                        <span class="color-green underline"
                          >고객이 부담하여야 하는 총 금액에는 원리금, 수수료
                          등이 포함</span
                        >됩니다.
                        <span class="color-red underline"
                          >상세한 금액의 합계는 대출심사 후에 확인 가능</span
                        >하므로, 심사 후 담당자가 안내드리도록 하겠습니다.
                        (☞<span class="color-red">‘4. 수수료 등 비용부담’</span>
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
                        할부금융상품의 기한의 이익이 상실되면 어떻게 되나요?
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
                        고객은 약정한 대출 상환기한까지는 대출금을 상환하지
                        않아도 되므로, 그 기간 동안 고객이 가지는 이익을
                        <span class="color-red numderline">‘기한의 이익’</span
                        >이라고 합니다. 이러한
                        <span class="color-green"
                          >기한의 이익이 상실되면, 고객은
                        </span>
                        <span class="color-red underline"
                          >모든 할부금을 즉시 상환</span
                        >하셔야 되고,
                        <span class="color-red underline">연체이자 부담</span>
                        및
                        <span class="color-red underline"
                          >일정기간 경과 후 신용도판단정보 등록 등</span
                        >
                        불이익이 발생할 수 있습니다. (☞<span class="color-red"
                          >‘7. 대출기한 전 채무 상환이 필요한 경우’</span
                        >확인)
                      </div>
                    </div>
                  </div>
                </li>
                <li :class="$style['manual-qna__item']">
                  <div :class="$style['manual-qna__head']">
                    <div :class="$style['manual-qna__symbol']">Q</div>
                    <div :class="$style['manual-qna__cell']">
                      <h5 :class="$style['manual-qna__title']">
                        개인신용평점에 영향이 있나요?
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
                        <span class="color-red underline"
                          >신용공여(할부금융, 대출 등) 사실만으로 신용점수가
                          하락할 수 있습니다.</span
                        >
                        또한, 당사가 신용조회회사를 통하여 귀하의
                        개인(신용)정보를 조회한 기록은 타 금융기관 등에 제공될
                        수 있습니다. (☞<span class="color-red"
                          >‘9. 개인신용점수에 미치는 영향’</span
                        >
                        확인)
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              할부금 연체 시 발생하는 불이익
            </h4>
            <div :class="$style['manual-qna']">
              <ul :class="$style['manual-qna__list']">
                <li :class="$style['manual-qna__item']">
                  <div :class="$style['manual-qna__head']">
                    <div :class="$style['manual-qna__symbol']">Q</div>
                    <div :class="$style['manual-qna__cell']">
                      <h5 :class="$style['manual-qna__title']">
                        할부금을 연체할 경우 어떤 불이익이 발생하나요?
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
                        <span class="color-red underline"
                          >할부금 연체 시에는 법에서 정하는 범위 내에서 약정에
                          따라 정한 지연배상금율에 의한 지연배상금*을
                          지불하셔야</span
                        >
                        하며,
                        <span class="color-green underline"
                          >신용점수 하락 및 금융거래 제한 등이 발생</span
                        >할 수 있으니 유의하여 주시기 바랍니다. (☞<span
                          class="color-red"
                          >‘6. 연체이자율(지연배상금율)’, ’11. 연체정보 등의
                          등록’</span
                        >
                        확인)
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
                      <h5 :class="[$style['manual-qna__title'], 'color-green']">
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
                        <span class="color-green underline"
                          >당사 인터넷 홈페이지</span
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
                  <td class="align-left">일반할부</td>
                </tr>
                <tr>
                  <th>할부기간</th>
                  <td class="align-left">36개월</td>
                </tr>
                <tr>
                  <th>할부원금</th>
                  <td class="align-left">5,000,000 원</td>
                </tr>
                <tr>
                  <th>금리적용방식</th>
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
                              고정
                            </div>
                          </div>
                        </li>
                        <li :class="$style['manual-check__item']">
                          <div :class="$style['manual-check__block']">
                            <div :class="$style['manual-check__object']"></div>
                            <div :class="$style['manual-check__text']">
                              변동
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>이자</th>
                  <td class="align-left">0 원</td>
                </tr>
                <tr>
                  <th>할부이자율</th>
                  <td class="align-left">연 0%</td>
                </tr>
                <tr>
                  <th>총 할부금<br />(할부원금+이자)</th>
                  <td class="align-left">6,864,430 원</td>
                </tr>
                <tr>
                  <th>월 할부금</th>
                  <td class="align-left">142,470 원</td>
                </tr>
                <tr>
                  <th>중도상환수수료율</th>
                  <td class="align-left">0%</td>
                </tr>
                <tr>
                  <th>만기 1년이상</th>
                  <td class="align-left">
                    <div>
                      중도상환원금 × 1% + 중도상환 원금 × (중도상환수수료율 –1%
                      )× 잔존기간/(할부기간-30일)
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
                          잔존기간 : 30일 미만 상환 시 ‘할부 사용기간’을 30일로
                          간주
                        </div>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>만기 1년미만</th>
                  <td class="align-left">
                    <div>
                      중도상환원금 × (중도상환수수 료율) × 잔존기간/(할부기간-30
                      일)
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
                          잔존기간 : 30일 미만 상환 시 ‘할부 사용기간’을 30일로
                          간주
                        </div>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>연체이자율</th>
                  <td class="align-left">
                    <div>연 19.3%</div>
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
                          약정이율 + 최대 3%, 법정 최고금리 이내
                        </div>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>인지세</th>
                  <td class="align-left">
                    <div>금 0 원</div>
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
                          인지세는 회사와 소비자가 각 50%씩 부담
                        </div>
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>대출상환방법</th>
                  <td class="align-left">
                    <div :class="$style['manual-check']">
                      <ul :class="$style['manual-check__list']">
                        <li :class="$style['manual-check__item']">
                          <div :class="$style['manual-check__block']">
                            <div :class="$style['manual-check__object']"></div>
                            <div :class="$style['manual-check__text']">
                              원금균등분할
                            </div>
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
                            <div :class="$style['manual-check__text']">
                              원리금균등분할상환
                            </div>
                          </div>
                        </li>
                        <li :class="$style['manual-check__item']">
                          <div :class="$style['manual-check__block']">
                            <div :class="$style['manual-check__object']"></div>
                            <div :class="$style['manual-check__text']">
                              만기일시
                            </div>
                          </div>
                        </li>
                        <li :class="$style['manual-check__item']">
                          <div :class="$style['manual-check__block']">
                            <div :class="$style['manual-check__object']"></div>
                            <div :class="$style['manual-check__text']">
                              <div class="inline-wrap text-body-4">
                                <div
                                  :class="[
                                    $style['margin-right-mini'],
                                    'inline-block',
                                  ]"
                                >
                                  기타
                                </div>
                                <div class="inline-block">
                                  (<span :class="$style['blank-box']"></span>)
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
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
                첫회차 월 할부금 및 총할부금은 지급일로부터 첫 회차 납부일까지
                경과된 일수에 따라 이 설명서에 기재된 금액대 대비 증감될 수
                있습니다.
              </div>
            </li>
          </ul>
          <div class="color-black text-body-2 row-margin-contents">
            본 할부금융상품은 내구소비재를 구매하고자 하는 개인 및 개인사업자,
            법인을 대상으로 하는 상품입니다. 할부금과 금리 등은 내부 심사를 거쳐
            결정되므로, 정확한 수치는 심사 후 안내드리도록 하겠습니다.
            상환방식은 원리금균등분할상환 또는 원금균등분할상환 중 선택하실 수
            있으니, 상환방식에 따른 자세한 설명은 ‘5. 할부금 납입방법’을
            확인하여 주시기 바랍니다.
          </div>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              할부금융과 대출/론의 비교
            </h4>

            <div>
              <div
                :class="[$style['manual-graph-image'], 'row-margin-item-group']"
              >
                <img
                  src="@/assets/images/contents/manual/manual-graph-003.png"
                  alt=""
                />
              </div>
              <p class="text-body-2 align-center">할부금융 상품 거래절차</p>
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
                    렌탈이나 리스가 아닌 할부금융계약으로 제품의 소유권은
                    매수인에게 있으며, 제품사용 중 반납이나 취소 불가함.
                  </div>
                </li>
              </ul>
            </div>

            <div class="row-margin-contents">
              <div
                :class="[$style['manual-graph-image'], 'row-margin-item-group']"
              >
                <img
                  src="@/assets/images/contents/manual/manual-graph-004.png"
                  alt=""
                />
              </div>
              <p class="text-body-2 align-center">대출/론 상품 거래절차</p>
            </div>
          </section>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            2. 금리의 변동 및 산출근거
          </h3>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">금리의 변동 유무</h4>
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
                  <span class="color-green">고정금리</span> : 대출성상품이
                  실행될 때 금리가 한 번 결정되면,
                  <span class="color-green underline"
                    >‘약정기간 동안에 동일하게 적용되는 금리’</span
                  >
                  입니다.
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
                    <span class="color-green">변동금리</span> : 대출성상품이
                    실행될 때 금리가 결정되더라도, 대출성상품의 약정기간 내에
                    기준금리가 변경될 경우
                    <span class="color-green underline"
                      >‘일정 주기마다 달라지는 금리’</span
                    >
                    입니다. 즉, 기준금리가 인상될 경우 고객의 부담이 증가할 수
                    있습니다.(예 : 코픽스연동금리, 금융채연동금리 등)
                  </div>

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
                        일반적으로 향후 시장금리가 내려갈 것으로 예상한다면
                        변동금리가 고객에게 유리하고, 올라갈 것으로 예상한다면
                        고정금리가 고객에게 유리합니다. 다만 시장금리가
                        상승기라고 해도, 통상 고정금리가 변동금리보다 높은
                        상황에서 예상 대출기간이 짧아 단기간 내에 지속적인
                        금리인상으로 인한 추가 이자부담액이 크지 않을 것으로
                        예상된다면 변동금리가 유리할 수도 있습니다. 따라서
                        대출금리의 유불리를 파악하기 위해서는 예상 대출기간,
                        향후 시장금리 전망, 중도상환 수수료 등이 모두 고려되어야
                        합니다. (금융감독원 금용소비자정보포탈 참조)
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              금리의 산출 및 변동근거
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
                  <div>
                    고객에게 실제 적용되는
                    <strong class="underline">약정금리</strong>는
                    <strong class="underline"
                      >①원가요소와 ②마진(목표이익률)</strong
                    >을 반영하여 결정됩니다.
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
                        <strong>원가요소</strong>(①)는 신용원가, 업무원가,
                        조달원가 및 자본원가 등으로 구분되며, 금융회사는
                        합리적인 기준에 따라 해당 원가들을 산정합니다.
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
                        <strong>기준금리</strong>(①+②)는 이러한 원가요소(①)에
                        목표이익율(②)을 더하여 산정됩니다.
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
                        고객에게 실제 적용되는 약정금리는 기준금리에
                        프로모션등에 의한 조정금리등을 반영하여 적용합니다.
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
                    결정된
                    <strong>대출금리(약정금리)</strong>는 개별약정에 의해 별도로
                    정한 항목(변동금리대출의 기준금리 등) 이외에는
                    대출만기일까지 동일하게 적용됩니다.
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
                        기한연장, 채무자변경 등 ‘대출조건이 변경되는 경우’ 에는
                        변경 당시의 원가요소와 마진을 기준으로 대출금리가 변경될
                        수 있습니다.
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">3. 금리인하요구권</h3>

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
                      <div :class="$style['manual-check__text']">
                        비대상선택됨
                      </div>
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
                  <div>
                    채무자인 고객은 「여신전문금융업법」
                    제50조의13(금리인하요구)에서 정하는 바에 따라
                    <span class="underline"
                      ><strong
                        >본인의
                        <span class="italic color-gray font-weight-medium"
                          >[신용상태가 개선]</span
                        >
                        되었다고 판단되는 경우(예 : 취업, 승진 등 소득증가,
                        재산증가, 신용평가등급(평점) 등 용도 상승, 기타 신용상태
                        개선)</strong
                      >
                      *금융회사에
                      <strong class="italic color-gray font-weight-medium"
                        >[금리인하를 요구]</strong
                      ></span
                    >
                    할 수 있습니다.
                    <strong class="color-green"
                      >단, 신용상태가 금리에 영향을 미치지 않는 상품은
                      금리인하요구권의 행사 대상에서 제외되오니, 상단의
                      체크박스를 확인하여 주시기 바랍니다.</strong
                    >
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
                        기업의 경우(이익증가 등 재무상태 개선, 회사채 등급상승,
                        추가남보 제공 등 신용도상승, 기타 신용상태 개선
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
                  금리인하요구권은 영업점 방문 및 비대면채널(예 :
                  홈페이지,모바일)을 통해 신청 가능하며 금융회사는 금리인하를
                  요구하는 고객에게 신용상태 개선을 확인하는 데 필요한 자료의
                  제출을 요구할 수 있습니다.
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
                  금융회사는 금리인하 요구를 받은 날부터
                  <span class="color-green">‘10영업일 이내’</span> (고객에게
                  자료의 보완을 요구하는 날부터 자료가 제출되는 날까지의 기간은
                  포함되지 않습니다)에 금리인하 요구 수용 여부 및 그 사유를
                  고객에게 통지합니다.
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
                  다만,
                  <span class="color-green underline"
                    >본 할부금융은 제품별 적용금리 반영되는 상품</span
                  >으로, 금융회사의 심사(신용도 등 반영)에 따라 금리가 차등
                  적용되는 대출이 아니므로,
                  <span class="color-green">금리인하요구권 대상에서 제외</span
                  >됩니다.
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            4. 수수료 등 비용부담
          </h3>

          <NoticeText :classNames="{ wrap: 'color-red row-margin-contents' }">
            할부계약을 체결하는 경우 고객이 부담하여야 하는 총 금액에는 할부금융
            대출금액 및 이자액, 수수료 등이 포함됩니다. 상세한 금액의 합계는
            심사 후에 확인 가능하므로, 심사 후 금융회사 담당자가
            안내드리겠습니다.
          </NoticeText>

          <section>
            <h4 class="text-body-2 row-margin-item-medium">중도상환수수료</h4>
            <p class="text-body-2">
              대출의 상환기일이 도래하기 전에 대출금을 상환할 경우 고객이
              부담하는 금액으로,
              <span class="color-green"
                >할부금융상품은 3년을 초과하여 상환 시에도 부과</span
              >되며, 자세한 사항은 약정서 등을 참고하여 주시기 바랍니다.
            </p>

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
                  <div>유이자</div>

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
                        만기1년이상 : 중도상환원금 × 1% + 중도상환원금 ×
                        (중도상환수수료율 –1%) × 잔존기간/(할부기간-30일)
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
                        <div>
                          만기1년미만: 중도상환원금 × (중도상환수수료율) ×
                          잔존기간/(할부기간-30일)
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
                              잔여기간 : 30일미만 상환시 ‘대출사용기간’을 30일로
                              간주
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
                  'text-body-2',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  무이자 : 중도상환 수수료 없음
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              근저당권설정(해지)비용
            </h4>
            <p class="text-body-2">
              자동차 등에 근저당 설정할 때 발생하는 부대비용으로,
              <span class="color-green">설정 시에는 금융회사가 부담</span>하며,
              <span class="color-green">해지 시에는 고객(채무자)이 부담</span
              >합니다.
            </p>

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
                    등록면허세, 지방교육세, 등기신청수수료 및 법무사수수료:
                    (<span :class="$style['blank-box']"></span>) 원
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
                        말소(감액)등기를 하는 경우 고객이 부담합니다.
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
                    근저당물건의 조사 또는 감정평가 수수료 : (<span
                      :class="$style['blank-box']"
                    ></span
                    >) 원
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
                        고객의 채무불이행으로 인하여 근저당권을 행사하는 경우
                        고객이 부담합니다.
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
                    기타 비용으로서 부담주체가 분명하지 아니한 비용 : (<span
                      :class="$style['blank-box']"
                    ></span
                    >) 원
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
                        고객과 금융회사가 균분하여 부담합니다.
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">인지세</h4>

            <p class="text-body-2">
              인지세법에 의해 대출약정 체결 시 납부하는 세금으로 대출금액에 따라
              세액이 차등 적용되며,
              <span class="color-green"
                >각 50%씩 고객과 금융회사가 부담합니다.</span
              >
            </p>

            <div :class="[$style['basic-table'], 'row-margin-item']">
              <table>
                <colgroup>
                  <col style="width: 160px" />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th>대출금액</th>
                    <th>인지세액</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>5천만원 이하</th>
                    <td>비과세</td>
                  </tr>
                  <tr>
                    <th>5천만원 초과 1억원 이하</th>
                    <td>7만원</td>
                  </tr>
                  <tr>
                    <th>1억원 초과 10억원 이하</th>
                    <td>15만원</td>
                  </tr>
                  <tr>
                    <th>10억원 초과</th>
                    <td>35만원</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <NoticeText :classNames="{ wrap: 'color-red' }">
              고객의 채무불이행으로 인해 발생하는 비용은 여신거래기본약관
              제4조(비용의부담)에 의거하여 고객이 부담하여야 합니다.
            </NoticeText>
          </section>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">5. 할부금 납입방법</h3>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">할부금의 납입</h4>

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
                  고객님께서는 이자납입일을 정하여, 일정주기(매월 등)마다
                  할부금을 납입하셔야 합니다. 약정 시 자동이체를 선택하고 관련
                  정보 제공 시, 할부금은 은행의 본인명의 계좌에서
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
                  자동이체로 할부금 납입 시, 납입일에 잔고부족 등의 이체불가
                  사유로 납입하실 금액 전부를 이체할 수 없는 경우에는 납입지정일
                  이후 회사가 정하는 출금일에 미납금액(지연배상금 포함)을
                  출금하여 대출원리금에 충당할 수 있습니다.
                  <span class="color-red"
                    >(고객이 지정한 납입일의 오전 10시 이전 청구되며, 금융기관
                    영업시간 내에 할부금 잔액이 있어야 함)</span
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
                  납입일이 휴일인 경우, 익영업일로 자동으로 납부가 이월됩니다.
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
                  자동이체 계좌는 고객센터(1800-1110)을 통하여 변경이
                  가능하지만, 자동이체일 4일 전(영업일기준) 변경시 당월 적용이
                  가능하며, 그 이후에는 익월부터 변경사항이 적용됨을
                  유의해주시기 바랍니다.
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
                  첫 납부금은 결제일에 따라 납입액이 달라질 수 있습니다.
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              상환방법에 따른 상환금액·이자율·시기
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
                  <p class="row-margin-mini">
                    고객이 원리금균등분할상환을 선택한 경우
                  </p>
                  <p class="text-body-4 font-weight-light color-gray-tertiary">
                    (예시) 대출금액 1천만원, 유이자(금리 14%), 대출기간 36개월
                  </p>

                  <div :class="[$style['basic-table'], 'row-margin-item']">
                    <table>
                      <colgroup>
                        <col style="width: 88px" />
                        <col />
                        <col style="width: 114px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>상환방식</th>
                          <th>총 할부금<br />부담 예상액</th>
                          <th>
                            거치기간 종료 후<br />월 할부금<br />상환 예상액
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>원리금균등<br />분할상환</th>
                          <td>
                            <p class="underline">12,359,660 원</p>
                          </td>
                          <td>
                            <p class="underline">
                              1회 ~ 36회<br />
                              341,770원<br />
                              (할부금)
                            </p>
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
                        첫회차 월 할부금 및 총할부금은 지급일로부터 첫 회차
                        납부일까지 경과된 일수에 따라 이 예시에 기재된 금액대
                        대비 증감될 수 있습니다.
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
                  <p class="row-margin-mini">
                    고객이 원금균등분할상환을 선택한 경우
                  </p>
                  <p class="text-body-4 font-weight-light color-gray-tertiary">
                    (예시) 대출금액 1천만원, 무이자, 대출기간 36개월
                  </p>

                  <div :class="[$style['basic-table'], 'row-margin-item']">
                    <table>
                      <colgroup>
                        <col style="width: 88px" />
                        <col />
                        <col style="width: 114px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>상환방식</th>
                          <th>총 할부금<br />부담 예상액</th>
                          <th>
                            거치기간 종료 후<br />월 할부금<br />상환 예상액
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>원금균등<br />분할상환</th>
                          <td>
                            <p class="underline">10,000,000 원</p>
                          </td>
                          <td>
                            <p class="underline">
                              1회 ~ 36회<br />
                              277,778원<br />
                              (할부금)
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              주요 상환방법에 따른 특성 비교
            </h4>

            <div :class="[$style['basic-table'], 'row-margin-item']">
              <table>
                <colgroup>
                  <col style="width: 88px" />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th>구분</th>
                    <th>특징</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>원리금<br />균등상환</th>
                    <td class="align-left">
                      <div :class="$style['manual-image']">
                        <img
                          src="@/assets/images/contents/manual/manual-001.png"
                          alt=""
                        />
                      </div>

                      <p class="row-margin-item-regular">
                        <strong class="font-weight-medium"
                          >대출원금과 이자의 합계를 매월 동일한 금액으로
                          갚아가는 방식</strong
                        ><br />
                        매월 납입하시는 상환 금액이 동일하며 이중 대출원금에
                        대한 상환금액이 높아지게 됩니다.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>원금<br />균등상환</th>
                    <td class="align-left">
                      <div :class="$style['manual-image']">
                        <img
                          src="@/assets/images/contents/manual/manual-003.png"
                          alt=""
                        />
                      </div>

                      <p class="row-margin-item-regular">
                        <strong class="font-weight-medium"
                          >매월 대출원금을 동일한 금액으로 갚아 가는
                          방식</strong
                        ><br />
                        남은 대출원금에 대해 이자가 계산되 어, 매월 납입하시는
                        상환금액이 낮아지 게 됩니다.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>거치기간<br />선택</th>
                    <td class="align-left">
                      <div>
                        <strong class="font-weight-medium"
                          >&#60;'거치식 대출'을 선택하시는 경우&#62;</strong
                        ><br />
                        거치기간(예 : 1/2/3년) 동안에는 이자만 납입을 하고,
                        거치기간이 종료되면 이자 와 원금을 함께 납입을 하셔야
                        합니다. 대출이 실행된 후에는 거치기간의 추가 연장은
                        어렵습니다. 상품 종류에 따라 거치식은 선택이 불가할 수
                        있음을 유의 하여 주시기 바랍니다.
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
                            ‘거치식 대출'의 거치기간 종료 시 상환 부담
                          </div>
                        </li>
                      </ul>

                      <p class="text-body-5">
                        거치기간이 종료되면 거치 기간 연장이 어려울 수 있으며,
                        분할상환이 시작되어 이자와 함께 원금도 갚아나가야 하므로
                        상환 부담이 증가할 수 있습니다.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>유의사항</th>
                    <td class="align-left">
                      (예시) 만기일시상환의 경우 만기 도래 시 한꺼번에 원리금을
                      상환하여 부담이 클 수 있으며, 신용도 등을 고려하여 연
                      장계약이 불가능할 수도 있습니다. 일반 적으로
                      만기일시상환-원리금균등상환- 원금균등상환 순으로 고객의
                      원리금 상 환부담이 발생합니다.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            6. 연체이자율(지연배상금율)
          </h3>

          <p class="text-body-2 font-weight-medium">
            연체이자율은 유이자[대출이자율 + 연체가산이자율], 무이자의 경우
            [상거래기본이자율(6%) + 연체가산이자율]로 적용되며,
            <span class="underline">법정최고금리인 20% 이내로 적용됩니다.</span>
            <span class="color-green underline">(연체가산이율은 연 3%)</span>
            다만 상품에 따라 연체이자율이 일부 달라지는 경우가 있으므로,
            유의하여 주시기 바랍니다.
          </p>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              연체이자(지연배상금)를 내셔야 하는 경우
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
                  <div>
                    「분할상환금(또는 분할상환 원리금)을 상환하기로 한 날」에
                    상환하지 아니한 때
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
                        분할상환금(또는 분할상환원리금)을 상환하여야할 날의
                        다음날부터는 해당 분할상환금(또는 분할 상환원리금)에
                        대한 연체이자를, 2회 이상 연속하여 지체한 때에는
                        기한이익상실로 인하여 대출원금잔액에 대한 연체이자를
                        내셔야 합니다.
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
                    「이자를 납입하기로 약정한 날」에 납입하지 아니한 때
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
                        이자를 납입하여야 할 날의 다음날부터 30일까지는 내셔야
                        할 약정이자에 대해 연체이자가 적용되고, 30일이 경과하면
                        기한이익상실로 인하여 대출원금에 연체이율을 곱한 연체
                        이자를 내셔야 합니다.
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
                    「원금을 상환하기로 약정한 날」에 상환하지 아니한 때
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
                        원금을 상환하여야 할 날의 다음날부터는 대출원금에 대한
                        연체이자를 내셔야 합니다.
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
                    기타 여신거래기본약관 제8조에서 정한 대출기한 전의
                    채무변제의무 사유에 해당되어 기한의 이익이 상실된 때
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
                        기한의 이익이 상실 된 때에는 그 다음 날부터 대출원금에
                        대한 연체이자를 내셔야 합니다.
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <div class="row-margin-contents">
              <p
                class="text-body-4 font-weight-light color-gray-tertiary row-margin-item"
              >
                (예시) 할부원금 1천만원 약정이자율 연 14%, 연체가산이자율 연 3%,
                연체이자율 17%(14%+3%)할부기간 36개월, 납입일 15일자의
                할부금융의 분할상환금(341,770원, 초회차 397,710원)을 미납하여
                연체가 발생하고, 연체발생 후 2개월 시점에 납부할 경우 연체이자
              </p>

              <div :class="$style['basic-table']">
                <table>
                  <colgroup>
                    <col style="width: 76px" />
                    <col />
                    <col style="width: 96px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>연체기간</th>
                      <th>연체이자 계산방법</th>
                      <th>연체이자</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>연체발생<br />~30일분</th>
                      <td>지체된 분할상환금 및 약정이자 × 연17 % × 30 / 365</td>
                      <td>5,557 원</td>
                    </tr>
                    <tr>
                      <th>연체31일<br />~60일분</th>
                      <td>원금(1천만원) × 연17% × 30 / 365</td>
                      <td>139,726 원</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>계</td>
                      <td></td>
                      <td>145,283 원</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <ul :class="[$style['basic-list'], 'row-margin-item-medium']">
                <li :class="$style['basic-list__item']">
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    분할상환금 및 기한이익상실전 발생한 약정이자는 별도
                  </div>
                </li>
              </ul>

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
                    위 내용은 이해를 돕기 위해 연체이자만을 1개월을 30일로 보고
                    단순하게 계산한 예시입니다. 연체이자는 대출조건,
                    이자일수계산, 대출종류 등에 따라 달라질 수 있으며, 실제
                    납부금액은 연체이자에 약정이자 및 분할상환금을 포함하여
                    계산됩니다.
                  </div>
                </li>
              </ul>
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
                    이자납입 연체로 인하여 대출잔액에 연체이율이 적용되었을
                    경우, 연체이자 전액을 납입하지 않고 일부연체이자를 납입하는
                    경우에도 연체이자 전액을 납입하기 전까지 대출잔액에
                    연체이율이 적용됩니다.
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            7. 대출기한 전 채무 상환이 필요한 경우
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
                <strong class="font-weight-medium underline">
                  채무자인 고객이 담보로 제공한 부동산 등 담보재산에 법원이나
                  세무서 등으로부터 압류명령 등이 있는 때 등 (여신거래기본약관
                  제8조제1항에서 정한 사유)
                </strong>
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
                <strong class="font-weight-medium underline">
                  대출기한이 도래되었거나 기한이익이 상실된 대출을 하나라도
                  상환하지 아니한 때 등 (여신거래기본약관 제8조제2항, 제3항,
                  제4항에서 정한 사유)
                </strong>
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
                              이자등을 지급하기로 한 때부터 계속하여 30일간
                              지체한 경우
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
            8. 담보권 설정 및 권리변동
          </h3>

          <NoticeText :classNames="{ wrap: 'row-margin-contents' }">
            담보권 설정에 대한 기본적인 안내 사항입니다.
            <strong class="font-weight-medium"
              >담보의 제공은 재산상 손실을 가져올 수도 있는 중요한
              법률행위</strong
            >이므로 반드시
            <strong class="font-weight-medium"
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
                'color-green',
                'text-body-2',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                <span class="underline">
                  대출과 관련하여 담보물을 제공한 경우, 금융회사는 채권보전을
                  위해 제공받은 담보물에 담보권(저당권·질권 등)을 설정할 수
                  있습니다.
                </span>
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-green',
                'text-body-2',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                <span class="underline">
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
            9. 개인신용점수에 미치는 영향
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
                <span class="color-green"
                  >개인신용평점 하락 시 불이익 발생 가능성이 있는
                  금융거래는</span
                >
                신용공여, 신용카드, 시설대여 및
                <span class="color-green">할부금융 거래</span> 등입니다.
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
          <h3 class="text-title-2 row-margin-contents">10. 해지에 관한 사항</h3>
          <p class="text-body-2">
            <span class="color-green"
              >할부계약의 해지 시 중도상환수수료가 부과 될 수 있습니다.</span
            >
            다만,
            <span class="color-green"
              >할부상품은 계약이 성립한 날부터 3년 초과하여 상환하여도
              중도상환수수료가 부과되니 유의*</span
            >하여 주시기 바랍니다.
          </p>

          <ul :class="[$style['basic-list'], 'row-margin-item']">
            <li :class="[$style['basic-list__item'], 'font-weight-regular']">
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
                고객이 해지를 요청할 경우, 금융회사는 고객에게 해지 시 납부해야
                하는 금액을 안내하고 가상계좌를 발송합니다.(납부 시 해지 처리
                진행)
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
            <li
              :class="[
                $style['basic-list__item'],
                'color-red',
                'text-body-4',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']">-</div>
              <div :class="$style['basic-list__content']">
                <div class="underline">
                  ① 대출금 중도상환 시 전액상환 또는 부분상환 가능하며, ② 휴일에
                  중도상환 불가, ③ 대출금 중도상환금 확인은 당사
                  콜센터(1800-1110)을 통하여 가능하오니 확인바랍니다.
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            11. 연체정보 등의 등록
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
                '연체기간 5영업일 이상, 연체금 10만원 이상' 의
                소액「단기연체」정보도 관리를 소홀히 하시면 신용평점이 하락되며,
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
                  신용정보주체가 불이익을 받을 수 있으며, 신용점수가 하락하고
                  금리가 상승하는 등의 영향이 발생할 수 있습니다.
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
                      <ul class="reset-list font-weight-light">
                        <li class="row-margin-small">
                          ① 개인식별정보(성명, 주민등록번호 등)
                        </li>
                        <li class="row-margin-small">
                          ② ‘연체정보 등’ 정보(연체사실 등)
                        </li>
                        <li class="row-margin-small">
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
                  <strong class="font-weight-medium"
                    >금융회사가 아래와 같이 「금융소비자 보호에 관한 법률」(이하
                    “금융소비자보호법”)상 의무를 위반</strong
                  >하여 대출계약을 체결한 경우, 일반금융소비자는 해당 계약을
                  위약금 등
                  <strong class="font-weight-medium"
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
                  위법계약 해지를 요구하기 위해서는 아래의 날 중 먼저 도달한
                  기간 내에 서면등(우편, 전자우편, 문자메세지 등을 말함)으로
                  계약의 해지를 요구하여야 하며, 이 경우에는 금융위원회가
                  고시하는 서식(계약해지요구서)에 위반사실을 입증하는 서류를
                  첨부하여 당사에 제출하여야 합니다.
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
                      계약체결일로부터 5년 이내 또는 법 위반사실을 안 날로부터
                      1년 이내
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
                금융회사는 해지를 요구받은 날부터 10일 이내에 고객에게 수락
                여부를 통지하며, 거절 시에는 그 사유를 함께 통지합니다.
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            13. 청약의 철회(청약철회권) 및 항변권
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
                'font-weight-medium',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                「금융소비자 보호에 관한 법률」 시행령 제37조제1항제3호제가목에
                의거하여, 할부금융상품은 같은 법에서 규정하는 청약철회권 대상
                상품이 아닙니다(다만 재화를 제공받은 경우만 해당합니다.).
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
                  다만 할부금융상품은 「할부거래에 관한 법률」 제8조의
                  청약철회권과 같은 법 제16조의 항변권을 적용받으며, 주요한
                  특징은 아래와 같습니다.
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
                      할부거래법 상 청약철회권이란
                      <span class="color-green"
                        >“할부 구입일 또는 목적물 인도를 받은 날로부터 7일 이내
                        철회(취소)를 요청할 수 있는 권리”</span
                      >를 말합니다.
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
                      할부거래법 상 항변권이란
                      <span class="color-green"
                        >“할부계약기간 중 물품·서비스 등이 계약내용대로 이행되지
                        않는 경우 등에 대해 잔여 할부금 지급을 거절할 수 있는
                        권리”</span
                      >를 말합니다.
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
                <div>청약철회권 및 항변권 행사가 제한되는 경우</div>

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
                      거래금액이 10만원 미만이거나 할부기간이 3개월 미만의 거래
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
                      사업자가 상행위를 위하여 공급한 거래
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
                      <div>
                        할부거래법의 적용이 적합하지 않은 재화·용역*에 대한 거래
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
                            농·수·축산물 및 임·광산물로써 제조업에 의해 생산되지
                            아니한 것, 의약품,보험, 증권, 및 어음, 부동산등
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
                'text-body-2',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                <div>청약철회권 행사가 제한되는 경우</div>

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
                      소비자에게 책임있는 사유로 당해 상품이 멸실 또는 훼손된
                      경우
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
                      사용에 의하여 그 가치가 현저히 감소될 우려가 있는
                      경우(자동차, 건설기계, 선박, 항공기 등)
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
                      설치에 전문인력 및 부속자재 등이 요구되는 경우(냉동기,
                      전기냉방기, 보일러)
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
                      시간이 지남으로써 다시 판매하기 어려울 정도로 재화 등의
                      가치가 현저히 낮아진 경우
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
                      복제할 수 있는 재화 등의 포장을 훼손한 경우(음반·비디오물
                      및 소프트웨어)
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <!-- s: 240913 추가  -->
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
                <div>청약의 철회</div>

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
                      일반금융소비자는 할부구입일 또는 목적물을 인도받은
                      날로부터 7일 이내 계약에 대한 청약을 철회할 수 있습니다.
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
                      청약철회권 행사 시에는 중도상환수수료가 면제되며, 5영업일
                      이내에 해당 대출과 관련된 정보가 삭제됩니다. 청약철회권의
                      효력이 발생한 이후에는 취소가 불가하오며 대출 중도상환
                      시에는 중도상환수수료 납부로 조기상환이 가능하며 별도의
                      부대반환 비용은 없지만 대출기록은 유지됩니다.
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
                      청약철회권 행사 시에는 중도상환수수료가 면제되며, 5영업일
                      이내에 해당 대출과 관련된 정보가 삭제됩니다. 청약철회권의
                      효력이 발생한 이후에는 취소가 불가하오며 대출 중도상환
                      시에는 중도상환수수료 납부로 조기상환이 가능하며 별도의
                      부대반환 비용은 없지만 대출기록은 유지됩니다.
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
                      동일한 금융회사를 대상으로 최근 1개월 내에 2회 이상
                      대출계약을 철회하는 경우, 신규대출 ·만기연장 거절,
                      대출한도 축소, 금리우대 제한 등 불이익이 발생할 수
                      있습니다.
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <!-- e:// 240913 추가 -->
          </ul>
          <!-- s: 240913 추가 -->
          <section class="row-margin-container-medium">
            <h4 class="text-body-2 row-margin-item-medium">
              14일 이내 청약철회와 중도상환 비교
            </h4>

            <section>
              <p class="text-body-3">대출 청약철회</p>
              <div
                :class="[
                  $style['basic-table'],
                  'row-margin-item',
                  'table-custom',
                ]"
              >
                <table>
                  <colgroup>
                    <col style="width: 64px" />
                    <col style="width: 92px" />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th class="th-title" rowspan="2">비용*</th>
                      <th>중도상환수수료</th>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th>반환 부대비용</th>
                      <td>
                        인지세, 근저당설정비 등<br />
                        금융회사가 제 3자에게 지급한 비용
                      </td>
                    </tr>
                    <tr>
                      <th class="th-title">신용평가**</th>
                      <th>대출기록</th>
                      <td>삭제</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section class="row-margin-contents">
              <p class="text-body-3">대출 중도 상환</p>
              <div
                :class="[
                  $style['basic-table'],
                  'row-margin-item',
                  'table-custom',
                ]"
              >
                <table>
                  <colgroup>
                    <col style="width: 64px" />
                    <col style="width: 92px" />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th class="th-title" rowspan="2">비용*</th>
                      <th>중도상환수수료</th>
                      <td>대출 잔존기간에 대해 발생</td>
                    </tr>
                    <tr>
                      <th>반환 부대비용</th>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th class="th-title">신용평가**</th>
                      <th>대출기록</th>
                      <td>미삭제</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <ul :class="[$style['basic-list'], 'row-margin-item']">
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-gray-tertiary',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">*</div>
                <div :class="$style['basic-list__content']">
                  비용 : 통상 “반환 부대비용 &lt; 중도상환수수료” →
                  <b class="underline">청약철회가 유리</b><br />
                  인지세를 부담한 예금담보대출, 한시적 영업전략 등
                  <b>중도상환 시 수수료가 면제</b>되는 경우에는 청약철회 시에만
                  반환 비용이 발생하므로 중도상환이 유리
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-gray-tertiary',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">**</div>
                <div :class="$style['basic-list__content']">
                  신용평가 : <b>중도상환</b> 시 대출(및 상환) 이력이
                  <b>유지</b>되나, <b>청약철회</b> 시에는 <b>이력 삭제</b> →
                  <b>청약철회가 유리</b><br />
                  차주의 상황에 따라
                  <b class="underline">상환이력, 신용거래기간</b> 항목의 경우
                  <b class="underline">상향 요인</b>으로 작용할 여지
                </div>
              </li>
            </ul>
          </section>
          <!-- e:// 240913 추가 -->
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">14. 자료열람요구권</h3>

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
                <strong class="underline">8일 이내</strong>에 고객이 해당 자료를
                열람할 수 있게 합니다.
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
                금융회사는 법령, 제3자의 이익 침해, 영업비밀의 침해 등의 사유가
                있는 경우 이를 고객에게 알리고
                <span class="color-red"
                  >자료 열람을 제한하거나 거절할 수 있습니다.</span
                >
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">15. 그 밖의 유의사항</h3>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              계약 연장에 관한 사항
            </h4>
            <p class="text-body-2">
              다만 할부금융상품은 상품별로 연장이 불가한 경우도 존재하니,
              세부사항은 금융회사 담당자에게 문의하여 주시기 바랍니다.
            </p>
          </section>
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
                    본 상품을 연체하셨을 때에는 대출원금에 대해 연체이자율이
                    법정최고금리 20% 내에서 적용됩니다.
                  </p>
                  <p class="text-body-4 font-weight-light color-gray-tertiary">
                    (예시)할부원금 1천만원 약정이자율 연 14%, 연체가산이자율 연
                    3%, 연체이자율 17%(14%+3%)할부기간 36개월, 납입일 15일자의
                    할부금융의 분할상환금(341,770원, 초회차 397,710원)을
                    미납하여 연체가 발생하고, 연체발생 후 2개월 시점에 납부할
                    경우 연체이자
                  </p>
                </div>

                <div :class="[$style['basic-table'], 'row-margin-item']">
                  <table>
                    <colgroup>
                      <col style="width: 76px" />
                      <col />
                      <col style="width: 96px" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>연체기간</th>
                        <th>연체이자 계산방법</th>
                        <th>연체이자</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>연체발생<br />~30일분</th>
                        <td>
                          지체된 분할상환금 및 약정이자 × 연17% × 30 / 365
                        </td>
                        <td>5,557 원</td>
                      </tr>
                      <tr>
                        <th>연체31일<br />~60일분</th>
                        <td>원금(1천만원) × 연17% × 30/365</td>
                        <td>139,726 원</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>계</td>
                        <td></td>
                        <td>145,283 원</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <p class="text-body-2 row-margin-item">
                  이 내용을 확인하셨습니까?
                </p>

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
                  본 할부금융상품(유이자)은 일반적인 대출상품과 달리 계약이
                  성립한 날로부터 3년 경과 후에도 해약금(중도상환수수료)가
                  발생합니다. 예를 들어 1천만원을 중도상환하시는
                  경우(중도상환수수료율 1%로 가정),
                  <strong class="font-weight-medium"
                    >최대 10만원의 중도상환수수료를 납부하셔야 대출상품 해지가
                    가능함을 알고 계십니까?</strong
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
                      재화를 제공받은 경우에 금융소비자보호법 상 청약철회권
                      행사가 불가능(금융소비자보호법 시행령
                      제37조제1항제3호가목)
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
                <div class="row-margin-item">
                  본 상품은 렌탈이나 리스가 아닌 할부금융상품으로 제품의
                  소유권은 고객(매수인)에게 있으며, 제품사용중 반납이나 취소
                  불가합니다. 이 내용을 확인하셨습니까?
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
                    본인은 하나캐피탈과 할부계약을 체결함에 있어 금융회사 직원
                    과 상담하여 본 설명 서를 교부받았으며, 위에서 설명한 내용을
                    포함하여 대출거래의 주요내용 및 고객부 담 비용에 대하여 충
                    분히 설명을 듣고 이 해하였음을 확인합 니다.
                  </td>
                </tr>
                <tr>
                  <td :class="$style['basic-table__left-line']"></td>
                  <td class="align-left">
                    본인은 금융회사 직원 으로부터 금리인하요 구권, 청약철회권,
                    위 법계약해지권 등 고객 의 권리에 대하여 충 분히 설명을 듣고
                    이 해하였음을 확인합니 다.
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
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractDescription002_013.scss';
@import '@/assets/scss/components/import/basic-table.scss'; /* 240913 추가 */
</style>

<style lang="scss" scoped>
.table-custom {
  th {
    padding: 11px 4px;
    &.th-title {
      border-right: 1px solid #e0e0e0;
    }
  }
  td {
    text-align: left;
  }
}
</style>
