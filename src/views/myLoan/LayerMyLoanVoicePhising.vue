<script>
// My_M08_l027
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';

import FullPopup from '@/components/ui/layer/FullPopup.vue';

import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,

    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,

    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
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
      <template v-slot:head> </template>

      <PageTextGroup>
        <div :class="([$style['illustration-img']], 'logo-main')">
          <img
            src="@/assets/images/illustration/logo_main.png"
            alt="하나캐피탈"
            style="width: 108px; height: 24px"
          />
        </div>

        <PageMainText class="mainText"> 보이스피싱을 주의하세요 </PageMainText>
      </PageTextGroup>

      <div>
        <section class="row-margin-contents-group">
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                <span class="listText">로또 유료 가입 보상</span>
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                <span class="listText">코인 손실금 보상</span>
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                <span class="listText">고수익 투자 보장</span>
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                <span class="listText">경찰, 검찰, 금융기관 등 사칭 등</span>
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <p class="text-body-4 font-weight-light contentText">
            위 사례 외에도 타인이 대출을 권유하고, 대출받은 금액의 송금을
            요구하는 경우 보이스피싱일 확률이 높으므로 대출진행을 중단하시기
            바랍니다.
          </p>
          <CheckBox id="layerMyLoanVoicePhisingCheck001" theme="tertiary">
            <CheckBoxObject />
            <CheckBoxLabelText> 위 내용을 확인하였습니다. </CheckBoxLabelText>
          </CheckBox>
        </section>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">대출중단</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>대출신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanVoicePhising.scss';
</style>

<style lang="scss" scoped>
.mainText {
  margin-top: 30px;
}
.listText {
  font-size: 14px;
}
.contentText {
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 30px;
}
</style>
