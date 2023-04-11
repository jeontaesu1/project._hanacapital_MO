<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerLMBlogLoanCounselingApartmentPriceSearch from '@/views/lmBlog/LayerLMBlogLoanCounselingApartmentPriceSearch.vue';
import LayerLMBlogLoanCounselingApartmentCertified from '@/views/lmBlog/LayerLMBlogLoanCounselingApartmentCertified.vue';
import LayerLMBlogLoanCounselingApartmentCertifiedConfirm from '@/views/lmBlog/LayerLMBlogLoanCounselingApartmentCertifiedConfirm.vue';
import LayerLMBlogLoanCounselingVehicleAvailable from '@/views/lmBlog/LayerLMBlogLoanCounselingVehicleAvailable.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerLMBlogLoanCounselingApartmentPriceSearch,
    LayerLMBlogLoanCounselingApartmentCertified,
    LayerLMBlogLoanCounselingApartmentCertifiedConfirm,
    LayerLMBlogLoanCounselingVehicleAvailable,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);

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

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
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
          >아파트 시세검색<br />LM_M01_l004</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >아파트 등기부등본<br />LM_M01_l005, LM_M01_l006</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >아파트 등기부등본 확인<br />LM_M01_l007</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open"
          >대출가능 차량 기준안내<br />LM_M01_l009</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerLMBlogLoanCounselingApartmentPriceSearch ref="layer001" />
    <LayerLMBlogLoanCounselingApartmentCertified ref="layer002" />
    <LayerLMBlogLoanCounselingApartmentCertifiedConfirm ref="layer003" />
    <LayerLMBlogLoanCounselingVehicleAvailable ref="layer004" />
  </PageContents>
</template>
