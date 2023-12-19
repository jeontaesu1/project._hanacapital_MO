<script>
// Q_M02_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
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
        <FullPopupHead
          :classNames="{
            left: $style['header-left'],
            center: $style['header-center'],
            right: $style['header-right'],
          }"
        >
          <h2 class="text-body-1 font-weight-medium multi-ellipsis">
            개인정보 수집·이용 동의
          </h2>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText :classNames="{ wrap: 'text-title-2' }">
          <strong>개인정보 수집 동의</strong>
        </PageMainText>
      </PageTextGroup>

      <div>
        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">
            1. 개인정보 수집 및 이용 목적
          </h3>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li
              :class="[$style['basic-list__item'], 'text-body-4 color-black']"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                고객상담 접수 및 회신
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">
            2. 수집하는 개인정보 항목
          </h3>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li
              :class="[$style['basic-list__item'], 'text-body-4 color-black']"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">고객명, 연락처</div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">
            3. 보유 및 이용기간
          </h3>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li
              :class="[$style['basic-list__item'], 'text-body-4 color-black']"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                <div>
                  수집·이용 동의일로부터 개인(신용)정보의 수집·이용 목적을
                  달성할 때까지
                </div>

                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--small-margin'],
                    'row-margin-item',
                  ]"
                >
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'font-weight-regular color-gray-tertiary',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']">※</div>
                    <div :class="$style['basic-list__content']">
                      단, 수집이용 목적 달성 이후에는 금융사고 조사, 분쟁해결,
                      민원처리, 법령상 의무이행 및 당사의
                      리스트관리(통계)업무만을 위하여 보유 및 이용됩니다.
                    </div>
                  </li>
                </ul>
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
            <BasicButton>예약상담 신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/oneQ/Q_M02_l001.scss';
</style>
