<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerLMBlogLoanCounselingVehicleAvailable from '@/views/lm-blog/LayerLMBlogLoanCounselingVehicleAvailable.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerLMBlogLoanCounselingVehicleAvailable,
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
        <BasicButton @click="layer001Open">대출가능 차량 기준안내</BasicButton>
      </ButtonListItem>
    </ButtonList>
  </PageContents>

  <LayerLMBlogLoanCounselingVehicleAvailable ref="layer001" />
</template>
