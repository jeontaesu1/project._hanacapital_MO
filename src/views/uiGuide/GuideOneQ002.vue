<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import PF_M01_l007 from '@/views/oneQ/PF_M01_l007.vue';
import PF_M01_l008 from '@/views/oneQ/PF_M01_l008.vue';
import PF_M01_b004 from '@/views/oneQ/PF_M01_b004.vue';
import PF_M02_l007 from '@/views/oneQ/PF_M02_l007.vue';
import PF_M04_l007 from '@/views/oneQ/PF_M04_l007.vue';
import PF_M05_l002 from '@/views/oneQ/PF_M05_l002.vue';
import PF_M05_l004 from '@/views/oneQ/PF_M05_l004.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PF_M01_l007,
    PF_M01_l008,
    PF_M01_b004,
    PF_M02_l007,
    PF_M04_l007,
    PF_M05_l002,
    PF_M05_l004,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);
    const layer006 = ref(null);
    const layer007 = ref(null);

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

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer007,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
      layer007Open,
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
          신청 정보 입력<br />PF_M01_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          e하나신용대출(연계) 안내<br />PF_M01_l008
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          금융상품 안내<br />PF_M01_b004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          신청 정보 입력<br />PF_M02_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          신청 정보 입력<br />PF_M04_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          우수고객추가대출 안내<br />PF_M05_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          신청 정보 입력<br />PF_M05_l004
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <PF_M01_l007 ref="layer001" />
    <PF_M01_l008 ref="layer002" />
    <PF_M01_b004 ref="layer003" />
    <PF_M02_l007 ref="layer004" />
    <PF_M04_l007 ref="layer005" />
    <PF_M05_l002 ref="layer006" />
    <PF_M05_l004 ref="layer007" />
  </PageContents>
</template>
