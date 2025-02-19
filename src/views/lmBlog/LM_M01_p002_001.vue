<script>
// LM_M01_p002_001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
// import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
// import PageSubText from '@/components/ui/text/PageSubText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    PageContents,
    // PopupButton,
    PageTextGroup,
    // PageSubText,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    IllustObject,
    BottomSticky,
    BasicHr,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NoticeText,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '중고할부·론');
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
    <PageTextGroup>
      <PageMainText>
        한도ㆍ금리를<br />
        확인하세요
      </PageMainText>
      <!-- <PageSubText></PageSubText> -->
    </PageTextGroup>

    <IllustObject type="complete" />

    <section>
      <ul :class="$style['logs']">
        <li :class="$style['logs__item']">
          <div :class="$style['logs__block']">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 class="text-body-1 font-weight-medium">
                  하나모기지론(주택담보대출)
                </h3>
              </div>
            </div>

            <BasicHr
              type="contents"
              theme="quaternary"
              className="row-margin-contents-small"
            />

            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>대출한도</KeyValueTitle>
                <KeyValueText>2억원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>금리</KeyValueTitle>
                <KeyValueText>6.5%</KeyValueText>
              </KeyValueItem>

              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>신청대출기간</KeyValueTitle>
                <KeyValueText>30년</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </div>
        </li>
      </ul>
    </section>

    <section class="row-margin-item-regular">
      <NoticeText
        >해당 대출 조건은 소득 및 신청한도에 따라 변경될 수
        있습니다.</NoticeText
      >
    </section>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>확인</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideComponent.scss';
</style>

<style lang="scss" module>
@import '@/assets/scss/views/lmBlog/LM_M01_p002_001.scss';
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>
