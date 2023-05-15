<script>
// AF_M00_b007
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
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
  <UiLayer
    ref="layer"
    type="toast"
    :backgroundClose="true"
    v-slot="layerSlotProps"
  >
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>리스/렌트 비교 정보</PopupTitle>
        </ToastPopupHead>
      </template>

      <div :class="$style['basic-table']">
        <table>
          <colgroup>
            <col style="width: 82px" />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>항목</th>
              <th>리스</th>
              <th>렌트</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>관련법률</th>
              <td>여신전문<br />금융업법<br />시설대대여법</td>
              <td>여객자동차운수<br />사업법상<br />자동차 대여사업</td>
            </tr>
            <tr>
              <th>등록명의</th>
              <td>리스회사</td>
              <td>렌트회사</td>
            </tr>
            <tr>
              <th>번호판</th>
              <td>자가용</td>
              <td style="padding: 0">영업용(하/허/호)</td>
            </tr>
            <tr>
              <th>차종</th>
              <td>제한 없음</td>
              <td>15인승 이하,<br />승합, 승용차</td>
            </tr>
            <tr>
              <th>차량제한</th>
              <td>없음</td>
              <td>있음</td>
            </tr>
            <tr>
              <th>최소<br />대여기간</th>
              <td>1년 이상</td>
              <td>1년 이상<br />(장기렌트)</td>
            </tr>
            <tr>
              <th>부가세</th>
              <td>면세</td>
              <td>과세<br />(VAT 10% 포함)</td>
            </tr>
            <tr>
              <th>보험요율</th>
              <td>고객보험 요율<br />(보험 경력 유지)</td>
              <td>공가금액의 4%</td>
            </tr>
            <tr>
              <th>공채<br />매입률</th>
              <td>배기량에 따라<br />4%~20%</td>
              <td>없음</td>
            </tr>
            <tr>
              <th>차동차세</th>
              <td>CC당<br />130~286원</td>
              <td>CC당<br />18~24원</td>
            </tr>
            <tr>
              <th>주행제한<br />거리</th>
              <td>최대 4만 km</td>
              <td>최대 5만 km</td>
            </tr>
            <tr>
              <th>정비<br />서비스</th>
              <td>미제공</td>
              <td>제공<br />(단, 국산차 Self 상품 및 수입차 렌트 제외)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton @click="layerSlotProps.close()">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoEstimateCompareLeaseRental.scss';
</style>
