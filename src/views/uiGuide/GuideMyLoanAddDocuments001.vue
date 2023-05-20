<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanAddDocumentsAgree from '@/views/myLoan/LayerMyLoanAddDocumentsAgree.vue';
import LayerMyLoanAddDocumentsList from '@/views/myLoan/LayerMyLoanAddDocumentsList.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanAddDocumentsAgree,
    LayerMyLoanAddDocumentsList,
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
          약관동의<br />My_M07_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          내 서류 등록 내역<br />My_M07_l003
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanAddDocumentsAgree ref="layer001" />
    <LayerMyLoanAddDocumentsList ref="layer002" />
  </PageContents>
</template>
