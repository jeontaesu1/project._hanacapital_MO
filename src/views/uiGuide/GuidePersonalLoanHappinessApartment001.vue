<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerPersonalLoanHappinessIdentification from '../personalLoan/LayerPersonalLoanHappinessIdentification.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,

    LayerPersonalLoanHappinessIdentification,
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
        <BasicButton @click="layer001Open"
          >행복아파트론 한도조회 동의</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerPersonalLoanHappinessIdentification ref="layer001" />
  </PageContents>
</template>
