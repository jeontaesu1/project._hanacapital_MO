<script>
// 장기렌트 견적서
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
          <h1 :class="$style['est-head__title']">장기렌트 견적서</h1>
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
                <td colspan="2">45,950,000 원</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
      <section>
        <div :class="$style['est-table__acquisition']">
          <table :class="$style['est-table']">
            <colgroup>
              <col style="width: 50%" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>렌트 기간</th>
                <td><strong>36개월</strong></td>
              </tr>
              <tr>
                <th>만기처리</th>
                <td>반납/구매/연장</td>
              </tr>
              <tr>
                <th>정비상품</th>
                <td>Self Service</td>
              </tr>
              <tr>
                <th>선납금</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">16.57%</div>
                    <div class="flex-box__cell">3,000,000</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>보증금</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">10%</div>
                    <div class="flex-box__cell">1,810,000</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>약정거리</th>
                <td>20,000 km/년</td>
              </tr>
              <tr>
                <th>만기 인수가격</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">53.5%</div>
                    <div class="flex-box__cell">9,321,500</div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot :class="$style['est-table__emphasis']">
              <tr>
                <th rowspan="2">매회 렌트료</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">①공급가</div>
                    <div class="flex-box__cell">371,000</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td :class="$style['est-table__emphasis-line']">
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">②부가세</div>
                    <div class="flex-box__cell">37,100</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>선납 렌트료</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">
                      ③선납금(월)
                    </div>
                    <div class="flex-box__cell">83,400</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>납입 렌트료</th>
                <td :class="$style['est-table__amount-related']">
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">①+②-③</div>
                    <div class="flex-box__cell">
                      <strong :class="$style['est-table__important']"
                        >324,700</strong
                      >
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div :class="$style['est-table__acquisition']">
          <table :class="$style['est-table']">
            <colgroup>
              <col style="width: 50%" />
              <col />
            </colgroup>
            <tbody :class="$style['est-table__emphasis']">
              <tr>
                <th><strong>고객 초기납입비용</strong></th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">
                      선납금+보증금
                    </div>
                    <div class="flex-box__cell"><strong>4,810,000</strong></div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>입금 계좌</th>
                <td class="align-left">
                  하나은행 59190005524737 / 예금주 : 하나캐피탈(주)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class="row-margin-item-regular">
        <p :class="$style['est-table__title']">■ 보험 조건</p>
        <div :class="$style['est-table__assistant']">
          <table :class="$style['est-table']">
            <colgroup>
              <col style="width: 113px" />
              <col style="width: 125px" />
              <col style="width: 113px" />
              <col />
              <col style="width: 113px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>보험회사</th>
                <td>전국렌터카공제조합</td>
                <th>운전연령</th>
                <td class="align-center">만26세 이상</td>
                <th>보험종류</th>
                <td class="align-center">영업용</td>
              </tr>
              <tr>
                <th>의무가입</th>
                <td colspan="5" class="align-left">
                  대인배상Ⅰ, 대인배상Ⅱ, 무보험차상해(최고액 2억), 긴급출동
                </td>
              </tr>
              <tr>
                <th>필수가입</th>
                <td colspan="5" class="align-left">
                  대물 : 1억원, 자손 : 1억원, 면책금 : 30만원
                </td>
              </tr>
            </tbody>
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
                  사업자등록증 사본, 운전면허증 사본, 재직증명서,
                  원천징수영수증, 자동이체통장 사본<br />부가가치과세증명원,
                  소득금액증명원, 재산세과세증명원, 자격증 사본(전문직 한정)
                </td>
              </tr>
              <tr>
                <th>법인사업자</th>
                <td class="align-left">
                  사업자등록증 사본, 법인등기부등본 1부, 법인인감증명서 1통,
                  최근 2개년도 재무제표, 주주명부<br />
                  자동이체통장 사본, 대표이사 신분증 사본, 대표이사 인감증명서
                  1통, 대표이사 재산세과세증명원
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
      <section>
        <ul :class="$style['summary__list']">
          <li>
            <strong :class="$style['summary__emphasis']">
              ㅇ 상기 견적은 차량가격의 변동 및 렌트조건에 따라 변경될 수
              있으며, 렌트계약 체결 시 확정됩니다. (견적유효기간은 작성일로부터
              14일 이내)
            </strong>
          </li>
          <li>
            ㅇ 상기 견적에 언급되지 않은 유지관리서비스 항목과 발생비용은 고객
            부담조건입니다.
          </li>
          <li>
            ㅇ 차량 반납시 주행거리 및 차량상태에 따라 감가 금액이 발생할 수
            있습니다.
          </li>
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
          <h1 :class="$style['est-head__title']">장기렌트 견적서</h1>
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
                <td colspan="2">45,950,000 원</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
      <section>
        <div :class="$style['est-table__acquisition']">
          <table :class="$style['est-table']">
            <colgroup>
              <col style="width: 50%" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>렌트 기간</th>
                <td><strong>36개월</strong></td>
              </tr>
              <tr>
                <th>만기처리</th>
                <td>반납/구매/연장</td>
              </tr>
              <tr>
                <th>정비상품</th>
                <td>Self Service</td>
              </tr>
              <tr>
                <th>선납금</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">16.57%</div>
                    <div class="flex-box__cell">3,000,000</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>보증금</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">10%</div>
                    <div class="flex-box__cell">1,810,000</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>약정거리</th>
                <td>20,000 km/년</td>
              </tr>
              <tr>
                <th>만기 인수가격</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">53.5%</div>
                    <div class="flex-box__cell">9,321,500</div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot :class="$style['est-table__emphasis']">
              <tr>
                <th rowspan="2">매회 렌트료</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">①공급가</div>
                    <div class="flex-box__cell">371,000</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td :class="$style['est-table__emphasis-line']">
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">②부가세</div>
                    <div class="flex-box__cell">37,100</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>선납 렌트료</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">
                      ③선납금(월)
                    </div>
                    <div class="flex-box__cell">83,400</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>납입 렌트료</th>
                <td :class="$style['est-table__amount-related']">
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">①+②-③</div>
                    <div class="flex-box__cell">
                      <strong :class="$style['est-table__important']"
                        >324,700</strong
                      >
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div :class="$style['est-table__acquisition']">
          <table :class="$style['est-table']">
            <colgroup>
              <col style="width: 50%" />
              <col />
            </colgroup>
            <tbody :class="$style['est-table__emphasis']">
              <tr>
                <th><strong>고객 초기납입비용</strong></th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">
                      선납금+보증금
                    </div>
                    <div class="flex-box__cell"><strong>4,810,000</strong></div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>입금 계좌</th>
                <td class="align-left">
                  하나은행 59190005524737 / 예금주 : 하나캐피탈(주)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class="row-margin-item-regular">
        <p :class="$style['est-table__title']">■ 보험 조건</p>
        <div :class="$style['est-table__assistant']">
          <table :class="$style['est-table']">
            <colgroup>
              <col style="width: 113px" />
              <col style="width: 125px" />
              <col style="width: 113px" />
              <col />
              <col style="width: 113px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>보험회사</th>
                <td>전국렌터카공제조합</td>
                <th>운전연령</th>
                <td class="align-center">만26세 이상</td>
                <th>보험종류</th>
                <td class="align-center">영업용</td>
              </tr>
              <tr>
                <th>의무가입</th>
                <td colspan="5" class="align-left">
                  대인배상Ⅰ, 대인배상Ⅱ, 무보험차상해(최고액 2억), 긴급출동
                </td>
              </tr>
              <tr>
                <th>필수가입</th>
                <td colspan="5" class="align-left">
                  대물 : 1억원, 자손 : 1억원, 면책금 : 30만원
                </td>
              </tr>
            </tbody>
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
                  사업자등록증 사본, 운전면허증 사본, 재직증명서,
                  원천징수영수증, 자동이체통장 사본<br />부가가치과세증명원,
                  소득금액증명원, 재산세과세증명원, 자격증 사본(전문직 한정)
                </td>
              </tr>
              <tr>
                <th>법인사업자</th>
                <td class="align-left">
                  사업자등록증 사본, 법인등기부등본 1부, 법인인감증명서 1통,
                  최근 2개년도 재무제표, 주주명부<br />
                  자동이체통장 사본, 대표이사 신분증 사본, 대표이사 인감증명서
                  1통, 대표이사 재산세과세증명원
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
      <section>
        <ul :class="$style['summary__list']">
          <li>
            <strong :class="$style['summary__emphasis']">
              ㅇ 상기 견적은 차량가격의 변동 및 렌트조건에 따라 변경될 수
              있으며, 렌트계약 체결 시 확정됩니다. (견적유효기간은 작성일로부터
              14일 이내)
            </strong>
          </li>
          <li>
            ㅇ 상기 견적에 언급되지 않은 유지관리서비스 항목과 발생비용은 고객
            부담조건입니다.
          </li>
          <li>
            ㅇ 차량 반납시 주행거리 및 차량상태에 따라 감가 금액이 발생할 수
            있습니다.
          </li>
        </ul>
      </section>
      <!-- //content -->
    </div>
    <!-- // Page 1 : 상품선택 1개, 연락처 표시 -->

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
          <h1 :class="$style['est-head__title']">장기렌트 견적서</h1>
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
                <td colspan="2">45,950,000 원</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
      <section>
        <div :class="$style['est-table__acquisition']">
          <table :class="$style['est-table']">
            <colgroup>
              <col style="width: 33.3%" />
              <col style="width: 33.3%" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>렌트 기간</th>
                <td><strong>36개월</strong></td>
                <td><strong>48개월</strong></td>
              </tr>
              <tr>
                <th>만기처리</th>
                <td>반납/구매/연장</td>
                <td>구매</td>
              </tr>
              <tr>
                <th>정비상품</th>
                <td>Self Service</td>
                <td>Self Service</td>
              </tr>
              <tr>
                <th>선납금</th>
                <td>3,000,000</td>
                <td>0</td>
              </tr>
              <tr>
                <th>보증금</th>
                <td>1,810,000</td>
                <td>0</td>
              </tr>
              <tr>
                <th>약정거리</th>
                <td>20,000 km/년</td>
                <td>50,000 km/년</td>
              </tr>
              <tr>
                <th>만기 인수가격</th>
                <td>9,321,500</td>
                <td>9,321,500</td>
              </tr>
            </tbody>
            <tfoot :class="$style['est-table__emphasis']">
              <tr>
                <th rowspan="2">매회 렌트료</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">①공급가</div>
                    <div class="flex-box__cell">371,000</div>
                  </div>
                </td>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">①공급가</div>
                    <div class="flex-box__cell">371,000</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td :class="$style['est-table__emphasis-line']">
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">②부가세</div>
                    <div class="flex-box__cell">37,100</div>
                  </div>
                </td>
                <td :class="$style['est-table__emphasis-line']">
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">②부가세</div>
                    <div class="flex-box__cell">37,100</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>선납 렌트료</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">
                      ③선납금(월)
                    </div>
                    <div class="flex-box__cell">83,400</div>
                  </div>
                </td>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">
                      ③선납금(월)
                    </div>
                    <div class="flex-box__cell">83,400</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>납입 렌트료</th>
                <td :class="$style['est-table__amount-related']">
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">①+②-③</div>
                    <div class="flex-box__cell">
                      <strong :class="$style['est-table__important']"
                        >324,700</strong
                      >
                    </div>
                  </div>
                </td>
                <td :class="$style['est-table__amount-related']">
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">①+②-③</div>
                    <div class="flex-box__cell">
                      <strong :class="$style['est-table__important']"
                        >324,700</strong
                      >
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div :class="$style['est-table__acquisition']">
          <table :class="$style['est-table']">
            <colgroup>
              <col style="width: 33.3%" />
              <col style="width: 33.3%" />
              <col />
            </colgroup>
            <tbody :class="$style['est-table__emphasis']">
              <tr>
                <th><strong>고객 초기납입비용</strong></th>
                <td><strong>4,810,000</strong></td>
                <td><strong>0</strong></td>
              </tr>
              <tr>
                <th>입금 계좌</th>
                <td class="align-left" colspan="2">
                  하나은행 59190005524737 / 예금주 : 하나캐피탈(주)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class="row-margin-item-regular">
        <p :class="$style['est-table__title']">■ 보험 조건</p>
        <div :class="$style['est-table__assistant']">
          <table :class="$style['est-table']">
            <colgroup>
              <col style="width: 113px" />
              <col style="width: 125px" />
              <col style="width: 113px" />
              <col />
              <col style="width: 113px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>보험회사</th>
                <td>전국렌터카공제조합</td>
                <th>운전연령</th>
                <td class="align-center">만26세 이상</td>
                <th>보험종류</th>
                <td class="align-center">영업용</td>
              </tr>
              <tr>
                <th>의무가입</th>
                <td colspan="5" class="align-left">
                  대인배상Ⅰ, 대인배상Ⅱ, 무보험차상해(최고액 2억), 긴급출동
                </td>
              </tr>
              <tr>
                <th>필수가입</th>
                <td colspan="5" class="align-left">
                  대물 : 1억원, 자손 : 1억원, 면책금 : 30만원
                </td>
              </tr>
            </tbody>
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
                  사업자등록증 사본, 운전면허증 사본, 재직증명서,
                  원천징수영수증, 자동이체통장 사본<br />부가가치과세증명원,
                  소득금액증명원, 재산세과세증명원, 자격증 사본(전문직 한정)
                </td>
              </tr>
              <tr>
                <th>법인사업자</th>
                <td class="align-left">
                  사업자등록증 사본, 법인등기부등본 1부, 법인인감증명서 1통,
                  최근 2개년도 재무제표, 주주명부<br />
                  자동이체통장 사본, 대표이사 신분증 사본, 대표이사 인감증명서
                  1통, 대표이사 재산세과세증명원
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
      <section>
        <ul :class="$style['summary__list']">
          <li>
            <strong :class="$style['summary__emphasis']">
              ㅇ 상기 견적은 차량가격의 변동 및 렌트조건에 따라 변경될 수
              있으며, 렌트계약 체결 시 확정됩니다. (견적유효기간은 작성일로부터
              14일 이내)
            </strong>
          </li>
          <li>
            ㅇ 상기 견적에 언급되지 않은 유지관리서비스 항목과 발생비용은 고객
            부담조건입니다.
          </li>
          <li>
            ㅇ 차량 반납시 주행거리 및 차량상태에 따라 감가 금액이 발생할 수
            있습니다.
          </li>
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
          <h1 :class="$style['est-head__title']">장기렌트 견적서</h1>
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
                <td colspan="2">45,950,000 원</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
      <section>
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
                <th>렌트 기간</th>
                <td><strong>36개월</strong></td>
                <td><strong>48개월</strong></td>
                <td><strong>60개월</strong></td>
              </tr>
              <tr>
                <th>만기처리</th>
                <td>반납/구매/연장</td>
                <td>구매</td>
                <td>반납</td>
              </tr>
              <tr>
                <th>정비상품</th>
                <td>Self Service</td>
                <td>Self Service</td>
                <td>Self Service</td>
              </tr>
              <tr>
                <th>선납금</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">16.57%</div>
                    <div class="flex-box__cell">3,820,000</div>
                  </div>
                </td>
                <td>0</td>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">10%</div>
                    <div class="flex-box__cell">1,820,000</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>보증금</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">10%</div>
                    <div class="flex-box__cell">1,820,000</div>
                  </div>
                </td>
                <td>0</td>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">25%</div>
                    <div class="flex-box__cell">4,525,000</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>약정거리</th>
                <td>20,000 km/년</td>
                <td>50,000 km/년</td>
                <td>20,000 km/년</td>
              </tr>
              <tr>
                <th>만기 인수가격</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">51.5%</div>
                    <div class="flex-box__cell">9,321,500</div>
                  </div>
                </td>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">34%</div>
                    <div class="flex-box__cell">6,154,000</div>
                  </div>
                </td>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">32%</div>
                    <div class="flex-box__cell">5,792,000</div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot :class="$style['est-table__emphasis']">
              <tr>
                <th rowspan="2">매회 렌트료</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">①공급가</div>
                    <div class="flex-box__cell">371,000</div>
                  </div>
                </td>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">①공급가</div>
                    <div class="flex-box__cell">0</div>
                  </div>
                </td>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">①공급가</div>
                    <div class="flex-box__cell">371,000</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td :class="$style['est-table__emphasis-line']">
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">②부가세</div>
                    <div class="flex-box__cell">37,100</div>
                  </div>
                </td>
                <td :class="$style['est-table__emphasis-line']">
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">②부가세</div>
                    <div class="flex-box__cell">0</div>
                  </div>
                </td>
                <td :class="$style['est-table__emphasis-line']">
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">②부가세</div>
                    <div class="flex-box__cell">37,100</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>선납 렌트료</th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">
                      ③선납금(월)
                    </div>
                    <div class="flex-box__cell">83,400</div>
                  </div>
                </td>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">
                      ③선납금(월)
                    </div>
                    <div class="flex-box__cell">0</div>
                  </div>
                </td>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">
                      ③선납금(월)
                    </div>
                    <div class="flex-box__cell">83,400</div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>납입 렌트료</th>
                <td :class="$style['est-table__amount-related']">
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">①+②-③</div>
                    <div class="flex-box__cell">
                      <strong :class="$style['est-table__important']"
                        >324,700</strong
                      >
                    </div>
                  </div>
                </td>
                <td :class="$style['est-table__amount-related']">
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">①+②-③</div>
                    <div class="flex-box__cell">
                      <strong :class="$style['est-table__important']"
                        >계산 대기중</strong
                      >
                    </div>
                  </div>
                </td>
                <td :class="$style['est-table__amount-related']">
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">①+②-③</div>
                    <div class="flex-box__cell">
                      <strong :class="$style['est-table__important']"
                        >324,700</strong
                      >
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div :class="$style['est-table__acquisition']">
          <table :class="$style['est-table']">
            <colgroup>
              <col style="width: 25%" />
              <col style="width: 25%" />
              <col style="width: 25%" />
              <col />
            </colgroup>
            <tbody :class="$style['est-table__emphasis']">
              <tr>
                <th><strong>고객 초기납입비용</strong></th>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">
                      선납금+보증금
                    </div>
                    <div class="flex-box__cell">
                      <strong :class="$style['est-table__important']"
                        >4,810,000</strong
                      >
                    </div>
                  </div>
                </td>
                <td><strong>0</strong></td>
                <td>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1 align-left">
                      선납금+보증금
                    </div>
                    <div class="flex-box__cell">
                      <strong :class="$style['est-table__important']"
                        >6,335,000</strong
                      >
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th>입금 계좌</th>
                <td class="align-left" colspan="3">
                  하나은행 59190005524737 / 예금주 : 하나캐피탈(주)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class="row-margin-item-regular">
        <p :class="$style['est-table__title']">■ 보험 조건</p>
        <div :class="$style['est-table__assistant']">
          <table :class="$style['est-table']">
            <colgroup>
              <col style="width: 113px" />
              <col style="width: 125px" />
              <col style="width: 113px" />
              <col />
              <col style="width: 113px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>보험회사</th>
                <td>전국렌터카공제조합</td>
                <th>운전연령</th>
                <td class="align-center">만26세 이상</td>
                <th>보험종류</th>
                <td class="align-center">영업용</td>
              </tr>
              <tr>
                <th>의무가입</th>
                <td colspan="5" class="align-left">
                  대인배상Ⅰ, 대인배상Ⅱ, 무보험차상해(최고액 2억), 긴급출동
                </td>
              </tr>
              <tr>
                <th>필수가입</th>
                <td colspan="5" class="align-left">
                  대물 : 1억원, 자손 : 1억원, 면책금 : 30만원
                </td>
              </tr>
            </tbody>
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
                  사업자등록증 사본, 운전면허증 사본, 재직증명서,
                  원천징수영수증, 자동이체통장 사본<br />부가가치과세증명원,
                  소득금액증명원, 재산세과세증명원, 자격증 사본(전문직 한정)
                </td>
              </tr>
              <tr>
                <th>법인사업자</th>
                <td class="align-left">
                  사업자등록증 사본, 법인등기부등본 1부, 법인인감증명서 1통,
                  최근 2개년도 재무제표, 주주명부<br />
                  자동이체통장 사본, 대표이사 신분증 사본, 대표이사 인감증명서
                  1통, 대표이사 재산세과세증명원
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
      <section>
        <ul :class="$style['summary__list']">
          <li>
            <strong :class="$style['summary__emphasis']">
              ㅇ 상기 견적은 차량가격의 변동 및 렌트조건에 따라 변경될 수
              있으며, 렌트계약 체결 시 확정됩니다. (견적유효기간은 작성일로부터
              14일 이내)
            </strong>
          </li>
          <li>
            ㅇ 상기 견적에 언급되지 않은 유지관리서비스 항목과 발생비용은 고객
            부담조건입니다.
          </li>
          <li>
            ㅇ 차량 반납시 주행거리 및 차량상태에 따라 감가 금액이 발생할 수
            있습니다.
          </li>
          <li>
            ㅇ 전기차 진행시, 지자체 예산 조기소진 등의 사유로 보조금이 변동될
            수 있으며, 이 경우 상기 견적은 변경될 수 있습니다. 취급 전 보조금
            지원 여부를<br />
            <span :class="$style['summary__emphasis']">반드시</span>
            확인바랍니다.
          </li>
          <li>
            ㅇ 상기 견적서 상의 월 렌트료는 제조사 차량 할인액이 반영된
            금액입니다.
          </li>
        </ul>
      </section>
      <!-- //content -->
    </div>
    <!-- // Page 1 : 상품선택 3개, 연락처 표시 -->

    <!-- Page 2 
    <div :class="$style['document']">// contents</div>
    // Page 2 -->
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/document/DocumentEstimate001Contents.scss';
</style>
