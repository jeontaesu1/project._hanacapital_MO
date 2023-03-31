<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSignResetPasswordId from '@/views/sign/LayerSignResetPasswordId.vue';
import LayerSignIdFindMethodSelect from '@/views/sign/LayerSignIdFindMethodSelect.vue';
import LayerSignResetPassword from '@/views/sign/LayerSignResetPassword.vue';
import LayerSignResetPasswordSuccess from '@/views/sign/LayerSignResetPasswordSuccess.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSignIdFindMethodSelect,
    LayerSignResetPasswordId,
    LayerSignResetPassword,
    LayerSignResetPasswordSuccess,
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
      layer002,
      layer003,
      layer004,
      layer001Open,
      layer002Open,
      layer003Open,
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
        <BasicButton @click="layer001Open">아이디 입력</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">인증 수단 선택</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">비밀번호 재설정</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">재설정 완료</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerSignResetPasswordId ref="layer001" />
    <LayerSignIdFindMethodSelect ref="layer002" />
    <LayerSignResetPassword ref="layer003" />
    <LayerSignResetPasswordSuccess ref="layer004" />
  </PageContents>
</template>
