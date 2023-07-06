<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanPostMaturityRentalMethod from '@/views/myLoan/LayerMyLoanPostMaturityRentalMethod.vue';
import LayerMyLoanPostMaturityRentalExtension from '@/views/myLoan/LayerMyLoanPostMaturityRentalExtension.vue';
import LayerMyLoanPostMaturityRentalExtensionConfirm from '../myLoan/LayerMyLoanPostMaturityRentalExtensionConfirm.vue';
import LayerMyLoanPostMaturityRentalExtensionComplete from '../myLoan/LayerMyLoanPostMaturityRentalExtensionComplete.vue';
import LayerMyLoanPostMaturityRentalExtensionNotice from '../myLoan/LayerMyLoanPostMaturityRentalExtensionNotice.vue';
import LayerMyLoanPostMaturityRentalReturn from '../myLoan/LayerMyLoanPostMaturityRentalReturn.vue';
import LayerMyLoanPostMaturityRentalReturnForm from '@/views/myLoan/LayerMyLoanPostMaturityRentalReturnForm.vue';
import LayerMyLoanPostMaturityRentalReturnConfirm from '../myLoan/LayerMyLoanPostMaturityRentalReturnConfirm.vue';
import LayerMyLoanPostMaturityRentalReturnComplete from '../myLoan/LayerMyLoanPostMaturityRentalReturnComplete.vue';
import LayerMyLoanPostMaturityRentalReturnNotice001 from '../myLoan/LayerMyLoanPostMaturityRentalReturnNotice001.vue';
import LayerMyLoanPostMaturityRentalReturnNotice002 from '../myLoan/LayerMyLoanPostMaturityRentalReturnNotice002.vue';
import LayerMyLoanPostMaturityRentalPurchase from '../myLoan/LayerMyLoanPostMaturityRentalPurchase.vue';
import LayerMyLoanPostMaturityRentalPurchaseEstimatedCost from '../myLoan/LayerMyLoanPostMaturityRentalPurchaseEstimatedCost.vue';
import LayerMyLoanPostMaturityRentalPurchaseMethod from '../myLoan/LayerMyLoanPostMaturityRentalPurchaseMethod.vue';
import LayerMyLoanPostMaturityRentalPurchaseFormDirect from '@/views/myLoan/LayerMyLoanPostMaturityRentalPurchaseFormDirect.vue';
import LayerMyLoanPostMaturityRentalPurchaseFormAgent from '@/views/myLoan/LayerMyLoanPostMaturityRentalPurchaseFormAgent.vue';
import LayerMyLoanPostMaturityRentalPurchaseCheck from '@/views/myLoan/LayerMyLoanPostMaturityRentalPurchaseCheck.vue';
import LayerMyLoanPostMaturityRentalPurchaseComplete from '@/views/myLoan/LayerMyLoanPostMaturityRentalPurchaseComplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanPostMaturityRentalMethod,
    LayerMyLoanPostMaturityRentalExtension,
    LayerMyLoanPostMaturityRentalExtensionConfirm,
    LayerMyLoanPostMaturityRentalExtensionComplete,
    LayerMyLoanPostMaturityRentalExtensionNotice,
    LayerMyLoanPostMaturityRentalReturn,
    LayerMyLoanPostMaturityRentalReturnForm,
    LayerMyLoanPostMaturityRentalReturnConfirm,
    LayerMyLoanPostMaturityRentalReturnComplete,
    LayerMyLoanPostMaturityRentalReturnNotice001,
    LayerMyLoanPostMaturityRentalReturnNotice002,
    LayerMyLoanPostMaturityRentalPurchase,
    LayerMyLoanPostMaturityRentalPurchaseEstimatedCost,
    LayerMyLoanPostMaturityRentalPurchaseMethod,
    LayerMyLoanPostMaturityRentalPurchaseFormDirect,
    LayerMyLoanPostMaturityRentalPurchaseFormAgent,
    LayerMyLoanPostMaturityRentalPurchaseCheck,
    LayerMyLoanPostMaturityRentalPurchaseComplete,
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
          연장 조건 선택<br />My_M08_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          계약정보확인<br />My_M08_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          연장신청 완료<br />My_M08_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          (LMS) 만기후 연장 안내<br />My_M08_l009
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          반환 유의사항 확인<br />My_M08_l010
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          반환 정보 입력<br />My_M08_l011
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          반환 신청 확인<br />My_M08_b002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          반환 신청 완료<br />My_M08_l012
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          (LMS) 만기후 반환 안내(국산)<br />My_M08_l022
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          (LMS) 만기후 반환 안내(수입)<br />My_M08_l023
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          구매 유의사항 확인<br />My_M08_l015
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open">
          구매예상비용 확인<br />My_M08_l016
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer014Open">
          명의이전방법 선택 팝업<br />My_M08_b003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer015Open">
          구매 정보 입력(직접 이전)<br />My_M08_l017
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer016Open">
          구매 정보 입력(이전 대행)<br />My_M08_l018
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer017Open">
          구매 신청 확인<br />My_M08_b005
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer018Open">
          신청 완료<br />My_M08_l019
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanPostMaturityRentalMethod ref="layer001" />
    <LayerMyLoanPostMaturityRentalExtension ref="layer002" />
    <LayerMyLoanPostMaturityRentalExtensionConfirm ref="layer003" />
    <LayerMyLoanPostMaturityRentalExtensionComplete ref="layer004" />
    <LayerMyLoanPostMaturityRentalExtensionNotice ref="layer005" />
    <LayerMyLoanPostMaturityRentalReturn ref="layer006" />
    <LayerMyLoanPostMaturityRentalReturnForm ref="layer007" />
    <LayerMyLoanPostMaturityRentalReturnConfirm ref="layer008" />
    <LayerMyLoanPostMaturityRentalReturnComplete ref="layer009" />
    <LayerMyLoanPostMaturityRentalReturnNotice001 ref="layer010" />
    <LayerMyLoanPostMaturityRentalReturnNotice002 ref="layer011" />
    <LayerMyLoanPostMaturityRentalPurchase ref="layer012" />
    <LayerMyLoanPostMaturityRentalPurchaseEstimatedCost ref="layer013" />
    <LayerMyLoanPostMaturityRentalPurchaseMethod ref="layer014" />
    <LayerMyLoanPostMaturityRentalPurchaseFormDirect ref="layer015" />
    <LayerMyLoanPostMaturityRentalPurchaseFormAgent ref="layer016" />
    <LayerMyLoanPostMaturityRentalPurchaseCheck ref="layer017" />
    <LayerMyLoanPostMaturityRentalPurchaseComplete ref="layer018" />
  </PageContents>
</template>
