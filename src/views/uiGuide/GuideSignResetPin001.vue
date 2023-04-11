<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSignResetPin from '@/views/sign/LayerSignResetPin.vue';
import LayerSignResetPinIdentificationMethodSelect from '@/views/sign/LayerSignResetPinIdentificationMethodSelect.vue';
import LayerSignResetPinInput from '@/views/sign/LayerSignResetPinInput.vue';
import LayerSignResetPinConfirm from '@/views/sign/LayerSignResetPinConfirm.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSignResetPin,
    LayerSignResetPinIdentificationMethodSelect,
    LayerSignResetPinInput,
    LayerSignResetPinConfirm,
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
        <BasicButton @click="layer001Open">
          간편비밀번호 초기화<br />Member_M09_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          인증 수단 선택<br />Member_M09_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          새 비밀번호 입력<br />Member_M09_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          새 비밀번호 재입력<br />Member_M09_l003
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerSignResetPin ref="layer001" />
    <LayerSignResetPinIdentificationMethodSelect ref="layer002" />
    <LayerSignResetPinInput ref="layer003" />
    <LayerSignResetPinConfirm ref="layer004" />
  </PageContents>
</template>
