<script>
// PlatformLoan001(이미지 있는.ver)
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BottomSticky,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };
    onMounted(() => {
      store.ui.header.setTitle(() => ' ');
      store.ui.header.setLeftButtons(() => [' ']);
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
  <PageContents
    :classNames="{
      body: $style['page-body'],
    }"
  >
    <PageTextGroup>
      <div :class="([$style['illustration-img']], 'logo-main')">
        <img
          src="@/assets/images/illustration/logo_main.png"
          alt="하나캐피탈"
          style="width: 108px; height: 24px"
        />
      </div>
      <PageMainText>
        {플랫폼명}에서 오신 손님<br />
        환영합니다
      </PageMainText>
    </PageTextGroup>

    <div :class="$style['illustration-img']">
      <img src="@/assets/images/illustration/img-area.png" alt="" />
    </div>

    <div :class="$style['contents-list']">
      <ol
        :class="[
          $style['contents-list__list'],
          $style['contents-list__list--senary'],
        ]"
      >
        <li :class="$style['contents-list__item']">
          <div :class="$style['contents-list__head']">
            <div :class="$style['contents-list__symbol']">1</div>
            <div :class="$style['contents-list__title']">
              신용상태가 변동되거나 소득정보가 확인되면<br />
              대출한도와 금리가 변동될 수 있어요.
            </div>
          </div>
        </li>
        <li :class="$style['contents-list__item']">
          <div :class="$style['contents-list__head']">
            <div :class="$style['contents-list__symbol']">2</div>
            <div :class="$style['contents-list__title']">
              원활한 대출 진행을 위해
              <span class="color-green">신분증</span>을 준비해주세요.
            </div>
          </div>
        </li>
        <li :class="$style['contents-list__item']">
          <div :class="$style['contents-list__head']">
            <div :class="$style['contents-list__symbol']">3</div>
            <div :class="$style['contents-list__title']">
              대출이 승인되면 즉시 대출금을 고객님 계좌로<br />
              송금해드려요.
            </div>
          </div>
          <div :class="[$style['contents-list__depth-4'], 'row-margin-mini']">
            <p class="text-body-4 font-weight-light color-gray-tertiary">
              (송금가능시간 02:30 ~ 11:30)
            </p>
          </div>
        </li>
      </ol>
    </div>
    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>대출 신청하기</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/MainMyLoanEmpty.scss';
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>
<!-- S: 240409 수정 -->
<style lang="scss" scoped>
.logo-main {
  margin-bottom: 42px;
}
</style>
<!-- E: 240409 수정 -->
