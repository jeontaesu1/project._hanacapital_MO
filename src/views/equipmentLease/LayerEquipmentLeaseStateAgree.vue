<script>
// EL_M02_l005
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
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
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    RoundStatus,
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
          <strong>
            신용정보조회 동의를 위한<br />
            서비스 이용약관에 동의해 주세요
          </strong>
        </PageMainText>
      </PageTextGroup>

      <div :class="$style['agree-list']">
        <ul :class="$style['agree-list__container']">
          <li :class="$style['agree-list__all']">
            <div :class="$style['agree-list__all-head']">
              <CheckBox
                id="layerEquipmentLeaseStateAgreeAll"
                :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>전체동의</CheckBoxLabelText>
              </CheckBox>
            </div>

            <div :class="$style['agree-list__all-contents']">
              <UiAccordion :classNames="{ wrap: $style['agree-list__depth'] }">
                <!-- 약관동의 : 개인(신용)정보 필수적 동의 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerEquipmentLeaseStateAgree_001"
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
                              id="layerEquipmentLeaseStateAgree_001_001"
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
                                    id="layerEquipmentLeaseStateAgree_001_001_001"
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
                                    id="layerEquipmentLeaseStateAgree_001_001_002"
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
                        <UiAccordionItem
                          :classNames="{ item: $style['agree-list__item'] }"
                          :initialOpen="true"
                        >
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerEquipmentLeaseStateAgree_001_002"
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
                                    id="layerEquipmentLeaseStateAgree_001_002_001"
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
                                    id="layerEquipmentLeaseStateAgree_001_002_002"
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
                              id="layerEquipmentLeaseStateAgree_001_003"
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
                                    id="layerEquipmentLeaseStateAgree_001_003_001"
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
                                    id="layerEquipmentLeaseStateAgree_001_003_002"
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
                <!-- // 약관동의 : 개인(신용)정보 필수적 동의 -->

                <!-- 약관동의 : 개인(신용)정보 선택적 수집, 이용동의 -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerEquipmentLeaseStateAgree_002"
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
                              id="layerEquipmentLeaseStateAgree_002_001"
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
                              id="layerEquipmentLeaseStateAgree_002_002"
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
                              id="layerEquipmentLeaseStateAgree_002_003"
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
                                  id="layerEquipmentLeaseStateAgree_002_003_001"
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
                                  id="layerEquipmentLeaseStateAgree_002_003_002"
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
                                  id="layerEquipmentLeaseStateAgree_002_003_003"
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
                                  id="layerEquipmentLeaseStateAgree_002_003_004"
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
                                  id="layerEquipmentLeaseStateAgree_002_003_005"
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
                <!-- // 약관동의 : 개인(신용)정보 선택적 수집, 이용동의 -->

                <!-- 약관동의 : 공공마이데이터 서비스 이용 전체동의(증빙서류 자동제출) -->
                <UiAccordionItem
                  :classNames="{ item: $style['agree-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerEquipmentLeaseStateAgree_003"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        공공마이데이터 서비스 이용 전체동의(증빙서류 자동제출)
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
                              id="layerEquipmentLeaseStateAgree_003_001"
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
                                  id="layerEquipmentLeaseStateAgree_003_001_001"
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
                                  id="layerEquipmentLeaseStateAgree_003_001_002"
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
                        </li>
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerEquipmentLeaseStateAgree_003_002"
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
                                  id="layerEquipmentLeaseStateAgree_003_002_001"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText>
                                    개인(신용)정보 제공 동의
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
                                  id="layerEquipmentLeaseStateAgree_003_002_002"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText>
                                    고유식별정보 제공 동의
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
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerEquipmentLeaseStateAgree_003_003"
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
                                  id="layerEquipmentLeaseStateAgree_003_003_001"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText>
                                    개인(신용)정보 제공(조회) 동의
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
                                  id="layerEquipmentLeaseStateAgree_003_003_002"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText>
                                    고유식별정보 제공(조회) 동의
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
                        <li :class="$style['agree-list__item']">
                          <div :class="$style['agree-list__head']">
                            <CheckBox
                              id="layerEquipmentLeaseStateAgree_003_004"
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
                                  id="layerEquipmentLeaseStateAgree_003_004_001"
                                  :classNames="{
                                    wrap: $style['agree-list__checkbox'],
                                  }"
                                  theme="quinary"
                                >
                                  <CheckBoxObject />
                                  <CheckBoxLabelText>
                                    본인 행정정보 제3자 제공 요구
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
                <!-- // 약관동의 : 공공마이데이터 서비스 이용 전체동의(증빙서류 자동제출) -->
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
@import '@/assets/scss/views/equipmentLease/LayerEquipmentLeaseStateAgree.scss';
</style>
