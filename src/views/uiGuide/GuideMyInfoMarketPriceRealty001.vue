<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyInfoMarketPriceRealtyForm from '@/views/myInfo/LayerMyInfoMarketPriceRealtyForm.vue';
import LayerMyInfoMarketPriceRealtyResult from '@/views/myInfo/LayerMyInfoMarketPriceRealtyResult.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyInfoMarketPriceRealtyForm,
    LayerMyInfoMarketPriceRealtyResult,
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
          정보 입력<br />MI_M01_l018
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          조회 결과<br />MI_M01_l020
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyInfoMarketPriceRealtyForm ref="layer001" />
    <LayerMyInfoMarketPriceRealtyResult ref="layer002" />
  </PageContents>
</template>
