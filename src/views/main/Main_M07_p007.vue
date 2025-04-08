<script>
// Main_M07_p007
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicBanner from '@/components/ui/banner/BasicBanner.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    IllustObject,
    BottomSticky,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicHr,
    BasicBanner,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    RoundStatus,
    CarThumb,
    CarEmblem,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      productsSlider: null,
      productsAccordionAnimate: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '테스트 결과');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['']);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <PageTextGroup>
      <PageMainText style="text-align: center">
        <span style="font-weight: 300"
          ><em id="name" style="font-style: normal">김하나</em>님에게 가장
          어울리는 자동차<br
        /></span>
        <strong style="font-size: 36px; font-weight: 700">어드벤처-카</strong
        ><br />
        <span class="color-green" style="font-size: 21px"
          >어드벤처 오프로더</span
        >
      </PageMainText>
    </PageTextGroup>

    <div class="contents-wrap">
      <!-- <IllustObject type="adventrue" /> -->
      <IllustObject variant="medium" type="adventure" />
      <div class="contents-text">
        <p>
          험한 길도 문제없다!<br />
          어디든 떠날 준비가 되어 있는 탐험가
        </p>
      </div>
    </div>

    <BasicHr theme="senary" className="row-margin-contents" />

    <div>
      <h3>취향 분포도</h3>
      <IllustObject variant="large" type="adventureCar" />
    </div>

    <BasicHr theme="senary" className="row-margin-contents" />

    <div>
      <h3>추천 차종</h3>
      <!-- 오토리스 추천배너 -->
      <BasicBanner
        variant="secondary"
        thumb="/images/banner/banner-speaker.png"
        @click="() => {}"
      >
        <h3 class="text-body-1 font-weight-medium nowrap">
          오토리스, 이런 분께 추천해요!
        </h3>
        <ul :class="[$style['basic-list'], $style['basic-list--custom']]">
          <li :class="[$style['basic-list__item'], 'color-black']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              비용 처리가 필요한 사업자
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-black']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              내 취향대로 옵션 선택하고 싶은 사람
            </div>
          </li>
        </ul>
      </BasicBanner>
      <!-- // 오토리스 추천배너 -->

      <!-- 장기렌트 추천배너 -->
      <!-- <BasicBanner
        variant="tertiary"
        thumb="/images/banner/banner-speaker.png"
        @click="() => {}"
      >
        <h3 class="text-body-1 font-weight-medium nowrap">
          장기렌트, 이런 분께 추천해요!
        </h3>
        <ul :class="[$style['basic-list'], $style['basic-list--custom']]">
          <li :class="[$style['basic-list__item'], 'color-black']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              차량 관리(보험·정비 등) 귀찮은 사람
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-black']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              차를 주기적으로 바꾸고 싶은 사람
            </div>
          </li>
        </ul>
      </BasicBanner> -->
      <!-- // 장기렌트 추천배너 -->
      <ul :class="$style['logs']" style="margin-top: 24px">
        <li :class="$style['logs__item']">
          <div :class="$style['logs__block']">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <RoundStatus border="quaternary">BEST</RoundStatus>
                <CarThumb
                  style="margin: auto"
                  size="medium"
                  src="/images/_dummy/car-thumb.png"
                />
                <div class="carEmblem-wrap">
                  <CarEmblem size="mediumSmall" code="1002" name="기아" />
                  <p>더 뉴 트레일블레이저</p>
                </div>
              </div>
              <!-- <RoundStatus theme="secondary">D-7</RoundStatus> -->
            </div>

            <BasicHr
              type="contents"
              theme="quaternary"
              className="row-margin-contents-small"
            />

            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>추천 상품</KeyValueTitle>
                <KeyValueText :classNames="{ text: 'color-green' }"
                  >다이렉트 오토리스</KeyValueText
                >
              </KeyValueItem>

              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>예상 월 납입액</KeyValueTitle>
                <KeyValueText :isBlur="true">279,010원</KeyValueText>
                <!-- isBlur 조건추가 -->
              </KeyValueItem>
            </KeyValue>

            <div :class="[$style['logs__button'], 'row-margin-contents-small']">
              <BasicButton size="small">월 납입액 확인</BasicButton>
            </div>
          </div>
        </li>

        <li :class="$style['logs__item']">
          <div :class="$style['logs__block']">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <!-- <RoundStatus border="quaternary">BEST</RoundStatus> -->
                <CarThumb
                  style="margin: auto"
                  size="medium"
                  src="/images/_dummy/car-thumb.png"
                />
                <div class="carEmblem-wrap">
                  <CarEmblem size="mediumSmall" code="1002" name="기아" />
                  <p>The New ALL Electric Countryman</p>
                </div>
              </div>
              <!-- <RoundStatus theme="secondary">D-7</RoundStatus> -->
            </div>

            <BasicHr
              type="contents"
              theme="quaternary"
              className="row-margin-contents-small"
            />

            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>추천 상품</KeyValueTitle>
                <KeyValueText :classNames="{ text: 'color-green' }"
                  >다이렉트 오토리스</KeyValueText
                >
              </KeyValueItem>

              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>예상 월 납입액</KeyValueTitle>
                <KeyValueText :isBlur="true">279,010원</KeyValueText>
                <!-- isBlur 조건추가 -->
              </KeyValueItem>
            </KeyValue>

            <div :class="[$style['logs__button'], 'row-margin-contents-small']">
              <BasicButton size="small">월 납입액 확인</BasicButton>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>테스트 시작</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template> -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/Main_M09_p001.scss';
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>

<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideComponent.scss';
</style>

<style lang="scss" scoped>
.contents-text {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  p {
    margin: 0;
    font-size: 18px;
  }
}
.carEmblem-wrap {
  margin-top: 20px;
  padding: 20px 20px 0 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
  p {
    margin: 0;
    font-size: 20px;
    letter-spacing: -0.4px;
  }
}
</style>
