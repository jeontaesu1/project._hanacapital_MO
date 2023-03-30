<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerPersonalLoanHappinessApartmentResult from '@/views/personalLoan/LayerPersonalLoanHappinessApartmentResult.vue';
import LayerPersonalLoanHappinessApartmentInput from '@/views/personalLoan/LayerPersonalLoanHappinessApartmentInput.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerPersonalLoanHappinessApartmentResult,
    LayerPersonalLoanHappinessApartmentInput,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };
    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };
    const layer003Open = (e = {}) => {
      layer003.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer001Open,
      layer002Open,
      layer003Open,
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
        <BasicButton @click="layer001Open">한도조회 결과</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">신청 정보 입력</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerPersonalLoanHappinessApartmentResult ref="layer001" />
    <LayerPersonalLoanHappinessApartmentInput ref="layer002" />
  </PageContents>
</template>
