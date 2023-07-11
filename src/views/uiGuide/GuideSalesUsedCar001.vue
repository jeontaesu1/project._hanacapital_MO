<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSalesUsedCarStateList from '@/views/salesUsedCar/LayerSalesUsedCarStateList.vue';
import LayerSalesUsedCarCounselingConfirm from '@/views/salesUsedCar/LayerSalesUsedCarCounselingConfirm.vue';
import LayerSalesUsedCarCounselingCommission from '@/views/salesUsedCar/LayerSalesUsedCarCounselingCommission.vue';
import LayerSalesUsedCarCounselingAccount from '@/views/salesUsedCar/LayerSalesUsedCarCounselingAccount.vue';
import LayerSalesUsedCarCounselingAccountSelect from '@/views/salesUsedCar/LayerSalesUsedCarCounselingAccountSelect.vue';
import LayerSalesUsedCarSearch from '@/views/salesUsedCar/LayerSalesUsedCarSearch.vue';
import LayerSalesUsedCarAffiliateIdentificationMethodSelect from '@/views/salesUsedCar/LayerSalesUsedCarAffiliateIdentificationMethodSelect.vue';
import LayerSalesUsedCarAffiliateClauseDetail001 from '@/views/salesUsedCar/LayerSalesUsedCarAffiliateClauseDetail001.vue';
import LayerSalesUsedCarAffiliateClauseDetail002 from '@/views/salesUsedCar/LayerSalesUsedCarAffiliateClauseDetail002.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSalesUsedCarStateList,
    LayerSalesUsedCarCounselingConfirm,
    LayerSalesUsedCarCounselingCommission,
    LayerSalesUsedCarCounselingAccount,
    LayerSalesUsedCarCounselingAccountSelect,
    LayerSalesUsedCarSearch,
    LayerSalesUsedCarAffiliateIdentificationMethodSelect,
    LayerSalesUsedCarAffiliateClauseDetail001,
    LayerSalesUsedCarAffiliateClauseDetail002,
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
        <BasicButton @click="layer001Open"
          >매매상사 약정 현황 조회<br />UC_M01_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >차량정보 팝업<br />UC_M03_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >수수료차감 팝업<br />UC_M03_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open"
          >매매상사(차량 소유자)계좌 조회<br />UC_M03_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open"
          >매매상사(차량 소유자)계좌 등록<br />UC_M03_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          차량검색<br />UC_M06_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          본인인증 선택<br />UC_M08_b002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          제휴 협약 동의 팝업<br />UC_M08_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          실천 서약서 동의 팝업<br />UC_M08_l002
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerSalesUsedCarStateList ref="layer001" />
    <LayerSalesUsedCarCounselingConfirm ref="layer002" />
    <LayerSalesUsedCarCounselingCommission ref="layer003" />
    <LayerSalesUsedCarCounselingAccount ref="layer004" />
    <LayerSalesUsedCarCounselingAccountSelect ref="layer005" />
    <LayerSalesUsedCarSearch ref="layer006" />
    <LayerSalesUsedCarAffiliateIdentificationMethodSelect ref="layer007" />
    <LayerSalesUsedCarAffiliateClauseDetail001 ref="layer008" />
    <LayerSalesUsedCarAffiliateClauseDetail002 ref="layer009" />
  </PageContents>
</template>
