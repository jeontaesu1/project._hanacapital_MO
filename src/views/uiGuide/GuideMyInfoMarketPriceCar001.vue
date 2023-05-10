<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyInfoMarketPriceCarForm from '@/views/myInfo/LayerMyInfoMarketPriceCarForm.vue';
import LayerMyInfoMarketPriceCarResult from '@/views/myInfo/LayerMyInfoMarketPriceCarResult.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyInfoMarketPriceCarForm,
    LayerMyInfoMarketPriceCarResult,
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
          정보 입력<br />MI_M01_l016
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          조회 결과<br />
          MI_M01_l017
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyInfoMarketPriceCarForm ref="layer001" />
    <LayerMyInfoMarketPriceCarResult ref="layer002" />
  </PageContents>
</template>
