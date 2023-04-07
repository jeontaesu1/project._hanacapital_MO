<script>
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import HanaLogo from '@/assets/images/bank-logo/hana.svg?component';
import IconArrow from '@/assets/images/icon/link.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    IllustObject,
    TextButton,

    HanaLogo,
    IconArrow,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => ' ');
      store.ui.header.setLeftButtons(() => []);
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
    <HanaLogo class="display-block row-margin-item" />

    <PageTextGroup>
      <PageMainText>
        하나캐피탈과 함께<br />
        <strong>든든하고 행복한 금융</strong>
      </PageMainText>
    </PageTextGroup>

    <IllustObject
      type="certification"
      :classNames="{ wrap: $style['illust'] }"
    />

    <template v-slot:foot>
      <ButtonList
        align="full"
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :line="true">신용카드로 시작하기</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton>휴대폰 인증으로 시작하기</BasicButton>
        </ButtonListItem>
      </ButtonList>

      <div class="inline-wrap align-center row-margin-item-group">
        <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
          모바일 웹 가기
          <template v-slot:rightIcon>
            <IconArrow />
          </template>
        </TextButton>
      </div>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/sign/SignUpApp.scss';
</style>
