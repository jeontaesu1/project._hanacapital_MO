<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanProgressAgree from '@/views/myLoan/LayerMyLoanProgressAgree.vue';
import LayerMyLoanOnlineContractSuccession from '@/views/myLoan/LayerMyLoanOnlineContractSuccession.vue';
import LayerMyLoanOnlineContractSuccessionConfirm001 from '@/views/myLoan/LayerMyLoanOnlineContractSuccessionConfirm001.vue';
import LayerMyLoanOnlineContractSuccessionConfirm002 from '@/views/myLoan/LayerMyLoanOnlineContractSuccessionConfirm002.vue';
import LayerMyLoanOnlineContractSuccessionImportant from '@/views/myLoan/LayerMyLoanOnlineContractSuccessionImportant.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanProgressAgree,
    LayerMyLoanOnlineContractSuccession,
    LayerMyLoanOnlineContractSuccessionConfirm001,
    LayerMyLoanOnlineContractSuccessionConfirm002,
    LayerMyLoanOnlineContractSuccessionImportant,
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
      layer002,
      layer003,
      layer004,
      layer005,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
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
        <BasicButton @click="layer001Open">
          약관동의<br />My_M03_l001
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >본인확인<br />My_M03_l024</BasicButton
        >
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >승계확약 확인<br />My_M03_l025
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer004Open"
          >승계확약서 확인<br />My_M03_l026
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer005Open"
          >약정 중요사항 확인<br />My_M03_b016
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanProgressAgree ref="layer001" />
    <LayerMyLoanOnlineContractSuccession ref="layer002" />
    <LayerMyLoanOnlineContractSuccessionConfirm001 ref="layer003" />
    <LayerMyLoanOnlineContractSuccessionConfirm002 ref="layer004" />
    <LayerMyLoanOnlineContractSuccessionImportant ref="layer005" />
  </PageContents>
</template>
