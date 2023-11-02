<script>
// PF_M01_l005
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
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconBuilding from '@/assets/images/icon/building.svg?component';
import IconCarSecurity from '@/assets/images/icon/car-security.svg?component';
import IconPig from '@/assets/images/icon/pig.svg?component';
import IconTell from '@/assets/images/icon/tell.svg?component';

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
    BasicHr,
    IconBuilding,
    IconCarSecurity,
    IconPig,
    IconTell,
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
          김하나님, 신청하신 상품은<br />
          대출진행이 어렵습니다
        </PageMainText>
      </PageTextGroup>

      <IllustObject type="fail" />

      <BasicHr
        type="contents"
        theme="quaternary"
        className="row-margin-container"
      />

      <div :class="$style['icon-list']">
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconPig /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__text']">
                  소득이 있다면 쉽고 빠른 신용대출
                </span>
                <span :class="$style['icon-list__title']">e하나신용대출</span>
              </span>
            </button>
          </li>
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"><IconBuilding /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__text']">
                  아파트 소유자를 위한 무담보 아파트 신용대출
                </span>
                <span :class="$style['icon-list__title']"> 행복아파트론 </span>
              </span>
            </button>
          </li>
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"
                ><IconCarSecurity
              /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__text']"
                  >내 차만 있다면 특별한도와 금리혜택까지</span
                >
                <span :class="$style['icon-list__title']"
                  >원큐자동차담보대출</span
                >
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
            <BasicButton tagName="a">
              <template v-slot:leftIcon>
                <IconTell />
              </template>
              1599-7942
            </BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/LayerPersonalLoanEHanaFail.scss';
</style>
