<script>
// LR_M05_p002
import { onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';

import IconArrow from '@/assets/images/icon/dropdown.svg?component';

export default {
  components: {
    RouterLink,
    PageContents,
    ButtonList,
    ButtonListItem,
    BasicButton,
    InputBlock,
    InputBlockCell,
    BasicSelect,
    BasicInput,
    BasicHr,
    TextButton,
    SearchButton,
    IconArrow,
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
    <div>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-contents',
        }"
      >
        <ButtonListItem>
          <BasicButton
            :line="true"
            theme="quaternary"
            tagName="RouterLink"
            to="/lease-rent-estimation-system/notice-edit"
            >글쓰기</BasicButton
          >
        </ButtonListItem>
      </ButtonList>

      <InputBlock>
        <InputBlockCell>
          <BasicSelect
            :option="[
              {
                value: '1',
                text: '제목',
              },
              {
                value: '2',
                text: '내용',
              },
            ]"
            buttonTitle="검색 조건 선택하기"
            layerTitle="검색 조건을 선택해 주세요"
            :classNames="{
              wrap: 'input-width-category',
            }"
            defaultValue="1"
          />
        </InputBlockCell>
        <InputBlockCell :flexible="true">
          <BasicInput
            type="search"
            title="검색어 입력"
            placeholder="검색어 입력"
          />
        </InputBlockCell>
        <InputBlockCell type="search">
          <SearchButton />
        </InputBlockCell>
      </InputBlock>
    </div>

    <BasicHr className="row-margin-container-medium" />

    <div class="contents-wrap">
      <div class="row-margin-contents">
        <p class="text-body-4 font-weight-light color-gray-secondary">
          <strong class="font-weight-medium color-green">999</strong> 건
        </p>
        <BasicHr
          theme="quaternary"
          type="contents"
          className="row-margin-item-medium"
        />
      </div>

      <!-- Case : 검색 결과 없을 때 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
      </div>
      <!-- // Case : 검색 결과 없을 때 -->

      <!-- Case : 결과 있을 때 -->
      <div :class="$style['board']">
        <ul :class="$style['board__list']">
          <!-- Case : 중요 지정된 게시물 -->
          <li :class="[$style['board__item'], $style['board__item--mark']]">
            <RouterLink
              to="/lease-rent-estimation-system/notice-detail"
              :class="$style['board__link']"
            >
              <span :class="$style['board__title']">
                <span :class="$style['board__title-text']">
                  중요 지정된 게시물
                </span>
              </span>
              <span :class="$style['board__info']">
                <span :class="$style['board__info-item']">2021.03.16</span>
                <span
                  :class="[
                    $style['board__info-item'],
                    $style['board__info-item--hits'],
                  ]"
                  >조회 18</span
                >
              </span>
            </RouterLink>
          </li>
          <!-- // Case : 중요 지정된 게시물 -->

          <!-- Case : 노출 중지된 게시물 - 관리자 권한 없는 계정은 미노출 -->
          <li :class="[$style['board__item'], $style['board__item--hidden']]">
            <RouterLink
              to="/lease-rent-estimation-system/notice-detail"
              :class="$style['board__link']"
            >
              <span :class="$style['board__title']">
                <span :class="$style['board__title-text']">
                  [노출 중지됨] 테스트2
                </span>
              </span>
              <span :class="$style['board__info']">
                <span :class="$style['board__info-item']">2021.03.16</span>
                <span
                  :class="[
                    $style['board__info-item'],
                    $style['board__info-item--hits'],
                  ]"
                  >조회 18</span
                >
              </span>
            </RouterLink>
          </li>
          <!-- // Case : 노출 중지된 게시물 - 관리자 권한 없는 계정은 미노출 -->

          <li v-for="i in 3" :key="i" :class="$style['board__item']">
            <RouterLink
              to="/lease-rent-estimation-system/notice-detail"
              :class="$style['board__link']"
            >
              <span :class="$style['board__title']">
                <span :class="$style['board__title-text']">
                  첨부파일 테스트
                </span>
              </span>
              <span :class="$style['board__info']">
                <span :class="$style['board__info-item']">2021.03.16</span>
                <span
                  :class="[
                    $style['board__info-item'],
                    $style['board__info-item--hits'],
                  ]"
                  >조회 18</span
                >
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>
      <!-- // Case : 결과 있을 때 -->

      <div class="inline-wrap align-center row-margin-contents">
        <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
          더보기
          <template v-slot:rightIcon>
            <IconArrow />
          </template>
        </TextButton>
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemNoticeList.scss';
</style>
