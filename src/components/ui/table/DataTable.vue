<script>
// import { computed, useCssModule, provide } from 'vue';

export default {
  name: 'DataTable',
  props: {
    headers: {}, // 생략
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    itemKey() {
      return this.headers.map((header) => header.value);
    },
  },
};
</script>

<template>
  <div class="data-table__scroll">
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.text">
            {{ header.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td v-for="key in itemKey" :key="key + index">
            {{ item[key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" module>
// @import '@/assets/scss/components/ui/text/KeyValue.scss';
</style>
