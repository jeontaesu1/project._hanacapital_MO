<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSignResetPin from '@/views/sign/LayerSignResetPin.vue';
import LayerSignResetPinIdentificationMethodSelect from '@/views/sign/LayerSignResetPinIdentificationMethodSelect.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSignResetPin,
    LayerSignResetPinIdentificationMethodSelect,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };
    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer001Open,
      layer002Open,
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
    </ButtonList>

    <LayerSignResetPin ref="layer001" />
    <LayerSignResetPinIdentificationMethodSelect ref="layer002" />
  </PageContents>
</template>
