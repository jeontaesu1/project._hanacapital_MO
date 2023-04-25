<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanMortgage from '@/views/myLoan/LayerMyLoanMortgage.vue';
import LayerMyLoanMortgageIdentificationMethodSelect from '@/views/myLoan/LayerMyLoanMortgageIdentificationMethodSelect.vue';
import LayerMyLoanMortgageComplete from '@/views/myLoan/LayerMyLoanMortgageComplete.vue';
import LayerMyLoanMortgageFail from '@/views/myLoan/LayerMyLoanMortgageFail.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanMortgage,
    LayerMyLoanMortgageIdentificationMethodSelect,
    LayerMyLoanMortgageComplete,
    LayerMyLoanMortgageFail,
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
          근저당설정 조회/해지<br />
          My_M04_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          본인인증 방법 선택<br />
          My_M04_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          근저당설정 해지 신청 완료<br />
          My_M04_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          근저당설정 해지 신청 불가<br />
          My_M04_l004
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanMortgage ref="layer001" />
    <LayerMyLoanMortgageIdentificationMethodSelect ref="layer002" />
    <LayerMyLoanMortgageComplete ref="layer003" />
    <LayerMyLoanMortgageFail ref="layer004" />
  </PageContents>
</template>
