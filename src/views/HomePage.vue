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

    const layerTest001 = ref(null);
    const layerTest002 = ref(null);
    const layerTest003 = ref(null);
    const layerTest004 = ref(null);

    const layerOpenTest001 = (e = {}) => {
      layerTest001.value.open(e.target);
    };
    const layerOpenTest002 = (e = {}) => {
      layerTest002.value.open(e.target);
    };
    const layerOpenTest003 = (e = {}) => {
      layerTest003.value.open(e.target);
    };
    const layerOpenTest004 = (e = {}) => {
      layerTest004.value.open(e.target);
    };

    onMounted(() => {
      store.ui.common.setRootClassName('page-home');
    });

    onUnmounted(() => {
      store.ui.common.setRootClassName();
    });

    return {
      layerTest001,
      layerTest002,
      layerTest003,
      layerTest004,
      layerOpenTest001,
      layerOpenTest002,
      layerOpenTest003,
      layerOpenTest004,
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

    <UiLayer ref="layerTest001" v-slot="slotProps">
      <h2>test001</h2>
      // contents
      <button type="button" @click="slotProps.close()">close</button>
      <BasicButton @click="layerOpenTest002">
        테스트 002 레이어 열기
      </BasicButton>
    </UiLayer>

    <UiLayer ref="layerTest002" v-slot="slotProps">
      <h2>test002</h2>
      // contents
      <button type="button" @click="slotProps.close()">close</button>
      <BasicButton @click="layerOpenTest003">
        테스트 003 레이어 열기
      </BasicButton>
    </UiLayer>

    <UiLayer ref="layerTest003" v-slot="slotProps">
      <h2>test003</h2>
      // contents
      <button type="button" @click="slotProps.close()">close</button>
      <BasicButton @click="layerOpenTest004">
        테스트 004 레이어 열기
      </BasicButton>
    </UiLayer>

    <UiLayer ref="layerTest004" v-slot="slotProps">
      <h2>test004</h2>
      // contents
      <button type="button" @click="slotProps.close()">close</button>
    </UiLayer>

    <BasicButton @click="layerOpenTest001">
      테스트 001 레이어 열기
    </BasicButton>
    <BasicButton @click="layerOpenTest002">
      테스트 002 레이어 열기
    </BasicButton>
    <BasicButton @click="layerOpenTest003">
      테스트 003 레이어 열기
    </BasicButton>
    <BasicButton @click="layerOpenTest004">
      테스트 004 레이어 열기
    </BasicButton>

    <template v-slot:foot>contents foot</template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/HomePage.scss';
</style>
