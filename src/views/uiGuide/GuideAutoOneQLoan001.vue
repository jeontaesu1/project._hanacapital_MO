<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerAutoOneQLoanForm from '@/views/auto/LayerAutoOneQLoanForm.vue';
import LayerAutoOneQLoanAgree from '@/views/auto/LayerAutoOneQLoanAgree.vue';
import LayerAutoOneQLoanError from '@/views/auto/LayerAutoOneQLoanError.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerAutoOneQLoanForm,
    LayerAutoOneQLoanAgree,
    LayerAutoOneQLoanError,
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
    </ButtonList>

    <LayerAutoOneQLoanForm ref="layer001" />
    <LayerAutoOneQLoanAgree ref="layer002" />
    <LayerAutoOneQLoanError ref="layer003" />
  </PageContents>
</template>
