<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import Q_M06_l001 from '@/views/oneQ/Q_M06_l001.vue';
import Q_M06_l002 from '@/views/oneQ/Q_M06_l002.vue';
import Q_M06_l006 from '@/views/oneQ/Q_M06_l006.vue';
import Q_M06_l007 from '@/views/oneQ/Q_M06_l007.vue';
import Q_M06_l003 from '@/views/oneQ/Q_M06_l003.vue';
import Q_M06_b001 from '@/views/oneQ/Q_M06_b001.vue';
import Q_M06_l004 from '@/views/oneQ/Q_M06_l004.vue';
import Q_M06_l005 from '@/views/oneQ/Q_M06_l005.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    Q_M06_l001,
    Q_M06_l002,
    Q_M06_l006,
    Q_M06_l007,
    Q_M06_l003,
    Q_M06_b001,
    Q_M06_l004,
    Q_M06_l005,
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

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer007,
      layer008,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
      layer007Open,
      layer008Open,
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
          한도조회 동의<br />Q_M06_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          부동산 설정금액<br />Q_M06_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          소득정보 입력<br />Q_M06_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          한도조회 결과<br />Q_M06_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          아파트 검색<br />Q_M06_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          아파트평형 선택 팝업<br />Q_M06_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          아파트 등기부등본<br />Q_M06_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          아파트 등기부등본 확인<br />Q_M06_l005
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <Q_M06_l001 ref="layer001" />
    <Q_M06_l002 ref="layer002" />
    <Q_M06_l006 ref="layer003" />
    <Q_M06_l007 ref="layer004" />
    <Q_M06_l003 ref="layer005" />
    <Q_M06_b001 ref="layer006" />
    <Q_M06_l004 ref="layer007" />
    <Q_M06_l005 ref="layer008" />
  </PageContents>
</template>
