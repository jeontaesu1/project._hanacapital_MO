<script>
// Common_M00_p010
import { ref, onMounted, onUnmounted } from 'vue';

import BasicButton from '@/components/ui/button/BasicButton.vue';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

export default {
  components: {
    BasicButton,
  },
  setup() {
    const layer = ref(null);
    const swiperContainer = ref(null);
    const paginationContainer = ref(null);
    let swiper = null;
    const itemsVal = (val) => {
      return val.replace(/\n/g, '<br>');
    };

    onMounted(() => {
      swiper = new Swiper(swiperContainer.value, {
        pagination: {
          el: paginationContainer.value,
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
      });
    });
    onUnmounted(() => {
      if (swiper) {
        swiper.destroy();
        swiper = null;
      }
    });
    return {
      layer,
      swiperContainer,
      paginationContainer,
      itemsVal,
    };
  },
  data() {
    return {
      items: [
        {
          image: '/src/assets/images/contents/guide-001.png',
          alt: '이미지',
          title: '한 눈에 보는\n계약관리',
          text: '보유하고 있는 계약을 한 눈에 확인할 수 있어요.',
        },
        {
          image: '/src/assets/images/contents/guide-002.png',
          alt: '이미지',
          title: '간편한\n한도조회',
          text: '쉽고 간편하게 대출가능한도를 조회해보세요.',
        },
        {
          image: '/src/assets/images/contents/guide-003.png',
          alt: '이미지',
          title: '증명서/증빙서류\n발급',
          text: '앱을 통해 상품의 증명서를 발급받을 수 있어요.',
        },
        {
          image: '/src/assets/images/contents/guide-004.png',
          alt: '이미지',
          title: '다양한 혜택(멤버십/이벤트)과\n콘텐츠(FUN) 제공',
          text: '다양한 혜택을 즐길 수 있어요',
        },
      ],
    };
  },
};
</script>

<template>
  <div :class="$style['onboarding__contents']">
    <div ref="swiperContainer" class="swiper swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in items" :key="index">
          <div :class="$style['onboarding__body']">
            <h3
              :class="$style['onboarding__title']"
              v-html="itemsVal(item.title)"
            ></h3>
            <p :class="$style['onboarding__text']">{{ item.text }}</p>
            <div :class="$style['onboarding__image']">
              <img :src="item.image" :alt="item.alt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div :class="$style['onboarding__footer']">
    <div
      ref="paginationContainer"
      :class="[$style['pagination'], 'swiper-pagination']"
    ></div>
    <div :class="$style['onboarding__button']">
      <BasicButton>시작하기</BasicButton>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onboarding/OnboardingHome.scss';
</style>
