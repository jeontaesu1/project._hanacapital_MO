<script>
// My_M06_l004

import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';

import IconCustomer from '@/assets/images/icon/customer-center.svg?component';
import IconTell from '@/assets/images/icon/tell.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    IllustObject,
    BasicHr,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
    IconTell,
    IconCustomer,
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
          <strong>
            청약철회 신청이<br />
            완료되었습니다
          </strong>
        </PageMainText>
        <PageSubText
          >17시 내로 입금해 주시면 청약철회 후 문자로 안내
          드리겠습니다.</PageSubText
        ><PageSubText
          ><span class="color-green font-weight-regular"
            >당일 문자를 받지 못하신 경우, 고객센터에 연락하여 확인
            바랍니다.</span
          ><br />
          이용해 주셔서 감사합니다.</PageSubText
        >
      </PageTextGroup>

      <IllustObject type="complete" />

      <ul :class="$style['basic-list']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            약속 시간 이후 입금 시 철회가 불가합니다. 익일 다시 신청해 주셔야
            하며, 경과 이자가 추가로 발생할 수 있습니다.
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            기타 문의는 고객센터로 연락바랍니다.
          </div>
        </li>
      </ul>

      <BasicHr
        theme="quaternary"
        type="contents"
        className="row-margin-container"
      />

      <div :class="$style['icon-list']">
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <div :class="$style['icon-list__block']">
              <div :class="$style['icon-list__icon']"><IconCustomer /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">고객센터</div>
                <div :class="$style['icon-list__text']">평일 09:00 ~ 18:00</div>
              </div>
              <BasicButton
                tagName="a"
                size="mini"
                :line="true"
                theme="quaternary"
                :classNames="{ wrap: $style['icon-list__button'] }"
                href="tel:1800-1110"
              >
                <template v-slot:leftIcon>
                  <IconTell />
                </template>
                1800-1110
              </BasicButton>
            </div>
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
            <BasicButton>홈으로</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanSubscriptionWithdrawalRightComplete.scss';
</style>
