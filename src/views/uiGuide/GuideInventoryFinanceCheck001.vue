<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerInventoryFinanceCheckForm001 from '@/views/InventoryFinanceCheck/LayerInventoryFinanceCheckForm001.vue';
import LayerInventoryFinanceCheckForm002 from '@/views/InventoryFinanceCheck/LayerInventoryFinanceCheckForm002.vue';
import LayerInventoryFinanceCheckViewImage from '@/views/InventoryFinanceCheck/LayerInventoryFinanceCheckViewImage.vue';
import LayerInventoryFinanceCheckAffiliateList from '@/views/InventoryFinanceCheck/LayerInventoryFinanceCheckAffiliateList.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerInventoryFinanceCheckForm001,
    LayerInventoryFinanceCheckForm002,
    LayerInventoryFinanceCheckViewImage,
    LayerInventoryFinanceCheckAffiliateList,
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
          >미실사정보입력<br />IF_M11_l001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >실사정보입력<br />IF_M11_l002</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >이미지 보기<br />IF_M11_l003</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open"
          >제휴회사 조회<br />IF_M11_l004</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerInventoryFinanceCheckForm001 ref="layer001" />
    <LayerInventoryFinanceCheckForm002 ref="layer002" />
    <LayerInventoryFinanceCheckViewImage ref="layer003" />
    <LayerInventoryFinanceCheckAffiliateList ref="layer004" />
  </PageContents>
</template>
