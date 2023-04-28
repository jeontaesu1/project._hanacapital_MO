<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanInterestRateCutRequestForm from '@/views/myLoan/LayerMyLoanInterestRateCutRequestForm.vue';
import LayerMyLoanInterestRateCutRequestAgree from '@/views/myLoan/LayerMyLoanInterestRateCutRequestAgree.vue';
import LayerMyLoanInterestRateCutRequestComplete from '@/views/myLoan/LayerMyLoanInterestRateCutRequestComplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanInterestRateCutRequestForm,
    LayerMyLoanInterestRateCutRequestAgree,
    LayerMyLoanInterestRateCutRequestComplete,
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
          신청서 작성
          <br />My_M05_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          약관동의
          <br />My_M05_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          신청완료
          <br />My_M05_l003
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanInterestRateCutRequestForm ref="layer001" />
    <LayerMyLoanInterestRateCutRequestAgree ref="layer002" />
    <LayerMyLoanInterestRateCutRequestComplete ref="layer003" />
  </PageContents>
</template>
