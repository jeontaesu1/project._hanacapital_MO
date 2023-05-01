<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSettingResetFaceIdAgree from '@/views/setting/LayerSettingResetFaceIdAgree.vue';
import LayerSettingResetFaceIdComplete from '@/views/setting/LayerSettingResetFaceIdComplete.vue';
import LayerSettingResetFaceIdDelete from '@/views/setting/LayerSettingResetFaceIdDelete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSettingResetFaceIdAgree,
    LayerSettingResetFaceIdComplete,
    LayerSettingResetFaceIdDelete,
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
          >Face ID (재)등록<br />Setting_M06_l001</BasicButton
        >
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >Face ID 등록 완료<br />Setting_M06_l002</BasicButton
        >
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >Face ID 해지 안내<br />Setting_M06_l003</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerSettingResetFaceIdAgree ref="layer001" />
    <LayerSettingResetFaceIdComplete ref="layer002" />
    <LayerSettingResetFaceIdDelete ref="layer003" />
  </PageContents>
</template>
