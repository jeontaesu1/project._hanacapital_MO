<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useUiStore } from '@/stores/ui/ui';

import BasicButton from '@/components/ui/BasicButton.vue';

import IconAdd from '@/assets/images/icon/add.svg?component';

const store = {
  ui: useUiStore(),
};

onMounted(() => {
  store.ui.setRootClassName('page-home');
});

onUnmounted(() => {
  store.ui.setRootClassName(null);
});
</script>

<template>
  <h1>Home Page</h1>

  <BasicButton>
    <template v-slot:leftIcon>
      <IconAdd />
    </template>
  </BasicButton>
  <BasicButton>Button</BasicButton>
  <BasicButton disabled>Button</BasicButton>
  <BasicButton tag="a">
    <template v-slot:leftIcon>
      <IconAdd />
    </template>
    Button
  </BasicButton>
  <BasicButton tag="a" disabledStyle="true">
    Button
    <template v-slot:rightIcon>
      <IconAdd />
    </template>
  </BasicButton>
  <BasicButton theme="secondary">Button</BasicButton>
  <BasicButton theme="secondary" disabled>Button</BasicButton>
  <BasicButton theme="tertiary">Button</BasicButton>
  <BasicButton theme="tertiary" disabled>Button</BasicButton>
  <BasicButton theme="quaternary">
    <template v-slot:leftIcon>
      <IconAdd />
    </template>
    Button
  </BasicButton>
  <BasicButton theme="quaternary" disabled>
    Button
    <template v-slot:rightIcon>
      <IconAdd />
    </template>
  </BasicButton>

  <BasicButton size="small">
    <template v-slot:leftIcon>
      <IconAdd />
    </template>
  </BasicButton>
  <BasicButton size="small">Button</BasicButton>
  <BasicButton size="small" disabled>Button</BasicButton>
  <BasicButton tag="a" size="small">
    <template v-slot:leftIcon>
      <IconAdd />
    </template>
    Button
  </BasicButton>
  <BasicButton tag="a" size="small" disabledStyle="true">
    Button
    <template v-slot:rightIcon>
      <IconAdd />
    </template>
  </BasicButton>
  <BasicButton size="small" theme="secondary">Button</BasicButton>
  <BasicButton size="small" theme="secondary" disabled>Button</BasicButton>
  <BasicButton size="small" theme="tertiary">Button</BasicButton>
  <BasicButton size="small" theme="tertiary" disabled>Button</BasicButton>
  <BasicButton size="small" theme="quaternary">
    <template v-slot:leftIcon>
      <IconAdd />
    </template>
    Button
  </BasicButton>
  <BasicButton size="small" theme="quaternary" disabled>
    Button
    <template v-slot:rightIcon>
      <IconAdd />
    </template>
  </BasicButton>

  <BasicButton size="mini">
    <template v-slot:leftIcon>
      <IconAdd />
    </template>
  </BasicButton>
  <BasicButton size="mini">Button</BasicButton>
  <BasicButton size="mini" disabled>Button</BasicButton>
  <BasicButton tag="a" size="mini">
    <template v-slot:leftIcon>
      <IconAdd />
    </template>
    Button
  </BasicButton>
  <BasicButton tag="a" size="mini" disabledStyle="true">
    Button
    <template v-slot:rightIcon>
      <IconAdd />
    </template>
  </BasicButton>
  <BasicButton size="mini" theme="secondary">Button</BasicButton>
  <BasicButton size="mini" theme="secondary" disabled>Button</BasicButton>
  <BasicButton size="mini" theme="tertiary">Button</BasicButton>
  <BasicButton size="mini" theme="tertiary" disabled>Button</BasicButton>
  <BasicButton size="mini" theme="quaternary">
    <template v-slot:leftIcon>
      <IconAdd />
    </template>
    Button
  </BasicButton>
  <BasicButton size="mini" theme="quaternary" disabled>
    Button
    <template v-slot:rightIcon>
      <IconAdd />
    </template>
  </BasicButton>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/HomePage.scss';
</style>
