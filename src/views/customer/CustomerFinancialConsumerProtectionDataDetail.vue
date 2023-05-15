<script>
// Customer_M09_p012
import { onMounted, onUnmounted } from 'vue';

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
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '금융소비자보호자료');
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
    <div :class="$style['board-detail']">
      <div :class="$style['board-detail__head']">
        <h2 :class="$style['board-detail__title']">
          사업자담보대출 [금융소비자보호자료]
        </h2>
        <p :class="$style['board-detail__sub']">2022.10.25</p>
      </div>
      <section :class="$style['board-detail__contents']">
        //게시물 내용 노출
      </section>
    </div>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton
            :line="true"
            theme="quaternary"
            tagName="RouterLink"
            to="/customer/financial-consumer-protection-data"
          >
            목록
          </BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerFinancialConsumerProtectionDataDetail.scss';
</style>
