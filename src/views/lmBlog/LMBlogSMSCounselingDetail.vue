<script>
// LM_M03_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconTell from '@/assets/images/icon/tell.svg?component';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IconTell,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => 'SMS 상담요청 상세');
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
        <div class="flex-box align-items-start">
          <div class="flex-box__cell flex-1">
            <h2 :class="[$style['board-detail__title'], 'text-body-1']">
              홍길동
            </h2>
            <p :class="$style['board-detail__sub']">2022-07-05</p>
          </div>
          <div class="flex-box__cell">
            <BasicButton tagName="a" size="mini" href="tel:010-1234-5678">
              <template v-slot:leftIcon>
                <IconTell />
              </template>
              010-1234-5678
            </BasicButton>
          </div>
        </div>
      </div>
      <section :class="$style['board-detail__contents']">
        //Text (메모 내용 표시)
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
            to="/lm-blog/sms-counseling"
          >
            목록
          </BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lm-blog/LMBlogSMSCounselingDetail.scss';
</style>
