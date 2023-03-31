<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerPersonalLoanBusinessIdentification from '@/views/personalLoan/LayerPersonalLoanBusinessIdentification.vue';
import LayerPersonalLoanBusinessAgree from '@/views/personalLoan/LayerPersonalLoanBusinessAgree.vue';
import LayerPersonalLoanlLoanBusinessNotice from '@/views/personalLoan/LayerPersonalLoanlLoanBusinessNotice.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,

    LayerPersonalLoanBusinessIdentification,
    LayerPersonalLoanBusinessAgree,
    LayerPersonalLoanlLoanBusinessNotice,
  },
  setup() {
    const layer008 = ref(null);
    const layer009 = ref(null);
    const layer010 = ref(null);

    const layer008Open = (e = {}) => {
      layer008.value.layer.open(e.target);
    };

    const layer009Open = (e = {}) => {
      layer009.value.layer.open(e.target);
    };

    const layer010Open = (e = {}) => {
      layer010.value.layer.open(e.target);
    };

    return {
      layer008,
      layer008Open,
      layer009,
      layer009Open,
      layer010,
      layer010Open,
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
        <BasicButton @click="layer008Open">주택담보 인증 수단 선택</BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer009Open">주택담보 한도조회 동의</BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer010Open"
          >주택담보 사업자 대출 안내</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerPersonalLoanBusinessIdentification ref="layer008" />
    <LayerPersonalLoanBusinessAgree ref="layer009" />
    <LayerPersonalLoanlLoanBusinessNotice ref="layer010" />
  </PageContents>
</template>
