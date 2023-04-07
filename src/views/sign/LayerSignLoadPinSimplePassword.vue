<script>
// Member_M07_l003
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import SwitchCheckBox from '@/components/ui/form/SwitchCheckBox.vue';
import IconTooltip from '@/assets/images/icon/tooltip.svg?component';
import Tooltip from 'vue3-popper';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    IllustObject,
    SwitchCheckBox,
    IconTooltip,
    Tooltip,
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
          <strong>이용 재등록을</strong><br />완료했어요
        </PageMainText>
      </PageTextGroup>

      <IllustObject type="complete" />

      <ul :class="$style['switch-list']">
        <li>
          <div :class="$style['switch-list__title']">
            앱 알림을 받아 보시겠어요?
          </div>
          <SwitchCheckBox id="alarm" />
        </li>
        <li>
          <div :class="$style['switch-list__title']">
            <Tooltip arrow placement="top" arrowPadding="198">
              <div :class="$style['tooltip__header']">
                자동으로 로그인하시겠어요?
                <button :class="$style['tooltip__button']">
                  <IconTooltip />
                </button>
              </div>
              <template #content>
                <h3 :class="$style['tooltip__title']">자동로그인</h3>
                <ul
                  :class="[$style['basic-list'], $style['basic-list--regular']]"
                >
                  <li :class="[$style['basic-list__item'], 'color-white']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      자동로그인 설정을 위해서는 간편비밀번호, 얼굴인증,
                      지문인증(Face ID)가 필요합니다.
                    </div>
                  </li>
                  <li :class="[$style['basic-list__item'], 'color-white']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      보안을 위해 기기의 화면잠금 설정이 되어 있는 경우에만
                      설정이 가능합니다.
                    </div>
                  </li>
                </ul>
              </template>
            </Tooltip>
          </div>
          <SwitchCheckBox id="auto" />
        </li>
      </ul>

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
@import '@/assets/scss/views/sign/LayerSignLoadPinSimplePassword.scss';
</style>
