<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerAutoLongRentalOrderConfirm from '@/views/auto/LayerAutoLongRentalOrderConfirm.vue';
import LayerAutoLongRentalDelivery from '@/views/auto/LayerAutoLongRentalDelivery.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerAutoLongRentalOrderConfirm,
    LayerAutoLongRentalDelivery,
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
          >계약조건 안내<br />AF_M01_l009</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >인도요청 안내<br />AF_M01_l011</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerAutoLongRentalOrderConfirm ref="layer001" />
    <LayerAutoLongRentalDelivery ref="layer002" />
  </PageContents>
</template>
