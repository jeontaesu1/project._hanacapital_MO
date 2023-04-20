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
import LayerMyLoanOnlineContractAgree from '@/views/myLoan/LayerMyLoanOnlineContractAgree.vue';
import LayerMyLoanOnlineContractFurtherExplanation from '@/views/myLoan/LayerMyLoanOnlineContractFurtherExplanation.vue';
import LayerMyLoanOnlineContractUsedCarLoanScam from '@/views/myLoan/LayerMyLoanOnlineContractUsedCarLoanScam.vue';
import LayerMyLoanOnlineContractLoanCounselor from '@/views/myLoan/LayerMyLoanOnlineContractLoanCounselor.vue';
import LayerMyLoanOnlineContractDescription from '@/views/myLoan/LayerMyLoanOnlineContractDescription.vue';
import LayerMyLoanOnlineContractDescriptionConfirm from '@/views/myLoan/LayerMyLoanOnlineContractDescriptionConfirm.vue';

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
    LayerMyLoanOnlineContractAgree,
    LayerMyLoanOnlineContractFurtherExplanation,
    LayerMyLoanOnlineContractUsedCarLoanScam,
    LayerMyLoanOnlineContractLoanCounselor,
    LayerMyLoanOnlineContractDescription,
    LayerMyLoanOnlineContractDescriptionConfirm,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);
    const layer006 = ref(null);
    const layer007 = ref(null);
    const layer008 = ref(null);
    const layer009 = ref(null);
    const layer010 = ref(null);
    const layer011 = ref(null);
    const layer012 = ref(null);

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
    const layer008Open = (e = {}) => {
      layer008.value.layer.open(e.target);
    };
    const layer009Open = (e = {}) => {
      layer009.value.layer.open(e.target);
    };
    const layer010Open = (e = {}) => {
      layer010.value.layer.open(e.target);
    };
    const layer011Open = (e = {}) => {
      layer011.value.layer.open(e.target);
    };
    const layer012Open = (e = {}) => {
      layer012.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer007,
      layer008,
      layer009,
      layer010,
      layer011,
      layer012,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
      layer007Open,
      layer008Open,
      layer009Open,
      layer010Open,
      layer011Open,
      layer012Open,
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
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          약관동의<br />My_M03_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          추가설명 여부<br />My_M03_b003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          약관상세_중고차 대출사기 방지 안내문<br />My_M03_l012
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          약관상세_대출상담사 설명 확인서<br />My_M03_l013
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          상품설명서 확인 안내(공통)<br />My_M03_l200
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          상품설명에 대한 확인(공통)<br />My_M03_b050
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanOnlineContractStartURL ref="layer001" />
    <LayerMyLoanOnlineContractStartRecruiter ref="layer002" />
    <LayerMyLoanOnlineContractNoticeDuty ref="layer003" />
    <LayerMyLoanOnlineContractNoticeDutyNotAgree ref="layer004" />
    <LayerMyLoanOnlineContractCheck ref="layer005" />
    <LayerMyLoanOnlineContractCheckAgree ref="layer006" />
    <LayerMyLoanOnlineContractAgree ref="layer007" />
    <LayerMyLoanOnlineContractFurtherExplanation ref="layer008" />
    <LayerMyLoanOnlineContractUsedCarLoanScam ref="layer009" />
    <LayerMyLoanOnlineContractLoanCounselor ref="layer010" />
    <LayerMyLoanOnlineContractDescription ref="layer011" />
    <LayerMyLoanOnlineContractDescriptionConfirm ref="layer012" />
  </PageContents>
</template>
