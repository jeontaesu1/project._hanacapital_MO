<script>
// MI_M01_p013
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    IllustObject,
    RoundStatus,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '자동차 시세정보');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <PageTextGroup>
      <div class="inline-wrap row-margin-item">
        <RoundStatus theme="secondary">모바일 전용</RoundStatus>
      </div>

      <PageMainText>
        매월 업데이트 되는 차량정보로<br />
        <strong>내 차 시세 조회가 가능한 혜택 서비스</strong>
      </PageMainText>
    </PageTextGroup>

    <IllustObject type="graph" />

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton>자동차 시세조회</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>
