<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerPersonalLoanIdentificationMethodSelect from '@/views/personalLoan/LayerPersonalLoanIdentificationMethodSelect.vue';
import LayerPersonalLoanHappinessApartmentAgree from '@/views/personalLoan/LayerPersonalLoanHappinessApartmentAgree.vue';
import LayerPersonalLoanHappinessApartmentCertified from '@/views/personalLoan/LayerPersonalLoanHappinessApartmentCertified.vue';
import LayerPersonalLoanHappinessApartmentCertifiedConfirm from '@/views/personalLoan/LayerPersonalLoanHappinessApartmentCertifiedConfirm.vue';
import LayerPersonalLoanHappinessApartmentResult from '@/views/personalLoan/LayerPersonalLoanHappinessApartmentResult.vue';
import LayerPersonalLoanHappinessApartmentInput from '@/views/personalLoan/LayerPersonalLoanHappinessApartmentInput.vue';


export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerPersonalLoanIdentificationMethodSelect,
    LayerPersonalLoanHappinessApartmentAgree,
    LayerPersonalLoanHappinessApartmentCertified,
    LayerPersonalLoanHappinessApartmentCertifiedConfirm,
    LayerPersonalLoanHappinessApartmentResult,
    LayerPersonalLoanHappinessApartmentInput,
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
        <BasicButton @click="layer001Open">인증 수단 선택</BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer002Open">한도조회 동의</BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer003Open">아파트 등기부등본</BasicButton>
      </ButtonListItem>
      
      <ButtonListItem>
        <BasicButton @click="layer004Open">아파트 등기부등본 확인</BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer005Open">한도조회 결과</BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer006Open">신청 정보 입력</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerPersonalLoanIdentificationMethodSelect ref="layer001" />
    <LayerPersonalLoanHappinessApartmentAgree ref="layer002" />
    <LayerPersonalLoanHappinessApartmentCertified ref="layer003" />
    <LayerPersonalLoanHappinessApartmentCertifiedConfirm ref="layer004" />
    <LayerPersonalLoanHappinessApartmentResult ref="layer005" />
    <LayerPersonalLoanHappinessApartmentInput ref="layer006" />
  </PageContents>
</template>
