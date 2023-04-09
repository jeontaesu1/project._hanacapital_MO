<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSignLoadPinErrorExcess from '@/views/sign/LayerSignLoadPinErrorExcess.vue';
import LayerSignLoadPinInput from '@/views/sign/LayerSignLoadPinInput.vue';
import LayerSignLoadPinComplete from '@/views/sign/LayerSignLoadPinComplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSignLoadPinErrorExcess,
    LayerSignLoadPinInput,
    LayerSignLoadPinComplete,
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
        <BasicButton @click="layer001Open">비밀번호 입력</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">오류횟수 초과</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">가입 완료</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerSignLoadPinInput ref="layer001" />
    <LayerSignLoadPinErrorExcess ref="layer002" />
    <LayerSignLoadPinComplete ref="layer003" />
  </PageContents>
</template>
