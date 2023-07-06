<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanPostMaturityLeaseMethod from '@/views/myLoan/LayerMyLoanPostMaturityLeaseMethod.vue';
import LayerMyLoanPostMaturityLeaseExtension from '@/views/myLoan/LayerMyLoanPostMaturityLeaseExtension.vue';
import LayerMyLoanPostMaturityLeaseExtensionConfirm from '@/views/myLoan/LayerMyLoanPostMaturityLeaseExtensionConfirm.vue';
import LayerMyLoanPostMaturityLeaseReturnComplete from '@/views/myLoan/LayerMyLoanPostMaturityLeaseReturnComplete.vue';
import LayerMyLoanPostMaturityLeaseReturnNotice001 from '@/views/myLoan/LayerMyLoanPostMaturityLeaseReturnNotice001.vue';
import LayerMyLoanPostMaturityLeaseReturnNotice002 from '@/views/myLoan/LayerMyLoanPostMaturityLeaseReturnNotice002.vue';
import LayerMyLoanPostMaturityLeasePurchaseUser from '@/views/myLoan/LayerMyLoanPostMaturityLeasePurchaseUser.vue';
import LayerMyLoanPostMaturityLeasePurchaseUserConfirm from '@/views/myLoan/LayerMyLoanPostMaturityLeasePurchaseUserConfirm.vue';
import LayerMyLoanPostMaturityLeasePurchaseUserComplete from '@/views/myLoan/LayerMyLoanPostMaturityLeasePurchaseUserComplete.vue';
import LayerMyLoanPostMaturityLeasePurchaseCompany from '@/views/myLoan/LayerMyLoanPostMaturityLeasePurchaseCompany.vue';
import LayerMyLoanPostMaturityLeasePurchaseCompanyEstimatedCost from '@/views/myLoan/LayerMyLoanPostMaturityLeasePurchaseCompanyEstimatedCost.vue';
import LayerMyLoanPostMaturityLeasePurchaseCompanyMethod from '@/views/myLoan/LayerMyLoanPostMaturityLeasePurchaseCompanyMethod.vue';
import LayerMyLoanPostMaturityLeasePurchaseCompanyFormDirect from '@/views/myLoan/LayerMyLoanPostMaturityLeasePurchaseCompanyFormDirect.vue';
import LayerMyLoanPostMaturityLeasePurchaseCompanyFormAgent from '@/views/myLoan/LayerMyLoanPostMaturityLeasePurchaseCompanyFormAgent.vue';
import LayerMyLoanPostMaturityLeasePurchaseCompanyComplete from '@/views/myLoan/LayerMyLoanPostMaturityLeasePurchaseCompanyComplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanPostMaturityLeaseMethod,
    LayerMyLoanPostMaturityLeaseExtension,
    LayerMyLoanPostMaturityLeaseExtensionConfirm,
    LayerMyLoanPostMaturityLeaseReturnComplete,
    LayerMyLoanPostMaturityLeaseReturnNotice001,
    LayerMyLoanPostMaturityLeaseReturnNotice002,
    LayerMyLoanPostMaturityLeasePurchaseUser,
    LayerMyLoanPostMaturityLeasePurchaseUserConfirm,
    LayerMyLoanPostMaturityLeasePurchaseUserComplete,
    LayerMyLoanPostMaturityLeasePurchaseCompany,
    LayerMyLoanPostMaturityLeasePurchaseCompanyEstimatedCost,
    LayerMyLoanPostMaturityLeasePurchaseCompanyMethod,
    LayerMyLoanPostMaturityLeasePurchaseCompanyFormDirect,
    LayerMyLoanPostMaturityLeasePurchaseCompanyFormAgent,
    LayerMyLoanPostMaturityLeasePurchaseCompanyComplete,
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
          만기후처리 변경 방법선택<br />My_M08_b006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          재리스 조건 선택<br />My_M08_l020
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          계약정보확인<br />My_M08_l021
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          반환 신청 완료<br />My_M08_l012
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          (LMS) 만기후 반환 안내(국산)<br />My_M08_l022
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          (LMS) 만기후 반환 안내(수입)<br />My_M08_l023
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          구매 유의사항 확인<br />My_M08_l024
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          구매 정보 확인<br />My_M08_l025
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          신청 완료<br />My_M08_l026
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          구매 유의사항 확인<br />My_M08_l027
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          구매예상비용 확인<br />My_M08_l028
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          명의이전방법 선택 팝업<br />My_M08_b003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open">
          구매 정보 입력(직접 이전)<br />My_M08_l029
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer014Open">
          구매 정보 입력(이전 대행)<br />My_M08_l030
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer015Open">
          신청 완료<br />My_M08_l031
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanPostMaturityLeaseMethod ref="layer001" />
    <LayerMyLoanPostMaturityLeaseExtension ref="layer002" />
    <LayerMyLoanPostMaturityLeaseExtensionConfirm ref="layer003" />
    <LayerMyLoanPostMaturityLeaseReturnComplete ref="layer004" />
    <LayerMyLoanPostMaturityLeaseReturnNotice001 ref="layer005" />
    <LayerMyLoanPostMaturityLeaseReturnNotice002 ref="layer006" />
    <LayerMyLoanPostMaturityLeasePurchaseUser ref="layer007" />
    <LayerMyLoanPostMaturityLeasePurchaseUserConfirm ref="layer008" />
    <LayerMyLoanPostMaturityLeasePurchaseUserComplete ref="layer009" />
    <LayerMyLoanPostMaturityLeasePurchaseCompany ref="layer010" />
    <LayerMyLoanPostMaturityLeasePurchaseCompanyEstimatedCost ref="layer011" />
    <LayerMyLoanPostMaturityLeasePurchaseCompanyMethod ref="layer012" />
    <LayerMyLoanPostMaturityLeasePurchaseCompanyFormDirect ref="layer013" />
    <LayerMyLoanPostMaturityLeasePurchaseCompanyFormAgent ref="layer014" />
    <LayerMyLoanPostMaturityLeasePurchaseCompanyComplete ref="layer015" />
  </PageContents>
</template>
