import { defineStore } from 'pinia';

export const useUiLayoutStore = defineStore('uiLayout', {
  state: () => ({
    useFooter: true,
    useHeader: true,
  }),
  actions: {
    setUseFooter(val = true) {
      this.useFooter = val;
    },
    setUseHeader(val = true) {
      this.useHeader = val;
    },
  },
});
