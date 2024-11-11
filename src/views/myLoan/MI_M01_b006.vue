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
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';

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
    CheckBoxLabelText,
    CheckBoxObject,
    RoundStatus,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
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
          <PopupTitle> 하나금융그룹 계열사 마케팅 수신 동의 </PopupTitle>
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
                id="testagree001All"
                :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>
                  하나금융그룹 계열사 상품서비스 안내 및 공동마케팅
                  전체동의(선택)
                </CheckBoxLabelText>
              </CheckBox>
              <div :class="$style['agree-list__right']">
                <UiAccordionOpener
                  :classNames="{ button: $style['agree-list__all-opener'] }"
                />
              </div>
            </div>

            <UiAccordionLayer>
              <div
                :class="$style['agree-list__all-contents']"
                style="padding-top: 16px"
              >
                <UiAccordion
                  :classNames="{ wrap: $style['agree-list__depth'] }"
                >
                  <UiAccordionItem
                    :classNames="{ item: $style['agree-list__depth-item'] }"
                    :initialOpen="true"
                  >
                    <UiAccordionLayer>
                      <div :class="$style['agree-list__depth-contents']">
                        <ul :class="$style['agree-list__list']">
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="MI_M01_b006_001_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >개인(신용)정보 필수적 수집·이용 동의
                                </CheckBoxLabelText>
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <RoundStatus
                                  :classNames="{ wrap: 'display-block' }"
                                  size="small"
                                  theme="senary"
                                >
                                  신중
                                </RoundStatus>
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                            <ul
                              :class="[
                                $style['agree-list__list'],
                                $style['agree-list__list--secondary'],
                              ]"
                            >
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="MI_M01_b006_001_001_001"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText>
                                      하나금융그룹 계열사의 상품 또는 서비스의
                                      안내 및 이용 권유, 하나금융그룹 계열사간의
                                      공동마케팅을위한 수집·이용
                                    </CheckBoxLabelText>
                                  </CheckBox>
                                </div>
                              </li>
                            </ul>
                          </li>

                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="MI_M01_b006_002_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  개인(신용)정보 제공 동의
                                </CheckBoxLabelText>
                              </CheckBox>
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
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                            <ul
                              :class="[
                                $style['agree-list__list'],
                                $style['agree-list__list--secondary'],
                              ]"
                            >
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="MI_M01_b006_002_002_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >하나은행 등 하나금융그룹 계열사에
                                      제공</CheckBoxLabelText
                                    >
                                  </CheckBox>
                                </div>
                              </li>
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="MI_M01_b006_002_002_003"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >전자적 매체를 통한 광고성 정보의
                                      수신</CheckBoxLabelText
                                    >
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
                                        id="MI_M01_b006_002_002_003_001"
                                        :classNames="{
                                          wrap: $style['agree-list__checkbox'],
                                        }"
                                        theme="quinary"
                                      >
                                        <CheckBoxObject />
                                        <CheckBoxLabelText
                                          >전체</CheckBoxLabelText
                                        >
                                      </CheckBox>
                                    </div>
                                  </li>
                                  <li :class="$style['agree-list__item']">
                                    <div :class="$style['agree-list__head']">
                                      <CheckBox
                                        id="MI_M01_b006_002_002_003_002"
                                        :classNames="{
                                          wrap: $style['agree-list__checkbox'],
                                        }"
                                        theme="quinary"
                                      >
                                        <CheckBoxObject />
                                        <CheckBoxLabelText
                                          >전화</CheckBoxLabelText
                                        >
                                      </CheckBox>
                                    </div>
                                  </li>
                                  <li :class="$style['agree-list__item']">
                                    <div :class="$style['agree-list__head']">
                                      <CheckBox
                                        id="MI_M01_b006_002_002_003_003"
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
                                        id="MI_M01_b006_002_002_003_004"
                                        :classNames="{
                                          wrap: $style['agree-list__checkbox'],
                                        }"
                                        theme="quinary"
                                      >
                                        <CheckBoxObject />
                                        <CheckBoxLabelText
                                          >우편</CheckBoxLabelText
                                        >
                                      </CheckBox>
                                    </div>
                                  </li>
                                  <li :class="$style['agree-list__item']">
                                    <div :class="$style['agree-list__head']">
                                      <CheckBox
                                        id="MI_M01_b006_002_002_003_005"
                                        :classNames="{
                                          wrap: $style['agree-list__checkbox'],
                                        }"
                                        theme="quinary"
                                      >
                                        <CheckBoxObject />
                                        <CheckBoxLabelText
                                          >이메일</CheckBoxLabelText
                                        >
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
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/MI_M01_b006_toast.scss';
</style>
