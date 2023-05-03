<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanOnlineContractSuccessionConfirm004 from '@/views/myLoan/LayerMyLoanOnlineContractSuccessionConfirm004.vue';
import LayerMyLoanOnlineContractIntermediateDocument001 from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateDocument001.vue';
import LayerMyLoanOnlineContractIntermediateDocument002 from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateDocument002.vue';
import LayerMyLoanOnlineContractIntermediateDocument003 from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateDocument003.vue';
import LayerMyLoanOnlineContractURLSelectDocument from '@/views/myLoan/LayerMyLoanOnlineContractURLSelectDocument.vue';
import LayerMyLoanOnlineContractURLThing from '@/views/myLoan/LayerMyLoanOnlineContractURLThing.vue';
import LayerMyLoanOnlineContractURLLeaseThingCheck from '@/views/myLoan/LayerMyLoanOnlineContractURLLeaseThingCheck.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanOnlineContractSuccessionConfirm004,
    LayerMyLoanOnlineContractIntermediateDocument001,
    LayerMyLoanOnlineContractIntermediateDocument002,
    LayerMyLoanOnlineContractIntermediateDocument003,
    LayerMyLoanOnlineContractURLSelectDocument,
    LayerMyLoanOnlineContractURLThing,
    LayerMyLoanOnlineContractURLLeaseThingCheck,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);
    const layer006 = ref(null);
    const layer007 = ref(null);

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

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer007,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
      layer007Open,
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
          >승계확약서_오토리스<br />AF_M98_l005</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >중도금 분할 실행 동의서<br />BF_M04_l008</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >채권 양도 담보설정계약서<br />BF_M04_l009</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open"
          >채권 양도 통지서<br />BF_M04_l010</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open"
          >약정 서류 확인<br />BF_M05_l008</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open"
          >물건수령증(장비견적서 포함)<br />BF_M05_l011</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open"
          >리스물건 점검보고서<br />BF_M05_l012</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanOnlineContractSuccessionConfirm004 ref="layer001" />
    <LayerMyLoanOnlineContractIntermediateDocument001 ref="layer002" />
    <LayerMyLoanOnlineContractIntermediateDocument002 ref="layer003" />
    <LayerMyLoanOnlineContractIntermediateDocument003 ref="layer004" />
    <LayerMyLoanOnlineContractURLSelectDocument ref="layer005" />
    <LayerMyLoanOnlineContractURLThing ref="layer006" />
    <LayerMyLoanOnlineContractURLLeaseThingCheck ref="layer007" />
  </PageContents>
</template>
