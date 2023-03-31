<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerPersonalLoanStockAgreeTerms from '@/views/personalLoan/LayerPersonalLoanStockAgreeTerms.vue';
import LayerPersonalLoanStockContractSelect from '@/views/personalLoan/LayerPersonalLoanStockContractSelect.vue';
import LayerPersonalLoanStockNonTargetMaturity from '@/views/personalLoan/LayerPersonalLoanStockNonTargetMaturity.vue';
import LayerPersonalLoanStockNoContract from '@/views/personalLoan/LayerPersonalLoanStockNoContract.vue';
import LayerPersonalLoanStockApplicationConfirm from '@/views/personalLoan/LayerPersonalLoanStockApplicationConfirm.vue';
import LayerPersonalLoanStockApplicationComplete from '@/views/personalLoan/LayerPersonalLoanStockApplicationComplete.vue';
import LayerPersonalLoanStockApplicationFail from '@/views/personalLoan/LayerPersonalLoanStockApplicationFail.vue';
import LayerPersonalLoanStockIntermediateRepaymentSelect from '@/views/personalLoan/LayerPersonalLoanStockIntermediateRepaymentSelect.vue';
import LayerPersonalLoanStockSubjectToNonRepayment from '@/views/personalLoan/LayerPersonalLoanStockSubjectToNonRepayment.vue';
import LayerPersonalLoanStockIntermediateRepaymentPrecautions from '@/views/personalLoan/LayerPersonalLoanStockIntermediateRepaymentPrecautions.vue';
import LayerPersonalLoanStockIntermediateRepaymentInquiry from '@/views/personalLoan/LayerPersonalLoanStockIntermediateRepaymentInquiry.vue';
import LayerPersonalLoanStockIntermediateRepaymentNotFind from '@/views/personalLoan/LayerPersonalLoanStockIntermediateRepaymentNotFind.vue';
import LayerPersonalLoanStockIntermediateRepaymentConfirm from '@/views/personalLoan/LayerPersonalLoanStockIntermediateRepaymentConfirm.vue';
import LayerPersonalLoanStockIntermediateRepaymentComplete from '@/views/personalLoan/LayerPersonalLoanStockIntermediateRepaymentComplete.vue';
import LayerPersonalLoanStockIntermediateRepaymentFail from '@/views/personalLoan/LayerPersonalLoanStockIntermediateRepaymentFail.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerPersonalLoanStockAgreeTerms,
    LayerPersonalLoanStockContractSelect,
    LayerPersonalLoanStockNonTargetMaturity,
    LayerPersonalLoanStockNoContract,
    LayerPersonalLoanStockApplicationConfirm,
    LayerPersonalLoanStockApplicationComplete,
    LayerPersonalLoanStockApplicationFail,
    LayerPersonalLoanStockIntermediateRepaymentSelect,
    LayerPersonalLoanStockSubjectToNonRepayment,
    LayerPersonalLoanStockIntermediateRepaymentPrecautions,
    LayerPersonalLoanStockIntermediateRepaymentInquiry,
    LayerPersonalLoanStockIntermediateRepaymentNotFind,
    LayerPersonalLoanStockIntermediateRepaymentConfirm,
    LayerPersonalLoanStockIntermediateRepaymentComplete,
    LayerPersonalLoanStockIntermediateRepaymentFail,
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
    const layer010 = ref(null);
    const layer011 = ref(null);
    const layer012 = ref(null);
    const layer013 = ref(null);
    const layer014 = ref(null);
    const layer015 = ref(null);

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
    const layer010Open = (e = {}) => {
      layer010.value.layer.open(e.target);
    };
    const layer011Open = (e = {}) => {
      layer011.value.layer.open(e.target);
    };
    const layer012Open = (e = {}) => {
      layer012.value.layer.open(e.target);
    };
    const layer013Open = (e = {}) => {
      layer013.value.layer.open(e.target);
    };
    const layer014Open = (e = {}) => {
      layer014.value.layer.open(e.target);
    };
    const layer015Open = (e = {}) => {
      layer015.value.layer.open(e.target);
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
      layer010,
      layer011,
      layer012,
      layer013,
      layer014,
      layer015,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
      layer007Open,
      layer008Open,
      layer009Open,
      layer010Open,
      layer011Open,
      layer012Open,
      layer013Open,
      layer014Open,
      layer015Open,
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
        <BasicButton @click="layer001Open">약관동의</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">연장신청 계약선택</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          만기연장 불가대상 - 잔여회차 확인
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          만기연장 불가대상 - 연장가능 계약 없음
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open"
          >연장신청 상품 만기현황 확인</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">연장 신청 완료</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">연장 신청 실패</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">중도상환신청 계약선택</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">중도상환 불가대상</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open"
          >중도상환신청 안내 및 유의사항</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">중도상환금액 조회</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">중도상환 조회 불가</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open">중도상환 신청확인</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer014Open">상환 신청 완료</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer015Open">상환 신청 실패</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerPersonalLoanStockAgreeTerms ref="layer001" />
    <LayerPersonalLoanStockContractSelect ref="layer002" />
    <LayerPersonalLoanStockNonTargetMaturity ref="layer003" />
    <LayerPersonalLoanStockNoContract ref="layer004" />
    <LayerPersonalLoanStockApplicationConfirm ref="layer005" />
    <LayerPersonalLoanStockApplicationComplete ref="layer006" />
    <LayerPersonalLoanStockApplicationFail ref="layer007" />

    <LayerPersonalLoanStockIntermediateRepaymentSelect ref="layer008" />
    <LayerPersonalLoanStockSubjectToNonRepayment ref="layer009" />
    <LayerPersonalLoanStockIntermediateRepaymentPrecautions ref="layer010" />
    <LayerPersonalLoanStockIntermediateRepaymentInquiry ref="layer011" />
    <LayerPersonalLoanStockIntermediateRepaymentNotFind ref="layer012" />
    <LayerPersonalLoanStockIntermediateRepaymentConfirm ref="layer013" />
    <LayerPersonalLoanStockIntermediateRepaymentComplete ref="layer014" />
    <LayerPersonalLoanStockIntermediateRepaymentFail ref="layer015" />
  </PageContents>
</template>
