<script>
// Main_M07_p005
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconTimer from '@/assets/images/icon/timer.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    IllustObject,
    BottomSticky,
    BasicButton,
    ButtonList,
    ButtonListItem,

    IconTimer,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      productsSlider: null,
      productsAccordionAnimate: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '하나뿐인 내 차 찾기');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['newShare']);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <PageTextGroup>
      <PageMainText style="text-align: center">
        <span style="font-weight: 300">김하나님에게 가장 어울리는 차량은?</span
        ><br />
        나만의 차량 찾기 테스트
      </PageMainText>
    </PageTextGroup>

    <div class="contents-wrap">
      <IllustObject variant="medium" type="car" />
      <div class="contents-text">
        <IconTimer />
        <p>소요시간 약 3분</p>
      </div>
    </div>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>테스트 시작</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/Main_M09_p001.scss';
</style>

<style lang="scss" scoped>
.contents-text {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  p {
    margin: 0;
    color: #757575;
    font-size: 12px;
  }
}
</style>
