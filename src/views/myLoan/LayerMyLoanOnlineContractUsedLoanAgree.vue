<script>
// AF_M98_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    StepProgress,
    PageTextGroup,
    PageMainText,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    UiAccordion,
    UiAccordionItem,
    UiAccordionOpener,
    UiAccordionLayer,
    RoundStatus,
    BasicButton,
    ButtonList,
    ButtonListItem,
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
          <PopupTitle>온라인약정</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="8" :current="3" />
      </template>

      <PageTextGroup>
        <PageMainText>
          온라인약정 약관에<br />
          <strong>동의해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <div :class="$style['agree-list']">
        <ul :class="$style['agree-list__container']">
          <li :class="$style['agree-list__all']">
            <div :class="$style['agree-list__all-head']">
              <CheckBox
                id="layerMyLoanOnlineContractUsedLoanAgreeAll"
                :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>전체동의 (선택 동의 포함)</CheckBoxLabelText>
              </CheckBox>
            </div>

            <div :class="$style['agree-list__all-contents']">
              <UiAccordion :classNames="{ wrap: $style['agree-list__depth'] }">
                <!-- 약관동의 : 상품 이용약관 전체동의 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractUsedLoanAgree_001"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        상품 이용약관 전체동의
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_001_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                여신거래 기본약관
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
                        <!-- Case : 중고차 오토론일 경우 노출 -->
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerMyLoanOnlineContractUsedLoanAgree_001_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                중고 자동차 대출 표준약관
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_001_003"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                자동차 할부금융 약관
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
                        <!-- // Case : 중고차 오토론일 경우 노출 -->
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerMyLoanOnlineContractUsedLoanAgree_001_004"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                고객정보 취급방침
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_001_005"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                고객권리안내문
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_001_006"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                고객안내사항
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_001_007"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                근저당권 설정계약
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
                    </div>
                  </UiAccordionLayer>
                </UiAccordionItem>
                <!-- //약관동의 : 상품 이용약관 전체동의 -->

                <!-- Case : 할부론일 경우 노출 -->
                <!-- 약관동의 : 출금이체 신청약관 전체동의 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractUsedLoanAgree_002"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>출금이체 신청약관</CheckBoxLabelText>
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_002_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                개인정보 수집·이용 동의
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_002_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                개인정보 제3자 제공동의
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
                    </div>
                  </UiAccordionLayer>
                </UiAccordionItem>
                <!-- //약관동의 : 출금이체 신청약관 전체동의 -->
                <!-- // Case : 할부론일 경우 노출 -->

                <!-- 약관동의 : 실제소유자 확인 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractUsedLoanAgree_003"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>실제소유자 확인</CheckBoxLabelText>
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_003_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                계약자 본인이 실제 소유자임을 확인합니다
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
                          <div :class="$style['agree-list__detail']">
                            <p class="text-body-5 color-gray font-weight-light">
                              계약자와 실제 소유자가 다른 경우 금융거래가
                              제한됩니다.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </UiAccordionLayer>
                </UiAccordionItem>
                <!-- // 약관동의 : 실제소유자 확인 -->

                <!-- 약관동의 : 개인(신용)정보 필수적 동의 전체동의 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractUsedLoanAgree_004"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        개인(신용)정보 필수적 동의
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
                      <UiAccordion
                        :classNames="{ wrap: $style['agree-list__list'] }"
                      >
                        <UiAccordionItem
                          :classNames="{ item: $style['agree-list__item'] }"
                          :initialOpen="true"
                        >
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerMyLoanOnlineContractUsedLoanAgree_004_001"
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
                            <div :class="$style['agree-list__right']">
                              <UiAccordionOpener
                                :classNames="{
                                  button: $style['agree-list__depth-opener'],
                                }"
                              />
                            </div>
                          </div>
                          <UiAccordionLayer>
                            <ul
                              :class="[
                                $style['agree-list__list'],
                                $style['agree-list__list--secondary'],
                              ]"
                            >
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="layerMyLoanOnlineContractUsedLoanAgree_004_001_001"
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
                                    id="layerMyLoanOnlineContractUsedLoanAgree_004_001_002"
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
                          </UiAccordionLayer>
                        </UiAccordionItem>
                        <UiAccordionItem
                          :classNames="{ item: $style['agree-list__item'] }"
                          :initialOpen="true"
                        >
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerMyLoanOnlineContractUsedLoanAgree_004_002"
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
                            <div :class="$style['agree-list__right']">
                              <UiAccordionOpener
                                :classNames="{
                                  button: $style['agree-list__depth-opener'],
                                }"
                              />
                            </div>
                          </div>
                          <UiAccordionLayer>
                            <ul
                              :class="[
                                $style['agree-list__list'],
                                $style['agree-list__list--secondary'],
                              ]"
                            >
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="layerMyLoanOnlineContractUsedLoanAgree_004_002_001"
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
                                    id="layerMyLoanOnlineContractUsedLoanAgree_004_002_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText>
                                      고유식별정보 필수적 조회
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
                          </UiAccordionLayer>
                        </UiAccordionItem>
                        <UiAccordionItem
                          :classNames="{ item: $style['agree-list__item'] }"
                          :initialOpen="true"
                        >
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerMyLoanOnlineContractUsedLoanAgree_004_003"
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
                            <div :class="$style['agree-list__right']">
                              <UiAccordionOpener
                                :classNames="{
                                  button: $style['agree-list__depth-opener'],
                                }"
                              />
                            </div>
                          </div>
                          <UiAccordionLayer>
                            <ul
                              :class="[
                                $style['agree-list__list'],
                                $style['agree-list__list--secondary'],
                              ]"
                            >
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="layerMyLoanOnlineContractUsedLoanAgree_004_003_001"
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
                                    id="layerMyLoanOnlineContractUsedLoanAgree_004_003_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText>
                                      고유식별정보 필수적 제공
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
                          </UiAccordionLayer>
                        </UiAccordionItem>
                      </UiAccordion>
                    </div>
                  </UiAccordionLayer>
                </UiAccordionItem>
                <!-- //약관동의 : 개인(신용)정보 필수적 동의 전체동의  -->

                <!-- 약관동의 : 개인(신용)정보 선택적 수집, 이용동의 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractUsedLoanAgree_005"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        개인(신용)정보 선택적 수집, 이용동의
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_005_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                상품안내 및 이용권유를 위한 수집·이용
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_005_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                고유식별번호 선택적 수집·이용
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_005_003"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                전자적 매체를 통한 광고성 정보의 수신
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
                          <ul
                            :class="[
                              $style['agree-list__list'],
                              $style['agree-list__list--tertiary'],
                            ]"
                          >
                            <li :class="$style['agree-list__item']">
                              <div :class="$style['agree-list__head']">
                                <CheckBox
                                  id="layerMyLoanOnlineContractUsedLoanAgree_005_003_001"
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
                                  id="layerMyLoanOnlineContractUsedLoanAgree_005_003_002"
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
                                  id="layerMyLoanOnlineContractUsedLoanAgree_005_003_003"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText>
                                    문자메시지
                                  </CheckBoxLabelText>
                                </CheckBox>
                              </div>
                            </li>
                            <li :class="$style['agree-list__item']">
                              <div :class="$style['agree-list__head']">
                                <CheckBox
                                  id="layerMyLoanOnlineContractUsedLoanAgree_005_003_004"
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
                                  id="layerMyLoanOnlineContractUsedLoanAgree_005_003_005"
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
                    </div>
                  </UiAccordionLayer>
                </UiAccordionItem>
                <!-- //약관동의 : 개인(신용)정보 선택적 수집, 이용동의 -->

                <!-- 약관동의 : 전자금융거래약관 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractUsedLoanAgree_006"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>전자금융거래약관</CheckBoxLabelText>
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_006_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                전자금융거래약관
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
                    </div>
                  </UiAccordionLayer>
                </UiAccordionItem>
                <!-- //약관동의 : 전자금융거래약관 -->

                <!-- Case : 중고차 오토론일 경우 노출 -->
                <!-- 약관동의 : 중고차 오토론 주요사항 전체동의 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractUsedLoanAgree_007"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        중고차 오토론 주요사항 전체동의
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_007_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                중고차 대출사기 방지 안내
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_007_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                금리인하요구권 안내
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_007_003"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                신용점수 하락가능 안내
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_007_004"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                기한 이익상실 안내
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
                    </div>
                  </UiAccordionLayer>
                </UiAccordionItem>
                <!-- // 약관동의 : 중고차 오토론 주요사항 전체동의 -->
                <!-- // Case : 중고차 오토론일 경우 노출 -->

                <!-- Case : 중고차 할부인 경우 노출 -->
                <!-- 약관동의 : 중고차 할부 주요사항 전체동의 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractUsedLoanAgree_008"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        중고차 할부 주요사항 전체동의
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_008_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                중고차 대출사기 방지 안내
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_008_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                금리인하요구권 안내
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_008_003"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                신용점수 하락가능 안내
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_008_004"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                기한 이익상실 안내
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
                              id="layerMyLoanOnlineContractUsedLoanAgree_008_005"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                할부금 수령 위임안내
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
                    </div>
                  </UiAccordionLayer>
                </UiAccordionItem>
                <!-- // 약관동의 : 중고차 오토론 주요사항 전체동의 -->
                <!-- // Case : 중고차 할부인 경우 노출 -->

                <!-- Case : 하나캐피탈 멤버십 기가입자일 경우 미노출 -->
                <!-- 약관동의 : 하나캐피탈 멤버십 가입 필수 전체동의 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractUsedLoanAgree_009"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        <span class="color-gray-secondary">(선택)</span>
                        하나캐피탈 멤버십 가입 필수 전체동의
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
                      <UiAccordion
                        :classNames="{ wrap: $style['agree-list__list'] }"
                      >
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerMyLoanOnlineContractUsedLoanAgree_009_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                하나캐피탈 멤버십 이용약관
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
                        <UiAccordionItem
                          :classNames="{ item: $style['agree-list__item'] }"
                          :initialOpen="true"
                        >
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerMyLoanOnlineContractUsedLoanAgree_009_002"
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
                            <div :class="$style['agree-list__right']">
                              <UiAccordionOpener
                                :classNames="{
                                  button: $style['agree-list__depth-opener'],
                                }"
                              />
                            </div>
                          </div>
                          <UiAccordionLayer>
                            <ul
                              :class="[
                                $style['agree-list__list'],
                                $style['agree-list__list--secondary'],
                              ]"
                            >
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="layerMyLoanOnlineContractUsedLoanAgree_009_002_001"
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
                                    id="layerMyLoanOnlineContractUsedLoanAgree_009_002_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText>
                                      고유식별정보 필수적 수집·이용
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
                          </UiAccordionLayer>
                        </UiAccordionItem>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerMyLoanOnlineContractUsedLoanAgree_009_003"
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
                        <UiAccordionItem
                          :classNames="{ item: $style['agree-list__item'] }"
                          :initialOpen="true"
                        >
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerMyLoanOnlineContractUsedLoanAgree_009_004"
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
                            <div :class="$style['agree-list__right']">
                              <UiAccordionOpener
                                :classNames="{
                                  button: $style['agree-list__depth-opener'],
                                }"
                              />
                            </div>
                          </div>
                          <UiAccordionLayer>
                            <ul
                              :class="[
                                $style['agree-list__list'],
                                $style['agree-list__list--secondary'],
                              ]"
                            >
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="layerMyLoanOnlineContractUsedLoanAgree_009_004_001"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText>
                                      개인(신용)정보 필수적 제공<br />
                                      (신용정보회사)
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
                                    id="layerMyLoanOnlineContractUsedLoanAgree_009_004_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText>
                                      개인(신용)정보 필수적 제공<br />
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
                                    id="layerMyLoanOnlineContractUsedLoanAgree_009_004_003"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >고유식별번호 필수적 제공<br />(하나손해보험㈜)
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
                          </UiAccordionLayer>
                        </UiAccordionItem>
                      </UiAccordion>
                    </div>
                  </UiAccordionLayer>
                </UiAccordionItem>
                <!-- //약관동의 : 하나캐피탈 멤버십 가입 필수 전체동의 -->

                <!-- 약관동의 : 하나캐피탈 멤버십 가입 선택 전체동의 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractUsedLoanAgree_010"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        <span class="color-gray-secondary">(선택)</span>
                        하나캐피탈 멤버십 가입 선택 전체동의
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
                      <UiAccordionOpener
                        :classNames="{
                          button: $style['agree-list__depth-opener'],
                        }"
                      />
                    </div>
                  </div>
                  <UiAccordionLayer>
                    <div :class="$style['agree-list__depth-contents']">
                      <UiAccordion
                        :classNames="{ wrap: $style['agree-list__list'] }"
                      >
                        <UiAccordionItem
                          :classNames="{ item: $style['agree-list__item'] }"
                          :initialOpen="true"
                        >
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerMyLoanOnlineContractUsedLoanAgree_010_001"
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
                            <div :class="$style['agree-list__right']">
                              <UiAccordionOpener
                                :classNames="{
                                  button: $style['agree-list__depth-opener'],
                                }"
                              />
                            </div>
                          </div>
                          <UiAccordionLayer>
                            <ul
                              :class="[
                                $style['agree-list__list'],
                                $style['agree-list__list--secondary'],
                              ]"
                            >
                              <li :class="$style['agree-list__item']">
                                <div :class="$style['agree-list__head']">
                                  <CheckBox
                                    id="layerMyLoanOnlineContractUsedLoanAgree_010_001_001"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText>
                                      금융상품 안내 및 이용권유를 위한 수집·이용
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
                                    id="layerMyLoanOnlineContractUsedLoanAgree_010_001_002"
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
                                <ul
                                  :class="[
                                    $style['agree-list__list'],
                                    $style['agree-list__list--tertiary'],
                                  ]"
                                >
                                  <li :class="$style['agree-list__item']">
                                    <div :class="$style['agree-list__head']">
                                      <CheckBox
                                        id="layerMyLoanOnlineContractUsedLoanAgree_010_001_002_001"
                                        :classNames="{
                                          wrap: $style['agree-list__checkbox'],
                                        }"
                                        theme="quinary"
                                      >
                                        <CheckBoxObject />
                                        <CheckBoxLabelText>
                                          전체
                                        </CheckBoxLabelText>
                                      </CheckBox>
                                    </div>
                                  </li>
                                  <li :class="$style['agree-list__item']">
                                    <div :class="$style['agree-list__head']">
                                      <CheckBox
                                        id="layerMyLoanOnlineContractUsedLoanAgree_010_001_002_002"
                                        :classNames="{
                                          wrap: $style['agree-list__checkbox'],
                                        }"
                                        theme="quinary"
                                      >
                                        <CheckBoxObject />
                                        <CheckBoxLabelText>
                                          전화
                                        </CheckBoxLabelText>
                                      </CheckBox>
                                    </div>
                                  </li>
                                  <li :class="$style['agree-list__item']">
                                    <div :class="$style['agree-list__head']">
                                      <CheckBox
                                        id="layerMyLoanOnlineContractUsedLoanAgree_010_001_002_003"
                                        :classNames="{
                                          wrap: $style['agree-list__checkbox'],
                                        }"
                                        theme="quinary"
                                      >
                                        <CheckBoxObject />
                                        <CheckBoxLabelText>
                                          문자메시지
                                        </CheckBoxLabelText>
                                      </CheckBox>
                                    </div>
                                  </li>
                                  <li :class="$style['agree-list__item']">
                                    <div :class="$style['agree-list__head']">
                                      <CheckBox
                                        id="layerMyLoanOnlineContractUsedLoanAgree_010_001_002_004"
                                        :classNames="{
                                          wrap: $style['agree-list__checkbox'],
                                        }"
                                        theme="quinary"
                                      >
                                        <CheckBoxObject />
                                        <CheckBoxLabelText>
                                          우편
                                        </CheckBoxLabelText>
                                      </CheckBox>
                                    </div>
                                  </li>
                                  <li :class="$style['agree-list__item']">
                                    <div :class="$style['agree-list__head']">
                                      <CheckBox
                                        id="layerMyLoanOnlineContractUsedLoanAgree_010_001_002_005"
                                        :classNames="{
                                          wrap: $style['agree-list__checkbox'],
                                        }"
                                        theme="quinary"
                                      >
                                        <CheckBoxObject />
                                        <CheckBoxLabelText>
                                          이메일
                                        </CheckBoxLabelText>
                                      </CheckBox>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </UiAccordionLayer>
                        </UiAccordionItem>
                      </UiAccordion>
                    </div>
                  </UiAccordionLayer>
                </UiAccordionItem>
                <!-- //약관동의 : 하나캐피탈 멤버십 가입 선택 전체동의 -->
                <!-- // Case : 하나캐피탈 멤버십 기가입자일 경우 미노출 -->
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
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractUsedLoanAgree.scss';
</style>
