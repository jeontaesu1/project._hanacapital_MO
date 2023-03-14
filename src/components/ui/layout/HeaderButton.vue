<script>
import { computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

import IconBack from '@/assets/images/common/header-back.svg?component';
import IconPush from '@/assets/images/common/header-alarm.svg?component';
import IconMenu from '@/assets/images/common/header-menu.svg?component';
import IconSearch from '@/assets/images/common/header-search.svg?component';
import IconShare from '@/assets/images/common/header-share.svg?component';
import IconClose from '@/assets/images/common/header-close.svg?component';

export default {
  inject: ['$style'],
  props: {
    type: {
      type: String,
      default: 'menu',
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  components: {
    RouterLink,
    IconBack,
    IconPush,
    IconMenu,
    IconSearch,
    IconShare,
    IconClose,
  },
  setup() {
    const router = useRouter();

    const pushNotice = computed(() => {
      return true;
    });

    return {
      router,
      pushNotice,
    };
  },
};
</script>

<template>
  <button
    v-if="type === 'back'"
    type="button"
    :class="$style['header__button']"
    @click="router.go(-1)"
  >
    <IconBack :class="$style['header__button-icon']" />
    <span :class="$style['header__button-text']">뒤로가기</span>
  </button>

  <RouterLink
    v-if="type === 'push'"
    to=""
    :class="[
      $style['header__button'],
      {
        [$style['header__button--notice']]: pushNotice,
      },
    ]"
  >
    <IconPush :class="$style['header__button-icon']" />
    <span :class="$style['header__button-text']">
      알림{{ pushNotice ? ' (신규 알림 있음)' : '' }}
    </span>
  </RouterLink>

  <RouterLink v-if="type === 'menu'" to="" :class="$style['header__button']">
    <IconMenu :class="$style['header__button-icon']" />
    <span :class="$style['header__button-text']">메뉴</span>
  </RouterLink>

  <RouterLink v-if="type === 'search'" to="" :class="$style['header__button']">
    <IconSearch :class="$style['header__button-icon']" />
    <span :class="$style['header__button-text']">검색</span>
  </RouterLink>

  <button
    v-if="type === 'share'"
    type="button"
    :class="$style['header__button']"
    @click="onClick"
  >
    <IconShare :class="$style['header__button-icon']" />
    <span :class="$style['header__button-text']">공유하기</span>
  </button>

  <button
    v-if="type === 'close'"
    type="button"
    :class="$style['header__button']"
    @click="onClick"
  >
    <IconClose :class="$style['header__button-icon']" />
    <span :class="$style['header__button-text']">닫기</span>
  </button>
</template>
