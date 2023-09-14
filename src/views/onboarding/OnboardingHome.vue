<script>
// Common_M00_p010
import { ref, reactive, onMounted } from 'vue';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
  setup() {
    const state = reactive({
      paginationEl: null,
    });

    const pagination = ref(null);

    onMounted(() => {
      state.paginationEl = pagination.value;
    });

    return {
      state,
      pagination,
      modules: [Pagination, A11y],
    };
  },
};
</script>

<template>
  <div :class="$style['slide']">
    <Swiper
      v-if="state.paginationEl"
      :modules="modules"
      :pagination="{
        el: state.paginationEl,
      }"
    >
      <SwiperSlide>
        <section :class="$style['slide__block']">
          <div :class="$style['slide__head']">
            <h3 :class="$style['slide__title']">
              한 눈에 보는<br />
              계약관리
            </h3>
            <p :class="$style['slide__text']">
              보유하고 있는 계약을 한 눈에 확인할 수 있어요.
            </p>
          </div>
          <div :class="$style['slide__image']">
            <img src="@/assets/images/contents/onboarding-001.png" alt="" />
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section :class="$style['slide__block']">
          <div :class="$style['slide__head']">
            <h3 :class="$style['slide__title']">
              간편한<br />
              한도조회
            </h3>
            <p :class="$style['slide__text']">
              쉽고 간편하게 대출가능한도를 조회해보세요.
            </p>
          </div>
          <div :class="$style['slide__image']">
            <img src="@/assets/images/contents/onboarding-002.png" alt="" />
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section :class="$style['slide__block']">
          <div :class="$style['slide__head']">
            <h3 :class="$style['slide__title']">
              증명서/증빙서류<br />
              발급
            </h3>
            <p :class="$style['slide__text']">
              앱을 통해 상품의 증명서를 발급받을 수 있어요.
            </p>
          </div>
          <div :class="$style['slide__image']">
            <img src="@/assets/images/contents/onboarding-003.png" alt="" />
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section :class="$style['slide__block']">
          <div :class="$style['slide__head']">
            <h3 :class="$style['slide__title']">
              다양한 혜택(멤버십/이벤트)과<br />
              콘텐츠(FUN) 제공
            </h3>
            <p :class="$style['slide__text']">다양한 혜택을 즐길 수 있어요</p>
          </div>
          <div :class="$style['slide__image']">
            <img src="@/assets/images/contents/onboarding-004.png" alt="" />
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  </div>

  <div :class="$style['foot']">
    <div ref="pagination" :class="$style['pagination']"></div>
    <div :class="$style['foot__buttons']">
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton> 시작하기 </BasicButton>
        </ButtonListItem>
      </ButtonList>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/onboarding/OnboardingHome.scss';
</style>
