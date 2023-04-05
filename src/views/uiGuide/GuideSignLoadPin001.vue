<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSignLoadPin from '@/views/sign/LayerSignLoadPin.vue';
import LayerSignLoadPinErrorExcess from '@/views/sign/LayerSignLoadPinErrorExcess.vue';
import LayerSignLoadPinCertified from '@/views/sign/LayerSignLoadPinCertified.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSignLoadPin,
    LayerSignLoadPinErrorExcess,
    LayerSignLoadPinCertified,
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
        <BasicButton @click="layer001Open">간편비밀번호 불러오기</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">오류횟수 초과</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">간편비밀번호 인증</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerSignLoadPin ref="layer001" />
    <LayerSignLoadPinErrorExcess ref="layer002" />
    <LayerSignLoadPinCertified ref="layer003" />
  </PageContents>
</template>
