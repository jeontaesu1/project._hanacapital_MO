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
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';

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
    UiAccordionOpener,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
    PopupButton,
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
          회원가입 약관에<br />
          <strong>동의해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <div class="test-section-sub">
        <div :class="$style['agree-list']">
          <ul :class="$style['agree-list__container']">
            <li :class="$style['agree-list__all']">
              <div :class="$style['agree-list__all-head']">
                <CheckBox
                  id="SignUp_check_box_01"
                  :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText
                    >전체동의(선택 동의 포함)</CheckBoxLabelText
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
                    <div :class="$style['agree-list__depth-head']">
                      <CheckBox
                        id="SignUp_check_box_02"
                        :classNames="{
                          wrap: $style['agree-list__depth-checkbox'],
                        }"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText
                          >서비스 이용약관 전체동의</CheckBoxLabelText
                        >
                      </CheckBox>
                      <div :class="$style['agree-list__right']">
                        <UiAccordionOpener
                          :classNames="{
                            button: $style['agree-list__depth-opener'],
                          }"
                        />
                      </div>
                    </div>

                    <UiAccordionLayer>
                      <div :class="$style['agree-list__depth-contents']">
                        <ul :class="$style['agree-list__list']">
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="SignUp_check_box_03"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >온라인 서비스 이용약관</CheckBoxLabelText
                                >
                              </CheckBox>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="SignUp_check_box_04"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >개인정보 필수적
                                  수집·이용동의</CheckBoxLabelText
                                >
                              </CheckBox>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="SignUp_check_box_05"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >개인(신용)정보 제3자 제공 동의 (SSO
                                  서비스)</CheckBoxLabelText
                                >
                              </CheckBox>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </UiAccordionLayer>
                  </UiAccordionItem>

                  <UiAccordionItem
                    :classNames="{ item: $style['agree-list__depth-item'] }"
                    :initialOpen="true"
                  >
                    <div :class="$style['agree-list__depth-head']">
                      <CheckBox
                        id="SignUp_check_box_06"
                        :classNames="{
                          wrap: $style['agree-list__depth-checkbox'],
                        }"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText>
                          <span class="color-gray-secondary">(선택)</span>
                          하나캐피탈 멤버십 가입 필수 전체 동의
                        </CheckBoxLabelText>
                      </CheckBox>
                      <div :class="$style['agree-list__right']">
                        <UiAccordionOpener
                          :classNames="{
                            button: $style['agree-list__depth-opener'],
                          }"
                        />
                      </div>
                    </div>

                    <UiAccordionLayer>
                      <div :class="$style['agree-list__depth-contents']">
                        <ul :class="$style['agree-list__list']">
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="SignUp_check_box_07"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  하나캐피탈 멤버십 회원 약관
                                </CheckBoxLabelText>
                              </CheckBox>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="SignUp_check_box_08"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  개인(신용)정보 필수적 수집·이용 동의
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
                                    id="SignUp_check_box_09"
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
                                    id="SignUp_check_box_10"
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
                          <!-- 개인정보 필수적 제3자 제공 동의 -->
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="SignUp_check_box_11"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  개인(신용)정보 필수적 조회 동의
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
                                    id="SignUp_check_box_12"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >개인(신용)정보 필수적 조회
                                      동의</CheckBoxLabelText
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
                          <!-- 본인 행정정보 제3자 제공 요구서 -->
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="SignUp_check_box_13"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="tertiary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  개인(신용)정보 필수적 제공 동의
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
                                    id="SignUp_check_box_14"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >본인 행정정보 제3자 제공 요구
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
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="SignUp_check_box_15"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >개인(신용)정보 필수적 제공
                                      (하나손해보험㈜)
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
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="SignUp_check_box_16"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >고유식별번호 필수적 수집·이용
                                      (하나손해보험㈜)
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
                  <UiAccordionItem
                    :classNames="{ item: $style['agree-list__depth-item'] }"
                    :initialOpen="true"
                  >
                    <div :class="$style['agree-list__depth-head']">
                      <CheckBox
                        id="SignUp_check_box_17"
                        :classNames="{
                          wrap: $style['agree-list__depth-checkbox'],
                        }"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText>
                          <span class="color-gray-secondary">(선택)</span>
                          하나캐피탈 멤버십 가입 선택 전체 동의
                        </CheckBoxLabelText>
                      </CheckBox>
                      <div :class="$style['agree-list__right']">
                        <UiAccordionOpener
                          :classNames="{
                            button: $style['agree-list__depth-opener'],
                          }"
                        />
                      </div>
                    </div>

                    <UiAccordionLayer>
                      <div :class="$style['agree-list__depth-contents']">
                        <ul :class="$style['agree-list__list']">
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="SignUp_check_box_18"
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
                            </div>
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
@import '@/assets/scss/views/personalLoan/LayerPersonalLoanSignUpAgree.scss';
@import '@/assets/scss/components/import/agree-list.scss';
</style>
