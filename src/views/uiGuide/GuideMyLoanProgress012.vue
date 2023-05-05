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
import LayerMyLoanOnlineContractSuccessionNotice001 from '@/views/myLoan/LayerMyLoanOnlineContractSuccessionNotice001.vue';
import LayerMyLoanOnlineContractSuccessionNotice002 from '@/views/myLoan/LayerMyLoanOnlineContractSuccessionNotice002.vue';
import LayerMyLoanOnlineContractIntermediateIdentification from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateIdentification.vue';
import LayerMyLoanOnlineContractIntermediateList from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateList.vue';
import LayerMyLoanOnlineContractIntermediateContractorConfirm from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateContractorConfirm.vue';
import LayerMyLoanOnlineContractIntermediateAgree from '@/views/myLoan/LayerMyLoanOnlineContractIntermediateAgree.vue';
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
    LayerMyLoanOnlineContractSuccessionNotice001,
    LayerMyLoanOnlineContractSuccessionNotice002,
    LayerMyLoanOnlineContractIntermediateIdentification,
    LayerMyLoanOnlineContractIntermediateList,
    LayerMyLoanOnlineContractIntermediateContractorConfirm,
    LayerMyLoanOnlineContractIntermediateAgree,
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
          약관동의<br />BF_M04_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer018Open">
          대출신청정보 확인<br />BF_M04_l011
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer019Open">
          온라인 약정 완료<br />BF_M04_l012
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer020Open">
          온라인 약정 실패<br />BF_M04_l012
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer021Open">
          양도인 승계_본인확인<br />BF_M04_l013
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer022Open">
          양도인 승계_승계 호실 검색<br />BF_M04_l014
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer023Open">
          양도인 승계_승계 정보 확인<br />BF_M04_l015
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer024Open">
          양도인 승계_승계 신청 동의<br />BF_M04_l016
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer025Open">
          양도인 승계_신청 완료<br />BF_M04_l017
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer026Open">
          신용정보조회동의<br />BF_M04_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer027Open">
          양수인 승계_승계 호실 검색<br />BF_M04_l019
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer028Open">
          양수인 승계_계약자정보 입력<br />BF_M04_l020
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer029Open">
          양수인 승계_계좌 정보 입력<br />BF_M04_l021
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer030Open">
          계약정보 최종확인<br />BF_M04_l022
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer031Open">
          양수인 승계_신청 완료<br />BF_M04_l023
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer032Open">
          서류 요청<br />BF_M04_l025
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
    <LayerMyLoanOnlineContractSuccessionNotice001 ref="layer010" />
    <LayerMyLoanOnlineContractSuccessionNotice002 ref="layer011" />
    <LayerMyLoanOnlineContractIntermediateIdentification ref="layer014" />
    <LayerMyLoanOnlineContractIntermediateList ref="layer015" />
    <LayerMyLoanOnlineContractIntermediateContractorConfirm ref="layer016" />
    <LayerMyLoanOnlineContractIntermediateAgree ref="layer017" />
    <LayerMyLoanOnlineContractIntermediateConfirm ref="layer018" />
    <LayerMyLoanOnlineContractIntermediateComplete ref="layer019" />
    <LayerMyLoanOnlineContractIntermediateFail ref="layer020" />
    <LayerMyLoanOnlineContractIntermediateSuccessionIdentification
      ref="layer021"
    />
    <LayerMyLoanOnlineContractIntermediateSuccessionList ref="layer022" />
    <LayerMyLoanOnlineContractIntermediateSuccessionConfirm ref="layer023" />
    <LayerMyLoanOnlineContractIntermediateSuccessionAgree ref="layer024" />
    <LayerMyLoanOnlineContractIntermediateSuccessionComplete ref="layer025" />
    <LayerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree
      ref="layer026"
    />
    <LayerMyLoanOnlineContractIntermediateSuccessionAssigneeRoomList
      ref="layer027"
    />
    <LayerMyLoanOnlineContractIntermediateSuccessionAssigneeForm
      ref="layer028"
    />
    <LayerMyLoanOnlineContractIntermediateSuccessionAssigneeAccount
      ref="layer029"
    />
    <LayerMyLoanOnlineContractIntermediateSuccessionAssigneeConfirm
      ref="layer030"
    />
    <LayerMyLoanOnlineContractIntermediateSuccessionAssigneeComplete
      ref="layer031"
    />
    <LayerMyLoanOnlineContractIntermediateSuccessionDocumentList
      ref="layer032"
    />
  </PageContents>
</template>
