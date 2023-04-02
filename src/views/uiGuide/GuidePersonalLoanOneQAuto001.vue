<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerPersonalLoanIdentificationMethodSelect from '@/views/personalLoan/LayerPersonalLoanIdentificationMethodSelect.vue';
import LayerPersonalLoanOneQAutoAgree from '@/views/personalLoan/LayerPersonalLoanOneQAutoAgree.vue';
import LayerPersonalLoanOneQAutoCar from '@/views/personalLoan/LayerPersonalLoanOneQAutoCar.vue';
import LayerPersonalLoanOneQAutoResult from '@/views/personalLoan/LayerPersonalLoanOneQAutoResult.vue';
import LayerPersonalLoanOneQAutoInfo from '@/views/personalLoan/LayerPersonalLoanOneQAutoInfo.vue';
import LayerPersonalLoanOneQAutoInput from '@/views/personalLoan/LayerPersonalLoanOneQAutoInput.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerPersonalLoanIdentificationMethodSelect,
    LayerPersonalLoanOneQAutoAgree,
    LayerPersonalLoanOneQAutoCar,
    LayerPersonalLoanOneQAutoResult,
    LayerPersonalLoanOneQAutoInfo,
    LayerPersonalLoanOneQAutoInput,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);
    const layer006 = ref(null);

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

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
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
        <BasicButton @click="layer001Open">인증수단선택</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">한도조회 동의 </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">대출가능 차량 </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">한도조회 결과 </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">대환상품 유의사항 </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">신청 정보 입력 </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerPersonalLoanIdentificationMethodSelect ref="layer001" />
    <LayerPersonalLoanOneQAutoAgree ref="layer002" />
    <LayerPersonalLoanOneQAutoCar ref="layer003" />
    <LayerPersonalLoanOneQAutoResult ref="layer004" />
    <LayerPersonalLoanOneQAutoInfo ref="layer005" />
    <LayerPersonalLoanOneQAutoInput ref="layer006" />
  </PageContents>
</template>
