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
import ContentsButton from '@/components/ui/button/ContentsButton.vue';
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
    ContentsButton,
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
    <InputBlock type="search">
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

    <FormList :classNames="{ wrap: 'row-margin-contents' }">
      <FormListItem
        titleText="제휴사"
        target="#LeaseRentEstimationSystemPrePurchaseChooseCarAffiliate"
      >
        <FormInvalid :error="state.affiliateError">
          <InputBlock :error="state.affiliateError">
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
                buttonId="LeaseRentEstimationSystemPrePurchaseChooseCarAffiliate"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="브랜드"
        target="#LeaseRentEstimationSystemPrePurchaseChooseCarBrandButton"
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

    <div :class="$style['car-select']">
      <ul :class="$style['car-select__list']">
        <li :class="$style['car-select__item']">
          <ContentsButton theme="secondary">
            <CarThumb
              src="/images/_dummy/car-thumb.png"
              :class="$style['car-select__img']"
            />
            <h3 class="text-body-3 row-margin-mini">올 뉴 아반떼</h3>
            <RoundStatus theme="secondary">27대</RoundStatus>
          </ContentsButton>
        </li>
        <li :class="$style['car-select__item']">
          <ContentsButton theme="secondary">
            <CarThumb
              src="/images/_dummy/car-thumb.png"
              :class="$style['car-select__img']"
            />
            <h3 class="text-body-3 row-margin-mini">올 뉴 아반떼</h3>
            <RoundStatus theme="secondary">27대</RoundStatus>
          </ContentsButton>
        </li>
        <li :class="$style['car-select__item']">
          <ContentsButton theme="secondary">
            <CarThumb
              src="/images/_dummy/car-thumb.png"
              :class="$style['car-select__img']"
            />
            <h3 class="text-body-3 row-margin-mini">올 뉴 아반떼</h3>
            <RoundStatus theme="secondary">27대</RoundStatus>
          </ContentsButton>
        </li>
        <li :class="$style['car-select__item']">
          <ContentsButton theme="secondary">
            <CarThumb
              src="/images/_dummy/car-thumb.png"
              :class="$style['car-select__img']"
            />
            <h3 class="text-body-3 row-margin-mini">올 뉴 아반떼</h3>
            <RoundStatus theme="secondary">27대</RoundStatus>
          </ContentsButton>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemPrePurchaseChooseCar.scss';
</style>
