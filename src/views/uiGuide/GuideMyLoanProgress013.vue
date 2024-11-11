<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanOnlineContractDescription010_001 from '@/views/myLoan/LayerMyLoanOnlineContractDescription010_001.vue';
import LayerMyLoanOnlineContractDescription010_002 from '@/views/myLoan/LayerMyLoanOnlineContractDescription010_002.vue';
import LayerMyLoanOnlineContractDescription010_003 from '@/views/myLoan/LayerMyLoanOnlineContractDescription010_003.vue';
import LayerMyLoanOnlineContractDescription010_004 from '@/views/myLoan/LayerMyLoanOnlineContractDescription010_004.vue';
import LayerMyLoanOnlineContractDescription010_005 from '@/views/myLoan/LayerMyLoanOnlineContractDescription010_005.vue';
import LayerMyLoanOnlineContractDescription010_006 from '@/views/myLoan/LayerMyLoanOnlineContractDescription010_006.vue';
import LayerMyLoanOnlineContractDescription010_007 from '@/views/myLoan/LayerMyLoanOnlineContractDescription010_007.vue';
import LayerMyLoanOnlineContractDescription010_008 from '@/views/myLoan/LayerMyLoanOnlineContractDescription010_008.vue';
import LayerMyLoanOnlineContractDescription010_009 from '@/views/myLoan/LayerMyLoanOnlineContractDescription010_009.vue';
import LayerMyLoanOnlineContractDescription010_010 from '@/views/myLoan/LayerMyLoanOnlineContractDescription010_010.vue';
import LayerMyLoanOnlineContractDescription010_011 from '@/views/myLoan/LayerMyLoanOnlineContractDescription010_011.vue';
import LayerMyLoanOnlineContractDescription010 from '@/views/myLoan/LayerMyLoanOnlineContractDescription010.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanOnlineContractDescription010_001,
    LayerMyLoanOnlineContractDescription010_002,
    LayerMyLoanOnlineContractDescription010_003,
    LayerMyLoanOnlineContractDescription010_004,
    LayerMyLoanOnlineContractDescription010_005,
    LayerMyLoanOnlineContractDescription010_006,
    LayerMyLoanOnlineContractDescription010_007,
    LayerMyLoanOnlineContractDescription010_008,
    LayerMyLoanOnlineContractDescription010_009,
    LayerMyLoanOnlineContractDescription010_010,
    LayerMyLoanOnlineContractDescription010_011,
    LayerMyLoanOnlineContractDescription010,
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
          중요사항 안내_스탁론1<br />My_M03_l297
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          중요사항 안내_스탁론2<br />My_M03_l298
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          중요사항 안내_스탁론3<br />My_M03_l299
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          중요사항 안내_스탁론4<br />My_M03_l300
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          중요사항 안내_스탁론5<br />My_M03_l301
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          주요권리 안내_스탁론6<br />My_M03_l302
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          주요권리 안내_스탁론7<br />My_M03_l303
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          주요권리 안내_스탁론8<br />My_M03_l304
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          주요권리 안내_스탁론9<br />My_M03_l305
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          주요권리 안내_스탁론10<br />My_M03_l306
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          상품설명서 약관동의_스탁론설명서<br />My_M99_l012
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          상품설명서 확인안내_스탁론<br />My_M03_l307
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanOnlineContractDescription010_001 ref="layer001" />
    <LayerMyLoanOnlineContractDescription010_002 ref="layer002" />
    <LayerMyLoanOnlineContractDescription010_003 ref="layer003" />
    <LayerMyLoanOnlineContractDescription010_004 ref="layer004" />
    <LayerMyLoanOnlineContractDescription010_005 ref="layer005" />
    <LayerMyLoanOnlineContractDescription010_006 ref="layer006" />
    <LayerMyLoanOnlineContractDescription010_007 ref="layer007" />
    <LayerMyLoanOnlineContractDescription010_008 ref="layer008" />
    <LayerMyLoanOnlineContractDescription010_009 ref="layer009" />
    <LayerMyLoanOnlineContractDescription010_010 ref="layer010" />
    <LayerMyLoanOnlineContractDescription010_011 ref="layer011" />
    <LayerMyLoanOnlineContractDescription010 ref="layer012" />
  </PageContents>
</template>
