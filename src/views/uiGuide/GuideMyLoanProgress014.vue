<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanOnlineContractDescription011 from '@/views/myLoan/LayerMyLoanOnlineContractDescription011.vue';
import LayerMyLoanOnlineContractDescription011_001 from '@/views/myLoan/LayerMyLoanOnlineContractDescription011_001.vue';
import LayerMyLoanOnlineContractDescription011_002 from '@/views/myLoan/LayerMyLoanOnlineContractDescription011_002.vue';
import LayerMyLoanOnlineContractDescription011_003 from '@/views/myLoan/LayerMyLoanOnlineContractDescription011_003.vue';
import LayerMyLoanOnlineContractDescription011_004 from '@/views/myLoan/LayerMyLoanOnlineContractDescription011_004.vue';
import LayerMyLoanOnlineContractDescription011_005 from '@/views/myLoan/LayerMyLoanOnlineContractDescription011_005.vue';
import LayerMyLoanOnlineContractDescription011_006 from '@/views/myLoan/LayerMyLoanOnlineContractDescription011_006.vue';
import LayerMyLoanOnlineContractDescription011_007 from '@/views/myLoan/LayerMyLoanOnlineContractDescription011_007.vue';
import LayerMyLoanOnlineContractDescription011_008 from '@/views/myLoan/LayerMyLoanOnlineContractDescription011_008.vue';
import LayerMyLoanOnlineContractDescription011_009 from '@/views/myLoan/LayerMyLoanOnlineContractDescription011_009.vue';
import LayerMyLoanOnlineContractDescription011_010 from '@/views/myLoan/LayerMyLoanOnlineContractDescription011_010.vue';
import LayerMyLoanOnlineContractDescription011_011 from '@/views/myLoan/LayerMyLoanOnlineContractDescription011_011.vue';
import LayerMyLoanOnlineContractDescription011_012 from '@/views/myLoan/LayerMyLoanOnlineContractDescription011_012.vue';
import LayerMyLoanOnlineContractDescription011_013 from '@/views/myLoan/LayerMyLoanOnlineContractDescription011_013.vue';
import LayerMyLoanOnlineContractDescription011_014 from '@/views/myLoan/LayerMyLoanOnlineContractDescription011_014.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanOnlineContractDescription011,
    LayerMyLoanOnlineContractDescription011_001,
    LayerMyLoanOnlineContractDescription011_002,
    LayerMyLoanOnlineContractDescription011_003,
    LayerMyLoanOnlineContractDescription011_004,
    LayerMyLoanOnlineContractDescription011_005,
    LayerMyLoanOnlineContractDescription011_006,
    LayerMyLoanOnlineContractDescription011_007,
    LayerMyLoanOnlineContractDescription011_008,
    LayerMyLoanOnlineContractDescription011_009,
    LayerMyLoanOnlineContractDescription011_010,
    LayerMyLoanOnlineContractDescription011_011,
    LayerMyLoanOnlineContractDescription011_012,
    LayerMyLoanOnlineContractDescription011_013,
    LayerMyLoanOnlineContractDescription011_014,
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
    const layer015 = ref(null);

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
    const layer015Open = (e = {}) => {
      layer015.value.layer.open(e.target);
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
      layer015,
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
      layer015Open,
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
          상품설명서 확인안내_사업자담보대출<br />My_M03_l308
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          중요사항 안내_사업자담보대출<br />My_M03_l309
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          중요사항 안내_사업자담보대출<br />My_M03_l310
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          중요사항 안내_사업자담보대출<br />My_M03_l311
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          중요사항 안내_사업자담보대출<br />My_M03_l312
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          중요사항 안내_사업자담보대출<br />My_M03_l313
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          중요사항 안내_사업자담보대출<br />My_M03_l314
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          중요사항 안내_사업자담보대출<br />My_M03_l315
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          중요사항 안내_사업자담보대출<br />My_M03_l316
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          중요사항 안내_사업자담보대출<br />My_M03_l317
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          중요사항 안내_사업자담보대출<br />My_M03_l318
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer015Open">
          중요사항 안내_사업자담보대출<br />My_M03_l319
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          상품설명서 약관동의_사업자담보대출<br />My_M99_l013
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open">
          연장담보 내용확인_사업자담보대출<br />PF_M09_l005
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer014Open">
          연장담보 제공동의 완료<br />PF_M09_l006
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanOnlineContractDescription011 ref="layer001" />
    <LayerMyLoanOnlineContractDescription011_001 ref="layer002" />
    <LayerMyLoanOnlineContractDescription011_002 ref="layer003" />
    <LayerMyLoanOnlineContractDescription011_003 ref="layer004" />
    <LayerMyLoanOnlineContractDescription011_004 ref="layer005" />
    <LayerMyLoanOnlineContractDescription011_005 ref="layer006" />
    <LayerMyLoanOnlineContractDescription011_006 ref="layer007" />
    <LayerMyLoanOnlineContractDescription011_007 ref="layer008" />
    <LayerMyLoanOnlineContractDescription011_008 ref="layer009" />
    <LayerMyLoanOnlineContractDescription011_009 ref="layer010" />
    <LayerMyLoanOnlineContractDescription011_010 ref="layer011" />
    <LayerMyLoanOnlineContractDescription011_011 ref="layer012" />
    <LayerMyLoanOnlineContractDescription011_012 ref="layer013" />
    <LayerMyLoanOnlineContractDescription011_013 ref="layer014" />
    <LayerMyLoanOnlineContractDescription011_014 ref="layer015" />
  </PageContents>
</template>
