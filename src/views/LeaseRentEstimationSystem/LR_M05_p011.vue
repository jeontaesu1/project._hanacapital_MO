<script>
// LR_M05_p011
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '자동차 DB 전송');
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
      <PageMainText>
        <strong>날짜별로 전송 이력을</strong><br />
        보실 수 있습니다
      </PageMainText>
    </PageTextGroup>

    <div>
      <section v-for="i in 8" :key="i" class="row-margin-contents">
        <h3 class="text-body-3 font-weight-regular">2022.11.10</h3>

        <ButtonList :classNames="{ wrap: 'row-margin-item' }">
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary" size="mini">
              데이터 보기
            </BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary" size="mini">
              로그 보기
            </BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary" size="mini">
              재전송하기
            </BasicButton>
          </ButtonListItem>
        </ButtonList>
      </section>
    </div>
  </PageContents>
</template>
