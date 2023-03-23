<script>
import { ref, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IdentificationSystem from '@/views/identification/IdentificationSystem.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    IllustObject,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IdentificationSystem,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const identificationSystem = ref(null);

    const identificationSystemStart = () => {
      identificationSystem.value.start();
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '타이틀');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      identificationSystem,
      identificationSystemStart,
    };
  },
};
</script>

<template>
  <PageContents>
    <PageTextGroup>
      <PageMainText>
        고객상담 이용을 위해<br />
        <strong>본인인증을 진행해 주세요</strong>
      </PageMainText>
    </PageTextGroup>

    <IllustObject type="license" />

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton @click="identificationSystemStart">본인인증</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>

    <IdentificationSystem ref="identificationSystem" />
  </PageContents>
</template>
