<script>
// MI_M01_l015
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
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
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
          서비스 이용약관에<br />
          동의해 주세요
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
                id="layerMyInfoJoinMembershipAgreeAll"
                :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>전체동의</CheckBoxLabelText>
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
                        id="layerMyInfoJoinMembershipAgree001"
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
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        id="layerMyInfoJoinMembershipAgree002"
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
                            id="layerMyInfoJoinMembershipAgree002_001"
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
                            id="layerMyInfoJoinMembershipAgree002_002"
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
                        id="layerMyInfoJoinMembershipAgree003"
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
                            id="layerMyInfoJoinMembershipAgree003_001"
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
                            id="layerMyInfoJoinMembershipAgree003_002"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="quinary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              고유식별정보의 처리에 대한 동의
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
                        id="layerMyInfoJoinMembershipAgree004"
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
                            id="layerMyInfoJoinMembershipAgree004_001"
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
                            id="layerMyInfoJoinMembershipAgree004_002"
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
                            id="layerMyInfoJoinMembershipAgree004_003"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="quinary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              고유식별정보 필수적 제공<br />
                              (하나손해보험㈜)
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
                        id="layerMyInfoJoinMembershipAgree005"
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
                        <RoundStatus
                          :classNames="{ wrap: 'display-block' }"
                          size="small"
                          theme="quinary"
                        >
                          보통
                        </RoundStatus>
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
                            id="layerMyInfoJoinMembershipAgree005_001"
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
                            id="layerMyInfoJoinMembershipAgree005_002"
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
                                id="layerMyInfoJoinMembershipAgree005_002_001"
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
                                id="layerMyInfoJoinMembershipAgree005_002_002"
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
                                id="layerMyInfoJoinMembershipAgree005_002_003"
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
                                id="layerMyInfoJoinMembershipAgree005_002_004"
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
                                id="layerMyInfoJoinMembershipAgree005_002_005"
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
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myInfo/LayerMyInfoJoinMembershipAgree.scss';
</style>
