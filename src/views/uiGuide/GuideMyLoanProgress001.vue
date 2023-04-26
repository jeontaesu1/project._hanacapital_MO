<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanProgressAgree from '@/views/myLoan/LayerMyLoanProgressAgree.vue';
import LayerMyLoanProgressContractDocuments from '@/views/myLoan/LayerMyLoanProgressContractDocuments.vue';
import LayerMyLoanProgressContractDocumentsEmail from '@/views/myLoan/LayerMyLoanProgressContractDocumentsEmail.vue';
import LayerMyLoanProgressContractDocumentsIdentification from '@/views/myLoan/LayerMyLoanProgressContractDocumentsIdentification.vue';
import LayerMyLoanProgressContractDocumentsComplete from '@/views/myLoan/LayerMyLoanProgressContractDocumentsComplete.vue';
import LayerMyLoanProgressReceiptGoods from '@/views/myLoan/LayerMyLoanProgressReceiptGoods.vue';
import LayerMyLoanProgressReceiptGoodsConfirm from '@/views/myLoan/LayerMyLoanProgressReceiptGoodsConfirm.vue';
import LayerMyLoanProgressReceiptGoodsForm from '@/views/myLoan/LayerMyLoanProgressReceiptGoodsForm.vue';
import LayerMyLoanProgressReceiptGoodsAgree from '@/views/myLoan/LayerMyLoanProgressReceiptGoodsAgree.vue';
import LayerMyLoanProgressReceiptGoodsComplete from '@/views/myLoan/LayerMyLoanProgressReceiptGoodsComplete.vue';
import LayerMyLoanProgressInstallmentConsultation from '@/views/myLoan/LayerMyLoanProgressInstallmentConsultation.vue';
import LayerMyLoanProgressInstallmentConsultationCustomerInfo from '@/views/myLoan/LayerMyLoanProgressInstallmentConsultationCustomerInfo.vue';
import LayerMyLoanProgressInstallmentConsultationForm from '@/views/myLoan/LayerMyLoanProgressInstallmentConsultationForm.vue';
import LayerMyLoanProgressInstallmentConsultationComplete from '@/views/myLoan/LayerMyLoanProgressInstallmentConsultationComplete.vue';
import LayerMyLoanProgressInstallmentConsultationFail from '@/views/myLoan/LayerMyLoanProgressInstallmentConsultationFail.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanProgressAgree,
    LayerMyLoanProgressContractDocuments,
    LayerMyLoanProgressContractDocumentsEmail,
    LayerMyLoanProgressContractDocumentsIdentification,
    LayerMyLoanProgressContractDocumentsComplete,
    LayerMyLoanProgressReceiptGoods,
    LayerMyLoanProgressReceiptGoodsConfirm,
    LayerMyLoanProgressReceiptGoodsForm,
    LayerMyLoanProgressReceiptGoodsAgree,
    LayerMyLoanProgressReceiptGoodsComplete,
    LayerMyLoanProgressInstallmentConsultation,
    LayerMyLoanProgressInstallmentConsultationCustomerInfo,
    LayerMyLoanProgressInstallmentConsultationForm,
    LayerMyLoanProgressInstallmentConsultationComplete,
    LayerMyLoanProgressInstallmentConsultationFail,
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
        <BasicButton @click="layer001Open">
          약관동의<br />My_M03_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          계약서류 조회<br />My_M03_l027
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          이메일 전송<br />My_M03_b017
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          신용정보조회동의<br />My_M03_l029
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          신용정보조회동의 완료<br />My_M03_l030
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          본인확인(URL진입)<br />PF_M10_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          계약정보확인<br />PF_M10_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          물품수령정보<br />PF_M10_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          동의하기<br />PPF_M10_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          확인완료<br />PF_M10_l005
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          할부상담신청<br />PF_M10_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          한도조회결과<br />PF_M10_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open">
          할부신청정보입력<br />PF_M10_l008
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer014Open">
          할부상담 결과안내_할부약정가능<br />PF_M10_l010
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer015Open">
          할부상담 결과안내_추가심사필요<br />PF_M10_l010
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanProgressAgree ref="layer001" />
    <LayerMyLoanProgressContractDocuments ref="layer002" />
    <LayerMyLoanProgressContractDocumentsEmail ref="layer003" />
    <LayerMyLoanProgressContractDocumentsIdentification ref="layer004" />
    <LayerMyLoanProgressContractDocumentsComplete ref="layer005" />
    <LayerMyLoanProgressReceiptGoods ref="layer006" />
    <LayerMyLoanProgressReceiptGoodsConfirm ref="layer007" />
    <LayerMyLoanProgressReceiptGoodsForm ref="layer008" />
    <LayerMyLoanProgressReceiptGoodsAgree ref="layer009" />
    <LayerMyLoanProgressReceiptGoodsComplete ref="layer010" />
    <LayerMyLoanProgressInstallmentConsultation ref="layer011" />
    <LayerMyLoanProgressInstallmentConsultationCustomerInfo ref="layer012" />
    <LayerMyLoanProgressInstallmentConsultationForm ref="layer013" />
    <LayerMyLoanProgressInstallmentConsultationComplete ref="layer014" />
    <LayerMyLoanProgressInstallmentConsultationFail ref="layer015" />
  </PageContents>
</template>
