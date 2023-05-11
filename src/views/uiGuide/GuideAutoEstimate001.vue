<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerAutoEstimateContinuePrev from '@/views/auto/LayerAutoEstimateContinuePrev.vue';
import LayerAutoEstimateLeaveAlert from '@/views/auto/LayerAutoEstimateLeaveAlert.vue';
import LayerAutoEstimateCompareLeaseRental from '@/views/auto/LayerAutoEstimateCompareLeaseRental.vue';
import LayerAutoEstimateSelectUserType from '@/views/auto/LayerAutoEstimateSelectUserType.vue';
import LayerAutoEstimateCounseling from '@/views/auto/LayerAutoEstimateCounseling.vue';
import LayerAutoEstimateCounselingComplete from '@/views/auto/LayerAutoEstimateCounselingComplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerAutoEstimateCounseling,
    LayerAutoEstimateCounselingComplete,
    LayerAutoEstimateCompareLeaseRental,
    LayerAutoEstimateSelectUserType,
    LayerAutoEstimateContinuePrev,
    LayerAutoEstimateLeaveAlert,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);
    const layer006 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };
    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };
    const layer003Open = (e = {}) => {
      layer003.value.layer.open(e.target);
    };
    const layer004Open = (e = {}) => {
      layer004.value.layer.open(e.target);
    };
    const layer005Open = (e = {}) => {
      layer005.value.layer.open(e.target);
    };
    const layer006Open = (e = {}) => {
      layer006.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
    };
  },
};
</script>

<template>
  <PageContents>
    <ButtonList
      :classNames="{
        wrap: 'row-margin-none',
      }"
      align="full"
    >
      <ButtonListItem>
        <BasicButton @click="layer001Open"
          >진행이력 팝업<br />AF_M00_b017</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >이탈 안내팝업<br />AF_M00_b002</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >리스/렌트 비교 정보 팝업<br />AF_M00_b007</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open"
          >이용자 유형 선택 팝업<br />AF_M00_b011</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open"
          >신청정보 입력<br />AF_M00_l009</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open"
          >상담 신청완료<br />AF_M00_l010</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerAutoEstimateContinuePrev ref="layer001" />
    <LayerAutoEstimateLeaveAlert ref="layer002" />
    <LayerAutoEstimateCompareLeaseRental ref="layer003" />
    <LayerAutoEstimateSelectUserType ref="layer004" />
    <LayerAutoEstimateCounseling ref="layer005" />
    <LayerAutoEstimateCounselingComplete ref="layer006" />
  </PageContents>
</template>
