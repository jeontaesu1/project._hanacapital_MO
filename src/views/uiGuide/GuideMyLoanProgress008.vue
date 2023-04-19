<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanOnlineContractDescription006_001 from '@/views/myLoan/LayerMyLoanOnlineContractDescription006_001.vue';
import LayerMyLoanOnlineContractDescription006_002 from '@/views/myLoan/LayerMyLoanOnlineContractDescription006_002.vue';
import LayerMyLoanOnlineContractDescription006_003 from '@/views/myLoan/LayerMyLoanOnlineContractDescription006_003.vue';
import LayerMyLoanOnlineContractDescription006_004 from '@/views/myLoan/LayerMyLoanOnlineContractDescription006_004.vue';
import LayerMyLoanOnlineContractDescription006_005 from '@/views/myLoan/LayerMyLoanOnlineContractDescription006_005.vue';
import LayerMyLoanOnlineContractDescription006_006 from '@/views/myLoan/LayerMyLoanOnlineContractDescription006_006.vue';
import LayerMyLoanOnlineContractDescription006_007 from '@/views/myLoan/LayerMyLoanOnlineContractDescription006_007.vue';
import LayerMyLoanOnlineContractDescription006_008 from '@/views/myLoan/LayerMyLoanOnlineContractDescription006_008.vue';
import LayerMyLoanOnlineContractDescription006_009 from '@/views/myLoan/LayerMyLoanOnlineContractDescription006_009.vue';
import LayerMyLoanOnlineContractDescription006_010 from '@/views/myLoan/LayerMyLoanOnlineContractDescription006_010.vue';
import LayerMyLoanOnlineContractDescription006_011 from '@/views/myLoan/LayerMyLoanOnlineContractDescription006_011.vue';
import LayerMyLoanOnlineContractDescription006_012 from '@/views/myLoan/LayerMyLoanOnlineContractDescription006_012.vue';
import LayerMyLoanOnlineContractDescription006_013 from '@/views/myLoan/LayerMyLoanOnlineContractDescription006_013.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanOnlineContractDescription006_001,
    LayerMyLoanOnlineContractDescription006_002,
    LayerMyLoanOnlineContractDescription006_003,
    LayerMyLoanOnlineContractDescription006_004,
    LayerMyLoanOnlineContractDescription006_005,
    LayerMyLoanOnlineContractDescription006_006,
    LayerMyLoanOnlineContractDescription006_007,
    LayerMyLoanOnlineContractDescription006_008,
    LayerMyLoanOnlineContractDescription006_009,
    LayerMyLoanOnlineContractDescription006_010,
    LayerMyLoanOnlineContractDescription006_011,
    LayerMyLoanOnlineContractDescription006_012,
    LayerMyLoanOnlineContractDescription006_013,
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
          중요사항 안내_자동차할부금융1<br />My_M03_l253
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          중요사항 안내_자동차할부금융2<br />My_M03_l254
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          중요사항 안내_자동차할부금융3<br />My_M03_l255
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          중요사항 안내_자동차할부금융4<br />My_M03_l256
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          중요사항 안내_자동차할부금융5<br />My_M03_l257
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          중요사항 안내_자동차할부금융6<br />My_M03_l258
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          주요권리 안내_자동차할부금융1<br />My_M03_l259
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          주요권리 안내_자동차할부금융1<br />My_M03_l259
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          주요권리 안내_자동차할부금융2<br />My_M03_l260
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          주요권리 안내_자동차할부금융3<br />My_M03_l261
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          주요권리 안내_자동차할부금융4<br />My_M03_l262
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          주요권리 안내_자동차할부금융5<br />My_M03_l263
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open">
          상품설명서 약관동의_자동차할부금융설명서<br />My_M99_l007
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanOnlineContractDescription006_001 ref="layer001" />
    <LayerMyLoanOnlineContractDescription006_002 ref="layer002" />
    <LayerMyLoanOnlineContractDescription006_003 ref="layer003" />
    <LayerMyLoanOnlineContractDescription006_004 ref="layer004" />
    <LayerMyLoanOnlineContractDescription006_005 ref="layer005" />
    <LayerMyLoanOnlineContractDescription006_006 ref="layer006" />
    <LayerMyLoanOnlineContractDescription006_007 ref="layer007" />
    <LayerMyLoanOnlineContractDescription006_008 ref="layer008" />
    <LayerMyLoanOnlineContractDescription006_009 ref="layer009" />
    <LayerMyLoanOnlineContractDescription006_010 ref="layer010" />
    <LayerMyLoanOnlineContractDescription006_011 ref="layer011" />
    <LayerMyLoanOnlineContractDescription006_012 ref="layer012" />
    <LayerMyLoanOnlineContractDescription006_013 ref="layer013" />
  </PageContents>
</template>
