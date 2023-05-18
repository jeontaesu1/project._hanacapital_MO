<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMainRentalDetail from '@/views/main/LayerMainRentalDetail.vue';
import LayerMainAffiliate from '@/views/main/LayerMainAffiliate.vue';
import LayerMainEventDetail from '@/views/main/LayerMainEventDetail.vue';
import LayerMainCouponDetail from '@/views/main/LayerMainCouponDetail.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMainRentalDetail,
    LayerMainAffiliate,
    LayerMainEventDetail,
    LayerMainCouponDetail,
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
        <BasicButton @click="layer001Open">
          렌탈 상세<br />Main_M07_l001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          제휴사 연결<br />Main_M07_l002</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          이벤트 상세<br />Main_M05_l001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          쿠폰 상세<br />Main_M05_l003</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerMainRentalDetail ref="layer001" />
    <LayerMainAffiliate ref="layer002" />
    <LayerMainEventDetail ref="layer003" />
    <LayerMainCouponDetail ref="layer004" />
  </PageContents>
</template>
