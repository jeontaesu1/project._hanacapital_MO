<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMainPushDetail from '@/views/main/LayerMainPushDetail.vue';
import LayerMainRentalDetail from '@/views/main/LayerMainRentalDetail.vue';
import LayerMainAffiliate from '@/views/main/LayerMainAffiliate.vue';
import LayerMainEventDetail from '@/views/main/LayerMainEventDetail.vue';
import LayerMainCouponDetail from '@/views/main/LayerMainCouponDetail.vue';
import LayerMainFunDetail from '@/views/main/LayerMainFunDetail.vue';
import LayerMainFunSubscription from '@/views/main/LayerMainFunSubscription.vue';
import Main_M06_b001 from '@/views/main/Main_M06_b001.vue';
import Main_M06_b002 from '@/views/main/Main_M06_b002.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMainPushDetail,
    LayerMainRentalDetail,
    LayerMainAffiliate,
    LayerMainEventDetail,
    LayerMainCouponDetail,
    LayerMainFunDetail,
    LayerMainFunSubscription,
    Main_M06_b001,
    Main_M06_b002,
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
    const layer009 = ref(null);

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
    const layer009Open = (e = {}) => {
      layer009.value.layer.open(e.target);
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
      layer009,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
      layer007Open,
      layer008Open,
      layer009Open,
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
          알림함_상세<br />Main_M06_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          렌탈 상세<br />Main_M07_l001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          제휴사 연결<br />Main_M07_l002</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          이벤트 상세<br />Main_M05_l001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          쿠폰 상세<br />Main_M05_l003</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          FUN 상세<br />Main_M05_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          FUN 구독<br />Main_M05_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          혜택 알림 수신 유도
          <br />
          Main_M06_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          운세 알림 수신 유도
          <br />
          Main_M06_b002
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMainPushDetail ref="layer001" />
    <LayerMainRentalDetail ref="layer002" />
    <LayerMainAffiliate ref="layer003" />
    <LayerMainEventDetail ref="layer004" />
    <LayerMainCouponDetail ref="layer005" />
    <LayerMainFunDetail ref="layer006" />
    <LayerMainFunSubscription ref="layer007" />
    <Main_M06_b001 ref="layer008" />
    <Main_M06_b002 ref="layer009" />
  </PageContents>
</template>
