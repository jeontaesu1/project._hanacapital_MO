import { defineStore } from 'pinia';

export const useUiLayoutStore = defineStore('uiLayout', {
  state: () => ({
    useFooter: true,
  }),
  actions: {
    setUseFooter(val = true) {
      this.useFooter = val;
    },
  },
});
