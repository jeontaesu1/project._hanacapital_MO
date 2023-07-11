<script>
// 할부금융 견적서
import CarThumb from '@/components/ui/imageData/CarThumb.vue';

export default {
  components: {
    CarThumb,
  },
};
</script>

<template>
  <div :class="$style['document-layout']">
    <!-- Page 1 : 상품선택 1개, 연락처 숨김 -->
    <div :class="$style['document']">
      <!-- head -->
      <div :class="$style['est-head']">
        <div :class="$style['est-head__left']">
          <div :class="$style['est-head__logo']"></div>
          <p :class="$style['est-head__text']">■ VIP 고객님 귀중</p>
          <p :class="$style['est-head__text']">작성일 : 2023-06-08</p>
        </div>
        <div :class="$style['est-head__center']">
          <h1 :class="$style['est-head__title']">할부금융 견적서</h1>
        </div>
        <div :class="$style['est-head__right']"></div>
      </div>
      <!-- // head -->

      <CarThumb size="large" src="/images/_dummy/car-thumb.png" />
    </div>
    <!-- // Page 1 : 상품선택 1개, 연락처 숨김 -->

    <!-- Page 1 : 상품선택 2개, 연락처 표시 -->
    <div :class="$style['document']">
      <!-- head -->
      <div :class="$style['est-head']">
        <div :class="$style['est-head__left']">
          <div :class="$style['est-head__logo']"></div>
          <p :class="$style['est-head__text']">■ VIP 고객님 귀중</p>
          <p :class="$style['est-head__text']">작성일 : 2023-06-08</p>
        </div>
        <div :class="$style['est-head__center']">
          <h1 :class="$style['est-head__title']">할부금융 견적서</h1>
        </div>
        <div :class="$style['est-head__right']">
          <section :class="$style['est-name-card']">
            <h2 :class="$style['est-name-card__title']">유평우</h2>
            <dl :class="$style['est-name-card__list']">
              <div :class="$style['est-name-card__item']">
                <dt :class="$style['est-name-card__key']">소속</dt>
                <dd :class="$style['est-name-card__val']">유평우</dd>
              </div>
              <div :class="$style['est-name-card__item']">
                <dt :class="$style['est-name-card__key']">전화</dt>
                <dd :class="$style['est-name-card__val']">010-3899-5999</dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
      <!-- // head -->

      <CarThumb size="large" src="/images/_dummy/car-thumb.png" />
    </div>
    <!-- // Page 1 : 상품선택 2개, 연락처 표시 -->

    <!-- Page 1 : 상품선택 3개, 연락처 표시 -->
    <div :class="$style['document']">
      <!-- head -->
      <div :class="$style['est-head']">
        <div :class="$style['est-head__left']">
          <div :class="$style['est-head__logo']"></div>
          <p :class="$style['est-head__text']">■ VIP 고객님 귀중</p>
          <p :class="$style['est-head__text']">작성일 : 2023-06-08</p>
        </div>
        <div :class="$style['est-head__center']">
          <h1 :class="$style['est-head__title']">할부금융 견적서</h1>
        </div>
        <div :class="$style['est-head__right']">
          <section :class="$style['est-name-card']">
            <h2 :class="$style['est-name-card__title']">유평우</h2>
            <dl :class="$style['est-name-card__list']">
              <div :class="$style['est-name-card__item']">
                <dt :class="$style['est-name-card__key']">소속</dt>
                <dd :class="$style['est-name-card__val']">유평우</dd>
              </div>
              <div :class="$style['est-name-card__item']">
                <dt :class="$style['est-name-card__key']">전화</dt>
                <dd :class="$style['est-name-card__val']">010-3899-5999</dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
      <!-- // head -->

      <CarThumb size="large" src="/images/_dummy/car-thumb.png" />
    </div>
    <!-- // Page 1 : 상품선택 3개, 연락처 표시 -->

    <!-- Page 2 -->
    <div :class="$style['document']">// contents</div>
    <!-- // Page 2 -->
  </div>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/document/DocumentEstimate004Contents.scss';
</style>
