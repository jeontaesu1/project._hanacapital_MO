<script>
// Customer_M02_p003
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

export default {
  components: {
    PageContents,
    IllustObject,
    IllustInfo,
    IllustInfoTitle,
    IllustInfoText,
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
      store.ui.header.setTitle(() => '고객상담');
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
    <IllustInfo>
      <IllustObject type="complete" />
      <!-- s: 250325 수정 -->
      <IllustInfoTitle>
        상담등록이<br />
        <strong>완료되었습니다</strong>
      </IllustInfoTitle>
      <IllustInfoText>
        <span class="color-gray"
          >상담시 본인 확인을 위해 전화연결이 필요합니다.</span
        ><br />
        <span class="color-green">하나캐피탈</span> 수신 차단 여부를 확인해
        주세요.<br /><br />
        <span class="color-gray"
          >빠른 시일 내에 답변드리겠습니다.<br />
          (상담가능시간 : 평일 09-18시)</span
        >
      </IllustInfoText>
      <!-- e:// 250325 수정 -->
    </IllustInfo>

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
