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
      store.ui.header.setRightButtons(() => [
        {
          name: 'addButton',
          onClick: () => {
            console.log('등록 버튼 클릭');
          },
        },
      ]);
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
      <!-- Case : 제휴사 검색전 :disabled="true" 검색후 :disabled="false" -->
      <FormListItem
        titleText="제휴사"
        target="#leaseRentEstimationSystemPrePurchaseChooseCarAffiliate"
        :selectOnly="true"
        :disabled="false"
      >
        <FormInvalid :error="state.affiliateError">
          <InputBlock :error="state.affiliateError" :disabled="false">
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
                :disabled="false"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // Case : 제휴사 검색전 :disabled="true" 검색후 :disabled="false" -->

      <FormListItem
        titleText="브랜드"
        target="#leaseRentEstimationSystemPrePurchaseChooseCarBrandButton"
        :selectOnly="true"
      >
        <FormInvalid :error="state.brandError">
          <InputBlock :error="state.brandError">
            <InputBlockCell :flexible="true">
              <ExtendSelect
                buttonTitle="브랜드 선택하기"
                layerTitle="브랜드를 선택해 주세요"
                buttonId="leaseRentEstimationSystemPrePurchaseChooseCarBrandButton"
              >
                <UiTab>
                  <RoundTab
                    :useUiTab="true"
                    :classNames="{ wrap: 'row-margin-item-group' }"
                  >
                    <RoundTabButton
                      link="leaseRentEstimationSystemPrePurchaseChooseCarBrandTab001"
                    >
                      국산
                    </RoundTabButton>
                    <RoundTabButton
                      link="leaseRentEstimationSystemPrePurchaseChooseCarBrandTab002"
                    >
                      수입
                    </RoundTabButton>
                  </RoundTab>

                  <UiTabPanel
                    name="leaseRentEstimationSystemPrePurchaseChooseCarBrandTab001"
                  >
                    <div :class="$style['bank-brand']">
                      <ul :class="$style['bank-brand__list']">
                        <li :class="$style['bank-brand__item']">
                          <ExtendSelectOption
                            value="1001"
                            text="현대"
                            :classNames="{
                              option: $style['bank-brand__block'],
                            }"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <CarEmblem
                                src="/images/_dummy/car-emblem.png"
                                size="medium"
                              />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >현대</span
                            >
                          </ExtendSelectOption>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <ExtendSelectOption
                            value="1012"
                            text="제네시스"
                            :classNames="{
                              option: $style['bank-brand__block'],
                            }"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <CarEmblem
                                src="/images/_dummy/car-emblem.png"
                                size="medium"
                              />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >제네시스</span
                            >
                          </ExtendSelectOption>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <ExtendSelectOption
                            value="1002"
                            text="기아"
                            :classNames="{
                              option: $style['bank-brand__block'],
                            }"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <CarEmblem
                                src="/images/_dummy/car-emblem.png"
                                size="medium"
                              />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >기아</span
                            >
                          </ExtendSelectOption>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <ExtendSelectOption
                            value="1003"
                            text="르노삼성"
                            :classNames="{
                              option: $style['bank-brand__block'],
                            }"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <CarEmblem
                                src="/images/_dummy/car-emblem.png"
                                size="medium"
                              />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >르노삼성</span
                            >
                          </ExtendSelectOption>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <ExtendSelectOption
                            value="1006"
                            text="쉐보레"
                            :classNames="{
                              option: $style['bank-brand__block'],
                            }"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <CarEmblem
                                src="/images/_dummy/car-emblem.png"
                                size="medium"
                              />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >쉐보레</span
                            >
                          </ExtendSelectOption>
                        </li>
                        <li :class="$style['bank-brand__item']">
                          <ExtendSelectOption
                            value="1005"
                            text="쌍용"
                            :classNames="{
                              option: $style['bank-brand__block'],
                            }"
                          >
                            <span :class="$style['bank-brand__logo']">
                              <CarEmblem
                                src="/images/_dummy/car-emblem.png"
                                size="medium"
                              />
                            </span>
                            <span :class="$style['bank-brand__text']"
                              >쌍용</span
                            >
                          </ExtendSelectOption>
                        </li>
                      </ul>
                    </div>
                  </UiTabPanel>

                  <UiTabPanel
                    name="leaseRentEstimationSystemPrePurchaseChooseCarBrandTab002"
                  >
                    <ul :class="$style['bank-brand__list']">
                      <li :class="$style['bank-brand__item']">
                        <ExtendSelectOption
                          value="2001"
                          text="벤츠"
                          :classNames="{
                            option: $style['bank-brand__block'],
                          }"
                        >
                          <span :class="$style['bank-brand__logo']">
                            <CarEmblem
                              src="/images/_dummy/car-emblem.png"
                              size="medium"
                            />
                          </span>
                          <span :class="$style['bank-brand__text']">벤츠</span>
                        </ExtendSelectOption>
                      </li>
                      <li :class="$style['bank-brand__item']">
                        <ExtendSelectOption
                          value="2002"
                          text="BMW"
                          :classNames="{
                            option: $style['bank-brand__block'],
                          }"
                        >
                          <span :class="$style['bank-brand__logo']">
                            <CarEmblem
                              src="/images/_dummy/car-emblem.png"
                              size="medium"
                            />
                          </span>
                          <span :class="$style['bank-brand__text']">BMW</span>
                        </ExtendSelectOption>
                      </li>
                      <li :class="$style['bank-brand__item']">
                        <ExtendSelectOption
                          value="2003"
                          text="아우디"
                          :classNames="{
                            option: $style['bank-brand__block'],
                          }"
                        >
                          <span :class="$style['bank-brand__logo']">
                            <CarEmblem
                              src="/images/_dummy/car-emblem.png"
                              size="medium"
                            />
                          </span>
                          <span :class="$style['bank-brand__text']"
                            >아우디</span
                          >
                        </ExtendSelectOption>
                      </li>
                      <li :class="$style['bank-brand__item']">
                        <ExtendSelectOption
                          value="2017"
                          text="포르쉐"
                          :classNames="{
                            option: $style['bank-brand__block'],
                          }"
                        >
                          <span :class="$style['bank-brand__logo']">
                            <CarEmblem
                              src="/images/_dummy/car-emblem.png"
                              size="medium"
                            />
                          </span>
                          <span :class="$style['bank-brand__text']"
                            >포르쉐</span
                          >
                        </ExtendSelectOption>
                      </li>
                      <li :class="$style['bank-brand__item']">
                        <ExtendSelectOption
                          value="2018"
                          text="마세라티"
                          :classNames="{
                            option: $style['bank-brand__block'],
                          }"
                        >
                          <span :class="$style['bank-brand__logo']">
                            <CarEmblem
                              src="/images/_dummy/car-emblem.png"
                              size="medium"
                            />
                          </span>
                          <span :class="$style['bank-brand__text']"
                            >마세라티</span
                          >
                        </ExtendSelectOption>
                      </li>
                      <li :class="$style['bank-brand__item']">
                        <ExtendSelectOption
                          value="2025"
                          text="벤틀리"
                          :classNames="{
                            option: $style['bank-brand__block'],
                          }"
                        >
                          <span :class="$style['bank-brand__logo']">
                            <CarEmblem
                              src="/images/_dummy/car-emblem.png"
                              size="medium"
                            />
                          </span>
                          <span :class="$style['bank-brand__text']"
                            >벤틀리</span
                          >
                        </ExtendSelectOption>
                      </li>
                    </ul>
                  </UiTabPanel>
                </UiTab>
              </ExtendSelect>
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
            <span :class="$style['bank-brand__text']">
              <span :class="$style['emblem']"
                ><CarEmblem
                  src="/images/_dummy/car-emblem.png"
                  size="small" /></span
              >캐스퍼
            </span>
            <span class="inline-wrap row-margin-mini">
              <!-- 240703 추가 -->
              <RoundStatus :border="true">프로모션</RoundStatus>
              <!-- // 240703 추가 -->
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

<!-- 240703 추가 -->
<style lang="scss" scoped>
.inline-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
}
</style>
<!-- // 240703 추가 -->
