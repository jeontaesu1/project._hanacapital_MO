<script>
// MI_M01_b006
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    RoundStatus,
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
  <UiLayer
    ref="layer"
    type="toast"
    :backgroundClose="true"
    v-slot="layerSlotProps"
  >
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>
            상품, 이벤트, 혜택 안내를 위해<br />
            아래에 동의해 주세요
          </PopupTitle>
        </ToastPopupHead>
      </template>

      <div :class="$style['agree-list']">
        <UiAccordion :classNames="{ wrap: $style['agree-list__container'] }">
          <UiAccordionItem
            :classNames="{ item: $style['agree-list__all'] }"
            :initialOpen="true"
          >
            <div :class="$style['agree-list__all-head']">
              <CheckBox
                id="layerMyInfoMarketingAgreeAll"
                :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>전체동의 (선택)</CheckBoxLabelText>
              </CheckBox>
              <div :class="$style['agree-list__right']">
                <UiAccordionOpener
                  :classNames="{ button: $style['agree-list__all-opener'] }"
                />
              </div>
            </div>

            <UiAccordionLayer>
              <div :class="$style['agree-list__all-contents']">
                <ul :class="$style['agree-list__list']">
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        id="layerMyInfoMarketingAgree001"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText>
                          개인(신용)정보 선택적 수집·이용 동의
                        </CheckBoxLabelText>
                      </CheckBox>
                      <!-- case : 멤버십 수신 동의일 경우 노출 -->
                      <div :class="$style['agree-list__right']">
                        <RoundStatus
                          :classNames="{ wrap: 'display-block' }"
                          size="small"
                          theme="quinary"
                        >
                          보통
                        </RoundStatus>
                        <button
                          type="button"
                          :class="$style['agree-list__link']"
                        >
                          <span :class="$style['agree-list__link-text']">
                            상세보기
                          </span>
                        </button>
                      </div>
                      <!-- // case : 멤버십 수신 동의일 경우 노출 -->
                    </div>
                    <ul
                      :class="[
                        $style['agree-list__list'],
                        $style['agree-list__list--secondary'],
                      ]"
                    >
                      <!-- case : 마케팅 수신 동의일 경우 노출 -->
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="layerMyInfoMarketingAgree001_001"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="quinary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              상품안내 및 이용권유를 위한 수집·이용
                            </CheckBoxLabelText>
                          </CheckBox>
                        </div>
                      </li>
                      <!-- // case : 마케팅 수신 동의일 경우 노출 -->
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="layerMyInfoMarketingAgree001_002"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="quinary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              고유식별번호 필수적 수집·이용
                            </CheckBoxLabelText>
                          </CheckBox>
                        </div>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="layerMyInfoMarketingAgree001_003"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="quinary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              전자적 매체를 통한 광고성 정보의 수신
                            </CheckBoxLabelText>
                          </CheckBox>
                        </div>
                        <ul
                          :class="[
                            $style['agree-list__list'],
                            $style['agree-list__list--tertiary'],
                          ]"
                        >
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="layerMyInfoMarketingAgree001_003_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>전체</CheckBoxLabelText>
                              </CheckBox>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="layerMyInfoMarketingAgree001_003_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>전화</CheckBoxLabelText>
                              </CheckBox>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="layerMyInfoMarketingAgree001_003_003"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >문자메시지</CheckBoxLabelText
                                >
                              </CheckBox>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="layerMyInfoMarketingAgree001_003_004"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>우편</CheckBoxLabelText>
                              </CheckBox>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="layerMyInfoMarketingAgree001_003_005"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>이메일</CheckBoxLabelText>
                              </CheckBox>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton @click="layerSlotProps.close()">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myInfo/LayerMyInfoMarketingAgree.scss';
</style>
