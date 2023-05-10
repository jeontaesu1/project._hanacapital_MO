<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyInfoDirectDebitAccountNotice from '@/views/myInfo/LayerMyInfoDirectDebitAccountNotice.vue';
import LayerMyInfoDirectDebitAccountEdit from '@/views/myInfo/LayerMyInfoDirectDebitAccountEdit.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyInfoDirectDebitAccountNotice,
    LayerMyInfoDirectDebitAccountEdit,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };
    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer001Open,
      layer002Open,
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
          결제계좌 변경 유의사항<br />MI_M01_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          결제계좌 정보 입력<br />MI_M01_l005
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyInfoDirectDebitAccountNotice ref="layer001" />
    <LayerMyInfoDirectDebitAccountEdit ref="layer002" />
  </PageContents>
</template>
