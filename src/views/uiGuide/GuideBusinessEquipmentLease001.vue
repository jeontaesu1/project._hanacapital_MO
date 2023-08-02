<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerBusinessEquipmentLeaseEstimate from '@/views/business/LayerBusinessEquipmentLeaseEstimate.vue';
import LayerBusinessEquipmentLeaseEstimateAgree from '@/views/business/LayerBusinessEquipmentLeaseEstimateAgree.vue';
import LayerBusinessEquipmentLeaseEstimateConfirm from '@/views/business/LayerBusinessEquipmentLeaseEstimateConfirm.vue';
import LayerBusinessEquipmentLeaseEstimateComplete from '@/views/business/LayerBusinessEquipmentLeaseEstimateComplete.vue';
import BF_M05_l014 from '@/views/business/BF_M05_l014.vue';
import BF_M05_l015 from '@/views/business/BF_M05_l015.vue';
import BF_M05_l016 from '@/views/business/BF_M05_l016.vue';
import BF_M05_l017 from '@/views/business/BF_M05_l017.vue';
import BF_M05_l018 from '@/views/business/BF_M05_l018.vue';
import BF_M05_l019 from '@/views/business/BF_M05_l019.vue';
import BF_M05_l020 from '@/views/business/BF_M05_l020.vue';
import BF_M05_l021 from '@/views/business/BF_M05_l021.vue';
import BF_M05_l022 from '@/views/business/BF_M05_l022.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerBusinessEquipmentLeaseEstimate,
    LayerBusinessEquipmentLeaseEstimateAgree,
    LayerBusinessEquipmentLeaseEstimateConfirm,
    LayerBusinessEquipmentLeaseEstimateComplete,
    BF_M05_l014,
    BF_M05_l015,
    BF_M05_l016,
    BF_M05_l017,
    BF_M05_l018,
    BF_M05_l019,
    BF_M05_l020,
    BF_M05_l021,
    BF_M05_l022,
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
          견적조회<br />BF_M05_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          신용정보조회동의<br />BF_M05_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          리스조건 확인<br />BF_M05_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          신청 완료<br />BF_M05_l005
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          상품선택<br />BF_M05_l014
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          사업자 정보 입력<br />BF_M05_l015
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          서비스이용약관동의<br />BF_M05_l016
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          심사결과(시스템심사)<br />BF_M05_l017
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          심사결과(정밀심사)<br />BF_M05_l018
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          심사결과(부결)<br />BF_M05_l019
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          견적서보기<br />BF_M05_l020
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          견적서 발송 팝업<br />BF_M05_l021
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open">
          견적서 진행사항 안내<br />BF_M05_l022
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerBusinessEquipmentLeaseEstimate ref="layer001" />
    <LayerBusinessEquipmentLeaseEstimateAgree ref="layer002" />
    <LayerBusinessEquipmentLeaseEstimateConfirm ref="layer003" />
    <LayerBusinessEquipmentLeaseEstimateComplete ref="layer004" />
    <BF_M05_l014 ref="layer005" />
    <BF_M05_l015 ref="layer006" />
    <BF_M05_l016 ref="layer007" />
    <BF_M05_l017 ref="layer008" />
    <BF_M05_l018 ref="layer009" />
    <BF_M05_l019 ref="layer010" />
    <BF_M05_l020 ref="layer011" />
    <BF_M05_l021 ref="layer012" />
    <BF_M05_l022 ref="layer013" />
  </PageContents>
</template>
