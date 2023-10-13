<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerErrorFull from '@/views/errorContents/LayerErrorFull.vue';
import LayerErrorAlert from '@/views/errorContents/LayerErrorAlert.vue';
import Common_M00_p011 from '@/views/errorContents/Common_M00_p011.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerErrorFull,
    LayerErrorAlert,
    Common_M00_p011,
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
        <BasicButton @click="layer001Open">
          오류안내 - Full<br />Common_M00_l027
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          오류안내 - Alert<br />Common_M00_l028
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          오류안내 - Alert<br />Common_M00_p011
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerErrorFull ref="layer001" />
    <LayerErrorAlert ref="layer002" />
    <Common_M00_p011 ref="layer003" />
  </PageContents>
</template>
