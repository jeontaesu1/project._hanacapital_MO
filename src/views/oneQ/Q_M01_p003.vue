<script>
// Q_M01_p003
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiLayoutStore } from '@/stores/ui/layout';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

import IconCertification from '@/assets/images/icon/certification.svg?component';
import IconMainFour from '@/assets/images/icon/main-4.svg?component';
import IconMainFive from '@/assets/images/icon/main-5.svg?component';
import IconMyInfo from '@/assets/images/icon/my-info.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicHr,
    BasicBox,
    UnitText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    IconCertification,
    IconMainFour,
    IconMainFive,
    IconMyInfo,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        layout: useUiLayoutStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.layout.setUseFooter(false);

      store.ui.header.setTitle(() => '보유 계약 현황');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
      store.ui.header.setTheme(() => 'fourth');
    });

    onUnmounted(() => {
      store.ui.layout.setUseFooter();

      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
      store.ui.header.setTheme();
    });
  },
};
</script>

<template>
  <PageContents>
    <div :class="$style['bg']">
      <PageTextGroup>
        <PageMainText>
          김하나님이<br />
          보유하신 계약은 총 <span class="color-green">5</span>건 입니다
        </PageMainText>
      </PageTextGroup>

      <BasicBox theme="sixteenth">
        <div class="align-center">
          <div>
            <UnitText
              size="small-large"
              rightSecondaryUnit="원"
              align="center"
              verticalAlign="center"
              >400,000</UnitText
            >
            <div class="text-body-3 color-gray-tertiary">당월 결제예정금액</div>
          </div>
        </div>
      </BasicBox>

      <div :class="$style['icon-column-list']">
        <ul :class="$style['icon-column-list__list']">
          <li :class="$style['icon-column-list__item']">
            <RouterLink to="" :class="$style['icon-column-list__block']">
              <span :class="$style['icon-column-list__icon']"
                ><IconCertification
              /></span>
              <span :class="$style['icon-column-list__content']">
                <span :class="$style['icon-column-list__title']">증명서</span>
              </span>
            </RouterLink>
          </li>
          <li :class="$style['icon-column-list__item']">
            <RouterLink to="" :class="$style['icon-column-list__block']">
              <span :class="$style['icon-column-list__icon']"
                ><IconMainFour
              /></span>
              <span :class="$style['icon-column-list__content']">
                <span :class="$style['icon-column-list__title']">계좌변경</span>
              </span>
            </RouterLink>
          </li>
          <li :class="$style['icon-column-list__item']">
            <RouterLink to="" :class="$style['icon-column-list__block']">
              <span :class="$style['icon-column-list__icon']"
                ><IconMainFive
              /></span>
              <span :class="$style['icon-column-list__content']">
                <span :class="$style['icon-column-list__title']">중도상환</span>
              </span>
            </RouterLink>
          </li>
          <li :class="$style['icon-column-list__item']">
            <RouterLink to="" :class="$style['icon-column-list__block']">
              <span :class="$style['icon-column-list__icon']"
                ><IconMyInfo
              /></span>
              <span :class="$style['icon-column-list__content']">
                <span :class="$style['icon-column-list__title']">나의정보</span>
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div>
      <section class="padding-top-40">
        <h3 class="text-title-2 font-weight-bold row-margin-contents">
          캐피탈 상품 계약
        </h3>

        <ul :class="[$style['logs'], $style['logs--margin-regular']]">
          <li :class="$style['logs__item']">
            <div :class="$style['logs__block']">
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 class="text-body-1 font-weight-medium">
                    렌터카 531다3346
                  </h3>
                  <div class="text-body-4 color-gray row-margin-small">
                    L12112301828001
                  </div>
                </div>
                <div :class="$style['logs__right']">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>

              <BasicHr
                type="contents"
                theme="quaternary"
                className="row-margin-contents-small"
              />

              <KeyValue margin="regular">
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText
                    :classNames="{ text: 'color-green font-weight-medium' }"
                    >845,000 원</KeyValueText
                  >
                </KeyValueItem>
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>결제일</KeyValueTitle>
                  <KeyValueText>2022.02.05</KeyValueText>
                </KeyValueItem>
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText>16/60</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </div>
          </li>
          <li :class="$style['logs__item']">
            <div :class="$style['logs__block']">
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 class="text-body-1 font-weight-medium">
                    오토론 126하6131
                  </h3>
                  <div class="text-body-4 color-gray row-margin-small">
                    L12112301828001
                  </div>
                </div>
                <div :class="$style['logs__right']">
                  <button type="button" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </button>
                </div>
              </div>

              <BasicHr
                type="contents"
                theme="quaternary"
                className="row-margin-contents-small"
              />

              <KeyValue margin="regular">
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>결제예정금액</KeyValueTitle>
                  <KeyValueText
                    :classNames="{ text: 'color-green font-weight-medium' }"
                    >845,000 원</KeyValueText
                  >
                </KeyValueItem>
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>결제일</KeyValueTitle>
                  <KeyValueText>2022.02.05</KeyValueText>
                </KeyValueItem>
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>결제회차</KeyValueTitle>
                  <KeyValueText>16/60</KeyValueText>
                </KeyValueItem>
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>대출잔액</KeyValueTitle>
                  <KeyValueText>50,000,000 원</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/oneQ/Q_M01_p003.scss';
</style>
