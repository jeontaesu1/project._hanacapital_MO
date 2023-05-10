<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerEquipmentLeaseEstimateSchedule from '@/views/equipmentLease/LayerEquipmentLeaseEstimateSchedule.vue';
import LayerEquipmentLeaseEstimateURLSchedule from '@/views/equipmentLease/LayerEquipmentLeaseEstimateURLSchedule.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerEquipmentLeaseEstimateSchedule,
    LayerEquipmentLeaseEstimateURLSchedule,
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
          예상 상환스케쥴<br />EL_M01_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer001Open">
          견적서 고객 전송 URL - 예상 상환스케쥴<br />EL_M01_l005
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerEquipmentLeaseEstimateSchedule ref="layer001" />
    <LayerEquipmentLeaseEstimateURLSchedule ref="layer002" />
  </PageContents>
</template>
