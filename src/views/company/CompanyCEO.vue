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
        하나캐피탈을 사랑하고 성원해주시는 손님 여러분!<br />
        안녕하십니까? 대표이사 박승오입니다.
      </p>
      <p class="row-margin-item-group">
        하나금융그룹의 하나캐피탈은 ‘함께 성장하며 행복을 나누는 금융이라는
        그룹의 미션과 같이 모두의 행복 가치를 높이기 위해 손님이 필요로 하는
        금융서비스를 제공하고자 끊임없이 노력해왔습니다.
      </p>
      <p class="row-margin-item-group">
        모든 임직원이 도덕성과 책임감을 바탕으로 손님과 함께 성장하며 행복을
        나누는 금융을 실현하기 위해 윤리경영을 적극적으로 실천하고 있습니다.
      </p>
      <p class="row-margin-item-group">
        손님의 행복을 최우선으로 생각하며, 하나캐피탈은 손님이 원하는 금융으로
        다가가 손님과 함께 성장하는 파트너가 되고자 오늘도 한걸음 더 뛰겠습니다.
      </p>
      <p class="row-margin-item-group">감사합니다.</p>
    </div>

    <div class="row-margin-contents align-right">
      <p class="color-gray text-body-3 font-weight-light">
        하나캐피탈 ㈜ 대표이사
      </p>
      <p class="text-body-3 row-margin-small font-weight-medium">박승오</p>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/CompanyCEO.scss';
</style>
