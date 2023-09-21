<script>
// PF_M04_l003
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

import IconSearchMoney from '@/assets/images/icon/search-money.svg?component';
import IconInterestRate from '@/assets/images/icon/interest-rate.svg?component';
import IconCalculate from '@/assets/images/icon/calculate.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IllustObject,
    BasicBox,
    BasicHr,
    UnitText,
    IconSearchMoney,
    IconInterestRate,
    IconCalculate,
  },
  setup() {
    const layer = ref(null);

    return {
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
          한도와 금리가<br />
          확인되었습니다
        </PageMainText>
      </PageTextGroup>

      <IllustObject type="complete" />

      <div>
        <BasicBox theme="tertiary" className="row-margin-contents">
          <div :class="$style['product-detail']">
            <ul :class="$style['product-detail__list']">
              <li :class="$style['product-detail__item']">
                <div :class="$style['product-detail__icon']">
                  <IconSearchMoney />
                </div>
                <div :class="$style['product-detail__block']">
                  <div :class="$style['product-detail__title']">최대한도</div>
                  <div :class="$style['product-detail__desc']">
                    <UnitText size="regular" rightUnit="만원">4,000</UnitText>
                  </div>
                </div>
              </li>
              <li :class="$style['product-detail__item']">
                <div :class="$style['product-detail__icon']">
                  <IconInterestRate />
                </div>
                <div :class="$style['product-detail__block']">
                  <div :class="$style['product-detail__title']">예상금리</div>
                  <div :class="$style['product-detail__desc']">
                    <UnitText size="regular" rightUnit="%">10.9</UnitText>
                    <div :class="$style['product-detail__desc-sub']">
                      (36개월 기준)
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </BasicBox>

        <ul :class="$style['basic-list']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              해당 금리는 대출기간 36개월 기준이며 대출기간에 따라 금리가 변경될
              수 있습니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              실제 정보와 입력 정보가 상이할 경우 대출가능금액 및 금리가 달라질
              수 있습니다.
            </div>
          </li>
        </ul>
      </div>

      <BasicHr
        type="contents"
        theme="quaternary"
        className="row-margin-container"
      />

      <div :class="$style['icon-list']">
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconCalculate /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__text']">월 납입금 계산</span>
                <span :class="$style['icon-list__title']">대출 계산기</span>
              </span>
            </button>
          </li>
        </ul>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton> 대출 신청 </BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/LayerPersonalLoanOneQAutoResult.scss';
</style>
