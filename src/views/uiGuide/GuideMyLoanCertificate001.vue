<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanCertificate from '@/views/myLoan/LayerMyLoanCertificate.vue';
import LayerMyLoanCertificateRepaymentList from '@/views/myLoan/LayerMyLoanCertificateRepaymentList.vue';
import LayerMyLoanCertificateRepaymentMethod from '@/views/myLoan/LayerMyLoanCertificateRepaymentMethod.vue';
import LayerMyLoanCertificateRepaymentEmailComplete from '@/views/myLoan/LayerMyLoanCertificateRepaymentEmailComplete.vue';
import LayerMyLoanCertificateRepaymentEmail from '../myLoan/LayerMyLoanCertificateRepaymentEmail.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanCertificate,
    LayerMyLoanCertificateRepaymentList,
    LayerMyLoanCertificateRepaymentMethod,
    LayerMyLoanCertificateRepaymentEmailComplete,
    LayerMyLoanCertificateRepaymentEmail,
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
          증명서 조회/발급<br />My_M02_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          상환스케줄<br />My_M02_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          발급방법선택팝업<br />My_M02_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          이메일발송<br />My_M02_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          이메일발송완료<br />My_M02_l005
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanCertificate ref="layer001" />
    <LayerMyLoanCertificateRepaymentList ref="layer002" />
    <LayerMyLoanCertificateRepaymentMethod ref="layer003" />
    <LayerMyLoanCertificateRepaymentEmail ref="layer004" />
    <LayerMyLoanCertificateRepaymentEmailComplete ref="layer005" />
  </PageContents>
</template>
