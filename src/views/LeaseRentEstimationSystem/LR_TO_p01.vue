<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LR_TO_p01_Poprent from '@/views/LeaseRentEstimationSystem/LR_TO_p01_Poprent.vue';
import LR_TO_p01_Poplease from '@/views/LeaseRentEstimationSystem/LR_TO_p01_Poplease.vue';
import LR_TO_p01_Popcomplete from '@/views/LeaseRentEstimationSystem/LR_TO_p01_Popcomplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LR_TO_p01_Poprent,
    LR_TO_p01_Poplease,
    LR_TO_p01_Popcomplete,
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
          >자동차 인수 확인(렌트)<br />LR_TO_p01_Poprent</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >자동차 인수 확인(리스)<br />LR_TO_p01_Poplease</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >확인 완료<br />LR_TO_p01_Popcomplete</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LR_TO_p01_Poprent ref="layer001" />
    <LR_TO_p01_Poplease ref="layer002" />
    <LR_TO_p01_Popcomplete ref="layer003" />
  </PageContents>
</template>
