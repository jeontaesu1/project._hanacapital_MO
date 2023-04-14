<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerAutoLongRentalEvaluationCounseling from '../auto/LayerAutoLongRentalEvaluationCounseling.vue';
import LayerAutoLongRentalEvaluationCounselingComplete from '../auto/LayerAutoLongRentalEvaluationCounselingComplete.vue';
import LayerAutoLongRentalEvaluationComplete from '@/views/auto/LayerAutoLongRentalEvaluationComplete.vue';
import LayerAutoLongRentalEvaluationFailLimit from '@/views/auto/LayerAutoLongRentalEvaluationFailLimit.vue';
import LayerAutoLongRentalEvaluationFailReject from '@/views/auto/LayerAutoLongRentalEvaluationFailReject.vue';
import LayerAutoLongRentalEvaluationExpire from '@/views/auto/LayerAutoLongRentalEvaluationExpire.vue';
import LayerAutoLongRentalOrder from '@/views/auto/LayerAutoLongRentalOrder.vue';
import LayerAutoLongRentalOrderAlert from '@/views/auto/LayerAutoLongRentalOrderAlert.vue';
import LayerAutoLongRentalOrderComplete from '@/views/auto/LayerAutoLongRentalOrderComplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerAutoLongRentalEvaluationCounseling,
    LayerAutoLongRentalEvaluationCounselingComplete,
    LayerAutoLongRentalEvaluationComplete,
    LayerAutoLongRentalEvaluationFailLimit,
    LayerAutoLongRentalEvaluationFailReject,
    LayerAutoLongRentalEvaluationExpire,
    LayerAutoLongRentalOrder,
    LayerAutoLongRentalOrderAlert,
    LayerAutoLongRentalOrderComplete,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);
    const layer006 = ref(null);
    const layer007 = ref(null);
    const layer008 = ref(null);
    const layer009 = ref(null);

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
    const layer007Open = (e = {}) => {
      layer007.value.layer.open(e.target);
    };
    const layer008Open = (e = {}) => {
      layer008.value.layer.open(e.target);
    };
    const layer009Open = (e = {}) => {
      layer009.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer007,
      layer008,
      layer009,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
      layer007Open,
      layer008Open,
      layer009Open,
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
          >신청정보 입력<br />AF_M00_l009</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >상담 신청완료<br />AF_M00_l010</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >심사승인(시스템심사)<br />AF_M01_l004</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open"
          >심사승인(한도부족)<br />AF_M01_l005</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open"
          >심사승인(부결)<br />AF_M01_l006</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open"
          >견적 만료<br />AF_M01_l007</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open"
          >발주 신청 안내<br />AF_M01_l008</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open"
          >발주신청 안내_팝업<br />AF_M01_b001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open"
          >발주신청 완료<br />AF_M01_l010</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerAutoLongRentalEvaluationCounseling ref="layer001" />
    <LayerAutoLongRentalEvaluationCounselingComplete ref="layer002" />
    <LayerAutoLongRentalEvaluationComplete ref="layer003" />
    <LayerAutoLongRentalEvaluationFailLimit ref="layer004" />
    <LayerAutoLongRentalEvaluationFailReject ref="layer005" />
    <LayerAutoLongRentalEvaluationExpire ref="layer006" />
    <LayerAutoLongRentalOrder ref="layer007" />
    <LayerAutoLongRentalOrderAlert ref="layer008" />
    <LayerAutoLongRentalOrderComplete ref="layer009" />
  </PageContents>
</template>
