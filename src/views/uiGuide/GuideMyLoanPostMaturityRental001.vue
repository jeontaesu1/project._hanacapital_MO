<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanPostMaturityRentalExtension from '@/views/myLoan/LayerMyLoanPostMaturityRentalExtension.vue';
import LayerMyLoanPostMaturityRentalReturnForm from '@/views/myLoan/LayerMyLoanPostMaturityRentalReturnForm.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanPostMaturityRentalExtension,
    LayerMyLoanPostMaturityRentalReturnForm,
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
          연장 조건 선택<br />My_M08_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          반환 정보 입력<br />My_M08_l011
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanPostMaturityRentalExtension ref="layer001" />
    <LayerMyLoanPostMaturityRentalReturnForm ref="layer002" />
  </PageContents>
</template>
