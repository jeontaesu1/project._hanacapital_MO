<script>
// My_M03_l213
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
          <PopupTitle>일반할부금융 중요사항 안내</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>할부금을 만기전에 상환하고 싶은데</strong><br />
          가능한가요?
        </PageMainText>
      </PageTextGroup>

      <IllustObject type="license" :classNames="{ wrap: 'row-margin-none' }" />

      <div class="row-margin-item-group-small">
        <div class="text-body-2">
          대출의 상환기일이 도래하기전에 상환할 경우,
          <span class="font-weight-medium">계약이 성립한 날로부터</span>
          <span class="color-red">
            3년 경과후에도 최대 1%의 해약금(중도상환수수료)이 발생
          </span>
          해요!
        </div>

        <section class="row-margin-contents">
          <div class="color-gray-secondary text-body-4">유이자</div>
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
                만기1년이상 : 중도상환원금 * 1% + 중도상환원금 *
                (중도상환수수료율 -1%) * 잔존기간/(할부기간-30일)
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
                만기1년미만 : 중도상환원금 * (중도상환수수료율) *
                잔존기간/(할부기간-30일) ※30일 미만시 30일로 간주
              </div>
            </li>
          </ul>
        </section>

        <section>
          <div class="color-gray-secondary text-body-4">무이자</div>
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
                중도상환수수료 없음
              </div>
            </li>
          </ul>
        </section>
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
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractDescription002_003.scss';
</style>
