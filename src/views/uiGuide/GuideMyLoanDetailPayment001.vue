<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanDetailPaymentAuto from '@/views/myLoan/LayerMyLoanDetailPaymentAuto.vue';
import LayerMyLoanDetailPaymentVirtual from '@/views/myLoan/LayerMyLoanDetailPaymentVirtual.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanDetailPaymentAuto,
    LayerMyLoanDetailPaymentVirtual,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };
    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer001Open,
      layer002Open,
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
        <BasicButton @click="layer001Open"
          >자동이체계좌<br />My_M01_p004</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >가상계좌<br />My_M01_p004</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanDetailPaymentAuto ref="layer001" />
    <LayerMyLoanDetailPaymentVirtual ref="layer002" />
  </PageContents>
</template>
