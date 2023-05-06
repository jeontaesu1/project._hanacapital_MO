<script>
// AF_M44_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import ColorChip from '@/components/ui/imageData/ColorChip.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

import IconCloseSmall from '@/assets/images/common/close-small.svg?component';
import IconAdd from '@/assets/images/icon/add.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    RoundStatus,
    CarThumb,
    CarEmblem,
    ColorChip,
    UnitText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    IconCloseSmall,
    IconAdd,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '차바구니');
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
        마음에 드는 차를 담아두면<br />
        <strong>혜택 알림을 받을 수 있어요!</strong>
      </PageMainText>
    </PageTextGroup>

    <div>
      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">견적 신청한 차</h3>
        <ul class="reset-list">
          <li v-for="i in 2" :key="i" class="row-margin-item-group">
            <BasicBox>
              <BasicBoxHead align="top">
                <BasicBoxHeadLeft>
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <CarEmblem code="1001" name="현대" />
                    </div>
                    <div class="flex-box__cell flex-box__cell--small">
                      <span class="text-body-4 color-black font-weight-light">
                        2020년식
                      </span>
                    </div>
                  </div>

                  <div class="text-body-1 color-black font-weight-medium">
                    쏘나타
                  </div>
                  <div class="text-body-4 color-gray row-margin-small">
                    뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
                  </div>
                  <UnitText
                    rightUnit="원"
                    :classNames="{ wrap: 'row-margin-item' }"
                    >16,900,000</UnitText
                  >
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <RoundStatus>2022.09.03 까지</RoundStatus>
                  <CarThumb
                    src="/images/_dummy/car-thumb.png"
                    :classNames="{ wrap: 'row-margin-item-medium' }"
                  />
                </BasicBoxHeadRight>
              </BasicBoxHead>

              <KeyValue verticalAlign="center" margin="regular">
                <KeyValueItem>
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
                <KeyValueItem>
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
                <KeyValueItem>
                  <KeyValueTitle>옵션</KeyValueTitle>
                  <KeyValueText>선루프1 외 2개</KeyValueText>
                </KeyValueItem>
              </KeyValue>

              <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                <ButtonListItem>
                  <BasicButton theme="secondary" size="small">
                    견적보기
                  </BasicButton>
                </ButtonListItem>
              </ButtonList>
            </BasicBox>
          </li>
        </ul>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">관심있는 차</h3>
        <ul class="reset-list">
          <li v-for="i in 2" :key="i" class="row-margin-item-group">
            <BasicBox>
              <div class="flex-box align-items-start">
                <div class="flex-box__cell flex-1">
                  <CarEmblem code="1001" name="현대" />
                  <div class="text-body-1 color-black font-weight-medium">
                    쏘나타
                  </div>
                  <div class="text-body-4 color-gray row-margin-small">
                    뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
                  </div>
                </div>

                <div class="flex-box__cell align-right">
                  <button
                    type="button"
                    :class="[
                      $style['close-button'],
                      $style['close-button--secondary'],
                    ]"
                  >
                    <IconCloseSmall />
                  </button>
                  <CarThumb
                    src="/images/_dummy/car-thumb.png"
                    :classNames="{ wrap: 'row-margin-item-medium' }"
                  />
                </div>
              </div>

              <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                <ButtonListItem>
                  <BasicButton theme="secondary" size="small">
                    견적보기
                  </BasicButton>
                </ButtonListItem>
              </ButtonList>
            </BasicBox>
          </li>
        </ul>

        <button
          type="button"
          :class="[$style['add-button'], 'row-margin-item-group']"
        >
          <span :class="$style['add-button__inner']">
            <span :class="$style['add-button__text']">
              관심있는 차 추가등록
            </span>
            <span :class="$style['add-button__icon']">
              <IconAdd />
            </span>
          </span>
        </button>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/AutoCarCart.scss';
</style>
