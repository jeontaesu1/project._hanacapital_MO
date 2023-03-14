<script>
import { onMounted, onUnmounted } from 'vue';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import IconAdd from '@/assets/images/icon/add.svg?component';

export default {
  components: {
    PageContents,
    BasicButton,
    IconAdd,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => 'Components');
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <h1>Components</h1>

    <section>
      <h2>BasicButton</h2>

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

      <BasicButton line="true">
        <template v-slot:leftIcon>
          <IconAdd />
        </template>
      </BasicButton>
      <BasicButton line="true">Button</BasicButton>
      <BasicButton line="true" disabled>Button</BasicButton>
      <BasicButton tag="a" line="true">
        <template v-slot:leftIcon>
          <IconAdd />
        </template>
        Button
      </BasicButton>
      <BasicButton tag="a" line="true" disabledStyle="true">
        Button
        <template v-slot:rightIcon>
          <IconAdd />
        </template>
      </BasicButton>
      <BasicButton line="true" theme="secondary">
        Button
        <template v-slot:rightIcon>
          <IconAdd />
        </template>
      </BasicButton>
      <BasicButton line="true" theme="secondary" disabled>
        Button
        <template v-slot:rightIcon>
          <IconAdd />
        </template>
      </BasicButton>
      <BasicButton line="true" theme="tertiary">
        Button
        <template v-slot:rightIcon>
          <IconAdd />
        </template>
      </BasicButton>
      <BasicButton line="true" theme="tertiary" disabled>
        Button
        <template v-slot:rightIcon>
          <IconAdd />
        </template>
      </BasicButton>
      <BasicButton line="true" theme="quaternary">
        <template v-slot:leftIcon>
          <IconAdd />
        </template>
        Button
      </BasicButton>
      <BasicButton line="true" theme="quaternary" disabled>
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

      <BasicButton inline="true">
        <template v-slot:leftIcon>
          <IconAdd />
        </template>
      </BasicButton>
      <BasicButton inline="true">Button</BasicButton>
      <BasicButton inline="true" disabled>Button</BasicButton>
      <BasicButton tag="a" inline="true">
        <template v-slot:leftIcon>
          <IconAdd />
        </template>
        Button
      </BasicButton>
      <BasicButton tag="a" inline="true" disabledStyle="true">
        Button
        <template v-slot:rightIcon>
          <IconAdd />
        </template>
      </BasicButton>
      <BasicButton inline="true" theme="secondary">
        Button
        <template v-slot:rightIcon>
          <IconAdd />
        </template>
      </BasicButton>
      <BasicButton inline="true" theme="secondary" disabled>
        Button
        <template v-slot:rightIcon>
          <IconAdd />
        </template>
      </BasicButton>
      <BasicButton inline="true" theme="tertiary">
        Button
        <template v-slot:rightIcon>
          <IconAdd />
        </template>
      </BasicButton>
      <BasicButton inline="true" theme="tertiary" disabled>
        Button
        <template v-slot:rightIcon>
          <IconAdd />
        </template>
      </BasicButton>
      <BasicButton inline="true" theme="quaternary">
        <template v-slot:leftIcon>
          <IconAdd />
        </template>
        Button
      </BasicButton>
      <BasicButton inline="true" theme="quaternary" disabled>
        Button
        <template v-slot:rightIcon>
          <IconAdd />
        </template>
      </BasicButton>
    </section>

    <section>
      <h2>Input</h2>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/GuideComponent.scss';
</style>
