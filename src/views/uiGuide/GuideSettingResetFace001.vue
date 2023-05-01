<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSettingResetFaceComplete from '@/views/setting/LayerSettingResetFaceComplete.vue';
import LayerSettingResetFaceMaskComplete from '@/views/setting/LayerSettingResetFaceMaskComplete.vue';
import LayerSettingResetFaceAgree from '@/views/setting/LayerSettingResetFaceAgree.vue';
import LayerSettingResetFace from '@/views/setting/LayerSettingResetFace.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSettingResetFaceComplete,
    LayerSettingResetFaceMaskComplete,
    LayerSettingResetFaceAgree,
    LayerSettingResetFace,
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
        <BasicButton @click="layer001Open"
          >얼굴인증 (재)등록<br />Setting_M04_l001</BasicButton
        >
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >바이오정보 약관<br />Setting_M04_l002</BasicButton
        >
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer003Open">
          등록완료_얼굴인증 (재)등록<br />Setting_M04_l004
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer004Open">
          등록완료_마스크 인증 (재)등록<br />Setting_M04_l006
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerSettingResetFace ref="layer001" />
    <LayerSettingResetFaceAgree ref="layer002" />
    <LayerSettingResetFaceComplete ref="layer003" />
    <LayerSettingResetFaceMaskComplete ref="layer004" />
  </PageContents>
</template>
