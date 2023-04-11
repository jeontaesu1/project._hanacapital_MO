<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

// import Layer from '@/views/';
import LayerMyLoanDesignationDriverNotice from '@/views/myLoan/LayerMyLoanDesignationDriverNotice.vue';
import LayerMyLoanDesignationDriverAdd from '@/views/myLoan/LayerMyLoanDesignationDriverAdd.vue';
import LayerMyLoanDesignationDriverAddComplete from '@/views/myLoan/LayerMyLoanDesignationDriverAddComplete.vue';
import LayerMyLoanDesignationDriverLMS from '@/views/myLoan/LayerMyLoanDesignationDriverLMS.vue';
import LayerMyLoanDesignationDriverLMSAgree from '@/views/myLoan/LayerMyLoanDesignationDriverLMSAgree.vue';
import LayerMyLoanDesignationDriverLMSForm from '@/views/myLoan/LayerMyLoanDesignationDriverLMSForm.vue';
import LayerMyLoanDesignationDriverLMSComplete from '@/views/myLoan/LayerMyLoanDesignationDriverLMSComplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    // Layer,
    LayerMyLoanDesignationDriverNotice,
    LayerMyLoanDesignationDriverAdd,
    LayerMyLoanDesignationDriverAddComplete,
    LayerMyLoanDesignationDriverLMS,
    LayerMyLoanDesignationDriverLMSAgree,
    LayerMyLoanDesignationDriverLMSForm,
    LayerMyLoanDesignationDriverLMSComplete,
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
          >등록안내 및 유의사항<br />
          My_M01_l006</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >등록정보 입력<br />
          My_M01_l007</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >등록 요청<br />
          My_M01_l008
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open"
          >등록대상자 확인<br />
          My_M01_l009
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open"
          >약관동의<br />
          My_M01_l010
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open"
          >정보 입력<br />
          My_M01_l011
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open"
          >등록완료<br />
          My_M01_l012
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <!--
    <Layer ref="layer001" />
    -->
    <LayerMyLoanDesignationDriverNotice ref="layer001" />
    <LayerMyLoanDesignationDriverAdd ref="layer002" />
    <LayerMyLoanDesignationDriverAddComplete ref="layer003" />
    <LayerMyLoanDesignationDriverLMS ref="layer004" />
    <LayerMyLoanDesignationDriverLMSAgree ref="layer005" />
    <LayerMyLoanDesignationDriverLMSForm ref="layer006" />
    <LayerMyLoanDesignationDriverLMSComplete ref="layer007" />
  </PageContents>
</template>
