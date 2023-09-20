<script>
// 금융리스 견적서
import CarThumb from '@/components/ui/imageData/CarThumb.vue';

export default {
  components: {
    CarThumb,
  },
};
</script>

<template>
  <div :class="$style['document-layout']">
    <!-- Page 1 : 상품선택 1개, 연락처 숨김 -->
    <div :class="$style['document']">
      <!-- head -->
      <div :class="$style['est-head']">
        <div :class="$style['est-head__left']">
          <div :class="$style['est-head__logo']"></div>
          <p :class="$style['est-head__text']">■ VIP 고객님 귀중</p>
          <p :class="$style['est-head__text']">작성일 : 2023-06-08</p>
        </div>
        <div :class="$style['est-head__center']">
          <h1 :class="$style['est-head__title']">금융리스 견적서</h1>
        </div>
        <div :class="$style['est-head__right']"></div>
      </div>
      <!-- // head -->

      <!-- car info -->
      <div :class="$style['est-car-info']">
        <div :class="$style['est-car-info__img-area']">
          <CarThumb
            size="large"
            src="/images/_dummy/car-thumb.png"
            :classNames="{ wrap: $style['est-car-info__img'] }"
          />
          <p :class="$style['est-car-info__notice']">
            ※ 위 참고 이미지는 실제 판매모델과 다를 수 있습니다.
          </p>
        </div>
        <div :class="$style['est-car-info__contents']">
          <dl :class="$style['est-car-info__list']">
            <div :class="$style['est-car-info__item']">
              <dt :class="$style['est-car-info__key']">
                <div :class="$style['est-car-info__key-text']">모델</div>
              </dt>
              <dd :class="$style['est-car-info__val']">
                <div :class="$style['est-car-info__val-text']">
                  <strong
                    >제네시스 G70 슈팅 브레이크 2023년형 가솔린 2.5 터보 (개소세
                    5% 기준) 2WD</strong
                  ><br />
                  (45,950,000)
                </div>
              </dd>
            </div>
            <div :class="$style['est-car-info__item']">
              <dt :class="$style['est-car-info__key']">
                <div :class="$style['est-car-info__key-text']">색상</div>
              </dt>
              <dd :class="$style['est-car-info__val']">
                <div :class="$style['est-car-info__val-text']">
                  외장 : 세빌 실버(SSS)<br />
                  내장 : 옵시디언 블랙 모노톤 (옵시디언 블랙 시트)
                </div>
              </dd>
            </div>
            <div :class="$style['est-car-info__item']">
              <dt :class="$style['est-car-info__key']">
                <div :class="$style['est-car-info__key-text']">옵션</div>
              </dt>
              <dd :class="$style['est-car-info__val']">
                <div :class="$style['est-car-info__val-text']">선택 없음</div>
              </dd>
            </div>
          </dl>
          <p :class="$style['est-car-info__price']"></p>
        </div>
      </div>
      <!-- // car info -->

      <!-- 취득원가 -->
      <section :class="$style['est-section']">
        <h2 :class="$style['est-section__title']">■ 취득원가</h2>

        <div :class="$style['est-section']">
          <div :class="$style['est-layout']">
            <div :class="$style['est-layout__cell']">
              <div :class="$style['est-table']">
                <table>
                  <tbody>
                    <tr>
                      <th>기본가격</th>
                      <td class="align-right">41,100,000 원</td>
                    </tr>
                    <tr>
                      <th>옵션가격</th>
                      <td class="align-right">4,000,000 원</td>
                    </tr>
                    <tr>
                      <th>할인가격</th>
                      <td class="align-right">825,775 원</td>
                    </tr>
                    <tr>
                      <th>탁송료</th>
                      <td class="align-right">0 원</td>
                    </tr>
                    <tr :class="$style['est-table__emphasis']">
                      <th><strong>①최종 차량가</strong></th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <strong :class="$style['color-emphasis']"
                          >44,274,225 원</strong
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div :class="$style['est-layout__cell']">
              <div :class="$style['est-table']">
                <table>
                  <tbody>
                    <tr>
                      <th>취득세</th>
                      <td class="align-right">2,817,450 원</td>
                    </tr>
                    <tr>
                      <th>공채비용</th>
                      <td class="align-right">594,090 원</td>
                    </tr>
                    <tr>
                      <th>부대비용</th>
                      <td class="align-right">60,000 원</td>
                    </tr>
                    <tr>
                      <th>②등록비용 합계</th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <strong>0 원</strong>
                      </td>
                    </tr>
                    <tr>
                      <th>③선수금</th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <div class="flex-box">
                          <div class="flex-box__cell">0.00%</div>
                          <div class="flex-box__cell flex-1">
                            <strong>100,000 원</strong>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr :class="$style['est-table__emphasis']">
                      <th><strong>취득원가(①+②-③)</strong></th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <strong :class="$style['color-emphasis']"
                          >44,274,225 원</strong
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <ul :class="$style['est-list']">
            <li :class="[$style['est-list__item'], $style['color-emphasis']]">
              ※ 자동차 시가표준액을 기반으로 취득세 금액에 차액이 발생될 수
              있습니다. 공채비용은 실제 등록 시점에 따라 차이가 발생할 수
              있습니다.
            </li>
          </ul>
        </div>

        <div :class="$style['est-section']">
          <div :class="$style['est-table']">
            <table>
              <tbody>
                <tr>
                  <th>리스 기간</th>
                  <td class="align-right"><strong>36개월</strong></td>
                </tr>
                <tr>
                  <th>만기처리</th>
                  <td class="align-right">구매</td>
                </tr>
                <tr>
                  <th>상환금리 (최저 ~ 최고)</th>
                  <td class="align-right">7.57 ~ 19%</td>
                </tr>
                <tr>
                  <th>대출원금</th>
                  <td :class="[$style['est-table__emphasis'], 'align-right']">
                    <strong>44,174,225</strong>
                  </td>
                </tr>
                <tr>
                  <th>유예금</th>
                  <td class="align-right">0</td>
                </tr>
                <tr :class="$style['est-table__emphasis']">
                  <th rowspan="2">
                    <strong>매회 리스료 (최저 ~ 최고)</strong>
                  </th>
                  <td>
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">①리스료</div>
                      <div class="flex-box__cell">1,375,500 ~ 2,330,000</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td :class="$style['est-table__left-line']">
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">②자동차세</div>
                      <div class="flex-box__cell">고객별도</div>
                    </div>
                  </td>
                </tr>
                <tr :class="$style['est-table__emphasis']">
                  <th><strong>납입 리스료 (최저 ~ 최고)</strong></th>
                  <td :class="$style['est-table__emphasis']">
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">①+②</div>
                      <div class="flex-box__cell">
                        <strong :class="$style['color-emphasis']">
                          1,375,500 ~ 2,330,000
                        </strong>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul :class="$style['est-list']">
            <li :class="[$style['est-list__item'], $style['color-emphasis']]">
              ※ 개인 고객은 금리체계 모범규준에 의거 신용조회 및 심사 후 금리가
              결정되며, 결정된 금리에 따라 월 납입금이 변동됩니다.
            </li>
          </ul>
        </div>

        <div :class="$style['est-section']">
          <div :class="[$style['est-table'], $style['est-table--secondary']]">
            <table>
              <tbody>
                <tr>
                  <th>ⓐ등록/부대비용</th>
                  <td class="align-right">3,471,540</td>
                </tr>
                <tr>
                  <th>ⓑ선납금/보증금</th>
                  <td class="align-right">100,000</td>
                </tr>
                <tr :class="$style['est-table__emphasis']">
                  <th>
                    <strong>초기납입금 (ⓐ+ⓑ)</strong>
                  </th>
                  <td :class="[$style['est-table__emphasis'], 'align-right']">
                    <strong>3,571,540</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <!-- // 취득원가 -->

      <!-- 구비서류 -->
      <section :class="$style['est-section']">
        <h2 :class="$style['est-section__title']">■ 구비서류</h2>

        <div :class="[$style['est-table'], $style['est-table--secondary']]">
          <table>
            <colgroup>
              <col style="width: 130px" />
              <col />
            </colgroup>
            <tbody>
              <tr :class="$style['est-table__emphasis']">
                <th>개인/개인사업자</th>
                <td>
                  사업자등록증 사본, 운전면허증 사본, 자동이체통장 사본<br />
                  소득금액증명원, 재산세과세증명원, 자격증 사본(전문직 한정)
                </td>
              </tr>
              <tr :class="$style['est-table__emphasis']">
                <th>필수가입</th>
                <td>
                  사업등록증 사번, 법인등기부등본 1부, 법인인감증명서 1통, 최근
                  2개년도 재무제표<br />
                  주주명부, 자동이체통장 사본<br />
                  ※ 법인의 경우 대표이사 개인입보 필수
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul :class="$style['est-list']">
          <li :class="$style['est-list__item']">
            ※ (개인/법인)인감증명서, 주민등록등본, 법인등기부등본은 계약체결시점
            3개월 이내 발급분만 인정합니다.
          </li>
          <li :class="$style['est-list__item']">
            ※ 연대보증인 필요서류도 동일합니다.
          </li>
        </ul>
      </section>
      <!-- // 구비서류 -->

      <!-- 안내 -->
      <div :class="$style['est-section']">
        <ul :class="$style['est-list']">
          <li :class="$style['est-list__item']">
            ㅇ 상기 견적은 차량가격 변동 및 리스조건에 따라 변경될 수 있으며,
            리스계약 체결 시 확정됩니다.
          </li>
          <li :class="$style['est-list__item']">
            ㅇ 차량 반납시 주행거리 및 차량상태에 따라 감가 금액이 발생할 수
            있습니다.
          </li>
          <li :class="$style['est-list__item']">
            ㅇ 중도해지 및 승계시 수수료와 부대비용이 발생합니다.
          </li>
          <li :class="$style['est-list__item']">
            ㅇ 대출 진행시 인지대 비용 5,000원이 별도 발생합니다.
          </li>
        </ul>
      </div>
      <!-- // 안내 -->
    </div>
    <!-- // Page 1 : 상품선택 1개, 연락처 숨김 -->

    <!-- Page 1 : 상품선택 1개, 연락처 표시 -->
    <div :class="$style['document']">
      <!-- head -->
      <div :class="$style['est-head']">
        <div :class="$style['est-head__left']">
          <div :class="$style['est-head__logo']"></div>
          <p :class="$style['est-head__text']">■ VIP 고객님 귀중</p>
          <p :class="$style['est-head__text']">작성일 : 2023-06-08</p>
        </div>
        <div :class="$style['est-head__center']">
          <h1 :class="$style['est-head__title']">금융리스 견적서</h1>
        </div>
        <div :class="$style['est-head__right']">
          <section :class="$style['est-name-card']">
            <h2 :class="$style['est-name-card__title']">유평우</h2>
            <dl :class="$style['est-name-card__list']">
              <div :class="$style['est-name-card__item']">
                <dt :class="$style['est-name-card__key']">소속</dt>
                <dd :class="$style['est-name-card__val']">유평우</dd>
              </div>
              <div :class="$style['est-name-card__item']">
                <dt :class="$style['est-name-card__key']">전화</dt>
                <dd :class="$style['est-name-card__val']">010-3899-5999</dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
      <!-- // head -->

      <!-- car info -->
      <div :class="$style['est-car-info']">
        <div :class="$style['est-car-info__img-area']">
          <CarThumb
            size="large"
            src="/images/_dummy/car-thumb.png"
            :classNames="{ wrap: $style['est-car-info__img'] }"
          />
          <p :class="$style['est-car-info__notice']">
            ※ 위 참고 이미지는 실제 판매모델과 다를 수 있습니다.
          </p>
        </div>
        <div :class="$style['est-car-info__contents']">
          <dl :class="$style['est-car-info__list']">
            <div :class="$style['est-car-info__item']">
              <dt :class="$style['est-car-info__key']">
                <div :class="$style['est-car-info__key-text']">모델</div>
              </dt>
              <dd :class="$style['est-car-info__val']">
                <div :class="$style['est-car-info__val-text']">
                  <strong
                    >제네시스 G70 슈팅 브레이크 2023년형 가솔린 2.5 터보 (개소세
                    5% 기준) 2WD</strong
                  ><br />
                  (45,950,000)
                </div>
              </dd>
            </div>
            <div :class="$style['est-car-info__item']">
              <dt :class="$style['est-car-info__key']">
                <div :class="$style['est-car-info__key-text']">색상</div>
              </dt>
              <dd :class="$style['est-car-info__val']">
                <div :class="$style['est-car-info__val-text']">
                  외장 : 세빌 실버(SSS)<br />
                  내장 : 옵시디언 블랙 모노톤 (옵시디언 블랙 시트)
                </div>
              </dd>
            </div>
            <div :class="$style['est-car-info__item']">
              <dt :class="$style['est-car-info__key']">
                <div :class="$style['est-car-info__key-text']">옵션</div>
              </dt>
              <dd :class="$style['est-car-info__val']">
                <div :class="$style['est-car-info__val-text']">선택 없음</div>
              </dd>
            </div>
          </dl>
          <p :class="$style['est-car-info__price']"></p>
        </div>
      </div>
      <!-- // car info -->

      <!-- 취득원가 -->
      <section :class="$style['est-section']">
        <h2 :class="$style['est-section__title']">■ 취득원가</h2>

        <div :class="$style['est-section']">
          <div :class="$style['est-layout']">
            <div :class="$style['est-layout__cell']">
              <div :class="$style['est-table']">
                <table>
                  <tbody>
                    <tr>
                      <th>기본가격</th>
                      <td class="align-right">41,100,000 원</td>
                    </tr>
                    <tr>
                      <th>옵션가격</th>
                      <td class="align-right">4,000,000 원</td>
                    </tr>
                    <tr>
                      <th>할인가격</th>
                      <td class="align-right">825,775 원</td>
                    </tr>
                    <tr>
                      <th>탁송료</th>
                      <td class="align-right">0 원</td>
                    </tr>
                    <tr :class="$style['est-table__emphasis']">
                      <th><strong>①최종 차량가</strong></th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <strong :class="$style['color-emphasis']"
                          >44,274,225 원</strong
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div :class="$style['est-layout__cell']">
              <div :class="$style['est-table']">
                <table>
                  <tbody>
                    <tr>
                      <th>취득세</th>
                      <td class="align-right">2,817,450 원</td>
                    </tr>
                    <tr>
                      <th>공채비용</th>
                      <td class="align-right">594,090 원</td>
                    </tr>
                    <tr>
                      <th>부대비용</th>
                      <td class="align-right">60,000 원</td>
                    </tr>
                    <tr>
                      <th>②등록비용 합계</th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <strong>0 원</strong>
                      </td>
                    </tr>
                    <tr>
                      <th>③선수금</th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <div class="flex-box">
                          <div class="flex-box__cell">0.00%</div>
                          <div class="flex-box__cell flex-1">
                            <strong>100,000 원</strong>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr :class="$style['est-table__emphasis']">
                      <th><strong>취득원가(①+②-③)</strong></th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <strong :class="$style['color-emphasis']"
                          >44,274,225 원</strong
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <ul :class="$style['est-list']">
            <li :class="[$style['est-list__item'], $style['color-emphasis']]">
              ※ 자동차 시가표준액을 기반으로 취득세 금액에 차액이 발생될 수
              있습니다. 공채비용은 실제 등록 시점에 따라 차이가 발생할 수
              있습니다.
            </li>
          </ul>
        </div>

        <div :class="$style['est-section']">
          <div :class="$style['est-table']">
            <table>
              <tbody>
                <tr>
                  <th>리스 기간</th>
                  <td class="align-right"><strong>36개월</strong></td>
                </tr>
                <tr>
                  <th>만기처리</th>
                  <td class="align-right">구매</td>
                </tr>
                <tr>
                  <th>상환금리 (최저 ~ 최고)</th>
                  <td class="align-right">7.57 ~ 19%</td>
                </tr>
                <tr>
                  <th>대출원금</th>
                  <td :class="[$style['est-table__emphasis'], 'align-right']">
                    <strong>44,174,225</strong>
                  </td>
                </tr>
                <tr>
                  <th>유예금</th>
                  <td class="align-right">0</td>
                </tr>
                <tr :class="$style['est-table__emphasis']">
                  <th rowspan="2">
                    <strong>매회 리스료 (최저 ~ 최고)</strong>
                  </th>
                  <td>
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">①리스료</div>
                      <div class="flex-box__cell">1,375,500 ~ 2,330,000</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td :class="$style['est-table__left-line']">
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">②자동차세</div>
                      <div class="flex-box__cell">고객별도</div>
                    </div>
                  </td>
                </tr>
                <tr :class="$style['est-table__emphasis']">
                  <th><strong>납입 리스료 (최저 ~ 최고)</strong></th>
                  <td :class="$style['est-table__emphasis']">
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">①+②</div>
                      <div class="flex-box__cell">
                        <strong :class="$style['color-emphasis']">
                          1,375,500 ~ 2,330,000
                        </strong>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul :class="$style['est-list']">
            <li :class="[$style['est-list__item'], $style['color-emphasis']]">
              ※ 개인 고객은 금리체계 모범규준에 의거 신용조회 및 심사 후 금리가
              결정되며, 결정된 금리에 따라 월 납입금이 변동됩니다.
            </li>
          </ul>
        </div>

        <div :class="$style['est-section']">
          <div :class="[$style['est-table'], $style['est-table--secondary']]">
            <table>
              <tbody>
                <tr>
                  <th>ⓐ등록/부대비용</th>
                  <td class="align-right">3,471,540</td>
                </tr>
                <tr>
                  <th>ⓑ선납금/보증금</th>
                  <td class="align-right">100,000</td>
                </tr>
                <tr :class="$style['est-table__emphasis']">
                  <th>
                    <strong>초기납입금 (ⓐ+ⓑ)</strong>
                  </th>
                  <td :class="[$style['est-table__emphasis'], 'align-right']">
                    <strong>3,571,540</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <!-- // 취득원가 -->

      <!-- 구비서류 -->
      <section :class="$style['est-section']">
        <h2 :class="$style['est-section__title']">■ 구비서류</h2>

        <div :class="[$style['est-table'], $style['est-table--secondary']]">
          <table>
            <colgroup>
              <col style="width: 130px" />
              <col />
            </colgroup>
            <tbody>
              <tr :class="$style['est-table__emphasis']">
                <th>개인/개인사업자</th>
                <td>
                  사업자등록증 사본, 운전면허증 사본, 자동이체통장 사본<br />
                  소득금액증명원, 재산세과세증명원, 자격증 사본(전문직 한정)
                </td>
              </tr>
              <tr :class="$style['est-table__emphasis']">
                <th>필수가입</th>
                <td>
                  사업등록증 사번, 법인등기부등본 1부, 법인인감증명서 1통, 최근
                  2개년도 재무제표<br />
                  주주명부, 자동이체통장 사본<br />
                  ※ 법인의 경우 대표이사 개인입보 필수
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul :class="$style['est-list']">
          <li :class="$style['est-list__item']">
            ※ (개인/법인)인감증명서, 주민등록등본, 법인등기부등본은 계약체결시점
            3개월 이내 발급분만 인정합니다.
          </li>
          <li :class="$style['est-list__item']">
            ※ 연대보증인 필요서류도 동일합니다.
          </li>
        </ul>
      </section>
      <!-- // 구비서류 -->

      <!-- 안내 -->
      <div :class="$style['est-section']">
        <ul :class="$style['est-list']">
          <li :class="$style['est-list__item']">
            ㅇ 상기 견적은 차량가격 변동 및 리스조건에 따라 변경될 수 있으며,
            리스계약 체결 시 확정됩니다.
          </li>
          <li :class="$style['est-list__item']">
            ㅇ 차량 반납시 주행거리 및 차량상태에 따라 감가 금액이 발생할 수
            있습니다.
          </li>
          <li :class="$style['est-list__item']">
            ㅇ 중도해지 및 승계시 수수료와 부대비용이 발생합니다.
          </li>
          <li :class="$style['est-list__item']">
            ㅇ 대출 진행시 인지대 비용 5,000원이 별도 발생합니다.
          </li>
        </ul>
      </div>
      <!-- // 안내 -->
    </div>
    <!-- // Page 1 : 상품선택 1개, 연락처 표시 -->

    <!-- Page 1 : 상품선택 1개, 전기차, 연락처 표시 -->
    <div :class="$style['document']">
      <!-- head -->
      <div :class="$style['est-head']">
        <div :class="$style['est-head__left']">
          <div :class="$style['est-head__logo']"></div>
          <p :class="$style['est-head__text']">■ VIP 고객님 귀중</p>
          <p :class="$style['est-head__text']">작성일 : 2023-06-08</p>
        </div>
        <div :class="$style['est-head__center']">
          <h1 :class="$style['est-head__title']">금융리스 견적서</h1>
        </div>
        <div :class="$style['est-head__right']">
          <section :class="$style['est-name-card']">
            <h2 :class="$style['est-name-card__title']">유평우</h2>
            <dl :class="$style['est-name-card__list']">
              <div :class="$style['est-name-card__item']">
                <dt :class="$style['est-name-card__key']">소속</dt>
                <dd :class="$style['est-name-card__val']">유평우</dd>
              </div>
              <div :class="$style['est-name-card__item']">
                <dt :class="$style['est-name-card__key']">전화</dt>
                <dd :class="$style['est-name-card__val']">010-3899-5999</dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
      <!-- // head -->

      <!-- car info -->
      <div :class="$style['est-car-info']">
        <div :class="$style['est-car-info__img-area']">
          <CarThumb
            size="large"
            src="/images/_dummy/car-thumb.png"
            :classNames="{ wrap: $style['est-car-info__img'] }"
          />
          <p :class="$style['est-car-info__notice']">
            ※ 위 참고 이미지는 실제 판매모델과 다를 수 있습니다.
          </p>
        </div>
        <div :class="$style['est-car-info__contents']">
          <dl :class="$style['est-car-info__list']">
            <div :class="$style['est-car-info__item']">
              <dt :class="$style['est-car-info__key']">
                <div :class="$style['est-car-info__key-text']">모델</div>
              </dt>
              <dd :class="$style['est-car-info__val']">
                <div :class="$style['est-car-info__val-text']">
                  <strong
                    >제네시스 G70 슈팅 브레이크 2023년형 가솔린 2.5 터보 (개소세
                    5% 기준) 2WD</strong
                  ><br />
                  (45,950,000)
                </div>
              </dd>
            </div>
            <div :class="$style['est-car-info__item']">
              <dt :class="$style['est-car-info__key']">
                <div :class="$style['est-car-info__key-text']">색상</div>
              </dt>
              <dd :class="$style['est-car-info__val']">
                <div :class="$style['est-car-info__val-text']">
                  외장 : 세빌 실버(SSS)<br />
                  내장 : 옵시디언 블랙 모노톤 (옵시디언 블랙 시트)
                </div>
              </dd>
            </div>
            <div :class="$style['est-car-info__item']">
              <dt :class="$style['est-car-info__key']">
                <div :class="$style['est-car-info__key-text']">옵션</div>
              </dt>
              <dd :class="$style['est-car-info__val']">
                <div :class="$style['est-car-info__val-text']">선택 없음</div>
              </dd>
            </div>
          </dl>
          <p :class="$style['est-car-info__price']"></p>
        </div>
      </div>
      <!-- // car info -->

      <!-- 취득원가 -->
      <section :class="$style['est-section']">
        <h2 :class="$style['est-section__title']">■ 취득원가</h2>

        <div :class="$style['est-section']">
          <div :class="$style['est-layout']">
            <div :class="$style['est-layout__cell']">
              <div :class="$style['est-table']">
                <table>
                  <tbody>
                    <tr>
                      <th>기본가격</th>
                      <td class="align-right">41,100,000 원</td>
                    </tr>
                    <tr>
                      <th>옵션가격</th>
                      <td class="align-right">4,000,000 원</td>
                    </tr>
                    <tr>
                      <th>할인가격</th>
                      <td class="align-right">825,775 원</td>
                    </tr>
                    <tr>
                      <th>탁송료</th>
                      <td class="align-right">0 원</td>
                    </tr>
                    <tr :class="$style['est-table__emphasis']">
                      <th><strong>①최종 차량가</strong></th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <strong :class="$style['color-emphasis']"
                          >44,274,225 원</strong
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div :class="$style['est-layout__cell']">
              <div :class="$style['est-table']">
                <table>
                  <tbody>
                    <tr>
                      <th>취득세</th>
                      <td class="align-right">2,817,450 원</td>
                    </tr>
                    <tr>
                      <th>공채비용</th>
                      <td class="align-right">594,090 원</td>
                    </tr>
                    <tr>
                      <th>부대비용</th>
                      <td class="align-right">60,000 원</td>
                    </tr>
                    <tr>
                      <th>②등록비용 합계</th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <strong>0 원</strong>
                      </td>
                    </tr>
                    <tr>
                      <th>③선수금</th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <div class="flex-box">
                          <div class="flex-box__cell">0.00%</div>
                          <div class="flex-box__cell flex-1">
                            <strong>100,000 원</strong>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>④보조금</th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <strong>0 원</strong>
                      </td>
                    </tr>
                    <tr :class="$style['est-table__emphasis']">
                      <th><strong>취득원가(①+②-③-④)</strong></th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <strong :class="$style['color-emphasis']"
                          >44,274,225 원</strong
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <ul :class="$style['est-list']">
            <li :class="[$style['est-list__item'], $style['color-emphasis']]">
              ※ 자동차 시가표준액을 기반으로 취득세 금액에 차액이 발생될 수
              있습니다. 공채비용은 실제 등록 시점에 따라 차이가 발생할 수
              있습니다.
            </li>
          </ul>
        </div>

        <div :class="$style['est-section']">
          <div :class="$style['est-table']">
            <table>
              <tbody>
                <tr>
                  <th>리스 기간</th>
                  <td class="align-right"><strong>36개월</strong></td>
                </tr>
                <tr>
                  <th>만기처리</th>
                  <td class="align-right">구매</td>
                </tr>
                <tr>
                  <th>상환금리 (최저 ~ 최고)</th>
                  <td class="align-right">7.57 ~ 19%</td>
                </tr>
                <tr>
                  <th>대출원금</th>
                  <td :class="[$style['est-table__emphasis'], 'align-right']">
                    <strong>44,174,225</strong>
                  </td>
                </tr>
                <tr>
                  <th>유예금</th>
                  <td class="align-right">0</td>
                </tr>
                <tr :class="$style['est-table__emphasis']">
                  <th rowspan="2">
                    <strong>매회 리스료 (최저 ~ 최고)</strong>
                  </th>
                  <td>
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">①리스료</div>
                      <div class="flex-box__cell">1,375,500 ~ 2,330,000</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td :class="$style['est-table__left-line']">
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">②자동차세</div>
                      <div class="flex-box__cell">고객별도</div>
                    </div>
                  </td>
                </tr>
                <tr :class="$style['est-table__emphasis']">
                  <th><strong>납입 리스료 (최저 ~ 최고)</strong></th>
                  <td :class="$style['est-table__emphasis']">
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">①+②</div>
                      <div class="flex-box__cell">
                        <strong :class="$style['color-emphasis']">
                          1,375,500 ~ 2,330,000
                        </strong>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul :class="$style['est-list']">
            <li :class="[$style['est-list__item'], $style['color-emphasis']]">
              ※ 개인 고객은 금리체계 모범규준에 의거 신용조회 및 심사 후 금리가
              결정되며, 결정된 금리에 따라 월 납입금이 변동됩니다.
            </li>
          </ul>
        </div>

        <div :class="$style['est-section']">
          <div :class="[$style['est-table'], $style['est-table--secondary']]">
            <table>
              <tbody>
                <tr>
                  <th>ⓐ등록/부대비용</th>
                  <td class="align-right">3,471,540</td>
                </tr>
                <tr>
                  <th>ⓑ선납금/보증금</th>
                  <td class="align-right">100,000</td>
                </tr>
                <tr :class="$style['est-table__emphasis']">
                  <th>
                    <strong>초기납입금 (ⓐ+ⓑ)</strong>
                  </th>
                  <td :class="[$style['est-table__emphasis'], 'align-right']">
                    <strong>3,571,540</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <!-- // 취득원가 -->

      <!-- 구비서류 -->
      <section :class="$style['est-section']">
        <h2 :class="$style['est-section__title']">■ 구비서류</h2>

        <div :class="[$style['est-table'], $style['est-table--secondary']]">
          <table>
            <colgroup>
              <col style="width: 130px" />
              <col />
            </colgroup>
            <tbody>
              <tr :class="$style['est-table__emphasis']">
                <th>개인/개인사업자</th>
                <td>
                  사업자등록증 사본, 운전면허증 사본, 자동이체통장 사본<br />
                  소득금액증명원, 재산세과세증명원, 자격증 사본(전문직 한정)
                </td>
              </tr>
              <tr :class="$style['est-table__emphasis']">
                <th>필수가입</th>
                <td>
                  사업등록증 사번, 법인등기부등본 1부, 법인인감증명서 1통, 최근
                  2개년도 재무제표<br />
                  주주명부, 자동이체통장 사본<br />
                  ※ 법인의 경우 대표이사 개인입보 필수
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul :class="$style['est-list']">
          <li :class="$style['est-list__item']">
            ※ (개인/법인)인감증명서, 주민등록등본, 법인등기부등본은 계약체결시점
            3개월 이내 발급분만 인정합니다.
          </li>
          <li :class="$style['est-list__item']">
            ※ 연대보증인 필요서류도 동일합니다.
          </li>
        </ul>
      </section>
      <!-- // 구비서류 -->

      <!-- 안내 -->
      <div :class="$style['est-section']">
        <ul :class="$style['est-list']">
          <li :class="$style['est-list__item']">
            ㅇ 상기 견적은 차량가격 변동 및 리스조건에 따라 변경될 수 있으며,
            리스계약 체결 시 확정됩니다.
          </li>
          <li :class="$style['est-list__item']">
            ㅇ 차량 반납시 주행거리 및 차량상태에 따라 감가 금액이 발생할 수
            있습니다.
          </li>
          <li :class="$style['est-list__item']">
            ㅇ 중도해지 및 승계시 수수료와 부대비용이 발생합니다.
          </li>
          <li :class="$style['est-list__item']">
            ㅇ 대출 진행시 인지대 비용 5,000원이 별도 발생합니다.
          </li>
        </ul>
      </div>
      <!-- // 안내 -->
    </div>
    <!-- //Page 1 : 상품선택 1개, 전기차, 연락처 표시 -->

    <!-- Page 1 : 상품선택 2개, 연락처 표시 -->
    <div :class="$style['document']">
      <!-- head -->
      <div :class="$style['est-head']">
        <div :class="$style['est-head__left']">
          <div :class="$style['est-head__logo']"></div>
          <p :class="$style['est-head__text']">■ VIP 고객님 귀중</p>
          <p :class="$style['est-head__text']">작성일 : 2023-06-08</p>
        </div>
        <div :class="$style['est-head__center']">
          <h1 :class="$style['est-head__title']">금융리스 견적서</h1>
        </div>
        <div :class="$style['est-head__right']">
          <section :class="$style['est-name-card']">
            <h2 :class="$style['est-name-card__title']">유평우</h2>
            <dl :class="$style['est-name-card__list']">
              <div :class="$style['est-name-card__item']">
                <dt :class="$style['est-name-card__key']">소속</dt>
                <dd :class="$style['est-name-card__val']">유평우</dd>
              </div>
              <div :class="$style['est-name-card__item']">
                <dt :class="$style['est-name-card__key']">전화</dt>
                <dd :class="$style['est-name-card__val']">010-3899-5999</dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
      <!-- // head -->

      <!-- car info -->
      <div :class="$style['est-car-info']">
        <div :class="$style['est-car-info__img-area']">
          <CarThumb
            size="large"
            src="/images/_dummy/car-thumb.png"
            :classNames="{ wrap: $style['est-car-info__img'] }"
          />
          <p :class="$style['est-car-info__notice']">
            ※ 위 참고 이미지는 실제 판매모델과 다를 수 있습니다.
          </p>
        </div>
        <div :class="$style['est-car-info__contents']">
          <dl :class="$style['est-car-info__list']">
            <div :class="$style['est-car-info__item']">
              <dt :class="$style['est-car-info__key']">
                <div :class="$style['est-car-info__key-text']">모델</div>
              </dt>
              <dd :class="$style['est-car-info__val']">
                <div :class="$style['est-car-info__val-text']">
                  <strong
                    >제네시스 G70 슈팅 브레이크 2023년형 가솔린 2.5 터보 (개소세
                    5% 기준) 2WD</strong
                  ><br />
                  (45,950,000)
                </div>
              </dd>
            </div>
            <div :class="$style['est-car-info__item']">
              <dt :class="$style['est-car-info__key']">
                <div :class="$style['est-car-info__key-text']">색상</div>
              </dt>
              <dd :class="$style['est-car-info__val']">
                <div :class="$style['est-car-info__val-text']">
                  외장 : 세빌 실버(SSS)<br />
                  내장 : 옵시디언 블랙 모노톤 (옵시디언 블랙 시트)
                </div>
              </dd>
            </div>
            <div :class="$style['est-car-info__item']">
              <dt :class="$style['est-car-info__key']">
                <div :class="$style['est-car-info__key-text']">옵션</div>
              </dt>
              <dd :class="$style['est-car-info__val']">
                <div :class="$style['est-car-info__val-text']">선택 없음</div>
              </dd>
            </div>
          </dl>
          <p :class="$style['est-car-info__price']"></p>
        </div>
      </div>
      <!-- // car info -->

      <!-- 취득원가 -->
      <section :class="$style['est-section']">
        <h2 :class="$style['est-section__title']">■ 취득원가</h2>

        <div :class="$style['est-section']">
          <div :class="$style['est-layout']">
            <div :class="$style['est-layout__cell']">
              <div :class="$style['est-table']">
                <table>
                  <tbody>
                    <tr>
                      <th>기본가격</th>
                      <td class="align-right">41,100,000 원</td>
                    </tr>
                    <tr>
                      <th>옵션가격</th>
                      <td class="align-right">4,000,000 원</td>
                    </tr>
                    <tr>
                      <th>할인가격</th>
                      <td class="align-right">825,775 원</td>
                    </tr>
                    <tr>
                      <th>탁송료</th>
                      <td class="align-right">0 원</td>
                    </tr>
                    <tr :class="$style['est-table__emphasis']">
                      <th><strong>①최종 차량가</strong></th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <strong :class="$style['color-emphasis']"
                          >44,274,225 원</strong
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div :class="$style['est-layout__cell']">
              <div :class="$style['est-table']">
                <table>
                  <tbody>
                    <tr>
                      <th>취득세</th>
                      <td class="align-right">2,817,450 원</td>
                    </tr>
                    <tr>
                      <th>공채비용</th>
                      <td class="align-right">594,090 원</td>
                    </tr>
                    <tr>
                      <th>부대비용</th>
                      <td class="align-right">60,000 원</td>
                    </tr>
                    <tr>
                      <th>②등록비용 합계</th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <strong>0 원</strong>
                      </td>
                    </tr>
                    <tr>
                      <th>③선수금</th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <div class="flex-box">
                          <div class="flex-box__cell">0.00%</div>
                          <div class="flex-box__cell flex-1">
                            <strong>100,000 원</strong>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr :class="$style['est-table__emphasis']">
                      <th><strong>취득원가(①+②-③)</strong></th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <strong :class="$style['color-emphasis']"
                          >44,274,225 원</strong
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <ul :class="$style['est-list']">
            <li :class="[$style['est-list__item'], $style['color-emphasis']]">
              ※ 자동차 시가표준액을 기반으로 취득세 금액에 차액이 발생될 수
              있습니다. 공채비용은 실제 등록 시점에 따라 차이가 발생할 수
              있습니다.
            </li>
          </ul>
        </div>

        <div :class="$style['est-section']">
          <div :class="$style['est-table']">
            <table>
              <tbody>
                <tr>
                  <th>리스 기간</th>
                  <td class="align-right"><strong>36개월</strong></td>
                  <td class="align-right"><strong>36개월</strong></td>
                </tr>
                <tr>
                  <th>만기처리</th>
                  <td class="align-right">구매</td>
                  <td class="align-right">구매</td>
                </tr>
                <tr>
                  <th>상환금리 (최저 ~ 최고)</th>
                  <td class="align-right">7.57 ~ 19%</td>
                  <td class="align-right">7.57 ~ 19%</td>
                </tr>
                <tr>
                  <th>대출원금</th>
                  <td :class="[$style['est-table__emphasis'], 'align-right']">
                    <strong>44,174,225</strong>
                  </td>
                  <td :class="[$style['est-table__emphasis'], 'align-right']">
                    <strong>44,174,225</strong>
                  </td>
                </tr>
                <tr>
                  <th>유예금</th>
                  <td class="align-right">0</td>
                  <td class="align-right">0</td>
                </tr>
                <tr :class="$style['est-table__emphasis']">
                  <th rowspan="2">
                    <strong>매회 리스료 (최저 ~ 최고)</strong>
                  </th>
                  <td>
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">①리스료</div>
                      <div class="flex-box__cell">1,375,500 ~ 2,330,000</div>
                    </div>
                  </td>
                  <td>
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">①리스료</div>
                      <div class="flex-box__cell">1,375,500 ~ 2,330,000</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td :class="$style['est-table__left-line']">
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">②자동차세</div>
                      <div class="flex-box__cell">고객별도</div>
                    </div>
                  </td>
                  <td>
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">②자동차세</div>
                      <div class="flex-box__cell">고객별도</div>
                    </div>
                  </td>
                </tr>
                <tr :class="$style['est-table__emphasis']">
                  <th><strong>납입 리스료 (최저 ~ 최고)</strong></th>
                  <td :class="$style['est-table__emphasis']">
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">①+②</div>
                      <div class="flex-box__cell">
                        <strong :class="$style['color-emphasis']">
                          1,375,500 ~ 2,330,000
                        </strong>
                      </div>
                    </div>
                  </td>
                  <td :class="$style['est-table__emphasis']">
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">①+②</div>
                      <div class="flex-box__cell">
                        <strong :class="$style['color-emphasis']">
                          1,375,500 ~ 2,330,000
                        </strong>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul :class="$style['est-list']">
            <li :class="[$style['est-list__item'], $style['color-emphasis']]">
              ※ 개인 고객은 금리체계 모범규준에 의거 신용조회 및 심사 후 금리가
              결정되며, 결정된 금리에 따라 월 납입금이 변동됩니다.
            </li>
          </ul>
        </div>

        <div :class="$style['est-section']">
          <div :class="[$style['est-table'], $style['est-table--secondary']]">
            <table>
              <tbody>
                <tr>
                  <th>ⓐ등록/부대비용</th>
                  <td class="align-right">3,471,540</td>
                  <td class="align-right">3,471,540</td>
                </tr>
                <tr>
                  <th>ⓑ선납금/보증금</th>
                  <td class="align-right">100,000</td>
                  <td class="align-right">100,000</td>
                </tr>
                <tr :class="$style['est-table__emphasis']">
                  <th>
                    <strong>초기납입금 (ⓐ+ⓑ)</strong>
                  </th>
                  <td :class="[$style['est-table__emphasis'], 'align-right']">
                    <strong>3,571,540</strong>
                  </td>
                  <td :class="[$style['est-table__emphasis'], 'align-right']">
                    <strong>3,571,540</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <!-- // 취득원가 -->

      <!-- 구비서류 -->
      <section :class="$style['est-section']">
        <h2 :class="$style['est-section__title']">■ 구비서류</h2>

        <div :class="[$style['est-table'], $style['est-table--secondary']]">
          <table>
            <colgroup>
              <col style="width: 130px" />
              <col />
            </colgroup>
            <tbody>
              <tr :class="$style['est-table__emphasis']">
                <th>개인/개인사업자</th>
                <td>
                  사업자등록증 사본, 운전면허증 사본, 자동이체통장 사본<br />
                  소득금액증명원, 재산세과세증명원, 자격증 사본(전문직 한정)
                </td>
              </tr>
              <tr :class="$style['est-table__emphasis']">
                <th>필수가입</th>
                <td>
                  사업등록증 사번, 법인등기부등본 1부, 법인인감증명서 1통, 최근
                  2개년도 재무제표<br />
                  주주명부, 자동이체통장 사본<br />
                  ※ 법인의 경우 대표이사 개인입보 필수
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul :class="$style['est-list']">
          <li :class="$style['est-list__item']">
            ※ (개인/법인)인감증명서, 주민등록등본, 법인등기부등본은 계약체결시점
            3개월 이내 발급분만 인정합니다.
          </li>
          <li :class="$style['est-list__item']">
            ※ 연대보증인 필요서류도 동일합니다.
          </li>
        </ul>
      </section>
      <!-- // 구비서류 -->

      <!-- 안내 -->
      <div :class="$style['est-section']">
        <ul :class="$style['est-list']">
          <li :class="$style['est-list__item']">
            ㅇ 상기 견적은 차량가격 변동 및 리스조건에 따라 변경될 수 있으며,
            리스계약 체결 시 확정됩니다.
          </li>
          <li :class="$style['est-list__item']">
            ㅇ 차량 반납시 주행거리 및 차량상태에 따라 감가 금액이 발생할 수
            있습니다.
          </li>
          <li :class="$style['est-list__item']">
            ㅇ 중도해지 및 승계시 수수료와 부대비용이 발생합니다.
          </li>
          <li :class="$style['est-list__item']">
            ㅇ 대출 진행시 인지대 비용 5,000원이 별도 발생합니다.
          </li>
        </ul>
      </div>
      <!-- // 안내 -->
    </div>
    <!-- // Page 1 : 상품선택 2개, 연락처 표시 -->

    <!-- Page 1 : 상품선택 3개, 연락처 표시 -->
    <div :class="$style['document']">
      <!-- head -->
      <div :class="$style['est-head']">
        <div :class="$style['est-head__left']">
          <div :class="$style['est-head__logo']"></div>
          <p :class="$style['est-head__text']">■ VIP 고객님 귀중</p>
          <p :class="$style['est-head__text']">작성일 : 2023-06-08</p>
        </div>
        <div :class="$style['est-head__center']">
          <h1 :class="$style['est-head__title']">금융리스 견적서</h1>
        </div>
        <div :class="$style['est-head__right']">
          <section :class="$style['est-name-card']">
            <h2 :class="$style['est-name-card__title']">유평우</h2>
            <dl :class="$style['est-name-card__list']">
              <div :class="$style['est-name-card__item']">
                <dt :class="$style['est-name-card__key']">소속</dt>
                <dd :class="$style['est-name-card__val']">유평우</dd>
              </div>
              <div :class="$style['est-name-card__item']">
                <dt :class="$style['est-name-card__key']">전화</dt>
                <dd :class="$style['est-name-card__val']">010-3899-5999</dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
      <!-- // head -->

      <!-- car info -->
      <div :class="$style['est-car-info']">
        <div :class="$style['est-car-info__img-area']">
          <CarThumb
            size="large"
            src="/images/_dummy/car-thumb.png"
            :classNames="{ wrap: $style['est-car-info__img'] }"
          />
          <p :class="$style['est-car-info__notice']">
            ※ 위 참고 이미지는 실제 판매모델과 다를 수 있습니다.
          </p>
        </div>
        <div :class="$style['est-car-info__contents']">
          <dl :class="$style['est-car-info__list']">
            <div :class="$style['est-car-info__item']">
              <dt :class="$style['est-car-info__key']">
                <div :class="$style['est-car-info__key-text']">모델</div>
              </dt>
              <dd :class="$style['est-car-info__val']">
                <div :class="$style['est-car-info__val-text']">
                  <strong
                    >제네시스 G70 슈팅 브레이크 2023년형 가솔린 2.5 터보 (개소세
                    5% 기준) 2WD</strong
                  ><br />
                  (45,950,000)
                </div>
              </dd>
            </div>
            <div :class="$style['est-car-info__item']">
              <dt :class="$style['est-car-info__key']">
                <div :class="$style['est-car-info__key-text']">색상</div>
              </dt>
              <dd :class="$style['est-car-info__val']">
                <div :class="$style['est-car-info__val-text']">
                  외장 : 세빌 실버(SSS)<br />
                  내장 : 옵시디언 블랙 모노톤 (옵시디언 블랙 시트)
                </div>
              </dd>
            </div>
            <div :class="$style['est-car-info__item']">
              <dt :class="$style['est-car-info__key']">
                <div :class="$style['est-car-info__key-text']">옵션</div>
              </dt>
              <dd :class="$style['est-car-info__val']">
                <div :class="$style['est-car-info__val-text']">선택 없음</div>
              </dd>
            </div>
          </dl>
          <p :class="$style['est-car-info__price']"></p>
        </div>
      </div>
      <!-- // car info -->

      <!-- 취득원가 -->
      <section :class="$style['est-section']">
        <h2 :class="$style['est-section__title']">■ 취득원가</h2>

        <div :class="$style['est-section']">
          <div :class="$style['est-layout']">
            <div :class="$style['est-layout__cell']">
              <div :class="$style['est-table']">
                <table>
                  <tbody>
                    <tr>
                      <th>기본가격</th>
                      <td class="align-right">41,100,000 원</td>
                    </tr>
                    <tr>
                      <th>옵션가격</th>
                      <td class="align-right">4,000,000 원</td>
                    </tr>
                    <tr>
                      <th>할인가격</th>
                      <td class="align-right">825,775 원</td>
                    </tr>
                    <tr>
                      <th>탁송료</th>
                      <td class="align-right">0 원</td>
                    </tr>
                    <tr :class="$style['est-table__emphasis']">
                      <th><strong>①최종 차량가</strong></th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <strong :class="$style['color-emphasis']"
                          >44,274,225 원</strong
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div :class="$style['est-layout__cell']">
              <div :class="$style['est-table']">
                <table>
                  <tbody>
                    <tr>
                      <th>취득세</th>
                      <td class="align-right">2,817,450 원</td>
                    </tr>
                    <tr>
                      <th>공채비용</th>
                      <td class="align-right">594,090 원</td>
                    </tr>
                    <tr>
                      <th>부대비용</th>
                      <td class="align-right">60,000 원</td>
                    </tr>
                    <tr>
                      <th>②등록비용 합계</th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <strong>0 원</strong>
                      </td>
                    </tr>
                    <tr>
                      <th>③선수금</th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <div class="flex-box">
                          <div class="flex-box__cell">0.00%</div>
                          <div class="flex-box__cell flex-1">
                            <strong>100,000 원</strong>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr :class="$style['est-table__emphasis']">
                      <th><strong>취득원가(①+②-③)</strong></th>
                      <td
                        :class="[$style['est-table__emphasis'], 'align-right']"
                      >
                        <strong :class="$style['color-emphasis']"
                          >44,274,225 원</strong
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <ul :class="$style['est-list']">
            <li :class="[$style['est-list__item'], $style['color-emphasis']]">
              ※ 자동차 시가표준액을 기반으로 취득세 금액에 차액이 발생될 수
              있습니다. 공채비용은 실제 등록 시점에 따라 차이가 발생할 수
              있습니다.
            </li>
          </ul>
        </div>

        <div :class="$style['est-section']">
          <div :class="$style['est-table']">
            <table>
              <tbody>
                <tr>
                  <th>리스 기간</th>
                  <td class="align-right"><strong>36개월</strong></td>
                  <td class="align-right"><strong>36개월</strong></td>
                  <td class="align-right"><strong>36개월</strong></td>
                </tr>
                <tr>
                  <th>만기처리</th>
                  <td class="align-right">구매</td>
                  <td class="align-right">구매</td>
                  <td class="align-right">구매</td>
                </tr>
                <tr>
                  <th>상환금리 (최저 ~ 최고)</th>
                  <td class="align-right">7.57 ~ 19%</td>
                  <td class="align-right">7.57 ~ 19%</td>
                  <td class="align-right"></td>
                </tr>
                <tr>
                  <th>대출원금</th>
                  <td :class="[$style['est-table__emphasis'], 'align-right']">
                    <strong>44,174,225</strong>
                  </td>
                  <td :class="[$style['est-table__emphasis'], 'align-right']">
                    <strong>44,174,225</strong>
                  </td>
                  <td :class="[$style['est-table__emphasis'], 'align-right']">
                    <strong>44,174,225</strong>
                  </td>
                </tr>
                <tr>
                  <th>유예금</th>
                  <td class="align-right">0</td>
                  <td class="align-right">0</td>
                  <td class="align-right">0</td>
                </tr>
                <tr :class="$style['est-table__emphasis']">
                  <th rowspan="2">
                    <strong>매회 리스료 (최저 ~ 최고)</strong>
                  </th>
                  <td>
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">①리스료</div>
                      <div class="flex-box__cell align-right">
                        1,375,500 ~<br />
                        2,330,000
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">①리스료</div>
                      <div class="flex-box__cell align-right">
                        1,375,500 ~<br />
                        2,330,000
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">①리스료</div>
                      <div class="flex-box__cell">-</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td :class="$style['est-table__left-line']">
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">②자동차세</div>
                      <div class="flex-box__cell">고객별도</div>
                    </div>
                  </td>
                  <td>
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">②자동차세</div>
                      <div class="flex-box__cell">고객별도</div>
                    </div>
                  </td>
                  <td>
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">②자동차세</div>
                      <div class="flex-box__cell">-</div>
                    </div>
                  </td>
                </tr>
                <tr :class="$style['est-table__emphasis']">
                  <th><strong>납입 리스료 (최저 ~ 최고)</strong></th>
                  <td :class="$style['est-table__emphasis']">
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">①+②</div>
                      <div class="flex-box__cell align-right">
                        <strong :class="$style['color-emphasis']">
                          1,375,500 ~<br />
                          2,330,000
                        </strong>
                      </div>
                    </div>
                  </td>
                  <td :class="$style['est-table__emphasis']">
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">①+②</div>
                      <div class="flex-box__cell align-right">
                        <strong :class="$style['color-emphasis']">
                          1,375,500 ~<br />
                          2,330,000
                        </strong>
                      </div>
                    </div>
                  </td>
                  <td :class="$style['est-table__emphasis']">
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">①+②</div>
                      <div class="flex-box__cell align-right">
                        <strong :class="$style['color-emphasis']">
                          1,375,500 ~<br />
                          2,330,000
                        </strong>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul :class="$style['est-list']">
            <li :class="[$style['est-list__item'], $style['color-emphasis']]">
              ※ 개인 고객은 금리체계 모범규준에 의거 신용조회 및 심사 후 금리가
              결정되며, 결정된 금리에 따라 월 납입금이 변동됩니다.
            </li>
          </ul>
        </div>

        <div :class="$style['est-section']">
          <div :class="[$style['est-table'], $style['est-table--secondary']]">
            <table>
              <tbody>
                <tr>
                  <th>ⓐ등록/부대비용</th>
                  <td class="align-right">3,471,540</td>
                  <td class="align-right">3,471,540</td>
                  <td class="align-right">3,471,540</td>
                </tr>
                <tr>
                  <th>ⓑ선납금/보증금</th>
                  <td class="align-right">100,000</td>
                  <td class="align-right">100,000</td>
                  <td class="align-right">100,000</td>
                </tr>
                <tr :class="$style['est-table__emphasis']">
                  <th>
                    <strong>초기납입금 (ⓐ+ⓑ)</strong>
                  </th>
                  <td :class="[$style['est-table__emphasis'], 'align-right']">
                    <strong>3,571,540</strong>
                  </td>
                  <td :class="[$style['est-table__emphasis'], 'align-right']">
                    <strong>3,571,540</strong>
                  </td>
                  <td :class="[$style['est-table__emphasis'], 'align-right']">
                    <strong>3,571,540</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <!-- // 취득원가 -->

      <!-- 구비서류 -->
      <section :class="$style['est-section']">
        <h2 :class="$style['est-section__title']">■ 구비서류</h2>

        <div :class="[$style['est-table'], $style['est-table--secondary']]">
          <table>
            <colgroup>
              <col style="width: 130px" />
              <col />
            </colgroup>
            <tbody>
              <tr :class="$style['est-table__emphasis']">
                <th>개인/개인사업자</th>
                <td>
                  사업자등록증 사본, 운전면허증 사본, 자동이체통장 사본<br />
                  소득금액증명원, 재산세과세증명원, 자격증 사본(전문직 한정)
                </td>
              </tr>
              <tr :class="$style['est-table__emphasis']">
                <th>필수가입</th>
                <td>
                  사업등록증 사번, 법인등기부등본 1부, 법인인감증명서 1통, 최근
                  2개년도 재무제표<br />
                  주주명부, 자동이체통장 사본<br />
                  ※ 법인의 경우 대표이사 개인입보 필수
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <ul :class="$style['est-list']">
          <li :class="$style['est-list__item']">
            ※ (개인/법인)인감증명서, 주민등록등본, 법인등기부등본은 계약체결시점
            3개월 이내 발급분만 인정합니다.
          </li>
          <li :class="$style['est-list__item']">
            ※ 연대보증인 필요서류도 동일합니다.
          </li>
        </ul>
      </section>
      <!-- // 구비서류 -->

      <!-- 안내 -->
      <div :class="$style['est-section']">
        <ul :class="$style['est-list']">
          <li :class="$style['est-list__item']">
            ㅇ 상기 견적은 차량가격 변동 및 리스조건에 따라 변경될 수 있으며,
            리스계약 체결 시 확정됩니다.
          </li>
          <li :class="$style['est-list__item']">
            ㅇ 차량 반납시 주행거리 및 차량상태에 따라 감가 금액이 발생할 수
            있습니다.
          </li>
          <li :class="$style['est-list__item']">
            ㅇ 중도해지 및 승계시 수수료와 부대비용이 발생합니다.
          </li>
          <li :class="$style['est-list__item']">
            ㅇ 대출 진행시 인지대 비용 5,000원이 별도 발생합니다.
          </li>
        </ul>
      </div>
      <!-- // 안내 -->
    </div>
    <!-- // Page 1 : 상품선택 3개, 연락처 표시 -->
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/document/DocumentEstimate003Contents.scss';
</style>
