<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerLMBlogLoanCounselingApartmentPriceSearch from '../lm-blog/LayerLMBlogLoanCounselingApartmentPriceSearch.vue';
import LayerLMBlogLoanCounselingApartmentCertified from '../lm-blog/LayerLMBlogLoanCounselingApartmentCertified.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerLMBlogLoanCounselingApartmentPriceSearch,
    LayerLMBlogLoanCounselingApartmentCertified,
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
          아파트 수기 팝업 누락_입력전 & 후
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer002Open">아파트 등기부등본</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerLMBlogLoanCounselingApartmentPriceSearch ref="layer001" />
    <LayerLMBlogLoanCounselingApartmentCertified ref="layer002" />
  </PageContents>
</template>
