<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanSubscriptionWithdrawalRightConfirm from '@/views/myLoan/LayerMyLoanSubscriptionWithdrawalRightConfirm.vue';
import LayerMyLoanSubscriptionWithdrawalRightNotice from '@/views/myLoan/LayerMyLoanSubscriptionWithdrawalRightNotice.vue';
import LayerMyLoanSubscriptionWithdrawalRightForm from '@/views/myLoan/LayerMyLoanSubscriptionWithdrawalRightForm.vue';
import LayerMyLoanSubscriptionWithdrawalRightComplete from '@/views/myLoan/LayerMyLoanSubscriptionWithdrawalRightComplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanSubscriptionWithdrawalRightConfirm,
    LayerMyLoanSubscriptionWithdrawalRightNotice,
    LayerMyLoanSubscriptionWithdrawalRightForm,
    LayerMyLoanSubscriptionWithdrawalRightComplete,
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
        <BasicButton @click="layer001Open">
          내역확인
          <br />My_M06_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          청약철회신청 유의사항
          <br />My_M06_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          정보입력
          <br />My_M06_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          신청완료
          <br />My_M06_l003
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanSubscriptionWithdrawalRightConfirm ref="layer001" />
    <LayerMyLoanSubscriptionWithdrawalRightNotice ref="layer002" />
    <LayerMyLoanSubscriptionWithdrawalRightForm ref="layer003" />
    <LayerMyLoanSubscriptionWithdrawalRightComplete ref="layer004" />
  </PageContents>
</template>
