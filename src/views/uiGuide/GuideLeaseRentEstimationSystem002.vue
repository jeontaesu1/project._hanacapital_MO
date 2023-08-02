<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerLeaseRentEstimationSystemConformityAdequacy from '@/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemConformityAdequacy.vue';
import LayerLeaseRentEstimationSystemSetting from '@/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemSetting.vue';
import LayerLeaseRentEstimationSystemSpec from '@/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemSpec.vue';
import LayerLeaseRentEstimationSystemSave from '@/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemSave.vue';
import LayerLeaseRentEstimationSystemShare from '@/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemShare.vue';
import LayerLeaseRentEstimationSystemConfirm from '@/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemConfirm.vue';
import LayerLeaseRentEstimationSystemSend from '@/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemSend.vue';
import LayerLeaseRentEstimationSystemViewEstimationURL from '@/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemViewEstimationURL.vue';
import LayerLeaseRentEstimationSystemViewEstimation from '@/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemViewEstimation.vue';
import LayerLeaseRentEstimationSystemCreditCheckRequest from '@/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemCreditCheckRequest.vue';
import LayerLeaseRentEstimationSystemSearchStore from '@/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemSearchStore.vue';
import LayerLeaseRentEstimationSystemSearchSalesmen from '@/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemSearchSalesmen.vue';
import LR_M03_l001 from '@/views/LeaseRentEstimationSystem/LR_M03_l001.vue';
import LR_M05_b007 from '@/views/LeaseRentEstimationSystem/LR_M05_b007.vue';
import LayerLeaseRentEstimationSystemStart from '@/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemStart.vue';
import LayerLeaseRentEstimationViewPriceList from '@/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationViewPriceList.vue';
import LayerLeaseRentEstimationViewCatalog from '@/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationViewCatalog.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerLeaseRentEstimationSystemConformityAdequacy,
    LayerLeaseRentEstimationSystemSetting,
    LayerLeaseRentEstimationSystemSpec,
    LayerLeaseRentEstimationSystemSave,
    LayerLeaseRentEstimationSystemShare,
    LayerLeaseRentEstimationSystemConfirm,
    LayerLeaseRentEstimationSystemSend,
    LayerLeaseRentEstimationSystemViewEstimationURL,
    LayerLeaseRentEstimationSystemViewEstimation,
    LayerLeaseRentEstimationSystemCreditCheckRequest,
    LayerLeaseRentEstimationSystemSearchStore,
    LayerLeaseRentEstimationSystemSearchSalesmen,
    LR_M03_l001,
    LR_M05_b007,
    LayerLeaseRentEstimationSystemStart,
    LayerLeaseRentEstimationViewPriceList,
    LayerLeaseRentEstimationViewCatalog,
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
        <BasicButton @click="layer001Open"
          >적합성·적정성 확인서<br />LR_M00_l016</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >견적 기본설정 팝업<br />LR_M00_l004</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >제원 보기 팝업<br />LR_M00_l005</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open"
          >견적 저장 팝업<br />LR_M00_l006</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open"
          >공유·다운 팝업<br />LR_M00_l007</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open"
          >견적 확정 팝업<br />LR_M00_l009</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open"
          >견적서 발송 팝업<br />LR_M00_l001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open"
          >견적서 보기(URL)<br />LR_M00_l003</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open"
          >견적서 보기<br />LR_M00_l008</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open"
          >신용조회 요청 팝업<br />LR_M00_l010</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open"
          >판매점 조회 팝업<br />LR_M00_l012</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open"
          >판매사원 조회 팝업<br />LR_M00_l013</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open"
          >모바일 견적 손님제공 절차안내 팝업<br />LR_M03_l001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer014Open"
          >모바일 견적 손님제공 절차안내 차단 팝업<br />LR_M05_b007</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer015Open"
          >견적서 진행사항 안내<br />LR_M00_l002</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer016Open"
          >가격표 보기 팝업<br />LR_M00_l014</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer017Open"
          >카탈로그 보기 팝업<br />LR_M00_l017</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerLeaseRentEstimationSystemConformityAdequacy ref="layer001" />
    <LayerLeaseRentEstimationSystemSetting ref="layer002" />
    <LayerLeaseRentEstimationSystemSpec ref="layer003" />
    <LayerLeaseRentEstimationSystemSave ref="layer004" />
    <LayerLeaseRentEstimationSystemShare ref="layer005" />
    <LayerLeaseRentEstimationSystemConfirm ref="layer006" />
    <LayerLeaseRentEstimationSystemSend ref="layer007" />
    <LayerLeaseRentEstimationSystemViewEstimationURL ref="layer008" />
    <LayerLeaseRentEstimationSystemViewEstimation ref="layer009" />
    <LayerLeaseRentEstimationSystemCreditCheckRequest ref="layer010" />
    <LayerLeaseRentEstimationSystemSearchStore ref="layer011" />
    <LayerLeaseRentEstimationSystemSearchSalesmen ref="layer012" />
    <LR_M03_l001 ref="layer013" />
    <LR_M05_b007 ref="layer014" />
    <LayerLeaseRentEstimationSystemStart ref="layer015" />
    <LayerLeaseRentEstimationViewPriceList ref="layer016" />
    <LayerLeaseRentEstimationViewCatalog ref="layer017" />
  </PageContents>
</template>
