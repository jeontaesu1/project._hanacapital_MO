<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSalesNewCarUnregisteredBonds from '@/views/salesNewCar/LayerSalesNewCarUnregisteredBonds.vue';
import LayerSalesNewCarAddNumber from '@/views/salesNewCar/LayerSalesNewCarAddNumber.vue';
import LayerSalesNewCarAddContractStore from '@/views/salesNewCar/LayerSalesNewCarAddContractStore.vue';
import LayerSalesNewCarAddContractSalesperson from '@/views/salesNewCar/LayerSalesNewCarAddContractSalesperson.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSalesNewCarUnregisteredBonds,
    LayerSalesNewCarAddNumber,
    LayerSalesNewCarAddContractStore,
    LayerSalesNewCarAddContractSalesperson,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);

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

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
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
          >차량/저당 미등록 채권 안내<br />NC_M01_l002</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >차량번호 등록<br />NC_M06_b001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >판매점 조회<br />NC_M04_l001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open"
          >판매사원 조회<br />NC_M04_l002</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerSalesNewCarUnregisteredBonds ref="layer001" />
    <LayerSalesNewCarAddNumber ref="layer002" />
    <LayerSalesNewCarAddContractStore ref="layer003" />
    <LayerSalesNewCarAddContractSalesperson ref="layer004" />
  </PageContents>
</template>
