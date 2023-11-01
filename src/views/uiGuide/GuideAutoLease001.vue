<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerAutoLeaseEvaluationComplete from '@/views/auto/LayerAutoLeaseEvaluationComplete.vue';
import LayerAutoLeaseEvaluationFailLimit001 from '@/views/auto/LayerAutoLeaseEvaluationFailLimit001.vue';
import LayerAutoLeaseEvaluationFailLimit002 from '@/views/auto/LayerAutoLeaseEvaluationFailLimit002.vue';
import LayerAutoLeaseEvaluationFailReject from '@/views/auto/LayerAutoLeaseEvaluationFailReject.vue';
import LayerAutoLeaseEvaluationExpire from '@/views/auto/LayerAutoLeaseEvaluationExpire.vue';
import LayerAutoLeaseOrderImported from '@/views/auto/LayerAutoLeaseOrderImported.vue';
import LayerAutoLeaseOrderDomestic from '@/views/auto/LayerAutoLeaseOrderDomestic.vue';
import LayerAutoLeaseOrderCarNumber from '@/views/auto/LayerAutoLeaseOrderCarNumber.vue';
import AF_M00_l100 from '@/views/auto/AF_M00_l100.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerAutoLeaseEvaluationComplete,
    LayerAutoLeaseEvaluationFailLimit001,
    LayerAutoLeaseEvaluationFailLimit002,
    LayerAutoLeaseEvaluationFailReject,
    LayerAutoLeaseEvaluationExpire,
    LayerAutoLeaseOrderImported,
    LayerAutoLeaseOrderDomestic,
    LayerAutoLeaseOrderCarNumber,
    AF_M00_l100,
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
          >심사승인(시스템심사)<br />AF_M02_l014</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >심사승인(한도부족) type 1<br />AF_M02_l005</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open"
          >심사승인(한도부족) type 2<br />AF_M02_l005</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >심사승인(부결)<br />AF_M02_l006</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open"
          >견적 만료<br />AF_M02_l007</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open"
          >판매사 정보 입력(수입차)<br />AF_M02_l008</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open"
          >판매사 정보 입력(국산차)<br />AF_M02_l009</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open"
          >차량번호 등록<br />AF_M02_l011</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open"
          >서류 등록 완료<br />AF_M00_l100</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerAutoLeaseEvaluationComplete ref="layer001" />
    <LayerAutoLeaseEvaluationFailLimit001 ref="layer002" />
    <LayerAutoLeaseEvaluationFailLimit002 ref="layer008" />
    <LayerAutoLeaseEvaluationFailReject ref="layer003" />
    <LayerAutoLeaseEvaluationExpire ref="layer004" />
    <LayerAutoLeaseOrderImported ref="layer005" />
    <LayerAutoLeaseOrderDomestic ref="layer006" />
    <LayerAutoLeaseOrderCarNumber ref="layer007" />
    <AF_M00_l100 ref="layer008" />
  </PageContents>
</template>
