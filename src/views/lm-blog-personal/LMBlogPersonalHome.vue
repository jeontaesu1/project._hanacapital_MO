<script>
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

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

    const router = useRouter();

    onMounted(() => {
      store.ui.header.setLeftButtons(() => []);
      store.ui.header.setRightButtons(() => [
        {
          name: 'menuButton',
          onClick: () => router.push('/lm-blog-personal/menu'),
        },
      ]);
    });

    onUnmounted(() => {
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <h1>Page</h1>
  </PageContents>
</template>
