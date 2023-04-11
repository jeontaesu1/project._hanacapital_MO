<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerPersonalLoanIdentificationMethodSelect from '@/views/personalLoan/LayerPersonalLoanIdentificationMethodSelect.vue';
import LayerPersonalLoanBestCustomerAgree from '@/views/personalLoan/LayerPersonalLoanBestCustomerAgree.vue';
import LayerPersonalLoanBestCustomerResult from '@/views/personalLoan/LayerPersonalLoanBestCustomerResult.vue';
import LayerPersonalLoanBestCustomerInput from '@/views/personalLoan/LayerPersonalLoanBestCustomerInput.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerPersonalLoanIdentificationMethodSelect,
    LayerPersonalLoanBestCustomerAgree,
    LayerPersonalLoanBestCustomerResult,
    LayerPersonalLoanBestCustomerInput,
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
        <BasicButton @click="layer001Open">
          인증수단선택<br />PF_M05_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          한도조회 동의<br />PF_M05_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          한도조회 결과<br />PF_M05_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          신청 정보 입력<br />PF_M05_l004
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerPersonalLoanIdentificationMethodSelect ref="layer001" />
    <LayerPersonalLoanBestCustomerAgree ref="layer002" />
    <LayerPersonalLoanBestCustomerResult ref="layer003" />
    <LayerPersonalLoanBestCustomerInput ref="layer004" />
  </PageContents>
</template>
