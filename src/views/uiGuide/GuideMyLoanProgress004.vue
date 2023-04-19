<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanOnlineContractDescription002_001 from '@/views/myLoan/LayerMyLoanOnlineContractDescription002_001.vue';
import LayerMyLoanOnlineContractDescription002_002 from '@/views/myLoan/LayerMyLoanOnlineContractDescription002_002.vue';
import LayerMyLoanOnlineContractDescription002_003 from '@/views/myLoan/LayerMyLoanOnlineContractDescription002_003.vue';
import LayerMyLoanOnlineContractDescription002_004 from '@/views/myLoan/LayerMyLoanOnlineContractDescription002_004.vue';
import LayerMyLoanOnlineContractDescription002_005 from '@/views/myLoan/LayerMyLoanOnlineContractDescription002_005.vue';
import LayerMyLoanOnlineContractDescription002_006 from '@/views/myLoan/LayerMyLoanOnlineContractDescription002_006.vue';
import LayerMyLoanOnlineContractDescription002_007 from '@/views/myLoan/LayerMyLoanOnlineContractDescription002_007.vue';
import LayerMyLoanOnlineContractDescription002_008 from '@/views/myLoan/LayerMyLoanOnlineContractDescription002_008.vue';
import LayerMyLoanOnlineContractDescription002_009 from '@/views/myLoan/LayerMyLoanOnlineContractDescription002_009.vue';
import LayerMyLoanOnlineContractDescription002_010 from '@/views/myLoan/LayerMyLoanOnlineContractDescription002_010.vue';
import LayerMyLoanOnlineContractDescription002_011 from '@/views/myLoan/LayerMyLoanOnlineContractDescription002_011.vue';
import LayerMyLoanOnlineContractDescription002_012 from '@/views/myLoan/LayerMyLoanOnlineContractDescription002_012.vue';
import LayerMyLoanOnlineContractDescription002_013 from '@/views/myLoan/LayerMyLoanOnlineContractDescription002_013.vue';
import LayerMyLoanOnlineContractDescription002_014 from '@/views/myLoan/LayerMyLoanOnlineContractDescription002_014.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanOnlineContractDescription002_001,
    LayerMyLoanOnlineContractDescription002_002,
    LayerMyLoanOnlineContractDescription002_003,
    LayerMyLoanOnlineContractDescription002_004,
    LayerMyLoanOnlineContractDescription002_005,
    LayerMyLoanOnlineContractDescription002_006,
    LayerMyLoanOnlineContractDescription002_007,
    LayerMyLoanOnlineContractDescription002_008,
    LayerMyLoanOnlineContractDescription002_009,
    LayerMyLoanOnlineContractDescription002_010,
    LayerMyLoanOnlineContractDescription002_011,
    LayerMyLoanOnlineContractDescription002_012,
    LayerMyLoanOnlineContractDescription002_013,
    LayerMyLoanOnlineContractDescription002_014,
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
    const layer014 = ref(null);

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
    const layer014Open = (e = {}) => {
      layer014.value.layer.open(e.target);
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
      layer014,
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
      layer014Open,
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
          일반할부금융 001<br />My_M03_l211
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          일반할부금융 002<br />My_M03_l212
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          일반할부금융 003<br />My_M03_l213
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          일반할부금융 004<br />My_M03_l214
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          일반할부금융 005<br />My_M03_l215
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          일반할부금융 006<br />My_M03_l216
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          일반할부금융 007<br />My_M03_l217
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          일반할부금융 008<br />My_M03_l218
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          일반할부금융 009<br />My_M03_l218
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          일반할부금융 010<br />My_M03_l219
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          일반할부금융 011<br />My_M03_l220
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          일반할부금융 012<br />My_M03_l221
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open">
          일반할부금융 013<br />My_M03_l222
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer014Open">
          일반할부금융 014<br />My_M99_l003
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanOnlineContractDescription002_001 ref="layer001" />
    <LayerMyLoanOnlineContractDescription002_002 ref="layer002" />
    <LayerMyLoanOnlineContractDescription002_003 ref="layer003" />
    <LayerMyLoanOnlineContractDescription002_004 ref="layer004" />
    <LayerMyLoanOnlineContractDescription002_005 ref="layer005" />
    <LayerMyLoanOnlineContractDescription002_006 ref="layer006" />
    <LayerMyLoanOnlineContractDescription002_007 ref="layer007" />
    <LayerMyLoanOnlineContractDescription002_008 ref="layer008" />
    <LayerMyLoanOnlineContractDescription002_009 ref="layer009" />
    <LayerMyLoanOnlineContractDescription002_010 ref="layer010" />
    <LayerMyLoanOnlineContractDescription002_011 ref="layer011" />
    <LayerMyLoanOnlineContractDescription002_012 ref="layer012" />
    <LayerMyLoanOnlineContractDescription002_013 ref="layer013" />
    <LayerMyLoanOnlineContractDescription002_014 ref="layer014" />
  </PageContents>
</template>
