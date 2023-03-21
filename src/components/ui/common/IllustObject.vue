<script>
import { computed } from 'vue';

import IllustOneQCapital from '@/assets/images/illustration/img-1qcapital.svg?component';
import IllustComplete from '@/assets/images/illustration/img-complete.svg?component';
import IllustError from '@/assets/images/illustration/img-error.svg?component';
import IllustLicense from '@/assets/images/illustration/img-license.svg?component';
import IllustCertification from '@/assets/images/illustration/img-certification.svg?component';
import IllustAppfree from '@/assets/images/illustration/img-appfree.svg?component';

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
      complete: IllustComplete,
      error: IllustError,
      license: IllustLicense,
      certification: IllustCertification,
      appfree: IllustAppfree,
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
