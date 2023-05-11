<script>
// Company_M08_p008
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconDownload from '@/assets/images/icon/download.svg?component';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IconDownload,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '지속가능경영');
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
      <div :class="$style['board-detail__head']">
        <h2 :class="$style['board-detail__title']">ESG채권 투자자 안내문</h2>
        <p :class="$style['board-detail__sub']">2022.08.09</p>
      </div>
      <section :class="$style['board-detail__contents']">
        //게시물 내용 노출
      </section>
      <div :class="$style['board-detail__foot']">
        <ul class="reset-list">
          <li class="row-margin-item-group">
            <div :class="$style['download']">
              <div :class="$style['download__block']">
                <p class="text-body-4 font-weight-medium">
                  하나캐피탈 ESG채권 투자자 안내문.pdf
                </p>
              </div>
              <a href="" :class="$style['download__button']" download>
                <IconDownload />
                <span class="for-a11y">다운로드</span>
              </a>
            </div>
          </li>
          <li class="row-margin-item-group">
            <div :class="$style['download']">
              <div :class="[$style['download__block'], 'text-body-4']">
                <p class="text-body-4 font-weight-medium">
                  하나캐피탈 ESG채권 투자자 안내문.pdf
                </p>
              </div>
              <a href="" :class="$style['download__button']" download>
                <IconDownload />
                <span class="for-a11y">다운로드</span>
              </a>
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
@import '@/assets/scss/views/company/CompanySustainableManagementDetail.scss';
</style>
