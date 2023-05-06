<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSalesUsedCarSearch from '@/views/salesUsedCar/LayerSalesUsedCarSearch.vue';
import LayerSalesUsedCarAffiliateIdentificationMethodSelect from '@/views/salesUsedCar/LayerSalesUsedCarAffiliateIdentificationMethodSelect.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSalesUsedCarSearch,
    LayerSalesUsedCarAffiliateIdentificationMethodSelect,
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
          차량검색<br />UC_M06_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          본인인증 선택<br />UC_M08_b002
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerSalesUsedCarSearch ref="layer001" />
    <LayerSalesUsedCarAffiliateIdentificationMethodSelect ref="layer002" />
  </PageContents>
</template>
