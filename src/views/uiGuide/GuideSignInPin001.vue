<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSignInPin from '@/views/sign/LayerSignInPin.vue';
import LayerSignInPinMethodSelect from '@/views/sign/LayerSignInPinMethodSelect.vue';
import LayerSignInPinChangeCrertificate from '@/views/sign/LayerSignInPinChangeCrertificate.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSignInPin,
    LayerSignInPinMethodSelect,
    LayerSignInPinChangeCrertificate,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };
    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };
    const layer003Open = (e = {}) => {
      layer003.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer001Open,
      layer002Open,
      layer003Open,
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
        <BasicButton @click="layer003Open">간편비밀번호 로그인</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer001Open">로그인 방식 선택 팝업</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">인증 수단 선택</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerSignInPin ref="layer003" />
    <LayerSignInPinMethodSelect ref="layer001" />
    <LayerSignInPinChangeCrertificate ref="layer002" />
  </PageContents>
</template>
