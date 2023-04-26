<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanPostMaturityRentalMethod from '@/views/myLoan/LayerMyLoanPostMaturityRentalMethod.vue';
import LayerMyLoanPostMaturityRentalExtensionConfirm from '../myLoan/LayerMyLoanPostMaturityRentalExtensionConfirm.vue';
import LayerMyLoanPostMaturityRentalExtensionComplete from '../myLoan/LayerMyLoanPostMaturityRentalExtensionComplete.vue';
import LayerMyLoanPostMaturityExtensionRequest from '../myLoan/LayerMyLoanPostMaturityExtensionRequest.vue';
import LayerMyLoanPostMaturityExtensionRequestAgree from '../myLoan/LayerMyLoanPostMaturityExtensionRequestAgree.vue';
import LayerMyLoanPostMaturityExtensionRequestComplete002 from '../myLoan/LayerMyLoanPostMaturityExtensionRequestComplete002.vue';
import LayerMyLoanPostMaturityRentalExtensionNotice from '../myLoan/LayerMyLoanPostMaturityRentalExtensionNotice.vue';
import LayerMyLoanPostMaturityRentalReturn from '../myLoan/LayerMyLoanPostMaturityRentalReturn.vue';
import LayerMyLoanPostMaturityRentalReturnConfirm from '../myLoan/LayerMyLoanPostMaturityRentalReturnConfirm.vue';
import LayerMyLoanPostMaturityRentalReturnComplete from '../myLoan/LayerMyLoanPostMaturityRentalReturnComplete.vue';
import LayerMyLoanPostMaturityRentalReturnNotice001 from '../myLoan/LayerMyLoanPostMaturityRentalReturnNotice001.vue';
import LayerMyLoanPostMaturityRentalReturnNotice002 from '../myLoan/LayerMyLoanPostMaturityRentalReturnNotice002.vue';
import LayerMyLoanPostMaturityRentalPurchase from '../myLoan/LayerMyLoanPostMaturityRentalPurchase.vue';
import LayerMyLoanPostMaturityRentalPurchaseEstimatedCost from '../myLoan/LayerMyLoanPostMaturityRentalPurchaseEstimatedCost.vue';
import LayerMyLoanPostMaturityRentalPurchaseMethod from '../myLoan/LayerMyLoanPostMaturityRentalPurchaseMethod.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanPostMaturityRentalMethod,
    LayerMyLoanPostMaturityRentalExtensionConfirm,
    LayerMyLoanPostMaturityRentalExtensionComplete,
    LayerMyLoanPostMaturityExtensionRequest,
    LayerMyLoanPostMaturityExtensionRequestAgree,
    LayerMyLoanPostMaturityExtensionRequestComplete002,
    LayerMyLoanPostMaturityRentalExtensionNotice,
    LayerMyLoanPostMaturityRentalReturn,
    LayerMyLoanPostMaturityRentalReturnConfirm,
    LayerMyLoanPostMaturityRentalReturnComplete,
    LayerMyLoanPostMaturityRentalReturnNotice001,
    LayerMyLoanPostMaturityRentalReturnNotice002,
    LayerMyLoanPostMaturityRentalPurchase,
    LayerMyLoanPostMaturityRentalPurchaseEstimatedCost,
    LayerMyLoanPostMaturityRentalPurchaseMethod,
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
          만기후처리 변경 방법선택 팝업<br />My_M08_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          계약정보확인<br />My_M08_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          연장신청 완료<br />My_M08_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          계약자 정보 입력(심사요청)<br />My_M08_l005
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          약관동의<br />My_M08_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          등록 완료(심사요청완료)_렌트<br />My_M08_l008
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          (LMS) 만기후 연장 안내<br />My_M08_l009
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          반환 유의사항 확인<br />My_M08_l010
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          반환 신청 확인<br />My_M08_b002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          신청 완료<br />My_M08_l012
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          (LMS) 만기후 반환 안내(국산)<br />My_M08_l013
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          (LMS) 만기후 반환 안내(수입)<br />My_M08_l014
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open">
          구매 유의사항 확인<br />My_M08_l015
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer014Open">
          구매예상비용 확인<br />My_M08_l016
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer015Open">
          명의이전방법 선택 팝업<br />My_M08_b003
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanPostMaturityRentalMethod ref="layer001" />
    <LayerMyLoanPostMaturityRentalExtensionConfirm ref="layer002" />
    <LayerMyLoanPostMaturityRentalExtensionComplete ref="layer003" />
    <LayerMyLoanPostMaturityExtensionRequest ref="layer004" />
    <LayerMyLoanPostMaturityExtensionRequestAgree ref="layer005" />
    <LayerMyLoanPostMaturityExtensionRequestComplete002 ref="layer006" />
    <LayerMyLoanPostMaturityRentalExtensionNotice ref="layer007" />
    <LayerMyLoanPostMaturityRentalReturn ref="layer008" />
    <LayerMyLoanPostMaturityRentalReturnConfirm ref="layer009" />
    <LayerMyLoanPostMaturityRentalReturnComplete ref="layer010" />
    <LayerMyLoanPostMaturityRentalReturnNotice001 ref="layer011" />
    <LayerMyLoanPostMaturityRentalReturnNotice002 ref="layer012" />
    <LayerMyLoanPostMaturityRentalPurchase ref="layer013" />
    <LayerMyLoanPostMaturityRentalPurchaseEstimatedCost ref="layer014" />
    <LayerMyLoanPostMaturityRentalPurchaseMethod ref="layer015" />
  </PageContents>
</template>
