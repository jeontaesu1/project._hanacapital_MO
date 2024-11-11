<script>
// Customer_DS_M01
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import TopButton from '@/components/ui/button/TopButton.vue';
import BasicBanner from '@/components/ui/banner/BasicBanner.vue';

import IconCall from '@/assets/images/icon/call.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,

    BasicBanner,
    TopButton,

    IconCall,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '채무조정 요청 안내');
      /*store.ui.header.setLeftButtons(() => ['back']);*/
      store.ui.header.setRightButtons(() => [
        {
          name: 'menu',
          onClick: () => {},
        },
      ]);
      store.ui.header.setTheme(() => 'secondary');
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
      store.ui.header.setTheme();
    });
  },
};
</script>

<template>
  <PageContents>
    <div :class="$style['bg']">
      <PageTextGroup>
        <PageMainText>
          <span class="color-green">대출 연체 시</span> 금융 회사에<br />
          직접 채무 조정을 요청해보세요
        </PageMainText>
      </PageTextGroup>

      <div :class="[$style['illustration-img'], 'row-margin-contents']">
        <img src="@/assets/images/contents/img-dept-adjustment.png" alt="" />
      </div>

      <ButtonList>
        <ButtonListItem>
          <BasicButton :line="true" theme="greenary">자세히보기</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton>신청하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </div>

    <div class="row-margin-contents-group">
      <section>
        <ul
          :class="[
            $style['logs'],
            $style['logs--margin-regular'],
            $style['logs__row'],
          ]"
        >
          <li class="logs__item2">
            <div
              :class="[
                $style['logs__block'],
                $style['logs__block--secondary'],
                $style['logs__block--regular'],
              ]"
            >
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <span class="text-body-4 color-gray">채무조정요청권</span>
                  <h3
                    class="text-body-1 font-weight-medium row-margin-item-small"
                  >
                    공지사항
                  </h3>
                </div>
                <div :class="[$style['logs__right'], 'custom-link']">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li class="logs__item2">
            <div
              :class="[
                $style['logs__block'],
                $style['logs__block--secondary'],
                $style['logs__block--regular'],
              ]"
            >
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <span class="text-body-4 color-gray">채무조정요청권</span>
                  <h3
                    class="text-body-1 font-weight-medium row-margin-item-small"
                  >
                    FAQ
                  </h3>
                </div>
                <div :class="$style['logs__right']">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div
          class="row-margin-container-medium row-margin-bottom-none custom-banner"
        >
          <BasicBanner @click="() => {}" bgColor="#e1faf9">
            <p class="text-body-3 color-black row-margin-mini">
              <b>종합 채무 상담</b>이 필요하신가요?
            </p>
            <h3 class="text-body-4 font-weight-light">
              신용회복위원회 : 1600-5500
            </h3>
            <IconCall />
          </BasicBanner>
        </div>
        <div class="row-margin-contents custom-banner">
          <BasicBanner @click="() => {}" bgColor="#E4EFFF">
            <p class="text-body-3 color-black row-margin-mini">
              <b>개인회생/파산 상담</b>이 필요하신가요?
            </p>
            <h3 class="text-body-4 font-weight-light">
              대한법률구조공단 : 132
            </h3>
            <IconCall />
          </BasicBanner>
        </div>
      </section>
    </div>

    <div :class="$style['top-button-wrap']">
      <TopButton />
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AutoLease.scss';
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>

<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideComponent.scss';
</style>

<style lang="scss" scoped>
.logs {
  &__item2 {
    position: relative;
    flex: 1;
    & + & {
      margin-left: 8px;
    }
  }
}

.custom-banner {
  .basic-banner {
    padding: 20px;
  }
}
</style>
