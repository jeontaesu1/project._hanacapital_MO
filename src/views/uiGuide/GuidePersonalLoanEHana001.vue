<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerPersonalLoanEHanaResult from '@/views/personalLoan/LayerPersonalLoanEHanaResult.vue';
import LayerPersonalLoanEHanaFail from '@/views/personalLoan/LayerPersonalLoanEHanaFail.vue';
import LayerPersonalLoanEHanaError from '@/views/personalLoan/LayerPersonalLoanEHanaError.vue';
import LayerPersonalLoanEHanaInput from '@/views/personalLoan/LayerPersonalLoanEHanaInput.vue';
import LayerPersonalLoanEHanaLink from '@/views/personalLoan/LayerPersonalLoanEHanaLink.vue';
import LayerPersonalLoanEHanaFinance from '@/views/personalLoan/LayerPersonalLoanEHanaFinance.vue';
import LayerPersonalLoanEHanaComplete from '@/views/personalLoan/LayerPersonalLoanEHanaComplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerPersonalLoanEHanaResult,
    LayerPersonalLoanEHanaFail,
    LayerPersonalLoanEHanaError,
    LayerPersonalLoanEHanaInput,
    LayerPersonalLoanEHanaLink,
    LayerPersonalLoanEHanaFinance,
    LayerPersonalLoanEHanaComplete,
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
        <BasicButton @click="layer001Open">한도조회 결과</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >한도조회 결과 - 대출신청 불가</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >한도조회 결과- 한도조회 오류</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">신청 정보 입력</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open"
          >신청 정보 입력- e하나신용대출(연계) 안내</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open"
          >신청 정보 입력- 금융상품 안내 팝업</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">대출신청 완료</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerPersonalLoanEHanaResult ref="layer001" />
    <LayerPersonalLoanEHanaFail ref="layer002" />
    <LayerPersonalLoanEHanaError ref="layer003" />
    <LayerPersonalLoanEHanaInput ref="layer004" />
    <LayerPersonalLoanEHanaLink ref="layer005" />
    <LayerPersonalLoanEHanaFinance ref="layer006" />
    <LayerPersonalLoanEHanaComplete ref="layer007" />
  </PageContents>
</template>
