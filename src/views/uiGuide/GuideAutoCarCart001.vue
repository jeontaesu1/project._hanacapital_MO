<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerAutoCarCartMarketingAgree from '@/views/auto/LayerAutoCarCartMarketingAgree.vue';
import LayerAutoCarCartConfirm from '@/views/auto/LayerAutoCarCartConfirm.vue';
import LayerAutoCarCartAgree from '@/views/auto/LayerAutoCarCartAgree.vue';
import LayerAutoCarCartComplete from '@/views/auto/LayerAutoCarCartComplete.vue';
import LayerAutoCarCartSelectBrand from '@/views/auto/LayerAutoCarCartSelectBrand.vue';
import LayerAutoCarCartSelectModel from '@/views/auto/LayerAutoCarCartSelectModel.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerAutoCarCartMarketingAgree,
    LayerAutoCarCartConfirm,
    LayerAutoCarCartAgree,
    LayerAutoCarCartComplete,
    LayerAutoCarCartSelectBrand,
    LayerAutoCarCartSelectModel,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);
    const layer006 = ref(null);

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

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
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
          하나캐피탈멤버십 마케팅 동의 팝업<br />AF_M44_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          제조사 선택<br />AF_M44_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          차종 선택<br />AF_M44_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          관심차량 확인<br />AF_M44_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          하나캐피탈멤버십 마케팅 동의 팝업<br />AF_M44_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          관심차량 등록 완료<br />AF_M44_l005
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerAutoCarCartMarketingAgree ref="layer001" />
    <LayerAutoCarCartConfirm ref="layer002" />
    <LayerAutoCarCartAgree ref="layer003" />
    <LayerAutoCarCartComplete ref="layer004" />
    <LayerAutoCarCartSelectBrand ref="layer005" />
    <LayerAutoCarCartSelectModel ref="layer006" />
  </PageContents>
</template>
