<script>
// Main_M05_l002
import { ref } from 'vue';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBanner from '@/components/ui/banner/BasicBanner.vue';
import VideoIframe from '@/components/ui/viewer/VideoIframe.vue';

const BASE_URL = import.meta.env.BASE_URL;

export default {
  components: {
    Swiper,
    SwiperSlide,
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBanner,
    VideoIframe,
  },
  setup() {
    const layer = ref(null);

    const dummyLength = 3;

    return {
      BASE_URL,
      modules: [Pagination, A11y],
      layer,
      dummyLength,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <template v-slot:right>
            <PopupButton type="subscript" />
            <PopupButton type="subscript" :active="true" />
            <PopupButton type="share" />
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div :class="$style['board-detail']">
        <div :class="$style['board-detail__head']">
          <h2 :class="$style['board-detail__category']">원큐자동차상식</h2>
          <h3 :class="$style['board-detail__title']">2022년 2분기 IR 자료</h3>
          <h4 :class="$style['board-detail__text']">
            하나캐피탈과 함께 알아봐요!
          </h4>
          <p :class="$style['board-detail__sub']">2022.08.09</p>
        </div>

        <!-- Case : 동영상 타입 - 다이렉트로 들어 갈 경우 -->
        <div :class="$style['video-data']">
          <VideoIframe url="https://www.youtube.com/embed/fCA0drCpF8Q" />
        </div>
        <!-- // Case : 동영상 타입 - 다이렉트로 들어 갈 경우 -->

        <!-- Case : 동영상 타입 - 링크로 들어 갈 경우 -->
        <div :class="$style['video-data']">
          <img
            src="https://i.ytimg.com/vi/fCA0drCpF8Q/maxresdefault.jpg"
            alt=""
            :class="$style['video-data__thumb']"
          />
          <a
            href="https://www.youtube.com/watch?v=fCA0drCpF8Q"
            target="_blank"
            :class="$style['video-data__link']"
          >
            <span class="for-a11y">동영상 보러가기</span>
          </a>
        </div>
        <!-- // Case : 동영상 타입 - 링크로 들어 갈 경우 -->

        <!-- Case : 이미지 타입 -->
        <div
          :class="[
            $style['image-data'],
            {
              [$style['image-data--once']]: dummyLength <= 1,
            },
          ]"
        >
          <Swiper :modules="modules" pagination :autoHeight="true">
            <SwiperSlide v-for="i in dummyLength" :key="i">
              <div :class="$style['image-view']">
                <img
                  :src="`${BASE_URL}images/_dummy/box-detail-002.png`"
                  alt="이미지 설명 넣어주세요"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <!-- // Case : 이미지 타입 -->

        <section :class="$style['board-detail__contents']">
          //게시물 내용 노출
        </section>

        <!-- DD : 관리자 등록 배너 -->
        <div class="row-margin-contents">
          <!-- Case : 링크 기능 없을 때 -->
          <BasicBanner
            thumb="/images/_dummy/banner-money-up.png"
            :action="false"
          >
            <p class="text-body-4 color-gray row-margin-mini ellipsis">
              링크 기능 없을 때 Case 최대 한줄 노출
            </p>
            <h3 class="text-body-1 font-weight-medium ellipsis">
              타이틀 최대 한줄 노출 타이틀 최대 한줄 노출
            </h3>
          </BasicBanner>
          <!-- // Case : 링크 기능 없을 때 -->

          <!-- Case : 링크 기능 있을 때 (RouterLink) -->
          <BasicBanner
            thumb="/images/_dummy/banner-money-up.png"
            tagName="RouterLink"
            to=""
          >
            <p class="text-body-4 color-gray row-margin-mini ellipsis">
              링크 기능 있을 때 (RouterLink) Case 최대 한줄 노출
            </p>
            <h3 class="text-body-1 font-weight-medium ellipsis">
              타이틀 최대 한줄 노출 타이틀 최대 한줄 노출
            </h3>
          </BasicBanner>
          <!-- // Case : 링크 기능 있을 때 -->

          <!-- Case : 링크 기능 있을 때 (a tag) -->
          <BasicBanner
            thumb="/images/_dummy/banner-money-up.png"
            tagName="a"
            href=""
          >
            <p class="text-body-4 color-gray row-margin-mini ellipsis">
              링크 기능 있을 때 (a tag) Case 최대 한줄 노출
            </p>
            <h3 class="text-body-1 font-weight-medium ellipsis">
              타이틀 최대 한줄 노출 타이틀 최대 한줄 노출
            </h3>
          </BasicBanner>
          <!-- // Case : 링크 기능 있을 때 (a tag) -->
        </div>
        <!-- // DD : 관리자 등록 배너 -->
      </div>

      <template v-slot:foot>
        <!-- Case : 링크 콘텐츠일 경우 -->
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton
              tagName="a"
              href="https://www.hanacapital.co.kr/"
              target="_blank"
              >보러가기</BasicButton
            >
          </ButtonListItem>
        </ButtonList>
        <!-- //Case : 링크 콘텐츠일 경우 -->
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/LayerMainFunDetail.scss';
</style>
