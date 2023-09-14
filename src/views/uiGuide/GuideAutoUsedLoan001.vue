<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerAutoUsedLoanSearchAlert from '@/views/auto/LayerAutoUsedLoanSearchAlert.vue';
import LayerAutoUsedLoanSearchNumber from '@/views/auto/LayerAutoUsedLoanSearchNumber.vue';
import LayerAutoUsedLoanSearchConfirm from '@/views/auto/LayerAutoUsedLoanSearchConfirm.vue';
import LayerAutoUsedLoanAccidentHistory from '@/views/auto/LayerAutoUsedLoanAccidentHistory.vue';
import LayerAutoUsedLoanSearchModel from '@/views/auto/LayerAutoUsedLoanSearchModel.vue';
import LayerAutoUsedLoanForm from '@/views/auto/LayerAutoUsedLoanForm.vue';
import LayerAutoUsedLoanAgree from '@/views/auto/LayerAutoUsedLoanAgree.vue';
import LayerAutoUsedLoanComplete from '@/views/auto/LayerAutoUsedLoanComplete.vue';
import LayerAutoUsedLoanFailReject from '@/views/auto/LayerAutoUsedLoanFailReject.vue';
import LayerAutoUsedLoanInquiry from '@/views/auto/LayerAutoUsedLoanInquiry.vue';
import LayerAutoUsedLoanConfirm from '@/views/auto/LayerAutoUsedLoanConfirm.vue';
import LayerAutoUsedLoanInquiryComplete from '@/views/auto/LayerAutoUsedLoanInquiryComplete.vue';
import LayerAutoUsedLoanContract from '@/views/auto/LayerAutoUsedLoanContract.vue';
import LayerAutoUsedLoanContractAlert from '@/views/auto/LayerAutoUsedLoanContractAlert.vue';
import LayerAutoUsedLoanContractConfirm from '@/views/auto/LayerAutoUsedLoanContractConfirm.vue';
import LayerAutoUsedLoanLimitInquiry from '@/views/auto/LayerAutoUsedLoanLimitInquiry.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerAutoUsedLoanSearchAlert,
    LayerAutoUsedLoanSearchNumber,
    LayerAutoUsedLoanSearchConfirm,
    LayerAutoUsedLoanAccidentHistory,
    LayerAutoUsedLoanSearchModel,
    LayerAutoUsedLoanForm,
    LayerAutoUsedLoanAgree,
    LayerAutoUsedLoanComplete,
    LayerAutoUsedLoanFailReject,
    LayerAutoUsedLoanInquiry,
    LayerAutoUsedLoanConfirm,
    LayerAutoUsedLoanInquiryComplete,
    LayerAutoUsedLoanContract,
    LayerAutoUsedLoanContractAlert,
    LayerAutoUsedLoanContractConfirm,
    LayerAutoUsedLoanLimitInquiry,
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
    const layer013 = ref(null);
    const layer014 = ref(null);
    const layer015 = ref(null);
    const layer016 = ref(null);
    const layer017 = ref(null);

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
      layer013,
      layer014,
      layer015,
      layer016,
      layer017,
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
      layer013Open,
      layer014Open,
      layer015Open,
      layer016Open,
      layer017Open,
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
        <BasicButton @click="layer001Open"
          >차량검색 팝업<br />AF_M06_b001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >차량번호 조회<br />AF_M06_l001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >구매차량확인<br />AF_M06_b002</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open"
          >사고이력조회<br />AF_M06_l003</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open"
          >중고차 검색<br />AF_M06_l002</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open"
          >신청정보 입력<br />AF_M06_l005</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open"
          >약관동의<br />AF_M06_l006</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open"
          >한도조회 결과 - 승인<br />AF_M06_l007</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open"
          >한도조회 결과 - 진행불가<br />AF_M06_l007</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open"
          >한도조회 결과 - 문의필요<br />AF_M06_l007</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open"
          >선택차량확인<br />AF_M06_l011</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open"
          >신청 완료<br />AF_M06_l010</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer014Open"
          >약정신청서 작성<br />AF_M06_l008</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer015Open"
          >매매계약서 금액, 구입비용 확인<br />AF_M06_b005</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer016Open"
          >자동차등록증 매매계약서 확인<br />AF_M06_b006</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer017Open"
          >한도조회 정보 입력<br />AF_M06_l012</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerAutoUsedLoanSearchAlert ref="layer001" />
    <LayerAutoUsedLoanSearchNumber ref="layer002" />
    <LayerAutoUsedLoanSearchConfirm ref="layer003" />
    <LayerAutoUsedLoanAccidentHistory ref="layer004" />
    <LayerAutoUsedLoanSearchModel ref="layer005" />
    <LayerAutoUsedLoanForm ref="layer006" />
    <LayerAutoUsedLoanAgree ref="layer007" />
    <LayerAutoUsedLoanComplete ref="layer008" />
    <LayerAutoUsedLoanFailReject ref="layer009" />
    <LayerAutoUsedLoanInquiry ref="layer010" />
    <LayerAutoUsedLoanConfirm ref="layer011" />
    <LayerAutoUsedLoanInquiryComplete ref="layer013" />
    <LayerAutoUsedLoanContract ref="layer014" />
    <LayerAutoUsedLoanContractAlert ref="layer015" />
    <LayerAutoUsedLoanContractConfirm ref="layer016" />
    <LayerAutoUsedLoanLimitInquiry ref="layer017" />
  </PageContents>
</template>
