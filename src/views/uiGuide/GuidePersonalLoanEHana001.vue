<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerPersonalLoanIdentification from '@/views/personalLoan/LayerPersonalLoanIdentification.vue';
import LayerPersonalLoanEHanaAgree from '@/views/personalLoan/LayerPersonalLoanEHanaAgree.vue';
import LayerPersonalLoanRevenue from '@/views/personalLoan/LayerPersonalLoanRevenue.vue';

import LayerPersonalLoanWarningNotice from '@/views/personalLoan/LayerPersonalLoanWarningNotice.vue';
import LayerPersonalLoanLoanNotice from '@/views/personalLoan/LayerPersonalLoanLoanNotice.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerPersonalLoanIdentification,
    LayerPersonalLoanEHanaAgree,
    LayerPersonalLoanRevenue,

    LayerPersonalLoanWarningNotice,
    LayerPersonalLoanLoanNotice,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);

    const layer004 = ref(null);
    const layer005 = ref(null);

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

    return {
      layer001,
      layer001Open,
      layer002,
      layer002Open,
      layer003,
      layer003Open,
      layer004,
      layer004Open,
      layer005,
      layer005Open,
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
        <BasicButton @click="layer001Open">본인인증 방법 선택</BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer002Open">한도조회 동의</BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer003Open">공동인증서</BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer004Open">보이스피싱 주의사항 </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer005Open">사업자 대출 진행안내 </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerPersonalLoanIdentification ref="layer001" />
    <LayerPersonalLoanEHanaAgree ref="layer002" />
    <LayerPersonalLoanRevenue ref="layer003" />
    <LayerPersonalLoanWarningNotice ref="layer004" />
    <LayerPersonalLoanLoanNotice ref="layer005" />
  </PageContents>
</template>
