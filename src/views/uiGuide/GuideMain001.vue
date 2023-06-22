<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMainNotice001 from '@/views/main/LayerMainNotice001.vue';
import LayerMainNotice002 from '@/views/main/LayerMainNotice002.vue';
import LayerMainNotice003 from '@/views/main/LayerMainNotice003.vue';
import LayerMainNotice004 from '@/views/main/LayerMainNotice004.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMainNotice001,
    LayerMainNotice002,
    LayerMainNotice003,
    LayerMainNotice004,
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
          공지팝업 Type 1<br />Main_M01_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          공지팝업 Type 2<br />Main_M01_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          공지팝업 Type 3<br />Main_M01_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          공지팝업 Type 4<br />Main_M01_l001
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMainNotice001 ref="layer001" />
    <LayerMainNotice002 ref="layer002" />
    <LayerMainNotice003 ref="layer003" />
    <LayerMainNotice004 ref="layer004" />
  </PageContents>
</template>
