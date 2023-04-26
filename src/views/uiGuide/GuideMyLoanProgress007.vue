<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanOnlineContractDescription005_001 from '@/views/myLoan/LayerMyLoanOnlineContractDescription005_001.vue';
import LayerMyLoanOnlineContractDescription005_002 from '@/views/myLoan/LayerMyLoanOnlineContractDescription005_002.vue';
import LayerMyLoanOnlineContractDescription005_003 from '@/views/myLoan/LayerMyLoanOnlineContractDescription005_003.vue';
import LayerMyLoanOnlineContractDescription005_004 from '@/views/myLoan/LayerMyLoanOnlineContractDescription005_004.vue';
import LayerMyLoanOnlineContractDescription005_005 from '@/views/myLoan/LayerMyLoanOnlineContractDescription005_005.vue';
import LayerMyLoanOnlineContractDescription005_006 from '@/views/myLoan/LayerMyLoanOnlineContractDescription005_006.vue';
import LayerMyLoanOnlineContractDescription005_007 from '@/views/myLoan/LayerMyLoanOnlineContractDescription005_007.vue';
import LayerMyLoanOnlineContractDescription005_008 from '@/views/myLoan/LayerMyLoanOnlineContractDescription005_008.vue';
import LayerMyLoanOnlineContractDescription005_009 from '@/views/myLoan/LayerMyLoanOnlineContractDescription005_009.vue';
import LayerMyLoanOnlineContractDescription005_010 from '@/views/myLoan/LayerMyLoanOnlineContractDescription005_010.vue';
import LayerMyLoanOnlineContractDescription005_011 from '@/views/myLoan/LayerMyLoanOnlineContractDescription005_011.vue';
import LayerMyLoanOnlineContractDescription005_012 from '@/views/myLoan/LayerMyLoanOnlineContractDescription005_012.vue';
import LayerMyLoanOnlineContractDescription005_013 from '@/views/myLoan/LayerMyLoanOnlineContractDescription005_013.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanOnlineContractDescription005_001,
    LayerMyLoanOnlineContractDescription005_002,
    LayerMyLoanOnlineContractDescription005_003,
    LayerMyLoanOnlineContractDescription005_004,
    LayerMyLoanOnlineContractDescription005_005,
    LayerMyLoanOnlineContractDescription005_006,
    LayerMyLoanOnlineContractDescription005_007,
    LayerMyLoanOnlineContractDescription005_008,
    LayerMyLoanOnlineContractDescription005_009,
    LayerMyLoanOnlineContractDescription005_010,
    LayerMyLoanOnlineContractDescription005_011,
    LayerMyLoanOnlineContractDescription005_012,
    LayerMyLoanOnlineContractDescription005_013,
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
          중요사항 안내_중고차오토론(대출)1<br />My_M03_l242
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          중요사항 안내_중고차오토론(대출)2<br />My_M03_l243
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          중요사항 안내_중고차오토론(대출)3<br />My_M03_l244
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          중요사항 안내_중고차오토론(대출)4<br />My_M03_l245
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          중요사항 안내_중고차오토론(대출)5<br />My_M03_l246
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          중요사항 안내_중고차오토론(대출)6<br />My_M03_l247
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          주요권리 안내_중고차오토론(대출)1<br />My_M03_l248
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          주요권리 안내_중고차오토론(대출)1<br />My_M03_l248
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          주요권리 안내_중고차오토론(대출)2<br />My_M03_l249
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          주요권리 안내_중고차오토론(대출)3<br />My_M03_l250
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          주요권리 안내_중고차오토론(대출)4<br />My_M03_l251
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          주요권리 안내_중고차오토론(대출)5<br />My_M03_l252
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open">
          상품설명서 약관동의_중고차오토론(대출)설명서<br />My_M03_l054
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanOnlineContractDescription005_001 ref="layer001" />
    <LayerMyLoanOnlineContractDescription005_002 ref="layer002" />
    <LayerMyLoanOnlineContractDescription005_003 ref="layer003" />
    <LayerMyLoanOnlineContractDescription005_004 ref="layer004" />
    <LayerMyLoanOnlineContractDescription005_005 ref="layer005" />
    <LayerMyLoanOnlineContractDescription005_006 ref="layer006" />
    <LayerMyLoanOnlineContractDescription005_007 ref="layer007" />
    <LayerMyLoanOnlineContractDescription005_008 ref="layer008" />
    <LayerMyLoanOnlineContractDescription005_009 ref="layer009" />
    <LayerMyLoanOnlineContractDescription005_010 ref="layer010" />
    <LayerMyLoanOnlineContractDescription005_011 ref="layer011" />
    <LayerMyLoanOnlineContractDescription005_012 ref="layer012" />
    <LayerMyLoanOnlineContractDescription005_013 ref="layer013" />
  </PageContents>
</template>
