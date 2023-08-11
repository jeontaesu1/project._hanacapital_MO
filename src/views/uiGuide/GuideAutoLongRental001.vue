<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerAutoLongRentalEvaluationComplete from '@/views/auto/LayerAutoLongRentalEvaluationComplete.vue';
import LayerAutoLongRentalEvaluationFailLimit001 from '@/views/auto/LayerAutoLongRentalEvaluationFailLimit001.vue';
import LayerAutoLongRentalEvaluationFailLimit002 from '@/views/auto/LayerAutoLongRentalEvaluationFailLimit002.vue';
import LayerAutoLongRentalEvaluationFailReject from '@/views/auto/LayerAutoLongRentalEvaluationFailReject.vue';
import LayerAutoLongRentalEvaluationExpire from '@/views/auto/LayerAutoLongRentalEvaluationExpire.vue';
import LayerAutoLongRentalOrder from '@/views/auto/LayerAutoLongRentalOrder.vue';
import LayerAutoLongRentalOrderConfirm from '@/views/auto/LayerAutoLongRentalOrderConfirm.vue';
import LayerAutoLongRentalOrderAlert from '@/views/auto/LayerAutoLongRentalOrderAlert.vue';
import LayerAutoLongRentalOrderComplete from '@/views/auto/LayerAutoLongRentalOrderComplete.vue';
import LayerAutoLongRentalDelivery from '@/views/auto/LayerAutoLongRentalDelivery.vue';
import LayerAutoLongRentalDeliveryForm from '@/views/auto/LayerAutoLongRentalDeliveryForm.vue';
import LayerAutoLongRentalOrderExpire from '@/views/auto/LayerAutoLongRentalOrderExpire.vue';
import LayerAutoLongRentalOrderFail from '@/views/auto/LayerAutoLongRentalOrderFail.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerAutoLongRentalEvaluationComplete,
    LayerAutoLongRentalEvaluationFailLimit001,
    LayerAutoLongRentalEvaluationFailLimit002,
    LayerAutoLongRentalEvaluationFailReject,
    LayerAutoLongRentalEvaluationExpire,
    LayerAutoLongRentalOrder,
    LayerAutoLongRentalOrderConfirm,
    LayerAutoLongRentalOrderAlert,
    LayerAutoLongRentalOrderComplete,
    LayerAutoLongRentalDelivery,
    LayerAutoLongRentalDeliveryForm,
    LayerAutoLongRentalOrderExpire,
    LayerAutoLongRentalOrderFail,
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
    const layer010 = ref(null);
    const layer011 = ref(null);
    const layer012 = ref(null);
    const layer013 = ref(null);

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
    const layer010Open = (e = {}) => {
      layer010.value.layer.open(e.target);
    };
    const layer011Open = (e = {}) => {
      layer011.value.layer.open(e.target);
    };
    const layer012Open = (e = {}) => {
      layer012.value.layer.open(e.target);
    };
    const layer013Open = (e = {}) => {
      layer013.value.layer.open(e.target);
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
      layer010,
      layer011,
      layer012,
      layer013,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
      layer007Open,
      layer008Open,
      layer009Open,
      layer010Open,
      layer011Open,
      layer012Open,
      layer013Open,
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
          >심사승인(시스템심사)<br />AF_M01_l013</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >심사승인(한도부족) type 1<br />AF_M01_l005</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open"
          >심사승인(한도부족) type 2<br />AF_M01_l005</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >심사승인(부결)<br />AF_M01_l006</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open"
          >견적 만료<br />AF_M01_l007</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open"
          >발주 신청 안내<br />AF_M01_l008</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open"
          >계약조건 안내<br />AF_M01_l009</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open"
          >발주신청 안내_팝업<br />AF_M01_b001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open"
          >발주신청 완료<br />AF_M01_l010</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open"
          >인도요청 안내<br />AF_M01_l011</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open"
          >인도요청 정보입력<br />AF_M01_l012</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          발주완료 견적 만료 안내<br />AF_M01_l014
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          발주차량 정보 변동 안내<br />AF_M01_l015
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerAutoLongRentalEvaluationComplete ref="layer001" />
    <LayerAutoLongRentalEvaluationFailLimit001 ref="layer002" />
    <LayerAutoLongRentalEvaluationFailLimit002 ref="layer013" />
    <LayerAutoLongRentalEvaluationFailReject ref="layer003" />
    <LayerAutoLongRentalEvaluationExpire ref="layer004" />
    <LayerAutoLongRentalOrder ref="layer005" />
    <LayerAutoLongRentalOrderConfirm ref="layer006" />
    <LayerAutoLongRentalOrderAlert ref="layer007" />
    <LayerAutoLongRentalOrderComplete ref="layer008" />
    <LayerAutoLongRentalDelivery ref="layer009" />
    <LayerAutoLongRentalDeliveryForm ref="layer010" />
    <LayerAutoLongRentalOrderExpire ref="layer011" />
    <LayerAutoLongRentalOrderFail ref="layer012" />
  </PageContents>
</template>
