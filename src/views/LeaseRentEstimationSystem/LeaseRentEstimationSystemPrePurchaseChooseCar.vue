<script>
// LR_M02_p005
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
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
      store.ui.header.setTitle(() => '선구매');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
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
    <InputBlock>
      <InputBlockCell :flexible="true">
        <BasicInput
          type="search"
          title="제휴사 명칭"
          placeholder="제휴사 명칭 입력"
        />
      </InputBlockCell>
      <InputBlockCell type="search">
        <SearchButton />
      </InputBlockCell>
    </InputBlock>

    <FormList
      :classNames="{ wrap: 'row-margin-contents row-margin-bottom-none' }"
    >
      <!-- Case : 제휴사 검색후 :disabled="false" 변경 -->
      <FormListItem
        titleText="제휴사"
        target="#leaseRentEstimationSystemPrePurchaseChooseCarAffiliate"
        :selectOnly="true"
        :disabled="true"
      >
        <FormInvalid :error="state.affiliateError">
          <InputBlock :error="state.affiliateError" :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: '하나 3디협동조합',
                  },
                  {
                    value: '2',
                    text: '하나CCTV',
                  },
                  {
                    value: '3',
                    text: '하나SHC',
                  },
                ]"
                buttonTitle="제휴사 선택하기"
                layerTitle="제휴사를 선택해 주세요"
                buttonId="leaseRentEstimationSystemPrePurchaseChooseCarAffiliate"
                :disabled="true"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // Case : 제휴사 검색후 :disabled="false" 변경 -->

      <FormListItem
        titleText="브랜드"
        target="#leaseRentEstimationSystemPrePurchaseChooseCarBrandButton"
        :selectOnly="true"
      >
        <FormInvalid :error="state.brandError">
          <InputBlock :error="state.brandError">
            <InputBlockCell :flexible="true">
              // 브랜드 선택 컴포넌트
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <div
      :class="[
        $style['bank-brand'],
        $style['bank-brand--col-2'],
        'row-margin-container-medium',
      ]"
    >
      <ul :class="$style['bank-brand__list']">
        <li v-for="i in 4" :key="i" :class="$style['bank-brand__item']">
          <button type="button" :class="$style['bank-brand__block']">
            <span :class="$style['bank-brand__logo']">
              <CarThumb src="/images/_dummy/car-thumb.png" />
            </span>
            <span :class="$style['bank-brand__text']">캐스퍼</span>
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
@import '@/assets/scss/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemPrePurchaseChooseCar.scss';
</style>
