<script>
// My_M03_l299
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
// import NoticeText from '@/components/ui/text/NoticeText.vue';
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
    // NoticeText,
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
          <PopupTitle>스탁론 중요사항 안내</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          <span class="font-weight-bold"
            >대출금을 만기 전에 상환하고 싶은데</span
          ><br />
          가능한가요?
        </PageMainText>
      </PageTextGroup>

      <IllustObject
        type="repayment"
        :classNames="{ wrap: 'row-margin-none' }"
      />

      <div>
        <div class="text-body-2">
          <div>
            스탁론의 경우 다른 대출 상품과는 달리 만기 전 담보비율 120%~130%
            충족시 언제든지 중도에 상환 하실 수 있어요.
          </div>
        </div>

        <div class="row-margin-contents">
          <div class="color-gray-secondary text-body-4">중도상환수수료</div>
          <ul :class="[$style['basic-list'], 'row-margin-mini']">
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
                중도상환수수료는 면제돼요.
              </div>
            </li>
          </ul>
        </div>
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
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractDescription010_003.scss';
</style>
