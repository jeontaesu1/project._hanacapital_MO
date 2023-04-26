<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanProgressAgree from '@/views/myLoan/LayerMyLoanProgressAgree.vue';
import LayerMyLoanProgressInstallmentConsultationSearch from '@/views/myLoan/LayerMyLoanProgressInstallmentConsultationSearch.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanProgressAgree,
    LayerMyLoanProgressInstallmentConsultationSearch,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };
    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer001Open,
      layer002Open,
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
          약관동의<br />My_M03_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          품목 검색 팝업<br />PF_M10_l009
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanProgressAgree ref="layer001" />
    <LayerMyLoanProgressInstallmentConsultationSearch ref="layer002" />
  </PageContents>
</template>
