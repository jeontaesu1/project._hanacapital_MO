<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanIntermediate from '@/views/myLoan/LayerMyLoanIntermediate.vue';
import LayerMyLoanIntermediateConfirm from '@/views/myLoan/LayerMyLoanIntermediateConfirm.vue';
import LayerMyLoanIntermediateComplete from '@/views/myLoan/LayerMyLoanIntermediateComplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanIntermediate,
    LayerMyLoanIntermediateConfirm,
    LayerMyLoanIntermediateComplete,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };
    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };
    const layer003Open = (e = {}) => {
      layer003.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer001Open,
      layer002Open,
      layer003Open,
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
          계약정보 선택<br />My_M01_l014
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          금액조회<br />My_M01_l016
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          신청 완료<br />My_M01_l017
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanIntermediate ref="layer001" />
    <LayerMyLoanIntermediateConfirm ref="layer002" />
    <LayerMyLoanIntermediateComplete ref="layer003" />
  </PageContents>
</template>
