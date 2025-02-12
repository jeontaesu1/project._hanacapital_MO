// PF_M02_l003
<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerPersonalLoanIdentificationMethodSelect from '@/views/personalLoan/LayerPersonalLoanIdentificationMethodSelect.vue';
import LayerPersonalLoanHappinessApartmentAgree from '@/views/personalLoan/LayerPersonalLoanHappinessApartmentAgree.vue';
import LayerPersonalLoanHappinessApartmentSearch from '@/views/personalLoan/LayerPersonalLoanHappinessApartmentSearch.vue';
import PF_M02_b201 from '@/views/personalLoan/PF_M02_b201.vue';
import LayerPersonalLoanHappinessApartmentValusation from '@/views/personalLoan/LayerPersonalLoanHappinessApartmentValusation.vue';
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
    LayerPersonalLoanHappinessApartmentSearch,
    PF_M02_b201,
    LayerPersonalLoanHappinessApartmentValusation,
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
    const layer007 = ref(null);
    const layer008 = ref(null);
    const layer009 = ref(null);

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
    const layer007Open = (e = {}) => {
      layer007.value.layer.open(e.target);
    };
    const layer008Open = (e = {}) => {
      layer008.value.layer.open(e.target);
    };
    const layer009Open = (e = {}) => {
      layer009.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer007,
      layer008,
      layer009,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
      layer007Open,
      layer008Open,
      layer009Open,
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
          인증 수단 선택<br />PF_M02_b001
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer002Open">
          한도조회 동의<br />PF_M02_l001
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer003Open">
          아파트 검색<br />PF_M02_l003
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer004Open">
          아파트 평형 선택 팝업<br />PF_M02_b201
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer005Open">
          아파트 정보 입력<br />PF_M02_l002
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer006Open">
          아파트 등기부등본<br />PF_M02_l004
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer007Open">
          아파트 등기부등본 확인<br />PF_M02_l005
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer008Open">
          한도조회 결과<br />PF_M02_l006
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer009Open">
          신청 정보 입력<br />PF_M02_l007
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerPersonalLoanIdentificationMethodSelect ref="layer001" />
    <LayerPersonalLoanHappinessApartmentAgree ref="layer002" />
    <LayerPersonalLoanHappinessApartmentSearch ref="layer003" />
    <PF_M02_b201 ref="layer004" />
    <LayerPersonalLoanHappinessApartmentValusation ref="layer005" />
    <LayerPersonalLoanHappinessApartmentCertified ref="layer006" />
    <LayerPersonalLoanHappinessApartmentCertifiedConfirm ref="layer007" />
    <LayerPersonalLoanHappinessApartmentResult ref="layer008" />
    <LayerPersonalLoanHappinessApartmentInput ref="layer009" />
  </PageContents>
</template>
