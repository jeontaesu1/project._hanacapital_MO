<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSignUpAppAgreeTerms from '@/views/sign/LayerSignUpAppAgreeTerms.vue';
import LayerSignUpAppPinSet from '@/views/sign/LayerSignUpAppPinSet.vue';
import LayerSignUpAppPinConfirm from '@/views/sign/LayerSignUpAppPinConfirm.vue';
import LayerSignUpAppIdentificationMethodSelect from '@/views/sign/LayerSignUpAppIdentificationMethodSelect.vue';
import LayerSignUpAppRegistrationCompleted from '@/views/sign/LayerSignUpAppRegistrationCompleted.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSignUpAppAgreeTerms,
    LayerSignUpAppPinSet,
    LayerSignUpAppPinConfirm,
    LayerSignUpAppIdentificationMethodSelect,
    LayerSignUpAppRegistrationCompleted,
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
        <BasicButton @click="layer001Open">약관동의</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">비밀번호 입력</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">비밀번호 확인</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">인증수단 추가</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">회원가입(APP) 가입완료</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">간편회원가입 가입완료</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerSignUpAppAgreeTerms ref="layer001" />
    <LayerSignUpAppPinSet ref="layer002" />
    <LayerSignUpAppPinConfirm ref="layer003" />
    <LayerSignUpAppIdentificationMethodSelect ref="layer004" />
    <LayerSignUpAppRegistrationCompleted ref="layer005" />
  </PageContents>
</template>
