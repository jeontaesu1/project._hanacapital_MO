<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSignInBiometricsFace from '@/views/sign/LayerSignInBiometricsFace.vue';
import LayerSignInBiometricsFingerprint from '@/views/sign/LayerSignInBiometricsFingerprint.vue';
import LayerSignInBiometricsFaceId from '@/views/sign/LayerSignInBiometricsFaceId.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSignInBiometricsFace,
    LayerSignInBiometricsFingerprint,
    LayerSignInBiometricsFaceId,
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
        <BasicButton @click="layer001Open">
          얼굴인증<br />Member_M10_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          지문인증<br />Member_M10_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          Face ID<br />Member_M10_l004
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerSignInBiometricsFace ref="layer001" />
    <LayerSignInBiometricsFingerprint ref="layer002" />
    <LayerSignInBiometricsFaceId ref="layer003" />
  </PageContents>
</template>
