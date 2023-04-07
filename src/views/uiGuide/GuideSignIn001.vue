<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSignInPasswordGuide from '@/views/sign/LayerSignInPasswordGuide.vue';
import LayerSignInFromAppIdentificationMethodSelect from '@/views/sign/LayerSignInFromAppIdentificationMethodSelect.vue';
import LayerSignInSetFirstPage from '@/views/sign/LayerSignInSetFirstPage.vue';
import LayerSignInIntegrationIdentificationMethodSelect from '@/views/sign/LayerSignInIntegrationIdentificationMethodSelect.vue';
import LayerSignInIdIntegrationPasswordForm from '@/views/sign/LayerSignInIdIntegrationPasswordForm.vue';
import LayerSignInIdIntegrationComplete from '@/views/sign/LayerSignInIdIntegrationComplete.vue';
import LayerSigninIdSelect from '@/views/sign/LayerSigninIdSelect.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSignInPasswordGuide,
    LayerSignInFromAppIdentificationMethodSelect,
    LayerSignInSetFirstPage,
    LayerSignInIntegrationIdentificationMethodSelect,
    LayerSignInIdIntegrationPasswordForm,
    LayerSignInIdIntegrationComplete,
    LayerSigninIdSelect,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);
    const layer006 = ref(null);
    const layer007 = ref(null);

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

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer007,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
      layer007Open,
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
          비밀번호 3개월 경과 안내
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          앱회원 인증수단 선택 팝업
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">첫 화면 설정</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">통합 ID 인증수단 선택</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">통합 ID 선택</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">통합 ID 비밀번호 설정</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">통합 ID 설정완료</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerSignInPasswordGuide ref="layer001" />
    <LayerSignInFromAppIdentificationMethodSelect ref="layer002" />
    <LayerSignInSetFirstPage ref="layer003" />
    <LayerSignInIntegrationIdentificationMethodSelect ref="layer004" />
    <LayerSignInIdIntegrationPasswordForm ref="layer005" />
    <LayerSignInIdIntegrationComplete ref="layer006" />
    <LayerSigninIdSelect ref="layer007" />
  </PageContents>
</template>
