<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerPersonalLoanEtcCombineAgree from '@/views/personalLoan/LayerPersonalLoanEtcCombineAgree.vue';
import LayerPersonalLoanEtcCombineIdentification from '@/views/personalLoan/LayerPersonalLoanEtcCombineIdentification.vue';
import LayerPersonalLoanEtcAutoSubmit from '@/views/personalLoan/LayerPersonalLoanEtcAutoSubmit.vue';
import LayerPersonlLoanETCCheck from '@/views/personalLoan/LayerPersonlLoanETCCheck.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,

    LayerPersonalLoanEtcCombineAgree,
    LayerPersonalLoanEtcCombineIdentification,

    LayerPersonalLoanEtcAutoSubmit,
    LayerPersonlLoanETCCheck,
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
      layer001Open,
      layer002,
      layer002Open,
      layer003,
      layer003Open,
      layer004,
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
        <BasicButton @click="layer001Open">통합 한도조회 동의</BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer002Open">통합 인증 수단 선택</BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer003Open">소득정보 자동제출</BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer004Open">부동산 설정 금액</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerPersonalLoanEtcCombineAgree ref="layer001" />
    <LayerPersonalLoanEtcCombineIdentification ref="layer002" />
    <LayerPersonalLoanEtcAutoSubmit ref="layer003" />
    <LayerPersonlLoanETCCheck ref="layer004" />
  </PageContents>
</template>
