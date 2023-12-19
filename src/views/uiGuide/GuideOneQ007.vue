<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import Q_M07_l001 from '@/views/oneQ/Q_M07_l001.vue';
import Q_M07_l002 from '@/views/oneQ/Q_M07_l002.vue';
import Q_M07_l003 from '@/views/oneQ/Q_M07_l003.vue';
import Q_M07_l004 from '@/views/oneQ/Q_M07_l004.vue';
import Q_M07_b001 from '@/views/oneQ/Q_M07_b001.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    Q_M07_l001,
    Q_M07_l002,
    Q_M07_l003,
    Q_M07_l004,
    Q_M07_b001,
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
          한도조회 동의<br />Q_M07_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          자동차정보 입력<br />Q_M07_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          급여소득정보 입력<br />Q_M07_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          한도/금리 확인<br />Q_M07_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          대출가능 차량기준 안내팝업<br />Q_M07_b001
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <Q_M07_l001 ref="layer001" />
    <Q_M07_l002 ref="layer002" />
    <Q_M07_l003 ref="layer003" />
    <Q_M07_l004 ref="layer004" />
    <Q_M07_b001 ref="layer005" />
  </PageContents>
</template>
