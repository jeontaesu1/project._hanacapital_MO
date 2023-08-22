import { defineStore } from 'pinia';

const eKeypadOpened = new Event('keypadOpened');
const eKeypadClosed = new Event('keypadClosed');
const eKeypadOpenedLegacy = new Event('legacyAndroidKeypadOpened');
const eKeypadClosedLegacy = new Event('legacyAndroidKeypadClosed');

export const useUiCommonStore = defineStore('uiCommon', {
  state: () => ({
    isAPP: false,
    userAgent: {
      isIos: null,
      isAndroid: null,
      androidVersion: null,
    },
    rootClassName: null,
    scrollbarsWidth: 0,
    vWidth: 0,
    vHeight: 0,
    winWidth: 0,
    winHeight: 0,
    keypadOpened: false,
    keypadOpenedLegacy: false,
  }),

  actions: {
    setApp(val = false) {
      this.isAPP = val;
    },

    setUserAgent() {
      const userAgent = navigator.userAgent;
      const isIos = Boolean(userAgent.match(/iPod|iPhone|iPad/));
      const isAndroid = Boolean(userAgent.match(/Android/));

      this.userAgent.isIos = isIos;
      this.userAgent.isAndroid = isAndroid;
      this.userAgent.androidVersion = (() => {
        if (isAndroid) {
          try {
            const match = userAgent.match(/Android (\d+(?:\.\d+){0,2})/);
            return match[1];
          } catch (e) {
            console.log(e);
          }
        }
      })();
    },

    setRootClassName(className = null) {
      const html = document.getElementsByTagName('html')[0];
      const { rootClassName } = this;

      if (html) {
        if (typeof rootClassName === 'string') {
          html.classList.remove(rootClassName);
        }
        if (typeof className === 'string') {
          html.classList.add(className);
        }
      }

      this.rootClassName = className;
    },

    setScrollbarsWidth() {
      const html = document.getElementsByTagName('html')[0];
      const head = document.getElementsByTagName('head')[0];
      const wrap = document.getElementById('app');
      const oldStyle = document.getElementById('uiScrollbarsWidthStyle');
      const style = document.createElement('style');

      if (html && wrap) {
        html.style.overflow = 'hidden';

        const beforeW = wrap.offsetWidth;

        html.style.overflow = 'scroll';

        const afterW = wrap.offsetWidth;

        html.style.overflow = '';

        this.scrollbarsWidth = beforeW - afterW;
      }

      if (head) {
        style.appendChild(
          document.createTextNode(`
          html.is-scroll-blocking #app {
            margin-right: ${this.scrollbarsWidth}px;
          }
        `)
        );
        style.id = 'uiScrollbarsWidthStyle';

        if (oldStyle) {
          oldStyle.replaceWith(style);
        } else {
          head.appendChild(style);
        }
      }
    },

    keypadCheckOn() {
      const { isIos, isAndroid } = this.userAgent;

      if (!isIos && !isAndroid) return;

      const resize = () => {
        const vWidth = window.visualViewport.width;
        const vHeight = window.visualViewport.height;
        const gapHeight = vHeight - this.vHeight;

        if (this.vWidth === vWidth) {
          if (gapHeight < -150 && !this.keypadOpened) {
            this.keypadOpened = true;
            window.dispatchEvent(eKeypadOpened);
          } else if (gapHeight > 150 && this.keypadOpened) {
            this.keypadOpened = false;
            window.dispatchEvent(eKeypadClosed);
          }
        }

        this.vWidth = vWidth;
        this.vHeight = vHeight;
      };

      this.vWidth = window.visualViewport.width;
      this.vHeight = window.visualViewport.height;

      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', resize);
        window.visualViewport.addEventListener('resize', resize);
      }
    },

    keypadCheckOnLegacy() {
      const { isAndroid } = this.userAgent;

      if (!isAndroid) return;

      const resize = () => {
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;
        const gapHeight = winHeight - this.winHeight;

        if (this.winWidth === winWidth) {
          if (gapHeight < -150 && !this.keypadOpenedLegacy) {
            this.keypadOpenedLegacy = true;
            window.dispatchEvent(eKeypadOpenedLegacy);
          } else if (gapHeight > 150 && this.keypadOpenedLegacy) {
            this.keypadOpenedLegacy = false;
            window.dispatchEvent(eKeypadClosedLegacy);
          }
        }

        this.winWidth = winWidth;
        this.winHeight = winHeight;
      };

      this.winWidth = window.innerWidth;
      this.winHeight = window.innerHeight;

      window.removeEventListener('resize', resize);
      window.addEventListener('resize', resize);
    },

    isKeypadClass() {
      const { isIos, isAndroid } = this.userAgent;

      if (!isIos && !isAndroid) return;

      const html = document.getElementsByTagName('html')[0];

      const opened = () => {
        if (!html.classList.contains('is-native-keypad-opened')) {
          html.classList.add('is-native-keypad-opened');
        }
      };
      const closed = () => {
        if (html.classList.contains('is-native-keypad-opened')) {
          html.classList.remove('is-native-keypad-opened');
        }
      };

      window.removeEventListener('keypadOpened', opened);
      window.addEventListener('keypadOpened', opened);

      window.removeEventListener('keypadClosed', closed);
      window.addEventListener('keypadClosed', closed);
    },
  },
});
