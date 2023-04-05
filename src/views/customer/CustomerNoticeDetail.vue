<script>
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
  setup() {
    const state = reactive({
      nameError: false,
      searchError: false,
      idNumberError: false,
      phoneError: false,
      codeError: false,
    });

    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '공지사항');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <div :class="$style['board-detail']">
      <div :class="$style['board-detail__head']">
        <div :class="$style['board-detail__title']">
          전화권유 상담원 현황전화권유 상담원 현황전화권유 상담원 현황
        </div>
        <div :class="$style['board-detail__sub']">2022.10.25</div>
      </div>
      <div :class="$style['board-detail__contents']">//게시물 내용 노출</div>
    </div>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :line="true" theme="quaternary"> 목록 </BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>
<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerNoticeDetail.scss';
</style>
