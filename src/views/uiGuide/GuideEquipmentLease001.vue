<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerEquipmentLeaseEstimateSend from '@/views/equipmentLease/LayerEquipmentLeaseEstimateSend.vue';
import LayerEquipmentLeaseEstimateURL from '@/views/equipmentLease/LayerEquipmentLeaseEstimateURL.vue';
import LayerEquipmentLeaseStatePriorAgree from '@/views/equipmentLease/LayerEquipmentLeaseStatePriorAgree.vue';
import LayerEquipmentLeaseStateCounselingAgree from '@/views/equipmentLease/LayerEquipmentLeaseStateCounselingAgree.vue';
import LayerEquipmentLeaseStateElectronicContract from '@/views/equipmentLease/LayerEquipmentLeaseStateElectronicContract.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerEquipmentLeaseEstimateSend,
    LayerEquipmentLeaseEstimateURL,
    LayerEquipmentLeaseStatePriorAgree,
    LayerEquipmentLeaseStateCounselingAgree,
    LayerEquipmentLeaseStateElectronicContract,
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
          견적서 전송 정보 입력<br />EL_M01_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          견적 확인<br />EL_M01_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          사전동의 요청 정보 입력 팝업<br />EL_M02_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          상담동의 요청 정보 입력 팝업<br />EL_M02_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          전자약정 전송 정보 입력 팝업<br />EL_M02_l003
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerEquipmentLeaseEstimateSend ref="layer001" />
    <LayerEquipmentLeaseEstimateURL ref="layer002" />
    <LayerEquipmentLeaseStatePriorAgree ref="layer003" />
    <LayerEquipmentLeaseStateCounselingAgree ref="layer004" />
    <LayerEquipmentLeaseStateElectronicContract ref="layer005" />
  </PageContents>
</template>
