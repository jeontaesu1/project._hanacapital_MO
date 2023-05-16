<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerBusinessEquipmentLeaseEstimate from '@/views/business/LayerBusinessEquipmentLeaseEstimate.vue';
import LayerBusinessEquipmentLeaseEstimateAgree from '@/views/business/LayerBusinessEquipmentLeaseEstimateAgree.vue';
import LayerBusinessEquipmentLeaseEstimateConfirm from '@/views/business/LayerBusinessEquipmentLeaseEstimateConfirm.vue';
import LayerBusinessEquipmentLeaseEstimateForm from '@/views/business/LayerBusinessEquipmentLeaseEstimateForm.vue';
import LayerBusinessEquipmentLeaseEstimateComplete from '@/views/business/LayerBusinessEquipmentLeaseEstimateComplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerBusinessEquipmentLeaseEstimate,
    LayerBusinessEquipmentLeaseEstimateAgree,
    LayerBusinessEquipmentLeaseEstimateConfirm,
    LayerBusinessEquipmentLeaseEstimateForm,
    LayerBusinessEquipmentLeaseEstimateComplete,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);

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

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
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
          정보입력<br />BF_M05_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          신청 완료<br />BF_M05_l005
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerBusinessEquipmentLeaseEstimate ref="layer001" />
    <LayerBusinessEquipmentLeaseEstimateAgree ref="layer002" />
    <LayerBusinessEquipmentLeaseEstimateConfirm ref="layer003" />
    <LayerBusinessEquipmentLeaseEstimateForm ref="layer004" />
    <LayerBusinessEquipmentLeaseEstimateComplete ref="layer005" />
  </PageContents>
</template>
