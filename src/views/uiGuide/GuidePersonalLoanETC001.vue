<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerPersonalLoanETCAgree from '@/views/personalLoan/LayerPersonalLoanETCAgree.vue';
import LayerPersonalLoanIdentificationMethodSelect from '@/views/personalLoan/LayerPersonalLoanIdentificationMethodSelect.vue';
import LayerPersonalLoanETCAutoSubmit from '@/views/personalLoan/LayerPersonalLoanETCAutoSubmit.vue';
import LayerPersonalLoanETCValusation from '@/views/personalLoan/LayerPersonalLoanETCValusation.vue';
import LayerPersonalLoanETCCheck from '@/views/personalLoan/LayerPersonalLoanETCCheck.vue';
import LayerPersonalLoanETCSearchApartment from '@/views/personalLoan/LayerPersonalLoanETCSearchApartment.vue';
import LayerPersonalLoanETCApartment from '@/views/personalLoan/LayerPersonalLoanETCApartment.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerPersonalLoanETCAgree,
    LayerPersonalLoanIdentificationMethodSelect,
    LayerPersonalLoanETCAutoSubmit,
    LayerPersonalLoanETCValusation,
    LayerPersonalLoanETCCheck,
    LayerPersonalLoanETCSearchApartment,
    LayerPersonalLoanETCApartment,
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
        <BasicButton @click="layer001Open">
          통합 한도조회 동의<br />PF_M11_l001
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer002Open">
          통합 인증 수단 선택<br />PF_M11_b001
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer003Open">
          통합 소득정보 자동제출<br />PF_M11_l002
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer007Open">
          한도조회 입력<br />PF_M11_l003
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer006Open">
          아파트 검색<br />PF_M11_l004
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer004Open">
          통합 부동산 설정 금액<br />PF_M11_l005
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer005Open">
          한도/금리 확인<br />PF_M11_l007
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerPersonalLoanETCAgree ref="layer001" />
    <LayerPersonalLoanIdentificationMethodSelect ref="layer002" />
    <LayerPersonalLoanETCAutoSubmit ref="layer003" />
    <LayerPersonalLoanETCApartment ref="layer007" />
    <LayerPersonalLoanETCSearchApartment ref="layer006" />
    <LayerPersonalLoanETCValusation ref="layer004" />
    <LayerPersonalLoanETCCheck ref="layer005" />
  </PageContents>
</template>
