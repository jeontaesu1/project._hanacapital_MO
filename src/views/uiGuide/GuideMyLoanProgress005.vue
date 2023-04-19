<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanOnlineContractDescription003_001 from '@/views/myLoan/LayerMyLoanOnlineContractDescription003_001.vue';
import LayerMyLoanOnlineContractDescription003_002 from '@/views/myLoan/LayerMyLoanOnlineContractDescription003_002.vue';
import LayerMyLoanOnlineContractDescription003_003 from '@/views/myLoan/LayerMyLoanOnlineContractDescription003_003.vue';
import LayerMyLoanOnlineContractDescription003_004 from '@/views/myLoan/LayerMyLoanOnlineContractDescription003_004.vue';
import LayerMyLoanOnlineContractDescription003_005 from '@/views/myLoan/LayerMyLoanOnlineContractDescription003_005.vue';
import LayerMyLoanOnlineContractDescription003_006 from '@/views/myLoan/LayerMyLoanOnlineContractDescription003_006.vue';
import LayerMyLoanOnlineContractDescription003_007 from '@/views/myLoan/LayerMyLoanOnlineContractDescription003_007.vue';
import LayerMyLoanOnlineContractDescription003_008 from '@/views/myLoan/LayerMyLoanOnlineContractDescription003_008.vue';
import LayerMyLoanOnlineContractDescription003_009 from '@/views/myLoan/LayerMyLoanOnlineContractDescription003_009.vue';
import LayerMyLoanOnlineContractDescription003_010 from '@/views/myLoan/LayerMyLoanOnlineContractDescription003_010.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanOnlineContractDescription003_001,
    LayerMyLoanOnlineContractDescription003_002,
    LayerMyLoanOnlineContractDescription003_003,
    LayerMyLoanOnlineContractDescription003_004,
    LayerMyLoanOnlineContractDescription003_005,
    LayerMyLoanOnlineContractDescription003_006,
    LayerMyLoanOnlineContractDescription003_007,
    LayerMyLoanOnlineContractDescription003_008,
    LayerMyLoanOnlineContractDescription003_009,
    LayerMyLoanOnlineContractDescription003_010,
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
          중도금대출 001<br />My_M03_l223
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          중도금대출 002<br />My_M03_l224
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          중도금대출 003<br />My_M03_l225
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          중도금대출 004<br />My_M03_l226
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          중도금대출 005<br />My_M03_l227
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          중도금대출 006<br />My_M03_l228
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          중도금대출 007<br />My_M03_l229
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          중도금대출 008<br />My_M03_l230
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          중도금대출 009<br />My_M99_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          중도금대출 010<br />My_M99_l005
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanOnlineContractDescription003_001 ref="layer001" />
    <LayerMyLoanOnlineContractDescription003_002 ref="layer002" />
    <LayerMyLoanOnlineContractDescription003_003 ref="layer003" />
    <LayerMyLoanOnlineContractDescription003_004 ref="layer004" />
    <LayerMyLoanOnlineContractDescription003_005 ref="layer005" />
    <LayerMyLoanOnlineContractDescription003_006 ref="layer006" />
    <LayerMyLoanOnlineContractDescription003_007 ref="layer007" />
    <LayerMyLoanOnlineContractDescription003_008 ref="layer008" />
    <LayerMyLoanOnlineContractDescription003_009 ref="layer009" />
    <LayerMyLoanOnlineContractDescription003_010 ref="layer010" />
  </PageContents>
</template>
