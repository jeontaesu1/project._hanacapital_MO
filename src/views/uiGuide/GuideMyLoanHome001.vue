<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanElectronicFinancialTransactionAgree from '@/views/myLoan/LayerMyLoanElectronicFinancialTransactionAgree.vue';
import LayerMyLoanMaturityNotice from '@/views/myLoan/LayerMyLoanMaturityNotice.vue';
import LayerMyLoanTerminatedContract from '@/views/myLoan/LayerMyLoanTerminatedContract.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanElectronicFinancialTransactionAgree,
    LayerMyLoanMaturityNotice,
    LayerMyLoanTerminatedContract,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };
    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };
    const layer003Open = (e = {}) => {
      layer003.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer001Open,
      layer002Open,
      layer003Open,
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
          전자금융거래 약관 동의 팝업<br />My_M01_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          만기안내장<br />
          My_M08_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          종료된 계약 팝업<br />
          My_M01_l020
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanElectronicFinancialTransactionAgree ref="layer001" />
    <LayerMyLoanMaturityNotice ref="layer002" />
    <LayerMyLoanTerminatedContract ref="layer003" />
  </PageContents>
</template>
