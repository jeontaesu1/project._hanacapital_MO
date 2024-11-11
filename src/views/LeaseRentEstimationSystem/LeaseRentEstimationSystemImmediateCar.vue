<script>
// LR_M02_p007 (즉시출고)
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import ExtendSelect from '@/components/ui/form/ExtendSelect.vue';
import ExtendSelectOption from '@/components/ui/form/ExtendSelectOption.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import RoundTab from '@/components/ui/tab/RoundTab.vue';
import RoundTabButton from '@/components/ui/tab/RoundTabButton.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';

export default {
  components: {
    PageContents,
    FormList,
    FormListItem,
    FormInvalid,
    BasicSelect,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    SearchButton,
    CarThumb,
    RoundStatus,
    ExtendSelect,
    ExtendSelectOption,
    UiTab,
    UiTabPanel,
    RoundTab,
    RoundTabButton,
    CarEmblem,

    PageTextGroup,
    PageMainText,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      affiliateError: false,
      brandError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '즉시출고');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
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
      <PageMainText>
        아래 차량은<br />
        <span class="color-green">선점</span> 후 진행 가능합니다
      </PageMainText>
      <span class="subText">지점 문의를 통한 선점 확인 필수</span>
    </PageTextGroup>

    <div
      :class="[
        $style['bank-brand'],
        $style['bank-brand--col-2'],
        'row-margin-container-medium',
      ]"
    >
      <ul :class="$style['bank-brand__list']">
        <li v-for="i in 8" :key="i" :class="$style['bank-brand__item']">
          <button type="button" :class="$style['bank-brand__block']">
            <span :class="$style['bank-brand__logo']">
              <CarThumb src="/images/_dummy/car-thumb.png" />
            </span>
            <span :class="$style['bank-brand__text']">
              <span :class="$style['emblem']"
                ><CarEmblem
                  src="/images/_dummy/car-emblem.png"
                  size="small" /></span
              >캐스퍼
            </span>
            <span class="inline-wrap row-margin-mini">
              <RoundStatus theme="secondary">22대</RoundStatus>
            </span>
          </button>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemImmediateCar.scss';
</style>

<style lang="scss" scoped>
.subText {
  display: block;
  margin-top: 6px;
  color: #666;
  font-size: 12px;
  letter-spacing: -0.24px;

  &:before {
    content: '※';
    margin-right: 4px;
  }
}
</style>
