<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanPostMaturityLeaseMethod from '@/views/myLoan/LayerMyLoanPostMaturityLeaseMethod.vue';
import LayerMyLoanPostMaturityLeaseExtension from '@/views/myLoan/LayerMyLoanPostMaturityLeaseExtension.vue';
import LayerMyLoanPostMaturityLeaseExtensionConfirm from '@/views/myLoan/LayerMyLoanPostMaturityLeaseExtensionConfirm.vue';
import LayerMyLoanPostMaturityLeaseReturnNotice001 from '@/views/myLoan/LayerMyLoanPostMaturityLeaseReturnNotice001.vue';
import LayerMyLoanPostMaturityLeaseReturnNotice002 from '@/views/myLoan/LayerMyLoanPostMaturityLeaseReturnNotice002.vue';
import LayerMyLoanPostMaturityLeasePurchaseUser from '@/views/myLoan/LayerMyLoanPostMaturityLeasePurchaseUser.vue';
import LayerMyLoanPostMaturityLeasePurchaseUserConfirm from '@/views/myLoan/LayerMyLoanPostMaturityLeasePurchaseUserConfirm.vue';
import LayerMyLoanPostMaturityLeasePurchaseUserComplete from '@/views/myLoan/LayerMyLoanPostMaturityLeasePurchaseUserComplete.vue';
import LayerMyLoanPostMaturityLeasePurchaseCompany from '@/views/myLoan/LayerMyLoanPostMaturityLeasePurchaseCompany.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanPostMaturityLeaseMethod,
    LayerMyLoanPostMaturityLeaseExtension,
    LayerMyLoanPostMaturityLeaseExtensionConfirm,
    LayerMyLoanPostMaturityLeaseReturnNotice001,
    LayerMyLoanPostMaturityLeaseReturnNotice002,
    LayerMyLoanPostMaturityLeasePurchaseUser,
    LayerMyLoanPostMaturityLeasePurchaseUserConfirm,
    LayerMyLoanPostMaturityLeasePurchaseUserComplete,
    LayerMyLoanPostMaturityLeasePurchaseCompany,
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
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
      layer007Open,
      layer008Open,
      layer009Open,
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
          (LMS) 만기후 반환 안내(국산)<br />My_M08_l013
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          (LMS) 만기후 반환 안내(수입)<br />My_M08_l014
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          구매 유의사항 확인<br />My_M08_l024
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          구매 정보 확인<br />My_M08_l025
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          신청 완료<br />My_M08_l026
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          구매 유의사항 확인<br />My_M08_l027
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanPostMaturityLeaseMethod ref="layer001" />
    <LayerMyLoanPostMaturityLeaseExtension ref="layer002" />
    <LayerMyLoanPostMaturityLeaseExtensionConfirm ref="layer003" />
    <LayerMyLoanPostMaturityLeaseReturnNotice001 ref="layer004" />
    <LayerMyLoanPostMaturityLeaseReturnNotice002 ref="layer005" />
    <LayerMyLoanPostMaturityLeasePurchaseUser ref="layer006" />
    <LayerMyLoanPostMaturityLeasePurchaseUserConfirm ref="layer007" />
    <LayerMyLoanPostMaturityLeasePurchaseUserComplete ref="layer008" />
    <LayerMyLoanPostMaturityLeasePurchaseCompany ref="layer009" />
  </PageContents>
</template>
