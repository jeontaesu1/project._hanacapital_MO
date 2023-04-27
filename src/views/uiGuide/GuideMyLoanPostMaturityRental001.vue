<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanPostMaturityRentalExtension from '@/views/myLoan/LayerMyLoanPostMaturityRentalExtension.vue';
import LayerMyLoanPostMaturityRentalReturnForm from '@/views/myLoan/LayerMyLoanPostMaturityRentalReturnForm.vue';
import LayerMyLoanPostMaturityRentalPurchaseFormDirect from '@/views/myLoan/LayerMyLoanPostMaturityRentalPurchaseFormDirect.vue';
import LayerMyLoanPostMaturityRentalPurchaseFormAgent from '@/views/myLoan/LayerMyLoanPostMaturityRentalPurchaseFormAgent.vue';
import LayerMyLoanPostMaturityRentalPurchaseCheck from '@/views/myLoan/LayerMyLoanPostMaturityRentalPurchaseCheck.vue';
import LayerMyLoanPostMaturityRentalPurchaseComplete from '@/views/myLoan/LayerMyLoanPostMaturityRentalPurchaseComplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanPostMaturityRentalExtension,
    LayerMyLoanPostMaturityRentalReturnForm,
    LayerMyLoanPostMaturityRentalPurchaseFormDirect,
    LayerMyLoanPostMaturityRentalPurchaseFormAgent,
    LayerMyLoanPostMaturityRentalPurchaseCheck,
    LayerMyLoanPostMaturityRentalPurchaseComplete,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);
    const layer006 = ref(null);

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
    const layer005Open = (e = {}) => {
      layer005.value.layer.open(e.target);
    };
    const layer006Open = (e = {}) => {
      layer006.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
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
          연장 조건 선택<br />My_M08_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          반환 정보 입력<br />My_M08_l011
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          구매 정보 입력(직접 이전)<br />My_M08_l017
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          구매 정보 입력(이전 대행)<br />My_M08_l018
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          구매 신청 확인<br />My_M08_b005
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          신청 완료<br />My_M08_l019
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanPostMaturityRentalExtension ref="layer001" />
    <LayerMyLoanPostMaturityRentalReturnForm ref="layer002" />
    <LayerMyLoanPostMaturityRentalPurchaseFormDirect ref="layer003" />
    <LayerMyLoanPostMaturityRentalPurchaseFormAgent ref="layer004" />
    <LayerMyLoanPostMaturityRentalPurchaseCheck ref="layer005" />
    <LayerMyLoanPostMaturityRentalPurchaseComplete ref="layer006" />
  </PageContents>
</template>
