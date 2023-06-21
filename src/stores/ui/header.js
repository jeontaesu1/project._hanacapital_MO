import { defineStore } from 'pinia';

export const useUiHeaderStore = defineStore('uiHeader', {
  state: () => ({
    title: null,
    leftButtons: null,
    rightButtons: null,
    height: 0,
    useAppButton: false,
    theme: null,
  }),
  actions: {
    setTitle(title = () => null) {
      this.title = title();
    },
    setLeftButtons(buttons = () => null) {
      this.leftButtons = buttons();
    },
    setRightButtons(buttons = () => null) {
      this.rightButtons = buttons();
    },
    setHeight(height = 0) {
      this.height = height;
    },
    setUseAppButton(useAppButton = () => false) {
      this.useAppButton = useAppButton();
    },
    setTheme(theme = () => null) {
      this.theme = theme();
    },
  },
});
