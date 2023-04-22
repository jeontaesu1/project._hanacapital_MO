<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerInventoryFinanceEarlyAlertInstant from '@/views/inventoryFinance/LayerInventoryFinanceEarlyAlertInstant.vue';
import LayerInventoryFinanceEarlyAlertVirtual from '../inventoryFinance/LayerInventoryFinanceEarlyAlertVirtual.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerInventoryFinanceEarlyAlertInstant,
    LayerInventoryFinanceEarlyAlertVirtual,
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
          중도상환 입금 예약 신청_오늘 즉시 출금<br />IF_M03_l002
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer002Open">
          중도상환 입금 예약 신청_가상계좌 입금<br />IF_M03_l003
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerInventoryFinanceEarlyAlertInstant ref="layer001" />
    <LayerInventoryFinanceEarlyAlertVirtual ref="layer002" />
  </PageContents>
</template>
