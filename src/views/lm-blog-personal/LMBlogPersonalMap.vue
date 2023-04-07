<script>
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    PageContents,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
  },

  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      // optional : 헤더 구성 변경
      store.ui.header.setTitle(() => '찾아오시는 길');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
    });

    onUnmounted(() => {
      // optional : 헤더 구성 설정 값 리셋
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <h3 class="text-title-2">하나캐피탈 본점</h3>

    <KeyValueList
      margin="regular"
      :classNames="{
        wrap: 'row-margin-contents',
      }"
    >
      <KeyValueItem>
        <KeyValueTitle>주소</KeyValueTitle>
        <KeyValueText>
          서울 강남구 선릉로 704 5층<br />
          (청담동, 청담빌딩)
        </KeyValueText>
      </KeyValueItem>

      <KeyValueItem>
        <KeyValueTitle>연락처</KeyValueTitle>
        <KeyValueText>1800-1111</KeyValueText>
      </KeyValueItem>
    </KeyValueList>

    <div :class="$style['map-area']">//지도 영역</div>
  </PageContents>
</template>
<style lang="scss" module>
@import '@/assets/scss/views/lm-blog-personal/LMBlogPersonalMap.scss';
</style>
