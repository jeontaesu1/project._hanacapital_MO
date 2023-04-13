<script>
// AF_M06_l009
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import CarLogo from '@/assets/images/car-logo/auto-hyundai.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    CarLogo,
  },
  setup() {
    const state = reactive({
      carAmountError: false,
      loanAmountError: false,
      periodError: false,
    });

    const layer = ref(null);

    return {
      state,
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          선택한 차량과 입력한 차량번호의<br />
          <strong>차량이 맞는지 확인해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <BasicBox>
        <div class="flex-box">
          <div class="flex-box__cell flex-1">
            <p :class="$style['brand-info']">
              <span :class="$style['brand-info__logo']"><CarLogo /></span>
              2020년식
            </p>
            <h3 class="text-body-1 font-weight-medium">
              쏘나타 뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
            </h3>
          </div>
          <div class="flex-box__cell flex-none">
            <div :class="$style['car-image']">
              <img
                src="@/assets/images/_dummy/car-sample.png"
                alt="차량 정보 넣어주세요"
              />
            </div>
          </div>
        </div>
      </BasicBox>

      <BasicHr className="row-margin-container-medium" />

      <section>
        <h3 class="text-title-2 row-margin-contents">차량번호 조회 결과</h3>

        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <p :class="$style['brand-info']">
                <span :class="$style['brand-info__logo']"><CarLogo /></span>
                2020년식
              </p>
              <h3 class="text-body-1 font-weight-medium">11가1111</h3>
              <p class="text-body-4 color-gray row-margin-small">
                쏘나타 뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
              </p>
            </BasicBoxHeadLeft>
            <BasicBoxHeadRight>
              <div :class="$style['car-image']">
                <img
                  src="@/assets/images/_dummy/car-sample.png"
                  alt="차량 정보 넣어주세요"
                />
              </div>
            </BasicBoxHeadRight>
          </BasicBoxHead>
          <KeyValueList margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>배기량</KeyValueTitle>
              <KeyValueText>2967cc</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>전손/침수/도난</KeyValueTitle>
              <KeyValueText>X / X / X</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>사고이력(내차 피해)</KeyValueTitle>
              <KeyValueText>0회 / 0회</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>사고이력(타차 가해)</KeyValueTitle>
              <KeyValueText>0회 / 0회</KeyValueText>
            </KeyValueItem>
          </KeyValueList>
        </BasicBox>
      </section>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">재선택</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton theme="secondary">다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoUsedLoanConfirm.scss';
</style>
