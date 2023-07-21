<script>
// BF_M06_l022
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    RoundStatus,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
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
          온라인약정 약관에<br />
          <strong>동의해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <!-- Case : 일반할부금융(내구소비재)의 경우 노출 -->
      <section>
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-body-1 font-weight-medium">실제 소유자 확인</h3>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>성명</KeyValueTitle>
              <KeyValueText>김하나</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>주민등록번호</KeyValueTitle>
              <KeyValueText>123456-2******</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>국적</KeyValueTitle>
              <KeyValueText>대한민국</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <ul :class="[$style['basic-list'], 'row-margin-item-group']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본 확인서는 ‘특정 금융거래정보의 보고 및 이용 등에 관한 법률
              시행령‘ 제10조의5(실제 소유자에 대한 확인)에 의하여 작성이
              요구되는 필수 서식입니다. 작성하신 정보는 관련 법령에 의거
              안전하게 관리됩니다.
            </div>
          </li>
        </ul>
      </section>
      <!-- //Case : 일반할부금융(내구소비재)의 경우 노출 -->

      <div :class="[$style['agree-list'], 'row-margin-contents-group']">
        <ul :class="$style['agree-list__container']">
          <li :class="$style['agree-list__all']">
            <div :class="$style['agree-list__all-head']">
              <CheckBox
                id="layerMyLoanOnlineContractAgreeAll"
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
                      id="layerMyLoanOnlineContractAgree_001"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >상품 이용약관 전체동의</CheckBoxLabelText
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
                              id="layerMyLoanOnlineContractAgree_001_001"
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
                        <!-- Case : 상품에 따라 해당하는 약관 노출 -->
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerMyLoanOnlineContractAgree_001_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                자동차 오토론(대출) 약관
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
                        <!-- //Case : 상품에 따라 해당하는 약관 노출 -->

                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerMyLoanOnlineContractAgree_001_003"
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
                              id="layerMyLoanOnlineContractAgree_001_004"
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
                              id="layerMyLoanOnlineContractAgree_001_005"
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
                      </ul>
                    </div>
                  </UiAccordionLayer>
                </UiAccordionItem>
                <!-- //약관동의 : 상품 이용약관 전체동의 -->

                <!-- 약관동의 : 출금이체 신청약관 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractAgree_002"
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
                              id="layerMyLoanOnlineContractAgree_002_001"
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
                              id="layerMyLoanOnlineContractAgree_002_002"
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
                <!-- //약관동의 : 출금이체 신청약관 -->

                <!-- Case : 운용/금융리스의 경우 노출 -->
                <!-- 약관동의 : 핵심설명서 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractAgree_003"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>핵심설명서</CheckBoxLabelText>
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
                              id="layerMyLoanOnlineContractAgree_003_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                핵심설명서
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
                              계약담당자 김하나으로부터 (핵심설명서)를 교부받고
                              (계약의 중요내용)에 관해 상세하게 (설명을 듣고
                              이해)하였습니다.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </UiAccordionLayer>
                </UiAccordionItem>
                <!-- //약관동의 : 핵심설명서 -->
                <!-- //Case : 운용/금융리스의 경우 노출 -->

                <!-- Case : 렌터카의 경우 미노출 -->
                <!-- 약관동의 : 실제소유자 확인 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractAgree_004"
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
                              id="layerMyLoanOnlineContractAgree_004_001"
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
                <!-- //약관동의 : 실제소유자 확인 -->
                <!-- //Case : 렌터카의 경우 미노출 -->

                <!-- 약관동의 : 개인(신용)정보 필수적 동의 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractAgree_005"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >개인(신용)정보 필수적 동의</CheckBoxLabelText
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
                      <UiAccordion
                        :classNames="{ wrap: $style['agree-list__list'] }"
                      >
                        <UiAccordionItem
                          :classNames="{ item: $style['agree-list__item'] }"
                          :initialOpen="true"
                        >
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerMyLoanOnlineContractAgree_005_001"
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
                                    id="layerMyLoanOnlineContractAgree_005_001_001"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText>
                                      개인(신용)정보 수집·이용 동의
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
                                    id="layerMyLoanOnlineContractAgree_005_001_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText>
                                      고유식별정보 수집·이용 동의
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
                              id="layerMyLoanOnlineContractAgree_005_002"
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
                                    id="layerMyLoanOnlineContractAgree_005_002_001"
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
                                    id="layerMyLoanOnlineContractAgree_005_002_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >고유식별정보 필수적
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
                          </UiAccordionLayer>
                        </UiAccordionItem>
                        <UiAccordionItem
                          :classNames="{ item: $style['agree-list__item'] }"
                          :initialOpen="true"
                        >
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerMyLoanOnlineContractAgree_005_003"
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
                                    id="layerMyLoanOnlineContractAgree_005_003_001"
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
                                    id="layerMyLoanOnlineContractAgree_005_003_002"
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
                <!-- //약관동의 : 개인(신용)정보 필수적 동의 -->

                <!-- 약관동의 : 개인(신용)정보 선택적 수집, 이용동의 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractAgree_006"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >개인(신용)정보 선택적 수집, 이용동의</CheckBoxLabelText
                      >
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
                              id="layerMyLoanOnlineContractAgree_006_001"
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
                              id="layerMyLoanOnlineContractAgree_006_002"
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
                              id="layerMyLoanOnlineContractAgree_006_003"
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
                                  id="layerMyLoanOnlineContractAgree_006_003_001"
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
                                  id="layerMyLoanOnlineContractAgree_006_003_002"
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
                                  id="layerMyLoanOnlineContractAgree_006_003_003"
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
                                  id="layerMyLoanOnlineContractAgree_006_003_004"
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
                                  id="layerMyLoanOnlineContractAgree_006_003_005"
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

                <!-- Case : LM통해 신용대출 진입한 경우 노출 -->
                <!-- 약관동의 : 대출상담사 설명 확인서 -->
                <li :class="$style['agree-list__depth-item']">
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractAgree_007"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >대출상담사 설명 확인서</CheckBoxLabelText
                      >
                    </CheckBox>
                  </div>
                </li>
                <!-- //약관동의 : 대출상담사 설명 확인서 -->
                <!-- //Case : LM통해 신용대출 진입한 경우 노출 -->

                <!-- Case : 소비자 신용대출 약정 중 잔액 1억원 초과 일 때 노출 / 하나인 [계약등록] 신용대출 정보 內 합계(자영업자 제외) -->
                <!-- 약관동의 : 국토교통부 주택소유확인 시스템 등 이용 관련 개인(신용)정보 수집·이용·제공 동의 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractAgree_008"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >국토교통부 주택소유확인 시스템 등 이용 관련
                        개인(신용)정보 수집·이용·제공 동의</CheckBoxLabelText
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
                      <UiAccordion
                        :classNames="{ wrap: $style['agree-list__list'] }"
                      >
                        <UiAccordionItem
                          :classNames="{ item: $style['agree-list__item'] }"
                          :initialOpen="true"
                        >
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerMyLoanOnlineContractAgree_008_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                개인(신용)정보 수집·이용에 관한 사항
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
                                    id="layerMyLoanOnlineContractAgree_008_001_001"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText>
                                      개인(신용)정보 수집·이용 동의
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
                                    id="layerMyLoanOnlineContractAgree_008_001_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText>
                                      고유식별정보 동의 여부
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
                              id="layerMyLoanOnlineContractAgree_008_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                개인(신용)정보 제공에 관한 사항
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
                                    id="layerMyLoanOnlineContractAgree_008_002_001"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >개인(신용)정보 제공
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
                                    id="layerMyLoanOnlineContractAgree_008_002_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >고유식별정보 동의 여부</CheckBoxLabelText
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
                          </UiAccordionLayer>
                        </UiAccordionItem>
                      </UiAccordion>
                    </div>
                  </UiAccordionLayer>
                </UiAccordionItem>
                <!-- //약관동의 : 국토교통부 주택소유확인 시스템 등 이용 관련 개인(신용)정보 수집·이용·제공 동의 -->

                <!-- 약관동의 : 고액 신용대출의 사후 용도관리 강화 관련 동의 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractAgree_009"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >고액 신용대출의 사후 용도관리 강화 관련
                        동의</CheckBoxLabelText
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
                              id="layerMyLoanOnlineContractAgree_009_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                고액 신용대출의 사후 용도관리 강화 관련
                                추가약정용
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
                <!-- //약관동의 : 고액 신용대출의 사후 용도관리 강화 관련 동의 -->
                <!-- //Case : 소비자 신용대출 약정 중 잔액 1억원 초과 일 때 노출 / 하나인 [계약등록] 신용대출 정보 內 합계(자영업자 제외) -->

                <!-- Case : 내구소비재의 경우 노출 -->
                <!-- 약관동의 : 주요사항 전체동의 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractAgree_010"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>주요사항 전체동의</CheckBoxLabelText>
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
                              id="layerMyLoanOnlineContractAgree_010_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                할부금 지급 안내
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
                              id="layerMyLoanOnlineContractAgree_010_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                청약의 철회권 안내
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
                              id="layerMyLoanOnlineContractAgree_010_003"
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
                              id="layerMyLoanOnlineContractAgree_010_004"
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
                <!-- //약관동의 : 주요사항 전체동의 -->
                <!-- //Case : 내구소비재의 경우 노출 -->

                <!-- Case : 중도금대출의 경우 노출 -->
                <!-- 약관동의 : 중도금 주요사항 전체동의 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractAgree_011"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >중도금 주요사항 전체동의</CheckBoxLabelText
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
                              id="layerMyLoanOnlineContractAgree_011_001"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                중도금 분할 실행 동의서
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
                              id="layerMyLoanOnlineContractAgree_011_002"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                채권 양도 담보설정계약서
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
                              id="layerMyLoanOnlineContractAgree_011_003"
                              :classNames="{
                                wrap: $style['agree-list__checkbox'],
                              }"
                              theme="tertiary"
                            >
                              <CheckBoxObject />
                              <CheckBoxLabelText>
                                채권 양도 통지서
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
                <!-- //약관동의 : 중도금 주요사항 전체동의 -->
                <!-- //Case : 중도금대출의 경우 노출 -->

                <!-- Case : 중고차 오토론의 경우 노출 / 전체 동의 시 5번 약관은 팝업 자동 호출 -->
                <!-- 약관동의 : 중고차 오토론 주요사항 전체동의 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractAgree_012"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >중고차 오토론 주요사항 전체동의</CheckBoxLabelText
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
                              id="layerMyLoanOnlineContractAgree_012_001"
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
                              id="layerMyLoanOnlineContractAgree_012_002"
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
                              id="layerMyLoanOnlineContractAgree_012_003"
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
                              id="layerMyLoanOnlineContractAgree_012_004"
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
                <!-- //약관동의 : 중고차 오토론 주요사항 전체동의 -->
                <!-- //Case : 중고차 오토론의 경우 노출 / 전체 동의 시 5번 약관은 팝업 자동 호출 -->

                <!-- Case : 운용/금융리스 승계 후 이용자, 렌터카 승계 후 이용자의 경우 노출 -->
                <!-- 약관동의 : 자동차인수증 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractAgree_013"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>자동차인수증</CheckBoxLabelText>
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
                    <div :class="$style['agree-list__detail-secondary']">
                      <p
                        class="text-body-5 color-gray font-weight-light row-margin-item"
                      >
                        하나캐피탈과의 $리스계약$ 의거, 동 자동차를 정히
                        수령하였으며, 수령과 함께 $자동차리스$ 계약서 상의 제반
                        조항을 준수할 것을 확약합니다.
                      </p>
                      <BasicBox>
                        <KeyValue margin="regular-small">
                          <KeyValueItem
                            :classNames="{
                              item: 'text-body-5',
                            }"
                          >
                            <KeyValueTitle>차종명</KeyValueTitle>
                            <KeyValueText>아반떼/인스퍼레이션</KeyValueText>
                          </KeyValueItem>

                          <KeyValueItem
                            :classNames="{
                              item: 'text-body-5',
                            }"
                          >
                            <KeyValueTitle>차량번호</KeyValueTitle>
                            <KeyValueText>12가1234(차대번호출력)</KeyValueText>
                          </KeyValueItem>
                        </KeyValue>
                      </BasicBox>
                    </div>
                  </UiAccordionLayer>
                </UiAccordionItem>
                <!-- //약관동의 : 자동차인수증 -->
                <!-- //Case : 운용/금융리스 승계 후 이용자, 렌터카 승계 후 이용자의 경우 노출 -->

                <!-- Case : 렌터카연장, 출금이체 신청의 경우 미노출 -->
                <!-- 약관동의 : 전자금융거래약관 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractAgree_014"
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
                              id="layerMyLoanOnlineContractAgree_014_001"
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
                <!-- //Case : 렌터카연장, 출금이체 신청의 경우 미노출 -->

                <!-- Case : 하나캐피탈 멤버십 기가입자의 경우 미노출 -->
                <!-- 약관동의 : 하나캐피탈 멤버십 가입 필수 전체동의 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerMyLoanOnlineContractAgree_015"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        ><span class="color-gray-secondary">(선택)</span>
                        하나캐피탈 멤버십 가입 필수 전체동의</CheckBoxLabelText
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
                      <UiAccordion
                        :classNames="{ wrap: $style['agree-list__list'] }"
                      >
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerMyLoanOnlineContractAgree_015_001"
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
                              id="layerMyLoanOnlineContractAgree_015_002"
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
                                    id="layerMyLoanOnlineContractAgree_015_002_001"
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
                                    id="layerMyLoanOnlineContractAgree_015_002_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >고유식별정보 필수적
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
                          </UiAccordionLayer>
                        </UiAccordionItem>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerMyLoanOnlineContractAgree_015_003"
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
                              id="layerMyLoanOnlineContractAgree_015_004"
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
                                    id="layerMyLoanOnlineContractAgree_015_004_001"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >개인(신용)정보 필수적
                                      제공(신용정보회사)</CheckBoxLabelText
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
                                    id="layerMyLoanOnlineContractAgree_015_004_002"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >개인(신용)정보 필수적
                                      제공(하나손해보험㈜)</CheckBoxLabelText
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
                                    id="layerMyLoanOnlineContractAgree_015_004_003"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >고유식별번호 필수적
                                      제공(하나손해보험㈜)</CheckBoxLabelText
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
                      id="layerMyLoanOnlineContractAgree_016"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        ><span class="color-gray-secondary">(선택)</span>
                        하나캐피탈 멤버십 가입 선택 전체동의</CheckBoxLabelText
                      >
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
                              id="layerMyLoanOnlineContractAgree_016_001"
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
                                    id="layerMyLoanOnlineContractAgree_016_001_001"
                                    :classNames="{
                                      wrap: $style['agree-list__checkbox'],
                                    }"
                                    theme="quinary"
                                  >
                                    <CheckBoxObject />
                                    <CheckBoxLabelText
                                      >금융상품 안내 및 이용권유를 위한
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
                                    id="layerMyLoanOnlineContractAgree_016_001_002"
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
                                        id="layerMyLoanOnlineContractAgree_016_001_002_001"
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
                                        id="layerMyLoanOnlineContractAgree_016_001_002_002"
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
                                        id="layerMyLoanOnlineContractAgree_016_001_002_003"
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
                                        id="layerMyLoanOnlineContractAgree_016_001_002_004"
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
                                        id="layerMyLoanOnlineContractAgree_016_001_002_005"
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
                          </UiAccordionLayer>
                        </UiAccordionItem>
                      </UiAccordion>
                    </div>
                  </UiAccordionLayer>
                </UiAccordionItem>
                <!-- //약관동의 : 하나캐피탈 멤버십 가입 선택 전체동의 -->
                <!-- //Case : 하나캐피탈 멤버십 기가입자의 경우 미노출 -->
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
@import '@/assets/scss/views/myLoan/BF_M06_l022.scss';
</style>
