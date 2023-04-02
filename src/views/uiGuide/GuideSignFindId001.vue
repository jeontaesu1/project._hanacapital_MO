<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSignFindIdIdentificationMethodSelect from '@/views/sign/LayerSignFindIdIdentificationMethodSelect.vue';
import LayerSignFindIdComplete from '@/views/sign/LayerSignFindIdComplete.vue';
import LayerSignFindIdFail from '@/views/sign/LayerSignFindIdFail.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSignFindIdIdentificationMethodSelect,
    LayerSignFindIdComplete,
    LayerSignFindIdFail,
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
        <BasicButton @click="layer001Open">인증 수단 선택</BasicButton>
      </ButtonListItem>
      <!-- 작업중
      <ButtonListItem>
        <BasicButton @click="layer002Open">아이디 확인</BasicButton>
      </ButtonListItem>
      -->
      <ButtonListItem>
        <BasicButton @click="layer003Open">아이디 찾기 실패</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerSignFindIdIdentificationMethodSelect ref="layer001" />
    <LayerSignFindIdComplete ref="layer002" />
    <LayerSignFindIdFail ref="layer003" />
  </PageContents>
</template>
