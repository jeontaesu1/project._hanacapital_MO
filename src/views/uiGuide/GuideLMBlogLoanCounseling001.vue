<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerLMBlogLoanCounselingApartmentSearch from '@/views/lmBlog/LayerLMBlogLoanCounselingApartmentSearch.vue';
import LayerLMBlogLoanCounselingApartmentPriceSearch from '@/views/lmBlog/LayerLMBlogLoanCounselingApartmentPriceSearch.vue';
import LayerLMBlogLoanCounselingApartmentCertified from '@/views/lmBlog/LayerLMBlogLoanCounselingApartmentCertified.vue';
import LayerLMBlogLoanCounselingApartmentCertifiedConfirm from '@/views/lmBlog/LayerLMBlogLoanCounselingApartmentCertifiedConfirm.vue';
import LayerLMBlogLoanCounselingSelectBusiness from '@/views/lmBlog/LayerLMBlogLoanCounselingSelectBusiness.vue';
import LayerLMBlogLoanCounselingVehicleAvailable from '@/views/lmBlog/LayerLMBlogLoanCounselingVehicleAvailable.vue';
import LayerLMBlogLoanCounselingProducts from '@/views/lmBlog/LayerLMBlogLoanCounselingProducts.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerLMBlogLoanCounselingApartmentSearch,
    LayerLMBlogLoanCounselingApartmentPriceSearch,
    LayerLMBlogLoanCounselingApartmentCertified,
    LayerLMBlogLoanCounselingApartmentCertifiedConfirm,
    LayerLMBlogLoanCounselingSelectBusiness,
    LayerLMBlogLoanCounselingVehicleAvailable,
    LayerLMBlogLoanCounselingProducts,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);
    const layer006 = ref(null);
    const layer007 = ref(null);

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

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer007,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
      layer007Open,
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
          >아파트 검색<br />PF_M02_l003</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          아파트 시세검색<br />LM_M01_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          아파트 등기부등본<br />LM_M01_l005, LM_M01_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          아파트 등기부등본 확인<br />LM_M01_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          사업자선택<br />LM_M01_l008
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          대출가능 차량 기준안내<br />LM_M01_l009
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          한도 금리 확인<br />LM_M01_l010
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerLMBlogLoanCounselingApartmentSearch ref="layer001" />
    <LayerLMBlogLoanCounselingApartmentPriceSearch ref="layer002" />
    <LayerLMBlogLoanCounselingApartmentCertified ref="layer003" />
    <LayerLMBlogLoanCounselingApartmentCertifiedConfirm ref="layer004" />
    <LayerLMBlogLoanCounselingSelectBusiness ref="layer005" />
    <LayerLMBlogLoanCounselingVehicleAvailable ref="layer006" />
    <LayerLMBlogLoanCounselingProducts ref="layer007" />
  </PageContents>
</template>
