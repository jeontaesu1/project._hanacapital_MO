<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyInfoMarketingAgree from '@/views/myInfo/LayerMyInfoMarketingAgree.vue';
import LayerMyInfoMarketingComplete001 from '@/views/myInfo/LayerMyInfoMarketingComplete001.vue';
import LayerMyInfoMarketingComplete002 from '@/views/myInfo/LayerMyInfoMarketingComplete002.vue';
import LayerMyInfoMarketingComplete003 from '@/views/myInfo/LayerMyInfoMarketingComplete003.vue';
import LayerMyInfoMarketingComplete004 from '@/views/myInfo/LayerMyInfoMarketingComplete004.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyInfoMarketingAgree,
    LayerMyInfoMarketingComplete001,
    LayerMyInfoMarketingComplete002,
    LayerMyInfoMarketingComplete003,
    LayerMyInfoMarketingComplete004,
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
        <BasicButton @click="layer001Open">
          약관동의 팝업<br />MI_M01_b006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          변경 완료_마케팅 동의<br />MI_M01_l011
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          변경 완료_멤버십 동의<br />MI_M01_l011
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          변경 완료_마케팅 미동의<br />MI_M01_l011
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          변경 완료_멤버십 미동의<br />MI_M01_l011
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyInfoMarketingAgree ref="layer001" />
    <LayerMyInfoMarketingComplete001 ref="layer002" />
    <LayerMyInfoMarketingComplete002 ref="layer003" />
    <LayerMyInfoMarketingComplete003 ref="layer004" />
    <LayerMyInfoMarketingComplete004 ref="layer005" />
  </PageContents>
</template>
