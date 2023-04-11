<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSettingResetPin from '@/views/setting/LayerSettingResetPin.vue';
import LayerSettingResetPinInput from '@/views/setting/LayerSettingResetPinInput.vue';
import LayerSettingResetPinSet from '@/views/setting/LayerSettingResetPinSet.vue';
import LayerSettingResetPinConfirm from '@/views/setting/LayerSettingResetPinConfirm.vue';
import LayerSettingResetPinComplete from '@/views/setting/LayerSettingResetPinComplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSettingResetPin,
    LayerSettingResetPinInput,
    LayerSettingResetPinSet,
    LayerSettingResetPinConfirm,
    LayerSettingResetPinComplete,
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
        <BasicButton @click="layer001Open"
          >간편비밀번호 (재)등록<br />Setting_M03_l001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >간편비밀번호 인증<br />Setting_M03_l002</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >새 비밀번호 입력<br />Setting_M03_l003</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open"
          >비밀번호 재입력<br />Setting_M03_l004</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open"
          >등록 완료<br />Setting_M03_l005</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerSettingResetPin ref="layer001" />
    <LayerSettingResetPinInput ref="layer002" />
    <LayerSettingResetPinSet ref="layer003" />
    <LayerSettingResetPinConfirm ref="layer004" />
    <LayerSettingResetPinComplete ref="layer005" />
  </PageContents>
</template>
