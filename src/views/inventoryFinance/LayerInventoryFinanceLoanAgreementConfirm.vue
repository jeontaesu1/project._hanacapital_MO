<script>
// IF_M02_l001
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
          <PopupTitle>재고금융 확약서</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          재고금육 확약서를<br />
          <strong>확인해주세요</strong>
        </PageMainText>
        <PageSubText>
          본인은 귀사에서 제공하는 중고차 구입자금 대출(이하 ‘중고차
          재고금융‘이라고 함)을 이용함에 있어 다음과 같이 확약합니다.
        </PageSubText>
      </PageTextGroup>

      <section>
        <h3 class="text-body-2">-아래-</h3>
        <p class="text-body-4 font-weight-light row-margin-item-medium">
          본인은 귀사에 중고차 재고금융 운영기준에 규정된 아래의취급 불가 차량을
          대상으로 대출을 신청하여 위 대출을 신청하여 위 대출이 신청된 경우,
          귀사가 대출 취소 등 불이익을 적용하는 것에 대하여 이의를 제기하지
          않겠습니다.
        </p>

        <div :class="$style['basic-table']">
          <table>
            <colgroup>
              <col style="width: 102px" />
              <col style="width: 219px" />
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-body-5 color-gray">취급 불가 차량</td>
                <td>
                  <ul :class="$style['basic-list']">
                    <li :class="$style['basic-list__item']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        연락드릴 시간 : 평일 오전 09:00~ 오후 05:30
                      </div>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">다음에</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton theme="secondary">상담원 연결</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/LayerInventoryFinanceLoanAgreementConfirm.scss';
</style>
