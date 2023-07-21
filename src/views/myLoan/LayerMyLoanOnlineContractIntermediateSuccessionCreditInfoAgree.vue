<script>
// BF_M04_l003
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    UiAccordion,
    UiAccordionItem,
    UiAccordionOpener,
    UiAccordionLayer,
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
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          신용정보조회 동의를 위한<br />
          <strong>서비스 이용약관에 동의해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <div :class="$style['agree-list']">
        <ul :class="$style['agree-list__container']">
          <li :class="$style['agree-list__all']">
            <div :class="$style['agree-list__all-head']">
              <CheckBox
                id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgreeAll001"
                :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>전체동의</CheckBoxLabelText>
              </CheckBox>
            </div>

            <div :class="$style['agree-list__all-contents']">
              <ul :class="$style['agree-list__list']">
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree_001"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >개인(신용)정보 필수적 수집·이용 동의</CheckBoxLabelText
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
                          id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree001_001"
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
                          id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree001_002"
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
                      id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree002"
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
                          id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree002_001"
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
                          id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree002_002"
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
                      id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree003"
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
                          id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree003_001"
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
                          id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree003_002"
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

              <UiAccordion
                :classNames="{
                  wrap: [
                    $style['agree-list__depth'],
                    'row-margin-contents-group',
                  ],
                }"
              >
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgreeAll002"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        공공마이데이터 서비스 이용<br />
                        전체동의(증빙서류 자동제출)
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
                              id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree004"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                개인(신용)정보 필수적 수집·이용 동의<br />
                                (공공 마이데이터)
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
                                  id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree004_001"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >개인(신용)정보 수집·이용
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
                            <li :class="$style['agree-list__item']">
                              <div :class="$style['agree-list__head']">
                                <CheckBox
                                  id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree004_002"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >고유식별정보 수집·이용
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
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree005"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                개인(신용)정보 필수적 제공 동의<br />
                                (공공 마이데이터)
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
                                  id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree005_001"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >개인(신용)정보 제공 동의</CheckBoxLabelText
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
                                  id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree005_002"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >고유식별정보 제공 동의</CheckBoxLabelText
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
                              id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree006"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                개인(신용)정보 필수적 제3자 제공 동의<br />
                                (공공 마이데이터)
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
                                  id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree006_001"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >개인(신용)정보 제공(조회)
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
                            <li :class="$style['agree-list__item']">
                              <div :class="$style['agree-list__head']">
                                <CheckBox
                                  id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree006_002"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText
                                    >고유식별정보 제공(조회)
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
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree007"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                본인 행정정보 제3자 제공 요구서<br />
                                (공공 마이데이터)
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
                                  id="layerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree007_001"
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
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractIntermediateSuccessionCreditInfoAgree.scss';
</style>
