<script>
// My_M99_l001
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
          <PopupTitle>일반신용대출 설명서</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <p
          class="text-body-5 color-gray font-weight-light align-right row-margin-contents-small"
        >
          2023-22(2023.05.18)
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
                  (개인일 경우) 가계대출은 기업이 아닌 가계가 생계유지 등의
                  사용목적으로 받는 대출상품을 총칭하며, 대표적으로는 신용대출
                  상품이 있습니다.
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
                  (개인사업자일 경우) 기업대출은 영업활동을 위한 운영자금이
                  필요한 기업을 대상으로 금융회사가 정한 범위 내에서 기업의
                  신용도 및 담보 등을 토대로 실행되는 대출상품입니다.
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
                  <span class="color-green"
                    >신용대출은 고객의 신용점수 및 재산상황 등 신용도를
                    기반</span
                  >으로 하는 대출이며,
                  <span class="color-green"
                    >담보대출은 부동산 등 경제적 가치가 있는 자산에 담보를
                    설정</span
                  >하여 실행되는 대출로 통상적으로 담보대출이 신용대출보다
                  금리가 낮습니다. (☞
                  <span class="color-red">‘1. 상품 개요 및 특성’</span>
                  확인)
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
                        대출이용과 신용도의 관계는?
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
                        대출상품 이용 시,
                        <span class="color-red"
                          >대출계약의 체결만으로도 신용점수가 하락할 수
                          있으며,</span
                        >
                        신용점수 하락 시 대출 및 신용카드 상품 등의 이용에
                        불이익이 발생할 수 있습니다.(☞<span class="color-red"
                          >‘9. 신용점수에 미치는 영향’</span
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
                          대출 실행 후
                          <span class="color-green"
                            >3년 이내에 대출금액을 중도 상환</span
                          >할 경우,
                          <span class="color-red"
                            >최대 2%의 중도상환수수료가 발생*</span
                          >합니다. 아울러
                          <span class="color-green"
                            >동일 금융회사와 기존 대출계약을 해지하고 사실상
                            동일 계약을 체결한 경우 양 계약기간을 합산하여 3년
                            경과 후에는 면제됩니다.</span
                          >
                          중도상환수수료는 대출의 잔여일수 및 상환금액에 따라
                          달라지며, 중도상환 시 향후 원리금 상환 부담금액이
                          감소하게 됩니다. (☞<span class="color-red"
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
                              예) 2천만을 중도상환(적용요율을 2%로 가정)할 경우,
                              고객은 최대 40만원의 중도상환수수료를 금융회사에
                              납부해야 함
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
                        대출을 이용하기 위해서는 어떤 비용을 부담해야 하나요?
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
                        대출을 이용하실 경우, 기본적으로 대출금과 이자에 대한
                        상환의무를 부담하시게 되며, 대출상품에 따라 인지세 등
                        추가적인 비용을 부담하실 수 있습니다. (☞<span
                          class="color-red"
                          >‘4. 수수료 등 비용부담’</span
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
              원리금 연체 시 발생하는 불이익
            </h4>
            <div :class="$style['manual-qna']">
              <ul :class="$style['manual-qna__list']">
                <li :class="$style['manual-qna__item']">
                  <div :class="$style['manual-qna__head']">
                    <div :class="$style['manual-qna__symbol']">Q</div>
                    <div :class="$style['manual-qna__cell']">
                      <h5 :class="$style['manual-qna__title']">
                        대출금을 연체할 경우 어떤 불이익이 발생하나요?
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
                          <span class="color-red"
                            >연체 시에는 법에서 정하는 범위 내에서 원리금에
                            연체이자율이 적용*</span
                          >되며,
                          <span class="color-green"
                            >신용점수 하락 및 금융거래 제한 등이 발생</span
                          >할 수 있으니 유의하여 주시기 바랍니다. (☞<span
                            class="color-red"
                            >‘6. 연체이자율(지연배상금율)’, ’11. 연체정보 등의
                            등록’</span
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
                              예) 대출원금 2천만원인 경우, 최대 월연체이자
                              9,861원(연체이자율 13%적용)이 발생하므로 연체가
                              발생하지 않도록 유의
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
                  <td class="align-left">신용대출</td>
                </tr>
                <tr>
                  <th>대상</th>
                  <td class="align-left">
                    <div :class="$style['manual-check']">
                      <ul :class="$style['manual-check__list']">
                        <li :class="$style['manual-check__item']">
                          <div :class="$style['manual-check__block']">
                            <div :class="$style['manual-check__object']"></div>
                            <div :class="$style['manual-check__text']">
                              개인
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
                              개인사업자
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>적용금리</th>
                  <td class="align-left">16.3%</td>
                </tr>
                <tr>
                  <th>대출신청금액</th>
                  <td class="align-left">5,000,000 원</td>
                </tr>
                <tr>
                  <th>금리적용방식</th>
                  <td class="align-left">
                    <div :class="$style['manual-check']">
                      <ul :class="$style['manual-check__list']">
                        <li :class="$style['manual-check__item']">
                          <div :class="$style['manual-check__block']">
                            <div :class="$style['manual-check__object']"></div>
                            <div :class="$style['manual-check__text']">
                              변동
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
                              고정선택됨
                            </div>
                          </div>
                        </li>
                        <li :class="$style['manual-check__item']">
                          <div :class="$style['manual-check__block']">
                            <div :class="$style['manual-check__object']"></div>
                            <div :class="$style['manual-check__text']">
                              혼합
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>대출기간</th>
                  <td class="align-left">취급 후 48개월</td>
                </tr>
                <tr>
                  <th>중도상환수수료율</th>
                  <td class="align-left">최대 2%</td>
                </tr>
                <tr>
                  <th>대출실행/만기일</th>
                  <td class="align-left">2032.04.06 ~ 2027.04.11</td>
                </tr>
                <tr>
                  <th>담보물건<br />(저당설정시)</th>
                  <td class="align-left">
                    <ul class="reset-list">
                      <li class="row-margin-item-regular">1) 담보물건</li>
                      <li class="row-margin-item-regular">2) 담보물건</li>
                      <li class="row-margin-item-regular">3) 담보물건</li>
                      <li class="row-margin-item-regular">4) 담보물건</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>상환방식</th>
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
                              원리금균등분할상환
                            </div>
                          </div>
                        </li>
                        <li :class="$style['manual-check__item']">
                          <div :class="$style['manual-check__block']">
                            <div :class="$style['manual-check__object']"></div>
                            <div :class="$style['manual-check__text']">
                              만기일시상환
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
                'text-body-2',
                'font-weight-regular',
                'row-margin-contents',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                (개인일 경우) 본 대출상품은 만 20세 이상인 개인을 대상으로 하는
                ‘신용대출’ 상품입니다. 신용대출의 대출금액과 금리는 고객의
                신용에 따라 결정됩니다. 이 과정에서 고객의 수입, 자산, 직업,
                거래사항, 가족사항 등이 종합적으로 고려됩니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-2',
                'font-weight-regular',
                'row-margin-contents',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                (개인사업자일 경우) 본 대출상품은 개인사업자를 대상으로 하는
                ‘운전자금대출’ 상품으로, 기업의 신용 또는 담보를 바탕으로
                운전자금대출을 지원하는 상품입니다. 기업의 수익 및 연체현황 등을
                종합적으로 고려하여 대출금액과 금리가 결정됩니다.
              </div>
            </li>
          </ul>
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
                    <strong class="font-weight-medium underline"
                      >약정금리</strong
                    >는
                    <strong class="font-weight-medium underline"
                      >①원가요소와 ②마진(목표이익률) ③조정금리</strong
                    >가 반영되어 결정됩니다.
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
                        <strong class="font-weight-medium">원가요소</strong
                        >(①)는 신용원가, 업무원가, 조달원가 및 자본원가 등으로
                        구분되며, 금융회사는 합리적인 기준에 따라 해당 원가들을
                        산정합니다.
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
                        <strong class="font-weight-medium">기준금리</strong
                        >(①+②)는 이러한 원가요소(①)에 목표이익율(②)을 더하여
                        산정됩니다.
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
                        <strong class="font-weight-medium">조정금리</strong
                        >(③)는 시장상황, 영업환경 등을 고려하여 금융회사가 할인
                        또는 가산하는 금리로, 기준금리에 더해져 실제 약정금리를
                        결정합니다.
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
                    <strong class="font-weight-medium"
                      >대출금리(약정금리)</strong
                    >는 개별약정에 의해 별도로 정한 항목(변동금리대출의 기준금리
                    등) 이외에는 대출만기일까지 동일하게 적용됩니다.
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
                  <li
                    :class="[
                      $style['manual-check__item'],
                      $style['manual-check__item--checked'],
                    ]"
                  >
                    <div :class="$style['manual-check__block']">
                      <div :class="$style['manual-check__object']"></div>
                      <div :class="$style['manual-check__text']">
                        대상선택됨
                      </div>
                    </div>
                  </li>
                  <li :class="$style['manual-check__item']">
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
                  <div>
                    채무자인 고객은 「여신전문금융업법」
                    제50조의13(금리인하요구)에서 정하는 바에 따라
                    <span class="underline"
                      ><strong class="font-weight-medium"
                        >본인의
                        <span class="italic color-gray">[신용상태가 개선]</span>
                        되었다고 판단되는 경우(예 : 취업, 승진 등 소득증가,
                        재산증가, 신용평가등급(평점) 등 용도 상승, 기타 신용상태
                        개선)</strong
                      >
                      *금융회사에
                      <strong class="italic color-gray font-weight-medium"
                        >[금리인하를 요구]</strong
                      >
                      할 수 있습니다.</span
                    >

                    <strong class="color-green font-weight-medium"
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
                  금융회사는
                  <strong
                    >금리인하 요구를 받은 날부터
                    <span class="color-green">‘10영업일 이내’</span></strong
                  >
                  (고객에게 자료의 보완을 요구하는 날부터 자료가 제출되는
                  날까지의 기간은 포함되지 않습니다)에
                  <strong
                    >금리인하 요구 수용 여부 및 그 사유를 전화, 서면,
                    문자메시지, 전자우편, 팩스 또는 그 밖에 이와 유사한 방법으로
                    고객에게 통지합니다.
                  </strong>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            4. 수수료 등 비용부담
          </h3>

          <NoticeText :classNames="{ wrap: 'color-red row-margin-contents' }"
            >대출계약을 체결하는 경우 고객이 부담하여야 하는 총 금액에는
            대출원리금, 수수료 등이 포함됩니다. 상세한 금액의 합계는 대출심사
            후에 확인 가능하므로, 심사 후 담당자가 안내드리겠습니다.</NoticeText
          >

          <section>
            <h4 class="text-body-2 row-margin-item-medium">중도상환수수료</h4>

            <div :class="$style['basic-table']">
              <table>
                <colgroup>
                  <col style="width: 120px" />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th>대출기간</th>
                    <th>중도상환수수료</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1년 이상</th>
                    <td class="align-left">
                      중도상환금액×1%+중도상환금액×1%×잔여기간/(대출기간-30일)
                    </td>
                  </tr>
                  <tr>
                    <th>1년 미만</th>
                    <td class="align-left">
                      중도상환금액×2%×잔여기간/(대출기간-30일)
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
                  잔여기간 : 30일미만 상환시 ‘대출사용기간’을 30일로 간주
                </div>
              </li>
            </ul>

            <div class="row-margin-contents">
              <p
                :class="[
                  $style['padding-left'],
                  'text-body-5',
                  'color-green',
                  'font-weight-medium',
                ]"
              >
                중도상환수수료란?
              </p>

              <ul :class="[$style['basic-list'], 'row-margin-item']">
                <li :class="$style['basic-list__item']">
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    대출의 상환기일이 도래하기 전에 대출금을 상환할 경우 고객이
                    부담하는 금액으로, 대출취급일로부터 3년까지 적용합니다.
                    <span class="color-green font-weight-medium"
                      >다만, 기존 대출 계약을 해지하고 동일 회사와 사실상 동일한
                      계약(기존 계약에 따라 지급된 금전 등을 상환받는 계약)을
                      체결한 경우, 양 계약의 유지기간을 합하여 3년이 경과하여
                      해지할 경우에는 중도상환수수료가 면제됩니다.</span
                    >
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              근저당권설정(해지)비용
            </h4>

            <p class="text-body-2">
              자동차, 주택 등에 근저당 설정할 때 발생하는 부대비용으로,
              <span class="color-green">설정 시에는 금융회사가 부담</span>하며,
              <span class="color-green">해지 시에는 고객(채무자)이 부담</span
              >합니다. <br />(국민주택채권매입비 발생시, 고객이 부담)
            </p>

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
                  근저당권 설정 비용 : 금융회사 부담
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
                  근저당권 해지 비용 : 고객(채무자) 부담
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
                  고객의 채무불이행으로 인해 발생하는 비용은 여신거래기본약관
                  제4조(비용의부담)에 의거하여 고객이 부담하여야 합니다.
                </div>
              </li>
            </ul>

            <NoticeText
              :classNames="{ wrap: 'color-green row-margin-item-medium' }"
              >청약철회권을 행사하는 경우 금융소비자보호법 제46조제2항제2호 및
              동 법 시행령 제37조제4항, 제5항에 따라, 이미 공급받은 금전 및
              재화, 이자, 인지세 등 제세공과금, 저당권 설정 등에 따른 등기비용을
              반환하셔야 합니다.
            </NoticeText>
          </section>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">5. 대출금의 상환방법</h3>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">대출금의 납입</h4>

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
                  원리금을 납입하셔야 합니다. 약정 시 자동이체를 선택하고 관련
                  정보 제공 시, 원리금은 은행의 본인명의 계좌에서
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
                  자동이체로 원리금 납입 시, 납입일에 잔고부족 등의 이체불가
                  사유로 납입하실 금액 전부를 이체할 수 없는 경우에는 납입지정일
                  이후 회사가 정하는 출금일에 미납금액(지연배상금 포함)을
                  출금하여 대출원리금에 충당할 수 있습니다.
                  <span class="color-red"
                    >(고객이 지정한 납입일의 오전 10시 이전 청구되며, 업무시간
                    내에 출금되므로 그 시간 내에 원리금 잔액이 있어야 함)</span
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
                  납입일이 휴일인 경우, 익영업일로 자동으로 납부가 이월되며 해당
                  기간만큼 이자가 가산되지 않습니다.
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
                  자동이체 계좌는 고객센터(<strong class="font-weight-medium"
                    >1800-1110</strong
                  >)를 통해 변경이 가능하지만, 자동이체일
                  <strong class="font-weight-medium">4</strong>영업일 전
                  변경하실 경우에는 당월 적용이 가능하며, 그 이후에는 익월부터
                  변경사항이 적용됨을 유의해주시기 바랍니다.
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
                  첫 납입금은 결제일에 따라 납입액이 달라질 수 있습니다.
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
                    (예시) 대출금액 2천만원, 금리 10%, 대출기간 24개월 (소수점
                    이하 절사)
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
                          <th>총 원리금<br />부담 예상액</th>
                          <th>월 원리금<br />상환 예상액</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>원리금균등<br />분할상환</th>
                          <td>
                            <p class="underline">22,149,576 원</p>
                          </td>
                          <td>
                            <p class="underline">
                              1회 ~ 24회<br />
                              922,899 원<br />
                              (원리금)
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
                  <p class="row-margin-mini">
                    고객이 만기일시상환을 선택한 경우
                  </p>
                  <p class="text-body-4 font-weight-light color-gray-tertiary">
                    (예시) 대출금액 2천만원, 금리 10%, 대출기간 24개월 (소수점
                    이하 절사)
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
                          <th>총 원리금<br />부담 예상액</th>
                          <th>만기시<br />상환 예상액</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th rowspan="2">만기일시<br />상환</th>
                          <td rowspan="2">
                            <p class="underline">23,999,984 원</p>
                          </td>
                          <td>
                            <p class="underline">
                              1회 ~ 23회<br />
                              166,666 원<br />
                              (이자)
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td :class="$style['basic-table__left-line']">
                            <p class="underline">
                              24회<br />
                              20,166,666 원<br />
                              (원리금)
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
                    <th>만기<br />일시상환</th>
                    <td class="align-left">
                      <div :class="$style['manual-image']">
                        <img
                          src="@/assets/images/contents/manual/manual-002.png"
                          alt=""
                        />
                      </div>

                      <p class="row-margin-item-regular">
                        <strong class="font-weight-medium"
                          >약정기간동안 대출원금에 대한 상환없이 이자만 부담하는
                          방식</strong
                        ><br />
                        만기일자에 대출원금을 모두 상환하셔 야 합니다.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>유의사항</th>
                    <td class="align-left">
                      만기일시상환의 경우 만기 도래 시 한꺼 번에 원리금을
                      상환하여 부담이 클 수 있으며, 신용도 등을 고려하여
                      연장계약 불가능할 수도 있습니다. 일반적으로
                      만기일시상환-원리금 균등상환 순으로 고객의 원리금
                      상환부담이 발생합니다.
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
            연체이자율은 [대출이자율 + 연체가산이자율]로 적용되며,
            <span class="underline"
              >법정최고금리인 20% 이내로 적용됩니다. (연체가산이율은 연
              3%)</span
            >
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
                        기한이익상실로 인하여 대출원금에 연체이율을 곱한
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
                        기한의 이익이 상실된 때에는 그 다음날부터 대출원금에
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
                (예시) 원금 2천만원 (원리금균등, 대출기간 24개월), 약정이자율 연
                10%, 연체가산이자율 연 3%인 신용대출의 1회차 원금(75.6만원) 및
                이자(16.6만원)를 미납하여 연체가 발생하고, 연체발생후 2개월
                시점에 납부할 경우 연체이자
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
                      <td>
                        (지체된 원금(75.6만 원) + 약정이자(16.6만 원))×
                        연13%(10%+ 3%)× 30/365
                      </td>
                      <td>9,861 원</td>
                    </tr>
                    <tr>
                      <th>연체31일<br />~60일분</th>
                      <td>원금(2천만원) × 연13%(10%+3%) × 30/365</td>
                      <td>213,699 원</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>계</td>
                      <td></td>
                      <td>223,560 원</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <ul :class="[$style['basic-list'], 'row-margin-item-medium']">
                <li :class="$style['basic-list__item']">
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    원리금(원금+이자) 및 기한이익상실전 발생한 약정이자는 별도
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
            9. 신용점수에 미치는 영향
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
                (개인일 경우) 해당 금융거래로 인하여 개인신용평가회사가
                신용점수를 만들어낼 때 해당 신용정보주체에게 불이익이 발생할 수
                있으며, 신용점수 하락 시 불이익 발생 가능성이 있는 금융거래는
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
                경우에도 일정기간 신용점수(개인사업자일 경우 기업신용등급)의
                산정에 영향을 줄 수 있습니다.
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">10. 해지에 관한 사항</h3>
          <p class="text-body-2">
            대출계약의 해지 시 중도상환수수료가 부과 될 수 있습니다.
            중도상환수수료는 대출계약이 성립한 날부터
            <span class="color-green underline">3년 이내의 기간에만 부여</span
            >되며,
            <span class="color-green"
              >동일 금융회사와 기존 대출계약을 해지하고 사실상 동일 계약을
              체결한 경우 양 계약기간을 합산하여 3년 경과 후에는
              면제됩니다.</span
            >
          </p>

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
                고객이 중도상환 등 해지를 요청할 경우, 금융회사는 고객에게
                중도상환수수료 등 해지 시 납부해야 하는 금액을 안내하고
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
                비용(근저당설정 해지비용, 인지세 등)을 고객이 부담해야합니다.
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
                대출계약 이후 중도상환 요청이 필요할 경우 당사
                고객센터(1800-1110)로 문의 가능합니다. (토요일, 일요일,
                (대체)공휴일 제외)
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
                중도상환수수료는 대출의 잔여일수 및 상환금액에 따라 달라지며,
                중도상환 시 향후 원리금 상환 부담금액이 감소하게 됩니다.
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
                  신용정보주체가 불이익을 받을 수 있으며, 신용점수가 하락하고
                  금리가 상승하는 등의 영향이 발생할 수 있습니다.
                </div>
                <ul :class="[$style['basic-list'], 'row-margin-contents']">
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
                  위법계약 해지를 요구하기 위해서는
                  <strong>아래의 날 중 먼저 도달한 기간 내에 서면 등</strong
                  >(우편, 전자우편, 문자메세지 등을 말함)으로
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
                      계약체결일로부터 <strong>5년 이내</strong> 또는 법
                      위반사실을 안 날로부터
                      <strong>1년 이내</strong>
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
            13. 청약의 철회(청약철회권)
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
                일반금융소비자(개인 및 개인사업자, 5인 미만의 법인 또는
                일반금융소비자로 분류되길 요청한 법인)는 계약체결일 또는
                계약서류를 제공받은 날(다만 금전·재화·용역의 지급이 늦게
                이루어진 경우에는 그 지급일로 대체함)로부터
                <span class="color-green"
                  >14일 이내에 계약에 대한 청약을 철회</span
                >할 수 있습니다.
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
                청약의 철회 의사를 표시하기 위해서는 서면등(우편, 전자우편,
                문자메세지 등을 말함)으로 의사표시를 해야 하며,
                <strong class="font-weight-medium"
                  >이미 공급받은 금전·재화와 그에 대한 이자</strong
                >(금전을 지급받은 날부터 금전을 돌려준 날까지의 기간에 대해
                약정된 이자율과 공급받은 금전을 곱한 금액)를 반환하여야 합니다.
                아울러
                <strong class="font-weight-medium"
                  >인지세 등 제세공과금 및 저당권 설정 등에 따른
                  등기비용</strong
                >이 발생하였을 경우, 이를 함께 반환하셔야 합니다. 청약철회의
                의사를 서면등으로 발송한 때에는 그 발송 사실을 지체없이 당사에
                알려주셔야 합니다.
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
                <span class="color-green"
                  >청약철회권 행사 시에는 중도상환수수료가 면제되며, 5영업일
                  이내에 해당 대출과 관련된 정보가 삭제됩니다.</span
                >
                아울러 청약철회권의 효력이 발생한 이후에는 취소가 불가하오니
                참고하여 주시기 바랍니다.
              </div>
            </li>
          </ul>

          <ul :class="[$style['basic-list'], 'row-margin-contents']">
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
                  >동일한 금융회사를 대상으로 최근 1개월 내에 2회 이상
                  대출계약을 철회하는 경우, 신규대출·만기연장 거절, 대출한도
                  축소, 금리우대 제한 등 불이익이 발생할 수 있습니다.</span
                >
              </div>
            </li>
          </ul>
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
                열람의 범위가 기재된 열람요구서로 열람을 요구받은 날로부터 8일
                이내에 고객이 해당 자료를 열람할 수 있게 합니다.
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
          <h3 class="text-title-2 row-margin-contents">
            15. 개인신용평가대응권
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
                  개인신용평가대응권이란 개인인 금융소비자가
                  <strong>자동화평가*에 따른 개인신용평가</strong>
                  <strong class="italic color-red underline"
                    >결과 및 주요기준 등의 설명</strong
                  >과
                  <strong
                    >자동화평가 결과의 산출에 유리하다고 판단되는 정보</strong
                  >를 제출 또는 기초정보의
                  <strong class="italic color-red underline"
                    >정정·삭제·재산출을 요구</strong
                  >
                  할 수 있는 권리(신용정보의 이용 및 보호에 관한 법률
                  제36조의2)를 말합니다.
                </div>
                <ul :class="[$style['basic-list'], 'row-margin-item']">
                  <li
                    :class="[$style['basic-list__item'], 'font-weight-regular']"
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
                  금융소비자는 신용정보의 이용 및 보호에 관한 법률 제 36조의2에
                  따라 자동화 평가의 결과, 자동화 평가의 주요 기준, 자동화
                  평가의 평가에 이용된
                  <strong
                    >기초정보 등에 대해 설명하여 줄 것을
                    <span class="color-green">금융회사</span>에 요구*할 수
                    있습니다.</strong
                  >
                </div>
                <ul :class="[$style['basic-list'], 'row-margin-contents']">
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'font-weight-regular',
                      'color-green',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']">*</div>
                    <div :class="$style['basic-list__content']">
                      하나캐피탈 대표번호 및 홈페이지, 우편을 통하여 권리 행사할
                      수 있습니다.
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
                  수 있으며, 기초정보가 정정·삭제되었더라도 신용상태의 개선이
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
          <h3 class="text-title-2 row-margin-contents">16. 그 밖의 유의사항</h3>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              계약 연장에 관한 사항
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
                  최초 심사에 비해 신용점수가 하락하거나 연체가 발생하는 등의
                  사실이 발생했을 경우, 대출계약의 연장이 거절될 수 있습니다.
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
                  일정한 자격을 갖춘 고객을 대상으로 한 대출(직장인, 중고차소유
                  등 대출)의 경우 같은 자격이 유지되는 경우에만 기한이 연장될 수
                  있습니다.
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              (개인사업자일 경우) 자금용도 외 유용 시 주의사항
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
                  자금용도 외 유용이란 대출 계약 시 기재하신 용도로 자금을
                  사용하지 아니하고, 용도와 무관하게 사용하는 경우(사업자금으로
                  대출 계약 후 주택구매자금으로 활용하는 경우 등)를 말합니다.
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
                  자금용도 외 유용 시 유용 해당금액은 즉시 상환하셔야 하며, 신규
                  대출이 제한될 수 있습니다.
                </div>
              </li>
            </ul>
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
                <div>
                  <p class="row-margin-mini">
                    본 상품을 연체하셨을 때에는 대출원금에 대해 연체이자율이
                    법정최고금리 20% 내에서 적용됩니다.
                  </p>
                  <p class="text-body-4 font-weight-light color-gray-tertiary">
                    (예시) 원금 2천만원 (원리금균등, 대출기간 24개월),
                    약정이자율 연 10%, 연체가산이자율 연 3%인 신용대출의 1회차
                    원금(75.6만원) 및 이자(16.6만원)를 미납하여 연체가 발생하고,
                    연체발생 후 2개월 시점에 납부할 경우 연체이자
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
                          (지체된 원금(75.6만 원) + 약정이자(16.6만 원))×
                          연13%(10%+ 3%)× 30/365
                        </td>
                        <td>9,861 원</td>
                      </tr>
                      <tr>
                        <th>연체31일<br />~60일분</th>
                        <td>원금(2천만원) × 연13%(10%+3%) × 30/365</td>
                        <td>213,699 원</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td>계</td>
                        <td></td>
                        <td>223,560 원</td>
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
                  본 상품을 3년 이내에 중도 상환하시는 경우, 정해진 요율에
                  의하여 중도상환수수료가 발생합니다. 예를 들어 2천만원을
                  중도상환하시는 경우(중도상환수수료율 2%로 가정), 최대 40만원의
                  중도상환수수료를 납부하셔야 대출상품의 중도 해지가 가능함을
                  알고 계십니까?
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
                  고객은 계약체결일 또는 계약서류를 제공받은 날(다만
                  금전·재화·용역의 지급이 늦게 이루어진 경우에는 그 지급일로
                  대체함)로부터 14일 이내에 계약에 대한 청약을 철회할 수
                  있습니다. 다만,
                  <span class="color-green underline"
                    >동일한 금융회사를 대상으로 최근 1개월 내에 2회 이상
                    대출계약을 철회하는 경우, 신규대출·만기연장 거절, 대출한도
                    축소, 금리우대 제한 등 불이익이 발생할 수 있습니다.</span
                  ><br />
                  이 내용을 확인하셨습니까?
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
                    본인은 하나캐피탈과 대출거래를 체결함에 있어 금융회사 직원과
                    상담하여 본 설명서 를 교부받았으며, 위 에서 설명한 내용을
                    포함하여 대출거래의 주요내용 및 고객부담 비용에 대하여
                    충분히 설명을 듣고 이해하였 음을 확인합니다.
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
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractDescription001_011.scss';
</style>
