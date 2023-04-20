<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerAutoSuccessionNotice from '@/views/auto/LayerAutoSuccessionNotice.vue';
import LayerAutoSuccessionIdentificationMethodSelect from '@/views/auto/LayerAutoSuccessionIdentificationMethodSelect.vue';
import LayerAutoSuccessionList from '@/views/auto/LayerAutoSuccessionList.vue';
import LayerAutoSuccessionAgree from '@/views/auto/LayerAutoSuccessionAgree.vue';
import LayerAutoSuccessionURLSend from '@/views/auto/LayerAutoSuccessionURLSend.vue';
import LayerAutoSuccessionURLSendComplete from '@/views/auto/LayerAutoSuccessionURLSendComplete.vue';
import LayerAutoSuccessionAssigneeSearch from '@/views/auto/LayerAutoSuccessionAssigneeSearch.vue';
import LayerAutoSuccessionAssigneeLeaseConfirm from '@/views/auto/LayerAutoSuccessionAssigneeLeaseConfirm.vue';
import LayerAutoSuccessionAssigneeLeaseDetail from '@/views/auto/LayerAutoSuccessionAssigneeLeaseDetail.vue';
import LayerAutoSuccessionAssigneeRentalConfirm from '@/views/auto/LayerAutoSuccessionAssigneeRentalConfirm.vue';
import LayerAutoSuccessionAssigneeRentalDetail from '@/views/auto/LayerAutoSuccessionAssigneeRentalDetail.vue';
import LayerAutoSuccessionAssigneeForm from '@/views/auto/LayerAutoSuccessionAssigneeForm.vue';
import LayerAutoSuccessionAssigneeAgree from '@/views/auto/LayerAutoSuccessionAssigneeAgree.vue';
import LayerAutoSuccessionAssigneeWait from '@/views/auto/LayerAutoSuccessionAssigneeWait.vue';
import LayerAutoSuccessionAttorneyIdentification from '@/views/auto/LayerAutoSuccessionAttorneyIdentification.vue';
import LayerAutoSuccessionAssigneeIdentification from '@/views/auto/LayerAutoSuccessionAssigneeIdentification.vue';
import LayerAutoSuccessionAttorneyComplete from '@/views/auto/LayerAutoSuccessionAttorneyComplete.vue';
import LayerAutoSuccessionAssigneeAddDocumen from '@/views/auto/LayerAutoSuccessionAssigneeAddDocumen.vue';
import LayerAutoSuccessionAttorneyConfirm from '@/views/auto/LayerAutoSuccessionAttorneyConfirm.vue';
import LayerAutoSuccessionAssigneeComplete from '@/views/auto/LayerAutoSuccessionAssigneeComplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerAutoSuccessionNotice,
    LayerAutoSuccessionIdentificationMethodSelect,
    LayerAutoSuccessionList,
    LayerAutoSuccessionAgree,
    LayerAutoSuccessionURLSend,
    LayerAutoSuccessionURLSendComplete,
    LayerAutoSuccessionAssigneeSearch,
    LayerAutoSuccessionAssigneeLeaseConfirm,
    LayerAutoSuccessionAssigneeLeaseDetail,
    LayerAutoSuccessionAssigneeRentalConfirm,
    LayerAutoSuccessionAssigneeRentalDetail,
    LayerAutoSuccessionAssigneeForm,
    LayerAutoSuccessionAssigneeAgree,
    LayerAutoSuccessionAssigneeWait,
    LayerAutoSuccessionAttorneyIdentification,
    LayerAutoSuccessionAssigneeIdentification,
    LayerAutoSuccessionAttorneyComplete,
    LayerAutoSuccessionAssigneeAddDocumen,
    LayerAutoSuccessionAttorneyConfirm,
    LayerAutoSuccessionAssigneeComplete,
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
          >승계유의사항 확인<br />AF_M07_l001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >본인인증<br />AF_M07_l001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >승계 차량 선택<br />AF_M07_l002</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open"
          >승계 정보 제공 동의<br />AF_M07_b001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open"
          >승계 신청 URL 발송<br />AF_M07_b002</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open"
          >승계 신청 URL 발송 완료<br />AF_M07_l004</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open"
          >양수인 신청<br />AF_M07_l005</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open"
          >리스 승계 상세정보<br />AF_M07_l006</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open"
          >리스상세조건<br />AF_M07_b003</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open"
          >렌트 승계 상세정보<br />AF_M07_l007</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open"
          >렌트상세조건<br />AF_M07_b004</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open"
          >양수인 정보입력<br />AF_M07_l008 / AF_M07_l009
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open"
          >신용정보조회동의<br />AF_M07_l010
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer014Open"
          >위임동의 요청 완료<br />AF_M07_l011</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer015Open"
          >양수인/신청인 본인확인<br />AF_M07_l019</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer016Open"
          >양수인/신청인 본인확인<br />AF_M07_l015</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer017Open"
          >위임동의 완료<br />AF_M07_l014</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer018Open"
          >심사서류 등록<br />AF_M07_l016</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer019Open"
          >위임장 동의<br />AF_M07_l013</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer020Open"
          >양수인 신청완료<br />AF_M07_l018</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerAutoSuccessionNotice ref="layer001" />
    <LayerAutoSuccessionIdentificationMethodSelect ref="layer002" />
    <LayerAutoSuccessionList ref="layer003" />
    <LayerAutoSuccessionAgree ref="layer004" />
    <LayerAutoSuccessionURLSend ref="layer005" />
    <LayerAutoSuccessionURLSendComplete ref="layer006" />
    <LayerAutoSuccessionAssigneeSearch ref="layer007" />
    <LayerAutoSuccessionAssigneeLeaseConfirm ref="layer008" />
    <LayerAutoSuccessionAssigneeLeaseDetail ref="layer009" />
    <LayerAutoSuccessionAssigneeRentalConfirm ref="layer010" />
    <LayerAutoSuccessionAssigneeRentalDetail ref="layer011" />
    <LayerAutoSuccessionAssigneeForm ref="layer012" />
    <LayerAutoSuccessionAssigneeAgree ref="layer013" />
    <LayerAutoSuccessionAssigneeWait ref="layer014" />
    <LayerAutoSuccessionAttorneyIdentification ref="layer015" />
    <LayerAutoSuccessionAssigneeIdentification ref="layer016" />
    <LayerAutoSuccessionAttorneyComplete ref="layer017" />
    <LayerAutoSuccessionAssigneeAddDocumen ref="layer018" />
    <LayerAutoSuccessionAttorneyConfirm ref="layer019" />
    <LayerAutoSuccessionAssigneeComplete ref="layer020" />
  </PageContents>
</template>
