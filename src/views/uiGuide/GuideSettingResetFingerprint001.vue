<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSettingResetFingerprintAgree from '@/views/setting/LayerSettingResetFingerprintAgree.vue';
import LayerSettingResetFingerprintComplete from '@/views/setting/LayerSettingResetFingerprintComplete.vue';
import LayerSettingResetFingerprintDelete from '@/views/setting/LayerSettingResetFingerprintDelete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSettingResetFingerprintAgree,
    LayerSettingResetFingerprintComplete,
    LayerSettingResetFingerprintDelete,
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
        <BasicButton @click="layer001Open"
          >지문인증 (재)등록<br />Setting_M05_l001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >지문 등록 완료<br />Setting_M05_l002</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >지문 해지 안내<br />Setting_M05_l003</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerSettingResetFingerprintAgree ref="layer001" />
    <LayerSettingResetFingerprintComplete ref="layer002" />
    <LayerSettingResetFingerprintDelete ref="layer003" />
  </PageContents>
</template>
