<script>
import { ref, reactive } from 'vue';
// import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
    PopupButton,
    PageSubText,
  },
  setup() {
    const state = reactive({
      nameError: false,
      idNumberError: false,
      phoneError: false,
    });

    const layer = ref(null);

    return {
      state,
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
          한도조회를 위해<br />
          <strong>동의해 주세요</strong>
        </PageMainText>
        <PageSubText>
          대출상담 및 한도조회를 위한 신용정보조회는<br />
          개인신용평점에 영향을 주지 않습니다.
        </PageSubText>
      </PageTextGroup>

      <div class="test-section-sub">
        <div :class="$style['agree-list']">
          <ul :class="$style['agree-list__container']">
            <li :class="$style['agree-list__all']">
              <div :class="$style['agree-list__all-head']">
                <CheckBox
                  id="business_checkbox"
                  :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText
                    >서비스 이용약관 전체동의</CheckBoxLabelText
                  >
                </CheckBox>
              </div>

              <div :class="$style['agree-list__all-contents']">
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
                                id="business_checkbox_001_001"
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
                                    id="business_checkbox_001_001_001"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >개인(신용)정보 필수적
                                      수집·이용</CheckBoxLabelText
                                    >
                                  </CheckBox>
                                  <div :class="$style['agree-list__right']">
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
                              </li>
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="business_checkbox_001_001_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >고유식별번호 필수적
                                      수집·이용</CheckBoxLabelText
                                    >
                                  </CheckBox>
                                  <div :class="$style['agree-list__right']">
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
                              </li>
                            </ul>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="business_checkbox_001_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >개인(신용)정보 필수적 조회
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
                                    id="business_checkbox_001_002_001"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >개인(신용)정보 필수적
                                      조회</CheckBoxLabelText
                                    >
                                  </CheckBox>
                                  <div :class="$style['agree-list__right']">
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
                              </li>
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="business_checkbox_001_002_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >고유식별번호 필수적
                                      조회</CheckBoxLabelText
                                    >
                                  </CheckBox>
                                  <div :class="$style['agree-list__right']">
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
                              </li>
                            </ul>
                          </li>
                          <!-- 개인정보 필수적 제공 동의 -->
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="business_checkbox_001_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >개인(신용)정보 필수적 제공
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
                                    id="business_checkbox_001_002_001"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >개인(신용)정보 필수적
                                      제공</CheckBoxLabelText
                                    >
                                  </CheckBox>
                                  <div :class="$style['agree-list__right']">
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
                              </li>
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="business_checkbox_001_002_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >고유식별번호 필수적
                                      제공</CheckBoxLabelText
                                    >
                                  </CheckBox>
                                  <div :class="$style['agree-list__right']">
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
                              </li>
                            </ul>
                          </li>

                          <!-- 금융상품 안내 -->
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="business_checkbox_001_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >금융상품안내
                                </CheckBoxLabelText>
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
                                    id="business_checkbox_001_002_001"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >금융 상품 안내 동의
                                    </CheckBoxLabelText>
                                  </CheckBox>
                                  <div :class="$style['agree-list__right']">
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
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </UiAccordionLayer>
                  </UiAccordionItem>
                </UiAccordion>
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
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/LayerPersonalLoanBusinessAgree.scss';
@import '@/assets/scss/components/import/agree-list.scss';
</style>
