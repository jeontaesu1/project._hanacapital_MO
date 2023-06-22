import { defineStore } from 'pinia';

export const useUiStickyStore = defineStore('uiSticky', {
  state: () => ({
    items: [],
    count: 1,
  }),
  actions: {
    add(height = 0) {
      const key = this.count;

      this.items.push({
        key,
        height,
      });

      this.count++;

      return key;
    },
    remove(key) {
      const i = this.items.findIndex((item) => item.key === key);

      this.items.splice(i, 1);
    },
    update(key, height = 0) {
      const i = this.items.findIndex((item) => item.key === key);

      if (this.items[i].height !== height) {
        this.items[i].height = height;
      }
    },
  },
});
