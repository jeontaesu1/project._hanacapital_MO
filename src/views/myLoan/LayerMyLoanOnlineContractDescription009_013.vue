<script>
// My_M99_l011
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
          <PopupTitle>일반대출 설명서</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          상품설명서<br />
          <strong>확인 안내</strong>
        </PageMainText>
        <PageSubText>
          이 설명서는 금융소비자(이하 “고객”)의 상품에 대한 이해를 돕고 약관의
          중요내용을 알려드리기 위한 참고자료이며, 실제 계약은 대출거래약정서 및
          약관이 적용됩니다.
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
        <p class="text-body-3 font-weight-light">
          - 고객님께서는 상품 가입 前 아래 사항을 반드시 숙지하여 주시기
          바랍니다 -
        </p>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">1. 상품 개요 및 특성</h3>
          <div :class="$style['basic-table']">
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
                    <td>일반대출</td>
                  </tr>
                  <tr>
                    <th>대출기간</th>
                    <td>-개월</td>
                  </tr>
                  <tr>
                    <th>대출신청금액</th>
                    <td>원</td>
                  </tr>
                  <tr>
                    <th>대출실행/만기일</th>
                    <td>YYYY.MM.DD~YYYY.MM.DD</td>
                  </tr>
                  <tr>
                    <th>적용예정금리</th>
                    <td>%</td>
                  </tr>
                  <tr>
                    <th>예상 실질유효금리</th>
                    <td>%</td>
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
                              <div
                                :class="$style['manual-check__object']"
                              ></div>
                              <div :class="$style['manual-check__text']">
                                변동
                              </div>
                            </div>
                          </li>
                          <li :class="$style['manual-check__item']">
                            <div :class="$style['manual-check__block']">
                              <div
                                :class="$style['manual-check__object']"
                              ></div>
                              <div :class="$style['manual-check__text']">
                                고정
                              </div>
                            </div>
                          </li>
                          <li :class="$style['manual-check__item']">
                            <div :class="$style['manual-check__block']">
                              <div
                                :class="$style['manual-check__object']"
                              ></div>
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
                    <th>대출상환방법</th>
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
                              <div
                                :class="$style['manual-check__object']"
                              ></div>
                              <div :class="$style['manual-check__text']">
                                만기일시
                              </div>
                            </div>
                          </li>
                          <li :class="$style['manual-check__item']">
                            <div :class="$style['manual-check__block']">
                              <div
                                :class="$style['manual-check__object']"
                              ></div>
                              <div :class="$style['manual-check__text']">
                                원금균등분할
                              </div>
                            </div>
                          </li>
                          <li :class="$style['manual-check__item']">
                            <div :class="$style['manual-check__block']">
                              <div
                                :class="$style['manual-check__object']"
                              ></div>
                              <div :class="$style['manual-check__text']">
                                원리금균등분할
                              </div>
                            </div>
                          </li>
                          <li :class="$style['manual-check__item']">
                            <div :class="$style['manual-check__block']">
                              <div
                                :class="$style['manual-check__object']"
                              ></div>
                              <div :class="$style['manual-check__text']">
                                기타
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>금리인하요구권<br />대상여부</th>
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
                              <div
                                :class="$style['manual-check__object']"
                              ></div>
                              <div :class="$style['manual-check__text']">
                                대상
                              </div>
                            </div>
                          </li>
                          <li :class="$style['manual-check__item']">
                            <div :class="$style['manual-check__block']">
                              <div
                                :class="$style['manual-check__object']"
                              ></div>
                              <div :class="$style['manual-check__text']">
                                비대상
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
          </div>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">2. 대출 이자율</h3>

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
                고정금리 : 여신실행시 결정한 금리가 약정기간동안 동일하게
                적용되는 금리입니다.
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
                변동금리 : 대출약정 기간내에 기준금리가 변경될 경우 당해
                대출금리가 변경되는 금리로서 기준금리가 인상될 경우 고객의 이자
                부담이 증가될 수 있습니다.
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
                혼합금리 : 여신실행시부터 고정금리 약정기간 동안에는 고정금리를
                적용하고, 약정기간 경과 후 대출 잔여기간에는 변동금리를 적용하는
                등 고정금리와 변동금리가 혼합되어 적용되는 금리입니다.
              </div>
            </li>
          </ul>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">변동금리 예시</h4>
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
                  COFIX연동금리 : 전국은행연합회에서 공시하는 직전일 신규취급액
                  기준 COFIX금리 또는 잔액기준 COFIX금리에 가산금리를 적용하여
                  매 6/12개월마다 변경됩니다.
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
                  금융채연동금리 : 금융투자협회에서 공시하는 금융채Ⅱ AA0 3년물
                  또는 금융채Ⅱ AA0 5년물(KIS채권평가 기준）금리에 가산금리를
                  적용하여 매 3개월마다 변경
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              대출금리 결정(변동) 요인
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
                  대출금리는 원가요소와 마진(목표이익률)을 반영하여 결정됩니다.
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
                  원가요소는 신용원가, 업무원가, 조달원가 및 자본원가 등으로
                  구분하여 금융회사가 합리적인 기준에 따라 체계적으로 산정하며,
                  기준금리는 이러한 원가요소에 목표이익율을 감안하여 산정합니다.
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
                  고객에게 실제 적용되는 약정금리는 기준금리에 프로모션 등에
                  의한 조정금리 등을 반영하여 적용합니다. 결정된 대출금리는
                  개별약정에 의해 별도로 정한 항목 (변동금리대출의 기준금리 등)
                  이외에는 대출 만기일까지 동일하게 적용 됩니다.
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
                  조달원가 : 금융회사의 자금조달에 소요되는 비용을 말하며,
                  자금조달수단별 금리, 대출계약별 만기 등을 감안하여 산정합니다.
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
                  <div class="row-margin-mini">
                    신용원가 : 고객의 신용도에 따라 과거 경험과 현재의
                    시장상황을 고려할 때 예상되는 손실과 향후 예상치 못하게
                    발생할 수 있는 잠재적 손실 가능성을 고려한 비용을 말합니다.
                  </div>
                  <div
                    class="text-body-4 font-weight-light color-gray-tertiary"
                  >
                    고객의 신용도가 연체 발생 또는 대출금 증가 등으로 악화되는
                    경우 예상손실 증가에 따른 신용원가 상승으로 대출금리 상승
                    가능
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
                  업무원가 : 인건비, 물건비, 제세공과금 등 업무수행에 수반해서
                  발생하는 운영 및 영업 관련비용을 말합니다
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
                  자본원가 : 예상치 못한 손실에 대비하여 보유해야 하는
                  필요자본의 기회비용 등을 말하며, 신용등급 또는
                  개인신용평점별로 구분된 신용위험자본율과 과거 경험치 등을
                  반영한 자기자본조달비용 등을 감안하여 산정됩니다.
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
                  기한연장, 채무자변경 등 ‘대출조건이 변경되는 경우’에는 변경
                  당시의 기준금리를 기준으로 대출금리가 변경될 수 있습니다.
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">금리인하요구권</h4>

            <div class="flex-box align-items-start">
              <div class="flex-box__cell flex-1">
                <p class="text-body-4">금리인하요구권 대상여부</p>
              </div>
              <div class="flex-box__cell">
                <div
                  :class="[
                    $style['manual-check'],
                    $style['manual-check--wrap'],
                  ]"
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
                    <div class="row-margin-mini">
                      채무자는
                      <strong class="font-weight-medium underline"
                        >신용상태가 호전되거나 담보가 보강되었다고 인정되는 경우
                        (회사채 등급 상승, 재무상태 개선 등)에는 증빙자료를
                        첨부한 금리인하신청서를 금융회사에 제출, 금리변경을
                        요구</strong
                      >할 수 있습니다. 단, 금융회사의 내규 및 심사결과 등에
                      따라서 금리인하가 되지 않을 수도 있습니다.
                    </div>

                    <div
                      class="text-body-4 font-weight-light color-gray-tertiary"
                    >
                      금리인하요구 대상여신 : 금융회사의 심사(신용도 등 반영)에
                      따라 금리가 차등 적용되는 대출
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            3. 수수료 등 비용부담
          </h3>

          <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
            상품에 해당되는 수수료 등 비용의 경우, 체크박스에 표시됩니다.
          </NoticeText>

          <section>
            <h4 class="text-body-2 row-margin-item-medium">
              중도상환수수료 <span class="italic">(또는 중도상환해약금)</span>
            </h4>
            <p class="text-body-2">
              대출의 상환기일이 도래하기 전에 대출금을 상환할 경우 고객이
              부담하는 금액으로, 할부금융상품은 3년을 초과하여 상환 시에도
              부과되며, 자세한 사항은 약정서 등을 참고하여 주시기 바랍니다.
            </p>

            <div :class="[$style['basic-table'], 'row-margin-item']">
              <div :class="$style['basic-table']">
                <table>
                  <colgroup>
                    <col style="width: 80px" />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th colspan="2">중도상환 수수료율 ( %)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>만기<br />1년 이상</th>
                      <td class="align-left">
                        <div>
                          중도상환원금 × 1% + 중도상환원금 × (중도상환수수료율
                          -1%) × 잔존기간/(대출기간 - 30일)
                        </div>
                        <ul :class="[$style['basic-list'], 'row-margin-mini']">
                          <li
                            :class="[
                              $style['basic-list__item'],
                              'color-gray-tertiary',
                              'font-weight-regular',
                            ]"
                          >
                            <div :class="$style['basic-list__symbol']">※</div>
                            <div :class="$style['basic-list__content']">
                              잔존기간 : 30일 미만 상환시 ‘대출사용기간’을
                              30일로 간주
                            </div>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>만기<br />1년 미만</th>
                      <td class="align-left">
                        <div>
                          중도상환원금 × (중도상환수수료율) × 잔존기간/(대출기간
                          - 30일)
                        </div>
                        <ul :class="[$style['basic-list'], 'row-margin-mini']">
                          <li
                            :class="[
                              $style['basic-list__item'],
                              'color-gray-tertiary',
                              'font-weight-regular',
                            ]"
                          >
                            <div :class="$style['basic-list__symbol']">※</div>
                            <div :class="$style['basic-list__content']">
                              잔존기간 : 30일 미만 상환시 ‘대출사용기간’을
                              30일로 간주
                            </div>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              기타(취급)수수료 등
            </h4>
            <p class="text-body-2">
              항목(<span
                :class="[
                  $style['blank-box'],
                  $style['blank-box--medium'],
                  'align-center',
                ]"
              ></span
              >) 금액(<span
                :class="[
                  $style['blank-box'],
                  $style['blank-box--medium'],
                  'align-center',
                ]"
              ></span
              >) %
            </p>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">근저당권설정비용</h4>

            <ul :class="[$style['basic-list'], 'row-margin-mini']">
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-gray-tertiary',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  근저당권 설정비용 : 금융회사 부담
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
                <div :class="$style['basic-list__content']">
                  근저당권 해지비용 : 채무자 부담
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
                  <div class="row-margin-mini">
                    국민주택채권매입비* : (<span
                      :class="[
                        $style['blank-box'],
                        $style['blank-box--medium'],
                        'align-center',
                      ]"
                    ></span
                    >) 원
                  </div>

                  <div
                    class="text-body-4 font-weight-light color-gray-tertiary"
                  >
                    근저당채권최고액x국민주택채권 할인율(대출일
                    기준)•등록면허세, 지방교육세, 등기신청수수료 및 법무사수수료
                  </div>

                  <div class="row-margin-item">
                    : (<span
                      :class="[
                        $style['blank-box'],
                        $style['blank-box--medium'],
                        'align-center',
                      ]"
                    ></span
                    >) 원
                  </div>

                  <ul :class="[$style['basic-list'], 'row-margin-mini']">
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'color-gray-tertiary',
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">※</div>
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
                  <div>근저당물건의 조사 또는 감정평가 수수료</div>

                  <div class="row-margin-item">
                    : (<span
                      :class="[
                        $style['blank-box'],
                        $style['blank-box--medium'],
                        'align-center',
                      ]"
                    ></span
                    >) 원
                  </div>

                  <ul :class="[$style['basic-list'], 'row-margin-mini']">
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'color-gray-tertiary',
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">※</div>
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
                  <div>기타 비용으로서 부담주체가 분명하지 아니한 비용</div>

                  <div class="row-margin-item">
                    : (<span
                      :class="[
                        $style['blank-box'],
                        $style['blank-box--medium'],
                        'align-center',
                      ]"
                    ></span
                    >) 원
                  </div>

                  <ul :class="[$style['basic-list'], 'row-margin-mini']">
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'color-gray-tertiary',
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']">※</div>
                      <div :class="$style['basic-list__content']">
                        고객과 금융회사가 균분하여 부담합니다.
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
                  저당권이란 채무자가 기일에 채무를 상환하지 않을 경우,
                  채권자(금융회사)는 설정자가 제공한 담보물을 처분하여
                  우선적으로 변제받는 권리입니다. 따라서 자기소유의 담보에
                  타인을 위하여 저당권을 설정하는 것은 타인의 채무불이행으로
                  인하여 자기재산을 잃게 될 수도 있는 위험(소유권 상실 등
                  권리변동)을 부담하는 행위입니다.
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              담보종류에 따른 책임범위
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
                  특정채무담보 : 채무자가 채권자에 대하여 부담하는 특정된
                  채무만을 담보하는 것으로, 그 채무가 연기 ·재취급 또는 다른
                  여신으로 대환된 때에는 담보하지 않습니다.
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
                    근담보 : 채무자와 채권자 사이에 이미 맺어져 있거나 앞으로
                    맺게 될 거래계약으로부터 현재 발생되어 있거나 앞으로 발생할
                    채무를 채권 최고액의 범위 내에서 담보하게 되는 것으로 세
                    가지 유형이 있으며, 각 유형에 따른 책임범위는 다음과
                    같습니다.
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
                        (특정근담보) 특정된 거래계약(예 : 년 월 일 자
                        여신거래약정서)으로부터 계속적으로 발생하는 채무를
                        담보하며, 그 채무가 기한 연기된 때에도 담보합니다.
                        그러나 재취급 또는 다른 여신으로 대환된 때에는 담보하지
                        않습니다.
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
                        (한정 근담보) 특정한 종류의 거래(예 :
                        일반자금대출거래)에 대하여 이미 맺어져 있거나 앞으로
                        맺게 될 거래계약으로부터 현재 발생되어 있거나 앞으로
                        발생할 채무를 모두 담보하며, 그 채무의 연기나 재취급은
                        물론 같은 종류로 대환된 때에도 담보합니다. 그러나 다른
                        종류의 여신으로 대환된 때에는 담보하지 않습니다.
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
                        (포괄 근담보) 채무자가 채권자에게 부담하는 현재 및
                        장래의 모든 채무(여신거래로 인한 채무뿐만아니라 기타
                        다른 형태의 채무를 포함한다)를 담보하여 그 책임범위가
                        아주 광범위하므로 포괄근담보를 선택할 경우 다시 한번
                        신중히 생각한 후 결정하십시오.
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">인지세</h4>

            <div class="row-margin-item">
              : (<span
                :class="[
                  $style['blank-box'],
                  $style['blank-box--medium'],
                  'align-center',
                ]"
              ></span
              >) 원
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
                  인지세법에 의해 대출약정 체결시 납부하는 세금으로 대출금액에
                  따라 세액이 차등 적용되며, 각 50%씩 고객과 금융회사가
                  부담합니다.
                </div>
              </li>
            </ul>

            <div :class="[$style['basic-table'], 'row-margin-item']">
              <div :class="$style['basic-table']">
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
                      <td class="align-left">비과세</td>
                    </tr>
                    <tr>
                      <th>5천만원 초과 1억원 이하</th>
                      <td class="align-left">7만원</td>
                    </tr>
                    <tr>
                      <th>1억원 초과 10억원 이하</th>
                      <td class="align-left">15만원</td>
                    </tr>
                    <tr>
                      <th>10억원 초과</th>
                      <td class="align-left">35만원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                  담보신탁수수료 : 담보신탁을 이용하여 부동산 담보대출을 받을
                  경우 담보신탁보수는 금융회사가 부담하며, 단 수익자 지정 후
                  채무자의 귀책으로 대출이 취소되는 경우, 수익권증서 감액의 경우
                  채무(계약)인수에 따른 수익권증서 변경의 경우 채무자의 필요에
                  따른 담보물 교체로 인한 수익권증서 재발급의 경우는 고객이
                  부담합니다.
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
                  기타비용 : 항목(<span
                    :class="[
                      $style['blank-box'],
                      $style['blank-box--medium'],
                      'align-center',
                    ]"
                  ></span
                  >) 금액(<span
                    :class="[
                      $style['blank-box'],
                      $style['blank-box--medium'],
                      'align-center',
                    ]"
                  ></span
                  >) %, 원
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
                  채무자의 채무불이행으로 인해 발생하는 비용은 여신거래기본약관
                  제4조에 의거하여 채무자가 부담하여야 합니다
                </div>
              </li>
            </ul>
          </section>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">4. 실질유효금리</h3>
          <p class="text-body-2">
            대출이자와 대출취급시 금융회사가 고객에게 받는 수수료 등 비용을
            합산하여 대출금리(연율) 형태로 표시한 것으로, 수수료 등 비용 중
            법령에 의하여 고객이 부담하는 비용(인지세, 국민주택채권매입비),
            중도상환수수료, 기타 실비성격의 일부 수수료는 실질유효금리
            산정대상에서 제외됩니다.
          </p>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              예상 실질유효금리 계산에 합산된 내역
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
                  적용예정금리 : (<span
                    :class="[
                      $style['blank-box'],
                      $style['blank-box--medium'],
                      'align-center',
                    ]"
                  ></span
                  >)%
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
                  실질유효금리 등을 반영하여 고객이 실질적으로 부담하여야 하는
                  총액 : (<span
                    :class="[
                      $style['blank-box'],
                      $style['blank-box--medium'],
                      'align-center',
                    ]"
                  ></span
                  >)원
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">취급수수료</h4>

            <div>
              : (<span
                :class="[
                  $style['blank-box'],
                  $style['blank-box--medium'],
                  'align-center',
                ]"
              ></span
              >) 원
            </div>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">기한연기수수료</h4>

            <div>
              : (<span
                :class="[
                  $style['blank-box'],
                  $style['blank-box--medium'],
                  'align-center',
                ]"
              ></span
              >) 원
            </div>
          </section>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            5. 이자 납입방법 및 상환 방식
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
                이자 납입일을 정하여 일정주기(매월 등)마다 이자를 납입
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
                <div>「이자를 납입하기로 약정한 날」에 납입하지 아니한 때</div>
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
                      이자를 납입하여야 할 날의 다음날부터 30일까지는 내셔야 할
                      약정이자에 대해 연체이자가 적용되고, 30일이 경과하면
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
                <div>「원금을 상환하기로 약정한 날」에 상환하지 아니한 때</div>
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
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            6. 연체이자율(지연배상금율)
          </h3>

          <p class="text-body-2 font-weight-medium">
            연체이자율은 유이자[대출이자율 + 연체가산이자율], 무이자의 경우
            [상거래기본이자율(6%) + 연체가산이자율]로 적용되며, 법정최고금리인
            20% 이내로 적용됩니다.
            <span class="color-green">(연체가산이율은 연 3%)</span> 다만 상품에
            따라 연체이자율이 일부 달라지는 경우가 있으므로, 유의하여 주시기
            바랍니다.
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
                          지체된 분할상환금 및 약정이자 × 연17 % × 30 / 365
                        </td>
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

              <p class="text-body-2">
                이자납입 연체로 인하여 대출잔액에 연체이율이 적용되었을 경우,
                연체이자 전액을 납입하지 않고 일부연체이자를 납입하는 경우에도
                연체이자 전액을 납입하기 전까지 대출잔액에 연체이율이
                적용됩니다.
              </p>
            </div>
          </section>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            7. 대출기한 전 채무 상환이 필요한 경우
          </h3>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              기한의 이익이란?
            </h4>

            <p class="text-body-2">
              기한의 존재로 말미암아 당사자가 받는 이익을 말하며, 금융회사와의
              대출거래에서 채무자인 고객은 당초 약정한 대출기한까지는 대출금을
              상환하지 않아도 되므로 그 기간 동안 채무자인 고객이 가지는 이익을
              기한의 이익이라 합니다.
            </p>
          </section>

          <section class="row-margin-contents">
            <h4
              class="text-body-4 color-gray-secondary font-weight-regular row-margin-mini"
            >
              기한의 이익이 상실되면?
            </h4>

            <ul :class="$style['basic-list']">
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
                <div :class="$style['basic-list__content']">연체이자 부담</div>
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
                      금융회사의 서면통지가 도달한 날부터 일정 시일이 경과하면
                      기한이익을 상실하며, 모든 대출금(또는 해당 대출금)을
                      대출기한이 도래하기 전임에도 불구하고 곧 상환하셔야
                      합니다.
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
                <div>주요 기한의 이익 상실 사유</div>
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
                      여신거래와 관련하여 허위, 위변조 또는 고의로 부실자료를
                      제출하여 회사의 채권보전에 중대한 손실을 유발한 때
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
                      이자등을 지급하기로 한 때부터 계속하여 30일간 지체한 경우
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
                      분할상환금 또는 분할상환 원리금의 지급을 2회 이상 연속하여
                      지체한 때
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

          <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
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
                <span class="color-green"
                  >할부계약의 해지 시 중도상환수수료가 부과 될 수
                  있습니다.</span
                >
                다만,
                <span class="color-green"
                  >할부상품은 계약이 성립한 날부터 3년 초과하여 상환하여도
                  중도상환수수료가 부과되니 유의*</span
                >하여 주시기 바랍니다.
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
                재화를 인도받고, 인도받은 재화에 하자가 없을 경우
              </div>
            </li>
          </ul>

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
                고객이 중도상환 등 해지를 요청할 경우, 금융회사는 고객에게
                중도상환수수료 등 해지 시 납부해야 하는 금액을 안내하고
                가상계좌를 발송합니다.(납부 시 해지 처리 진행)
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
                대출신청 이후 고객에 의한 대출취소 또는 대출심사 거절 시 발생한
                비용(등기설정/말소비용, 감정수수료, 인지세 등)을 고객이
                부담해야합니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-red',
                'text-body-2',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                ① 대출금 중도상환 시 전액상환 또는 부분상환 가능하며, ② 휴일에
                중도상환 불가, ③ 대출금 중도상환금 확인은 당사
                콜센터(1800-1110)을 통하여 가능하오니 확인바랍니다.
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
                        <li class="row-margin-item">
                          ①개인식별정보(성명, 주민등록번호 등),
                        </li>
                        <li class="row-margin-item">
                          ②‘연체정보 등’ 정보(연체사실 등),
                        </li>
                        <li class="row-margin-item">
                          ③신용거래정보(대출, 보증현황 등)
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
                        <li :class="$style['basic-list__item']">
                          <div :class="$style['basic-list__symbol']"></div>
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
                <div class="row-margin-contents">
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
          <div :class="[$style['basic-table'], 'row-margin-item']">
            <div :class="$style['basic-table']">
              <table>
                <colgroup>
                  <col style="width: 32px" />
                  <col />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th
                      rowspan="2"
                      :class="$style['basic-table__padding-none']"
                    >
                      해<br />당<br />여<br />부
                    </th>
                    <td></td>
                    <td class="align-left">
                      본인은 하나캐피탈과 할부계약을 체결함에 있어 금융회사 직원
                      과 상담하여 본 설명 서를 교부받았으며, 위에서 설명한
                      내용을 포함하여 대출거래의 주요내용 및 고객부 담 비용에
                      대하여 충 분히 설명을 듣고 이 해하였음을 확인합 니다.
                    </td>
                  </tr>
                  <tr>
                    <td :class="$style['basic-table__left-line']"></td>
                    <td class="align-left">
                      본인은 금융회사 직원 으로부터 금리인하요 구권, 청약철회권,
                      위 법계약해지권 등 고객 의 권리에 대하여 충 분히 설명을
                      듣고 이 해하였음을 확인합니 다.
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
                              :class="$style['blank-box']"
                            ></span
                            >.<span :class="$style['blank-box']"></span>.<span
                              :class="$style['blank-box']"
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
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractDescription009_013.scss';
</style>
