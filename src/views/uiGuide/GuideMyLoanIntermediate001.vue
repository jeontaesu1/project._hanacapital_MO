<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

// import Layer from '@/views/';
import LayerMyLoanIntermediate from '@/views/myLoan/LayerMyLoanIntermediate.vue';
import LayerMyLoanIntermediateNotice from '@/views/myLoan/LayerMyLoanIntermediateNotice.vue';
import LayerMyLoanIntermediateConfirm from '@/views/myLoan/LayerMyLoanIntermediateConfirm.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    // Layer,
    LayerMyLoanIntermediate,
    LayerMyLoanIntermediateNotice,
    LayerMyLoanIntermediateConfirm,
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
        <BasicButton @click="layer001Open"
          >계약정보 선택<br />
          My_M01_l014
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >유의사항 팝업
          <br />
          My_M01_l015
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >금액조회<br />
          My_M01_l016
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <!--
    <Layer ref="layer001" />
    -->
    <LayerMyLoanIntermediate ref="layer001" />
    <LayerMyLoanIntermediateNotice ref="layer002" />
    <LayerMyLoanIntermediateConfirm ref="layer003" />
  </PageContents>
</template>
