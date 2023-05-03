<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanOnlineContractStartURL from '@/views/myLoan/LayerMyLoanOnlineContractStartURL.vue';
import LayerMyLoanOnlineContractStartRecruiter from '@/views/myLoan/LayerMyLoanOnlineContractStartRecruiter.vue';
import LayerMyLoanOnlineContractNoticeDuty from '@/views/myLoan/LayerMyLoanOnlineContractNoticeDuty.vue';
import LayerMyLoanOnlineContractNoticeDutyNotAgree from '@/views/myLoan/LayerMyLoanOnlineContractNoticeDutyNotAgree.vue';
import LayerMyLoanOnlineContractCheck from '@/views/myLoan/LayerMyLoanOnlineContractCheck.vue';
import LayerMyLoanOnlineContractCheckAgree from '@/views/myLoan/LayerMyLoanOnlineContractCheckAgree.vue';
import LayerMyLoanOnlineContractAgree from '@/views/myLoan/LayerMyLoanOnlineContractAgree.vue';
import LayerMyLoanOnlineContractFurtherExplanation from '@/views/myLoan/LayerMyLoanOnlineContractFurtherExplanation.vue';
import LayerMyLoanOnlineContractUsedCarLoanScam from '@/views/myLoan/LayerMyLoanOnlineContractUsedCarLoanScam.vue';
import LayerMyLoanOnlineContractLoanCounselor from '@/views/myLoan/LayerMyLoanOnlineContractLoanCounselor.vue';
import LayerMyLoanOnlineContractContractor from '@/views/myLoan/LayerMyLoanOnlineContractContractor.vue';
import LayerMyLoanOnlineContractBilling from '@/views/myLoan/LayerMyLoanOnlineContractBilling.vue';
import LayerMyLoanOnlineContractDirectDebit from '@/views/myLoan/LayerMyLoanOnlineContractDirectDebit.vue';
import LayerMyLoanOnlineContractIdCard from '@/views/myLoan/LayerMyLoanOnlineContractIdCard.vue';
import LayerMyLoanOnlineContractAdditional from '@/views/myLoan/LayerMyLoanOnlineContractAdditional.vue';
import LayerMyLoanOnlineContractExisting from '@/views/myLoan/LayerMyLoanOnlineContractExisting.vue';
import LayerMyLoanOnlineContractExistingComplete from '@/views/myLoan/LayerMyLoanOnlineContractExistingComplete.vue';
import LayerMyLoanOnlineContractFinancialTerms from '@/views/myLoan/LayerMyLoanOnlineContractFinancialTerms.vue';
import LayerMyLoanOnlineContractAccountAuth from '@/views/myLoan/LayerMyLoanOnlineContractAccountAuth.vue';
import LayerMyLoanOnlineContractConfirm001 from '@/views/myLoan/LayerMyLoanOnlineContractConfirm001.vue';
import LayerMyLoanOnlineContractSpecialConfirm from '@/views/myLoan/LayerMyLoanOnlineContractSpecialConfirm.vue';
import LayerMyLoanOnlineContractAutomatic from '@/views/myLoan/LayerMyLoanOnlineContractAutomatic.vue';
import LayerMyLoanOnlineContractComplete001 from '@/views/myLoan/LayerMyLoanOnlineContractComplete001.vue';
import LayerMyLoanOnlineContractComplete002 from '@/views/myLoan/LayerMyLoanOnlineContractComplete002.vue';
import LayerMyLoanOnlineContractComplete003 from '@/views/myLoan/LayerMyLoanOnlineContractComplete003.vue';
import LayerMyLoanOnlineContractComplete004 from '@/views/myLoan/LayerMyLoanOnlineContractComplete004.vue';
import LayerMyLoanOnlineContractComplete005 from '@/views/myLoan/LayerMyLoanOnlineContractComplete005.vue';
import LayerMyLoanOnlineContractFail001 from '@/views/myLoan/LayerMyLoanOnlineContractFail001.vue';
import LayerMyLoanOnlineContractFail002 from '@/views/myLoan/LayerMyLoanOnlineContractFail002.vue';
import LayerMyLoanOnlineContractFail003 from '@/views/myLoan/LayerMyLoanOnlineContractFail003.vue';
import LayerMyLoanOnlineContractError001 from '@/views/myLoan/LayerMyLoanOnlineContractError001.vue';
import LayerMyLoanOnlineContractError002 from '@/views/myLoan/LayerMyLoanOnlineContractError002.vue';
import LayerMyLoanOnlineContractInterestCut from '@/views/myLoan/LayerMyLoanOnlineContractInterestCut.vue';
import LayerMyLoanOnlineContractWithdraw from '@/views/myLoan/LayerMyLoanOnlineContractWithdraw.vue';
import LayerMyLoanOnlineContractDescription from '@/views/myLoan/LayerMyLoanOnlineContractDescription.vue';
import LayerMyLoanOnlineContractDescriptionConfirm from '@/views/myLoan/LayerMyLoanOnlineContractDescriptionConfirm.vue';
import LayerMyLoanOnlineContractSuccession from '@/views/myLoan/LayerMyLoanOnlineContractSuccession.vue';
import LayerMyLoanOnlineContractSuccessionConfirm001 from '@/views/myLoan/LayerMyLoanOnlineContractSuccessionConfirm001.vue';
import LayerMyLoanOnlineContractSuccessionConfirm002 from '@/views/myLoan/LayerMyLoanOnlineContractSuccessionConfirm002.vue';
import LayerMyLoanOnlineContractSuccessionImportant from '@/views/myLoan/LayerMyLoanOnlineContractSuccessionImportant.vue';
import LayerMyLoanOnlineContractConfirm002 from '@/views/myLoan/LayerMyLoanOnlineContractConfirm002.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanOnlineContractStartURL,
    LayerMyLoanOnlineContractStartRecruiter,
    LayerMyLoanOnlineContractNoticeDuty,
    LayerMyLoanOnlineContractNoticeDutyNotAgree,
    LayerMyLoanOnlineContractCheck,
    LayerMyLoanOnlineContractCheckAgree,
    LayerMyLoanOnlineContractAgree,
    LayerMyLoanOnlineContractFurtherExplanation,
    LayerMyLoanOnlineContractUsedCarLoanScam,
    LayerMyLoanOnlineContractLoanCounselor,
    LayerMyLoanOnlineContractContractor,
    LayerMyLoanOnlineContractBilling,
    LayerMyLoanOnlineContractDirectDebit,
    LayerMyLoanOnlineContractIdCard,
    LayerMyLoanOnlineContractAdditional,
    LayerMyLoanOnlineContractExisting,
    LayerMyLoanOnlineContractExistingComplete,
    LayerMyLoanOnlineContractFinancialTerms,
    LayerMyLoanOnlineContractAccountAuth,
    LayerMyLoanOnlineContractConfirm001,
    LayerMyLoanOnlineContractSpecialConfirm,
    LayerMyLoanOnlineContractAutomatic,
    LayerMyLoanOnlineContractComplete001,
    LayerMyLoanOnlineContractComplete002,
    LayerMyLoanOnlineContractComplete003,
    LayerMyLoanOnlineContractComplete004,
    LayerMyLoanOnlineContractComplete005,
    LayerMyLoanOnlineContractFail001,
    LayerMyLoanOnlineContractFail002,
    LayerMyLoanOnlineContractFail003,
    LayerMyLoanOnlineContractError001,
    LayerMyLoanOnlineContractError002,
    LayerMyLoanOnlineContractInterestCut,
    LayerMyLoanOnlineContractWithdraw,
    LayerMyLoanOnlineContractDescription,
    LayerMyLoanOnlineContractDescriptionConfirm,
    LayerMyLoanOnlineContractSuccession,
    LayerMyLoanOnlineContractSuccessionConfirm001,
    LayerMyLoanOnlineContractSuccessionConfirm002,
    LayerMyLoanOnlineContractSuccessionImportant,
    LayerMyLoanOnlineContractConfirm002,
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
    const layer016 = ref(null);
    const layer017 = ref(null);
    const layer018 = ref(null);
    const layer019 = ref(null);
    const layer020 = ref(null);
    const layer021 = ref(null);
    const layer022 = ref(null);
    const layer023 = ref(null);
    const layer024 = ref(null);
    const layer025 = ref(null);
    const layer026 = ref(null);
    const layer027 = ref(null);
    const layer028 = ref(null);
    const layer029 = ref(null);
    const layer030 = ref(null);
    const layer031 = ref(null);
    const layer032 = ref(null);
    const layer033 = ref(null);
    const layer034 = ref(null);
    const layer035 = ref(null);
    const layer036 = ref(null);
    const layer037 = ref(null);
    const layer038 = ref(null);
    const layer039 = ref(null);
    const layer040 = ref(null);
    const layer041 = ref(null);

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
    const layer016Open = (e = {}) => {
      layer016.value.layer.open(e.target);
    };
    const layer017Open = (e = {}) => {
      layer017.value.layer.open(e.target);
    };
    const layer018Open = (e = {}) => {
      layer018.value.layer.open(e.target);
    };
    const layer019Open = (e = {}) => {
      layer019.value.layer.open(e.target);
    };
    const layer020Open = (e = {}) => {
      layer020.value.layer.open(e.target);
    };
    const layer021Open = (e = {}) => {
      layer021.value.layer.open(e.target);
    };
    const layer022Open = (e = {}) => {
      layer022.value.layer.open(e.target);
    };
    const layer023Open = (e = {}) => {
      layer023.value.layer.open(e.target);
    };
    const layer024Open = (e = {}) => {
      layer024.value.layer.open(e.target);
    };
    const layer025Open = (e = {}) => {
      layer025.value.layer.open(e.target);
    };
    const layer026Open = (e = {}) => {
      layer026.value.layer.open(e.target);
    };
    const layer027Open = (e = {}) => {
      layer027.value.layer.open(e.target);
    };
    const layer028Open = (e = {}) => {
      layer028.value.layer.open(e.target);
    };
    const layer029Open = (e = {}) => {
      layer029.value.layer.open(e.target);
    };
    const layer030Open = (e = {}) => {
      layer030.value.layer.open(e.target);
    };
    const layer031Open = (e = {}) => {
      layer031.value.layer.open(e.target);
    };
    const layer032Open = (e = {}) => {
      layer032.value.layer.open(e.target);
    };
    const layer033Open = (e = {}) => {
      layer033.value.layer.open(e.target);
    };
    const layer034Open = (e = {}) => {
      layer034.value.layer.open(e.target);
    };
    const layer035Open = (e = {}) => {
      layer035.value.layer.open(e.target);
    };
    const layer036Open = (e = {}) => {
      layer036.value.layer.open(e.target);
    };
    const layer037Open = (e = {}) => {
      layer037.value.layer.open(e.target);
    };
    const layer038Open = (e = {}) => {
      layer038.value.layer.open(e.target);
    };
    const layer039Open = (e = {}) => {
      layer039.value.layer.open(e.target);
    };
    const layer040Open = (e = {}) => {
      layer040.value.layer.open(e.target);
    };
    const layer041Open = (e = {}) => {
      layer041.value.layer.open(e.target);
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
      layer016,
      layer017,
      layer018,
      layer019,
      layer020,
      layer021,
      layer022,
      layer023,
      layer024,
      layer025,
      layer026,
      layer027,
      layer028,
      layer029,
      layer030,
      layer031,
      layer032,
      layer033,
      layer034,
      layer035,
      layer036,
      layer037,
      layer038,
      layer039,
      layer040,
      layer041,
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
      layer016Open,
      layer017Open,
      layer018Open,
      layer019Open,
      layer020Open,
      layer021Open,
      layer022Open,
      layer023Open,
      layer024Open,
      layer025Open,
      layer026Open,
      layer027Open,
      layer028Open,
      layer029Open,
      layer030Open,
      layer031Open,
      layer032Open,
      layer033Open,
      layer034Open,
      layer035Open,
      layer036Open,
      layer037Open,
      layer038Open,
      layer039Open,
      layer040Open,
      layer041Open,
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
          본인인증(URL진입)<br />My_M03_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          모집인등록증 제시<br />My_M03_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          고지의무수행 확인서<br />My_M03_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          고지의무수행 확인서_미동의시<br />My_M03_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          적합성·적정성 확인서<br />My_M03_l005
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          적합성·적정성 확인서_미동의 시<br />My_M03_b002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          약관동의<br />My_M03_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          추가설명 여부<br />My_M03_b003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          약관상세_중고차 대출사기 방지 안내문<br />My_M03_l012
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          약관상세_대출상담사 설명 확인서<br />My_M03_l013
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          계약신청 정보입력<br />My_M03_l016
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          청구 정보입력<br />My_M03_l017
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open">
          결제 정보입력<br />My_M03_l018
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer014Open">
          결제 정보입력<br />My_M03_l019
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer015Open">
          추가 정보입력<br />My_M03_l020
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer016Open">
          기약정 안내_진행<br />My_M03_b010
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer017Open">
          기약정 안내_완료<br />My_M03_b011
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer018Open">
          금융조건 정보입력<br />My_M03_l021
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer019Open">
          1원계좌 인증<br />My_M03_l031
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer020Open">
          계약정보 최종확인<br />My_M03_l022
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer021Open">
          계약사항 확인<br />My_M03_b012
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer022Open">
          자동송금<br />My_M03_b013
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer023Open">
          약정완료 신용대출<br />My_M03_l023
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer024Open">
          약정완료 중도금대출<br />My_M03_l023
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer025Open">
          약정완료 일반할부금융<br />My_M03_l023
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer026Open">
          약정완료 자동송금대상(영업시간 내)<br />My_M03_l023
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer027Open">
          약정완료 자동송금대상(영업시간 외)<br />My_M03_l023
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer028Open">
          약정실패 신용대출<br />My_M03_l023
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer029Open">
          약정실패 중도금대출<br />My_M03_l023
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer030Open">
          약정실패 일반할부금<br />My_M03_l023
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer031Open">
          약정실패 Fraud대상자<br />My_M03_l023
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer032Open">
          약정실패 오류<br />My_M03_l023
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer033Open">
          금리인하요구권 안내<br />My_M03_b014
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer034Open">
          청약철회권 안내<br />My_M03_b015
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer035Open">
          상품설명서 확인 안내(공통)<br />My_M03_l200
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer036Open">
          상품설명에 대한 확인(공통)<br />My_M03_b050
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer037Open"
          >승계 본인확인<br />My_M03_l024</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer038Open"
          >승계확약 확인<br />My_M03_l025
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer039Open"
          >승계확약서 확인<br />My_M03_l026
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer040Open"
          >승계 약정 중요사항 확인<br />My_M03_b016
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer041Open"
          >계약정보 최종확인_리스 승계 후<br />MY_M03_l022(MY_M03_l022le1)
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanOnlineContractStartURL ref="layer001" />
    <LayerMyLoanOnlineContractStartRecruiter ref="layer002" />
    <LayerMyLoanOnlineContractNoticeDuty ref="layer003" />
    <LayerMyLoanOnlineContractNoticeDutyNotAgree ref="layer004" />
    <LayerMyLoanOnlineContractCheck ref="layer005" />
    <LayerMyLoanOnlineContractCheckAgree ref="layer006" />
    <LayerMyLoanOnlineContractAgree ref="layer007" />
    <LayerMyLoanOnlineContractFurtherExplanation ref="layer008" />
    <LayerMyLoanOnlineContractUsedCarLoanScam ref="layer009" />
    <LayerMyLoanOnlineContractLoanCounselor ref="layer010" />
    <LayerMyLoanOnlineContractContractor ref="layer011" />
    <LayerMyLoanOnlineContractBilling ref="layer012" />
    <LayerMyLoanOnlineContractDirectDebit ref="layer013" />
    <LayerMyLoanOnlineContractIdCard ref="layer014" />
    <LayerMyLoanOnlineContractAdditional ref="layer015" />
    <LayerMyLoanOnlineContractExisting ref="layer016" />
    <LayerMyLoanOnlineContractExistingComplete ref="layer017" />
    <LayerMyLoanOnlineContractFinancialTerms ref="layer018" />
    <LayerMyLoanOnlineContractAccountAuth ref="layer019" />
    <LayerMyLoanOnlineContractConfirm001 ref="layer020" />
    <LayerMyLoanOnlineContractSpecialConfirm ref="layer021" />
    <LayerMyLoanOnlineContractAutomatic ref="layer022" />
    <LayerMyLoanOnlineContractComplete001 ref="layer023" />
    <LayerMyLoanOnlineContractComplete002 ref="layer024" />
    <LayerMyLoanOnlineContractComplete003 ref="layer025" />
    <LayerMyLoanOnlineContractComplete004 ref="layer026" />
    <LayerMyLoanOnlineContractComplete005 ref="layer027" />
    <LayerMyLoanOnlineContractFail001 ref="layer028" />
    <LayerMyLoanOnlineContractFail002 ref="layer029" />
    <LayerMyLoanOnlineContractFail003 ref="layer030" />
    <LayerMyLoanOnlineContractError001 ref="layer031" />
    <LayerMyLoanOnlineContractError002 ref="layer032" />
    <LayerMyLoanOnlineContractInterestCut ref="layer033" />
    <LayerMyLoanOnlineContractWithdraw ref="layer034" />
    <LayerMyLoanOnlineContractDescription ref="layer035" />
    <LayerMyLoanOnlineContractDescriptionConfirm ref="layer036" />
    <LayerMyLoanOnlineContractSuccession ref="layer037" />
    <LayerMyLoanOnlineContractSuccessionConfirm001 ref="layer038" />
    <LayerMyLoanOnlineContractSuccessionConfirm002 ref="layer039" />
    <LayerMyLoanOnlineContractSuccessionImportant ref="layer040" />
    <LayerMyLoanOnlineContractConfirm002 ref="layer041" />
  </PageContents>
</template>
