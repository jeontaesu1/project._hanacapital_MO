<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerInventoryFinanceLoanAgreementConfirm from '@/views/inventoryFinance/LayerInventoryFinanceLoanAgreementConfirm.vue';
import LayerInventoryFinanceLoanAgreementAlert from '@/views/inventoryFinance/LayerInventoryFinanceLoanAgreementAlert.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerInventoryFinanceLoanAgreementConfirm,
    LayerInventoryFinanceLoanAgreementAlert,
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
        <BasicButton @click="layer001Open">
          재고금융 확약서 팝업<br />IF_M02_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          대출신청 확인<br />IF_M02_b001
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerInventoryFinanceLoanAgreementConfirm ref="layer001" />
    <LayerInventoryFinanceLoanAgreementAlert ref="layer002" />
  </PageContents>
</template>
