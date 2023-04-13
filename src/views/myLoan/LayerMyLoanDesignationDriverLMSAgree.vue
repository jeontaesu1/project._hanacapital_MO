<script>
// My_M01_l010
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    PopupTitle,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    StepProgress,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
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
  <UiLayer ref="layer" type="full">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <template v-slot:left>
            <PopupButton type="back" />
          </template>
          <PopupTitle>지정운전자</PopupTitle>
        </FullPopupHead>
        <StepProgress :total="4" :current="2" />
      </template>

      <PageTextGroup>
        <PageMainText>
          서비스 이용약관에<br />
          <strong>동의해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <div :class="$style['agree-list']">
        <UiAccordion :classNames="{ wrap: $style['agree-list__container'] }">
          <UiAccordionItem
            :classNames="{ item: $style['agree-list__all'] }"
            :initialOpen="true"
          >
            <div :class="$style['agree-list__all-head']">
              <CheckBox
                id="layerMyLoanDesignationDriverLMSAgreeAgreeAll"
                :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>전체동의</CheckBoxLabelText>
              </CheckBox>
            </div>

            <UiAccordionLayer>
              <div :class="$style['agree-list__all-contents']">
                <ul :class="$style['agree-list__list']">
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        id="layerMyLoanDesignationDriverLMSAgree_001"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText
                          >개인(신용)정보 필수적 수집·이용
                          동의</CheckBoxLabelText
                        >
                      </CheckBox>
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
                            id="layerMyLoanDesignationDriverLMSAgree001_001"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="quinary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              개인(신용)정보 필수적 수집·이용
                            </CheckBoxLabelText>
                          </CheckBox>
                          <div :class="$style['agree-list__right']">
                            <button
                              type="button"
                              :class="$style['agree-list__link']"
                            >
                              <span :class="$style['agree-list__link-text']">
                                상세보기
                              </span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="layerMyLoanDesignationDriverLMSAgree001_002"
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
                          <div :class="$style['agree-list__right']">
                            <button
                              type="button"
                              :class="$style['agree-list__link']"
                            >
                              <span :class="$style['agree-list__link-text']">
                                상세보기
                              </span>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        id="layerMyLoanDesignationDriverLMSAgree002"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText
                          >개인(신용)정보 필수적 조회 동의</CheckBoxLabelText
                        >
                      </CheckBox>
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
                            id="layerMyLoanDesignationDriverLMSAgree002_001"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="quinary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              개인(신용)정보 필수적 조회
                            </CheckBoxLabelText>
                          </CheckBox>
                          <div :class="$style['agree-list__right']">
                            <button
                              type="button"
                              :class="$style['agree-list__link']"
                            >
                              <span :class="$style['agree-list__link-text']">
                                상세보기
                              </span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="layerMyLoanDesignationDriverLMSAgree002_002"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="quinary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              고유식별번호 필수적 조회
                            </CheckBoxLabelText>
                          </CheckBox>
                          <div :class="$style['agree-list__right']">
                            <button
                              type="button"
                              :class="$style['agree-list__link']"
                            >
                              <span :class="$style['agree-list__link-text']">
                                상세보기
                              </span>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        id="layerMyLoanDesignationDriverLMSAgree003"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="tertiary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText
                          >개인(신용)정보 필수적 제공 동의</CheckBoxLabelText
                        >
                      </CheckBox>
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
                            id="layerMyLoanDesignationDriverLMSAgree003_001"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="quinary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              개인(신용)정보 필수적 제공
                            </CheckBoxLabelText>
                          </CheckBox>
                          <div :class="$style['agree-list__right']">
                            <button
                              type="button"
                              :class="$style['agree-list__link']"
                            >
                              <span :class="$style['agree-list__link-text']">
                                상세보기
                              </span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="layerMyLoanDesignationDriverLMSAgree003_002"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="quinary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              고유식별번호 필수적 제공
                            </CheckBoxLabelText>
                          </CheckBox>
                          <div :class="$style['agree-list__right']">
                            <button
                              type="button"
                              :class="$style['agree-list__link']"
                            >
                              <span :class="$style['agree-list__link-text']">
                                상세보기
                              </span>
                            </button>
                          </div>
                        </div>
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
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanDesignationDriverLMSAgree.scss';
</style>
