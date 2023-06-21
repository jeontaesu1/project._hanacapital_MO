import { defineStore } from 'pinia';

export const useUiDockBarStore = defineStore('uiDockBar', {
  state: () => ({
    active: null,
  }),
  actions: {
    setActive(active = () => null) {
      this.active = active();
    },
  },
});
