<script>
// My_M03_l283
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    PageTextGroup,
    PageMainText,
    IllustObject,
    ButtonList,
    ButtonListItem,
    BasicButton,
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
          <PopupTitle>자동차운용리스 주요권리 안내</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          위법계약을<br />
          해지할 수 있어요
        </PageMainText>
      </PageTextGroup>

      <IllustObject type="cancel" :classNames="{ wrap: 'row-margin-none' }" />

      <div>
        <div class="text-body-2">
          <span class="font-weight-medium">
            금융회사가 아래와 같이 「금융소비자 보호에 관한 법률」(이하
            “금융소비자보호법”)상 의무</span
          >를 위반하여 대출계약을 체결한 경우, 일반금융소비자는 해당 계약을
          위약금 등 수수료
          <span class="font-weight-medium">부과 없이 해지할 수 있어요. </span>
          <span class="color-red">(다만 계약종료 시 행사 불가)</span>
        </div>

        <ul :class="[$style['basic-list'], 'row-margin-contents']">
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-4',
              'color-black',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">-</div>
            <div :class="$style['basic-list__content']">
              금융소비자보호법 제17조 제3항을 위반하여 적합하지 아니하다고
              인정되는 대출계약의 체결을 권유한 경우
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-4',
              'color-black',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">-</div>
            <div :class="$style['basic-list__content']">
              금융소비자보호법 제18조 제2항을 위반하여 대출상품이 적정하지
              아니한 경우임에도 해당 사실을 알리지 않거나 확인 받지 않은 경우
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-4',
              'color-black',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">-</div>
            <div :class="$style['basic-list__content']">
              금융소비자보호법 제19조 제1항 또는 제3항을 위반하여 설명의무를
              이행하지 아니한 경우
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-4',
              'color-black',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">-</div>
            <div :class="$style['basic-list__content']">
              금융소비자보호법 제20조 제1항을 위반하여 불공정영업행위를 한 경우
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-4',
              'color-black',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">-</div>
            <div :class="$style['basic-list__content']">
              금융소비자보호법 제21조를 위반하여 부당권유행위를 한 경우
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
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>확인했습니다</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractDescription008_009.scss';
</style>
