<script>
// AF_M07_l004
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IllustObject,
    BasicHr,
    BasicBox,
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
          승계 신청 URL 발송이<br />
          <strong>완료되었습니다</strong>
        </PageMainText>
        <PageSubText>
          <strong class="font-weight-medium color-blue">010-####-5678</strong>
          으로<br />
          승계 신청 문자가 정상적으로 발송되었습니다.
        </PageSubText>
      </PageTextGroup>

      <IllustObject type="complete" :classNames="{ wrap: $style['illust'] }" />

      <BasicHr
        type="contents"
        theme="quaternary"
        className="row-margin-container"
      />

      <section>
        <h3 class="text-body-2 row-margin-item-medium">승계 신청 대상 차량</h3>

        <BasicBox theme="tertiary">
          <ul
            :class="[$style['basic-list'], $style['basic-list--medium-margin']]"
          >
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-black',
                'font-weight-regular',
              ]"
            >
              오토리스 222나 2222
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-black',
                'font-weight-regular',
              ]"
            >
              오토리스 222나 2222
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-black',
                'font-weight-regular',
              ]"
            >
              오토리스 222나 2222
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-black',
                'font-weight-regular',
              ]"
            >
              오토리스 222나 2222
            </li>
          </ul>
        </BasicBox>
      </section>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton theme="secondary">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoSuccessionURLSendComplete.scss';
</style>
