<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerPersonalLoanConfirmSelect from '@/views/personalLoan/LayerPersonalLoanConfirmSelect.vue';
import LayerPersonalLoanSignUpAgree from '@/views/personalLoan/LayerPersonalLoanSignUpAgree.vue';
import LayerPersonalLoanSignUpIdPassword from '@/views/personalLoan/LayerPersonalLoanSignUpIdPassword.vue';
import LayerPersonlaLoanSignUpcomplete from '@/views/personalLoan/LayerPersonlaLoanSignUpcomplete.vue';
import LayerPersonalLoanSignUpAlready from '@/views/personalLoan/LayerPersonalLoanSignUpAlready.vue';
import LayerPersonalLoanSignUpAlreadyApp from '@/views/personalLoan/LayerPersonalLoanSignUpAlreadyApp.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,

    LayerPersonalLoanConfirmSelect,
    LayerPersonalLoanSignUpAgree,
    LayerPersonalLoanSignUpIdPassword,
    LayerPersonlaLoanSignUpcomplete,
    LayerPersonalLoanSignUpAlready,
    LayerPersonalLoanSignUpAlreadyApp,
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
      layer001Open,
      layer002,
      layer002Open,
      layer003,
      layer003Open,
      layer004,
      layer004Open,
      layer005,
      layer005Open,
      layer006,
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
        <BasicButton @click="layer001Open">인증선택</BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer002Open">약관동의</BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer003Open">아이디 비밀번호 입력</BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer004Open">가입완료</BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer005Open">기가입</BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer006Open">앱 기가입</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerPersonalLoanConfirmSelect ref="layer001" />
    <LayerPersonalLoanSignUpAgree ref="layer002" />
    <LayerPersonalLoanSignUpIdPassword ref="layer003" />
    <LayerPersonlaLoanSignUpcomplete ref="layer004" />
    <LayerPersonalLoanSignUpAlready ref="layer005" />
    <LayerPersonalLoanSignUpAlreadyApp ref="layer006" />
  </PageContents>
</template>
