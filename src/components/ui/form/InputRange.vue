<script>
import slider from 'vue3-slider';

export default {
  data() {
    return {
      myNumber: 30,
    };
  },
  components: {
    'vue3-slider': slider,
  },
};
</script>

<template>
  <div :class="[$style['input-range']]">
    <vue3-slider
      v-model="myNumber"
      color="#2E82F3"
      track-color="#EAEAEA"
      tooltip
      tooltipColor="#001E4D"
      tooltipTextColor="#fff"
      alwaysShowTooltip
      alwaysShowHandle
      :min="10"
      :height="6"
      :max="80"
      :step="1"
    />
    <div :class="[$style['input-range__text']]">
      <div :class="[$style['input-range__text__min']]">20%</div>
      <div :class="[$style['input-range__text__max']]">80%</div>
    </div>
  </div>
  <!-- 
    사용한 플러그인 정보
    https://www.npmjs.com/package/vue3-slider#how-to-use
    https://jsfiddle.net/0Lp1bqyv/
    https://github.com/vueform/slider#basic-props
    https://freddie-nelson.github.io/vue3-slider/
    https://github.com/freddie-nelson/vue3-slider/blob/main/dev/serve.vue
    -->
</template>

<style lang="scss" module>
@import '@/assets/scss/components/ui/form/InputRange.scss';
</style>
