<script>
import { computed, inject } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

import IconBack from '@/assets/images/common/back-left.svg?component';
import IconPush from '@/assets/images/common/alarm.svg?component';
import IconMenu from '@/assets/images/common/menu.svg?component';
import IconSearch from '@/assets/images/common/search.svg?component';
import IconShare from '@/assets/images/common/share.svg?component';
import IconClose from '@/assets/images/common/close.svg?component';

export default {
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
    const styleModule = inject('styleModule');

    const router = useRouter();

    const pushNotice = computed(() => {
      return true;
    });

    return {
      styleModule,
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
    :class="styleModule['header__button']"
    @click="router.go(-1)"
  >
    <IconBack :class="styleModule['header__button-icon']" />
    <span :class="styleModule['header__button-text']">뒤로가기</span>
  </button>

  <RouterLink
    v-if="type === 'push'"
    to=""
    :class="[
      styleModule['header__button'],
      {
        [styleModule['header__button--notice']]: pushNotice,
      },
    ]"
  >
    <IconPush :class="styleModule['header__button-icon']" />
    <span :class="styleModule['header__button-text']">
      알림{{ pushNotice ? ' (신규 알림 있음)' : '' }}
    </span>
  </RouterLink>

  <RouterLink
    v-if="type === 'menu'"
    to=""
    :class="styleModule['header__button']"
  >
    <IconMenu :class="styleModule['header__button-icon']" />
    <span :class="styleModule['header__button-text']">메뉴</span>
  </RouterLink>

  <RouterLink
    v-if="type === 'search'"
    to=""
    :class="styleModule['header__button']"
  >
    <IconSearch :class="styleModule['header__button-icon']" />
    <span :class="styleModule['header__button-text']">검색</span>
  </RouterLink>

  <button
    v-if="type === 'share'"
    type="button"
    :class="styleModule['header__button']"
    @click="onClick"
  >
    <IconShare :class="styleModule['header__button-icon']" />
    <span :class="styleModule['header__button-text']">공유하기</span>
  </button>

  <button
    v-if="type === 'close'"
    type="button"
    :class="styleModule['header__button']"
    @click="onClick"
  >
    <IconClose :class="styleModule['header__button-icon']" />
    <span :class="styleModule['header__button-text']">닫기</span>
  </button>
</template>
