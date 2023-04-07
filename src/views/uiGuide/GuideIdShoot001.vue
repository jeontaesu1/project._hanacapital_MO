<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerIdShootGuide from '@/views/idShoot/LayerIdShootGuide.vue';
import LayerIdShootFail from '@/views/idShoot/LayerIdShootFail.vue';
import LayerIdShootConfirm from '@/views/idShoot/LayerIdShootConfirm.vue';
import LayerIdShootForm from '@/views/idShoot/LayerIdShootForm.vue';
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

    LayerIdShootGuide,
    LayerIdShootFail,
    LayerIdShootConfirm,
    LayerIdShootForm,
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
    const layer005 = ref(null);
    const layer006 = ref(null);
    const layer007 = ref(null);
    const layer008 = ref(null);

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
    const layer006Open = (e = {}) => {
      layer006.value.layer.open(e.target);
    };
    const layer007Open = (e = {}) => {
      layer007.value.layer.open(e.target);
    };
    const layer008Open = (e = {}) => {
      layer008.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer007,
      layer008,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
      layer007Open,
      layer008Open,
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
        <BasicButton @click="layer001Open">신분증 촬영안내</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">신분증 인식 실패 팝업</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          신분증 정보입력_자동입력
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          신분증 정보입력_직접입력
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open"> 운전면허증 촬영안내 </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">운전면허증 인식 실패</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          운전면허증 정보입력_자동입력
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          운전면허증 정보입력_직접입력
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerIdShootGuide ref="layer001" />
    <LayerIdShootFail ref="layer002" />
    <LayerIdShootConfirm ref="layer003" />
    <LayerIdShootForm ref="layer004" />
    <LayerIdShootDrivingGuide ref="layer005" />
    <LayerIdShootDrivingFail ref="layer006" />
    <LayerIdShootDrivingConfirm ref="layer007" />
    <LayerIdShootDrivingForm ref="layer008" />
  </PageContents>
</template>
