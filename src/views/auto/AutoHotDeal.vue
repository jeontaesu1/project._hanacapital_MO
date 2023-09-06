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
import UnitText from '@/components/ui/text/UnitText.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

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
    UnitText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    RoundStatus,
    BasicHr,
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
        <strong>
          바로 출고 가능한<br />
          렌터카 견적을 확인해보세요!
        </strong>
      </PageMainText>
    </PageTextGroup>

    <!-- Case : 즉시 출고 차량 없을 때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">준비 중 입니다.</p>
    </div>
    <!-- // Case : 즉시 출고 차량 없을 때 -->

    <div :class="$style['bg']">
      <section>
        <div class="flex-box row-margin-contents">
          <div class="flex-box__cell flex-1">
            <div class="inline-wrap">
              <RoundStatus theme="nonary" size="small">HOT</RoundStatus>
            </div>
            <h3 class="text-title-2 row-margin-item">쏘나타</h3>
          </div>
          <div class="flex-box__cell flex-box__cell--medium">
            <CarThumb src="/images/_dummy/car-thumb.png" />
          </div>
        </div>

        <!-- DD : 1개 이하 slide--once 클래스 추가 -->
        <div :class="[$style['slide'], $style['slide--once']]">
          <div :class="$style['slide__scroller']">
            <div :class="$style['slide__inner']">
              <ul :class="$style['slide__list']">
                <li :class="$style['slide__item']">
                  <div :class="$style['slide__block']">
                    <div class="text-body-4 color-gray row-margin-item">
                      뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
                    </div>
                    <UnitText rightUnit="원">월 325,000</UnitText>

                    <BasicHr
                      type="contents"
                      theme="quaternary"
                      className="row-margin-contents-small"
                    />

                    <KeyValue margin="regular">
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3',
                        }"
                      >
                        <KeyValueTitle>외장</KeyValueTitle>
                        <KeyValueText>
                          <div class="flex-box justify-conten-end">
                            <div class="flex-box__cell">아틸라스 화이트</div>
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
                            <div class="flex-box__cell">
                              네츄럴 베이지 / 다크 베이지
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
                        <KeyValueText>선루프1 외 2개</KeyValueText>
                      </KeyValueItem>
                    </KeyValue>

                    <ButtonList
                      :classNames="{ wrap: 'row-margin-contents-small' }"
                    >
                      <ButtonListItem>
                        <BasicButton size="small"> 즉시출고 </BasicButton>
                      </ButtonListItem>
                    </ButtonList>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <BasicHr
        type="contents"
        theme="tertiary"
        className="row-margin-container-medium"
      />

      <section>
        <div class="flex-box row-margin-contents">
          <div class="flex-box__cell flex-1">
            <h3 class="text-title-2 row-margin-item">그랜저</h3>
          </div>
          <div class="flex-box__cell flex-box__cell--medium">
            <CarThumb src="/images/_dummy/car-thumb.png" />
          </div>
        </div>

        <div :class="$style['slide']">
          <div :class="$style['slide__scroller']">
            <div :class="$style['slide__inner']">
              <ul :class="$style['slide__list']">
                <li v-for="i in 5" :key="i" :class="$style['slide__item']">
                  <div :class="$style['slide__block']">
                    <div class="text-body-4 color-gray row-margin-item">
                      뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
                    </div>
                    <UnitText rightUnit="원">월 325,000</UnitText>

                    <BasicHr
                      type="contents"
                      theme="quaternary"
                      className="row-margin-contents-small"
                    />

                    <KeyValue margin="regular">
                      <KeyValueItem
                        :classNames="{
                          item: 'text-body-3',
                        }"
                      >
                        <KeyValueTitle>외장</KeyValueTitle>
                        <KeyValueText>
                          <div class="flex-box justify-conten-end">
                            <div class="flex-box__cell">아틸라스 화이트</div>
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
                            <div class="flex-box__cell">
                              네츄럴 베이지 / 다크 베이지
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
                        <KeyValueText>선루프1 외 2개</KeyValueText>
                      </KeyValueItem>
                    </KeyValue>

                    <ButtonList
                      :classNames="{ wrap: 'row-margin-contents-small' }"
                    >
                      <ButtonListItem>
                        <BasicButton size="small"> 즉시출고 </BasicButton>
                      </ButtonListItem>
                    </ButtonList>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AutoHotDeal.scss';
</style>
