<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSignUpRegistrationCompleted from '@/views/sign/LayerSignUpRegistrationCompleted.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSignUpRegistrationCompleted,
  },
  setup() {
    const layer001 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };

    return {
      layer001,
      layer001Open,
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
        <BasicButton @click="layer001Open">가입완료</BasicButton>
      </ButtonListItem>
      <!-- <ButtonListItem>
        <BasicButton @click="layer006Open">통합 ID 설정완료</BasicButton>
      </ButtonListItem> -->
    </ButtonList>

    <LayerSignUpRegistrationCompleted ref="layer001" />
    <!-- <LayerSignInIdIntegrationComplete ref="layer006" /> -->
  </PageContents>
</template>
