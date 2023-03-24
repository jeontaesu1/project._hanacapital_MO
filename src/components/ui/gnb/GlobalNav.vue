<script>
import { RouterLink } from 'vue-router';

export default {
  components: {
    RouterLink,
  },
  setup() {
    //
  },
};
</script>

<template>
  <div :class="$style['gnb']">
    <ul>
      <li>
        <RouterLink to="/home">/home</RouterLink>
      </li>
      <li>
        <RouterLink to="/sign/signin">sign/signin</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/gnb/GlobalNav.scss';
</style>
