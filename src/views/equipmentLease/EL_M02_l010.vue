<script>
// EL_M02_l010
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

import IconCustomer from '@/assets/images/icon/customer-center.svg?component';
import IconTell from '@/assets/images/icon/tell.svg?component';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
    IllustObject,
    BasicHr,
    ButtonList,
    ButtonListItem,
    BasicButton,
    IconCustomer,
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
          물건점검이<br />
          <strong>완료되었습니다</strong>
        </PageMainText>
        <PageSubText>하나캐피탈을 이용해 주셔서 감사합니다.</PageSubText>
      </PageTextGroup>

      <IllustObject type="complete" />

      <BasicHr
        type="contents"
        theme="quaternary"
        className="row-margin-container"
      />

      <div :class="$style['icon-list']">
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <div :class="$style['icon-list__block']">
              <div :class="$style['icon-list__icon']"><IconCustomer /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">고객센터</div>
                <div :class="[$style['icon-list__text'], 'font-weight-light']">
                  평일 09:00 ~ 19:00
                </div>
              </div>
              <BasicButton
                tagName="a"
                size="mini"
                :line="true"
                theme="quaternary"
                :classNames="{ wrap: $style['icon-list__button'] }"
                href="tel:1800-1110"
              >
                <template v-slot:leftIcon><IconTell /></template>
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
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/equipmentLease/EL_M02_l010.scss';
</style>
