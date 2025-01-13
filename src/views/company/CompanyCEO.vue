<script>
// Company_M08_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';

export default {
  components: {
    PageContents,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => 'CEO 인사말');
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
    <div :class="[$style['image-view'], 'row-margin-contents-group']">
      <img src="@/assets/images/contents/img-ceo.png" alt="" />
    </div>

    <div class="text-body-4 font-weight-light">
      <p class="row-margin-item-group">
        존경하는 하나캐피탈 손님 여러분,<br />
        안녕하십니까? 대표이사 김용석입니다.
      </p>
      <p class="row-margin-item-group">
        하나캐피탈은 하나금융그룹의 미션인<br />
        ‘함께 성장하며 행복을 나누는 금융’을 실천하며,<br />
        손님 여러분께 필요한 금융서비스를 제공하기 위해<br />
        끊임없이 노력하고 있습니다
      </p>
      <p class="row-margin-item-group">
        저희 임직원들은 도덕성과 책임감을 바탕으로,<br />
        손님과 함께 성장하며 행복을 만들어가는 금융을 이루기 위해 윤리경영을
        실천하고 있습니다.
      </p>
      <p class="row-margin-item-group">
        손님의 행복을 최우선으로 삼는 하나캐피탈은 항상<br />
        손님의 곁에서 믿음직한 금융 파트너로 함께 걸어가겠습니다. 오늘도 한 걸음
        더 나아가는 마음으로 최선을 다하겠습니다.
      </p>
      <p class="row-margin-item-group">감사합니다.</p>
    </div>

    <div class="row-margin-contents align-right">
      <p class="color-gray text-body-3 font-weight-light">
        하나캐피탈 ㈜ 대표이사
      </p>
      <p class="text-body-3 row-margin-small font-weight-medium">김용석</p>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/CompanyCEO.scss';
</style>
