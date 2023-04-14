<script>
// AF_M07_b003
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicTooltip from '@/components/ui/tooltip/BasicTooltip.vue';

import IconTooltip from '@/assets/images/icon/tooltip.svg?component';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicTooltip,
    IconTooltip,
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
  <UiLayer ref="layer" type="toast" :backgroundClose="true">
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>리스 상세조건</PopupTitle>
        </ToastPopupHead>
      </template>

      <KeyValueList margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'flex-box' }">
            리스료 합계
            <BasicTooltip
              placement="bottom"
              :classNames="{ wrap: $style['switch-list__tip'] }"
            >
              <IconTooltip class="display-block" />
              <span class="for-a11y">(도움말)</span>

              <template v-slot:contents>
                <section :class="$style['tooltip-section']">
                  <h3 :class="$style['tooltip-section__title']">리스료 합계</h3>
                  <ul
                    :class="[
                      $style['basic-list'],
                      $style['basic-list--mini-margin'],
                    ]"
                  >
                    <li :class="[$style['basic-list__item'], 'color-white']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        “잔여기간(00개월)×월 리스료(0원)”으로 리스료 총 납부금액
                        0원입니다.
                      </div>
                    </li>
                  </ul>
                </section>
              </template>
            </BasicTooltip>
          </KeyValueTitle>
          <KeyValueText>
            0 원<br />
            <p
              class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
            >
              자동차세 포함
            </p>
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>즉시출금일자</KeyValueTitle>
          <KeyValueText>2021.11.08</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>즉시출금금액</KeyValueTitle>
          <KeyValueText>318,870 원</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>증권계좌번호</KeyValueTitle>
          <KeyValueText>(키움증권)***1234567</KeyValueText>
        </KeyValueItem>
      </KeyValueList>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">취소</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>즉시출금신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/sign/LayerSignUpAppComplete.scss';
</style>
