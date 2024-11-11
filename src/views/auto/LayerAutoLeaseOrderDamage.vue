<script>
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
    PageSubText,
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
    <FullPopup v-if="layerSlotProps.display !== 'none'">
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>중도해지손해배상금 세부내역</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>자동차 운용리스 <br />중도해지 손해배상금</PageMainText>
        <PageSubText> (2024.01.02일 이후 계약 체결 건 부터) </PageSubText>
      </PageTextGroup>

      <section>
        <h3 class="text-body-2 row-margin-item-medium">
          중도해지 손해배상금 산식
        </h3>

        <p class="text-body-4 font-weight-light">
          [잔여개월 1년 초과]<br />
          미회수원금 x 중도해지손해배상금률
        </p>
        <p class="text-body-4 font-weight-light margin-scoped">
          [잔여개월 1년 이하]<br />
          미회수원금 x 중도해지손해배상금률<br />
          x (잔여기간 월수 / 12개월)
        </p>
      </section>

      <section>
        <h3 class="text-body-2 row-margin-item-medium">
          중도해지 손해배상금률
        </h3>

        <p class="text-body-4 font-weight-light">경과개월별 차등 (20%~40%)</p>
      </section>

      <section>
        <h3 class="text-body-2 row-margin-item-medium">
          ※ 경과개월에 따른 중도해지 손해배상금률 안내표
        </h3>
      </section>

      <div class="table-wrap">
        <section class="row-margin-container-medium">
          <div :class="$style['basic-table']">
            <div :class="$style['basic-table']" class="table-scoped">
              <table>
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th colspan="2" rowspan="2">구분</th>
                    <th colspan="5">경과개월</th>
                  </tr>
                  <tr>
                    <th>12개월<br />이하</th>
                    <th>24개월<br />이하</th>
                    <th>36개월<br />이하</th>
                    <th>48개월<br />이하</th>
                    <th>60개월<br />이하</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowspan="5">
                      리<br />스<br />계<br />약<br />기<br />간
                    </td>
                    <td>12개월<br />이하</td>
                    <td>40%<br /><span>(월별차등)</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td :class="$style['basic-table__left-line']">
                      24개월<br />이하
                    </td>
                    <td>40%</td>
                    <td>35%<br /><span>(월별차등)</span></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td :class="$style['basic-table__left-line']">
                      36개월<br />이하
                    </td>
                    <td>40%</td>
                    <td>35%</td>
                    <td>30%<br /><span>(월별차등)</span></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td :class="$style['basic-table__left-line']">
                      48개월<br />이하
                    </td>
                    <td>40%</td>
                    <td>35%</td>
                    <td>30%</td>
                    <td>25%<br /><span>(월별차등)</span></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td :class="$style['basic-table__left-line']">
                      60개월<br />이하
                    </td>
                    <td>40%</td>
                    <td>35%</td>
                    <td>30%</td>
                    <td>25%</td>
                    <td>20%<br /><span>(월별차등)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/identification/Common_M00_l055.scss';
</style>

<style lang="scss" scoped>
section {
  .margin-scoped {
    margin-top: 12px;
  }

  &:nth-of-type(2) {
    margin-top: 30px;
  }
  &:nth-of-type(3) {
    margin-top: 60px;
  }
}

.table-wrap {
  margin-top: 16px;

  .table-scoped {
    > table {
      > thead {
        > tr:nth-of-type(2) {
          > th {
            color: #15181f;
            font-size: 12px;
            padding: 16px 0;

            &:first-child {
              border-left: 1px solid #e0e0e0;
            }
          }
        }
      }

      > tbody {
        > tr {
          > td {
            padding: 16px 0;
            font-size: 12px;
            > span {
              font-size: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
