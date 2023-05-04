<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerInventoryFinanceURLDelegatedPerson from '@/views/inventoryFinance/LayerInventoryFinanceURLDelegatedPerson.vue';
import LayerInventoryFinanceURLConfirm001 from '@/views/inventoryFinance/LayerInventoryFinanceURLConfirm001.vue';
import LayerInventoryFinanceURLConfirm002 from '@/views/inventoryFinance/LayerInventoryFinanceURLConfirm002.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerInventoryFinanceURLDelegatedPerson,
    LayerInventoryFinanceURLConfirm001,
    LayerInventoryFinanceURLConfirm002,
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
          수임인정보입력<br />AF_M98_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          계약정보 최종확인_대표자
          <br />MY_M03_l022 (MY_M03_l022a1)
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          계약정보 최종확인_수임인
          <br />MY_M03_l022 (MY_M03_l022a2)
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerInventoryFinanceURLDelegatedPerson ref="layer001" />
    <LayerInventoryFinanceURLConfirm001 ref="layer002" />
    <LayerInventoryFinanceURLConfirm002 ref="layer003" />
  </PageContents>
</template>
