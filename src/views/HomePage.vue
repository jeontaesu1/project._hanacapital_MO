<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useUiCommonStore } from '@/stores/ui/common';

import PageContents from '@/components/ui/common/PageContents.vue';
import BasicButton from '@/components/ui/common/BasicButton.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';

export default {
  components: {
    RouterLink,
    PageContents,
    BasicButton,
    UiLayer,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
      },
    };

    const layerTest = ref(null);

    onMounted(() => {
      store.ui.common.setRootClassName('page-home');
    });

    onUnmounted(() => {
      store.ui.common.setRootClassName();
    });

    const layerOpen = (opener, speed) => {
      // console.log(layerTest, opener, speed);
      layerTest.value.open(opener, speed);
    };

    const layerClose = (speed) => {
      // console.log(layerTest, speed);
      layerTest.value.close(speed);
    };

    return {
      layerTest,
      layerOpen,
      layerClose,
    };
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>contents head</template>

    <h1>Home Page</h1>

    <RouterLink to="a">A 페이지</RouterLink>
    <RouterLink to="b">B 페이지</RouterLink>
    <RouterLink to="c">C 페이지</RouterLink>
    <RouterLink to="test">Test 페이지</RouterLink>

    <UiLayer ref="layerTest">
      // contents
      <button type="button" @click="layerClose()">close</button>
    </UiLayer>

    <BasicButton @click="layerOpen()"> 테스트 레이어 열기 </BasicButton>

    <template v-slot:foot>contents foot</template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/HomePage.scss';
</style>
