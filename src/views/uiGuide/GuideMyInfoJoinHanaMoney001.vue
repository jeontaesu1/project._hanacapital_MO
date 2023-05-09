<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyInfoJoinHanaMoneyForm from '@/views/myInfo/LayerMyInfoJoinHanaMoneyForm.vue';
import LayerMyInfoJoinHanaMoneyAgree from '@/views/myInfo/LayerMyInfoJoinHanaMoneyAgree.vue';
import LayerMyInfoJoinHanaMoneyComplete from '@/views/myInfo/LayerMyInfoJoinHanaMoneyComplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyInfoJoinHanaMoneyForm,
    LayerMyInfoJoinHanaMoneyAgree,
    LayerMyInfoJoinHanaMoneyComplete,
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
          가입정보 입력<br />MI_M01_l012
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          약관동의<br />MI_M01_l013
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          가입 완료<br />MI_M01_l014
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyInfoJoinHanaMoneyForm ref="layer001" />
    <LayerMyInfoJoinHanaMoneyAgree ref="layer002" />
    <LayerMyInfoJoinHanaMoneyComplete ref="layer003" />
  </PageContents>
</template>
