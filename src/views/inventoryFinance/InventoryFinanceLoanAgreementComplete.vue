<script>
// IF_M02_p008
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    IllustObject,
    BasicBox,
    RoundStatus,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BottomSticky,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '재고금융 대출신청');
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
    <PageTextGroup>
      <PageMainText>
        <span class="color-green font-weight-regular"
          >주식회사알차이노베이션</span
        >님<br />
        2건 중 1건 온라인약정이<br />
        완료되었습니다
      </PageMainText>
      <PageSubText>
        접수하신 내역을 확인하여<br />
        빠른 시일 내에 답변 드리겠습니다.
      </PageSubText>
    </PageTextGroup>

    <IllustObject type="complete" />

    <ul class="reset-list">
      <li class="row-margin-item-group">
        <BasicBox>
          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              <h3 class="text-body-1 font-weight-medium">재고금융 20노1511</h3>
              <p class="text-body-4 color-gray row-margin-small">
                수입/BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
              </p>
            </div>
            <div class="flex-box__cell">
              <RoundStatus
                theme="secondary"
                :classNames="{ wrap: 'display-block' }"
                >성공</RoundStatus
              >
            </div>
          </div>
        </BasicBox>
      </li>

      <li class="row-margin-item-group">
        <BasicBox>
          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              <h3 class="text-body-1 font-weight-medium">재고금융Ⅱ 20노1511</h3>
              <p class="text-body-4 color-gray row-margin-small">
                수입/BMW 5시리즈(7세대) 520d M스포츠 패키지 플러스 2021
              </p>
            </div>
            <div class="flex-box__cell">
              <RoundStatus
                theme="nonary"
                :classNames="{ wrap: 'display-block' }"
                >실패</RoundStatus
              >
            </div>
          </div>
        </BasicBox>
      </li>
    </ul>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary">
                추가약정하기
              </BasicButton>
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton>확인</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>
