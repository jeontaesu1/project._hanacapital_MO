<script>
// My_M03_l219
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    PageTextGroup,
    PageMainText,
    IllustObject,
    NoticeText,
    ButtonList,
    ButtonListItem,
    BasicButton,
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
          <PopupTitle>일반할부금융 주요권리 안내</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          청약철회를<br />
          요구할 수 있어요
        </PageMainText>
      </PageTextGroup>

      <IllustObject type="restore" :classNames="{ wrap: 'row-margin-none' }" />

      <div>
        <div class="text-body-2">
          <span class="color-red">
            금융소비자 보호에 관한 법률 시행령 제37조 제1항 제3호가목에
            의거하여, 할부금융상품은 같은 법에서 규정하는 청약철회권 대상 상품이
            아닙니다.
          </span>
          <span class="font-weight-medium">
            (다만 재화를 제공받은 경우만 해당합니다.)
          </span>
        </div>

        <NoticeText :classNames="{ wrap: 'row-margin-item' }">
          할부금융상품은 할부거래에 관한 법률 제 8조의 청약철회권과 같은 법
          제16조의 항변권을 적용받으며, 주요한 특징은 아래와 같습니다.
        </NoticeText>

        <div class="row-margin-contents">
          <div>
            <div class="color-gray-secondary text-body-4">
              할부거래법 상 청약철회권이란
            </div>
            <ul :class="[$style['basic-list'], 'row-margin-mini']">
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  <span class="font-weight-medium">
                    “할부 구입일 또는 목적물 인도를 받은 날로부터 7일 이내
                    철회(취소)를 요청할 수 있는 권리”</span
                  >를 말합니다.
                </div>
              </li>
            </ul>
          </div>

          <div class="row-margin-contents">
            <div class="color-gray-secondary text-body-4">
              할부거래법 상 항변권이란
            </div>
            <ul :class="[$style['basic-list'], 'row-margin-mini']">
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  <span class="font-weight-medium">
                    “할부계약기간 중 물품, 서비스 등이 계약내용대로 이행되지
                    않는 경우 등에 대해 잔여 할부금 지급을 거절할 수 있는
                    권리”를
                  </span>
                  말합니다.
                </div>
              </li>
            </ul>
          </div>

          <!-- s: 240912 추가,수정 -->
          <div class="row-margin-contents">
            <div class="color-gray-secondary text-body-4">청약의 철회</div>
            <ul :class="[$style['basic-list'], 'row-margin-mini']">
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  <span class="font-weight-medium">
                    일반금융소비자는 할부구입일 또는 목적물을 인도받은 날로부터
                    7일 이내 계약에 대한 청약을 철회할 수 있습니다.
                  </span>
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  <span class="font-weight-medium">
                    청약의 철회 의사를 표시하기 위해서는 서면 등(우편, 전자우편,
                    문자메세지 등을 말함)으로 의사표시를 해야 하며, 이미
                    공급받은 금전·재화와 그에 대한 이자를 반환하여야 합니다.
                    아울러 인지세 등 제세공과금 및 저당권 설정 등에 따른
                    등기비용이 발생하였을 경우, 이를 함께 반환하셔야 합니다.
                    청약철회의 의사를 서면 등으로 발송한 때에는 그 발송 사실을
                    지체없이 당사에 알려주셔야 합니다.
                  </span>
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  <span class="font-weight-medium">
                    청약철회권 행사 시에는 중도상환수수료가 면제되며, 5영업일
                    이내에 해당 대출과 관련된 정보가 삭제됩니다. 청약철회권의
                    효력이 발생한 이후에는 취소가 불가하오며 대출 중도상환
                    시에는 중도상환수수료 납부로 조기상환이 가능하며 별도의
                    부대반환 비용은 없지만 대출기록은 유지됩니다.
                  </span>
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'color-black',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  <span class="font-weight-medium">
                    동일한 금융회사를 대상으로 최근 1개월 내에 2회 이상
                    대출계약을 철회하는 경우, 신규대출 ·만기연장 거절, 대출한도
                    축소, 금리우대 제한 등 불이익이 발생할 수 있습니다.
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <!-- e:// 240912 추가,수정 -->

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
        </div>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>확인했습니다</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractDescription002_009.scss';
@import '@/assets/scss/components/import/basic-table.scss'; /* 240912 추가 */
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
