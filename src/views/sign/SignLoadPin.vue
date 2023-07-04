<script>
// Member_M07_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    PageContents,
    ButtonList,
    ButtonListItem,
    BasicButton,
    IllustInfo,
    IllustObject,
    IllustInfoTitle,
    IllustInfoText,
    TextButton,
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
    <IllustInfo>
      <IllustObject type="error" />
      <IllustInfoTitle>
        하나캐피탈 앱을<br />
        <strong>이용한 이력이 있습니다</strong>
      </IllustInfoTitle>
      <IllustInfoText>
        계속 서비스를 이용하시려면<br />
        재인증 절차를 수행해주세요.
      </IllustInfoText>
    </IllustInfo>

    <template v-slot:foot>
      <div class="inline-wrap align-center row-margin-contents">
        <TextButton
          :classNames="{ wrap: 'text-body-4 color-gray' }"
          :underline="true"
        >
          기존 인증을 사용할 수 없으세요?
        </TextButton>
      </div>

      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton>간편비밀번호 인증하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>
