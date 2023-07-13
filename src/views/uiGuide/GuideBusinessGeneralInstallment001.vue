<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BF_M06_l001 from '@/views/business/BF_M06_l001.vue';
import BF_M06_l002 from '@/views/business/BF_M06_l002.vue';
import BF_M06_l003 from '@/views/business/BF_M06_l003.vue';
import BF_M06_l004 from '@/views/business/BF_M06_l004.vue';
import BF_M06_l005 from '@/views/business/BF_M06_l005.vue';
import BF_M06_l006 from '@/views/business/BF_M06_l006.vue';
import BF_M06_l007 from '@/views/business/BF_M06_l007.vue';
import BF_M06_l008 from '@/views/business/BF_M06_l008.vue';
import BF_M06_l009 from '@/views/business/BF_M06_l009.vue';
import BF_M06_l010 from '@/views/business/BF_M06_l010.vue';
import BF_M06_l011 from '@/views/business/BF_M06_l011.vue';
import BF_M06_l012 from '@/views/business/BF_M06_l012.vue';
import BF_M06_l013 from '@/views/business/BF_M06_l013.vue';
import BF_M06_l016 from '@/views/business/BF_M06_l016.vue';
export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BF_M06_l001,
    BF_M06_l002,
    BF_M06_l003,
    BF_M06_l004,
    BF_M06_l005,
    BF_M06_l006,
    BF_M06_l007,
    BF_M06_l008,
    BF_M06_l009,
    BF_M06_l010,
    BF_M06_l011,
    BF_M06_l012,
    BF_M06_l013,
    BF_M06_l016,
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
    const layer010 = ref(null);
    const layer011 = ref(null);
    const layer012 = ref(null);
    const layer013 = ref(null);
    const layer014 = ref(null);

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
    const layer010Open = (e = {}) => {
      layer010.value.layer.open(e.target);
    };
    const layer011Open = (e = {}) => {
      layer011.value.layer.open(e.target);
    };
    const layer012Open = (e = {}) => {
      layer012.value.layer.open(e.target);
    };
    const layer013Open = (e = {}) => {
      layer013.value.layer.open(e.target);
    };
    const layer014Open = (e = {}) => {
      layer014.value.layer.open(e.target);
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
      layer010,
      layer011,
      layer012,
      layer013,
      layer014,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
      layer007Open,
      layer008Open,
      layer009Open,
      layer010Open,
      layer011Open,
      layer012Open,
      layer013Open,
      layer014Open,
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
          물품선택 <br />
          BF_M06_l001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          제휴사선택 <br />
          BF_M06_l002</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          상품선택 <br />
          BF_M06_l003</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          사업자 정보 입력 <br />
          BF_M06_l004</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          서비스이용약관동의 <br />
          BF_M06_l005</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          견적조회 <br />
          BF_M06_l006</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          본인인증 <br />
          BF_M06_l007</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          신용정보조회동의 <br />
          BF_M06_l008</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          할부조건 확인 <br />
          BF_M06_l009</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          심사결과(시스템심사) <br />
          BF_M06_l010</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          심사결과(부결) <br />
          BF_M06_l011</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          심사결과(정밀심사) <br />
          BF_M06_l012</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open">
          상담정보 입력 <br />
          BF_M06_l013</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer014Open">
          신청 완료 <br />
          BF_M06_l016</BasicButton
        >
      </ButtonListItem>
    </ButtonList>
    <BF_M06_l001 ref="layer001" />
    <BF_M06_l002 ref="layer002" />
    <BF_M06_l003 ref="layer003" />
    <BF_M06_l004 ref="layer004" />
    <BF_M06_l005 ref="layer005" />
    <BF_M06_l006 ref="layer006" />
    <BF_M06_l007 ref="layer007" />
    <BF_M06_l008 ref="layer008" />
    <BF_M06_l009 ref="layer009" />
    <BF_M06_l010 ref="layer010" />
    <BF_M06_l011 ref="layer011" />
    <BF_M06_l012 ref="layer012" />
    <BF_M06_l013 ref="layer013" />
    <BF_M06_l016 ref="layer014" />
  </PageContents>
</template>
