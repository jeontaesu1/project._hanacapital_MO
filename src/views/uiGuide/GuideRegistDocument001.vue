<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerRegistDocumentList from '@/views/registDocument/LayerRegistDocumentList.vue';
import LayerRegistDocumentEdit from '@/views/registDocument/LayerRegistDocumentEdit.vue';
import LayerRegistDocumentImageView from '@/views/registDocument/LayerRegistDocumentImageView.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerRegistDocumentList,
    LayerRegistDocumentEdit,
    LayerRegistDocumentImageView,
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
          고객서류등록<br />Common_M00_l040
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          서류업로드<br />Common_M00_l041
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          미리보기<br />Common_M00_l042
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerRegistDocumentList ref="layer001" />
    <LayerRegistDocumentEdit ref="layer002" />
    <LayerRegistDocumentImageView ref="layer003" />
  </PageContents>
</template>
