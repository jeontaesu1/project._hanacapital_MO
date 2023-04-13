<script>
// My_M01_p008 등록 전
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import iconImportant from '@/assets/images/icon/important.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageSubText,
    PageMainText,
    IllustObject,
    BasicButton,
    ButtonList,
    ButtonListItem,
    TextButton,
    iconImportant,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '지정운전자');
      store.ui.header.setLeftButtons(() => []);
      store.ui.header.setRightButtons(() => ['close']);
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
        지정운전자를<br />
        <strong>등록해 주세요</strong>
      </PageMainText>
      <PageSubText>
        기본 운전자 외 2인에 한하여 <br />
        추가로 지정 가능합니다.
      </PageSubText>
    </PageTextGroup>

    <IllustObject type="license" />

    <div class="inline-wrap align-right row-margin-item">
      <TextButton theme="quaternary">
        지정운전자 등록안내 및 유의사항
        <template v-slot:rightIcon>
          <iconImportant />
        </template>
      </TextButton>
    </div>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton>지정운전자 등록</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>
