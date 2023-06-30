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
              항목(<span :class="$style['blank-box']"></span>) 금액(<span
                :class="$style['blank-box']"
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
                      :class="$style['blank-box']"
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
                    : (<span :class="$style['blank-box']"></span>) 원
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
                    : (<span :class="$style['blank-box']"></span>) 원
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
                    : (<span :class="$style['blank-box']"></span>) 원
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
              : (<span :class="$style['blank-box']"></span>) 원
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
                  기타비용 : 항목(<span :class="$style['blank-box']"></span>)
                  금액(<span :class="$style['blank-box']"></span>) %, 원
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
                  적용예정금리 : (<span :class="$style['blank-box']"></span>)%
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
                  총액 : (<span :class="$style['blank-box']"></span>)원
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">취급수수료</h4>

            <div>: (<span :class="$style['blank-box']"></span>) 원</div>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">기한연기수수료</h4>

            <div>: (<span :class="$style['blank-box']"></span>) 원</div>
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
                기타 이자납입방법은 대출거래약정서 참조하여 주시기 바랍니다.
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
                  (예시) 만기일시상환 : 이자납입일을 정하여 일정기간마다 이자를
                  납입하고, 대출기간 만료일에 전액 상환하는 방식을 말합니다.
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
                      이자납입일 (<span :class="$style['blank-box']"></span>)일
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
                      이자납입금액 (<span :class="$style['blank-box']"></span>)
                      원
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
                      만기 시 상환금액 (<span
                        :class="$style['blank-box']"
                      ></span
                      >) 원
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            6. 연체이자율(지연배상금률)
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
                연체이자율은 [대출이자율 + 연체가산이자율]로 적용합니다.
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
                <div>연체가산이자율은 다음과 같이 적용합니다.</div>
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
                      연체가산이자율 : 연 3%
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
                연체이자율은 최고 연 (24%)로 합니다.
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
                상품에 따라 연체이자율이 일부 달라지는 경우가 있으므로 세부적인
                사항은 대출거래약정서 등을 참고하시기 바랍니다.
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
                      이자를 납입하여야 할 날의 다음날부터 14일까지는 내셔야 할
                      약정이자에 대해 연체이자가 적용되고, 14일이 경과하면
                      기한이익상실로 인하여 대출원금에 연체이율을 곱한 연체
                      이자를 내셔야 합니다. (차주 및 상품에 따라 상이)
                    </div>
                  </li>
                </ul>

                <div class="row-margin-contents">
                  <p
                    class="text-body-4 font-weight-light color-gray-tertiary row-margin-item"
                  >
                    (예시) 원금 5천만원(월 80만원 분할상환), 약정이자율 연 7%,
                    연체가산이자율 연 3%인 중고차 오토론 대출의 분할
                    상환금(80만원) 및 이자(20만원)를 미납하여 연체가 발생하고,
                    연체 발생 후 2개월 시점에 납부할 경우 연체이자
                  </p>

                  <div :class="$style['basic-table']">
                    <div :class="$style['basic-table']">
                      <table>
                        <colgroup>
                          <col style="width: 84px" />
                          <col />
                          <col style="width: 117px" />
                        </colgroup>
                        <thead>
                          <tr>
                            <th>연체기간</th>
                            <th>계산방법</th>
                            <th>연체이자</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>연체발생<br />~14일분</th>
                            <td>
                              지체된 약정이자(50만원) × 연8%(5% + 3%) × 14/365
                            </td>
                            <td>1,534 원</td>
                          </tr>
                          <tr>
                            <th>연체 15일<br />~30일분</th>
                            <td>원금(1억2천만원) × 연8%(5% + 3%) × 16/365</td>
                            <td>420,822 원</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td>계</td>
                            <td></td>
                            <td>419,422,356 원</td>
                          </tr>
                        </tfoot>
                      </table>
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
                        기한이익상실전 발생한 약정이자는 별도
                      </div>
                    </li>
                  </ul>

                  <NoticeText :classNames="{ wrap: 'row-margin-item-medium' }">
                    위 내용은 이해를 돕기위해 연체이자만을 단순하게 계산한
                    예시로,연체이자는 대출조건, 대출종류 등에 따라 달라질 수
                    있으며, 실제 납부금액은 연체이자에 약정이자를 포함하여
                    계산됩니다.
                  </NoticeText>
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
                      기한의 이익이 상실된 때에는 그 다음 날부터 대출원금에 대한
                      연체이자를 내셔야 합니다.
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <p class="text-body-2 row-margin-contents">
            이자납입 연체로 인하여 대출잔액에 연체이율이 적용되었을 경우,
            연체이자 전액을 납입하지 않고 일부연체이자를 납입하는 경우에도
            연체이자 전액을 납입하기 전까지 대출잔액에 연체이율이 적용됩니다.
          </p>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">7. 대출의 제한(거부)</h3>

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
                금융회사의 연체대출금 보유자, 금융회사에 손해를 끼친 자,
                불건전한 대출이 있는 자에 대해서 금융회사는 대출을
                취급(연장·대환포함)하지 않거나 제한하여 운용할 수 있습니다.
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
                  (예시) 불건전대출이 있는 자의 범위
                </div>

                <div :class="$style['contents-list']">
                  <ol
                    :class="[
                      $style['contents-list__list'],
                      $style['contents-list__list--quinary'],
                    ]"
                  >
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">1</div>
                        <div :class="$style['contents-list__title']">
                          금융회사의 본인채무 또는 보증채무가 연체중인 자
                        </div>
                      </div>
                    </li>
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">2</div>
                        <div :class="$style['contents-list__title']">
                          특수채권의 채무자 및 연대보증인
                        </div>
                      </div>
                    </li>
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">3</div>
                        <div :class="$style['contents-list__title']">
                          신용회복지원, 회생절차, 파산·면책 등의 신청 또는
                          확정을 받은 자
                        </div>
                      </div>
                    </li>
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">4</div>
                        <div :class="$style['contents-list__title']">
                          종합신용정보집중기관의 신용도판단정보(기록보유자
                          포함)에 등록된 자(다만, 공공정보에 등록된 자중 대출과
                          무관한 사유(예 : 세금체납)로 등록된 자는 제외)
                        </div>
                      </div>
                    </li>
                    <li :class="$style['contents-list__item']">
                      <div :class="$style['contents-list__head']">
                        <div :class="$style['contents-list__symbol']">5</div>
                        <div :class="$style['contents-list__title']">
                          기타 이에 준하는 자
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">8. 채무조정 지원</h3>

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
                  고객은 금융회사가 정하는 요건에 부합되는 경우 채무조정을
                  신청할 수 있으며, 금융회사는 내부심사를 통해 채무조정 지원
                  여부, 채무조정 방법(원리금 상환유예, 만기연장 등)을
                  결정·통지합니다.
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
                      구체적인 채무조정 신청방법 등은 금융회사 담당자에게
                      문의하여 주시기 바랍니다.
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">9. 유의사항</h3>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              대출기한 전에 채무를 상환해야 하는 경우
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
                        대출기한까지는 대출금을 상환하지 않아도 되므로 그
                        기간동안 채무자인 고객이 가지는 이익을 기한의 이익이라
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
                    채무자인 고객소유의 예금, 담보부동산에 법원이나 세무서
                    등으로부터의 (가)압류명령 등이 있는 때 등 (여신거래기본약관
                    제8조제1항, 제2항, 제3항에서 정한 사유)
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
                        금융회사로부터 별도 청구가 없더라도 모든 대출금(또는
                        해당 대출금)을 대출기한이 도래하기 전임에도 불구하고 곧
                        상환하셔야 합니다.
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
                    상환하지 아니한 때 등
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
                        금융회사의 서면청구에 의해 모든 대출금(또는 해당
                        대출금)을 대출기한이 도래하기 전임에도 불구하고 곧
                        상환하셔야 합니다.
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
                    (예시) 주요 기한의 이익 상실 사유
                  </div>

                  <div :class="$style['contents-list']">
                    <ol
                      :class="[
                        $style['contents-list__list'],
                        $style['contents-list__list--quinary'],
                      ]"
                    >
                      <li :class="$style['contents-list__item']">
                        <div :class="$style['contents-list__head']">
                          <div :class="$style['contents-list__symbol']">1</div>
                          <div :class="$style['contents-list__title']">
                            여신거래와 관련하여 허위, 위변조 또는 고의로
                            부실자료를 제출하여 회사의 채권보전에 중대한 손실을
                            유발한 때
                          </div>
                        </div>
                      </li>
                      <li :class="$style['contents-list__item']">
                        <div :class="$style['contents-list__head']">
                          <div :class="$style['contents-list__symbol']">2</div>
                          <div :class="$style['contents-list__title']">
                            이자등을 지급하기로 한 때부터 계속하여 14일간 지체한
                            경우
                          </div>
                        </div>
                      </li>
                      <li :class="$style['contents-list__item']">
                        <div :class="$style['contents-list__head']">
                          <div :class="$style['contents-list__symbol']">3</div>
                          <div :class="$style['contents-list__title']">
                            분할상환금 또는 분할상환 원리금의 지급을 2회 이상
                            연속하여 지체한 때
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              ‘연체정보등’ 등록
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
                    대출원금, 이자 등을 3개월 이상 「장기연체」한 경우 원금 또는
                    이자를 상환하기로 한 약정기일의 다음날로부터 3개월이 되는
                    날을 등록사유 발생일로 하여, 그때로부터 7영업일 이내
                    '연체정보등'이 등록됩니다.
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
                        「일반신용정보관리규약」개정으로 ‘연체정보등’ 등록
                        기준이 변경될 수 있습니다.
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
                        ‘연체정보등’이 등록되면, 금융거래제약 등 불이익을 받을
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
                  '연체기간 5영업일 이상, 연체금 10만원 이상' 「단기연체」한
                  경우 신용정보회사를 통해 연체정보가 등록되어 금융거래가 제한될
                  수 있습니다.
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
                  신용정보집중기관에 장기연체가 등록하는 경우에는
                  신용정보집중기관이 제3자에게 정보를 제공함으로써
                  신용정보주체가 불이익을 받을 수 있으며, 신용등급이 하락하고
                  금리가 상승하는 등의 영향이 발생할 수 있습니다.
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
                  정보 등록 후 연체금을 상환하여도 신용등급이 일정기간 회복되지
                  아니할 수 있으며, 일정기간 동안 해당 기록이 보관될 수 있습니다
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              신용등급에 관한 사항
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
                  신용공여(대출 등)사실만으로 신용등급이 하락할 수 있습니다.
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
                  평균적으로 연체율이 높은 금융권역(또는 형태)의 신용공여는 여타
                  금융권역 또는 일반적인 형태의 신용공여보다 신용점수가 더 큰
                  폭으로 하락할 수 있습니다.
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
                  경우에도 일정기간 기업신용등급의 산정에 영향을 줄 수 있습니다.
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              계약연장에 관한 사항
            </h4>

            <p class="text-body-2">
              최초 심사에 비해 신용점수가 하락하거나 연체가 발생하는 등의 사실이
              발생했을 경우, 대출계약의 연장이 거절될 수 있습니다.
            </p>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              자금용도외 유용시 주의사항
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
                  사용하지 아니하고, 용도와 무관하게 사용하는
                  경우(주택구입자금으로 대출 계약 후 시설자금으로 활용 등)를
                  말합니다.
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
                  대출이 제한될 수 있습니다
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">청약철회권</h4>

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
                  이루어진 경우에는 그 지급일로 대체함)로부터 14일 이내 계약에
                  대한 청약을 철회할 수 있습니다.
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
                  청약의 철회 의사를 표시하기 위해서는 서면 등으로 의사표시를
                  해야 하며, 이미 공급받은 금전·재화와 그에 대한 이자(금전을
                  지급받은 날부터 금전을 돌려준 날까지의 기간에 대해 약정된
                  이자율과 공급받은 금전을 곱한 금액)를 반환하여야 합니다.
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
                  기타 세부사항은 대출거래약정서를 참고하여 주시기 바랍니다.
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">위법계약해지권</h4>

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
                  금융회사가 「금융소비자 보호에 관한 법률」의 판매원칙을 위반한
                  사실을 고객이 제시하는 경우, 해당 계약은 위약금 등 수수료 부과
                  없이 해지될 수 있습니다.
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
                  위법계약해지 요구는 계약일로부터 5년, 위법사실을 안 날로부터
                  1년 이내에 가능합니다.(계약 종료 시 행사 불가)
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
                  기타 세부사항은 대출거래약정서를 참고하여 주시기 바랍니다.
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
                  금융기관은 기재된 정보를 확인하기 위하여 추가적인 문서와
                  자료를 요청할 수 있으며, 요청된 정보제출을 거부하거나 검증이
                  충분히 되지 않을 경우에는 금융거래가 제한될 수 있습니다.
                </div>
              </li>
            </ul>
          </section>

          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              민원 및 분쟁 관련사항
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
                  금융상품과 관련한 의문사항 또는 불만(민원)이 있을 경우, 당사
                  인터넷 홈페이지(URL 기입) 또는 고객센터(전화번호 기입)로
                  문의하실 수 있습니다.
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
                  분쟁이 발생한 경우에는 금융감독원(국번없이 1332) 등에 도움을
                  요청하실 수 있습니다
                </div>
              </li>
            </ul>
          </section>
        </section>

        <p class="text-body-2">
          이 설명서는 「금융소비자 보호에 관한 법률」 제19조제1항, 동 법 시행령
          제14조제1항에 따라 금융상품에 관한 중요한 사항을 이해하기 쉽도록
          설명하기 위해 약정 전에 제공되는 자료로서, 상담일 이후 신청금액,
          신용도, 설정금액 등 변경에 의하여 일부 내용이 달라질 수 있습니다.
        </p>
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
