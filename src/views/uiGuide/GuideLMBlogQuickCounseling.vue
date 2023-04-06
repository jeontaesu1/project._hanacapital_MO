<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerLMBlogQuickCounselingAgree001 from '@/views/lm-blog-personal/LayerLMBlogQuickCounselingAgree001.vue';
import LayerLMBlogQuickCounselingAgree002 from '@/views/lm-blog-personal/LayerLMBlogQuickCounselingAgree002.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,

    LayerLMBlogQuickCounselingAgree001,
    LayerLMBlogQuickCounselingAgree002,
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
          개인정보 수집 및 이용동의
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"> 개인정보 제공 동의 </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerLMBlogQuickCounselingAgree001 ref="layer001" />
    <LayerLMBlogQuickCounselingAgree002 ref="layer002" />
  </PageContents>
</template>
