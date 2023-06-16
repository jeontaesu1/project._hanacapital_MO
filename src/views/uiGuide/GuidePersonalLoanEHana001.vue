<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerPersonalLoanIdentificationMethodSelect from '@/views/personalLoan/LayerPersonalLoanIdentificationMethodSelect.vue';
import LayerPersonalLoanEHanaAgree from '@/views/personalLoan/LayerPersonalLoanEHanaAgree.vue';
import LayerPersonalLoanEHanaAutoSubmit from '@/views/personalLoan/LayerPersonalLoanEHanaAutoSubmit.vue';
import LayerPersonalLoanEHanaVoicePhishing from '@/views/personalLoan/LayerPersonalLoanEHanaVoicePhishing.vue';
import LayerPersonalLoanEHanaBusinessNotice from '@/views/personalLoan/LayerPersonalLoanEHanaBusinessNotice.vue';
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
    LayerPersonalLoanIdentificationMethodSelect,
    LayerPersonalLoanEHanaAgree,
    LayerPersonalLoanEHanaAutoSubmit,
    LayerPersonalLoanEHanaVoicePhishing,
    LayerPersonalLoanEHanaBusinessNotice,
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
          인증 수단 선택<br />PF_M01_b001
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer002Open">
          한도조회 동의<br />PF_M01_l001
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer003Open">
          소득정보 자동제출<br />PF_M01_l002
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer004Open">
          보이스피싱 주의사항<br />PF_M01_b002
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer005Open">
          사업자 대출 진행안내<br />PF_M01_b003
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer006Open">
          한도조회 결과<br />PF_M01_l004
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer007Open">
          한도조회 결과 - 대출신청 불가<br />PF_M01_l005
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer008Open">
          한도조회 결과- 한도조회 오류<br />PF_M01_l006
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer009Open">
          신청 정보 입력<br />PF_M01_l007
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer010Open">
          신청 정보 입력- e하나신용대출(연계) 안내<br />PF_M01_l008
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer011Open">
          신청 정보 입력- 금융상품 안내 팝업<br />PF_M01_b004
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer012Open">
          대출신청 완료<br />PF_M01_l009
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerPersonalLoanIdentificationMethodSelect ref="layer001" />
    <LayerPersonalLoanEHanaAgree ref="layer002" />
    <LayerPersonalLoanEHanaAutoSubmit ref="layer003" />
    <LayerPersonalLoanEHanaVoicePhishing ref="layer004" />
    <LayerPersonalLoanEHanaBusinessNotice ref="layer005" />
    <LayerPersonalLoanEHanaResult ref="layer006" />
    <LayerPersonalLoanEHanaFail ref="layer007" />
    <LayerPersonalLoanEHanaError ref="layer008" />
    <LayerPersonalLoanEHanaInput ref="layer009" />
    <LayerPersonalLoanEHanaLink ref="layer010" />
    <LayerPersonalLoanEHanaFinance ref="layer011" />
    <LayerPersonalLoanEHanaComplete ref="layer012" />
  </PageContents>
</template>
