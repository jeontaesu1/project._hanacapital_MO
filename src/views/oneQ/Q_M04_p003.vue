<script>
// Q_M04_p003
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

import IconMaximum from '@/assets/images/icon/icon-maximum.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    IllustObject,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BottomSticky,
    BasicBox,
    UnitText,
    IconMaximum,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '중고차 오토론');
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
        한도와 금리가<br />
        확인되었습니다
      </PageMainText>
    </PageTextGroup>

    <IllustObject type="complete" />

    <BasicBox
      theme="tertiary"
      className="row-margin-item-group-small row-margin-bottom-none"
    >
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
        </ul>
      </div>
    </BasicBox>

    <ul :class="[$style['basic-list'], 'row-margin-contents']">
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          실제 대출을 진행할 때, 대출가능금액이 달라질 수 있습니다.
        </div>
      </li>
    </ul>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>대출 신청</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/oneQ/Q_M04_p003.scss';
</style>
