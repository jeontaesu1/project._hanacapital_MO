<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerAutoOneQLoanForm from '@/views/auto/LayerAutoOneQLoanForm.vue';
import LayerAutoOneQLoanAgree from '@/views/auto/LayerAutoOneQLoanAgree.vue';
import LayerAutoOneQLoanError from '@/views/auto/LayerAutoOneQLoanError.vue';
import LayerAutoOneQLoanAvailable from '@/views/auto/LayerAutoOneQLoanAvailable.vue';
import LayerAutoOneQLoanInquiry from '@/views/auto/LayerAutoOneQLoanInquiry.vue';
import LayerAutoOneQLoanInquiryAlert from '@/views/auto/LayerAutoOneQLoanInquiryAlert.vue';
import AF_M05_l004 from '@/views/auto/AF_M05_l004.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerAutoOneQLoanForm,
    LayerAutoOneQLoanAgree,
    LayerAutoOneQLoanError,
    LayerAutoOneQLoanAvailable,
    LayerAutoOneQLoanInquiry,
    LayerAutoOneQLoanInquiryAlert,
    AF_M05_l004,
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
        <BasicButton @click="layer001Open"
          >신청정보 입력<br />AF_M05_l001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >약관동의<br />AF_M05_l002</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >신용정보조회동의 오류<br />AF_M05_l003</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open"
          >대출신청 가능<br />AF_M05_l004</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open"
          >지점문의 대상<br />AF_M05_l004</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open"
          >지점문의 완료<br />AF_M05_b002</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open"
          >대출신청 불가<br />AF_M05_l004</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerAutoOneQLoanForm ref="layer001" />
    <LayerAutoOneQLoanAgree ref="layer002" />
    <LayerAutoOneQLoanError ref="layer003" />
    <LayerAutoOneQLoanAvailable ref="layer004" />
    <LayerAutoOneQLoanInquiry ref="layer005" />
    <LayerAutoOneQLoanInquiryAlert ref="layer006" />
    <AF_M05_l004 ref="layer007" />
  </PageContents>
</template>
