<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LR_M05_l004 from '@/views/LeaseRentEstimationSystem/LR_M05_l004.vue';
import LR_M05_l005 from '@/views/LeaseRentEstimationSystem/LR_M05_l005.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LR_M05_l004,
    LR_M05_l005,
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
        <BasicButton @click="layer001Open">
          데이터 보기 팝업<br />LR_M05_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          발송 로그 팝업<br />LR_M05_l005
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LR_M05_l004 ref="layer001" />
    <LR_M05_l005 ref="layer002" />
  </PageContents>
</template>
