<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanOnlineContractAgreeConfirm from '@/views/myLoan/LayerMyLoanOnlineContractAgreeConfirm.vue';
import LayerMyLoanOnlineContractAutoConfirm001 from '@/views/myLoan/LayerMyLoanOnlineContractAutoConfirm001.vue';
import LayerMyLoanOnlineContractAutoComplete from '@/views/myLoan/LayerMyLoanOnlineContractAutoComplete.vue';
import LayerMyLoanOnlineContractAutoConfirm002 from '@/views/myLoan/LayerMyLoanOnlineContractAutoConfirm002.vue';
import LayerMyLoanOnlineContractAutoConfirm003 from '@/views/myLoan/LayerMyLoanOnlineContractAutoConfirm003.vue';
import LayerMyLoanOnlineContractAutoConfirm004 from '@/views/myLoan/LayerMyLoanOnlineContractAutoConfirm004.vue';
import LayerMyLoanOnlineContractAutoConfirm005 from '@/views/myLoan/LayerMyLoanOnlineContractAutoConfirm005.vue';
import LayerMyLoanOnlineContractAutoConfirm006 from '@/views/myLoan/LayerMyLoanOnlineContractAutoConfirm006.vue';
import LayerMyLoanOnlineContractAutoConfirm007 from '@/views/myLoan/LayerMyLoanOnlineContractAutoConfirm007.vue';
import LayerMyLoanOnlineContractAutoLeaseRentalComplete from '@/views/myLoan/LayerMyLoanOnlineContractAutoLeaseRentalComplete.vue';
import LayerMyLoanOnlineContractSuccessionNotice001 from '@/views/myLoan/LayerMyLoanOnlineContractSuccessionNotice001.vue';
import LayerMyLoanOnlineContractSuccessionNotice002 from '@/views/myLoan/LayerMyLoanOnlineContractSuccessionNotice002.vue';
import LayerMyLoanOnlineContractIntermediateIdentification from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateIdentification.vue';
import LayerMyLoanOnlineContractIntermediateList from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateList.vue';
import LayerMyLoanOnlineContractIntermediateContractorConfirm from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateContractorConfirm.vue';
import LayerMyLoanOnlineContractIntermediateAgree from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateAgree.vue';
import LayerMyLoanOnlineContractIntermediateDocument001 from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateDocument001.vue';
import LayerMyLoanOnlineContractIntermediateDocument002 from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateDocument002.vue';
import LayerMyLoanOnlineContractIntermediateDocument003 from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateDocument003.vue';
import LayerMyLoanOnlineContractIntermediateConfirm from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateConfirm.vue';
import LayerMyLoanOnlineContractIntermediateComplete from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateComplete.vue';
import LayerMyLoanOnlineContractIntermediateFail from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateFail.vue';
import LayerMyLoanOnlineContractIntermediateSuccessionIdentification from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateSuccessionIdentification.vue';
import LayerMyLoanOnlineContractIntermediateSuccessionList from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateSuccessionList.vue';
import LayerMyLoanOnlineContractIntermediateSuccessionConfirm from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateSuccessionConfirm.vue';
import LayerMyLoanOnlineContractIntermediateSuccessionAgree from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateSuccessionAgree.vue';
import LayerMyLoanOnlineContractIntermediateSuccessionComplete from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateSuccessionComplete.vue';
import LayerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree.vue';
import LayerMyLoanOnlineContractIntermediateSuccessionAssigneeRoomList from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateSuccessionAssigneeRoomList.vue';
import LayerMyLoanOnlineContractIntermediateSuccessionAssigneeForm from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateSuccessionAssigneeForm.vue';
import LayerMyLoanOnlineContractIntermediateSuccessionAssigneeAccount from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateSuccessionAssigneeAccount.vue';
import LayerMyLoanOnlineContractIntermediateSuccessionAssigneeConfirm from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateSuccessionAssigneeConfirm.vue';
import LayerMyLoanOnlineContractIntermediateSuccessionAssigneeComplete from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateSuccessionAssigneeComplete.vue';
import LayerMyLoanOnlineContractIntermediateSuccessionDocumentList from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateSuccessionDocumentList.vue';
import LayerMyLoanOnlineContractURL from '@/views/myLoan/LayerMyLoanOnlineContractURL.vue';
import LayerMyLoanOnlineContractURLConfirm from '@/views/myLoan/LayerMyLoanOnlineContractURLConfirm.vue';
import LayerMyLoanOnlineContractURLSelectDocument from '@/views/myLoan/LayerMyLoanOnlineContractURLSelectDocument.vue';
import LayerMyLoanOnlineContractURLOrderSheet from '@/views/myLoan/LayerMyLoanOnlineContractURLOrderSheet.vue';
import LayerMyLoanOnlineContractURLLease from '@/views/myLoan/LayerMyLoanOnlineContractURLLease.vue';
import LayerMyLoanOnlineContractURLThing from '@/views/myLoan/LayerMyLoanOnlineContractURLThing.vue';
import LayerMyLoanOnlineContractURLLeaseThingCheck from '@/views/myLoan/LayerMyLoanOnlineContractURLLeaseThingCheck.vue';
import LayerMyLoanOnlineContractURLComplete from '@/views/myLoan/LayerMyLoanOnlineContractURLComplete.vue';
import LayerMyLoanOnlineContractURLFail from '@/views/myLoan/LayerMyLoanOnlineContractURLFail.vue';
import LayerMyLoanOnlineContractUsedLoanAgreeVue from '@/views/myLoan/LayerMyLoanOnlineContractUsedLoanAgree.vue';
import LayerMyLoanOnlineContractUsedLoanConfirm001 from '@/views/myLoan/LayerMyLoanOnlineContractUsedLoanConfirm001.vue';
import LayerMyLoanOnlineContractUsedLoanFinalConfirm001 from '@/views/myLoan/LayerMyLoanOnlineContractUsedLoanFinalConfirm001.vue';
import LayerMyLoanOnlineContractUsedLoanComplete from '@/views/myLoan/LayerMyLoanOnlineContractUsedLoanComplete.vue';
import LayerMyLoanOnlineContractUsedLoanEarlyRedemptionFee from '@/views/myLoan/LayerMyLoanOnlineContractUsedLoanEarlyRedemptionFee.vue';
import LayerMyLoanOnlineContractUsedLoanNoticeVue from '@/views/myLoan/LayerMyLoanOnlineContractUsedLoanNotice.vue';
import LayerMyLoanOnlineContractUsedLoanConfirm002 from '@/views/myLoan/LayerMyLoanOnlineContractUsedLoanConfirm002.vue';
import LayerMyLoanOnlineContractUsedLoanFinalConfirm002 from '@/views/myLoan/LayerMyLoanOnlineContractUsedLoanFinalConfirm002.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanOnlineContractAgreeConfirm,
    LayerMyLoanOnlineContractAutoConfirm001,
    LayerMyLoanOnlineContractAutoComplete,
    LayerMyLoanOnlineContractAutoConfirm002,
    LayerMyLoanOnlineContractAutoConfirm003,
    LayerMyLoanOnlineContractAutoConfirm004,
    LayerMyLoanOnlineContractAutoConfirm005,
    LayerMyLoanOnlineContractAutoConfirm006,
    LayerMyLoanOnlineContractAutoConfirm007,
    LayerMyLoanOnlineContractAutoLeaseRentalComplete,
    LayerMyLoanOnlineContractSuccessionNotice001,
    LayerMyLoanOnlineContractSuccessionNotice002,
    LayerMyLoanOnlineContractIntermediateIdentification,
    LayerMyLoanOnlineContractIntermediateList,
    LayerMyLoanOnlineContractIntermediateContractorConfirm,
    LayerMyLoanOnlineContractIntermediateAgree,
    LayerMyLoanOnlineContractIntermediateDocument001,
    LayerMyLoanOnlineContractIntermediateDocument002,
    LayerMyLoanOnlineContractIntermediateDocument003,
    LayerMyLoanOnlineContractIntermediateConfirm,
    LayerMyLoanOnlineContractIntermediateComplete,
    LayerMyLoanOnlineContractIntermediateFail,
    LayerMyLoanOnlineContractIntermediateSuccessionIdentification,
    LayerMyLoanOnlineContractIntermediateSuccessionList,
    LayerMyLoanOnlineContractIntermediateSuccessionConfirm,
    LayerMyLoanOnlineContractIntermediateSuccessionAgree,
    LayerMyLoanOnlineContractIntermediateSuccessionComplete,
    LayerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree,
    LayerMyLoanOnlineContractIntermediateSuccessionAssigneeRoomList,
    LayerMyLoanOnlineContractIntermediateSuccessionAssigneeForm,
    LayerMyLoanOnlineContractIntermediateSuccessionAssigneeAccount,
    LayerMyLoanOnlineContractIntermediateSuccessionAssigneeConfirm,
    LayerMyLoanOnlineContractIntermediateSuccessionAssigneeComplete,
    LayerMyLoanOnlineContractIntermediateSuccessionDocumentList,
    LayerMyLoanOnlineContractURL,
    LayerMyLoanOnlineContractURLConfirm,
    LayerMyLoanOnlineContractURLSelectDocument,
    LayerMyLoanOnlineContractURLOrderSheet,
    LayerMyLoanOnlineContractURLLease,
    LayerMyLoanOnlineContractURLThing,
    LayerMyLoanOnlineContractURLLeaseThingCheck,
    LayerMyLoanOnlineContractURLComplete,
    LayerMyLoanOnlineContractURLFail,
    LayerMyLoanOnlineContractUsedLoanAgreeVue,
    LayerMyLoanOnlineContractUsedLoanConfirm001,
    LayerMyLoanOnlineContractUsedLoanFinalConfirm001,
    LayerMyLoanOnlineContractUsedLoanComplete,
    LayerMyLoanOnlineContractUsedLoanEarlyRedemptionFee,
    LayerMyLoanOnlineContractUsedLoanNoticeVue,
    LayerMyLoanOnlineContractUsedLoanConfirm002,
    LayerMyLoanOnlineContractUsedLoanFinalConfirm002,
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
          약정 확인<br />PF_M10_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          계약정보 최종확인_원큐다이렉트오토론<br />AF_M99_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          약정완료_원큐다이렉트오토론<br />AF_M99_l008
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          계약정보 최종확인_오토론<br />AF_M99_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          계약정보 최종확인_오토할부<br />AF_M99_l005
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          계약정보 최종확인_운용리스<br />AF_M99_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          계약정보 최종확인_금융리스<br />AF_M99_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          계약정보 최종확인_장기렌터카 신규/승계후/연장<br />AF_M99_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          약정정보 확인<br />AF_M99_l010
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer053Open">
          약정완료<br />AF_M99_l009
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          승계고객안내사항<br />MY_M07_b006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          주요고지사항<br />MY_M07_b007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer014Open">
          본인확인(URL진입)<br />BF_M04_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer015Open">
          중도금 대출내역<br />BF_M04_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer016Open">
          계약자 정보 확인<br />BF_M04_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer017Open">
          중도금 대출_약관동의<br />BF_M04_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer018Open"
          >중도금 분할 실행 동의서<br />BF_M04_l008</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer019Open"
          >채권 양도 담보설정계약서<br />BF_M04_l009</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer020Open"
          >채권 양도 통지서<br />BF_M04_l010</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer021Open">
          대출신청정보 확인<br />BF_M04_l011
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer022Open">
          온라인 약정 완료<br />BF_M04_l012
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer023Open">
          온라인 약정 실패<br />BF_M04_l012
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer024Open">
          양도인 승계_본인확인<br />BF_M04_l013
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer025Open">
          양도인 승계_승계 호실 검색<br />BF_M04_l014
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer026Open">
          양도인 승계_승계 정보 확인<br />BF_M04_l015
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer027Open">
          양도인 승계_승계 신청 동의<br />BF_M04_l016
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer028Open">
          양도인 승계_신청 완료<br />BF_M04_l017
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer029Open">
          신용정보조회동의<br />BF_M04_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer030Open">
          양수인 승계_승계 호실 검색<br />BF_M04_l019
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer031Open">
          양수인 승계_계약자정보 입력<br />BF_M04_l020
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer032Open">
          양수인 승계_계좌 정보 입력<br />BF_M04_l021
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer033Open">
          계약정보 최종확인<br />BF_M04_l022
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer034Open">
          양수인 승계_신청 완료<br />BF_M04_l023
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer035Open">
          서류 요청<br />BF_M04_l025
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer036Open">
          약정 정보 확인<br />BF_M05_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer037Open">
          계약정보 최종확인<br />BF_M05_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer038Open"
          >약정 서류 확인<br />BF_M05_l008</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer039Open">
          주문서<br />BF_M05_l009
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer040Open">
          리스계약확인서<br />BF_M05_l010
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer041Open"
          >물건수령증(장비견적서 포함)<br />BF_M05_l011</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer042Open"
          >리스물건 점검보고서<br />BF_M05_l012</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer043Open">
          약정완료<br />BF_M05_l013
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer044Open">
          약정실패<br />BF_M05_l013
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer045Open">
          중고차 오토론_약관동의<br />AF_M98_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer046Open">
          계약정보 최종확인_중고차오토론<br />AF_M98_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer047Open">
          계약정보 최종확인_약정정보확인<br />AF_M98_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer048Open">
          약정완료_오토금융<br />AF_M98_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer049Open">
          중도상환 수수료 산식 팝업<br />AF_M98_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer050Open">
          약관상세_할부금 수령 위임안내<br />AF_M98_l009
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer051Open">
          계약정보 최종확인_중고차 할부<br />AF_M98_l010
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer052Open">
          계약정보 최종확인_약정정보확인 중고차할부<br />AF_M98_l011
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanOnlineContractAgreeConfirm ref="layer001" />
    <LayerMyLoanOnlineContractAutoConfirm001 ref="layer002" />
    <LayerMyLoanOnlineContractAutoComplete ref="layer003" />
    <LayerMyLoanOnlineContractAutoConfirm002 ref="layer004" />
    <LayerMyLoanOnlineContractAutoConfirm003 ref="layer005" />
    <LayerMyLoanOnlineContractAutoConfirm004 ref="layer006" />
    <LayerMyLoanOnlineContractAutoConfirm005 ref="layer007" />
    <LayerMyLoanOnlineContractAutoConfirm006 ref="layer008" />
    <LayerMyLoanOnlineContractAutoConfirm007 ref="layer009" />
    <LayerMyLoanOnlineContractAutoLeaseRentalComplete ref="layer053" />
    <LayerMyLoanOnlineContractSuccessionNotice001 ref="layer010" />
    <LayerMyLoanOnlineContractSuccessionNotice002 ref="layer011" />
    <LayerMyLoanOnlineContractIntermediateIdentification ref="layer014" />
    <LayerMyLoanOnlineContractIntermediateList ref="layer015" />
    <LayerMyLoanOnlineContractIntermediateContractorConfirm ref="layer016" />
    <LayerMyLoanOnlineContractIntermediateAgree ref="layer017" />
    <LayerMyLoanOnlineContractIntermediateDocument001 ref="layer018" />
    <LayerMyLoanOnlineContractIntermediateDocument002 ref="layer019" />
    <LayerMyLoanOnlineContractIntermediateDocument003 ref="layer020" />
    <LayerMyLoanOnlineContractIntermediateConfirm ref="layer021" />
    <LayerMyLoanOnlineContractIntermediateComplete ref="layer022" />
    <LayerMyLoanOnlineContractIntermediateFail ref="layer023" />
    <LayerMyLoanOnlineContractIntermediateSuccessionIdentification
      ref="layer024"
    />
    <LayerMyLoanOnlineContractIntermediateSuccessionList ref="layer025" />
    <LayerMyLoanOnlineContractIntermediateSuccessionConfirm ref="layer026" />
    <LayerMyLoanOnlineContractIntermediateSuccessionAgree ref="layer027" />
    <LayerMyLoanOnlineContractIntermediateSuccessionComplete ref="layer028" />
    <LayerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree
      ref="layer029"
    />
    <LayerMyLoanOnlineContractIntermediateSuccessionAssigneeRoomList
      ref="layer030"
    />
    <LayerMyLoanOnlineContractIntermediateSuccessionAssigneeForm
      ref="layer031"
    />
    <LayerMyLoanOnlineContractIntermediateSuccessionAssigneeAccount
      ref="layer032"
    />
    <LayerMyLoanOnlineContractIntermediateSuccessionAssigneeConfirm
      ref="layer033"
    />
    <LayerMyLoanOnlineContractIntermediateSuccessionAssigneeComplete
      ref="layer034"
    />
    <LayerMyLoanOnlineContractIntermediateSuccessionDocumentList
      ref="layer035"
    />
    <LayerMyLoanOnlineContractURL ref="layer036" />
    <LayerMyLoanOnlineContractURLConfirm ref="layer037" />
    <LayerMyLoanOnlineContractURLSelectDocument ref="layer038" />
    <LayerMyLoanOnlineContractURLOrderSheet ref="layer039" />
    <LayerMyLoanOnlineContractURLLease ref="layer040" />
    <LayerMyLoanOnlineContractURLThing ref="layer041" />
    <LayerMyLoanOnlineContractURLLeaseThingCheck ref="layer042" />
    <LayerMyLoanOnlineContractURLComplete ref="layer043" />
    <LayerMyLoanOnlineContractURLFail ref="layer044" />
    <LayerMyLoanOnlineContractUsedLoanAgreeVue ref="layer045" />
    <LayerMyLoanOnlineContractUsedLoanConfirm001 ref="layer046" />
    <LayerMyLoanOnlineContractUsedLoanFinalConfirm001 ref="layer047" />
    <LayerMyLoanOnlineContractUsedLoanComplete ref="layer048" />
    <LayerMyLoanOnlineContractUsedLoanEarlyRedemptionFee ref="layer049" />
    <LayerMyLoanOnlineContractUsedLoanNoticeVue ref="layer050" />
    <LayerMyLoanOnlineContractUsedLoanConfirm002 ref="layer051" />
    <LayerMyLoanOnlineContractUsedLoanFinalConfirm002 ref="layer052" />
  </PageContents>
</template>
