<script>
// 할부금융 견적서
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
          <h1 :class="$style['est-head__title']">할부금융 견적서</h1>
        </div>
        <div :class="$style['est-head__right']"></div>
      </div>
      <!-- // head -->

      <!-- content -->
      <section :class="$style['est-table__basic']">
        <div :class="$style['est-table__thumb']">
          <div :class="$style['est-table__image']">
            <CarThumb size="large" src="/images/_dummy/car-thumb.png" />
          </div>
          <p :class="$style['est-table__text']">
            ※ 위 참고 이미지는 실제 판매모델과 다를 수 있습니다.
          </p>
        </div>
        <div :class="$style['est-table__information']">
          <table>
            <colgroup>
              <col style="width: 54px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>모델</th>
                <td>
                  <div>
                    <strong>
                      제네시스 G70 슈팅 브레이크 2023년형 가솔린 2.5 터보
                      (개소세 5% 기준) 2WD
                    </strong>
                  </div>
                  <div>(45,950,000)</div>
                </td>
              </tr>
              <tr>
                <th>색상</th>
                <td>
                  <div>외장 : 세빌 실버(SSS)</div>
                  <div>내장 : 옵시디언 블랙 모노톤 (옵시디언 블랙 시트)</div>
                </td>
              </tr>
              <tr>
                <th>옵션</th>
                <td>선택 없음</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
      <section>
        <p :class="$style['est-table__title']">■ 취득원가</p>

        <div :class="$style['acquisition-cost']">
          <div :class="$style['acquisition-cost__left']">
            <div :class="$style['est-table__acquisition']">
              <table :class="$style['est-table']">
                <colgroup>
                  <col style="width: 50%" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>기본가격</th>
                    <td>41,100,000 원</td>
                  </tr>
                  <tr>
                    <th>옵션가격</th>
                    <td>0원</td>
                  </tr>
                  <tr>
                    <th>할인가격</th>
                    <td>825,775 원</td>
                  </tr>
                </tbody>
                <tfoot :class="$style['est-table__emphasis']">
                  <tr>
                    <th>①최종 차량가</th>
                    <td :class="$style['est-table__amount-related']">
                      <div class="flex-box">
                        <div class="flex-box__cell flex-1 align-left"></div>
                        <div class="flex-box__cell">
                          <strong :class="$style['est-table__important']"
                            >44,274,225 원</strong
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div :class="$style['acquisition-cost__right']">
            <div :class="$style['est-table__acquisition']">
              <table :class="$style['est-table']">
                <colgroup>
                  <col style="width: 50%" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>취득세</th>
                    <td>2,817,450 원</td>
                  </tr>
                  <tr>
                    <th>공채비용</th>
                    <td>0 원</td>
                  </tr>
                  <tr>
                    <th>부대비용</th>
                    <td>60,000 원</td>
                  </tr>
                  <tr>
                    <th>②등록비용 합계</th>
                    <td :class="$style['est-table__amount-related']">
                      <strong>2,817,450 원</strong>
                    </td>
                  </tr>
                </tbody>
                <tfoot :class="$style['est-table__emphasis']">
                  <tr>
                    <th>총 소요비용(①+②)</th>
                    <td :class="$style['est-table__amount-related']">
                      <div class="flex-box">
                        <div class="flex-box__cell flex-1 align-left"></div>
                        <div class="flex-box__cell">
                          <strong :class="$style['est-table__important']"
                            >44,274,225 원</strong
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <p :class="$style['est-table__emphasis-text']">
              ※ 공채비용은 실제 등록 시점 따라 차이가 발생할 수 있습니다.
            </p>
          </div>
        </div>

        <div :class="$style['est-table__acquisition']">
          <table :class="$style['est-table']">
            <colgroup>
              <col style="width: 50%" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>대출 원금</th>
                <td><strong>174,710,000</strong></td>
              </tr>
              <tr>
                <th>선수금</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">10%</div>
                    <div class="flex-box__cell">1,810,000</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>이용기간</th>
                <td><strong>36개월</strong></td>
              </tr>
              <tr>
                <th>상환 금리 (최저-최고)</th>
                <td>9.2~11.9%</td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <th>월 납입금 (최저-최고)</th>
                <td :class="$style['est-table__amount-related']">
                  <strong :class="$style['est-table__important']"
                    >5,572,000 ~ 5,794,530</strong
                  >
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p :class="$style['est-table__emphasis-text']">
          ※ 개인 고객은 금리체계 모범규준에 의거 신용조회 및 심사 후 금리가
          결정되며, 결정된 금리에 따라 월 납입금이 변동됩니다.
        </p>
        <div :class="$style['est-table__assistant']">
          <table :class="$style['est-table']">
            <colgroup>
              <col style="width: 50%" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>ⓐ고객부담 인지세</th>
                <td>60,000</td>
              </tr>
              <tr>
                <th>ⓑ등록비</th>
                <td>4,426,000</td>
              </tr>
              <tr>
                <th>ⓒ선수금</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">10%</div>
                    <div class="flex-box__cell">1,810,000</div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th :class="$style['est-table__amount-related']">
                  초기납입금 (ⓐ+ⓑ+ⓒ)
                </th>
                <td :class="$style['est-table__amount-related']">
                  <strong>4,486,000</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
      <section class="row-margin-item-regular">
        <p :class="$style['est-table__title']">■ 구비서류</p>
        <div :class="$style['est-table__assistant']">
          <table
            :class="[
              $style['est-table'],
              $style['est-table__required-documents'],
            ]"
          >
            <colgroup>
              <col style="width: 130px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>개인/개인사업자</th>
                <td>
                  사업자등록증 사본, 운전면허증 사본, 자동이체통장 사본<br />
                  소득금액증명원, 재산세과세증명원, 자격증 사본(전문직 한정)
                </td>
              </tr>
              <tr>
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
        <ul :class="$style['required-documents__list']">
          <li>
            ※ (개인/법인)인감증명서, 주민등록등본, 법인등기부등본은 계약체결시점
            3개월 이내 발급분만 인정합니다.
          </li>
          <li>※ 연대보증인 필요서류도 동일합니다.</li>
        </ul>
      </section>
      <!-- //content -->
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
          <h1 :class="$style['est-head__title']">할부금융 견적서</h1>
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

      <!-- content -->
      <section :class="$style['est-table__basic']">
        <div :class="$style['est-table__thumb']">
          <div :class="$style['est-table__image']">
            <CarThumb size="large" src="/images/_dummy/car-thumb.png" />
          </div>
          <p :class="$style['est-table__text']">
            ※ 위 참고 이미지는 실제 판매모델과 다를 수 있습니다.
          </p>
        </div>
        <div :class="$style['est-table__information']">
          <table>
            <colgroup>
              <col style="width: 54px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>모델</th>
                <td>
                  <div>
                    <strong>
                      제네시스 G70 슈팅 브레이크 2023년형 가솔린 2.5 터보
                      (개소세 5% 기준) 2WD
                    </strong>
                  </div>
                  <div>(45,950,000)</div>
                </td>
              </tr>
              <tr>
                <th>색상</th>
                <td>
                  <div>외장 : 세빌 실버(SSS)</div>
                  <div>내장 : 옵시디언 블랙 모노톤 (옵시디언 블랙 시트)</div>
                </td>
              </tr>
              <tr>
                <th>옵션</th>
                <td>선택 없음</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
      <section>
        <p :class="$style['est-table__title']">■ 취득원가</p>

        <div :class="$style['acquisition-cost']">
          <div :class="$style['acquisition-cost__left']">
            <div :class="$style['est-table__acquisition']">
              <table :class="$style['est-table']">
                <colgroup>
                  <col style="width: 50%" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>기본가격</th>
                    <td>41,100,000 원</td>
                  </tr>
                  <tr>
                    <th>옵션가격</th>
                    <td>0 원</td>
                  </tr>
                  <tr>
                    <th>할인가격</th>
                    <td>825,775 원</td>
                  </tr>
                </tbody>
                <tfoot :class="$style['est-table__emphasis']">
                  <tr>
                    <th>①최종 차량가</th>
                    <td :class="$style['est-table__amount-related']">
                      <div class="flex-box">
                        <div class="flex-box__cell flex-1 align-left"></div>
                        <div class="flex-box__cell">
                          <strong :class="$style['est-table__important']"
                            >44,274,225 원</strong
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div :class="$style['acquisition-cost__right']">
            <div :class="$style['est-table__acquisition']">
              <table :class="$style['est-table']">
                <colgroup>
                  <col style="width: 50%" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>취득세</th>
                    <td>2,817,450 원</td>
                  </tr>
                  <tr>
                    <th>공채비용</th>
                    <td>0 원</td>
                  </tr>
                  <tr>
                    <th>부대비용</th>
                    <td>60,000 원</td>
                  </tr>
                  <tr>
                    <th>②등록비용 합계</th>
                    <td :class="$style['est-table__amount-related']">
                      <strong>2,817,450 원</strong>
                    </td>
                  </tr>
                </tbody>
                <tfoot :class="$style['est-table__emphasis']">
                  <tr>
                    <th>총 소요비용(①+②)</th>
                    <td :class="$style['est-table__amount-related']">
                      <div class="flex-box">
                        <div class="flex-box__cell flex-1 align-left"></div>
                        <div class="flex-box__cell">
                          <strong :class="$style['est-table__important']"
                            >44,274,225 원</strong
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <p :class="$style['est-table__emphasis-text']">
              ※ 공채비용은 실제 등록 시점 따라 차이가 발생할 수 있습니다.
            </p>
          </div>
        </div>

        <div :class="$style['est-table__acquisition']">
          <table :class="$style['est-table']">
            <colgroup>
              <col style="width: 50%" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>대출 원금</th>
                <td><strong>174,710,000</strong></td>
              </tr>
              <tr>
                <th>선수금</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">10%</div>
                    <div class="flex-box__cell">1,810,000</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>이용기간</th>
                <td><strong>36개월</strong></td>
              </tr>
              <tr>
                <th>상환 금리 (최저-최고)</th>
                <td>9.2~11.9%</td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <th>월 납입금 (최저-최고)</th>
                <td :class="$style['est-table__amount-related']">
                  <strong :class="$style['est-table__important']"
                    >5,572,000 ~ 5,794,530</strong
                  >
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p :class="$style['est-table__emphasis-text']">
          ※ 개인 고객은 금리체계 모범규준에 의거 신용조회 및 심사 후 금리가
          결정되며, 결정된 금리에 따라 월 납입금이 변동됩니다.
        </p>
        <div :class="$style['est-table__assistant']">
          <table :class="$style['est-table']">
            <colgroup>
              <col style="width: 50%" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>ⓐ고객부담 인지세</th>
                <td>60,000</td>
              </tr>
              <tr>
                <th>ⓑ등록비</th>
                <td>4,426,000</td>
              </tr>
              <tr>
                <th>ⓒ선수금</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">10%</div>
                    <div class="flex-box__cell">1,810,000</div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th :class="$style['est-table__amount-related']">
                  초기납입금 (ⓐ+ⓑ+ⓒ)
                </th>
                <td :class="$style['est-table__amount-related']">
                  <strong>4,486,000</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
      <section class="row-margin-item-regular">
        <p :class="$style['est-table__title']">■ 구비서류</p>
        <div :class="$style['est-table__assistant']">
          <table
            :class="[
              $style['est-table'],
              $style['est-table__required-documents'],
            ]"
          >
            <colgroup>
              <col style="width: 130px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>개인/개인사업자</th>
                <td>
                  사업자등록증 사본, 운전면허증 사본, 자동이체통장 사본<br />
                  소득금액증명원, 재산세과세증명원, 자격증 사본(전문직 한정)
                </td>
              </tr>
              <tr>
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
        <ul :class="$style['required-documents__list']">
          <li>
            ※ (개인/법인)인감증명서, 주민등록등본, 법인등기부등본은 계약체결시점
            3개월 이내 발급분만 인정합니다.
          </li>
          <li>※ 연대보증인 필요서류도 동일합니다.</li>
        </ul>
      </section>
      <!-- //content -->
    </div>
    <!-- //Page 1 : 상품선택 1개, 연락처 표시 -->

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
          <h1 :class="$style['est-head__title']">할부금융 견적서</h1>
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

      <!-- content -->
      <section :class="$style['est-table__basic']">
        <div :class="$style['est-table__thumb']">
          <div :class="$style['est-table__image']">
            <CarThumb size="large" src="/images/_dummy/car-thumb.png" />
          </div>
          <p :class="$style['est-table__text']">
            ※ 위 참고 이미지는 실제 판매모델과 다를 수 있습니다.
          </p>
        </div>
        <div :class="$style['est-table__information']">
          <table>
            <colgroup>
              <col style="width: 54px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>모델</th>
                <td>
                  <div>
                    <strong>
                      제네시스 G70 슈팅 브레이크 2023년형 가솔린 2.5 터보
                      (개소세 5% 기준) 2WD
                    </strong>
                  </div>
                  <div>(45,950,000)</div>
                </td>
              </tr>
              <tr>
                <th>색상</th>
                <td>
                  <div>외장 : 세빌 실버(SSS)</div>
                  <div>내장 : 옵시디언 블랙 모노톤 (옵시디언 블랙 시트)</div>
                </td>
              </tr>
              <tr>
                <th>옵션</th>
                <td>선택 없음</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
      <section>
        <p :class="$style['est-table__title']">■ 취득원가</p>

        <div :class="$style['acquisition-cost']">
          <div :class="$style['acquisition-cost__left']">
            <div :class="$style['est-table__acquisition']">
              <table :class="$style['est-table']">
                <colgroup>
                  <col style="width: 50%" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>기본가격</th>
                    <td>41,100,000 원</td>
                  </tr>
                  <tr>
                    <th>옵션가격</th>
                    <td>0 원</td>
                  </tr>
                  <tr>
                    <th>할인가격</th>
                    <td>825,775 원</td>
                  </tr>
                </tbody>
                <tfoot :class="$style['est-table__emphasis']">
                  <tr>
                    <th>①최종 차량가</th>
                    <td :class="$style['est-table__amount-related']">
                      <div class="flex-box">
                        <div class="flex-box__cell flex-1 align-left"></div>
                        <div class="flex-box__cell">
                          <strong :class="$style['est-table__important']"
                            >44,274,225 원</strong
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div :class="$style['acquisition-cost__right']">
            <div :class="$style['est-table__acquisition']">
              <table :class="$style['est-table']">
                <colgroup>
                  <col style="width: 50%" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>취득세</th>
                    <td>2,817,450 원</td>
                  </tr>
                  <tr>
                    <th>공채비용</th>
                    <td>0 원</td>
                  </tr>
                  <tr>
                    <th>부대비용</th>
                    <td>60,000 원</td>
                  </tr>
                  <tr>
                    <th>②등록비용 합계</th>
                    <td :class="$style['est-table__amount-related']">
                      <strong>2,817,450 원</strong>
                    </td>
                  </tr>
                </tbody>
                <tfoot :class="$style['est-table__emphasis']">
                  <tr>
                    <th>총 소요비용(①+②)</th>
                    <td :class="$style['est-table__amount-related']">
                      <div class="flex-box">
                        <div class="flex-box__cell flex-1 align-left"></div>
                        <div class="flex-box__cell">
                          <strong :class="$style['est-table__important']"
                            >44,274,225 원</strong
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <p :class="$style['est-table__emphasis-text']">
              ※ 공채비용은 실제 등록 시점 따라 차이가 발생할 수 있습니다.
            </p>
          </div>
        </div>

        <div :class="$style['est-table__acquisition']">
          <table :class="$style['est-table']">
            <colgroup>
              <col style="width: 33.3%" />
              <col style="width: 33.3%" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>대출 원금</th>
                <td><strong>174,710,000</strong></td>
                <td><strong>174,710,000</strong></td>
              </tr>
              <tr>
                <th>선수금</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">10%</div>
                    <div class="flex-box__cell">1,810,000</div>
                  </div>
                </td>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">10%</div>
                    <div class="flex-box__cell">1,810,000</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>이용기간</th>
                <td><strong>36개월</strong></td>
                <td><strong>36개월</strong></td>
              </tr>
              <tr>
                <th>상환 금리 (최저-최고)</th>
                <td>9.2~11.9%</td>
                <td>9.2~11.9%</td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <th>월 납입금 (최저-최고)</th>
                <td :class="$style['est-table__amount-related']">
                  <strong :class="$style['est-table__important']"
                    >5,572,000 ~ 5,794,530</strong
                  >
                </td>
                <td :class="$style['est-table__amount-related']">
                  <strong :class="$style['est-table__important']"
                    >5,572,000 ~ 5,794,530</strong
                  >
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p :class="$style['est-table__emphasis-text']">
          ※ 개인 고객은 금리체계 모범규준에 의거 신용조회 및 심사 후 금리가
          결정되며, 결정된 금리에 따라 월 납입금이 변동됩니다.
        </p>
        <div :class="$style['est-table__assistant']">
          <table :class="$style['est-table']">
            <colgroup>
              <col style="width: 33.3%" />
              <col style="width: 33.3%" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>ⓐ고객부담 인지세</th>
                <td>60,000</td>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">불포함</div>
                    <div class="flex-box__cell">75,000</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>ⓑ등록비</th>
                <td>4,426,000</td>
                <td>4,426,000</td>
              </tr>
              <tr>
                <th>ⓒ선수금</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">10%</div>
                    <div class="flex-box__cell">1,810,000</div>
                  </div>
                </td>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">10%</div>
                    <div class="flex-box__cell">1,810,000</div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th :class="$style['est-table__amount-related']">
                  초기납입금 (ⓐ+ⓑ+ⓒ)
                </th>
                <td :class="$style['est-table__amount-related']">
                  <strong>4,486,000</strong>
                </td>
                <td :class="$style['est-table__amount-related']">
                  <strong>4,486,000</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
      <section class="row-margin-item-regular">
        <p :class="$style['est-table__title']">■ 구비서류</p>
        <div :class="$style['est-table__assistant']">
          <table
            :class="[
              $style['est-table'],
              $style['est-table__required-documents'],
            ]"
          >
            <colgroup>
              <col style="width: 130px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>개인/개인사업자</th>
                <td>
                  사업자등록증 사본, 운전면허증 사본, 자동이체통장 사본<br />
                  소득금액증명원, 재산세과세증명원, 자격증 사본(전문직 한정)
                </td>
              </tr>
              <tr>
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
        <ul :class="$style['required-documents__list']">
          <li>
            ※ (개인/법인)인감증명서, 주민등록등본, 법인등기부등본은 계약체결시점
            3개월 이내 발급분만 인정합니다.
          </li>
          <li>※ 연대보증인 필요서류도 동일합니다.</li>
        </ul>
      </section>
      <!-- //content -->
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
          <h1 :class="$style['est-head__title']">할부금융 견적서</h1>
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

      <!-- content -->
      <section :class="$style['est-table__basic']">
        <div :class="$style['est-table__thumb']">
          <div :class="$style['est-table__image']">
            <CarThumb size="large" src="/images/_dummy/car-thumb.png" />
          </div>
          <p :class="$style['est-table__text']">
            ※ 위 참고 이미지는 실제 판매모델과 다를 수 있습니다.
          </p>
        </div>
        <div :class="$style['est-table__information']">
          <table>
            <colgroup>
              <col style="width: 54px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>모델</th>
                <td>
                  <div>
                    <strong>
                      제네시스 G70 슈팅 브레이크 2023년형 가솔린 2.5 터보
                      (개소세 5% 기준) 2WD
                    </strong>
                  </div>
                  <div>(45,950,000)</div>
                </td>
              </tr>
              <tr>
                <th>색상</th>
                <td>
                  <div>외장 : 세빌 실버(SSS)</div>
                  <div>내장 : 옵시디언 블랙 모노톤 (옵시디언 블랙 시트)</div>
                </td>
              </tr>
              <tr>
                <th>옵션</th>
                <td>선택 없음</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
      <section>
        <p :class="$style['est-table__title']">■ 취득원가</p>

        <div :class="$style['acquisition-cost']">
          <div :class="$style['acquisition-cost__left']">
            <div :class="$style['est-table__acquisition']">
              <table :class="$style['est-table']">
                <colgroup>
                  <col style="width: 50%" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>기본가격</th>
                    <td>41,100,000 원</td>
                  </tr>
                  <tr>
                    <th>옵션가격</th>
                    <td>4,000,000 원</td>
                  </tr>
                  <tr>
                    <th>할인가격</th>
                    <td>825,775 원</td>
                  </tr>
                </tbody>
                <tfoot :class="$style['est-table__emphasis']">
                  <tr>
                    <th>①최종 차량가</th>
                    <td :class="$style['est-table__amount-related']">
                      <div class="flex-box">
                        <div class="flex-box__cell flex-1 align-left"></div>
                        <div class="flex-box__cell">
                          <strong :class="$style['est-table__important']"
                            >44,274,225 원</strong
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div :class="$style['acquisition-cost__right']">
            <div :class="$style['est-table__acquisition']">
              <table :class="$style['est-table']">
                <colgroup>
                  <col style="width: 50%" />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th>취득세</th>
                    <td>2,817,450 원</td>
                  </tr>
                  <tr>
                    <th>공채비용</th>
                    <td>0 원</td>
                  </tr>
                  <tr>
                    <th>부대비용</th>
                    <td>60,000 원</td>
                  </tr>
                  <tr>
                    <th>②등록비용 합계</th>
                    <td :class="$style['est-table__amount-related']">
                      <strong>2,817,450 원</strong>
                    </td>
                  </tr>
                </tbody>
                <tfoot :class="$style['est-table__emphasis']">
                  <tr>
                    <th>총 소요비용(①+②)</th>
                    <td :class="$style['est-table__amount-related']">
                      <div class="flex-box">
                        <div class="flex-box__cell flex-1 align-left"></div>
                        <div class="flex-box__cell">
                          <strong :class="$style['est-table__important']"
                            >44,274,225 원</strong
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <p :class="$style['est-table__emphasis-text']">
              ※ 공채비용은 실제 등록 시점 따라 차이가 발생할 수 있습니다.
            </p>
          </div>
        </div>

        <div :class="$style['est-table__acquisition']">
          <table :class="$style['est-table']">
            <colgroup>
              <col style="width: 25%" />
              <col style="width: 25%" />
              <col style="width: 25%" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>대출 원금</th>
                <td><strong>174,710,000</strong></td>
                <td><strong>174,710,000</strong></td>
                <td><strong>174,710,000</strong></td>
              </tr>
              <tr>
                <th>선수금</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">10%</div>
                    <div class="flex-box__cell">1,810,000</div>
                  </div>
                </td>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">10%</div>
                    <div class="flex-box__cell">1,810,000</div>
                  </div>
                </td>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">10%</div>
                    <div class="flex-box__cell">1,810,000</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>이용기간</th>
                <td><strong>36개월</strong></td>
                <td><strong>36개월</strong></td>
                <td><strong>36개월</strong></td>
              </tr>
              <tr>
                <th>상환 금리 (최저-최고)</th>
                <td>9.2~11.9%</td>
                <td>9.2~11.9%</td>
                <td>-</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>월 납입금 (최저-최고)</th>
                <td :class="$style['est-table__amount-related']">
                  <strong :class="$style['est-table__important']"
                    >5,572,000 ~ 5,794,530</strong
                  >
                </td>
                <td :class="$style['est-table__amount-related']">
                  <strong :class="$style['est-table__important']"
                    >5,572,000 ~ 5,794,530</strong
                  >
                </td>
                <td :class="$style['est-table__amount-related']">
                  <strong :class="$style['est-table__important']"
                    >계산 대기중</strong
                  >
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p :class="$style['est-table__emphasis-text']">
          ※ 개인 고객은 금리체계 모범규준에 의거 신용조회 및 심사 후 금리가
          결정되며, 결정된 금리에 따라 월 납입금이 변동됩니다.
        </p>
        <div :class="$style['est-table__assistant']">
          <table :class="$style['est-table']">
            <colgroup>
              <col style="width: 25%" />
              <col style="width: 25%" />
              <col style="width: 25%" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>ⓐ고객부담 인지세</th>
                <td>60,000</td>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">불포함</div>
                    <div class="flex-box__cell">75,000</div>
                  </div>
                </td>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">포함</div>
                    <div class="flex-box__cell">75,000</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>ⓑ등록비</th>
                <td>4,426,000</td>
                <td>4,426,000</td>
                <td>4,426,000</td>
              </tr>
              <tr>
                <th>ⓒ선수금</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">10%</div>
                    <div class="flex-box__cell">1,810,000</div>
                  </div>
                </td>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">10%</div>
                    <div class="flex-box__cell">1,810,000</div>
                  </div>
                </td>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">10%</div>
                    <div class="flex-box__cell">1,810,000</div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th :class="$style['est-table__amount-related']">
                  초기납입금 (ⓐ+ⓑ+ⓒ)
                </th>
                <td :class="$style['est-table__amount-related']">
                  <strong>4,486,000</strong>
                </td>
                <td :class="$style['est-table__amount-related']">
                  <strong>4,486,000</strong>
                </td>
                <td :class="$style['est-table__amount-related']">
                  <strong>4,486,000</strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
      <section class="row-margin-item-regular">
        <p :class="$style['est-table__title']">■ 구비서류</p>
        <div :class="$style['est-table__assistant']">
          <table
            :class="[
              $style['est-table'],
              $style['est-table__required-documents'],
            ]"
          >
            <colgroup>
              <col style="width: 130px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>개인/개인사업자</th>
                <td>
                  사업자등록증 사본, 운전면허증 사본, 자동이체통장 사본<br />
                  소득금액증명원, 재산세과세증명원, 자격증 사본(전문직 한정)
                </td>
              </tr>
              <tr>
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
        <ul :class="$style['required-documents__list']">
          <li>
            ※ (개인/법인)인감증명서, 주민등록등본, 법인등기부등본은 계약체결시점
            3개월 이내 발급분만 인정합니다.
          </li>
          <li>※ 연대보증인 필요서류도 동일합니다.</li>
        </ul>
      </section>
      <!-- //content -->
    </div>
    <!-- // Page 1 : 상품선택 3개, 연락처 표시 -->
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/document/DocumentEstimate004Contents.scss';
</style>
