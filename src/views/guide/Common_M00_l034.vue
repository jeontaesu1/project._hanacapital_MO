<script>
// Common_M00_l034

import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconLogo from '@/assets/images/icon/logo-main.svg?component';

export default {
  components: {
    UiLayer,
    IllustObject,
    BasicHr,
    IconLogo,
  },
  setup() {
    const layer = ref(null);

    return {
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer">
    <section :class="$style['wait']">
      <IconLogo :class="$style['wait__logo']" />

      <IllustObject
        type="waiting"
        :classNames="{ wrap: $style['wait__illust'] }"
      />

      <dl :class="$style['wait__count']">
        <dt :class="$style['wait__count-key']">대기인원</dt>
        <dd :class="$style['wait__count-val']">
          <strong :class="$style['wait__count-num']">222</strong>
          <span :class="$style['wait__count-unit']">명</span>
        </dd>
      </dl>

      <BasicHr
        theme="quaternary"
        type="contents"
        className="row-margin-contents"
      />

      <h2 :class="$style['wait__title']">
        서비스 접속 <span class="color-green">대기중</span> 입니다
      </h2>

      <p :class="$style['wait__text']">
        잠시만 기다리시면<br />
        서비스로 자동 접속됩니다.
      </p>
    </section>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/guide/Common_M00_l034.scss';
</style>
