<script>
import { computed } from 'vue';

import IllustOneQCapital from '@/assets/images/illustration/img-1qcapital.svg?component';
import IllustLicense from '@/assets/images/illustration/img-license.svg?component';

const defaultClassNames = () => ({
  wrap: '',
});

export default {
  props: {
    classNames: {
      Type: Object,
      default() {
        return defaultClassNames();
      },
    },
    type: {
      Type: String,
      default: 'oneQCapital',
    },
  },
  setup(props) {
    const illust = {
      oneQCapital: IllustOneQCapital,
      license: IllustLicense,
    };

    const customClassNames = computed(() => {
      const { classNames } = props;
      return Object.assign(defaultClassNames(), classNames);
    });

    const setComponent = computed(() => {
      const { type } = props;
      return illust[type];
    });

    return {
      customClassNames,
      setComponent,
    };
  },
};
</script>

<template>
  <div :class="[$style['illust-object'], customClassNames.wrap]">
    <component :is="setComponent" />
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/common/IllustObject.scss';
</style>
