<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanOnlineContractStartURL from '@/views/myLoan/LayerMyLoanOnlineContractStartURL.vue';
import LayerMyLoanOnlineContractStartRecruiter from '@/views/myLoan/LayerMyLoanOnlineContractStartRecruiter.vue';
import LayerMyLoanOnlineContractNoticeDuty from '@/views/myLoan/LayerMyLoanOnlineContractNoticeDuty.vue';
import LayerMyLoanOnlineContractNoticeDutyNotAgree from '@/views/myLoan/LayerMyLoanOnlineContractNoticeDutyNotAgree.vue';
import LayerMyLoanOnlineContractCheck from '@/views/myLoan/LayerMyLoanOnlineContractCheck.vue';
import LayerMyLoanOnlineContractCheckAgree from '@/views/myLoan/LayerMyLoanOnlineContractCheckAgree.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanOnlineContractStartURL,
    LayerMyLoanOnlineContractStartRecruiter,
    LayerMyLoanOnlineContractNoticeDuty,
    LayerMyLoanOnlineContractNoticeDutyNotAgree,
    LayerMyLoanOnlineContractCheck,
    LayerMyLoanOnlineContractCheckAgree,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);
    const layer006 = ref(null);

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

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
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
          본인인증(URL진입)<br />My_M03_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          모집인등록증 제시<br />My_M03_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          고지의무수행 확인서<br />My_M03_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          고지의무수행 확인서_미동의시<br />My_M03_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          적합성·적정성 확인서<br />My_M03_l005
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          적합성·적정성 확인서_미동의 시<br />My_M03_b002
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanOnlineContractStartURL ref="layer001" />
    <LayerMyLoanOnlineContractStartRecruiter ref="layer002" />
    <LayerMyLoanOnlineContractNoticeDuty ref="layer003" />
    <LayerMyLoanOnlineContractNoticeDutyNotAgree ref="layer004" />
    <LayerMyLoanOnlineContractCheck ref="layer005" />
    <LayerMyLoanOnlineContractCheckAgree ref="layer006" />
  </PageContents>
</template>
