<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanOnlineContractDescription001_001 from '@/views/myLoan/LayerMyLoanOnlineContractDescription001_001.vue';
import LayerMyLoanOnlineContractDescription001_002 from '@/views/myLoan/LayerMyLoanOnlineContractDescription001_002.vue';
import LayerMyLoanOnlineContractDescription001_003 from '@/views/myLoan/LayerMyLoanOnlineContractDescription001_003.vue';
import LayerMyLoanOnlineContractDescription001_004 from '@/views/myLoan/LayerMyLoanOnlineContractDescription001_004.vue';
import LayerMyLoanOnlineContractDescription001_005 from '@/views/myLoan/LayerMyLoanOnlineContractDescription001_005.vue';
import LayerMyLoanOnlineContractDescription001_006 from '@/views/myLoan/LayerMyLoanOnlineContractDescription001_006.vue';
import LayerMyLoanOnlineContractDescription001_007 from '@/views/myLoan/LayerMyLoanOnlineContractDescription001_007.vue';
import LayerMyLoanOnlineContractDescription001_008 from '@/views/myLoan/LayerMyLoanOnlineContractDescription001_008.vue';
import LayerMyLoanOnlineContractDescription001_009 from '@/views/myLoan/LayerMyLoanOnlineContractDescription001_009.vue';
import LayerMyLoanOnlineContractDescription001_010 from '@/views/myLoan/LayerMyLoanOnlineContractDescription001_010.vue';
import LayerMyLoanOnlineContractDescription001_011 from '@/views/myLoan/LayerMyLoanOnlineContractDescription001_011.vue';
import LayerMyLoanOnlineContractDescription001_012 from '@/views/myLoan/LayerMyLoanOnlineContractDescription001_012.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanOnlineContractDescription001_001,
    LayerMyLoanOnlineContractDescription001_002,
    LayerMyLoanOnlineContractDescription001_003,
    LayerMyLoanOnlineContractDescription001_004,
    LayerMyLoanOnlineContractDescription001_005,
    LayerMyLoanOnlineContractDescription001_006,
    LayerMyLoanOnlineContractDescription001_007,
    LayerMyLoanOnlineContractDescription001_008,
    LayerMyLoanOnlineContractDescription001_009,
    LayerMyLoanOnlineContractDescription001_010,
    LayerMyLoanOnlineContractDescription001_011,
    LayerMyLoanOnlineContractDescription001_012,
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
          중요사항 안내_일반신용대출1<br />My_M03_l201
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          중요사항 안내_일반신용대출2<br />My_M03_l202
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          중요사항 안내_일반신용대출3<br />My_M03_l203
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          중요사항 안내_일반신용대출4<br />My_M03_l204
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          중요사항 안내_일반신용대출5<br />My_M03_l205
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          주요권리 안내_일반신용대출1<br />My_M03_l206
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          주요권리 안내_일반신용대출1<br />My_M03_l206
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          주요권리 안내_일반신용대출2<br />My_M03_l207
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          주요권리 안내_일반신용대출3<br />My_M03_l208
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          주요권리 안내_일반신용대출4<br />My_M03_l209
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          주요권리 안내_일반신용대출5<br />My_M03_l210
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          상품설명서 약관동의_일반신용대출설명서<br />My_M99_l001
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanOnlineContractDescription001_001 ref="layer001" />
    <LayerMyLoanOnlineContractDescription001_002 ref="layer002" />
    <LayerMyLoanOnlineContractDescription001_003 ref="layer003" />
    <LayerMyLoanOnlineContractDescription001_004 ref="layer004" />
    <LayerMyLoanOnlineContractDescription001_005 ref="layer005" />
    <LayerMyLoanOnlineContractDescription001_006 ref="layer006" />
    <LayerMyLoanOnlineContractDescription001_007 ref="layer007" />
    <LayerMyLoanOnlineContractDescription001_008 ref="layer008" />
    <LayerMyLoanOnlineContractDescription001_009 ref="layer009" />
    <LayerMyLoanOnlineContractDescription001_010 ref="layer010" />
    <LayerMyLoanOnlineContractDescription001_011 ref="layer011" />
    <LayerMyLoanOnlineContractDescription001_012 ref="layer012" />
  </PageContents>
</template>
