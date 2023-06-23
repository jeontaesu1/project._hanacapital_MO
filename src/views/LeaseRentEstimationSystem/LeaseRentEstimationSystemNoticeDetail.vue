<script>
// LR_M05_p003
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconPin from '@/assets/images/common/pin.svg?component';
import IconPinOn from '@/assets/images/common/pin_on.svg?component';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IconPin,
    IconPinOn,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '공지사항(즉시출고)');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
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
      <div
        :class="[
          $style['board-detail__head'],
          $style['board-detail__head--flex'],
        ]"
      >
        <div :class="$style['board-detail__head-block']">
          <h2 :class="$style['board-detail__title']">첨부파일</h2>
          <div :class="$style['board-detail__sub']">
            <div :class="$style['board-detail__sub-list']">
              <div :class="$style['board-detail__sub-item']">2021.03.16</div>
              <div :class="$style['board-detail__sub-item']">조회 18</div>
            </div>
          </div>
        </div>
        <!-- Case : 일반 게시물일 경우 -->
        <div :class="$style['board-detail__head-icon']">
          <IconPin />
        </div>
        <!-- //Case : 일반 게시물일 경우 -->
        <!-- Case : 중요 지정된 게시물일 경우 -->
        <div :class="$style['board-detail__head-icon']">
          <IconPinOn />
        </div>
        <!-- //Case : 중요 지정된 게시물일 경우 -->
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
