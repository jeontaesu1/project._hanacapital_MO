<script>
// LR_M05_p003
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PinButton from '@/components/ui/button/PinButton.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PinButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      pin: false,
    });

    const togglePin = () => {
      state.pin = !state.pin;
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '공지사항(즉시출고)');
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
      togglePin,
    };
  },
};
</script>

<template>
  <PageContents>
    <div :class="$style['board-detail']">
      <div
        :class="[
          $style['board-detail__head'],
          $style['board-detail__head--flex'],
        ]"
      >
        <div class="flex-box row-margin-item">
          <div class="flex-box__cell flex-1">
            <h2 :class="[$style['board-detail__title'], 'row-margin-none']">
              첨부파일
            </h2>
          </div>
          <div class="flex-box__cell">
            <PinButton :active="state.pin" @click="togglePin" />
          </div>
        </div>
        <div :class="$style['board-detail__sub']">
          <div :class="$style['board-detail__sub-list']">
            <div :class="$style['board-detail__sub-item']">2021.03.16</div>
            <div :class="$style['board-detail__sub-item']">조회 18</div>
          </div>
        </div>
      </div>

      <section :class="$style['board-detail__contents']">
        //게시물 내용 노출
      </section>

      <div :class="[$style['file-list'], 'row-margin-contents-small']">
        <ul :class="$style['file-list__list']">
          <li :class="$style['file-list__item']">
            <a href="/foo/bar.pdf" :class="$style['file-list__head']" download>
              <span :class="$style['file-list__sub']">[파일]</span>
              <span :class="$style['file-list__name']"
                >2020년형_avante-price-20210331.jpg</span
              >
            </a>
            <div :class="$style['file-list__img']">
              <img src="/images/_dummy/box-detail.png" alt="" />
            </div>
          </li>
          <li :class="$style['file-list__item']">
            <a href="/foo/bar.pdf" :class="$style['file-list__head']" download>
              <span :class="$style['file-list__sub']">[파일]</span>
              <span :class="$style['file-list__name']"
                >2020년형_avante-price-20210331.pdf</span
              >
            </a>
          </li>
          <li :class="$style['file-list__item']">
            <a href="/foo/bar.pdf" :class="$style['file-list__head']" download>
              <span :class="$style['file-list__sub']">[파일]</span>
              <span :class="$style['file-list__name']"
                >2020년형_avante-price-20210331.jpg</span
              >
            </a>
            <div :class="$style['file-list__img']">
              <img src="/images/_dummy/box-detail.png" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :line="true" theme="quaternary">수정</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton
            :line="true"
            theme="quaternary"
            tagName="RouterLink"
            to="/lease-rent-estimation-system/notice-list"
          >
            목록
          </BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemNoticeDetail.scss';
</style>
