<script>
import { useHead } from '@vueuse/head';

export default {
  setup() {
    useHead({
      meta: [
        {
          name: 'viewport',
          content: '',
        },
      ],
    });
  },
};
</script>

<template>
  <slot />
</template>
