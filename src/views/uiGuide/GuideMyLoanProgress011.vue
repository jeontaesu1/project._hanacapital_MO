<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanOnlineContractDescription009_001 from '@/views/myLoan/LayerMyLoanOnlineContractDescription009_001.vue';
import LayerMyLoanOnlineContractDescription009_002 from '../myLoan/LayerMyLoanOnlineContractDescription009_002.vue';
import LayerMyLoanOnlineContractDescription009_003 from '../myLoan/LayerMyLoanOnlineContractDescription009_003.vue';
import LayerMyLoanOnlineContractDescription009_004 from '../myLoan/LayerMyLoanOnlineContractDescription009_004.vue';
import LayerMyLoanOnlineContractDescription009_005 from '../myLoan/LayerMyLoanOnlineContractDescription009_005.vue';
import LayerMyLoanOnlineContractDescription009_006 from '../myLoan/LayerMyLoanOnlineContractDescription009_006.vue';
import LayerMyLoanOnlineContractDescription009_007 from '../myLoan/LayerMyLoanOnlineContractDescription009_007.vue';
import LayerMyLoanOnlineContractDescription009_008 from '../myLoan/LayerMyLoanOnlineContractDescription009_008.vue';
import LayerMyLoanOnlineContractDescription009_009 from '../myLoan/LayerMyLoanOnlineContractDescription009_009.vue';
import LayerMyLoanOnlineContractDescription009_010 from '../myLoan/LayerMyLoanOnlineContractDescription009_010.vue';
import LayerMyLoanOnlineContractDescription009_011 from '../myLoan/LayerMyLoanOnlineContractDescription009_011.vue';
import LayerMyLoanOnlineContractDescription009_012 from '../myLoan/LayerMyLoanOnlineContractDescription009_012.vue';
import LayerMyLoanOnlineContractDescription009_013 from '../myLoan/LayerMyLoanOnlineContractDescription009_013.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanOnlineContractDescription009_001,
    LayerMyLoanOnlineContractDescription009_002,
    LayerMyLoanOnlineContractDescription009_003,
    LayerMyLoanOnlineContractDescription009_004,
    LayerMyLoanOnlineContractDescription009_005,
    LayerMyLoanOnlineContractDescription009_006,
    LayerMyLoanOnlineContractDescription009_007,
    LayerMyLoanOnlineContractDescription009_008,
    LayerMyLoanOnlineContractDescription009_009,
    LayerMyLoanOnlineContractDescription009_010,
    LayerMyLoanOnlineContractDescription009_011,
    LayerMyLoanOnlineContractDescription009_012,
    LayerMyLoanOnlineContractDescription009_013,
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
        <BasicButton @click="layer001Open">
          중요사항 안내_일반리스1<br />My_M03_l286
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          중요사항 안내_일반리스2<br />My_M03_l287
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          중요사항 안내_일반리스3<br />My_M03_l288
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          중요사항 안내_일반리스4<br />My_M03_l289
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          중요사항 안내_일반리스5<br />My_M03_l290
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          중요사항 안내_일반리스6<br />My_M03_l291
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          주요권리 안내_일반리스1<br />My_M03_l292
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          주요권리 안내_일반리스1<br />My_M03_l292
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          주요권리 안내_일반리스2<br />My_M03_l293
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          주요권리 안내_일반리스3<br />My_M03_l294
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          주요권리 안내_일반리스4<br />My_M03_l295
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          주요권리 안내_일반리스5<br />My_M03_l296
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open">
          상품설명서 약관동의_일반리스설명서<br />My_M99_l010
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanOnlineContractDescription009_001 ref="layer001" />
    <LayerMyLoanOnlineContractDescription009_002 ref="layer002" />
    <LayerMyLoanOnlineContractDescription009_003 ref="layer003" />
    <LayerMyLoanOnlineContractDescription009_004 ref="layer004" />
    <LayerMyLoanOnlineContractDescription009_005 ref="layer005" />
    <LayerMyLoanOnlineContractDescription009_006 ref="layer006" />
    <LayerMyLoanOnlineContractDescription009_007 ref="layer007" />
    <LayerMyLoanOnlineContractDescription009_008 ref="layer008" />
    <LayerMyLoanOnlineContractDescription009_009 ref="layer009" />
    <LayerMyLoanOnlineContractDescription009_010 ref="layer010" />
    <LayerMyLoanOnlineContractDescription009_011 ref="layer011" />
    <LayerMyLoanOnlineContractDescription009_012 ref="layer012" />
    <LayerMyLoanOnlineContractDescription009_013 ref="layer013" />
  </PageContents>
</template>
