<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerAutoEstimateCounseling from '../auto/LayerAutoEstimateCounseling.vue';
import LayerAutoEstimateCounselingComplete from '../auto/LayerAutoEstimateCounselingComplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerAutoEstimateCounseling,
    LayerAutoEstimateCounselingComplete,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };
    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer001Open,
      layer002Open,
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
          >신청정보 입력<br />AF_M00_l009</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >상담 신청완료<br />AF_M00_l010</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerAutoEstimateCounseling ref="layer001" />
    <LayerAutoEstimateCounselingComplete ref="layer002" />
  </PageContents>
</template>
