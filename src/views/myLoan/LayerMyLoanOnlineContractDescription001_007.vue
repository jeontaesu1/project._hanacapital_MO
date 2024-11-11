<script>
// My_M03_l207
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
          <PopupTitle>일반신용대출 주요권리 안내</PopupTitle>
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
          고객은 계약체결일 또는 계약서류를 제공받은 날(다만 금전·재화·용역의
          지급이 늦게 이루어진 경우에는 그 지급일로 대체)로부터
          <span class="font-weight-medium">
            14일 이내에 계약에 대한 청약을 철회할 수 있어요.
          </span>
        </div>

        <NoticeText :classNames="{ wrap: 'color-red row-margin-item' }">
          동일한 금융회사를 대상으로 최근 1개월 내에 2회 이상 대출계약을
          철회하는 경우, 신규대출·만기연장 거절, 대출한도 축소, 금리우대 제한 등
          불이익이 발생할 수 있습니다.
        </NoticeText>

        <!-- s: 240912 추가 -->
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
        <!-- e:// 240912 추가 -->
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
