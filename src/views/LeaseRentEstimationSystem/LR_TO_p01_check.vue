<script>
// AF_M44_p001
import { onMounted, onUnmounted } from 'vue';
import { useUiHeaderStore } from '@/stores/ui/header';

import IllustObject from '@/components/ui/common/IllustObject.vue';
import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    IllustObject,
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => ' ');
      store.ui.header.setUseLeftLogo(() => true);
      store.ui.header.setRightButtons(() => ' ');
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setUseLeftLogo();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <PageTextGroup>
      <PageMainText>
        상품 실행을 위해 본인인증 후<br />
        인수확인을 완료해 주세요
      </PageMainText>
    </PageTextGroup>

    <IllustObject type="license" />

    <div>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-item-medium',
        }"
      >
        <ButtonListItem>
          <BasicButton>본인인증</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </div>
  </PageContents>
</template>

<style lang="scss" module></style>
