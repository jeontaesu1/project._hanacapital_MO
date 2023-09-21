<script>
// AF_M43_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import ColorChip from '@/components/ui/imageData/ColorChip.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import SlideScroll from '@/components/ui/section/SlideScroll.vue';
import SlideScrollItem from '@/components/ui/section/SlideScrollItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';

import IconHot from '@/assets/images/icon/hot.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    CarThumb,
    ColorChip,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    SlideScroll,
    SlideScrollItem,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,

    IconHot,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '즉시출고 핫딜!');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <PageTextGroup>
      <PageMainText>
        바로 출고 가능한<br />
        렌터카 견적을 확인해보세요!
      </PageMainText>
    </PageTextGroup>

    <!-- Case : 즉시 출고 차량 없을 때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">준비 중 입니다.</p>
    </div>
    <!-- // Case : 즉시 출고 차량 없을 때 -->

    <div>
      <section class="row-margin-container-medium">
        <div class="flex-box row-margin-contents">
          <div class="flex-box__cell flex-1">
            <h2 class="text-title-2">현대 쏘나타</h2>
          </div>
          <div class="flex-box__cell flex-box__cell--medium">
            <IconHot :class="$style['icon']" />
          </div>
        </div>

        <SlideScroll :hideScrollbar="false">
          <SlideScrollItem v-for="i in 5" :key="i">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h3 class="text-body-1 font-weight-medium multi-ellipsis">
                    뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
                  </h3>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <div :class="$style['slide-thumb']">
                    <CarThumb src="/images/_dummy/car-thumb.png" />
                  </div>
                </BasicBoxHeadRight>
              </BasicBoxHead>

              <KeyValue margin="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>외장</KeyValueTitle>
                  <KeyValueText>
                    <div class="flex-box justify-conten-end">
                      <div class="flex-box__cell flex-1">
                        <div class="ellipsis">아틸라스 화이트</div>
                      </div>
                      <div class="flex-box__cell">
                        <ColorChip
                          :colors="['248, 245, 245']"
                          size="small"
                        ></ColorChip>
                      </div>
                    </div>
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>내장</KeyValueTitle>
                  <KeyValueText>
                    <div class="flex-box justify-conten-end">
                      <div class="flex-box__cell flex-1">
                        <div class="ellipsis">네츄럴 베이지 / 다크 베이지</div>
                      </div>
                      <div class="flex-box__cell">
                        <ColorChip
                          :colors="['244, 238, 238', '225, 213, 213']"
                          size="small"
                        ></ColorChip>
                      </div>
                    </div>
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>옵션</KeyValueTitle>
                  <KeyValueText>
                    <div class="ellipsis">선루프1 외 2개</div>
                  </KeyValueText>
                </KeyValueItem>
              </KeyValue>

              <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                <ButtonListItem>
                  <BasicButton size="small"> 즉시출고 </BasicButton>
                </ButtonListItem>
              </ButtonList>
            </BasicBox>
          </SlideScrollItem>
        </SlideScroll>
      </section>

      <section class="row-margin-container-medium">
        <div class="flex-box row-margin-contents">
          <div class="flex-box__cell flex-1">
            <h2 class="text-title-2">현대 싼타페</h2>
          </div>
        </div>

        <SlideScroll :hideScrollbar="false">
          <SlideScrollItem v-for="i in 1" :key="i">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h3 class="text-body-1 font-weight-medium multi-ellipsis">
                    뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
                  </h3>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <div :class="$style['slide-thumb']">
                    <CarThumb src="/images/_dummy/car-thumb.png" />
                  </div>
                </BasicBoxHeadRight>
              </BasicBoxHead>

              <KeyValue margin="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>외장</KeyValueTitle>
                  <KeyValueText>
                    <div class="flex-box justify-conten-end">
                      <div class="flex-box__cell flex-1">
                        <div class="ellipsis">아틸라스 화이트</div>
                      </div>
                      <div class="flex-box__cell">
                        <ColorChip
                          :colors="['248, 245, 245']"
                          size="small"
                        ></ColorChip>
                      </div>
                    </div>
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>내장</KeyValueTitle>
                  <KeyValueText>
                    <div class="flex-box justify-conten-end">
                      <div class="flex-box__cell flex-1">
                        <div class="ellipsis">네츄럴 베이지 / 다크 베이지</div>
                      </div>
                      <div class="flex-box__cell">
                        <ColorChip
                          :colors="['244, 238, 238', '225, 213, 213']"
                          size="small"
                        ></ColorChip>
                      </div>
                    </div>
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>옵션</KeyValueTitle>
                  <KeyValueText>
                    <div class="ellipsis">선루프1 외 2개</div>
                  </KeyValueText>
                </KeyValueItem>
              </KeyValue>

              <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                <ButtonListItem>
                  <BasicButton size="small"> 즉시출고 </BasicButton>
                </ButtonListItem>
              </ButtonList>
            </BasicBox>
          </SlideScrollItem>
        </SlideScroll>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AutoHotDeal.scss';
</style>
