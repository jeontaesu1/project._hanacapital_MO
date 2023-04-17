<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerAutoSuccessionNotice from '@/views/auto/LayerAutoSuccessionNotice.vue';
import LayerAutoSuccessionList from '@/views/auto/LayerAutoSuccessionList.vue';
import LayerAutoSuccessionAgree from '@/views/auto/LayerAutoSuccessionAgree.vue';
import LayerAutoSuccessionURLSendComplete from '@/views/auto/LayerAutoSuccessionURLSendComplete.vue';
import LayerAutoSuccessionURLSend from '@/views/auto/LayerAutoSuccessionURLSend.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerAutoSuccessionNotice,
    LayerAutoSuccessionList,
    LayerAutoSuccessionAgree,
    LayerAutoSuccessionURLSendComplete,
    LayerAutoSuccessionURLSend,
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
          >승계유의사항 확인<br />AF_M07_l001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >승계 차량 선택<br />AF_M07_l002</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >승계 정보 제공 동의<br />AF_M07_b001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open"
          >승계 신청 URL 발송 완료<br />AF_M07_l004</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open"
          >승계 신청 URL 발송<br />AF_M07_b002</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerAutoSuccessionNotice ref="layer001" />
    <LayerAutoSuccessionList ref="layer002" />
    <LayerAutoSuccessionAgree ref="layer003" />
    <LayerAutoSuccessionURLSendComplete ref="layer004" />
    <LayerAutoSuccessionURLSend ref="layer005" />
  </PageContents>
</template>
