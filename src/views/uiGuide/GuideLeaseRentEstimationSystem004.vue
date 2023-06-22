<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerLeaseRentEstimationSystemUsedLeaseConfirm from '@/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemUsedLeaseConfirm.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerLeaseRentEstimationSystemUsedLeaseConfirm,
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
          차량정보 조회 팝업<br />LR_M03_l002
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerLeaseRentEstimationSystemUsedLeaseConfirm ref="layer001" />
  </PageContents>
</template>
