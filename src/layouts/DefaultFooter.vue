<template>
  <footer :class="$style['footer']">
    <h2 :class="$style['logo']">Footer</h2>
  </footer>
</template>

<style lang="scss" module>
.footer {
  padding: 30px;
  background-color: #e1e1e1;
}
.logo {
  margin: 0;
  text-align: center;
  @include font-size-set(20);
}
</style>
