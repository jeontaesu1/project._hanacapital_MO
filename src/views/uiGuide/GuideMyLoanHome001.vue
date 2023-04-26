<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanElectronicFinancialTransactionAgree from '@/views/myLoan/LayerMyLoanElectronicFinancialTransactionAgree.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanElectronicFinancialTransactionAgree,
  },
  setup() {
    const layer001 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };

    return {
      layer001,
      layer001Open,
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
    </ButtonList>

    <LayerMyLoanElectronicFinancialTransactionAgree ref="layer001" />
  </PageContents>
</template>
