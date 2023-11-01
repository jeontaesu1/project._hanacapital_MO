<script>
// Q_M05_p004
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';
import IllustInfoText from '@/components/ui/common/IllustInfoText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

import IconMaximum from '@/assets/images/icon/icon-maximum.svg?component';
import IconExpectedInterestRate from '@/assets/images/icon/expected-interest-rate.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    IllustInfo,
    IllustObject,
    IllustInfoTitle,
    IllustInfoText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BottomSticky,
    BasicBox,
    UnitText,
    IconMaximum,
    IconExpectedInterestRate,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => 'e하나신용대출(연계)');
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
    <!-- Case : 금리 확인시 노출 -->
    <PageTextGroup>
      <PageMainText>
        한도와 금리가<br />
        확인되었습니다
      </PageMainText>
    </PageTextGroup>

    <IllustObject type="complete" />

    <BasicBox theme="tertiary">
      <div :class="$style['product-detail']">
        <ul :class="$style['product-detail__list']">
          <li :class="$style['product-detail__item']">
            <div :class="$style['product-detail__icon']">
              <IconMaximum />
            </div>
            <div :class="$style['product-detail__block']">
              <div :class="$style['product-detail__title']">대출가능금액</div>
              <div :class="$style['product-detail__desc']">
                <UnitText size="regular" rightUnit="만원">4,000</UnitText>
              </div>
            </div>
          </li>
          <li :class="$style['product-detail__item']">
            <div :class="$style['product-detail__icon']">
              <IconExpectedInterestRate />
            </div>
            <div :class="$style['product-detail__block']">
              <div :class="$style['product-detail__title']">대출금리</div>
              <div :class="$style['product-detail__desc']">
                <UnitText size="regular" rightUnit="%">13.2</UnitText>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </BasicBox>

    <ul :class="[$style['basic-list'], 'row-margin-contents']">
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          해당 금리는 대출기간 36개월 기준이며 대출기간에 따라 변경될 수
          있습니다.
        </div>
      </li>
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          실제 대출을 진행할 때, 대출가능금액이 달라질 수 있습니다.
        </div>
      </li>
    </ul>
    <!-- // Case : 금리 확인시 노출 -->

    <!-- Case : 대출가능대상자가 아닌 경우 노출 -->
    <IllustInfo>
      <IllustObject type="fail" />
      <IllustInfoTitle>
        <strong>
          김하나님께서는<br />
          대출가능대상이 아닙니다.
        </strong>
      </IllustInfoTitle>
      <IllustInfoText>
        하나캐피탈 e하나신용대출(연계)에 관심 가져주셔서<br />
        진심으로 감사합니다.
      </IllustInfoText>
    </IllustInfo>
    <!-- // Case : 대출가능대상자가 아닌 경우 노출 -->

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
            align="full"
          >
            <ButtonListItem>
              <BasicButton>대출 신청</BasicButton>
            </ButtonListItem>
            <!-- Case : 대출가능대상자가 아닌 경우 노출 -->
            <ButtonListItem>
              <BasicButton>확인</BasicButton>
            </ButtonListItem>
            <!-- // Case : 대출가능대상자가 아닌 경우 노출 -->
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/oneQ/Q_M05_p004.scss';
</style>
