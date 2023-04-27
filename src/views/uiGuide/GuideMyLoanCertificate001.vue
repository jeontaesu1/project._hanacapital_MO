<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanCertificateOnlineBillList from '@/views/myLoan/LayerMyLoanCertificateOnlineBillList.vue';
import LayerMyLoanCertificateOnlineBillItems from '@/views/myLoan/LayerMyLoanCertificateOnlineBillItems.vue';
import LayerMyLoanCertificateConfirmationFinancialTransaction from '@/views/myLoan/LayerMyLoanCertificateConfirmationFinancialTransaction.vue';
import LayerMyLoanCertificateLoanBalanceStatementList from '@/views/myLoan/LayerMyLoanCertificateLoanBalanceStatementList.vue';
import LayerMyLoanCertificateFullPaymentList from '@/views/myLoan/LayerMyLoanCertificateFullPaymentList.vue';
import LayerMyLoanCertificateLeaseRentalCarContractList from '@/views/myLoan/LayerMyLoanCertificateLeaseRentalCarContractList.vue';
import LayerMyLoanCertificateLeaseRentalCarTerminationList from '@/views/myLoan/LayerMyLoanCertificateLeaseRentalCarTerminationList.vue';
import LayerMyLoanCertificateInvoiceTaxInvoiceList from '@/views/myLoan/LayerMyLoanCertificateInvoiceTaxInvoiceList.vue';
import LayerMyLoanCertificateInvoiceTaxInvoiceItems from '@/views/myLoan/LayerMyLoanCertificateInvoiceTaxInvoiceItems.vue';
import LayerMyLoanCertificatePaymentStatementList from '@/views/myLoan/LayerMyLoanCertificatePaymentStatementList.vue';
import LayerMyLoanCertificateStockLoanList from '@/views/myLoan/LayerMyLoanCertificateStockLoanList.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanCertificateOnlineBillList,
    LayerMyLoanCertificateOnlineBillItems,
    LayerMyLoanCertificateConfirmationFinancialTransaction,
    LayerMyLoanCertificateLoanBalanceStatementList,
    LayerMyLoanCertificateFullPaymentList,
    LayerMyLoanCertificateLeaseRentalCarContractList,
    LayerMyLoanCertificateLeaseRentalCarTerminationList,
    LayerMyLoanCertificateInvoiceTaxInvoiceList,
    LayerMyLoanCertificateInvoiceTaxInvoiceItems,
    LayerMyLoanCertificatePaymentStatementList,
    LayerMyLoanCertificateStockLoanList,
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
          온라인청구서<br />
          My_M02_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          온라인청구서 조회<br />
          My_M02_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          금융거래확인서<br />
          My_M02_l008
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          대출거래 및 잔액내역서<br />
          My_M02_l009
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          완납확인서<br />
          My_M02_l010
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          리스/렌터카 계약사실확인서<br />
          My_M02_l011
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          리스/렌터카 종료확인서<br />
          My_M02_l012
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          계산서/세금계산서<br />
          My_M02_l013
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          계산서/세금계산서 조회<br />
          My_M02_l014
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          입금내역서<br />
          My_M02_l015
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          스탁론 약정서<br />
          My_M02_l016
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanCertificateOnlineBillList ref="layer001" />
    <LayerMyLoanCertificateOnlineBillItems ref="layer002" />
    <LayerMyLoanCertificateConfirmationFinancialTransaction ref="layer003" />
    <LayerMyLoanCertificateLoanBalanceStatementList ref="layer004" />
    <LayerMyLoanCertificateFullPaymentList ref="layer005" />
    <LayerMyLoanCertificateLeaseRentalCarContractList ref="layer006" />
    <LayerMyLoanCertificateLeaseRentalCarTerminationList ref="layer007" />
    <LayerMyLoanCertificateInvoiceTaxInvoiceList ref="layer008" />
    <LayerMyLoanCertificateInvoiceTaxInvoiceItems ref="layer009" />
    <LayerMyLoanCertificatePaymentStatementList ref="layer010" />
    <LayerMyLoanCertificateStockLoanList ref="layer011" />
  </PageContents>
</template>
