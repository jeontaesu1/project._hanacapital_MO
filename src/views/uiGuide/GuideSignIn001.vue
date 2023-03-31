<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSignIn from '@/views/sign/LayerSignIn.vue';
import LayerSignCertificateSelect from '@/views/sign/LayerSignMethodSelect.vue';
import LayerSignResetPassword from '@/views/sign/LayerSignResetPassword.vue';
import LayerSignUpAppMethodSelect from '@/views/sign/LayerSignUpAppMethodSelect.vue';
import LayerSignPasswordGuidePopup from '@/views/sign/LayerSignPasswordGuidePopup.vue';
import LayerSignIntegratedIdSetupComplete from '../sign/LayerSignIntegratedIdSetupComplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSignIn,
    LayerSignCertificateSelect,
    LayerSignResetPassword,
    LayerSignUpAppMethodSelect,
    LayerSignPasswordGuidePopup,
    LayerSignIntegratedIdSetupComplete,
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
        <BasicButton @click="layer001Open">첫 화면 설정</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">인증 선택</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">통합 ID 비밀번호 설정</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">통합ID 설정완료</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open"
          >앱 회원가입 인증수단 선택 팝업</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open"
          >비밀번호 3개월 경과 안내 팝업
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerSignIn ref="layer001" />
    <LayerSignCertificateSelect ref="layer002" />
    <LayerSignResetPassword ref="layer003" />
    <LayerSignIntegratedIdSetupComplete ref="layer004" />
    <LayerSignUpAppMethodSelect ref="layer005" />
    <LayerSignPasswordGuidePopup ref="layer006" />
  </PageContents>
</template>
