<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSignResetPin from '@/views/sign/LayerSignResetPin.vue';
import LayerSignResetPinIdentificationMethodSelect from '@/views/sign/LayerSignResetPinIdentificationMethodSelect.vue';
import LayerSignResetPinLogin from '@/views/sign/LayerSignResetPinLogin.vue';
import LayerSignResetPinEnter from '@/views/sign/LayerSignResetPinEnter.vue';
import LayerSignResetPinReEnter from '@/views/sign/LayerSignResetPinReEnter.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSignResetPin,
    LayerSignResetPinIdentificationMethodSelect,
    LayerSignResetPinLogin,
    LayerSignResetPinEnter,
    LayerSignResetPinReEnter,
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
        <BasicButton @click="layer001Open">간편비밀번호 초기화</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">인증 수단 선택</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">간편비밀번호 로그인</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">새 비밀번호 입력</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">새 비밀번호 재입력</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerSignResetPin ref="layer001" />
    <LayerSignResetPinIdentificationMethodSelect ref="layer002" />
    <LayerSignResetPinLogin ref="layer003" />
    <LayerSignResetPinEnter ref="layer004" />
    <LayerSignResetPinReEnter ref="layer005" />
  </PageContents>
</template>
