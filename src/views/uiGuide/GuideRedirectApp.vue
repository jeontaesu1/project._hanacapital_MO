<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import Common_M00_p007 from '@/views/redirect/Common_M00_p007.vue';
import Common_M00_p100 from '@/views/redirect/Common_M00_p100.vue';
import Common_M00_p200 from '@/views/redirect/Common_M00_p200.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    Common_M00_p007,
    Common_M00_p100,
    Common_M00_p200,
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
          >앱 중계 팝업<br />Common_M00_p007</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >앱 중계 공통 팝업<br />Common_M00_p100</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >앱 중계 공통 팝업<br />Common_M00_p200</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <Common_M00_p007 ref="layer001" />
    <Common_M00_p100 ref="layer002" />
    <Common_M00_p200 ref="layer003" />
  </PageContents>
</template>
