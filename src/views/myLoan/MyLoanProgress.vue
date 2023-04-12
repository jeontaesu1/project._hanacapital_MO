<script>
// My_M03_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import FilterTab from '@/components/ui/tab/FilterTab.vue';
import FilterTabButton from '@/components/ui/tab/FilterTabButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';

export default {
  components: {
    PageContents,
    FilterTab,
    FilterTabButton,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    RoundStatus,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '진행상태조회');
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
    <FilterTab>
      <FilterTabButton tagName="button" type="button" :active="true"
        >전체 21</FilterTabButton
      >
      <FilterTabButton tagName="button" type="button"
        >개인금융 1
      </FilterTabButton>
      <FilterTabButton tagName="button" type="button"
        >오토금융 20
      </FilterTabButton>
    </FilterTab>

    <BasicBox>
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  개인금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small">
            e하나신용대출
          </h3>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }">
            신규
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      // contnets
    </BasicBox>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/MyLoanProgress.scss';
</style>
