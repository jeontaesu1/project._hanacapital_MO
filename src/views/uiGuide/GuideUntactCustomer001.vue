<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import Comp_M00_l001 from '@/views/untactCustomer/Comp_M00_l001.vue';
import Comp_M00_l002 from '@/views/untactCustomer/Comp_M00_l002.vue';
import Comp_M00_l003 from '@/views/untactCustomer/Comp_M00_l003.vue';
import Comp_M00_l004 from '@/views/untactCustomer/Comp_M00_l004.vue';
import Comp_M00_l005 from '@/views/untactCustomer/Comp_M00_l005.vue';
import Comp_M00_l006 from '@/views/untactCustomer/Comp_M00_l006.vue';
import Comp_M00_l007 from '@/views/untactCustomer/Comp_M00_l007.vue';
import Comp_M00_l008 from '@/views/untactCustomer/Comp_M00_l008.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    Comp_M00_l001,
    Comp_M00_l002,
    Comp_M00_l003,
    Comp_M00_l004,
    Comp_M00_l005,
    Comp_M00_l006,
    Comp_M00_l007,
    Comp_M00_l008,
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
          본인인증안내<br />Comp_M00_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          회원 유형 선택<br />Comp_M00_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          개인정보확인<br />Comp_M00_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          개인정보확인_사업자<br />Comp_M00_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          주소 정보 입력<br />Comp_M00_l005
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          주소 정보 입력_직장인<br />Comp_M00_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          주소 정보 입력_사업자<br />Comp_M00_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          신청 완료<br />Comp_M00_l008
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <Comp_M00_l001 ref="layer001" />
    <Comp_M00_l002 ref="layer002" />
    <Comp_M00_l003 ref="layer003" />
    <Comp_M00_l004 ref="layer004" />
    <Comp_M00_l005 ref="layer005" />
    <Comp_M00_l006 ref="layer006" />
    <Comp_M00_l007 ref="layer007" />
    <Comp_M00_l008 ref="layer008" />
  </PageContents>
</template>
