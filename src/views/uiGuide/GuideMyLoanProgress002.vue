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
import LayerMyLoanOnlineContractCheck001 from '@/views/myLoan/LayerMyLoanOnlineContractCheck001.vue';
import LayerMyLoanOnlineContractCheckAgree from '@/views/myLoan/LayerMyLoanOnlineContractCheckAgree.vue';
import LayerMyLoanOnlineContractAgree from '@/views/myLoan/LayerMyLoanOnlineContractAgree.vue';
import LayerMyLoanOnlineContractFurtherExplanation from '@/views/myLoan/LayerMyLoanOnlineContractFurtherExplanation.vue';
import LayerMyLoanOnlineContractClauseDetail001 from '@/views/myLoan/LayerMyLoanOnlineContractClauseDetail001.vue';
import LayerMyLoanOnlineContractClauseDetail002 from '@/views/myLoan/LayerMyLoanOnlineContractClauseDetail002.vue';
import LayerMyLoanOnlineContractClauseDetail003 from '@/views/myLoan/LayerMyLoanOnlineContractClauseDetail003.vue';
import LayerMyLoanOnlineContractClauseDetail004 from '@/views/myLoan/LayerMyLoanOnlineContractClauseDetail004.vue';
import LayerMyLoanOnlineContractClauseDetail005 from '@/views/myLoan/LayerMyLoanOnlineContractClauseDetail005.vue';
import LayerMyLoanOnlineContractClauseDetail006 from '@/views/myLoan/LayerMyLoanOnlineContractClauseDetail006.vue';
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
import LayerMyLoanOnlineContractSuccessionGuide001 from '@/views/myLoan/LayerMyLoanOnlineContractSuccessionGuide001.vue';
import LayerMyLoanOnlineContractSuccessionGuide002 from '@/views/myLoan/LayerMyLoanOnlineContractSuccessionGuide002.vue';
import LayerMyLoanOnlineContractSuccessionConfirm001 from '@/views/myLoan/LayerMyLoanOnlineContractSuccessionConfirm001.vue';
import LayerMyLoanOnlineContractSuccessionConfirm002 from '@/views/myLoan/LayerMyLoanOnlineContractSuccessionConfirm002.vue';
import LayerMyLoanOnlineContractSuccessionImportant from '@/views/myLoan/LayerMyLoanOnlineContractSuccessionImportant.vue';
import LayerMyLoanOnlineContractSuccessionConfirm003 from '@/views/myLoan/LayerMyLoanOnlineContractSuccessionConfirm003.vue';
import LayerMyLoanOnlineContractSuccessionConfirm004 from '@/views/myLoan/LayerMyLoanOnlineContractSuccessionConfirm004.vue';
import LayerMyLoanOnlineContractConfirm002 from '@/views/myLoan/LayerMyLoanOnlineContractConfirm002.vue';
import LayerMyLoanOnlineContractConfirm003 from '@/views/myLoan/LayerMyLoanOnlineContractConfirm003.vue';
import LayerMyLoanOnlineContractConfirm004 from '@/views/myLoan/LayerMyLoanOnlineContractConfirm004.vue';
import My_M03_l033 from '@/views/myLoan/My_M03_l033.vue';
import My_M03_l016b from '@/views/myLoan/My_M03_l016b.vue';
import LayerMyLoanOnlineFirstExplanation from '@/views/myLoan/LayerMyLoanOnlineFirstExplanation.vue';
import LayerMyLoanOnlineImpossible from '@/views/myLoan/LayerMyLoanOnlineImpossible.vue'; //240529 추가

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
    LayerMyLoanOnlineContractCheck001,
    LayerMyLoanOnlineContractCheckAgree,
    LayerMyLoanOnlineContractAgree,
    LayerMyLoanOnlineContractFurtherExplanation,
    LayerMyLoanOnlineContractClauseDetail001,
    LayerMyLoanOnlineContractClauseDetail002,
    LayerMyLoanOnlineContractClauseDetail003,
    LayerMyLoanOnlineContractClauseDetail004,
    LayerMyLoanOnlineContractClauseDetail005,
    LayerMyLoanOnlineContractClauseDetail006,
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
    LayerMyLoanOnlineContractSuccessionGuide001,
    LayerMyLoanOnlineContractSuccessionGuide002,
    LayerMyLoanOnlineContractSuccessionConfirm001,
    LayerMyLoanOnlineContractSuccessionConfirm002,
    LayerMyLoanOnlineContractSuccessionImportant,
    LayerMyLoanOnlineContractSuccessionConfirm003,
    LayerMyLoanOnlineContractSuccessionConfirm004,
    LayerMyLoanOnlineContractConfirm002,
    LayerMyLoanOnlineContractConfirm003,
    LayerMyLoanOnlineContractConfirm004,
    My_M03_l033,
    My_M03_l016b,
    LayerMyLoanOnlineFirstExplanation,
    LayerMyLoanOnlineImpossible,
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
    const layer042 = ref(null);
    const layer043 = ref(null);
    const layer044 = ref(null);
    const layer045 = ref(null);
    const layer046 = ref(null);
    const layer047 = ref(null);
    const layer048 = ref(null);
    const layer049 = ref(null);
    const layer050 = ref(null);
    const layer051 = ref(null);
    const layer052 = ref(null);
    const layer053 = ref(null);
    const layer054 = ref(null);
    const layer055 = ref(null);
    const layer056 = ref(null);
    const layer057 = ref(null);

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
    const layer042Open = (e = {}) => {
      layer042.value.layer.open(e.target);
    };
    const layer043Open = (e = {}) => {
      layer043.value.layer.open(e.target);
    };
    const layer044Open = (e = {}) => {
      layer044.value.layer.open(e.target);
    };
    const layer045Open = (e = {}) => {
      layer045.value.layer.open(e.target);
    };
    const layer046Open = (e = {}) => {
      layer046.value.layer.open(e.target);
    };
    const layer047Open = (e = {}) => {
      layer047.value.layer.open(e.target);
    };
    const layer048Open = (e = {}) => {
      layer048.value.layer.open(e.target);
    };
    const layer049Open = (e = {}) => {
      layer049.value.layer.open(e.target);
    };
    const layer050Open = (e = {}) => {
      layer050.value.layer.open(e.target);
    };
    const layer051Open = (e = {}) => {
      layer051.value.layer.open(e.target);
    };
    const layer052Open = (e = {}) => {
      layer052.value.layer.open(e.target);
    };
    const layer053Open = (e = {}) => {
      layer053.value.layer.open(e.target);
    };
    const layer054Open = (e = {}) => {
      layer054.value.layer.open(e.target);
    };
    const layer055Open = (e = {}) => {
      layer055.value.layer.open(e.target);
    };
    const layer056Open = (e = {}) => {
      layer056.value.layer.open(e.target);
    };
    const layer057Open = (e = {}) => {
      layer057.value.layer.open(e.target);
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
      layer042,
      layer043,
      layer044,
      layer045,
      layer046,
      layer047,
      layer048,
      layer049,
      layer050,
      layer051,
      layer052,
      layer053,
      layer054,
      layer055,
      layer056,
      layer057,
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
      layer042Open,
      layer043Open,
      layer044Open,
      layer045Open,
      layer046Open,
      layer047Open,
      layer048Open,
      layer049Open,
      layer050Open,
      layer051Open,
      layer052Open,
      layer053Open,
      layer054Open,
      layer055Open,
      layer056Open,
      layer057Open,
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
      <!-- S: 240524 수정 -->
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          약관동의<br />My_M03_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer056Open">
          금융취약 소비자 우선설명<br />My_M03_l006
        </BasicButton>
      </ButtonListItem>
      <!-- // E: 240524 수정 -->
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          추가설명 여부<br />My_M03_b003
        </BasicButton>
      </ButtonListItem>
      <!-- S:240529 추가 -->
      <ButtonListItem>
        <BasicButton @click="layer057Open">
          약관동의 계열사마케팅 진행불가<br />My_M03_b004
        </BasicButton>
      </ButtonListItem>
      <!-- // E:240529 추가 -->
      <ButtonListItem>
        <BasicButton @click="layer046Open">
          약관상세_실제소유자 확인<br />My_M03_l032
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer047Open">
          약관상세_할부금 지급 안내<br />My_M03_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer048Open">
          약관상세_청약의 철회권 안내<br />My_M03_l008
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer049Open">
          약관상세_신용점수 하락가능 안내<br />My_M03_l009
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer050Open">
          약관상세_기한 이익상실 안내<br />My_M03_l010
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer051Open">
          약관상세_금리인하 요구권 안내<br />My_M03_l011
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
        <BasicButton @click="layer054Open">
          약관상세_전기차 보조금 확인사항<br />My_M03_l033
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          계약신청 정보입력<br />My_M03_l016
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer055Open">
          국적선택 팝업<br />My_M03_l016b
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
        <BasicButton @click="layer052Open"
          >할부금융 안내 - CO 코드일 경우<br />PF_M10_b002</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer053Open"
          >할부금융 안내 - LO 코드일 경우<br />PF_M10_b003</BasicButton
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
          >승계확약서_오토리스<br />MY_M03_l026(MY_M03_l026a)
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer042Open"
          >승계확약서_오토리스<br />AF_M98_l005</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer043Open"
          >계약정보 최종확인_리스 승계 후<br />MY_M03_l022(MY_M03_l022le1)
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer044Open"
          >계약정보 최종확인_장기렌터카 승계전<br />MY_M03_l022(MY_M03_l022pa1)
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer045Open"
          >계약정보 최종확인_장기렌터카 신규/승계후/연장<br />MY_M03_l022(MY_M03_l022pa2)
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanOnlineContractStartURL ref="layer001" />
    <LayerMyLoanOnlineContractStartRecruiter ref="layer002" />
    <LayerMyLoanOnlineContractNoticeDuty ref="layer003" />
    <LayerMyLoanOnlineContractNoticeDutyNotAgree ref="layer004" />
    <LayerMyLoanOnlineContractCheck001 ref="layer005" />
    <LayerMyLoanOnlineContractCheckAgree ref="layer006" />
    <LayerMyLoanOnlineContractAgree ref="layer007" />
    <LayerMyLoanOnlineContractFurtherExplanation ref="layer008" />
    <LayerMyLoanOnlineContractClauseDetail001 ref="layer046" />
    <LayerMyLoanOnlineContractClauseDetail002 ref="layer047" />
    <LayerMyLoanOnlineContractClauseDetail003 ref="layer048" />
    <LayerMyLoanOnlineContractClauseDetail004 ref="layer049" />
    <LayerMyLoanOnlineContractClauseDetail005 ref="layer050" />
    <LayerMyLoanOnlineContractClauseDetail006 ref="layer051" />
    <LayerMyLoanOnlineContractUsedCarLoanScam ref="layer009" />
    <LayerMyLoanOnlineContractLoanCounselor ref="layer010" />
    <My_M03_l033 ref="layer054" />
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
    <LayerMyLoanOnlineContractSuccessionGuide001 ref="layer052" />
    <LayerMyLoanOnlineContractSuccessionGuide002 ref="layer053" />
    <LayerMyLoanOnlineContractSuccessionConfirm001 ref="layer038" />
    <LayerMyLoanOnlineContractSuccessionConfirm002 ref="layer039" />
    <LayerMyLoanOnlineContractSuccessionImportant ref="layer040" />
    <LayerMyLoanOnlineContractSuccessionConfirm003 ref="layer041" />
    <LayerMyLoanOnlineContractSuccessionConfirm004 ref="layer042" />
    <LayerMyLoanOnlineContractConfirm002 ref="layer043" />
    <LayerMyLoanOnlineContractConfirm003 ref="layer044" />
    <LayerMyLoanOnlineContractConfirm004 ref="layer045" />
    <My_M03_l016b ref="layer055" />
    <LayerMyLoanOnlineFirstExplanation ref="layer056" />
    <LayerMyLoanOnlineImpossible ref="layer057" />
  </PageContents>
</template>
