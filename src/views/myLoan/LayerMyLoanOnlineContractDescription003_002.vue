<script>
// My_M03_l224
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
          <PopupTitle>중도금대출 중요사항 안내</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          민원ㆍ상담이 빈번하여<br />
          <strong>숙지가 필요해요</strong>
        </PageMainText>
      </PageTextGroup>

      <IllustObject type="license" :classNames="{ wrap: 'row-margin-none' }" />

      <div class="row-margin-item-group-small">
        <div :class="$style['contents-list']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--quinary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">Q</div>
                <div :class="$style['contents-list__title']">
                  중도금의 자금용도는 어떻게 되나요?
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">A</div>
                <div :class="$style['contents-list__title']">
                  분양대급 납부 용도입니다.
                </div>
              </div>
            </li>
          </ol>
        </div>

        <div :class="[$style['contents-list'], 'row-margin-contents']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--quinary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">Q</div>
                <div :class="$style['contents-list__title']">
                  대출금을 만기 전에 상환하고 싶은데 가능한가요?
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">A</div>
                <div :class="$style['contents-list__title']">
                  만기전 상환가능합니다. (중도상환 수수료 면제)
                </div>
              </div>
            </li>
          </ol>
        </div>

        <div :class="[$style['contents-list'], 'row-margin-contents']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--quinary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">Q</div>
                <div :class="$style['contents-list__title']">
                  대출을 이용하기 위해서는 어떤 비용을 부담해야 하나요?
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">A</div>
                <div :class="$style['contents-list__title']">
                  인지세를 부담하셔야 합니다.<br />
                  (인지세법에 따라 납부하는 세금으로 금융사와 고객이 각각 50%
                  부담합니다)
                </div>
              </div>
            </li>
          </ol>
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
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractDescription003_002.scss';
</style>
