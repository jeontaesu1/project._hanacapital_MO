<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerPersonalLoanStockExtensionAgree from '@/views/personalLoan/LayerPersonalLoanStockExtensionAgree.vue';
import LayerPersonalLoanStockExtensionList from '@/views/personalLoan/LayerPersonalLoanStockExtensionList.vue';
import LayerPersonalLoanStockExtensionNontarget from '@/views/personalLoan/LayerPersonalLoanStockExtensionNontarget.vue';
import LayerPersonalLoanStockExtensionEmpty from '@/views/personalLoan/LayerPersonalLoanStockExtensionEmpty.vue';
import LayerPersonalLoanStockExtensionConfirm from '@/views/personalLoan/LayerPersonalLoanStockExtensionConfirm.vue';
import LayerPersonalLoanStockExtensionComplete from '@/views/personalLoan/LayerPersonalLoanStockExtensionComplete.vue';
import LayerPersonalLoanStockExtensionFail from '@/views/personalLoan/LayerPersonalLoanStockExtensionFail.vue';
import LayerPersonalLoanStockEarlyList from '@/views/personalLoan/LayerPersonalLoanStockEarlyList.vue';
import LayerPersonalLoanStockEarlyEmpty from '@/views/personalLoan/LayerPersonalLoanStockEarlyEmpty.vue';
import LayerPersonalLoanStockEarlyNotice from '@/views/personalLoan/LayerPersonalLoanStockEarlyNotice.vue';
import LayerPersonalLoanStockEarlyConfirm from '@/views/personalLoan/LayerPersonalLoanStockEarlyConfirm.vue';
import LayerPersonalLoanStockEarlyError from '@/views/personalLoan/LayerPersonalLoanStockEarlyError.vue';
import LayerPersonalLoanStockEarlyAlert from '@/views/personalLoan/LayerPersonalLoanStockEarlyAlert.vue';
import LayerPersonalLoanStockEarlyComplete from '@/views/personalLoan/LayerPersonalLoanStockEarlyComplete.vue';
import LayerPersonalLoanStockEarlyFail from '@/views/personalLoan/LayerPersonalLoanStockEarlyFail.vue';
import LayerPersonalLoanStockEarlyForm from '@/views/personalLoan/LayerPersonalLoanStockEarlyForm.vue';
import PF_M07_l013_List from '@/views/personalLoan/PF_M07_l013_List.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerPersonalLoanStockExtensionAgree,
    LayerPersonalLoanStockExtensionList,
    LayerPersonalLoanStockExtensionNontarget,
    LayerPersonalLoanStockExtensionEmpty,
    LayerPersonalLoanStockExtensionConfirm,
    LayerPersonalLoanStockExtensionComplete,
    LayerPersonalLoanStockExtensionFail,
    LayerPersonalLoanStockEarlyList,
    LayerPersonalLoanStockEarlyEmpty,
    LayerPersonalLoanStockEarlyNotice,
    LayerPersonalLoanStockEarlyConfirm,
    LayerPersonalLoanStockEarlyError,
    LayerPersonalLoanStockEarlyAlert,
    LayerPersonalLoanStockEarlyComplete,
    LayerPersonalLoanStockEarlyFail,
    LayerPersonalLoanStockEarlyForm,
    PF_M07_l013_List,
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
          약관동의<br />PF_M07_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          연장신청 계약선택<br />PF_M07_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          만기연장 불가대상 - 잔여회차 확인<br />PF_M07_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          만기연장 불가대상 - 연장가능 계약 없음<br />PF_M07_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          연장신청 상품 만기현황 확인<br />PF_M07_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          연장 신청 완료<br />PF_M07_l005
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          연장 신청 실패<br />PF_M07_l005
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          중도상환신청 계약선택<br />PF_M07_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          중도상환 불가대상<br />PF_M07_l008
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          중도상환신청 안내 및 유의사항<br />PF_M07_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer016Open">
          중도상환 조건 입력<br />PF_M07_l009
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          중도상환금액 조회<br />PF_M07_l010
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          중도상환 조회 불가<br />PF_M07_l011
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open">
          중도상환 신청확인<br />PF_M07_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer014Open">
          상환 신청 완료<br />PF_M07_l012
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer015Open">
          상환 신청 실패<br />PF_M07_l012
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer017Open">
          연창신청 계약선택<br />PF_M07_l013
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerPersonalLoanStockExtensionAgree ref="layer001" />
    <LayerPersonalLoanStockExtensionList ref="layer002" />
    <LayerPersonalLoanStockExtensionNontarget ref="layer003" />
    <LayerPersonalLoanStockExtensionEmpty ref="layer004" />
    <LayerPersonalLoanStockExtensionConfirm ref="layer005" />
    <LayerPersonalLoanStockExtensionComplete ref="layer006" />
    <LayerPersonalLoanStockExtensionFail ref="layer007" />
    <LayerPersonalLoanStockEarlyList ref="layer008" />
    <LayerPersonalLoanStockEarlyEmpty ref="layer009" />
    <LayerPersonalLoanStockEarlyNotice ref="layer010" />
    <LayerPersonalLoanStockEarlyForm ref="layer016" />
    <LayerPersonalLoanStockEarlyConfirm ref="layer011" />
    <LayerPersonalLoanStockEarlyError ref="layer012" />
    <LayerPersonalLoanStockEarlyAlert ref="layer013" />
    <LayerPersonalLoanStockEarlyComplete ref="layer014" />
    <LayerPersonalLoanStockEarlyFail ref="layer015" />
    <LayerPersonalLoanStockEarlyFail ref="layer016" />
    <PF_M07_l013_List ref="layer017" />
  </PageContents>
</template>
