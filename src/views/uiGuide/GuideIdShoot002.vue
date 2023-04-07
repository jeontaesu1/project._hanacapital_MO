<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerIdShootDrivingGuide from '@/views/idShoot/LayerIdShootDrivingGuide.vue';
import LayerIdShootDrivingFail from '@/views/idShoot/LayerIdShootDrivingFail.vue';
import LayerIdShootDrivingConfirm from '@/views/idShoot/LayerIdShootDrivingConfirm.vue';
import LayerIdShootDrivingForm from '@/views/idShoot/LayerIdShootDrivingForm.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerIdShootDrivingGuide,
    LayerIdShootDrivingFail,
    LayerIdShootDrivingConfirm,
    LayerIdShootDrivingForm,
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
        <BasicButton @click="layer001Open"> 운전면허증 촬영안내 </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">운전면허증 인식 실패</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          운전면허증 정보입력_자동입력
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          운전면허증 정보입력_직접입력
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerIdShootDrivingGuide ref="layer001" />
    <LayerIdShootDrivingFail ref="layer002" />
    <LayerIdShootDrivingConfirm ref="layer003" />
    <LayerIdShootDrivingForm ref="layer004" />
  </PageContents>
</template>
